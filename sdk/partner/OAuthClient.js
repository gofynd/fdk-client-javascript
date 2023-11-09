const { fdkAxios } = require("../common/AxiosHelper");
const { FDKTokenIssueError, FDKOAuthCodeError } = require("../common/FDKError");
const { Logger } = require("../common/Logger");
const BaseOAuthClient = require("../common/BaseOAuthClient");
const querystring = require("query-string");
const { sign } = require("@gofynd/fp-signature");
const { convertStringToBase64 } = require("../common/utils");

class OAuthClient extends BaseOAuthClient {
  constructor(config) {
    super(config);
  }

  startAuthorization(options) {
    Logger({ type: "DEBUG", message: "Starting Authorization" });
    let query = {
      client_id: this.config.apiKey,
      scope: options.scope.join(","),
      redirect_uri: options.redirectUri,
      state: options.state,
      access_mode: options.access_mode,
      response_type: "code",
      extension_id: this.config.extensionId,
    };
    const queryString = querystring.stringify(query);

    let reqPath = `/service/panel/authentication/v1.0/organization/${this.config.organizationId}/oauth/authorize?${queryString}`;
    let signingOptions = {
      method: "GET",
      host: new URL(this.config.domain).host,
      path: reqPath,
      body: null,
      headers: {},
    };
    const signature = sign(signingOptions, {
      signQuery: true,
    });
    Logger({ type: "DEBUG", message: "Authorization successful" });

    const urlObj = new URL(reqPath, this.config.domain);
    urlObj.searchParams.set("x-fp-date", signature["x-fp-date"]);
    urlObj.searchParams.set("x-fp-signature", signature["x-fp-signature"]);

    return urlObj.href;
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

      this.setToken(res);
      this.token_expires_at =
        new Date().getTime() + this.token_expires_in * 1000;
    } catch (error) {
      if (error.isAxiosError) {
        throw new FDKTokenIssueError(error.message);
      }
      throw error;
    }
  }

  async renewAccessToken(isOfflineToken = true) {
    if (isOfflineToken) {
      await this.getNewAccessToken();
    } else {
      res = await this.getAccesstokenObj({
        grant_type: "refresh_token",
        refresh_token: this.refreshToken,
      });
      res.expires_at =
        res.expires_at || new Date().getTime() + res.expires_in * 1000;
      this.setToken(res);
      return res;
    }
  }

  async getNewAccessToken() {
    try {
      let res = await this.getAccesstokenObj({
        grant_type: "client_credentials",
        client_id: this.config.apiKey,
        client_secret: this.config.apiSecret,
        scope: this.config.scope,
      });
      res.expires_at =
        res.expires_at || new Date().getTime() + res.expires_in * 1000;
      this.setToken(res);
      return this.token;
    } catch (error) {
      if (error.isAxiosError) {
        throw new FDKTokenIssueError(error.message);
      }
      throw error;
    }
  }

  async getAccesstokenObj({ grant_type, refresh_token, code }) {
    Logger({
      type: "DEBUG",
      message: "Processing partner access token object...",
    });

    let reqData = {
      grant_type: grant_type,
    };

    if (grant_type === "refresh_token") {
      reqData = { ...reqData, refresh_token };
    } else if (grant_type === "authorization_code") {
      reqData = { ...reqData, code };
    }

    const token = convertStringToBase64(
      `${this.config.apiKey}:${this.config.apiSecret}`
    );

    let url = `${this.config.domain}/service/panel/authentication/v1.0/organization/${this.config.organizationId}/oauth/token`;
    const rawRequest = {
      method: "POST",
      url: url,
      data: querystring.stringify(reqData),
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    Logger({ level: "INFO", message: "Done." });
    return fdkAxios.request(rawRequest);
  }

  async getOfflineAccessToken(scopes, code) {
    try {
      let res = await this.getOfflineAccessTokenObj(scopes, code);
      this.setToken(res);
      this.token_expires_at =
        new Date().getTime() + this.token_expires_in * 1000;
      return res;
    } catch (error) {
      if (error.isAxiosError) {
        throw new FDKTokenIssueError(error.message);
      }
      throw error;
    }
  }

  async getOfflineAccessTokenObj(scopes, code) {
    Logger({ type: "DEBUG", message: "Fetching partner offline token" });

    let url = `${this.config.domain}/service/panel/authentication/v1.0/organization/${this.config.organizationId}/oauth/offline-token`;

    let data = {
      client_id: this.config.apiKey,
      client_secret: this.config.apiSecret,
      grant_type: "authorization_code",
      scope: scopes,
      code: code,
    };

    const token = convertStringToBase64(
      `${this.config.apiKey}:${this.config.apiSecret}`
    );

    const rawRequest = {
      method: "POST",
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
