const OauthClient = require("./OAuthClient");
const { setLoggerLevel } = require("../common/Logger");

/**
 * Represents the configuration for the partner.
 *
 * @class
 */
class PartnerConfig {
  /** @typedef {"TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR"} logLevelEnum */

  /**
   * Creates an instance of PartnerConfig.
   *
   * @param {Object} config - The partner configuration.
   * @param {string} config.organizationId - The ID of the organization.
   * @param {string} [config.domain='https://api.fynd.com'] - The domain for
   *   API. Write the full domain. Default is `'https://api.fynd.com'`
   * @param {string} config.apiKey - The API key for authentication.
   * @param {string} config.apiSecret - The API secret for authentication.
   * @param {string} [config.scope] - The scope of the partner.
   * @param {boolean} [config.useAutoRenewTimer=true] - Flag indicating whether
   *   to use the auto-renew timer. Default is `true`
   * @param {logLevelEnum} [config.logLevel='ERROR'] - The log level. Available
   *   options: TRACE, DEBUG, INFO, WARN, ERROR. Default is `'ERROR'`
   * @param {object} [options] - Additional options.
   * @param {boolean} [options.strictResponseCheck=false] - Strict check for
   *   response schema validation. Passing this `true` will check response
   *   against response schema and throw FDKResponseValidationError if it
   *   doesn't match. Default is `false`
   */
  constructor(config, options) {
    this.organizationId = config.organizationId;
    this.domain = config.domain || "https://api.fynd.com";
    this.apiKey = config.apiKey;
    this.apiSecret = config.apiSecret;
    this.scope = config.scope;
    this.useAutoRenewTimer =
      config.useAutoRenewTimer !== undefined ? config.useAutoRenewTimer : true;
    this.oauthClient = new OauthClient(this);
    this.logLevel = config.logLevel || "ERROR";
    this.setLogLevel(this.logLevel);
    this.extraHeaders = [];
    this.options = {
      ...{ strictResponseCheck: false },
      ...options,
    };
  }

  /**
   * Sets the log level for the partner.
   *
   * @param {logLevelEnum} level - The log level to set.
   */
  setLogLevel(level) {
    setLoggerLevel(level);
  }

  /**
   * Retrieves the access token from the OAuth client.
   *
   * @async
   * @returns {Promise<string>} - The access token.
   */
  async getAccessToken() {
    let token = await this.oauthClient.getAccessToken();
    return token.access_token;
  }
}

module.exports = PartnerConfig;
