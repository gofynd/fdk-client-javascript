const Joi = require("joi");

const PaymentModel = require("./PaymentPlatformModel");
class PaymentValidator {
  static addEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
      body: PaymentModel.EdcUpdateRequest().required(),
    }).required();
  }

  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: PaymentModel.AddBeneficiaryDetailsOTPRequest().required(),
    }).required();
  }

  static cancelPaymentLink() {
    return Joi.object({
      body: PaymentModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  static checkAndUpdatePaymentStatus() {
    return Joi.object({
      body: PaymentModel.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  static confirmPayment() {
    return Joi.object({
      body: PaymentModel.PaymentConfirmationRequest().required(),
    }).required();
  }

  static createPaymentLink() {
    return Joi.object({
      body: PaymentModel.CreatePaymentLinkRequest().required(),
    }).required();
  }

  static edcAggregatorsAndModelList() {
    return Joi.object({}).required();
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

  static edcDeviceStats() {
    return Joi.object({}).required();
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

  static getEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
    }).required();
  }

  static getMerchantAggregatorPaymentModeDetails() {
    return Joi.object({
      aggregatorId: Joi.number().required(),
      businessUnit: Joi.string().allow("").required(),
      device: Joi.string().allow("").required(),
    }).required();
  }

  static getMerchantPaymentOption() {
    return Joi.object({}).required();
  }

  static getPGConfigAggregators() {
    return Joi.object({}).required();
  }

  static getPaymentCodeOption() {
    return Joi.object({}).required();
  }

  static getPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    }).required();
  }

  static getPaymentModeRoutes() {
    return Joi.object({
      refresh: Joi.boolean().required(),
      requestType: Joi.string().allow("").required(),
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

  static initialisePayment() {
    return Joi.object({
      body: PaymentModel.PaymentInitializationRequest().required(),
    }).required();
  }

  static merchantOnBoarding() {
    return Joi.object({
      body: PaymentModel.MerchantOnBoardingRequest().required(),
    }).required();
  }

  static oauthGetUrl() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      successRedirectUrl: Joi.string().allow(""),
      failureRedirectUrl: Joi.string().allow(""),
    }).required();
  }

  static patchMerchantAggregatorPaymentModeDetails() {
    return Joi.object({
      aggregatorId: Joi.number().required(),
      body: PaymentModel.MerchnatPaymentModeResponse().required(),
    }).required();
  }

  static patchMerchantPaymentOption() {
    return Joi.object({
      body: PaymentModel.MerchnatPaymentModeResponse().required(),
    }).required();
  }

  static paymentStatusBulk() {
    return Joi.object({
      body: PaymentModel.PaymentStatusBulkHandlerRequest().required(),
    }).required();
  }

  static pollingPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    }).required();
  }

  static repaymentDetails() {
    return Joi.object({
      body: PaymentModel.RepaymentDetailsSerialiserPayAll().required(),
    }).required();
  }

  static resendOrCancelPayment() {
    return Joi.object({
      body: PaymentModel.ResendOrCancelPaymentRequest().required(),
    }).required();
  }

  static resendPaymentLink() {
    return Joi.object({
      body: PaymentModel.CancelOrResendPaymentLinkRequest().required(),
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

  static updateEdcDevice() {
    return Joi.object({
      body: PaymentModel.EdcAddRequest().required(),
    }).required();
  }

  static updatePaymentSession() {
    return Joi.object({
      gid: Joi.string().allow("").required(),
      body: PaymentModel.PaymentSessionRequestSerializer().required(),
    }).required();
  }

  static updateRefundSession() {
    return Joi.object({
      gid: Joi.string().allow("").required(),
      requestId: Joi.string().allow("").required(),
      body: PaymentModel.RefundSessionRequestSerializer().required(),
    }).required();
  }

  static verifyCustomerForPayment() {
    return Joi.object({
      body: PaymentModel.ValidateCustomerRequest().required(),
    }).required();
  }
}

module.exports = PaymentValidator;
