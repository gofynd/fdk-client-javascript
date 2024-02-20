const Joi = require("joi");

const PaymentApplicationModel = require("./PaymentApplicationModel");

/**
 * @typedef AddBeneficiaryDetailsParam
 * @property {PaymentApplicationModel.AddBeneficiaryDetailsRequest} body
 */

/**
 * @typedef AddRefundBankAccountUsingOTPParam
 * @property {PaymentApplicationModel.AddBeneficiaryDetailsOTPRequest} body
 */

/**
 * @typedef AttachCardToCustomerParam
 * @property {PaymentApplicationModel.AttachCardRequest} body
 */

/**
 * @typedef CancelPaymentLinkParam
 * @property {PaymentApplicationModel.CancelOrResendPaymentLinkRequest} body
 */

/**
 * @typedef CardDetailsParam
 * @property {string} cardInfo - Card first 6 digit IIN(prefix) number.
 * @property {string} [aggregator]
 */

/**
 * @typedef CheckAndUpdatePaymentStatusParam
 * @property {PaymentApplicationModel.PaymentStatusUpdateRequest} body
 */

/**
 * @typedef CheckAndUpdatePaymentStatusPaymentLinkParam
 * @property {PaymentApplicationModel.PaymentStatusUpdateRequest} body
 */

/**
 * @typedef CheckCreditParam
 * @property {string} [aggregator]
 */

/**
 * @typedef CreateOrderHandlerPaymentLinkParam
 * @property {PaymentApplicationModel.CreateOrderUserRequest} body
 */

/**
 * @typedef CreatePaymentLinkParam
 * @property {PaymentApplicationModel.CreatePaymentLinkRequest} body
 */

/**
 * @typedef CreatePaymentOrderParam
 * @property {PaymentApplicationModel.PaymentOrderRequest} body
 */

/**
 * @typedef CustomerCreditSummaryParam
 * @property {string} [aggregator]
 */

/**
 * @typedef CustomerOnboardParam
 * @property {PaymentApplicationModel.CustomerOnboardingRequest} body
 */

/**
 * @typedef DeleteBeneficiaryDetailsParam
 * @property {string} beneficiaryId - This is a String value that contains
 *   beneficiary_id as value.
 */

/**
 * @typedef DeleteUserCardParam
 * @property {PaymentApplicationModel.DeletehCardRequest} body
 */

/**
 * @typedef DelinkWalletParam
 * @property {PaymentApplicationModel.WalletDelinkRequestSchema} body
 */

/**
 * @typedef EnableOrDisableRefundTransferModeParam
 * @property {PaymentApplicationModel.UpdateRefundTransferModeRequest} body
 */

/**
 * @typedef GetActiveCardAggregatorParam
 * @property {boolean} [refresh]
 */

/** @typedef GetActiveRefundTransferModesParam */

/**
 * @typedef GetActiveUserCardsParam
 * @property {boolean} [forceRefresh]
 */

/**
 * @typedef GetAggregatorsConfigParam
 * @property {string} [xApiToken] - Used for basic authentication.
 * @property {boolean} [refresh] - This is a boolean value. Select `true` to
 *   remove temporary cache files on payment gateway and replace with the latest one.
 */

/** @typedef GetEpaylaterBannerDetailsParam */

/**
 * @typedef GetOrderBeneficiariesDetailParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef GetPaymentLinkParam
 * @property {string} [paymentLinkId]
 */

/**
 * @typedef GetPaymentModeRoutesParam
 * @property {number} amount - Payable amount.
 * @property {string} [cartId] - Identifier of the cart.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {boolean} [refresh] - This is a boolean value. Select `true` to
 *   remove temporary cache files on payment gateway and replace with the latest one.
 * @property {string} [orderId]
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} [userDetails] - URIencoded JSON containing details of an
 *   anonymous user.
 * @property {boolean} [displaySplit] - Display Split Payment Option or not
 * @property {boolean} [advancePayment] - Display Advance Payment Options or Normal
 * @property {string} [shipmentId]
 */

/**
 * @typedef GetPaymentModeRoutesPaymentLinkParam
 * @property {string} paymentLinkId - Payment link id
 */

