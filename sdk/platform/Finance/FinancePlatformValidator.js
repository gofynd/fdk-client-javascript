const Joi = require("joi");

const FinancePlatformModel = require("./FinancePlatformModel");

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

class FinancePlatformValidator {
  /** @returns {asCnRefund} */
  static asCnRefund() {
    return Joi.object({
      body: FinancePlatformModel.AsCnRefundRequest().required(),
    }).required();
  }

  /** @returns {channelDisplayName} */
  static channelDisplayName() {
    return Joi.object({
      filterKey: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {createSellerCreditNoteConfig} */
  static createSellerCreditNoteConfig() {
    return Joi.object({
      body: FinancePlatformModel.CreateSellerCreditNoteConfigRequest().required(),
    }).required();
  }

  /** @returns {creditNoteDetails} */
  static creditNoteDetails() {
    return Joi.object({
      body: FinancePlatformModel.CreditNoteDetailsRequest().required(),
    }).required();
  }

  /** @returns {creditlineDataplatform} */
  static creditlineDataplatform() {
    return Joi.object({
      body: FinancePlatformModel.CreditlineDataPlatformRequest().required(),
    }).required();
  }

  /** @returns {deleteConfig} */
  static deleteConfig() {
    return Joi.object({
      body: FinancePlatformModel.DeleteConfigRequest().required(),
    }).required();
  }

  /** @returns {downloadCreditDebitNote} */
  static downloadCreditDebitNote() {
    return Joi.object({
      body: FinancePlatformModel.DownloadCreditDebitNoteRequest().required(),
    }).required();
  }

  /** @returns {downloadReport} */
  static downloadReport() {
    return Joi.object({
      body: FinancePlatformModel.DownloadReport().required(),
    }).required();
  }

  /** @returns {downloadReportCustomerCn} */
  static downloadReportCustomerCn() {
    return Joi.object({
      body: FinancePlatformModel.DownloadReportCustomerCnRequest().required(),
    }).required();
  }

  /** @returns {generateReport} */
  static generateReport() {
    return Joi.object({
      body: FinancePlatformModel.GenerateReportRequest().required(),
    }).required();
  }

  /** @returns {generateReportCustomerCn} */
  static generateReportCustomerCn() {
    return Joi.object({
      body: FinancePlatformModel.GenerateReportCustomerCnRequest().required(),
    }).required();
  }

  /** @returns {getAffiliate} */
  static getAffiliate() {
    return Joi.object({
      body: FinancePlatformModel.GetAffiliate().required(),
    }).required();
  }

  /** @returns {getCnConfig} */
  static getCnConfig() {
    return Joi.object({
      body: FinancePlatformModel.GetCnConfigRequest().required(),
    }).required();
  }

  /** @returns {getCustomerCreditBalance} */
  static getCustomerCreditBalance() {
    return Joi.object({
      body: FinancePlatformModel.GetCustomerCreditBalanceRequest().required(),
    }).required();
  }

  /** @returns {getData} */
  static getData() {
    return Joi.object({
      body: FinancePlatformModel.GetEngineRequest().required(),
    }).required();
  }

  /** @returns {getPdfUrlView} */
  static getPdfUrlView() {
    return Joi.object({
      body: FinancePlatformModel.GetPdfUrlViewRequest().required(),
    }).required();
  }

  /** @returns {getReason} */
  static getReason() {
    return Joi.object({
      body: FinancePlatformModel.GetReasonRequest().required(),
    }).required();
  }

  /** @returns {getReportList} */
  static getReportList() {
    return Joi.object({
      body: FinancePlatformModel.GetReportListRequest().required(),
    }).required();
  }

  /** @returns {getReportingFilters} */
  static getReportingFilters() {
    return Joi.object({
      filterKey: Joi.string().allow("").required(),
      affiliateId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {invoiceListing} */
  static invoiceListing() {
    return Joi.object({
      body: FinancePlatformModel.InvoiceListingRequest().required(),
    }).required();
  }

  /** @returns {invoicePDF} */
  static invoicePDF() {
    return Joi.object({
      body: FinancePlatformModel.InvoicePdfRequest().required(),
    }).required();
  }

  /** @returns {invoiceType} */
  static invoiceType() {
    return Joi.object({
      body: FinancePlatformModel.InvoiceTypeRequest().required(),
    }).required();
  }

  /** @returns {isCreditlinePlatform} */
  static isCreditlinePlatform() {
    return Joi.object({
      body: FinancePlatformModel.IsCreditlinePlatformRequest().required(),
    }).required();
  }

  /** @returns {paymentProcess} */
  static paymentProcess() {
    return Joi.object({
      body: FinancePlatformModel.PaymentProcessRequest().required(),
    }).required();
  }
}

module.exports = FinancePlatformValidator;
