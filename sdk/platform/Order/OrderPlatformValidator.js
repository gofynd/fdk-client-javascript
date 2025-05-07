const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

/**
 * @typedef AddStateManagerConfigParam
 * @property {OrderPlatformModel.TransitionConfigPayload} body
 */

/**
 * @typedef AddUserViewsParam
 * @property {OrderPlatformModel.UserViewsResponseSchema} body
 */

/**
 * @typedef AttachOrderUserParam
 * @property {OrderPlatformModel.AttachOrderUser} body
 */

/**
 * @typedef BulkListingParam
 * @property {number} pageSize - The number of records to return per page in the response.
 * @property {number} pageNo - The page number to fetch from the paginated results.
 * @property {string} startDate - The start date for filtering the jobs,
 *   expressed in UTC format
 * @property {string} endDate - The end date for filtering the jobs, expressed
 *   in UTC format
 * @property {string} [status] - The status of the jobs to filter the results.
 * @property {string} [bulkActionType] - Pecifies the type of job action being requested.
 * @property {string} [searchKey] - A key or keyword used to search for specific jobs.
 */

/**
 * @typedef BulkStateTransistionParam
 * @property {OrderPlatformModel.BulkStateTransistionRequestSchema} body
 */

/**
 * @typedef CheckOrderStatusParam
 * @property {OrderPlatformModel.OrderStatus} body
 */

/**
 * @typedef Click2CallParam
 * @property {string} caller - Call Number
 * @property {string} receiver - Receiver Number
 * @property {string} bagId - Bag Id for the query
 * @property {string} [callerId] - Caller Id
 * @property {string} [method] - Provider Method to Call
 */

/**
 * @typedef CreateOrderParam
 * @property {OrderPlatformModel.CreateOrderAPI} body
 */

/**
 * @typedef DeleteUserViewsParam
 * @property {string} viewId - Comma separated values of view ids
 */

/**
 * @typedef DownloadBulkActionTemplateParam
 * @property {string} [templateSlug] - Slug name of template to be downloaded
 */

/**
 * @typedef DownloadLanesReportParam
 * @property {OrderPlatformModel.BulkReportsDownloadRequestSchema} body
 */

/**
 * @typedef EInvoiceRetryParam
 * @property {OrderPlatformModel.EInvoiceRetry} body
 */

/**
 * @typedef FailedOrderLogDetailsParam
 * @property {string} logId - Log Error ID
 */

/**
 * @typedef FetchCreditBalanceDetailParam
 * @property {OrderPlatformModel.FetchCreditBalanceRequestPayload} body
 */

/**
 * @typedef FetchRefundModeConfigParam
 * @property {OrderPlatformModel.RefundModeConfigRequestPayload} body
 */

/**
 * @typedef GeneratePOSReceiptByOrderIdParam
 * @property {string} orderId
 * @property {string} [shipmentId]
 * @property {string} [documentType]
 */

/**
 * @typedef GetAllowedStateTransitionParam
 * @property {string} orderingChannel - The channel through which orders are placed.
 * @property {string} status - The status key indicates the current status for
 *   which the API will provide a list of possible next state transitions.
 */

/** @typedef GetAllowedTemplatesForBulkParam */

/**
 * @typedef GetAnnouncementsParam
 * @property {string} [date] - Date On which the announcement is Active (Date
 *   should in ISO Datetime format IST Time)
 */

/**
 * @typedef GetBagByIdParam
 * @property {string} [bagId] - Unique identifier of a bag
 * @property {string} [channelBagId] - Id of application bag
 * @property {string} [channelId] - Id of application
 */

/**
 * @typedef GetBagsParam
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

/** @typedef GetBulkActionTemplateParam */

