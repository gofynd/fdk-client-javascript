export = FinancePlatformValidator;
/**
 * @typedef ChannelDisplayNameParam
 * @property {string} filterKey - Gives display name for channel.
 */
/**
 * @typedef CreateSellerCreditNoteConfigParam
 * @property {FinancePlatformModel.CreateSellerCreditNoteConfigReq} body
 */
/**
 * @typedef CreditNoteDetailsParam
 * @property {FinancePlatformModel.CreditNoteDetailsReq} body
 */
/**
 * @typedef CreditlineDataplatformParam
 * @property {FinancePlatformModel.CreditlineDataPlatformReq} body
 */
/**
 * @typedef DeleteConfigParam
 * @property {FinancePlatformModel.DeleteConfigReq} body
 */
/**
 * @typedef DownloadCreditDebitNoteParam
 * @property {FinancePlatformModel.DownloadCreditDebitNoteReq} body
 */
/**
 * @typedef DownloadReportParam
 * @property {FinancePlatformModel.DownloadReport} body
 */
/**
 * @typedef DownloadReportCustomerCnParam
 * @property {FinancePlatformModel.DownloadReportCustomerCnReq} body
 */
/**
 * @typedef GenerateReportParam
 * @property {FinancePlatformModel.GenerateReportReq} body
 */
/**
 * @typedef GenerateReportCustomerCnParam
 * @property {FinancePlatformModel.GenerateReportCustomerCnReq} body
 */
/**
 * @typedef GetAffiliateParam
 * @property {FinancePlatformModel.GetAffiliate} body
 */
/**
 * @typedef GetCnConfigParam
 * @property {FinancePlatformModel.GetCnConfigReq} body
 */
/**
 * @typedef GetCustomerCreditBalanceParam
 * @property {FinancePlatformModel.GetCustomerCreditBalanceReq} body
 */
/**
 * @typedef GetDataParam
 * @property {FinancePlatformModel.GetEngineReq} body
 */
/**
 * @typedef GetPdfUrlViewParam
 * @property {FinancePlatformModel.GetPdfUrlViewReq} body
 */
/**
 * @typedef GetReasonParam
 * @property {FinancePlatformModel.GetReasonReq} body
 */
/**
 * @typedef GetReportListParam
 * @property {FinancePlatformModel.GetReportListReq} body
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
 * @property {FinancePlatformModel.InvoiceListingReq} body
 */
/**
 * @typedef InvoicePDFParam
 * @property {FinancePlatformModel.InvoicePdfReq} body
 */
/**
 * @typedef InvoicePaymentDetailsParam
 * @property {string} invoiceNumber - Invoice Number for which the data will be
 *   returned.Invoice_Number is required.
 */
/**
 * @typedef InvoicePaymentOptionsParam
 * @property {FinancePlatformModel.InvoicePaymentOptionsReq} body
 */
/**
 * @typedef InvoiceTypeParam
 * @property {FinancePlatformModel.InvoiceTypeReq} body
 */
/**
 * @typedef IsCnRefundMethodParam
 * @property {FinancePlatformModel.IsCnRefundMethodReq} body
 */
/**
 * @typedef IsCreditlinePlatformParam
 * @property {FinancePlatformModel.IsCreditlinePlatformReq} body
 */
/** @typedef OrderFreezeParam */
/**
 * @typedef PaymentProcessParam
 * @property {FinancePlatformModel.PaymentProcessReq} body
 */
