export = OrderPlatformApplicationValidator;
/**
 * @typedef GetAppOrderShipmentDetailsParam
 * @property {string} orderId
 */
/**
 * @typedef GetApplicationShipmentsParam
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
 * @typedef GetPlatformShipmentReasonsParam
 * @property {string} action
 */
/**
 * @typedef TrackShipmentPlatformParam
 * @property {string} shipmentId - Shipment Id
 */
declare class OrderPlatformApplicationValidator {
    /** @returns {GetAppOrderShipmentDetailsParam} */
    static getAppOrderShipmentDetails(): GetAppOrderShipmentDetailsParam;
    /** @returns {GetApplicationShipmentsParam} */
    static getApplicationShipments(): GetApplicationShipmentsParam;
    /** @returns {GetPlatformShipmentReasonsParam} */
    static getPlatformShipmentReasons(): GetPlatformShipmentReasonsParam;
    /** @returns {TrackShipmentPlatformParam} */
    static trackShipmentPlatform(): TrackShipmentPlatformParam;
}
declare namespace OrderPlatformApplicationValidator {
    export { GetAppOrderShipmentDetailsParam, GetApplicationShipmentsParam, GetPlatformShipmentReasonsParam, TrackShipmentPlatformParam };
}
type GetAppOrderShipmentDetailsParam = {
    orderId: string;
};
type GetApplicationShipmentsParam = {
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
type GetPlatformShipmentReasonsParam = {
    action: string;
};
type TrackShipmentPlatformParam = {
    /**
     * - Shipment Id
     */
    shipmentId: string;
};
