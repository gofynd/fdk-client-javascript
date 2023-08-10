const Joi = require("joi");

const WebhookModel = require("./WebhookPlatformModel");
class WebhookValidator {
  static cancelJobByName() {
    return Joi.object({
      filename: Joi.string().allow("").required(),
    }).required();
  }

  static downloadDeliveryReport() {
    return Joi.object({
      body: WebhookModel.EventProcessRequest().required(),
    }).required();
  }

  static fetchAllEventConfigurations() {
    return Joi.object({}).required();
  }

  static getDeliveryReports() {
    return Joi.object({
      body: WebhookModel.EventProcessRequest().required(),
    }).required();
  }

  static getEventCounts() {
    return Joi.object({
      body: WebhookModel.EventProcessRequest().required(),
    }).required();
  }

  static getHistoricalReports() {
    return Joi.object({
      body: WebhookModel.HistoryPayload().required(),
    }).required();
  }

  static getManualRetryStatus() {
    return Joi.object({}).required();
  }

  static getReportFilters() {
    return Joi.object({
      body: WebhookModel.ReportFiltersPayload().required(),
    }).required();
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
      extensionId: Joi.number(),
    }).required();
  }

  static getSubscribersByExtensionId() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      extensionId: Joi.number().required(),
    }).required();
  }

  static manualRetryCancel() {
    return Joi.object({}).required();
  }

  static manualRetryOfFailedEvent() {
    return Joi.object({
      body: WebhookModel.EventProcessRequest().required(),
    }).required();
  }

  static pingWebhook() {
    return Joi.object({
      body: WebhookModel.PingWebhook().required(),
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
