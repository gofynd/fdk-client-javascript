const Joi = require("joi");

const PaymentPlatformModel = require("./PaymentPlatformModel");

/**
 * @typedef ActivateAndDectivatePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.UpdatePayoutCreation} body
 */

/**
 * @typedef ActivateAndDectivatePayoutsParam
 * @property {PaymentPlatformModel.UpdatePayoutCreation} body
 */

/**
 * @typedef DeletePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 */

/**
 * @typedef DeletePayoutsParam
 * @property {string} uniqueTransferNo - Unique transfer id
 */

/**
 * @typedef GetAllPayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {string} [uniqueExternalId] - Fetch payouts using unique external id
 */

/**
 * @typedef GetAllPayoutsParam
 * @property {string} [uniqueExternalId] - Fetch payouts using unique external id
 */

/** @typedef GetPaymentMethodConfigParam */

/**
 * @typedef SavePayoutParam
 * @property {PaymentPlatformModel.PayoutCreation} body
 */

/**
 * @typedef SavePayoutsParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.PayoutCreation} body
 */

/**
 * @typedef UpdatePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.PayoutCreation} body
 */

/**
 * @typedef UpdatePayoutsParam
 * @property {PaymentPlatformModel.PayoutCreation} body
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
      body: PaymentPlatformModel.UpdatePayoutCreation().required(),
    }).required();
  }

  /** @returns {ActivateAndDectivatePayoutsParam} */
  static activateAndDectivatePayouts() {
    return Joi.object({
      body: PaymentPlatformModel.UpdatePayoutCreation().required(),
    }).required();
  }

  /** @returns {DeletePayoutParam} */
  static deletePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeletePayoutsParam} */
  static deletePayouts() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAllPayoutParam} */
  static getAllPayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAllPayoutsParam} */
  static getAllPayouts() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPaymentMethodConfigParam} */
  static getPaymentMethodConfig() {
    return Joi.object({}).required();
  }

  /** @returns {SavePayoutParam} */
  static savePayout() {
    return Joi.object({
      body: PaymentPlatformModel.PayoutCreation().required(),
    }).required();
  }

  /** @returns {SavePayoutsParam} */
  static savePayouts() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentPlatformModel.PayoutCreation().required(),
    }).required();
  }

  /** @returns {UpdatePayoutParam} */
  static updatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentPlatformModel.PayoutCreation().required(),
    }).required();
  }

  /** @returns {UpdatePayoutsParam} */
  static updatePayouts() {
    return Joi.object({
      body: PaymentPlatformModel.PayoutCreation().required(),
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
