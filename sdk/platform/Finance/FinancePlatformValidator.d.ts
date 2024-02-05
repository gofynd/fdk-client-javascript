export = FinancePlatformValidator;
/**
 * @typedef ChannelDisplayNameParam
 * @property {string} filterKey - Gives display name for channel.
 */
/**
 * @typedef CreateSellerCreditNoteConfigParam
 * @property {FinancePlatformModel.CreateSellerCreditNoteConfigRequest} body
 */
/**
 * @typedef CreditNoteDetailsParam
 * @property {FinancePlatformModel.CreditNoteDetailsRequest} body
 */
/**
 * @typedef CreditlineDataplatformParam
 * @property {FinancePlatformModel.CreditlineDataPlatformRequest} body
 */
/**
 * @typedef DeleteConfigParam
 * @property {FinancePlatformModel.DeleteConfigRequest} body
 */
/**
 * @typedef DownloadCreditDebitNoteParam
 * @property {FinancePlatformModel.DownloadCreditDebitNoteRequest} body
 */
/**
 * @typedef DownloadReportParam
 * @property {FinancePlatformModel.DownloadReport} body
 */
/**
 * @typedef DownloadReportCustomerCnParam
 * @property {FinancePlatformModel.DownloadReportCustomerCnRequest} body
 */
/**
 * @typedef GenerateReportParam
 * @property {FinancePlatformModel.GenerateReportRequest} body
 */
/**
 * @typedef GenerateReportCustomerCnParam
 * @property {FinancePlatformModel.GenerateReportCustomerCnRequest} body
 */
/**
 * @typedef GetAffiliateParam
 * @property {FinancePlatformModel.GetAffiliate} body
 */
/**
 * @typedef GetCnConfigParam
 * @property {FinancePlatformModel.GetCnConfigRequest} body
 */
/**
 * @typedef GetCustomerCreditBalanceParam
 * @property {FinancePlatformModel.GetCustomerCreditBalanceRequest} body
 */
/**
 * @typedef GetDataParam
 * @property {FinancePlatformModel.GetEngineRequest} body
 */
/**
 * @typedef GetPdfUrlViewParam
 * @property {FinancePlatformModel.GetPdfUrlViewRequest} body
 */
/**
 * @typedef GetReasonParam
 * @property {FinancePlatformModel.GetReasonRequest} body
 */
/**
 * @typedef GetReportListParam
 * @property {FinancePlatformModel.GetReportListRequest} body
 */
/**
 * @typedef GetReportingFiltersParam
 * @property {string} filterKey - Filter type.
 * @property {string} [affiliateId] - Affiliate id.
 */
/**
 * @typedef InvoiceActivityLogsParam
 * @property {string} invoiceNumber - Invoice Number for which the data will be
 *   returned. Invoice_number is required.
 */
/**
 * @typedef InvoiceListingParam
 * @property {FinancePlatformModel.InvoiceListingRequest} body
 */
/**
 * @typedef InvoicePDFParam
 * @property {FinancePlatformModel.InvoicePdfRequest} body
 */
/**
 * @typedef InvoicePaymentDetailsParam
 * @property {string} invoiceNumber - Invoice Number for which the data will be
 *   returned.Invoice_Number is required.
 */
/**
 * @typedef InvoiceTypeParam
 * @property {FinancePlatformModel.InvoiceTypeRequest} body
 */
/**
 * @typedef IsCnRefundMethodParam
 * @property {FinancePlatformModel.IsCnRefundMethodRequest} body
 */
/**
 * @typedef IsCreditlinePlatformParam
 * @property {FinancePlatformModel.IsCreditlinePlatformRequest} body
 */
/**
 * @typedef PaymentProcessParam
 * @property {FinancePlatformModel.PaymentProcessRequest} body
 */
/**
 * @typedef UnlockCreditNoteParam
 * @property {FinancePlatformModel.UnlockCreditNoteRequest} body
 */
