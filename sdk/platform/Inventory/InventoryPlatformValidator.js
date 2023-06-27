const Joi = require("joi");

const InventoryPlatformModel = require("./InventoryPlatformModel");

/**
 * @typedef createJob
 * @property {InventoryPlatformModel.JobConfigDTO} body
 */

/**
 * @typedef disable
 * @property {string} integrationId - IntegrationId
 */

/** @typedef getConfigByCompany */

/**
 * @typedef getJobByCode
 * @property {string} code - Job Code
 */

/**
 * @typedef getJobByCompanyAndIntegration
 * @property {string} integrationId - Integration Id
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */

/**
 * @typedef getJobCodeMetrics
 * @property {string} code - Code
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [status] - Status
 * @property {string} [date] - From Date
 */

/**
 * @typedef getJobCodesByCompanyAndIntegration
 * @property {string} integrationId - Integration Id
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */

/** @typedef getJobConfigDefaults */

/**
 * @typedef getJobSteps
 * @property {number} jobId - Job Id
 */

/**
 * @typedef getJobsByCompany
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */

/**
 * @typedef suppressStores
 * @property {InventoryPlatformModel.SuppressStorePayload} body
 */

/**
 * @typedef updateJob
 * @property {InventoryPlatformModel.JobConfigDTO} body
 */

class InventoryPlatformValidator {
  /** @returns {createJob} */
  static createJob() {
    return Joi.object({
      body: InventoryPlatformModel.JobConfigDTO().required(),
    }).required();
  }

  /** @returns {disable} */
  static disable() {
    return Joi.object({
      integrationId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getConfigByCompany} */
  static getConfigByCompany() {
    return Joi.object({}).required();
  }

  /** @returns {getJobByCode} */
  static getJobByCode() {
    return Joi.object({
      code: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getJobByCompanyAndIntegration} */
  static getJobByCompanyAndIntegration() {
    return Joi.object({
      integrationId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getJobCodeMetrics} */
  static getJobCodeMetrics() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      status: Joi.string().allow(""),
      date: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getJobCodesByCompanyAndIntegration} */
  static getJobCodesByCompanyAndIntegration() {
    return Joi.object({
      integrationId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getJobConfigDefaults} */
  static getJobConfigDefaults() {
    return Joi.object({}).required();
  }

  /** @returns {getJobSteps} */
  static getJobSteps() {
    return Joi.object({
      jobId: Joi.number().required(),
    }).required();
  }

  /** @returns {getJobsByCompany} */
  static getJobsByCompany() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {suppressStores} */
  static suppressStores() {
    return Joi.object({
      body: InventoryPlatformModel.SuppressStorePayload().required(),
    }).required();
  }

  /** @returns {updateJob} */
  static updateJob() {
    return Joi.object({
      body: InventoryPlatformModel.JobConfigDTO().required(),
    }).required();
  }
}

module.exports = InventoryPlatformValidator;
