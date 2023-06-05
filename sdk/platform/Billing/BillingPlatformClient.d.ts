export = Billing;
declare class Billing {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriptionActivateReq} arg.body
     * @returns {Promise<SubscriptionActivateRes>} - Success response
     * @summary: Activate subscription
     * @description: It will activate subscription plan for customer
     */
    activateSubscriptionPlan({ body }?: {
        body: SubscriptionActivateReq;
    }): Promise<SubscriptionActivateRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension _id
     * @param {string} arg.subscriptionId - Subscription charge _id
     * @returns {Promise<EntitySubscription>} - Success response
     * @summary: Cancel subscription charge
     * @description: Cancel subscription and attached charges.
     */
    cancelSubscriptionCharge({ extensionId, subscriptionId }?: {
        extensionId: string;
        subscriptionId: string;
    }): Promise<EntitySubscription>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CancelSubscriptionReq} arg.body
     * @returns {Promise<CancelSubscriptionRes>} - Success response
     * @summary: Cancel subscription
     * @description: It will cancel current active subscription.
     */
    cancelSubscriptionPlan({ body }?: {
        body: CancelSubscriptionReq;
    }): Promise<CancelSubscriptionRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.plan - ID of the plan.
     * @param {string} arg.couponCode - Coupon code.
     * @returns {Promise<CheckValidityResponse>} - Success response
     * @summary: Check coupon validity
     * @description: Check coupon validity.
     */
    checkCouponValidity({ plan, couponCode }?: {
        plan: string;
        couponCode: string;
    }): Promise<CheckValidityResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension _id
     * @param {CreateOneTimeCharge} arg.body
     * @returns {Promise<CreateOneTimeChargeResponse>} - Success response
     * @summary: Create one time subscription charge
     * @description: Register one time subscription charge for a seller of your extension.
     */
    createOneTimeCharge({ extensionId, body }?: {
        extensionId: string;
        body: CreateOneTimeCharge;
    }): Promise<CreateOneTimeChargeResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension _id
     * @param {CreateSubscriptionCharge} arg.body
     * @returns {Promise<CreateSubscriptionResponse>} - Success response
     * @summary: Create subscription charge
     * @description: Register subscription charge for a seller of your extension.
     */
    createSubscriptionCharge({ extensionId, body }?: {
        extensionId: string;
        body: CreateSubscriptionCharge;
    }): Promise<CreateSubscriptionResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension _id
     * @param {string} arg.chargeId - Standalone charge _id
     * @returns {Promise<OneTimeChargeEntity>} - Success response
     * @summary: Get subscription charge details
     * @description: Get created subscription charge details
     */
    getChargeDetails({ extensionId, chargeId }?: {
        extensionId: string;
        chargeId: string;
    }): Promise<OneTimeChargeEntity>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<SubscriptionCustomer>} - Success response
     * @summary: Get subscription customer detail
     * @description: Get subscription customer detail.
     */
    getCustomerDetail({}?: any): Promise<SubscriptionCustomer>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<SubscriptionLimit>} - Success response
     * @summary: Get subscription subscription limits
     * @description: Get subscription subscription limits.
     */
    getFeatureLimitConfig({}?: any): Promise<SubscriptionLimit>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.invoiceId - Invoice id
     * @returns {Promise<Invoice>} - Success response
     * @summary: Get invoice by id
     * @description: Get invoice by id.
     */
    getInvoiceById({ invoiceId }?: {
        invoiceId: string;
    }): Promise<Invoice>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<Invoices>} - Success response
     * @summary: Get invoices
     * @description: Get invoices.
     */
    getInvoices({}?: any): Promise<Invoices>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<SubscriptionStatus>} - Success response
     * @summary: Get current subscription detail
     * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
     */
    getSubscription({}?: any): Promise<SubscriptionStatus>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension _id
     * @param {string} arg.subscriptionId - Subscription charge _id
     * @returns {Promise<EntitySubscription>} - Success response
     * @summary: Get subscription charge details
     * @description: Get created subscription charge details
     */
    getSubscriptionCharge({ extensionId, subscriptionId }?: {
        extensionId: string;
        subscriptionId: string;
    }): Promise<EntitySubscription>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriptionCustomerCreate} arg.body
     * @returns {Promise<SubscriptionCustomer>} - Success response
     * @summary: Upsert subscription customer detail
     * @description: Upsert subscription customer detail.
     */
    upsertCustomerDetail({ body }?: {
        body: SubscriptionCustomerCreate;
    }): Promise<SubscriptionCustomer>;
}
