const Joi = require("joi");

const AnalyticsPlatformModel = require("./AnalyticsPlatformModel");

/**
 * @typedef CheckJobStatusByNameV2Param
 * @property {string} provider
 * @property {string} exportType
 * @property {string} fileName - Export job name
 */

/**
 * @typedef ExecuteJobForProvidedParametersV2Param
 * @property {string} provider
 * @property {string} datasource
 * @property {string} exportType
 * @property {AnalyticsPlatformModel.JobExecute} body
 */

/**
 * @typedef StartDownloadForQueryV2Param
 * @property {string} provider
 * @property {string} datasource
 * @property {string} exportType
 * @property {AnalyticsPlatformModel.JobExecute} body
 */

class AnalyticsPlatformApplicationValidator {
  /** @returns {CheckJobStatusByNameV2Param} */
  static checkJobStatusByNameV2() {
    return Joi.object({
      provider: Joi.string().allow("").required(),
      exportType: Joi.string().allow("").required(),
      fileName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ExecuteJobForProvidedParametersV2Param} */
  static executeJobForProvidedParametersV2() {
    return Joi.object({
      provider: Joi.string().allow("").required(),
      datasource: Joi.string().allow("").required(),
      exportType: Joi.string().allow("").required(),
      body: AnalyticsPlatformModel.JobExecute().required(),
    }).required();
  }

  /** @returns {StartDownloadForQueryV2Param} */
  static startDownloadForQueryV2() {
    return Joi.object({
      provider: Joi.string().allow("").required(),
      datasource: Joi.string().allow("").required(),
      exportType: Joi.string().allow("").required(),
      body: AnalyticsPlatformModel.JobExecute().required(),
    }).required();
  }
}

module.exports = AnalyticsPlatformApplicationValidator;
