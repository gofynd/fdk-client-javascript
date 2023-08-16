const Joi = require("joi");

const BillingPlatformModel = require("./BillingPlatformModel");

/**
 * @typedef ActivateSubscriptionPlanParam
 * @property {BillingPlatformModel.SubscriptionActivateReq} body
 */

/**
 * @typedef CancelSubscriptionChargeParam
 * @property {string} extensionId - Extension _id
 * @property {string} subscriptionId - Subscription charge _id
 */

/**
 * @typedef CancelSubscriptionPlanParam
 * @property {BillingPlatformModel.CancelSubscriptionReq} body
 */

/**
 * @typedef CheckCouponValidityParam
 * @property {string} plan - ID of the plan.
 * @property {string} couponCode - Coupon code.
 */

/**
 * @typedef CreateOneTimeChargeParam
 * @property {string} extensionId - Extension _id
 * @property {BillingPlatformModel.CreateOneTimeCharge} body
 */

/**
 * @typedef CreateSubscriptionChargeParam
 * @property {string} extensionId - Extension _id
 * @property {BillingPlatformModel.CreateSubscriptionCharge} body
 */

/**
 * @typedef GetChargeDetailsParam
 * @property {string} extensionId - Extension _id
 * @property {string} chargeId - Standalone charge _id
 */

/** @typedef GetCustomerDetailParam */

/** @typedef GetEnterprisePlansParam */

/** @typedef GetFeatureLimitConfigParam */

/**
 * @typedef GetInvoiceByIdParam
 * @property {string} invoiceId - Invoice id
 */

/** @typedef GetInvoicesParam */

/** @typedef GetSubscriptionParam */

/**
 * @typedef GetSubscriptionChargeParam
 * @property {string} extensionId - Extension _id
 * @property {string} subscriptionId - Subscription charge _id
 */

/**
 * @typedef PlanStatusUpdateParam
 * @property {BillingPlatformModel.PlanStatusUpdateReq} body
 */

/**
 * @typedef UpsertCustomerDetailParam
 * @property {BillingPlatformModel.SubscriptionCustomerCreate} body
 */

class BillingPlatformValidator {
  /** @returns {ActivateSubscriptionPlanParam} */
  static activateSubscriptionPlan() {
    return Joi.object({
      body: BillingPlatformModel.SubscriptionActivateReq().required(),
    }).required();
  }

  /** @returns {CancelSubscriptionChargeParam} */
  static cancelSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {CancelSubscriptionPlanParam} */
  static cancelSubscriptionPlan() {
    return Joi.object({
      body: BillingPlatformModel.CancelSubscriptionReq().required(),
    }).required();
  }

  /** @returns {CheckCouponValidityParam} */
  static checkCouponValidity() {
    return Joi.object({
      plan: Joi.string().allow("").required(),
      couponCode: Joi.string().allow("").required(),
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

  /** @returns {GetCustomerDetailParam} */
  static getCustomerDetail() {
    return Joi.object({}).required();
  }

  /** @returns {GetEnterprisePlansParam} */
  static getEnterprisePlans() {
    return Joi.object({}).required();
  }

  /** @returns {GetFeatureLimitConfigParam} */
  static getFeatureLimitConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetInvoiceByIdParam} */
  static getInvoiceById() {
    return Joi.object({
      invoiceId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetInvoicesParam} */
  static getInvoices() {
    return Joi.object({}).required();
  }

  /** @returns {GetSubscriptionParam} */
  static getSubscription() {
    return Joi.object({}).required();
  }

  /** @returns {GetSubscriptionChargeParam} */
  static getSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {PlanStatusUpdateParam} */
  static planStatusUpdate() {
    return Joi.object({
      body: BillingPlatformModel.PlanStatusUpdateReq().required(),
    }).required();
  }

  /** @returns {UpsertCustomerDetailParam} */
  static upsertCustomerDetail() {
    return Joi.object({
      body: BillingPlatformModel.SubscriptionCustomerCreate().required(),
    }).required();
  }
}

module.exports = BillingPlatformValidator;
