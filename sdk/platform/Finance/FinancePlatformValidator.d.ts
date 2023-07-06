export = FinancePlatformValidator;
/**
 * @typedef AsCnRefundParam
 * @property {FinancePlatformModel.AsCnRefundRequest} body
 */
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
 * @typedef InvoiceListingParam
 * @property {FinancePlatformModel.InvoiceListingRequest} body
 */
/**
 * @typedef InvoicePDFParam
 * @property {FinancePlatformModel.InvoicePdfRequest} body
 */
/**
 * @typedef InvoiceTypeParam
 * @property {FinancePlatformModel.InvoiceTypeRequest} body
 */
/**
 * @typedef IsCreditlinePlatformParam
 * @property {FinancePlatformModel.IsCreditlinePlatformRequest} body
 */
/**
 * @typedef PaymentProcessParam
 * @property {FinancePlatformModel.PaymentProcessRequest} body
 */
declare class FinancePlatformValidator {
    /** @returns {asCnRefund} */
    static asCnRefund(): asCnRefund;
    /** @returns {channelDisplayName} */
    static channelDisplayName(): channelDisplayName;
    /** @returns {createSellerCreditNoteConfig} */
    static createSellerCreditNoteConfig(): createSellerCreditNoteConfig;
    /** @returns {creditNoteDetails} */
    static creditNoteDetails(): creditNoteDetails;
    /** @returns {creditlineDataplatform} */
    static creditlineDataplatform(): creditlineDataplatform;
    /** @returns {deleteConfig} */
    static deleteConfig(): deleteConfig;
    /** @returns {downloadCreditDebitNote} */
    static downloadCreditDebitNote(): downloadCreditDebitNote;
    /** @returns {downloadReport} */
    static downloadReport(): downloadReport;
    /** @returns {downloadReportCustomerCn} */
    static downloadReportCustomerCn(): downloadReportCustomerCn;
    /** @returns {generateReport} */
    static generateReport(): generateReport;
    /** @returns {generateReportCustomerCn} */
    static generateReportCustomerCn(): generateReportCustomerCn;
    /** @returns {getAffiliate} */
    static getAffiliate(): getAffiliate;
    /** @returns {getCnConfig} */
    static getCnConfig(): getCnConfig;
    /** @returns {getCustomerCreditBalance} */
    static getCustomerCreditBalance(): getCustomerCreditBalance;
    /** @returns {getData} */
    static getData(): getData;
    /** @returns {getPdfUrlView} */
    static getPdfUrlView(): getPdfUrlView;
    /** @returns {getReason} */
    static getReason(): getReason;
    /** @returns {getReportList} */
    static getReportList(): getReportList;
    /** @returns {getReportingFilters} */
    static getReportingFilters(): getReportingFilters;
    /** @returns {invoiceListing} */
    static invoiceListing(): invoiceListing;
    /** @returns {invoicePDF} */
    static invoicePDF(): invoicePDF;
    /** @returns {invoiceType} */
    static invoiceType(): invoiceType;
    /** @returns {isCreditlinePlatform} */
    static isCreditlinePlatform(): isCreditlinePlatform;
    /** @returns {paymentProcess} */
    static paymentProcess(): paymentProcess;
}
declare namespace FinancePlatformValidator {
    export { AsCnRefundParam, ChannelDisplayNameParam, CreateSellerCreditNoteConfigParam, CreditNoteDetailsParam, CreditlineDataplatformParam, DeleteConfigParam, DownloadCreditDebitNoteParam, DownloadReportParam, DownloadReportCustomerCnParam, GenerateReportParam, GenerateReportCustomerCnParam, GetAffiliateParam, GetCnConfigParam, GetCustomerCreditBalanceParam, GetDataParam, GetPdfUrlViewParam, GetReasonParam, GetReportListParam, GetReportingFiltersParam, InvoiceListingParam, InvoicePDFParam, InvoiceTypeParam, IsCreditlinePlatformParam, PaymentProcessParam };
}
type AsCnRefundParam = {
    body: FinancePlatformModel.AsCnRefundRequest;
};
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
type InvoiceListingParam = {
    body: FinancePlatformModel.InvoiceListingRequest;
};
type InvoicePDFParam = {
    body: FinancePlatformModel.InvoicePdfRequest;
};
type InvoiceTypeParam = {
    body: FinancePlatformModel.InvoiceTypeRequest;
};
type IsCreditlinePlatformParam = {
    body: FinancePlatformModel.IsCreditlinePlatformRequest;
};
type PaymentProcessParam = {
    body: FinancePlatformModel.PaymentProcessRequest;
};
import FinancePlatformModel = require("./FinancePlatformModel");
