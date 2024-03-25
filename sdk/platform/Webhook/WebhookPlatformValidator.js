const Joi = require("joi");

const WebhookPlatformModel = require("./WebhookPlatformModel");

/**
 * @typedef CancelJobByNameParam
 * @property {string} filename
 */

/**
 * @typedef DownloadDeliveryReportParam
 * @property {WebhookPlatformModel.EventProcessRequest} body
 */

/** @typedef FetchAllEventConfigurationsParam */

/**
 * @typedef GetDeliveryReportsParam
 * @property {WebhookPlatformModel.EventProcessRequest} body
 */

/**
 * @typedef GetEventCountsParam
 * @property {WebhookPlatformModel.RetryEventRequest} body
 */

/**
 * @typedef GetHistoricalReportsParam
 * @property {WebhookPlatformModel.HistoryPayload} body
 */

/** @typedef GetManualRetryStatusParam */

/**
 * @typedef GetReportFiltersParam
 * @property {WebhookPlatformModel.ReportFiltersPayload} body
 */

/**
 * @typedef GetSubscriberByIdParam
 * @property {number} subscriberId - Subscriber id
 */

/**
 * @typedef GetSubscribersByCompanyParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [extensionId] - Extension_id
 */

/**
 * @typedef GetSubscribersByExtensionIdParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} extensionId - Extension_id
 */

/** @typedef ManualRetryCancelParam */

/**
 * @typedef ManualRetryOfFailedEventParam
 * @property {WebhookPlatformModel.RetryEventRequest} body
 */

/**
 * @typedef PingWebhookParam
 * @property {WebhookPlatformModel.PingWebhook} body
 */

/**
 * @typedef RegisterSubscriberToEventParam
 * @property {WebhookPlatformModel.SubscriberConfig} body
 */

/**
 * @typedef RegisterSubscriberToEventV2Param
 * @property {WebhookPlatformModel.SubscriberConfigRequestV2} body
 */

/**
 * @typedef UpdateSubscriberConfigParam
 * @property {WebhookPlatformModel.SubscriberConfig} body
 */

/**
 * @typedef UpdateSubscriberV2Param
 * @property {WebhookPlatformModel.SubscriberConfigRequestV2} body
 */

class WebhookPlatformValidator {
  /** @returns {CancelJobByNameParam} */
  static cancelJobByName() {
    return Joi.object({
      filename: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DownloadDeliveryReportParam} */
  static downloadDeliveryReport() {
    return Joi.object({
      body: WebhookPlatformModel.EventProcessRequest().required(),
    }).required();
  }

  /** @returns {FetchAllEventConfigurationsParam} */
  static fetchAllEventConfigurations() {
    return Joi.object({}).required();
  }

  /** @returns {GetDeliveryReportsParam} */
  static getDeliveryReports() {
    return Joi.object({
      body: WebhookPlatformModel.EventProcessRequest().required(),
    }).required();
  }

  /** @returns {GetEventCountsParam} */
  static getEventCounts() {
    return Joi.object({
      body: WebhookPlatformModel.RetryEventRequest().required(),
    }).required();
  }

  /** @returns {GetHistoricalReportsParam} */
  static getHistoricalReports() {
    return Joi.object({
      body: WebhookPlatformModel.HistoryPayload().required(),
    }).required();
  }

  /** @returns {GetManualRetryStatusParam} */
  static getManualRetryStatus() {
    return Joi.object({}).required();
  }

  /** @returns {GetReportFiltersParam} */
  static getReportFilters() {
    return Joi.object({
      body: WebhookPlatformModel.ReportFiltersPayload().required(),
    }).required();
  }

  /** @returns {GetSubscriberByIdParam} */
  static getSubscriberById() {
    return Joi.object({
      subscriberId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetSubscribersByCompanyParam} */
  static getSubscribersByCompany() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      extensionId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetSubscribersByExtensionIdParam} */
  static getSubscribersByExtensionId() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ManualRetryCancelParam} */
  static manualRetryCancel() {
    return Joi.object({}).required();
  }

  /** @returns {ManualRetryOfFailedEventParam} */
  static manualRetryOfFailedEvent() {
    return Joi.object({
      body: WebhookPlatformModel.RetryEventRequest().required(),
    }).required();
  }

  /** @returns {PingWebhookParam} */
  static pingWebhook() {
    return Joi.object({
      body: WebhookPlatformModel.PingWebhook().required(),
    }).required();
  }

  /** @returns {RegisterSubscriberToEventParam} */
  static registerSubscriberToEvent() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfig().required(),
    }).required();
  }

  /** @returns {RegisterSubscriberToEventV2Param} */
  static registerSubscriberToEventV2() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfigRequestV2().required(),
    }).required();
  }

  /** @returns {UpdateSubscriberConfigParam} */
  static updateSubscriberConfig() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfig().required(),
    }).required();
  }

  /** @returns {UpdateSubscriberV2Param} */
  static updateSubscriberV2() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfigRequestV2().required(),
    }).required();
  }
}

module.exports = WebhookPlatformValidator;
