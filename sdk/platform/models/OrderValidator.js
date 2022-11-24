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
      body: Validator.BulkActionPayload().required(),
    }).required();
  }

  static bulkActionDetails() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  static createOrder() {
    return Joi.object({
      body: Validator.CreateOrderPayload().required(),
    }).required();
  }

  static invalidateShipmentCache() {
    return Joi.object({
      body: Validator.InvalidateShipmentCachePayload().required(),
    }).required();
  }

  static reassignLocation() {
    return Joi.object({
      body: Validator.StoreReassign().required(),
    }).required();
  }

  static updateShipmentLock() {
    return Joi.object({
      body: Validator.UpdateShipmentLockPayload().required(),
    }).required();
  }

  static getAnnouncements() {
    return Joi.object({
      date: Joi.string().allow(""),
    }).required();
  }

  static updateAddress() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
      address: Joi.string().allow(""),
      addressType: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      addressCategory: Joi.string().allow("").required(),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
    }).required();
  }

  static click2Call() {
    return Joi.object({
      caller: Joi.string().allow("").required(),
      receiver: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
      callingTo: Joi.string().allow(""),
      callerId: Joi.string().allow(""),
    }).required();
  }

  static statusUpdateInternalV4() {
    return Joi.object({
      body: Validator.StatusUpdateInternalRequest().required(),
    }).required();
  }

  static processManifest() {
    return Joi.object({
      body: Validator.CreateOrderPayload().required(),
    }).required();
  }

  static getRoleBasedActions() {
    return Joi.object({}).required();
  }

  static getShipmentHistory() {
    return Joi.object({
      bagId: Joi.number().required(),
    }).required();
  }

  static sendSmsNinja() {
    return Joi.object({
      body: Validator.SendSmsPayload().required(),
    }).required();
  }

  static checkOrderStatus() {
    return Joi.object({
      body: Validator.OrderStatus().required(),
    }).required();
  }
}
module.exports = OrderValidator;
