const Joi = require("joi");
const Validator = require("../PlatformModels");
class ServiceabilityValidator {
  static getEntityRegionView() {
    return Joi.object({
      body: Validator.EntityRegionViewRequest().required(),
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

  static upsertZoneControllerView() {
    return Joi.object({
      body: Validator.ZoneRequest().required(),
    }).required();
  }
}
module.exports = ServiceabilityValidator;
