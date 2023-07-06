export = BillingPlatformValidator;
/**
 * @typedef ActivateSubscriptionPlanParam
 * @property {BillingPlatformModel.SubscriptionActivateReq} body
 */
/**
 * @typedef CancelSubscriptionChargeParam
 * @property {string} extensionId - Extension _id
 * @property {string} subscriptionId - Subscription charge _id
 */
/**
 * @typedef CancelSubscriptionPlanParam
 * @property {BillingPlatformModel.CancelSubscriptionReq} body
 */
/**
 * @typedef CheckCouponValidityParam
 * @property {string} plan - ID of the plan.
 * @property {string} couponCode - Coupon code.
 */
/**
 * @typedef CreateOneTimeChargeParam
 * @property {string} extensionId - Extension _id
 * @property {BillingPlatformModel.CreateOneTimeCharge} body
 */
/**
 * @typedef CreateSubscriptionChargeParam
 * @property {string} extensionId - Extension _id
 * @property {BillingPlatformModel.CreateSubscriptionCharge} body
 */
/**
 * @typedef GetChargeDetailsParam
 * @property {string} extensionId - Extension _id
 * @property {string} chargeId - Standalone charge _id
 */
/** @typedef GetCustomerDetailParam */
/** @typedef GetFeatureLimitConfigParam */
/**
 * @typedef GetInvoiceByIdParam
 * @property {string} invoiceId - Invoice id
 */
/** @typedef GetInvoicesParam */
/** @typedef GetSubscriptionParam */
/**
 * @typedef GetSubscriptionChargeParam
 * @property {string} extensionId - Extension _id
 * @property {string} subscriptionId - Subscription charge _id
 */
/**
 * @typedef UpsertCustomerDetailParam
 * @property {BillingPlatformModel.SubscriptionCustomerCreate} body
 */
declare class BillingPlatformValidator {
    /** @returns {activateSubscriptionPlan} */
    static activateSubscriptionPlan(): activateSubscriptionPlan;
    /** @returns {cancelSubscriptionCharge} */
    static cancelSubscriptionCharge(): cancelSubscriptionCharge;
    /** @returns {cancelSubscriptionPlan} */
    static cancelSubscriptionPlan(): cancelSubscriptionPlan;
    /** @returns {checkCouponValidity} */
    static checkCouponValidity(): checkCouponValidity;
    /** @returns {createOneTimeCharge} */
    static createOneTimeCharge(): createOneTimeCharge;
    /** @returns {createSubscriptionCharge} */
    static createSubscriptionCharge(): createSubscriptionCharge;
    /** @returns {getChargeDetails} */
    static getChargeDetails(): getChargeDetails;
    /** @returns {getCustomerDetail} */
    static getCustomerDetail(): getCustomerDetail;
    /** @returns {getFeatureLimitConfig} */
    static getFeatureLimitConfig(): getFeatureLimitConfig;
    /** @returns {getInvoiceById} */
    static getInvoiceById(): getInvoiceById;
    /** @returns {getInvoices} */
    static getInvoices(): getInvoices;
    /** @returns {getSubscription} */
    static getSubscription(): getSubscription;
    /** @returns {getSubscriptionCharge} */
    static getSubscriptionCharge(): getSubscriptionCharge;
    /** @returns {upsertCustomerDetail} */
    static upsertCustomerDetail(): upsertCustomerDetail;
}
declare namespace BillingPlatformValidator {
    export { ActivateSubscriptionPlanParam, CancelSubscriptionChargeParam, CancelSubscriptionPlanParam, CheckCouponValidityParam, CreateOneTimeChargeParam, CreateSubscriptionChargeParam, GetChargeDetailsParam, GetCustomerDetailParam, GetFeatureLimitConfigParam, GetInvoiceByIdParam, GetInvoicesParam, GetSubscriptionParam, GetSubscriptionChargeParam, UpsertCustomerDetailParam };
}
type ActivateSubscriptionPlanParam = {
    body: BillingPlatformModel.SubscriptionActivateReq;
};
type CancelSubscriptionChargeParam = {
    /**
     * - Extension _id
     */
    extensionId: string;
    /**
     * - Subscription charge _id
     */
    subscriptionId: string;
};
type CancelSubscriptionPlanParam = {
    body: BillingPlatformModel.CancelSubscriptionReq;
};
type CheckCouponValidityParam = {
    /**
     * - ID of the plan.
     */
    plan: string;
    /**
     * - Coupon code.
     */
    couponCode: string;
};
type CreateOneTimeChargeParam = {
    /**
     * - Extension _id
     */
    extensionId: string;
    body: BillingPlatformModel.CreateOneTimeCharge;
};
type CreateSubscriptionChargeParam = {
    /**
     * - Extension _id
     */
    extensionId: string;
    body: BillingPlatformModel.CreateSubscriptionCharge;
};
type GetChargeDetailsParam = {
    /**
     * - Extension _id
     */
    extensionId: string;
    /**
     * - Standalone charge _id
     */
    chargeId: string;
};
type GetCustomerDetailParam = any;
type GetFeatureLimitConfigParam = any;
type GetInvoiceByIdParam = {
    /**
     * - Invoice id
     */
    invoiceId: string;
};
type GetInvoicesParam = any;
type GetSubscriptionParam = any;
type GetSubscriptionChargeParam = {
    /**
     * - Extension _id
     */
    extensionId: string;
    /**
     * - Subscription charge _id
     */
    subscriptionId: string;
};
type UpsertCustomerDetailParam = {
    body: BillingPlatformModel.SubscriptionCustomerCreate;
};
import BillingPlatformModel = require("./BillingPlatformModel");
