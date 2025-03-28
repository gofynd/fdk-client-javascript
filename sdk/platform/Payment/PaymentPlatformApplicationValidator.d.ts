export = PaymentPlatformApplicationValidator;
/**
 * @typedef AddEdcDeviceParam
 * @property {string} terminalUniqueIdentifier - Terminal unique identifier
 * @property {PaymentPlatformModel.EdcUpdate} body
 */
/**
 * @typedef AddRefundBankAccountParam
 * @property {PaymentPlatformModel.AddBeneficiaryDetailsOTPCreation} body
 */
/**
 * @typedef AddRefundBankAccountUsingOTPParam
 * @property {PaymentPlatformModel.AddBeneficiaryDetailsOTPCreation} body
 */
/**
 * @typedef CancelPaymentLinkParam
 * @property {PaymentPlatformModel.CancelOrResendPaymentLinkCreation} body
 */
/**
 * @typedef CheckAndUpdatePaymentStatusParam
 * @property {PaymentPlatformModel.PaymentStatusUpdateCreation} body
 */
/**
 * @typedef ConfirmPaymentParam
 * @property {PaymentPlatformModel.PaymentConfirmationCreation} body
 */
/**
 * @typedef CopyConfigAggPaymentModesParam
 * @property {string} aggregatorId - Aggregator Id
 * @property {PaymentPlatformModel.PlatformPaymentModeCopyConfigCreation} body
 */
/**
 * @typedef CopyConfigPaymentModesParam
 * @property {PaymentPlatformModel.PlatformPaymentModeCopyConfigCreation} body
 */
/**
 * @typedef CreateMerchantRefundPriorityParam
 * @property {string} configType - Configuration for merchant or customer
 * @property {string} businessUnit - Business unit storefront or pos
 * @property {PaymentPlatformModel.RefundPriorityCreation} body
 */
/**
 * @typedef CreatePaymentLinkParam
 * @property {PaymentPlatformModel.CreatePaymentLinkCreation} body
 */
/**
 * @typedef CreatePaymentOrderParam
 * @property {PaymentPlatformModel.PaymentOrderCreation} body
 */
/**
 * @typedef DeleteBeneficiaryDetailsParam
 * @property {PaymentPlatformModel.DeleteBeneficiary} body
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
 * @property {string} businessUnit - Business unit storefront or pos
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
 * @property {boolean} [refresh] - Flag to refresh the cache and retrieve the
 *   updated payment option
 * @property {number} amount
 * @property {string} [requestType] - Type of payment request, i.e. self
 * @property {string} [orderId] - Order id for the payment
 * @property {string} [shipmentId] - Shipment id for the payment
 */
/**
 * @typedef GetPaymentModeSequencingParam
 * @property {string} businessUnit
 * @property {string} device
 */
/**
 * @typedef GetPaymentSessionParam
 * @property {string} gid - Transaction id
 * @property {boolean} [lineItem] - A boolean flag to include detailed cart and
 *   line item information in the response. When set to true, the response will
 *   contain comprehensive details about the cart, including each line item's
 *   product or service descriptions, quantities, unit prices, applicable taxes,
 *   discounts, total cart value, and total quantity. This provides a clear
 *   breakdown of charges to the customer, helping to understand the total
 *   amount billed in a more granular way.
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
 * @typedef GetSelectedRefundOptionParam
 * @property {string} shipmentId - Shipment Id
 * @property {string} orderId - Order Id
 */
/**
 * @typedef GetShipmentBeneficiaryParam
 * @property {string} shipmentId - Shipment id
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
 * @property {PaymentPlatformModel.PaymentInitializationCreation} body
 */
/**
 * @typedef MerchantOnBoardingParam
 * @property {PaymentPlatformModel.MerchantOnBoardingCreation} body
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
 * @property {PaymentPlatformModel.PlatformPaymentMode} body
 */
/**
 * @typedef PatchMerchantPaymentOptionParam
 * @property {PaymentPlatformModel.MerchnatPaymentModeCreation} body
 */
/**
 * @typedef PatchMerchantPaymentOptionVersionParam
 * @property {number} aggregatorId - Aggregators Id
 * @property {PaymentPlatformModel.PatchAggregatorControl} body
 */
/**
 * @typedef PatchPaymentModeSequencingParam
 * @property {PaymentPlatformModel.PlatformPaymentMode} body
 */
