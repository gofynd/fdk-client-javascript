export = PaymentApplicationValidator;
/**
 * @typedef AddBeneficiaryDetailsParam
 * @property {PaymentApplicationModel.AddBeneficiaryDetails} body
 */
/**
 * @typedef AddRefundBankAccountUsingOTPParam
 * @property {PaymentApplicationModel.AddBeneficiaryDetailsOTP} body
 */
/**
 * @typedef AttachCardToCustomerParam
 * @property {PaymentApplicationModel.AttachCard} body
 */
/**
 * @typedef CancelPaymentLinkParam
 * @property {PaymentApplicationModel.CancelOrResendPaymentLink} body
 */
/**
 * @typedef CardDetailsParam
 * @property {string} cardInfo - Card first 6 digit IIN(prefix) number.
 * @property {string} [aggregator] - This is a string value describing the
 *   aggregator name.
 */
/**
 * @typedef CheckAndUpdatePaymentStatusParam
 * @property {PaymentApplicationModel.PaymentStatusUpdate} body
 */
/**
 * @typedef CheckAndUpdatePaymentStatusPaymentLinkParam
 * @property {PaymentApplicationModel.PaymentStatusUpdate} body
 */
/**
 * @typedef CheckCreditParam
 * @property {string} [aggregator] - Aggregator name.
 */
/**
 * @typedef CreateOrderHandlerPaymentLinkParam
 * @property {PaymentApplicationModel.CreateOrderUser} body
 */
/**
 * @typedef CreatePaymentLinkParam
 * @property {PaymentApplicationModel.CreatePaymentLink} body
 */
/**
 * @typedef CreatePaymentOrderParam
 * @property {PaymentApplicationModel.PaymentOrder} body
 */
/**
 * @typedef CustomerCreditSummaryParam
 * @property {string} [aggregator] - Aggregator name.
 */
/**
 * @typedef CustomerOnboardParam
 * @property {PaymentApplicationModel.CustomerOnboarding} body
 */
/**
 * @typedef DeleteUserCardParam
 * @property {PaymentApplicationModel.DeleteCard} body
 */
/**
 * @typedef DelinkWalletParam
 * @property {PaymentApplicationModel.WalletDelinkRequestSchema} body
 */
/**
 * @typedef EnableOrDisableRefundTransferModeParam
 * @property {PaymentApplicationModel.UpdateRefundTransferMode} body
 */
/**
 * @typedef GetActiveCardAggregatorParam
 * @property {boolean} [refresh] - Select `true` to remove temporary cache files
 *   on payment gateway and replace with the latest one.
 */
/** @typedef GetActiveRefundTransferModesParam */
/**
 * @typedef GetActiveUserCardsParam
 * @property {boolean} [forceRefresh] - Select `true` to clear the cache.
 */
/**
 * @typedef GetAggregatorsConfigParam
 * @property {string} [xApiToken] - Basic auth token.
 * @property {boolean} [refresh] - Select `true` to remove temporary cache files
 *   on payment gateway and replace with the latest one.
 */
/** @typedef GetEpaylaterBannerDetailsParam */
/**
 * @typedef GetOrderBeneficiariesDetailParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */
/**
 * @typedef GetPaymentLinkParam
 * @property {string} [paymentLinkId] - Unique payment link id.
 */
/**
 * @typedef GetPaymentModeRoutesParam
 * @property {number} amount - Payable amount.
 * @property {string} [cartId] - Identifier of the cart.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {boolean} [refresh] - Select `true` to remove temporary cache files
 *   on payment gateway and replace with the latest one.
 * @property {string} [orderId] - Identifier of the order, order_id.
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} [userDetails] - URLencoded JSON containing details of an
 *   anonymous user.
 * @property {boolean} [displaySplit] - Display Split Payment Option or not.
 * @property {boolean} [advancePayment] - Display Advance Payment Options or Normal.
 * @property {string} [shipmentId] - Identifier of the shipment, shipment_id.
 */
/**
 * @typedef GetPaymentModeRoutesPaymentLinkParam
 * @property {string} paymentLinkId - Payment link id.
 */
/**
 * @typedef GetPosPaymentModeRoutesParam
 * @property {number} amount - Payable amount.
 * @property {string} [cartId] - Identifier of the cart.
 * @property {string} pincode - The PIN Code of the destination address, e.g. 400059.
 * @property {string} [checkoutMode] - Option to checkout for self or for others.
 * @property {boolean} [refresh] - Select `true` to remove temporary cache files
 *   on payment gateway and replace with the latest one.
 * @property {string} [cardReference] - Card reference id of user's debit or credit card.
 * @property {string} orderType - The order type of shipment HomeDelivery - If
 *   the customer wants the order home-delivered PickAtStore - If the customer
 *   wants the handover of an order at the store itself.
 * @property {string} [userDetails] - URLencoded JSON containing details of an
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
 * @property {PaymentApplicationModel.PaymentInitialization} body
 */
