const FileStorage = require("./FileStorage/FileStoragePartnerClient");

const Lead = require("./Lead/LeadPartnerClient");

const Logistics = require("./Logistics/LogisticsPartnerClient");

const Theme = require("./Theme/ThemePartnerClient");

const Webhook = require("./Webhook/WebhookPartnerClient");

const { FDKClientValidationError } = require("../common/FDKError");
const { execute } = require("./PartnerAPIClient");
const PartnerConfig = require("./PartnerConfig");

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
  constructor(config, options) {
    if (config instanceof PartnerConfig) {
      this.config = config;
    } else {
      let partnerConfig = new PartnerConfig(config, options);
      this.config = partnerConfig;
    }
    this.fileStorage = new FileStorage(this.config);
    this.lead = new Lead(this.config);
    this.logistics = new Logistics(this.config);
    this.theme = new Theme(this.config);
    this.webhook = new Webhook(this.config);
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
    return await execute(this.config, method, url, query, body, headers, {
      responseHeaders,
    });
  }

  getAccesstokenObj(options) {
    return this.config.oauthClient.getAccesstokenObj(options);
  }

  setToken(token) {
    this.config.oauthClient.setToken(token);
  }
}

module.exports = PartnerClient;