/**
 * @typedef GetBulkShipmentExcelFileParam
 * @property {string} [salesChannels] - Comma separated values of sales channel ids
 * @property {string} [dpIds] - Comma separated values of delivery partner ids
 * @property {string} [startDate] - UTC start date in ISO format
 * @property {string} [endDate] - UTC end date in ISO format
 * @property {string} [stores] - Comma separated values of store ids
 * @property {string} [tags] - Comma separated values of tags
 * @property {string} [bagStatus] - Comma separated values of bag statuses
 * @property {string} [paymentMethods] - Comma separated values of payment methods
 * @property {string} [fileType] - File type to be downloaded
 * @property {number} [timeToDispatch] - Sla breached or not breached
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 */

/**
 * @typedef GetFailedOrderLogsParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [searchType] - Search type for filter
 * @property {string} [searchValue] - Search value for filter
 */

/**
 * @typedef GetFileByStatusParam
 * @property {string} batchId - Batch Id to identify the bulk operation request.
 * @property {string} status - The status of the jobs to filter the results.
 * @property {string} fileType
 * @property {string} [reportType] - The type of report to be downloaded.
 */

/**
 * @typedef GetGlobalFiltersParam
 * @property {string} showIn - Name of view to get filters for
 */

/**
 * @typedef GetLaneConfigParam
 * @property {string} [superLane] - Name of lane for which data is to be fetched
 * @property {string} [groupEntity] - Name of group entity
 * @property {string} [fromDate] - Start Date in DD-MM-YYYY format
 * @property {string} [toDate]
 * @property {string} [startDate] - UTC Start Date in ISO format
 * @property {string} [endDate] - UTC End Date in ISO format
 * @property {string} [dpIds] - Comma separated values of delivery partner ids
 * @property {string} [stores] - Comma separated values of store ids
 * @property {string} [salesChannels]
 * @property {string} [paymentMode] - Comma separated values of payment modes
 * @property {string} [bagStatus] - Comma separated values of bag statuses
 * @property {string} [searchType] - Search_type refers to the field that will
 *   be used as the target for the search operation
 * @property {string} [searchValue]
 * @property {string} [tags]
 * @property {number} [timeToDispatch] - Time_to_dispatch refers to estimated SLA time.
 * @property {string} [paymentMethods]
 * @property {boolean} [myOrders]
 * @property {boolean} [showCrossCompanyData] - Flag to view cross & non-cross
 *   company order
 * @property {string} [orderType] - Defines the specific journey a shipment will
 *   follow based on the application's operational needs and customer
 *   preferences. This field categorizes orders into distinct types, each
 *   associated with a unique processing flow. For example:
 *
 *   - "HomeDelivery": The order goes through all the steps needed for delivery,
 *       from being packed to arriving at the customer’s address.
 *   - "PickAtStore": The order is prepared for pickup at the store, skipping
 *       shipping steps to make it ready faster for the customer to collect in person.
 *   - "Digital": This order type likely refers to orders that involve digital goods
 *       or services, such as software, digital subscriptions, e-books, online
 *       courses, or any other item that can be delivered electronically.
 */

/**
 * @typedef GetManifestfiltersParam
 * @property {string} view - Name of View
 */

/**
 * @typedef GetOrderByIdParam
 * @property {string} orderId - Flag for order id
 * @property {boolean} [myOrders]
 * @property {boolean} [allowInactive] - Flag to allow inactive shipments
 */

/**
 * @typedef GetOrderConfigParam
 * @property {string} appId
 */

