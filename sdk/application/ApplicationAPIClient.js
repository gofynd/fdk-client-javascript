const { fdkAxios } = require("../common/AxiosHelper");
const { btoa } = require("isomorphic-base64");

/**
 * @typedef {Object} Options
 * @property {boolean} headers - Whether headers are returned or not.
 */

class APIClient {
  /**
   * @param {object} conf
   * @param {string} method
   * @param {string} url
   * @param {object} query
   * @param {object} body
   * @param {object} xHeaders
   */

  static execute(conf, method, url, query, body, xHeaders, options) {
    const token = btoa(`${conf.applicationID}:${conf.applicationToken}`);

    let headers = { Authorization: "Bearer " + token };
    if (conf.cookie) {
      headers = { ...headers, cookie: conf.cookie };
    }
    if (conf.locationDetails) {
      headers = {
        ...headers,
        "x-location-detail": JSON.stringify(conf.locationDetails),
      };
    }
    if (conf.currencyCode) {
      headers = { ...headers, "x-currency-code": conf.currencyCode };
    }
    const extraHeaders = conf.extraHeaders.reduce((acc, curr) => {
      acc = { ...acc, ...curr };
      return acc;
    }, {});

    let rawRequest = {
      method: method,
      url: url,
      params: query,
      data: body,
      headers: { ...headers, ...extraHeaders, ...xHeaders },
      _returnHeaders: options.headers,
    };
    rawRequest = JSON.parse(JSON.stringify(rawRequest));

    return fdkAxios.request(rawRequest);
  }
}

module.exports = APIClient;
