const Joi = require("joi");
const Validator = require("../PlatformModels");
class OrderValidator {
  static bulkActionProcessXlsxFile() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  static bulkActionDetails() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = OrderValidator;
