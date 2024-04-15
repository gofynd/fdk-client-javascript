export = ContentPublicValidator;
/**
 * @typedef GetCredentialsByEntityParam
 * @property {string} entity - Server Type
 */
declare class ContentPublicValidator {
    /** @returns {GetCredentialsByEntityParam} */
    static getCredentialsByEntity(): GetCredentialsByEntityParam;
}
declare namespace ContentPublicValidator {
    export { GetCredentialsByEntityParam };
}
type GetCredentialsByEntityParam = {
    /**
     * - Server Type
     */
    entity: string;
};
