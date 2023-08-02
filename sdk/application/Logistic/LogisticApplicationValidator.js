const Joi = require("joi");

const LogisticModel = require("./LogisticApplicationModel");
class LogisticValidator {
  static getAllCountries() {
    return Joi.object({});
  }

  static getCountries() {
    return Joi.object({
      onboarding: Joi.boolean(),
    });
  }

  static getCountry() {
    return Joi.object({
      countryIsoCode: Joi.string().allow("").required(),
    }).required();
  }

  static getLocalities() {
    return Joi.object({
      localityType: Joi.string().allow("").required(),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
    }).required();
  }

  static getLocality() {
    return Joi.object({
      localityType: Joi.string().allow("").required(),
      localityValue: Joi.string().allow("").required(),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
    }).required();
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
