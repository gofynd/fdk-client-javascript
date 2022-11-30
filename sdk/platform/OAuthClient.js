const querystring = require("query-string");
const { fdkAxios } = require("../common/AxiosHelper");
const { sign } = require("../common/RequestSigner");
const { FDKTokenIssueError, FDKOAuthCodeError } = require("../common/FDKError");
const { Logger } = require("../common/Logger");
const BaseOAuthClient = require("../common/BaseOAuthClient");

const refreshTokenRequestCache = {};
class OAuthClient extends BaseOAuthClient {
  constructor(config) {
    super(config);
  }

  startAuthorization(options) {
    Logger({ type: "INFO", message: "Starting Authorization..." });
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
      host: new URL(this.config.domain).host,
      path: reqPath,
      body: null,
      headers: {},
      signQuery: true,
    };
    signingOptions = sign(signingOptions);
    Logger({ type: "INFO", message: "Authorization successful.!" });

    return `${this.config.domain}${signingOptions.path}`;
  }

  async verifyCallback(query) {
    if (query.error) {
      throw new FDKOAuthCodeError(query.error_description, {
        error: query.error,
      });
    }

    try {
      let res = await this.getAccesstokenObj({
        grant_type: "authorization_code",
        code: query.code,
      });
      res.expires_at =
        res.expires_at || new Date().getTime() + res.expires_in * 1000;
      this.setToken(res);
    } catch (error) {
      if (error.isAxiosError) {
        throw new FDKTokenIssueError(error.message);
      }
      throw error;
    }
  }

  async renewAccessToken(isOfflineToken = false) {
    try {
      Logger({ type: "INFO", message: "Renewing Access token..." });
      let res;
      if (isOfflineToken) {
        let requestCacheKey = `${this.config.apiKey}:${this.config.companyId}`;
        if (!refreshTokenRequestCache[requestCacheKey]) {
          refreshTokenRequestCache[requestCacheKey] = this.getAccesstokenObj({
            grant_type: "refresh_token",
            refresh_token: this.refreshToken,
          });
        }
        res = await refreshTokenRequestCache[requestCacheKey].finally(() => {
          delete refreshTokenRequestCache[requestCacheKey];
        });
      } else {
        res = await this.getAccesstokenObj({
          grant_type: "refresh_token",
          refresh_token: this.refreshToken,
        });
      }
      res.expires_at =
        res.expires_at || new Date().getTime() + res.expires_in * 1000;
      this.setToken(res);
      Logger({ type: "INFO", message: "Done." });
      return res;
    } catch (error) {
      if (error.isAxiosError) {
        throw new FDKTokenIssueError(error.message);
      }
      throw error;
    }
  }

  async getAccesstokenObj({ grant_type, refresh_token, code }) {
    Logger({ type: "INFO", message: "Processing Access token object..." });
    let reqData = {
      grant_type: grant_type,
    };
    if (grant_type === "refresh_token") {
      reqData = { ...reqData, refresh_token };
    } else if (grant_type === "authorization_code") {
      reqData = { ...reqData, code };
    }

    const token = Buffer.from(
      `${this.config.apiKey}:${this.config.apiSecret}`,
      "utf8"
    ).toString("base64");
    let url = `${this.config.domain}/service/panel/authentication/v1.0/company/${this.config.companyId}/oauth/token`;
    const rawRequest = {
      method: "post",
      url: url,
      data: querystring.stringify(reqData),
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    Logger({ type: "INFO", message: "Done." });
    return fdkAxios.request(rawRequest);
  }

  async getOfflineAccessToken(scopes, code) {
    try {
      let res = await this.getOfflineAccessTokenObj(scopes, code);
      res.expires_at =
        res.expires_at || new Date().getTime() + res.expires_in * 1000;
      this.setToken(res);
      return res;
    } catch (error) {
      if (error.isAxiosError) {
        throw new FDKTokenIssueError(error.message);
      }
      throw error;
    }
  }

  async getOfflineAccessTokenObj(scopes, code) {
    let url = `${this.config.domain}/service/panel/authentication/v1.0/company/${this.config.companyId}/oauth/offline-token`;
    let data = {
      client_id: this.config.apiKey,
      client_secret: this.config.apiSecret,
      grant_type: "authorization_code",
      scope: scopes,
      code: code,
    };
    const token = Buffer.from(
      `${this.config.apiKey}:${this.config.apiSecret}`,
      "utf8"
    ).toString("base64");
    const rawRequest = {
      method: "post",
      url: url,
      data: data,
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/json",
      },
    };
    return fdkAxios.request(rawRequest);
  }
}

module.exports = OAuthClient;
