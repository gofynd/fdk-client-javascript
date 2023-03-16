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

  static getBankAccountDetailsOpenAPI() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      requestHash: Joi.string().allow(""),
    }).required();
  }

  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: PaymentModel.AddBeneficiaryDetailsOTPRequest().required(),
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

  static getPlatformPaymentConfig() {
    return Joi.object({}).required();
  }

  static updatePlatformPaymentConfig() {
    return Joi.object({
      body: PaymentModel.UpdatePlatformPaymentConfig().required(),
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

  static edcAggregatorsAndModelList() {
    return Joi.object({}).required();
  }

  static edcDeviceStats() {
    return Joi.object({}).required();
  }

  static updateEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
      body: PaymentModel.EdcAddRequest().required(),
    }).required();
  }

  static getEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
    }).required();
  }

  static addEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
      body: PaymentModel.EdcUpdateRequest().required(),
    }).required();
  }

  static edcDeviceList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isActive: Joi.boolean(),
      storeId: Joi.number(),
      deviceTag: Joi.string().allow(""),
    }).required();
  }

  static getPosPaymentModeRoutes() {
    return Joi.object({
      amount: Joi.number().required(),
      cartId: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      checkoutMode: Joi.string().allow("").required(),
      refresh: Joi.boolean(),
      cardReference: Joi.string().allow(""),
      orderType: Joi.string().allow("").required(),
      userDetails: Joi.string().allow(""),
    }).required();
  }

  static initialisePayment() {
    return Joi.object({
      body: PaymentModel.PaymentInitializationRequest().required(),
    }).required();
  }

  static checkAndUpdatePaymentStatus() {
    return Joi.object({
      body: PaymentModel.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  static resendOrCancelPayment() {
    return Joi.object({
      body: PaymentModel.ResendOrCancelPaymentRequest().required(),
    }).required();
  }
}

module.exports = PaymentValidator;
