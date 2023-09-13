const combineURLs = require("axios/lib/helpers/combineURLs");
const isAbsoluteURL = require("axios/lib/helpers/isAbsoluteURL");
const axios = require("axios");
const querystring = require("query-string");
const { sign } = require("@gofynd/fp-signature");
const { FDKServerResponseError } = require("./FDKError");
const { log, Logger, getLoggerLevel } = require("./Logger");
const createCurl = require("./curlHelper");
const { version } = require("./../../package.json");
axios.defaults.withCredentials = true;

function getTransformer(config) {
  const { transformRequest } = config;

  if (transformRequest) {
    if (typeof transformRequest === "function") {
      return transformRequest;
    } else if (transformRequest.length) {
      return transformRequest[0];
    }
  }

  throw new Error(
    "Could not get default transformRequest function from Axios defaults"
  );
}

function requestInterceptorFn() {
  return (config) => {
    if (!config.url) {
      throw new Error(
        "No URL present in request config, unable to sign request"
      );
    }

    let url = config.url;
    if (config.baseURL && !isAbsoluteURL(config.url)) {
      url = combineURLs(config.baseURL, config.url);
    }
    const { host, pathname, search } = new URL(url);
    const { data, headers, method, params } = config;
    headers["x-fp-sdk-version"] = version;
    let querySearchObj = querystring.parse(search);
    querySearchObj = { ...querySearchObj, ...params };
    let queryParam = "";
    if (querySearchObj && Object.keys(querySearchObj).length) {
      if (querystring.stringify(querySearchObj).trim() !== "") {
        queryParam = `?${querystring.stringify(querySearchObj)}`;
      }
    }
    let transformedData;
    if (method != "get") {
      const transformRequest = getTransformer(config);
      transformedData = transformRequest(data, headers);
    }

    // Remove all the default Axios headers
    const {
      common,
      delete: _delete, // 'delete' is a reserved word
      get,
      head,
      post,
      put,
      patch,
      ...headersToSign
    } = headers;

    const signingOptions = {
      method: method && method.toUpperCase(),
      host: host,
      path: pathname + search + queryParam,
      body: transformedData,
      headers: headersToSign,
    };
    sign(signingOptions, "1234567");

    config.headers["x-fp-date"] = signingOptions.headers["x-fp-date"];
    config.headers["x-fp-signature"] = signingOptions.headers["x-fp-signature"];
    // config.headers["fp-sdk-version"] = version;
    return config;
  };
}
const fdkAxios = axios.create({
  paramsSerializer: (params) => {
    return querystring.stringify(params);
  },
});

// Generate Curl in debug mode
fdkAxios.interceptors.request.use(
  function (request) {
    try {
      const logLevel = getLoggerLevel();
      if (logLevel <= log.levels.DEBUG) {
        const curl = createCurl(request);
        log.debug(curl);
      }
    } catch (error) {
      Logger({ level: "ERROR", message: `Error Generating Curl: ${error}` });
    } finally {
      return request;
    }
  },
  function (error) {
    Logger({
      level: "ERROR",
      message: error.data || error.message,
      stack: error.data.stack || error.stack,
    });
  }
);

fdkAxios.interceptors.request.use(requestInterceptorFn());
fdkAxios.interceptors.response.use(
  function (response) {
    if (response.config.method == "head") {
      return response.headers;
    }
    Logger({
      level: "DEBUG",
      type: "RESPONSE",
      message: response.data,
      url: response.config.url,
    });

    if (response.config.responseHeaders) {
      return [response.data, response.headers];
    }
    return response.data;
  },
  function (error) {
    if (error.response) {
      // Request made and server responded
      Logger({
        level: "ERROR",
        message: error.response.data || error.message,
        stack: error.response.data.stack || error.stack,
      });
      throw new FDKServerResponseError(
        error.response.data.message || error.message,
        error.response.data.stack || error.stack,
        error.response.statusText,
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // The request was made but no error.response was received
      Logger({
        level: "ERROR",
        message: error.data || error.message,
        stack: error.data.stack || error.stack,
      });
      throw new FDKServerResponseError(
        error.message,
        error.stack,
        error.code,
        error.code
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      Logger({ level: "ERROR", message: error.message });
      throw new FDKServerResponseError(error.message, error.stack);
    }
  }
);

module.exports = {
  fdkAxios,
};
