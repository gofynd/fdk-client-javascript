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
 * @property {string} [ifscCode]
 */

class PaymentPlatformValidator {
  /** @returns {activateAndDectivatePayout} */
  static activateAndDectivatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentPlatformModel.UpdatePayoutRequest().required(),
    }).required();
  }

  /** @returns {deletePayout} */
  static deletePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteSubscriptionPaymentMethod} */
  static deleteSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow("").required(),
      paymentMethodId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getAllPayouts} */
  static getAllPayouts() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getSubscriptionConfig} */
  static getSubscriptionConfig() {
    return Joi.object({}).required();
  }

  /** @returns {getSubscriptionPaymentMethod} */
  static getSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {savePayout} */
  static savePayout() {
    return Joi.object({
      body: PaymentPlatformModel.PayoutRequest().required(),
    }).required();
  }

  /** @returns {saveSubscriptionSetupIntent} */
  static saveSubscriptionSetupIntent() {
    return Joi.object({
      body: PaymentPlatformModel.SaveSubscriptionSetupIntentRequest().required(),
    }).required();
  }

  /** @returns {updatePayout} */
  static updatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentPlatformModel.PayoutRequest().required(),
    }).required();
  }

  /** @returns {verifyIfscCode} */
  static verifyIfscCode() {
    return Joi.object({
      ifscCode: Joi.string().allow(""),
    }).required();
  }
}

module.exports = PaymentPlatformValidator;
