const { fdkAxios } = require("../common/AxiosHelper");
const { FDKTokenIssueError } = require("../common/FDKError");
const { Logger } = require("../common/Logger");
const BaseOAuthClient = require("../common/BaseOAuthClient");

class OAuthClient extends BaseOAuthClient {
  constructor(config) {
    super(config);
  }

  async renewAccessToken() {
    await this.getNewAccessToken();
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