/**
 * @typedef GetOrdersParam
 * @property {string} [lane] - Lane refers to a section where orders are
 *   assigned, indicating its grouping
 * @property {string} [searchType] - Search_type refers to the field that will
 *   be used as the target for the search operation
 * @property {string} [bagStatus] - Bag_status refers to the status of the
 *   entity. Filters orders based on the status.
 * @property {number} [timeToDispatch] - Time_to_dispatch refers to the
 *   estimated SLA time.
 * @property {string} [paymentMethods] - Comma separated values of payment
 *   methods that were used to place order.
 * @property {string} [tags] - Tags refer to additional descriptive labels
 *   associated with the order
 * @property {string} [searchValue] - Search_value is matched against the field
 *   specified by the search_type
 * @property {string} [fromDate] - Date time in UTC timezone as per ISO format.
 * @property {string} [toDate] - Date time in UTC timezone as per ISO format.
 * @property {string} [startDate] - Date time in UTC timezone as per ISO format.
 * @property {string} [endDate] - Date time in UTC timezone as per ISO format.
 * @property {string} [dpIds] - Delivery Partner IDs to which shipments are assigned.
 * @property {string} [stores] - A comma-separated list of store IDs used to
 *   filter results to only those related to specific stores.
 * @property {string} [salesChannels] - A comma-separated list of sales channel
 *   IDs to filter results based on the sales channels involved.
 * @property {number} [pageNo] - Specifies the page number for paginated results.
 * @property {number} [pageSize] - Determines the number of results returned per page.
 * @property {boolean} [isPrioritySort]
 * @property {Object[]} [customMeta]
 * @property {boolean} [myOrders]
 * @property {boolean} [showCrossCompanyData] - Flag to view cross & non-cross
 *   company order
 * @property {string} [customerId] - The unique identifier for the customer
 *   associated with the query, useful for filtering results to a specific customer.
 * @property {string} [orderType]
 * @property {string} [operationalStatus] - Statuses relating to shipment
 *   transition in order processing journey. Comma separated values of
 *   operational statuses.
 * @property {string} [financialStatus] - Statuses relating to finance related
 *   operations in the order processing journey. Comma separated values of
 *   financial statuses.
 * @property {string} [logisticsStatus] - Statuses relating to delivery and
 *   pickup related operations in the order processing journey. Comma separated
 *   values of logistics statuses.
 * @property {string} [parentViewSlug] - Parent view is used for grouping of
 *   child views. Slug of parent view.
 * @property {string} [childViewSlug] - Child view is user configured view,
 *   which has filters added by the user on which shipments/orders are fetched.
 *   Slug of child view.
 * @property {string} [groupEntity] - Defines the grouping criterion for
 *   retrieving shipments or orders. It specifies whether the results should be
 *   organized based on shipment groups or order groups. For example, using
 *   'shipments' groups results by shipment, while an invalid value like 'abcd'
 *   may not be recognized, leading to errors or default behavior.
 * @property {boolean} [enforceDateFilter] - Applies a date filter for listing
 *   orders. This is useful when fetching data for a specific date range while
 *   performing searches.
 */

/**
 * @typedef GetRefundConfigurationParam
 * @property {string} appId
 */

/** @typedef GetRefundEnableStateListParam */

/**
 * @typedef GetRefundOptionsParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {string} [bagIds] - It is the bag_id of the bags with comma separated.
 * @property {string} [state] - It is the desired state at which refund amount
 *   needs to be calculated.
 * @property {string} [optinAppId] - It is affiliate id of the order in case of
 *   cross selling.
 * @property {number} [optinCompanyId] - It is company id of the order in case
 *   of cross selling.
 * @property {string} [status] - It specifies the desired status to which the
 *   shipment should be updated. It represents the next step in the shipment's
 *   lifecycle, such as being cancelled by the customer or moved to another
 *   status in the shipping process.
 */

/**
 * @typedef GetRefundStateConfigurationParam
 * @property {string} appId
 */

/** @typedef GetRoleBasedActionsParam */

/**
 * @typedef GetShipmentByIdParam
 * @property {string} [channelShipmentId] - The shipment ID used in the
 *   application, which can be used to reference specific shipments.
 * @property {string} [shipmentId] - The unique identifier for a shipment.
 * @property {boolean} [fetchActiveShipment] - Flag to fetch active or
 *   deactivated shipments
 */

/**
 * @typedef GetShipmentHistoryParam
 * @property {string} [shipmentId] - Shipment Id
 * @property {number} [bagId] - Bag/Product Id
 */

/**
 * @typedef GetShipmentReasonsParam
 * @property {string} shipmentId - ID of the shipment. An order may contain
 *   multiple items and may get divided into one or more shipment, each having
 *   its own ID.
 * @property {string} bagId - ID of the bag. An order may contain multiple items
 *   and may get divided into one or more shipment, each having its own ID.
 * @property {string} state - State for which reasons are required.
 */

