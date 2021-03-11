const querystring = require("querystring");
const crypto = require("crypto"); // this library needs to be changes as per frontend
const { fdkAxios } = require("../common/AxiosHelper");

class FdkTokenIssueError extends Error {
  constructor(message) {
    super(message);
  }
}
class FdkOAuthCodeError extends Error {
  constructor(message) {
    super(message);
  }
}
class OAuthClient {
  constructor(config) {
    this.config = config;
    this.token = null;
    this.refreshToken = null;
  }
  setToken(token) {
    this.token = token;
    this.refreshToken = this.token.refresh_token
      ? this.token.refresh_token
      : null;
  }
  __getState() {
    const length = 15;
    const bytes = crypto.randomBytes(length);
    const state = bytes
      .map((byte) => {
        return byte % 10;
      })
      .join("");
    return state;
  }
  startAuthorization(options) {
    let query = {
      client_id: this.config.apiKey,
      scope: options.scope.join(","),
      redirect_uri: options.redirectUri,
      state: this.__getState(),
      access_mode: options.isOnline ? "online" : "offline",
    };
    const queryString = querystring.stringify(query);
    // TODO: store state object in session storage
    return `https://${this.config.domain}/service/panel/authentication/v1.0/company/${this.config.companyId}/oauth/authorize?${queryString}`;
  }
  async verifyCallback(query) {
    if (query.error) {
      throw new FdkOAuthCodeError(query.error_description, {
        error: query.error,
      });
    }
    try {
      let reqData = {
        grant_type: "authorization_code",
        code: query.code,
      };
      const token = Buffer.from(
        `${this.config.apiKey}:${this.config.apiSecret}`,
        "utf8"
      ).toString("base64");
      let url = `https://${this.config.domain}/service/panel/authentication/v1.0/company/${this.config.companyId}/oauth/token`;
      const rawRequest = {
        method: "post",
        url: url,
        data: reqData,
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      let res = await fdkAxios.request(rawRequest);
      this.token = res;
      this.refreshToken = this.token.refresh_token;
    } catch (error) {
      if (error.isAxiosError) {
        throw new FdkTokenIssueError(error.message);
      }
      throw error;
    }
  }
  async getAccessToken() {
    if (this.token) {
      // Add check verify expiry
      return this.token;
    }
    if (!this.refreshToken) {
      return null;
    }
    try {
      let data = querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: this.refreshToken,
      });
      const token = Buffer.from(
        `${this.config.apiKey}:${this.config.apiSecret}`,
        "utf8"
      ).toString("base64");
      let url = `https://${this.config.domain}/service/panel/authentication/v1.0/company/${this.config.companyId}/oauth/token`;
      const rawRequest = {
        method: "post",
        url: url,
        data: data,
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      let result = await fdkAxios.request(rawRequest);
      this.token = result;
      this.refreshToken = this.token.refresh_token;
    } catch (error) {
      if (error.isAxiosError) {
        throw new FdkTokenIssueError(error.message);
      }
      throw error;
    }
  }
}

module.exports = OAuthClient;
