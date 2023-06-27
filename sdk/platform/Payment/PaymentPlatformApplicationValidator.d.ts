export = PaymentPlatformApplicationValidator;
/**
 * @typedef addEdcDevice
 * @property {string} terminalUniqueIdentifier - Terminal unique identifier
 * @property {PaymentPlatformModel.EdcUpdateRequest} body
 */
/**
 * @typedef addRefundBankAccountUsingOTP
 * @property {PaymentPlatformModel.AddBeneficiaryDetailsOTPRequest} body
 */
/**
 * @typedef cancelPaymentLink
 * @property {PaymentPlatformModel.CancelOrResendPaymentLinkRequest} body
 */
/**
 * @typedef checkAndUpdatePaymentStatus
 * @property {PaymentPlatformModel.PaymentStatusUpdateRequest} body
 */
/**
 * @typedef confirmPayment
 * @property {PaymentPlatformModel.PaymentConfirmationRequest} body
 */
/**
 * @typedef createPaymentLink
 * @property {PaymentPlatformModel.CreatePaymentLinkRequest} body
 */
/** @typedef edcAggregatorsAndModelList */
/**
 * @typedef edcDeviceList
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {boolean} [isActive]
 * @property {number} [storeId]
 * @property {string} [deviceTag]
 */
/** @typedef edcDeviceStats */
/**
 * @typedef getBankAccountDetailsOpenAPI
 * @property {string} orderId
 * @property {string} [requestHash]
 */
/** @typedef getBrandPaymentGatewayConfig */
/**
 * @typedef getEdcDevice
 * @property {string} terminalUniqueIdentifier - Terminal unique identifier
 */
/** @typedef getPaymentCodeOption */
/**
 * @typedef getPaymentLink
 * @property {string} [paymentLinkId]
 */
/**
 * @typedef getPaymentModeRoutes
 * @property {boolean} refresh
 * @property {string} requestType
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
/**
 * @typedef getUserBeneficiaries
 * @property {string} orderId
 */
/**
 * @typedef getUserCODlimitRoutes
 * @property {string} merchantUserId
 * @property {string} mobileNo
 */
/**
 * @typedef getUserOrderBeneficiaries
 * @property {string} orderId
 */
/**
 * @typedef initialisePayment
 * @property {PaymentPlatformModel.PaymentInitializationRequest} body
 */
/**
 * @typedef merchantOnBoarding
 * @property {PaymentPlatformModel.MerchantOnBoardingRequest} body
 */
/**
 * @typedef oauthGetUrl
 * @property {string} aggregator - Aggregator
 * @property {string} [successRedirectUrl]
 * @property {string} [failureRedirectUrl]
 */
/**
 * @typedef paymentStatusBulk
 * @property {PaymentPlatformModel.PaymentStatusBulkHandlerRequest} body
 */
/**
 * @typedef pollingPaymentLink
 * @property {string} [paymentLinkId]
 */
/**
 * @typedef repaymentDetails
 * @property {PaymentPlatformModel.RepaymentDetailsSerialiserPayAll} body
 */
/**
 * @typedef resendOrCancelPayment
 * @property {PaymentPlatformModel.ResendOrCancelPaymentRequest} body
 */
/**
 * @typedef resendPaymentLink
 * @property {PaymentPlatformModel.CancelOrResendPaymentLinkRequest} body
 */
/**
 * @typedef revokeOauthToken
 * @property {string} aggregator - Aggregator_slug
 */
/**
 * @typedef saveBrandPaymentGatewayConfig
 * @property {PaymentPlatformModel.PaymentGatewayConfigRequest} body
 */
/**
 * @typedef setUserCODlimitRoutes
 * @property {PaymentPlatformModel.SetCODForUserRequest} body
 */
/**
 * @typedef updateEdcDevice
 * @property {PaymentPlatformModel.EdcAddRequest} body
 */
/**
 * @typedef verifyCustomerForPayment
 * @property {PaymentPlatformModel.ValidateCustomerRequest} body
 */
