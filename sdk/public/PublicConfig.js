/**
 * Represents the configuration for the public APIs.
 *
 * @class
 */
class PublicConfig {
  /**
   * Creates an instance of PublicConfig.
   *
   * @param {object} _conf - The configuration for the public APIs.
   * @param {string} [_conf.domain='https://api.fynd.com'] - The domain for
   *   API. Write the full domain. Default is `'https://api.fynd.com'`
   * @param {string} [_conf.userAgent=''] - The user agent for the API
   *   requests. Default is `''`
   * @param {string} [_conf.language] - The language for localization.
   * @param {string} [_conf.currency] - The currency for pricing and financial
   *   calculations.
   */
  constructor(_conf, _opts) {
    this.domain = _conf.domain || "https://api.fynd.com";
    this.userAgent = _conf.userAgent || "";
    this.language = _conf.language;
    this.currency = _conf.currency;
    this.extraHeaders = [];
  }
}

module.exports = PublicConfig;
