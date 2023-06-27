const Joi = require("joi");

const FinancePlatformModel = require("./FinancePlatformModel");

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

class FinancePlatformValidator {
  /** @returns {creditlineDataplatform} */
  static creditlineDataplatform() {
    return Joi.object({
      body: FinancePlatformModel.CreditlineDataPlatformRequest().required(),
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

  /** @returns {generateReport} */
  static generateReport() {
    return Joi.object({
      body: FinancePlatformModel.GenerateReportRequest().required(),
    }).required();
  }

  /** @returns {getAffiliate} */
  static getAffiliate() {
    return Joi.object({
      body: FinancePlatformModel.GetAffiliate().required(),
    }).required();
  }

  /** @returns {getData} */
  static getData() {
    return Joi.object({
      body: FinancePlatformModel.GetEngineRequest().required(),
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
