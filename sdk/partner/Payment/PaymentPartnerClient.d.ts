export = Payment;
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {PaymentPartnerValidator.GetPaymentconfigParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PaymentConfigDetails>} - Success response
     * @name getPaymentconfig
     * @summary: Fetch payment configs.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/getPaymentconfig/).
     */
    getPaymentconfig({ requestHeaders }?: PaymentPartnerValidator.GetPaymentconfigParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PaymentConfigDetails>;
    /**
     * @param {PaymentPartnerValidator.GetPayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PayoutDetails>} - Success response
     * @name getPayout
     * @summary: Fetch payment gatewats.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/getPayout/).
     */
    getPayout({ uniqueExternalId, requestHeaders }?: PaymentPartnerValidator.GetPayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PayoutDetails>;
    /**
     * @param {PaymentPartnerValidator.PostPayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutDetails>} - Success response
     * @name postPayout
     * @summary: save payout details.
     * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/postPayout/).
     */
    postPayout({ body, requestHeaders }?: PaymentPartnerValidator.PostPayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutDetails>;
    /**
     * @param {PaymentPartnerValidator.UpdatePayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutDetails>} - Success response
     * @name updatePayout
     * @summary: save payout details.
     * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/updatePayout/).
     */
    updatePayout({ body, requestHeaders }?: PaymentPartnerValidator.UpdatePayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutDetails>;
    /**
     * @param {PaymentPartnerValidator.PutPayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutDetails>} - Success response
     * @name putPayout
     * @summary: update payout details.
     * @description: update payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/putPayout/).
     */
    putPayout({ body, requestHeaders }?: PaymentPartnerValidator.PutPayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutDetails>;
    /**
     * @param {PaymentPartnerValidator.DeletePayoutParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PayoutDetails>} - Success response
     * @name deletePayout
     * @summary: Fetch payment gatewats.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/deletePayout/).
     */
    deletePayout({ uniqueExternalId, requestHeaders }?: PaymentPartnerValidator.DeletePayoutParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PayoutDetails>;
    /**
     * @param {PaymentPartnerValidator.GetPayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PayoutDetails>} - Success response
     * @name getPayouts
     * @summary: Fetch payment gatewats.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/getPayouts/).
     */
    getPayouts({ uniqueTransferNo, uniqueExternalId, requestHeaders }?: PaymentPartnerValidator.GetPayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PayoutDetails>;
    /**
     * @param {PaymentPartnerValidator.PostPayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutDetails>} - Success response
     * @name postPayouts
     * @summary: save payout details.
     * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/postPayouts/).
     */
    postPayouts({ uniqueTransferNo, body, requestHeaders }?: PaymentPartnerValidator.PostPayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutDetails>;
    /**
     * @param {PaymentPartnerValidator.UpdatePayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutDetails>} - Success response
     * @name updatePayouts
     * @summary: save payout details.
     * @description: save payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/updatePayouts/).
     */
    updatePayouts({ uniqueTransferNo, body, requestHeaders }?: PaymentPartnerValidator.UpdatePayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutDetails>;
    /**
     * @param {PaymentPartnerValidator.PutPayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PostPayoutDetails>} - Success response
     * @name putPayouts
     * @summary: update payout details.
     * @description: update payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/putPayouts/).
     */
    putPayouts({ uniqueTransferNo, body, requestHeaders }?: PaymentPartnerValidator.PutPayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PostPayoutDetails>;
    /**
     * @param {PaymentPartnerValidator.DeletePayoutsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<PaymentPartnerModel.PayoutDetails>} - Success response
     * @name deletePayouts
     * @summary: Fetch payment gatewats.
     * @description: Get partner Payout details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/payment/deletePayouts/).
     */
    deletePayouts({ uniqueTransferNo, requestHeaders }?: PaymentPartnerValidator.DeletePayoutsParam, { responseHeaders }?: object): Promise<PaymentPartnerModel.PayoutDetails>;
}
import PaymentPartnerModel = require("./PaymentPartnerModel");
