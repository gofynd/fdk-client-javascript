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
 * @typedef ChangePlanParam
 * @property {BillingPlatformModel.SubscriptionActivateReq} body
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
 * @typedef CreditTransactionParam
 * @property {number} uniqueId - Unique ID of the company
 * @property {string} productSuite - Product suite
 * @property {string} type - Type of the company
 * @property {number} [pageSize] - Number of items per page
 * @property {number} [pageNo] - Page number
 * @property {string} [startDate] - Start date
 * @property {string} [endDate] - End date
 * @property {string} [searchType] - Search Type
 * @property {string} [searchValue] - Search Value
 */
/**
 * @typedef CurrentAppLimitParam
 * @property {string} [productSuite]
 * @property {string} [type]
 */
/** @typedef GetBankListParam */
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
 * @typedef MethodDefaultParam
 * @property {BillingPlatformModel.DefaultReq} body
 */
/**
 * @typedef PaymentCollectParam
 * @property {BillingPlatformModel.PaymentCollectReq} body
 */
/**
 * @typedef PaymentInitiateParam
 * @property {BillingPlatformModel.SunscribePlan} body
 */
/**
 * @typedef PaymentOptionsParam
 * @property {string} code - Payment options unique code.
 */
/**
 * @typedef PaymentStatusParam
 * @property {string} orderId - Unique ID of the company
 */
/**
 * @typedef PlanDowngradeParam
 * @property {BillingPlatformModel.DowngradePlanReq} body
 */
/** @typedef PlanDowngradeGetParam */
/**
 * @typedef PlanStatusUpdateParam
 * @property {BillingPlatformModel.PlanStatusUpdateReq} body
 */
/**
 * @typedef SetupIntentParam
 * @property {BillingPlatformModel.IntentReq} body
 */
/**
 * @typedef SetupMandateParam
 * @property {BillingPlatformModel.SetupMandateReq} body
 */
/**
 * @typedef SetupPaymentParam
 * @property {BillingPlatformModel.SetupPaymentReq} body
 */
/** @typedef SubscriptionConfigsParam */
/**
 * @typedef SubscriptionMethodsParam
 * @property {string} uniqueExternalId - Unique id for external company
 */
/**
 * @typedef SubscriptionMethodsDeleteParam
 * @property {string} uniqueExternalId - Unique id for external company
 * @property {string} paymentMethodId - Payment method id
 */
/**
 * @typedef SubscriptionPlanChangeParam
 * @property {string} [productSuite]
 * @property {string} [coupon]
 * @property {number} [uniqueId]
 * @property {string} [platform]
 * @property {string} [planId]
 */
/**
 * @typedef SubscriptionRenewParam
 * @property {BillingPlatformModel.SubscriptionRenewReq} body
 */
/**
 * @typedef TopupCancelCreditParam
 * @property {BillingPlatformModel.CancelTopupReq} body
 */
/**
 * @typedef TopupCreditParam
 * @property {BillingPlatformModel.TopupReq} body
 */
/**
 * @typedef UpdateConsentParam
 * @property {string} subscriberId - Customer unique id. In case of company it
 *   will be company id.
 */
/**
 * @typedef UpdateSetupIntentParam
 * @property {BillingPlatformModel.PutIntentReq} body
 */
