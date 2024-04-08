export = BillingPublicValidator;
/**
 * @typedef GetPlanDetailsParam
 * @property {string} planId - Plan unique id.
 */
/** @typedef GetStandardPlansParam */
/** @typedef PlanListParam */
declare class BillingPublicValidator {
    /** @returns {GetPlanDetailsParam} */
    static getPlanDetails(): GetPlanDetailsParam;
    /** @returns {GetStandardPlansParam} */
    static getStandardPlans(): any;
    /** @returns {PlanListParam} */
    static planList(): any;
}
declare namespace BillingPublicValidator {
    export { GetPlanDetailsParam, GetStandardPlansParam, PlanListParam };
}
type GetPlanDetailsParam = {
    /**
     * - Plan unique id.
     */
    planId: string;
};
type GetStandardPlansParam = any;
type PlanListParam = any;
