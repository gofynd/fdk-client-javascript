const Joi = require("joi");

const PaymentPlatformModel = require("./PaymentPlatformModel");

/**
 * @typedef AddEdcDeviceParam
 * @property {string} terminalUniqueIdentifier - Terminal unique identifier
 * @property {PaymentPlatformModel.EdcUpdateRequest} body
 */

/**
 * @typedef AddRefundBankAccountUsingOTPParam
 * @property {PaymentPlatformModel.AddBeneficiaryDetailsOTPRequest} body
 */

/**
 * @typedef CancelPaymentLinkParam
 * @property {PaymentPlatformModel.CancelOrResendPaymentLinkRequest} body
 */

/**
 * @typedef CheckAndUpdatePaymentStatusParam
 * @property {PaymentPlatformModel.PaymentStatusUpdateRequest} body
 */

/**
 * @typedef ConfirmPaymentParam
 * @property {PaymentPlatformModel.PaymentConfirmationRequest} body
 */

/**
 * @typedef CreateMerchantRefundPriorityParam
 * @property {string} configType - Configuration for merchant or customer
 * @property {PaymentPlatformModel.RefundPriorityRequestSerializer} body
 */

/**
 * @typedef CreatePaymentLinkParam
 * @property {PaymentPlatformModel.CreatePaymentLinkRequest} body
 */

/** @typedef EdcAggregatorsAndModelListParam */

/**
 * @typedef EdcDeviceListParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {boolean} [isActive]
 * @property {number} [storeId]
 * @property {string} [deviceTag]
 */

/** @typedef EdcDeviceStatsParam */

/**
 * @typedef GetBankAccountDetailsOpenAPIParam
 * @property {string} orderId
 * @property {string} [requestHash]
 */

/**
 * @typedef GetBrandPaymentGatewayConfigParam
 * @property {string} [aggregator] - Aggregator slug
 * @property {string} [configType]
 */

/**
 * @typedef GetEdcDeviceParam
 * @property {string} terminalUniqueIdentifier - Terminal unique identifier
 */

/**
 * @typedef GetMerchantAggregatorPaymentModeDetailsParam
 * @property {number} aggregatorId - Aggregators Id
 * @property {string} businessUnit
 * @property {string} device
 */

/** @typedef GetMerchantPaymentOptionParam */

/**
 * @typedef GetMerchantRefundPriorityParam
 * @property {string} configType - Configuration for merchant or customer
 */

/** @typedef GetPGConfigAggregatorsParam */

/** @typedef GetPaymentCodeOptionParam */

/**
 * @typedef GetPaymentLinkParam
 * @property {string} [paymentLinkId]
 */

/**
 * @typedef GetPaymentModeRoutesParam
 * @property {boolean} refresh
 * @property {string} requestType
 */

/**
 * @typedef GetPosPaymentModeRoutesParam
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

/**
 * @typedef GetUserBeneficiariesParam
 * @property {string} orderId
 */

/**
 * @typedef GetUserCODlimitRoutesParam
 * @property {string} merchantUserId
 * @property {string} mobileNo
 */

/**
 * @typedef GetUserOrderBeneficiariesParam
 * @property {string} orderId
 */

/**
 * @typedef InitialisePaymentParam
 * @property {PaymentPlatformModel.PaymentInitializationRequest} body
 */

/**
 * @typedef MerchantOnBoardingParam
 * @property {PaymentPlatformModel.MerchantOnBoardingRequest} body
 */

/**
 * @typedef OauthGetUrlParam
 * @property {string} aggregator - Aggregator
 * @property {string} [successRedirectUrl]
 * @property {string} [failureRedirectUrl]
 */

/**
 * @typedef PatchMerchantAggregatorPaymentModeDetailsParam
 * @property {number} aggregatorId - Aggregators Id
 * @property {PaymentPlatformModel.MerchnatPaymentModeResponse} body
 */

/**
 * @typedef PatchMerchantPaymentOptionParam
 * @property {PaymentPlatformModel.MerchnatPaymentModeRequest} body
 */

/**
 * @typedef PaymentStatusBulkParam
 * @property {PaymentPlatformModel.PaymentStatusBulkHandlerRequest} body
 */

/**
 * @typedef PollingPaymentLinkParam
 * @property {string} [paymentLinkId]
 */

