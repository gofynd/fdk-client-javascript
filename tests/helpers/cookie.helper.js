const { FdkAxios } = require("../../index.js");
const { CookieJar } = require("tough-cookie");
const { wrapper } = require("axios-cookiejar-support");

wrapper(FdkAxios);
const cookieJar = new CookieJar();
FdkAxios.defaults.jar = cookieJar;

module.exports = { cookieJar };
