const Joi = require("joi");

const WebhookPublicModel = require("./WebhookPublicModel");

/** @typedef FetchAllWebhookEventsParam */

/** @typedef NotifyDepricatedEventParam */

/**
 * @typedef QueryWebhookEventDetailsParam
 * @property {WebhookPublicModel.EventConfigBase[]} body
 */

/**
 * @typedef TestHandlerTransformationParam
 * @property {WebhookPublicModel.TransformEventRequest} body
 */

/**
 * @typedef ValidateSchemaParam
 * @property {WebhookPublicModel.ValidateSchemaRequest} body
 */

class WebhookPublicValidator {
  /** @returns {FetchAllWebhookEventsParam} */
  static fetchAllWebhookEvents() {
    return Joi.object({});
  }

  /** @returns {NotifyDepricatedEventParam} */
  static notifyDepricatedEvent() {
    return Joi.object({});
  }

  /** @returns {QueryWebhookEventDetailsParam} */
  static queryWebhookEventDetails() {
    return Joi.object({
      body: Joi.array().items(WebhookPublicModel.EventConfigBase()).required(),
    }).required();
  }

  /** @returns {TestHandlerTransformationParam} */
  static testHandlerTransformation() {
    return Joi.object({
      body: WebhookPublicModel.TransformEventRequest().required(),
    }).required();
  }

  /** @returns {ValidateSchemaParam} */
  static validateSchema() {
    return Joi.object({
      body: WebhookPublicModel.ValidateSchemaRequest().required(),
    }).required();
  }
}

module.exports = WebhookPublicValidator;
