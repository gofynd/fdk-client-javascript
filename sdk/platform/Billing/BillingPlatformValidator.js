const Joi = require("joi");

const BillingPlatformModel = require("./BillingPlatformModel");

/**
 * @typedef CancelSubscriptionChargeParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {string} subscriptionId - The unique identifier of the subscription
 */

/**
 * @typedef CreateOneTimeChargeParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {BillingPlatformModel.CreateOneTimeCharge} body
 */

/**
 * @typedef CreateSubscriptionChargeParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {BillingPlatformModel.CreateSubscriptionCharge} body
 */

/**
 * @typedef GetChargeDetailsParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {string} chargeId - The unique identifier of the entity charge in the system.
 */

/**
 * @typedef GetSubscriptionChargeParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {string} subscriptionId - The unique identifier of the subscription
 */

class BillingPlatformValidator {
  /** @returns {CancelSubscriptionChargeParam} */
  static cancelSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {CreateOneTimeChargeParam} */
  static createOneTimeCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: BillingPlatformModel.CreateOneTimeCharge().required(),
    }).required();
  }

  /** @returns {CreateSubscriptionChargeParam} */
  static createSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: BillingPlatformModel.CreateSubscriptionCharge().required(),
    }).required();
  }

  /** @returns {GetChargeDetailsParam} */
  static getChargeDetails() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      chargeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSubscriptionChargeParam} */
  static getSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = BillingPlatformValidator;
