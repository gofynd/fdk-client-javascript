const Joi = require("joi");

const AnalyticsPlatformModel = require("./AnalyticsPlatformModel");

/**
 * @typedef CheckJobStatusByNameV2Param
 * @property {string} fileName - Download job name
 */

/**
 * @typedef ExecuteJobForProvidedParametersV2Param
 * @property {AnalyticsPlatformModel.JobExecute} body
 */

/**
 * @typedef StartDownloadForQueryV2Param
 * @property {string} exportType - Format in which to be exported(eg. CSV or excel).
 * @property {AnalyticsPlatformModel.FileDownloadRequestBody} body
 */

class AnalyticsPlatformApplicationValidator {
  /** @returns {CheckJobStatusByNameV2Param} */
  static checkJobStatusByNameV2() {
    return Joi.object({
      fileName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ExecuteJobForProvidedParametersV2Param} */
  static executeJobForProvidedParametersV2() {
    return Joi.object({
      body: AnalyticsPlatformModel.JobExecute().required(),
    }).required();
  }

  /** @returns {StartDownloadForQueryV2Param} */
  static startDownloadForQueryV2() {
    return Joi.object({
      exportType: Joi.string().allow("").required(),
      body: AnalyticsPlatformModel.FileDownloadRequestBody().required(),
    }).required();
  }
}

module.exports = AnalyticsPlatformApplicationValidator;
