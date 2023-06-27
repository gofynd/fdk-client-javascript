const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

/**
 * @typedef getAppOrderShipmentDetails
 * @property {string} orderId
 */

/**
 * @typedef getApplicationShipments
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
 * @typedef getPlatformShipmentReasons
 * @property {string} action
 */

/**
 * @typedef trackShipmentPlatform
 * @property {string} shipmentId - Shipment Id
 */

class OrderPlatformApplicationValidator {
  /** @returns {getAppOrderShipmentDetails} */
  static getAppOrderShipmentDetails() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getApplicationShipments} */
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
