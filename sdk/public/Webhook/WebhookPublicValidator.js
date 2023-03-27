const WebhookModel = require("./WebhookPublicModel");
const Joi = require("joi");
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
