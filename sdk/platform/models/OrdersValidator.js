const Joi = require("joi");
const Validator = require("../PlatformModels");
class OrdersValidator {
  static getShipmentDetails() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  static getLaneConfig() {
    return Joi.object({
      superLane: Joi.string().allow(""),
      groupEntity: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  static getOrderShipmentDetails() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getShipmentList() {
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
    }).required();
  }

  static getShipmentToManifest() {
    return Joi.object({
      groupEntity: Joi.string().allow("").required(),
      salesChannel: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
    }).required();
  }

  static getOrders() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isPrioritySort: Joi.boolean(),
    }).required();
  }

  static getfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = OrdersValidator;
