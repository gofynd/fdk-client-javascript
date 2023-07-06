export = OrderPlatformValidator;
/**
 * @typedef AttachOrderUserParam
 * @property {OrderPlatformModel.AttachOrderUser} body
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
 * @typedef DispatchManifestParam
 * @property {OrderPlatformModel.DispatchManifest} body
 */
/**
 * @typedef DownloadBulkActionTemplateParam
 * @property {string} [templateSlug] - Slug name of template to be downloaded
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
 * @typedef GetLaneConfigParam
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
 * @typedef GetManifestDetailsParam
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
 * @property {string} [toDate]
 * @property {string} [fromDate]
 * @property {string} [searchValue] - Search values options [ fynd_order_id,
 *   shipment_id, manifest_id, dp_name, awb_no ]
 * @property {string} [dpIds] - DP Ids separated by ',' (comma)
 * @property {string} [pageNo]
 * @property {string} [pageSize]
 */
/**
 * @typedef GetOrderByIdParam
 * @property {string} orderId
 */
/**
 * @typedef GetOrdersParam
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
/** @typedef GetRoleBasedActionsParam */
/**
 * @typedef GetShipmentByIdParam
 * @property {string} [channelShipmentId] - App Shipment Id
 * @property {string} [shipmentId] - Shipment Id
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
/** @typedef GetStateTransitionMapParam */
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
 * @typedef OrderUpdateParam
 * @property {OrderPlatformModel.PlatformOrderUpdate} body
 */
/**
 * @typedef PostShipmentHistoryParam
 * @property {OrderPlatformModel.PostShipmentHistory} body
 */
/**
 * @typedef ProcessManifestParam
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
 * @typedef UploadConsentParam
 * @property {OrderPlatformModel.UploadConsent} body
 */
/**
 * @typedef VerifyMobileOTPParam
 * @property {OrderPlatformModel.VerifyMobileOTP} body
 */
