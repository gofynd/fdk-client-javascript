const { fdkAxios } = require("../common/AxiosHelper");

class PublicAPIClient {
  /**
   * @param {object} conf
   * @param {string} method
   * @param {string} url
   * @param {object} query
   * @param {object} body
   */

  static execute(conf, method, url, query, body) {
    let headers = {};
    headers["User-Agent"] = conf.userAgent ? conf.userAgent : "";
    headers["Accept-Language"] = conf.language ? conf.language : "en-IN";
    headers["x-currency-code"] = conf.currency ? conf.currency : "INR";

    const extraHeaders = conf.extraHeaders.reduce((acc, curr) => {
      acc = { ...acc, ...curr };
      return acc;
    }, {});

    const rawRequest = {
      method: method,
      url: url,
      params: query,
      data: body,
      headers: {
        ...headers,
        ...extraHeaders,
      },
    };
    return fdkAxios.request(rawRequest);
  }
}

module.exports = PublicAPIClient;
