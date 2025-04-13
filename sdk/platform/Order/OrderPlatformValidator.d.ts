export = OrderPlatformValidator;
/**
 * @typedef AddUserViewsParam
 * @property {OrderPlatformModel.UserViewsResponse} body
 */
/**
 * @typedef AttachOrderUserParam
 * @property {OrderPlatformModel.AttachOrderUser} body
 */
/**
 * @typedef BulkListingParam
 * @property {number} pageSize - Page size
 * @property {number} pageNo - Page number
 * @property {string} [startDate] - UTC start date in ISO format
 * @property {string} [endDate] - UTC end date in ISO format
 * @property {string} [status] - Status for which to fetch the jobs.
 * @property {string} [bulkActionType] - Job type.
 * @property {string} [searchKey] - Search_key.
 */
/**
 * @typedef BulkStateTransistionParam
 * @property {OrderPlatformModel.BulkStateTransistionRequestSchema} body
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
 * @property {OrderPlatformModel.BulkReportsDownloadRequest} body
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
 * @property {string} [date] - Date On which the announcement is Active.
 */
/**
 * @typedef GetBagByIdParam
 * @property {string} [bagId] - Id of bag
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
 * @property {string} batchId
 * @property {string} status
 * @property {string} fileType
 * @property {string} [reportType]
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
 * @property {string} [searchType]
 * @property {string} [searchValue]
 * @property {string} [tags]
 * @property {number} [timeToDispatch]
 * @property {string} [paymentMethods]
 * @property {boolean} [myOrders]
 * @property {boolean} [showCrossCompanyData] - Flag to view cross & non-cross
 *   company order
 * @property {string} [orderType]
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
 * @typedef GetOrdersParam
 * @property {string} [lane] - Lane refers to a section where orders are
 *   assigned, indicating its grouping
 * @property {string} [searchType] - Search_type refers to the field that will
 *   be used as the target for the search operation
 * @property {string} [bagStatus] - Bag_status refers to the status of the
 *   entity. Filters orders based on the status.
 * @property {number} [timeToDispatch] - Time_to_dispatch refers to the
 *   estimated SLA time.
 * @property {string} [paymentMethods]
 * @property {string} [tags] - Tags refer to additional descriptive labels
 *   associated with the order
 * @property {string} [searchValue] - Search_value is matched against the field
 *   specified by the search_type
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {string} [startDate]
 * @property {string} [endDate]
 * @property {string} [dpIds] - Delivery Partner IDs to which shipments are assigned.
 * @property {string} [stores]
 * @property {string} [salesChannels]
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {boolean} [isPrioritySort]
 * @property {Object[]} [customMeta]
 * @property {boolean} [myOrders]
 * @property {boolean} [showCrossCompanyData] - Flag to view cross & non-cross
 *   company order
 * @property {string} [customerId]
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
 * @property {string} [channelShipmentId] - App Shipment Id
 * @property {string} [shipmentId] - Shipment Id
 * @property {boolean} [fetchActiveShipment] - Flag to fetch active or
 *   deactivated shipments
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
 * @property {string} [bagStatus] - Comma separated values of bag statuses
 * @property {boolean} [statusOverrideLane] - Use this flag to fetch by
 *   bag_status and override lane
 * @property {number} [timeToDispatch]
 * @property {string} [searchType] - Search type key
 * @property {string} [searchValue] - Search type value
 * @property {string} [fromDate] - Start Date in DD-MM-YYYY format
 * @property {string} [toDate] - End Date in DD-MM-YYYY format
 * @property {string} [startDate] - UTC Start Date in ISO format
 * @property {string} [endDate] - UTC End Date in ISO format
 * @property {string} [dpIds] - Comma separated values of delivery partner ids
 * @property {string} [stores] - Comma separated values of store ids
 * @property {string} [salesChannels] - Comma separated values of sales channel ids
 * @property {number} [pageNo] - Page number for paginated data
 * @property {number} [pageSize] - Page size of data received per page
 * @property {boolean} [fetchActiveShipment] - Flag to fetch active shipments
 * @property {boolean} [allowInactive] - Flag to allow inactive shipments
 * @property {boolean} [excludeLockedShipments] - Flag to fetch locked shipments
 * @property {string} [paymentMethods] - Comma separated values of payment methods
 * @property {string} [channelShipmentId] - App Shipment Id
 * @property {string} [channelOrderId] - App Order Id
 * @property {string} [customMeta]
 * @property {string} [orderingChannel]
 * @property {string} [companyAffiliateTag]
 * @property {boolean} [myOrders]
 * @property {string} [platformUserId]
 * @property {string} [sortType] - Sort the result data on basis of input
 * @property {boolean} [showCrossCompanyData] - Flag to view cross & non-cross
 *   company order
 * @property {string} [tags] - Comma separated values of tags
 * @property {string} [customerId]
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
 * @property {string} batchId
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
 * @typedef UpdatePackagingDimensionsParam
 * @property {OrderPlatformModel.UpdatePackagingDimensionsPayload} body
 */
/**
 * @typedef UpdateShipmentParam
 * @property {OrderPlatformModel.UpdateShipmentActionRequest} body
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
 * @property {OrderPlatformModel.UserViewsResponse} body
 */
/**
 * @typedef VerifyMobileOTPParam
 * @property {OrderPlatformModel.VerifyMobileOTP} body
 */
