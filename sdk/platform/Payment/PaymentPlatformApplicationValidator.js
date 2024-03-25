const Joi = require("joi");

const PaymentPlatformModel = require("./PaymentPlatformModel");

/**
 * @typedef AddEdcDeviceParam
 * @property {string} terminalUniqueIdentifier - Terminal unique identifier
 * @property {PaymentPlatformModel.EdcUpdateRequest} body
 */

/**
 * @typedef AddRefundBankAccountParam
 * @property {PaymentPlatformModel.AddBeneficiaryDetailsOTPRequest} body
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
 * @typedef CopyConfigAggPaymentModesParam
 * @property {string} aggregatorId - Aggregator Id
 * @property {PaymentPlatformModel.PlatformPaymentModeCopyConfigRequest} body
 */

/**
 * @typedef CopyConfigPaymentModesParam
 * @property {PaymentPlatformModel.PlatformPaymentModeCopyConfigRequest} body
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

/**
 * @typedef CreatePaymentOrderParam
 * @property {PaymentPlatformModel.PaymentOrderRequest} body
 */

/**
 * @typedef DeleteBeneficiaryDetailsParam
 * @property {string} beneficiaryId - This is a String value that contains
 *   beneficiary_id as value.
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
 * @typedef GetAggregatorCredentialParam
 * @property {string} aggregator - The aggregator for which credentials are requested
 * @property {string} configType - The configuration type for which credentials
 *   are requested
 */

/**
 * @typedef GetAggregatorCredentialHistoryParam
 * @property {string} aggregator - The aggregator for which credentials are requested
 * @property {string} configType - The configuration type for which credentials
 *   are requested
 */

/**
 * @typedef GetBankAccountDetailsOpenAPIParam
 * @property {string} orderId
 * @property {string} [requestHash]
 */

/**
 * @typedef GetBrandPaymentGatewayConfigParam
 * @property {string} aggregator - Aggregator slug
 * @property {string} [configType]
 */

/** @typedef GetDevicesParam */

/**
 * @typedef GetEdcDeviceParam
 * @property {string} terminalUniqueIdentifier - Terminal unique identifier
 */

/**
 * @typedef GetMerchantAggregatorAppVersionParam
 * @property {number} aggregatorId - Aggregators Id
 * @property {string} businessUnit
 * @property {string} device
 * @property {number} [paymentModeId]
 * @property {string} [subPaymentMode]
 */

/**
 * @typedef GetMerchantAggregatorPaymentModeDetailsParam
 * @property {number} aggregatorId - Aggregators Id
 * @property {string} businessUnit
 * @property {string} device
 */

/**
 * @typedef GetMerchantPaymentOptionParam
 * @property {string} [paymentOptionType] - Payment Option Type, Expected value
 *   - advance (Optional)
 */

/**
 * @typedef GetMerchantRefundPriorityParam
 * @property {string} configType - Configuration for merchant or customer
 */

/** @typedef GetPGConfigAggregatorsParam */

/** @typedef GetPaymentCodeOptionParam */

/**
 * @typedef GetPaymentLinkParam
 * @property {string} paymentLinkId
 */

/**
 * @typedef GetPaymentLinkIdParam
 * @property {string} id
 * @property {string} paymentLinkId
 */

/**
 * @typedef GetPaymentModeControlRoutesParam
 * @property {string} mode - Offline / advance modes to get the payment modes
 */

/**
 * @typedef GetPaymentModeCustomConfigParam
 * @property {string} mode - Offline / advance mode
 */

/**
 * @typedef GetPaymentModeRoutesParam
 * @property {boolean} refresh
 * @property {number} amount
 * @property {string} requestType
 * @property {string} [orderId]
 * @property {string} [shipmentId]
 */

/**
 * @typedef GetPaymentModeSequencingParam
 * @property {string} businessUnit
 * @property {string} device
 */

/**
 * @typedef GetPaymentSessionParam
 * @property {string} gid - Transaction id
 */

/** @typedef GetPennyDropValidationParam */

/**
 * @typedef GetPosPaymentModeRoutesParam
 * @property {number} amount - Payable amount.
 * @property {string} [cartId] - Identifier of the cart.
 * @property {string} pincode - The PIN Code of the destination address, e.g. 400059
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {boolean} [refresh] - This is a boolean value. Select `true` to
 *   remove temporary cache files on payment gateway and replace with the latest one.
 * @property {string} [orderId]
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} orderType - The order type of shipment * HomeDelivery - If
 *   the customer wants the order home-delivered * PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {string} [userDetails] - URIencoded JSON containing details of an
 *   anonymous user.
 * @property {boolean} [displaySplit] - Display Split Payment Option or not
 * @property {boolean} [advancePayment] - Display Advance Payment Options or Normal
 * @property {string} [shipmentId]
 */