declare class OrderPlatformValidator {
    /** @returns {attachOrderUser} */
    static attachOrderUser(): attachOrderUser;
    /** @returns {checkOrderStatus} */
    static checkOrderStatus(): checkOrderStatus;
    /** @returns {click2Call} */
    static click2Call(): click2Call;
    /** @returns {createOrder} */
    static createOrder(): createOrder;
    /** @returns {dispatchManifest} */
    static dispatchManifest(): dispatchManifest;
    /** @returns {downloadBulkActionTemplate} */
    static downloadBulkActionTemplate(): downloadBulkActionTemplate;
    /** @returns {fetchCreditBalanceDetail} */
    static fetchCreditBalanceDetail(): fetchCreditBalanceDetail;
    /** @returns {fetchRefundModeConfig} */
    static fetchRefundModeConfig(): fetchRefundModeConfig;
    /** @returns {generatePOSReceiptByOrderId} */
    static generatePOSReceiptByOrderId(): generatePOSReceiptByOrderId;
    /** @returns {getAnnouncements} */
    static getAnnouncements(): getAnnouncements;
    /** @returns {getBagById} */
    static getBagById(): getBagById;
    /** @returns {getBags} */
    static getBags(): getBags;
    /** @returns {getBulkActionTemplate} */
    static getBulkActionTemplate(): getBulkActionTemplate;
    /** @returns {getBulkShipmentExcelFile} */
    static getBulkShipmentExcelFile(): getBulkShipmentExcelFile;
    /** @returns {getLaneConfig} */
    static getLaneConfig(): getLaneConfig;
    /** @returns {getManifestDetails} */
    static getManifestDetails(): getManifestDetails;
    /** @returns {getManifestShipments} */
    static getManifestShipments(): getManifestShipments;
    /** @returns {getManifestfilters} */
    static getManifestfilters(): getManifestfilters;
    /** @returns {getManifests} */
    static getManifests(): getManifests;
    /** @returns {getOrderById} */
    static getOrderById(): getOrderById;
    /** @returns {getOrders} */
    static getOrders(): getOrders;
    /** @returns {getRoleBasedActions} */
    static getRoleBasedActions(): getRoleBasedActions;
    /** @returns {getShipmentById} */
    static getShipmentById(): getShipmentById;
    /** @returns {getShipmentHistory} */
    static getShipmentHistory(): getShipmentHistory;
    /** @returns {getShipmentReasons} */
    static getShipmentReasons(): getShipmentReasons;
    /** @returns {getShipments} */
    static getShipments(): getShipments;
    /** @returns {getStateTransitionMap} */
    static getStateTransitionMap(): getStateTransitionMap;
    /** @returns {getfilters} */
    static getfilters(): getfilters;
    /** @returns {invalidateShipmentCache} */
    static invalidateShipmentCache(): invalidateShipmentCache;
    /** @returns {orderUpdate} */
    static orderUpdate(): orderUpdate;
    /** @returns {postShipmentHistory} */
    static postShipmentHistory(): postShipmentHistory;
    /** @returns {processManifest} */
    static processManifest(): processManifest;
    /** @returns {reassignLocation} */
    static reassignLocation(): reassignLocation;
    /** @returns {sendSmsNinja} */
    static sendSmsNinja(): sendSmsNinja;
    /** @returns {sendUserMobileOTP} */
    static sendUserMobileOTP(): sendUserMobileOTP;
    /** @returns {updateAddress} */
    static updateAddress(): updateAddress;
    /** @returns {updatePackagingDimensions} */
    static updatePackagingDimensions(): updatePackagingDimensions;
    /** @returns {updateShipmentLock} */
    static updateShipmentLock(): updateShipmentLock;
    /** @returns {updateShipmentStatus} */
    static updateShipmentStatus(): updateShipmentStatus;
    /** @returns {uploadConsent} */
    static uploadConsent(): uploadConsent;
    /** @returns {verifyMobileOTP} */
    static verifyMobileOTP(): verifyMobileOTP;
}
declare namespace OrderPlatformValidator {
    export { AttachOrderUserParam, CheckOrderStatusParam, Click2CallParam, CreateOrderParam, DispatchManifestParam, DownloadBulkActionTemplateParam, FetchCreditBalanceDetailParam, FetchRefundModeConfigParam, GeneratePOSReceiptByOrderIdParam, GetAnnouncementsParam, GetBagByIdParam, GetBagsParam, GetBulkActionTemplateParam, GetBulkShipmentExcelFileParam, GetLaneConfigParam, GetManifestDetailsParam, GetManifestShipmentsParam, GetManifestfiltersParam, GetManifestsParam, GetOrderByIdParam, GetOrdersParam, GetRoleBasedActionsParam, GetShipmentByIdParam, GetShipmentHistoryParam, GetShipmentReasonsParam, GetShipmentsParam, GetStateTransitionMapParam, GetfiltersParam, InvalidateShipmentCacheParam, OrderUpdateParam, PostShipmentHistoryParam, ProcessManifestParam, ReassignLocationParam, SendSmsNinjaParam, SendUserMobileOTPParam, UpdateAddressParam, UpdatePackagingDimensionsParam, UpdateShipmentLockParam, UpdateShipmentStatusParam, UploadConsentParam, VerifyMobileOTPParam };
}
type AttachOrderUserParam = {
    body: OrderPlatformModel.AttachOrderUser;
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
type DispatchManifestParam = {
    body: OrderPlatformModel.DispatchManifest;
};
type DownloadBulkActionTemplateParam = {
    /**
     * - Slug name of template to be downloaded
     */
    templateSlug?: string;
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
type GetBulkActionTemplateParam = any;
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
type GetManifestDetailsParam = {
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
type GetOrderByIdParam = {
    orderId: string;
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
type GetRoleBasedActionsParam = any;
type GetShipmentByIdParam = {
    /**
     * - App Shipment Id
     */
    channelShipmentId?: string;
    /**
     * - Shipment Id
     */
    shipmentId?: string;
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
type GetStateTransitionMapParam = any;
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
type OrderUpdateParam = {
    body: OrderPlatformModel.PlatformOrderUpdate;
};
type PostShipmentHistoryParam = {
    body: OrderPlatformModel.PostShipmentHistory;
};
type ProcessManifestParam = {
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
type UploadConsentParam = {
    body: OrderPlatformModel.UploadConsent;
};
type VerifyMobileOTPParam = {
    body: OrderPlatformModel.VerifyMobileOTP;
};
import OrderPlatformModel = require("./OrderPlatformModel");
