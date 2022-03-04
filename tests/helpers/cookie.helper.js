const { FdkAxios } = require("../../index.js");
const cookie = {};

function setupCookieInterceptor() {
  FdkAxios.interceptors.request.handlers.push({
    fulfilled: function (response) {
      if (cookie[response.baseURL]) {
        console.log("setting up cookies");
        response.headers["cookie"] = cookie[response.baseURL];
      }
      return response;
    },
    rejected: function (err) {
      return Promise.reject(err);
    },
  });
  FdkAxios.interceptors.response.handlers.unshift({
    fulfilled: function (response) {
      if (response && response.headers && response.headers["set-cookie"]) {
        cookie[response.config.baseURL] = response.headers["set-cookie"].join(
          " ; "
        );
      }
      return response;
    },
    rejected: function (err) {
      return Promise.reject(err);
    },
  });
}
module.exports = setupCookieInterceptor;
