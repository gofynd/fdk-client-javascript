export = Payment;
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {PaymentPlatformValidator.ActivateAndDectivatePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutDetails>} - Success response
     * @name activateAndDectivatePayout
     * @summary: Activate/Deactivate payout
     * @description: Enable or disable payout functionality. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/activateAndDectivatePayout/).
     */
    activateAndDectivatePayout({ uniqueTransferNo, body, requestHeaders }?: PaymentPlatformValidator.ActivateAndDectivatePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.DeletePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeletePayoutDetails>} - Success response
     * @name deletePayout
     * @summary: Delete payout
     * @description: Remove a payout transaction from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deletePayout/).
     */
    deletePayout({ uniqueTransferNo, requestHeaders }?: PaymentPlatformValidator.DeletePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeletePayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodDetails>}
     *   - Success response
     *
     * @name deleteSubscriptionPaymentMethod
     * @summary: Delete subscription payment method
     * @description: Remove a payment method from subscription options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deleteSubscriptionPaymentMethod/).
     */
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId, requestHeaders }?: PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodDetails>;
    /**
     * @param {PaymentPlatformValidator.GetAllPayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutsDetails>} - Success response
     * @name getAllPayouts
     * @summary: List payouts
     * @description: Retrieve a list of all payout transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAllPayouts/).
     */
    getAllPayouts({ uniqueExternalId, requestHeaders }?: PaymentPlatformValidator.GetAllPayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PayoutsDetails>;
    /**
     * @param {PaymentPlatformValidator.GetSubscriptionConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SubscriptionConfigDetails>} -
     *   Success response
     * @name getSubscriptionConfig
     * @summary: Get subscription config
     * @description: Retrieve configuration settings for subscriptions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionConfig/).
     */
    getSubscriptionConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.SubscriptionConfigDetails>;
    /**
     * @param {PaymentPlatformValidator.GetSubscriptionPaymentMethodParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SubscriptionPaymentMethodDetails>}
     *   - Success response
     *
     * @name getSubscriptionPaymentMethod
     * @summary: Get subscription payment method
     * @description: Retrieve payment methods for subscriptions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionPaymentMethod/).
     */
    getSubscriptionPaymentMethod({ uniqueExternalId, requestHeaders }?: PaymentPlatformValidator.GetSubscriptionPaymentMethodParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.SubscriptionPaymentMethodDetails>;
    /**
     * @param {PaymentPlatformValidator.SavePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutDetails>} - Success response
     * @name savePayout
     * @summary: Save payout
     * @description: Store and process a payout transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/savePayout/).
     */
    savePayout({ body, requestHeaders }?: PaymentPlatformValidator.SavePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.SaveSubscriptionSetupIntentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentDetails>}
     *   - Success response
     *
     * @name saveSubscriptionSetupIntent
     * @summary: Save subscription setup intent
     * @description: Store and process setup intent for subscriptions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/saveSubscriptionSetupIntent/).
     */
    saveSubscriptionSetupIntent({ body, requestHeaders }?: PaymentPlatformValidator.SaveSubscriptionSetupIntentParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentDetails>;
    /**
     * @param {PaymentPlatformValidator.UpdatePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutDetails>} - Success response
     * @name updatePayout
     * @summary: Update payout
     * @description: Modify the details of a payout transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePayout/).
     */
    updatePayout({ uniqueTransferNo, body, requestHeaders }?: PaymentPlatformValidator.UpdatePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.VerifyIfscCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.IfscCodeDetails>} - Success response
     * @name verifyIfscCode
     * @summary: Verify IFSC code
     * @description: Checks the validity of the provided IFSC code and returns bank details if valid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyIfscCode/).
     */
    verifyIfscCode({ ifscCode, requestHeaders }?: PaymentPlatformValidator.VerifyIfscCodeParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.IfscCodeDetails>;
}
import PaymentPlatformValidator = require("./PaymentPlatformValidator");
import PaymentPlatformModel = require("./PaymentPlatformModel");
