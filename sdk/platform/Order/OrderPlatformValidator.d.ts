export = OrderPlatformValidator;
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
 * @typedef CreateAccountParam
 * @property {OrderPlatformModel.CreateAccount} body
 */
/**
 * @typedef CreateChannelConfigParam
 * @property {OrderPlatformModel.CreateChannelConfigData} body
 */
/**
 * @typedef CreateOrderParam
 * @property {string} xOrderingSource - To uniquely identify the source through
 *   which order has been placed.
 * @property {string} [xApplicationId] - Application id
 * @property {string} [xExtensionId] - Extension id
 * @property {OrderPlatformModel.CreateOrderRequestSchema} body
 */
/**
 * @typedef CreateOrderDeprecatedParam
 * @property {string} xOrderingSource - To uniquely identify the source through
 *   which order has been placed.
 * @property {string} [xApplicationId] - The Application ID is a unique
 *   identifier assigned to a storefront that typically follows a 24-character
 *   hexadecimal string. Either `x-application-id` or `x-extension-id` header is
 *   mandatory. At least one of them must be provided.
 * @property {string} [xExtensionId] - The Extension ID is a unique identifier
 *   assigned to an extension that typically follows a 24-character hexadecimal
 *   string. Either `x-application-id` or `x-extension-id` header is mandatory.
 *   At least one of them must be provided.
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
 * @typedef GetAccountByIdParam
 * @property {string} channelAccountId - Unique identifier of the channel
 *   account to retrieve.
 */
/**
 * @typedef GetAllowedStateTransitionParam
 * @property {string} [orderingChannel] - The specific channel through which
 *   your order was placed. This field will be phased out after version 2.4.0.
 *   Please use ordering_source instead to ensure accurate order tracking and processing.
 * @property {string} [orderingSource] - To uniquely identify the source through
 *   which order has been placed.
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
 * @property {string} [orderingSource] - Filter orders by ordering source.
 *   Accepts comma-separated values for multiple sources.
 * @property {string} [channelAccountId] - Comma-separated channel account IDs
 *   to filter orders by specific channel accounts.
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
 * @property {string} [orderingSource] - Filter orders by ordering source.
 *   Accepts comma-separated values for multiple sources.
 * @property {string} [channelAccountId] - Comma-separated channel account IDs
 *   to filter orders by specific channel accounts.
 */
