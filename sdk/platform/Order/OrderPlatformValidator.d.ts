export = OrderPlatformValidator;
/**
 * @typedef AttachOrderUserParam
 * @property {OrderPlatformModel.AttachOrderUser} body
 */
/**
 * @typedef BulkListingParam
 * @property {number} pageSize - Page size
 * @property {number} pageNo - Page number
 * @property {string} startDate - UTC start date in ISO format
 * @property {string} endDate - UTC end date in ISO format
 * @property {string} [status] - Status for which to fetch the jobs.
 * @property {string} [bulkActionType] - Job type.
 * @property {string} [searchKey] - Search_key.
 */
/**
 * @typedef BulkStateTransistionParam
 * @property {OrderPlatformModel.BulkStateTransistionRequest} body
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
 * @typedef CreateChannelConfigParam
 * @property {OrderPlatformModel.CreateChannelConfigData} body
 */
/**
 * @typedef CreateOrderParam
 * @property {OrderPlatformModel.CreateOrderAPI} body
 */
/**
 * @typedef DeleteuserviewsParam
 * @property {string} id - Id of view
 */
/**
 * @typedef DispatchManifestsParam
 * @property {string} manifestId
 * @property {OrderPlatformModel.DispatchManifest} body
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
 * @property {string} orderingChannel - Ordering channel
 * @property {string} status - Current status of a shipment
 */
/** @typedef GetAllowedTemplatesForBulkParam */
/**
 * @typedef GetAnnouncementsParam
 * @property {string} [date] - Date On which the announcement is Active (Date
 *   should in ISO Datetime format IST Time)
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
/** @typedef GetChannelConfigParam */
/**
 * @typedef GetFileByStatusParam
 * @property {string} batchId
 * @property {string} status
 * @property {string} fileType
 * @property {string} [reportType]
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
 * @typedef GetManifestDetailsParam
 * @property {string} manifestId
 */
/**
 * @typedef GetManifestShipmentsParam
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
 * @typedef GetManifestfiltersParam
 * @property {string} view - Name of View
 */
/**
 * @typedef GetManifestsParam
 * @property {string} [status] - Possible Status [ active, closed ]
 * @property {string} [startDate] - UTC Start Date in ISO format
 * @property {string} [endDate] - UTC End Date in ISO format
 * @property {string} [searchType] - Search type options [ fynd_order_id,
 *   shipment_id, manifest_id, dp_name, awb_no ]
 * @property {number} [storeId] - Fetch manifests for a Store.
 * @property {string} [searchValue] - Search value for selected search type
 * @property {string} [dpIds] - DP Ids separated by ',' (comma)
 * @property {number} [pageNo]
 * @property {number} [pageSize]
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
 *   assigned, indicating its grouping
 * @property {string} [searchType] - Search_type refers to the field that will
 *   be used as the target for the search operation
 * @property {string} [bagStatus] - Bag_status refers to status of the entity.
 *   Filters orders based on the status.
 * @property {number} [timeToDispatch] - Time_to_dispatch refers to estimated SLA time.
 * @property {string} [paymentMethods]
 * @property {string} [tags] - Tags refers to additional descriptive labels
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
 * @property {string} [customMeta]
 * @property {boolean} [myOrders]
 * @property {boolean} [showCrossCompanyData] - Flag to view cross & non-cross
 *   company order
 * @property {string} [customerId]
 * @property {string} [orderType]
 */
/**
 * @typedef GetRefundConfigurationParam
 * @property {string} appId
 */
/** @typedef GetRefundEnableStateListParam */
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
/** @typedef GetuserviewsParam */
/**
 * @typedef GlobalfiltersParam
 * @property {string} showIn - Name of view to get filters for
 * @property {string} requestSource - Name of site (Platform/Admin)
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
 * @typedef PostuserviewsParam
 * @property {OrderPlatformModel.UserViewsResponse} body
 */
/**
 * @typedef ProcessManifestsParam
 * @property {OrderPlatformModel.ProcessManifest} body
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
 * @property {string} [shipmentId] - Shipment ID
 * @property {string} [awb] - AWB number
 * @property {number} [pageNo] - Page number
 * @property {number} [pageSize] - Page size
 */
/**
 * @typedef UpdateAddressParam
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
 * @typedef UpdatePackagingDimensionsParam
 * @property {OrderPlatformModel.UpdatePackagingDimensionsPayload} body
 */
/**
 * @typedef UpdateShipmentLockParam
 * @property {OrderPlatformModel.UpdateShipmentLockPayload} body
 */
/**
 * @typedef UpdateShipmentStatusParam
 * @property {OrderPlatformModel.UpdateShipmentStatusRequest} body
 */
/**
 * @typedef UpdateShipmentTrackingParam
 * @property {OrderPlatformModel.CourierPartnerTrackingDetails} body
 */
