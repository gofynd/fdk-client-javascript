const Joi = require("joi");

const LogisticModel = require("./LogisticApplicationModel");
class LogisticValidator {
  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
    }).required();
  }

  static getTatProduct() {
    return Joi.object({
      body: LogisticModel.GetTatProductReqBody().required(),
    }).required();
  }
}

module.exports = LogisticValidator;
