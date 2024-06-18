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
 * @typedef CreatePaymentOrderParam
 * @property {PaymentApplicationModel.PaymentOrderRequest} body
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
 * @typedef DelinkWalletParam
 * @property {PaymentApplicationModel.WalletDelinkRequestSchema} body
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
 * @property {string} [cartId] - Identifier of the cart.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {boolean} [refresh] - This is a boolean value. Select `true` to
 *   remove temporary cache files on payment gateway and replace with the latest one.
 * @property {string} [orderId]
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} [userDetails] - URIencoded JSON containing details of an
 *   anonymous user.
 * @property {boolean} [displaySplit] - Display Split Payment Option or not
 * @property {boolean} [advancePayment] - Display Advance Payment Options or Normal
 * @property {string} [shipmentId]
 */
/**
 * @typedef GetPaymentModeRoutesPaymentLinkParam
 * @property {string} paymentLinkId - Payment link id
 */
/**
 * @typedef GetPosPaymentModeRoutesParam
 * @property {number} amount - Payable amount.
 * @property {string} [cartId] - Identifier of the cart.
 * @property {string} pincode - The PIN Code of the destination address, e.g. 400059
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
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
 * @typedef LinkWalletParam
 * @property {PaymentApplicationModel.WalletVerifyRequestSchema} body
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
/**
 * @typedef WalletLinkInitiateParam
 * @property {PaymentApplicationModel.WalletLinkRequestSchema} body
 */
