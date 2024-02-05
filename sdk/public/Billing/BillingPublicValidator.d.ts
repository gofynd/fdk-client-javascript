export = BillingPublicValidator;
/**
 * @typedef GetPlanDetailsParam
 * @property {string} planId - Plan unique id.
 */
/**
 * @typedef GetStandardPlansParam
 * @property {string} platformType - The type of platform for which plans are requested.
 */
declare class BillingPublicValidator {
    /** @returns {GetPlanDetailsParam} */
    static getPlanDetails(): GetPlanDetailsParam;
    /** @returns {GetStandardPlansParam} */
    static getStandardPlans(): GetStandardPlansParam;
}
declare namespace BillingPublicValidator {
    export { GetPlanDetailsParam, GetStandardPlansParam };
}
type GetPlanDetailsParam = {
    /**
     * - Plan unique id.
     */
    planId: string;
};
type GetStandardPlansParam = {
    /**
     * - The type of platform for which plans are requested.
     */
    platformType: string;
};
