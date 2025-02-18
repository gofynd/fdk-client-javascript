const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

/**
 * @typedef AddStateManagerConfigParam
 * @property {OrderPlatformModel.TransitionConfigPayload} body
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
 * @typedef CreateChannelConfigParam
 * @property {OrderPlatformModel.CreateChannelConfigData} body
 */

/**
 * @typedef CreateOrderParam
 * @property {OrderPlatformModel.CreateOrderAPI} body
 */

/**
 * @typedef DispatchManifestsParam
 * @property {OrderPlatformModel.DispatchManifest} body
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
 * @typedef FailedOrderLogsParam
 * @property {string} [applicationId] - Application ID
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [searchType] - Search type for filter
 * @property {string} [searchValue] - Search value for filter
 */

/**
 * @typedef FetchRefundModeConfigParam
 * @property {OrderPlatformModel.RefundModeConfigRequestPayload} body
 */

/**
 * @typedef GenerateInvoiceIDParam
 * @property {string} invoiceType - Mention the type of invoice id to generate
 * @property {OrderPlatformModel.GenerateInvoiceIDRequestSchema} body
 */

/**
 * @typedef GeneratePOSReceiptByOrderIdParam
 * @property {string} orderId
 * @property {string} [shipmentId]
 * @property {string} [documentType]
 */

/**
 * @typedef GenerateProcessManifestParam
 * @property {OrderPlatformModel.ProcessManifestRequestSchema} body
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
 * @property {string} [date] - Date On which the announcement is Active.
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
 * @property {string} [startDate] - Date time in UTC timezone as per ISO format.
 * @property {string} [endDate] - Date time in UTC timezone as per ISO format.
 * @property {string} [stores] - Comma separated values of store ids
 * @property {string} [tags] - Comma separated values of tags
 * @property {string} [bagStatus] - Comma separated values of bag statuses
 * @property {string} [paymentMethods] - Comma separated values of payment methods
 * @property {string} [fileType] - File type to be downloaded
 * @property {number} [timeToDispatch] - Sla breached or not breached
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 */

/** @typedef GetChannelConfigParam */

/**
 * @typedef GetFileByStatusParam
 * @property {string} batchId - Batch Id to identify the bulk operation request.
 * @property {string} status - The status of the jobs to filter the results.
 * @property {string} fileType
 * @property {string} [reportType] - The type of report to be downloaded.
 */

/**
 * @typedef GetLaneConfigParam
 * @property {string} [superLane] - Name of lane for which data is to be fetched
 * @property {string} [groupEntity] - Name of group entity
 * @property {string} [fromDate] - Start Date in DD-MM-YYYY format
 * @property {string} [toDate] - End Date in DD-MM-YYYY format
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
 * @typedef GetManifestDetailsParam
 * @property {string} manifestId - The unique identifier assigned to the manifest.
 * @property {string} [dpIds] - Filter shipments with the specific Courier
 *   partner Ids which is a combination of courier partner extension and scheme Ids.
 * @property {string} [endDate] - End date for the shipment search range in manifest.
 * @property {string} [startDate] - Start date for the shipment search range in manifest.
 * @property {number} [pageNo] - Page number for pagination.
 * @property {number} [pageSize] - Number of records per page for pagination.
 */

/**
 * @typedef GetManifestShipmentsParam
 * @property {string} dpIds - Filter shipments with the specific Courier partner
 *   Ids which is a combination of courier partner extension and scheme Ids.
 * @property {number} stores - Filter results based on specific store IDs.
 * @property {string} toDate - End date for the shipment search range.
 * @property {string} fromDate - Start date for the shipment search range.
 * @property {string} [dpName] - Filter results based on specific courier partner name.
 * @property {string} [salesChannels] - Filter results based on comma-separated
 *   list of sales channels.
 * @property {string} [searchType] - Filter results based on search type.
 * @property {string} [searchValue] - Filter results based on the search value.
 * @property {number} [pageNo] - Page number for pagination.
 * @property {number} [pageSize] - Number of records per page for pagination.
 */

/**
 * @typedef GetManifestfiltersParam
 * @property {string} view - Name of View
 */

/**
 * @typedef GetManifestsParam
 * @property {string} [status] - Filter for the status of manifests.
 * @property {string} [startDate] - The starting date for filtering manifests in
 *   ISO format
 * @property {string} [endDate] - The end date for filtering manifests in ISO format
 * @property {string} [searchType] - Specifies the type of search to perform.
 * @property {number} [storeId] - Filter to fetch manifests for a specific store
 *   by its ID.
 * @property {string} [searchValue] - The value to search for based on the
 *   selected search type.
 * @property {string} [dpIds] - A comma-separated list of courier partner IDs
 *   (DP IDs) to filter the manifests.
 * @property {number} [pageNo] - The number of the page to fetch data.
 * @property {number} [pageSize] - The number of records to return per page for
 *   pagination.
 */

/**
 * @typedef GetOrderByIdParam
 * @property {string} orderId
 * @property {boolean} [myOrders]
 * @property {boolean} [allowInactive] - Flag to allow inactive shipments
 */

