const Joi = require("joi");

const ServiceabilityModel = require("./ServiceabilityPlatformModel");
class ServiceabilityValidator {
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

  static getCompanyStoreView() {
    return Joi.object({}).required();
  }

  static getZoneDataView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
    }).required();
  }

  static updateZoneControllerView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
      body: ServiceabilityModel.ZoneUpdateRequest().required(),
    }).required();
  }

  static createZone() {
    return Joi.object({
      body: ServiceabilityModel.ZoneRequest().required(),
    }).required();
  }

  static getStore() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  static getAllStores() {
    return Joi.object({}).required();
  }
}
module.exports = ServiceabilityValidator;
