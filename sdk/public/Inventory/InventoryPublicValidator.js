const Joi = require("joi");

const InventoryModel = require("./InventoryPublicModel");
class InventoryValidator {
  static getApiKey() {
    return Joi.object({
      userName: Joi.string().allow("").required(),
      password: Joi.string().allow("").required(),
    }).required();
  }

  static getConfigByApiKey() {
    return Joi.object({
      apikey: Joi.string().allow("").required(),
    }).required();
  }

  static getJobByCode() {
    return Joi.object({
      code: Joi.string().allow("").required(),
    }).required();
  }

  static getJobCodesMetrics() {
    return Joi.object({
      dailyJob: Joi.boolean(),
      jobCode: Joi.string().allow(""),
    });
  }

  static getJobConfigByIntegrationType() {
    return Joi.object({
      integrationType: Joi.string().allow("").required(),
      disable: Joi.boolean(),
    }).required();
  }

  static saveJobCodesMetrics() {
    return Joi.object({
      body: InventoryModel.EmailJobMetrics().required(),
    }).required();
  }
}

module.exports = InventoryValidator;
