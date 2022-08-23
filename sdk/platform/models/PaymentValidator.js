const Joi = require("joi");
const Validator = require("../PlatformModels");
class PaymentValidator {
  static getAllPayouts() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  static savePayout() {
    return Joi.object({
      body: Validator.PayoutRequest().required(),
    }).required();
  }

  static updatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: Validator.PayoutRequest().required(),
    }).required();
  }

  static activateAndDectivatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: Validator.UpdatePayoutRequest().required(),
    }).required();
  }

  static deletePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
    }).required();
  }

  static getSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  static deleteSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow("").required(),
      paymentMethodId: Joi.string().allow("").required(),
    }).required();
  }

  static getSubscriptionConfig() {
    return Joi.object({}).required();
  }

  static saveSubscriptionSetupIntent() {
    return Joi.object({
      body: Validator.SaveSubscriptionSetupIntentRequest().required(),
    }).required();
  }

  static verifyIfscCode() {
    return Joi.object({
      ifscCode: Joi.string().allow(""),
    }).required();
  }
}
module.exports = PaymentValidator;
