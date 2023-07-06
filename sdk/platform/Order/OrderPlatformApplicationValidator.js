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
  /** @returns {getPlatformShipmentReasons} */
  static getPlatformShipmentReasons() {
    return Joi.object({
      action: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {trackShipmentPlatform} */
  static trackShipmentPlatform() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = OrderPlatformApplicationValidator;
