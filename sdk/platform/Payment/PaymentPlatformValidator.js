const Joi = require("joi");

const PaymentPlatformModel = require("./PaymentPlatformModel");

/**
 * @typedef ActivateAndDectivatePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.UpdatePayoutRequest} body
 */

/**
 * @typedef DeletePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodParam
 * @property {string} uniqueExternalId
 * @property {string} paymentMethodId
 */

/**
 * @typedef GetAllPayoutsParam
 * @property {string} [uniqueExternalId] - Fetch payouts using unique external id
 */

/** @typedef GetSubscriptionConfigParam */

/**
 * @typedef GetSubscriptionPaymentMethodParam
 * @property {string} [uniqueExternalId] - Unique external id
 */

/**
 * @typedef SavePayoutParam
 * @property {PaymentPlatformModel.PayoutRequest} body
 */

/**
 * @typedef SaveSubscriptionSetupIntentParam
 * @property {PaymentPlatformModel.SaveSubscriptionSetupIntentRequest} body
 */

/**
 * @typedef UpdatePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.PayoutRequest} body
 */

/**
 * @typedef VerifyIfscCodeParam
 * @property {string} ifscCode
 */

class PaymentPlatformValidator {
  /** @returns {ActivateAndDectivatePayoutParam} */
  static activateAndDectivatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentPlatformModel.UpdatePayoutRequest().required(),
    }).required();
  }

  /** @returns {DeletePayoutParam} */
  static deletePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteSubscriptionPaymentMethodParam} */
  static deleteSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow("").required(),
      paymentMethodId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAllPayoutsParam} */
  static getAllPayouts() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetSubscriptionConfigParam} */
  static getSubscriptionConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetSubscriptionPaymentMethodParam} */
  static getSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {SavePayoutParam} */
  static savePayout() {
    return Joi.object({
      body: PaymentPlatformModel.PayoutRequest().required(),
    }).required();
  }

  /** @returns {SaveSubscriptionSetupIntentParam} */
  static saveSubscriptionSetupIntent() {
    return Joi.object({
      body: PaymentPlatformModel.SaveSubscriptionSetupIntentRequest().required(),
    }).required();
  }

  /** @returns {UpdatePayoutParam} */
  static updatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentPlatformModel.PayoutRequest().required(),
    }).required();
  }

  /** @returns {VerifyIfscCodeParam} */
  static verifyIfscCode() {
    return Joi.object({
      ifscCode: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = PaymentPlatformValidator;
