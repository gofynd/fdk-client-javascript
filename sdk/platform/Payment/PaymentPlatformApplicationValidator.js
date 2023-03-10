const Joi = require("joi");
const PaymentModel = require("./PaymentPlatformModel");

class PaymentValidator {
  static getBrandPaymentGatewayConfig() {
    return Joi.object({}).required();
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

  static getPaymentModeRoutes() {
    return Joi.object({
      refresh: Joi.boolean().required(),
      requestType: Joi.string().allow("").required(),
    }).required();
  }

  static addBeneficiaryDetails() {
    return Joi.object({
      body: PaymentModel.AddBeneficiaryDetailsRequest().required(),
    }).required();
  }

  static getUserOrderBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getUserBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static confirmPayment() {
    return Joi.object({
      body: PaymentModel.PaymentConfirmationRequest().required(),
    }).required();
  }

  static getUserCODlimitRoutes() {
    return Joi.object({
      merchantUserId: Joi.string().allow("").required(),
      mobileNo: Joi.string().allow("").required(),
    }).required();
  }

  static setUserCODlimitRoutes() {
    return Joi.object({
      body: PaymentModel.SetCODForUserRequest().required(),
    }).required();
  }

  static repaymentDetails() {
    return Joi.object({
      body: PaymentModel.RepaymentDetailsSerialiserPayAll().required(),
    }).required();
  }

  static merchantOnBoarding() {
    return Joi.object({
      body: PaymentModel.MerchantOnBoardingRequest().required(),
    }).required();
  }
}

module.exports = PaymentValidator;
