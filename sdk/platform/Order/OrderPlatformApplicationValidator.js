const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

/**
 * @typedef GetAppOrderShipmentDetailsParam
 * @property {string} orderId
 */

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
 * @property {string} [salesChannels]
 * @property {string} [requestByExt]
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [customerId]
 * @property {boolean} [isPrioritySort]
 */

/**
 * @typedef GetPlatformShipmentReasonsParam
 * @property {string} action
 */

/**
 * @typedef TrackShipmentPlatformParam
 * @property {string} shipmentId - Shipment Id
 */

class OrderPlatformApplicationValidator {
  /** @returns {GetAppOrderShipmentDetailsParam} */
  static getAppOrderShipmentDetails() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

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
      salesChannels: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      customerId: Joi.string().allow(""),
      isPrioritySort: Joi.boolean(),
    }).required();
  }

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
