export = PartnerPublicValidator;
/** @typedef GetOrganizationListParam */
/**
 * @typedef GetPanelExtensionDetailsParam
 * @property {string} slug - Pass the slug of the extension
 */
declare class PartnerPublicValidator {
    /** @returns {GetOrganizationListParam} */
    static getOrganizationList(): any;
    /** @returns {GetPanelExtensionDetailsParam} */
    static getPanelExtensionDetails(): GetPanelExtensionDetailsParam;
}
declare namespace PartnerPublicValidator {
    export { GetOrganizationListParam, GetPanelExtensionDetailsParam };
}
type GetPanelExtensionDetailsParam = {
    /**
     * - Pass the slug of the extension
     */
    slug: string;
};
type GetOrganizationListParam = any;