/**
 * @typedef InitialisePaymentPaymentLinkParam
 * @property {PaymentApplicationModel.PaymentInitialization} body
 */
/**
 * @typedef LinkWalletParam
 * @property {PaymentApplicationModel.WalletVerifyRequestSchema} body
 */
/**
 * @typedef OutstandingOrderDetailsParam
 * @property {string} [aggregator] - Merchant user ID as value.
 */
/**
 * @typedef PaidOrderDetailsParam
 * @property {string} [aggregator] - Merchant user ID as value.
 */
/**
 * @typedef PollingPaymentLinkParam
 * @property {string} [paymentLinkId] - Unique payment link id.
 */
/**
 * @typedef RedirectToAggregatorParam
 * @property {string} [source] - Callback URL to get callback from aggregator.
 * @property {string} [aggregator] - Aggregator name.
 */
/**
 * @typedef RenderHTMLParam
 * @property {PaymentApplicationModel.RenderHTML} body
 */
/**
 * @typedef ResendOrCancelPaymentParam
 * @property {PaymentApplicationModel.ResendOrCancelPayment} body
 */
/**
 * @typedef ResendPaymentLinkParam
 * @property {PaymentApplicationModel.CancelOrResendPaymentLink} body
 */
/**
 * @typedef UpdateDefaultBeneficiaryParam
 * @property {PaymentApplicationModel.SetDefaultBeneficiary} body
 */
/**
 * @typedef ValidateVPAParam
 * @property {PaymentApplicationModel.ValidateVPA} body
 */
/**
 * @typedef VerifyAndChargePaymentParam
 * @property {PaymentApplicationModel.ChargeCustomer} body
 */
/**
 * @typedef VerifyCustomerForPaymentParam
 * @property {PaymentApplicationModel.ValidateCustomer} body
 */
/**
 * @typedef VerifyIfscCodeParam
 * @property {string} [ifscCode] - A 11-digit alphanumeric code that uniquely
 *   identifies a bank branch.
 */
/**
 * @typedef VerifyOtpAndAddBeneficiaryForBankParam
 * @property {PaymentApplicationModel.AddBeneficiaryViaOtpVerification} body
 */
