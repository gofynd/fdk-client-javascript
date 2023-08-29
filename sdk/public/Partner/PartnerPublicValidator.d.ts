export = PartnerPublicValidator;
/**
 * @typedef GetPanelExtensionDetailsParam
 * @property {string} slug - Pass the slug of the extension
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
     * - Pass the slug of the extension
     */
    slug: string;
};
