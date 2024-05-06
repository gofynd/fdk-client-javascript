export = Billing;
declare class Billing {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getStandardPlans: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {BillingPublicValidator.GetStandardPlansParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<BillingPublicModel.DetailList>} - Success response
     * @name getStandardPlans
     * @summary: Get Standard/Public Plans
     * @description: Get Standard/Public Plans.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/billing/getStandardPlans/).
     */
    getStandardPlans({ platform, requestHeaders }?: BillingPublicValidator.GetStandardPlansParam, { responseHeaders }?: object): Promise<BillingPublicModel.DetailList>;
}
import BillingPublicValidator = require("sdk/output/javascript/code/sdk/public/Billing/BillingPublicValidator");
import BillingPublicModel = require("sdk/output/javascript/code/sdk/public/Billing/BillingPublicModel");
