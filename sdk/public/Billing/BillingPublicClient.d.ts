export = Billing;
declare class Billing {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getPlanDetails: string;
        getStandardPlans: string;
        planList: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {BillingPublicValidator.GetPlanDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<BillingPublicModel.PlanDetails>} - Success response
     * @name getPlanDetails
     * @summary: Get plan details
     * @description: Get plan details.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/billing/getPlanDetails/).
     */
    getPlanDetails({ planId, requestHeaders }?: BillingPublicValidator.GetPlanDetailsParam, { responseHeaders }?: object): Promise<BillingPublicModel.PlanDetails>;
    /**
     * @param {BillingPublicValidator.GetStandardPlansParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<BillingPublicModel.DetailList>} - Success response
     * @name getStandardPlans
     * @summary: Get Standard/Public Plans
     * @description: Get Standard/Public Plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/billing/getStandardPlans/).
     */
    getStandardPlans({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPublicModel.DetailList>;
    /**
     * @param {BillingPublicValidator.PlanListParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<BillingPublicModel.PlanList[]>} - Success response
     * @name planList
     * @summary: Get List of all plans
     * @description: Get List of all plans - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/billing/planList/).
     */
    planList({ requestHeaders }?: any, { responseHeaders }?: object): Promise<BillingPublicModel.PlanList[]>;
}
import BillingPublicValidator = require("sdk/output/javascript/code/sdk/public/Billing/BillingPublicValidator");
import BillingPublicModel = require("sdk/output/javascript/code/sdk/public/Billing/BillingPublicModel");
