export = Payment;
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {UpdatePayoutRequest} arg.body
     * @returns {Promise<UpdatePayoutResponse>} - Success response
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     */
    activateAndDectivatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: UpdatePayoutRequest;
    }): Promise<UpdatePayoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @returns {Promise<DeletePayoutResponse>} - Success response
     * @summary: Delete Payout
     * @description: Delete Payout
     */
    deletePayout({ uniqueTransferNo }?: {
        uniqueTransferNo: string;
    }): Promise<DeletePayoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueExternalId -
     * @param {string} arg.paymentMethodId -
     * @returns {Promise<DeleteSubscriptionPaymentMethodResponse>} - Success response
     * @summary: Delete Subscription Payment Method
     * @description: Uses this api to Delete Subscription Payment Method
     */
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId, }?: {
        uniqueExternalId: string;
        paymentMethodId: string;
    }): Promise<DeleteSubscriptionPaymentMethodResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
     * @returns {Promise<PayoutsResponse>} - Success response
     * @summary: Get All Payouts
     * @description: Get All Payouts
     */
    getAllPayouts({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): Promise<PayoutsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<SubscriptionConfigResponse>} - Success response
     * @summary: List Subscription Config
     * @description: Get all  Subscription Config details
     */
    getSubscriptionConfig({}?: any): Promise<SubscriptionConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uniqueExternalId] - Unique external id
     * @returns {Promise<SubscriptionPaymentMethodResponse>} - Success response
     * @summary: List Subscription Payment Method
     * @description: Get all  Subscription  Payment Method
     */
    getSubscriptionPaymentMethod({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): Promise<SubscriptionPaymentMethodResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PayoutRequest} arg.body
     * @returns {Promise<PayoutResponse>} - Success response
     * @summary: Save Payout
     * @description: Save Payout
     */
    savePayout({ body }?: {
        body: PayoutRequest;
    }): Promise<PayoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SaveSubscriptionSetupIntentRequest} arg.body
     * @returns {Promise<SaveSubscriptionSetupIntentResponse>} - Success response
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     */
    saveSubscriptionSetupIntent({ body }?: {
        body: SaveSubscriptionSetupIntentRequest;
    }): Promise<SaveSubscriptionSetupIntentResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {PayoutRequest} arg.body
     * @returns {Promise<UpdatePayoutResponse>} - Success response
     * @summary: Update Payout
     * @description: Update Payout
     */
    updatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: PayoutRequest;
    }): Promise<UpdatePayoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.ifscCode] -
     * @returns {Promise<IfscCodeResponse>} - Success response
     * @summary: Ifsc Code Verification
     * @description: Get True/False for correct IFSC Code for adding bank details for refund
     */
    verifyIfscCode({ ifscCode }?: {
        ifscCode?: string;
    }): Promise<IfscCodeResponse>;
}
