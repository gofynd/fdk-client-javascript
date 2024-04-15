export = BillingPublicValidator;
/**
 * @typedef GetStandardPlansParam
 * @property {string} platform - The type of platform for which plans are requested.
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
    platform: string;
};
