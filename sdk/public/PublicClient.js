const Billing = require("./Billing/BillingPublicClient");

const Configuration = require("./Configuration/ConfigurationPublicClient");

const Content = require("./Content/ContentPublicClient");

const Inventory = require("./Inventory/InventoryPublicClient");

const Partner = require("./Partner/PartnerPublicClient");

const Webhook = require("./Webhook/WebhookPublicClient");

const { FDKClientValidationError } = require("../common/FDKError");

/**
 * Represents the client for the public APIs.
 *
 * @class
 */
class PublicClient {
  /**
   * Creates an instance of PublicClient.
   *
   * @param {import("./PublicConfig")} config - The configuration for the public client.
   */
  constructor(config) {
    this.config = config;

    this.billing = new Billing(config);

    this.configuration = new Configuration(config);

    this.content = new Content(config);

    this.inventory = new Inventory(config);

    this.partner = new Partner(config);

    this.webhook = new Webhook(config);
  }

  /**
   * Sets the extra headers for the public client.
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

module.exports = PublicClient;
