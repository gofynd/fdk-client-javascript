export = DocumentEngine;
declare class DocumentEngine {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateBulkBoxLabel} arg.body
     * @returns {Promise<SuccessResponseGenerateBulk>} - Success response
     * @summary: Generate Labels for Boxes which will go inside package
     * @description: Use this API to generate label for Boxes
     */
    generateBulkBoxLabel({ body }?: {
        body: GenerateBulkBoxLabel;
    }): Promise<SuccessResponseGenerateBulk>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateBulkPackageLabel} arg.body
     * @returns {Promise<SuccessResponseGenerateBulk>} - Success response
     * @summary: Generate Labels for Packages
     * @description: Use this API to generate label for Packages
     */
    generateBulkPackageLabel({ body }?: {
        body: GenerateBulkPackageLabel;
    }): Promise<SuccessResponseGenerateBulk>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateBulkShipmentLabel} arg.body
     * @returns {Promise<SuccessResponseGenerateBulk>} - Success response
     * @summary: Generate Labels for Shipments which contains packaged
     * @description: Use this API to generate label for Shipments
     */
    generateBulkShipmentLabel({ body }?: {
        body: GenerateBulkShipmentLabel;
    }): Promise<SuccessResponseGenerateBulk>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateNoc} arg.body
     * @returns {Promise<SuccessResponseGenerateBulk>} - Success response
     * @summary: Generate NOC for Seller having access to a fullfillment center
     * @description: Use this API to generate NOC for Seller
     */
    generateNoc({ body }?: {
        body: GenerateNoc;
    }): Promise<SuccessResponseGenerateBulk>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - UID given at time of generate request
     * @returns {Promise<SignedSuccessResponse>} - Success response
     * @summary: Get Presigned URL to download labels
     * @description: Use this API to generate Presigned URLs for downloading labels
     */
    getLabelPresignedURL({ uid }?: {
        uid: string;
    }): Promise<SignedSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - UID given at time of generate request
     * @returns {Promise<StatusSuccessResponse>} - Success response
     * @summary: Get Staus of Label generations
     * @description: Use this API to fetch status of PDF generation of Labels
     */
    getLabelStatus({ uid }?: {
        uid: string;
    }): Promise<StatusSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - UID given at time of generate request
     * @returns {Promise<SignedSuccessResponse>} - Success response
     * @summary: Get Presigned URL to download NOC Pdf
     * @description: Use this API to generate Presigned URL for downloading NOC Pdf
     */
    getNocPresignedURL({ uid }?: {
        uid: string;
    }): Promise<SignedSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - UID given at time of generate request
     * @returns {Promise<StatusSuccessResponse>} - Success response
     * @summary: Get Staus of NOC generation
     * @description: Use this API to fetch status of PDF generation of NOC
     */
    getNocStatus({ uid }?: {
        uid: string;
    }): Promise<StatusSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InvoiceLabelPresignedRequestBody} arg.body
     * @returns {Promise<SignedSuccessResponse>} - Success response
     * @summary: Get Presigned URL to download PDFs
     * @description: Use this API to generate Presigned URLs for downloading PDFs
     */
    getPresignedURL({ body }?: {
        body: InvoiceLabelPresignedRequestBody;
    }): Promise<SignedSuccessResponse>;
}
