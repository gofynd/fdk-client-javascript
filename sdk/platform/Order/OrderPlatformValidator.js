const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

/**
 * @typedef attachOrderUser
 * @property {OrderPlatformModel.AttachOrderUser} body
 */

/**
 * @typedef checkOrderStatus
 * @property {OrderPlatformModel.OrderStatus} body
 */

/**
 * @typedef click2Call
 * @property {string} caller - Call Number
 * @property {string} receiver - Receiver Number
 * @property {string} bagId - Bag Id for the query
 * @property {string} [callerId] - Caller Id
 * @property {string} [method] - Provider Method to Call
 */

/**
 * @typedef createChannelConfig
 * @property {OrderPlatformModel.CreateChannelConfigData} body
 */

/**
 * @typedef createOrder
 * @property {OrderPlatformModel.CreateOrderAPI} body
 */

/**
 * @typedef createShipmentReport
 * @property {string} [fromDate]
 * @property {string} [toDate]
 */

/**
 * @typedef dispatchManifest
 * @property {OrderPlatformModel.DispatchManifest} body
 */

/**
 * @typedef downloadBulkActionTemplate
 * @property {string} [templateSlug] - Slug name of template to be downloaded
 */

/**
 * @typedef fetchCreditBalanceDetail
 * @property {OrderPlatformModel.FetchCreditBalanceRequestPayload} body
 */

/**
 * @typedef fetchRefundModeConfig
 * @property {OrderPlatformModel.RefundModeConfigRequestPayload} body
 */

/**
 * @typedef generatePOSReceiptByOrderId
 * @property {string} orderId
 * @property {string} [shipmentId]
 * @property {string} [documentType]
 */

/**
 * @typedef getAnnouncements
 * @property {string} [date] - Date On which the announcement is Active (Date
 *   should in ISO Datetime format IST Time)
 */

/**
 * @typedef getAssetByShipmentIds
 * @property {string} shipmentIds
 * @property {boolean} [invoice]
 * @property {string} [expiresIn]
 */

/**
 * @typedef getBagById
 * @property {string} [bagId] - Id of bag
 * @property {string} [channelBagId] - Id of application bag
 * @property {string} [channelId] - Id of application
 */

/**
 * @typedef getBags
 * @property {string} [bagIds] - Comma separated values of bag ids
 * @property {string} [shipmentIds] - Comma separated values of shipment ids
 * @property {string} [orderIds] - Comma separated values of order ids
 * @property {string} [channelBagIds] - Comma separated values of app bag ids
 * @property {string} [channelShipmentIds] - Comma separated values of app shipment ids
 * @property {string} [channelOrderIds] - Comma separated values of app order ids
 * @property {string} [channelId] - Comma separated values of app ids
 * @property {number} [pageNo] - Page number for paginated data
 * @property {number} [pageSize] - Page size of data received per page
 */

/** @typedef getBulkActionTemplate */

/**
 * @typedef getBulkShipmentExcelFile
 * @property {string} [salesChannels] - Comma separated values of sales channel ids
 * @property {string} [dpIds] - Comma separated values of delivery partner ids
 * @property {string} [fromDate] - Start Date in DD-MM-YYYY format
 * @property {string} [toDate] - End Date in DD-MM-YYYY format
 * @property {string} [stores] - Comma separated values of store ids
 * @property {string} [tags] - Comma separated values of tags
 * @property {string} [bagStatus] - Comma separated values of bag statuses
 * @property {string} [paymentMethods] - Comma separated values of payment methods
 * @property {string} [fileType] - File type to be downloaded
 * @property {number} [timeToDispatch] - Sla breached or not breached
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 */

/** @typedef getChannelConfig */

/**
 * @typedef getLaneConfig
 * @property {string} [superLane] - Name of lane for which data is to be fetched
 * @property {string} [groupEntity] - Name of group entity
 * @property {string} [fromDate] - Start Date in DD-MM-YYYY format
 * @property {string} [toDate] - End Date in DD-MM-YYYY format
 * @property {string} [dpIds] - Comma separated values of delivery partner ids
 * @property {string} [stores] - Comma separated values of store ids
 * @property {string} [salesChannels]
 * @property {string} [paymentMode] - Comma separated values of payment modes
 * @property {string} [bagStatus] - Comma separated values of bag statuses
 * @property {string} [searchType]
 * @property {string} [searchValue]
 * @property {string} [tags]
 * @property {string} [timeToDispatch]
 * @property {string} [paymentMethods]
 * @property {boolean} [myOrders]
 */

/**
 * @typedef getManifestDetails
 * @property {string} manifestId
 * @property {string} [status]
 * @property {string} [toDate]
 * @property {string} [fromDate]
 * @property {string} [searchType]
 * @property {string} [searchValue]
 * @property {string} [dpIds] - DP Ids separated by ',' (comma)
 * @property {string} [pageNo]
 * @property {string} [pageSize]
 */

