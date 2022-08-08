const Joi = require("joi");
const Validator = require("../PlatformModels");
class ConfigurationValidator {
  static createApplication() {
    return Joi.object({
      body: Validator.CreateApplicationRequest().required(),
    }).required();
  }

  static getApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static getCurrencies() {
    return Joi.object({}).required();
  }

  static getDomainAvailibility() {
    return Joi.object({
      body: Validator.DomainSuggestionsRequest().required(),
    }).required();
  }

  static getIntegrationById() {
    return Joi.object({
      id: Joi.number().required(),
    }).required();
  }

  static getAvailableOptIns() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getSelectedOptIns() {
    return Joi.object({
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getIntegrationLevelConfig() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      opted: Joi.boolean(),
      checkPermission: Joi.boolean(),
    }).required();
  }

  static updateLevelIntegration() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      body: Validator.UpdateIntegrationLevelRequest().required(),
    }).required();
  }

  static getIntegrationByLevelId() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
    }).required();
  }

  static updateLevelUidIntegration() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
      body: Validator.IntegrationLevel().required(),
    }).required();
  }

  static getLevelActiveIntegrations() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
      permission: Joi.string().allow(""),
    }).required();
  }

  static getBrandsByCompany() {
    return Joi.object({
      q: Joi.string().allow(""),
    }).required();
  }

  static getCompanyByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.CompanyByBrandsRequest().required(),
    }).required();
  }

  static getStoreByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.StoreByBrandsRequest().required(),
    }).required();
  }

  static getOtherSellerApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getOtherSellerApplicationById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static optOutFromApplication() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.OptOutInventory().required(),
    }).required();
  }
}
module.exports = ConfigurationValidator;
