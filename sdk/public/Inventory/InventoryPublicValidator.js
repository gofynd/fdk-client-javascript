const Joi = require("joi");

const InventoryPublicModel = require("./InventoryPublicModel");

/**
 * @typedef GetApiKeyParam
 * @property {string} userName - Integration id
 * @property {string} password - Company/store token
 */

/**
 * @typedef GetConfigByApiKeyParam
 * @property {string} apikey - Api key
 */

/**
 * @typedef GetJobByCodeParam
 * @property {string} code - Job Code
 */

/**
 * @typedef GetJobCodesMetricsParam
 * @property {boolean} [dailyJob] - Daily Job Flag
 * @property {string} [jobCode] - Email Job Code
 */

/**
 * @typedef GetJobConfigByIntegrationTypeParam
 * @property {string} integrationType - Integration Type
 * @property {boolean} [disable] - JobConfig current state
 */

/**
 * @typedef SaveJobCodesMetricsParam
 * @property {InventoryPublicModel.EmailJobMetrics} body
 */

class InventoryPublicValidator {
  /** @returns {GetApiKeyParam} */
  static getApiKey() {
    return Joi.object({
      userName: Joi.string().allow("").required(),
      password: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetConfigByApiKeyParam} */
  static getConfigByApiKey() {
    return Joi.object({
      apikey: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetJobByCodeParam} */
  static getJobByCode() {
    return Joi.object({
      code: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetJobCodesMetricsParam} */
  static getJobCodesMetrics() {
    return Joi.object({
      dailyJob: Joi.boolean(),
      jobCode: Joi.string().allow(""),
    });
  }

  /** @returns {GetJobConfigByIntegrationTypeParam} */
  static getJobConfigByIntegrationType() {
    return Joi.object({
      integrationType: Joi.string().allow("").required(),
      disable: Joi.boolean(),
    }).required();
  }

  /** @returns {SaveJobCodesMetricsParam} */
  static saveJobCodesMetrics() {
    return Joi.object({
      body: InventoryPublicModel.EmailJobMetrics().required(),
    }).required();
  }
}

module.exports = InventoryPublicValidator;