/**
 * @typedef UnlockCreditNoteParam
 * @property {FinancePlatformModel.UnlockCreditNoteReq} body
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
    /** @returns {InvoicePaymentOptionsParam} */
    static invoicePaymentOptions(): InvoicePaymentOptionsParam;
    /** @returns {InvoiceTypeParam} */
    static invoiceType(): InvoiceTypeParam;
    /** @returns {IsCnRefundMethodParam} */
    static isCnRefundMethod(): IsCnRefundMethodParam;
    /** @returns {IsCreditlinePlatformParam} */
    static isCreditlinePlatform(): IsCreditlinePlatformParam;
    /** @returns {OrderFreezeParam} */
    static orderFreeze(): any;
    /** @returns {PaymentProcessParam} */
    static paymentProcess(): PaymentProcessParam;
    /** @returns {UnlockCreditNoteParam} */
    static unlockCreditNote(): UnlockCreditNoteParam;
}
declare namespace FinancePlatformValidator {
    export { ChannelDisplayNameParam, CreateSellerCreditNoteConfigParam, CreditNoteDetailsParam, CreditlineDataplatformParam, DeleteConfigParam, DownloadCreditDebitNoteParam, DownloadReportParam, DownloadReportCustomerCnParam, GenerateReportParam, GenerateReportCustomerCnParam, GetAffiliateParam, GetCnConfigParam, GetCustomerCreditBalanceParam, GetDataParam, GetPdfUrlViewParam, GetReasonParam, GetReportListParam, GetReportingFiltersParam, InvoiceActivityLogsParam, InvoiceListingParam, InvoicePDFParam, InvoicePaymentDetailsParam, InvoicePaymentOptionsParam, InvoiceTypeParam, IsCnRefundMethodParam, IsCreditlinePlatformParam, OrderFreezeParam, PaymentProcessParam, UnlockCreditNoteParam };
}
type ChannelDisplayNameParam = {
    /**
     * - Gives display name for channel.
     */
    filterKey: string;
};
type CreateSellerCreditNoteConfigParam = {
    body: FinancePlatformModel.CreateSellerCreditNoteConfigReq;
};
type CreditNoteDetailsParam = {
    body: FinancePlatformModel.CreditNoteDetailsReq;
};
type CreditlineDataplatformParam = {
    body: FinancePlatformModel.CreditlineDataPlatformReq;
};
type DeleteConfigParam = {
    body: FinancePlatformModel.DeleteConfigReq;
};
type DownloadCreditDebitNoteParam = {
    body: FinancePlatformModel.DownloadCreditDebitNoteReq;
};
type DownloadReportParam = {
    body: FinancePlatformModel.DownloadReport;
};
type DownloadReportCustomerCnParam = {
    body: FinancePlatformModel.DownloadReportCustomerCnReq;
};
type GenerateReportParam = {
    body: FinancePlatformModel.GenerateReportReq;
};
type GenerateReportCustomerCnParam = {
    body: FinancePlatformModel.GenerateReportCustomerCnReq;
};
type GetAffiliateParam = {
    body: FinancePlatformModel.GetAffiliate;
};
type GetCnConfigParam = {
    body: FinancePlatformModel.GetCnConfigReq;
};
type GetCustomerCreditBalanceParam = {
    body: FinancePlatformModel.GetCustomerCreditBalanceReq;
};
type GetDataParam = {
    body: FinancePlatformModel.GetEngineReq;
};
type GetPdfUrlViewParam = {
    body: FinancePlatformModel.GetPdfUrlViewReq;
};
type GetReasonParam = {
    body: FinancePlatformModel.GetReasonReq;
};
type GetReportListParam = {
    body: FinancePlatformModel.GetReportListReq;
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
    body: FinancePlatformModel.InvoiceListingReq;
};
type InvoicePDFParam = {
    body: FinancePlatformModel.InvoicePdfReq;
};
type InvoicePaymentDetailsParam = {
    /**
     * - Invoice Number for which the data will be
     * returned.Invoice_Number is required.
     */
    invoiceNumber: string;
};
type InvoicePaymentOptionsParam = {
    body: FinancePlatformModel.InvoicePaymentOptionsReq;
};
type InvoiceTypeParam = {
    body: FinancePlatformModel.InvoiceTypeReq;
};
type IsCnRefundMethodParam = {
    body: FinancePlatformModel.IsCnRefundMethodReq;
};
type IsCreditlinePlatformParam = {
    body: FinancePlatformModel.IsCreditlinePlatformReq;
};
type PaymentProcessParam = {
    body: FinancePlatformModel.PaymentProcessReq;
};
type UnlockCreditNoteParam = {
    body: FinancePlatformModel.UnlockCreditNoteReq;
};
type OrderFreezeParam = any;
import FinancePlatformModel = require("sdk/output/javascript/code/sdk/platform/Finance/FinancePlatformModel");
