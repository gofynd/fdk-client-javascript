const Catalog = require("./Catalog/CatalogPublicClient");

const Configuration = require("./Configuration/ConfigurationPublicClient");

const Content = require("./Content/ContentPublicClient");

const Partner = require("./Partner/PartnerPublicClient");

const Webhook = require("./Webhook/WebhookPublicClient");

const { FDKClientValidationError } = require("../common/FDKError");
const PublicConfig = require("./PublicConfig");

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
  constructor(config, options) {
    if (config instanceof PublicConfig) {
      this.config = config;
    } else {
      let publicConfig = new PublicConfig(config, options);
      this.config = publicConfig;
    }

    this.catalog = new Catalog(this.config);

    this.configuration = new Configuration(this.config);

    this.content = new Content(this.config);

    this.partner = new Partner(this.config);

    this.webhook = new Webhook(this.config);
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
