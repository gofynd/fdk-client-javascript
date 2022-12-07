const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class OrderValidator {
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

  static getOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getPosOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getShipmentById() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static getInvoiceByShipmentId() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static trackShipment() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static getCustomerDetailsByShipmentId() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static sendOtpToShipmentCustomer() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static verifyOtpShipmentCustomer() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
      body: Validator.VerifyOtp().required(),
    }).required();
  }

  static getShipmentBagReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
    }).required();
  }

  static getShipmentReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static updateShipmentStatus() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      body: Validator.StatusUpdateInternalRequest().required(),
    }).required();
  }

  static createChannelConfig() {
    return Joi.object({
      body: Validator.CreateOrderConfigData().required(),
    }).required();
  }

  static getChannelConfig() {
    return Joi.object({});
  }

  static getInvoiceByShipmentId1() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      parameters: Validator.invoiceParameter(),
    }).required();
  }

  static getCreditNoteByShipmentId() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      parameters: Validator.creditNoteParameter(),
    }).required();
  }
}
module.exports = OrderValidator;