declare class PaymentPlatformApplicationValidator {
}
declare namespace PaymentPlatformApplicationValidator {
    export { addEdcDevice, addRefundBankAccountUsingOTP, cancelPaymentLink, checkAndUpdatePaymentStatus, confirmPayment, createPaymentLink, edcAggregatorsAndModelList, edcDeviceList, edcDeviceStats, getBankAccountDetailsOpenAPI, getBrandPaymentGatewayConfig, getEdcDevice, getPaymentCodeOption, getPaymentLink, getPaymentModeRoutes, getPosPaymentModeRoutes, getUserBeneficiaries, getUserCODlimitRoutes, getUserOrderBeneficiaries, initialisePayment, merchantOnBoarding, oauthGetUrl, paymentStatusBulk, pollingPaymentLink, repaymentDetails, resendOrCancelPayment, resendPaymentLink, revokeOauthToken, saveBrandPaymentGatewayConfig, setUserCODlimitRoutes, updateEdcDevice, verifyCustomerForPayment };
}
/** @returns {addEdcDevice} */
declare function addEdcDevice(): addEdcDevice;
type addEdcDevice = {
    /**
     * - Terminal unique identifier
     */
    terminalUniqueIdentifier: string;
    body: PaymentPlatformModel.EdcUpdateRequest;
};
/** @returns {addRefundBankAccountUsingOTP} */
declare function addRefundBankAccountUsingOTP(): addRefundBankAccountUsingOTP;
type addRefundBankAccountUsingOTP = {
    body: PaymentPlatformModel.AddBeneficiaryDetailsOTPRequest;
};
/** @returns {cancelPaymentLink} */
declare function cancelPaymentLink(): cancelPaymentLink;
type cancelPaymentLink = {
    body: PaymentPlatformModel.CancelOrResendPaymentLinkRequest;
};
/** @returns {checkAndUpdatePaymentStatus} */
declare function checkAndUpdatePaymentStatus(): checkAndUpdatePaymentStatus;
type checkAndUpdatePaymentStatus = {
    body: PaymentPlatformModel.PaymentStatusUpdateRequest;
};
/** @returns {confirmPayment} */
declare function confirmPayment(): confirmPayment;
type confirmPayment = {
    body: PaymentPlatformModel.PaymentConfirmationRequest;
};
/** @returns {createPaymentLink} */
declare function createPaymentLink(): createPaymentLink;
type createPaymentLink = {
    body: PaymentPlatformModel.CreatePaymentLinkRequest;
};
/** @returns {edcAggregatorsAndModelList} */
declare function edcAggregatorsAndModelList(): any;
type edcAggregatorsAndModelList = any;
/** @returns {edcDeviceList} */
declare function edcDeviceList(): edcDeviceList;
type edcDeviceList = {
    pageNo?: number;
    pageSize?: number;
    isActive?: boolean;
    storeId?: number;
    deviceTag?: string;
};
/** @returns {edcDeviceStats} */
declare function edcDeviceStats(): any;
type edcDeviceStats = any;
/** @returns {getBankAccountDetailsOpenAPI} */
declare function getBankAccountDetailsOpenAPI(): getBankAccountDetailsOpenAPI;
type getBankAccountDetailsOpenAPI = {
    orderId: string;
    requestHash?: string;
};
/** @returns {getBrandPaymentGatewayConfig} */
declare function getBrandPaymentGatewayConfig(): any;
type getBrandPaymentGatewayConfig = any;
/** @returns {getEdcDevice} */
declare function getEdcDevice(): getEdcDevice;
type getEdcDevice = {
    /**
     * - Terminal unique identifier
     */
    terminalUniqueIdentifier: string;
};
/** @returns {getPaymentCodeOption} */
declare function getPaymentCodeOption(): any;
type getPaymentCodeOption = any;
/** @returns {getPaymentLink} */
declare function getPaymentLink(): getPaymentLink;
type getPaymentLink = {
    paymentLinkId?: string;
};
/** @returns {getPaymentModeRoutes} */
declare function getPaymentModeRoutes(): getPaymentModeRoutes;
type getPaymentModeRoutes = {
    refresh: boolean;
    requestType: string;
};
/** @returns {getPosPaymentModeRoutes} */
declare function getPosPaymentModeRoutes(): getPosPaymentModeRoutes;
type getPosPaymentModeRoutes = {
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
/** @returns {getUserBeneficiaries} */
declare function getUserBeneficiaries(): getUserBeneficiaries;
type getUserBeneficiaries = {
    orderId: string;
};
/** @returns {getUserCODlimitRoutes} */
declare function getUserCODlimitRoutes(): getUserCODlimitRoutes;
type getUserCODlimitRoutes = {
    merchantUserId: string;
    mobileNo: string;
};
/** @returns {getUserOrderBeneficiaries} */
declare function getUserOrderBeneficiaries(): getUserOrderBeneficiaries;
type getUserOrderBeneficiaries = {
    orderId: string;
};
/** @returns {initialisePayment} */
declare function initialisePayment(): initialisePayment;
type initialisePayment = {
    body: PaymentPlatformModel.PaymentInitializationRequest;
};
/** @returns {merchantOnBoarding} */
declare function merchantOnBoarding(): merchantOnBoarding;
type merchantOnBoarding = {
    body: PaymentPlatformModel.MerchantOnBoardingRequest;
};
/** @returns {oauthGetUrl} */
declare function oauthGetUrl(): oauthGetUrl;
type oauthGetUrl = {
    /**
     * - Aggregator
     */
    aggregator: string;
    successRedirectUrl?: string;
    failureRedirectUrl?: string;
};
/** @returns {paymentStatusBulk} */
declare function paymentStatusBulk(): paymentStatusBulk;
type paymentStatusBulk = {
    body: PaymentPlatformModel.PaymentStatusBulkHandlerRequest;
};
/** @returns {pollingPaymentLink} */
declare function pollingPaymentLink(): pollingPaymentLink;
type pollingPaymentLink = {
    paymentLinkId?: string;
};
/** @returns {repaymentDetails} */
declare function repaymentDetails(): repaymentDetails;
type repaymentDetails = {
    body: PaymentPlatformModel.RepaymentDetailsSerialiserPayAll;
};
/** @returns {resendOrCancelPayment} */
declare function resendOrCancelPayment(): resendOrCancelPayment;
type resendOrCancelPayment = {
    body: PaymentPlatformModel.ResendOrCancelPaymentRequest;
};
/** @returns {resendPaymentLink} */
declare function resendPaymentLink(): resendPaymentLink;
type resendPaymentLink = {
    body: PaymentPlatformModel.CancelOrResendPaymentLinkRequest;
};
/** @returns {revokeOauthToken} */
declare function revokeOauthToken(): revokeOauthToken;
type revokeOauthToken = {
    /**
     * - Aggregator_slug
     */
    aggregator: string;
};
/** @returns {saveBrandPaymentGatewayConfig} */
declare function saveBrandPaymentGatewayConfig(): saveBrandPaymentGatewayConfig;
type saveBrandPaymentGatewayConfig = {
    body: PaymentPlatformModel.PaymentGatewayConfigRequest;
};
/** @returns {setUserCODlimitRoutes} */
declare function setUserCODlimitRoutes(): setUserCODlimitRoutes;
type setUserCODlimitRoutes = {
    body: PaymentPlatformModel.SetCODForUserRequest;
};
/** @returns {updateEdcDevice} */
declare function updateEdcDevice(): updateEdcDevice;
type updateEdcDevice = {
    body: PaymentPlatformModel.EdcAddRequest;
};
/** @returns {verifyCustomerForPayment} */
declare function verifyCustomerForPayment(): verifyCustomerForPayment;
type verifyCustomerForPayment = {
    body: PaymentPlatformModel.ValidateCustomerRequest;
};
import PaymentPlatformModel = require("./PaymentPlatformModel");