/**
 * @typedef GetShipmentsParam
 * @property {string} [lane] - Name of lane for which data is to be fetched
 * @property {string} [bagStatus] - Comma separated values of bag statuses.
 * @property {boolean} [statusOverrideLane] - Use this flag to fetch by
 *   bag_status and override lane.
 * @property {number} [timeToDispatch] - Indicates the time to dispatch.
 * @property {string} [searchType] - Specifies the key used to determine the
 *   type of search being performed.
 * @property {string} [searchValue] - The value corresponding to the search
 *   type, such as a specific shipment ID or order ID.
 * @property {string} [startDate] - The UTC start date in ISO format
 *   (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
 * @property {string} [endDate] - The UTC end date in ISO format
 *   (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
 * @property {string} [dpIds] - A comma-separated list of delivery partner IDs
 *   to filter results by specific delivery partners.
 * @property {string} [stores] - A comma-separated list of store IDs used to
 *   filter results to only those related to specific stores.
 * @property {string} [salesChannels] - A comma-separated list of sales channel
 *   IDs to filter results based on the sales channels involved.
 * @property {number} [pageNo] - Specifies the page number for paginated results.
 * @property {number} [pageSize] - Determines the number of results returned per page.
 * @property {boolean} [fetchActiveShipment] - A boolean flag that indicates
 *   whether to include only active shipments in the results.
 * @property {boolean} [allowInactive] - A flag indicating whether to allow the
 *   inclusion of inactive shipments in the results.
 * @property {boolean} [excludeLockedShipments] - A flag to specify whether to
 *   exclude shipments that are locked from the results.
 * @property {string} [paymentMethods] - A comma-separated list of payment methods.
 * @property {string} [channelShipmentId] - The shipment ID used in the
 *   application, which can be used to reference specific shipments.
 * @property {string} [channelOrderId] - The order ID used in the application.
 * @property {string} [customMeta] - Custom metadata associated with the query,
 *   allowing for additional filtering or information to be passed.
 * @property {string} [orderingChannel] - The channel through which the order was placed.
 * @property {string} [companyAffiliateTag] - A tag used to identify the
 *   company's affiliation for filtering or reporting purposes.
 * @property {boolean} [myOrders] - A boolean flag indicating whether the query
 *   should return only the user's orders.
 * @property {string} [platformUserId] - The unique identifier of the user on
 *   the platform, useful for filtering orders related to a specific user.
 * @property {string} [sortType] - Determines the sorting order of the results
 *   based on specific criteria.
 * @property {boolean} [showCrossCompanyData] - A flag indicating whether to
 *   include data from both cross-company and non-cross-company orders in the results.
 * @property {string} [tags] - A comma-separated list of tags associated with
 *   the orders to filter results based on specific characteristics.
 * @property {string} [customerId] - The unique identifier for the customer
 *   associated with the query, useful for filtering results to a specific customer.
 * @property {string} [orderType] - The type of order being queried.
 * @property {string} [operationalStatus] - Statuses relating to shipment
 *   transition in order processing journey. Comma separated values of
 *   operational statuses.
 * @property {string} [financialStatus] - Statuses relating to finance related
 *   operations in the order processing journey. Comma separated values of
 *   financial statuses.
 * @property {string} [logisticsStatus] - Statuses relating to delivery and
 *   pickup related operations in the order processing journey. Comma separated
 *   values of logistics statuses.
 * @property {string} [parentViewSlug] - Parent view is used for grouping of
 *   child views. Slug of parent view.
 * @property {string} [childViewSlug] - Child view is user configured view which
 *   has filters added by the user on which shipments/orders are fetched. Slug
 *   of child view.
 * @property {string} [lockStatus] - Flag to identify if a shipment is locked or not.
 * @property {string} [groupEntity] - Defines the grouping criterion for
 *   retrieving shipments or orders. It specifies whether the results should be
 *   organized based on shipment groups or order groups. For example, using
 *   'shipments' groups results by shipment, while an invalid value like 'abcd'
 *   may not be recognized, leading to errors or default behavior.
 * @property {boolean} [enforceDateFilter] - Applies a date filter for listing
 *   shipments. This is useful when fetching data for a specific date range
 *   while performing searches.
 */

