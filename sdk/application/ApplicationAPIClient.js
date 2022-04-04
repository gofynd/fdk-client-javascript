const { fdkAxios } = require("../common/AxiosHelper");

class APIClient {
  /**
   * @param {object} conf
   * @param {string} method
   * @param {string} url
   * @param {object} query
   * @param {object} body
   */

  static execute(conf, method, url, query, body) {
    const token = Buffer.from(
      `${conf.applicationID}:${conf.applicationToken}`,
      "utf8"
    ).toString("base64");

    let headers = { Authorization: "Bearer " + token };
    if (conf.cookie) {
      headers = { ...headers, cookie: conf.cookie };
    }
    if (conf.locationDetails) {
      headers = { ...headers, "x-location-detail": conf.locationDetails };
    }
    const extraHeaders = conf.extraHeaders.reduce((acc, curr) => {
      acc = { ...acc, ...curr };
      return acc;
    }, {});

    const rawRequest = {
      method: method,
      url: url,
      params: query,
      data: body,
      headers: { ...headers, ...extraHeaders },
    };
    return fdkAxios.request(rawRequest);
  }
}

module.exports = APIClient;
