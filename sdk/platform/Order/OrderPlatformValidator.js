const Joi = require("joi");

const OrderModel = require("./OrderPlatformModel");
class OrderValidator {
  static bulkActionDetails() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  static bulkActionProcessXlsxFile() {
    return Joi.object({
      body: OrderModel.BulkActionPayload().required(),
    }).required();
  }

  static checkOrderStatus() {
    return Joi.object({
      body: OrderModel.OrderStatus().required(),
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

  static createChannelConfig() {
    return Joi.object({
      body: OrderModel.CreateChannelConfigData().required(),
    }).required();
  }

  static createOrder() {
    return Joi.object({
      body: OrderModel.CreateOrderAPI().required(),
    }).required();
  }

  static createShipmentReport() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  static dispatchManifest() {
    return Joi.object({
      body: OrderModel.DispatchManifest().required(),
    }).required();
  }

  static getAnnouncements() {
    return Joi.object({
      date: Joi.string().allow(""),
    }).required();
  }

  static getBagById() {
    return Joi.object({
      bagId: Joi.string().allow(""),
      channelBagId: Joi.string().allow(""),
      channelId: Joi.string().allow(""),
    }).required();
  }

  static getBags() {
    return Joi.object({
      bagIds: Joi.string().allow(""),
      shipmentIds: Joi.string().allow(""),
      orderIds: Joi.string().allow(""),
      channelBagIds: Joi.string().allow(""),
      channelShipmentIds: Joi.string().allow(""),
      channelOrderIds: Joi.string().allow(""),
      channelId: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getBulkActionFailedReport() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      reportType: Joi.string().allow(""),
    }).required();
  }

  static getBulkInvoice() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      docType: Joi.string().allow("").required(),
    }).required();
  }

  static getBulkInvoiceLabel() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  static getBulkList() {
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

  static getBulkShipmentExcelFile() {
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

  static getChannelConfig() {
    return Joi.object({}).required();
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

  static getOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getOrders() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
      timeToDispatch: Joi.string().allow(""),
      paymentMethods: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isPrioritySort: Joi.boolean(),
      customMeta: Joi.string().allow(""),
    }).required();
  }

  static getReportsShipmentListing() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getRoleBasedActions() {
    return Joi.object({}).required();
  }

  static getShipmentById() {
    return Joi.object({
      channelShipmentId: Joi.string().allow(""),
      shipmentId: Joi.string().allow(""),
      orderingCompanyId: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
    }).required();
  }

  static getShipmentHistory() {
    return Joi.object({
      shipmentId: Joi.number(),
      bagId: Joi.number(),
    }).required();
  }

  static getShipmentReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    }).required();
  }

  static getShipments() {
    return Joi.object({
      lane: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
      statusOverrideLane: Joi.boolean(),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
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
      isPrioritySort: Joi.boolean(),
      fetchActiveShipment: Joi.boolean(),
      excludeLockedShipments: Joi.boolean(),
      paymentMethods: Joi.string().allow(""),
      channelShipmentId: Joi.string().allow(""),
      channelOrderId: Joi.string().allow(""),
      customMeta: Joi.string().allow(""),
      orderingChannel: Joi.string().allow(""),
      companyAffiliateTag: Joi.string().allow(""),
    }).required();
  }

  static getfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
      groupEntity: Joi.string().allow(""),
    }).required();
  }

  static invalidateShipmentCache() {
    return Joi.object({
      body: OrderModel.InvalidateShipmentCachePayload().required(),
    }).required();
  }

  static orderUpdate() {
    return Joi.object({
      body: OrderModel.PlatformOrderUpdate().required(),
    }).required();
  }

  static platformManualAssignDPToShipment() {
    return Joi.object({
      body: OrderModel.ManualAssignDPToShipment().required(),
    }).required();
  }

  static postShipmentHistory() {
    return Joi.object({
      body: OrderModel.PostShipmentHistory().required(),
    }).required();
  }

  static processManifest() {
    return Joi.object({
      body: OrderModel.CreateOrderPayload().required(),
    }).required();
  }

  static reassignLocation() {
    return Joi.object({
      body: OrderModel.StoreReassign().required(),
    }).required();
  }

  static sendSmsNinja() {
    return Joi.object({
      body: OrderModel.SendSmsPayload().required(),
    }).required();
  }

  static sendSmsNinjaPlatform() {
    return Joi.object({}).required();
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

  static updatePackagingDimensions() {
    return Joi.object({
      body: OrderModel.CreateOrderPayload().required(),
    }).required();
  }

  static updateShipmentLock() {
    return Joi.object({
      body: OrderModel.UpdateShipmentLockPayload().required(),
    }).required();
  }

  static updateShipmentStatus() {
    return Joi.object({
      body: OrderModel.UpdateShipmentStatusRequest().required(),
    }).required();
  }

  static uploadConsent() {
    return Joi.object({
      body: OrderModel.UploadConsent().required(),
    }).required();
  }

  static upsertJioCode() {
    return Joi.object({
      body: OrderModel.JioCodeUpsertPayload().required(),
    }).required();
  }
}

module.exports = OrderValidator;
