const { FdkAxios } = require("../../index.js");

function setAccesstoken(platformConfig) {
  let reqData = {
    grant_type: "client_credentials",
    client_id: platformConfig.apiKey,
    client_secret: platformConfig.apiSecret,
  };

  let url = `${platformConfig.domain}/service/panel/authentication/v1.0/company/${platformConfig.companyId}/oauth/token`;
  const rawRequest = {
    method: "post",
    url: url,
    data: reqData,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return FdkAxios.request(rawRequest);
}

module.exports = setAccesstoken;
