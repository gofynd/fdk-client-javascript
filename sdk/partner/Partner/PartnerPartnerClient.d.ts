export = Partner;
declare class Partner {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {ExtensionDraftRequest} arg.body
     * @summary: Submit extension for review
     * @description: Use this API to submit the extension for review
     */
    submitExtensionForReview({ extensionId, body }?: {
        extensionId: string;
        body: ExtensionDraftRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {ExtensionUnpublishRequest} arg.body
     * @summary: Submit extension for unpublish
     * @description: Use this API to unpublish the extension
     */
    unpubishExtension({ extensionId, body }?: {
        extensionId: string;
        body: ExtensionUnpublishRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ExtensionCommon} arg.body
     * @summary: Create new extension
     * @description: Use this API to create new extension
     */
    createExtension({ body }?: {
        body: ExtensionCommon;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @summary: Get the details of extension
     * @description: Use this API to get details of extension
     */
    getExtensionById({ extensionId }?: {
        extensionId: string;
    }): Promise<any>;
}
