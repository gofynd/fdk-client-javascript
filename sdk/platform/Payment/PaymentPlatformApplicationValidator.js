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
 * @typedef ExtensionPaymentUpdateParam
 * @property {PaymentPlatformModel.ExtensionPaymentUpdateRequestSerializer} body
 */

/**
 * @typedef GetBankAccountDetailsOpenAPIParam
 * @property {string} orderId
 * @property {string} [requestHash]
 */

/** @typedef GetBrandPaymentGatewayConfigParam */

/**
 * @typedef GetEdcDeviceParam
 * @property {string} terminalUniqueIdentifier - Terminal unique identifier
 */

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
 * @typedef VerifyCustomerForPaymentParam
 * @property {PaymentPlatformModel.ValidateCustomerRequest} body
 */

class PaymentPlatformApplicationValidator {
  /** @returns {addEdcDevice} */
  static addEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
      body: PaymentPlatformModel.EdcUpdateRequest().required(),
    }).required();
  }

  /** @returns {addRefundBankAccountUsingOTP} */
  static addRefundBankAccountUsingOTP() {
    return Joi.object({
      body: PaymentPlatformModel.AddBeneficiaryDetailsOTPRequest().required(),
    }).required();
  }

  /** @returns {cancelPaymentLink} */
  static cancelPaymentLink() {
    return Joi.object({
      body: PaymentPlatformModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {checkAndUpdatePaymentStatus} */
  static checkAndUpdatePaymentStatus() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentStatusUpdateRequest().required(),
    }).required();
  }

  /** @returns {confirmPayment} */
  static confirmPayment() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentConfirmationRequest().required(),
    }).required();
  }

  /** @returns {createPaymentLink} */
  static createPaymentLink() {
    return Joi.object({
      body: PaymentPlatformModel.CreatePaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {edcAggregatorsAndModelList} */
  static edcAggregatorsAndModelList() {
    return Joi.object({}).required();
  }

  /** @returns {edcDeviceList} */
  static edcDeviceList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isActive: Joi.boolean(),
      storeId: Joi.number(),
      deviceTag: Joi.string().allow(""),
    }).required();
  }

  /** @returns {edcDeviceStats} */
  static edcDeviceStats() {
    return Joi.object({}).required();
  }

  /** @returns {extensionPaymentUpdate} */
  static extensionPaymentUpdate() {
    return Joi.object({
      body: PaymentPlatformModel.ExtensionPaymentUpdateRequestSerializer().required(),
    }).required();
  }

  /** @returns {getBankAccountDetailsOpenAPI} */
  static getBankAccountDetailsOpenAPI() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      requestHash: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getBrandPaymentGatewayConfig} */
  static getBrandPaymentGatewayConfig() {
    return Joi.object({}).required();
  }

  /** @returns {getEdcDevice} */
  static getEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getPaymentCodeOption} */
  static getPaymentCodeOption() {
    return Joi.object({}).required();
  }

  /** @returns {getPaymentLink} */
  static getPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getPaymentModeRoutes} */
  static getPaymentModeRoutes() {
    return Joi.object({
      refresh: Joi.boolean().required(),
      requestType: Joi.string().allow("").required(),
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

  /** @returns {getUserBeneficiaries} */
  static getUserBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getUserCODlimitRoutes} */
  static getUserCODlimitRoutes() {
    return Joi.object({
      merchantUserId: Joi.string().allow("").required(),
      mobileNo: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getUserOrderBeneficiaries} */
  static getUserOrderBeneficiaries() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {initialisePayment} */
  static initialisePayment() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentInitializationRequest().required(),
    }).required();
  }

  /** @returns {merchantOnBoarding} */
  static merchantOnBoarding() {
    return Joi.object({
      body: PaymentPlatformModel.MerchantOnBoardingRequest().required(),
    }).required();
  }

  /** @returns {oauthGetUrl} */
  static oauthGetUrl() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      successRedirectUrl: Joi.string().allow(""),
      failureRedirectUrl: Joi.string().allow(""),
    }).required();
  }

  /** @returns {paymentStatusBulk} */
  static paymentStatusBulk() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentStatusBulkHandlerRequest().required(),
    }).required();
  }

  /** @returns {pollingPaymentLink} */
  static pollingPaymentLink() {
    return Joi.object({
      paymentLinkId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {repaymentDetails} */
  static repaymentDetails() {
    return Joi.object({
      body: PaymentPlatformModel.RepaymentDetailsSerialiserPayAll().required(),
    }).required();
  }

  /** @returns {resendOrCancelPayment} */
  static resendOrCancelPayment() {
    return Joi.object({
      body: PaymentPlatformModel.ResendOrCancelPaymentRequest().required(),
    }).required();
  }

  /** @returns {resendPaymentLink} */
  static resendPaymentLink() {
    return Joi.object({
      body: PaymentPlatformModel.CancelOrResendPaymentLinkRequest().required(),
    }).required();
  }

  /** @returns {revokeOauthToken} */
  static revokeOauthToken() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {saveBrandPaymentGatewayConfig} */
  static saveBrandPaymentGatewayConfig() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentGatewayConfigRequest().required(),
    }).required();
  }

  /** @returns {setUserCODlimitRoutes} */
  static setUserCODlimitRoutes() {
    return Joi.object({
      body: PaymentPlatformModel.SetCODForUserRequest().required(),
    }).required();
  }

  /** @returns {updateEdcDevice} */
  static updateEdcDevice() {
    return Joi.object({
      body: PaymentPlatformModel.EdcAddRequest().required(),
    }).required();
  }

  /** @returns {verifyCustomerForPayment} */
  static verifyCustomerForPayment() {
    return Joi.object({
      body: PaymentPlatformModel.ValidateCustomerRequest().required(),
    }).required();
  }
}

module.exports = PaymentPlatformApplicationValidator;
