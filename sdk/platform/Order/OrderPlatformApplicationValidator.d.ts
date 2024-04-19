export = OrderPlatformApplicationValidator;
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
 * @property {string} [salesChannel]
 * @property {string} [requestByExt]
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [customerId]
 * @property {boolean} [isPrioritySort]
 * @property {boolean} [excludeLockedShipments]
 */
/**
 * @typedef GetPlatformShipmentReasonsParam
 * @property {string} action
 */
/**
 * @typedef GetShipmentBagReasonsParam
 * @property {string} shipmentId - ID of the bag. An order may contain multiple
 *   items and may get divided into one or more shipment, each having its own ID.
 * @property {number} lineNumber - Line number of bag.
 */
/**
 * @typedef TrackShipmentPlatformParam
 * @property {string} shipmentId - Shipment Id
 */
declare class OrderPlatformApplicationValidator {
    /** @returns {GetApplicationShipmentsParam} */
    static getApplicationShipments(): GetApplicationShipmentsParam;
    /** @returns {GetPlatformShipmentReasonsParam} */
    static getPlatformShipmentReasons(): GetPlatformShipmentReasonsParam;
    /** @returns {GetShipmentBagReasonsParam} */
    static getShipmentBagReasons(): GetShipmentBagReasonsParam;
    /** @returns {TrackShipmentPlatformParam} */
    static trackShipmentPlatform(): TrackShipmentPlatformParam;
}
declare namespace OrderPlatformApplicationValidator {
    export { GetApplicationShipmentsParam, GetPlatformShipmentReasonsParam, GetShipmentBagReasonsParam, TrackShipmentPlatformParam };
}
type GetApplicationShipmentsParam = {
    lane?: string;
    searchType?: string;
    searchId?: string;
    fromDate?: string;
    toDate?: string;
    dpIds?: string;
    orderingCompanyId?: string;
    stores?: string;
    salesChannel?: string;
    requestByExt?: string;
    pageNo?: number;
    pageSize?: number;
    customerId?: string;
    isPrioritySort?: boolean;
    excludeLockedShipments?: boolean;
};
type GetPlatformShipmentReasonsParam = {
    action: string;
};
type GetShipmentBagReasonsParam = {
    /**
     * - ID of the bag. An order may contain multiple
     * items and may get divided into one or more shipment, each having its own ID.
     */
    shipmentId: string;
    /**
     * - Line number of bag.
     */
    lineNumber: number;
};
type TrackShipmentPlatformParam = {
    /**
     * - Shipment Id
     */
    shipmentId: string;
};
