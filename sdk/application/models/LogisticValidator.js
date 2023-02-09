const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class LogisticValidator {
  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
      countryCode: Joi.string().allow(""),
    }).required();
  }

  static getTatProduct() {
    return Joi.object({
      body: Validator.TATViewRequest().required(),
    }).required();
  }

  static getEntityList() {
    return Joi.object({
      page: Joi.string().allow(""),
      limit: Joi.string().allow(""),
      body: Validator.EntityListRequest().required(),
    }).required();
  }

  static getPincodeZones() {
    return Joi.object({
      body: Validator.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }
}
module.exports = LogisticValidator;
