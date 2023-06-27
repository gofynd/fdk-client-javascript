const Joi = require("joi");

const WebhookPublicModel = require("./WebhookPublicModel");

/** @typedef fetchAllWebhookEvents */

/**
 * @typedef queryWebhookEventDetails
 * @property {WebhookPublicModel.EventConfigBase[]} body
 */

class WebhookPublicValidator {
  /** @returns {fetchAllWebhookEvents} */
  static fetchAllWebhookEvents() {
    return Joi.object({});
  }

  /** @returns {queryWebhookEventDetails} */
  static queryWebhookEventDetails() {
    return Joi.object({
      body: Joi.array().items(WebhookPublicModel.EventConfigBase()).required(),
    }).required();
  }
}

module.exports = WebhookPublicValidator;
