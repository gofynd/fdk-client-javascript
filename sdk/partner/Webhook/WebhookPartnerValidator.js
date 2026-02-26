const Joi = require("joi");

const WebhookModel = require("./WebhookPartnerModel");
class WebhookValidator {
  static responseTimeSummary() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      startDate: Joi.string().allow("").required(),
      endDate: Joi.string().allow("").required(),
    }).required();
  }

  static fetchDeliverySummary() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      startDate: Joi.string().allow("").required(),
      endDate: Joi.string().allow("").required(),
    }).required();
  }

  static getDeliveryDetailInsights() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: WebhookModel.DeliveryDetailsPayload().required(),
    }).required();
  }

  static fetchDeliveryTs() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      startDate: Joi.string().allow("").required(),
      endDate: Joi.string().allow("").required(),
    }).required();
  }

  static fetchReportFilters() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      startDate: Joi.string().allow("").required(),
      endDate: Joi.string().allow("").required(),
      pageNo: Joi.number().required(),
      pageSize: Joi.number().required(),
    }).required();
  }

  static downloadDeliveryReport() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: WebhookModel.ReportDownloadPayload().required(),
    }).required();
  }

  static cancelReportDownload() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      filename: Joi.string().allow("").required(),
    }).required();
  }

  static getHistoricalReports() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: WebhookModel.HistoryPayload().required(),
    }).required();
  }

  static getInvalidEventList() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: WebhookModel.InvalidEventsPayload().required(),
    }).required();
  }

  static fetchSubscribers() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  static updateSubscriber() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriberId: Joi.number().required(),
      body: WebhookModel.SubscriberUpdate().required(),
    }).required();
  }

  static validateFilterConfiguration() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: WebhookModel.FilterValidationPayload().required(),
    }).required();
  }

  static validateReducerConfiguration() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: WebhookModel.ReducerValidationPayload().required(),
    }).required();
  }

  static saveFilterReducerConfiguration() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      companyId: Joi.number().required(),
      subscriberId: Joi.number().required(),
      body: WebhookModel.FilterReducerSave().required(),
    }).required();
  }
}

module.exports = WebhookValidator;
