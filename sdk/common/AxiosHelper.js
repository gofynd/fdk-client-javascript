const combineURLs = require("axios/lib/helpers/combineURLs");
const isAbsoluteURL = require("axios/lib/helpers/isAbsoluteURL");
const axios = require("axios");
const querystring = require("query-string");
const { sign } = require("@gofynd/fp-signature");
const { FDKServerResponseError } = require("./FDKError");
const { log, Logger, getLoggerLevel } = require("./Logger");
const createCurl = require("./curlHelper");
const { version } = require("./../../package.json");
const Clickstream = require("flick");
const { convertStringToBase64 } = require("./utils");

axios.defaults.withCredentials = true;

clickstreamEnabled = false;

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
  console.log("########### inside response interceptor #############");
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
    const signature = sign(signingOptions);

    config.headers["x-fp-date"] = signature["x-fp-date"];
    config.headers["x-fp-signature"] = signature["x-fp-signature"];
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
    if (!clickstreamEnabled && typeof window != "undefined") {
      //Clickstream.initialize("testnk")
      const urlObject = new URL(response.config.url);
      const baseUrl = `${urlObject.protocol}//${urlObject.hostname}${
        urlObject.port ? `:${urlObject.port}` : ""
      }`;
      console.log("priting base url", baseUrl);
      Clickstream.initialize(
        baseUrl,
        convertStringToBase64(
          window.config.application._id + ":" + window.config.application.token
        )
      );
      require("./Clickstream");
      clickstreamEnabled = true;
    }

    // if (response.config.url.includes('/product','/follow/products', '/checkout', '/cart/v1.0/detail')) {
    //   // track event
    //   if(response.config.url.includes('/follow/products') && response.config.method == 'post') {
    //     Clickstream.sendEvent("product_wishlisted", { "event_type": "click", ...response.data }).then((resp) => {
    //       console.log("Event sent succesfully")
    //     }).catch(err => {
    //       console.error(err)
    //     })
    //   }
    // }

    return response.data;
  },
  function (error) {
    if (error.response) {
      // Request made and server responded
      Logger({
        level: "ERROR",
        message: error.response.data || error.message,
        stack: error.response.data.stack || error.stack,
        request: {
          method: error.config.method,
          url: error.config.url,
          headers: error.config.headers,
        },
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
        request: {
          method: error.config.method,
          url: error.config.url,
          headers: error.config.headers,
        },
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
