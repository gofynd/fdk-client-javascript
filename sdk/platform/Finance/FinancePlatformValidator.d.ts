export = FinancePlatformValidator;
/**
 * @typedef creditlineDataplatform
 * @property {FinancePlatformModel.CreditlineDataPlatformRequest} body
 */
/**
 * @typedef downloadCreditDebitNote
 * @property {FinancePlatformModel.DownloadCreditDebitNoteRequest} body
 */
/**
 * @typedef downloadReport
 * @property {FinancePlatformModel.DownloadReport} body
 */
/**
 * @typedef generateReport
 * @property {FinancePlatformModel.GenerateReportRequest} body
 */
/**
 * @typedef getAffiliate
 * @property {FinancePlatformModel.GetAffiliate} body
 */
/**
 * @typedef getData
 * @property {FinancePlatformModel.GetEngineRequest} body
 */
/**
 * @typedef getReason
 * @property {FinancePlatformModel.GetReasonRequest} body
 */
/**
 * @typedef getReportList
 * @property {FinancePlatformModel.GetReportListRequest} body
 */
/**
 * @typedef invoiceListing
 * @property {FinancePlatformModel.InvoiceListingRequest} body
 */
/**
 * @typedef invoicePDF
 * @property {FinancePlatformModel.InvoicePdfRequest} body
 */
/**
 * @typedef invoiceType
 * @property {FinancePlatformModel.InvoiceTypeRequest} body
 */
/**
 * @typedef isCreditlinePlatform
 * @property {FinancePlatformModel.IsCreditlinePlatformRequest} body
 */
/**
 * @typedef paymentProcess
 * @property {FinancePlatformModel.PaymentProcessRequest} body
 */
declare class FinancePlatformValidator {
}
declare namespace FinancePlatformValidator {
    export { creditlineDataplatform, downloadCreditDebitNote, downloadReport, generateReport, getAffiliate, getData, getReason, getReportList, invoiceListing, invoicePDF, invoiceType, isCreditlinePlatform, paymentProcess };
}
/** @returns {creditlineDataplatform} */
declare function creditlineDataplatform(): creditlineDataplatform;
type creditlineDataplatform = {
    body: FinancePlatformModel.CreditlineDataPlatformRequest;
};
/** @returns {downloadCreditDebitNote} */
declare function downloadCreditDebitNote(): downloadCreditDebitNote;
type downloadCreditDebitNote = {
    body: FinancePlatformModel.DownloadCreditDebitNoteRequest;
};
/** @returns {downloadReport} */
declare function downloadReport(): downloadReport;
type downloadReport = {
    body: FinancePlatformModel.DownloadReport;
};
/** @returns {generateReport} */
declare function generateReport(): generateReport;
type generateReport = {
    body: FinancePlatformModel.GenerateReportRequest;
};
/** @returns {getAffiliate} */
declare function getAffiliate(): getAffiliate;
type getAffiliate = {
    body: FinancePlatformModel.GetAffiliate;
};
/** @returns {getData} */
declare function getData(): getData;
type getData = {
    body: FinancePlatformModel.GetEngineRequest;
};
/** @returns {getReason} */
declare function getReason(): getReason;
type getReason = {
    body: FinancePlatformModel.GetReasonRequest;
};
/** @returns {getReportList} */
declare function getReportList(): getReportList;
type getReportList = {
    body: FinancePlatformModel.GetReportListRequest;
};
/** @returns {invoiceListing} */
declare function invoiceListing(): invoiceListing;
type invoiceListing = {
    body: FinancePlatformModel.InvoiceListingRequest;
};
/** @returns {invoicePDF} */
declare function invoicePDF(): invoicePDF;
type invoicePDF = {
    body: FinancePlatformModel.InvoicePdfRequest;
};
/** @returns {invoiceType} */
declare function invoiceType(): invoiceType;
type invoiceType = {
    body: FinancePlatformModel.InvoiceTypeRequest;
};
/** @returns {isCreditlinePlatform} */
declare function isCreditlinePlatform(): isCreditlinePlatform;
type isCreditlinePlatform = {
    body: FinancePlatformModel.IsCreditlinePlatformRequest;
};
/** @returns {paymentProcess} */
declare function paymentProcess(): paymentProcess;
type paymentProcess = {
    body: FinancePlatformModel.PaymentProcessRequest;
};
import FinancePlatformModel = require("./FinancePlatformModel");
