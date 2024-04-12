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
/** @typedef GetEnterprisePlansParam */
/**
 * @typedef GetFeatureLimitConfigParam
 * @property {string} [productSuite]
 * @property {string} [type]
 */
/**
 * @typedef GetInvoiceByIdParam
 * @property {string} invoiceId - Invoice id
 */
/** @typedef GetInvoicesParam */
/**
 * @typedef GetPaymentOptionsParam
 * @property {string} transactionId - ID of the payment transaction.
 */
/**
 * @typedef GetPaymentTransactionParam
 * @property {string} transactionId - Payment Transaction unique id.
 */
/** @typedef GetSubscriptionParam */
/**
 * @typedef GetSubscriptionChargeParam
 * @property {string} extensionId - Extension _id
 * @property {string} subscriptionId - Subscription charge _id
 */
/**
 * @typedef GetentityDetailParam
 * @property {string} entityName - Entity name.
 * @property {string} [entityId] - Entity unique id.
 * @property {string} channel - Ordering channel.
 * @property {string} [component] - The coponents the user would like to know.
 * @property {string} [componentName] - The name of component the preferred to be fetched.
 */
/**
 * @typedef GlobalSettingsParam
 * @property {number} pageNo - Number of pages needed
 * @property {number} pageSize - Number of items to be there in page
 * @property {Object} query - Field which will be used in db query
 */
/**
 * @typedef PaymentOptionsParam
 * @property {string} code - Payment options unique code.
 */
/**
 * @typedef PlanStatusUpdateParam
 * @property {BillingPlatformModel.PlanStatusUpdateReq} body
 */
/**
 * @typedef SubscripePlanParam
 * @property {BillingPlatformModel.SunscribePlan} body
 */
/** @typedef SubscriptionConfigsParam */
/**
 * @typedef SubscriptionMethodsParam
 * @property {Object} uniqueExternalId - Unique id for external company
 */
/**
 * @typedef SubscriptionPlanChangeParam
 * @property {string} [productSuite]
 * @property {number} [uniqueId]
 * @property {string} [platform]
 */
/**
 * @typedef UpsertCustomerDetailParam
 * @property {BillingPlatformModel.SubscriptionCustomerCreate} body
 */
/**
 * @typedef VerifyPaymentParam
 * @property {BillingPlatformModel.VerifyPaymentReq} body
 */
