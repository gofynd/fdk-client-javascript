const Joi = require("joi");

const FinanceModel = require("./FinancePlatformModel");
class FinanceValidator {
  static channelDisplayName() {
    return Joi.object({
      filterKey: Joi.string().allow("").required(),
    }).required();
  }

  static createSellerCreditNoteConfig() {
    return Joi.object({
      body: FinanceModel.CreateSellerCreditNoteConfigRequest().required(),
    }).required();
  }

  static creditNoteDetails() {
    return Joi.object({
      body: FinanceModel.CreditNoteDetailsRequest().required(),
    }).required();
  }

  static creditlineDataplatform() {
    return Joi.object({
      body: FinanceModel.CreditlineDataPlatformRequest().required(),
    }).required();
  }

  static deleteConfig() {
    return Joi.object({
      body: FinanceModel.DeleteConfigRequest().required(),
    }).required();
  }

  static downloadCreditDebitNote() {
    return Joi.object({
      body: FinanceModel.DownloadCreditDebitNoteRequest().required(),
    }).required();
  }

  static downloadReport() {
    return Joi.object({
      body: FinanceModel.DownloadReport().required(),
    }).required();
  }

  static downloadReportCustomerCn() {
    return Joi.object({
      body: FinanceModel.DownloadReportCustomerCnRequest().required(),
    }).required();
  }

  static generateReport() {
    return Joi.object({
      body: FinanceModel.GenerateReportRequest().required(),
    }).required();
  }

  static generateReportCustomerCn() {
    return Joi.object({
      body: FinanceModel.GenerateReportCustomerCnRequest().required(),
    }).required();
  }

  static getAffiliate() {
    return Joi.object({
      body: FinanceModel.GetAffiliate().required(),
    }).required();
  }

  static getCnConfig() {
    return Joi.object({
      body: FinanceModel.GetCnConfigRequest().required(),
    }).required();
  }

  static getCustomerCreditBalance() {
    return Joi.object({
      body: FinanceModel.GetCustomerCreditBalanceRequest().required(),
    }).required();
  }

  static getData() {
    return Joi.object({
      body: FinanceModel.GetEngineRequest().required(),
    }).required();
  }

  static getPdfUrlView() {
    return Joi.object({
      body: FinanceModel.GetPdfUrlViewRequest().required(),
    }).required();
  }

  static getReason() {
    return Joi.object({
      body: FinanceModel.GetReasonRequest().required(),
    }).required();
  }

  static getReportList() {
    return Joi.object({
      body: FinanceModel.GetReportListRequest().required(),
    }).required();
  }

  static getReportingFilters() {
    return Joi.object({
      filterKey: Joi.string().allow("").required(),
      affiliateId: Joi.string().allow(""),
    }).required();
  }

  static invoiceListing() {
    return Joi.object({
      body: FinanceModel.InvoiceListingRequest().required(),
    }).required();
  }

  static invoicePDF() {
    return Joi.object({
      body: FinanceModel.InvoicePdfRequest().required(),
    }).required();
  }

  static invoiceType() {
    return Joi.object({
      body: FinanceModel.InvoiceTypeRequest().required(),
    }).required();
  }

  static isCnRefundMethod() {
    return Joi.object({
      body: FinanceModel.IsCnRefundMethodRequest().required(),
    }).required();
  }

  static isCreditlinePlatform() {
    return Joi.object({
      body: FinanceModel.IsCreditlinePlatformRequest().required(),
    }).required();
  }

  static paymentProcess() {
    return Joi.object({
      body: FinanceModel.PaymentProcessRequest().required(),
    }).required();
  }
}

module.exports = FinanceValidator;
