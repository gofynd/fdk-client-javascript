export = Partner;
declare class Partner {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getPanelExtensionDetails: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Pass the slug of the extension
     * @returns {Promise<ExtensionUsingSlug>} - Success response
     * @summary: Get extension details
     * @description: Use this API to get extension details
     */
    getPanelExtensionDetails({ slug }?: {
        slug: string;
    }): Promise<ExtensionUsingSlug>;
}
