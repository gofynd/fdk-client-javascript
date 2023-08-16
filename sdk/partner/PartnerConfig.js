const OauthClient = require("./OAuthClient");
const { setLoggerLevel } = require("../common/Logger");

class PartnerConfig {
  /**
   * @param {Object} config
   * @param {string} config.companyId
   * @param {string} config.domain
   * @param {string} config.apiKey
   * @param {string} config.apiSecret
   * @param {boolean} config.useAutoRenewTimer
   */
  constructor(config) {
    this.organizationId = config.organizationId;
    this.domain = config.domain || "https://api.fynd.com";
    this.apiKey = config.apiKey;
    this.apiSecret = config.apiSecret;
    (this.scope = config.scope),
      (this.useAutoRenewTimer =
        config.useAutoRenewTimer !== undefined
          ? config.useAutoRenewTimer
          : true);
    this.oauthClient = new OauthClient(this);
    this.logLevel = config.logLevel || "ERROR";
    this.setLogLevel(this.logLevel);
    this.extraHeaders = [];
  }

  setLogLevel(level) {
    setLoggerLevel(level);
  }

  async getAccessToken() {
    let token = await this.oauthClient.getAccessToken();
    return token.access_token;
  }
}

module.exports = PartnerConfig;
