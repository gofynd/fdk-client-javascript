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
     * @param {string} arg.batchId -
     * @returns {Promise<BulkActionDetailsResponse>} - Success response
     * @summary: Returns failed, processing and successfully processed shipments.
     * @description: Returns failed, processing and successfully processed shipments along with their counts and failed reasons.
     */
    bulkActionDetails({ batchId }?: {
        batchId: string;
    }): Promise<BulkActionDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkActionPayload} arg.body
     * @returns {Promise<BulkActionResponse>} - Success response
     * @summary: emits uuid to kafka topic.
     * @description: Use this API to start processing Xlsx file.
     */
    bulkActionProcessXlsxFile({ body }?: {
        body: BulkActionPayload;
    }): Promise<BulkActionResponse>;
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
     * @param {string} arg.caller -
     * @param {string} arg.receiver -
     * @param {string} arg.bagId -
     * @param {string} [arg.callingTo] -
     * @param {string} [arg.callerId] -
     * @returns {Promise<Click2CallResponse>} - Success response
     * @summary:
     * @description:
     */
    click2Call({ caller, receiver, bagId, callingTo, callerId, }?: {
        caller: string;
        receiver: string;
        bagId: string;
        callingTo?: string;
        callerId?: string;
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
     * @param {EInvoiceRetry} arg.body
     * @returns {Promise<EInvoiceRetryResponse>} - Success response
     * @summary:
     * @description:
     */
    eInvoiceRetry({ body }?: {
        body: EInvoiceRetry;
    }): Promise<EInvoiceRetryResponse>;
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
     * @param {string} [arg.documentType] -
     * @returns {Promise<GeneratePosOrderReceiptResponse>} - Success response
     * @summary:
     * @description:
     */
    generatePOSReceiptByOrderId({ orderId, documentType }?: {
        orderId: string;
        documentType?: string;
    }): Promise<GeneratePosOrderReceiptResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.date] -
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
     * @param {string} [arg.bagId] -
     * @param {string} [arg.channelBagId] -
     * @param {string} [arg.channelId] -
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
     * @param {string} [arg.bagIds] -
     * @param {string} [arg.shipmentIds] -
     * @param {string} [arg.orderIds] -
     * @param {string} [arg.channelBagIds] -
     * @param {string} [arg.channelShipmentIds] -
     * @param {string} [arg.channelOrderIds] -
     * @param {string} [arg.channelId] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
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
     * @param {string} arg.batchId -
     * @param {string} [arg.reportType] -
     * @returns {Promise<FileResponse>} - Success response
     * @summary:
     * @description:
     */
    getBulkActionFailedReport({ batchId, reportType }?: {
        batchId: string;
        reportType?: string;
    }): Promise<FileResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId -
     * @param {string} arg.docType -
     * @returns {Promise<BulkInvoicingResponse>} - Success response
     * @summary:
     * @description:
     */
    getBulkInvoice({ batchId, docType }?: {
        batchId: string;
        docType: string;
    }): Promise<BulkInvoicingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId -
     * @returns {Promise<BulkInvoiceLabelResponse>} - Success response
     * @summary:
     * @description:
     */
    getBulkInvoiceLabel({ batchId }?: {
        batchId: string;
    }): Promise<BulkInvoiceLabelResponse>;
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
     * @returns {Promise<BulkListingResponse>} - Success response
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
    }): Promise<BulkListingResponse>;
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
     * @returns {Promise<FileResponse>} - Success response
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
    getOrderById({ orderId }?: {
        orderId: string;
    }): Promise<ShipmentDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.bagStatus] -
     * @param {string} [arg.timeToDispatch] -
     * @param {string} [arg.paymentMethods] -
     * @param {string} [arg.tags] -
     * @param {string} [arg.searchValue] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.dpIds] -
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannels] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isPrioritySort] -
     * @param {string} [arg.customMeta] -
     * @returns {Promise<OrderListingResponse>} - Success response
     * @summary:
     * @description:
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, }?: {
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
     * @param {string} [arg.channelShipmentId] -
     * @param {string} [arg.shipmentId] -
     * @param {string} [arg.orderingCompanyId] -
     * @param {string} [arg.requestByExt] -
     * @returns {Promise<ShipmentInfoResponse>} - Success response
     * @summary:
     * @description:
     */
    getShipmentById({ channelShipmentId, shipmentId, orderingCompanyId, requestByExt, }?: {
        channelShipmentId?: string;
        shipmentId?: string;
        orderingCompanyId?: string;
        requestByExt?: string;
    }): Promise<ShipmentInfoResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.shipmentId] -
     * @param {number} [arg.bagId] -
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
     * @param {string} [arg.lane] -
     * @param {string} [arg.bagStatus] -
     * @param {boolean} [arg.statusOverrideLane] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchValue] -
     * @param {string} [arg.searchId] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.dpIds] -
     * @param {string} [arg.orderingCompanyId] -
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannels] -
     * @param {string} [arg.requestByExt] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isPrioritySort] -
     * @param {boolean} [arg.fetchActiveShipment] -
     * @param {boolean} [arg.excludeLockedShipments] -
     * @param {string} [arg.paymentMethods] -
     * @param {string} [arg.channelShipmentId] -
     * @param {string} [arg.channelOrderId] -
     * @param {string} [arg.customMeta] -
     * @param {string} [arg.orderingChannel] -
     * @param {string} [arg.companyAffiliateTag] -
     * @returns {Promise<ShipmentInternalPlatformViewResponse>} - Success response
     * @summary:
     * @description:
     */
    getShipments({ lane, bagStatus, statusOverrideLane, searchType, searchValue, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannels, requestByExt, pageNo, pageSize, isPrioritySort, fetchActiveShipment, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, }?: {
        lane?: string;
        bagStatus?: string;
        statusOverrideLane?: boolean;
        searchType?: string;
        searchValue?: string;
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
        isPrioritySort?: boolean;
        fetchActiveShipment?: boolean;
        excludeLockedShipments?: boolean;
        paymentMethods?: string;
        channelShipmentId?: string;
        channelOrderId?: string;
        customMeta?: string;
        orderingChannel?: string;
        companyAffiliateTag?: string;
    }): Promise<ShipmentInternalPlatformViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.view -
     * @param {string} [arg.groupEntity] -
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
     * @param {ManualAssignDPToShipment} arg.body
     * @returns {Promise<ManualAssignDPToShipmentResponse>} - Success response
     * @summary:
     * @description:
     */
    platformManualAssignDPToShipment({ body }?: {
        body: ManualAssignDPToShipment;
    }): Promise<ManualAssignDPToShipmentResponse>;
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
     * @param {CreateOrderPayload} arg.body
     * @returns {Promise<CreateOrderResponse>} - Success response
     * @summary:
     * @description:
     */
    processManifest({ body }?: {
        body: CreateOrderPayload;
    }): Promise<CreateOrderResponse>;
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
     * @returns {Promise<OrderStatusResult>} - Success response
     * @summary:
     * @description:
     */
    sendSmsNinjaPlatform({}?: any): Promise<OrderStatusResult>;
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
     * @param {CreateOrderPayload} arg.body
     * @returns {Promise<CreateOrderResponse>} - Success response
     * @summary:
     * @description:
     */
    updatePackagingDimensions({ body }?: {
        body: CreateOrderPayload;
    }): Promise<CreateOrderResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateShipmentLockPayload} arg.body
     * @returns {Promise<UpdateShipmentLockResponse>} - Success response
     * @summary:
     * @description: update shipment lock
     */
    updateShipmentLock({ body }?: {
        body: UpdateShipmentLockPayload;
    }): Promise<UpdateShipmentLockResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateShipmentStatusRequest} arg.body
     * @returns {Promise<UpdateShipmentStatusResponseBody>} - Success response
     * @summary:
     * @description: Update shipment status
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
     * @returns {Promise<PointBlankOtpData>} - Success response
     * @summary:
     * @description:
     */
    verifyMobileOTP({ body }?: {
        body: VerifyMobileOTP;
    }): Promise<PointBlankOtpData>;
}
