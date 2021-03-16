const querystring = require("querystring");
const { fdkAxios } = require("../common/AxiosHelper");
const { sign } = require("../common/RequestSigner");

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

  startAuthorization(options) {
    let query = {
      client_id: this.config.apiKey,
      scope: options.scope.join(","),
      redirect_uri: options.redirectUri,
      state: options.state,
      access_mode: options.access_mode,
      response_type: "code",
    };
    const queryString = querystring.stringify(query);

    let reqPath = `/service/panel/authentication/v1.0/company/${this.config.companyId}/oauth/authorize?${queryString}`;
    let signingOptions = {
      method: "GET",
      host: this.config.domain,
      path: reqPath,
      body: null,
      headers: {},
      signQuery: true,
    };
    signingOptions = sign(signingOptions);

    return `https://${this.config.domain}${signingOptions.path}`;
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
        data: querystring.stringify(reqData),
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
