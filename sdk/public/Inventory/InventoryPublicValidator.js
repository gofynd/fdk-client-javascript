const Joi = require("joi");

const InventoryPublicModel = require("./InventoryPublicModel");

/**
 * @typedef getApiKey
 * @property {string} userName - Integration id
 * @property {string} password - Company/store token
 */

/**
 * @typedef getConfigByApiKey
 * @property {string} apikey - Api key
 */

/**
 * @typedef getJobByCode
 * @property {string} code - Job Code
 */

/**
 * @typedef getJobCodesMetrics
 * @property {boolean} [dailyJob] - Daily Job Flag
 * @property {string} [jobCode] - Email Job Code
 */

/**
 * @typedef getJobConfigByIntegrationType
 * @property {string} integrationType - Integration Type
 * @property {boolean} [disable] - JobConfig current state
 */

/**
 * @typedef saveJobCodesMetrics
 * @property {InventoryPublicModel.EmailJobMetrics} body
 */

class InventoryPublicValidator {
  /** @returns {getApiKey} */
  static getApiKey() {
    return Joi.object({
      userName: Joi.string().allow("").required(),
      password: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getConfigByApiKey} */
  static getConfigByApiKey() {
    return Joi.object({
      apikey: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getJobByCode} */
  static getJobByCode() {
    return Joi.object({
      code: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getJobCodesMetrics} */
  static getJobCodesMetrics() {
    return Joi.object({
      dailyJob: Joi.boolean(),
      jobCode: Joi.string().allow(""),
    });
  }

  /** @returns {getJobConfigByIntegrationType} */
  static getJobConfigByIntegrationType() {
    return Joi.object({
      integrationType: Joi.string().allow("").required(),
      disable: Joi.boolean(),
    }).required();
  }

  /** @returns {saveJobCodesMetrics} */
  static saveJobCodesMetrics() {
    return Joi.object({
      body: InventoryPublicModel.EmailJobMetrics().required(),
    }).required();
  }
}

module.exports = InventoryPublicValidator;
