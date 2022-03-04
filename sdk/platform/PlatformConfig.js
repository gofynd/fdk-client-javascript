const OauthClient = require("./OAuthClient");
const { setLoggerLevel } = require('../common/Logger');

class PlatformConfig {
  /**
   * @param  {Object} config
   * @param  {string} config.companyId
   * @param  {string} config.domain
   * @param  {string} config.apiKey
   * @param  {string} config.apiSecret
   */
  constructor(config) {
    this.companyId = config.companyId;
    this.domain = config.domain || 'https://api.fynd.com';
    this.apiKey = config.apiKey;
    this.apiSecret = config.apiSecret;
    this.oauthClient = new OauthClient(this);
    this.logLevel = config.logLevel || 'ERROR';
    this.setLogLevel(this.logLevel);
  }

  setLogLevel(level) {
    setLoggerLevel(level);
  }

  async getAccessToken() {
    let token = await this.oauthClient.getAccessToken();
    return token.access_token;
  }
}

module.exports = PlatformConfig;
