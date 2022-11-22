const Joi = require("joi");
const Validator = require("../PlatformModels");
class OrderValidator {
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
      excludeLockedShipments: Joi.boolean(),
    }).required();
  }

  static getShipmentDetails() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      orderingCompanyId: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
    }).required();
  }

  static getOrderShipmentDetails() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getLaneConfig() {
    return Joi.object({
      superLane: Joi.string().allow(""),
      groupEntity: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
    }).required();
  }

  static getMetricCount() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  static getfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
      groupEntity: Joi.string().allow(""),
    }).required();
  }

  static createShipmentReport() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  static getReportsShipmentListing() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static upsertJioCode() {
    return Joi.object({
      body: Validator.JioCodeUpsertPayload().required(),
    }).required();
  }

  static bulkActionProcessXlsxFile() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  static bulkActionDetails() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = OrderValidator;
