const Partner = require("./Partner/PartnerPartnerClient");

const { FDKClientValidationError } = require("../common/FDKError");

/**
 * Represents the client for the partner APIs.
 *
 * @class
 */
class PartnerClient {
  /**
   * Creates an instance of PartnerClient.
   *
   * @param {import("./PartnerConfig")} config - The configuration for the
   *   partner client.
   */
  constructor(config) {
    this.config = config;
    this.partner = new Partner(config);
  }

  /**
   * Sets the extra headers for the partner client.
   *
   * @param {object} header - The header object to set.
   * @throws {FDKClientValidationError} When the provided header is not an object.
   */
  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

module.exports = PartnerClient;