declare class PaymentApplicationValidator {
    /** @returns {AddBeneficiaryDetailsParam} */
    static addBeneficiaryDetails(): AddBeneficiaryDetailsParam;
    /** @returns {AddRefundBankAccountUsingOTPParam} */
    static addRefundBankAccountUsingOTP(): AddRefundBankAccountUsingOTPParam;
    /** @returns {AttachCardToCustomerParam} */
    static attachCardToCustomer(): AttachCardToCustomerParam;
    /** @returns {CancelPaymentLinkParam} */
    static cancelPaymentLink(): CancelPaymentLinkParam;
    /** @returns {CardDetailsParam} */
    static cardDetails(): CardDetailsParam;
    /** @returns {CheckAndUpdatePaymentStatusParam} */
    static checkAndUpdatePaymentStatus(): CheckAndUpdatePaymentStatusParam;
    /** @returns {CheckAndUpdatePaymentStatusPaymentLinkParam} */
    static checkAndUpdatePaymentStatusPaymentLink(): CheckAndUpdatePaymentStatusPaymentLinkParam;
    /** @returns {CheckCreditParam} */
    static checkCredit(): CheckCreditParam;
    /** @returns {CreateOrderHandlerPaymentLinkParam} */
    static createOrderHandlerPaymentLink(): CreateOrderHandlerPaymentLinkParam;
    /** @returns {CreatePaymentLinkParam} */
    static createPaymentLink(): CreatePaymentLinkParam;
    /** @returns {CreatePaymentOrderParam} */
    static createPaymentOrder(): CreatePaymentOrderParam;
    /** @returns {CustomerCreditSummaryParam} */
    static customerCreditSummary(): CustomerCreditSummaryParam;
    /** @returns {CustomerOnboardParam} */
    static customerOnboard(): CustomerOnboardParam;
    /** @returns {DeleteUserCardParam} */
    static deleteUserCard(): DeleteUserCardParam;
    /** @returns {DelinkWalletParam} */
    static delinkWallet(): DelinkWalletParam;
    /** @returns {EnableOrDisableRefundTransferModeParam} */
    static enableOrDisableRefundTransferMode(): EnableOrDisableRefundTransferModeParam;
    /** @returns {GetActiveCardAggregatorParam} */
    static getActiveCardAggregator(): GetActiveCardAggregatorParam;
    /** @returns {GetActiveRefundTransferModesParam} */
    static getActiveRefundTransferModes(): any;
    /** @returns {GetActiveUserCardsParam} */
    static getActiveUserCards(): GetActiveUserCardsParam;
    /** @returns {GetAggregatorsConfigParam} */
    static getAggregatorsConfig(): GetAggregatorsConfigParam;
    /** @returns {GetEpaylaterBannerDetailsParam} */
    static getEpaylaterBannerDetails(): any;
    /** @returns {GetOrderBeneficiariesDetailParam} */
    static getOrderBeneficiariesDetail(): GetOrderBeneficiariesDetailParam;
    /** @returns {GetPaymentLinkParam} */
    static getPaymentLink(): GetPaymentLinkParam;
    /** @returns {GetPaymentModeRoutesParam} */
    static getPaymentModeRoutes(): GetPaymentModeRoutesParam;
    /** @returns {GetPaymentModeRoutesPaymentLinkParam} */
    static getPaymentModeRoutesPaymentLink(): GetPaymentModeRoutesPaymentLinkParam;
    /** @returns {GetPosPaymentModeRoutesParam} */
    static getPosPaymentModeRoutes(): GetPosPaymentModeRoutesParam;
    /** @returns {GetRupifiBannerDetailsParam} */
    static getRupifiBannerDetails(): any;
    /** @returns {GetUserBeneficiariesDetailParam} */
    static getUserBeneficiariesDetail(): GetUserBeneficiariesDetailParam;
    /** @returns {InitialisePaymentParam} */
    static initialisePayment(): InitialisePaymentParam;
    /** @returns {InitialisePaymentPaymentLinkParam} */
    static initialisePaymentPaymentLink(): InitialisePaymentPaymentLinkParam;
    /** @returns {LinkWalletParam} */
    static linkWallet(): LinkWalletParam;
    /** @returns {OutstandingOrderDetailsParam} */
    static outstandingOrderDetails(): OutstandingOrderDetailsParam;
    /** @returns {PaidOrderDetailsParam} */
    static paidOrderDetails(): PaidOrderDetailsParam;
    /** @returns {PollingPaymentLinkParam} */
    static pollingPaymentLink(): PollingPaymentLinkParam;
    /** @returns {RedirectToAggregatorParam} */
    static redirectToAggregator(): RedirectToAggregatorParam;
    /** @returns {RenderHTMLParam} */
    static renderHTML(): RenderHTMLParam;
    /** @returns {ResendOrCancelPaymentParam} */
    static resendOrCancelPayment(): ResendOrCancelPaymentParam;
    /** @returns {ResendPaymentLinkParam} */
    static resendPaymentLink(): ResendPaymentLinkParam;
    /** @returns {UpdateDefaultBeneficiaryParam} */
    static updateDefaultBeneficiary(): UpdateDefaultBeneficiaryParam;
    /** @returns {ValidateVPAParam} */
    static validateVPA(): ValidateVPAParam;
    /** @returns {VerifyAndChargePaymentParam} */
    static verifyAndChargePayment(): VerifyAndChargePaymentParam;
    /** @returns {VerifyCustomerForPaymentParam} */
    static verifyCustomerForPayment(): VerifyCustomerForPaymentParam;
    /** @returns {VerifyIfscCodeParam} */
    static verifyIfscCode(): VerifyIfscCodeParam;
    /** @returns {VerifyOtpAndAddBeneficiaryForBankParam} */
    static verifyOtpAndAddBeneficiaryForBank(): VerifyOtpAndAddBeneficiaryForBankParam;
    /** @returns {VerifyOtpAndAddBeneficiaryForWalletParam} */
    static verifyOtpAndAddBeneficiaryForWallet(): VerifyOtpAndAddBeneficiaryForWalletParam;
    /** @returns {WalletLinkInitiateParam} */
    static walletLinkInitiate(): WalletLinkInitiateParam;
}
declare namespace PaymentApplicationValidator {
    export { AddBeneficiaryDetailsParam, AddRefundBankAccountUsingOTPParam, AttachCardToCustomerParam, CancelPaymentLinkParam, CardDetailsParam, CheckAndUpdatePaymentStatusParam, CheckAndUpdatePaymentStatusPaymentLinkParam, CheckCreditParam, CreateOrderHandlerPaymentLinkParam, CreatePaymentLinkParam, CreatePaymentOrderParam, CustomerCreditSummaryParam, CustomerOnboardParam, DeleteUserCardParam, DelinkWalletParam, EnableOrDisableRefundTransferModeParam, GetActiveCardAggregatorParam, GetActiveRefundTransferModesParam, GetActiveUserCardsParam, GetAggregatorsConfigParam, GetEpaylaterBannerDetailsParam, GetOrderBeneficiariesDetailParam, GetPaymentLinkParam, GetPaymentModeRoutesParam, GetPaymentModeRoutesPaymentLinkParam, GetPosPaymentModeRoutesParam, GetRupifiBannerDetailsParam, GetUserBeneficiariesDetailParam, InitialisePaymentParam, InitialisePaymentPaymentLinkParam, LinkWalletParam, OutstandingOrderDetailsParam, PaidOrderDetailsParam, PollingPaymentLinkParam, RedirectToAggregatorParam, RenderHTMLParam, ResendOrCancelPaymentParam, ResendPaymentLinkParam, UpdateDefaultBeneficiaryParam, ValidateVPAParam, VerifyAndChargePaymentParam, VerifyCustomerForPaymentParam, VerifyIfscCodeParam, VerifyOtpAndAddBeneficiaryForBankParam, VerifyOtpAndAddBeneficiaryForWalletParam, WalletLinkInitiateParam };
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
type CreatePaymentOrderParam = {
    body: PaymentApplicationModel.PaymentOrderRequest;
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
type DelinkWalletParam = {
    body: PaymentApplicationModel.WalletDelinkRequestSchema;
};
type EnableOrDisableRefundTransferModeParam = {
    body: PaymentApplicationModel.UpdateRefundTransferModeRequest;
};
type GetActiveCardAggregatorParam = {
    refresh?: boolean;
};
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
    cartId?: string;
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
type LinkWalletParam = {
    body: PaymentApplicationModel.WalletVerifyRequestSchema;
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
type WalletLinkInitiateParam = {
    body: PaymentApplicationModel.WalletLinkRequestSchema;
};
type GetActiveRefundTransferModesParam = any;
type GetEpaylaterBannerDetailsParam = any;
type GetRupifiBannerDetailsParam = any;
import PaymentApplicationModel = require("./PaymentApplicationModel");
