const { FDKClientValidationError } = require("../common/FDKError");

class PartnerClient {
  constructor(config) {
    this.config = config;
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

module.exports = PartnerClient;
