export = Order;
declare class Order {
    constructor(config: any);
    config: any;
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
     * @param {boolean} [arg.excludeLockedShipments] -
     * @summary:
     * @description:
     */
    getShipmentList({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, excludeLockedShipments, }?: {
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
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @param {string} [arg.orderingCompanyId] -
     * @param {string} [arg.requestByExt] -
     * @summary:
     * @description:
     */
    getShipmentDetails({ shipmentId, orderingCompanyId, requestByExt }?: {
        shipmentId: string;
        orderingCompanyId?: string;
        requestByExt?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary:
     * @description:
     */
    getOrderShipmentDetails({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.superLane] -
     * @param {string} [arg.groupEntity] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.dpIds] -
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannel] -
     * @param {string} [arg.paymentMode] -
     * @param {string} [arg.bagStatus] -
     * @summary:
     * @description:
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, dpIds, stores, salesChannel, paymentMode, bagStatus, }?: {
        superLane?: string;
        groupEntity?: string;
        fromDate?: string;
        toDate?: string;
        dpIds?: string;
        stores?: string;
        salesChannel?: string;
        paymentMode?: string;
        bagStatus?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @summary:
     * @description:
     */
    getMetricCount({ fromDate, toDate }?: {
        fromDate?: string;
        toDate?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.view -
     * @param {string} [arg.groupEntity] -
     * @summary:
     * @description:
     */
    getfilters({ view, groupEntity }?: {
        view: string;
        groupEntity?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @summary:
     * @description:
     */
    createShipmentReport({ fromDate, toDate }?: {
        fromDate?: string;
        toDate?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @summary:
     * @description:
     */
    getReportsShipmentListing({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {JioCodeUpsertPayload} arg.body
     * @summary:
     * @description:
     */
    upsertJioCode({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.url -
     * @summary: emits uuid to kafka topic.
     * @description: Use this API to start processing Xlsx file.
     */
    bulkActionProcessXlsxFile({ url }?: {
        url: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId -
     * @summary: Returns failed, processing and successfully processed shipments.
     * @description: Returns failed, processing and successfully processed shipments along with their counts and failed reasons.
     */
    bulkActionDetails({ batchId }?: {
        batchId: string;
    }): Promise<any>;
}
