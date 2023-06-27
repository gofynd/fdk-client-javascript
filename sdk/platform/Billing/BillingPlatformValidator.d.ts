export = BillingPlatformValidator;
/**
 * @typedef activateSubscriptionPlan
 * @property {BillingPlatformModel.SubscriptionActivateReq} body
 */
/**
 * @typedef cancelSubscriptionCharge
 * @property {string} extensionId - Extension _id
 * @property {string} subscriptionId - Subscription charge _id
 */
/**
 * @typedef cancelSubscriptionPlan
 * @property {BillingPlatformModel.CancelSubscriptionReq} body
 */
/**
 * @typedef checkCouponValidity
 * @property {string} plan - ID of the plan.
 * @property {string} couponCode - Coupon code.
 */
/**
 * @typedef createOneTimeCharge
 * @property {string} extensionId - Extension _id
 * @property {BillingPlatformModel.CreateOneTimeCharge} body
 */
/**
 * @typedef createSubscriptionCharge
 * @property {string} extensionId - Extension _id
 * @property {BillingPlatformModel.CreateSubscriptionCharge} body
 */
/**
 * @typedef getChargeDetails
 * @property {string} extensionId - Extension _id
 * @property {string} chargeId - Standalone charge _id
 */
/** @typedef getCustomerDetail */
/** @typedef getFeatureLimitConfig */
/**
 * @typedef getInvoiceById
 * @property {string} invoiceId - Invoice id
 */
/** @typedef getInvoices */
/** @typedef getSubscription */
/**
 * @typedef getSubscriptionCharge
 * @property {string} extensionId - Extension _id
 * @property {string} subscriptionId - Subscription charge _id
 */
/**
 * @typedef upsertCustomerDetail
 * @property {BillingPlatformModel.SubscriptionCustomerCreate} body
 */
declare class BillingPlatformValidator {
}
declare namespace BillingPlatformValidator {
    export { activateSubscriptionPlan, cancelSubscriptionCharge, cancelSubscriptionPlan, checkCouponValidity, createOneTimeCharge, createSubscriptionCharge, getChargeDetails, getCustomerDetail, getFeatureLimitConfig, getInvoiceById, getInvoices, getSubscription, getSubscriptionCharge, upsertCustomerDetail };
}
/** @returns {activateSubscriptionPlan} */
declare function activateSubscriptionPlan(): activateSubscriptionPlan;
type activateSubscriptionPlan = {
    body: BillingPlatformModel.SubscriptionActivateReq;
};
/** @returns {cancelSubscriptionCharge} */
declare function cancelSubscriptionCharge(): cancelSubscriptionCharge;
type cancelSubscriptionCharge = {
    /**
     * - Extension _id
     */
    extensionId: string;
    /**
     * - Subscription charge _id
     */
    subscriptionId: string;
};
/** @returns {cancelSubscriptionPlan} */
declare function cancelSubscriptionPlan(): cancelSubscriptionPlan;
type cancelSubscriptionPlan = {
    body: BillingPlatformModel.CancelSubscriptionReq;
};
/** @returns {checkCouponValidity} */
declare function checkCouponValidity(): checkCouponValidity;
type checkCouponValidity = {
    /**
     * - ID of the plan.
     */
    plan: string;
    /**
     * - Coupon code.
     */
    couponCode: string;
};
/** @returns {createOneTimeCharge} */
declare function createOneTimeCharge(): createOneTimeCharge;
type createOneTimeCharge = {
    /**
     * - Extension _id
     */
    extensionId: string;
    body: BillingPlatformModel.CreateOneTimeCharge;
};
/** @returns {createSubscriptionCharge} */
declare function createSubscriptionCharge(): createSubscriptionCharge;
type createSubscriptionCharge = {
    /**
     * - Extension _id
     */
    extensionId: string;
    body: BillingPlatformModel.CreateSubscriptionCharge;
};
/** @returns {getChargeDetails} */
declare function getChargeDetails(): getChargeDetails;
type getChargeDetails = {
    /**
     * - Extension _id
     */
    extensionId: string;
    /**
     * - Standalone charge _id
     */
    chargeId: string;
};
/** @returns {getCustomerDetail} */
declare function getCustomerDetail(): any;
type getCustomerDetail = any;
/** @returns {getFeatureLimitConfig} */
declare function getFeatureLimitConfig(): any;
type getFeatureLimitConfig = any;
/** @returns {getInvoiceById} */
declare function getInvoiceById(): getInvoiceById;
type getInvoiceById = {
    /**
     * - Invoice id
     */
    invoiceId: string;
};
/** @returns {getInvoices} */
declare function getInvoices(): any;
type getInvoices = any;
/** @returns {getSubscription} */
declare function getSubscription(): any;
type getSubscription = any;
/** @returns {getSubscriptionCharge} */
declare function getSubscriptionCharge(): getSubscriptionCharge;
type getSubscriptionCharge = {
    /**
     * - Extension _id
     */
    extensionId: string;
    /**
     * - Subscription charge _id
     */
    subscriptionId: string;
};
/** @returns {upsertCustomerDetail} */
declare function upsertCustomerDetail(): upsertCustomerDetail;
type upsertCustomerDetail = {
    body: BillingPlatformModel.SubscriptionCustomerCreate;
};
import BillingPlatformModel = require("./BillingPlatformModel");
