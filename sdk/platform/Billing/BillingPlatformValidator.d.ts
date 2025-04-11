export = BillingPlatformValidator;
/**
 * @typedef CancelSubscriptionChargeParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {string} subscriptionId - The unique identifier of the subscription
 */
/**
 * @typedef CreateOneTimeChargeParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {BillingPlatformModel.CreateOneTimeCharge} body
 */
/**
 * @typedef CreateSubscriptionChargeParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {BillingPlatformModel.CreateSubscriptionCharge} body
 */
/**
 * @typedef GetChargeDetailsParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {string} chargeId - The unique identifier of the entity charge in the system.
 */
/**
 * @typedef GetSubscriptionChargeParam
 * @property {string} extensionId - The unique identifier of the extension
 * @property {string} subscriptionId - The unique identifier of the subscription
 */
declare class BillingPlatformValidator {
    /** @returns {CancelSubscriptionChargeParam} */
    static cancelSubscriptionCharge(): CancelSubscriptionChargeParam;
    /** @returns {CreateOneTimeChargeParam} */
    static createOneTimeCharge(): CreateOneTimeChargeParam;
    /** @returns {CreateSubscriptionChargeParam} */
    static createSubscriptionCharge(): CreateSubscriptionChargeParam;
    /** @returns {GetChargeDetailsParam} */
    static getChargeDetails(): GetChargeDetailsParam;
    /** @returns {GetSubscriptionChargeParam} */
    static getSubscriptionCharge(): GetSubscriptionChargeParam;
}
declare namespace BillingPlatformValidator {
    export { CancelSubscriptionChargeParam, CreateOneTimeChargeParam, CreateSubscriptionChargeParam, GetChargeDetailsParam, GetSubscriptionChargeParam };
}
type CancelSubscriptionChargeParam = {
    /**
     * - The unique identifier of the extension
     */
    extensionId: string;
    /**
     * - The unique identifier of the subscription
     */
    subscriptionId: string;
};
type CreateOneTimeChargeParam = {
    /**
     * - The unique identifier of the extension
     */
    extensionId: string;
    body: BillingPlatformModel.CreateOneTimeCharge;
};
type CreateSubscriptionChargeParam = {
    /**
     * - The unique identifier of the extension
     */
    extensionId: string;
    body: BillingPlatformModel.CreateSubscriptionCharge;
};
type GetChargeDetailsParam = {
    /**
     * - The unique identifier of the extension
     */
    extensionId: string;
    /**
     * - The unique identifier of the entity charge in the system.
     */
    chargeId: string;
};
type GetSubscriptionChargeParam = {
    /**
     * - The unique identifier of the extension
     */
    extensionId: string;
    /**
     * - The unique identifier of the subscription
     */
    subscriptionId: string;
};
import BillingPlatformModel = require("./BillingPlatformModel");