/**
 * @typedef PaymentStatusBulkParam
 * @property {PaymentPlatformModel.PaymentStatusBulkHandlerCreation} body
 */
/**
 * @typedef PollingPaymentLinkParam
 * @property {string} paymentLinkId
 */
/**
 * @typedef RepaymentDetailsParam
 * @property {PaymentPlatformModel.RepaymentDetailsSerialiserPayAll} body
 */
/**
 * @typedef ResendOrCancelPaymentParam
 * @property {PaymentPlatformModel.ResendOrCancelPaymentCreation} body
 */
/**
 * @typedef ResendPaymentLinkParam
 * @property {PaymentPlatformModel.CancelOrResendPaymentLinkCreation} body
 */
/**
 * @typedef RevokeOauthTokenParam
 * @property {string} aggregator - Aggregator_slug
 */
/**
 * @typedef SaveBrandPaymentGatewayConfigParam
 * @property {PaymentPlatformModel.PaymentGatewayConfigCreation} body
 */
/**
 * @typedef SetMerchantModeControlRoutesParam
 * @property {string} mode - Offline / advance modes to get the payment modes
 * @property {PaymentPlatformModel.PlatformOfflineAdvance} body
 */
/**
 * @typedef SetPaymentModeCustomConfigParam
 * @property {string} mode - Offline / advance payment mode
 * @property {PaymentPlatformModel.PaymentCustomConfigRequestSchema} body
 */
/**
 * @typedef SetRefundOptionforShipmentParam
 * @property {PaymentPlatformModel.ShipmentRefundDetails} body
 */
/**
 * @typedef SetUserCODlimitRoutesParam
 * @property {PaymentPlatformModel.SetCODForUserCreation} body
 */
/**
 * @typedef UpdateAggregatorCredentialParam
 * @property {PaymentPlatformModel.AggregatorCredentialReq} body
 */
/**
 * @typedef UpdateDefaultBeneficiaryParam
 * @property {PaymentPlatformModel.SetDefaultBeneficiary} body
 */
/**
 * @typedef UpdateEdcDeviceParam
 * @property {PaymentPlatformModel.EdcAddCreation} body
 */
/**
 * @typedef UpdateMerchantRefundPriorityParam
 * @property {string} configType - Configuration for merchant or customer
 * @property {string} businessUnit - Business unit storefront or pos
 * @property {PaymentPlatformModel.RefundPriorityCreation} body
 */
/**
 * @typedef UpdatePaymentSessionParam
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {PaymentPlatformModel.PaymentSessionCreation} body
 */
/**
 * @typedef UpdatePennyDropValidationParam
 * @property {PaymentPlatformModel.UpdatePennyDropValidation} body
 */
/**
 * @typedef UpdateRefundSessionParam
 * @property {string} gid - Global identifier of the entity (e.g. order, cart
 *   etc.) against which payment_session was initiated. This is generated by
 *   Fynd payments platform and is unique.
 * @property {string} requestId - A unique id that was used to initiate a refund
 *   session. This is generated by Fynd platform and is usually shipment_id.
 * @property {PaymentPlatformModel.RefundSessionCreation} body
 */
/**
 * @typedef ValidateBeneficiaryAddressParam
 * @property {PaymentPlatformModel.ValidateValidateAddress} body
 */
