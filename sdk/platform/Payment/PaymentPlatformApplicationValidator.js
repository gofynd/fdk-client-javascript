const Joi = require("joi");

const PaymentModel = require("./PaymentPlatformModel");
class PaymentValidator {
  static addBeneficiaryDetails() {
    return Joi.object({
      body: PaymentModel.AddBeneficiaryDetailsRequest().required(),
    }).required();
  }

  static confirmPayment() {
    return Joi.object({
      body: PaymentModel.PaymentConfirmationRequest().required(),
    }).required();
  }

  static getBrandPaymentGatewayConfig() {
    return Joi.object({}).required();
  }

  static getPaymentModeRoutes() {
    return Joi.object({
      refresh: Joi.boolean().required(),
      requestType: Joi.string().allow("").required(),
    }).required();
  }

  static getUserBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getUserOrderBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static saveBrandPaymentGatewayConfig() {
    return Joi.object({
      body: PaymentModel.PaymentGatewayConfigRequest().required(),
    }).required();
  }

  static updateBrandPaymentGatewayConfig() {
    return Joi.object({
      body: PaymentModel.PaymentGatewayConfigRequest().required(),
    }).required();
  }
}

module.exports = PaymentValidator;