/**
 * @typedef GetStateManagerConfigParam
 * @property {string} [appId] - The unique identifier of the application.
 * @property {string} [orderingChannel] - The channel through which orders are placed.
 * @property {string} [orderingSource] - To uniquely identify the source through
 *   which order has been placed.
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
 * @typedef ListAccountsParam
 * @property {number} [page] - The page number to retrieve in the paginated
 *   results. Default is page 1.
 * @property {number} [size] - Number of channel accounts to return per page.
 *   Default is 20 items per page.
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
 * @typedef UpdateAccountParam
 * @property {string} channelAccountId - Unique identifier of the account.
 * @property {OrderPlatformModel.CreateAccount} body
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
declare class OrderPlatformValidator {
    /** @returns {AddStateManagerConfigParam} */
    static addStateManagerConfig(): AddStateManagerConfigParam;
    /** @returns {AttachOrderUserParam} */
    static attachOrderUser(): AttachOrderUserParam;
    /** @returns {BulkListingParam} */
    static bulkListing(): BulkListingParam;
    /** @returns {BulkStateTransistionParam} */
    static bulkStateTransistion(): BulkStateTransistionParam;
    /** @returns {CheckOrderStatusParam} */
    static checkOrderStatus(): CheckOrderStatusParam;
    /** @returns {CreateAccountParam} */
    static createAccount(): CreateAccountParam;
    /** @returns {CreateChannelConfigParam} */
    static createChannelConfig(): CreateChannelConfigParam;
    /** @returns {CreateOrderParam} */
    static createOrder(): CreateOrderParam;
    /** @returns {CreateOrderDeprecatedParam} */
    static createOrderDeprecated(): CreateOrderDeprecatedParam;
    /** @returns {DispatchManifestsParam} */
    static dispatchManifests(): DispatchManifestsParam;
    /** @returns {DownloadBulkActionTemplateParam} */
    static downloadBulkActionTemplate(): DownloadBulkActionTemplateParam;
    /** @returns {DownloadLanesReportParam} */
    static downloadLanesReport(): DownloadLanesReportParam;
    /** @returns {EInvoiceRetryParam} */
    static eInvoiceRetry(): EInvoiceRetryParam;
    /** @returns {FailedOrderLogDetailsParam} */
    static failedOrderLogDetails(): FailedOrderLogDetailsParam;
    /** @returns {FailedOrderLogsParam} */
    static failedOrderLogs(): FailedOrderLogsParam;
    /** @returns {FetchRefundModeConfigParam} */
    static fetchRefundModeConfig(): FetchRefundModeConfigParam;
    /** @returns {GenerateInvoiceIDParam} */
    static generateInvoiceID(): GenerateInvoiceIDParam;
    /** @returns {GeneratePOSReceiptByOrderIdParam} */
    static generatePOSReceiptByOrderId(): GeneratePOSReceiptByOrderIdParam;
    /** @returns {GenerateProcessManifestParam} */
    static generateProcessManifest(): GenerateProcessManifestParam;
    /** @returns {GetAccountByIdParam} */
    static getAccountById(): GetAccountByIdParam;
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
    /** @returns {GetChannelConfigParam} */
    static getChannelConfig(): any;
    /** @returns {GetFileByStatusParam} */
    static getFileByStatus(): GetFileByStatusParam;
    /** @returns {GetLaneConfigParam} */
    static getLaneConfig(): GetLaneConfigParam;
    /** @returns {GetManifestDetailsParam} */
    static getManifestDetails(): GetManifestDetailsParam;
    /** @returns {GetManifestShipmentsParam} */
    static getManifestShipments(): GetManifestShipmentsParam;
    /** @returns {GetManifestfiltersParam} */
    static getManifestfilters(): GetManifestfiltersParam;
    /** @returns {GetManifestsParam} */
    static getManifests(): GetManifestsParam;
    /** @returns {GetOrderByIdParam} */
    static getOrderById(): GetOrderByIdParam;
    /** @returns {GetOrdersParam} */
    static getOrders(): GetOrdersParam;
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
    /** @returns {GetfiltersParam} */
    static getfilters(): GetfiltersParam;
    /** @returns {InvalidateShipmentCacheParam} */
    static invalidateShipmentCache(): InvalidateShipmentCacheParam;
    /** @returns {JobDetailsParam} */
    static jobDetails(): JobDetailsParam;
    /** @returns {ListAccountsParam} */
    static listAccounts(): ListAccountsParam;
    /** @returns {OrderUpdateParam} */
    static orderUpdate(): OrderUpdateParam;
    /** @returns {PostShipmentHistoryParam} */
    static postShipmentHistory(): PostShipmentHistoryParam;
    /** @returns {ReassignLocationParam} */
    static reassignLocation(): ReassignLocationParam;
    /** @returns {SendSmsNinjaParam} */
    static sendSmsNinja(): SendSmsNinjaParam;
    /** @returns {SendUserMobileOTPParam} */
    static sendUserMobileOTP(): SendUserMobileOTPParam;
    /** @returns {TrackShipmentParam} */
    static trackShipment(): TrackShipmentParam;
    /** @returns {UpdateAccountParam} */
    static updateAccount(): UpdateAccountParam;
    /** @returns {UpdateAddressParam} */
    static updateAddress(): UpdateAddressParam;
    /** @returns {UpdatePackagingDimensionsParam} */
    static updatePackagingDimensions(): UpdatePackagingDimensionsParam;
    /** @returns {UpdatePaymentInfoParam} */
    static updatePaymentInfo(): UpdatePaymentInfoParam;
    /** @returns {UpdateShipmentLockParam} */
    static updateShipmentLock(): UpdateShipmentLockParam;
    /** @returns {UpdateShipmentStatusParam} */
    static updateShipmentStatus(): UpdateShipmentStatusParam;
    /** @returns {UpdateShipmentTrackingParam} */
    static updateShipmentTracking(): UpdateShipmentTrackingParam;
    /** @returns {UploadConsentsParam} */
    static uploadConsents(): UploadConsentsParam;
    /** @returns {VerifyMobileOTPParam} */
    static verifyMobileOTP(): VerifyMobileOTPParam;
}
declare namespace OrderPlatformValidator {
    export { AddStateManagerConfigParam, AttachOrderUserParam, BulkListingParam, BulkStateTransistionParam, CheckOrderStatusParam, CreateAccountParam, CreateChannelConfigParam, CreateOrderParam, CreateOrderDeprecatedParam, DispatchManifestsParam, DownloadBulkActionTemplateParam, DownloadLanesReportParam, EInvoiceRetryParam, FailedOrderLogDetailsParam, FailedOrderLogsParam, FetchRefundModeConfigParam, GenerateInvoiceIDParam, GeneratePOSReceiptByOrderIdParam, GenerateProcessManifestParam, GetAccountByIdParam, GetAllowedStateTransitionParam, GetAllowedTemplatesForBulkParam, GetAnnouncementsParam, GetBagByIdParam, GetBagsParam, GetBulkActionTemplateParam, GetBulkShipmentExcelFileParam, GetChannelConfigParam, GetFileByStatusParam, GetLaneConfigParam, GetManifestDetailsParam, GetManifestShipmentsParam, GetManifestfiltersParam, GetManifestsParam, GetOrderByIdParam, GetOrdersParam, GetRoleBasedActionsParam, GetShipmentByIdParam, GetShipmentHistoryParam, GetShipmentReasonsParam, GetShipmentsParam, GetStateManagerConfigParam, GetStateTransitionMapParam, GetTemplateParam, GetfiltersParam, InvalidateShipmentCacheParam, JobDetailsParam, ListAccountsParam, OrderUpdateParam, PostShipmentHistoryParam, ReassignLocationParam, SendSmsNinjaParam, SendUserMobileOTPParam, TrackShipmentParam, UpdateAccountParam, UpdateAddressParam, UpdatePackagingDimensionsParam, UpdatePaymentInfoParam, UpdateShipmentLockParam, UpdateShipmentStatusParam, UpdateShipmentTrackingParam, UploadConsentsParam, VerifyMobileOTPParam };
}
type AddStateManagerConfigParam = {
    body: OrderPlatformModel.TransitionConfigPayload;
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
type CreateAccountParam = {
    body: OrderPlatformModel.CreateAccount;
};
type CreateChannelConfigParam = {
    body: OrderPlatformModel.CreateChannelConfigData;
};
type CreateOrderParam = {
    /**
     * - To uniquely identify the source through
     * which order has been placed.
     */
    xOrderingSource: string;
    /**
     * - Application id
     */
    xApplicationId?: string;
    /**
     * - Extension id
     */
    xExtensionId?: string;
    body: OrderPlatformModel.CreateOrderRequestSchema;
};
type CreateOrderDeprecatedParam = {
    /**
     * - To uniquely identify the source through
     * which order has been placed.
     */
    xOrderingSource: string;
    /**
     * - The Application ID is a unique
     * identifier assigned to a storefront that typically follows a 24-character
     * hexadecimal string. Either `x-application-id` or `x-extension-id` header is
     * mandatory. At least one of them must be provided.
     */
    xApplicationId?: string;
    /**
     * - The Extension ID is a unique identifier
     * assigned to an extension that typically follows a 24-character hexadecimal
     * string. Either `x-application-id` or `x-extension-id` header is mandatory.
     * At least one of them must be provided.
     */
    xExtensionId?: string;
    body: OrderPlatformModel.CreateOrderAPI;
};
type DispatchManifestsParam = {
    body: OrderPlatformModel.DispatchManifest;
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
type FailedOrderLogsParam = {
    /**
     * - Application ID
     */
    applicationId?: string;
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
type FetchRefundModeConfigParam = {
    body: OrderPlatformModel.RefundModeConfigRequestPayload;
};
type GenerateInvoiceIDParam = {
    /**
     * - Mention the type of invoice id to generate
     */
    invoiceType: string;
    body: OrderPlatformModel.GenerateInvoiceIDRequestSchema;
};
type GeneratePOSReceiptByOrderIdParam = {
    orderId: string;
    shipmentId?: string;
    documentType?: string;
};
type GenerateProcessManifestParam = {
    body: OrderPlatformModel.ProcessManifestRequestSchema;
};
type GetAccountByIdParam = {
    /**
     * - Unique identifier of the channel
     * account to retrieve.
     */
    channelAccountId: string;
};
type GetAllowedStateTransitionParam = {
    /**
     * - The specific channel through which
     * your order was placed. This field will be phased out after version 2.4.0.
     * Please use ordering_source instead to ensure accurate order tracking and processing.
     */
    orderingChannel?: string;
    /**
     * - To uniquely identify the source through
     * which order has been placed.
     */
    orderingSource?: string;
    /**
     * - The status key indicates the current status for
     * which the API will provide a list of possible next state transitions.
     */
    status: string;
};
type GetAnnouncementsParam = {
    /**
     * - Date On which the announcement is Active.
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
     * - Date time in UTC timezone as per ISO format.
     */
    startDate?: string;
    /**
     * - Date time in UTC timezone as per ISO format.
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
    /**
     * - End Date in DD-MM-YYYY format
     */
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
type GetManifestDetailsParam = {
    /**
     * - The unique identifier assigned to the manifest.
     */
    manifestId: string;
    /**
     * - Filter shipments with the specific Courier
     * partner Ids which is a combination of courier partner extension and scheme Ids.
     */
    dpIds?: string;
    /**
     * - End date for the shipment search range in manifest.
     */
    endDate?: string;
    /**
     * - Start date for the shipment search range in manifest.
     */
    startDate?: string;
    /**
     * - Page number for pagination.
     */
    pageNo?: number;
    /**
     * - Number of records per page for pagination.
     */
    pageSize?: number;
};
type GetManifestShipmentsParam = {
    /**
     * - Filter shipments with the specific Courier partner
     * Ids which is a combination of courier partner extension and scheme Ids.
     */
    dpIds: string;
    /**
     * - Filter results based on specific store IDs.
     */
    stores: number;
    /**
     * - End date for the shipment search range.
     */
    toDate: string;
    /**
     * - Start date for the shipment search range.
     */
    fromDate: string;
    /**
     * - Filter results based on specific courier partner name.
     */
    dpName?: string;
    /**
     * - Filter results based on comma-separated
     * list of sales channels.
     */
    salesChannels?: string;
    /**
     * - Filter results based on search type.
     */
    searchType?: string;
    /**
     * - Filter results based on the search value.
     */
    searchValue?: string;
    /**
     * - Page number for pagination.
     */
    pageNo?: number;
    /**
     * - Number of records per page for pagination.
     */
    pageSize?: number;
};
type GetManifestfiltersParam = {
    /**
     * - Name of View
     */
    view: string;
};
type GetManifestsParam = {
    /**
     * - Filter for the status of manifests.
     */
    status?: string;
    /**
     * - The starting date for filtering manifests in
     * ISO format
     */
    startDate?: string;
    /**
     * - The end date for filtering manifests in ISO format
     */
    endDate?: string;
    /**
     * - Specifies the type of search to perform.
     */
    searchType?: string;
    /**
     * - Filter to fetch manifests for a specific store
     * by its ID.
     */
    storeId?: number;
    /**
     * - The value to search for based on the
     * selected search type.
     */
    searchValue?: string;
    /**
     * - A comma-separated list of courier partner IDs
     * (DP IDs) to filter the manifests.
     */
    dpIds?: string;
    /**
     * - The number of the page to fetch data.
     */
    pageNo?: number;
    /**
     * - The number of records to return per page for
     * pagination.
     */
    pageSize?: number;
};
type GetOrderByIdParam = {
    orderId: string;
    myOrders?: boolean;
    /**
     * - Flag to allow inactive shipments
     */
    allowInactive?: boolean;
};
type GetOrdersParam = {
    /**
     * - Lane refers to a section where orders are
     * assigned, indicating its grouping.
     */
    lane?: string;
    /**
     * - Search_type refers to the field that will
     * be used as the target for the search operation.
     */
    searchType?: string;
    /**
     * - Bag_status refers to status of the entity.
     * Filters orders based on the status.
     */
    bagStatus?: string;
    /**
     * - Time_to_dispatch refers to estimated SLA time.
     */
    timeToDispatch?: number;
    /**
     * - Comma separated values of payment
     * methods that were used to place order.
     */
    paymentMethods?: string;
    /**
     * - Tags refers to additional descriptive labels
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
    customMeta?: string;
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
     * - Flag indicating whether inactive
     * shipments are allowed
     */
    allowInactive?: boolean;
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
    /**
     * - Define the Fulfillment Type for
     * Listing Orders, This is use when we want to get list of shipments or orders
     * by cross store or cross company or fulfilling Store (by default), this is
     * also depends on the login user accessType and store access
     */
    fulfillmentType?: string;
    /**
     * - Filter orders by ordering source.
     * Accepts comma-separated values for multiple sources.
     */
    orderingSource?: string;
    /**
     * - Comma-separated channel account IDs
     * to filter orders by specific channel accounts.
     */
    channelAccountId?: string;
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
    /**
     * - Flag indicating whether inactive
     * shipments are allowed
     */
    allowInactive?: boolean;
};
type GetShipmentHistoryParam = {
    /**
     * - Identifier for the shipment
     */
    shipmentId?: string;
    /**
     * - Identifier for a bag or product.
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
     * - Used to filter shipments based on
     * status present in shipment_status_history. For more information on these
     * statuses, refer to the Fynd Partners documentation.
     */
    statusAssigned?: string;
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
     * - Start Date in DD-MM-YYYY format
     */
    fromDate?: string;
    /**
     * - End Date in DD-MM-YYYY format
     */
    toDate?: string;
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
     * - Specifies the starting UTC
     * date and time (in ISO format, YYYY-MM-DDTHH:MM:SSZ) to define the lower
     * boundary for filtering shipments based on the `created_at` timestamp of
     * statuses in the shipment's status history. It allows filtering statuses
     * that were created within a specific time range.
     */
    statusAssignedStartDate?: string;
    /**
     * - Specifies the ending UTC date
     * and time (in ISO format, YYYY-MM-DDTHH:MM:SSZ) to define the upper boundary
     * for filtering shipments based on the `created_at` timestamp of statuses in
     * the shipment's status history.
     */
    statusAssignedEndDate?: string;
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
    /**
     * - Define the Fulfillment Type for
     * Listing Orders, This is use when we want to get list of shipments or orders
     * by cross store or cross company or fulfilling Store (by default), this is
     * also depends on the login user accessType and store access
     */
    fulfillmentType?: string;
    /**
     * - Filter orders by ordering source.
     * Accepts comma-separated values for multiple sources.
     */
    orderingSource?: string;
    /**
     * - Comma-separated channel account IDs
     * to filter orders by specific channel accounts.
     */
    channelAccountId?: string;
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
     * - To uniquely identify the source through
     * which order has been placed.
     */
    orderingSource?: string;
    /**
     * - The entity for which the configuration is applied.
     */
    entity?: string;
};
type GetTemplateParam = {
    templateName: string;
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
type ListAccountsParam = {
    /**
     * - The page number to retrieve in the paginated
     * results. Default is page 1.
     */
    page?: number;
    /**
     * - Number of channel accounts to return per page.
     * Default is 20 items per page.
     */
    size?: number;
};
type OrderUpdateParam = {
    body: OrderPlatformModel.PlatformOrderUpdate;
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
type TrackShipmentParam = {
    /**
     * - Unique identifier of a shipment on the platform.
     */
    shipmentId?: string;
    /**
     * - AWB number
     */
    awb?: string;
    /**
     * - Page number for pagination.
     */
    pageNo?: number;
    /**
     * - Number of records per page for pagination.
     */
    pageSize?: number;
};
type UpdateAccountParam = {
    /**
     * - Unique identifier of the account.
     */
    channelAccountId: string;
    body: OrderPlatformModel.CreateAccount;
};
type UpdateAddressParam = {
    /**
     * - Unique shipment no. that is auto-generated
     */
    shipmentId: string;
    body: OrderPlatformModel.UpdateAddressRequestBody;
};
type UpdatePackagingDimensionsParam = {
    body: OrderPlatformModel.UpdatePackagingDimensionsPayload;
};
type UpdatePaymentInfoParam = {
    body: OrderPlatformModel.UpdateShipmentPaymentMode;
};
type UpdateShipmentLockParam = {
    body: OrderPlatformModel.UpdateShipmentLockPayload;
};
type UpdateShipmentStatusParam = {
    body: OrderPlatformModel.UpdateShipmentStatusRequestSchema;
};
type UpdateShipmentTrackingParam = {
    body: OrderPlatformModel.CourierPartnerTrackingDetails;
};
type UploadConsentsParam = {
    body: OrderPlatformModel.UploadManifestConsent;
};
type VerifyMobileOTPParam = {
    body: OrderPlatformModel.VerifyMobileOTP;
};
type GetAllowedTemplatesForBulkParam = any;
type GetBulkActionTemplateParam = any;
type GetChannelConfigParam = any;
type GetRoleBasedActionsParam = any;
type GetStateTransitionMapParam = any;
import OrderPlatformModel = require("./OrderPlatformModel");
