const OauthClient = require("./OAuthClient");
const { setLoggerLevel } = require("../common/Logger");

/**
 * Represents the configuration for the platform.
 *
 * @class
 */
class PlatformConfig {
  /** @typedef {"TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR"} logLevelEnum */

  /**
   * Creates an instance of PlatformConfig.
   *
   * @param {Object} config - The platform configuration.
   * @param {string} config.companyId - The ID of the company.
   * @param {string} [config.domain='https://api.fynd.com'] - The domain for
   *   API. Write the full domain. Default is `'https://api.fynd.com'`
   * @param {string} config.apiKey - The API key for authentication.
   * @param {string} config.apiSecret - The API secret for authentication.
   * @param {boolean} [config.useAutoRenewTimer=true] - Flag indicating whether
   *   to use the auto-renew timer. Setting `true` will use timer based logic to
   *   refresh the access token. With `false` will issue refresh token just
   *   before any api call when it is expired. Default is `true`
   * @param {logLevelEnum} [config.logLevel='ERROR'] - The log level. Available
   *   options: TRACE, DEBUG, INFO, WARN, ERROR. Default is `'ERROR'`
   * @param {object} [options] - Additional options.
   * @param {boolean} [options.strictResponseCheck=false] - Strict check for
   *   response schema validation. Passing this `true` will check response
   *   against response schema and throw FDKResponseValidationError if it
   *   doesn't match. Default is `false`
   */
  constructor(config, options) {
    this.companyId = config.companyId;
    this.domain = config.domain || "https://api.fynd.com";
    this.apiKey = config.apiKey;
    this.apiSecret = config.apiSecret;
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
   * Sets the log level for the platform.
   *
   * @param {logLevelEnum} level - The log level to set.
   */
  setLogLevel(level) {
    setLoggerLevel(level.toUpperCase());
    this.logLevel = level.toUpperCase();
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

module.exports = PlatformConfig;