/**
 * @typedef getManifestShipments
 * @property {number} dpIds
 * @property {string} stores
 * @property {string} toDate
 * @property {string} fromDate
 * @property {string} [dpName]
 * @property {string} [salesChannels]
 * @property {string} [searchType]
 * @property {string} [searchValue]
 * @property {string} [pageNo]
 * @property {string} [pageSize]
 */

/**
 * @typedef getManifestfilters
 * @property {string} view - Name of View
 */

/**
 * @typedef getManifests
 * @property {string} [status] - Possible Status [ active, closed ]
 * @property {string} [toDate]
 * @property {string} [fromDate]
 * @property {string} [searchValue] - Search values options [ fynd_order_id,
 *   shipment_id, manifest_id, dp_name, awb_no ]
 * @property {string} [dpIds] - DP Ids separated by ',' (comma)
 * @property {string} [pageNo]
 * @property {string} [pageSize]
 */

/**
 * @typedef getMetricCount
 * @property {string} [fromDate]
 * @property {string} [toDate]
 */

/**
 * @typedef getOrderById
 * @property {string} orderId
 */

/**
 * @typedef getOrders
 * @property {string} [lane] - Lane refers to a section where orders are
 *   assigned, indicating its grouping
 * @property {string} [searchType] - Search_type refers to the field that will
 *   be used as the target for the search operation
 * @property {string} [bagStatus] - Bag_status refers to status of the entity.
 *   Filters orders based on the status.
 * @property {string} [timeToDispatch] - Time_to_dispatch refers to estimated SLA time.
 * @property {string} [paymentMethods]
 * @property {string} [tags] - Tags refers to additional descriptive labels
 *   associated with the order
 * @property {string} [searchValue] - Search_value is matched against the field
 *   specified by the search_type
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {string} [dpIds] - Delivery Partner IDs to which shipments are assigned.
 * @property {string} [stores]
 * @property {string} [salesChannels]
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {boolean} [isPrioritySort]
 * @property {string} [customMeta]
 * @property {boolean} [myOrders]
 */

/**
 * @typedef getReportsShipmentListing
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 */

/** @typedef getRoleBasedActions */

/**
 * @typedef getShipmentById
 * @property {string} [channelShipmentId] - App Shipment Id
 * @property {string} [shipmentId] - Shipment Id
 */

/**
 * @typedef getShipmentHistory
 * @property {string} [shipmentId] - Shipment Id
 * @property {number} [bagId] - Bag/Product Id
 */

/**
 * @typedef getShipmentReasons
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {string} bagId - ID of the bag. An order may contain multiple items
 *   and may get divided into one or more shipment, each having its own ID.
 * @property {string} state - State for which reasons are required.
 */

/**
 * @typedef getShipments
 * @property {string} [lane] - Name of lane for which data is to be fetched
 * @property {string} [bagStatus] - Comma separated values of bag statuses
 * @property {boolean} [statusOverrideLane] - Use this flag to fetch by
 *   bag_status and override lane
 * @property {string} [timeToDispatch]
 * @property {string} [searchType] - Search type key
 * @property {string} [searchValue] - Search type value
 * @property {string} [fromDate] - Start Date in DD-MM-YYYY format
 * @property {string} [toDate] - End Date in DD-MM-YYYY format
 * @property {string} [dpIds] - Comma separated values of delivery partner ids
 * @property {string} [stores] - Comma separated values of store ids
 * @property {string} [salesChannels] - Comma separated values of sales channel ids
 * @property {number} [pageNo] - Page number for paginated data
 * @property {number} [pageSize] - Page size of data received per page
 * @property {boolean} [fetchActiveShipment] - Flag to fetch active shipments
 * @property {boolean} [excludeLockedShipments] - Flag to fetch locked shipments
 * @property {string} [paymentMethods] - Comma separated values of payment methods
 * @property {string} [channelShipmentId] - App Shipment Id
 * @property {string} [channelOrderId] - App Order Id
 * @property {string} [customMeta]
 * @property {string} [orderingChannel]
 * @property {string} [companyAffiliateTag]
 * @property {boolean} [myOrders]
 */

/** @typedef getStateTransitionMap */

/**
 * @typedef getfilters
 * @property {string} view - Name of view
 * @property {string} [groupEntity] - Name of group entity
 */

/**
 * @typedef invalidateShipmentCache
 * @property {OrderPlatformModel.InvalidateShipmentCachePayload} body
 */

/**
 * @typedef orderUpdate
 * @property {OrderPlatformModel.PlatformOrderUpdate} body
 */

/**
 * @typedef postShipmentHistory
 * @property {OrderPlatformModel.PostShipmentHistory} body
 */