/**
 * @typedef GetOrdersParam
 * @property {string} [lane] - Lane refers to a section where orders are
 *   assigned, indicating its grouping.
 * @property {string} [searchType] - Search_type refers to the field that will
 *   be used as the target for the search operation.
 * @property {string} [bagStatus] - Bag_status refers to status of the entity.
 *   Filters orders based on the status.
 * @property {number} [timeToDispatch] - Time_to_dispatch refers to estimated SLA time.
 * @property {string} [paymentMethods] - Comma separated values of payment
 *   methods that were used to place order.
 * @property {string} [tags] - Tags refers to additional descriptive labels
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
 * @property {string} [customMeta]
 * @property {boolean} [myOrders]
 * @property {boolean} [showCrossCompanyData] - Flag to view cross & non-cross
 *   company order
 * @property {string} [customerId] - The unique identifier for the customer
 *   associated with the query, useful for filtering results to a specific customer.
 * @property {string} [orderType]
 * @property {boolean} [allowInactive] - Flag indicating whether inactive
 *   shipments are allowed
 * @property {string} [groupEntity] - Defines the grouping criterion for
 *   retrieving shipments or orders. It specifies whether the results should be
 *   organized based on shipment groups or order groups. For example, using
 *   'shipments' groups results by shipment, while an invalid value like 'abcd'
 *   may not be recognized, leading to errors or default behavior.
 * @property {boolean} [enforceDateFilter] - Applies a date filter for listing
 *   orders. This is useful when fetching data for a specific date range while
 *   performing searches.
 * @property {string} [fulfillmentType] - Define the Fulfillment Type for
 *   Listing Orders, This is use when we want to get list of shipments or orders
 *   by cross store or cross company or fulfilling Store (by default), this is
 *   also depends on the login user accessType and store access
 */

/** @typedef GetRoleBasedActionsParam */

/**
 * @typedef GetShipmentByIdParam
 * @property {string} [channelShipmentId] - The shipment ID used in the
 *   application, which can be used to reference specific shipments.
 * @property {string} [shipmentId] - The unique identifier for a shipment.
 * @property {boolean} [fetchActiveShipment] - Flag to fetch active or
 *   deactivated shipments
 * @property {boolean} [allowInactive] - Flag indicating whether inactive
 *   shipments are allowed
 */

/**
 * @typedef GetShipmentHistoryParam
 * @property {string} [shipmentId] - Identifier for the shipment
 * @property {number} [bagId] - Identifier for a bag or product.
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
 * @property {string} [statusAssigned] - Used to filter shipments based on
 *   status present in shipment_status_history. For more information on these
 *   statuses, refer to the Fynd Partners documentation.
 * @property {boolean} [statusOverrideLane] - Use this flag to fetch by
 *   bag_status and override lane.
 * @property {number} [timeToDispatch] - Indicates the time to dispatch.
 * @property {string} [searchType] - Specifies the key used to determine the
 *   type of search being performed.
 * @property {string} [searchValue] - The value corresponding to the search
 *   type, such as a specific shipment ID or order ID.
 * @property {string} [fromDate] - Start Date in DD-MM-YYYY format
 * @property {string} [toDate] - End Date in DD-MM-YYYY format
 * @property {string} [startDate] - The UTC start date in ISO format
 *   (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
 * @property {string} [endDate] - The UTC end date in ISO format
 *   (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
 * @property {string} [statusAssignedStartDate] - Specifies the starting UTC
 *   date and time (in ISO format, YYYY-MM-DDTHH:MM:SSZ) to define the lower
 *   boundary for filtering shipments based on the `created_at` timestamp of
 *   statuses in the shipment's status history. It allows filtering statuses
 *   that were created within a specific time range.
 * @property {string} [statusAssignedEndDate] - Specifies the ending UTC date
 *   and time (in ISO format, YYYY-MM-DDTHH:MM:SSZ) to define the upper boundary
 *   for filtering shipments based on the `created_at` timestamp of statuses in
 *   the shipment's status history.
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
 * @property {string} [groupEntity] - Defines the grouping criterion for
 *   retrieving shipments or orders. It specifies whether the results should be
 *   organized based on shipment groups or order groups. For example, using
 *   'shipments' groups results by shipment, while an invalid value like 'abcd'
 *   may not be recognized, leading to errors or default behavior.
 * @property {boolean} [enforceDateFilter] - Applies a date filter for listing
 *   shipments. This is useful when fetching data for a specific date range
 *   while performing searches.
 * @property {string} [fulfillmentType] - Define the Fulfillment Type for
 *   Listing Orders, This is use when we want to get list of shipments or orders
 *   by cross store or cross company or fulfilling Store (by default), this is
 *   also depends on the login user accessType and store access
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
 * @typedef TrackShipmentParam
 * @property {string} [shipmentId] - Unique identifier of a shipment on the platform.
 * @property {string} [awb] - AWB number
 * @property {number} [pageNo] - Page number for pagination.
 * @property {number} [pageSize] - Number of records per page for pagination.
 */

