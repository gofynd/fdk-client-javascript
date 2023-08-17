const Joi = require("joi");

const FinancePlatformModel = require("./FinancePlatformModel");

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

class FinancePlatformValidator {
  /** @returns {CreditlineDataplatformParam} */
  static creditlineDataplatform() {
    return Joi.object({
      body: FinancePlatformModel.CreditlineDataPlatformRequest().required(),
    }).required();
  }

  /** @returns {DownloadCreditDebitNoteParam} */
  static downloadCreditDebitNote() {
    return Joi.object({
      body: FinancePlatformModel.DownloadCreditDebitNoteRequest().required(),
    }).required();
  }

  /** @returns {DownloadReportParam} */
  static downloadReport() {
    return Joi.object({
      body: FinancePlatformModel.DownloadReport().required(),
    }).required();
  }

  /** @returns {GenerateReportParam} */
  static generateReport() {
    return Joi.object({
      body: FinancePlatformModel.GenerateReportRequest().required(),
    }).required();
  }

  /** @returns {GetAffiliateParam} */
  static getAffiliate() {
    return Joi.object({
      body: FinancePlatformModel.GetAffiliate().required(),
    }).required();
  }

  /** @returns {GetDataParam} */
  static getData() {
    return Joi.object({
      body: FinancePlatformModel.GetEngineRequest().required(),
    }).required();
  }

  /** @returns {GetReasonParam} */
  static getReason() {
    return Joi.object({
      body: FinancePlatformModel.GetReasonRequest().required(),
    }).required();
  }

  /** @returns {GetReportListParam} */
  static getReportList() {
    return Joi.object({
      body: FinancePlatformModel.GetReportListRequest().required(),
    }).required();
  }

  /** @returns {InvoiceListingParam} */
  static invoiceListing() {
    return Joi.object({
      body: FinancePlatformModel.InvoiceListingRequest().required(),
    }).required();
  }

  /** @returns {InvoicePDFParam} */
  static invoicePDF() {
    return Joi.object({
      body: FinancePlatformModel.InvoicePdfRequest().required(),
    }).required();
  }

  /** @returns {InvoiceTypeParam} */
  static invoiceType() {
    return Joi.object({
      body: FinancePlatformModel.InvoiceTypeRequest().required(),
    }).required();
  }

  /** @returns {IsCreditlinePlatformParam} */
  static isCreditlinePlatform() {
    return Joi.object({
      body: FinancePlatformModel.IsCreditlinePlatformRequest().required(),
    }).required();
  }

  /** @returns {PaymentProcessParam} */
  static paymentProcess() {
    return Joi.object({
      body: FinancePlatformModel.PaymentProcessRequest().required(),
    }).required();
  }
}

module.exports = FinancePlatformValidator;
