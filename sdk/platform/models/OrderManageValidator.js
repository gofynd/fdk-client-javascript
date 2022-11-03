const Joi = require("joi");
const Validator = require("../PlatformModels");
class OrderManageValidator {
  static statusInternalUpdate() {
    return Joi.object({
      body: Validator.PlatformShipmentStatusInternal().required(),
    }).required();
  }

  static getShipmentHistory() {
    return Joi.object({
      bagId: Joi.number().required(),
    }).required();
  }
}
module.exports = OrderManageValidator;
