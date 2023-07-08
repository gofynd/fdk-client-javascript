const Joi = require("joi");

const AnalyticsModel = require("./AnalyticsPlatformModel");
class AnalyticsValidator {
  static createExportJob() {
    return Joi.object({
      exportType: Joi.string().allow("").required(),
      body: AnalyticsModel.ExportJobReq().required(),
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
      body: AnalyticsModel.GetLogsListReq().required(),
    }).required();
  }

  static searchLogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      logType: Joi.string().allow("").required(),
      body: AnalyticsModel.SearchLogReq().required(),
    }).required();
  }
}
module.exports = AnalyticsValidator;
