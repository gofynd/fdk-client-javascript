export = Order;
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @returns {Promise<Success>} - Success response
     * @summary:
     * @description:
     */
    createShipmentReport({ fromDate, toDate }?: {
        fromDate?: string;
        toDate?: string;
    }): Promise<Success>;
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
     * @returns {Promise<LaneConfigResponse>} - Success response
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
    }): Promise<LaneConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @returns {Promise<MetricCountResponse>} - Success response
     * @summary:
     * @description:
     */
    getMetricCount({ fromDate, toDate }?: {
        fromDate?: string;
        toDate?: string;
    }): Promise<MetricCountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @returns {Promise<ShipmentDetailsResponse>} - Success response
     * @summary:
     * @description:
     */
    getOrderShipmentDetails({ orderId }?: {
        orderId: string;
    }): Promise<ShipmentDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchValue] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.dpIds] -
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannel] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isPrioritySort] -
     * @returns {Promise<OrderListingResponse>} - Success response
     * @summary:
     * @description:
     */
    getOrders({ lane, searchType, searchValue, fromDate, toDate, dpIds, stores, salesChannel, pageNo, pageSize, isPrioritySort, }?: {
        lane?: string;
        searchType?: string;
        searchValue?: string;
        fromDate?: string;
        toDate?: string;
        dpIds?: string;
        stores?: string;
        salesChannel?: string;
        pageNo?: number;
        pageSize?: number;
        isPrioritySort?: boolean;
    }): Promise<OrderListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @returns {Promise<OmsReports>} - Success response
     * @summary:
     * @description:
     */
    getReportsShipmentListing({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<OmsReports>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @param {string} [arg.orderingCompanyId] -
     * @param {string} [arg.requestByExt] -
     * @returns {Promise<ShipmentInfoResponse>} - Success response
     * @summary:
     * @description:
     */
    getShipmentDetails({ shipmentId, orderingCompanyId, requestByExt, }?: {
        shipmentId: string;
        orderingCompanyId?: string;
        requestByExt?: string;
    }): Promise<ShipmentInfoResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.bagId -
     * @returns {Promise<ShipmentHistoryResponse>} - Success response
     * @summary:
     * @description:
     */
    getShipmentHistory({ bagId }?: {
        bagId: number;
    }): Promise<ShipmentHistoryResponse>;
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
     * @returns {Promise<ShipmentInternalPlatformViewResponse>} - Success response
     * @summary:
     * @description:
     */
    getShipmentList({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, }?: {
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
    }): Promise<ShipmentInternalPlatformViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.groupEntity -
     * @param {string} [arg.salesChannel] -
     * @param {string} [arg.dpIds] -
     * @returns {Promise<ManifestShipmentResponse>} - Success response
     * @summary:
     * @description:
     */
    getShipmentToManifest({ groupEntity, salesChannel, dpIds }?: {
        groupEntity: string;
        salesChannel?: string;
        dpIds?: string;
    }): Promise<ManifestShipmentResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.view -
     * @returns {Promise<FiltersResponse>} - Success response
     * @summary:
     * @description:
     */
    getfilters({ view }?: {
        view: string;
    }): Promise<FiltersResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformOrderUpdate} arg.body
     * @returns {Promise<ResponseDetail>} - Success response
     * @summary:
     * @description:
     */
    orderUpdate({ body }?: {
        body: PlatformOrderUpdate;
    }): Promise<ResponseDetail>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformShipmentStatusInternal} arg.body
     * @returns {Promise<ResponseDetail>} - Success response
     * @summary:
     * @description:
     */
    statusInternalUpdate({ body }?: {
        body: PlatformShipmentStatusInternal;
    }): Promise<ResponseDetail>;
    /**
     * @param {Object} arg - Arg object.
     * @param {JioCodeUpsertPayload} arg.body
     * @returns {Promise<JioCodeUpsertResponse>} - Success response
     * @summary:
     * @description:
     */
    upsertJioCode({ body }?: {
        body: JioCodeUpsertPayload;
    }): Promise<JioCodeUpsertResponse>;
}