/**
 * @typedef VerifyOtpAndAddBeneficiaryForWalletParam
 * @property {PaymentApplicationModel.WalletOtp} body
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
    body: PaymentApplicationModel.AddBeneficiaryDetails;
};
type AddRefundBankAccountUsingOTPParam = {
    body: PaymentApplicationModel.AddBeneficiaryDetailsOTP;
};
type AttachCardToCustomerParam = {
    body: PaymentApplicationModel.AttachCard;
};
type CancelPaymentLinkParam = {
    body: PaymentApplicationModel.CancelOrResendPaymentLink;
};
type CardDetailsParam = {
    /**
     * - Card first 6 digit IIN(prefix) number.
     */
    cardInfo: string;
    /**
     * - This is a string value describing the
     * aggregator name.
     */
    aggregator?: string;
};
type CheckAndUpdatePaymentStatusParam = {
    body: PaymentApplicationModel.PaymentStatusUpdate;
};
type CheckAndUpdatePaymentStatusPaymentLinkParam = {
    body: PaymentApplicationModel.PaymentStatusUpdate;
};
type CheckCreditParam = {
    /**
     * - Aggregator name.
     */
    aggregator?: string;
};
type CreateOrderHandlerPaymentLinkParam = {
    body: PaymentApplicationModel.CreateOrderUser;
};
type CreatePaymentLinkParam = {
    body: PaymentApplicationModel.CreatePaymentLink;
};
type CreatePaymentOrderParam = {
    body: PaymentApplicationModel.PaymentOrder;
};
type CustomerCreditSummaryParam = {
    /**
     * - Aggregator name.
     */
    aggregator?: string;
};
type CustomerOnboardParam = {
    body: PaymentApplicationModel.CustomerOnboarding;
};
type DeleteUserCardParam = {
    body: PaymentApplicationModel.DeleteCard;
};
type DelinkWalletParam = {
    body: PaymentApplicationModel.WalletDelinkRequestSchema;
};
type EnableOrDisableRefundTransferModeParam = {
    body: PaymentApplicationModel.UpdateRefundTransferMode;
};
type GetActiveCardAggregatorParam = {
    /**
     * - Select `true` to remove temporary cache files
     * on payment gateway and replace with the latest one.
     */
    refresh?: boolean;
};
type GetActiveUserCardsParam = {
    /**
     * - Select `true` to clear the cache.
     */
    forceRefresh?: boolean;
};
type GetAggregatorsConfigParam = {
    /**
     * - Basic auth token.
     */
    xApiToken?: string;
    /**
     * - Select `true` to remove temporary cache files
     * on payment gateway and replace with the latest one.
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
    /**
     * - Unique payment link id.
     */
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
     * - Select `true` to remove temporary cache files
     * on payment gateway and replace with the latest one.
     */
    refresh?: boolean;
    /**
     * - Identifier of the order, order_id.
     */
    orderId?: string;
    /**
     * - Card reference id of user's debit or credit card.
     */
    cardReference?: string;
    /**
     * - URLencoded JSON containing details of an
     * anonymous user.
     */
    userDetails?: string;
    /**
     * - Display Split Payment Option or not.
     */
    displaySplit?: boolean;
    /**
     * - Display Advance Payment Options or Normal.
     */
    advancePayment?: boolean;
    /**
     * - Identifier of the shipment, shipment_id.
     */
    shipmentId?: string;
};
type GetPaymentModeRoutesPaymentLinkParam = {
    /**
     * - Payment link id.
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
     * - The PIN Code of the destination address, e.g. 400059.
     */
    pincode: string;
    /**
     * - Option to checkout for self or for others.
     */
    checkoutMode?: string;
    /**
     * - Select `true` to remove temporary cache files
     * on payment gateway and replace with the latest one.
     */
    refresh?: boolean;
    /**
     * - Card reference id of user's debit or credit card.
     */
    cardReference?: string;
    /**
     * - The order type of shipment HomeDelivery - If
     * the customer wants the order home-delivered PickAtStore - If the customer
     * wants the handover of an order at the store itself.
     */
    orderType: string;
    /**
     * - URLencoded JSON containing details of an
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
    body: PaymentApplicationModel.PaymentInitialization;
};
type InitialisePaymentPaymentLinkParam = {
    body: PaymentApplicationModel.PaymentInitialization;
};
type LinkWalletParam = {
    body: PaymentApplicationModel.WalletVerifyRequestSchema;
};
type OutstandingOrderDetailsParam = {
    /**
     * - Merchant user ID as value.
     */
    aggregator?: string;
};
type PaidOrderDetailsParam = {
    /**
     * - Merchant user ID as value.
     */
    aggregator?: string;
};
type PollingPaymentLinkParam = {
    /**
     * - Unique payment link id.
     */
    paymentLinkId?: string;
};
type RedirectToAggregatorParam = {
    /**
     * - Callback URL to get callback from aggregator.
     */
    source?: string;
    /**
     * - Aggregator name.
     */
    aggregator?: string;
};
type RenderHTMLParam = {
    body: PaymentApplicationModel.RenderHTML;
};
type ResendOrCancelPaymentParam = {
    body: PaymentApplicationModel.ResendOrCancelPayment;
};
type ResendPaymentLinkParam = {
    body: PaymentApplicationModel.CancelOrResendPaymentLink;
};
type UpdateDefaultBeneficiaryParam = {
    body: PaymentApplicationModel.SetDefaultBeneficiary;
};
type ValidateVPAParam = {
    body: PaymentApplicationModel.ValidateVPA;
};
type VerifyAndChargePaymentParam = {
    body: PaymentApplicationModel.ChargeCustomer;
};
type VerifyCustomerForPaymentParam = {
    body: PaymentApplicationModel.ValidateCustomer;
};
type VerifyIfscCodeParam = {
    /**
     * - A 11-digit alphanumeric code that uniquely
     * identifies a bank branch.
     */
    ifscCode?: string;
};
type VerifyOtpAndAddBeneficiaryForBankParam = {
    body: PaymentApplicationModel.AddBeneficiaryViaOtpVerification;
};
type VerifyOtpAndAddBeneficiaryForWalletParam = {
    body: PaymentApplicationModel.WalletOtp;
};
type WalletLinkInitiateParam = {
    body: PaymentApplicationModel.WalletLinkRequestSchema;
};
type GetActiveRefundTransferModesParam = any;
type GetEpaylaterBannerDetailsParam = any;
type GetRupifiBannerDetailsParam = any;
import PaymentApplicationModel = require("./PaymentApplicationModel");
