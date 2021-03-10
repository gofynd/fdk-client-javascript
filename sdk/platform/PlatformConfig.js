const OauthClient = require("./OAuthClient");
class PlatformConfig {
  /**
   * @param  {Object} config
   * @param  {string} config.apiKey
   * @param  {string} config.company
   * @param  {string} config.baseUrl
   */
  constructor(config) {
    this.apiKey = config.apiKey;
    this.apiSecret = config.apiSecret;
    this.company = config.company;
    this.baseUrl = config.baseUrl;
    this.oauthClient = new OauthClient(this);
  }
  async getAccessToken() {
    let token = await this.oauthClient.getAccessToken();
    return token.access_token;
  }
}

module.exports = PlatformConfig;
