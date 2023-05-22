const Joi = require("joi");

const LogisticsModel = require("./LogisticsPlatformModel");
class LogisticsValidator {
  static getApplicationServiceability() {
    return Joi.object({}).required();
  }

  static getZoneFromPincodeView() {
    return Joi.object({
      body: LogisticsModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }

  static getZonesFromApplicationIdView() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      zoneId: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
    }).required();
  }

  static updatePincodeAuditHistory() {
    return Joi.object({
      body: LogisticsModel.PincodeMopUpdateAuditHistoryRequest().required(),
    }).required();
  }

  static updatePincodeBulkView() {
    return Joi.object({
      body: LogisticsModel.PincodeMopBulkData().required(),
    }).required();
  }

  static updatePincodeCoDListing() {
    return Joi.object({
      body: LogisticsModel.PincodeCodStatusListingRequest().required(),
    }).required();
  }

  static updatePincodeMopView() {
    return Joi.object({
      body: LogisticsModel.PincodeMopData().required(),
    }).required();
  }
}

module.exports = LogisticsValidator;
