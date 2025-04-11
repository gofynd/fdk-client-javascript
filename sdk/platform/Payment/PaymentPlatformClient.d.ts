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
     * @param {PaymentPlatformValidator.ActivateAndDectivatePayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutDetails>} - Success response
     * @name activateAndDectivatePayouts
     * @summary: Activate/Deactivate payout.
     * @description: Enable or disable payout functionality. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/activateAndDectivatePayouts/).
     */
    activateAndDectivatePayouts({ body, requestHeaders }?: PaymentPlatformValidator.ActivateAndDectivatePayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.DeletePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeletePayoutDetails>} - Success response
     * @name deletePayout
     * @summary: Delete Payout
     * @description: Delete Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deletePayout/).
     */
    deletePayout({ uniqueTransferNo, requestHeaders }?: PaymentPlatformValidator.DeletePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeletePayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.DeletePayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.DeletePayoutDetails>} - Success response
     * @name deletePayouts
     * @summary: Delete payout.
     * @description: Remove a payout transaction from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deletePayouts/).
     */
    deletePayouts({ uniqueTransferNo, requestHeaders }?: PaymentPlatformValidator.DeletePayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.DeletePayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.GetAllPayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutsDetails>} - Success response
     * @name getAllPayout
     * @summary: Get All Payouts
     * @description: Get All Payouts - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAllPayout/).
     */
    getAllPayout({ uniqueTransferNo, uniqueExternalId, requestHeaders }?: PaymentPlatformValidator.GetAllPayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PayoutsDetails>;
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
     * @param {PaymentPlatformValidator.GetPaymentMethodConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PaymentMethodConfigDetails>} -
     *   Success response
     * @name getPaymentMethodConfig
     * @summary: List Payment Method Configs
     * @description: Get all active List Payment  Method Configs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentMethodConfig/).
     */
    getPaymentMethodConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<PaymentPlatformModel.PaymentMethodConfigDetails>;
    /**
     * @param {PaymentPlatformValidator.SavePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutDetails>} - Success response
     * @name savePayout
     * @summary: Save payout.
     * @description: Store and process a payout transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/savePayout/).
     */
    savePayout({ body, requestHeaders }?: PaymentPlatformValidator.SavePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.SavePayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.PayoutDetails>} - Success response
     * @name savePayouts
     * @summary: Save Payout
     * @description: Save Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/savePayouts/).
     */
    savePayouts({ uniqueTransferNo, body, requestHeaders }?: PaymentPlatformValidator.SavePayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.PayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.UpdatePayoutParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutDetails>} - Success response
     * @name updatePayout
     * @summary: Update Payout
     * @description: Update Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePayout/).
     */
    updatePayout({ uniqueTransferNo, body, requestHeaders }?: PaymentPlatformValidator.UpdatePayoutParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.UpdatePayoutsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.UpdatePayoutDetails>} - Success response
     * @name updatePayouts
     * @summary: Update payout.
     * @description: Modify the details of a payout transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePayouts/).
     */
    updatePayouts({ body, requestHeaders }?: PaymentPlatformValidator.UpdatePayoutsParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.UpdatePayoutDetails>;
    /**
     * @param {PaymentPlatformValidator.VerifyIfscCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PaymentPlatformModel.IfscCodeDetails>} - Success response
     * @name verifyIfscCode
     * @summary: Verify IFSC code.
     * @description: Checks the validity of the provided IFSC code and returns bank details if valid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyIfscCode/).
     */
    verifyIfscCode({ ifscCode, requestHeaders }?: PaymentPlatformValidator.VerifyIfscCodeParam, { responseHeaders }?: object): Promise<PaymentPlatformModel.IfscCodeDetails>;
}
import PaymentPlatformValidator = require("./PaymentPlatformValidator");
import PaymentPlatformModel = require("./PaymentPlatformModel");
