const Joi = require("joi");

const WebhookPlatformModel = require("./WebhookPlatformModel");

/** @typedef fetchAllEventConfigurations */

/**
 * @typedef getSubscriberById
 * @property {number} subscriberId - Subscriber ID
 */

/**
 * @typedef getSubscribersByCompany
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [extensionId] - Extension ID
 */

/**
 * @typedef getSubscribersByExtensionId
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} extensionId - Extension ID
 */

/**
 * @typedef registerSubscriberToEvent
 * @property {WebhookPlatformModel.SubscriberConfig} body
 */

/**
 * @typedef updateSubscriberConfig
 * @property {WebhookPlatformModel.SubscriberConfig} body
 */

class WebhookPlatformValidator {
  /** @returns {fetchAllEventConfigurations} */
  static fetchAllEventConfigurations() {
    return Joi.object({}).required();
  }

  /** @returns {getSubscriberById} */
  static getSubscriberById() {
    return Joi.object({
      subscriberId: Joi.number().required(),
    }).required();
  }

  /** @returns {getSubscribersByCompany} */
  static getSubscribersByCompany() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      extensionId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getSubscribersByExtensionId} */
  static getSubscribersByExtensionId() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {registerSubscriberToEvent} */
  static registerSubscriberToEvent() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfig().required(),
    }).required();
  }

  /** @returns {updateSubscriberConfig} */
  static updateSubscriberConfig() {
    return Joi.object({
      body: WebhookPlatformModel.SubscriberConfig().required(),
    }).required();
  }
}

module.exports = WebhookPlatformValidator;
