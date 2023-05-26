const Configuration = require("./Configuration/ConfigurationPublicClient");

const Webhook = require("./Webhook/WebhookPublicClient");

const { FDKClientValidationError } = require("../common/FDKError");

class PublicClient {
  constructor(config) {
    this.config = config;

    this.configuration = new Configuration(config);

    this.webhook = new Webhook(config);
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