declare class BillingPlatformValidator {
    /** @returns {ActivateSubscriptionPlanParam} */
    static activateSubscriptionPlan(): ActivateSubscriptionPlanParam;
    /** @returns {CancelSubscriptionChargeParam} */
    static cancelSubscriptionCharge(): CancelSubscriptionChargeParam;
    /** @returns {CancelSubscriptionPlanParam} */
    static cancelSubscriptionPlan(): CancelSubscriptionPlanParam;
    /** @returns {CheckCouponValidityParam} */
    static checkCouponValidity(): CheckCouponValidityParam;
    /** @returns {CreateOneTimeChargeParam} */
    static createOneTimeCharge(): CreateOneTimeChargeParam;
    /** @returns {CreateSubscriptionChargeParam} */
    static createSubscriptionCharge(): CreateSubscriptionChargeParam;
    /** @returns {GetChargeDetailsParam} */
    static getChargeDetails(): GetChargeDetailsParam;
    /** @returns {GetCustomerDetailParam} */
    static getCustomerDetail(): any;
    /** @returns {GetEnterprisePlansParam} */
    static getEnterprisePlans(): any;
    /** @returns {GetFeatureLimitConfigParam} */
    static getFeatureLimitConfig(): GetFeatureLimitConfigParam;
    /** @returns {GetInvoiceByIdParam} */
    static getInvoiceById(): GetInvoiceByIdParam;
    /** @returns {GetInvoicesParam} */
    static getInvoices(): any;
    /** @returns {GetPaymentOptionsParam} */
    static getPaymentOptions(): GetPaymentOptionsParam;
    /** @returns {GetPaymentTransactionParam} */
    static getPaymentTransaction(): GetPaymentTransactionParam;
    /** @returns {GetSubscriptionParam} */
    static getSubscription(): any;
    /** @returns {GetSubscriptionChargeParam} */
    static getSubscriptionCharge(): GetSubscriptionChargeParam;
    /** @returns {GetentityDetailParam} */
    static getentityDetail(): GetentityDetailParam;
    /** @returns {GlobalSettingsParam} */
    static globalSettings(): GlobalSettingsParam;
    /** @returns {PaymentOptionsParam} */
    static paymentOptions(): PaymentOptionsParam;
    /** @returns {PlanStatusUpdateParam} */
    static planStatusUpdate(): PlanStatusUpdateParam;
    /** @returns {SubscripePlanParam} */
    static subscripePlan(): SubscripePlanParam;
    /** @returns {SubscriptionConfigsParam} */
    static subscriptionConfigs(): any;
    /** @returns {SubscriptionMethodsParam} */
    static subscriptionMethods(): SubscriptionMethodsParam;
    /** @returns {SubscriptionPlanChangeParam} */
    static subscriptionPlanChange(): SubscriptionPlanChangeParam;
    /** @returns {UpsertCustomerDetailParam} */
    static upsertCustomerDetail(): UpsertCustomerDetailParam;
    /** @returns {VerifyPaymentParam} */
    static verifyPayment(): VerifyPaymentParam;
}
declare namespace BillingPlatformValidator {
    export { ActivateSubscriptionPlanParam, CancelSubscriptionChargeParam, CancelSubscriptionPlanParam, CheckCouponValidityParam, CreateOneTimeChargeParam, CreateSubscriptionChargeParam, GetChargeDetailsParam, GetCustomerDetailParam, GetEnterprisePlansParam, GetFeatureLimitConfigParam, GetInvoiceByIdParam, GetInvoicesParam, GetPaymentOptionsParam, GetPaymentTransactionParam, GetSubscriptionParam, GetSubscriptionChargeParam, GetentityDetailParam, GlobalSettingsParam, PaymentOptionsParam, PlanStatusUpdateParam, SubscripePlanParam, SubscriptionConfigsParam, SubscriptionMethodsParam, SubscriptionPlanChangeParam, UpsertCustomerDetailParam, VerifyPaymentParam };
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
type GetFeatureLimitConfigParam = {
    productSuite?: string;
    type?: string;
};
type GetInvoiceByIdParam = {
    /**
     * - Invoice id
     */
    invoiceId: string;
};
type GetPaymentOptionsParam = {
    /**
     * - ID of the payment transaction.
     */
    transactionId: string;
};
type GetPaymentTransactionParam = {
    /**
     * - Payment Transaction unique id.
     */
    transactionId: string;
};
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
type GetentityDetailParam = {
    /**
     * - Entity name.
     */
    entityName: string;
    /**
     * - Entity unique id.
     */
    entityId?: string;
    /**
     * - Ordering channel.
     */
    channel: string;
    /**
     * - The coponents the user would like to know.
     */
    component?: string;
    /**
     * - The name of component the preferred to be fetched.
     */
    componentName?: string;
};
type GlobalSettingsParam = {
    /**
     * - Number of pages needed
     */
    pageNo: number;
    /**
     * - Number of items to be there in page
     */
    pageSize: number;
    /**
     * - Field which will be used in db query
     */
    query: any;
};
type PaymentOptionsParam = {
    /**
     * - Payment options unique code.
     */
    code: string;
};
type PlanStatusUpdateParam = {
    body: BillingPlatformModel.PlanStatusUpdateReq;
};
type SubscripePlanParam = {
    body: BillingPlatformModel.SunscribePlan;
};
type SubscriptionMethodsParam = {
    /**
     * - Unique id for external company
     */
    uniqueExternalId: any;
};
type SubscriptionPlanChangeParam = {
    productSuite?: string;
    uniqueId?: number;
    platform?: string;
};
type UpsertCustomerDetailParam = {
    body: BillingPlatformModel.SubscriptionCustomerCreate;
};
type VerifyPaymentParam = {
    body: BillingPlatformModel.VerifyPaymentReq;
};
type GetCustomerDetailParam = any;
type GetEnterprisePlansParam = any;
type GetInvoicesParam = any;
type GetSubscriptionParam = any;
type SubscriptionConfigsParam = any;
import BillingPlatformModel = require("sdk/output/javascript/code/sdk/platform/Billing/BillingPlatformModel");