/**
 * @typedef GetStateManagerConfigParam
 * @property {string} [appId] - The unique identifier of the application.
 * @property {string} [orderingChannel] - The channel through which orders are placed.
 * @property {string} [entity] - The entity for which the configuration is applied.
 */

/** @typedef GetStateTransitionMapParam */

/**
 * @typedef GetTemplateParam
 * @property {string} templateName
 */

/**
 * @typedef GetUserViewsParam
 * @property {string} showIn - Name of view to get filters for.
 */

/**
 * @typedef GetfiltersParam
 * @property {string} view - Name of view
 * @property {string} [groupEntity] - Name of group entity
 */

/**
 * @typedef InvalidateShipmentCacheParam
 * @property {OrderPlatformModel.InvalidateShipmentCachePayload} body
 */

/**
 * @typedef JobDetailsParam
 * @property {string} batchId - A unique identifier for the batch associated
 *   with this bulk action.
 */

/**
 * @typedef OrderUpdateParam
 * @property {OrderPlatformModel.PlatformOrderUpdate} body
 */

/**
 * @typedef PostRefundConfigurationParam
 * @property {string} appId
 * @property {OrderPlatformModel.RefundStateConfigurationManualSchema} body
 */

/**
 * @typedef PostRefundStateConfigurationParam
 * @property {string} appId
 * @property {OrderPlatformModel.PostRefundStateConfiguration} body
 */

/**
 * @typedef PostShipmentHistoryParam
 * @property {OrderPlatformModel.PostShipmentHistory} body
 */

/**
 * @typedef ReassignLocationParam
 * @property {OrderPlatformModel.StoreReassign} body
 */

/**
 * @typedef SendSmsNinjaParam
 * @property {OrderPlatformModel.SendSmsPayload} body
 */

/**
 * @typedef SendUserMobileOTPParam
 * @property {OrderPlatformModel.SendUserMobileOTP} body
 */

/**
 * @typedef UpdateOrderParam
 * @property {string} orderId
 * @property {OrderPlatformModel.OrderUpdatePayload} body
 */

/**
 * @typedef UpdateOrderConfigParam
 * @property {string} appId
 * @property {OrderPlatformModel.ConfigData} body
 */

/**
 * @typedef UpdatePackagingDimensionsParam
 * @property {OrderPlatformModel.UpdatePackagingDimensionsPayload} body
 */

/**
 * @typedef UpdateShipmentParam
 * @property {OrderPlatformModel.UpdateShipmentActionRequestSchema} body
 */

/**
 * @typedef UpdateShipmentLockParam
 * @property {OrderPlatformModel.UpdateShipmentLockPayload} body
 */

/**
 * @typedef UpdateShipmentStatusParam
 * @property {OrderPlatformModel.UpdateShipmentStatusRequestSchema} body
 */

/**
 * @typedef UpdateUserViewPositionParam
 * @property {OrderPlatformModel.UserViewPosition} body
 */

/**
 * @typedef UpdateUserViewsParam
 * @property {OrderPlatformModel.UserViewsResponseSchema} body
 */

/**
 * @typedef VerifyMobileOTPParam
 * @property {OrderPlatformModel.VerifyMobileOTP} body
 */

class OrderPlatformValidator {
  /** @returns {AddStateManagerConfigParam} */
  static addStateManagerConfig() {
    return Joi.object({
      body: OrderPlatformModel.TransitionConfigPayload().required(),
    }).required();
  }

  /** @returns {AddUserViewsParam} */
  static addUserViews() {
    return Joi.object({
      body: OrderPlatformModel.UserViewsResponseSchema().required(),
    }).required();
  }

  /** @returns {AttachOrderUserParam} */
  static attachOrderUser() {
    return Joi.object({
      body: OrderPlatformModel.AttachOrderUser().required(),
    }).required();
  }

