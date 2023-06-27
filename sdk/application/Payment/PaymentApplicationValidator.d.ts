export = PaymentApplicationValidator;
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
declare class PaymentApplicationValidator {
}
declare namespace PaymentApplicationValidator {
    export { addBeneficiaryDetails, addRefundBankAccountUsingOTP, attachCardToCustomer, cancelPaymentLink, cardDetails, checkAndUpdatePaymentStatus, checkAndUpdatePaymentStatusPaymentLink, checkCredit, createOrderHandlerPaymentLink, createPaymentLink, customerCreditSummary, customerOnboard, deleteUserCard, enableOrDisableRefundTransferMode, getActiveCardAggregator, getActiveRefundTransferModes, getActiveUserCards, getAggregatorsConfig, getEpaylaterBannerDetails, getOrderBeneficiariesDetail, getPaymentLink, getPaymentModeRoutes, getPaymentModeRoutesPaymentLink, getPosPaymentModeRoutes, getRupifiBannerDetails, getUserBeneficiariesDetail, initialisePayment, initialisePaymentPaymentLink, outstandingOrderDetails, paidOrderDetails, pollingPaymentLink, redirectToAggregator, renderHTML, resendOrCancelPayment, resendPaymentLink, updateDefaultBeneficiary, validateVPA, verifyAndChargePayment, verifyCustomerForPayment, verifyIfscCode, verifyOtpAndAddBeneficiaryForBank, verifyOtpAndAddBeneficiaryForWallet };
}
/** @returns {addBeneficiaryDetails} */
declare function addBeneficiaryDetails(): addBeneficiaryDetails;
type addBeneficiaryDetails = {
    body: PaymentApplicationModel.AddBeneficiaryDetailsRequest;
};
/** @returns {addRefundBankAccountUsingOTP} */
declare function addRefundBankAccountUsingOTP(): addRefundBankAccountUsingOTP;
type addRefundBankAccountUsingOTP = {
    body: PaymentApplicationModel.AddBeneficiaryDetailsOTPRequest;
};
/** @returns {attachCardToCustomer} */
declare function attachCardToCustomer(): attachCardToCustomer;
type attachCardToCustomer = {
    body: PaymentApplicationModel.AttachCardRequest;
};
/** @returns {cancelPaymentLink} */
declare function cancelPaymentLink(): cancelPaymentLink;
type cancelPaymentLink = {
    body: PaymentApplicationModel.CancelOrResendPaymentLinkRequest;
};
/** @returns {cardDetails} */
declare function cardDetails(): cardDetails;
type cardDetails = {
    /**
     * - Card first 6 digit IIN(prefix) number.
     */
    cardInfo: string;
    aggregator?: string;
};
/** @returns {checkAndUpdatePaymentStatus} */
declare function checkAndUpdatePaymentStatus(): checkAndUpdatePaymentStatus;
type checkAndUpdatePaymentStatus = {
    body: PaymentApplicationModel.PaymentStatusUpdateRequest;
};
/** @returns {checkAndUpdatePaymentStatusPaymentLink} */
declare function checkAndUpdatePaymentStatusPaymentLink(): checkAndUpdatePaymentStatusPaymentLink;
type checkAndUpdatePaymentStatusPaymentLink = {
    body: PaymentApplicationModel.PaymentStatusUpdateRequest;
};
/** @returns {checkCredit} */
declare function checkCredit(): checkCredit;
type checkCredit = {
    aggregator?: string;
};
/** @returns {createOrderHandlerPaymentLink} */
declare function createOrderHandlerPaymentLink(): createOrderHandlerPaymentLink;
type createOrderHandlerPaymentLink = {
    body: PaymentApplicationModel.CreateOrderUserRequest;
};
/** @returns {createPaymentLink} */
declare function createPaymentLink(): createPaymentLink;
type createPaymentLink = {
    body: PaymentApplicationModel.CreatePaymentLinkRequest;
};
/** @returns {customerCreditSummary} */
declare function customerCreditSummary(): customerCreditSummary;
type customerCreditSummary = {
    aggregator?: string;
};
/** @returns {customerOnboard} */
declare function customerOnboard(): customerOnboard;
type customerOnboard = {
    body: PaymentApplicationModel.CustomerOnboardingRequest;
};
/** @returns {deleteUserCard} */
declare function deleteUserCard(): deleteUserCard;
type deleteUserCard = {
    body: PaymentApplicationModel.DeletehCardRequest;
};
/** @returns {enableOrDisableRefundTransferMode} */
declare function enableOrDisableRefundTransferMode(): enableOrDisableRefundTransferMode;
type enableOrDisableRefundTransferMode = {
    body: PaymentApplicationModel.UpdateRefundTransferModeRequest;
};
/** @returns {getActiveCardAggregator} */
declare function getActiveCardAggregator(): getActiveCardAggregator;
type getActiveCardAggregator = {
    refresh?: boolean;
};
/** @returns {getActiveRefundTransferModes} */
declare function getActiveRefundTransferModes(): any;
type getActiveRefundTransferModes = any;
/** @returns {getActiveUserCards} */
declare function getActiveUserCards(): getActiveUserCards;
type getActiveUserCards = {
    forceRefresh?: boolean;
};
/** @returns {getAggregatorsConfig} */
declare function getAggregatorsConfig(): getAggregatorsConfig;
type getAggregatorsConfig = {
    /**
     * - Used for basic authentication.
     */
    xApiToken?: string;
    /**
     * - This is a boolean value. Select `true` to
     * remove temporary cache files on payment gateway and replace with the latest one.
     */
    refresh?: boolean;
};
/** @returns {getEpaylaterBannerDetails} */
declare function getEpaylaterBannerDetails(): any;
type getEpaylaterBannerDetails = any;
/** @returns {getOrderBeneficiariesDetail} */
declare function getOrderBeneficiariesDetail(): getOrderBeneficiariesDetail;
type getOrderBeneficiariesDetail = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
};
/** @returns {getPaymentLink} */
declare function getPaymentLink(): getPaymentLink;
type getPaymentLink = {
    paymentLinkId?: string;
};
/** @returns {getPaymentModeRoutes} */
declare function getPaymentModeRoutes(): getPaymentModeRoutes;
type getPaymentModeRoutes = {
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
     * - URIencoded JSON containing details of an
     * anonymous user.
     */
    userDetails?: string;
};
/** @returns {getPaymentModeRoutesPaymentLink} */
declare function getPaymentModeRoutesPaymentLink(): getPaymentModeRoutesPaymentLink;
type getPaymentModeRoutesPaymentLink = {
    /**
     * - Payment link id
     */
    paymentLinkId: string;
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
/** @returns {getRupifiBannerDetails} */
declare function getRupifiBannerDetails(): any;
type getRupifiBannerDetails = any;
/** @returns {getUserBeneficiariesDetail} */
declare function getUserBeneficiariesDetail(): getUserBeneficiariesDetail;
type getUserBeneficiariesDetail = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
};
/** @returns {initialisePayment} */
declare function initialisePayment(): initialisePayment;
type initialisePayment = {
    body: PaymentApplicationModel.PaymentInitializationRequest;
};
/** @returns {initialisePaymentPaymentLink} */
declare function initialisePaymentPaymentLink(): initialisePaymentPaymentLink;
type initialisePaymentPaymentLink = {
    body: PaymentApplicationModel.PaymentInitializationRequest;
};
/** @returns {outstandingOrderDetails} */
declare function outstandingOrderDetails(): outstandingOrderDetails;
type outstandingOrderDetails = {
    aggregator?: string;
};
/** @returns {paidOrderDetails} */
declare function paidOrderDetails(): paidOrderDetails;
type paidOrderDetails = {
    aggregator?: string;
};
/** @returns {pollingPaymentLink} */
declare function pollingPaymentLink(): pollingPaymentLink;
type pollingPaymentLink = {
    paymentLinkId?: string;
};
/** @returns {redirectToAggregator} */
declare function redirectToAggregator(): redirectToAggregator;
type redirectToAggregator = {
    /**
     * - This is a String value that contains callback
     * URL as value.
     */
    source?: string;
    /**
     * - This is a String value that contains
     * aggregator name as value.
     */
    aggregator?: string;
};
/** @returns {renderHTML} */
declare function renderHTML(): renderHTML;
type renderHTML = {
    body: PaymentApplicationModel.renderHTMLRequest;
};
/** @returns {resendOrCancelPayment} */
declare function resendOrCancelPayment(): resendOrCancelPayment;
type resendOrCancelPayment = {
    body: PaymentApplicationModel.ResendOrCancelPaymentRequest;
};
/** @returns {resendPaymentLink} */
declare function resendPaymentLink(): resendPaymentLink;
type resendPaymentLink = {
    body: PaymentApplicationModel.CancelOrResendPaymentLinkRequest;
};
/** @returns {updateDefaultBeneficiary} */
declare function updateDefaultBeneficiary(): updateDefaultBeneficiary;
type updateDefaultBeneficiary = {
    body: PaymentApplicationModel.SetDefaultBeneficiaryRequest;
};
/** @returns {validateVPA} */
declare function validateVPA(): validateVPA;
type validateVPA = {
    body: PaymentApplicationModel.ValidateVPARequest;
};
/** @returns {verifyAndChargePayment} */
declare function verifyAndChargePayment(): verifyAndChargePayment;
type verifyAndChargePayment = {
    body: PaymentApplicationModel.ChargeCustomerRequest;
};
/** @returns {verifyCustomerForPayment} */
declare function verifyCustomerForPayment(): verifyCustomerForPayment;
type verifyCustomerForPayment = {
    body: PaymentApplicationModel.ValidateCustomerRequest;
};
/** @returns {verifyIfscCode} */
declare function verifyIfscCode(): verifyIfscCode;
type verifyIfscCode = {
    /**
     * - A 11-digit alphanumeric code that uniquely
     * identifies a bank branch.
     */
    ifscCode?: string;
};
/** @returns {verifyOtpAndAddBeneficiaryForBank} */
declare function verifyOtpAndAddBeneficiaryForBank(): verifyOtpAndAddBeneficiaryForBank;
type verifyOtpAndAddBeneficiaryForBank = {
    body: PaymentApplicationModel.AddBeneficiaryViaOtpVerificationRequest;
};
/** @returns {verifyOtpAndAddBeneficiaryForWallet} */
declare function verifyOtpAndAddBeneficiaryForWallet(): verifyOtpAndAddBeneficiaryForWallet;
type verifyOtpAndAddBeneficiaryForWallet = {
    body: PaymentApplicationModel.WalletOtpRequest;
};
import PaymentApplicationModel = require("./PaymentApplicationModel");
