export = FinancePlatformValidator;
/**
 * @typedef CreditlineDataplatformParam
 * @property {FinancePlatformModel.CreditlineDataPlatformRequest} body
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
 * @typedef GenerateReportParam
 * @property {FinancePlatformModel.GenerateReportRequest} body
 */
/**
 * @typedef GetAffiliateParam
 * @property {FinancePlatformModel.GetAffiliate} body
 */
/**
 * @typedef GetDataParam
 * @property {FinancePlatformModel.GetEngineRequest} body
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
    /** @returns {CreditlineDataplatformParam} */
    static creditlineDataplatform(): CreditlineDataplatformParam;
    /** @returns {DownloadCreditDebitNoteParam} */
    static downloadCreditDebitNote(): DownloadCreditDebitNoteParam;
    /** @returns {DownloadReportParam} */
    static downloadReport(): DownloadReportParam;
    /** @returns {GenerateReportParam} */
    static generateReport(): GenerateReportParam;
    /** @returns {GetAffiliateParam} */
    static getAffiliate(): GetAffiliateParam;
    /** @returns {GetDataParam} */
    static getData(): GetDataParam;
    /** @returns {GetReasonParam} */
    static getReason(): GetReasonParam;
    /** @returns {GetReportListParam} */
    static getReportList(): GetReportListParam;
    /** @returns {InvoiceListingParam} */
    static invoiceListing(): InvoiceListingParam;
    /** @returns {InvoicePDFParam} */
    static invoicePDF(): InvoicePDFParam;
    /** @returns {InvoiceTypeParam} */
    static invoiceType(): InvoiceTypeParam;
    /** @returns {IsCreditlinePlatformParam} */
    static isCreditlinePlatform(): IsCreditlinePlatformParam;
    /** @returns {PaymentProcessParam} */
    static paymentProcess(): PaymentProcessParam;
}
declare namespace FinancePlatformValidator {
    export { CreditlineDataplatformParam, DownloadCreditDebitNoteParam, DownloadReportParam, GenerateReportParam, GetAffiliateParam, GetDataParam, GetReasonParam, GetReportListParam, InvoiceListingParam, InvoicePDFParam, InvoiceTypeParam, IsCreditlinePlatformParam, PaymentProcessParam };
}
type CreditlineDataplatformParam = {
    body: FinancePlatformModel.CreditlineDataPlatformRequest;
};
type DownloadCreditDebitNoteParam = {
    body: FinancePlatformModel.DownloadCreditDebitNoteRequest;
};
type DownloadReportParam = {
    body: FinancePlatformModel.DownloadReport;
};
type GenerateReportParam = {
    body: FinancePlatformModel.GenerateReportRequest;
};
type GetAffiliateParam = {
    body: FinancePlatformModel.GetAffiliate;
};
type GetDataParam = {
    body: FinancePlatformModel.GetEngineRequest;
};
type GetReasonParam = {
    body: FinancePlatformModel.GetReasonRequest;
};
type GetReportListParam = {
    body: FinancePlatformModel.GetReportListRequest;
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
