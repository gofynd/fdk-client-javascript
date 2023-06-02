const Joi = require("joi");

const FinanceModel = require("./FinancePlatformModel");
class FinanceValidator {
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

  static generateReport() {
    return Joi.object({
      body: FinanceModel.GenerateReportRequest().required(),
    }).required();
  }

  static getAffiliate() {
    return Joi.object({
      body: FinanceModel.GetAffiliate().required(),
    }).required();
  }

  static getData() {
    return Joi.object({
      body: FinanceModel.GetEngineRequest().required(),
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

  static paymentProcess() {
    return Joi.object({
      body: FinanceModel.PaymentProcessRequest().required(),
    }).required();
  }
}

module.exports = FinanceValidator;
