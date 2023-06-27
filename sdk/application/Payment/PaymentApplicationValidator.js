const Joi = require("joi");

const PaymentApplicationModel = require("./PaymentApplicationModel");

/**
 * @typedef addBeneficiaryDetails
 * @property {PaymentApplicationModel.AddBeneficiaryDetailsRequest} body
 */

/**
 * @typedef addRefundBankAccountUsingOTP
 * @property {PaymentApplicationModel.AddBeneficiaryDetailsOTPRequest} body
 */

/**
 * @typedef attachCardToCustomer
 * @property {PaymentApplicationModel.AttachCardRequest} body
 */

/**
 * @typedef cancelPaymentLink
 * @property {PaymentApplicationModel.CancelOrResendPaymentLinkRequest} body
 */

/**
 * @typedef cardDetails
 * @property {string} cardInfo - Card first 6 digit IIN(prefix) number.
 * @property {string} [aggregator]
 */

/**
 * @typedef checkAndUpdatePaymentStatus
 * @property {PaymentApplicationModel.PaymentStatusUpdateRequest} body
 */

/**
 * @typedef checkAndUpdatePaymentStatusPaymentLink
 * @property {PaymentApplicationModel.PaymentStatusUpdateRequest} body
 */

/**
 * @typedef checkCredit
 * @property {string} [aggregator]
 */

/**
 * @typedef createOrderHandlerPaymentLink
 * @property {PaymentApplicationModel.CreateOrderUserRequest} body
 */

/**
 * @typedef createPaymentLink
 * @property {PaymentApplicationModel.CreatePaymentLinkRequest} body
 */

/**
 * @typedef customerCreditSummary
 * @property {string} [aggregator]
 */

/**
 * @typedef customerOnboard
 * @property {PaymentApplicationModel.CustomerOnboardingRequest} body
 */

/**
 * @typedef deleteUserCard
 * @property {PaymentApplicationModel.DeletehCardRequest} body
 */

/**
 * @typedef enableOrDisableRefundTransferMode
 * @property {PaymentApplicationModel.UpdateRefundTransferModeRequest} body
 */

/**
 * @typedef getActiveCardAggregator
 * @property {boolean} [refresh]
 */

/** @typedef getActiveRefundTransferModes */

/**
 * @typedef getActiveUserCards
 * @property {boolean} [forceRefresh]
 */

/**
 * @typedef getAggregatorsConfig
 * @property {string} [xApiToken] - Used for basic authentication.
 * @property {boolean} [refresh] - This is a boolean value. Select `true` to
 *   remove temporary cache files on payment gateway and replace with the latest one.
 */

/** @typedef getEpaylaterBannerDetails */

/**
 * @typedef getOrderBeneficiariesDetail
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef getPaymentLink
 * @property {string} [paymentLinkId]
 */

/**
 * @typedef getPaymentModeRoutes
 * @property {number} amount - Payable amount.
 * @property {string} cartId - Identifier of the cart.
 * @property {string} pincode - The PIN Code of the destination address, e.g. 400059
 * @property {string} checkoutMode - Option to checkout for self or for others.
 * @property {boolean} [refresh] - This is a boolean value. Select `true` to
 *   remove temporary cache files on payment gateway and replace with the latest one.
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} [userDetails] - URIencoded JSON containing details of an
 *   anonymous user.
 */

/**
 * @typedef getPaymentModeRoutesPaymentLink
 * @property {string} paymentLinkId - Payment link id
 */

/**
 * @typedef getPosPaymentModeRoutes
 * @property {number} amount - Payable amount.
 * @property {string} cartId - Identifier of the cart.
 * @property {string} pincode - The PIN Code of the destination address, e.g. 400059
 * @property {string} checkoutMode - Option to checkout for self or for others.
 * @property {boolean} [refresh] - This is a boolean value. Select `true` to
 *   remove temporary cache files on payment gateway and replace with the latest one.
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} orderType - The order type of shipment * HomeDelivery - If
 *   the customer wants the order home-delivered * PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {string} [userDetails] - URIencoded JSON containing details of an
 *   anonymous user.
 */

/** @typedef getRupifiBannerDetails */