/**
 * @typedef RepaymentDetailsParam
 * @property {PaymentPlatformModel.RepaymentDetailsSerialiserPayAll} body
 */

/**
 * @typedef ResendOrCancelPaymentParam
 * @property {PaymentPlatformModel.ResendOrCancelPaymentRequest} body
 */

/**
 * @typedef ResendPaymentLinkParam
 * @property {PaymentPlatformModel.CancelOrResendPaymentLinkRequest} body
 */

/**
 * @typedef RevokeOauthTokenParam
 * @property {string} aggregator - Aggregator_slug
 */

/**
 * @typedef SaveBrandPaymentGatewayConfigParam
 * @property {PaymentPlatformModel.PaymentGatewayConfigRequest} body
 */

/**
 * @typedef SetUserCODlimitRoutesParam
 * @property {PaymentPlatformModel.SetCODForUserRequest} body
 */

/**
 * @typedef UpdateEdcDeviceParam
 * @property {PaymentPlatformModel.EdcAddRequest} body
 */

/**
 * @typedef UpdateMerchantRefundPriorityParam
 * @property {string} configType - Configuration for merchant or customer
 * @property {PaymentPlatformModel.RefundPriorityRequestSerializer} body
 */

/**
 * @typedef UpdatePaymentSessionParam
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {PaymentPlatformModel.PaymentSessionRequestSerializer} body
 */

/**
 * @typedef UpdateRefundSessionParam
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {string} requestId - A unique id that was used to initiate a refund
 *   session. This is generated by Fynd platform and is usually shipment_id.
 * @property {PaymentPlatformModel.RefundSessionRequestSerializer} body
 */

/**
 * @typedef VerifyCustomerForPaymentParam
 * @property {PaymentPlatformModel.ValidateCustomerRequest} body
 */

