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
     * @summary: Partial Update Payout
     * @description: Partial Update Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/activateAndDectivatePayout/).
     */
    activateAndDectivatePayout({ uniqueTransferNo, body, requestHeaders }?: PaymentPlatformValidator.ActivateAndDectivatePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.ActivateAndDectivatePayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name activateAndDectivatePayouts
     * @summary: Activate/Deactivate payout.
     * @description: Enable or disable payout functionality. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/activateAndDectivatePayouts/).
     */
    activateAndDectivatePayouts({ body, requestHeaders }?: PaymentPlatformValidator.ActivateAndDectivatePayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.DeletePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeletePayoutResponse>} - Success response
     * @name deletePayout
     * @summary: Delete Payout
     * @description: Delete Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deletePayout/).
     */
    deletePayout({ uniqueTransferNo, requestHeaders }?: PaymentPlatformValidator.DeletePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeletePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.DeletePayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeletePayoutResponse>} - Success response
     * @name deletePayouts
     * @summary: Delete payout.
     * @description: Remove a payout transaction from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deletePayouts/).
     */
    deletePayouts({ uniqueTransferNo, requestHeaders }?: PaymentPlatformValidator.DeletePayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeletePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.GetAllPayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutsResponse>} - Success response
     * @name getAllPayout
     * @summary: Get All Payouts
     * @description: Get All Payouts - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAllPayout/).
     */
    getAllPayout({ uniqueTransferNo, uniqueExternalId, requestHeaders }?: PaymentPlatformValidator.GetAllPayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PayoutsResponse>;
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
     * @param {PaymentPlatformValidator.GetPaymentMethodConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentMethodConfigResponse>} -
     *   Success response
     * @name getPaymentMethodConfig
     * @summary: List Payment Method Configs
     * @description: Get all active List Payment  Method Configs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentMethodConfig/).
     */
    getPaymentMethodConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentMethodConfigResponse>;
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
     * @param {PaymentPlatformValidator.SavePayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutResponse>} - Success response
     * @name savePayouts
     * @summary: Save Payout
     * @description: Save Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/savePayouts/).
     */
    savePayouts({ uniqueTransferNo, body, requestHeaders }?: PaymentPlatformValidator.SavePayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.UpdatePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name updatePayout
     * @summary: Update Payout
     * @description: Update Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePayout/).
     */
    updatePayout({ uniqueTransferNo, body, requestHeaders }?: PaymentPlatformValidator.UpdatePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
    /**
     * @param {PaymentPlatformValidator.UpdatePayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
     * @name updatePayouts
     * @summary: Update payout.
     * @description: Modify the details of a payout transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePayouts/).
     */
    updatePayouts({ body, requestHeaders }?: PaymentPlatformValidator.UpdatePayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutResponse>;
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
import PaymentPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Payment/PaymentPlatformValidator");
import PaymentPlatformModel = require("sdk/output/javascript/code/sdk/platform/Payment/PaymentPlatformModel");
