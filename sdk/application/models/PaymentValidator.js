const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class PaymentValidator {
  static getAggregatorsConfig() {
    return Joi.object({
      xApiToken: Joi.string().allow(""),
      refresh: Joi.boolean(),
    });
  }

  static attachCardToCustomer() {
    return Joi.object({
      body: Validator.AttachCardRequest().required(),
    }).required();
  }

  static getActiveCardAggregator() {
    return Joi.object({
      refresh: Joi.boolean(),
    });
  }

  static getActiveUserCards() {
    return Joi.object({
      forceRefresh: Joi.boolean(),
    });
  }

  static deleteUserCard() {
    return Joi.object({
      body: Validator.DeletehCardRequest().required(),
    }).required();
  }

  static verifyCustomerForPayment() {
    return Joi.object({
      body: Validator.ValidateCustomerRequest().required(),
    }).required();
  }

  static verifyAndChargePayment() {
    return Joi.object({
      body: Validator.ChargeCustomerRequest().required(),
    }).required();
  }

  static initialisePayment() {
    return Joi.object({
      body: Validator.PaymentInitializationRequest().required(),
    }).required();
  }

  static checkAndUpdatePaymentStatus() {
    return Joi.object({
      body: Validator.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  static getPaymentModeRoutes() {
    return Joi.object({
      amount: Joi.number().required(),
      cartId: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      checkoutMode: Joi.string().allow("").required(),
      refresh: Joi.boolean(),
      cardReference: Joi.string().allow(""),
      userDetails: Joi.string().allow(""),
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

  static getRupifiBannerDetails() {
    return Joi.object({});
  }

  static getEpaylaterBannerDetails() {
    return Joi.object({});
  }

  static resendOrCancelPayment() {
    return Joi.object({
      body: Validator.ResendOrCancelPaymentRequest().required(),
    }).required();
  }

  static renderHTML() {
    return Joi.object({
      body: Validator.renderHTMLRequest().required(),
    }).required();
  }

  static getActiveRefundTransferModes() {
    return Joi.object({});
  }

  static enableOrDisableRefundTransferMode() {
    return Joi.object({
      body: Validator.UpdateRefundTransferModeRequest().required(),
    }).required();
  }

  static getUserBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static verifyIfscCode() {
    return Joi.object({
      ifscCode: Joi.string().allow(""),
    });
  }

  static getOrderBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static verifyOtpAndAddBeneficiaryForBank() {
    return Joi.object({
      body: Validator.AddBeneficiaryViaOtpVerificationRequest().required(),
    }).required();
  }

  static addBeneficiaryDetails() {
    return Joi.object({
      body: Validator.AddBeneficiaryDetailsRequest().required(),
    }).required();
  }

  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: Validator.AddBeneficiaryDetailsOTPRequest().required(),
    }).required();
  }

  static verifyOtpAndAddBeneficiaryForWallet() {
    return Joi.object({
      body: Validator.WalletOtpRequest().required(),
    }).required();
  }

  static updateDefaultBeneficiary() {
    return Joi.object({
      body: Validator.SetDefaultBeneficiaryRequest().required(),
    }).required();
  }

  static getPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    });
  }

  static createPaymentLink() {
    return Joi.object({
      body: Validator.CreatePaymentLinkRequest().required(),
    }).required();
  }

  static resendPaymentLink() {
    return Joi.object({
      body: Validator.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  static cancelPaymentLink() {
    return Joi.object({
      body: Validator.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  static getPaymentModeRoutesPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow("").required(),
    }).required();
  }

  static pollingPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    });
  }

  static createOrderHandlerPaymentLink() {
    return Joi.object({
      body: Validator.CreateOrderUserRequest().required(),
    }).required();
  }

  static initialisePaymentPaymentLink() {
    return Joi.object({
      body: Validator.PaymentInitializationRequest().required(),
    }).required();
  }

  static checkAndUpdatePaymentStatusPaymentLink() {
    return Joi.object({
      body: Validator.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  static customerCreditSummary() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  static redirectToAggregator() {
    return Joi.object({
      source: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
    });
  }

  static checkCredit() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  static customerOnboard() {
    return Joi.object({
      body: Validator.CustomerOnboardingRequest().required(),
    }).required();
  }
}
module.exports = PaymentValidator;
