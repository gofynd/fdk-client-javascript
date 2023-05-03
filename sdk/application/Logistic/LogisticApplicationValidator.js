const Joi = require("joi");

const LogisticModel = require("./LogisticApplicationModel");
class LogisticValidator {
  static getAllCountries() {
    return Joi.object({});
  }

  static getOptimalLocations() {
    return Joi.object({
      body: LogisticModel.ReAssignStoreRequest().required(),
    }).required();
  }

  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
    }).required();
  }

  static getPincodeZones() {
    return Joi.object({
      body: LogisticModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }

  static getTatProduct() {
    return Joi.object({
      body: LogisticModel.TATViewRequest().required(),
    }).required();
  }
}

module.exports = LogisticValidator;
