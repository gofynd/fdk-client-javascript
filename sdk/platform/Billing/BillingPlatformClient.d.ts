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
     * @summary: Activate a subscription plan.
     * @description: Activate a specific subscription plan for a customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/activateSubscriptionPlan/).
     */
    activateSubscriptionPlan({ body, requestHeaders }?: BillingPlatformValidator.ActivateSubscriptionPlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionActivateRes>;
    /**
     * @param {BillingPlatformValidator.CancelSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionChargeRes>} - Success response
     * @name cancelSubscriptionCharge
     * @summary: Cancel a subscription charge.
     * @description: Cancel an ongoing subscription charge for a customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionCharge/).
     */
    cancelSubscriptionCharge({ extensionId, subscriptionId, requestHeaders }?: BillingPlatformValidator.CancelSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionChargeRes>;
    /**
     * @param {BillingPlatformValidator.CancelSubscriptionPlanParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CancelSubscriptionRes>} - Success response
     * @name cancelSubscriptionPlan
     * @summary: Cancel a subscription plan.
     * @description: Cancel an active subscription plan for a customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionPlan/).
     */
    cancelSubscriptionPlan({ body, requestHeaders }?: BillingPlatformValidator.CancelSubscriptionPlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CancelSubscriptionRes>;
    /**
     * @param {BillingPlatformValidator.ChangePlanParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionActivateRes>} - Success response
     * @name changePlan
     * @summary: Upgrade plan.
     * @description: Admin user can modify the subscription plan for an seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/changePlan/).
     */
    changePlan({ body, requestHeaders }?: BillingPlatformValidator.ChangePlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionActivateRes>;
    /**
     * @param {BillingPlatformValidator.CheckCouponValidityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CheckValidityResponse>} - Success response
     * @name checkCouponValidity
     * @summary: Verify coupon validity.
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
     * @summary: Generate a one-time charge.
     * @description: Generate a one-time charge for specific services or products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/createOneTimeCharge/).
     */
    createOneTimeCharge({ extensionId, body, requestHeaders }?: BillingPlatformValidator.CreateOneTimeChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CreateOneTimeChargeResponse>;
    /**
     * @param {BillingPlatformValidator.CreditTransactionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CreditTransactionResponse>} -
     *   Success response
     * @name creditTransaction
     * @summary: Credit Transaction
     * @description: Credit Transaction - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/creditTransaction/).
     */
    creditTransaction({ uniqueId, productSuite, type, pageSize, pageNo, startDate, endDate, searchType, searchValue, requestHeaders, }?: BillingPlatformValidator.CreditTransactionParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CreditTransactionResponse>;
    /**
     * @param {BillingPlatformValidator.CurrentAppLimitParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionLimit>} - Success response
     * @name currentAppLimit
     * @summary: Obtain feature limit configurations.
     * @description: Retrieve configuration settings for feature limits in subscription plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/currentAppLimit/).
     */
    currentAppLimit({ productSuite, type, requestHeaders }?: BillingPlatformValidator.CurrentAppLimitParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionLimit>;
    /**
     * @param {BillingPlatformValidator.GetBankListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name getBankList
     * @summary: Get Bank List
     * @description: Get Bank List - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getBankList/).
     */
    getBankList({ requestHeaders }?: any, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {BillingPlatformValidator.GetChargeDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.ChargeDetails>} - Success response
     * @name getChargeDetails
     * @summary: Obtain charge details.
     * @description: Retrieve comprehensive details about a specific billing charge. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getChargeDetails/).
     */
    getChargeDetails({ extensionId, chargeId, requestHeaders }?: BillingPlatformValidator.GetChargeDetailsParam, { responseHeaders }?: object): Promise<BillingPlatformModel.ChargeDetails>;
    /**
     * @param {BillingPlatformValidator.GetCustomerDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
     * @name getCustomerDetail
     * @summary: Fetch customer details.
     * @description: Obtain customer-related billing information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getCustomerDetail/).
     */
    getCustomerDetail({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionCustomer>;
    /**
     * @param {BillingPlatformValidator.GetEnterprisePlansParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Plan[]>} - Success response
     * @name getEnterprisePlans
     * @summary: Retrieve enterprise-level plans.
     * @description: Retrieve available enterprise-level subscription plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getEnterprisePlans/).
     */
    getEnterprisePlans({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.Plan[]>;
    /**
     * @param {BillingPlatformValidator.GetFeatureLimitConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionLimit>} - Success response
     * @name getFeatureLimitConfig
     * @summary: Obtain feature limit configurations.
     * @description: Retrieve configuration settings for feature limits in subscription plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getFeatureLimitConfig/).
     */
    getFeatureLimitConfig({ productSuite, type, requestHeaders }?: BillingPlatformValidator.GetFeatureLimitConfigParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionLimit>;
    /**
     * @param {BillingPlatformValidator.GetInvoiceByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.InvoiceData>} - Success response
     * @name getInvoiceById
     * @summary: Get a specific invoice.
     * @description: Retrieve a particular invoice's details by providing its unique ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoiceById/).
     */
    getInvoiceById({ invoiceId, requestHeaders }?: BillingPlatformValidator.GetInvoiceByIdParam, { responseHeaders }?: object): Promise<BillingPlatformModel.InvoiceData>;
    /**
     * @param {BillingPlatformValidator.GetInvoicesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Invoices>} - Success response
     * @name getInvoices
     * @summary: Retrieve invoices.
     * @description: Retrieve invoices for billing and payment tracking. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoices/).
     */
    getInvoices({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.Invoices>;
    /**
     * @param {BillingPlatformValidator.GetPaymentOptionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.GetPaymentOptions>} - Success response
     * @name getPaymentOptions
     * @summary: API to get payment options
     * @description: API to get payment options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getPaymentOptions/).
     */
    getPaymentOptions({ transactionId, requestHeaders }?: BillingPlatformValidator.GetPaymentOptionsParam, { responseHeaders }?: object): Promise<BillingPlatformModel.GetPaymentOptions>;
    /**
     * @param {BillingPlatformValidator.GetPaymentTransactionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.PaymentTransactionDetails>} -
     *   Success response
     * @name getPaymentTransaction
     * @summary: API to get payment transaction details
     * @description: API to get payment transaction details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getPaymentTransaction/).
     */
    getPaymentTransaction({ transactionId, requestHeaders }?: BillingPlatformValidator.GetPaymentTransactionParam, { responseHeaders }?: object): Promise<BillingPlatformModel.PaymentTransactionDetails>;
    /**
     * @param {BillingPlatformValidator.GetSubscriptionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionStatus>} - Success response
     * @name getSubscription
     * @summary: Retrieve subscription details.
     * @description: Retrieve details of a customer's subscription information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscription/).
     */
    getSubscription({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionStatus>;
    /**
     * @param {BillingPlatformValidator.GetSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionChargeRes>} - Success response
     * @name getSubscriptionCharge
     * @summary: Retrieve subscription charge details.
     * @description: Retrieve detailed information about subscription charges using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscriptionCharge/).
     */
    getSubscriptionCharge({ extensionId, subscriptionId, requestHeaders }?: BillingPlatformValidator.GetSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionChargeRes>;
    /**
     * @param {BillingPlatformValidator.GetentityDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.EntityDetail[]>} - Success response
     * @name getentityDetail
     * @summary: Generic api to get the entity detail
     * @description: Generic api to get the entity detail - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getentityDetail/).
     */
    getentityDetail({ entityName, channel, entityId, component, componentName, requestHeaders, }?: BillingPlatformValidator.GetentityDetailParam, { responseHeaders }?: object): Promise<BillingPlatformModel.EntityDetail[]>;
    /**
     * @param {BillingPlatformValidator.GlobalSettingsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.GlobalSettings>} - Success response
     * @name globalSettings
     * @summary: API to get global settings details
     * @description: API to get global settings details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/globalSettings/).
     */
    globalSettings({ pageNo, pageSize, query, requestHeaders }?: BillingPlatformValidator.GlobalSettingsParam, { responseHeaders }?: object): Promise<BillingPlatformModel.GlobalSettings>;
    /**
     * @param {BillingPlatformValidator.MethodDefaultParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Message>} - Success response
     * @name methodDefault
     * @summary: Method Default
     * @description: Method Default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/methodDefault/).
     */
    methodDefault({ body, requestHeaders }?: BillingPlatformValidator.MethodDefaultParam, { responseHeaders }?: object): Promise<BillingPlatformModel.Message>;
    /**
     * @param {BillingPlatformValidator.PaymentCollectParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.PaymentCollectRes>} - Success response
     * @name paymentCollect
     * @summary: Payment Collect
     * @description: Payment Collect - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/paymentCollect/).
     */
    paymentCollect({ body, requestHeaders }?: BillingPlatformValidator.PaymentCollectParam, { responseHeaders }?: object): Promise<BillingPlatformModel.PaymentCollectRes>;
    /**
     * @param {BillingPlatformValidator.PaymentInitiateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscribePlanRes>} - Success response
     * @name paymentInitiate
     * @summary: Initiate Payment
     * @description: Initiate Payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/paymentInitiate/).
     */
    paymentInitiate({ body, requestHeaders }?: BillingPlatformValidator.PaymentInitiateParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscribePlanRes>;
    /**
     * @param {BillingPlatformValidator.PaymentOptionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.PaymentOptions>} - Success response
     * @name paymentOptions
     * @summary: API to get payment details of requested payment options
     * @description: API to get payment details of requested payment options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/paymentOptions/).
     */
    paymentOptions({ code, requestHeaders }?: BillingPlatformValidator.PaymentOptionsParam, { responseHeaders }?: object): Promise<BillingPlatformModel.PaymentOptions>;
    /**
     * @param {BillingPlatformValidator.PaymentStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.PaymentStatusResponse>} - Success response
     * @name paymentStatus
     * @summary: Credit Transaction
     * @description: Credit Transaction - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/paymentStatus/).
     */
    paymentStatus({ orderId, requestHeaders }?: BillingPlatformValidator.PaymentStatusParam, { responseHeaders }?: object): Promise<BillingPlatformModel.PaymentStatusResponse>;
    /**
     * @param {BillingPlatformValidator.PlanDowngradeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.PostDowngradeRes>} - Success response
     * @name planDowngrade
     * @summary: Plan change downgrade
     * @description: Plan change downgrade - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/planDowngrade/).
     */
    planDowngrade({ body, requestHeaders }?: BillingPlatformValidator.PlanDowngradeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.PostDowngradeRes>;
    /**
     * @param {BillingPlatformValidator.PlanDowngradeGetParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.DowngradeRes>} - Success response
     * @name planDowngradeGet
     * @summary: Get plan change downgrade
     * @description: Get plan change downgrade - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/planDowngradeGet/).
     */
    planDowngradeGet({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.DowngradeRes>;
    /**
     * @param {BillingPlatformValidator.PlanStatusUpdateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Plan>} - Success response
     * @name planStatusUpdate
     * @summary: Update subscription plan status.
     * @description: Modify the status of a subscription plan. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/planStatusUpdate/).
     */
    planStatusUpdate({ body, requestHeaders }?: BillingPlatformValidator.PlanStatusUpdateParam, { responseHeaders }?: object): Promise<BillingPlatformModel.Plan>;
    /**
     * @param {BillingPlatformValidator.SetupIntentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SetupIntentRes>} - Success response
     * @name setupIntent
     * @summary: Setup Intent
     * @description: Setup Intent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/setupIntent/).
     */
    setupIntent({ body, requestHeaders }?: BillingPlatformValidator.SetupIntentParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SetupIntentRes>;
    /**
     * @param {BillingPlatformValidator.SetupMandateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.Message>} - Success response
     * @name setupMandate
     * @summary: Setup Mandate
     * @description: Setup Mandate - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/setupMandate/).
     */
    setupMandate({ body, requestHeaders }?: BillingPlatformValidator.SetupMandateParam, { responseHeaders }?: object): Promise<BillingPlatformModel.Message>;
    /**
     * @param {BillingPlatformValidator.SetupPaymentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SetupPayment>} - Success response
     * @name setupPayment
     * @summary: Setup Payment
     * @description: Setup Payment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/setupPayment/).
     */
    setupPayment({ body, requestHeaders }?: BillingPlatformValidator.SetupPaymentParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SetupPayment>;
    /**
     * @param {BillingPlatformValidator.SubscriptionConfigsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.ConfigRes>} - Success response
     * @name subscriptionConfigs
     * @summary: API to get subscription config details
     * @description: API to get subscription config details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionConfigs/).
     */
    subscriptionConfigs({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPlatformModel.ConfigRes>;
    /**
     * @param {BillingPlatformValidator.SubscriptionMethodsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionMethods>} - Success response
     * @name subscriptionMethods
     * @summary: API to get subscription methods
     * @description: API to get subscription methods. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionMethods/).
     */
    subscriptionMethods({ uniqueExternalId, requestHeaders }?: BillingPlatformValidator.SubscriptionMethodsParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionMethods>;
    /**
     * @param {BillingPlatformValidator.SubscriptionMethodsDeleteParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.ResourceNotFound>} - Success response
     * @name subscriptionMethodsDelete
     * @summary: API to get subscription methods
     * @description: API to get subscription methods. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionMethodsDelete/).
     */
    subscriptionMethodsDelete({ uniqueExternalId, paymentMethodId, requestHeaders }?: BillingPlatformValidator.SubscriptionMethodsDeleteParam, { responseHeaders }?: object): Promise<BillingPlatformModel.ResourceNotFound>;
    /**
     * @param {BillingPlatformValidator.SubscriptionPlanChangeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.PlanChangeDetails>} - Success response
     * @name subscriptionPlanChange
     * @summary: API to get plan change details of subscription
     * @description: API to get plan change details of subscription. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionPlanChange/).
     */
    subscriptionPlanChange({ productSuite, coupon, uniqueId, platform, planId, requestHeaders }?: BillingPlatformValidator.SubscriptionPlanChangeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.PlanChangeDetails>;
    /**
     * @param {BillingPlatformValidator.SubscriptionRenewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionRenewRes>} - Success response
     * @name subscriptionRenew
     * @summary: Subscription Renew
     * @description: Subscription Renew - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionRenew/).
     */
    subscriptionRenew({ body, requestHeaders }?: BillingPlatformValidator.SubscriptionRenewParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionRenewRes>;
    /**
     * @param {BillingPlatformValidator.TopupCancelCreditParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CancelTopupRes>} - Success response
     * @name topupCancelCredit
     * @summary: Cancel Topup
     * @description: Cancel Topup - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/topupCancelCredit/).
     */
    topupCancelCredit({ body, requestHeaders }?: BillingPlatformValidator.TopupCancelCreditParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CancelTopupRes>;
    /**
     * @param {BillingPlatformValidator.TopupCreditParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.TopupRes>} - Success response
     * @name topupCredit
     * @summary: Topup
     * @description: Topup - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/topupCredit/).
     */
    topupCredit({ body, requestHeaders }?: BillingPlatformValidator.TopupCreditParam, { responseHeaders }?: object): Promise<BillingPlatformModel.TopupRes>;
    /**
     * @param {BillingPlatformValidator.UpdateConsentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.StatusMessage>} - Success response
     * @name updateConsent
     * @summary: Update Consent
     * @description: Update Consent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/updateConsent/).
     */
    updateConsent({ subscriberId, requestHeaders }?: BillingPlatformValidator.UpdateConsentParam, { responseHeaders }?: object): Promise<BillingPlatformModel.StatusMessage>;
    /**
     * @param {BillingPlatformValidator.UpdateSetupIntentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.StatusMessage>} - Success response
     * @name updateSetupIntent
     * @summary: Setup Intent
     * @description: Setup Intent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/updateSetupIntent/).
     */
    updateSetupIntent({ body, requestHeaders }?: BillingPlatformValidator.UpdateSetupIntentParam, { responseHeaders }?: object): Promise<BillingPlatformModel.StatusMessage>;
    /**
     * @param {BillingPlatformValidator.UpgradePlanParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.ResourceNotFound>} - Success response
     * @name upgradePlan
     * @summary: Post Methods
     * @description: Admin user can modify the subscription plan for an seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/upgradePlan/).
     */
    upgradePlan({ body, requestHeaders }?: BillingPlatformValidator.UpgradePlanParam, { responseHeaders }?: object): Promise<BillingPlatformModel.ResourceNotFound>;
    /**
     * @param {BillingPlatformValidator.UpsertCustomerDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
     * @name upsertCustomerDetail
     * @summary: Update or insert customer details.
     * @description: Allows you to modify or insert customer information in the billing system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/upsertCustomerDetail/).
     */
    upsertCustomerDetail({ body, requestHeaders }?: BillingPlatformValidator.UpsertCustomerDetailParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionCustomer>;
    /**
     * @param {BillingPlatformValidator.VerifyPaymentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.VerifyPaymentRes>} - Success response
     * @name verifyPayment
     * @summary: API to verify subscription payment
     * @description: API to verify subscription payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/verifyPayment/).
     */
    verifyPayment({ body, requestHeaders }?: BillingPlatformValidator.VerifyPaymentParam, { responseHeaders }?: object): Promise<BillingPlatformModel.VerifyPaymentRes>;
}
import BillingPlatformValidator = require("./BillingPlatformValidator");
import BillingPlatformModel = require("./BillingPlatformModel");