/**
 * @typedef GetRefundOptionsParam
 * @property {string} configuration - Config Type - Options include 'merchant',
 *   'customer', or 'default'.
 * @property {string} [productType] - Product Type either 1P and 3P
 * @property {number} [amount] - Refunded amount
 * @property {string} [optinAppId] - OptIn Application ID for cross-selling
 * @property {string} [optinCompanyId] - OptIn Company ID for cross-selling
 * @property {string} [orderType] - Order Type - Options are 'PickAtStore' or
 *   'HomeDelivery'.
 */

/**
 * @typedef GetSelectedRefundOptionParam
 * @property {string} shipmentId - Shipment Id
 * @property {string} orderId - Order Id
 */

/**
 * @typedef GetUserBeneficiariesParam
 * @property {string} orderId
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
 * @property {PaymentPlatformModel.PlatformPaymentModeRequest} body
 */

/**
 * @typedef PatchMerchantPaymentOptionParam
 * @property {PaymentPlatformModel.MerchantPaymentModeRequest} body
 */

/**
 * @typedef PatchMerchantPaymentOptionVersionParam
 * @property {number} aggregatorId - Aggregators Id
 * @property {PaymentPlatformModel.AggregatorControlRequest} body
 */

/**
 * @typedef PatchPaymentModeSequencingParam
 * @property {PaymentPlatformModel.PlatformPaymentModeRequest} body
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
 * @typedef SetMerchantModeControlRoutesParam
 * @property {string} mode - Offline / advance modes to get the payment modes
 * @property {PaymentPlatformModel.PlatformOfflineAdvanceRequest} body
 */

/**
 * @typedef SetPaymentModeCustomConfigParam
 * @property {string} mode - Offline / advance payment mode
 * @property {PaymentPlatformModel.PaymentCustomConfigRequestSchema} body
 */

/**
 * @typedef SetRefundOptionforShipmentParam
 * @property {PaymentPlatformModel.ShipmentRefundRequest} body
 */

/**
 * @typedef SetUserCODlimitRoutesParam
 * @property {PaymentPlatformModel.SetCODForUserRequest} body
 */

/**
 * @typedef UpdateAggregatorCredentialParam
 * @property {PaymentPlatformModel.AggregatorCredentialRequest} body
 */

