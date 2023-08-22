const Joi = require("joi");

const WebhookPlatformModel = require("./WebhookPlatformModel");

/** @typedef FetchAllEventConfigurationsParam */

/**
 * @typedef GetSubscriberByIdParam
 * @property {number} subscriberId - Subscriber ID
 */

/**
 * @typedef GetSubscribersByCompanyParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [extensionId] - Extension ID
 */

/**
 * @typedef GetSubscribersByExtensionIdParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} extensionId - Extension ID
 */

/**
 * @typedef RegisterSubscriberToEventParam
 * @property {WebhookPlatformModel.SubscriberConfig} body
 */

/**
 * @typedef UpdateSubscriberConfigParam
 * @property {WebhookPlatformModel.SubscriberConfig} body
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
      body: WebhookPlatformModel.SubscriberConfig().required(),
    }).required();
  }

  /** @returns {UpdateSubscriberConfigParam} */
  static updateSubscriberConfig() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfig().required(),
    }).required();
  }
}

module.exports = WebhookPlatformValidator;
