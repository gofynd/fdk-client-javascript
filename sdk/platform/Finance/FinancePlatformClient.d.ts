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
     * @summary: Get channel display name
     * @description: Retrieve the display name for a channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/channelDisplayName/).
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
     * @summary: Create seller credit note config
     * @description: Set up configuration for seller credit notes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/createSellerCreditNoteConfig/).
     */
    createSellerCreditNoteConfig({ body, requestHeaders }?: FinancePlatformValidator.CreateSellerCreditNoteConfigParam, { responseHeaders }?: object): Promise<FinancePlatformModel.CreateSellerCreditNoteConfigResponse>;
    /**
     * @param {FinancePlatformValidator.CreditNoteDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.CreditNoteDetailsResponse>} -
     *   Success response
     * @name creditNoteDetails
     * @summary: Get credit note details
     * @description: Retrieve detailed information about a credit note. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/creditNoteDetails/).
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
     * @summary: Access credit line data platform
     * @description: Connect to the credit line data platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/creditlineDataplatform/).
     */
    creditlineDataplatform({ body, requestHeaders }?: FinancePlatformValidator.CreditlineDataplatformParam, { responseHeaders }?: object): Promise<FinancePlatformModel.CreditlineDataPlatformResponse>;
    /**
     * @param {FinancePlatformValidator.DeleteConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.DeleteConfigResponse>} - Success response
     * @name deleteConfig
     * @summary: Deletes credit note config
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
     * @summary: Download credit/debit note
     * @description: Retrieve and save credit/debit notes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadCreditDebitNote/).
     */
    downloadCreditDebitNote({ body, requestHeaders }?: FinancePlatformValidator.DownloadCreditDebitNoteParam, { responseHeaders }?: object): Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>;
    /**
     * @param {FinancePlatformValidator.DownloadReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.DownloadReportList>} - Success response
     * @name downloadReport
     * @summary: Download financial report
     * @description: Retrieve and save a financial report. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadReport/).
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
     * @summary: Download customer credit note report
     * @description: Retrieve and save a report for customer credit notes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadReportCustomerCn/).
     */
    downloadReportCustomerCn({ body, requestHeaders }?: FinancePlatformValidator.DownloadReportCustomerCnParam, { responseHeaders }?: object): Promise<FinancePlatformModel.DownloadReportCustomerCnResponse>;
    /**
     * @param {FinancePlatformValidator.GenerateReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GenerateReportJson>} - Success response
     * @name generateReport
     * @summary: Generate financial report
     * @description: Create a financial report with relevant data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/generateReport/).
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
     * @summary: Generate customer credit note report
     * @description: Create a report specifically for customer credit notes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/generateReportCustomerCn/).
     */
    generateReportCustomerCn({ body, requestHeaders }?: FinancePlatformValidator.GenerateReportCustomerCnParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GenerateReportCustomerCnResponse>;
    /**
     * @param {FinancePlatformValidator.GetAffiliateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetAffiliateResponse>} - Success response
     * @name getAffiliate
     * @summary: Get affiliate details
     * @description: Retrieve information about an affiliate. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getAffiliate/).
     */
    getAffiliate({ body, requestHeaders }?: FinancePlatformValidator.GetAffiliateParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetAffiliateResponse>;
    /**
     * @param {FinancePlatformValidator.GetCnConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetCnConfigResponse>} - Success response
     * @name getCnConfig
     * @summary: Get credit note configuration
     * @description: Retrieve configuration settings for credit notes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getCnConfig/).
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
     * @summary: Get customer credit balance
     * @description: Retrieve the credit balance of a customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getCustomerCreditBalance/).
     */
    getCustomerCreditBalance({ body, requestHeaders }?: FinancePlatformValidator.GetCustomerCreditBalanceParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetCustomerCreditBalanceResponse>;
    /**
     * @param {FinancePlatformValidator.GetDataParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
     * @name getData
     * @summary: Get financial data
     * @description: Retrieve financial data for analysis. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getData/).
     */
    getData({ body, requestHeaders }?: FinancePlatformValidator.GetDataParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetEngineResponse>;
    /**
     * @param {FinancePlatformValidator.GetPdfUrlViewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetPdfUrlViewResponse>} - Success response
     * @name getPdfUrlView
     * @summary: Get PDF URL view
     * @description: Retrieve a URL to view a PDF document. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getPdfUrlView/).
     */
    getPdfUrlView({ body, requestHeaders }?: FinancePlatformValidator.GetPdfUrlViewParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetPdfUrlViewResponse>;
    /**
     * @param {FinancePlatformValidator.GetReasonParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetReasonResponse>} - Success response
     * @name getReason
     * @summary: Get transaction reason
     * @description: Retrieve the reason behind a transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReason/).
     */
    getReason({ body, requestHeaders }?: FinancePlatformValidator.GetReasonParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetReasonResponse>;
    /**
     * @param {FinancePlatformValidator.GetReportListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetReportListResponse>} - Success response
     * @name getReportList
     * @summary: Get report list
     * @description: Retrieve a list of available financial reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReportList/).
     */
    getReportList({ body, requestHeaders }?: FinancePlatformValidator.GetReportListParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetReportListResponse>;
    /**
     * @param {FinancePlatformValidator.GetReportingFiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.GetReportingFiltersResponse>} -
     *   Success response
     * @name getReportingFilters
     * @summary: Get reporting filters
     * @description: Retrieve available filters for financial reporting. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReportingFilters/).
     */
    getReportingFilters({ filterKey, affiliateId, requestHeaders }?: FinancePlatformValidator.GetReportingFiltersParam, { responseHeaders }?: object): Promise<FinancePlatformModel.GetReportingFiltersResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceActivityLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoiceActivityLogsResponse>} -
     *   Success response
     * @name invoiceActivityLogs
     * @summary: Display activity log details of an invoice
     * @description: Display activity log details of invoice. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceActivityLogs/).
     */
    invoiceActivityLogs({ invoiceNumber, requestHeaders }?: FinancePlatformValidator.InvoiceActivityLogsParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoiceActivityLogsResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceListingParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoiceListingResponse>} - Success response
     * @name invoiceListing
     * @summary: List invoices
     * @description: Provides list of invoices generated for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceListing/).
     */
    invoiceListing({ body, requestHeaders }?: FinancePlatformValidator.InvoiceListingParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoiceListingResponse>;
    /**
     * @param {FinancePlatformValidator.InvoicePDFParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoicePdfResponse>} - Success response
     * @name invoicePDF
     * @summary: Get invoice PDF
     * @description: Retrieve the PDF version of an invoice. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoicePDF/).
     */
    invoicePDF({ body, requestHeaders }?: FinancePlatformValidator.InvoicePDFParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoicePdfResponse>;
    /**
     * @param {FinancePlatformValidator.InvoicePaymentDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoicePaymentDetailsResponse>} -
     *   Success response
     * @name invoicePaymentDetails
     * @summary: Display payment details of an invoice
     * @description: Display payment details of invoice. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoicePaymentDetails/).
     */
    invoicePaymentDetails({ invoiceNumber, requestHeaders }?: FinancePlatformValidator.InvoicePaymentDetailsParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoicePaymentDetailsResponse>;
    /**
     * @param {FinancePlatformValidator.InvoiceTypeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.InvoiceTypeResponse>} - Success response
     * @name invoiceType
     * @summary: Get invoice types
     * @description: Retrieve a list of available invoice types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceType/).
     */
    invoiceType({ body, requestHeaders }?: FinancePlatformValidator.InvoiceTypeParam, { responseHeaders }?: object): Promise<FinancePlatformModel.InvoiceTypeResponse>;
    /**
     * @param {FinancePlatformValidator.IsCnRefundMethodParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.IsCnRefundMethodResponse>} -
     *   Success response
     * @name isCnRefundMethod
     * @summary: Check refund method
     * @description: Verify the refund method for credit notes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/isCnRefundMethod/).
     */
    isCnRefundMethod({ body, requestHeaders }?: FinancePlatformValidator.IsCnRefundMethodParam, { responseHeaders }?: object): Promise<FinancePlatformModel.IsCnRefundMethodResponse>;
    /**
     * @param {FinancePlatformValidator.IsCreditlinePlatformParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.IsCreditlinePlatformResponse>} -
     *   Success response
     * @name isCreditlinePlatform
     * @summary: Check credit line platform status
     * @description: Determine if the credit line platform is operational. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/isCreditlinePlatform/).
     */
    isCreditlinePlatform({ body, requestHeaders }?: FinancePlatformValidator.IsCreditlinePlatformParam, { responseHeaders }?: object): Promise<FinancePlatformModel.IsCreditlinePlatformResponse>;
    /**
     * @param {FinancePlatformValidator.PaymentProcessParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.PaymentProcessResponse>} - Success response
     * @name paymentProcess
     * @summary: Process payments
     * @description: Initiate and manage payment processes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/paymentProcess/).
     */
    paymentProcess({ body, requestHeaders }?: FinancePlatformValidator.PaymentProcessParam, { responseHeaders }?: object): Promise<FinancePlatformModel.PaymentProcessResponse>;
    /**
     * @param {FinancePlatformValidator.UnlockCreditNoteParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FinancePlatformModel.UnlockCreditNoteResponse>} -
     *   Success response
     * @name unlockCreditNote
     * @summary: Unlock credit notes
     * @description: Used to unlock all request credit notes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/unlockCreditNote/).
     */
    unlockCreditNote({ body, requestHeaders }?: FinancePlatformValidator.UnlockCreditNoteParam, { responseHeaders }?: object): Promise<FinancePlatformModel.UnlockCreditNoteResponse>;
}
import FinancePlatformValidator = require("sdk/output/javascript/code/sdk/platform/Finance/FinancePlatformValidator");
import FinancePlatformModel = require("sdk/output/javascript/code/sdk/platform/Finance/FinancePlatformModel");
