const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class LogisticValidator {
  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
      xApplicationId: Joi.string().allow(""),
    }).required();
  }

  static getTatProduct() {
    return Joi.object({
      xApplicationId: Joi.string().allow(""),
      body: Validator.TATViewRequest().required(),
    }).required();
  }
}
module.exports = LogisticValidator;
