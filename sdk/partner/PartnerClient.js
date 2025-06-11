const FileStorage = require("./FileStorage/FileStoragePartnerClient");

const Lead = require("./Lead/LeadPartnerClient");

const Logistics = require("./Logistics/LogisticsPartnerClient");

const Theme = require("./Theme/ThemePartnerClient");

const Webhook = require("./Webhook/WebhookPartnerClient");

const { FDKClientValidationError } = require("../common/FDKError");
const PartnerAPIClient = require("./PartnerAPIClient");

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
    this.fileStorage = new FileStorage(config);
    this.lead = new Lead(config);
    this.logistics = new Logistics(config);
    this.theme = new Theme(config);
    this.webhook = new Webhook(config);
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

  async request({
    method,
    url,
    query,
    body,
    headers,
    responseHeaders = false,
  }) {
    return await PartnerAPIClient.execute(
      this.config,
      method,
      url,
      query,
      body,
      headers,
      {
        responseHeaders,
      }
    );
  }
}

module.exports = PartnerClient;