/**
 * @typedef GetPosPaymentModeRoutesParam
 * @property {number} amount - Payable amount.
 * @property {string} [cartId] - Identifier of the cart.
 * @property {string} pincode - The PIN Code of the destination address, e.g. 400059
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {boolean} [refresh] - This is a boolean value. Select `true` to
 *   remove temporary cache files on payment gateway and replace with the latest one.
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} orderType - The order type of shipment * HomeDelivery - If
 *   the customer wants the order home-delivered * PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {string} [userDetails] - URIencoded JSON containing details of an
 *   anonymous user.
 */

/**
 * @typedef GetRefundOptionsParam
 * @property {string} configuration - Config type
 * @property {string} [productType] - Product Type either 1P and 3P
 * @property {string} [amount] - Refunded amount
 */

/** @typedef GetRupifiBannerDetailsParam */

/**
 * @typedef GetSelectedRefundOptionParam
 * @property {string} shipmentId - Shipment Id
 * @property {string} orderId - Order Id
 */

/**
 * @typedef GetUserBeneficiariesDetailParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef GetUserBeneficiariesDetailV2Param
 * @property {string} [orderId] - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} [shipmentId] - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} [mop] - Mode of payment for which beneficiary data required
 */

/**
 * @typedef InitialisePaymentParam
 * @property {PaymentApplicationModel.PaymentInitializationRequest} body
 */

/**
 * @typedef InitialisePaymentPaymentLinkParam
 * @property {PaymentApplicationModel.PaymentInitializationRequest} body
 */

/**
 * @typedef LinkWalletParam
 * @property {PaymentApplicationModel.WalletVerifyRequestSchema} body
 */

/**
 * @typedef OutstandingOrderDetailsParam
 * @property {string} [aggregator]
 */

/**
 * @typedef PaidOrderDetailsParam
 * @property {string} [aggregator]
 */

/**
 * @typedef PollingPaymentLinkParam
 * @property {string} [paymentLinkId]
 */

/**
 * @typedef RedirectToAggregatorParam
 * @property {string} [source] - This is a String value that contains callback
 *   URL as value.
 * @property {string} [aggregator] - This is a String value that contains
 *   aggregator name as value.
 */

/**
 * @typedef RenderHTMLParam
 * @property {PaymentApplicationModel.renderHTMLRequest} body
 */

/**
 * @typedef ResendOrCancelPaymentParam
 * @property {PaymentApplicationModel.ResendOrCancelPaymentRequest} body
 */

/**
 * @typedef ResendPaymentLinkParam
 * @property {PaymentApplicationModel.CancelOrResendPaymentLinkRequest} body
 */

/**
 * @typedef SetRefundOptionforShipmentParam
 * @property {PaymentApplicationModel.ShipmentRefundRequest} body
 */

/**
 * @typedef UpdateDefaultBeneficiaryParam
 * @property {PaymentApplicationModel.SetDefaultBeneficiaryRequest} body
 */

/**
 * @typedef ValidateBeneficiaryAddressParam
 * @property {PaymentApplicationModel.ValidateValidateAddressRequest} body
 */

/**
 * @typedef ValidateVPAParam
 * @property {PaymentApplicationModel.ValidateVPARequest} body
 */

/**
 * @typedef VerifyAndChargePaymentParam
 * @property {PaymentApplicationModel.ChargeCustomerRequest} body
 */

/**
 * @typedef VerifyCustomerForPaymentParam
 * @property {PaymentApplicationModel.ValidateCustomerRequest} body
 */

/**
 * @typedef VerifyIfscCodeParam
 * @property {string} [ifscCode] - A 11-digit alphanumeric code that uniquely
 *   identifies a bank branch.
 */

/**
 * @typedef VerifyOtpAndAddBeneficiaryForBankParam
 * @property {PaymentApplicationModel.AddBeneficiaryViaOtpVerificationRequest} body
 */

/**
 * @typedef VerifyOtpAndAddBeneficiaryForWalletParam
 * @property {PaymentApplicationModel.WalletOtpRequest} body
 */

/**
 * @typedef WalletLinkInitateParam
 * @property {PaymentApplicationModel.WalletLinkRequestSchema} body
 */

class PaymentApplicationValidator {
  /** @returns {AddBeneficiaryDetailsParam} */
  static addBeneficiaryDetails() {
    return Joi.object({
      body: PaymentApplicationModel.AddBeneficiaryDetailsRequest().required(),
    }).required();
  }

