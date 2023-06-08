const Joi = require("joi");

const ConfigurationModel = require("./ConfigurationPlatformModel");
class ConfigurationValidator {
  static addDomain() {
    return Joi.object({
      body: ConfigurationModel.DomainAddRequest().required(),
    }).required();
  }

  static changeDomainType() {
    return Joi.object({
      body: ConfigurationModel.UpdateDomainTypeRequest().required(),
    }).required();
  }

  static getAppApiTokens() {
    return Joi.object({}).required();
  }

  static getAppBasicDetails() {
    return Joi.object({}).required();
  }

  static getAppCompanies() {
    return Joi.object({
      uid: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getAppContactInfo() {
    return Joi.object({}).required();
  }

  static getAppCurrencyConfig() {
    return Joi.object({}).required();
  }

  static getAppFeatures() {
    return Joi.object({}).required();
  }

  static getAppStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getAppSupportedCurrency() {
    return Joi.object({}).required();
  }

  static getApplicationById() {
    return Joi.object({}).required();
  }

  static getBuildConfig() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
    }).required();
  }

  static getDomainStatus() {
    return Joi.object({
      body: ConfigurationModel.DomainStatusRequest().required(),
    }).required();
  }

  static getDomains() {
    return Joi.object({}).required();
  }

  static getInventoryConfig() {
    return Joi.object({}).required();
  }

  static getOrderingStoresByFilter() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: ConfigurationModel.FilterOrderingStoreRequest().required(),
    }).required();
  }

  static getPreviousVersions() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
    }).required();
  }

  static getStaffOrderingStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static modifyAppFeatures() {
    return Joi.object({
      body: ConfigurationModel.AppFeatureRequest().required(),
    }).required();
  }

  static partiallyUpdateInventoryConfig() {
    return Joi.object({
      body: ConfigurationModel.AppInventoryPartialUpdate().required(),
    }).required();
  }

  static removeDomainById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateAppApiTokens() {
    return Joi.object({
      body: ConfigurationModel.TokenResponse().required(),
    }).required();
  }

  static updateAppBasicDetails() {
    return Joi.object({
      body: ConfigurationModel.ApplicationDetail().required(),
    }).required();
  }

  static updateAppContactInfo() {
    return Joi.object({
      body: ConfigurationModel.ApplicationInformation().required(),
    }).required();
  }

  static updateAppCurrencyConfig() {
    return Joi.object({
      body: ConfigurationModel.AppSupportedCurrency().required(),
    }).required();
  }

  static updateAppFeatures() {
    return Joi.object({
      body: ConfigurationModel.AppFeatureRequest().required(),
    }).required();
  }

  static updateBuildConfig() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
      body: ConfigurationModel.MobileAppConfigRequest().required(),
    }).required();
  }

  static updateInventoryConfig() {
    return Joi.object({
      body: ConfigurationModel.ApplicationInventory().required(),
    }).required();
  }

  static updateOrderingStoreConfig() {
    return Joi.object({
      body: ConfigurationModel.OrderingStoreConfig().required(),
    }).required();
  }
}

module.exports = ConfigurationValidator;
