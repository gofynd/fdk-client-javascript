export = Billing;
declare class Billing {
    constructor(config: any);
    config: any;
    /**
     * @param {BillingPlatformValidator.ActivateSubscriptionPlanParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionActivateRes>} - Success response
     * @name activateSubscriptionPlan
     * @summary: Activate a subscription plan
     * @description: Activate a specific subscription plan for a customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/activateSubscriptionPlan/).
     */
    activateSubscriptionPlan({ body, requestHeaders }?: BillingPlatformValidator.ActivateSubscriptionPlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionActivateRes>;
    /**
     * @param {BillingPlatformValidator.CancelSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
     * @name cancelSubscriptionCharge
     * @summary: Cancel a subscription charge
     * @description: When uninstalling, the extension statue will be marked as canceled. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionCharge/).
     */
    cancelSubscriptionCharge({ extensionId, subscriptionId, requestHeaders }?: BillingPlatformValidator.CancelSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.EntitySubscription>;
    /**
     * @param {BillingPlatformValidator.CancelSubscriptionPlanParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CancelSubscriptionRes>} - Success response
     * @name cancelSubscriptionPlan
     * @summary: Cancel a subscription plan
     * @description: The seller will initiate a request to cancel their current subscription on the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionPlan/).
     */
    cancelSubscriptionPlan({ body, requestHeaders }?: BillingPlatformValidator.CancelSubscriptionPlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CancelSubscriptionRes>;
    /**
     * @param {BillingPlatformValidator.CheckCouponValidityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CheckValidityResponse>} - Success response
     * @name checkCouponValidity
     * @summary: Verify coupon validity
     * @description: Checks whether a coupon code is valid for discounts while billing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/checkCouponValidity/).
     */
    checkCouponValidity({ plan, couponCode, requestHeaders }?: BillingPlatformValidator.CheckCouponValidityParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CheckValidityResponse>;
    /**
     * @param {BillingPlatformValidator.CreateOneTimeChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CreateOneTimeChargeResponse>} -
     *   Success response
     * @name createOneTimeCharge
     * @summary: Generate a one-time charge
     * @description: Generate a one-time charge for specific services or products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/createOneTimeCharge/).
     */
    createOneTimeCharge({ extensionId, body, requestHeaders }?: BillingPlatformValidator.CreateOneTimeChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CreateOneTimeChargeResponse>;
    /**
     * @param {BillingPlatformValidator.CreateSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CreateSubscriptionResponse>} -
     *   Success response
     * @name createSubscriptionCharge
     * @summary: Register extension for the seller
     * @description: Register a subscription charge for a seller using your extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/createSubscriptionCharge/).
     */
    createSubscriptionCharge({ extensionId, body, requestHeaders }?: BillingPlatformValidator.CreateSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CreateSubscriptionResponse>;
    /**
     * @param {BillingPlatformValidator.GetChargeDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.OneTimeChargeEntity>} - Success response
     * @name getChargeDetails
     * @summary: Obtain charge details
     * @description: It will fetch the information regarding the subscription for the extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getChargeDetails/).
     */
    getChargeDetails({ extensionId, chargeId, requestHeaders }?: BillingPlatformValidator.GetChargeDetailsParam, { responseHeaders }?: object): Promise<BillingPlatformModel.OneTimeChargeEntity>;
    /**
     * @param {BillingPlatformValidator.GetCustomerDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
     * @name getCustomerDetail
     * @summary: Get seller details
     * @description: Retrieve seller information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getCustomerDetail/).
     */
    getCustomerDetail({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionCustomer>;
    /**
     * @param {BillingPlatformValidator.GetEnterprisePlansParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Plan[]>} - Success response
     * @name getEnterprisePlans
     * @summary: Get enterprise-level plans
     * @description: Retrieve available enterprise-level subscription plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getEnterprisePlans/).
     */
    getEnterprisePlans({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.Plan[]>;
    /**
     * @param {BillingPlatformValidator.GetFeatureLimitConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionLimit>} - Success response
     * @name getFeatureLimitConfig
     * @summary: Obtain feature limit configurations
     * @description: Retrieve configuration settings for feature limits in subscription plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getFeatureLimitConfig/).
     */
    getFeatureLimitConfig({ productSuite, type, requestHeaders }?: BillingPlatformValidator.GetFeatureLimitConfigParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionLimit>;
    /**
     * @param {BillingPlatformValidator.GetInvoiceByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Invoice>} - Success response
     * @name getInvoiceById
     * @summary: Get a specific invoice
     * @description: Retrieve a particular invoice's details by providing its unique ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoiceById/).
     */
    getInvoiceById({ invoiceId, requestHeaders }?: BillingPlatformValidator.GetInvoiceByIdParam, { responseHeaders }?: object): Promise<BillingPlatformModel.Invoice>;
    /**
     * @param {BillingPlatformValidator.GetInvoicesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Invoices>} - Success response
     * @name getInvoices
     * @summary: Get invoices
     * @description: Retrieve invoices for billing and payment tracking. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoices/).
     */
    getInvoices({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.Invoices>;
    /**
     * @param {BillingPlatformValidator.GetSubscriptionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionStatus>} - Success response
     * @name getSubscription
     * @summary: Get subscription details
     * @description: t will show the most recent subscriptions of the seller for each ordering channel, regardless of their status—whether they're active, cancelled, or otherwise. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscription/).
     */
    getSubscription({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionStatus>;
    /**
     * @param {BillingPlatformValidator.GetSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
     * @name getSubscriptionCharge
     * @summary: Get subscription charge details
     * @description: Retrieve detailed information about subscription charges using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscriptionCharge/).
     */
    getSubscriptionCharge({ extensionId, subscriptionId, requestHeaders }?: BillingPlatformValidator.GetSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.EntitySubscription>;
    /**
     * @param {BillingPlatformValidator.GetentityDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.EntityResponse>} - Success response
     * @name getentityDetail
     * @summary: Generic api to get the entity detail
     * @description: Generic api to get the entity detail - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getentityDetail/).
     */
    getentityDetail({ entityName, channel, entityId, component, componentName, requestHeaders, }?: BillingPlatformValidator.GetentityDetailParam, { responseHeaders }?: object): Promise<BillingPlatformModel.EntityResponse>;
    /**
     * @param {BillingPlatformValidator.PlanStatusUpdateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Plan>} - Success response
     * @name planStatusUpdate
     * @summary: Update subscription plan status
     * @description: Modify the status of a subscription plan. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/planStatusUpdate/).
     */
    planStatusUpdate({ body, requestHeaders }?: BillingPlatformValidator.PlanStatusUpdateParam, { responseHeaders }?: object): Promise<BillingPlatformModel.Plan>;
    /**
     * @param {BillingPlatformValidator.SubscripePlanParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscribePlanRes>} - Success response
     * @name subscripePlan
     * @summary: Subscribe to a plan
     * @description: Subscribe to a specific billing plan. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscripePlan/).
     */
    subscripePlan({ body, requestHeaders }?: BillingPlatformValidator.SubscripePlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscribePlanRes>;
    /**
     * @param {BillingPlatformValidator.UpsertCustomerDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
     * @name upsertCustomerDetail
     * @summary: Update or insert seller details
     * @description: Allows you to modify or insert seller information in the billing system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/upsertCustomerDetail/).
     */
    upsertCustomerDetail({ body, requestHeaders }?: BillingPlatformValidator.UpsertCustomerDetailParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionCustomer>;
}
import BillingPlatformValidator = require("./BillingPlatformValidator");
import BillingPlatformModel = require("./BillingPlatformModel");
