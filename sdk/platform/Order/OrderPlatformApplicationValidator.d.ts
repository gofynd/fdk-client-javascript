export = OrderPlatformApplicationValidator;
/**
 * @typedef getAppOrderShipmentDetails
 * @property {string} orderId
 */
/**
 * @typedef getApplicationShipments
 * @property {string} [lane]
 * @property {string} [searchType]
 * @property {string} [searchId]
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {string} [dpIds]
 * @property {string} [orderingCompanyId]
 * @property {string} [stores]
 * @property {string} [salesChannels]
 * @property {string} [requestByExt]
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [customerId]
 * @property {boolean} [isPrioritySort]
 */
/**
 * @typedef getPlatformShipmentReasons
 * @property {string} action
 */
/**
 * @typedef trackShipmentPlatform
 * @property {string} shipmentId - Shipment Id
 */
declare class OrderPlatformApplicationValidator {
}
declare namespace OrderPlatformApplicationValidator {
    export { getAppOrderShipmentDetails, getApplicationShipments, getPlatformShipmentReasons, trackShipmentPlatform };
}
/** @returns {getAppOrderShipmentDetails} */
declare function getAppOrderShipmentDetails(): getAppOrderShipmentDetails;
type getAppOrderShipmentDetails = {
    orderId: string;
};
/** @returns {getApplicationShipments} */
declare function getApplicationShipments(): getApplicationShipments;
type getApplicationShipments = {
    lane?: string;
    searchType?: string;
    searchId?: string;
    fromDate?: string;
    toDate?: string;
    dpIds?: string;
    orderingCompanyId?: string;
    stores?: string;
    salesChannels?: string;
    requestByExt?: string;
    pageNo?: number;
    pageSize?: number;
    customerId?: string;
    isPrioritySort?: boolean;
};
/** @returns {getPlatformShipmentReasons} */
declare function getPlatformShipmentReasons(): getPlatformShipmentReasons;
type getPlatformShipmentReasons = {
    action: string;
};
/** @returns {trackShipmentPlatform} */
declare function trackShipmentPlatform(): trackShipmentPlatform;
type trackShipmentPlatform = {
    /**
     * - Shipment Id
     */
    shipmentId: string;
};
