export = PaymentPlatformValidator;
/**
 * @typedef ActivateAndDectivatePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.UpdatePayoutRequest} body
 */
/**
 * @typedef DeletePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 */
/**
 * @typedef DeleteSubscriptionPaymentMethodParam
 * @property {string} uniqueExternalId
 * @property {string} paymentMethodId
 */
/**
 * @typedef GetAllPayoutsParam
 * @property {string} [uniqueExternalId] - Fetch payouts using unique external id
 */
/** @typedef GetSubscriptionConfigParam */
/**
 * @typedef GetSubscriptionPaymentMethodParam
 * @property {string} [uniqueExternalId] - Unique external id
 */
/**
 * @typedef SavePayoutParam
 * @property {PaymentPlatformModel.PayoutRequest} body
 */
/**
 * @typedef SaveSubscriptionSetupIntentParam
 * @property {PaymentPlatformModel.SaveSubscriptionSetupIntentRequest} body
 */
/**
 * @typedef UpdatePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.PayoutRequest} body
 */
/**
 * @typedef VerifyIfscCodeParam
 * @property {string} [ifscCode]
 */
declare class PaymentPlatformValidator {
    /** @returns {ActivateAndDectivatePayoutParam} */
    static activateAndDectivatePayout(): ActivateAndDectivatePayoutParam;
    /** @returns {DeletePayoutParam} */
    static deletePayout(): DeletePayoutParam;
    /** @returns {DeleteSubscriptionPaymentMethodParam} */
    static deleteSubscriptionPaymentMethod(): DeleteSubscriptionPaymentMethodParam;
    /** @returns {GetAllPayoutsParam} */
    static getAllPayouts(): GetAllPayoutsParam;
    /** @returns {GetSubscriptionConfigParam} */
    static getSubscriptionConfig(): any;
    /** @returns {GetSubscriptionPaymentMethodParam} */
    static getSubscriptionPaymentMethod(): GetSubscriptionPaymentMethodParam;
    /** @returns {SavePayoutParam} */
    static savePayout(): SavePayoutParam;
    /** @returns {SaveSubscriptionSetupIntentParam} */
    static saveSubscriptionSetupIntent(): SaveSubscriptionSetupIntentParam;
    /** @returns {UpdatePayoutParam} */
    static updatePayout(): UpdatePayoutParam;
    /** @returns {VerifyIfscCodeParam} */
    static verifyIfscCode(): VerifyIfscCodeParam;
}
declare namespace PaymentPlatformValidator {
    export { ActivateAndDectivatePayoutParam, DeletePayoutParam, DeleteSubscriptionPaymentMethodParam, GetAllPayoutsParam, GetSubscriptionConfigParam, GetSubscriptionPaymentMethodParam, SavePayoutParam, SaveSubscriptionSetupIntentParam, UpdatePayoutParam, VerifyIfscCodeParam };
}
type ActivateAndDectivatePayoutParam = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
    body: PaymentPlatformModel.UpdatePayoutRequest;
};
type DeletePayoutParam = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
};
type DeleteSubscriptionPaymentMethodParam = {
    uniqueExternalId: string;
    paymentMethodId: string;
};
type GetAllPayoutsParam = {
    /**
     * - Fetch payouts using unique external id
     */
    uniqueExternalId?: string;
};
type GetSubscriptionPaymentMethodParam = {
    /**
     * - Unique external id
     */
    uniqueExternalId?: string;
};
type SavePayoutParam = {
    body: PaymentPlatformModel.PayoutRequest;
};
type SaveSubscriptionSetupIntentParam = {
    body: PaymentPlatformModel.SaveSubscriptionSetupIntentRequest;
};
type UpdatePayoutParam = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
    body: PaymentPlatformModel.PayoutRequest;
};
type VerifyIfscCodeParam = {
    ifscCode?: string;
};
type GetSubscriptionConfigParam = any;
import PaymentPlatformModel = require("sdk/output/javascript/code/sdk/platform/Payment/PaymentPlatformModel");
