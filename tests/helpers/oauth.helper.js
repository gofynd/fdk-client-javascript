const { FdkAxios } = require("../../index.js");

async function setAccesstoken(platformConfig) {
  await loginUser(platformConfig);
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

async function loginUser(platformConfig) {
  const skywarpURL = `${platformConfig.domain}/service/panel/authentication/v1.0/auth/login/password`;
  const userData = {
    username: process.env.APP_USERNAME,
    password: process.env.PASSWORD,
    "g-recaptcha-response": "_skip_",
  };
  const rawRequest = {
    method: "post",
    url: skywarpURL,
    data: userData,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return FdkAxios.request(rawRequest);
}

module.exports = setAccesstoken;
