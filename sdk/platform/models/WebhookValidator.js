const Joi = require("joi");
const Validator = require("../PlatformModels");
class WebhookValidator {
  static getSubscribersByCompany() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      extensionId: Joi.string().allow(""),
    }).required();
  }

  static registerSubscriberToEvent() {
    return Joi.object({
      body: Validator.SubscriberConfig().required(),
    }).required();
  }

  static updateSubscriberConfig() {
    return Joi.object({
      body: Validator.SubscriberConfig().required(),
    }).required();
  }

  static getSubscribersByExtensionId() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  static getSubscriberById() {
    return Joi.object({
      subscriberId: Joi.number().required(),
    }).required();
  }

  static fetchAllEventConfigurations() {
    return Joi.object({}).required();
  }
}
module.exports = WebhookValidator;
