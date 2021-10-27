const combineURLs = require("axios/lib/helpers/combineURLs");
const isAbsoluteURL = require("axios/lib/helpers/isAbsoluteURL");
const axios = require("axios");
const querystring = require("query-string");
const { sign } = require("./RequestSigner");
const { FDKServerResponseError } = require("./FDKError");
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
    headers["x-fp-sdk-version"] = "0.1.9";
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
    sign(signingOptions);

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

fdkAxios.interceptors.request.use(requestInterceptorFn());
fdkAxios.interceptors.response.use(
  function (response) {
    if (response.config.method == "head") {
      return response.headers;
    }
    return response.data; // IF 2XX then return response.data only
  },
  function (error) {
    if (error.response) {
      // Request made and server responded
      throw new FDKServerResponseError(
        error.response.data.message || error.message,
        error.response.data.stack || error.stack,
        error.response.statusText,
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // The request was made but no error.response was received
      throw new FDKServerResponseError(
        error.message,
        error.stack,
        error.code,
        error.code
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new FDKServerResponseError(error.message, error.stack);
    }
  }
);

module.exports = {
  fdkAxios,
};
