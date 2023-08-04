export = Finance;
declare class Finance {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.filterKey - Gives display name for channel.
     * @returns {Promise<ChannelDisplayNameResponse>} - Success response
     * @summary: Provide channel display name dict.
     * @description: Provide channel display name dict.
     */
    channelDisplayName({ filterKey }?: {
        filterKey: string;
    }): Promise<ChannelDisplayNameResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateSellerCreditNoteConfigRequest} arg.body
     * @returns {Promise<CreateSellerCreditNoteConfigResponse>} - Success response
     * @summary: Creates credit note config.
     * @description: Creates credit note config.
     */
    createSellerCreditNoteConfig({ body }?: {
        body: CreateSellerCreditNoteConfigRequest;
    }): Promise<CreateSellerCreditNoteConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreditNoteDetailsRequest} arg.body
     * @returns {Promise<CreditNoteDetailsResponse>} - Success response
     * @summary: Gives credit note details.
     * @description: Gives credit note details.
     */
    creditNoteDetails({ body }?: {
        body: CreditNoteDetailsRequest;
    }): Promise<CreditNoteDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreditlineDataPlatformRequest} arg.body
     * @returns {Promise<CreditlineDataPlatformResponse>} - Success response
     * @summary: Used to fetch creditline data.
     * @description: Used to fetch creditline data.
     */
    creditlineDataplatform({ body }?: {
        body: CreditlineDataPlatformRequest;
    }): Promise<CreditlineDataPlatformResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DeleteConfigRequest} arg.body
     * @returns {Promise<DeleteConfigResponse>} - Success response
     * @summary: Deletes credit note config.
     * @description: Deletes credit note config.
     */
    deleteConfig({ body }?: {
        body: DeleteConfigRequest;
    }): Promise<DeleteConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DownloadCreditDebitNoteRequest} arg.body
     * @returns {Promise<DownloadCreditDebitNoteResponse>} - Success response
     * @summary: Download credit debit note pdf.
     * @description: Download credit debit note pdf.
     */
    downloadCreditDebitNote({ body }?: {
        body: DownloadCreditDebitNoteRequest;
    }): Promise<DownloadCreditDebitNoteResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DownloadReport} arg.body
     * @returns {Promise<DownloadReportList>} - Success response
     * @summary: Gives list of all downloaded reports.
     * @description: Gives list of all downloaded reports.
     */
    downloadReport({ body }?: {
        body: DownloadReport;
    }): Promise<DownloadReportList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DownloadReportCustomerCnRequest} arg.body
     * @returns {Promise<DownloadReportCustomerCnResponse>} - Success response
     * @summary: Gives list of downloaded reports.
     * @description: Gives list of downloaded reports.
     */
    downloadReportCustomerCn({ body }?: {
        body: DownloadReportCustomerCnRequest;
    }): Promise<DownloadReportCustomerCnResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateReportRequest} arg.body
     * @returns {Promise<GenerateReportJson>} - Success response
     * @summary: Generate finance reports.
     * @description: Generate finance reports.
     */
    generateReport({ body }?: {
        body: GenerateReportRequest;
    }): Promise<GenerateReportJson>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GenerateReportCustomerCnRequest} arg.body
     * @returns {Promise<GenerateReportCustomerCnResponse>} - Success response
     * @summary: Generate Credit Note report and gives Note details.
     * @description: Generate Credit Note report and gives Note details.
     */
    generateReportCustomerCn({ body }?: {
        body: GenerateReportCustomerCnRequest;
    }): Promise<GenerateReportCustomerCnResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetAffiliate} arg.body
     * @returns {Promise<GetAffiliateResponse>} - Success response
     * @summary: Gives list of affiliates for company.
     * @description: Gives list of affiliates for company.
     */
    getAffiliate({ body }?: {
        body: GetAffiliate;
    }): Promise<GetAffiliateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetCnConfigRequest} arg.body
     * @returns {Promise<GetCnConfigResponse>} - Success response
     * @summary: Gives credit note config.
     * @description: Gives credit note config.
     */
    getCnConfig({ body }?: {
        body: GetCnConfigRequest;
    }): Promise<GetCnConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetCustomerCreditBalanceRequest} arg.body
     * @returns {Promise<GetCustomerCreditBalanceResponse>} - Success response
     * @summary: Gives customer credit balance.
     * @description: Gives customer credit balance.
     */
    getCustomerCreditBalance({ body }?: {
        body: GetCustomerCreditBalanceRequest;
    }): Promise<GetCustomerCreditBalanceResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetEngineRequest} arg.body
     * @returns {Promise<GetEngineResponse>} - Success response
     * @summary: Gives list of columns for table provided.
     * @description: Gives list of columns for table provided.
     */
    getData({ body }?: {
        body: GetEngineRequest;
    }): Promise<GetEngineResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetPdfUrlViewRequest} arg.body
     * @returns {Promise<GetPdfUrlViewResponse>} - Success response
     * @summary: Gives cn pdf url.
     * @description: Gives cn pdf url.
     */
    getPdfUrlView({ body }?: {
        body: GetPdfUrlViewRequest;
    }): Promise<GetPdfUrlViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetReasonRequest} arg.body
     * @returns {Promise<GetReasonResponse>} - Success response
     * @summary: Gives list of the reasons.
     * @description: Gives list of the reasons.
     */
    getReason({ body }?: {
        body: GetReasonRequest;
    }): Promise<GetReasonResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetReportListRequest} arg.body
     * @returns {Promise<GetReportListResponse>} - Success response
     * @summary: Get the list of available reports for a company.
     * @description: Gives list of reports.
     */
    getReportList({ body }?: {
        body: GetReportListRequest;
    }): Promise<GetReportListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.filterKey - Filter type.
     * @param {string} [arg.affiliateId] - Affiliate id.
     * @returns {Promise<GetReportingFiltersResponse>} - Success response
     * @summary: Gets all customer Cn filters and search.
     * @description: Gets all customer Cn filters and search.
     */
    getReportingFilters({ filterKey, affiliateId }?: {
        filterKey: string;
        affiliateId?: string;
    }): Promise<GetReportingFiltersResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InvoiceListingRequest} arg.body
     * @returns {Promise<InvoiceListingResponse>} - Success response
     * @summary: Gives list of invoices.
     * @description: Gives list of invoices.
     */
    invoiceListing({ body }?: {
        body: InvoiceListingRequest;
    }): Promise<InvoiceListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InvoicePdfRequest} arg.body
     * @returns {Promise<InvoicePdfResponse>} - Success response
     * @summary: Gives pdf view of invoice.
     * @description: Gives pdf view of invoice.
     */
    invoicePDF({ body }?: {
        body: InvoicePdfRequest;
    }): Promise<InvoicePdfResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InvoiceTypeRequest} arg.body
     * @returns {Promise<InvoiceTypeResponse>} - Success response
     * @summary: Gives list of active invoice type.
     * @description: Gives list of active invoice type.
     */
    invoiceType({ body }?: {
        body: InvoiceTypeRequest;
    }): Promise<InvoiceTypeResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {IsCnRefundMethodRequest} arg.body
     * @returns {Promise<IsCnRefundMethodResponse>} - Success response
     * @summary: Checks if seller has obtained cn as refund method or not.
     * @description: Checks if seller has obtained cn as refund method or not.
     */
    isCnRefundMethod({ body }?: {
        body: IsCnRefundMethodRequest;
    }): Promise<IsCnRefundMethodResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {IsCreditlinePlatformRequest} arg.body
     * @returns {Promise<IsCreditlinePlatformResponse>} - Success response
     * @summary: Checks if seller has opted for creditline or not.
     * @description: Checks if seller has opted for creditline or not.
     */
    isCreditlinePlatform({ body }?: {
        body: IsCreditlinePlatformRequest;
    }): Promise<IsCreditlinePlatformResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentProcessRequest} arg.body
     * @returns {Promise<PaymentProcessResponse>} - Success response
     * @summary: Payment Processing API.
     * @description: Payment Processing API.
     */
    paymentProcess({ body }?: {
        body: PaymentProcessRequest;
    }): Promise<PaymentProcessResponse>;
}
