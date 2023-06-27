export = Billing;
declare class Billing {
    constructor(config: any);
    config: any;
    /**
     * @param {BillingPlatformValidator.activateSubscriptionPlan} arg - Arg object
     * @returns {Promise<BillingPlatformModel.SubscriptionActivateRes>} - Success response
     * @name activateSubscriptionPlan
     * @summary: Activate subscription
     * @description: It will activate subscription plan for customer
     */
    activateSubscriptionPlan({ body }?: BillingPlatformValidator.activateSubscriptionPlan): Promise<BillingPlatformModel.SubscriptionActivateRes>;
    /**
     * @param {BillingPlatformValidator.cancelSubscriptionCharge} arg - Arg object
     * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
     * @name cancelSubscriptionCharge
     * @summary: Cancel subscription charge
     * @description: Cancel subscription and attached charges.
     */
    cancelSubscriptionCharge({ extensionId, subscriptionId }?: BillingPlatformValidator.cancelSubscriptionCharge): Promise<BillingPlatformModel.EntitySubscription>;
    /**
     * @param {BillingPlatformValidator.cancelSubscriptionPlan} arg - Arg object
     * @returns {Promise<BillingPlatformModel.CancelSubscriptionRes>} - Success response
     * @name cancelSubscriptionPlan
     * @summary: Cancel subscription
     * @description: It will cancel current active subscription.
     */
    cancelSubscriptionPlan({ body }?: BillingPlatformValidator.cancelSubscriptionPlan): Promise<BillingPlatformModel.CancelSubscriptionRes>;
    /**
     * @param {BillingPlatformValidator.checkCouponValidity} arg - Arg object
     * @returns {Promise<BillingPlatformModel.CheckValidityResponse>} - Success response
     * @name checkCouponValidity
     * @summary: Check coupon validity
     * @description: Check coupon validity.
     */
    checkCouponValidity({ plan, couponCode }?: BillingPlatformValidator.checkCouponValidity): Promise<BillingPlatformModel.CheckValidityResponse>;
    /**
     * @param {BillingPlatformValidator.createOneTimeCharge} arg - Arg object
     * @returns {Promise<BillingPlatformModel.CreateOneTimeChargeResponse>} -
     *   Success response
     * @name createOneTimeCharge
     * @summary: Create one time subscription charge
     * @description: Register one time subscription charge for a seller of your extension.
     */
    createOneTimeCharge({ extensionId, body }?: BillingPlatformValidator.createOneTimeCharge): Promise<BillingPlatformModel.CreateOneTimeChargeResponse>;
    /**
     * @param {BillingPlatformValidator.createSubscriptionCharge} arg - Arg object
     * @returns {Promise<BillingPlatformModel.CreateSubscriptionResponse>} -
     *   Success response
     * @name createSubscriptionCharge
     * @summary: Create subscription charge
     * @description: Register subscription charge for a seller of your extension.
     */
    createSubscriptionCharge({ extensionId, body }?: BillingPlatformValidator.createSubscriptionCharge): Promise<BillingPlatformModel.CreateSubscriptionResponse>;
    /**
     * @param {BillingPlatformValidator.getChargeDetails} arg - Arg object
     * @returns {Promise<BillingPlatformModel.OneTimeChargeEntity>} - Success response
     * @name getChargeDetails
     * @summary: Get subscription charge details
     * @description: Get created subscription charge details
     */
    getChargeDetails({ extensionId, chargeId }?: BillingPlatformValidator.getChargeDetails): Promise<BillingPlatformModel.OneTimeChargeEntity>;
    /**
     * @param {BillingPlatformValidator.getCustomerDetail} arg - Arg object
     * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
     * @name getCustomerDetail
     * @summary: Get subscription customer detail
     * @description: Get subscription customer detail.
     */
    getCustomerDetail({}?: any): Promise<BillingPlatformModel.SubscriptionCustomer>;
    /**
     * @param {BillingPlatformValidator.getFeatureLimitConfig} arg - Arg object
     * @returns {Promise<BillingPlatformModel.SubscriptionLimit>} - Success response
     * @name getFeatureLimitConfig
     * @summary: Get subscription subscription limits
     * @description: Get subscription subscription limits.
     */
    getFeatureLimitConfig({}?: any): Promise<BillingPlatformModel.SubscriptionLimit>;
    /**
     * @param {BillingPlatformValidator.getInvoiceById} arg - Arg object
     * @returns {Promise<BillingPlatformModel.Invoice>} - Success response
     * @name getInvoiceById
     * @summary: Get invoice by id
     * @description: Get invoice by id.
     */
    getInvoiceById({ invoiceId }?: BillingPlatformValidator.getInvoiceById): Promise<BillingPlatformModel.Invoice>;
    /**
     * @param {BillingPlatformValidator.getInvoices} arg - Arg object
     * @returns {Promise<BillingPlatformModel.Invoices>} - Success response
     * @name getInvoices
     * @summary: Get invoices
     * @description: Get invoices.
     */
    getInvoices({}?: any): Promise<BillingPlatformModel.Invoices>;
    /**
     * @param {BillingPlatformValidator.getSubscription} arg - Arg object
     * @returns {Promise<BillingPlatformModel.SubscriptionStatus>} - Success response
     * @name getSubscription
     * @summary: Get current subscription detail
     * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
     */
    getSubscription({}?: any): Promise<BillingPlatformModel.SubscriptionStatus>;
    /**
     * @param {BillingPlatformValidator.getSubscriptionCharge} arg - Arg object
     * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
     * @name getSubscriptionCharge
     * @summary: Get subscription charge details
     * @description: Get created subscription charge details
     */
    getSubscriptionCharge({ extensionId, subscriptionId }?: BillingPlatformValidator.getSubscriptionCharge): Promise<BillingPlatformModel.EntitySubscription>;
    /**
     * @param {BillingPlatformValidator.upsertCustomerDetail} arg - Arg object
     * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
     * @name upsertCustomerDetail
     * @summary: Upsert subscription customer detail
     * @description: Upsert subscription customer detail.
     */
    upsertCustomerDetail({ body }?: BillingPlatformValidator.upsertCustomerDetail): Promise<BillingPlatformModel.SubscriptionCustomer>;
}
import BillingPlatformValidator = require("./BillingPlatformValidator");
import BillingPlatformModel = require("./BillingPlatformModel");
