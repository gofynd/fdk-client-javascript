const { fdkAxios } = require("../common/AxiosHelper");
const { FDKTokenIssueError } = require("../common/FDKError");
const { Logger } = require("../common/Logger");
const BaseOAuthClient = require("../common/BaseOAuthClient");
const querystring = require("querystring");
const { sign } = require("../common/RequestSigner");

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
      signQuery: true,
    };
    signingOptions = sign(signingOptions);
    Logger({ type: "DEBUG", message: "Authorization successful" });

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

  async getAccesstokenObj({ grant_type, client_id, client_secret, scope }) {
    Logger({ type: "DEBUG", message: "Processing Access token object..." });
    let reqData = {
      grant_type: grant_type,
      client_id,
      client_secret,
      scope,
    };
    let url = `${this.config.domain}/service/panel/authentication/v1.0/organization/${this.config.organizationId}/oauth/token`;
    return fdkAxios.post(url, reqData);
  }
}

module.exports = OAuthClient;
