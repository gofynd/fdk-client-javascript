export = FinancePlatformValidator;
/**
 * @typedef asCnRefund
 * @property {FinancePlatformModel.AsCnRefundRequest} body
 */
/**
 * @typedef channelDisplayName
 * @property {string} filterKey - Gives display name for channel.
 */
/**
 * @typedef createSellerCreditNoteConfig
 * @property {FinancePlatformModel.CreateSellerCreditNoteConfigRequest} body
 */
/**
 * @typedef creditNoteDetails
 * @property {FinancePlatformModel.CreditNoteDetailsRequest} body
 */
/**
 * @typedef creditlineDataplatform
 * @property {FinancePlatformModel.CreditlineDataPlatformRequest} body
 */
/**
 * @typedef deleteConfig
 * @property {FinancePlatformModel.DeleteConfigRequest} body
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
 * @typedef downloadReportCustomerCn
 * @property {FinancePlatformModel.DownloadReportCustomerCnRequest} body
 */
/**
 * @typedef generateReport
 * @property {FinancePlatformModel.GenerateReportRequest} body
 */
/**
 * @typedef generateReportCustomerCn
 * @property {FinancePlatformModel.GenerateReportCustomerCnRequest} body
 */
/**
 * @typedef getAffiliate
 * @property {FinancePlatformModel.GetAffiliate} body
 */
/**
 * @typedef getCnConfig
 * @property {FinancePlatformModel.GetCnConfigRequest} body
 */
/**
 * @typedef getCustomerCreditBalance
 * @property {FinancePlatformModel.GetCustomerCreditBalanceRequest} body
 */
/**
 * @typedef getData
 * @property {FinancePlatformModel.GetEngineRequest} body
 */
/**
 * @typedef getPdfUrlView
 * @property {FinancePlatformModel.GetPdfUrlViewRequest} body
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
 * @typedef getReportingFilters
 * @property {string} filterKey - Filter type.
 * @property {string} [affiliateId] - Affiliate id.
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
    export { asCnRefund, channelDisplayName, createSellerCreditNoteConfig, creditNoteDetails, creditlineDataplatform, deleteConfig, downloadCreditDebitNote, downloadReport, downloadReportCustomerCn, generateReport, generateReportCustomerCn, getAffiliate, getCnConfig, getCustomerCreditBalance, getData, getPdfUrlView, getReason, getReportList, getReportingFilters, invoiceListing, invoicePDF, invoiceType, isCreditlinePlatform, paymentProcess };
}
/** @returns {asCnRefund} */
declare function asCnRefund(): asCnRefund;
type asCnRefund = {
    body: FinancePlatformModel.AsCnRefundRequest;
};
/** @returns {channelDisplayName} */
declare function channelDisplayName(): channelDisplayName;
type channelDisplayName = {
    /**
     * - Gives display name for channel.
     */
    filterKey: string;
};
/** @returns {createSellerCreditNoteConfig} */
declare function createSellerCreditNoteConfig(): createSellerCreditNoteConfig;
type createSellerCreditNoteConfig = {
    body: FinancePlatformModel.CreateSellerCreditNoteConfigRequest;
};
/** @returns {creditNoteDetails} */
declare function creditNoteDetails(): creditNoteDetails;
type creditNoteDetails = {
    body: FinancePlatformModel.CreditNoteDetailsRequest;
};
/** @returns {creditlineDataplatform} */
declare function creditlineDataplatform(): creditlineDataplatform;
type creditlineDataplatform = {
    body: FinancePlatformModel.CreditlineDataPlatformRequest;
};
/** @returns {deleteConfig} */
declare function deleteConfig(): deleteConfig;
type deleteConfig = {
    body: FinancePlatformModel.DeleteConfigRequest;
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
/** @returns {downloadReportCustomerCn} */
declare function downloadReportCustomerCn(): downloadReportCustomerCn;
type downloadReportCustomerCn = {
    body: FinancePlatformModel.DownloadReportCustomerCnRequest;
};
/** @returns {generateReport} */
declare function generateReport(): generateReport;
type generateReport = {
    body: FinancePlatformModel.GenerateReportRequest;
};
/** @returns {generateReportCustomerCn} */
declare function generateReportCustomerCn(): generateReportCustomerCn;
type generateReportCustomerCn = {
    body: FinancePlatformModel.GenerateReportCustomerCnRequest;
};
/** @returns {getAffiliate} */
declare function getAffiliate(): getAffiliate;
type getAffiliate = {
    body: FinancePlatformModel.GetAffiliate;
};
/** @returns {getCnConfig} */
declare function getCnConfig(): getCnConfig;
type getCnConfig = {
    body: FinancePlatformModel.GetCnConfigRequest;
};
/** @returns {getCustomerCreditBalance} */
declare function getCustomerCreditBalance(): getCustomerCreditBalance;
type getCustomerCreditBalance = {
    body: FinancePlatformModel.GetCustomerCreditBalanceRequest;
};
/** @returns {getData} */
declare function getData(): getData;
type getData = {
    body: FinancePlatformModel.GetEngineRequest;
};
/** @returns {getPdfUrlView} */
declare function getPdfUrlView(): getPdfUrlView;
type getPdfUrlView = {
    body: FinancePlatformModel.GetPdfUrlViewRequest;
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
/** @returns {getReportingFilters} */
declare function getReportingFilters(): getReportingFilters;
type getReportingFilters = {
    /**
     * - Filter type.
     */
    filterKey: string;
    /**
     * - Affiliate id.
     */
    affiliateId?: string;
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
