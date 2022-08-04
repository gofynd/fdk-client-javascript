const Configuration = require("./client/ConfigurationPublicClient");
const Webhook = require("./client/WebhookPublicClient");
const Inventory = require("./client/InventoryPublicClient");

const { FDKClientValidationError } = require("../common/FDKError");

class PublicClient {
  constructor(config) {
    this.config = config;
    this.configuration = new Configuration(config);
    this.webhook = new Webhook(config);
    this.inventory = new Inventory(config);
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

module.exports = PublicClient;
