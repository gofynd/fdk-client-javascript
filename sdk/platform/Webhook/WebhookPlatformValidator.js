const Joi = require("joi");

const WebhookModel = require("./WebhookPlatformModel");
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
      body: WebhookModel.SubscriberConfig().required(),
    }).required();
  }

  static updateSubscriberConfig() {
    return Joi.object({
      body: WebhookModel.SubscriberConfig().required(),
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
