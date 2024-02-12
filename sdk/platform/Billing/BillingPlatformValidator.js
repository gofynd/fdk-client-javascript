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

/**
 * @typedef GetFeatureLimitConfigParam
 * @property {string} [productSuite]
 * @property {string} [type]
 */

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
 * @typedef GetentityDetailParam
 * @property {string} entityName - Entity name.
 * @property {string} [entityId] - Entity unique id.
 * @property {string} channel - Ordering channel.
 * @property {string} [component] - The coponents the user would like to know.
 * @property {string} [componentName] - The name of component the preferred to be fetched.
 */

/**
 * @typedef PlanStatusUpdateParam
 * @property {BillingPlatformModel.PlanStatusUpdateReq} body
 */

/**
 * @typedef SubscripePlanParam
 * @property {BillingPlatformModel.SunscribePlan} body
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
    return Joi.object({
      productSuite: Joi.string().allow(""),
      type: Joi.string().allow(""),
    }).required();
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

  /** @returns {GetentityDetailParam} */
  static getentityDetail() {
    return Joi.object({
      entityName: Joi.string().allow("").required(),
      entityId: Joi.string().allow(""),
      channel: Joi.string().allow("").required(),
      component: Joi.string().allow(""),
      componentName: Joi.string().allow(""),
    }).required();
  }

  /** @returns {PlanStatusUpdateParam} */
  static planStatusUpdate() {
    return Joi.object({
      body: BillingPlatformModel.PlanStatusUpdateReq().required(),
    }).required();
  }

  /** @returns {SubscripePlanParam} */
  static subscripePlan() {
    return Joi.object({
      body: BillingPlatformModel.SunscribePlan().required(),
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
