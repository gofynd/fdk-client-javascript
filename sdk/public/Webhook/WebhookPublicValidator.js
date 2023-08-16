const Joi = require("joi");

const WebhookModel = require("./WebhookPublicModel");
class WebhookValidator {
  static fetchAllWebhookEvents() {
    return Joi.object({});
  }

  static queryWebhookEventDetails() {
    return Joi.object({
      body: Joi.array().items(WebhookModel.EventConfigBase()).required(),
    }).required();
  }
}

module.exports = WebhookValidator;
