const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

/**
 * @typedef GetPlatformShipmentReasonsParam
 * @property {string} action
 */

/**
 * @typedef TrackShipmentPlatformParam
 * @property {string} shipmentId - Shipment Id
 */

class OrderPlatformApplicationValidator {
  /** @returns {GetPlatformShipmentReasonsParam} */
  static getPlatformShipmentReasons() {
    return Joi.object({
      action: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {TrackShipmentPlatformParam} */
  static trackShipmentPlatform() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = OrderPlatformApplicationValidator;