class PaymentPlatformApplicationValidator {
  /** @returns {AddEdcDeviceParam} */
  static addEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
      body: PaymentPlatformModel.EdcUpdateRequest().required(),
    }).required();
  }

  /** @returns {AddRefundBankAccountUsingOTPParam} */
  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: PaymentPlatformModel.AddBeneficiaryDetailsOTPRequest().required(),
    }).required();
  }

  /** @returns {CancelPaymentLinkParam} */
  static cancelPaymentLink() {
    return Joi.object({
      body: PaymentPlatformModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {CheckAndUpdatePaymentStatusParam} */
  static checkAndUpdatePaymentStatus() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  /** @returns {ConfirmPaymentParam} */
  static confirmPayment() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentConfirmationRequest().required(),
    }).required();
  }

  /** @returns {CreateMerchantRefundPriorityParam} */
  static createMerchantRefundPriority() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      body: PaymentPlatformModel.RefundPriorityRequestSerializer().required(),
    }).required();
  }

  /** @returns {CreatePaymentLinkParam} */
  static createPaymentLink() {
    return Joi.object({
      body: PaymentPlatformModel.CreatePaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {EdcAggregatorsAndModelListParam} */
  static edcAggregatorsAndModelList() {
    return Joi.object({}).required();
  }

  /** @returns {EdcDeviceListParam} */
  static edcDeviceList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isActive: Joi.boolean(),
      storeId: Joi.number(),
      deviceTag: Joi.string().allow(""),
    }).required();
  }

  /** @returns {EdcDeviceStatsParam} */
  static edcDeviceStats() {
    return Joi.object({}).required();
  }

  /** @returns {GetBankAccountDetailsOpenAPIParam} */
  static getBankAccountDetailsOpenAPI() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      requestHash: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetBrandPaymentGatewayConfigParam} */
  static getBrandPaymentGatewayConfig() {
    return Joi.object({
      aggregator: Joi.string().allow(""),
      configType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetEdcDeviceParam} */
  static getEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMerchantAggregatorPaymentModeDetailsParam} */
  static getMerchantAggregatorPaymentModeDetails() {
    return Joi.object({
      aggregatorId: Joi.number().required(),
      businessUnit: Joi.string().allow("").required(),
      device: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMerchantPaymentOptionParam} */
  static getMerchantPaymentOption() {
    return Joi.object({}).required();
  }

  /** @returns {GetMerchantRefundPriorityParam} */
  static getMerchantRefundPriority() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPGConfigAggregatorsParam} */
  static getPGConfigAggregators() {
    return Joi.object({}).required();
  }

  /** @returns {GetPaymentCodeOptionParam} */
  static getPaymentCodeOption() {
    return Joi.object({}).required();
  }

  /** @returns {GetPaymentLinkParam} */
  static getPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPaymentModeRoutesParam} */
  static getPaymentModeRoutes() {
    return Joi.object({
      refresh: Joi.boolean().required(),
      requestType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPosPaymentModeRoutesParam} */
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

  /** @returns {GetUserBeneficiariesParam} */
  static getUserBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserCODlimitRoutesParam} */
  static getUserCODlimitRoutes() {
    return Joi.object({
      merchantUserId: Joi.string().allow("").required(),
      mobileNo: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserOrderBeneficiariesParam} */
  static getUserOrderBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {InitialisePaymentParam} */
  static initialisePayment() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentInitializationRequest().required(),
    }).required();
  }

  /** @returns {MerchantOnBoardingParam} */
  static merchantOnBoarding() {
    return Joi.object({
      body: PaymentPlatformModel.MerchantOnBoardingRequest().required(),
    }).required();
  }

  /** @returns {OauthGetUrlParam} */
  static oauthGetUrl() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      successRedirectUrl: Joi.string().allow(""),
      failureRedirectUrl: Joi.string().allow(""),
    }).required();
  }

  /** @returns {PatchMerchantAggregatorPaymentModeDetailsParam} */
  static patchMerchantAggregatorPaymentModeDetails() {
    return Joi.object({
      aggregatorId: Joi.number().required(),
      body: PaymentPlatformModel.MerchnatPaymentModeResponse().required(),
    }).required();
  }

  /** @returns {PatchMerchantPaymentOptionParam} */
  static patchMerchantPaymentOption() {
    return Joi.object({
      body: PaymentPlatformModel.MerchnatPaymentModeRequest().required(),
    }).required();
  }

  /** @returns {PaymentStatusBulkParam} */
  static paymentStatusBulk() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentStatusBulkHandlerRequest().required(),
    }).required();
  }

  /** @returns {PollingPaymentLinkParam} */
  static pollingPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {RepaymentDetailsParam} */
  static repaymentDetails() {
    return Joi.object({
      body: PaymentPlatformModel.RepaymentDetailsSerialiserPayAll().required(),
    }).required();
  }

  /** @returns {ResendOrCancelPaymentParam} */
  static resendOrCancelPayment() {
    return Joi.object({
      body: PaymentPlatformModel.ResendOrCancelPaymentRequest().required(),
    }).required();
  }

  /** @returns {ResendPaymentLinkParam} */
  static resendPaymentLink() {
    return Joi.object({
      body: PaymentPlatformModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {RevokeOauthTokenParam} */
  static revokeOauthToken() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {SaveBrandPaymentGatewayConfigParam} */
  static saveBrandPaymentGatewayConfig() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentGatewayConfigRequest().required(),
    }).required();
  }

  /** @returns {SetUserCODlimitRoutesParam} */
  static setUserCODlimitRoutes() {
    return Joi.object({
      body: PaymentPlatformModel.SetCODForUserRequest().required(),
    }).required();
  }

  /** @returns {UpdateEdcDeviceParam} */
  static updateEdcDevice() {
    return Joi.object({
      body: PaymentPlatformModel.EdcAddRequest().required(),
    }).required();
  }

  /** @returns {UpdateMerchantRefundPriorityParam} */
  static updateMerchantRefundPriority() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      body: PaymentPlatformModel.RefundPriorityRequestSerializer().required(),
    }).required();
  }

  /** @returns {UpdatePaymentSessionParam} */
  static updatePaymentSession() {
    return Joi.object({
      gid: Joi.string().allow("").required(),
      body: PaymentPlatformModel.PaymentSessionRequestSerializer().required(),
    }).required();
  }

  /** @returns {UpdateRefundSessionParam} */
  static updateRefundSession() {
    return Joi.object({
      gid: Joi.string().allow("").required(),
      requestId: Joi.string().allow("").required(),
      body: PaymentPlatformModel.RefundSessionRequestSerializer().required(),
    }).required();
  }

  /** @returns {VerifyCustomerForPaymentParam} */
  static verifyCustomerForPayment() {
    return Joi.object({
      body: PaymentPlatformModel.ValidateCustomerRequest().required(),
    }).required();
  }
}

module.exports = PaymentPlatformApplicationValidator;
