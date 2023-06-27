export = OrderPlatformValidator;
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
declare class OrderPlatformValidator {
}
declare namespace OrderPlatformValidator {
    export { attachOrderUser, checkOrderStatus, click2Call, createOrder, createShipmentReport, dispatchManifest, downloadBulkActionTemplate, fetchCreditBalanceDetail, fetchRefundModeConfig, generatePOSReceiptByOrderId, getAnnouncements, getAssetByShipmentIds, getBagById, getBags, getBulkActionTemplate, getBulkShipmentExcelFile, getLaneConfig, getManifestDetails, getManifestShipments, getManifestfilters, getManifests, getMetricCount, getOrderById, getOrders, getReportsShipmentListing, getRoleBasedActions, getShipmentById, getShipmentHistory, getShipmentReasons, getShipments, getStateTransitionMap, getfilters, invalidateShipmentCache, orderUpdate, postShipmentHistory, processManifest, reassignLocation, sendSmsNinja, sendUserMobileOTP, updateAddress, updatePackagingDimensions, updateShipmentLock, updateShipmentStatus, uploadConsent, upsertJioCode, verifyMobileOTP };
}
/** @returns {attachOrderUser} */
declare function attachOrderUser(): attachOrderUser;
type attachOrderUser = {
    body: OrderPlatformModel.AttachOrderUser;
};
/** @returns {checkOrderStatus} */
declare function checkOrderStatus(): checkOrderStatus;
type checkOrderStatus = {
    body: OrderPlatformModel.OrderStatus;
};
/** @returns {click2Call} */
declare function click2Call(): click2Call;
type click2Call = {
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
/** @returns {createOrder} */
declare function createOrder(): createOrder;
type createOrder = {
    body: OrderPlatformModel.CreateOrderAPI;
};
/** @returns {createShipmentReport} */
declare function createShipmentReport(): createShipmentReport;
type createShipmentReport = {
    fromDate?: string;
    toDate?: string;
};
/** @returns {dispatchManifest} */
declare function dispatchManifest(): dispatchManifest;
type dispatchManifest = {
    body: OrderPlatformModel.DispatchManifest;
};
/** @returns {downloadBulkActionTemplate} */
declare function downloadBulkActionTemplate(): downloadBulkActionTemplate;
type downloadBulkActionTemplate = {
    /**
     * - Slug name of template to be downloaded
     */
    templateSlug?: string;
};
/** @returns {fetchCreditBalanceDetail} */
declare function fetchCreditBalanceDetail(): fetchCreditBalanceDetail;
type fetchCreditBalanceDetail = {
    body: OrderPlatformModel.FetchCreditBalanceRequestPayload;
};
/** @returns {fetchRefundModeConfig} */
declare function fetchRefundModeConfig(): fetchRefundModeConfig;
type fetchRefundModeConfig = {
    body: OrderPlatformModel.RefundModeConfigRequestPayload;
};
/** @returns {generatePOSReceiptByOrderId} */
declare function generatePOSReceiptByOrderId(): generatePOSReceiptByOrderId;
type generatePOSReceiptByOrderId = {
    orderId: string;
    shipmentId?: string;
    documentType?: string;
};
/** @returns {getAnnouncements} */
declare function getAnnouncements(): getAnnouncements;
type getAnnouncements = {
    /**
     * - Date On which the announcement is Active (Date
     * should in ISO Datetime format IST Time)
     */
    date?: string;
};
/** @returns {getAssetByShipmentIds} */
declare function getAssetByShipmentIds(): getAssetByShipmentIds;
type getAssetByShipmentIds = {
    shipmentIds: string;
    invoice?: boolean;
    expiresIn?: string;
};
/** @returns {getBagById} */
declare function getBagById(): getBagById;
type getBagById = {
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
/** @returns {getBags} */
declare function getBags(): getBags;
type getBags = {
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
/** @returns {getBulkActionTemplate} */
declare function getBulkActionTemplate(): any;
type getBulkActionTemplate = any;
/** @returns {getBulkShipmentExcelFile} */
declare function getBulkShipmentExcelFile(): getBulkShipmentExcelFile;
type getBulkShipmentExcelFile = {
    /**
     * - Comma separated values of sales channel ids
     */
    salesChannels?: string;
    /**
     * - Comma separated values of delivery partner ids
     */
    dpIds?: string;
    /**
     * - Start Date in DD-MM-YYYY format
     */
    fromDate?: string;
    /**
     * - End Date in DD-MM-YYYY format
     */
    toDate?: string;
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
/** @returns {getLaneConfig} */
declare function getLaneConfig(): getLaneConfig;
type getLaneConfig = {
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
    timeToDispatch?: string;
    paymentMethods?: string;
    myOrders?: boolean;
};
/** @returns {getManifestDetails} */
declare function getManifestDetails(): getManifestDetails;
type getManifestDetails = {
    manifestId: string;
    status?: string;
    toDate?: string;
    fromDate?: string;
    searchType?: string;
    searchValue?: string;
    /**
     * - DP Ids separated by ',' (comma)
     */
    dpIds?: string;
    pageNo?: string;
    pageSize?: string;
};
/** @returns {getManifestShipments} */
declare function getManifestShipments(): getManifestShipments;
type getManifestShipments = {
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
/** @returns {getManifestfilters} */
declare function getManifestfilters(): getManifestfilters;
type getManifestfilters = {
    /**
     * - Name of View
     */
    view: string;
};
/** @returns {getManifests} */
declare function getManifests(): getManifests;
type getManifests = {
    /**
     * - Possible Status [ active, closed ]
     */
    status?: string;
    toDate?: string;
    fromDate?: string;
    /**
     * - Search values options [ fynd_order_id,
     * shipment_id, manifest_id, dp_name, awb_no ]
     */
    searchValue?: string;
    /**
     * - DP Ids separated by ',' (comma)
     */
    dpIds?: string;
    pageNo?: string;
    pageSize?: string;
};
/** @returns {getMetricCount} */
declare function getMetricCount(): getMetricCount;
type getMetricCount = {
    fromDate?: string;
    toDate?: string;
};
/** @returns {getOrderById} */
declare function getOrderById(): getOrderById;
type getOrderById = {
    orderId: string;
};
/** @returns {getOrders} */
declare function getOrders(): getOrders;
type getOrders = {
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
    timeToDispatch?: string;
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
};
/** @returns {getReportsShipmentListing} */
declare function getReportsShipmentListing(): getReportsShipmentListing;
type getReportsShipmentListing = {
    pageNo?: number;
    pageSize?: number;
};
/** @returns {getRoleBasedActions} */
declare function getRoleBasedActions(): any;
type getRoleBasedActions = any;
/** @returns {getShipmentById} */
declare function getShipmentById(): getShipmentById;
type getShipmentById = {
    /**
     * - App Shipment Id
     */
    channelShipmentId?: string;
    /**
     * - Shipment Id
     */
    shipmentId?: string;
};
/** @returns {getShipmentHistory} */
declare function getShipmentHistory(): getShipmentHistory;
type getShipmentHistory = {
    /**
     * - Shipment Id
     */
    shipmentId?: string;
    /**
     * - Bag/Product Id
     */
    bagId?: number;
};
/** @returns {getShipmentReasons} */
declare function getShipmentReasons(): getShipmentReasons;
type getShipmentReasons = {
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
/** @returns {getShipments} */
declare function getShipments(): getShipments;
type getShipments = {
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
    timeToDispatch?: string;
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
};
/** @returns {getStateTransitionMap} */
declare function getStateTransitionMap(): any;
type getStateTransitionMap = any;
/** @returns {getfilters} */
declare function getfilters(): getfilters;
type getfilters = {
    /**
     * - Name of view
     */
    view: string;
    /**
     * - Name of group entity
     */
    groupEntity?: string;
};
/** @returns {invalidateShipmentCache} */
declare function invalidateShipmentCache(): invalidateShipmentCache;
type invalidateShipmentCache = {
    body: OrderPlatformModel.InvalidateShipmentCachePayload;
};
/** @returns {orderUpdate} */
declare function orderUpdate(): orderUpdate;
type orderUpdate = {
    body: OrderPlatformModel.PlatformOrderUpdate;
};
/** @returns {postShipmentHistory} */
declare function postShipmentHistory(): postShipmentHistory;
type postShipmentHistory = {
    body: OrderPlatformModel.PostShipmentHistory;
};
/** @returns {processManifest} */
declare function processManifest(): processManifest;
type processManifest = {
    body: OrderPlatformModel.ProcessManifest;
};
/** @returns {reassignLocation} */
declare function reassignLocation(): reassignLocation;
type reassignLocation = {
    body: OrderPlatformModel.StoreReassign;
};
/** @returns {sendSmsNinja} */
declare function sendSmsNinja(): sendSmsNinja;
type sendSmsNinja = {
    body: OrderPlatformModel.SendSmsPayload;
};
/** @returns {sendUserMobileOTP} */
declare function sendUserMobileOTP(): sendUserMobileOTP;
type sendUserMobileOTP = {
    body: OrderPlatformModel.SendUserMobileOTP;
};
/** @returns {updateAddress} */
declare function updateAddress(): updateAddress;
type updateAddress = {
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
/** @returns {updatePackagingDimensions} */
declare function updatePackagingDimensions(): updatePackagingDimensions;
type updatePackagingDimensions = {
    body: OrderPlatformModel.UpdatePackagingDimensionsPayload;
};
/** @returns {updateShipmentLock} */
declare function updateShipmentLock(): updateShipmentLock;
type updateShipmentLock = {
    body: OrderPlatformModel.UpdateShipmentLockPayload;
};
/** @returns {updateShipmentStatus} */
declare function updateShipmentStatus(): updateShipmentStatus;
type updateShipmentStatus = {
    body: OrderPlatformModel.UpdateShipmentStatusRequest;
};
/** @returns {uploadConsent} */
declare function uploadConsent(): uploadConsent;
type uploadConsent = {
    body: OrderPlatformModel.UploadConsent;
};
/** @returns {upsertJioCode} */
declare function upsertJioCode(): upsertJioCode;
type upsertJioCode = {
    body: OrderPlatformModel.JioCodeUpsertPayload;
};
/** @returns {verifyMobileOTP} */
declare function verifyMobileOTP(): verifyMobileOTP;
type verifyMobileOTP = {
    body: OrderPlatformModel.VerifyMobileOTP;
};
import OrderPlatformModel = require("./OrderPlatformModel");
