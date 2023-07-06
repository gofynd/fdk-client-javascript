export = PaymentApplicationValidator;
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
 * @typedef CustomerCreditSummaryParam
 * @property {string} [aggregator]
 */
/**
 * @typedef CustomerOnboardParam
 * @property {PaymentApplicationModel.CustomerOnboardingRequest} body
 */
/**
 * @typedef DeleteUserCardParam
 * @property {PaymentApplicationModel.DeletehCardRequest} body
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
 * @typedef GetPaymentModeRoutesPaymentLinkParam
 * @property {string} paymentLinkId - Payment link id
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
/** @typedef GetRupifiBannerDetailsParam */
/**
 * @typedef GetUserBeneficiariesDetailParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
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
 * @typedef UpdateDefaultBeneficiaryParam
 * @property {PaymentApplicationModel.SetDefaultBeneficiaryRequest} body
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
declare class PaymentApplicationValidator {
    /** @returns {addBeneficiaryDetails} */
    static addBeneficiaryDetails(): addBeneficiaryDetails;
    /** @returns {addRefundBankAccountUsingOTP} */
    static addRefundBankAccountUsingOTP(): addRefundBankAccountUsingOTP;
    /** @returns {attachCardToCustomer} */
    static attachCardToCustomer(): attachCardToCustomer;
    /** @returns {cancelPaymentLink} */
    static cancelPaymentLink(): cancelPaymentLink;
    /** @returns {cardDetails} */
    static cardDetails(): cardDetails;
    /** @returns {checkAndUpdatePaymentStatus} */
    static checkAndUpdatePaymentStatus(): checkAndUpdatePaymentStatus;
    /** @returns {checkAndUpdatePaymentStatusPaymentLink} */
    static checkAndUpdatePaymentStatusPaymentLink(): checkAndUpdatePaymentStatusPaymentLink;
    /** @returns {checkCredit} */
    static checkCredit(): checkCredit;
    /** @returns {createOrderHandlerPaymentLink} */
    static createOrderHandlerPaymentLink(): createOrderHandlerPaymentLink;
    /** @returns {createPaymentLink} */
    static createPaymentLink(): createPaymentLink;
    /** @returns {customerCreditSummary} */
    static customerCreditSummary(): customerCreditSummary;
    /** @returns {customerOnboard} */
    static customerOnboard(): customerOnboard;
    /** @returns {deleteUserCard} */
    static deleteUserCard(): deleteUserCard;
    /** @returns {enableOrDisableRefundTransferMode} */
    static enableOrDisableRefundTransferMode(): enableOrDisableRefundTransferMode;
    /** @returns {getActiveCardAggregator} */
    static getActiveCardAggregator(): getActiveCardAggregator;
    /** @returns {getActiveRefundTransferModes} */
    static getActiveRefundTransferModes(): getActiveRefundTransferModes;
    /** @returns {getActiveUserCards} */
    static getActiveUserCards(): getActiveUserCards;
    /** @returns {getAggregatorsConfig} */
    static getAggregatorsConfig(): getAggregatorsConfig;
    /** @returns {getEpaylaterBannerDetails} */
    static getEpaylaterBannerDetails(): getEpaylaterBannerDetails;
    /** @returns {getOrderBeneficiariesDetail} */
    static getOrderBeneficiariesDetail(): getOrderBeneficiariesDetail;
    /** @returns {getPaymentLink} */
    static getPaymentLink(): getPaymentLink;
    /** @returns {getPaymentModeRoutes} */
    static getPaymentModeRoutes(): getPaymentModeRoutes;
    /** @returns {getPaymentModeRoutesPaymentLink} */
    static getPaymentModeRoutesPaymentLink(): getPaymentModeRoutesPaymentLink;
    /** @returns {getPosPaymentModeRoutes} */
    static getPosPaymentModeRoutes(): getPosPaymentModeRoutes;
    /** @returns {getRupifiBannerDetails} */
    static getRupifiBannerDetails(): getRupifiBannerDetails;
    /** @returns {getUserBeneficiariesDetail} */
    static getUserBeneficiariesDetail(): getUserBeneficiariesDetail;
    /** @returns {initialisePayment} */
    static initialisePayment(): initialisePayment;
    /** @returns {initialisePaymentPaymentLink} */
    static initialisePaymentPaymentLink(): initialisePaymentPaymentLink;
    /** @returns {outstandingOrderDetails} */
    static outstandingOrderDetails(): outstandingOrderDetails;
    /** @returns {paidOrderDetails} */
    static paidOrderDetails(): paidOrderDetails;
    /** @returns {pollingPaymentLink} */
    static pollingPaymentLink(): pollingPaymentLink;
    /** @returns {redirectToAggregator} */
    static redirectToAggregator(): redirectToAggregator;
    /** @returns {renderHTML} */
    static renderHTML(): renderHTML;
    /** @returns {resendOrCancelPayment} */
    static resendOrCancelPayment(): resendOrCancelPayment;
    /** @returns {resendPaymentLink} */
    static resendPaymentLink(): resendPaymentLink;
    /** @returns {updateDefaultBeneficiary} */
    static updateDefaultBeneficiary(): updateDefaultBeneficiary;
    /** @returns {validateVPA} */
    static validateVPA(): validateVPA;
    /** @returns {verifyAndChargePayment} */
    static verifyAndChargePayment(): verifyAndChargePayment;
    /** @returns {verifyCustomerForPayment} */
    static verifyCustomerForPayment(): verifyCustomerForPayment;
    /** @returns {verifyIfscCode} */
    static verifyIfscCode(): verifyIfscCode;
    /** @returns {verifyOtpAndAddBeneficiaryForBank} */
    static verifyOtpAndAddBeneficiaryForBank(): verifyOtpAndAddBeneficiaryForBank;
    /** @returns {verifyOtpAndAddBeneficiaryForWallet} */
    static verifyOtpAndAddBeneficiaryForWallet(): verifyOtpAndAddBeneficiaryForWallet;
}
declare namespace PaymentApplicationValidator {
    export { AddBeneficiaryDetailsParam, AddRefundBankAccountUsingOTPParam, AttachCardToCustomerParam, CancelPaymentLinkParam, CardDetailsParam, CheckAndUpdatePaymentStatusParam, CheckAndUpdatePaymentStatusPaymentLinkParam, CheckCreditParam, CreateOrderHandlerPaymentLinkParam, CreatePaymentLinkParam, CustomerCreditSummaryParam, CustomerOnboardParam, DeleteUserCardParam, EnableOrDisableRefundTransferModeParam, GetActiveCardAggregatorParam, GetActiveRefundTransferModesParam, GetActiveUserCardsParam, GetAggregatorsConfigParam, GetEpaylaterBannerDetailsParam, GetOrderBeneficiariesDetailParam, GetPaymentLinkParam, GetPaymentModeRoutesParam, GetPaymentModeRoutesPaymentLinkParam, GetPosPaymentModeRoutesParam, GetRupifiBannerDetailsParam, GetUserBeneficiariesDetailParam, InitialisePaymentParam, InitialisePaymentPaymentLinkParam, OutstandingOrderDetailsParam, PaidOrderDetailsParam, PollingPaymentLinkParam, RedirectToAggregatorParam, RenderHTMLParam, ResendOrCancelPaymentParam, ResendPaymentLinkParam, UpdateDefaultBeneficiaryParam, ValidateVPAParam, VerifyAndChargePaymentParam, VerifyCustomerForPaymentParam, VerifyIfscCodeParam, VerifyOtpAndAddBeneficiaryForBankParam, VerifyOtpAndAddBeneficiaryForWalletParam };
}
type AddBeneficiaryDetailsParam = {
    body: PaymentApplicationModel.AddBeneficiaryDetailsRequest;
};
type AddRefundBankAccountUsingOTPParam = {
    body: PaymentApplicationModel.AddBeneficiaryDetailsOTPRequest;
};
type AttachCardToCustomerParam = {
    body: PaymentApplicationModel.AttachCardRequest;
};
type CancelPaymentLinkParam = {
    body: PaymentApplicationModel.CancelOrResendPaymentLinkRequest;
};
type CardDetailsParam = {
    /**
     * - Card first 6 digit IIN(prefix) number.
     */
    cardInfo: string;
    aggregator?: string;
};
type CheckAndUpdatePaymentStatusParam = {
    body: PaymentApplicationModel.PaymentStatusUpdateRequest;
};
type CheckAndUpdatePaymentStatusPaymentLinkParam = {
    body: PaymentApplicationModel.PaymentStatusUpdateRequest;
};
type CheckCreditParam = {
    aggregator?: string;
};
type CreateOrderHandlerPaymentLinkParam = {
    body: PaymentApplicationModel.CreateOrderUserRequest;
};
type CreatePaymentLinkParam = {
    body: PaymentApplicationModel.CreatePaymentLinkRequest;
};
type CustomerCreditSummaryParam = {
    aggregator?: string;
};
type CustomerOnboardParam = {
    body: PaymentApplicationModel.CustomerOnboardingRequest;
};
type DeleteUserCardParam = {
    body: PaymentApplicationModel.DeletehCardRequest;
};
type EnableOrDisableRefundTransferModeParam = {
    body: PaymentApplicationModel.UpdateRefundTransferModeRequest;
};
type GetActiveCardAggregatorParam = {
    refresh?: boolean;
};
type GetActiveRefundTransferModesParam = any;
type GetActiveUserCardsParam = {
    forceRefresh?: boolean;
};
type GetAggregatorsConfigParam = {
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
type GetEpaylaterBannerDetailsParam = any;
type GetOrderBeneficiariesDetailParam = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
};
type GetPaymentLinkParam = {
    paymentLinkId?: string;
};
type GetPaymentModeRoutesParam = {
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
type GetPaymentModeRoutesPaymentLinkParam = {
    /**
     * - Payment link id
     */
    paymentLinkId: string;
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
type GetRupifiBannerDetailsParam = any;
type GetUserBeneficiariesDetailParam = {
    /**
     * - A unique number used for identifying and
     * tracking your orders.
     */
    orderId: string;
};
type InitialisePaymentParam = {
    body: PaymentApplicationModel.PaymentInitializationRequest;
};
type InitialisePaymentPaymentLinkParam = {
    body: PaymentApplicationModel.PaymentInitializationRequest;
};
type OutstandingOrderDetailsParam = {
    aggregator?: string;
};
type PaidOrderDetailsParam = {
    aggregator?: string;
};
type PollingPaymentLinkParam = {
    paymentLinkId?: string;
};
type RedirectToAggregatorParam = {
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
type RenderHTMLParam = {
    body: PaymentApplicationModel.renderHTMLRequest;
};
type ResendOrCancelPaymentParam = {
    body: PaymentApplicationModel.ResendOrCancelPaymentRequest;
};
type ResendPaymentLinkParam = {
    body: PaymentApplicationModel.CancelOrResendPaymentLinkRequest;
};
type UpdateDefaultBeneficiaryParam = {
    body: PaymentApplicationModel.SetDefaultBeneficiaryRequest;
};
type ValidateVPAParam = {
    body: PaymentApplicationModel.ValidateVPARequest;
};
type VerifyAndChargePaymentParam = {
    body: PaymentApplicationModel.ChargeCustomerRequest;
};
type VerifyCustomerForPaymentParam = {
    body: PaymentApplicationModel.ValidateCustomerRequest;
};
type VerifyIfscCodeParam = {
    /**
     * - A 11-digit alphanumeric code that uniquely
     * identifies a bank branch.
     */
    ifscCode?: string;
};
type VerifyOtpAndAddBeneficiaryForBankParam = {
    body: PaymentApplicationModel.AddBeneficiaryViaOtpVerificationRequest;
};
type VerifyOtpAndAddBeneficiaryForWalletParam = {
    body: PaymentApplicationModel.WalletOtpRequest;
};
import PaymentApplicationModel = require("./PaymentApplicationModel");
