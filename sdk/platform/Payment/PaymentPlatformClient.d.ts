export = Payment;
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {UpdatePayoutRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UpdatePayoutResponse>} - Success response
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     */
    activateAndDectivatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: UpdatePayoutRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<UpdatePayoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DeletePayoutResponse>} - Success response
     * @summary: Delete Payout
     * @description: Delete Payout
     */
    deletePayout({ uniqueTransferNo }?: {
        uniqueTransferNo: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DeletePayoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueExternalId -
     * @param {string} arg.paymentMethodId -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DeleteSubscriptionPaymentMethodResponse>} - Success response
     * @summary: Delete Subscription Payment Method
     * @description: Uses this api to Delete Subscription Payment Method
     */
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId }?: {
        uniqueExternalId: string;
        paymentMethodId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DeleteSubscriptionPaymentMethodResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PayoutsResponse>} - Success response
     * @summary: Get All Payouts
     * @description: Get All Payouts
     */
    getAllPayouts({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PayoutsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SubscriptionConfigResponse>} - Success response
     * @summary: List Subscription Config
     * @description: Get all  Subscription Config details
     */
    getSubscriptionConfig({ headers }?: any): Promise<SubscriptionConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uniqueExternalId] - Unique external id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SubscriptionPaymentMethodResponse>} - Success response
     * @summary: List Subscription Payment Method
     * @description: Get all  Subscription  Payment Method
     */
    getSubscriptionPaymentMethod({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SubscriptionPaymentMethodResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PayoutRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PayoutResponse>} - Success response
     * @summary: Save Payout
     * @description: Save Payout
     */
    savePayout({ body }?: {
        body: PayoutRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PayoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SaveSubscriptionSetupIntentRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SaveSubscriptionSetupIntentResponse>} - Success response
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     */
    saveSubscriptionSetupIntent({ body }?: {
        body: SaveSubscriptionSetupIntentRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SaveSubscriptionSetupIntentResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {PayoutRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UpdatePayoutResponse>} - Success response
     * @summary: Update Payout
     * @description: Update Payout
     */
    updatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: PayoutRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<UpdatePayoutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.ifscCode] -
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<IfscCodeResponse>} - Success response
     * @summary: Ifsc Code Verification
     * @description: Get True/False for correct IFSC Code for adding bank details for refund
     */
    verifyIfscCode({ ifscCode }?: {
        ifscCode?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<IfscCodeResponse>;
}
