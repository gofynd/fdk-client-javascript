export = BillingPublicValidator;
/**
 * @typedef GetPlanDetailsParam
 * @property {string} planId - Plan unique id.
 */
/**
 * @typedef GetStandardPlansParam
 * @property {string} [platform] - The type of platform for which plans are requested.
 */
/**
 * @typedef GetTenureConfigParam
 * @property {string} countryCode
 */
/** @typedef PlanListParam */
declare class BillingPublicValidator {
    /** @returns {GetPlanDetailsParam} */
    static getPlanDetails(): GetPlanDetailsParam;
    /** @returns {GetStandardPlansParam} */
    static getStandardPlans(): GetStandardPlansParam;
    /** @returns {GetTenureConfigParam} */
    static getTenureConfig(): GetTenureConfigParam;
    /** @returns {PlanListParam} */
    static planList(): any;
}
declare namespace BillingPublicValidator {
    export { GetPlanDetailsParam, GetStandardPlansParam, GetTenureConfigParam, PlanListParam };
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
    platform?: string;
};
type GetTenureConfigParam = {
    countryCode: string;
};
type PlanListParam = any;