/**
 * @typedef VerifyCustomerForPaymentParam
 * @property {PaymentPlatformModel.ValidateCustomerCreation} body
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
    /** @returns {GetSelectedRefundOptionParam} */
    static getSelectedRefundOption(): GetSelectedRefundOptionParam;
    /** @returns {GetShipmentBeneficiaryParam} */
    static getShipmentBeneficiary(): GetShipmentBeneficiaryParam;
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
    export { AddEdcDeviceParam, AddRefundBankAccountParam, AddRefundBankAccountUsingOTPParam, CancelPaymentLinkParam, CheckAndUpdatePaymentStatusParam, ConfirmPaymentParam, CopyConfigAggPaymentModesParam, CopyConfigPaymentModesParam, CreateMerchantRefundPriorityParam, CreatePaymentLinkParam, CreatePaymentOrderParam, DeleteBeneficiaryDetailsParam, EdcAggregatorsAndModelListParam, EdcDeviceListParam, EdcDeviceStatsParam, GetAggregatorCredentialParam, GetAggregatorCredentialHistoryParam, GetBankAccountDetailsOpenAPIParam, GetBrandPaymentGatewayConfigParam, GetDevicesParam, GetEdcDeviceParam, GetMerchantAggregatorAppVersionParam, GetMerchantAggregatorPaymentModeDetailsParam, GetMerchantPaymentOptionParam, GetMerchantRefundPriorityParam, GetPGConfigAggregatorsParam, GetPaymentCodeOptionParam, GetPaymentLinkParam, GetPaymentLinkIdParam, GetPaymentModeControlRoutesParam, GetPaymentModeCustomConfigParam, GetPaymentModeRoutesParam, GetPaymentModeSequencingParam, GetPaymentSessionParam, GetPennyDropValidationParam, GetPosPaymentModeRoutesParam, GetSelectedRefundOptionParam, GetShipmentBeneficiaryParam, GetUserBeneficiariesParam, GetUserBeneficiariesDetailV2Param, GetUserCODlimitRoutesParam, GetUserOrderBeneficiariesParam, InitialisePaymentParam, MerchantOnBoardingParam, OauthGetUrlParam, PatchMerchantAggregatorPaymentModeDetailsParam, PatchMerchantPaymentOptionParam, PatchMerchantPaymentOptionVersionParam, PatchPaymentModeSequencingParam, PaymentStatusBulkParam, PollingPaymentLinkParam, RepaymentDetailsParam, ResendOrCancelPaymentParam, ResendPaymentLinkParam, RevokeOauthTokenParam, SaveBrandPaymentGatewayConfigParam, SetMerchantModeControlRoutesParam, SetPaymentModeCustomConfigParam, SetRefundOptionforShipmentParam, SetUserCODlimitRoutesParam, UpdateAggregatorCredentialParam, UpdateDefaultBeneficiaryParam, UpdateEdcDeviceParam, UpdateMerchantRefundPriorityParam, UpdatePaymentSessionParam, UpdatePennyDropValidationParam, UpdateRefundSessionParam, ValidateBeneficiaryAddressParam, VerifyCustomerForPaymentParam };
}
type AddEdcDeviceParam = {
    /**
     * - Terminal unique identifier
     */
    terminalUniqueIdentifier: string;
    body: PaymentPlatformModel.EdcUpdate;
};
type AddRefundBankAccountParam = {
    body: PaymentPlatformModel.AddBeneficiaryDetailsOTPCreation;
};
type AddRefundBankAccountUsingOTPParam = {
    body: PaymentPlatformModel.AddBeneficiaryDetailsOTPCreation;
};
type CancelPaymentLinkParam = {
    body: PaymentPlatformModel.CancelOrResendPaymentLinkCreation;
};
type CheckAndUpdatePaymentStatusParam = {
    body: PaymentPlatformModel.PaymentStatusUpdateCreation;
};
type ConfirmPaymentParam = {
    body: PaymentPlatformModel.PaymentConfirmationCreation;
};
type CopyConfigAggPaymentModesParam = {
    /**
     * - Aggregator Id
     */
    aggregatorId: string;
    body: PaymentPlatformModel.PlatformPaymentModeCopyConfigCreation;
};
type CopyConfigPaymentModesParam = {
    body: PaymentPlatformModel.PlatformPaymentModeCopyConfigCreation;
};
type CreateMerchantRefundPriorityParam = {
    /**
     * - Configuration for merchant or customer
     */
    configType: string;
    /**
     * - Business unit storefront or pos
     */
    businessUnit: string;
    body: PaymentPlatformModel.RefundPriorityCreation;
};
type CreatePaymentLinkParam = {
    body: PaymentPlatformModel.CreatePaymentLinkCreation;
};
type CreatePaymentOrderParam = {
    body: PaymentPlatformModel.PaymentOrderCreation;
};
type DeleteBeneficiaryDetailsParam = {
    body: PaymentPlatformModel.DeleteBeneficiary;
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
    /**
     * - Business unit storefront or pos
     */
    businessUnit: string;
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
    /**
     * - Flag to refresh the cache and retrieve the
     * updated payment option
     */
    refresh?: boolean;
    amount: number;
    /**
     * - Type of payment request, i.e. self
     */
    requestType?: string;
    /**
     * - Order id for the payment
     */
    orderId?: string;
    /**
     * - Shipment id for the payment
     */
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
    /**
     * - A boolean flag to include detailed cart and
     * line item information in the response. When set to true, the response will
     * contain comprehensive details about the cart, including each line item's
     * product or service descriptions, quantities, unit prices, applicable taxes,
     * discounts, total cart value, and total quantity. This provides a clear
     * breakdown of charges to the customer, helping to understand the total
     * amount billed in a more granular way.
     */
    lineItem?: boolean;
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
type GetShipmentBeneficiaryParam = {
    /**
     * - Shipment id
     */
    shipmentId: string;
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
    body: PaymentPlatformModel.PaymentInitializationCreation;
};
type MerchantOnBoardingParam = {
    body: PaymentPlatformModel.MerchantOnBoardingCreation;
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
    body: PaymentPlatformModel.PlatformPaymentMode;
};
type PatchMerchantPaymentOptionParam = {
    body: PaymentPlatformModel.MerchnatPaymentModeCreation;
};
type PatchMerchantPaymentOptionVersionParam = {
    /**
     * - Aggregators Id
     */
    aggregatorId: number;
    body: PaymentPlatformModel.PatchAggregatorControl;
};
type PatchPaymentModeSequencingParam = {
    body: PaymentPlatformModel.PlatformPaymentMode;
};
type PaymentStatusBulkParam = {
    body: PaymentPlatformModel.PaymentStatusBulkHandlerCreation;
};
type PollingPaymentLinkParam = {
    paymentLinkId: string;
};
type RepaymentDetailsParam = {
    body: PaymentPlatformModel.RepaymentDetailsSerialiserPayAll;
};
type ResendOrCancelPaymentParam = {
    body: PaymentPlatformModel.ResendOrCancelPaymentCreation;
};
type ResendPaymentLinkParam = {
    body: PaymentPlatformModel.CancelOrResendPaymentLinkCreation;
};
type RevokeOauthTokenParam = {
    /**
     * - Aggregator_slug
     */
    aggregator: string;
};
type SaveBrandPaymentGatewayConfigParam = {
    body: PaymentPlatformModel.PaymentGatewayConfigCreation;
};
type SetMerchantModeControlRoutesParam = {
    /**
     * - Offline / advance modes to get the payment modes
     */
    mode: string;
    body: PaymentPlatformModel.PlatformOfflineAdvance;
};
type SetPaymentModeCustomConfigParam = {
    /**
     * - Offline / advance payment mode
     */
    mode: string;
    body: PaymentPlatformModel.PaymentCustomConfigRequestSchema;
};
type SetRefundOptionforShipmentParam = {
    body: PaymentPlatformModel.ShipmentRefundDetails;
};
type SetUserCODlimitRoutesParam = {
    body: PaymentPlatformModel.SetCODForUserCreation;
};
type UpdateAggregatorCredentialParam = {
    body: PaymentPlatformModel.AggregatorCredentialReq;
};
type UpdateDefaultBeneficiaryParam = {
    body: PaymentPlatformModel.SetDefaultBeneficiary;
};
type UpdateEdcDeviceParam = {
    body: PaymentPlatformModel.EdcAddCreation;
};
type UpdateMerchantRefundPriorityParam = {
    /**
     * - Configuration for merchant or customer
     */
    configType: string;
    /**
     * - Business unit storefront or pos
     */
    businessUnit: string;
    body: PaymentPlatformModel.RefundPriorityCreation;
};
type UpdatePaymentSessionParam = {
    /**
     * - Global identifier of the entity (e.g. order, cart
     * etc.) against which payment_session was initiated. This is generated by
     * Fynd payments platform and is unique.
     */
    gid: string;
    body: PaymentPlatformModel.PaymentSessionCreation;
};
type UpdatePennyDropValidationParam = {
    body: PaymentPlatformModel.UpdatePennyDropValidation;
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
    body: PaymentPlatformModel.RefundSessionCreation;
};
type ValidateBeneficiaryAddressParam = {
    body: PaymentPlatformModel.ValidateValidateAddress;
};
type VerifyCustomerForPaymentParam = {
    body: PaymentPlatformModel.ValidateCustomerCreation;
};
type EdcAggregatorsAndModelListParam = any;
type EdcDeviceStatsParam = any;
type GetDevicesParam = any;
type GetPGConfigAggregatorsParam = any;
type GetPaymentCodeOptionParam = any;
type GetPennyDropValidationParam = any;
import PaymentPlatformModel = require("./PaymentPlatformModel");
