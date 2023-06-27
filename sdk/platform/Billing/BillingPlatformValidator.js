const Joi = require("joi");

const BillingPlatformModel = require("./BillingPlatformModel");

/**
 * @typedef activateSubscriptionPlan
 * @property {BillingPlatformModel.SubscriptionActivateReq} body
 */

/**
 * @typedef cancelSubscriptionCharge
 * @property {string} extensionId - Extension _id
 * @property {string} subscriptionId - Subscription charge _id
 */

/**
 * @typedef cancelSubscriptionPlan
 * @property {BillingPlatformModel.CancelSubscriptionReq} body
 */

/**
 * @typedef checkCouponValidity
 * @property {string} plan - ID of the plan.
 * @property {string} couponCode - Coupon code.
 */

/**
 * @typedef createOneTimeCharge
 * @property {string} extensionId - Extension _id
 * @property {BillingPlatformModel.CreateOneTimeCharge} body
 */

/**
 * @typedef createSubscriptionCharge
 * @property {string} extensionId - Extension _id
 * @property {BillingPlatformModel.CreateSubscriptionCharge} body
 */

/**
 * @typedef getChargeDetails
 * @property {string} extensionId - Extension _id
 * @property {string} chargeId - Standalone charge _id
 */

/** @typedef getCustomerDetail */

/** @typedef getFeatureLimitConfig */

/**
 * @typedef getInvoiceById
 * @property {string} invoiceId - Invoice id
 */

/** @typedef getInvoices */

/** @typedef getSubscription */

/**
 * @typedef getSubscriptionCharge
 * @property {string} extensionId - Extension _id
 * @property {string} subscriptionId - Subscription charge _id
 */

/**
 * @typedef upsertCustomerDetail
 * @property {BillingPlatformModel.SubscriptionCustomerCreate} body
 */

class BillingPlatformValidator {
  /** @returns {activateSubscriptionPlan} */
  static activateSubscriptionPlan() {
    return Joi.object({
      body: BillingPlatformModel.SubscriptionActivateReq().required(),
    }).required();
  }

  /** @returns {cancelSubscriptionCharge} */
  static cancelSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {cancelSubscriptionPlan} */
  static cancelSubscriptionPlan() {
    return Joi.object({
      body: BillingPlatformModel.CancelSubscriptionReq().required(),
    }).required();
  }

  /** @returns {checkCouponValidity} */
  static checkCouponValidity() {
    return Joi.object({
      plan: Joi.string().allow("").required(),
      couponCode: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {createOneTimeCharge} */
  static createOneTimeCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: BillingPlatformModel.CreateOneTimeCharge().required(),
    }).required();
  }

  /** @returns {createSubscriptionCharge} */
  static createSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: BillingPlatformModel.CreateSubscriptionCharge().required(),
    }).required();
  }

  /** @returns {getChargeDetails} */
  static getChargeDetails() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      chargeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCustomerDetail} */
  static getCustomerDetail() {
    return Joi.object({}).required();
  }

  /** @returns {getFeatureLimitConfig} */
  static getFeatureLimitConfig() {
    return Joi.object({}).required();
  }

  /** @returns {getInvoiceById} */
  static getInvoiceById() {
    return Joi.object({
      invoiceId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getInvoices} */
  static getInvoices() {
    return Joi.object({}).required();
  }

  /** @returns {getSubscription} */
  static getSubscription() {
    return Joi.object({}).required();
  }

  /** @returns {getSubscriptionCharge} */
  static getSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {upsertCustomerDetail} */
  static upsertCustomerDetail() {
    return Joi.object({
      body: BillingPlatformModel.SubscriptionCustomerCreate().required(),
    }).required();
  }
}

module.exports = BillingPlatformValidator;
