export = PartnerPublicValidator;
/**
 * @typedef GetPanelExtensionDetailsParam
 * @property {string} slug - Slug of the extension
 */
declare class PartnerPublicValidator {
    /** @returns {GetPanelExtensionDetailsParam} */
    static getPanelExtensionDetails(): GetPanelExtensionDetailsParam;
}
declare namespace PartnerPublicValidator {
    export { GetPanelExtensionDetailsParam };
}
type GetPanelExtensionDetailsParam = {
    /**
     * - Slug of the extension
     */
    slug: string;
};
