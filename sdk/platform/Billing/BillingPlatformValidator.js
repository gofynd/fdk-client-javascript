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

/**
 * @typedef GetPaymentOptionsParam
 * @property {string} transactionId - ID of the payment transaction.
 */

/**
 * @typedef GetPaymentTransactionParam
 * @property {string} transactionId - Payment Transaction unique id.
 */

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
 * @typedef GlobalSettingsParam
 * @property {number} pageNo - Number of pages needed
 * @property {number} pageSize - Number of items to be there in page
 * @property {Object} query - Field which will be used in db query
 */

/**
 * @typedef PaymentOptionsParam
 * @property {string} code - Payment options unique code.
 */

/**
 * @typedef PlanStatusUpdateParam
 * @property {BillingPlatformModel.PlanStatusUpdateReq} body
 */

/**
 * @typedef SubscripePlanParam
 * @property {BillingPlatformModel.SunscribePlan} body
 */

/** @typedef SubscriptionConfigsParam */

/**
 * @typedef SubscriptionMethodsParam
 * @property {Object} uniqueExternalId - Unique id for external company
 */

/**
 * @typedef SubscriptionPlanChangeParam
 * @property {string} [productSuite]
 * @property {number} [uniqueId]
 * @property {string} [platform]
 */

/**
 * @typedef UpsertCustomerDetailParam
 * @property {BillingPlatformModel.SubscriptionCustomerCreate} body
 */

/**
 * @typedef VerifyPaymentParam
 * @property {BillingPlatformModel.VerifyPaymentReq} body
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

  /** @returns {GetPaymentOptionsParam} */
  static getPaymentOptions() {
    return Joi.object({
      transactionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPaymentTransactionParam} */
  static getPaymentTransaction() {
    return Joi.object({
      transactionId: Joi.string().allow("").required(),
    }).required();
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

  /** @returns {GlobalSettingsParam} */
  static globalSettings() {
    return Joi.object({
      pageNo: Joi.number().required(),
      pageSize: Joi.number().required(),
      query: Joi.any().required(),
    }).required();
  }

  /** @returns {PaymentOptionsParam} */
  static paymentOptions() {
    return Joi.object({
      code: Joi.string().allow("").required(),
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

  /** @returns {SubscriptionConfigsParam} */
  static subscriptionConfigs() {
    return Joi.object({}).required();
  }

  /** @returns {SubscriptionMethodsParam} */
  static subscriptionMethods() {
    return Joi.object({
      uniqueExternalId: Joi.any().required(),
    }).required();
  }

  /** @returns {SubscriptionPlanChangeParam} */
  static subscriptionPlanChange() {
    return Joi.object({
      productSuite: Joi.string().allow(""),
      uniqueId: Joi.number(),
      platform: Joi.string().allow(""),
    }).required();
  }

  /** @returns {UpsertCustomerDetailParam} */
  static upsertCustomerDetail() {
    return Joi.object({
      body: BillingPlatformModel.SubscriptionCustomerCreate().required(),
    }).required();
  }

  /** @returns {VerifyPaymentParam} */
  static verifyPayment() {
    return Joi.object({
      body: BillingPlatformModel.VerifyPaymentReq().required(),
    }).required();
  }
}

module.exports = BillingPlatformValidator;
