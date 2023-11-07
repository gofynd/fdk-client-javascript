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
   * @param {object} [options] - Additional options.
   * @param {boolean} [options.strictResponseCheck=false] - Strict check for
   *   response schema validation. Passing this `true` will check response
   *   against response schema and throw FDKResponseValidationError if it
   *   doesn't match. Default is `false`
   */
  constructor(_conf, options) {
    this.domain = _conf.domain || "https://api.fynd.com";
    this.userAgent = _conf.userAgent || "";
    this.language = _conf.language;
    this.currency = _conf.currency;
    this.extraHeaders = [];
    this.options = {
      ...{ strictResponseCheck: false },
      ...options,
    };
  }
}

module.exports = PublicConfig;
