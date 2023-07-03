export = Finance;
declare class Finance {
    constructor(config: any);
    config: any;
    /**
     * @param {FinancePlatformValidator.asCnRefund} arg - Arg object
     * @returns {Promise<FinancePlatformModel.AsCnRefundResponse>} - Success response
     * @name asCnRefund
     * @summary:
     * @description:
     */
    asCnRefund({ body }?: FinancePlatformValidator.asCnRefund): Promise<FinancePlatformModel.AsCnRefundResponse>;
    /**
     * @param {FinancePlatformValidator.channelDisplayName} arg - Arg object
     * @returns {Promise<FinancePlatformModel.ChannelDisplayNameResponse>} -
     *   Success response
     * @name channelDisplayName
     * @summary:
     * @description:
     */
    channelDisplayName({ filterKey }?: FinancePlatformValidator.channelDisplayName): Promise<FinancePlatformModel.ChannelDisplayNameResponse>;
    /**
     * @param {FinancePlatformValidator.createSellerCreditNoteConfig} arg - Arg object
     * @returns {Promise<FinancePlatformModel.CreateSellerCreditNoteConfigResponse>}
     *   - Success response
     *
     * @name createSellerCreditNoteConfig
     * @summary:
     * @description:
     */
    createSellerCreditNoteConfig({ body }?: FinancePlatformValidator.createSellerCreditNoteConfig): Promise<FinancePlatformModel.CreateSellerCreditNoteConfigResponse>;
    /**
     * @param {FinancePlatformValidator.creditNoteDetails} arg - Arg object
     * @returns {Promise<FinancePlatformModel.CreditNoteDetailsResponse>} -
     *   Success response
     * @name creditNoteDetails
     * @summary:
     * @description:
     */
    creditNoteDetails({ body }?: FinancePlatformValidator.creditNoteDetails): Promise<FinancePlatformModel.CreditNoteDetailsResponse>;
    /**
     * @param {FinancePlatformValidator.creditlineDataplatform} arg - Arg object
     * @returns {Promise<FinancePlatformModel.CreditlineDataPlatformResponse>}
     *   - Success response
     *
     * @name creditlineDataplatform
     * @summary:
     * @description:
     */
    creditlineDataplatform({ body }?: FinancePlatformValidator.creditlineDataplatform): Promise<FinancePlatformModel.CreditlineDataPlatformResponse>;
    /**
     * @param {FinancePlatformValidator.deleteConfig} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DeleteConfigResponse>} - Success response
     * @name deleteConfig
     * @summary:
     * @description:
     */
    deleteConfig({ body }?: FinancePlatformValidator.deleteConfig): Promise<FinancePlatformModel.DeleteConfigResponse>;
    /**
     * @param {FinancePlatformValidator.downloadCreditDebitNote} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>}
     *   - Success response
     *
     * @name downloadCreditDebitNote
     * @summary:
     * @description:
     */
    downloadCreditDebitNote({ body }?: FinancePlatformValidator.downloadCreditDebitNote): Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>;
    /**
     * @param {FinancePlatformValidator.downloadReport} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DownloadReportList>} - Success response
     * @name downloadReport
     * @summary:
     * @description:
     */
    downloadReport({ body }?: FinancePlatformValidator.downloadReport): Promise<FinancePlatformModel.DownloadReportList>;
    /**
     * @param {FinancePlatformValidator.downloadReportCustomerCn} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DownloadReportCustomerCnResponse>}
     *   - Success response
     *
     * @name downloadReportCustomerCn
     * @summary:
     * @description:
     */
    downloadReportCustomerCn({ body }?: FinancePlatformValidator.downloadReportCustomerCn): Promise<FinancePlatformModel.DownloadReportCustomerCnResponse>;
    /**
     * @param {FinancePlatformValidator.generateReport} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GenerateReportJson>} - Success response
     * @name generateReport
     * @summary:
     * @description:
     */
    generateReport({ body }?: FinancePlatformValidator.generateReport): Promise<FinancePlatformModel.GenerateReportJson>;
    /**
     * @param {FinancePlatformValidator.generateReportCustomerCn} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GenerateReportCustomerCnResponse>}
     *   - Success response
     *
     * @name generateReportCustomerCn
     * @summary:
     * @description:
     */
    generateReportCustomerCn({ body }?: FinancePlatformValidator.generateReportCustomerCn): Promise<FinancePlatformModel.GenerateReportCustomerCnResponse>;
    /**
     * @param {FinancePlatformValidator.getAffiliate} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetAffiliateResponse>} - Success response
     * @name getAffiliate
     * @summary:
     * @description:
     */
    getAffiliate({ body }?: FinancePlatformValidator.getAffiliate): Promise<FinancePlatformModel.GetAffiliateResponse>;
    /**
     * @param {FinancePlatformValidator.getCnConfig} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetCnConfigResponse>} - Success response
     * @name getCnConfig
     * @summary:
     * @description:
     */
    getCnConfig({ body }?: FinancePlatformValidator.getCnConfig): Promise<FinancePlatformModel.GetCnConfigResponse>;
    /**
     * @param {FinancePlatformValidator.getCustomerCreditBalance} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetCustomerCreditBalanceResponse>}
     *   - Success response
     *
     * @name getCustomerCreditBalance
     * @summary:
     * @description:
     */
    getCustomerCreditBalance({ body }?: FinancePlatformValidator.getCustomerCreditBalance): Promise<FinancePlatformModel.GetCustomerCreditBalanceResponse>;
    /**
     * @param {FinancePlatformValidator.getData} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getData
     * @summary:
     * @description:
     */
    getData({ body }?: FinancePlatformValidator.getData): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.getPdfUrlView} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetPdfUrlViewResponse>} - Success response
     * @name getPdfUrlView
     * @summary:
     * @description:
     */
    getPdfUrlView({ body }?: FinancePlatformValidator.getPdfUrlView): Promise<FinancePlatformModel.GetPdfUrlViewResponse>;
    /**
     * @param {FinancePlatformValidator.getReason} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetReasonResponse>} - Success response
     * @name getReason
     * @summary:
     * @description:
     */
    getReason({ body }?: FinancePlatformValidator.getReason): Promise<FinancePlatformModel.GetReasonResponse>;
    /**
     * @param {FinancePlatformValidator.getReportList} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getReportList
     * @summary:
     * @description:
     */
    getReportList({ body }?: FinancePlatformValidator.getReportList): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.getReportingFilters} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetReportingFiltersResponse>} -
     *   Success response
     * @name getReportingFilters
     * @summary:
     * @description:
     */
    getReportingFilters({ filterKey, affiliateId }?: FinancePlatformValidator.getReportingFilters): Promise<FinancePlatformModel.GetReportingFiltersResponse>;
    /**
     * @param {FinancePlatformValidator.invoiceListing} arg - Arg object
     * @returns {Promise<FinancePlatformModel.InvoiceListingResponse>} - Success response
     * @name invoiceListing
     * @summary:
     * @description:
     */
    invoiceListing({ body }?: FinancePlatformValidator.invoiceListing): Promise<FinancePlatformModel.InvoiceListingResponse>;
    /**
     * @param {FinancePlatformValidator.invoicePDF} arg - Arg object
     * @returns {Promise<FinancePlatformModel.InvoicePdfResponse>} - Success response
     * @name invoicePDF
     * @summary:
     * @description:
     */
    invoicePDF({ body }?: FinancePlatformValidator.invoicePDF): Promise<FinancePlatformModel.InvoicePdfResponse>;
    /**
     * @param {FinancePlatformValidator.invoiceType} arg - Arg object
     * @returns {Promise<FinancePlatformModel.InvoiceTypeResponse>} - Success response
     * @name invoiceType
     * @summary:
     * @description:
     */
    invoiceType({ body }?: FinancePlatformValidator.invoiceType): Promise<FinancePlatformModel.InvoiceTypeResponse>;
    /**
     * @param {FinancePlatformValidator.isCreditlinePlatform} arg - Arg object
     * @returns {Promise<FinancePlatformModel.IsCreditlinePlatformResponse>} -
     *   Success response
     * @name isCreditlinePlatform
     * @summary:
     * @description:
     */
    isCreditlinePlatform({ body }?: FinancePlatformValidator.isCreditlinePlatform): Promise<FinancePlatformModel.IsCreditlinePlatformResponse>;
    /**
     * @param {FinancePlatformValidator.paymentProcess} arg - Arg object
     * @returns {Promise<FinancePlatformModel.PaymentProcessResponse>} - Success response
     * @name paymentProcess
     * @summary:
     * @description:
     */
    paymentProcess({ body }?: FinancePlatformValidator.paymentProcess): Promise<FinancePlatformModel.PaymentProcessResponse>;
}
import FinancePlatformValidator = require("./FinancePlatformValidator");
import FinancePlatformModel = require("./FinancePlatformModel");
