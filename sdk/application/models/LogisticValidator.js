const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class LogisticValidator {
  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
    }).required();
  }

  static getTatProduct() {
    return Joi.object({
      body: Validator.TATViewRequest().required(),
    }).required();
  }

  static getPincodeZones() {
    return Joi.object({
      body: Validator.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }
}
module.exports = LogisticValidator;
