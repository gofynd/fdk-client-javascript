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

    conf.userAgent ? headers["User-Agent"] : conf.userAgent;
    conf.language ? headers["Accept-Language"] : conf.language;
    conf.currency ? headers["x-currency-code"] : conf.currency;

    const rawRequest = {
      method: method,
      url: url,
      params: query,
      data: body,
      headers,
    };
    return fdkAxios.request(rawRequest);
  }
}

module.exports = PublicAPIClient;
