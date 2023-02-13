export = Orders;
declare class Orders {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchValue] -
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
     * @param {boolean} [arg.isPrioritySort] -
     * @param {boolean} [arg.excludeLockedShipments] -
     * @param {string} [arg.paymentMethods] -
     * @param {string} [arg.channelShipmentId] -
     * @param {string} [arg.channelOrderId] -
     * @param {string} [arg.customMeta] -
     * @summary:
     * @description:
     */
    getShipments({ lane, searchType, searchValue, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, isPrioritySort, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, }?: {
        lane?: string;
        searchType?: string;
        searchValue?: string;
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
        isPrioritySort?: boolean;
        excludeLockedShipments?: boolean;
        paymentMethods?: string;
        channelShipmentId?: string;
        channelOrderId?: string;
        customMeta?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.channelShipmentId -
     * @param {string} [arg.orderingCompanyId] -
     * @param {string} [arg.requestByExt] -
     * @summary:
     * @description:
     */
    getShipmentById({ channelShipmentId, orderingCompanyId, requestByExt }?: {
        channelShipmentId: string;
        orderingCompanyId?: string;
        requestByExt?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary:
     * @description:
     */
    getOrderById({ orderId }?: {
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
     * @param {string} [arg.customMeta] -
     * @summary:
     * @description:
     */
    getOrders({ lane, searchType, searchValue, fromDate, toDate, dpIds, stores, salesChannel, pageNo, pageSize, isPrioritySort, customMeta, }?: {
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
        customMeta?: string;
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
     * @param {string} arg.batchId -
     * @param {string} arg.docType -
     * @summary:
     * @description:
     */
    getBulkInvoice({ batchId, docType }?: {
        batchId: string;
        docType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId -
     * @summary:
     * @description:
     */
    getBulkInvoiceLabel({ batchId }?: {
        batchId: string;
    }): Promise<any>;
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
    getBulkShipmentExcelFile({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, }?: {
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
    getBulkList({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, }?: {
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
     * @param {string} [arg.status] -
     * @param {number} [arg.storeId] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.searchValue] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @summary:
     * @description:
     */
    getManifestList({ status, storeId, pageNo, pageSize, searchValue, fromDate, toDate, }?: {
        status?: string;
        storeId?: number;
        pageNo?: number;
        pageSize?: number;
        searchValue?: string;
        fromDate?: string;
        toDate?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.manifestId -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {number} arg.storeId -
     * @param {number} [arg.page] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.lane] -
     * @param {number} [arg.dpIds] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchValue] -
     * @summary:
     * @description:
     */
    getManifestDetailsWithShipments({ manifestId, storeId, fromDate, toDate, page, pageSize, lane, dpIds, searchType, searchValue, }?: {
        manifestId: string;
        fromDate?: string;
        toDate?: string;
        storeId: number;
        page?: number;
        pageSize?: number;
        lane?: string;
        dpIds?: number;
        searchType?: string;
        searchValue?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId -
     * @param {string} [arg.reportType] -
     * @summary:
     * @description:
     */
    getBulkActionFailedReport({ batchId, reportType }?: {
        batchId: string;
        reportType?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {string} arg.bagId - ID of the bag. An order may contain multiple
     *   items and may get divided into one or more shipment, each having its own ID.
     * @param {string} arg.state - State for which reasons are required.
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentReasons({ shipmentId, bagId, state }?: {
        shipmentId: string;
        bagId: string;
        state: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkActionPayload} arg.body
     * @summary: emits uuid to kafka topic.
     * @description: Use this API to start processing Xlsx file.
     */
    bulkActionProcessXlsxFile({ body }?: {
        body: any;
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
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.bagId] -
     * @param {string} [arg.channelBagId] -
     * @param {string} [arg.channelId] -
     * @summary:
     * @description:
     */
    getBagById({ bagId, channelBagId, channelId }?: {
        bagId?: string;
        channelBagId?: string;
        channelId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.bagIds] -
     * @param {string} [arg.shipmentIds] -
     * @param {string} [arg.orderIds] -
     * @param {string} [arg.channelBagIds] -
     * @param {string} [arg.channelShipmentIds] -
     * @param {string} [arg.channelOrderIds] -
     * @param {string} [arg.channelId] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @summary:
     * @description:
     */
    getBags({ bagIds, shipmentIds, orderIds, channelBagIds, channelShipmentIds, channelOrderIds, channelId, pageNo, pageSize, }?: {
        bagIds?: string;
        shipmentIds?: string;
        orderIds?: string;
        channelBagIds?: string;
        channelShipmentIds?: string;
        channelOrderIds?: string;
        channelId?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
}
