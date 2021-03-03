const { fdkAxios } = require("../common/AxiosHelper");

class APIClient {
  static execute(conf, method, url, query, body) {
    const token = Buffer.from(
      `${conf.applicationID}:${conf.applicationToken}`,
      "utf8"
    ).toString("base64");

    const rawRequest = {
      baseURL: conf.domain,
      method: method,
      url: url,
      query: query,
      data: body,
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    return fdkAxios.request(rawRequest);
  }
}

module.exports = APIClient;
