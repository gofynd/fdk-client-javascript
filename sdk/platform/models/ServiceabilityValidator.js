const Joi = require("joi");
const Validator = require("../PlatformModels");
class ServiceabilityValidator {
  static getEntityRegionView() {
    return Joi.object({
      body: Validator.EntityRegionView_Request().required(),
    }).required();
  }

  static getListView() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
      name: Joi.string().allow(""),
      isActive: Joi.boolean(),
      channelIds: Joi.string().allow(""),
    }).required();
  }

  static getCompanyStoreView() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateZoneControllerView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
      body: Validator.ZoneUpdateRequest().required(),
    }).required();
  }

  static getZoneDataView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
    }).required();
  }

  static insertZoneControllerView() {
    return Joi.object({
      body: Validator.ZoneRequest().required(),
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
