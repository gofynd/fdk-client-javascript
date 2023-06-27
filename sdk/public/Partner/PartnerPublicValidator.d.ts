export = PartnerPublicValidator;
/** @typedef getOrganizationList */
/**
 * @typedef getPanelExtensionDetails
 * @property {string} slug - Pass the slug of the extension
 */
declare class PartnerPublicValidator {
}
declare namespace PartnerPublicValidator {
    export { getOrganizationList, getPanelExtensionDetails };
}
/** @returns {getOrganizationList} */
declare function getOrganizationList(): any;
type getOrganizationList = any;
/** @returns {getPanelExtensionDetails} */
declare function getPanelExtensionDetails(): getPanelExtensionDetails;
type getPanelExtensionDetails = {
    /**
     * - Pass the slug of the extension
     */
    slug: string;
};
