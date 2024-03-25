export = PaymentPlatformApplicationValidator;
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
declare class PaymentPlatformApplicationValidator {
    /** @returns {AddEdcDeviceParam} */
    static addEdcDevice(): AddEdcDeviceParam;
    /** @returns {AddRefundBankAccountParam} */
    static addRefundBankAccount(): AddRefundBankAccountParam;
    /** @returns {AddRefundBankAccountUsingOTPParam} */
    static addRefundBankAccountUsingOTP(): AddRefundBankAccountUsingOTPParam;
    /** @returns {CancelPaymentLinkParam} */
    static cancelPaymentLink(): CancelPaymentLinkParam;
    /** @returns {CheckAndUpdatePaymentStatusParam} */
    static checkAndUpdatePaymentStatus(): CheckAndUpdatePaymentStatusParam;
    /** @returns {ConfirmPaymentParam} */
    static confirmPayment(): ConfirmPaymentParam;
    /** @returns {CopyConfigAggPaymentModesParam} */
    static copyConfigAggPaymentModes(): CopyConfigAggPaymentModesParam;
    /** @returns {CopyConfigPaymentModesParam} */
    static copyConfigPaymentModes(): CopyConfigPaymentModesParam;
    /** @returns {CreateMerchantRefundPriorityParam} */
    static createMerchantRefundPriority(): CreateMerchantRefundPriorityParam;
    /** @returns {CreatePaymentLinkParam} */
    static createPaymentLink(): CreatePaymentLinkParam;
    /** @returns {CreatePaymentOrderParam} */
    static createPaymentOrder(): CreatePaymentOrderParam;
    /** @returns {DeleteBeneficiaryDetailsParam} */
    static deleteBeneficiaryDetails(): DeleteBeneficiaryDetailsParam;
    /** @returns {EdcAggregatorsAndModelListParam} */
    static edcAggregatorsAndModelList(): any;
    /** @returns {EdcDeviceListParam} */
    static edcDeviceList(): EdcDeviceListParam;
    /** @returns {EdcDeviceStatsParam} */
    static edcDeviceStats(): any;
    /** @returns {GetAggregatorCredentialParam} */
    static getAggregatorCredential(): GetAggregatorCredentialParam;
    /** @returns {GetAggregatorCredentialHistoryParam} */
    static getAggregatorCredentialHistory(): GetAggregatorCredentialHistoryParam;
    /** @returns {GetBankAccountDetailsOpenAPIParam} */
    static getBankAccountDetailsOpenAPI(): GetBankAccountDetailsOpenAPIParam;
    /** @returns {GetBrandPaymentGatewayConfigParam} */
    static getBrandPaymentGatewayConfig(): GetBrandPaymentGatewayConfigParam;
    /** @returns {GetDevicesParam} */
    static getDevices(): any;
    /** @returns {GetEdcDeviceParam} */
    static getEdcDevice(): GetEdcDeviceParam;
    /** @returns {GetMerchantAggregatorAppVersionParam} */
    static getMerchantAggregatorAppVersion(): GetMerchantAggregatorAppVersionParam;
    /** @returns {GetMerchantAggregatorPaymentModeDetailsParam} */
    static getMerchantAggregatorPaymentModeDetails(): GetMerchantAggregatorPaymentModeDetailsParam;
    /** @returns {GetMerchantPaymentOptionParam} */
    static getMerchantPaymentOption(): GetMerchantPaymentOptionParam;
    /** @returns {GetMerchantRefundPriorityParam} */
    static getMerchantRefundPriority(): GetMerchantRefundPriorityParam;
    /** @returns {GetPGConfigAggregatorsParam} */
    static getPGConfigAggregators(): any;
    /** @returns {GetPaymentCodeOptionParam} */
    static getPaymentCodeOption(): any;
    /** @returns {GetPaymentLinkParam} */
    static getPaymentLink(): GetPaymentLinkParam;
    /** @returns {GetPaymentLinkIdParam} */
    static getPaymentLinkId(): GetPaymentLinkIdParam;
    /** @returns {GetPaymentModeControlRoutesParam} */
    static getPaymentModeControlRoutes(): GetPaymentModeControlRoutesParam;
    /** @returns {GetPaymentModeCustomConfigParam} */
    static getPaymentModeCustomConfig(): GetPaymentModeCustomConfigParam;
    /** @returns {GetPaymentModeRoutesParam} */
    static getPaymentModeRoutes(): GetPaymentModeRoutesParam;
    /** @returns {GetPaymentModeSequencingParam} */
    static getPaymentModeSequencing(): GetPaymentModeSequencingParam;
    /** @returns {GetPaymentSessionParam} */
    static getPaymentSession(): GetPaymentSessionParam;
    /** @returns {GetPennyDropValidationParam} */
    static getPennyDropValidation(): any;
    /** @returns {GetPosPaymentModeRoutesParam} */
    static getPosPaymentModeRoutes(): GetPosPaymentModeRoutesParam;
    /** @returns {GetRefundOptionsParam} */
    static getRefundOptions(): GetRefundOptionsParam;
    /** @returns {GetSelectedRefundOptionParam} */
    static getSelectedRefundOption(): GetSelectedRefundOptionParam;
    /** @returns {GetUserBeneficiariesParam} */
    static getUserBeneficiaries(): GetUserBeneficiariesParam;
    /** @returns {GetUserBeneficiariesDetailV2Param} */
    static getUserBeneficiariesDetailV2(): GetUserBeneficiariesDetailV2Param;
    /** @returns {GetUserCODlimitRoutesParam} */
    static getUserCODlimitRoutes(): GetUserCODlimitRoutesParam;
    /** @returns {GetUserOrderBeneficiariesParam} */
    static getUserOrderBeneficiaries(): GetUserOrderBeneficiariesParam;
    /** @returns {InitialisePaymentParam} */
    static initialisePayment(): InitialisePaymentParam;
    /** @returns {MerchantOnBoardingParam} */
    static merchantOnBoarding(): MerchantOnBoardingParam;
    /** @returns {OauthGetUrlParam} */
    static oauthGetUrl(): OauthGetUrlParam;
    /** @returns {PatchMerchantAggregatorPaymentModeDetailsParam} */
    static patchMerchantAggregatorPaymentModeDetails(): PatchMerchantAggregatorPaymentModeDetailsParam;
    /** @returns {PatchMerchantPaymentOptionParam} */
    static patchMerchantPaymentOption(): PatchMerchantPaymentOptionParam;
    /** @returns {PatchMerchantPaymentOptionVersionParam} */
    static patchMerchantPaymentOptionVersion(): PatchMerchantPaymentOptionVersionParam;
    /** @returns {PatchPaymentModeSequencingParam} */
    static patchPaymentModeSequencing(): PatchPaymentModeSequencingParam;
    /** @returns {PaymentStatusBulkParam} */
    static paymentStatusBulk(): PaymentStatusBulkParam;
    /** @returns {PollingPaymentLinkParam} */
    static pollingPaymentLink(): PollingPaymentLinkParam;
    /** @returns {RepaymentDetailsParam} */
    static repaymentDetails(): RepaymentDetailsParam;
    /** @returns {ResendOrCancelPaymentParam} */
    static resendOrCancelPayment(): ResendOrCancelPaymentParam;
    /** @returns {ResendPaymentLinkParam} */
    static resendPaymentLink(): ResendPaymentLinkParam;
    /** @returns {RevokeOauthTokenParam} */
    static revokeOauthToken(): RevokeOauthTokenParam;
    /** @returns {SaveBrandPaymentGatewayConfigParam} */
    static saveBrandPaymentGatewayConfig(): SaveBrandPaymentGatewayConfigParam;
    /** @returns {SetMerchantModeControlRoutesParam} */
    static setMerchantModeControlRoutes(): SetMerchantModeControlRoutesParam;
    /** @returns {SetPaymentModeCustomConfigParam} */
    static setPaymentModeCustomConfig(): SetPaymentModeCustomConfigParam;
    /** @returns {SetRefundOptionforShipmentParam} */
    static setRefundOptionforShipment(): SetRefundOptionforShipmentParam;
    /** @returns {SetUserCODlimitRoutesParam} */
    static setUserCODlimitRoutes(): SetUserCODlimitRoutesParam;
    /** @returns {UpdateAggregatorCredentialParam} */
    static updateAggregatorCredential(): UpdateAggregatorCredentialParam;
    /** @returns {UpdateDefaultBeneficiaryParam} */
    static updateDefaultBeneficiary(): UpdateDefaultBeneficiaryParam;
    /** @returns {UpdateEdcDeviceParam} */
    static updateEdcDevice(): UpdateEdcDeviceParam;
    /** @returns {UpdateMerchantRefundPriorityParam} */
    static updateMerchantRefundPriority(): UpdateMerchantRefundPriorityParam;
    /** @returns {UpdatePaymentSessionParam} */
    static updatePaymentSession(): UpdatePaymentSessionParam;
    /** @returns {UpdatePennyDropValidationParam} */
    static updatePennyDropValidation(): UpdatePennyDropValidationParam;
    /** @returns {UpdateRefundSessionParam} */
    static updateRefundSession(): UpdateRefundSessionParam;
    /** @returns {ValidateBeneficiaryAddressParam} */
    static validateBeneficiaryAddress(): ValidateBeneficiaryAddressParam;
    /** @returns {VerifyCustomerForPaymentParam} */
    static verifyCustomerForPayment(): VerifyCustomerForPaymentParam;
}
declare namespace PaymentPlatformApplicationValidator {
    export { AddEdcDeviceParam, AddRefundBankAccountParam, AddRefundBankAccountUsingOTPParam, CancelPaymentLinkParam, CheckAndUpdatePaymentStatusParam, ConfirmPaymentParam, CopyConfigAggPaymentModesParam, CopyConfigPaymentModesParam, CreateMerchantRefundPriorityParam, CreatePaymentLinkParam, CreatePaymentOrderParam, DeleteBeneficiaryDetailsParam, EdcAggregatorsAndModelListParam, EdcDeviceListParam, EdcDeviceStatsParam, GetAggregatorCredentialParam, GetAggregatorCredentialHistoryParam, GetBankAccountDetailsOpenAPIParam, GetBrandPaymentGatewayConfigParam, GetDevicesParam, GetEdcDeviceParam, GetMerchantAggregatorAppVersionParam, GetMerchantAggregatorPaymentModeDetailsParam, GetMerchantPaymentOptionParam, GetMerchantRefundPriorityParam, GetPGConfigAggregatorsParam, GetPaymentCodeOptionParam, GetPaymentLinkParam, GetPaymentLinkIdParam, GetPaymentModeControlRoutesParam, GetPaymentModeCustomConfigParam, GetPaymentModeRoutesParam, GetPaymentModeSequencingParam, GetPaymentSessionParam, GetPennyDropValidationParam, GetPosPaymentModeRoutesParam, GetRefundOptionsParam, GetSelectedRefundOptionParam, GetUserBeneficiariesParam, GetUserBeneficiariesDetailV2Param, GetUserCODlimitRoutesParam, GetUserOrderBeneficiariesParam, InitialisePaymentParam, MerchantOnBoardingParam, OauthGetUrlParam, PatchMerchantAggregatorPaymentModeDetailsParam, PatchMerchantPaymentOptionParam, PatchMerchantPaymentOptionVersionParam, PatchPaymentModeSequencingParam, PaymentStatusBulkParam, PollingPaymentLinkParam, RepaymentDetailsParam, ResendOrCancelPaymentParam, ResendPaymentLinkParam, RevokeOauthTokenParam, SaveBrandPaymentGatewayConfigParam, SetMerchantModeControlRoutesParam, SetPaymentModeCustomConfigParam, SetRefundOptionforShipmentParam, SetUserCODlimitRoutesParam, UpdateAggregatorCredentialParam, UpdateDefaultBeneficiaryParam, UpdateEdcDeviceParam, UpdateMerchantRefundPriorityParam, UpdatePaymentSessionParam, UpdatePennyDropValidationParam, UpdateRefundSessionParam, ValidateBeneficiaryAddressParam, VerifyCustomerForPaymentParam };
}
type AddEdcDeviceParam = {
    /**
     * - Terminal unique identifier
     */
    terminalUniqueIdentifier: string;
    body: PaymentPlatformModel.EdcUpdateRequest;
};
type AddRefundBankAccountParam = {
    body: PaymentPlatformModel.AddBeneficiaryDetailsOTPRequest;
};
type AddRefundBankAccountUsingOTPParam = {
    body: PaymentPlatformModel.AddBeneficiaryDetailsOTPRequest;
};
type CancelPaymentLinkParam = {
    body: PaymentPlatformModel.CancelOrResendPaymentLinkRequest;
};
type CheckAndUpdatePaymentStatusParam = {
    body: PaymentPlatformModel.PaymentStatusUpdateRequest;
};
type ConfirmPaymentParam = {
    body: PaymentPlatformModel.PaymentConfirmationRequest;
};
type CopyConfigAggPaymentModesParam = {
    /**
     * - Aggregator Id
     */
    aggregatorId: string;
    body: PaymentPlatformModel.PlatformPaymentModeCopyConfigRequest;
};
type CopyConfigPaymentModesParam = {
    body: PaymentPlatformModel.PlatformPaymentModeCopyConfigRequest;
};
type CreateMerchantRefundPriorityParam = {
    /**
     * - Configuration for merchant or customer
     */
    configType: string;
    body: PaymentPlatformModel.RefundPriorityRequestSerializer;
};
type CreatePaymentLinkParam = {
    body: PaymentPlatformModel.CreatePaymentLinkRequest;
};
type CreatePaymentOrderParam = {
    body: PaymentPlatformModel.PaymentOrderRequest;
};
type DeleteBeneficiaryDetailsParam = {
    /**
     * - This is a String value that contains
     * beneficiary_id as value.
     */
    beneficiaryId: string;
};
type EdcDeviceListParam = {
    pageNo?: number;
    pageSize?: number;
    isActive?: boolean;
    storeId?: number;
    deviceTag?: string;
};
type GetAggregatorCredentialParam = {
    /**
     * - The aggregator for which credentials are requested
     */
    aggregator: string;
    /**
     * - The configuration type for which credentials
     * are requested
     */
    configType: string;
};
type GetAggregatorCredentialHistoryParam = {
    /**
     * - The aggregator for which credentials are requested
     */
    aggregator: string;
    /**
     * - The configuration type for which credentials
     * are requested
     */
    configType: string;
};
type GetBankAccountDetailsOpenAPIParam = {
    orderId: string;
    requestHash?: string;
};
type GetBrandPaymentGatewayConfigParam = {
    /**
     * - Aggregator slug
     */
    aggregator: string;
    configType?: string;
};
type GetEdcDeviceParam = {
    /**
     * - Terminal unique identifier
     */
    terminalUniqueIdentifier: string;
};
type GetMerchantAggregatorAppVersionParam = {
    /**
     * - Aggregators Id
     */
    aggregatorId: number;
    businessUnit: string;
    device: string;
    paymentModeId?: number;
    subPaymentMode?: string;
};
type GetMerchantAggregatorPaymentModeDetailsParam = {
    /**
     * - Aggregators Id
     */
    aggregatorId: number;
    businessUnit: string;
    device: string;
};
type GetMerchantPaymentOptionParam = {
    /**
     * - Payment Option Type, Expected value
     * - advance (Optional)
     */
    paymentOptionType?: string;
};
type GetMerchantRefundPriorityParam = {
    /**
     * - Configuration for merchant or customer
     */
    configType: string;
};
type GetPaymentLinkParam = {
    paymentLinkId: string;
};
type GetPaymentLinkIdParam = {
    id: string;
    paymentLinkId: string;
};
type GetPaymentModeControlRoutesParam = {
    /**
     * - Offline / advance modes to get the payment modes
     */
    mode: string;
};
type GetPaymentModeCustomConfigParam = {
    /**
     * - Offline / advance mode
     */
    mode: string;
};
type GetPaymentModeRoutesParam = {
    refresh: boolean;
    amount: number;
    requestType: string;
    orderId?: string;
    shipmentId?: string;
};
type GetPaymentModeSequencingParam = {
    businessUnit: string;
    device: string;
};
type GetPaymentSessionParam = {
    /**
     * - Transaction id
     */
    gid: string;
};
type GetPosPaymentModeRoutesParam = {
    /**
     * - Payable amount.
     */
    amount: number;
    /**
     * - Identifier of the cart.
     */
    cartId?: string;
    /**
     * - The PIN Code of the destination address, e.g. 400059
     */
    pincode: string;
    /**
     * - Option to checkout for self or for others.
     */
    checkoutMode?: string;
    /**
     * - This is a boolean value. Select `true` to
     * remove temporary cache files on payment gateway and replace with the latest one.
     */
    refresh?: boolean;
    orderId?: string;
    /**
     * - Card reference id of user's debit or credit card.
     */
    cardReference?: string;
    /**
     * - The order type of shipment * HomeDelivery - If
     * the customer wants the order home-delivered * PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType: string;
    /**
     * - URIencoded JSON containing details of an
     * anonymous user.
     */
    userDetails?: string;
    /**
     * - Display Split Payment Option or not
     */
    displaySplit?: boolean;
    /**
     * - Display Advance Payment Options or Normal
     */
    advancePayment?: boolean;
    shipmentId?: string;
};
type GetRefundOptionsParam = {
    /**
     * - Config Type - Options include 'merchant',
     * 'customer', or 'default'.
     */
    configuration: string;
    /**
     * - Product Type either 1P and 3P
     */
    productType?: string;
    /**
     * - Refunded amount
     */
    amount?: number;
    /**
     * - OptIn Application ID for cross-selling
     */
    optinAppId?: string;
    /**
     * - OptIn Company ID for cross-selling
     */
    optinCompanyId?: string;
    /**
     * - Order Type - Options are 'PickAtStore' or
     * 'HomeDelivery'.
     */
    orderType?: string;
};
type GetSelectedRefundOptionParam = {
    /**
     * - Shipment Id
     */
    shipmentId: string;
    /**
     * - Order Id
     */
    orderId: string;
};
type GetUserBeneficiariesParam = {
    orderId: string;
};
type GetUserBeneficiariesDetailV2Param = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId?: string;
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    shipmentId?: string;
    /**
     * - Mode of payment for which beneficiary data required
     */
    mop?: string;
};
type GetUserCODlimitRoutesParam = {
    merchantUserId: string;
    mobileNo: string;
};
type GetUserOrderBeneficiariesParam = {
    orderId: string;
};
type InitialisePaymentParam = {
    body: PaymentPlatformModel.PaymentInitializationRequest;
};
type MerchantOnBoardingParam = {
    body: PaymentPlatformModel.MerchantOnBoardingRequest;
};
type OauthGetUrlParam = {
    /**
     * - Aggregator
     */
    aggregator: string;
    successRedirectUrl?: string;
    failureRedirectUrl?: string;
};
type PatchMerchantAggregatorPaymentModeDetailsParam = {
    /**
     * - Aggregators Id
     */
    aggregatorId: number;
    body: PaymentPlatformModel.PlatformPaymentModeRequest;
};
type PatchMerchantPaymentOptionParam = {
    body: PaymentPlatformModel.MerchantPaymentModeRequest;
};
type PatchMerchantPaymentOptionVersionParam = {
    /**
     * - Aggregators Id
     */
    aggregatorId: number;
    body: PaymentPlatformModel.AggregatorControlRequest;
};
type PatchPaymentModeSequencingParam = {
    body: PaymentPlatformModel.PlatformPaymentModeRequest;
};
type PaymentStatusBulkParam = {
    body: PaymentPlatformModel.PaymentStatusBulkHandlerRequest;
};
type PollingPaymentLinkParam = {
    paymentLinkId?: string;
};
type RepaymentDetailsParam = {
    body: PaymentPlatformModel.RepaymentDetailsSerialiserPayAll;
};
type ResendOrCancelPaymentParam = {
    body: PaymentPlatformModel.ResendOrCancelPaymentRequest;
};
type ResendPaymentLinkParam = {
    body: PaymentPlatformModel.CancelOrResendPaymentLinkRequest;
};
type RevokeOauthTokenParam = {
    /**
     * - Aggregator_slug
     */
    aggregator: string;
};
type SaveBrandPaymentGatewayConfigParam = {
    body: PaymentPlatformModel.PaymentGatewayConfigRequest;
};
type SetMerchantModeControlRoutesParam = {
    /**
     * - Offline / advance modes to get the payment modes
     */
    mode: string;
    body: PaymentPlatformModel.PlatformOfflineAdvanceRequest;
};
type SetPaymentModeCustomConfigParam = {
    /**
     * - Offline / advance payment mode
     */
    mode: string;
    body: PaymentPlatformModel.PaymentCustomConfigRequestSchema;
};
type SetRefundOptionforShipmentParam = {
    body: PaymentPlatformModel.ShipmentRefundRequest;
};
type SetUserCODlimitRoutesParam = {
    body: PaymentPlatformModel.SetCODForUserRequest;
};
type UpdateAggregatorCredentialParam = {
    body: PaymentPlatformModel.AggregatorCredentialRequest;
};
type UpdateDefaultBeneficiaryParam = {
    body: PaymentPlatformModel.SetDefaultBeneficiaryRequest;
};
type UpdateEdcDeviceParam = {
    body: PaymentPlatformModel.EdcAddRequest;
};
type UpdateMerchantRefundPriorityParam = {
    /**
     * - Configuration for merchant or customer
     */
    configType: string;
    body: PaymentPlatformModel.RefundPriorityRequestSerializer;
};
type UpdatePaymentSessionParam = {
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    body: PaymentPlatformModel.PaymentSessionRequestSerializer;
};
type UpdatePennyDropValidationParam = {
    body: PaymentPlatformModel.UpdatePennyDropValidationRequest;
};
type UpdateRefundSessionParam = {
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    /**
     * - A unique id that was used to initiate a refund
     * session. This is generated by Fynd platform and is usually shipment_id.
     */
    requestId: string;
    body: PaymentPlatformModel.RefundSessionRequestSerializer;
};
type ValidateBeneficiaryAddressParam = {
    body: PaymentPlatformModel.ValidateValidateAddressRequest;
};
type VerifyCustomerForPaymentParam = {
    body: PaymentPlatformModel.ValidateCustomerRequest;
};
type EdcAggregatorsAndModelListParam = any;
type EdcDeviceStatsParam = any;
type GetDevicesParam = any;
type GetPGConfigAggregatorsParam = any;
type GetPaymentCodeOptionParam = any;
type GetPennyDropValidationParam = any;
import PaymentPlatformModel = require("sdk/output/javascript/code/sdk/platform/Payment/PaymentPlatformModel");
