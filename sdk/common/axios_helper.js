const axios = require("axios");
const combineURLs = require("axios/lib/helpers/combineURLs");
const isAbsoluteURL = require("axios/lib/helpers/isAbsoluteURL");
const { sign } = require("./signature");

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
  

function interceptorFn(options) {
    return (config) => {

        if (!config.url) {
            throw new Error("No URL present in request config, unable to sign request");
        }

        let url = config.url;

        if (config.baseURL && !isAbsoluteURL(config.url)) {
            url = combineURLs(config.baseURL, config.url);
        }


        const {
            host,
            pathname,
            search
        } = new URL(url);
        const {
            data,
            headers,
            method
        } = config;

        const transformRequest = getTransformer(config);

        const transformedData = transformRequest(data, headers);

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
            path: pathname + search,
            body: transformedData,
            headers: headersToSign
        };
        sign(signingOptions);
        // console.log(signingOptions);

        config.headers = signingOptions.headers;
        console.log("config", config);
        return config;
    };
}

const axiosInstance = axios.create({
    baseURL: 'https://api.fynd.com',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});
axiosInstance.interceptors.request.use(interceptorFn({}));

exports.axiosInstance = axiosInstance;