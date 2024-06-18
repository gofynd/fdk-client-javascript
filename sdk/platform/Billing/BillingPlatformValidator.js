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
 * @typedef ChangePlanParam
 * @property {BillingPlatformModel.SubscriptionActivateReq} body
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
 * @typedef CreditTransactionParam
 * @property {number} uniqueId - Unique ID of the company
 * @property {string} productSuite - Product suite
 * @property {string} type - Type of the company
 * @property {number} [pageSize] - Number of items per page
 * @property {number} [pageNo] - Page number
 * @property {Object} [sort] - Sorting criteria
 * @property {Object} [query] - Additional query parameters
 */

/**
 * @typedef CurrentAppLimitParam
 * @property {string} [productSuite]
 * @property {string} [type]
 */

/** @typedef GetBankListParam */

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
 * @typedef MethodDefaultParam
 * @property {BillingPlatformModel.DefaultReq} body
 */

/**
 * @typedef PaymentCollectParam
 * @property {BillingPlatformModel.PaymentCollectReq} body
 */

/**
 * @typedef PaymentInitiateParam
 * @property {BillingPlatformModel.SunscribePlan} body
 */

/**
 * @typedef PaymentOptionsParam
 * @property {string} code - Payment options unique code.
 */

/**
 * @typedef PaymentStatusParam
 * @property {string} orderId - Unique ID of the company
 */

/**
 * @typedef PlanDowngradeParam
 * @property {BillingPlatformModel.DowngradePlanReq} body
 */

/** @typedef PlanDowngradeGetParam */

/**
 * @typedef PlanStatusUpdateParam
 * @property {BillingPlatformModel.PlanStatusUpdateReq} body
 */

/**
 * @typedef SetupIntentParam
 * @property {BillingPlatformModel.IntentReq} body
 */

/**
 * @typedef SetupMandateParam
 * @property {BillingPlatformModel.SetupMandateReq} body
 */

/**
 * @typedef SetupPaymentParam
 * @property {BillingPlatformModel.SetupPaymentReq} body
 */

/** @typedef SubscriptionConfigsParam */

/**
 * @typedef SubscriptionMethodsParam
 * @property {string} uniqueExternalId - Unique id for external company
 */

/**
 * @typedef SubscriptionMethodsDeleteParam
 * @property {string} uniqueExternalId - Unique id for external company
 * @property {string} paymentMethodId - Payment method id
 */

/**
 * @typedef SubscriptionPlanChangeParam
 * @property {string} [productSuite]
 * @property {string} [coupon]
 * @property {number} [uniqueId]
 * @property {string} [platform]
 * @property {string} [planId]
 */

/**
 * @typedef SubscriptionRenewParam
 * @property {BillingPlatformModel.SubscriptionRenewReq} body
 */

/**
 * @typedef TopupCancelCreditParam
 * @property {BillingPlatformModel.CancelTopupReq} body
 */

/**
 * @typedef TopupCreditParam
 * @property {BillingPlatformModel.TopupReq} body
 */

/**
 * @typedef UpdateConsentParam
 * @property {string} subscriberId - Customer unique id. In case of company it
 *   will be company id.
 */

/**
 * @typedef UpdateSetupIntentParam
 * @property {BillingPlatformModel.PutIntentReq} body
 */

/**
 * @typedef UpgradePlanParam
 * @property {BillingPlatformModel.SubscriptionMethodsReq} body
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

  /** @returns {ChangePlanParam} */
  static changePlan() {
    return Joi.object({
      body: BillingPlatformModel.SubscriptionActivateReq().required(),
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

  /** @returns {CreditTransactionParam} */
  static creditTransaction() {
    return Joi.object({
      uniqueId: Joi.number().required(),
      productSuite: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      sort: Joi.any(),
      query: Joi.any(),
    }).required();
  }

  /** @returns {CurrentAppLimitParam} */
  static currentAppLimit() {
    return Joi.object({
      productSuite: Joi.string().allow(""),
      type: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetBankListParam} */
  static getBankList() {
    return Joi.object({}).required();
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

  /** @returns {MethodDefaultParam} */
  static methodDefault() {
    return Joi.object({
      body: BillingPlatformModel.DefaultReq().required(),
    }).required();
  }

  /** @returns {PaymentCollectParam} */
  static paymentCollect() {
    return Joi.object({
      body: BillingPlatformModel.PaymentCollectReq().required(),
    }).required();
  }

  /** @returns {PaymentInitiateParam} */
  static paymentInitiate() {
    return Joi.object({
      body: BillingPlatformModel.SunscribePlan().required(),
    }).required();
  }

  /** @returns {PaymentOptionsParam} */
  static paymentOptions() {
    return Joi.object({
      code: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {PaymentStatusParam} */
  static paymentStatus() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {PlanDowngradeParam} */
  static planDowngrade() {
    return Joi.object({
      body: BillingPlatformModel.DowngradePlanReq().required(),
    }).required();
  }

  /** @returns {PlanDowngradeGetParam} */
  static planDowngradeGet() {
    return Joi.object({}).required();
  }

  /** @returns {PlanStatusUpdateParam} */
  static planStatusUpdate() {
    return Joi.object({
      body: BillingPlatformModel.PlanStatusUpdateReq().required(),
    }).required();
  }

  /** @returns {SetupIntentParam} */
  static setupIntent() {
    return Joi.object({
      body: BillingPlatformModel.IntentReq().required(),
    }).required();
  }

  /** @returns {SetupMandateParam} */
  static setupMandate() {
    return Joi.object({
      body: BillingPlatformModel.SetupMandateReq().required(),
    }).required();
  }

  /** @returns {SetupPaymentParam} */
  static setupPayment() {
    return Joi.object({
      body: BillingPlatformModel.SetupPaymentReq().required(),
    }).required();
  }

  /** @returns {SubscriptionConfigsParam} */
  static subscriptionConfigs() {
    return Joi.object({}).required();
  }

  /** @returns {SubscriptionMethodsParam} */
  static subscriptionMethods() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {SubscriptionMethodsDeleteParam} */
  static subscriptionMethodsDelete() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow("").required(),
      paymentMethodId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {SubscriptionPlanChangeParam} */
  static subscriptionPlanChange() {
    return Joi.object({
      productSuite: Joi.string().allow(""),
      coupon: Joi.string().allow(""),
      uniqueId: Joi.number(),
      platform: Joi.string().allow(""),
      planId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {SubscriptionRenewParam} */
  static subscriptionRenew() {
    return Joi.object({
      body: BillingPlatformModel.SubscriptionRenewReq().required(),
    }).required();
  }

  /** @returns {TopupCancelCreditParam} */
  static topupCancelCredit() {
    return Joi.object({
      body: BillingPlatformModel.CancelTopupReq().required(),
    }).required();
  }

  /** @returns {TopupCreditParam} */
  static topupCredit() {
    return Joi.object({
      body: BillingPlatformModel.TopupReq().required(),
    }).required();
  }

  /** @returns {UpdateConsentParam} */
  static updateConsent() {
    return Joi.object({
      subscriberId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateSetupIntentParam} */
  static updateSetupIntent() {
    return Joi.object({
      body: BillingPlatformModel.PutIntentReq().required(),
    }).required();
  }

  /** @returns {UpgradePlanParam} */
  static upgradePlan() {
    return Joi.object({
      body: BillingPlatformModel.SubscriptionMethodsReq().required(),
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