/**
 * @typedef getUserBeneficiariesDetail
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef initialisePayment
 * @property {PaymentApplicationModel.PaymentInitializationRequest} body
 */

/**
 * @typedef initialisePaymentPaymentLink
 * @property {PaymentApplicationModel.PaymentInitializationRequest} body
 */

/**
 * @typedef outstandingOrderDetails
 * @property {string} [aggregator]
 */

/**
 * @typedef paidOrderDetails
 * @property {string} [aggregator]
 */

/**
 * @typedef pollingPaymentLink
 * @property {string} [paymentLinkId]
 */

/**
 * @typedef redirectToAggregator
 * @property {string} [source] - This is a String value that contains callback
 *   URL as value.
 * @property {string} [aggregator] - This is a String value that contains
 *   aggregator name as value.
 */

/**
 * @typedef renderHTML
 * @property {PaymentApplicationModel.renderHTMLRequest} body
 */

/**
 * @typedef resendOrCancelPayment
 * @property {PaymentApplicationModel.ResendOrCancelPaymentRequest} body
 */

/**
 * @typedef resendPaymentLink
 * @property {PaymentApplicationModel.CancelOrResendPaymentLinkRequest} body
 */

/**
 * @typedef updateDefaultBeneficiary
 * @property {PaymentApplicationModel.SetDefaultBeneficiaryRequest} body
 */

/**
 * @typedef validateVPA
 * @property {PaymentApplicationModel.ValidateVPARequest} body
 */

/**
 * @typedef verifyAndChargePayment
 * @property {PaymentApplicationModel.ChargeCustomerRequest} body
 */

/**
 * @typedef verifyCustomerForPayment
 * @property {PaymentApplicationModel.ValidateCustomerRequest} body
 */

/**
 * @typedef verifyIfscCode
 * @property {string} [ifscCode] - A 11-digit alphanumeric code that uniquely
 *   identifies a bank branch.
 */

/**
 * @typedef verifyOtpAndAddBeneficiaryForBank
 * @property {PaymentApplicationModel.AddBeneficiaryViaOtpVerificationRequest} body
 */

/**
 * @typedef verifyOtpAndAddBeneficiaryForWallet
 * @property {PaymentApplicationModel.WalletOtpRequest} body
 */

class PaymentApplicationValidator {
  /** @returns {addBeneficiaryDetails} */
  static addBeneficiaryDetails() {
    return Joi.object({
      body: PaymentApplicationModel.AddBeneficiaryDetailsRequest().required(),
    }).required();
  }

