const Joi = require("joi");

const PaymentApplicationModel = require("./PaymentApplicationModel");

/**
 * @typedef AddBeneficiaryDetailsParam
 * @property {PaymentApplicationModel.AddBeneficiaryDetails} body
 */

/**
 * @typedef AddRefundBankAccountUsingOTPParam
 * @property {PaymentApplicationModel.AddBeneficiaryDetailsOTP} body
 */

/**
 * @typedef AttachCardToCustomerParam
 * @property {PaymentApplicationModel.AttachCard} body
 */

/**
 * @typedef CancelPaymentLinkParam
 * @property {PaymentApplicationModel.CancelOrResendPaymentLink} body
 */

/**
 * @typedef CardDetailsParam
 * @property {string} cardInfo - Card first 6 digit IIN(prefix) number.
 * @property {string} [aggregator] - This is a string value describing the
 *   aggregator name.
 */

/**
 * @typedef CheckAndUpdatePaymentStatusParam
 * @property {PaymentApplicationModel.PaymentStatusUpdate} body
 */

/**
 * @typedef CheckAndUpdatePaymentStatusPaymentLinkParam
 * @property {PaymentApplicationModel.PaymentStatusUpdate} body
 */

/**
 * @typedef CheckCreditParam
 * @property {string} [aggregator] - Aggregator name.
 */

/**
 * @typedef CreateOrderHandlerPaymentLinkParam
 * @property {PaymentApplicationModel.CreateOrderUser} body
 */

/**
 * @typedef CreatePaymentLinkParam
 * @property {PaymentApplicationModel.CreatePaymentLink} body
 */

/**
 * @typedef CreatePaymentOrderParam
 * @property {PaymentApplicationModel.PaymentOrder} body
 */

/**
 * @typedef CustomerCreditSummaryParam
 * @property {string} [aggregator] - Aggregator name.
 */

/**
 * @typedef CustomerOnboardParam
 * @property {PaymentApplicationModel.CustomerOnboarding} body
 */

/**
 * @typedef DeleteUserCardParam
 * @property {PaymentApplicationModel.DeleteCard} body
 */

/**
 * @typedef DelinkWalletParam
 * @property {PaymentApplicationModel.WalletDelinkRequestSchema} body
 */

/**
 * @typedef EnableOrDisableRefundTransferModeParam
 * @property {PaymentApplicationModel.UpdateRefundTransferMode} body
 */

/**
 * @typedef GetActiveCardAggregatorParam
 * @property {boolean} [refresh] - Select `true` to remove temporary cache files
 *   on payment gateway and replace with the latest one.
 */

/** @typedef GetActiveRefundTransferModesParam */

/**
 * @typedef GetActiveUserCardsParam
 * @property {boolean} [forceRefresh] - Select `true` to clear the cache.
 */

/**
 * @typedef GetAggregatorsConfigParam
 * @property {string} [xApiToken] - Basic auth token.
 * @property {boolean} [refresh] - Select `true` to remove temporary cache files
 *   on payment gateway and replace with the latest one.
 */

/** @typedef GetEpaylaterBannerDetailsParam */

/**
 * @typedef GetOrderBeneficiariesDetailParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef GetPaymentLinkParam
 * @property {string} [paymentLinkId] - Unique payment link id.
 */

/**
 * @typedef GetPaymentModeRoutesParam
 * @property {number} amount - Payable amount.
 * @property {string} [cartId] - Identifier of the cart.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {boolean} [refresh] - Select `true` to remove temporary cache files
 *   on payment gateway and replace with the latest one.
 * @property {string} [orderId] - Identifier of the order, order_id.
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} [userDetails] - URLencoded JSON containing details of an
 *   anonymous user.
 * @property {boolean} [displaySplit] - Display Split Payment Option or not.
 * @property {boolean} [advancePayment] - Display Advance Payment Options or Normal.
 * @property {string} [shipmentId] - Identifier of the shipment, shipment_id.
 */

/**
 * @typedef GetPaymentModeRoutesPaymentLinkParam
 * @property {string} paymentLinkId - Payment link id.
 */

/**
 * @typedef GetPosPaymentModeRoutesParam
 * @property {number} amount - Payable amount.
 * @property {string} [cartId] - Identifier of the cart.
 * @property {string} pincode - The PIN Code of the destination address, e.g. 400059.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {boolean} [refresh] - Select `true` to remove temporary cache files
 *   on payment gateway and replace with the latest one.
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} orderType - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {string} [userDetails] - URLencoded JSON containing details of an
 *   anonymous user.
 */

/** @typedef GetRupifiBannerDetailsParam */

/**
 * @typedef GetUserBeneficiariesDetailParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef InitialisePaymentParam
 * @property {PaymentApplicationModel.PaymentInitialization} body
 */

/**
 * @typedef InitialisePaymentPaymentLinkParam
 * @property {PaymentApplicationModel.PaymentInitialization} body
 */

/**
 * @typedef LinkWalletParam
 * @property {PaymentApplicationModel.WalletVerifyRequestSchema} body
 */

/**
 * @typedef OutstandingOrderDetailsParam
 * @property {string} [aggregator] - Merchant user ID as value.
 */

/**
 * @typedef PaidOrderDetailsParam
 * @property {string} [aggregator] - Merchant user ID as value.
 */

/**
 * @typedef PollingPaymentLinkParam
 * @property {string} [paymentLinkId] - Unique payment link id.
 */

/**
 * @typedef RedirectToAggregatorParam
 * @property {string} [source] - Callback URL to get callback from aggregator.
 * @property {string} [aggregator] - Aggregator name.
 */

/**
 * @typedef RenderHTMLParam
 * @property {PaymentApplicationModel.RenderHTML} body
 */