/**
 * @typedef UpdateuserviewsParam
 * @property {OrderPlatformModel.UserViewsResponse} body
 */
/**
 * @typedef UploadConsentsParam
 * @property {string} manifestId
 * @property {OrderPlatformModel.UploadConsent} body
 */
/**
 * @typedef VerifyMobileOTPParam
 * @property {OrderPlatformModel.VerifyMobileOTP} body
 */
declare class OrderPlatformValidator {
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
    /** @returns {CreateChannelConfigParam} */
    static createChannelConfig(): CreateChannelConfigParam;
    /** @returns {CreateOrderParam} */
    static createOrder(): CreateOrderParam;
    /** @returns {DeleteuserviewsParam} */
    static deleteuserviews(): DeleteuserviewsParam;
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
    /** @returns {GetRefundConfigurationParam} */
    static getRefundConfiguration(): GetRefundConfigurationParam;
    /** @returns {GetRefundEnableStateListParam} */
    static getRefundEnableStateList(): any;
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
    /** @returns {GetfiltersParam} */
    static getfilters(): GetfiltersParam;
    /** @returns {GetuserviewsParam} */
    static getuserviews(): any;
    /** @returns {GlobalfiltersParam} */
    static globalfilters(): GlobalfiltersParam;
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
    /** @returns {PostuserviewsParam} */
    static postuserviews(): PostuserviewsParam;
    /** @returns {ProcessManifestsParam} */
    static processManifests(): ProcessManifestsParam;
    /** @returns {ReassignLocationParam} */
    static reassignLocation(): ReassignLocationParam;
    /** @returns {SendSmsNinjaParam} */
    static sendSmsNinja(): SendSmsNinjaParam;
    /** @returns {SendUserMobileOTPParam} */
    static sendUserMobileOTP(): SendUserMobileOTPParam;
    /** @returns {TrackShipmentParam} */
    static trackShipment(): TrackShipmentParam;
    /** @returns {UpdateAddressParam} */
    static updateAddress(): UpdateAddressParam;
    /** @returns {UpdatePackagingDimensionsParam} */
    static updatePackagingDimensions(): UpdatePackagingDimensionsParam;
    /** @returns {UpdateShipmentLockParam} */
    static updateShipmentLock(): UpdateShipmentLockParam;
    /** @returns {UpdateShipmentStatusParam} */
    static updateShipmentStatus(): UpdateShipmentStatusParam;
    /** @returns {UpdateShipmentTrackingParam} */
    static updateShipmentTracking(): UpdateShipmentTrackingParam;
    /** @returns {UpdateuserviewsParam} */
    static updateuserviews(): UpdateuserviewsParam;
    /** @returns {UploadConsentsParam} */
    static uploadConsents(): UploadConsentsParam;
    /** @returns {VerifyMobileOTPParam} */
    static verifyMobileOTP(): VerifyMobileOTPParam;
}
declare namespace OrderPlatformValidator {
    export { AttachOrderUserParam, BulkListingParam, BulkStateTransistionParam, CheckOrderStatusParam, Click2CallParam, CreateChannelConfigParam, CreateOrderParam, DeleteuserviewsParam, DispatchManifestsParam, DownloadBulkActionTemplateParam, DownloadLanesReportParam, EInvoiceRetryParam, FailedOrderLogDetailsParam, FetchCreditBalanceDetailParam, FetchRefundModeConfigParam, GeneratePOSReceiptByOrderIdParam, GetAllowedStateTransitionParam, GetAllowedTemplatesForBulkParam, GetAnnouncementsParam, GetBagByIdParam, GetBagsParam, GetBulkActionTemplateParam, GetBulkShipmentExcelFileParam, GetChannelConfigParam, GetFileByStatusParam, GetLaneConfigParam, GetManifestDetailsParam, GetManifestShipmentsParam, GetManifestfiltersParam, GetManifestsParam, GetOrderByIdParam, GetOrdersParam, GetRefundConfigurationParam, GetRefundEnableStateListParam, GetRefundStateConfigurationParam, GetRoleBasedActionsParam, GetShipmentByIdParam, GetShipmentHistoryParam, GetShipmentReasonsParam, GetShipmentsParam, GetStateTransitionMapParam, GetTemplateParam, GetfiltersParam, GetuserviewsParam, GlobalfiltersParam, InvalidateShipmentCacheParam, JobDetailsParam, OrderUpdateParam, PostRefundConfigurationParam, PostRefundStateConfigurationParam, PostShipmentHistoryParam, PostuserviewsParam, ProcessManifestsParam, ReassignLocationParam, SendSmsNinjaParam, SendUserMobileOTPParam, TrackShipmentParam, UpdateAddressParam, UpdatePackagingDimensionsParam, UpdateShipmentLockParam, UpdateShipmentStatusParam, UpdateShipmentTrackingParam, UpdateuserviewsParam, UploadConsentsParam, VerifyMobileOTPParam };
}
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
    startDate: string;
    /**
     * - UTC end date in ISO format
     */
    endDate: string;
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
    body: OrderPlatformModel.BulkStateTransistionRequest;
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
type CreateChannelConfigParam = {
    body: OrderPlatformModel.CreateChannelConfigData;
};
type CreateOrderParam = {
    body: OrderPlatformModel.CreateOrderAPI;
};
type DeleteuserviewsParam = {
    /**
     * - Id of view
     */
    id: string;
};
type DispatchManifestsParam = {
    manifestId: string;
    body: OrderPlatformModel.DispatchManifest;
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
     * - Ordering channel
     */
    orderingChannel: string;
    /**
     * - Current status of a shipment
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
type GetFileByStatusParam = {
    batchId: string;
    status: string;
    fileType: string;
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
type GetManifestDetailsParam = {
    manifestId: string;
};
type GetManifestShipmentsParam = {
    dpIds: number;
    stores: string;
    toDate: string;
    fromDate: string;
    dpName?: string;
    salesChannels?: string;
    searchType?: string;
    searchValue?: string;
    pageNo?: string;
    pageSize?: string;
};
type GetManifestfiltersParam = {
    /**
     * - Name of View
     */
    view: string;
};
type GetManifestsParam = {
    /**
     * - Possible Status [ active, closed ]
     */
    status?: string;
    /**
     * - UTC Start Date in ISO format
     */
    startDate?: string;
    /**
     * - UTC End Date in ISO format
     */
    endDate?: string;
    /**
     * - Search type options [ fynd_order_id,
     * shipment_id, manifest_id, dp_name, awb_no ]
     */
    searchType?: string;
    /**
     * - Fetch manifests for a Store.
     */
    storeId?: number;
    /**
     * - Search value for selected search type
     */
    searchValue?: string;
    /**
     * - DP Ids separated by ',' (comma)
     */
    dpIds?: string;
    pageNo?: number;
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
     * assigned, indicating its grouping
     */
    lane?: string;
    /**
     * - Search_type refers to the field that will
     * be used as the target for the search operation
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
    customMeta?: string;
    myOrders?: boolean;
    /**
     * - Flag to view cross & non-cross
     * company order
     */
    showCrossCompanyData?: boolean;
    customerId?: string;
    orderType?: string;
};
type GetRefundConfigurationParam = {
    appId: string;
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
type GlobalfiltersParam = {
    /**
     * - Name of view to get filters for
     */
    showIn: string;
    /**
     * - Name of site (Platform/Admin)
     */
    requestSource: string;
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
type PostuserviewsParam = {
    body: OrderPlatformModel.UserViewsResponse;
};
type ProcessManifestsParam = {
    body: OrderPlatformModel.ProcessManifest;
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
     * - Shipment ID
     */
    shipmentId?: string;
    /**
     * - AWB number
     */
    awb?: string;
    /**
     * - Page number
     */
    pageNo?: number;
    /**
     * - Page size
     */
    pageSize?: number;
};
type UpdateAddressParam = {
    shipmentId: string;
    name?: string;
    address?: string;
    addressType?: string;
    pincode?: string;
    phone?: string;
    email?: string;
    landmark?: string;
    addressCategory: string;
    city?: string;
    state?: string;
    country?: string;
};
type UpdatePackagingDimensionsParam = {
    body: OrderPlatformModel.UpdatePackagingDimensionsPayload;
};
type UpdateShipmentLockParam = {
    body: OrderPlatformModel.UpdateShipmentLockPayload;
};
type UpdateShipmentStatusParam = {
    body: OrderPlatformModel.UpdateShipmentStatusRequest;
};
type UpdateShipmentTrackingParam = {
    body: OrderPlatformModel.CourierPartnerTrackingDetails;
};
type UpdateuserviewsParam = {
    body: OrderPlatformModel.UserViewsResponse;
};
type UploadConsentsParam = {
    manifestId: string;
    body: OrderPlatformModel.UploadConsent;
};
type VerifyMobileOTPParam = {
    body: OrderPlatformModel.VerifyMobileOTP;
};
type GetAllowedTemplatesForBulkParam = any;
type GetBulkActionTemplateParam = any;
type GetChannelConfigParam = any;
type GetRefundEnableStateListParam = any;
type GetRoleBasedActionsParam = any;
type GetStateTransitionMapParam = any;
type GetuserviewsParam = any;
import OrderPlatformModel = require("sdk/output/javascript/code/sdk/platform/Order/OrderPlatformModel");
