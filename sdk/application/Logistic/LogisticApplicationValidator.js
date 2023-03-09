const Joi = require("joi");

const LogisticModel = require("./LogisticApplicationModel");
class LogisticValidator {
  static getTatProduct() {
    return Joi.object({
      body: LogisticModel.GetTatProductReqBody().required(),
    }).required();
  }

  static getPincodeZones() {
    return Joi.object({
      body: LogisticModel.GetPincodeZonesReqBody().required(),
    }).required();
  }

  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = LogisticValidator;
