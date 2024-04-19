const Joi = require("joi");

const WebhookPublicModel = require("./WebhookPublicModel");

/** @typedef FetchAllWebhookEventsParam */

/**
 * @typedef QueryWebhookEventDetailsParam
 * @property {WebhookPublicModel.EventConfigBase[]} body
 */

class WebhookPublicValidator {
  /** @returns {FetchAllWebhookEventsParam} */
  static fetchAllWebhookEvents() {
    return Joi.object({});
  }

  /** @returns {QueryWebhookEventDetailsParam} */
  static queryWebhookEventDetails() {
    return Joi.object({
      body: Joi.array().items(WebhookPublicModel.EventConfigBase()).required(),
    }).required();
  }
}

module.exports = WebhookPublicValidator;
