const Joi = require("joi");

const ServiceabilityModel = require("./ServiceabilityPlatformModel");
class ServiceabilityValidator {
  static getApplicationServiceability() {
    return Joi.object({}).required();
  }

  static upsertZoneControllerView() {
    return Joi.object({
      body: ServiceabilityModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityValidator;
