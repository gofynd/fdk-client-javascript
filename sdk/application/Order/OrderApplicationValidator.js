const Joi = require("joi");

const OrderApplicationModel = require("./OrderApplicationModel");

/**
 * @typedef getCustomerDetailsByShipmentId
 * @property {string} orderId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {string} shipmentId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef getInvoiceByShipmentId
 * @property {string} shipmentId - ID of the shipment.
 * @property {string} [documentType]
 */

/**
 * @typedef getOrderById
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef getOrders
 * @property {number} [status] - A filter to retrieve orders by their current
 *   status such as _placed_, _delivered_, etc.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [fromDate] - The date from which the orders should be retrieved.
 * @property {string} [toDate] - The date till which the orders should be retrieved.
 * @property {string} [customMeta] - A filter and retrieve data using special
 *   fields included for special use-cases
 */

/**
 * @typedef getPosOrderById
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef getProducts
 * @property {number} [status] - A filter to retrieve orders by their current
 *   status such as _placed_, _delivered_, etc.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [fromDate] - The date from which the orders should be retrieved.
 * @property {string} [toDate] - The date till which the orders should be retrieved.
 * @property {string} [searchValue]
 */

/**
 * @typedef getShipmentBagReasons
 * @property {string} shipmentId - ID of the bag. An order may contain multiple
 *   items and may get divided into one or more shipment, each having its own ID.
 * @property {string} bagId - ID of the bag. An order may contain multiple items
 *   and may get divided into one or more shipment, each having its own ID.
 */

/**
 * @typedef getShipmentById
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */

/**
 * @typedef getShipmentReasons
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */

/**
 * @typedef sendOtpToShipmentCustomer
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */

/**
 * @typedef trackShipment
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */

/**
 * @typedef updateShipmentStatus
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {OrderApplicationModel.UpdateShipmentStatusRequest} body
 */

/**
 * @typedef verifyOtpShipmentCustomer
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {OrderApplicationModel.VerifyOtp} body
 */

class OrderApplicationValidator {
  /** @returns {getCustomerDetailsByShipmentId} */
  static getCustomerDetailsByShipmentId() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getInvoiceByShipmentId} */
  static getInvoiceByShipmentId() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      documentType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getOrderById} */
  static getOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getOrders} */
  static getOrders() {
    return Joi.object({
      status: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      customMeta: Joi.string().allow(""),
    });
  }

  /** @returns {getPosOrderById} */
  static getPosOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getProducts} */
  static getProducts() {
    return Joi.object({
      status: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
    });
  }

  /** @returns {getShipmentBagReasons} */
  static getShipmentBagReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getShipmentById} */
  static getShipmentById() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getShipmentReasons} */
  static getShipmentReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {sendOtpToShipmentCustomer} */
  static sendOtpToShipmentCustomer() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {trackShipment} */
  static trackShipment() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {updateShipmentStatus} */
  static updateShipmentStatus() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      body: OrderApplicationModel.UpdateShipmentStatusRequest().required(),
    }).required();
  }

  /** @returns {verifyOtpShipmentCustomer} */
  static verifyOtpShipmentCustomer() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
      body: OrderApplicationModel.VerifyOtp().required(),
    }).required();
  }
}

module.exports = OrderApplicationValidator;
