export = OrderInvoiceEngine;
declare class OrderInvoiceEngine {
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
     * @summary: Get Presigned URL to download labels
     * @description: Use this API to generate Presigned URLs for downloading labels
     */
    getLabelPresignedURL({ uid }?: {
        uid: string;
    }): Promise<any>;
}
