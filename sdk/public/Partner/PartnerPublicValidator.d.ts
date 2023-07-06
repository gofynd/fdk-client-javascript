export = PartnerPublicValidator;
/** @typedef GetOrganizationListParam */
/**
 * @typedef GetPanelExtensionDetailsParam
 * @property {string} slug - Pass the slug of the extension
 */
declare class PartnerPublicValidator {
    /** @returns {getOrganizationList} */
    static getOrganizationList(): getOrganizationList;
    /** @returns {getPanelExtensionDetails} */
    static getPanelExtensionDetails(): getPanelExtensionDetails;
}
declare namespace PartnerPublicValidator {
    export { GetOrganizationListParam, GetPanelExtensionDetailsParam };
}
type GetOrganizationListParam = any;
type GetPanelExtensionDetailsParam = {
    /**
     * - Pass the slug of the extension
     */
    slug: string;
};
