const Joi = require("joi");

const ConfigurationModel = require("./ConfigurationPlatformModel");
class ConfigurationValidator {
  static createApplication() {
    return Joi.object({
      body: ConfigurationModel.CreateApplicationRequest().required(),
    }).required();
  }

  static getApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static getAvailableOptIns() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
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
      body: ConfigurationModel.CompanyByBrandsRequest().required(),
    }).required();
  }

  static getCurrencies() {
    return Joi.object({}).required();
  }

  static getDomainAvailibility() {
    return Joi.object({
      body: ConfigurationModel.DomainSuggestionsRequest().required(),
    }).required();
  }

  static getIntegrationById() {
    return Joi.object({
      id: Joi.number().required(),
    }).required();
  }

  static getIntegrationByLevelId() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
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

  static getLevelActiveIntegrations() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
    }).required();
  }

  static getOtherSellerApplicationById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getOtherSellerApplications() {
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

  static getStoreByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: ConfigurationModel.StoreByBrandsRequest().required(),
    }).required();
  }

  static optOutFromApplication() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ConfigurationModel.OptOutInventory().required(),
    }).required();
  }

  static updateLevelIntegration() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      body: ConfigurationModel.UpdateIntegrationLevelRequest().required(),
    }).required();
  }

  static updateLevelUidIntegration() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
      body: ConfigurationModel.IntegrationLevel().required(),
    }).required();
  }
}

module.exports = ConfigurationValidator;
