export = BillingPublicValidator;
/**
 * @typedef GetStandardPlansParam
 * @property {string} platformType - The type of platform for which plans are requested.
 */
declare class BillingPublicValidator {
    /** @returns {GetStandardPlansParam} */
    static getStandardPlans(): GetStandardPlansParam;
}
declare namespace BillingPublicValidator {
    export { GetStandardPlansParam };
}
type GetStandardPlansParam = {
    /**
     * - The type of platform for which plans are requested.
     */
    platformType: string;
};
