const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

/**
 * @typedef GetApplicationShipmentsParam
 * @property {string} [lane]
 * @property {string} [searchType]
 * @property {string} [searchId]
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {string} [dpIds]
 * @property {string} [orderingCompanyId]
 * @property {string} [stores]
 * @property {string} [salesChannel]
 * @property {string} [requestByExt]
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [customerId]
 * @property {boolean} [isPrioritySort]
 * @property {boolean} [excludeLockedShipments]
 */

/**
 * @typedef GetPlatformShipmentReasonsParam
 * @property {string} action
 */

/**
 * @typedef GetShipmentBagReasonsParam
 * @property {string} shipmentId - ID of the bag. An order may contain multiple
 *   items and may get divided into one or more shipment, each having its own ID.
 * @property {number} lineNumber - Line number of bag.
 */

/**
 * @typedef TrackShipmentPlatformParam
 * @property {string} shipmentId - Shipment Id
 */

class OrderPlatformApplicationValidator {
  /** @returns {GetApplicationShipmentsParam} */
  static getApplicationShipments() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchId: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      orderingCompanyId: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      customerId: Joi.string().allow(""),
      isPrioritySort: Joi.boolean(),
      excludeLockedShipments: Joi.boolean(),
    }).required();
  }

  /** @returns {GetPlatformShipmentReasonsParam} */
  static getPlatformShipmentReasons() {
    return Joi.object({
      action: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetShipmentBagReasonsParam} */
  static getShipmentBagReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      lineNumber: Joi.number().required(),
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
