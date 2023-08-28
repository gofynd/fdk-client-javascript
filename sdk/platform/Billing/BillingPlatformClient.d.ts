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
     * @summary: Activate subscription
     * @description: It will activate subscription plan for customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/activateSubscriptionPlan/).
     */
    activateSubscriptionPlan({ body, requestHeaders }?: BillingPlatformValidator.ActivateSubscriptionPlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionActivateRes>;
    /**
     * @param {BillingPlatformValidator.CancelSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
     * @name cancelSubscriptionCharge
     * @summary: Cancel subscription charge
     * @description: Cancel subscription and attached charges. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionCharge/).
     */
    cancelSubscriptionCharge({ extensionId, subscriptionId, requestHeaders }?: BillingPlatformValidator.CancelSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.EntitySubscription>;
    /**
     * @param {BillingPlatformValidator.CancelSubscriptionPlanParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CancelSubscriptionRes>} - Success response
     * @name cancelSubscriptionPlan
     * @summary: Cancel subscription
     * @description: It will cancel current active subscription. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionPlan/).
     */
    cancelSubscriptionPlan({ body, requestHeaders }?: BillingPlatformValidator.CancelSubscriptionPlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CancelSubscriptionRes>;
    /**
     * @param {BillingPlatformValidator.CheckCouponValidityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CheckValidityResponse>} - Success response
     * @name checkCouponValidity
     * @summary: Check coupon validity
     * @description: Check coupon validity. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/checkCouponValidity/).
     */
    checkCouponValidity({ plan, couponCode, requestHeaders }?: BillingPlatformValidator.CheckCouponValidityParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CheckValidityResponse>;
    /**
     * @param {BillingPlatformValidator.CreateOneTimeChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CreateOneTimeChargeResponse>} -
     *   Success response
     * @name createOneTimeCharge
     * @summary: Create one time subscription charge
     * @description: Register one time subscription charge for a seller of your extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/createOneTimeCharge/).
     */
    createOneTimeCharge({ extensionId, body, requestHeaders }?: BillingPlatformValidator.CreateOneTimeChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CreateOneTimeChargeResponse>;
    /**
     * @param {BillingPlatformValidator.CreateSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CreateSubscriptionResponse>} -
     *   Success response
     * @name createSubscriptionCharge
     * @summary: Create subscription charge
     * @description: Register subscription charge for a seller of your extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/createSubscriptionCharge/).
     */
    createSubscriptionCharge({ extensionId, body, requestHeaders }?: BillingPlatformValidator.CreateSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CreateSubscriptionResponse>;
    /**
     * @param {BillingPlatformValidator.GetChargeDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.OneTimeChargeEntity>} - Success response
     * @name getChargeDetails
     * @summary: Get subscription charge details
     * @description: Get created subscription charge details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getChargeDetails/).
     */
    getChargeDetails({ extensionId, chargeId, requestHeaders }?: BillingPlatformValidator.GetChargeDetailsParam, { responseHeaders }?: object): Promise<BillingPlatformModel.OneTimeChargeEntity>;
    /**
     * @param {BillingPlatformValidator.GetCustomerDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
     * @name getCustomerDetail
     * @summary: Get subscription customer detail
     * @description: Get subscription customer detail. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getCustomerDetail/).
     */
    getCustomerDetail({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionCustomer>;
    /**
     * @param {BillingPlatformValidator.GetEnterprisePlansParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Plan[]>} - Success response
     * @name getEnterprisePlans
     * @summary: Get Enterprise Plans
     * @description: Get Enterprise Plans.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getEnterprisePlans/).
     */
    getEnterprisePlans({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.Plan[]>;
    /**
     * @param {BillingPlatformValidator.GetFeatureLimitConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionLimit>} - Success response
     * @name getFeatureLimitConfig
     * @summary: Get subscription subscription limits
     * @description: Get subscription subscription limits. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getFeatureLimitConfig/).
     */
    getFeatureLimitConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionLimit>;
    /**
     * @param {BillingPlatformValidator.GetInvoiceByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Invoice>} - Success response
     * @name getInvoiceById
     * @summary: Get invoice by id
     * @description: Get invoice by id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoiceById/).
     */
    getInvoiceById({ invoiceId, requestHeaders }?: BillingPlatformValidator.GetInvoiceByIdParam, { responseHeaders }?: object): Promise<BillingPlatformModel.Invoice>;
    /**
     * @param {BillingPlatformValidator.GetInvoicesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Invoices>} - Success response
     * @name getInvoices
     * @summary: Get invoices
     * @description: Get invoices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoices/).
     */
    getInvoices({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.Invoices>;
    /**
     * @param {BillingPlatformValidator.GetSubscriptionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionStatus>} - Success response
     * @name getSubscription
     * @summary: Get current subscription detail
     * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscription/).
     */
    getSubscription({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionStatus>;
    /**
     * @param {BillingPlatformValidator.GetSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
     * @name getSubscriptionCharge
     * @summary: Get subscription charge details
     * @description: Get created subscription charge details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscriptionCharge/).
     */
    getSubscriptionCharge({ extensionId, subscriptionId, requestHeaders }?: BillingPlatformValidator.GetSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.EntitySubscription>;
    /**
     * @param {BillingPlatformValidator.PlanStatusUpdateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Plan>} - Success response
     * @name planStatusUpdate
     * @summary: Update Status of The plan
     * @description: It will update the status of the plan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/planStatusUpdate/).
     */
    planStatusUpdate({ body, requestHeaders }?: BillingPlatformValidator.PlanStatusUpdateParam, { responseHeaders }?: object): Promise<BillingPlatformModel.Plan>;
    /**
     * @param {BillingPlatformValidator.SubscripePlanParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscribePlanRes>} - Success response
     * @name subscripePlan
     * @summary: Subscribe plan.
     * @description: It will subscribe a plan. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscripePlan/).
     */
    subscripePlan({ body, requestHeaders }?: BillingPlatformValidator.SubscripePlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscribePlanRes>;
    /**
     * @param {BillingPlatformValidator.UpsertCustomerDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
     * @name upsertCustomerDetail
     * @summary: Upsert subscription customer detail
     * @description: Upsert subscription customer detail. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/upsertCustomerDetail/).
     */
    upsertCustomerDetail({ body, requestHeaders }?: BillingPlatformValidator.UpsertCustomerDetailParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionCustomer>;
}
import BillingPlatformValidator = require("./BillingPlatformValidator");
import BillingPlatformModel = require("./BillingPlatformModel");
