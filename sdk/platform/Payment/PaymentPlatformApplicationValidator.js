const Joi = require("joi");

const PaymentModel = require("./PaymentPlatformModel");
class PaymentValidator {
  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: PaymentModel.AddBeneficiaryDetailsOTPRequest().required(),
    }).required();
  }

  static confirmPayment() {
    return Joi.object({
      body: PaymentModel.PaymentConfirmationRequest().required(),
    }).required();
  }

  static getBankAccountDetailsOpenAPI() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      requestHash: Joi.string().allow(""),
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

  static getUserCODlimitRoutes() {
    return Joi.object({
      merchantUserId: Joi.string().allow("").required(),
      mobileNo: Joi.string().allow("").required(),
    }).required();
  }

  static getUserOrderBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static oauthGetUrl() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      successRedirectUrl: Joi.string().allow(""),
      failureRedirectUrl: Joi.string().allow(""),
    }).required();
  }

  static revokeOauthToken() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
    }).required();
  }

  static saveBrandPaymentGatewayConfig() {
    return Joi.object({
      body: PaymentModel.PaymentGatewayConfigRequest().required(),
    }).required();
  }

  static setUserCODlimitRoutes() {
    return Joi.object({
      body: PaymentModel.SetCODForUserRequest().required(),
    }).required();
  }
}

module.exports = PaymentValidator;
