const Joi = require("joi");

const ServiceabilityModel = require("./ServiceabilityPlatformModel");
class ServiceabilityValidator {
  static createZone() {
    return Joi.object({
      body: ServiceabilityModel.ZoneRequest().required(),
    }).required();
  }

  static getAllStores() {
    return Joi.object({}).required();
  }

  static getCompanyStoreView() {
    return Joi.object({}).required();
  }

  static getDpCompanyRules() {
    return Joi.object({}).required();
  }

  static getDpRuleInsert() {
    return Joi.object({}).required();
  }

  static getDpRules() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
    }).required();
  }

  static getEntityRegionView() {
    return Joi.object({
      body: ServiceabilityModel.EntityRegionView_Request().required(),
    }).required();
  }

  static getListView() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
      name: Joi.string().allow(""),
      isActive: Joi.boolean(),
      channelIds: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  static getOptimalLocations() {
    return Joi.object({
      body: ServiceabilityModel.ReAssignStoreRequest().required(),
    }).required();
  }

  static getStore() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  static getZoneDataView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
    }).required();
  }

  static updateDpRule() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
      body: ServiceabilityModel.DpRulesUpdateRequest().required(),
    }).required();
  }

  static updateZoneControllerView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
      body: ServiceabilityModel.ZoneUpdateRequest().required(),
    }).required();
  }

  static upsertDpAccount() {
    return Joi.object({
      body: ServiceabilityModel.CompanyDpAccountRequest().required(),
    }).required();
  }

  static upsertDpCompanyRules() {
    return Joi.object({
      body: ServiceabilityModel.DPCompanyRuleRequest().required(),
    }).required();
  }

  static upsertDpRules() {
    return Joi.object({
      body: ServiceabilityModel.DpRuleRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityValidator;
