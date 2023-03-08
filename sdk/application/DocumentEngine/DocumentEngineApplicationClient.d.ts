export = DocumentEngine;
declare class DocumentEngine {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getInvoiceByShipmentId: string;
        getCreditNoteByShipmentId: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shiment ID
     * @param {invoiceParameter} [arg.parameters] -
     * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
     * @summary: Get Presigned URL to download Invoice
     * @description: Use this API to generate Presigned URLs for downloading Invoice
     */
    getInvoiceByShipmentId({ shipmentId, parameters }?: {
        shipmentId: string;
        parameters?: invoiceParameter;
    }): Promise<ResponseGetInvoiceShipment>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shiment ID
     * @param {creditNoteParameter} [arg.parameters] -
     * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
     * @summary: Get Presigned URL to download Invoice
     * @description: Use this API to generate Presigned URLs for downloading Invoice
     */
    getCreditNoteByShipmentId({ shipmentId, parameters }?: {
        shipmentId: string;
        parameters?: creditNoteParameter;
    }): Promise<ResponseGetInvoiceShipment>;
}
