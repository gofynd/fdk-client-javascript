const Joi = require("joi");
const Validator = require("../PlatformModels");
class AnalyticsValidator {
  static createExportJob() {
    return Joi.object({
      exportType: Joi.string().allow("").required(),
      body: Validator.ExportJobReq().required(),
    }).required();
  }

  static getExportJobStatus() {
    return Joi.object({
      exportType: Joi.string().allow("").required(),
      jobId: Joi.string().allow("").required(),
    }).required();
  }

  static getLogsList() {
    return Joi.object({
      logType: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.GetLogsListReq().required(),
    }).required();
  }

  static searchLogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      logType: Joi.string().allow("").required(),
      body: Validator.SearchLogReq().required(),
    }).required();
  }
}
module.exports = AnalyticsValidator;
