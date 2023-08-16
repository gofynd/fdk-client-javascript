const Joi = require("joi");

const BillingModel = require("./BillingPlatformModel");
class BillingValidator {
  static activateSubscriptionPlan() {
    return Joi.object({
      body: BillingModel.SubscriptionActivateReq().required(),
    }).required();
  }

  static cancelSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }

  static cancelSubscriptionPlan() {
    return Joi.object({
      body: BillingModel.CancelSubscriptionReq().required(),
    }).required();
  }

  static checkCouponValidity() {
    return Joi.object({
      plan: Joi.string().allow("").required(),
      couponCode: Joi.string().allow("").required(),
    }).required();
  }

  static createOneTimeCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: BillingModel.CreateOneTimeCharge().required(),
    }).required();
  }

  static createSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: BillingModel.CreateSubscriptionCharge().required(),
    }).required();
  }

  static getChargeDetails() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      chargeId: Joi.string().allow("").required(),
    }).required();
  }

  static getCustomerDetail() {
    return Joi.object({}).required();
  }

  static getFeatureLimitConfig() {
    return Joi.object({}).required();
  }

  static getInvoiceById() {
    return Joi.object({
      invoiceId: Joi.string().allow("").required(),
    }).required();
  }

  static getInvoices() {
    return Joi.object({}).required();
  }

  static getSubscription() {
    return Joi.object({}).required();
  }

  static getSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }

  static upsertCustomerDetail() {
    return Joi.object({
      body: BillingModel.SubscriptionCustomerCreate().required(),
    }).required();
  }
}

module.exports = BillingValidator;
