export = Finance;
declare class Finance {
    constructor(config: any);
    config: any;
    /**
     * @param {FinancePlatformValidator.AsCnRefundParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.AsCnRefundResponse>} - Success response
     * @name asCnRefund
     * @summary:
     * @description:
     */
    asCnRefund({ body }?: FinancePlatformValidator.AsCnRefundParam): Promise<FinancePlatformModel.AsCnRefundResponse>;
    /**
     * @param {FinancePlatformValidator.ChannelDisplayNameParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.ChannelDisplayNameResponse>} -
     *   Success response
     * @name channelDisplayName
     * @summary:
     * @description:
     */
    channelDisplayName({ filterKey }?: FinancePlatformValidator.ChannelDisplayNameParam): Promise<FinancePlatformModel.ChannelDisplayNameResponse>;
    /**
     * @param {FinancePlatformValidator.CreateSellerCreditNoteConfigParam} arg
     *   - Arg object
     *
     * @returns {Promise<FinancePlatformModel.CreateSellerCreditNoteConfigResponse>}
     *   - Success response
     *
     * @name createSellerCreditNoteConfig
     * @summary:
     * @description:
     */
    createSellerCreditNoteConfig({ body }?: FinancePlatformValidator.CreateSellerCreditNoteConfigParam): Promise<FinancePlatformModel.CreateSellerCreditNoteConfigResponse>;
    /**
     * @param {FinancePlatformValidator.CreditNoteDetailsParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.CreditNoteDetailsResponse>} -
     *   Success response
     * @name creditNoteDetails
     * @summary:
     * @description:
     */
    creditNoteDetails({ body }?: FinancePlatformValidator.CreditNoteDetailsParam): Promise<FinancePlatformModel.CreditNoteDetailsResponse>;
    /**
     * @param {FinancePlatformValidator.CreditlineDataplatformParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.CreditlineDataPlatformResponse>}
     *   - Success response
     *
     * @name creditlineDataplatform
     * @summary:
     * @description:
     */
    creditlineDataplatform({ body }?: FinancePlatformValidator.CreditlineDataplatformParam): Promise<FinancePlatformModel.CreditlineDataPlatformResponse>;
    /**
     * @param {FinancePlatformValidator.DeleteConfigParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DeleteConfigResponse>} - Success response
     * @name deleteConfig
     * @summary:
     * @description:
     */
    deleteConfig({ body }?: FinancePlatformValidator.DeleteConfigParam): Promise<FinancePlatformModel.DeleteConfigResponse>;
    /**
     * @param {FinancePlatformValidator.DownloadCreditDebitNoteParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>}
     *   - Success response
     *
     * @name downloadCreditDebitNote
     * @summary:
     * @description:
     */
    downloadCreditDebitNote({ body }?: FinancePlatformValidator.DownloadCreditDebitNoteParam): Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>;
    /**
     * @param {FinancePlatformValidator.DownloadReportParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DownloadReportList>} - Success response
     * @name downloadReport
     * @summary:
     * @description:
     */
    downloadReport({ body }?: FinancePlatformValidator.DownloadReportParam): Promise<FinancePlatformModel.DownloadReportList>;
    /**
     * @param {FinancePlatformValidator.DownloadReportCustomerCnParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.DownloadReportCustomerCnResponse>}
     *   - Success response
     *
     * @name downloadReportCustomerCn
     * @summary:
     * @description:
     */
    downloadReportCustomerCn({ body }?: FinancePlatformValidator.DownloadReportCustomerCnParam): Promise<FinancePlatformModel.DownloadReportCustomerCnResponse>;
    /**
     * @param {FinancePlatformValidator.GenerateReportParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GenerateReportJson>} - Success response
     * @name generateReport
     * @summary:
     * @description:
     */
    generateReport({ body }?: FinancePlatformValidator.GenerateReportParam): Promise<FinancePlatformModel.GenerateReportJson>;
    /**
     * @param {FinancePlatformValidator.GenerateReportCustomerCnParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GenerateReportCustomerCnResponse>}
     *   - Success response
     *
     * @name generateReportCustomerCn
     * @summary:
     * @description:
     */
    generateReportCustomerCn({ body }?: FinancePlatformValidator.GenerateReportCustomerCnParam): Promise<FinancePlatformModel.GenerateReportCustomerCnResponse>;
    /**
     * @param {FinancePlatformValidator.GetAffiliateParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetAffiliateResponse>} - Success response
     * @name getAffiliate
     * @summary:
     * @description:
     */
    getAffiliate({ body }?: FinancePlatformValidator.GetAffiliateParam): Promise<FinancePlatformModel.GetAffiliateResponse>;
    /**
     * @param {FinancePlatformValidator.GetCnConfigParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetCnConfigResponse>} - Success response
     * @name getCnConfig
     * @summary:
     * @description:
     */
    getCnConfig({ body }?: FinancePlatformValidator.GetCnConfigParam): Promise<FinancePlatformModel.GetCnConfigResponse>;
    /**
     * @param {FinancePlatformValidator.GetCustomerCreditBalanceParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetCustomerCreditBalanceResponse>}
     *   - Success response
     *
     * @name getCustomerCreditBalance
     * @summary:
     * @description:
     */
    getCustomerCreditBalance({ body }?: FinancePlatformValidator.GetCustomerCreditBalanceParam): Promise<FinancePlatformModel.GetCustomerCreditBalanceResponse>;
    /**
     * @param {FinancePlatformValidator.GetDataParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getData
     * @summary:
     * @description:
     */
    getData({ body }?: FinancePlatformValidator.GetDataParam): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.GetPdfUrlViewParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetPdfUrlViewResponse>} - Success response
     * @name getPdfUrlView
     * @summary:
     * @description:
     */
    getPdfUrlView({ body }?: FinancePlatformValidator.GetPdfUrlViewParam): Promise<FinancePlatformModel.GetPdfUrlViewResponse>;
    /**
     * @param {FinancePlatformValidator.GetReasonParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetReasonResponse>} - Success response
     * @name getReason
     * @summary:
     * @description:
     */
    getReason({ body }?: FinancePlatformValidator.GetReasonParam): Promise<FinancePlatformModel.GetReasonResponse>;
    /**
     * @param {FinancePlatformValidator.GetReportListParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getReportList
     * @summary:
     * @description:
     */
    getReportList({ body }?: FinancePlatformValidator.GetReportListParam): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.GetReportingFiltersParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.GetReportingFiltersResponse>} -
     *   Success response
     * @name getReportingFilters
     * @summary:
     * @description:
     */
    getReportingFilters({ filterKey, affiliateId }?: FinancePlatformValidator.GetReportingFiltersParam): Promise<FinancePlatformModel.GetReportingFiltersResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceListingParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.InvoiceListingResponse>} - Success response
     * @name invoiceListing
     * @summary:
     * @description:
     */
    invoiceListing({ body }?: FinancePlatformValidator.InvoiceListingParam): Promise<FinancePlatformModel.InvoiceListingResponse>;
    /**
     * @param {FinancePlatformValidator.InvoicePDFParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.InvoicePdfResponse>} - Success response
     * @name invoicePDF
     * @summary:
     * @description:
     */
    invoicePDF({ body }?: FinancePlatformValidator.InvoicePDFParam): Promise<FinancePlatformModel.InvoicePdfResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceTypeParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.InvoiceTypeResponse>} - Success response
     * @name invoiceType
     * @summary:
     * @description:
     */
    invoiceType({ body }?: FinancePlatformValidator.InvoiceTypeParam): Promise<FinancePlatformModel.InvoiceTypeResponse>;
    /**
     * @param {FinancePlatformValidator.IsCreditlinePlatformParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.IsCreditlinePlatformResponse>} -
     *   Success response
     * @name isCreditlinePlatform
     * @summary:
     * @description:
     */
    isCreditlinePlatform({ body }?: FinancePlatformValidator.IsCreditlinePlatformParam): Promise<FinancePlatformModel.IsCreditlinePlatformResponse>;
    /**
     * @param {FinancePlatformValidator.PaymentProcessParam} arg - Arg object
     * @returns {Promise<FinancePlatformModel.PaymentProcessResponse>} - Success response
     * @name paymentProcess
     * @summary:
     * @description:
     */
    paymentProcess({ body }?: FinancePlatformValidator.PaymentProcessParam): Promise<FinancePlatformModel.PaymentProcessResponse>;
}
import FinancePlatformValidator = require("./FinancePlatformValidator");
import FinancePlatformModel = require("./FinancePlatformModel");
