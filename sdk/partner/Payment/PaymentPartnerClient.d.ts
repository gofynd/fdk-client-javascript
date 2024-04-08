export = Payment;
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {PaymentPartnerValidator.GetPaymentconfigParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PaymentConfigResponse>} - Success response
     * @name getPaymentconfig
     * @summary: Fetch payment configs.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/getPaymentconfig/).
     */
    getPaymentconfig({ requestHeaders }?: PaymentPartnerValidator.GetPaymentconfigParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PaymentConfigResponse>;
    /**
     * @param {PaymentPartnerValidator.GetPayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PayoutResponse>} - Success response
     * @name getPayout
     * @summary: Fetch payment gatewats.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/getPayout/).
     */
    getPayout({ uniqueExternalId, requestHeaders }?: PaymentPartnerValidator.GetPayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PayoutResponse>;
    /**
     * @param {PaymentPartnerValidator.PostPayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
     * @name postPayout
     * @summary: save payout details.
     * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/postPayout/).
     */
    postPayout({ body, requestHeaders }?: PaymentPartnerValidator.PostPayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutResponse>;
    /**
     * @param {PaymentPartnerValidator.UpdatePayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
     * @name updatePayout
     * @summary: save payout details.
     * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/updatePayout/).
     */
    updatePayout({ body, requestHeaders }?: PaymentPartnerValidator.UpdatePayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutResponse>;
    /**
     * @param {PaymentPartnerValidator.PutPayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
     * @name putPayout
     * @summary: update payout details.
     * @description: update payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/putPayout/).
     */
    putPayout({ body, requestHeaders }?: PaymentPartnerValidator.PutPayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutResponse>;
    /**
     * @param {PaymentPartnerValidator.DeletePayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PayoutResponse>} - Success response
     * @name deletePayout
     * @summary: Fetch payment gatewats.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/deletePayout/).
     */
    deletePayout({ uniqueExternalId, requestHeaders }?: PaymentPartnerValidator.DeletePayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PayoutResponse>;
    /**
     * @param {PaymentPartnerValidator.GetPayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PayoutResponse>} - Success response
     * @name getPayouts
     * @summary: Fetch payment gatewats.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/getPayouts/).
     */
    getPayouts({ uniqueTransferNo, uniqueExternalId, requestHeaders }?: PaymentPartnerValidator.GetPayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PayoutResponse>;
    /**
     * @param {PaymentPartnerValidator.PostPayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
     * @name postPayouts
     * @summary: save payout details.
     * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/postPayouts/).
     */
    postPayouts({ uniqueTransferNo, body, requestHeaders }?: PaymentPartnerValidator.PostPayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutResponse>;
    /**
     * @param {PaymentPartnerValidator.UpdatePayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
     * @name updatePayouts
     * @summary: save payout details.
     * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/updatePayouts/).
     */
    updatePayouts({ uniqueTransferNo, body, requestHeaders }?: PaymentPartnerValidator.UpdatePayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutResponse>;
    /**
     * @param {PaymentPartnerValidator.PutPayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutResponse>} - Success response
     * @name putPayouts
     * @summary: update payout details.
     * @description: update payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/putPayouts/).
     */
    putPayouts({ uniqueTransferNo, body, requestHeaders }?: PaymentPartnerValidator.PutPayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutResponse>;
    /**
     * @param {PaymentPartnerValidator.DeletePayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PayoutResponse>} - Success response
     * @name deletePayouts
     * @summary: Fetch payment gatewats.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/deletePayouts/).
     */
    deletePayouts({ uniqueTransferNo, requestHeaders }?: PaymentPartnerValidator.DeletePayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PayoutResponse>;
}
import PaymentPartnerModel = require("sdk/output/javascript/code/sdk/partner/Payment/PaymentPartnerModel");
