class PublicConfig {
  /** @param {object} _conf */
  constructor(_conf, _opts) {
    this.domain = _conf.domain || "https://api.fynd.com";
    this.userAgent = _conf.applicationToken || "";
    this.language = _conf.language;
    this.currency = _conf.currency;
  }
}

module.exports = PublicConfig;
