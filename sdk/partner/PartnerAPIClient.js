const { fdkAxios } = require("../common/AxiosHelper");

class APIClient {
  /**
   * @param {object} conf
   * @param {string} method
   * @param {string} url
   * @param {object} query
   * @param {object} body
   */
  static async execute(conf, method, url, query, body) {
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
