export = DocumentEngine;
declare class DocumentEngine {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateBulkPackageLabel} arg.body
     * @summary: Generate Labels for Packages
     * @description: Use this API to generate label for Packages
     */
    generateBulkPackageLabel({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateBulkBoxLabel} arg.body
     * @summary: Generate Labels for Boxes which will go inside package
     * @description: Use this API to generate label for Boxes
     */
    generateBulkBoxLabel({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateBulkShipmentLabel} arg.body
     * @summary: Generate Labels for Shipments which contains packaged
     * @description: Use this API to generate label for Shipments
     */
    generateBulkShipmentLabel({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateNoc} arg.body
     * @summary: Generate NOC for Seller having access to a fullfillment center
     * @description: Use this API to generate NOC for Seller
     */
    generateNoc({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - UID given at time of generate request
     * @summary: Get Staus of Label generations
     * @description: Use this API to fetch status of PDF generation of Labels
     */
    getLabelStatus({ uid }?: {
        uid: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - UID given at time of generate request
     * @summary: Get Staus of NOC generation
     * @description: Use this API to fetch status of PDF generation of NOC
     */
    getNocStatus({ uid }?: {
        uid: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InvoiceLabelPresignedRequestBody} arg.body
     * @summary: Get Presigned URL to download PDFs
     * @description: Use this API to generate Presigned URLs for downloading PDFs
     */
    getPresignedURL({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - UID given at time of generate request
     * @summary: Get Presigned URL to download labels
     * @description: Use this API to generate Presigned URLs for downloading labels
     */
    getLabelPresignedURL({ uid }?: {
        uid: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - UID given at time of generate request
     * @summary: Get Presigned URL to download NOC Pdf
     * @description: Use this API to generate Presigned URL for downloading NOC Pdf
     */
    getNocPresignedURL({ uid }?: {
        uid: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId - Batch_id given at time of generate request
     * @summary: Get Status of Bulk Invoice and Label generation
     * @description: Use this API to fetch status of PDF generation of Bulk Invoice and Label
     */
    getBulkShipmentStatus({ batchId }?: {
        batchId: string;
    }): Promise<any>;
}
