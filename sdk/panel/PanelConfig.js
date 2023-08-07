const { Logger, setLoggerLevel } = require("../common/Logger");

class PanelConfig {
  /** @param {object} _conf */
  constructor(_conf) {
    this.domain = _conf.domain || "https://api.fynd.com";
    this.extraHeaders = [];
    this.logLevel = _conf.logLevel || "ERROR";
    this.setLogLevel(this.logLevel);
  }

  setLogLevel(level) {
    setLoggerLevel(level);
  }
}

module.exports = PanelConfig;
