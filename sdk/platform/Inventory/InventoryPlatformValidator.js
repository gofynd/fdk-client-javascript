const Joi = require("joi");

const InventoryPlatformModel = require("./InventoryPlatformModel");

/**
 * @typedef CreateJobParam
 * @property {InventoryPlatformModel.JobConfigDTO} body
 */

/**
 * @typedef DisableParam
 * @property {string} integrationId - IntegrationId
 */

/** @typedef GetConfigByCompanyParam */

/**
 * @typedef GetJobByCodeParam
 * @property {string} code - Job Code
 */

/**
 * @typedef GetJobByCompanyAndIntegrationParam
 * @property {string} integrationId - Integration Id
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */

/**
 * @typedef GetJobCodeMetricsParam
 * @property {string} code - Code
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [status] - Status
 * @property {string} [date] - From Date
 */

/**
 * @typedef GetJobCodesByCompanyAndIntegrationParam
 * @property {string} integrationId - Integration Id
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */

/** @typedef GetJobConfigDefaultsParam */

/**
 * @typedef GetJobStepsParam
 * @property {number} jobId - Job Id
 */

/**
 * @typedef GetJobsByCompanyParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */

/**
 * @typedef SuppressStoresParam
 * @property {InventoryPlatformModel.SuppressStorePayload} body
 */

/**
 * @typedef UpdateJobParam
 * @property {InventoryPlatformModel.JobConfigDTO} body
 */

class InventoryPlatformValidator {
  /** @returns {CreateJobParam} */
  static createJob() {
    return Joi.object({
      body: InventoryPlatformModel.JobConfigDTO().required(),
    }).required();
  }

  /** @returns {DisableParam} */
  static disable() {
    return Joi.object({
      integrationId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetConfigByCompanyParam} */
  static getConfigByCompany() {
    return Joi.object({}).required();
  }

  /** @returns {GetJobByCodeParam} */
  static getJobByCode() {
    return Joi.object({
      code: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetJobByCompanyAndIntegrationParam} */
  static getJobByCompanyAndIntegration() {
    return Joi.object({
      integrationId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetJobCodeMetricsParam} */
  static getJobCodeMetrics() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      status: Joi.string().allow(""),
      date: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetJobCodesByCompanyAndIntegrationParam} */
  static getJobCodesByCompanyAndIntegration() {
    return Joi.object({
      integrationId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetJobConfigDefaultsParam} */
  static getJobConfigDefaults() {
    return Joi.object({}).required();
  }

  /** @returns {GetJobStepsParam} */
  static getJobSteps() {
    return Joi.object({
      jobId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetJobsByCompanyParam} */
  static getJobsByCompany() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {SuppressStoresParam} */
  static suppressStores() {
    return Joi.object({
      body: InventoryPlatformModel.SuppressStorePayload().required(),
    }).required();
  }

  /** @returns {UpdateJobParam} */
  static updateJob() {
    return Joi.object({
      body: InventoryPlatformModel.JobConfigDTO().required(),
    }).required();
  }
}

module.exports = InventoryPlatformValidator;
