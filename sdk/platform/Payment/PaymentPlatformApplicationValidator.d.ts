export = PaymentPlatformApplicationValidator;
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
declare class PaymentPlatformApplicationValidator {
    /** @returns {addEdcDevice} */
    static addEdcDevice(): addEdcDevice;
    /** @returns {addRefundBankAccountUsingOTP} */
    static addRefundBankAccountUsingOTP(): addRefundBankAccountUsingOTP;
    /** @returns {cancelPaymentLink} */
    static cancelPaymentLink(): cancelPaymentLink;
    /** @returns {checkAndUpdatePaymentStatus} */
    static checkAndUpdatePaymentStatus(): checkAndUpdatePaymentStatus;
    /** @returns {confirmPayment} */
    static confirmPayment(): confirmPayment;
    /** @returns {createPaymentLink} */
    static createPaymentLink(): createPaymentLink;
    /** @returns {edcAggregatorsAndModelList} */
    static edcAggregatorsAndModelList(): edcAggregatorsAndModelList;
    /** @returns {edcDeviceList} */
    static edcDeviceList(): edcDeviceList;
    /** @returns {edcDeviceStats} */
    static edcDeviceStats(): edcDeviceStats;
    /** @returns {extensionPaymentUpdate} */
    static extensionPaymentUpdate(): extensionPaymentUpdate;
    /** @returns {getBankAccountDetailsOpenAPI} */
    static getBankAccountDetailsOpenAPI(): getBankAccountDetailsOpenAPI;
    /** @returns {getBrandPaymentGatewayConfig} */
    static getBrandPaymentGatewayConfig(): getBrandPaymentGatewayConfig;
    /** @returns {getEdcDevice} */
    static getEdcDevice(): getEdcDevice;
    /** @returns {getPaymentCodeOption} */
    static getPaymentCodeOption(): getPaymentCodeOption;
    /** @returns {getPaymentLink} */
    static getPaymentLink(): getPaymentLink;
    /** @returns {getPaymentModeRoutes} */
    static getPaymentModeRoutes(): getPaymentModeRoutes;
    /** @returns {getPosPaymentModeRoutes} */
    static getPosPaymentModeRoutes(): getPosPaymentModeRoutes;
    /** @returns {getUserBeneficiaries} */
    static getUserBeneficiaries(): getUserBeneficiaries;
    /** @returns {getUserCODlimitRoutes} */
    static getUserCODlimitRoutes(): getUserCODlimitRoutes;
    /** @returns {getUserOrderBeneficiaries} */
    static getUserOrderBeneficiaries(): getUserOrderBeneficiaries;
    /** @returns {initialisePayment} */
    static initialisePayment(): initialisePayment;
    /** @returns {merchantOnBoarding} */
    static merchantOnBoarding(): merchantOnBoarding;
    /** @returns {oauthGetUrl} */
    static oauthGetUrl(): oauthGetUrl;
    /** @returns {paymentStatusBulk} */
    static paymentStatusBulk(): paymentStatusBulk;
    /** @returns {pollingPaymentLink} */
    static pollingPaymentLink(): pollingPaymentLink;
    /** @returns {repaymentDetails} */
    static repaymentDetails(): repaymentDetails;
    /** @returns {resendOrCancelPayment} */
    static resendOrCancelPayment(): resendOrCancelPayment;
    /** @returns {resendPaymentLink} */
    static resendPaymentLink(): resendPaymentLink;
    /** @returns {revokeOauthToken} */
    static revokeOauthToken(): revokeOauthToken;
    /** @returns {saveBrandPaymentGatewayConfig} */
    static saveBrandPaymentGatewayConfig(): saveBrandPaymentGatewayConfig;
    /** @returns {setUserCODlimitRoutes} */
    static setUserCODlimitRoutes(): setUserCODlimitRoutes;
    /** @returns {updateEdcDevice} */
    static updateEdcDevice(): updateEdcDevice;
    /** @returns {verifyCustomerForPayment} */
    static verifyCustomerForPayment(): verifyCustomerForPayment;
}
declare namespace PaymentPlatformApplicationValidator {
    export { AddEdcDeviceParam, AddRefundBankAccountUsingOTPParam, CancelPaymentLinkParam, CheckAndUpdatePaymentStatusParam, ConfirmPaymentParam, CreatePaymentLinkParam, EdcAggregatorsAndModelListParam, EdcDeviceListParam, EdcDeviceStatsParam, ExtensionPaymentUpdateParam, GetBankAccountDetailsOpenAPIParam, GetBrandPaymentGatewayConfigParam, GetEdcDeviceParam, GetPaymentCodeOptionParam, GetPaymentLinkParam, GetPaymentModeRoutesParam, GetPosPaymentModeRoutesParam, GetUserBeneficiariesParam, GetUserCODlimitRoutesParam, GetUserOrderBeneficiariesParam, InitialisePaymentParam, MerchantOnBoardingParam, OauthGetUrlParam, PaymentStatusBulkParam, PollingPaymentLinkParam, RepaymentDetailsParam, ResendOrCancelPaymentParam, ResendPaymentLinkParam, RevokeOauthTokenParam, SaveBrandPaymentGatewayConfigParam, SetUserCODlimitRoutesParam, UpdateEdcDeviceParam, VerifyCustomerForPaymentParam };
}
type AddEdcDeviceParam = {
    /**
     * - Terminal unique identifier
     */
    terminalUniqueIdentifier: string;
    body: PaymentPlatformModel.EdcUpdateRequest;
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
type CreatePaymentLinkParam = {
    body: PaymentPlatformModel.CreatePaymentLinkRequest;
};
type EdcAggregatorsAndModelListParam = any;
type EdcDeviceListParam = {
    pageNo?: number;
    pageSize?: number;
    isActive?: boolean;
    storeId?: number;
    deviceTag?: string;
};
type EdcDeviceStatsParam = any;
type ExtensionPaymentUpdateParam = {
    body: PaymentPlatformModel.ExtensionPaymentUpdateRequestSerializer;
};
type GetBankAccountDetailsOpenAPIParam = {
    orderId: string;
    requestHash?: string;
};
type GetBrandPaymentGatewayConfigParam = any;
type GetEdcDeviceParam = {
    /**
     * - Terminal unique identifier
     */
    terminalUniqueIdentifier: string;
};
type GetPaymentCodeOptionParam = any;
type GetPaymentLinkParam = {
    paymentLinkId?: string;
};
type GetPaymentModeRoutesParam = {
    refresh: boolean;
    requestType: string;
};
type GetPosPaymentModeRoutesParam = {
    /**
     * - Payable amount.
     */
    amount: number;
    /**
     * - Identifier of the cart.
     */
    cartId: string;
    /**
     * - The PIN Code of the destination address, e.g. 400059
     */
    pincode: string;
    /**
     * - Option to checkout for self or for others.
     */
    checkoutMode: string;
    /**
     * - This is a boolean value. Select `true` to
     * remove temporary cache files on payment gateway and replace with the latest one.
     */
    refresh?: boolean;
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
};
type GetUserBeneficiariesParam = {
    orderId: string;
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
type SetUserCODlimitRoutesParam = {
    body: PaymentPlatformModel.SetCODForUserRequest;
};
type UpdateEdcDeviceParam = {
    body: PaymentPlatformModel.EdcAddRequest;
};
type VerifyCustomerForPaymentParam = {
    body: PaymentPlatformModel.ValidateCustomerRequest;
};
import PaymentPlatformModel = require("./PaymentPlatformModel");
