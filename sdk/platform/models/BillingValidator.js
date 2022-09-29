const Joi = require("joi");
const Validator = require("../PlatformModels");
class BillingValidator {
  static checkCouponValidity() {
    return Joi.object({
      plan: Joi.string().allow("").required(),
      couponCode: Joi.string().allow("").required(),
    }).required();
  }

  static createSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: Validator.CreateSubscriptionCharge().required(),
    }).required();
  }

  static getSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }

  static cancelSubscriptionCharge() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      subscriptionId: Joi.string().allow("").required(),
    }).required();
  }

  static getInvoices() {
    return Joi.object({}).required();
  }

  static getInvoiceById() {
    return Joi.object({
      invoiceId: Joi.string().allow("").required(),
    }).required();
  }

  static getCustomerDetail() {
    return Joi.object({}).required();
  }

  static upsertCustomerDetail() {
    return Joi.object({
      body: Validator.SubscriptionCustomerCreate().required(),
    }).required();
  }

  static getSubscription() {
    return Joi.object({}).required();
  }

  static getFeatureLimitConfig() {
    return Joi.object({}).required();
  }

  static activateSubscriptionPlan() {
    return Joi.object({
      body: Validator.SubscriptionActivateReq().required(),
    }).required();
  }

  static cancelSubscriptionPlan() {
    return Joi.object({
      body: Validator.CancelSubscriptionReq().required(),
    }).required();
  }
}
module.exports = BillingValidator;
