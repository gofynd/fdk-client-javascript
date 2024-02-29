export = Payment;
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {PaymentPlatformValidator.ActivateAndDectivatePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name activateAndDectivatePayout
     * @summary: Activate/Deactivate payout.
     * @description: Enable or disable payout functionality. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/activateAndDectivatePayout/).
     */
    activateAndDectivatePayout({ uniqueTransferNo, body, requestHeaders }?: PaymentPlatformValidator.ActivateAndDectivatePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.DeletePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeletePayoutResponse>} - Success response
     * @name deletePayout
     * @summary: Delete payout.
     * @description: Remove a payout transaction from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deletePayout/).
     */
    deletePayout({ uniqueTransferNo, requestHeaders }?: PaymentPlatformValidator.DeletePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeletePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>}
     *   - Success response
     *
     * @name deleteSubscriptionPaymentMethod
     * @summary: Delete subscription payment method.
     * @description: Remove a payment method from subscription options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deleteSubscriptionPaymentMethod/).
     */
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId, requestHeaders }?: PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>;
    /**
     * @param {PaymentPlatformValidator.GetAllPayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutsResponse>} - Success response
     * @name getAllPayouts
     * @summary: Get all payouts.
     * @description: Retrieve a list of all payout transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAllPayouts/).
     */
    getAllPayouts({ uniqueExternalId, requestHeaders }?: PaymentPlatformValidator.GetAllPayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PayoutsResponse>;
    /**
     * @param {PaymentPlatformValidator.GetSubscriptionConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SubscriptionConfigResponse>} -
     *   Success response
     * @name getSubscriptionConfig
     * @summary: Get subscription config.
     * @description: Retrieve configuration settings for subscriptions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionConfig/).
     */
    getSubscriptionConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.SubscriptionConfigResponse>;
    /**
     * @param {PaymentPlatformValidator.GetSubscriptionPaymentMethodParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>}
     *   - Success response
     *
     * @name getSubscriptionPaymentMethod
     * @summary: Get subscription payment method.
     * @description: Retrieve payment methods for subscriptions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionPaymentMethod/).
     */
    getSubscriptionPaymentMethod({ uniqueExternalId, requestHeaders }?: PaymentPlatformValidator.GetSubscriptionPaymentMethodParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>;
    /**
     * @param {PaymentPlatformValidator.SavePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutResponse>} - Success response
     * @name savePayout
     * @summary: Save payout.
     * @description: Store and process a payout transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/savePayout/).
     */
    savePayout({ body, requestHeaders }?: PaymentPlatformValidator.SavePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.SaveSubscriptionSetupIntentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>}
     *   - Success response
     *
     * @name saveSubscriptionSetupIntent
     * @summary: Save subscription setup intent.
     * @description: Store and process setup intent for subscriptions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/saveSubscriptionSetupIntent/).
     */
    saveSubscriptionSetupIntent({ body, requestHeaders }?: PaymentPlatformValidator.SaveSubscriptionSetupIntentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>;
    /**
     * @param {PaymentPlatformValidator.UpdatePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name updatePayout
     * @summary: Update payout.
     * @description: Modify the details of a payout transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePayout/).
     */
    updatePayout({ uniqueTransferNo, body, requestHeaders }?: PaymentPlatformValidator.UpdatePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.VerifyIfscCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.IfscCodeResponse>} - Success response
     * @name verifyIfscCode
     * @summary: Verify IFSC code.
     * @description: Check the authenticity of an IFSC code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyIfscCode/).
     */
    verifyIfscCode({ ifscCode, requestHeaders }?: PaymentPlatformValidator.VerifyIfscCodeParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.IfscCodeResponse>;
}
import PaymentPlatformValidator = require("./PaymentPlatformValidator");
import PaymentPlatformModel = require("./PaymentPlatformModel");
