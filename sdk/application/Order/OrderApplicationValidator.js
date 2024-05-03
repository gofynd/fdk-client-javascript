const Joi = require("joi");

const OrderApplicationModel = require("./OrderApplicationModel");

/**
 * @typedef GetCustomerDetailsByShipmentIdParam
 * @property {string} orderId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {string} shipmentId - A unique number used for identifying and
 *   tracking your orders.
 */

/**
 * @typedef GetInvoiceByShipmentIdParam
 * @property {string} shipmentId - ID of the shipment.
 */

/**
 * @typedef GetOrderByIdParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 * @property {boolean} [allowInactive] - Flag to allow inactive shipments
 */

/**
 * @typedef GetOrdersParam
 * @property {number} [status] - A filter to retrieve orders by their current
 *   status such as _placed_, _delivered_, etc.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [fromDate] - The date from which the orders should be retrieved.
 * @property {string} [toDate] - The date till which the orders should be retrieved.
 * @property {string} [startDate] - UTC Start Date in ISO format
 * @property {string} [endDate] - UTC Start Date in ISO format
 * @property {string} [customMeta] - A filter and retrieve data using special
 *   fields included for special use-cases
 * @property {boolean} [allowInactive] - Flag indicating whether inactive
 *   shipments are allowed
 */

/**
 * @typedef GetShipmentBagReasonsParam
 * @property {string} shipmentId - ID of the bag. An order may contain multiple
 *   items and may get divided into one or more shipment, each having its own ID.
 * @property {string} bagId - ID of the bag. An order may contain multiple items
 *   and may get divided into one or more shipment, each having its own ID.
 */

/**
 * @typedef GetShipmentByIdParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {boolean} [allowInactive] - Flag to allow inactive shipments
 */

/**
 * @typedef GetShipmentReasonsParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */

/**
 * @typedef SendOtpToShipmentCustomerParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */

/**
 * @typedef TrackShipmentParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 */

/**
 * @typedef UpdateShipmentStatusParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {OrderApplicationModel.UpdateShipmentStatusRequest} body
 */

/**
 * @typedef VerifyOtpShipmentCustomerParam
 * @property {string} orderId - A unique number used for identifying and
 *   tracking your orders.
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {OrderApplicationModel.VerifyOtp} body
 */

class OrderApplicationValidator {
  /** @returns {GetCustomerDetailsByShipmentIdParam} */
  static getCustomerDetailsByShipmentId() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetInvoiceByShipmentIdParam} */
  static getInvoiceByShipmentId() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetOrderByIdParam} */
  static getOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      allowInactive: Joi.boolean(),
    }).required();
  }

  /** @returns {GetOrdersParam} */
  static getOrders() {
    return Joi.object({
      status: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
      customMeta: Joi.string().allow(""),
      allowInactive: Joi.boolean(),
    });
  }

  /** @returns {GetShipmentBagReasonsParam} */
  static getShipmentBagReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetShipmentByIdParam} */
  static getShipmentById() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      allowInactive: Joi.boolean(),
    }).required();
  }

  /** @returns {GetShipmentReasonsParam} */
  static getShipmentReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {SendOtpToShipmentCustomerParam} */
  static sendOtpToShipmentCustomer() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {TrackShipmentParam} */
  static trackShipment() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateShipmentStatusParam} */
  static updateShipmentStatus() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      body: OrderApplicationModel.UpdateShipmentStatusRequest().required(),
    }).required();
  }

  /** @returns {VerifyOtpShipmentCustomerParam} */
  static verifyOtpShipmentCustomer() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
      body: OrderApplicationModel.VerifyOtp().required(),
    }).required();
  }
}

module.exports = OrderApplicationValidator;
