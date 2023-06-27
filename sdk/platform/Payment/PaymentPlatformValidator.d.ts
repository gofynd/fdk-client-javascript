export = PaymentPlatformValidator;
/**
 * @typedef activateAndDectivatePayout
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.UpdatePayoutRequest} body
 */
/**
 * @typedef deletePayout
 * @property {string} uniqueTransferNo - Unique transfer id
 */
/**
 * @typedef deleteSubscriptionPaymentMethod
 * @property {string} uniqueExternalId
 * @property {string} paymentMethodId
 */
/**
 * @typedef getAllPayouts
 * @property {string} [uniqueExternalId] - Fetch payouts using unique external id
 */
/** @typedef getSubscriptionConfig */
/**
 * @typedef getSubscriptionPaymentMethod
 * @property {string} [uniqueExternalId] - Unique external id
 */
/**
 * @typedef savePayout
 * @property {PaymentPlatformModel.PayoutRequest} body
 */
/**
 * @typedef saveSubscriptionSetupIntent
 * @property {PaymentPlatformModel.SaveSubscriptionSetupIntentRequest} body
 */
/**
 * @typedef updatePayout
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.PayoutRequest} body
 */
/**
 * @typedef verifyIfscCode
 * @property {string} [ifscCode]
 */
declare class PaymentPlatformValidator {
}
declare namespace PaymentPlatformValidator {
    export { activateAndDectivatePayout, deletePayout, deleteSubscriptionPaymentMethod, getAllPayouts, getSubscriptionConfig, getSubscriptionPaymentMethod, savePayout, saveSubscriptionSetupIntent, updatePayout, verifyIfscCode };
}
/** @returns {activateAndDectivatePayout} */
declare function activateAndDectivatePayout(): activateAndDectivatePayout;
type activateAndDectivatePayout = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
    body: PaymentPlatformModel.UpdatePayoutRequest;
};
/** @returns {deletePayout} */
declare function deletePayout(): deletePayout;
type deletePayout = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
};
/** @returns {deleteSubscriptionPaymentMethod} */
declare function deleteSubscriptionPaymentMethod(): deleteSubscriptionPaymentMethod;
type deleteSubscriptionPaymentMethod = {
    uniqueExternalId: string;
    paymentMethodId: string;
};
/** @returns {getAllPayouts} */
declare function getAllPayouts(): getAllPayouts;
type getAllPayouts = {
    /**
     * - Fetch payouts using unique external id
     */
    uniqueExternalId?: string;
};
/** @returns {getSubscriptionConfig} */
declare function getSubscriptionConfig(): any;
type getSubscriptionConfig = any;
/** @returns {getSubscriptionPaymentMethod} */
declare function getSubscriptionPaymentMethod(): getSubscriptionPaymentMethod;
type getSubscriptionPaymentMethod = {
    /**
     * - Unique external id
     */
    uniqueExternalId?: string;
};
/** @returns {savePayout} */
declare function savePayout(): savePayout;
type savePayout = {
    body: PaymentPlatformModel.PayoutRequest;
};
/** @returns {saveSubscriptionSetupIntent} */
declare function saveSubscriptionSetupIntent(): saveSubscriptionSetupIntent;
type saveSubscriptionSetupIntent = {
    body: PaymentPlatformModel.SaveSubscriptionSetupIntentRequest;
};
/** @returns {updatePayout} */
declare function updatePayout(): updatePayout;
type updatePayout = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
    body: PaymentPlatformModel.PayoutRequest;
};
/** @returns {verifyIfscCode} */
declare function verifyIfscCode(): verifyIfscCode;
type verifyIfscCode = {
    ifscCode?: string;
};
import PaymentPlatformModel = require("./PaymentPlatformModel");