/**
 * @typedef ResendOrCancelPaymentParam
 * @property {PaymentApplicationModel.ResendOrCancelPayment} body
 */

/**
 * @typedef ResendPaymentLinkParam
 * @property {PaymentApplicationModel.CancelOrResendPaymentLink} body
 */

/**
 * @typedef UpdateDefaultBeneficiaryParam
 * @property {PaymentApplicationModel.SetDefaultBeneficiary} body
 */

/**
 * @typedef ValidateVPAParam
 * @property {PaymentApplicationModel.ValidateVPA} body
 */

/**
 * @typedef VerifyAndChargePaymentParam
 * @property {PaymentApplicationModel.ChargeCustomer} body
 */

/**
 * @typedef VerifyCustomerForPaymentParam
 * @property {PaymentApplicationModel.ValidateCustomer} body
 */

/**
 * @typedef VerifyIfscCodeParam
 * @property {string} [ifscCode] - A 11-digit alphanumeric code that uniquely
 *   identifies a bank branch.
 */

/**
 * @typedef VerifyOtpAndAddBeneficiaryForBankParam
 * @property {PaymentApplicationModel.AddBeneficiaryViaOtpVerification} body
 */

/**
 * @typedef VerifyOtpAndAddBeneficiaryForWalletParam
 * @property {PaymentApplicationModel.WalletOtp} body
 */

/**
 * @typedef WalletLinkInitiateParam
 * @property {PaymentApplicationModel.WalletLinkRequestSchema} body
 */

class PaymentApplicationValidator {
  /** @returns {AddBeneficiaryDetailsParam} */
  static addBeneficiaryDetails() {
    return Joi.object({
      body: PaymentApplicationModel.AddBeneficiaryDetails().required(),
    }).required();
  }

  /** @returns {AddRefundBankAccountUsingOTPParam} */
  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: PaymentApplicationModel.AddBeneficiaryDetailsOTP().required(),
    }).required();
  }

  /** @returns {AttachCardToCustomerParam} */
  static attachCardToCustomer() {
    return Joi.object({
      body: PaymentApplicationModel.AttachCard().required(),
    }).required();
  }

  /** @returns {CancelPaymentLinkParam} */
  static cancelPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CancelOrResendPaymentLink().required(),
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
      body: PaymentApplicationModel.PaymentStatusUpdate().required(),
    }).required();
  }

  /** @returns {CheckAndUpdatePaymentStatusPaymentLinkParam} */
  static checkAndUpdatePaymentStatusPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentStatusUpdate().required(),
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
      body: PaymentApplicationModel.CreateOrderUser().required(),
    }).required();
  }

  /** @returns {CreatePaymentLinkParam} */
  static createPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CreatePaymentLink().required(),
    }).required();
  }

  /** @returns {CreatePaymentOrderParam} */
  static createPaymentOrder() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentOrder().required(),
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
      body: PaymentApplicationModel.CustomerOnboarding().required(),
    }).required();
  }

  /** @returns {DeleteUserCardParam} */
  static deleteUserCard() {
    return Joi.object({
      body: PaymentApplicationModel.DeleteCard().required(),
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
      body: PaymentApplicationModel.UpdateRefundTransferMode().required(),
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

  /** @returns {GetRupifiBannerDetailsParam} */
  static getRupifiBannerDetails() {
    return Joi.object({});
  }

  /** @returns {GetUserBeneficiariesDetailParam} */
  static getUserBeneficiariesDetail() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {InitialisePaymentParam} */
  static initialisePayment() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentInitialization().required(),
    }).required();
  }

  /** @returns {InitialisePaymentPaymentLinkParam} */
  static initialisePaymentPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.PaymentInitialization().required(),
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
      body: PaymentApplicationModel.RenderHTML().required(),
    }).required();
  }

  /** @returns {ResendOrCancelPaymentParam} */
  static resendOrCancelPayment() {
    return Joi.object({
      body: PaymentApplicationModel.ResendOrCancelPayment().required(),
    }).required();
  }

  /** @returns {ResendPaymentLinkParam} */
  static resendPaymentLink() {
    return Joi.object({
      body: PaymentApplicationModel.CancelOrResendPaymentLink().required(),
    }).required();
  }

  /** @returns {UpdateDefaultBeneficiaryParam} */
  static updateDefaultBeneficiary() {
    return Joi.object({
      body: PaymentApplicationModel.SetDefaultBeneficiary().required(),
    }).required();
  }

  /** @returns {ValidateVPAParam} */
  static validateVPA() {
    return Joi.object({
      body: PaymentApplicationModel.ValidateVPA().required(),
    }).required();
  }

  /** @returns {VerifyAndChargePaymentParam} */
  static verifyAndChargePayment() {
    return Joi.object({
      body: PaymentApplicationModel.ChargeCustomer().required(),
    }).required();
  }

  /** @returns {VerifyCustomerForPaymentParam} */
  static verifyCustomerForPayment() {
    return Joi.object({
      body: PaymentApplicationModel.ValidateCustomer().required(),
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
      body: PaymentApplicationModel.AddBeneficiaryViaOtpVerification().required(),
    }).required();
  }

  /** @returns {VerifyOtpAndAddBeneficiaryForWalletParam} */
  static verifyOtpAndAddBeneficiaryForWallet() {
    return Joi.object({
      body: PaymentApplicationModel.WalletOtp().required(),
    }).required();
  }

  /** @returns {WalletLinkInitiateParam} */
  static walletLinkInitiate() {
    return Joi.object({
      body: PaymentApplicationModel.WalletLinkRequestSchema().required(),
    }).required();
  }
}

module.exports = PaymentApplicationValidator;
