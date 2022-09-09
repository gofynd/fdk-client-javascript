const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class OrderValidator {
  static getShipmentById() {
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

  static getReasons() {
    return Joi.object({
      shipmentId: Joi.number().required(),
      bagId: Joi.string().allow("").required(),
    }).required();
  }

  static verifyOtp() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.number().required(),
      body: Validator.VerifyOtp().required(),
    }).required();
  }

  static getOrders() {
    return Joi.object({
      status: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
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

  static trackShipment() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = OrderValidator;
