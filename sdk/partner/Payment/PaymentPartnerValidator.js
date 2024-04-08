const Joi = require("joi");

const PaymentModel = require("./PaymentPartnerModel");
class PaymentValidator {
  static getPaymentconfig() {
    return Joi.object({}).required();
  }

  static getPayout() {
    return Joi.object({
      uniqueExternalId: Joi.number().required(),
    }).required();
  }

  static postPayout() {
    return Joi.object({
      body: PaymentModel.PostPayoutRequest().required(),
    }).required();
  }

  static updatePayout() {
    return Joi.object({
      body: PaymentModel.PostPayoutRequest().required(),
    }).required();
  }

  static putPayout() {
    return Joi.object({
      body: PaymentModel.PostPayoutRequest().required(),
    }).required();
  }

  static deletePayout() {
    return Joi.object({
      uniqueExternalId: Joi.number().required(),
    }).required();
  }

  static getPayouts() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      uniqueExternalId: Joi.number().required(),
    }).required();
  }

  static postPayouts() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentModel.PostPayoutRequest().required(),
    }).required();
  }

  static updatePayouts() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentModel.PostPayoutRequest().required(),
    }).required();
  }

  static putPayouts() {
    return Joi.object({
      uniqueTransferNo: Joi.string().allow("").required(),
      body: PaymentModel.PostPayoutRequest().required(),
    }).required();
  }

  static deletePayouts() {
    return Joi.object({
      uniqueTransferNo: Joi.number().required(),
    }).required();
  }
}

module.exports = PaymentValidator;