/**
 * @typedef UpdateDefaultBeneficiaryParam
 * @property {PaymentPlatformModel.SetDefaultBeneficiaryRequest} body
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
 * @typedef UpdatePennyDropValidationParam
 * @property {PaymentPlatformModel.UpdatePennyDropValidationRequest} body
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
 * @typedef ValidateBeneficiaryAddressParam
 * @property {PaymentPlatformModel.ValidateValidateAddressRequest} body
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

  /** @returns {AddRefundBankAccountParam} */
  static addRefundBankAccount() {
    return Joi.object({
      body: PaymentPlatformModel.AddBeneficiaryDetailsOTPRequest().required(),
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

  /** @returns {CopyConfigAggPaymentModesParam} */
  static copyConfigAggPaymentModes() {
    return Joi.object({
      aggregatorId: Joi.string().allow("").required(),
      body: PaymentPlatformModel.PlatformPaymentModeCopyConfigRequest().required(),
    }).required();
  }

  /** @returns {CopyConfigPaymentModesParam} */
  static copyConfigPaymentModes() {
    return Joi.object({
      body: PaymentPlatformModel.PlatformPaymentModeCopyConfigRequest().required(),
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

  /** @returns {CreatePaymentOrderParam} */
  static createPaymentOrder() {
    return Joi.object({
      body: PaymentPlatformModel.PaymentOrderRequest().required(),
    }).required();
  }

  /** @returns {DeleteBeneficiaryDetailsParam} */
  static deleteBeneficiaryDetails() {
    return Joi.object({
      beneficiaryId: Joi.string().allow("").required(),
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

  /** @returns {GetAggregatorCredentialParam} */
  static getAggregatorCredential() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      configType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAggregatorCredentialHistoryParam} */
  static getAggregatorCredentialHistory() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      configType: Joi.string().allow("").required(),
    }).required();
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
      aggregator: Joi.string().allow("").required(),
      configType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetDevicesParam} */
  static getDevices() {
    return Joi.object({}).required();
  }

  /** @returns {GetEdcDeviceParam} */
  static getEdcDevice() {
    return Joi.object({
      terminalUniqueIdentifier: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMerchantAggregatorAppVersionParam} */
  static getMerchantAggregatorAppVersion() {
    return Joi.object({
      aggregatorId: Joi.number().required(),
      businessUnit: Joi.string().allow("").required(),
      device: Joi.string().allow("").required(),
      paymentModeId: Joi.number(),
      subPaymentMode: Joi.string().allow(""),
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
    return Joi.object({
      paymentOptionType: Joi.string().allow(""),
    }).required();
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
      paymentLinkId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPaymentLinkIdParam} */
  static getPaymentLinkId() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      paymentLinkId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPaymentModeControlRoutesParam} */
  static getPaymentModeControlRoutes() {
    return Joi.object({
      mode: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPaymentModeCustomConfigParam} */
  static getPaymentModeCustomConfig() {
    return Joi.object({
      mode: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPaymentModeRoutesParam} */
  static getPaymentModeRoutes() {
    return Joi.object({
      refresh: Joi.boolean().required(),
      amount: Joi.number().required(),
      requestType: Joi.string().allow("").required(),
      orderId: Joi.string().allow(""),
      shipmentId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPaymentModeSequencingParam} */
  static getPaymentModeSequencing() {
    return Joi.object({
      businessUnit: Joi.string().allow("").required(),
      device: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPaymentSessionParam} */
  static getPaymentSession() {
    return Joi.object({
      gid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPennyDropValidationParam} */
  static getPennyDropValidation() {
    return Joi.object({}).required();
  }

  /** @returns {GetPosPaymentModeRoutesParam} */
  static getPosPaymentModeRoutes() {
    return Joi.object({
      amount: Joi.number().required(),
      cartId: Joi.string().allow(""),
      pincode: Joi.string().allow("").required(),
      checkoutMode: Joi.string().allow(""),
      refresh: Joi.boolean(),
      orderId: Joi.string().allow(""),
      cardReference: Joi.string().allow(""),
      orderType: Joi.string().allow("").required(),
      userDetails: Joi.string().allow(""),
      displaySplit: Joi.boolean(),
      advancePayment: Joi.boolean(),
      shipmentId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetRefundOptionsParam} */
  static getRefundOptions() {
    return Joi.object({
      configuration: Joi.string().allow("").required(),
      productType: Joi.string().allow(""),
      amount: Joi.number(),
      optinAppId: Joi.string().allow(""),
      optinCompanyId: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetSelectedRefundOptionParam} */
  static getSelectedRefundOption() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserBeneficiariesParam} */
  static getUserBeneficiaries() {
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
      body: PaymentPlatformModel.PlatformPaymentModeRequest().required(),
    }).required();
  }

  /** @returns {PatchMerchantPaymentOptionParam} */
  static patchMerchantPaymentOption() {
    return Joi.object({
      body: PaymentPlatformModel.MerchantPaymentModeRequest().required(),
    }).required();
  }

  /** @returns {PatchMerchantPaymentOptionVersionParam} */
  static patchMerchantPaymentOptionVersion() {
    return Joi.object({
      aggregatorId: Joi.number().required(),
      body: PaymentPlatformModel.AggregatorControlRequest().required(),
    }).required();
  }

  /** @returns {PatchPaymentModeSequencingParam} */
  static patchPaymentModeSequencing() {
    return Joi.object({
      body: PaymentPlatformModel.PlatformPaymentModeRequest().required(),
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

  /** @returns {SetMerchantModeControlRoutesParam} */
  static setMerchantModeControlRoutes() {
    return Joi.object({
      mode: Joi.string().allow("").required(),
      body: PaymentPlatformModel.PlatformOfflineAdvanceRequest().required(),
    }).required();
  }

  /** @returns {SetPaymentModeCustomConfigParam} */
  static setPaymentModeCustomConfig() {
    return Joi.object({
      mode: Joi.string().allow("").required(),
      body: PaymentPlatformModel.PaymentCustomConfigRequestSchema().required(),
    }).required();
  }

  /** @returns {SetRefundOptionforShipmentParam} */
  static setRefundOptionforShipment() {
    return Joi.object({
      body: PaymentPlatformModel.ShipmentRefundRequest().required(),
    }).required();
  }

  /** @returns {SetUserCODlimitRoutesParam} */
  static setUserCODlimitRoutes() {
    return Joi.object({
      body: PaymentPlatformModel.SetCODForUserRequest().required(),
    }).required();
  }

  /** @returns {UpdateAggregatorCredentialParam} */
  static updateAggregatorCredential() {
    return Joi.object({
      body: PaymentPlatformModel.AggregatorCredentialRequest().required(),
    }).required();
  }

  /** @returns {UpdateDefaultBeneficiaryParam} */
  static updateDefaultBeneficiary() {
    return Joi.object({
      body: PaymentPlatformModel.SetDefaultBeneficiaryRequest().required(),
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

  /** @returns {UpdatePennyDropValidationParam} */
  static updatePennyDropValidation() {
    return Joi.object({
      body: PaymentPlatformModel.UpdatePennyDropValidationRequest().required(),
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

  /** @returns {ValidateBeneficiaryAddressParam} */
  static validateBeneficiaryAddress() {
    return Joi.object({
      body: PaymentPlatformModel.ValidateValidateAddressRequest().required(),
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
