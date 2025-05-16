const Joi = require("joi");

const FinancePlatformModel = require("./FinancePlatformModel");

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
      body: FinancePlatformModel.CreateSellerCreditNoteConfigReq().required(),
    }).required();
  }

  /** @returns {CreditNoteDetailsParam} */
  static creditNoteDetails() {
    return Joi.object({
      body: FinancePlatformModel.CreditNoteDetailsReq().required(),
    }).required();
  }

  /** @returns {CreditlineDataplatformParam} */
  static creditlineDataplatform() {
    return Joi.object({
      body: FinancePlatformModel.CreditlineDataPlatformReq().required(),
    }).required();
  }

  /** @returns {DeleteConfigParam} */
  static deleteConfig() {
    return Joi.object({
      body: FinancePlatformModel.DeleteConfigReq().required(),
    }).required();
  }

  /** @returns {DownloadCreditDebitNoteParam} */
  static downloadCreditDebitNote() {
    return Joi.object({
      body: FinancePlatformModel.DownloadCreditDebitNoteReq().required(),
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
      body: FinancePlatformModel.DownloadReportCustomerCnReq().required(),
    }).required();
  }

  /** @returns {GenerateReportParam} */
  static generateReport() {
    return Joi.object({
      body: FinancePlatformModel.GenerateReportReq().required(),
    }).required();
  }

  /** @returns {GenerateReportCustomerCnParam} */
  static generateReportCustomerCn() {
    return Joi.object({
      body: FinancePlatformModel.GenerateReportCustomerCnReq().required(),
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
      body: FinancePlatformModel.GetCnConfigReq().required(),
    }).required();
  }

  /** @returns {GetCustomerCreditBalanceParam} */
  static getCustomerCreditBalance() {
    return Joi.object({
      body: FinancePlatformModel.GetCustomerCreditBalanceReq().required(),
    }).required();
  }

  /** @returns {GetDataParam} */
  static getData() {
    return Joi.object({
      body: FinancePlatformModel.GetEngineReq().required(),
    }).required();
  }

  /** @returns {GetPdfUrlViewParam} */
  static getPdfUrlView() {
    return Joi.object({
      body: FinancePlatformModel.GetPdfUrlViewReq().required(),
    }).required();
  }

  /** @returns {GetReasonParam} */
  static getReason() {
    return Joi.object({
      body: FinancePlatformModel.GetReasonReq().required(),
    }).required();
  }

  /** @returns {GetReportListParam} */
  static getReportList() {
    return Joi.object({
      body: FinancePlatformModel.GetReportListReq().required(),
    }).required();
  }

  /** @returns {GetReportingFiltersParam} */
  static getReportingFilters() {
    return Joi.object({
      filterKey: Joi.string().allow("").required(),
      affiliateId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {InvoiceActivityLogsParam} */
  static invoiceActivityLogs() {
    return Joi.object({
      invoiceNumber: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {InvoiceListingParam} */
  static invoiceListing() {
    return Joi.object({
      body: FinancePlatformModel.InvoiceListingReq().required(),
    }).required();
  }

  /** @returns {InvoicePDFParam} */
  static invoicePDF() {
    return Joi.object({
      body: FinancePlatformModel.InvoicePdfReq().required(),
    }).required();
  }

  /** @returns {InvoicePaymentDetailsParam} */
  static invoicePaymentDetails() {
    return Joi.object({
      invoiceNumber: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {InvoicePaymentOptionsParam} */
  static invoicePaymentOptions() {
    return Joi.object({
      body: FinancePlatformModel.InvoicePaymentOptionsReq().required(),
    }).required();
  }

  /** @returns {InvoiceTypeParam} */
  static invoiceType() {
    return Joi.object({
      body: FinancePlatformModel.InvoiceTypeReq().required(),
    }).required();
  }

  /** @returns {IsCnRefundMethodParam} */
  static isCnRefundMethod() {
    return Joi.object({
      body: FinancePlatformModel.IsCnRefundMethodReq().required(),
    }).required();
  }

  /** @returns {IsCreditlinePlatformParam} */
  static isCreditlinePlatform() {
    return Joi.object({
      body: FinancePlatformModel.IsCreditlinePlatformReq().required(),
    }).required();
  }

  /** @returns {OrderFreezeParam} */
  static orderFreeze() {
    return Joi.object({}).required();
  }

  /** @returns {PaymentProcessParam} */
  static paymentProcess() {
    return Joi.object({
      body: FinancePlatformModel.PaymentProcessReq().required(),
    }).required();
  }

  /** @returns {UnlockCreditNoteParam} */
  static unlockCreditNote() {
    return Joi.object({
      body: FinancePlatformModel.UnlockCreditNoteReq().required(),
    }).required();
  }
}

module.exports = FinancePlatformValidator;
