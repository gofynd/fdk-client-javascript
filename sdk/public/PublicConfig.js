class PublicConfig {
  /** @param {object} _conf */
  constructor(_conf, _opts) {
    this.domain = _conf.domain || "https://api.fynd.com";
    this.userAgent = _conf.userAgent || "";
    this.language = _conf.language;
    this.currency = _conf.currency;
    this.extraHeaders = [];
  }
}

module.exports = PublicConfig;