declare class FinancePlatformValidator {
    /** @returns {ChannelDisplayNameParam} */
    static channelDisplayName(): ChannelDisplayNameParam;
    /** @returns {CreateSellerCreditNoteConfigParam} */
    static createSellerCreditNoteConfig(): CreateSellerCreditNoteConfigParam;
    /** @returns {CreditNoteDetailsParam} */
    static creditNoteDetails(): CreditNoteDetailsParam;
    /** @returns {CreditlineDataplatformParam} */
    static creditlineDataplatform(): CreditlineDataplatformParam;
    /** @returns {DeleteConfigParam} */
    static deleteConfig(): DeleteConfigParam;
    /** @returns {DownloadCreditDebitNoteParam} */
    static downloadCreditDebitNote(): DownloadCreditDebitNoteParam;
    /** @returns {DownloadReportParam} */
    static downloadReport(): DownloadReportParam;
    /** @returns {DownloadReportCustomerCnParam} */
    static downloadReportCustomerCn(): DownloadReportCustomerCnParam;
    /** @returns {GenerateReportParam} */
    static generateReport(): GenerateReportParam;
    /** @returns {GenerateReportCustomerCnParam} */
    static generateReportCustomerCn(): GenerateReportCustomerCnParam;
    /** @returns {GetAffiliateParam} */
    static getAffiliate(): GetAffiliateParam;
    /** @returns {GetCnConfigParam} */
    static getCnConfig(): GetCnConfigParam;
    /** @returns {GetCustomerCreditBalanceParam} */
    static getCustomerCreditBalance(): GetCustomerCreditBalanceParam;
    /** @returns {GetDataParam} */
    static getData(): GetDataParam;
    /** @returns {GetPdfUrlViewParam} */
    static getPdfUrlView(): GetPdfUrlViewParam;
    /** @returns {GetReasonParam} */
    static getReason(): GetReasonParam;
    /** @returns {GetReportListParam} */
    static getReportList(): GetReportListParam;
    /** @returns {GetReportingFiltersParam} */
    static getReportingFilters(): GetReportingFiltersParam;
    /** @returns {InvoiceActivityLogsParam} */
    static invoiceActivityLogs(): InvoiceActivityLogsParam;
    /** @returns {InvoiceListingParam} */
    static invoiceListing(): InvoiceListingParam;
    /** @returns {InvoicePDFParam} */
    static invoicePDF(): InvoicePDFParam;
    /** @returns {InvoicePaymentDetailsParam} */
    static invoicePaymentDetails(): InvoicePaymentDetailsParam;
    /** @returns {InvoiceTypeParam} */
    static invoiceType(): InvoiceTypeParam;
    /** @returns {IsCnRefundMethodParam} */
    static isCnRefundMethod(): IsCnRefundMethodParam;
    /** @returns {IsCreditlinePlatformParam} */
    static isCreditlinePlatform(): IsCreditlinePlatformParam;
    /** @returns {PaymentProcessParam} */
    static paymentProcess(): PaymentProcessParam;
    /** @returns {UnlockCreditNoteParam} */
    static unlockCreditNote(): UnlockCreditNoteParam;
}
declare namespace FinancePlatformValidator {
    export { ChannelDisplayNameParam, CreateSellerCreditNoteConfigParam, CreditNoteDetailsParam, CreditlineDataplatformParam, DeleteConfigParam, DownloadCreditDebitNoteParam, DownloadReportParam, DownloadReportCustomerCnParam, GenerateReportParam, GenerateReportCustomerCnParam, GetAffiliateParam, GetCnConfigParam, GetCustomerCreditBalanceParam, GetDataParam, GetPdfUrlViewParam, GetReasonParam, GetReportListParam, GetReportingFiltersParam, InvoiceActivityLogsParam, InvoiceListingParam, InvoicePDFParam, InvoicePaymentDetailsParam, InvoiceTypeParam, IsCnRefundMethodParam, IsCreditlinePlatformParam, PaymentProcessParam, UnlockCreditNoteParam };
}
type ChannelDisplayNameParam = {
    /**
     * - Gives display name for channel.
     */
    filterKey: string;
};
type CreateSellerCreditNoteConfigParam = {
    body: FinancePlatformModel.CreateSellerCreditNoteConfigRequest;
};
type CreditNoteDetailsParam = {
    body: FinancePlatformModel.CreditNoteDetailsRequest;
};
type CreditlineDataplatformParam = {
    body: FinancePlatformModel.CreditlineDataPlatformRequest;
};
type DeleteConfigParam = {
    body: FinancePlatformModel.DeleteConfigRequest;
};
type DownloadCreditDebitNoteParam = {
    body: FinancePlatformModel.DownloadCreditDebitNoteRequest;
};
type DownloadReportParam = {
    body: FinancePlatformModel.DownloadReport;
};
type DownloadReportCustomerCnParam = {
    body: FinancePlatformModel.DownloadReportCustomerCnRequest;
};
type GenerateReportParam = {
    body: FinancePlatformModel.GenerateReportRequest;
};
type GenerateReportCustomerCnParam = {
    body: FinancePlatformModel.GenerateReportCustomerCnRequest;
};
type GetAffiliateParam = {
    body: FinancePlatformModel.GetAffiliate;
};
type GetCnConfigParam = {
    body: FinancePlatformModel.GetCnConfigRequest;
};
type GetCustomerCreditBalanceParam = {
    body: FinancePlatformModel.GetCustomerCreditBalanceRequest;
};
type GetDataParam = {
    body: FinancePlatformModel.GetEngineRequest;
};
type GetPdfUrlViewParam = {
    body: FinancePlatformModel.GetPdfUrlViewRequest;
};
type GetReasonParam = {
    body: FinancePlatformModel.GetReasonRequest;
};
type GetReportListParam = {
    body: FinancePlatformModel.GetReportListRequest;
};
type GetReportingFiltersParam = {
    /**
     * - Filter type.
     */
    filterKey: string;
    /**
     * - Affiliate id.
     */
    affiliateId?: string;
};
type InvoiceActivityLogsParam = {
    /**
     * - Invoice Number for which the data will be
     * returned. Invoice_number is required.
     */
    invoiceNumber: string;
};
type InvoiceListingParam = {
    body: FinancePlatformModel.InvoiceListingRequest;
};
type InvoicePDFParam = {
    body: FinancePlatformModel.InvoicePdfRequest;
};
type InvoicePaymentDetailsParam = {
    /**
     * - Invoice Number for which the data will be
     * returned.Invoice_Number is required.
     */
    invoiceNumber: string;
};
type InvoiceTypeParam = {
    body: FinancePlatformModel.InvoiceTypeRequest;
};
type IsCnRefundMethodParam = {
    body: FinancePlatformModel.IsCnRefundMethodRequest;
};
type IsCreditlinePlatformParam = {
    body: FinancePlatformModel.IsCreditlinePlatformRequest;
};
type PaymentProcessParam = {
    body: FinancePlatformModel.PaymentProcessRequest;
};
type UnlockCreditNoteParam = {
    body: FinancePlatformModel.UnlockCreditNoteRequest;
};
import FinancePlatformModel = require("sdk/output/javascript/code/sdk/platform/Finance/FinancePlatformModel");
