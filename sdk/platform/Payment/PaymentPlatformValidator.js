const Joi = require("joi");

const PaymentModel = require("./PaymentPlatformModel");
class PaymentValidator {
  static activateAndDectivatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentModel.UpdatePayoutRequest().required(),
    }).required();
  }

  static deletePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
    }).required();
  }

  static deleteSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow("").required(),
      paymentMethodId: Joi.string().allow("").required(),
    }).required();
  }

  static getAllPayouts() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  static getSubscriptionConfig() {
    return Joi.object({}).required();
  }

  static getSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().allow(""),
    }).required();
  }

  static savePayout() {
    return Joi.object({
      body: PaymentModel.PayoutRequest().required(),
    }).required();
  }

  static saveSubscriptionSetupIntent() {
    return Joi.object({
      body: PaymentModel.SaveSubscriptionSetupIntentRequest().required(),
    }).required();
  }

  static updatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentModel.PayoutRequest().required(),
    }).required();
  }

  static verifyIfscCode() {
    return Joi.object({
      ifscCode: Joi.string().allow(""),
    }).required();
  }
}

module.exports = PaymentValidator;