/**
 * @typedef UpdateAddressParam
 * @property {string} shipmentId - Unique shipment no. that is auto-generated
 * @property {OrderPlatformModel.UpdateAddressRequestBody} body
 */

/**
 * @typedef UpdatePackagingDimensionsParam
 * @property {OrderPlatformModel.UpdatePackagingDimensionsPayload} body
 */

/**
 * @typedef UpdatePaymentInfoParam
 * @property {OrderPlatformModel.UpdateShipmentPaymentMode} body
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
 * @typedef UpdateShipmentTrackingParam
 * @property {OrderPlatformModel.CourierPartnerTrackingDetails} body
 */

/**
 * @typedef UploadConsentsParam
 * @property {OrderPlatformModel.UploadManifestConsent} body
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

  /** @returns {CreateChannelConfigParam} */
  static createChannelConfig() {
    return Joi.object({
      body: OrderPlatformModel.CreateChannelConfigData().required(),
    }).required();
  }

  /** @returns {CreateOrderParam} */
  static createOrder() {
    return Joi.object({
      body: OrderPlatformModel.CreateOrderAPI().required(),
    }).required();
  }

  /** @returns {DispatchManifestsParam} */
  static dispatchManifests() {
    return Joi.object({
      body: OrderPlatformModel.DispatchManifest().required(),
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

  /** @returns {FailedOrderLogsParam} */
  static failedOrderLogs() {
    return Joi.object({
      applicationId: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
    }).required();
  }

  /** @returns {FetchRefundModeConfigParam} */
  static fetchRefundModeConfig() {
    return Joi.object({
      body: OrderPlatformModel.RefundModeConfigRequestPayload().required(),
    }).required();
  }

  /** @returns {GenerateInvoiceIDParam} */
  static generateInvoiceID() {
    return Joi.object({
      invoiceType: Joi.string().allow("").required(),
      body: OrderPlatformModel.GenerateInvoiceIDRequestSchema().required(),
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

  /** @returns {GenerateProcessManifestParam} */
  static generateProcessManifest() {
    return Joi.object({
      body: OrderPlatformModel.ProcessManifestRequestSchema().required(),
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

  /** @returns {GetChannelConfigParam} */
  static getChannelConfig() {
    return Joi.object({}).required();
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

  /** @returns {GetManifestDetailsParam} */
  static getManifestDetails() {
    return Joi.object({
      manifestId: Joi.string().allow("").required(),
      dpIds: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetManifestShipmentsParam} */
  static getManifestShipments() {
    return Joi.object({
      dpIds: Joi.string().allow("").required(),
      stores: Joi.number().required(),
      toDate: Joi.string().allow("").required(),
      fromDate: Joi.string().allow("").required(),
      dpName: Joi.string().allow(""),
      salesChannels: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetManifestfiltersParam} */
  static getManifestfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetManifestsParam} */
  static getManifests() {
    return Joi.object({
      status: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      storeId: Joi.number(),
      searchValue: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
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
      customMeta: Joi.string().allow(""),
      myOrders: Joi.boolean(),
      showCrossCompanyData: Joi.boolean(),
      customerId: Joi.string().allow(""),
      orderType: Joi.string().allow(""),
      allowInactive: Joi.boolean(),
      groupEntity: Joi.string().allow(""),
      enforceDateFilter: Joi.boolean(),
      fulfillmentType: Joi.string().allow(""),
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
      allowInactive: Joi.boolean(),
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
      statusAssigned: Joi.string().allow(""),
      statusOverrideLane: Joi.boolean(),
      timeToDispatch: Joi.number(),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
      statusAssignedStartDate: Joi.string().allow(""),
      statusAssignedEndDate: Joi.string().allow(""),
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
      groupEntity: Joi.string().allow(""),
      enforceDateFilter: Joi.boolean(),
      fulfillmentType: Joi.string().allow(""),
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

  /** @returns {TrackShipmentParam} */
  static trackShipment() {
    return Joi.object({
      shipmentId: Joi.string().allow(""),
      awb: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {UpdateAddressParam} */
  static updateAddress() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      body: OrderPlatformModel.UpdateAddressRequestBody().required(),
    }).required();
  }

  /** @returns {UpdatePackagingDimensionsParam} */
  static updatePackagingDimensions() {
    return Joi.object({
      body: OrderPlatformModel.UpdatePackagingDimensionsPayload().required(),
    }).required();
  }

  /** @returns {UpdatePaymentInfoParam} */
  static updatePaymentInfo() {
    return Joi.object({
      body: OrderPlatformModel.UpdateShipmentPaymentMode().required(),
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

  /** @returns {UpdateShipmentTrackingParam} */
  static updateShipmentTracking() {
    return Joi.object({
      body: OrderPlatformModel.CourierPartnerTrackingDetails().required(),
    }).required();
  }

  /** @returns {UploadConsentsParam} */
  static uploadConsents() {
    return Joi.object({
      body: OrderPlatformModel.UploadManifestConsent().required(),
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