/**
 * @typedef processManifest
 * @property {OrderPlatformModel.ProcessManifest} body
 */

/**
 * @typedef reassignLocation
 * @property {OrderPlatformModel.StoreReassign} body
 */

/**
 * @typedef sendSmsNinja
 * @property {OrderPlatformModel.SendSmsPayload} body
 */

/**
 * @typedef sendUserMobileOTP
 * @property {OrderPlatformModel.SendUserMobileOTP} body
 */

/**
 * @typedef updateAddress
 * @property {string} shipmentId
 * @property {string} [name]
 * @property {string} [address]
 * @property {string} [addressType]
 * @property {string} [pincode]
 * @property {string} [phone]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {string} addressCategory
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 */

/**
 * @typedef updatePackagingDimensions
 * @property {OrderPlatformModel.UpdatePackagingDimensionsPayload} body
 */

/**
 * @typedef updateShipmentLock
 * @property {OrderPlatformModel.UpdateShipmentLockPayload} body
 */

/**
 * @typedef updateShipmentStatus
 * @property {OrderPlatformModel.UpdateShipmentStatusRequest} body
 */

/**
 * @typedef uploadConsent
 * @property {OrderPlatformModel.UploadConsent} body
 */

/**
 * @typedef upsertJioCode
 * @property {OrderPlatformModel.JioCodeUpsertPayload} body
 */

/**
 * @typedef verifyMobileOTP
 * @property {OrderPlatformModel.VerifyMobileOTP} body
 */

class OrderPlatformValidator {
  /** @returns {attachOrderUser} */
  static attachOrderUser() {
    return Joi.object({
      body: OrderPlatformModel.AttachOrderUser().required(),
    }).required();
  }

  /** @returns {checkOrderStatus} */
  static checkOrderStatus() {
    return Joi.object({
      body: OrderPlatformModel.OrderStatus().required(),
    }).required();
  }

  /** @returns {click2Call} */
  static click2Call() {
    return Joi.object({
      caller: Joi.string().allow("").required(),
      receiver: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
      callerId: Joi.string().allow(""),
      method: Joi.string().allow(""),
    }).required();
  }

  /** @returns {createChannelConfig} */
  static createChannelConfig() {
    return Joi.object({
      body: OrderPlatformModel.CreateChannelConfigData().required(),
    }).required();
  }

  /** @returns {createOrder} */
  static createOrder() {
    return Joi.object({
      body: OrderPlatformModel.CreateOrderAPI().required(),
    }).required();
  }

  /** @returns {createShipmentReport} */
  static createShipmentReport() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  /** @returns {dispatchManifest} */
  static dispatchManifest() {
    return Joi.object({
      body: OrderPlatformModel.DispatchManifest().required(),
    }).required();
  }

  /** @returns {downloadBulkActionTemplate} */
  static downloadBulkActionTemplate() {
    return Joi.object({
      templateSlug: Joi.string().allow(""),
    }).required();
  }

  /** @returns {fetchCreditBalanceDetail} */
  static fetchCreditBalanceDetail() {
    return Joi.object({
      body: OrderPlatformModel.FetchCreditBalanceRequestPayload().required(),
    }).required();
  }

  /** @returns {fetchRefundModeConfig} */
  static fetchRefundModeConfig() {
    return Joi.object({
      body: OrderPlatformModel.RefundModeConfigRequestPayload().required(),
    }).required();
  }

