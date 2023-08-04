export = FileStorage;
declare class FileStorage {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        generateBulkPdf: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateShipmentRequestBody} arg.body
     * @returns {Promise<GenerateShipment200>} - Success response
     * @summary: Generate single PDFs for bulk shipments
     * @description: Generate single PDFs for bulk shipments for invoices, label's and Delivery challan
     */
    generateBulkPdf({ body }?: {
        body: GenerateShipmentRequestBody;
    }): Promise<GenerateShipment200>;
    /**
     * @param data
     * @param {string} file_name
     * @param {string} content_type
     * @param {string} namespace
     * @param {number} size
     * @param {number} tags
     */
    upload({ data, file_name, content_type, namespace, size, tags, }?: {
        data: any;
        file_name: any;
        content_type: any;
        namespace: any;
        size: any;
        tags: any;
    }): Promise<any>;
}
