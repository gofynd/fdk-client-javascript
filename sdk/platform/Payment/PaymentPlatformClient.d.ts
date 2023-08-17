export = Payment;
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {PaymentPlatformValidator.ActivateAndDectivatePayoutParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name activateAndDectivatePayout
     * @summary: Partial Update Payout
     * @description: Partial Update Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/activateAndDectivatePayout/).
     */
    activateAndDectivatePayout({ uniqueTransferNo, body }?: PaymentPlatformValidator.ActivateAndDectivatePayoutParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.DeletePayoutParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeletePayoutResponse>} - Success response
     * @name deletePayout
     * @summary: Delete Payout
     * @description: Delete Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deletePayout/).
     */
    deletePayout({ uniqueTransferNo }?: PaymentPlatformValidator.DeletePayoutParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentPlatformModel.DeletePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>}
     *   - Success response
     *
     * @name deleteSubscriptionPaymentMethod
     * @summary: Delete Subscription Payment Method
     * @description: Uses this api to Delete Subscription Payment Method - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deleteSubscriptionPaymentMethod/).
     */
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId }?: PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>;
    /**
     * @param {PaymentPlatformValidator.GetAllPayoutsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutsResponse>} - Success response
     * @name getAllPayouts
     * @summary: Get All Payouts
     * @description: Get All Payouts - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAllPayouts/).
     */
    getAllPayouts({ uniqueExternalId }?: PaymentPlatformValidator.GetAllPayoutsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentPlatformModel.PayoutsResponse>;
    /**
     * @param {PaymentPlatformValidator.GetSubscriptionConfigParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SubscriptionConfigResponse>} -
     *   Success response
     * @name getSubscriptionConfig
     * @summary: List Subscription Config
     * @description: Get all  Subscription Config details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionConfig/).
     */
    getSubscriptionConfig({ headers }?: any): Promise<PaymentPlatformModel.SubscriptionConfigResponse>;
    /**
     * @param {PaymentPlatformValidator.GetSubscriptionPaymentMethodParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>}
     *   - Success response
     *
     * @name getSubscriptionPaymentMethod
     * @summary: List Subscription Payment Method
     * @description: Get all  Subscription  Payment Method - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionPaymentMethod/).
     */
    getSubscriptionPaymentMethod({ uniqueExternalId }?: PaymentPlatformValidator.GetSubscriptionPaymentMethodParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>;
    /**
     * @param {PaymentPlatformValidator.SavePayoutParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutResponse>} - Success response
     * @name savePayout
     * @summary: Save Payout
     * @description: Save Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/savePayout/).
     */
    savePayout({ body }?: PaymentPlatformValidator.SavePayoutParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentPlatformModel.PayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.SaveSubscriptionSetupIntentParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>}
     *   - Success response
     *
     * @name saveSubscriptionSetupIntent
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/saveSubscriptionSetupIntent/).
     */
    saveSubscriptionSetupIntent({ body }?: PaymentPlatformValidator.SaveSubscriptionSetupIntentParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>;
    /**
     * @param {PaymentPlatformValidator.UpdatePayoutParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name updatePayout
     * @summary: Update Payout
     * @description: Update Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePayout/).
     */
    updatePayout({ uniqueTransferNo, body }?: PaymentPlatformValidator.UpdatePayoutParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.VerifyIfscCodeParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.IfscCodeResponse>} - Success response
     * @name verifyIfscCode
     * @summary: Ifsc Code Verification
     * @description: Get True/False for correct IFSC Code for adding bank details for refund - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyIfscCode/).
     */
    verifyIfscCode({ ifscCode }?: PaymentPlatformValidator.VerifyIfscCodeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PaymentPlatformModel.IfscCodeResponse>;
}
import PaymentPlatformValidator = require("./PaymentPlatformValidator");
import PaymentPlatformModel = require("./PaymentPlatformModel");
