export = Finance;
declare class Finance {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {DownloadCreditDebitNoteRequest} arg.body
     * @returns {Promise<DownloadCreditDebitNoteResponse>} - Success response
     * @summary:
     * @description:
     */
    downloadCreditDebitNote({ body }?: {
        body: DownloadCreditDebitNoteRequest;
    }): Promise<DownloadCreditDebitNoteResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DownloadReport} arg.body
     * @returns {Promise<DownloadReportList>} - Success response
     * @summary:
     * @description:
     */
    downloadReport({ body }?: {
        body: DownloadReport;
    }): Promise<DownloadReportList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateReportRequest} arg.body
     * @returns {Promise<GenerateReportJson>} - Success response
     * @summary:
     * @description:
     */
    generateReport({ body }?: {
        body: GenerateReportRequest;
    }): Promise<GenerateReportJson>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetAffiliate} arg.body
     * @returns {Promise<GetAffiliateResponse>} - Success response
     * @summary:
     * @description:
     */
    getAffiliate({ body }?: {
        body: GetAffiliate;
    }): Promise<GetAffiliateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetEngineRequest} arg.body
     * @returns {Promise<GetEngineResponse>} - Success response
     * @summary:
     * @description:
     */
    getData({ body }?: {
        body: GetEngineRequest;
    }): Promise<GetEngineResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetInvoiceListRequest} arg.body
     * @returns {Promise<GetInvoiceListResponse>} - Success response
     * @summary:
     * @description:
     */
    getInvoiceType({ body }?: {
        body: GetInvoiceListRequest;
    }): Promise<GetInvoiceListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetReasonRequest} arg.body
     * @returns {Promise<GetReasonResponse>} - Success response
     * @summary:
     * @description:
     */
    getReason({ body }?: {
        body: GetReasonRequest;
    }): Promise<GetReasonResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetReportListRequest} arg.body
     * @returns {Promise<GetEngineResponse>} - Success response
     * @summary:
     * @description:
     */
    getReportList({ body }?: {
        body: GetReportListRequest;
    }): Promise<GetEngineResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InvoiceListingRequest} arg.body
     * @returns {Promise<InvoiceListingResponse>} - Success response
     * @summary:
     * @description:
     */
    invoiceListing({ body }?: {
        body: InvoiceListingRequest;
    }): Promise<InvoiceListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InvoicePdfRequest} arg.body
     * @returns {Promise<InvoicePdfResponse>} - Success response
     * @summary:
     * @description:
     */
    invoicePDF({ body }?: {
        body: InvoicePdfRequest;
    }): Promise<InvoicePdfResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentProcessRequest} arg.body
     * @returns {Promise<PaymentProcessResponse>} - Success response
     * @summary:
     * @description:
     */
    paymentProcess({ body }?: {
        body: PaymentProcessRequest;
    }): Promise<PaymentProcessResponse>;
}
