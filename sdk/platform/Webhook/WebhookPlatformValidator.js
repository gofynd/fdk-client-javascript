const Joi = require("joi");

const WebhookPlatformModel = require("./WebhookPlatformModel");

/** @typedef FetchAllEventConfigurationsParam */

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

/**
 * @typedef RegisterSubscriberToEventParam
 * @property {WebhookPlatformModel.SubscriberConfigPost} body
 */

/**
 * @typedef RegisterSubscriberToEventV2Param
 * @property {WebhookPlatformModel.SubscriberConfigPostRequestV2} body
 */

/**
 * @typedef UpdateSubscriberConfigParam
 * @property {WebhookPlatformModel.SubscriberConfigUpdate} body
 */

/**
 * @typedef UpdateSubscriberV2Param
 * @property {WebhookPlatformModel.SubscriberConfigUpdateRequestV2} body
 */

/**
 * @typedef UpsertSubscriberEventParam
 * @property {WebhookPlatformModel.UpsertSubscriberConfig} body
 */

class WebhookPlatformValidator {
  /** @returns {FetchAllEventConfigurationsParam} */
  static fetchAllEventConfigurations() {
    return Joi.object({}).required();
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

  /** @returns {RegisterSubscriberToEventParam} */
  static registerSubscriberToEvent() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfigPost().required(),
    }).required();
  }

  /** @returns {RegisterSubscriberToEventV2Param} */
  static registerSubscriberToEventV2() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfigPostRequestV2().required(),
    }).required();
  }

  /** @returns {UpdateSubscriberConfigParam} */
  static updateSubscriberConfig() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfigUpdate().required(),
    }).required();
  }

  /** @returns {UpdateSubscriberV2Param} */
  static updateSubscriberV2() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfigUpdateRequestV2().required(),
    }).required();
  }

  /** @returns {UpsertSubscriberEventParam} */
  static upsertSubscriberEvent() {
    return Joi.object({
      body: WebhookPlatformModel.UpsertSubscriberConfig().required(),
    }).required();
  }
}

module.exports = WebhookPlatformValidator;
