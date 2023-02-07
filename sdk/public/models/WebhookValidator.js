const Validator = require("../PublicModels");
const Joi = require("joi");
class WebhookValidator {
  static fetchAllWebhookEvents() {
    return Joi.object({});
  }

  static queryWebhookEventDetails() {
    return Joi.object({
      body: Joi.array().items(Validator.EventConfigBase()).required(),
    }).required();
  }
}
module.exports = WebhookValidator;
