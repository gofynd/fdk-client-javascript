export = Order;
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {AttachOrderUser} arg.body
     * @returns {Promise<AttachOrderUserResponse>} - Success response
     * @summary:
     * @description:
     */
    attachOrderUser({ body }?: {
        body: AttachOrderUser;
    }): Promise<AttachOrderUserResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderStatus} arg.body
     * @returns {Promise<OrderStatusResult>} - Success response
     * @summary:
     * @description:
     */
    checkOrderStatus({ body }?: {
        body: OrderStatus;
    }): Promise<OrderStatusResult>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.caller - Call Number
     * @param {string} arg.receiver - Receiver Number
     * @param {string} arg.bagId - Bag Id for the query
     * @param {string} [arg.callerId] - Caller Id
     * @param {string} [arg.method] - Provider Method to Call
     * @returns {Promise<Click2CallResponse>} - Success response
     * @summary:
     * @description:
     */
    click2Call({ caller, receiver, bagId, callerId, method, }?: {
        caller: string;
        receiver: string;
        bagId: string;
        callerId?: string;
        method?: string;
    }): Promise<Click2CallResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateChannelConfigData} arg.body
     * @returns {Promise<CreateChannelConfigResponse>} - Success response
     * @summary:
     * @description: createChannelConfig
     */
    createChannelConfig({ body }?: {
        body: CreateChannelConfigData;
    }): Promise<CreateChannelConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateOrderAPI} arg.body
     * @returns {Promise<CreateOrderResponse>} - Success response
     * @summary:
     * @description:
     */
    createOrder({ body }?: {
        body: CreateOrderAPI;
    }): Promise<CreateOrderResponse>;
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
     * @param {DispatchManifest} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary:
     * @description:
     */
    dispatchManifest({ body }?: {
        body: DispatchManifest;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.templateSlug] - Slug name of template to be downloaded
     * @returns {Promise<FileResponse>} - Success response
     * @summary:
     * @description:
     */
    downloadBulkActionTemplate({ templateSlug }?: {
        templateSlug?: string;
    }): Promise<FileResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {FetchCreditBalanceRequestPayload} arg.body
     * @returns {Promise<FetchCreditBalanceResponsePayload>} - Success response
     * @summary:
     * @description:
     */
    fetchCreditBalanceDetail({ body }?: {
        body: FetchCreditBalanceRequestPayload;
    }): Promise<FetchCreditBalanceResponsePayload>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RefundModeConfigRequestPayload} arg.body
     * @returns {Promise<RefundModeConfigResponsePayload>} - Success response
     * @summary:
     * @description:
     */
    fetchRefundModeConfig({ body }?: {
        body: RefundModeConfigRequestPayload;
    }): Promise<RefundModeConfigResponsePayload>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {string} [arg.shipmentId] -
     * @param {string} [arg.documentType] -
     * @returns {Promise<GeneratePosOrderReceiptResponse>} - Success response
     * @summary:
     * @description:
     */
    generatePOSReceiptByOrderId({ orderId, shipmentId, documentType, }?: {
        orderId: string;
        shipmentId?: string;
        documentType?: string;
    }): Promise<GeneratePosOrderReceiptResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.date] - Date On which the announcement is Active
     *   (Date should in ISO Datetime format IST Time)
     * @returns {Promise<AnnouncementsResponse>} - Success response
     * @summary:
     * @description:
     */
    getAnnouncements({ date }?: {
        date?: string;
    }): Promise<AnnouncementsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentIds -
     * @param {boolean} [arg.invoice] -
     * @param {string} [arg.expiresIn] -
     * @returns {Promise<ResponseGetAssetShipment>} - Success response
     * @summary: Get Invoice or Label or Pos of a shipment
     * @description: Use this API to retrieve shipments invoice, label and pos.
     */
    getAssetByShipmentIds({ shipmentIds, invoice, expiresIn }?: {
        shipmentIds: string;
        invoice?: boolean;
        expiresIn?: string;
    }): Promise<ResponseGetAssetShipment>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.bagId] - Id of bag
     * @param {string} [arg.channelBagId] - Id of application bag
     * @param {string} [arg.channelId] - Id of application
     * @returns {Promise<BagDetailsPlatformResponse>} - Success response
     * @summary:
     * @description:
     */
    getBagById({ bagId, channelBagId, channelId }?: {
        bagId?: string;
        channelBagId?: string;
        channelId?: string;
    }): Promise<BagDetailsPlatformResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.bagIds] - Comma separated values of bag ids
     * @param {string} [arg.shipmentIds] - Comma separated values of shipment ids
     * @param {string} [arg.orderIds] - Comma separated values of order ids
     * @param {string} [arg.channelBagIds] - Comma separated values of app bag ids
     * @param {string} [arg.channelShipmentIds] - Comma separated values of app
     *   shipment ids
     * @param {string} [arg.channelOrderIds] - Comma separated values of app order ids
     * @param {string} [arg.channelId] - Comma separated values of app ids
     * @param {number} [arg.pageNo] - Page number for paginated data
     * @param {number} [arg.pageSize] - Page size of data received per page
     * @returns {Promise<GetBagsPlatformResponse>} - Success response
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
    }): Promise<GetBagsPlatformResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<BulkActionTemplateResponse>} - Success response
     * @summary:
     * @description:
     */
    getBulkActionTemplate({}?: any): Promise<BulkActionTemplateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.salesChannels] - Comma separated values of sales channel ids
     * @param {string} [arg.dpIds] - Comma separated values of delivery partner ids
     * @param {string} [arg.fromDate] - Start Date in DD-MM-YYYY format
     * @param {string} [arg.toDate] - End Date in DD-MM-YYYY format
     * @param {string} [arg.stores] - Comma separated values of store ids
     * @param {string} [arg.tags] - Comma separated values of tags
     * @param {string} [arg.bagStatus] - Comma separated values of bag statuses
     * @param {string} [arg.paymentMethods] - Comma separated values of payment methods
     * @param {string} [arg.fileType] - File type to be downloaded
     * @param {number} [arg.timeToDispatch] - Sla breached or not breached
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @returns {Promise<FileResponse>} - Success response
     * @summary:
     * @description:
     */
    getBulkShipmentExcelFile({ salesChannels, dpIds, fromDate, toDate, stores, tags, bagStatus, paymentMethods, fileType, timeToDispatch, pageNo, pageSize, }?: {
        salesChannels?: string;
        dpIds?: string;
        fromDate?: string;
        toDate?: string;
        stores?: string;
        tags?: string;
        bagStatus?: string;
        paymentMethods?: string;
        fileType?: string;
        timeToDispatch?: number;
        pageNo?: number;
        pageSize?: number;
    }): Promise<FileResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<CreateChannelConfigData>} - Success response
     * @summary:
     * @description: getChannelConfig
     */
    getChannelConfig({}?: any): Promise<CreateChannelConfigData>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.superLane] - Name of lane for which data is to be fetched
     * @param {string} [arg.groupEntity] - Name of group entity
     * @param {string} [arg.fromDate] - Start Date in DD-MM-YYYY format
     * @param {string} [arg.toDate] - End Date in DD-MM-YYYY format
     * @param {string} [arg.dpIds] - Comma separated values of delivery partner ids
     * @param {string} [arg.stores] - Comma separated values of store ids
     * @param {string} [arg.salesChannels] -
     * @param {string} [arg.paymentMode] - Comma separated values of payment modes
     * @param {string} [arg.bagStatus] - Comma separated values of bag statuses
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchValue] -
     * @param {string} [arg.tags] -
     * @param {string} [arg.timeToDispatch] -
     * @param {string} [arg.paymentMethods] -
     * @returns {Promise<LaneConfigResponse>} - Success response
     * @summary:
     * @description:
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, dpIds, stores, salesChannels, paymentMode, bagStatus, searchType, searchValue, tags, timeToDispatch, paymentMethods, }?: {
        superLane?: string;
        groupEntity?: string;
        fromDate?: string;
        toDate?: string;
        dpIds?: string;
        stores?: string;
        salesChannels?: string;
        paymentMode?: string;
        bagStatus?: string;
        searchType?: string;
        searchValue?: string;
        tags?: string;
        timeToDispatch?: string;
        paymentMethods?: string;
    }): Promise<LaneConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.manifestId -
     * @param {string} [arg.status] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchValue] -
     * @param {string} [arg.dpIds] - DP Ids separated by ',' (comma)
     * @param {string} [arg.pageNo] -
     * @param {string} [arg.pageSize] -
     * @returns {Promise<ManifestDetails>} - Success response
     * @summary:
     * @description:
     */
    getManifestDetails({ manifestId, status, toDate, fromDate, searchType, searchValue, dpIds, pageNo, pageSize, }?: {
        manifestId: string;
        status?: string;
        toDate?: string;
        fromDate?: string;
        searchType?: string;
        searchValue?: string;
        dpIds?: string;
        pageNo?: string;
        pageSize?: string;
    }): Promise<ManifestDetails>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.dpIds -
     * @param {string} arg.stores -
     * @param {string} arg.toDate -
     * @param {string} arg.fromDate -
     * @param {string} [arg.dpName] -
     * @param {string} [arg.salesChannels] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchValue] -
     * @param {string} [arg.pageNo] -
     * @param {string} [arg.pageSize] -
     * @returns {Promise<ManifestShipmentListing>} - Success response
     * @summary:
     * @description:
     */
    getManifestShipments({ dpIds, stores, toDate, fromDate, dpName, salesChannels, searchType, searchValue, pageNo, pageSize, }?: {
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
    }): Promise<ManifestShipmentListing>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.view - Name of View
     * @returns {Promise<ManifestFiltersResponse>} - Success response
     * @summary:
     * @description:
     */
    getManifestfilters({ view }?: {
        view: string;
    }): Promise<ManifestFiltersResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.status] - Possible Status [ active, closed ]
     * @param {string} [arg.toDate] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.searchValue] - Search values options [
     *   fynd_order_id, shipment_id, manifest_id, dp_name, awb_no ]
     * @param {string} [arg.dpIds] - DP Ids separated by ',' (comma)
     * @param {string} [arg.pageNo] -
     * @param {string} [arg.pageSize] -
     * @returns {Promise<ManifestList>} - Success response
     * @summary:
     * @description:
     */
    getManifests({ status, toDate, fromDate, searchValue, dpIds, pageNo, pageSize, }?: {
        status?: string;
        toDate?: string;
        fromDate?: string;
        searchValue?: string;
        dpIds?: string;
        pageNo?: string;
        pageSize?: string;
    }): Promise<ManifestList>;
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
     * @returns {Promise<OrderDetailsResponse>} - Success response
     * @summary:
     * @description:
     */
    getOrderById({ orderId }?: {
        orderId: string;
    }): Promise<OrderDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] - Lane refers to a section where orders are
     *   assigned, indicating its grouping
     * @param {string} [arg.searchType] - Search_type refers to the field that
     *   will be used as the target for the search operation
     * @param {string} [arg.bagStatus] - Bag_status refers to status of the
     *   entity. Filters orders based on the status.
     * @param {string} [arg.timeToDispatch] - Time_to_dispatch refers to
     *   estimated SLA time.
     * @param {string} [arg.paymentMethods] -
     * @param {string} [arg.tags] - Tags refers to additional descriptive labels
     *   associated with the order
     * @param {string} [arg.searchValue] - Search_value is matched against the
     *   field specified by the search_type
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.dpIds] - Delivery Partner IDs to which shipments are assigned.
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannels] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isPrioritySort] -
     * @param {string} [arg.customMeta] -
     * @param {string} [arg.platformUserId] -
     * @returns {Promise<OrderListingResponse>} - Success response
     * @summary:
     * @description:
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, platformUserId, }?: {
        lane?: string;
        searchType?: string;
        bagStatus?: string;
        timeToDispatch?: string;
        paymentMethods?: string;
        tags?: string;
        searchValue?: string;
        fromDate?: string;
        toDate?: string;
        dpIds?: string;
        stores?: string;
        salesChannels?: string;
        pageNo?: number;
        pageSize?: number;
        isPrioritySort?: boolean;
        customMeta?: string;
        platformUserId?: string;
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
     * @returns {Promise<GetActionsResponse>} - Success response
     * @summary:
     * @description:
     */
    getRoleBasedActions({}?: any): Promise<GetActionsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.channelShipmentId] - App Shipment Id
     * @param {string} [arg.shipmentId] - Shipment Id
     * @returns {Promise<ShipmentInfoResponse>} - Success response
     * @summary:
     * @description:
     */
    getShipmentById({ channelShipmentId, shipmentId }?: {
        channelShipmentId?: string;
        shipmentId?: string;
    }): Promise<ShipmentInfoResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.shipmentId] - Shipment Id
     * @param {number} [arg.bagId] - Bag/Product Id
     * @returns {Promise<ShipmentHistoryResponse>} - Success response
     * @summary:
     * @description:
     */
    getShipmentHistory({ shipmentId, bagId }?: {
        shipmentId?: string;
        bagId?: number;
    }): Promise<ShipmentHistoryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {string} arg.bagId - ID of the bag. An order may contain multiple
     *   items and may get divided into one or more shipment, each having its own ID.
     * @param {string} arg.state - State for which reasons are required.
     * @returns {Promise<PlatformShipmentReasonsResponse>} - Success response
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     */
    getShipmentReasons({ shipmentId, bagId, state }?: {
        shipmentId: string;
        bagId: string;
        state: string;
    }): Promise<PlatformShipmentReasonsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] - Name of lane for which data is to be fetched
     * @param {string} [arg.bagStatus] - Comma separated values of bag statuses
     * @param {boolean} [arg.statusOverrideLane] - Use this flag to fetch by
     *   bag_status and override lane
     * @param {string} [arg.timeToDispatch] -
     * @param {string} [arg.searchType] - Search type key
     * @param {string} [arg.searchValue] - Search type value
     * @param {string} [arg.fromDate] - Start Date in DD-MM-YYYY format
     * @param {string} [arg.toDate] - End Date in DD-MM-YYYY format
     * @param {string} [arg.dpIds] - Comma separated values of delivery partner ids
     * @param {string} [arg.stores] - Comma separated values of store ids
     * @param {string} [arg.salesChannels] - Comma separated values of sales channel ids
     * @param {number} [arg.pageNo] - Page number for paginated data
     * @param {number} [arg.pageSize] - Page size of data received per page
     * @param {boolean} [arg.fetchActiveShipment] - Flag to fetch active shipments
     * @param {boolean} [arg.excludeLockedShipments] - Flag to fetch locked shipments
     * @param {string} [arg.paymentMethods] - Comma separated values of payment methods
     * @param {string} [arg.channelShipmentId] - App Shipment Id
     * @param {string} [arg.channelOrderId] - App Order Id
     * @param {string} [arg.customMeta] -
     * @param {string} [arg.orderingChannel] -
     * @param {string} [arg.companyAffiliateTag] -
     * @param {string} [arg.platformUserId] -
     * @returns {Promise<ShipmentInternalPlatformViewResponse>} - Success response
     * @summary:
     * @description:
     */
    getShipments({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, dpIds, stores, salesChannels, pageNo, pageSize, fetchActiveShipment, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, platformUserId, }?: {
        lane?: string;
        bagStatus?: string;
        statusOverrideLane?: boolean;
        timeToDispatch?: string;
        searchType?: string;
        searchValue?: string;
        fromDate?: string;
        toDate?: string;
        dpIds?: string;
        stores?: string;
        salesChannels?: string;
        pageNo?: number;
        pageSize?: number;
        fetchActiveShipment?: boolean;
        excludeLockedShipments?: boolean;
        paymentMethods?: string;
        channelShipmentId?: string;
        channelOrderId?: string;
        customMeta?: string;
        orderingChannel?: string;
        companyAffiliateTag?: string;
        platformUserId?: string;
    }): Promise<ShipmentInternalPlatformViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<BagStateTransitionMap>} - Success response
     * @summary:
     * @description:
     */
    getStateTransitionMap({}?: any): Promise<BagStateTransitionMap>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.view - Name of view
     * @param {string} [arg.groupEntity] - Name of group entity
     * @returns {Promise<FiltersResponse>} - Success response
     * @summary:
     * @description:
     */
    getfilters({ view, groupEntity }?: {
        view: string;
        groupEntity?: string;
    }): Promise<FiltersResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InvalidateShipmentCachePayload} arg.body
     * @returns {Promise<InvalidateShipmentCacheResponse>} - Success response
     * @summary:
     * @description: Invalidate shipment Cache
     */
    invalidateShipmentCache({ body }?: {
        body: InvalidateShipmentCachePayload;
    }): Promise<InvalidateShipmentCacheResponse>;
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
     * @param {PostShipmentHistory} arg.body
     * @returns {Promise<ShipmentHistoryResponse>} - Success response
     * @summary:
     * @description:
     */
    postShipmentHistory({ body }?: {
        body: PostShipmentHistory;
    }): Promise<ShipmentHistoryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ProcessManifest} arg.body
     * @returns {Promise<ProcessManifestItemResponse>} - Success response
     * @summary:
     * @description:
     */
    processManifest({ body }?: {
        body: ProcessManifest;
    }): Promise<ProcessManifestItemResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {StoreReassign} arg.body
     * @returns {Promise<StoreReassignResponse>} - Success response
     * @summary:
     * @description: Reassign Location
     */
    reassignLocation({ body }?: {
        body: StoreReassign;
    }): Promise<StoreReassignResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendSmsPayload} arg.body
     * @returns {Promise<OrderStatusResult>} - Success response
     * @summary:
     * @description:
     */
    sendSmsNinja({ body }?: {
        body: SendSmsPayload;
    }): Promise<OrderStatusResult>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendUserMobileOTP} arg.body
     * @returns {Promise<SendUserMobileOtpResponse>} - Success response
     * @summary:
     * @description:
     */
    sendUserMobileOTP({ body }?: {
        body: SendUserMobileOTP;
    }): Promise<SendUserMobileOtpResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @param {string} [arg.name] -
     * @param {string} [arg.address] -
     * @param {string} [arg.addressType] -
     * @param {string} [arg.pincode] -
     * @param {string} [arg.phone] -
     * @param {string} [arg.email] -
     * @param {string} [arg.landmark] -
     * @param {string} arg.addressCategory -
     * @param {string} [arg.city] -
     * @param {string} [arg.state] -
     * @param {string} [arg.country] -
     * @returns {Promise<BaseResponse>} - Success response
     * @summary:
     * @description:
     */
    updateAddress({ shipmentId, addressCategory, name, address, addressType, pincode, phone, email, landmark, city, state, country, }?: {
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
    }): Promise<BaseResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdatePackagingDimensionsPayload} arg.body
     * @returns {Promise<UpdatePackagingDimensionsResponse>} - Success response
     * @summary:
     * @description:
     */
    updatePackagingDimensions({ body }?: {
        body: UpdatePackagingDimensionsPayload;
    }): Promise<UpdatePackagingDimensionsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateShipmentLockPayload} arg.body
     * @returns {Promise<UpdateShipmentLockResponse>} - Success response
     * @summary:
     * @description: update shipment/bag lock and check status
     */
    updateShipmentLock({ body }?: {
        body: UpdateShipmentLockPayload;
    }): Promise<UpdateShipmentLockResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateShipmentStatusRequest} arg.body
     * @returns {Promise<UpdateShipmentStatusResponseBody>} - Success response
     * @summary:
     * @description: This API is for Shipment State transition or Shipment data update or both below example is for partial state transition with data update
     */
    updateShipmentStatus({ body }?: {
        body: UpdateShipmentStatusRequest;
    }): Promise<UpdateShipmentStatusResponseBody>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UploadConsent} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary:
     * @description:
     */
    uploadConsent({ body }?: {
        body: UploadConsent;
    }): Promise<SuccessResponse>;
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
    /**
     * @param {Object} arg - Arg object.
     * @param {VerifyMobileOTP} arg.body
     * @returns {Promise<VerifyOtpResponse>} - Success response
     * @summary:
     * @description:
     */
    verifyMobileOTP({ body }?: {
        body: VerifyMobileOTP;
    }): Promise<VerifyOtpResponse>;
}