  /** @returns {generatePOSReceiptByOrderId} */
  static generatePOSReceiptByOrderId() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow(""),
      documentType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getAnnouncements} */
  static getAnnouncements() {
    return Joi.object({
      date: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getAssetByShipmentIds} */
  static getAssetByShipmentIds() {
    return Joi.object({
      shipmentIds: Joi.string().allow("").required(),
      invoice: Joi.boolean(),
      expiresIn: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getBagById} */
  static getBagById() {
    return Joi.object({
      bagId: Joi.string().allow(""),
      channelBagId: Joi.string().allow(""),
      channelId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getBags} */
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

  /** @returns {getBulkActionTemplate} */
  static getBulkActionTemplate() {
    return Joi.object({}).required();
  }

  /** @returns {getBulkShipmentExcelFile} */
  static getBulkShipmentExcelFile() {
    return Joi.object({
      salesChannels: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
      paymentMethods: Joi.string().allow(""),
      fileType: Joi.string().allow(""),
      timeToDispatch: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getChannelConfig} */
  static getChannelConfig() {
    return Joi.object({}).required();
  }

  /** @returns {getLaneConfig} */
  static getLaneConfig() {
    return Joi.object({
      superLane: Joi.string().allow(""),
      groupEntity: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      timeToDispatch: Joi.string().allow(""),
      paymentMethods: Joi.string().allow(""),
      myOrders: Joi.boolean(),
    }).required();
  }

  /** @returns {getManifestDetails} */
  static getManifestDetails() {
    return Joi.object({
      manifestId: Joi.string().allow("").required(),
      status: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      pageNo: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getManifestShipments} */
  static getManifestShipments() {
    return Joi.object({
      dpIds: Joi.number().required(),
      stores: Joi.string().allow("").required(),
      toDate: Joi.string().allow("").required(),
      fromDate: Joi.string().allow("").required(),
      dpName: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      pageNo: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getManifestfilters} */
  static getManifestfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getManifests} */
  static getManifests() {
    return Joi.object({
      status: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      pageNo: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getMetricCount} */
  static getMetricCount() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
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
      myOrders: Joi.boolean(),
    }).required();
  }

  /** @returns {getReportsShipmentListing} */
  static getReportsShipmentListing() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getRoleBasedActions} */
  static getRoleBasedActions() {
    return Joi.object({}).required();
  }

  /** @returns {getShipmentById} */
  static getShipmentById() {
    return Joi.object({
      channelShipmentId: Joi.string().allow(""),
      shipmentId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getShipmentHistory} */
  static getShipmentHistory() {
    return Joi.object({
      shipmentId: Joi.string().allow(""),
      bagId: Joi.number(),
    }).required();
  }

  /** @returns {getShipmentReasons} */
  static getShipmentReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getShipments} */
  static getShipments() {
    return Joi.object({
      lane: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
      statusOverrideLane: Joi.boolean(),
      timeToDispatch: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fetchActiveShipment: Joi.boolean(),
      excludeLockedShipments: Joi.boolean(),
      paymentMethods: Joi.string().allow(""),
      channelShipmentId: Joi.string().allow(""),
      channelOrderId: Joi.string().allow(""),
      customMeta: Joi.string().allow(""),
      orderingChannel: Joi.string().allow(""),
      companyAffiliateTag: Joi.string().allow(""),
      myOrders: Joi.boolean(),
    }).required();
  }

  /** @returns {getStateTransitionMap} */
  static getStateTransitionMap() {
    return Joi.object({}).required();
  }

  /** @returns {getfilters} */
  static getfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
      groupEntity: Joi.string().allow(""),
    }).required();
  }

  /** @returns {invalidateShipmentCache} */
  static invalidateShipmentCache() {
    return Joi.object({
      body: OrderPlatformModel.InvalidateShipmentCachePayload().required(),
    }).required();
  }

  /** @returns {orderUpdate} */
  static orderUpdate() {
    return Joi.object({
      body: OrderPlatformModel.PlatformOrderUpdate().required(),
    }).required();
  }

  /** @returns {postShipmentHistory} */
  static postShipmentHistory() {
    return Joi.object({
      body: OrderPlatformModel.PostShipmentHistory().required(),
    }).required();
  }

  /** @returns {processManifest} */
  static processManifest() {
    return Joi.object({
      body: OrderPlatformModel.ProcessManifest().required(),
    }).required();
  }

  /** @returns {reassignLocation} */
  static reassignLocation() {
    return Joi.object({
      body: OrderPlatformModel.StoreReassign().required(),
    }).required();
  }

  /** @returns {sendSmsNinja} */
  static sendSmsNinja() {
    return Joi.object({
      body: OrderPlatformModel.SendSmsPayload().required(),
    }).required();
  }

  /** @returns {sendUserMobileOTP} */
  static sendUserMobileOTP() {
    return Joi.object({
      body: OrderPlatformModel.SendUserMobileOTP().required(),
    }).required();
  }

  /** @returns {updateAddress} */
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

  /** @returns {updatePackagingDimensions} */
  static updatePackagingDimensions() {
    return Joi.object({
      body: OrderPlatformModel.UpdatePackagingDimensionsPayload().required(),
    }).required();
  }

  /** @returns {updateShipmentLock} */
  static updateShipmentLock() {
    return Joi.object({
      body: OrderPlatformModel.UpdateShipmentLockPayload().required(),
    }).required();
  }

  /** @returns {updateShipmentStatus} */
  static updateShipmentStatus() {
    return Joi.object({
      body: OrderPlatformModel.UpdateShipmentStatusRequest().required(),
    }).required();
  }

  /** @returns {uploadConsent} */
  static uploadConsent() {
    return Joi.object({
      body: OrderPlatformModel.UploadConsent().required(),
    }).required();
  }

  /** @returns {upsertJioCode} */
  static upsertJioCode() {
    return Joi.object({
      body: OrderPlatformModel.JioCodeUpsertPayload().required(),
    }).required();
  }

  /** @returns {verifyMobileOTP} */
  static verifyMobileOTP() {
    return Joi.object({
      body: OrderPlatformModel.VerifyMobileOTP().required(),
    }).required();
  }
}

module.exports = OrderPlatformValidator;
