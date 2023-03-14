const Joi = require("joi");
const ServiceabilityModel = require("./ServiceabilityPlatformModel");

class ServiceabilityValidator {
  static postApplicationServiceability() {
    return Joi.object({
      body: ServiceabilityModel.ApplicationServiceabilityConfig().required(),
    }).required();
  }

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
}

module.exports = ServiceabilityValidator;