  /** @returns {AddRefundBankAccountUsingOTPParam} */
  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: PaymentApplicationModel.AddBeneficiaryDetailsOTPRequest().required(),
    }).required();
  }

  /** @returns {AttachCardToCustomerParam} */
  static attachCardToCustomer() {
    return Joi.object({
      body: PaymentApplicationModel.AttachCardRequest().required(),
    }).required();
  }

  /** @returns {CancelPaymentLinkParam} */
  static cancelPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {CardDetailsParam} */
  static cardDetails() {
    return Joi.object({
      cardInfo: Joi.string().allow("").required(),
      aggregator: Joi.string().allow(""),
    }).required();
  }

  /** @returns {CheckAndUpdatePaymentStatusParam} */
  static checkAndUpdatePaymentStatus() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  /** @returns {CheckAndUpdatePaymentStatusPaymentLinkParam} */
  static checkAndUpdatePaymentStatusPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  /** @returns {CheckCreditParam} */
  static checkCredit() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {CreateOrderHandlerPaymentLinkParam} */
  static createOrderHandlerPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CreateOrderUserRequest().required(),
    }).required();
  }

  /** @returns {CreatePaymentLinkParam} */
  static createPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CreatePaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {CreatePaymentOrderParam} */
  static createPaymentOrder() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentOrderRequest().required(),
    }).required();
  }

  /** @returns {CustomerCreditSummaryParam} */
  static customerCreditSummary() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerOnboardParam} */
  static customerOnboard() {
    return Joi.object({
      body: PaymentApplicationModel.CustomerOnboardingRequest().required(),
    }).required();
  }

  /** @returns {DeleteBeneficiaryDetailsParam} */
  static deleteBeneficiaryDetails() {
    return Joi.object({
      beneficiaryId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteUserCardParam} */
  static deleteUserCard() {
    return Joi.object({
      body: PaymentApplicationModel.DeletehCardRequest().required(),
    }).required();
  }

  /** @returns {DelinkWalletParam} */
  static delinkWallet() {
    return Joi.object({
      body: PaymentApplicationModel.WalletDelinkRequestSchema().required(),
    }).required();
  }

  /** @returns {EnableOrDisableRefundTransferModeParam} */
  static enableOrDisableRefundTransferMode() {
    return Joi.object({
      body: PaymentApplicationModel.UpdateRefundTransferModeRequest().required(),
    }).required();
  }

  /** @returns {GetActiveCardAggregatorParam} */
  static getActiveCardAggregator() {
    return Joi.object({
      refresh: Joi.boolean(),
    });
  }

  /** @returns {GetActiveRefundTransferModesParam} */
  static getActiveRefundTransferModes() {
    return Joi.object({});
  }

  /** @returns {GetActiveUserCardsParam} */
  static getActiveUserCards() {
    return Joi.object({
      forceRefresh: Joi.boolean(),
    });
  }

  /** @returns {GetAggregatorsConfigParam} */
  static getAggregatorsConfig() {
    return Joi.object({
      xApiToken: Joi.string().allow(""),
      refresh: Joi.boolean(),
    });
  }

  /** @returns {GetEpaylaterBannerDetailsParam} */
  static getEpaylaterBannerDetails() {
    return Joi.object({});
  }

  /** @returns {GetOrderBeneficiariesDetailParam} */
  static getOrderBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPaymentLinkParam} */
  static getPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    });
  }

  /** @returns {GetPaymentModeRoutesParam} */
  static getPaymentModeRoutes() {
    return Joi.object({
      amount: Joi.number().required(),
      cartId: Joi.string().allow(""),
      checkoutMode: Joi.string().allow(""),
      refresh: Joi.boolean(),
      orderId: Joi.string().allow(""),
      cardReference: Joi.string().allow(""),
      userDetails: Joi.string().allow(""),
      displaySplit: Joi.boolean(),
      advancePayment: Joi.boolean(),
      shipmentId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPaymentModeRoutesPaymentLinkParam} */
  static getPaymentModeRoutesPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPosPaymentModeRoutesParam} */
  static getPosPaymentModeRoutes() {
    return Joi.object({
      amount: Joi.number().required(),
      cartId: Joi.string().allow(""),
      pincode: Joi.string().allow("").required(),
      checkoutMode: Joi.string().allow(""),
      refresh: Joi.boolean(),
      cardReference: Joi.string().allow(""),
      orderType: Joi.string().allow("").required(),
      userDetails: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetRefundOptionsParam} */
  static getRefundOptions() {
    return Joi.object({
      configuration: Joi.string().allow("").required(),
      productType: Joi.string().allow(""),
      amount: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetRupifiBannerDetailsParam} */
  static getRupifiBannerDetails() {
    return Joi.object({});
  }

  /** @returns {GetSelectedRefundOptionParam} */
  static getSelectedRefundOption() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserBeneficiariesDetailParam} */
  static getUserBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserBeneficiariesDetailV2Param} */
  static getUserBeneficiariesDetailV2() {
    return Joi.object({
      orderId: Joi.string().allow(""),
      shipmentId: Joi.string().allow(""),
      mop: Joi.string().allow(""),
    });
  }

  /** @returns {InitialisePaymentParam} */
  static initialisePayment() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentInitializationRequest().required(),
    }).required();
  }

  /** @returns {InitialisePaymentPaymentLinkParam} */
  static initialisePaymentPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentInitializationRequest().required(),
    }).required();
  }

  /** @returns {LinkWalletParam} */
  static linkWallet() {
    return Joi.object({
      body: PaymentApplicationModel.WalletVerifyRequestSchema().required(),
    }).required();
  }

  /** @returns {OutstandingOrderDetailsParam} */
  static outstandingOrderDetails() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {PaidOrderDetailsParam} */
  static paidOrderDetails() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {PollingPaymentLinkParam} */
  static pollingPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    });
  }

  /** @returns {RedirectToAggregatorParam} */
  static redirectToAggregator() {
    return Joi.object({
      source: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
    });
  }

  /** @returns {RenderHTMLParam} */
  static renderHTML() {
    return Joi.object({
      body: PaymentApplicationModel.renderHTMLRequest().required(),
    }).required();
  }

  /** @returns {ResendOrCancelPaymentParam} */
  static resendOrCancelPayment() {
    return Joi.object({
      body: PaymentApplicationModel.ResendOrCancelPaymentRequest().required(),
    }).required();
  }

  /** @returns {ResendPaymentLinkParam} */
  static resendPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {SetRefundOptionforShipmentParam} */
  static setRefundOptionforShipment() {
    return Joi.object({
      body: PaymentApplicationModel.ShipmentRefundRequest().required(),
    }).required();
  }

  /** @returns {UpdateDefaultBeneficiaryParam} */
  static updateDefaultBeneficiary() {
    return Joi.object({
      body: PaymentApplicationModel.SetDefaultBeneficiaryRequest().required(),
    }).required();
  }

  /** @returns {ValidateBeneficiaryAddressParam} */
  static validateBeneficiaryAddress() {
    return Joi.object({
      body: PaymentApplicationModel.ValidateValidateAddressRequest().required(),
    }).required();
  }

  /** @returns {ValidateVPAParam} */
  static validateVPA() {
    return Joi.object({
      body: PaymentApplicationModel.ValidateVPARequest().required(),
    }).required();
  }

  /** @returns {VerifyAndChargePaymentParam} */
  static verifyAndChargePayment() {
    return Joi.object({
      body: PaymentApplicationModel.ChargeCustomerRequest().required(),
    }).required();
  }

  /** @returns {VerifyCustomerForPaymentParam} */
  static verifyCustomerForPayment() {
    return Joi.object({
      body: PaymentApplicationModel.ValidateCustomerRequest().required(),
    }).required();
  }

  /** @returns {VerifyIfscCodeParam} */
  static verifyIfscCode() {
    return Joi.object({
      ifscCode: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyOtpAndAddBeneficiaryForBankParam} */
  static verifyOtpAndAddBeneficiaryForBank() {
    return Joi.object({
      body: PaymentApplicationModel.AddBeneficiaryViaOtpVerificationRequest().required(),
    }).required();
  }

  /** @returns {VerifyOtpAndAddBeneficiaryForWalletParam} */
  static verifyOtpAndAddBeneficiaryForWallet() {
    return Joi.object({
      body: PaymentApplicationModel.WalletOtpRequest().required(),
    }).required();
  }

  /** @returns {WalletLinkInitateParam} */
  static walletLinkInitate() {
    return Joi.object({
      body: PaymentApplicationModel.WalletLinkRequestSchema().required(),
    }).required();
  }
}

module.exports = PaymentApplicationValidator;