declare class OrderPlatformValidator {
    /** @returns {AddUserViewsParam} */
    static addUserViews(): AddUserViewsParam;
    /** @returns {AttachOrderUserParam} */
    static attachOrderUser(): AttachOrderUserParam;
    /** @returns {BulkListingParam} */
    static bulkListing(): BulkListingParam;
    /** @returns {BulkStateTransistionParam} */
    static bulkStateTransistion(): BulkStateTransistionParam;
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
    export { AddUserViewsParam, AttachOrderUserParam, BulkListingParam, BulkStateTransistionParam, Click2CallParam, CreateOrderParam, DeleteUserViewsParam, DownloadBulkActionTemplateParam, DownloadLanesReportParam, EInvoiceRetryParam, FailedOrderLogDetailsParam, FetchCreditBalanceDetailParam, FetchRefundModeConfigParam, GeneratePOSReceiptByOrderIdParam, GetAllowedStateTransitionParam, GetAllowedTemplatesForBulkParam, GetAnnouncementsParam, GetBagByIdParam, GetBagsParam, GetBulkActionTemplateParam, GetBulkShipmentExcelFileParam, GetFailedOrderLogsParam, GetFileByStatusParam, GetGlobalFiltersParam, GetLaneConfigParam, GetManifestfiltersParam, GetOrderByIdParam, GetOrdersParam, GetRefundConfigurationParam, GetRefundEnableStateListParam, GetRefundOptionsParam, GetRefundStateConfigurationParam, GetRoleBasedActionsParam, GetShipmentByIdParam, GetShipmentHistoryParam, GetShipmentReasonsParam, GetShipmentsParam, GetStateTransitionMapParam, GetTemplateParam, GetUserViewsParam, GetfiltersParam, InvalidateShipmentCacheParam, JobDetailsParam, OrderUpdateParam, PostRefundConfigurationParam, PostRefundStateConfigurationParam, PostShipmentHistoryParam, ReassignLocationParam, SendSmsNinjaParam, SendUserMobileOTPParam, UpdateOrderParam, UpdatePackagingDimensionsParam, UpdateShipmentParam, UpdateShipmentLockParam, UpdateShipmentStatusParam, UpdateUserViewPositionParam, UpdateUserViewsParam, VerifyMobileOTPParam };
}
type AddUserViewsParam = {
    body: OrderPlatformModel.UserViewsResponse;
};
type AttachOrderUserParam = {
    body: OrderPlatformModel.AttachOrderUser;
};
type BulkListingParam = {
    /**
     * - Page size
     */
    pageSize: number;
    /**
     * - Page number
     */
    pageNo: number;
    /**
     * - UTC start date in ISO format
     */
    startDate?: string;
    /**
     * - UTC end date in ISO format
     */
    endDate?: string;
    /**
     * - Status for which to fetch the jobs.
     */
    status?: string;
    /**
     * - Job type.
     */
    bulkActionType?: string;
    /**
     * - Search_key.
     */
    searchKey?: string;
};
type BulkStateTransistionParam = {
    body: OrderPlatformModel.BulkStateTransistionRequestSchema;
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
    body: OrderPlatformModel.BulkReportsDownloadRequest;
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
     * - Date On which the announcement is Active.
     */
    date?: string;
};
type GetBagByIdParam = {
    /**
     * - Id of bag
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
    batchId: string;
    status: string;
    fileType: string;
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
    searchType?: string;
    searchValue?: string;
    tags?: string;
    timeToDispatch?: number;
    paymentMethods?: string;
    myOrders?: boolean;
    /**
     * - Flag to view cross & non-cross
     * company order
     */
    showCrossCompanyData?: boolean;
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
    fromDate?: string;
    toDate?: string;
    startDate?: string;
    endDate?: string;
    /**
     * - Delivery Partner IDs to which shipments are assigned.
     */
    dpIds?: string;
    stores?: string;
    salesChannels?: string;
    pageNo?: number;
    pageSize?: number;
    isPrioritySort?: boolean;
    customMeta?: any[];
    myOrders?: boolean;
    /**
     * - Flag to view cross & non-cross
     * company order
     */
    showCrossCompanyData?: boolean;
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
     * - App Shipment Id
     */
    channelShipmentId?: string;
    /**
     * - Shipment Id
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
     * - Comma separated values of bag statuses
     */
    bagStatus?: string;
    /**
     * - Use this flag to fetch by
     * bag_status and override lane
     */
    statusOverrideLane?: boolean;
    timeToDispatch?: number;
    /**
     * - Search type key
     */
    searchType?: string;
    /**
     * - Search type value
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
    /**
     * - Comma separated values of sales channel ids
     */
    salesChannels?: string;
    /**
     * - Page number for paginated data
     */
    pageNo?: number;
    /**
     * - Page size of data received per page
     */
    pageSize?: number;
    /**
     * - Flag to fetch active shipments
     */
    fetchActiveShipment?: boolean;
    /**
     * - Flag to allow inactive shipments
     */
    allowInactive?: boolean;
    /**
     * - Flag to fetch locked shipments
     */
    excludeLockedShipments?: boolean;
    /**
     * - Comma separated values of payment methods
     */
    paymentMethods?: string;
    /**
     * - App Shipment Id
     */
    channelShipmentId?: string;
    /**
     * - App Order Id
     */
    channelOrderId?: string;
    customMeta?: string;
    orderingChannel?: string;
    companyAffiliateTag?: string;
    myOrders?: boolean;
    platformUserId?: string;
    /**
     * - Sort the result data on basis of input
     */
    sortType?: string;
    /**
     * - Flag to view cross & non-cross
     * company order
     */
    showCrossCompanyData?: boolean;
    /**
     * - Comma separated values of tags
     */
    tags?: string;
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
type UpdatePackagingDimensionsParam = {
    body: OrderPlatformModel.UpdatePackagingDimensionsPayload;
};
type UpdateShipmentParam = {
    body: OrderPlatformModel.UpdateShipmentActionRequest;
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
    body: OrderPlatformModel.UserViewsResponse;
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
