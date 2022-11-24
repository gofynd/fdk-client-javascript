const Joi = require("joi");
const Validator = require("../PlatformModels");
class OrderValidator {
  static shipmentStatusUpdate() {
    return Joi.object({
      body: Validator.UpdateShipmentStatusBody().required(),
    }).required();
  }

  static activityStatus() {
    return Joi.object({
      bagId: Joi.string().allow("").required(),
    }).required();
  }

  static storeProcessShipmentUpdate() {
    return Joi.object({
      body: Validator.UpdateProcessShipmenstRequestBody().required(),
    }).required();
  }

  static checkRefund() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static shipmentBagsCanBreak() {
    return Joi.object({
      body: Validator.CanBreakRequestBody().required(),
    }).required();
  }

  static getOrdersByCompanyId() {
    return Joi.object({
      pageNo: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      isPrioritySort: Joi.boolean(),
      lockStatus: Joi.boolean(),
      userId: Joi.string().allow(""),
      q: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      orderId: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      deploymentStores: Joi.string().allow(""),
      status: Joi.string().allow(""),
      dp: Joi.string().allow(""),
      filterType: Joi.string().allow(""),
    }).required();
  }

  static getOrderDetails() {
    return Joi.object({
      orderId: Joi.string().allow(""),
      next: Joi.string().allow(""),
      previous: Joi.string().allow(""),
    }).required();
  }

  static getPicklistOrdersByCompanyId() {
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
      filterType: Joi.string().allow(""),
    }).required();
  }

  static getShipmentAddress() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      addressCategory: Joi.string().allow("").required(),
    }).required();
  }

  static updateShipmentAddress() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      addressCategory: Joi.string().allow("").required(),
      body: Validator.UpdateShipmentAddressRequest().required(),
    }).required();
  }
}
module.exports = OrderValidator;
