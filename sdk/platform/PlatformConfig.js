const OauthClient = require("./OAuthClient");
class PlatformConfig {
  /**
   * @param {Object} config
   * @param {string} config.companyId
   * @param {string} config.domain
   * @param {string} config.apiKey
   * @param {string} config.apiSecret
   */
  constructor(config) {
    this.companyId = config.companyId;
    this.domain = config.domain || "https://api.fyndx0.de";
    this.apiKey = config.apiKey;
    this.apiSecret = config.apiSecret;
    this.oauthClient = new OauthClient(this);
  }
  async getAccessToken() {
    let token = await this.oauthClient.getAccessToken();
    return token.access_token;
  }
}

module.exports = PlatformConfig;
