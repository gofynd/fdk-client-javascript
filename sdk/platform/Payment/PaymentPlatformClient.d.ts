export = Payment;
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {PaymentPlatformValidator.ActivateAndDectivatePayoutParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name activateAndDectivatePayout
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     */
    activateAndDectivatePayout({ uniqueTransferNo, body }?: PaymentPlatformValidator.ActivateAndDectivatePayoutParam): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.DeletePayoutParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.DeletePayoutResponse>} - Success response
     * @name deletePayout
     * @summary: Delete Payout
     * @description: Delete Payout
     */
    deletePayout({ uniqueTransferNo }?: PaymentPlatformValidator.DeletePayoutParam): Promise<PaymentPlatformModel.DeletePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>}
     *   - Success response
     *
     * @name deleteSubscriptionPaymentMethod
     * @summary: Delete Subscription Payment Method
     * @description: Uses this api to Delete Subscription Payment Method
     */
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId, }?: PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam): Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>;
    /**
     * @param {PaymentPlatformValidator.GetAllPayoutsParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PayoutsResponse>} - Success response
     * @name getAllPayouts
     * @summary: Get All Payouts
     * @description: Get All Payouts
     */
    getAllPayouts({ uniqueExternalId }?: PaymentPlatformValidator.GetAllPayoutsParam): Promise<PaymentPlatformModel.PayoutsResponse>;
    /**
     * @param {PaymentPlatformValidator.GetSubscriptionConfigParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.SubscriptionConfigResponse>} -
     *   Success response
     * @name getSubscriptionConfig
     * @summary: List Subscription Config
     * @description: Get all  Subscription Config details
     */
    getSubscriptionConfig({}?: any): Promise<PaymentPlatformModel.SubscriptionConfigResponse>;
    /**
     * @param {PaymentPlatformValidator.GetSubscriptionPaymentMethodParam} arg
     *   - Arg object
     *
     * @returns {Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>}
     *   - Success response
     *
     * @name getSubscriptionPaymentMethod
     * @summary: List Subscription Payment Method
     * @description: Get all  Subscription  Payment Method
     */
    getSubscriptionPaymentMethod({ uniqueExternalId }?: PaymentPlatformValidator.GetSubscriptionPaymentMethodParam): Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>;
    /**
     * @param {PaymentPlatformValidator.SavePayoutParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PayoutResponse>} - Success response
     * @name savePayout
     * @summary: Save Payout
     * @description: Save Payout
     */
    savePayout({ body }?: PaymentPlatformValidator.SavePayoutParam): Promise<PaymentPlatformModel.PayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.SaveSubscriptionSetupIntentParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>}
     *   - Success response
     *
     * @name saveSubscriptionSetupIntent
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     */
    saveSubscriptionSetupIntent({ body }?: PaymentPlatformValidator.SaveSubscriptionSetupIntentParam): Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>;
    /**
     * @param {PaymentPlatformValidator.UpdatePayoutParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name updatePayout
     * @summary: Update Payout
     * @description: Update Payout
     */
    updatePayout({ uniqueTransferNo, body }?: PaymentPlatformValidator.UpdatePayoutParam): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.VerifyIfscCodeParam} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.IfscCodeResponse>} - Success response
     * @name verifyIfscCode
     * @summary: Ifsc Code Verification
     * @description: Get True/False for correct IFSC Code for adding bank details for refund
     */
    verifyIfscCode({ ifscCode }?: PaymentPlatformValidator.VerifyIfscCodeParam): Promise<PaymentPlatformModel.IfscCodeResponse>;
}
import PaymentPlatformValidator = require("./PaymentPlatformValidator");
import PaymentPlatformModel = require("./PaymentPlatformModel");
