const Joi = require("joi");

const LogisticModel = require("./LogisticApplicationModel");
class LogisticValidator {
  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
      countryCode: Joi.string().allow(""),
    }).required();
  }

  static getTatProduct() {
    return Joi.object({
      body: LogisticModel.TATViewRequest().required(),
    }).required();
  }

  static getAllCountries() {
    return Joi.object({
      companyId: Joi.string().allow("").required(),
      applicationId: Joi.string().allow("").required(),
    }).required();
  }

  static getPincodeZones() {
    return Joi.object({
      body: LogisticModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }
}
module.exports = LogisticValidator;
