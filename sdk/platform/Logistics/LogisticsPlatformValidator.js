const Joi = require("joi");

const LogisticsModel = require("./LogisticsPlatformModel");
class LogisticsValidator {
  static createZone() {
    return Joi.object({
      body: LogisticsModel.ZoneRequest().required(),
    }).required();
  }

  static getAllStores() {
    return Joi.object({}).required();
  }

  static getCompanyStoreView() {
    return Joi.object({}).required();
  }

  static getEntityRegionView() {
    return Joi.object({
      body: LogisticsModel.EntityRegionView_Request().required(),
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

  static updateZoneControllerView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
      body: LogisticsModel.ZoneUpdateRequest().required(),
    }).required();
  }
}

module.exports = LogisticsValidator;
