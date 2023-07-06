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
    /** @returns {activateAndDectivatePayout} */
    static activateAndDectivatePayout(): activateAndDectivatePayout;
    /** @returns {deletePayout} */
    static deletePayout(): deletePayout;
    /** @returns {deleteSubscriptionPaymentMethod} */
    static deleteSubscriptionPaymentMethod(): deleteSubscriptionPaymentMethod;
    /** @returns {getAllPayouts} */
    static getAllPayouts(): getAllPayouts;
    /** @returns {getSubscriptionConfig} */
    static getSubscriptionConfig(): getSubscriptionConfig;
    /** @returns {getSubscriptionPaymentMethod} */
    static getSubscriptionPaymentMethod(): getSubscriptionPaymentMethod;
    /** @returns {savePayout} */
    static savePayout(): savePayout;
    /** @returns {saveSubscriptionSetupIntent} */
    static saveSubscriptionSetupIntent(): saveSubscriptionSetupIntent;
    /** @returns {updatePayout} */
    static updatePayout(): updatePayout;
    /** @returns {verifyIfscCode} */
    static verifyIfscCode(): verifyIfscCode;
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
type GetSubscriptionConfigParam = any;
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
import PaymentPlatformModel = require("./PaymentPlatformModel");