  /** @returns {BulkListingParam} */
  static bulkListing() {
    return Joi.object({
      pageSize: Joi.number().required(),
      pageNo: Joi.number().required(),
      startDate: Joi.string().allow("").required(),
      endDate: Joi.string().allow("").required(),
      status: Joi.string().allow(""),
      bulkActionType: Joi.string().allow(""),
      searchKey: Joi.string().allow(""),
    }).required();
  }

  /** @returns {BulkStateTransistionParam} */
  static bulkStateTransistion() {
    return Joi.object({
      body: OrderPlatformModel.BulkStateTransistionRequestSchema().required(),
    }).required();
  }

  /** @returns {CheckOrderStatusParam} */
  static checkOrderStatus() {
    return Joi.object({
      body: OrderPlatformModel.OrderStatus().required(),
    }).required();
  }

  /** @returns {Click2CallParam} */
  static click2Call() {
    return Joi.object({
      caller: Joi.string().allow("").required(),
      receiver: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
      callerId: Joi.string().allow(""),
      method: Joi.string().allow(""),
    }).required();
  }

  /** @returns {CreateOrderParam} */
  static createOrder() {
    return Joi.object({
      body: OrderPlatformModel.CreateOrderAPI().required(),
    }).required();
  }

  /** @returns {DeleteUserViewsParam} */
  static deleteUserViews() {
    return Joi.object({
      viewId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DownloadBulkActionTemplateParam} */
  static downloadBulkActionTemplate() {
    return Joi.object({
      templateSlug: Joi.string().allow(""),
    }).required();
  }

  /** @returns {DownloadLanesReportParam} */
  static downloadLanesReport() {
    return Joi.object({
      body: OrderPlatformModel.BulkReportsDownloadRequestSchema().required(),
    }).required();
  }

  /** @returns {EInvoiceRetryParam} */
  static eInvoiceRetry() {
    return Joi.object({
      body: OrderPlatformModel.EInvoiceRetry().required(),
    }).required();
  }

  /** @returns {FailedOrderLogDetailsParam} */
  static failedOrderLogDetails() {
    return Joi.object({
      logId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {FetchCreditBalanceDetailParam} */
  static fetchCreditBalanceDetail() {
    return Joi.object({
      body: OrderPlatformModel.FetchCreditBalanceRequestPayload().required(),
    }).required();
  }

  /** @returns {FetchRefundModeConfigParam} */
  static fetchRefundModeConfig() {
    return Joi.object({
      body: OrderPlatformModel.RefundModeConfigRequestPayload().required(),
    }).required();
  }

  /** @returns {GeneratePOSReceiptByOrderIdParam} */
  static generatePOSReceiptByOrderId() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      shipmentId: Joi.string().allow(""),
      documentType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAllowedStateTransitionParam} */
  static getAllowedStateTransition() {
    return Joi.object({
      orderingChannel: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAllowedTemplatesForBulkParam} */
  static getAllowedTemplatesForBulk() {
    return Joi.object({}).required();
  }

  /** @returns {GetAnnouncementsParam} */
  static getAnnouncements() {
    return Joi.object({
      date: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetBagByIdParam} */
  static getBagById() {
    return Joi.object({
      bagId: Joi.string().allow(""),
      channelBagId: Joi.string().allow(""),
      channelId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetBagsParam} */
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

  /** @returns {GetBulkActionTemplateParam} */
  static getBulkActionTemplate() {
    return Joi.object({}).required();
  }

  /** @returns {GetBulkShipmentExcelFileParam} */
  static getBulkShipmentExcelFile() {
    return Joi.object({
      salesChannels: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
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

  /** @returns {GetFailedOrderLogsParam} */
  static getFailedOrderLogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetFileByStatusParam} */
  static getFileByStatus() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      fileType: Joi.string().allow("").required(),
      reportType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetGlobalFiltersParam} */
  static getGlobalFilters() {
    return Joi.object({
      showIn: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetLaneConfigParam} */
  static getLaneConfig() {
    return Joi.object({
      superLane: Joi.string().allow(""),
      groupEntity: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      timeToDispatch: Joi.number(),
      paymentMethods: Joi.string().allow(""),
      myOrders: Joi.boolean(),
      showCrossCompanyData: Joi.boolean(),
      orderType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetManifestfiltersParam} */
  static getManifestfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetOrderByIdParam} */
  static getOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      myOrders: Joi.boolean(),
      allowInactive: Joi.boolean(),
    }).required();
  }

  /** @returns {GetOrderConfigParam} */
  static getOrderConfig() {
    return Joi.object({
      appId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetOrdersParam} */
  static getOrders() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
      timeToDispatch: Joi.number(),
      paymentMethods: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isPrioritySort: Joi.boolean(),
      customMeta: Joi.array().items(Joi.any()),
      myOrders: Joi.boolean(),
      showCrossCompanyData: Joi.boolean(),
      customerId: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
      operationalStatus: Joi.string().allow(""),
      financialStatus: Joi.string().allow(""),
      logisticsStatus: Joi.string().allow(""),
      parentViewSlug: Joi.string().allow(""),
      childViewSlug: Joi.string().allow(""),
      groupEntity: Joi.string().allow(""),
      enforceDateFilter: Joi.boolean(),
    }).required();
  }

  /** @returns {GetRefundConfigurationParam} */
  static getRefundConfiguration() {
    return Joi.object({
      appId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetRefundEnableStateListParam} */
  static getRefundEnableStateList() {
    return Joi.object({}).required();
  }

  /** @returns {GetRefundOptionsParam} */
  static getRefundOptions() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      bagIds: Joi.string().allow(""),
      state: Joi.string().allow(""),
      optinAppId: Joi.string().allow(""),
      optinCompanyId: Joi.number(),
      status: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetRefundStateConfigurationParam} */
  static getRefundStateConfiguration() {
    return Joi.object({
      appId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetRoleBasedActionsParam} */
  static getRoleBasedActions() {
    return Joi.object({}).required();
  }

  /** @returns {GetShipmentByIdParam} */
  static getShipmentById() {
    return Joi.object({
      channelShipmentId: Joi.string().allow(""),
      shipmentId: Joi.string().allow(""),
      fetchActiveShipment: Joi.boolean(),
    }).required();
  }

  /** @returns {GetShipmentHistoryParam} */
  static getShipmentHistory() {
    return Joi.object({
      shipmentId: Joi.string().allow(""),
      bagId: Joi.number(),
    }).required();
  }

  /** @returns {GetShipmentReasonsParam} */
  static getShipmentReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetShipmentsParam} */
  static getShipments() {
    return Joi.object({
      lane: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
      statusOverrideLane: Joi.boolean(),
      timeToDispatch: Joi.number(),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fetchActiveShipment: Joi.boolean(),
      allowInactive: Joi.boolean(),
      excludeLockedShipments: Joi.boolean(),
      paymentMethods: Joi.string().allow(""),
      channelShipmentId: Joi.string().allow(""),
      channelOrderId: Joi.string().allow(""),
      customMeta: Joi.string().allow(""),
      orderingChannel: Joi.string().allow(""),
      companyAffiliateTag: Joi.string().allow(""),
      myOrders: Joi.boolean(),
      platformUserId: Joi.string().allow(""),
      sortType: Joi.string().allow(""),
      showCrossCompanyData: Joi.boolean(),
      tags: Joi.string().allow(""),
      customerId: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
      operationalStatus: Joi.string().allow(""),
      financialStatus: Joi.string().allow(""),
      logisticsStatus: Joi.string().allow(""),
      parentViewSlug: Joi.string().allow(""),
      childViewSlug: Joi.string().allow(""),
      lockStatus: Joi.string().allow(""),
      groupEntity: Joi.string().allow(""),
      enforceDateFilter: Joi.boolean(),
    }).required();
  }

  /** @returns {GetStateManagerConfigParam} */
  static getStateManagerConfig() {
    return Joi.object({
      appId: Joi.string().allow(""),
      orderingChannel: Joi.string().allow(""),
      entity: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetStateTransitionMapParam} */
  static getStateTransitionMap() {
    return Joi.object({}).required();
  }

  /** @returns {GetTemplateParam} */
  static getTemplate() {
    return Joi.object({
      templateName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserViewsParam} */
  static getUserViews() {
    return Joi.object({
      showIn: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetfiltersParam} */
  static getfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
      groupEntity: Joi.string().allow(""),
    }).required();
  }

  /** @returns {InvalidateShipmentCacheParam} */
  static invalidateShipmentCache() {
    return Joi.object({
      body: OrderPlatformModel.InvalidateShipmentCachePayload().required(),
    }).required();
  }

  /** @returns {JobDetailsParam} */
  static jobDetails() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {OrderUpdateParam} */
  static orderUpdate() {
    return Joi.object({
      body: OrderPlatformModel.PlatformOrderUpdate().required(),
    }).required();
  }

  /** @returns {PostRefundConfigurationParam} */
  static postRefundConfiguration() {
    return Joi.object({
      appId: Joi.string().allow("").required(),
      body: OrderPlatformModel.RefundStateConfigurationManualSchema().required(),
    }).required();
  }

  /** @returns {PostRefundStateConfigurationParam} */
  static postRefundStateConfiguration() {
    return Joi.object({
      appId: Joi.string().allow("").required(),
      body: OrderPlatformModel.PostRefundStateConfiguration().required(),
    }).required();
  }

  /** @returns {PostShipmentHistoryParam} */
  static postShipmentHistory() {
    return Joi.object({
      body: OrderPlatformModel.PostShipmentHistory().required(),
    }).required();
  }

  /** @returns {ReassignLocationParam} */
  static reassignLocation() {
    return Joi.object({
      body: OrderPlatformModel.StoreReassign().required(),
    }).required();
  }

  /** @returns {SendSmsNinjaParam} */
  static sendSmsNinja() {
    return Joi.object({
      body: OrderPlatformModel.SendSmsPayload().required(),
    }).required();
  }

  /** @returns {SendUserMobileOTPParam} */
  static sendUserMobileOTP() {
    return Joi.object({
      body: OrderPlatformModel.SendUserMobileOTP().required(),
    }).required();
  }

  /** @returns {UpdateOrderParam} */
  static updateOrder() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
      body: OrderPlatformModel.OrderUpdatePayload().required(),
    }).required();
  }

  /** @returns {UpdateOrderConfigParam} */
  static updateOrderConfig() {
    return Joi.object({
      appId: Joi.string().allow("").required(),
      body: OrderPlatformModel.ConfigData().required(),
    }).required();
  }

  /** @returns {UpdatePackagingDimensionsParam} */
  static updatePackagingDimensions() {
    return Joi.object({
      body: OrderPlatformModel.UpdatePackagingDimensionsPayload().required(),
    }).required();
  }

  /** @returns {UpdateShipmentParam} */
  static updateShipment() {
    return Joi.object({
      body: OrderPlatformModel.UpdateShipmentActionRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateShipmentLockParam} */
  static updateShipmentLock() {
    return Joi.object({
      body: OrderPlatformModel.UpdateShipmentLockPayload().required(),
    }).required();
  }

  /** @returns {UpdateShipmentStatusParam} */
  static updateShipmentStatus() {
    return Joi.object({
      body: OrderPlatformModel.UpdateShipmentStatusRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateUserViewPositionParam} */
  static updateUserViewPosition() {
    return Joi.object({
      body: OrderPlatformModel.UserViewPosition().required(),
    }).required();
  }

  /** @returns {UpdateUserViewsParam} */
  static updateUserViews() {
    return Joi.object({
      body: OrderPlatformModel.UserViewsResponseSchema().required(),
    }).required();
  }

  /** @returns {VerifyMobileOTPParam} */
  static verifyMobileOTP() {
    return Joi.object({
      body: OrderPlatformModel.VerifyMobileOTP().required(),
    }).required();
  }
}

module.exports = OrderPlatformValidator;
