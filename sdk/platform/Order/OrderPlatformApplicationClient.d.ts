export = Order;
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchId] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.dpIds] -
     * @param {string} [arg.orderingCompanyId] -
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannel] -
     * @param {string} [arg.requestByExt] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.customerId] -
     * @param {boolean} [arg.isPrioritySort] -
     * @summary:
     * @description:
     */
    getApplicationShipments({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, }?: {
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
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary:
     * @description:
     */
    getAppOrderShipmentDetails({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id
     */
    trackPlatformShipment({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
}