const Joi = require("joi");
const Validator = require("../PlatformModels");
class OrderInvoiceEngineValidator {
  static generateBulkPackageLabel() {
    return Joi.object({
      body: Validator.GenerateBulkPackageLabel().required(),
    }).required();
  }

  static generateBulkBoxLabel() {
    return Joi.object({
      body: Validator.GenerateBulkBoxLabel().required(),
    }).required();
  }

  static generateBulkShipmentLabel() {
    return Joi.object({
      body: Validator.GenerateBulkShipmentLabel().required(),
    }).required();
  }

  static getLabelStatus() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  static getLabelPresignedURL() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = OrderInvoiceEngineValidator;
