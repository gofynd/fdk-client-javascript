const Validator = require("../PublicModels");
const Joi = require("joi");
class InventoryValidator {
  static getJobCodesMetrics() {
    return Joi.object({
      dailyJob: Joi.boolean(),
      jobCode: Joi.string().allow(""),
    });
  }

  static saveJobCodesMetrics() {
    return Joi.object({
      body: Validator.EmailJobMetrics().required(),
    }).required();
  }

  static getConfigByApiKey() {
    return Joi.object({
      apikey: Joi.string().allow("").required(),
    }).required();
  }

  static getApiKey() {
    return Joi.object({
      userName: Joi.string().allow("").required(),
      password: Joi.string().allow("").required(),
    }).required();
  }

  static getJobByCode() {
    return Joi.object({
      code: Joi.string().allow("").required(),
    }).required();
  }

  static getJobConfigByIntegrationType() {
    return Joi.object({
      integrationType: Joi.string().allow("").required(),
      disable: Joi.boolean(),
    }).required();
  }
}
module.exports = InventoryValidator;
