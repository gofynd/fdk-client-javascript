const Joi = require("joi");

const FinancePlatformModel = require("./FinancePlatformModel");

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

class FinancePlatformValidator {
  /** @returns {ChannelDisplayNameParam} */
  static channelDisplayName() {
    return Joi.object({
      filterKey: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {CreateSellerCreditNoteConfigParam} */
  static createSellerCreditNoteConfig() {
    return Joi.object({
      body: FinancePlatformModel.CreateSellerCreditNoteConfigRequest().required(),
    }).required();
  }

  /** @returns {CreditNoteDetailsParam} */
  static creditNoteDetails() {
    return Joi.object({
      body: FinancePlatformModel.CreditNoteDetailsRequest().required(),
    }).required();
  }

  /** @returns {CreditlineDataplatformParam} */
  static creditlineDataplatform() {
    return Joi.object({
      body: FinancePlatformModel.CreditlineDataPlatformRequest().required(),
    }).required();
  }

  /** @returns {DeleteConfigParam} */
  static deleteConfig() {
    return Joi.object({
      body: FinancePlatformModel.DeleteConfigRequest().required(),
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

  /** @returns {DownloadReportCustomerCnParam} */
  static downloadReportCustomerCn() {
    return Joi.object({
      body: FinancePlatformModel.DownloadReportCustomerCnRequest().required(),
    }).required();
  }

  /** @returns {GenerateReportParam} */
  static generateReport() {
    return Joi.object({
      body: FinancePlatformModel.GenerateReportRequest().required(),
    }).required();
  }

  /** @returns {GenerateReportCustomerCnParam} */
  static generateReportCustomerCn() {
    return Joi.object({
      body: FinancePlatformModel.GenerateReportCustomerCnRequest().required(),
    }).required();
  }

  /** @returns {GetAffiliateParam} */
  static getAffiliate() {
    return Joi.object({
      body: FinancePlatformModel.GetAffiliate().required(),
    }).required();
  }

  /** @returns {GetCnConfigParam} */
  static getCnConfig() {
    return Joi.object({
      body: FinancePlatformModel.GetCnConfigRequest().required(),
    }).required();
  }

  /** @returns {GetCustomerCreditBalanceParam} */
  static getCustomerCreditBalance() {
    return Joi.object({
      body: FinancePlatformModel.GetCustomerCreditBalanceRequest().required(),
    }).required();
  }

  /** @returns {GetDataParam} */
  static getData() {
    return Joi.object({
      body: FinancePlatformModel.GetEngineRequest().required(),
    }).required();
  }

  /** @returns {GetPdfUrlViewParam} */
  static getPdfUrlView() {
    return Joi.object({
      body: FinancePlatformModel.GetPdfUrlViewRequest().required(),
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

  /** @returns {GetReportingFiltersParam} */
  static getReportingFilters() {
    return Joi.object({
      filterKey: Joi.string().allow("").required(),
      affiliateId: Joi.string().allow(""),
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

  /** @returns {IsCnRefundMethodParam} */
  static isCnRefundMethod() {
    return Joi.object({
      body: FinancePlatformModel.IsCnRefundMethodRequest().required(),
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