  /** @returns {addRefundBankAccountUsingOTP} */
  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: PaymentApplicationModel.AddBeneficiaryDetailsOTPRequest().required(),
    }).required();
  }

  /** @returns {attachCardToCustomer} */
  static attachCardToCustomer() {
    return Joi.object({
      body: PaymentApplicationModel.AttachCardRequest().required(),
    }).required();
  }

  /** @returns {cancelPaymentLink} */
  static cancelPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {cardDetails} */
  static cardDetails() {
    return Joi.object({
      cardInfo: Joi.string().allow("").required(),
      aggregator: Joi.string().allow(""),
    }).required();
  }

  /** @returns {checkAndUpdatePaymentStatus} */
  static checkAndUpdatePaymentStatus() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  /** @returns {checkAndUpdatePaymentStatusPaymentLink} */
  static checkAndUpdatePaymentStatusPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  /** @returns {checkCredit} */
  static checkCredit() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {createOrderHandlerPaymentLink} */
  static createOrderHandlerPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CreateOrderUserRequest().required(),
    }).required();
  }

  /** @returns {createPaymentLink} */
  static createPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CreatePaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {customerCreditSummary} */
  static customerCreditSummary() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {customerOnboard} */
  static customerOnboard() {
    return Joi.object({
      body: PaymentApplicationModel.CustomerOnboardingRequest().required(),
    }).required();
  }

  /** @returns {deleteUserCard} */
  static deleteUserCard() {
    return Joi.object({
      body: PaymentApplicationModel.DeletehCardRequest().required(),
    }).required();
  }

  /** @returns {enableOrDisableRefundTransferMode} */
  static enableOrDisableRefundTransferMode() {
    return Joi.object({
      body: PaymentApplicationModel.UpdateRefundTransferModeRequest().required(),
    }).required();
  }

  /** @returns {getActiveCardAggregator} */
  static getActiveCardAggregator() {
    return Joi.object({
      refresh: Joi.boolean(),
    });
  }

  /** @returns {getActiveRefundTransferModes} */
  static getActiveRefundTransferModes() {
    return Joi.object({});
  }

  /** @returns {getActiveUserCards} */
  static getActiveUserCards() {
    return Joi.object({
      forceRefresh: Joi.boolean(),
    });
  }

  /** @returns {getAggregatorsConfig} */
  static getAggregatorsConfig() {
    return Joi.object({
      xApiToken: Joi.string().allow(""),
      refresh: Joi.boolean(),
    });
  }

  /** @returns {getEpaylaterBannerDetails} */
  static getEpaylaterBannerDetails() {
    return Joi.object({});
  }

  /** @returns {getOrderBeneficiariesDetail} */
  static getOrderBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getPaymentLink} */
  static getPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    });
  }

  /** @returns {getPaymentModeRoutes} */
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

  /** @returns {getPaymentModeRoutesPaymentLink} */
  static getPaymentModeRoutesPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getPosPaymentModeRoutes} */
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

  /** @returns {getRupifiBannerDetails} */
  static getRupifiBannerDetails() {
    return Joi.object({});
  }

  /** @returns {getUserBeneficiariesDetail} */
  static getUserBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {initialisePayment} */
  static initialisePayment() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentInitializationRequest().required(),
    }).required();
  }

  /** @returns {initialisePaymentPaymentLink} */
  static initialisePaymentPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentInitializationRequest().required(),
    }).required();
  }

  /** @returns {outstandingOrderDetails} */
  static outstandingOrderDetails() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {paidOrderDetails} */
  static paidOrderDetails() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {pollingPaymentLink} */
  static pollingPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    });
  }

  /** @returns {redirectToAggregator} */
  static redirectToAggregator() {
    return Joi.object({
      source: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {renderHTML} */
  static renderHTML() {
    return Joi.object({
      body: PaymentApplicationModel.renderHTMLRequest().required(),
    }).required();
  }

  /** @returns {resendOrCancelPayment} */
  static resendOrCancelPayment() {
    return Joi.object({
      body: PaymentApplicationModel.ResendOrCancelPaymentRequest().required(),
    }).required();
  }

  /** @returns {resendPaymentLink} */
  static resendPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {updateDefaultBeneficiary} */
  static updateDefaultBeneficiary() {
    return Joi.object({
      body: PaymentApplicationModel.SetDefaultBeneficiaryRequest().required(),
    }).required();
  }

  /** @returns {validateVPA} */
  static validateVPA() {
    return Joi.object({
      body: PaymentApplicationModel.ValidateVPARequest().required(),
    }).required();
  }

  /** @returns {verifyAndChargePayment} */
  static verifyAndChargePayment() {
    return Joi.object({
      body: PaymentApplicationModel.ChargeCustomerRequest().required(),
    }).required();
  }

  /** @returns {verifyCustomerForPayment} */
  static verifyCustomerForPayment() {
    return Joi.object({
      body: PaymentApplicationModel.ValidateCustomerRequest().required(),
    }).required();
  }

  /** @returns {verifyIfscCode} */
  static verifyIfscCode() {
    return Joi.object({
      ifscCode: Joi.string().allow(""),
    });
  }

  /** @returns {verifyOtpAndAddBeneficiaryForBank} */
  static verifyOtpAndAddBeneficiaryForBank() {
    return Joi.object({
      body: PaymentApplicationModel.AddBeneficiaryViaOtpVerificationRequest().required(),
    }).required();
  }

  /** @returns {verifyOtpAndAddBeneficiaryForWallet} */
  static verifyOtpAndAddBeneficiaryForWallet() {
    return Joi.object({
      body: PaymentApplicationModel.WalletOtpRequest().required(),
    }).required();
  }
}

module.exports = PaymentApplicationValidator;
