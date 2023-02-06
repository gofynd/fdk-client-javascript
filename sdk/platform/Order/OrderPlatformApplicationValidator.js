const Joi = require("joi");
const OrderModel = require("./OrderPlatformModel");

class OrderValidator {
  static getApplicationOrderDetails() {
    return Joi.object({
      orderId: Joi.string().allow(""),
      next: Joi.string().allow(""),
      previous: Joi.string().allow(""),
    }).required();
  }

  static trackShipmentPlatform() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static trackOrder() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static failedOrders() {
    return Joi.object({}).required();
  }

  static reprocessOrder() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static updateShipment() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      body: OrderModel.ShipmentUpdateRequest().required(),
    }).required();
  }

  static getPlatformShipmentReasons() {
    return Joi.object({
      action: Joi.string().allow("").required(),
    }).required();
  }

  static getShipmentTrackDetails() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static getOrdersByApplicationId() {
    return Joi.object({
      pageNo: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      q: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      orderId: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      status: Joi.string().allow(""),
      dp: Joi.string().allow(""),
      userId: Joi.string().allow(""),
      filterType: Joi.string().allow(""),
    }).required();
  }
}

module.exports = OrderValidator;