/**
 * @typedef UpgradePlanParam
 * @property {BillingPlatformModel.SubscriptionMethodsReq} body
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
    /** @returns {ChangePlanParam} */
    static changePlan(): ChangePlanParam;
    /** @returns {CheckCouponValidityParam} */
    static checkCouponValidity(): CheckCouponValidityParam;
    /** @returns {CreateOneTimeChargeParam} */
    static createOneTimeCharge(): CreateOneTimeChargeParam;
    /** @returns {CreditTransactionParam} */
    static creditTransaction(): CreditTransactionParam;
    /** @returns {CurrentAppLimitParam} */
    static currentAppLimit(): CurrentAppLimitParam;
    /** @returns {GetBankListParam} */
    static getBankList(): any;
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
    /** @returns {MethodDefaultParam} */
    static methodDefault(): MethodDefaultParam;
    /** @returns {PaymentCollectParam} */
    static paymentCollect(): PaymentCollectParam;
    /** @returns {PaymentInitiateParam} */
    static paymentInitiate(): PaymentInitiateParam;
    /** @returns {PaymentOptionsParam} */
    static paymentOptions(): PaymentOptionsParam;
    /** @returns {PaymentStatusParam} */
    static paymentStatus(): PaymentStatusParam;
    /** @returns {PlanDowngradeParam} */
    static planDowngrade(): PlanDowngradeParam;
    /** @returns {PlanDowngradeGetParam} */
    static planDowngradeGet(): any;
    /** @returns {PlanStatusUpdateParam} */
    static planStatusUpdate(): PlanStatusUpdateParam;
    /** @returns {SetupIntentParam} */
    static setupIntent(): SetupIntentParam;
    /** @returns {SetupMandateParam} */
    static setupMandate(): SetupMandateParam;
    /** @returns {SetupPaymentParam} */
    static setupPayment(): SetupPaymentParam;
    /** @returns {SubscriptionConfigsParam} */
    static subscriptionConfigs(): any;
    /** @returns {SubscriptionMethodsParam} */
    static subscriptionMethods(): SubscriptionMethodsParam;
    /** @returns {SubscriptionMethodsDeleteParam} */
    static subscriptionMethodsDelete(): SubscriptionMethodsDeleteParam;
    /** @returns {SubscriptionPlanChangeParam} */
    static subscriptionPlanChange(): SubscriptionPlanChangeParam;
    /** @returns {SubscriptionRenewParam} */
    static subscriptionRenew(): SubscriptionRenewParam;
    /** @returns {TopupCancelCreditParam} */
    static topupCancelCredit(): TopupCancelCreditParam;
    /** @returns {TopupCreditParam} */
    static topupCredit(): TopupCreditParam;
    /** @returns {UpdateConsentParam} */
    static updateConsent(): UpdateConsentParam;
    /** @returns {UpdateSetupIntentParam} */
    static updateSetupIntent(): UpdateSetupIntentParam;
    /** @returns {UpgradePlanParam} */
    static upgradePlan(): UpgradePlanParam;
    /** @returns {UpsertCustomerDetailParam} */
    static upsertCustomerDetail(): UpsertCustomerDetailParam;
    /** @returns {VerifyPaymentParam} */
    static verifyPayment(): VerifyPaymentParam;
}
declare namespace BillingPlatformValidator {
    export { ActivateSubscriptionPlanParam, CancelSubscriptionChargeParam, CancelSubscriptionPlanParam, ChangePlanParam, CheckCouponValidityParam, CreateOneTimeChargeParam, CreditTransactionParam, CurrentAppLimitParam, GetBankListParam, GetChargeDetailsParam, GetCustomerDetailParam, GetEnterprisePlansParam, GetFeatureLimitConfigParam, GetInvoiceByIdParam, GetInvoicesParam, GetPaymentOptionsParam, GetPaymentTransactionParam, GetSubscriptionParam, GetSubscriptionChargeParam, GetentityDetailParam, GlobalSettingsParam, MethodDefaultParam, PaymentCollectParam, PaymentInitiateParam, PaymentOptionsParam, PaymentStatusParam, PlanDowngradeParam, PlanDowngradeGetParam, PlanStatusUpdateParam, SetupIntentParam, SetupMandateParam, SetupPaymentParam, SubscriptionConfigsParam, SubscriptionMethodsParam, SubscriptionMethodsDeleteParam, SubscriptionPlanChangeParam, SubscriptionRenewParam, TopupCancelCreditParam, TopupCreditParam, UpdateConsentParam, UpdateSetupIntentParam, UpgradePlanParam, UpsertCustomerDetailParam, VerifyPaymentParam };
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
type ChangePlanParam = {
    body: BillingPlatformModel.SubscriptionActivateReq;
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
type CreditTransactionParam = {
    /**
     * - Unique ID of the company
     */
    uniqueId: number;
    /**
     * - Product suite
     */
    productSuite: string;
    /**
     * - Type of the company
     */
    type: string;
    /**
     * - Number of items per page
     */
    pageSize?: number;
    /**
     * - Page number
     */
    pageNo?: number;
    /**
     * - Start date
     */
    startDate?: string;
    /**
     * - End date
     */
    endDate?: string;
    /**
     * - Search Type
     */
    searchType?: string;
    /**
     * - Search Value
     */
    searchValue?: string;
};
type CurrentAppLimitParam = {
    productSuite?: string;
    type?: string;
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
type MethodDefaultParam = {
    body: BillingPlatformModel.DefaultReq;
};
type PaymentCollectParam = {
    body: BillingPlatformModel.PaymentCollectReq;
};
type PaymentInitiateParam = {
    body: BillingPlatformModel.SunscribePlan;
};
type PaymentOptionsParam = {
    /**
     * - Payment options unique code.
     */
    code: string;
};
type PaymentStatusParam = {
    /**
     * - Unique ID of the company
     */
    orderId: string;
};
type PlanDowngradeParam = {
    body: BillingPlatformModel.DowngradePlanReq;
};
type PlanStatusUpdateParam = {
    body: BillingPlatformModel.PlanStatusUpdateReq;
};
type SetupIntentParam = {
    body: BillingPlatformModel.IntentReq;
};
type SetupMandateParam = {
    body: BillingPlatformModel.SetupMandateReq;
};
type SetupPaymentParam = {
    body: BillingPlatformModel.SetupPaymentReq;
};
type SubscriptionMethodsParam = {
    /**
     * - Unique id for external company
     */
    uniqueExternalId: string;
};
type SubscriptionMethodsDeleteParam = {
    /**
     * - Unique id for external company
     */
    uniqueExternalId: string;
    /**
     * - Payment method id
     */
    paymentMethodId: string;
};
type SubscriptionPlanChangeParam = {
    productSuite?: string;
    coupon?: string;
    uniqueId?: number;
    platform?: string;
    planId?: string;
};
type SubscriptionRenewParam = {
    body: BillingPlatformModel.SubscriptionRenewReq;
};
type TopupCancelCreditParam = {
    body: BillingPlatformModel.CancelTopupReq;
};
type TopupCreditParam = {
    body: BillingPlatformModel.TopupReq;
};
type UpdateConsentParam = {
    /**
     * - Customer unique id. In case of company it
     * will be company id.
     */
    subscriberId: string;
};
type UpdateSetupIntentParam = {
    body: BillingPlatformModel.PutIntentReq;
};
type UpgradePlanParam = {
    body: BillingPlatformModel.SubscriptionMethodsReq;
};
type UpsertCustomerDetailParam = {
    body: BillingPlatformModel.SubscriptionCustomerCreate;
};
type VerifyPaymentParam = {
    body: BillingPlatformModel.VerifyPaymentReq;
};
type GetBankListParam = any;
type GetCustomerDetailParam = any;
type GetEnterprisePlansParam = any;
type GetInvoicesParam = any;
type GetSubscriptionParam = any;
type PlanDowngradeGetParam = any;
type SubscriptionConfigsParam = any;
import BillingPlatformModel = require("./BillingPlatformModel");
