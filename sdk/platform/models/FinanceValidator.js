const Joi = require("joi");
const Validator = require("../PlatformModels");
class FinanceValidator {
  static companyId() {
    return Joi.object({
      body: Validator.GenerateReportRequest().required(),
    }).required();
  }

  static companyId() {
    return Joi.object({
      body: Validator.DownloadReport().required(),
    }).required();
  }

  static companyId() {
    return Joi.object({
      body: Validator.GetEngineRequest().required(),
    }).required();
  }

  static companyId() {
    return Joi.object({
      body: Validator.GetReasonRequest().required(),
    }).required();
  }

  static companyId() {
    return Joi.object({
      body: Validator.GetReportListRequest().required(),
    }).required();
  }
}
module.exports = FinanceValidator;
