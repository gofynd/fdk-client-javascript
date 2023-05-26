const Joi = require("joi");

const OrderModel = require("./OrderPlatformModel");
class OrderValidator {
  static trackShipmentPlatform() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = OrderValidator;
