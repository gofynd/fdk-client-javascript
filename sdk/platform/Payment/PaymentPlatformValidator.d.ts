export = PaymentPlatformValidator;
/**
 * @typedef ActivateAndDectivatePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.UpdatePayoutCreation} body
 */
/**
 * @typedef ActivateAndDectivatePayoutsParam
 * @property {PaymentPlatformModel.UpdatePayoutCreation} body
 */
/**
 * @typedef DeletePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 */
/**
 * @typedef DeletePayoutsParam
 * @property {string} uniqueTransferNo - Unique transfer id
 */
/**
 * @typedef GetAllPayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {string} [uniqueExternalId] - Fetch payouts using unique external id
 */
/**
 * @typedef GetAllPayoutsParam
 * @property {string} [uniqueExternalId] - Fetch payouts using unique external id
 */
/** @typedef GetPaymentMethodConfigParam */
/**
 * @typedef SavePayoutParam
 * @property {PaymentPlatformModel.PayoutCreation} body
 */
/**
 * @typedef SavePayoutsParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.PayoutCreation} body
 */
/**
 * @typedef UpdatePayoutParam
 * @property {string} uniqueTransferNo - Unique transfer id
 * @property {PaymentPlatformModel.PayoutCreation} body
 */
/**
 * @typedef UpdatePayoutsParam
 * @property {PaymentPlatformModel.PayoutCreation} body
 */
/**
 * @typedef VerifyIfscCodeParam
 * @property {string} ifscCode
 */
declare class PaymentPlatformValidator {
    /** @returns {ActivateAndDectivatePayoutParam} */
    static activateAndDectivatePayout(): ActivateAndDectivatePayoutParam;
    /** @returns {ActivateAndDectivatePayoutsParam} */
    static activateAndDectivatePayouts(): ActivateAndDectivatePayoutsParam;
    /** @returns {DeletePayoutParam} */
    static deletePayout(): DeletePayoutParam;
    /** @returns {DeletePayoutsParam} */
    static deletePayouts(): DeletePayoutsParam;
    /** @returns {GetAllPayoutParam} */
    static getAllPayout(): GetAllPayoutParam;
    /** @returns {GetAllPayoutsParam} */
    static getAllPayouts(): GetAllPayoutsParam;
    /** @returns {GetPaymentMethodConfigParam} */
    static getPaymentMethodConfig(): any;
    /** @returns {SavePayoutParam} */
    static savePayout(): SavePayoutParam;
    /** @returns {SavePayoutsParam} */
    static savePayouts(): SavePayoutsParam;
    /** @returns {UpdatePayoutParam} */
    static updatePayout(): UpdatePayoutParam;
    /** @returns {UpdatePayoutsParam} */
    static updatePayouts(): UpdatePayoutsParam;
    /** @returns {VerifyIfscCodeParam} */
    static verifyIfscCode(): VerifyIfscCodeParam;
}
declare namespace PaymentPlatformValidator {
    export { ActivateAndDectivatePayoutParam, ActivateAndDectivatePayoutsParam, DeletePayoutParam, DeletePayoutsParam, GetAllPayoutParam, GetAllPayoutsParam, GetPaymentMethodConfigParam, SavePayoutParam, SavePayoutsParam, UpdatePayoutParam, UpdatePayoutsParam, VerifyIfscCodeParam };
}
type ActivateAndDectivatePayoutParam = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
    body: PaymentPlatformModel.UpdatePayoutCreation;
};
type ActivateAndDectivatePayoutsParam = {
    body: PaymentPlatformModel.UpdatePayoutCreation;
};
type DeletePayoutParam = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
};
type DeletePayoutsParam = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
};
type GetAllPayoutParam = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
    /**
     * - Fetch payouts using unique external id
     */
    uniqueExternalId?: string;
};
type GetAllPayoutsParam = {
    /**
     * - Fetch payouts using unique external id
     */
    uniqueExternalId?: string;
};
type SavePayoutParam = {
    body: PaymentPlatformModel.PayoutCreation;
};
type SavePayoutsParam = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
    body: PaymentPlatformModel.PayoutCreation;
};
type UpdatePayoutParam = {
    /**
     * - Unique transfer id
     */
    uniqueTransferNo: string;
    body: PaymentPlatformModel.PayoutCreation;
};
type UpdatePayoutsParam = {
    body: PaymentPlatformModel.PayoutCreation;
};
type VerifyIfscCodeParam = {
    ifscCode: string;
};
type GetPaymentMethodConfigParam = any;
import PaymentPlatformModel = require("./PaymentPlatformModel");
