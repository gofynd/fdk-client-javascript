const Joi = require("joi");

const ServiceabilityModel = require("./ServiceabilityPlatformModel");
class ServiceabilityValidator {
  static getApplicationServiceability() {
    return Joi.object({}).required();
  }

  static getZoneFromPincodeView() {
    return Joi.object({
      body: ServiceabilityModel.GetZoneFromPincodeViewRequest().required(),
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
      body: ServiceabilityModel.PincodeMopUpdateAuditHistoryRequest().required(),
    }).required();
  }

  static updatePincodeBulkView() {
    return Joi.object({
      body: ServiceabilityModel.PincodeMopBulkData().required(),
    }).required();
  }

  static updatePincodeCoDListing() {
    return Joi.object({
      body: ServiceabilityModel.PincodeCodStatusListingRequest().required(),
    }).required();
  }

  static updatePincodeMopView() {
    return Joi.object({
      body: ServiceabilityModel.PincodeMopData().required(),
    }).required();
  }
}

module.exports = ServiceabilityValidator;
