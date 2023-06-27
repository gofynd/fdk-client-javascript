export = Payment;
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {PaymentPlatformValidator.activateAndDectivatePayout} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name activateAndDectivatePayout
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     */
    activateAndDectivatePayout({ uniqueTransferNo, body }?: PaymentPlatformValidator.activateAndDectivatePayout): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.deletePayout} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.DeletePayoutResponse>} - Success response
     * @name deletePayout
     * @summary: Delete Payout
     * @description: Delete Payout
     */
    deletePayout({ uniqueTransferNo }?: PaymentPlatformValidator.deletePayout): Promise<PaymentPlatformModel.DeletePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.deleteSubscriptionPaymentMethod} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>}
     *   - Success response
     *
     * @name deleteSubscriptionPaymentMethod
     * @summary: Delete Subscription Payment Method
     * @description: Uses this api to Delete Subscription Payment Method
     */
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId, }?: PaymentPlatformValidator.deleteSubscriptionPaymentMethod): Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>;
    /**
     * @param {PaymentPlatformValidator.getAllPayouts} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PayoutsResponse>} - Success response
     * @name getAllPayouts
     * @summary: Get All Payouts
     * @description: Get All Payouts
     */
    getAllPayouts({ uniqueExternalId }?: PaymentPlatformValidator.getAllPayouts): Promise<PaymentPlatformModel.PayoutsResponse>;
    /**
     * @param {PaymentPlatformValidator.getSubscriptionConfig} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.SubscriptionConfigResponse>} -
     *   Success response
     * @name getSubscriptionConfig
     * @summary: List Subscription Config
     * @description: Get all  Subscription Config details
     */
    getSubscriptionConfig({}?: any): Promise<PaymentPlatformModel.SubscriptionConfigResponse>;
    /**
     * @param {PaymentPlatformValidator.getSubscriptionPaymentMethod} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>}
     *   - Success response
     *
     * @name getSubscriptionPaymentMethod
     * @summary: List Subscription Payment Method
     * @description: Get all  Subscription  Payment Method
     */
    getSubscriptionPaymentMethod({ uniqueExternalId }?: PaymentPlatformValidator.getSubscriptionPaymentMethod): Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>;
    /**
     * @param {PaymentPlatformValidator.savePayout} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.PayoutResponse>} - Success response
     * @name savePayout
     * @summary: Save Payout
     * @description: Save Payout
     */
    savePayout({ body }?: PaymentPlatformValidator.savePayout): Promise<PaymentPlatformModel.PayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.saveSubscriptionSetupIntent} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>}
     *   - Success response
     *
     * @name saveSubscriptionSetupIntent
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     */
    saveSubscriptionSetupIntent({ body }?: PaymentPlatformValidator.saveSubscriptionSetupIntent): Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>;
    /**
     * @param {PaymentPlatformValidator.updatePayout} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name updatePayout
     * @summary: Update Payout
     * @description: Update Payout
     */
    updatePayout({ uniqueTransferNo, body }?: PaymentPlatformValidator.updatePayout): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.verifyIfscCode} arg - Arg object
     * @returns {Promise<PaymentPlatformModel.IfscCodeResponse>} - Success response
     * @name verifyIfscCode
     * @summary: Ifsc Code Verification
     * @description: Get True/False for correct IFSC Code for adding bank details for refund
     */
    verifyIfscCode({ ifscCode }?: PaymentPlatformValidator.verifyIfscCode): Promise<PaymentPlatformModel.IfscCodeResponse>;
}
import PaymentPlatformValidator = require("./PaymentPlatformValidator");
import PaymentPlatformModel = require("./PaymentPlatformModel");
