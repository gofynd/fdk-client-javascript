const Joi = require("joi");
const Validator = require("../PlatformModels");
class InventoryValidator {
  static getJobsByCompany() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateJob() {
    return Joi.object({
      body: Validator.JobConfigDTO().required(),
    }).required();
  }

  static createJob() {
    return Joi.object({
      body: Validator.JobConfigDTO().required(),
    }).required();
  }

  static suppressStores() {
    return Joi.object({
      body: Validator.SuppressStorePayload().required(),
    }).required();
  }

  static getConfigByCompany() {
    return Joi.object({}).required();
  }

  static getJobSteps() {
    return Joi.object({
      jobId: Joi.number().required(),
    }).required();
  }

  static getJobByCompanyAndIntegration() {
    return Joi.object({
      integrationId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static disable() {
    return Joi.object({
      integrationId: Joi.string().allow("").required(),
    }).required();
  }

  static getJobConfigDefaults() {
    return Joi.object({}).required();
  }

  static getJobByCode() {
    return Joi.object({
      code: Joi.string().allow("").required(),
    }).required();
  }

  static getJobCodeMetrics() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      status: Joi.string().allow(""),
      date: Joi.string().allow(""),
    }).required();
  }

  static getJobCodesByCompanyAndIntegration() {
    return Joi.object({
      integrationId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}
module.exports = InventoryValidator;
