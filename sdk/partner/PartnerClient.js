const SwaggerTest = require("./SwaggerTest/SwaggerTestPartnerClient");

const { FDKClientValidationError } = require("../common/FDKError");

class PartnerClient {
  constructor(config) {
    this.config = config;
    this.swaggerTest = new SwaggerTest(config);
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

/**
 * @typedef TestResponse
 * @property {boolean} [success]
 */

module.exports = PartnerClient;
