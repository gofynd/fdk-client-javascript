export = Billing;
declare class Billing {
    constructor(config: any);
    config: any;
    /**
     * @param {BillingPlatformValidator.CancelSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionChargeRes>} - Success response
     * @name cancelSubscriptionCharge
     * @summary: Cancel the extension subscription
     * @description: Cancel an ongoing extension subscription for the company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/cancelSubscriptionCharge/).
     */
    cancelSubscriptionCharge({ extensionId, subscriptionId, requestHeaders }?: BillingPlatformValidator.CancelSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionChargeRes>;
    /**
     * @param {BillingPlatformValidator.CreateOneTimeChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CreateOneTimeChargeResponseSchemas>}
     *   - Success response
     *
     * @name createOneTimeCharge
     * @summary: Generate a one-time charge
     * @description: Generate a one-time charge for specific services or products. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/createOneTimeCharge/).
     */
    createOneTimeCharge({ extensionId, body, requestHeaders }?: BillingPlatformValidator.CreateOneTimeChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CreateOneTimeChargeResponseSchemas>;
    /**
     * @param {BillingPlatformValidator.CreateSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.CreateSubscription>} - Success response
     * @name createSubscriptionCharge
     * @summary: Initiate subscription billing
     * @description: Initiates and registers a subscription charge for a specific extension for a given company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/createSubscriptionCharge/).
     */
    createSubscriptionCharge({ extensionId, body, requestHeaders }?: BillingPlatformValidator.CreateSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.CreateSubscription>;
    /**
     * @param {BillingPlatformValidator.GetChargeDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.ChargeDetails>} - Success response
     * @name getChargeDetails
     * @summary: Obtain charge details
     * @description: Retrieve comprehensive details about a specific billing charge. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/getChargeDetails/).
     */
    getChargeDetails({ extensionId, chargeId, requestHeaders }?: BillingPlatformValidator.GetChargeDetailsParam, { responseHeaders }?: object): Promise<BillingPlatformModel.ChargeDetails>;
    /**
     * @param {BillingPlatformValidator.GetSubscriptionChargeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BillingPlatformModel.SubscriptionChargeRes>} - Success response
     * @name getSubscriptionCharge
     * @summary: Retrieve subscription charge details
     * @description: Retrieve detailed information about subscription charges using this API. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/getSubscriptionCharge/).
     */
    getSubscriptionCharge({ extensionId, subscriptionId, requestHeaders }?: BillingPlatformValidator.GetSubscriptionChargeParam, { responseHeaders }?: object): Promise<BillingPlatformModel.SubscriptionChargeRes>;
}
import BillingPlatformValidator = require("./BillingPlatformValidator");
import BillingPlatformModel = require("./BillingPlatformModel");
