const { fdkAxios } = require("../common/AxiosHelper");

class PanelAPIClient {
  /**
   * @param {object} conf
   * @param {string} method
   * @param {string} url
   * @param {object} query
   * @param {object} body
   */

  static execute(conf, method, url, query, body, xHeaders) {
    let headers = {};

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
        ...xHeaders,
      },
    };
    return fdkAxios.request(rawRequest);
  }
}

module.exports = PanelAPIClient;
