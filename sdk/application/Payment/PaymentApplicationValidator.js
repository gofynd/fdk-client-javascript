const Joi = require("joi");

const PaymentModel = require("./PaymentApplicationModel");
class PaymentValidator {
  static getAggregatorsConfig() {
    return Joi.object({
      xApiToken: Joi.string().allow(""),
      refresh: Joi.boolean(),
    });
  }

  static attachCardToCustomer() {
    return Joi.object({
      body: PaymentModel.AttachCardRequest().required(),
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
      body: PaymentModel.DeletehCardRequest().required(),
    }).required();
  }

  static verifyCustomerForPayment() {
    return Joi.object({
      body: PaymentModel.ValidateCustomerRequest().required(),
    }).required();
  }

  static verifyAndChargePayment() {
    return Joi.object({
      body: PaymentModel.ChargeCustomerRequest().required(),
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
      body: PaymentModel.ResendOrCancelPaymentRequest().required(),
    }).required();
  }

  static renderHTML() {
    return Joi.object({
      body: PaymentModel.renderHTMLRequest().required(),
    }).required();
  }

  static validateVPA() {
    return Joi.object({
      body: PaymentModel.ValidateVPARequest().required(),
    }).required();
  }

  static cardDetails() {
    return Joi.object({
      cardInfo: Joi.string().allow("").required(),
      aggregator: Joi.string().allow(""),
    }).required();
  }

  static getActiveRefundTransferModes() {
    return Joi.object({});
  }

  static enableOrDisableRefundTransferMode() {
    return Joi.object({
      body: PaymentModel.UpdateRefundTransferModeRequest().required(),
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
      body: PaymentModel.AddBeneficiaryViaOtpVerificationRequest().required(),
    }).required();
  }

  static addBeneficiaryDetails() {
    return Joi.object({
      body: PaymentModel.AddBeneficiaryDetailsRequest().required(),
    }).required();
  }

  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: PaymentModel.AddBeneficiaryDetailsOTPRequest().required(),
    }).required();
  }

  static verifyOtpAndAddBeneficiaryForWallet() {
    return Joi.object({
      body: PaymentModel.WalletOtpRequest().required(),
    }).required();
  }

  static updateDefaultBeneficiary() {
    return Joi.object({
      body: PaymentModel.SetDefaultBeneficiaryRequest().required(),
    }).required();
  }

  static getPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    });
  }

  static createPaymentLink() {
    return Joi.object({
      body: PaymentModel.CreatePaymentLinkRequest().required(),
    }).required();
  }

  static resendPaymentLink() {
    return Joi.object({
      body: PaymentModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  static cancelPaymentLink() {
    return Joi.object({
      body: PaymentModel.CancelOrResendPaymentLinkRequest().required(),
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
      body: PaymentModel.CreateOrderUserRequest().required(),
    }).required();
  }

  static initialisePaymentPaymentLink() {
    return Joi.object({
      body: PaymentModel.PaymentInitializationRequest().required(),
    }).required();
  }

  static checkAndUpdatePaymentStatusPaymentLink() {
    return Joi.object({
      body: PaymentModel.PaymentStatusUpdateRequest().required(),
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
      body: PaymentModel.CustomerOnboardingRequest().required(),
    }).required();
  }
}
module.exports = PaymentValidator;
