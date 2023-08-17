const { fdkAxios } = require("../common/AxiosHelper");

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
   * @param {Options} options
   */
  static async execute(conf, method, url, query, body, options) {
    const token = await conf.oauthClient.getNewAccessToken();

    const extraHeaders = conf.extraHeaders.reduce((acc, curr) => {
      acc = { ...acc, ...curr };
      return acc;
    }, {});

    const rawRequest = {
      baseURL: conf.domain,
      method: method,
      url: url,
      params: query,
      data: body,
      headers: {
        Authorization: "Bearer " + token,
        ...extraHeaders,
      },
      _returnHeaders: options.headers,
    };

    return fdkAxios.request(rawRequest);
  }

  async get(url, config) {
    let access_token = await this.configuration.getAccessToken();
    config = config || {};
    config.headers = config.headers || {};
    config.headers.Authorization = "Bearer " + access_token;
    return axios.get(url);
  }
}
module.exports = APIClient;
