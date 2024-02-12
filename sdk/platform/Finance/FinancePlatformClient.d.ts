export = Finance;
declare class Finance {
    constructor(config: any);
    config: any;
    /**
     * @param {FinancePlatformValidator.ChannelDisplayNameParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.ChannelDisplayNameResponse>} -
     *   Success response
     * @name channelDisplayName
     * @summary: Provide channel display name dict.
     * @description: Provide channel display name dict. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/channelDisplayName/).
     */
    channelDisplayName({ filterKey, requestHeaders }?: FinancePlatformValidator.ChannelDisplayNameParam, { responseHeaders }?: object): Promise<FinancePlatformModel.ChannelDisplayNameResponse>;
    /**
     * @param {FinancePlatformValidator.CreateSellerCreditNoteConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.CreateSellerCreditNoteConfigResponse>}
     *   - Success response
     *
     * @name createSellerCreditNoteConfig
     * @summary: Creates credit note config.
     * @description: Creates credit note config. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/createSellerCreditNoteConfig/).
     */
    createSellerCreditNoteConfig({ body, requestHeaders }?: FinancePlatformValidator.CreateSellerCreditNoteConfigParam, { responseHeaders }?: object): Promise<FinancePlatformModel.CreateSellerCreditNoteConfigResponse>;
    /**
     * @param {FinancePlatformValidator.CreditNoteDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.CreditNoteDetailsResponse>} -
     *   Success response
     * @name creditNoteDetails
     * @summary: Gives credit note details.
     * @description: Gives credit note details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/creditNoteDetails/).
     */
    creditNoteDetails({ body, requestHeaders }?: FinancePlatformValidator.CreditNoteDetailsParam, { responseHeaders }?: object): Promise<FinancePlatformModel.CreditNoteDetailsResponse>;
    /**
     * @param {FinancePlatformValidator.CreditlineDataplatformParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.CreditlineDataPlatformResponse>}
     *   - Success response
     *
     * @name creditlineDataplatform
     * @summary: Used to fetch creditline data.
     * @description: Used to fetch creditline data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/creditlineDataplatform/).
     */
    creditlineDataplatform({ body, requestHeaders }?: FinancePlatformValidator.CreditlineDataplatformParam, { responseHeaders }?: object): Promise<FinancePlatformModel.CreditlineDataPlatformResponse>;
    /**
     * @param {FinancePlatformValidator.DeleteConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.DeleteConfigResponse>} - Success response
     * @name deleteConfig
     * @summary: Deletes credit note config.
     * @description: Deletes credit note config. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/deleteConfig/).
     */
    deleteConfig({ body, requestHeaders }?: FinancePlatformValidator.DeleteConfigParam, { responseHeaders }?: object): Promise<FinancePlatformModel.DeleteConfigResponse>;
    /**
     * @param {FinancePlatformValidator.DownloadCreditDebitNoteParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>}
     *   - Success response
     *
     * @name downloadCreditDebitNote
     * @summary: Download credit debit note pdf.
     * @description: Download credit debit note pdf. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadCreditDebitNote/).
     */
    downloadCreditDebitNote({ body, requestHeaders }?: FinancePlatformValidator.DownloadCreditDebitNoteParam, { responseHeaders }?: object): Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>;
    /**
     * @param {FinancePlatformValidator.DownloadReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.DownloadReportList>} - Success response
     * @name downloadReport
     * @summary: Gives list of all downloaded reports.
     * @description: Gives list of all downloaded reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadReport/).
     */
    downloadReport({ body, requestHeaders }?: FinancePlatformValidator.DownloadReportParam, { responseHeaders }?: object): Promise<FinancePlatformModel.DownloadReportList>;
    /**
     * @param {FinancePlatformValidator.DownloadReportCustomerCnParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.DownloadReportCustomerCnResponse>}
     *   - Success response
     *
     * @name downloadReportCustomerCn
     * @summary: Gives list of downloaded reports.
     * @description: Gives list of downloaded reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadReportCustomerCn/).
     */
    downloadReportCustomerCn({ body, requestHeaders }?: FinancePlatformValidator.DownloadReportCustomerCnParam, { responseHeaders }?: object): Promise<FinancePlatformModel.DownloadReportCustomerCnResponse>;
    /**
     * @param {FinancePlatformValidator.GenerateReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GenerateReportJson>} - Success response
     * @name generateReport
     * @summary: Generate finance reports.
     * @description: Generate finance reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/generateReport/).
     */
    generateReport({ body, requestHeaders }?: FinancePlatformValidator.GenerateReportParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GenerateReportJson>;
    /**
     * @param {FinancePlatformValidator.GenerateReportCustomerCnParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GenerateReportCustomerCnResponse>}
     *   - Success response
     *
     * @name generateReportCustomerCn
     * @summary: Generate Credit Note report and gives Note details.
     * @description: Generate Credit Note report and gives Note details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/generateReportCustomerCn/).
     */
    generateReportCustomerCn({ body, requestHeaders }?: FinancePlatformValidator.GenerateReportCustomerCnParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GenerateReportCustomerCnResponse>;
    /**
     * @param {FinancePlatformValidator.GetAffiliateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetAffiliateResponse>} - Success response
     * @name getAffiliate
     * @summary: Gives list of affiliates for company.
     * @description: Gives list of affiliates for company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getAffiliate/).
     */
    getAffiliate({ body, requestHeaders }?: FinancePlatformValidator.GetAffiliateParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetAffiliateResponse>;
    /**
     * @param {FinancePlatformValidator.GetCnConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetCnConfigResponse>} - Success response
     * @name getCnConfig
     * @summary: Gives credit note config.
     * @description: Gives credit note config. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getCnConfig/).
     */
    getCnConfig({ body, requestHeaders }?: FinancePlatformValidator.GetCnConfigParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetCnConfigResponse>;
    /**
     * @param {FinancePlatformValidator.GetCustomerCreditBalanceParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetCustomerCreditBalanceResponse>}
     *   - Success response
     *
     * @name getCustomerCreditBalance
     * @summary: Gives customer credit balance.
     * @description: Gives customer credit balance. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getCustomerCreditBalance/).
     */
    getCustomerCreditBalance({ body, requestHeaders }?: FinancePlatformValidator.GetCustomerCreditBalanceParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetCustomerCreditBalanceResponse>;
    /**
     * @param {FinancePlatformValidator.GetDataParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getData
     * @summary: Gives list of columns for table provided.
     * @description: Gives list of columns for table provided. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getData/).
     */
    getData({ body, requestHeaders }?: FinancePlatformValidator.GetDataParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.GetPdfUrlViewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetPdfUrlViewResponse>} - Success response
     * @name getPdfUrlView
     * @summary: Gives cn pdf url.
     * @description: Gives cn pdf url. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getPdfUrlView/).
     */
    getPdfUrlView({ body, requestHeaders }?: FinancePlatformValidator.GetPdfUrlViewParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetPdfUrlViewResponse>;
    /**
     * @param {FinancePlatformValidator.GetReasonParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetReasonResponse>} - Success response
     * @name getReason
     * @summary: Gives list of the reasons.
     * @description: Gives list of the reasons. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReason/).
     */
    getReason({ body, requestHeaders }?: FinancePlatformValidator.GetReasonParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetReasonResponse>;
    /**
     * @param {FinancePlatformValidator.GetReportListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetReportListResponse>} - Success response
     * @name getReportList
     * @summary: Get the list of available reports for a company.
     * @description: Gives list of reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReportList/).
     */
    getReportList({ body, requestHeaders }?: FinancePlatformValidator.GetReportListParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetReportListResponse>;
    /**
     * @param {FinancePlatformValidator.GetReportingFiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetReportingFiltersResponse>} -
     *   Success response
     * @name getReportingFilters
     * @summary: Gets all customer Cn filters and search.
     * @description: Gets all customer Cn filters and search. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReportingFilters/).
     */
    getReportingFilters({ filterKey, affiliateId, requestHeaders }?: FinancePlatformValidator.GetReportingFiltersParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetReportingFiltersResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceActivityLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoiceActivityLogsResponse>} -
     *   Success response
     * @name invoiceActivityLogs
     * @summary: Display activity log details of an invoice.
     * @description: Display activity log details of invoice. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceActivityLogs/).
     */
    invoiceActivityLogs({ invoiceNumber, requestHeaders }?: FinancePlatformValidator.InvoiceActivityLogsParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoiceActivityLogsResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceListingParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoiceListingResponse>} - Success response
     * @name invoiceListing
     * @summary: Gives list of invoices.
     * @description: Gives list of invoices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceListing/).
     */
    invoiceListing({ body, requestHeaders }?: FinancePlatformValidator.InvoiceListingParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoiceListingResponse>;
    /**
     * @param {FinancePlatformValidator.InvoicePDFParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoicePdfResponse>} - Success response
     * @name invoicePDF
     * @summary: Gives pdf view of invoice.
     * @description: Gives pdf view of invoice. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoicePDF/).
     */
    invoicePDF({ body, requestHeaders }?: FinancePlatformValidator.InvoicePDFParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoicePdfResponse>;
    /**
     * @param {FinancePlatformValidator.InvoicePaymentDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoicePaymentDetailsResponse>} -
     *   Success response
     * @name invoicePaymentDetails
     * @summary: Display payment details of an invoice.
     * @description: Display payment details of invoice. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoicePaymentDetails/).
     */
    invoicePaymentDetails({ invoiceNumber, requestHeaders }?: FinancePlatformValidator.InvoicePaymentDetailsParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoicePaymentDetailsResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceTypeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoiceTypeResponse>} - Success response
     * @name invoiceType
     * @summary: Gives list of active invoice type.
     * @description: Gives list of active invoice type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceType/).
     */
    invoiceType({ body, requestHeaders }?: FinancePlatformValidator.InvoiceTypeParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoiceTypeResponse>;
    /**
     * @param {FinancePlatformValidator.IsCnRefundMethodParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.IsCnRefundMethodResponse>} -
     *   Success response
     * @name isCnRefundMethod
     * @summary: Checks if seller has obtained cn as refund method or not.
     * @description: Checks if seller has obtained cn as refund method or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/isCnRefundMethod/).
     */
    isCnRefundMethod({ body, requestHeaders }?: FinancePlatformValidator.IsCnRefundMethodParam, { responseHeaders }?: object): Promise<FinancePlatformModel.IsCnRefundMethodResponse>;
    /**
     * @param {FinancePlatformValidator.IsCreditlinePlatformParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.IsCreditlinePlatformResponse>} -
     *   Success response
     * @name isCreditlinePlatform
     * @summary: Checks if seller has opted for creditline or not.
     * @description: Checks if seller has opted for creditline or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/isCreditlinePlatform/).
     */
    isCreditlinePlatform({ body, requestHeaders }?: FinancePlatformValidator.IsCreditlinePlatformParam, { responseHeaders }?: object): Promise<FinancePlatformModel.IsCreditlinePlatformResponse>;
    /**
     * @param {FinancePlatformValidator.PaymentProcessParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.PaymentProcessResponse>} - Success response
     * @name paymentProcess
     * @summary: Payment Processing API.
     * @description: Payment Processing API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/paymentProcess/).
     */
    paymentProcess({ body, requestHeaders }?: FinancePlatformValidator.PaymentProcessParam, { responseHeaders }?: object): Promise<FinancePlatformModel.PaymentProcessResponse>;
    /**
     * @param {FinancePlatformValidator.UnlockCreditNoteParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.UnlockCreditNoteResponse>} -
     *   Success response
     * @name unlockCreditNote
     * @summary: Unlocks credit notes.
     * @description: Used to unlock all request credit notes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/unlockCreditNote/).
     */
    unlockCreditNote({ body, requestHeaders }?: FinancePlatformValidator.UnlockCreditNoteParam, { responseHeaders }?: object): Promise<FinancePlatformModel.UnlockCreditNoteResponse>;
}
import FinancePlatformValidator = require("./FinancePlatformValidator");
import FinancePlatformModel = require("./FinancePlatformModel");
