const Joi = require("joi");

const WebhookModel = require("./WebhookPlatformModel");
class WebhookValidator {
  static fetchAllEventConfigurations() {
    return Joi.object({}).required();
  }

  static getSubscriberById() {
    return Joi.object({
      subscriberId: Joi.number().required(),
    }).required();
  }

  static getSubscribersByCompany() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      extensionId: Joi.string().allow(""),
    }).required();
  }

  static getSubscribersByExtensionId() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      extensionId: Joi.string().allow("").required(),
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
}

module.exports = WebhookValidator;
