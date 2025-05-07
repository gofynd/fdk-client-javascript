export = OrderPlatformValidator;
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
declare class OrderPlatformValidator {
    /** @returns {AddStateManagerConfigParam} */
    static addStateManagerConfig(): AddStateManagerConfigParam;
    /** @returns {AddUserViewsParam} */
    static addUserViews(): AddUserViewsParam;
    /** @returns {AttachOrderUserParam} */
    static attachOrderUser(): AttachOrderUserParam;
    /** @returns {BulkListingParam} */
    static bulkListing(): BulkListingParam;
    /** @returns {BulkStateTransistionParam} */
    static bulkStateTransistion(): BulkStateTransistionParam;
    /** @returns {CheckOrderStatusParam} */
    static checkOrderStatus(): CheckOrderStatusParam;
    /** @returns {Click2CallParam} */
    static click2Call(): Click2CallParam;
    /** @returns {CreateOrderParam} */
    static createOrder(): CreateOrderParam;
    /** @returns {DeleteUserViewsParam} */
    static deleteUserViews(): DeleteUserViewsParam;
    /** @returns {DownloadBulkActionTemplateParam} */
    static downloadBulkActionTemplate(): DownloadBulkActionTemplateParam;
    /** @returns {DownloadLanesReportParam} */
    static downloadLanesReport(): DownloadLanesReportParam;
    /** @returns {EInvoiceRetryParam} */
    static eInvoiceRetry(): EInvoiceRetryParam;
    /** @returns {FailedOrderLogDetailsParam} */
    static failedOrderLogDetails(): FailedOrderLogDetailsParam;
    /** @returns {FetchCreditBalanceDetailParam} */
    static fetchCreditBalanceDetail(): FetchCreditBalanceDetailParam;
    /** @returns {FetchRefundModeConfigParam} */
    static fetchRefundModeConfig(): FetchRefundModeConfigParam;
    /** @returns {GeneratePOSReceiptByOrderIdParam} */
    static generatePOSReceiptByOrderId(): GeneratePOSReceiptByOrderIdParam;
    /** @returns {GetAllowedStateTransitionParam} */
    static getAllowedStateTransition(): GetAllowedStateTransitionParam;
    /** @returns {GetAllowedTemplatesForBulkParam} */
    static getAllowedTemplatesForBulk(): any;
    /** @returns {GetAnnouncementsParam} */
    static getAnnouncements(): GetAnnouncementsParam;
    /** @returns {GetBagByIdParam} */
    static getBagById(): GetBagByIdParam;
    /** @returns {GetBagsParam} */
    static getBags(): GetBagsParam;
    /** @returns {GetBulkActionTemplateParam} */
    static getBulkActionTemplate(): any;
    /** @returns {GetBulkShipmentExcelFileParam} */
    static getBulkShipmentExcelFile(): GetBulkShipmentExcelFileParam;
    /** @returns {GetFailedOrderLogsParam} */
    static getFailedOrderLogs(): GetFailedOrderLogsParam;
    /** @returns {GetFileByStatusParam} */
    static getFileByStatus(): GetFileByStatusParam;
    /** @returns {GetGlobalFiltersParam} */
    static getGlobalFilters(): GetGlobalFiltersParam;
    /** @returns {GetLaneConfigParam} */
    static getLaneConfig(): GetLaneConfigParam;
    /** @returns {GetManifestfiltersParam} */
    static getManifestfilters(): GetManifestfiltersParam;
    /** @returns {GetOrderByIdParam} */
    static getOrderById(): GetOrderByIdParam;
    /** @returns {GetOrderConfigParam} */
    static getOrderConfig(): GetOrderConfigParam;
    /** @returns {GetOrdersParam} */
    static getOrders(): GetOrdersParam;
    /** @returns {GetRefundConfigurationParam} */
    static getRefundConfiguration(): GetRefundConfigurationParam;
    /** @returns {GetRefundEnableStateListParam} */
    static getRefundEnableStateList(): any;
    /** @returns {GetRefundOptionsParam} */
    static getRefundOptions(): GetRefundOptionsParam;
    /** @returns {GetRefundStateConfigurationParam} */
    static getRefundStateConfiguration(): GetRefundStateConfigurationParam;
    /** @returns {GetRoleBasedActionsParam} */
    static getRoleBasedActions(): any;
    /** @returns {GetShipmentByIdParam} */
    static getShipmentById(): GetShipmentByIdParam;
    /** @returns {GetShipmentHistoryParam} */
    static getShipmentHistory(): GetShipmentHistoryParam;
    /** @returns {GetShipmentReasonsParam} */
    static getShipmentReasons(): GetShipmentReasonsParam;
    /** @returns {GetShipmentsParam} */
    static getShipments(): GetShipmentsParam;
    /** @returns {GetStateManagerConfigParam} */
    static getStateManagerConfig(): GetStateManagerConfigParam;
    /** @returns {GetStateTransitionMapParam} */
    static getStateTransitionMap(): any;
    /** @returns {GetTemplateParam} */
    static getTemplate(): GetTemplateParam;
    /** @returns {GetUserViewsParam} */
    static getUserViews(): GetUserViewsParam;
    /** @returns {GetfiltersParam} */
    static getfilters(): GetfiltersParam;
    /** @returns {InvalidateShipmentCacheParam} */
    static invalidateShipmentCache(): InvalidateShipmentCacheParam;
    /** @returns {JobDetailsParam} */
    static jobDetails(): JobDetailsParam;
    /** @returns {OrderUpdateParam} */
    static orderUpdate(): OrderUpdateParam;
    /** @returns {PostRefundConfigurationParam} */
    static postRefundConfiguration(): PostRefundConfigurationParam;
    /** @returns {PostRefundStateConfigurationParam} */
    static postRefundStateConfiguration(): PostRefundStateConfigurationParam;
    /** @returns {PostShipmentHistoryParam} */
    static postShipmentHistory(): PostShipmentHistoryParam;
    /** @returns {ReassignLocationParam} */
    static reassignLocation(): ReassignLocationParam;
    /** @returns {SendSmsNinjaParam} */
    static sendSmsNinja(): SendSmsNinjaParam;
    /** @returns {SendUserMobileOTPParam} */
    static sendUserMobileOTP(): SendUserMobileOTPParam;
    /** @returns {UpdateOrderParam} */
    static updateOrder(): UpdateOrderParam;
    /** @returns {UpdateOrderConfigParam} */
    static updateOrderConfig(): UpdateOrderConfigParam;
    /** @returns {UpdatePackagingDimensionsParam} */
    static updatePackagingDimensions(): UpdatePackagingDimensionsParam;
    /** @returns {UpdateShipmentParam} */
    static updateShipment(): UpdateShipmentParam;
    /** @returns {UpdateShipmentLockParam} */
    static updateShipmentLock(): UpdateShipmentLockParam;
    /** @returns {UpdateShipmentStatusParam} */
    static updateShipmentStatus(): UpdateShipmentStatusParam;
    /** @returns {UpdateUserViewPositionParam} */
    static updateUserViewPosition(): UpdateUserViewPositionParam;
    /** @returns {UpdateUserViewsParam} */
    static updateUserViews(): UpdateUserViewsParam;
    /** @returns {VerifyMobileOTPParam} */
    static verifyMobileOTP(): VerifyMobileOTPParam;
}
declare namespace OrderPlatformValidator {
    export { AddStateManagerConfigParam, AddUserViewsParam, AttachOrderUserParam, BulkListingParam, BulkStateTransistionParam, CheckOrderStatusParam, Click2CallParam, CreateOrderParam, DeleteUserViewsParam, DownloadBulkActionTemplateParam, DownloadLanesReportParam, EInvoiceRetryParam, FailedOrderLogDetailsParam, FetchCreditBalanceDetailParam, FetchRefundModeConfigParam, GeneratePOSReceiptByOrderIdParam, GetAllowedStateTransitionParam, GetAllowedTemplatesForBulkParam, GetAnnouncementsParam, GetBagByIdParam, GetBagsParam, GetBulkActionTemplateParam, GetBulkShipmentExcelFileParam, GetFailedOrderLogsParam, GetFileByStatusParam, GetGlobalFiltersParam, GetLaneConfigParam, GetManifestfiltersParam, GetOrderByIdParam, GetOrderConfigParam, GetOrdersParam, GetRefundConfigurationParam, GetRefundEnableStateListParam, GetRefundOptionsParam, GetRefundStateConfigurationParam, GetRoleBasedActionsParam, GetShipmentByIdParam, GetShipmentHistoryParam, GetShipmentReasonsParam, GetShipmentsParam, GetStateManagerConfigParam, GetStateTransitionMapParam, GetTemplateParam, GetUserViewsParam, GetfiltersParam, InvalidateShipmentCacheParam, JobDetailsParam, OrderUpdateParam, PostRefundConfigurationParam, PostRefundStateConfigurationParam, PostShipmentHistoryParam, ReassignLocationParam, SendSmsNinjaParam, SendUserMobileOTPParam, UpdateOrderParam, UpdateOrderConfigParam, UpdatePackagingDimensionsParam, UpdateShipmentParam, UpdateShipmentLockParam, UpdateShipmentStatusParam, UpdateUserViewPositionParam, UpdateUserViewsParam, VerifyMobileOTPParam };
}
type AddStateManagerConfigParam = {
    body: OrderPlatformModel.TransitionConfigPayload;
};
type AddUserViewsParam = {
    body: OrderPlatformModel.UserViewsResponseSchema;
};
type AttachOrderUserParam = {
    body: OrderPlatformModel.AttachOrderUser;
};
type BulkListingParam = {
    /**
     * - The number of records to return per page in the response.
     */
    pageSize: number;
    /**
     * - The page number to fetch from the paginated results.
     */
    pageNo: number;
    /**
     * - The start date for filtering the jobs,
     * expressed in UTC format
     */
    startDate: string;
    /**
     * - The end date for filtering the jobs, expressed
     * in UTC format
     */
    endDate: string;
    /**
     * - The status of the jobs to filter the results.
     */
    status?: string;
    /**
     * - Pecifies the type of job action being requested.
     */
    bulkActionType?: string;
    /**
     * - A key or keyword used to search for specific jobs.
     */
    searchKey?: string;
};
type BulkStateTransistionParam = {
    body: OrderPlatformModel.BulkStateTransistionRequestSchema;
};
type CheckOrderStatusParam = {
    body: OrderPlatformModel.OrderStatus;
};
type Click2CallParam = {
    /**
     * - Call Number
     */
    caller: string;
    /**
     * - Receiver Number
     */
    receiver: string;
    /**
     * - Bag Id for the query
     */
    bagId: string;
    /**
     * - Caller Id
     */
    callerId?: string;
    /**
     * - Provider Method to Call
     */
    method?: string;
};
type CreateOrderParam = {
    body: OrderPlatformModel.CreateOrderAPI;
};
type DeleteUserViewsParam = {
    /**
     * - Comma separated values of view ids
     */
    viewId: string;
};
type DownloadBulkActionTemplateParam = {
    /**
     * - Slug name of template to be downloaded
     */
    templateSlug?: string;
};
type DownloadLanesReportParam = {
    body: OrderPlatformModel.BulkReportsDownloadRequestSchema;
};
type EInvoiceRetryParam = {
    body: OrderPlatformModel.EInvoiceRetry;
};
type FailedOrderLogDetailsParam = {
    /**
     * - Log Error ID
     */
    logId: string;
};
type FetchCreditBalanceDetailParam = {
    body: OrderPlatformModel.FetchCreditBalanceRequestPayload;
};
type FetchRefundModeConfigParam = {
    body: OrderPlatformModel.RefundModeConfigRequestPayload;
};
type GeneratePOSReceiptByOrderIdParam = {
    orderId: string;
    shipmentId?: string;
    documentType?: string;
};
type GetAllowedStateTransitionParam = {
    /**
     * - The channel through which orders are placed.
     */
    orderingChannel: string;
    /**
     * - The status key indicates the current status for
     * which the API will provide a list of possible next state transitions.
     */
    status: string;
};
type GetAnnouncementsParam = {
    /**
     * - Date On which the announcement is Active (Date
     * should in ISO Datetime format IST Time)
     */
    date?: string;
};
type GetBagByIdParam = {
    /**
     * - Unique identifier of a bag
     */
    bagId?: string;
    /**
     * - Id of application bag
     */
    channelBagId?: string;
    /**
     * - Id of application
     */
    channelId?: string;
};
type GetBagsParam = {
    /**
     * - Comma separated values of bag ids
     */
    bagIds?: string;
    /**
     * - Comma separated values of shipment ids
     */
    shipmentIds?: string;
    /**
     * - Comma separated values of order ids
     */
    orderIds?: string;
    /**
     * - Comma separated values of app bag ids
     */
    channelBagIds?: string;
    /**
     * - Comma separated values of app shipment ids
     */
    channelShipmentIds?: string;
    /**
     * - Comma separated values of app order ids
     */
    channelOrderIds?: string;
    /**
     * - Comma separated values of app ids
     */
    channelId?: string;
    /**
     * - Page number for paginated data
     */
    pageNo?: number;
    /**
     * - Page size of data received per page
     */
    pageSize?: number;
};
type GetBulkShipmentExcelFileParam = {
    /**
     * - Comma separated values of sales channel ids
     */
    salesChannels?: string;
    /**
     * - Comma separated values of delivery partner ids
     */
    dpIds?: string;
    /**
     * - UTC start date in ISO format
     */
    startDate?: string;
    /**
     * - UTC end date in ISO format
     */
    endDate?: string;
    /**
     * - Comma separated values of store ids
     */
    stores?: string;
    /**
     * - Comma separated values of tags
     */
    tags?: string;
    /**
     * - Comma separated values of bag statuses
     */
    bagStatus?: string;
    /**
     * - Comma separated values of payment methods
     */
    paymentMethods?: string;
    /**
     * - File type to be downloaded
     */
    fileType?: string;
    /**
     * - Sla breached or not breached
     */
    timeToDispatch?: number;
    pageNo?: number;
    pageSize?: number;
};
type GetFailedOrderLogsParam = {
    /**
     * - Page Number
     */
    pageNo?: number;
    /**
     * - Page Size
     */
    pageSize?: number;
    /**
     * - Search type for filter
     */
    searchType?: string;
    /**
     * - Search value for filter
     */
    searchValue?: string;
};
type GetFileByStatusParam = {
    /**
     * - Batch Id to identify the bulk operation request.
     */
    batchId: string;
    /**
     * - The status of the jobs to filter the results.
     */
    status: string;
    fileType: string;
    /**
     * - The type of report to be downloaded.
     */
    reportType?: string;
};
type GetGlobalFiltersParam = {
    /**
     * - Name of view to get filters for
     */
    showIn: string;
};
type GetLaneConfigParam = {
    /**
     * - Name of lane for which data is to be fetched
     */
    superLane?: string;
    /**
     * - Name of group entity
     */
    groupEntity?: string;
    /**
     * - Start Date in DD-MM-YYYY format
     */
    fromDate?: string;
    toDate?: string;
    /**
     * - UTC Start Date in ISO format
     */
    startDate?: string;
    /**
     * - UTC End Date in ISO format
     */
    endDate?: string;
    /**
     * - Comma separated values of delivery partner ids
     */
    dpIds?: string;
    /**
     * - Comma separated values of store ids
     */
    stores?: string;
    salesChannels?: string;
    /**
     * - Comma separated values of payment modes
     */
    paymentMode?: string;
    /**
     * - Comma separated values of bag statuses
     */
    bagStatus?: string;
    /**
     * - Search_type refers to the field that will
     * be used as the target for the search operation
     */
    searchType?: string;
    searchValue?: string;
    tags?: string;
    /**
     * - Time_to_dispatch refers to estimated SLA time.
     */
    timeToDispatch?: number;
    paymentMethods?: string;
    myOrders?: boolean;
    /**
     * - Flag to view cross & non-cross
     * company order
     */
    showCrossCompanyData?: boolean;
    /**
     * - Defines the specific journey a shipment will
     * follow based on the application's operational needs and customer
     * preferences. This field categorizes orders into distinct types, each
     * associated with a unique processing flow. For example:
     *
     * - "HomeDelivery": The order goes through all the steps needed for delivery,
     * from being packed to arriving at the customer’s address.
     * - "PickAtStore": The order is prepared for pickup at the store, skipping
     * shipping steps to make it ready faster for the customer to collect in person.
     * - "Digital": This order type likely refers to orders that involve digital goods
     * or services, such as software, digital subscriptions, e-books, online
     * courses, or any other item that can be delivered electronically.
     */
    orderType?: string;
};
type GetManifestfiltersParam = {
    /**
     * - Name of View
     */
    view: string;
};
type GetOrderByIdParam = {
    /**
     * - Flag for order id
     */
    orderId: string;
    myOrders?: boolean;
    /**
     * - Flag to allow inactive shipments
     */
    allowInactive?: boolean;
};
type GetOrderConfigParam = {
    appId: string;
};
type GetOrdersParam = {
    /**
     * - Lane refers to a section where orders are
     * assigned, indicating its grouping
     */
    lane?: string;
    /**
     * - Search_type refers to the field that will
     * be used as the target for the search operation
     */
    searchType?: string;
    /**
     * - Bag_status refers to the status of the
     * entity. Filters orders based on the status.
     */
    bagStatus?: string;
    /**
     * - Time_to_dispatch refers to the
     * estimated SLA time.
     */
    timeToDispatch?: number;
    /**
     * - Comma separated values of payment
     * methods that were used to place order.
     */
    paymentMethods?: string;
    /**
     * - Tags refer to additional descriptive labels
     * associated with the order
     */
    tags?: string;
    /**
     * - Search_value is matched against the field
     * specified by the search_type
     */
    searchValue?: string;
    /**
     * - Date time in UTC timezone as per ISO format.
     */
    fromDate?: string;
    /**
     * - Date time in UTC timezone as per ISO format.
     */
    toDate?: string;
    /**
     * - Date time in UTC timezone as per ISO format.
     */
    startDate?: string;
    /**
     * - Date time in UTC timezone as per ISO format.
     */
    endDate?: string;
    /**
     * - Delivery Partner IDs to which shipments are assigned.
     */
    dpIds?: string;
    /**
     * - A comma-separated list of store IDs used to
     * filter results to only those related to specific stores.
     */
    stores?: string;
    /**
     * - A comma-separated list of sales channel
     * IDs to filter results based on the sales channels involved.
     */
    salesChannels?: string;
    /**
     * - Specifies the page number for paginated results.
     */
    pageNo?: number;
    /**
     * - Determines the number of results returned per page.
     */
    pageSize?: number;
    isPrioritySort?: boolean;
    customMeta?: any[];
    myOrders?: boolean;
    /**
     * - Flag to view cross & non-cross
     * company order
     */
    showCrossCompanyData?: boolean;
    /**
     * - The unique identifier for the customer
     * associated with the query, useful for filtering results to a specific customer.
     */
    customerId?: string;
    orderType?: string;
    /**
     * - Statuses relating to shipment
     * transition in order processing journey. Comma separated values of
     * operational statuses.
     */
    operationalStatus?: string;
    /**
     * - Statuses relating to finance related
     * operations in the order processing journey. Comma separated values of
     * financial statuses.
     */
    financialStatus?: string;
    /**
     * - Statuses relating to delivery and
     * pickup related operations in the order processing journey. Comma separated
     * values of logistics statuses.
     */
    logisticsStatus?: string;
    /**
     * - Parent view is used for grouping of
     * child views. Slug of parent view.
     */
    parentViewSlug?: string;
    /**
     * - Child view is user configured view,
     * which has filters added by the user on which shipments/orders are fetched.
     * Slug of child view.
     */
    childViewSlug?: string;
    /**
     * - Defines the grouping criterion for
     * retrieving shipments or orders. It specifies whether the results should be
     * organized based on shipment groups or order groups. For example, using
     * 'shipments' groups results by shipment, while an invalid value like 'abcd'
     * may not be recognized, leading to errors or default behavior.
     */
    groupEntity?: string;
    /**
     * - Applies a date filter for listing
     * orders. This is useful when fetching data for a specific date range while
     * performing searches.
     */
    enforceDateFilter?: boolean;
};
type GetRefundConfigurationParam = {
    appId: string;
};
type GetRefundOptionsParam = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
    /**
     * - It is the bag_id of the bags with comma separated.
     */
    bagIds?: string;
    /**
     * - It is the desired state at which refund amount
     * needs to be calculated.
     */
    state?: string;
    /**
     * - It is affiliate id of the order in case of
     * cross selling.
     */
    optinAppId?: string;
    /**
     * - It is company id of the order in case
     * of cross selling.
     */
    optinCompanyId?: number;
    /**
     * - It specifies the desired status to which the
     * shipment should be updated. It represents the next step in the shipment's
     * lifecycle, such as being cancelled by the customer or moved to another
     * status in the shipping process.
     */
    status?: string;
};
type GetRefundStateConfigurationParam = {
    appId: string;
};
type GetShipmentByIdParam = {
    /**
     * - The shipment ID used in the
     * application, which can be used to reference specific shipments.
     */
    channelShipmentId?: string;
    /**
     * - The unique identifier for a shipment.
     */
    shipmentId?: string;
    /**
     * - Flag to fetch active or
     * deactivated shipments
     */
    fetchActiveShipment?: boolean;
};
type GetShipmentHistoryParam = {
    /**
     * - Shipment Id
     */
    shipmentId?: string;
    /**
     * - Bag/Product Id
     */
    bagId?: number;
};
type GetShipmentReasonsParam = {
    /**
     * - ID of the shipment. An order may contain
     * multiple items and may get divided into one or more shipment, each having
     * its own ID.
     */
    shipmentId: string;
    /**
     * - ID of the bag. An order may contain multiple items
     * and may get divided into one or more shipment, each having its own ID.
     */
    bagId: string;
    /**
     * - State for which reasons are required.
     */
    state: string;
};
type GetShipmentsParam = {
    /**
     * - Name of lane for which data is to be fetched
     */
    lane?: string;
    /**
     * - Comma separated values of bag statuses.
     */
    bagStatus?: string;
    /**
     * - Use this flag to fetch by
     * bag_status and override lane.
     */
    statusOverrideLane?: boolean;
    /**
     * - Indicates the time to dispatch.
     */
    timeToDispatch?: number;
    /**
     * - Specifies the key used to determine the
     * type of search being performed.
     */
    searchType?: string;
    /**
     * - The value corresponding to the search
     * type, such as a specific shipment ID or order ID.
     */
    searchValue?: string;
    /**
     * - The UTC start date in ISO format
     * (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
     */
    startDate?: string;
    /**
     * - The UTC end date in ISO format
     * (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
     */
    endDate?: string;
    /**
     * - A comma-separated list of delivery partner IDs
     * to filter results by specific delivery partners.
     */
    dpIds?: string;
    /**
     * - A comma-separated list of store IDs used to
     * filter results to only those related to specific stores.
     */
    stores?: string;
    /**
     * - A comma-separated list of sales channel
     * IDs to filter results based on the sales channels involved.
     */
    salesChannels?: string;
    /**
     * - Specifies the page number for paginated results.
     */
    pageNo?: number;
    /**
     * - Determines the number of results returned per page.
     */
    pageSize?: number;
    /**
     * - A boolean flag that indicates
     * whether to include only active shipments in the results.
     */
    fetchActiveShipment?: boolean;
    /**
     * - A flag indicating whether to allow the
     * inclusion of inactive shipments in the results.
     */
    allowInactive?: boolean;
    /**
     * - A flag to specify whether to
     * exclude shipments that are locked from the results.
     */
    excludeLockedShipments?: boolean;
    /**
     * - A comma-separated list of payment methods.
     */
    paymentMethods?: string;
    /**
     * - The shipment ID used in the
     * application, which can be used to reference specific shipments.
     */
    channelShipmentId?: string;
    /**
     * - The order ID used in the application.
     */
    channelOrderId?: string;
    /**
     * - Custom metadata associated with the query,
     * allowing for additional filtering or information to be passed.
     */
    customMeta?: string;
    /**
     * - The channel through which the order was placed.
     */
    orderingChannel?: string;
    /**
     * - A tag used to identify the
     * company's affiliation for filtering or reporting purposes.
     */
    companyAffiliateTag?: string;
    /**
     * - A boolean flag indicating whether the query
     * should return only the user's orders.
     */
    myOrders?: boolean;
    /**
     * - The unique identifier of the user on
     * the platform, useful for filtering orders related to a specific user.
     */
    platformUserId?: string;
    /**
     * - Determines the sorting order of the results
     * based on specific criteria.
     */
    sortType?: string;
    /**
     * - A flag indicating whether to
     * include data from both cross-company and non-cross-company orders in the results.
     */
    showCrossCompanyData?: boolean;
    /**
     * - A comma-separated list of tags associated with
     * the orders to filter results based on specific characteristics.
     */
    tags?: string;
    /**
     * - The unique identifier for the customer
     * associated with the query, useful for filtering results to a specific customer.
     */
    customerId?: string;
    /**
     * - The type of order being queried.
     */
    orderType?: string;
    /**
     * - Statuses relating to shipment
     * transition in order processing journey. Comma separated values of
     * operational statuses.
     */
    operationalStatus?: string;
    /**
     * - Statuses relating to finance related
     * operations in the order processing journey. Comma separated values of
     * financial statuses.
     */
    financialStatus?: string;
    /**
     * - Statuses relating to delivery and
     * pickup related operations in the order processing journey. Comma separated
     * values of logistics statuses.
     */
    logisticsStatus?: string;
    /**
     * - Parent view is used for grouping of
     * child views. Slug of parent view.
     */
    parentViewSlug?: string;
    /**
     * - Child view is user configured view which
     * has filters added by the user on which shipments/orders are fetched. Slug
     * of child view.
     */
    childViewSlug?: string;
    /**
     * - Flag to identify if a shipment is locked or not.
     */
    lockStatus?: string;
    /**
     * - Defines the grouping criterion for
     * retrieving shipments or orders. It specifies whether the results should be
     * organized based on shipment groups or order groups. For example, using
     * 'shipments' groups results by shipment, while an invalid value like 'abcd'
     * may not be recognized, leading to errors or default behavior.
     */
    groupEntity?: string;
    /**
     * - Applies a date filter for listing
     * shipments. This is useful when fetching data for a specific date range
     * while performing searches.
     */
    enforceDateFilter?: boolean;
};
type GetStateManagerConfigParam = {
    /**
     * - The unique identifier of the application.
     */
    appId?: string;
    /**
     * - The channel through which orders are placed.
     */
    orderingChannel?: string;
    /**
     * - The entity for which the configuration is applied.
     */
    entity?: string;
};
type GetTemplateParam = {
    templateName: string;
};
type GetUserViewsParam = {
    /**
     * - Name of view to get filters for.
     */
    showIn: string;
};
type GetfiltersParam = {
    /**
     * - Name of view
     */
    view: string;
    /**
     * - Name of group entity
     */
    groupEntity?: string;
};
type InvalidateShipmentCacheParam = {
    body: OrderPlatformModel.InvalidateShipmentCachePayload;
};
type JobDetailsParam = {
    /**
     * - A unique identifier for the batch associated
     * with this bulk action.
     */
    batchId: string;
};
type OrderUpdateParam = {
    body: OrderPlatformModel.PlatformOrderUpdate;
};
type PostRefundConfigurationParam = {
    appId: string;
    body: OrderPlatformModel.RefundStateConfigurationManualSchema;
};
type PostRefundStateConfigurationParam = {
    appId: string;
    body: OrderPlatformModel.PostRefundStateConfiguration;
};
type PostShipmentHistoryParam = {
    body: OrderPlatformModel.PostShipmentHistory;
};
type ReassignLocationParam = {
    body: OrderPlatformModel.StoreReassign;
};
type SendSmsNinjaParam = {
    body: OrderPlatformModel.SendSmsPayload;
};
type SendUserMobileOTPParam = {
    body: OrderPlatformModel.SendUserMobileOTP;
};
type UpdateOrderParam = {
    orderId: string;
    body: OrderPlatformModel.OrderUpdatePayload;
};
type UpdateOrderConfigParam = {
    appId: string;
    body: OrderPlatformModel.ConfigData;
};
type UpdatePackagingDimensionsParam = {
    body: OrderPlatformModel.UpdatePackagingDimensionsPayload;
};
type UpdateShipmentParam = {
    body: OrderPlatformModel.UpdateShipmentActionRequestSchema;
};
type UpdateShipmentLockParam = {
    body: OrderPlatformModel.UpdateShipmentLockPayload;
};
type UpdateShipmentStatusParam = {
    body: OrderPlatformModel.UpdateShipmentStatusRequestSchema;
};
type UpdateUserViewPositionParam = {
    body: OrderPlatformModel.UserViewPosition;
};
type UpdateUserViewsParam = {
    body: OrderPlatformModel.UserViewsResponseSchema;
};
type VerifyMobileOTPParam = {
    body: OrderPlatformModel.VerifyMobileOTP;
};
type GetAllowedTemplatesForBulkParam = any;
type GetBulkActionTemplateParam = any;
type GetRefundEnableStateListParam = any;
type GetRoleBasedActionsParam = any;
type GetStateTransitionMapParam = any;
import OrderPlatformModel = require("./OrderPlatformModel");
