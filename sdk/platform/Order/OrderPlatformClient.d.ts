export = Order;
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {OrderPlatformValidator.AttachOrderUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AttachOrderUserResponse>} - Success response
     * @name attachOrderUser
     * @summary: Attach order user.
     * @description: Attach order User - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/attachOrderUser/).
     */
    attachOrderUser({ body, requestHeaders }?: OrderPlatformValidator.AttachOrderUserParam, { responseHeaders }?: object): Promise<OrderPlatformModel.AttachOrderUserResponse>;
    /**
     * @param {OrderPlatformValidator.BulkListingParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkListingResponse>} - Success response
     * @name bulkListing
     * @summary:
     * @description: Fetches of previous or running  bulk jobs.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkListing/).
     */
    bulkListing({ pageSize, pageNo, startDate, endDate, status, bulkActionType, searchKey, requestHeaders, }?: OrderPlatformValidator.BulkListingParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkListingResponse>;
    /**
     * @param {OrderPlatformValidator.BulkStateTransistionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkStateTransistionResponse>} -
     *   Success response
     * @name bulkStateTransistion
     * @summary:
     * @description: Performs State Transisiton in Bulk for the given shipments in the excel/csv file url. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkStateTransistion/).
     */
    bulkStateTransistion({ body, requestHeaders }?: OrderPlatformValidator.BulkStateTransistionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkStateTransistionResponse>;
    /**
     * @param {OrderPlatformValidator.CheckOrderStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name checkOrderStatus
     * @summary: Check order status.
     * @description: Verify the current status of an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/checkOrderStatus/).
     */
    checkOrderStatus({ body, requestHeaders }?: OrderPlatformValidator.CheckOrderStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.Click2CallParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.Click2CallResponse>} - Success response
     * @name click2Call
     * @summary: Click to call.
     * @description: Click to call.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/click2Call/).
     */
    click2Call({ caller, receiver, bagId, callerId, method, requestHeaders }?: OrderPlatformValidator.Click2CallParam, { responseHeaders }?: object): Promise<OrderPlatformModel.Click2CallResponse>;
    /**
     * @param {OrderPlatformValidator.CreateChannelConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateChannelConfigResponse>} -
     *   Success response
     * @name createChannelConfig
     * @summary: Create channel configuration.
     * @description: Set up configuration for a channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createChannelConfig/).
     */
    createChannelConfig({ body, requestHeaders }?: OrderPlatformValidator.CreateChannelConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateChannelConfigResponse>;
    /**
     * @param {OrderPlatformValidator.CreateOrderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateOrderResponse>} - Success response
     * @name createOrder
     * @summary: Create order.
     * @description: Create order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createOrder/).
     */
    createOrder({ body, requestHeaders }?: OrderPlatformValidator.CreateOrderParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateOrderResponse>;
    /**
     * @param {OrderPlatformValidator.DeleteuserviewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
     *   Success response
     * @name deleteuserviews
     * @summary:
     * @description: Delete User views(User cross company views) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/deleteuserviews/).
     */
    deleteuserviews({ id, requestHeaders }?: OrderPlatformValidator.DeleteuserviewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponse>;
    /**
     * @param {OrderPlatformValidator.DispatchManifestsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name dispatchManifests
     * @summary:
     * @description: Dispatch Manifest - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/dispatchManifests/).
     */
    dispatchManifests({ manifestId, body, requestHeaders }?: OrderPlatformValidator.DispatchManifestsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.DownloadBulkActionTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name downloadBulkActionTemplate
     * @summary: Download bulk action template.
     * @description: Download bulk actions seller templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadBulkActionTemplate/).
     */
    downloadBulkActionTemplate({ templateSlug, requestHeaders }?: OrderPlatformValidator.DownloadBulkActionTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.DownloadLanesReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkReportsDownloadResponse>} -
     *   Success response
     * @name downloadLanesReport
     * @summary: Download lanes report.
     * @description: Downloads lanes shipment/orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadLanesReport/).
     */
    downloadLanesReport({ body, requestHeaders }?: OrderPlatformValidator.DownloadLanesReportParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkReportsDownloadResponse>;
    /**
     * @param {OrderPlatformValidator.EInvoiceRetryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.EInvoiceRetryResponse>} - Success response
     * @name eInvoiceRetry
     * @summary: E-invoice retry.
     * @description: Retry e-invoice after failure - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/eInvoiceRetry/).
     */
    eInvoiceRetry({ body, requestHeaders }?: OrderPlatformValidator.EInvoiceRetryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.EInvoiceRetryResponse>;
    /**
     * @param {OrderPlatformValidator.FailedOrderLogDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FailedOrderLogDetails>} - Success response
     * @name failedOrderLogDetails
     * @summary: Get failed order logs according to the filter provided
     * @description: This endpoint allows users to get the exact error trace from the log id provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/failedOrderLogDetails/).
     */
    failedOrderLogDetails({ logId, requestHeaders }?: OrderPlatformValidator.FailedOrderLogDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FailedOrderLogDetails>;
    /**
     * @param {OrderPlatformValidator.FetchCreditBalanceDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>}
     *   - Success response
     *
     * @name fetchCreditBalanceDetail
     * @summary: Fetch credit balance detail.
     * @description: Retrieve details about credit balance. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchCreditBalanceDetail/).
     */
    fetchCreditBalanceDetail({ body, requestHeaders }?: OrderPlatformValidator.FetchCreditBalanceDetailParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>;
    /**
     * @param {OrderPlatformValidator.FetchRefundModeConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RefundModeConfigResponsePayload>} -
     *   Success response
     * @name fetchRefundModeConfig
     * @summary: Fetch refund mode config.
     * @description: Retrieve configuration for refund modes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchRefundModeConfig/).
     */
    fetchRefundModeConfig({ body, requestHeaders }?: OrderPlatformValidator.FetchRefundModeConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundModeConfigResponsePayload>;
    /**
     * @param {OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>} -
     *   Success response
     * @name generatePOSReceiptByOrderId
     * @summary: Generate POS receipt by order ID.
     * @description: Create a point-of-sale (POS) receipt for a specific order by order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generatePOSReceiptByOrderId/).
     */
    generatePOSReceiptByOrderId({ orderId, shipmentId, documentType, requestHeaders }?: OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>;
    /**
     * @param {OrderPlatformValidator.GetAllowedStateTransitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RoleBaseStateTransitionMapping>} -
     *   Success response
     * @name getAllowedStateTransition
     * @summary: Get allowed state transition.
     * @description: Retrieve next possible states based on logged in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedStateTransition/).
     */
    getAllowedStateTransition({ orderingChannel, status, requestHeaders }?: OrderPlatformValidator.GetAllowedStateTransitionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RoleBaseStateTransitionMapping>;
    /**
     * @param {OrderPlatformValidator.GetAllowedTemplatesForBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AllowedTemplatesResponse>} - Success response
     * @name getAllowedTemplatesForBulk
     * @summary:
     * @description: Gets All the allowed Templates to perform Bulk Operations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedTemplatesForBulk/).
     */
    getAllowedTemplatesForBulk({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.AllowedTemplatesResponse>;
    /**
     * @param {OrderPlatformValidator.GetAnnouncementsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AnnouncementsResponse>} - Success response
     * @name getAnnouncements
     * @summary: Get announcements.
     * @description: Retrieve announcements related to orders or shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAnnouncements/).
     */
    getAnnouncements({ date, requestHeaders }?: OrderPlatformValidator.GetAnnouncementsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.AnnouncementsResponse>;
    /**
     * @param {OrderPlatformValidator.GetBagByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BagDetailsPlatformResponse>} -
     *   Success response
     * @name getBagById
     * @summary: Get bag by ID.
     * @description: Retrieve detailed information about a specific bag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBagById/).
     */
    getBagById({ bagId, channelBagId, channelId, requestHeaders }?: OrderPlatformValidator.GetBagByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BagDetailsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.GetBagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponse>} - Success response
     * @name getBags
     * @summary: Get bags.
     * @description: Retrieve Bags for the order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBags/).
     */
    getBags({ bagIds, shipmentIds, orderIds, channelBagIds, channelShipmentIds, channelOrderIds, channelId, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetBagsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GetBagsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.GetBulkActionTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkActionTemplateResponse>} -
     *   Success response
     * @name getBulkActionTemplate
     * @summary: Get bulk action template.
     * @description: Retrieve bulk action seller templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkActionTemplate/).
     */
    getBulkActionTemplate({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkActionTemplateResponse>;
    /**
     * @param {OrderPlatformValidator.GetBulkShipmentExcelFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name getBulkShipmentExcelFile
     * @summary: Get bulk shipment Excel file.
     * @description: Retrieve a bulk shipment Excel report. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkShipmentExcelFile/).
     */
    getBulkShipmentExcelFile({ salesChannels, dpIds, startDate, endDate, stores, tags, bagStatus, paymentMethods, fileType, timeToDispatch, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetBulkShipmentExcelFileParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.GetChannelConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateChannelConfigData>} - Success response
     * @name getChannelConfig
     * @summary: Get channel configuration.
     * @description: Retrieve configuration settings for a channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getChannelConfig/).
     */
    getChannelConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateChannelConfigData>;
    /**
     * @param {OrderPlatformValidator.GetFileByStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.JobFailedResponse>} - Success response
     * @name getFileByStatus
     * @summary:
     * @description: Get the file URL consisting Records of the provided status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getFileByStatus/).
     */
    getFileByStatus({ batchId, status, fileType, reportType, requestHeaders }?: OrderPlatformValidator.GetFileByStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.JobFailedResponse>;
    /**
     * @param {OrderPlatformValidator.GetLaneConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.LaneConfigResponse>} - Success response
     * @name getLaneConfig
     * @summary: Get lane configuration.
     * @description: Retrieve configuration settings for lanes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getLaneConfig/).
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, paymentMode, bagStatus, searchType, searchValue, tags, timeToDispatch, paymentMethods, myOrders, showCrossCompanyData, orderType, requestHeaders, }?: OrderPlatformValidator.GetLaneConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.LaneConfigResponse>;
    /**
     * @param {OrderPlatformValidator.GetManifestDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestDetails>} - Success response
     * @name getManifestDetails
     * @summary:
     * @description: get Manifest Details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestDetails/).
     */
    getManifestDetails({ manifestId, requestHeaders }?: OrderPlatformValidator.GetManifestDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestDetails>;
    /**
     * @param {OrderPlatformValidator.GetManifestShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestShipmentListing>} - Success response
     * @name getManifestShipments
     * @summary:
     * @description: get Manifest Shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestShipments/).
     */
    getManifestShipments({ dpIds, stores, toDate, fromDate, dpName, salesChannels, searchType, searchValue, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetManifestShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestShipmentListing>;
    /**
     * @param {OrderPlatformValidator.GetManifestfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestFiltersResponse>} - Success response
     * @name getManifestfilters
     * @summary:
     * @description: get Manifest Filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestfilters/).
     */
    getManifestfilters({ view, requestHeaders }?: OrderPlatformValidator.GetManifestfiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestFiltersResponse>;
    /**
     * @param {OrderPlatformValidator.GetManifestsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestList>} - Success response
     * @name getManifests
     * @summary:
     * @description: Fetch Manifests - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifests/).
     */
    getManifests({ status, startDate, endDate, searchType, storeId, searchValue, dpIds, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetManifestsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestList>;
    /**
     * @param {OrderPlatformValidator.GetOrderByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderDetailsResponse>} - Success response
     * @name getOrderById
     * @summary: Get order by ID.
     * @description: Retrieve detailed information about a specific order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrderById/).
     */
    getOrderById({ orderId, myOrders, allowInactive, requestHeaders }?: OrderPlatformValidator.GetOrderByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderDetailsResponse>;
    /**
     * @param {OrderPlatformValidator.GetOrdersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderListingResponse>} - Success response
     * @name getOrders
     * @summary: Get orders.
     * @description: Retrieve a list of available orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrders/).
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, myOrders, showCrossCompanyData, customerId, orderType, requestHeaders, }?: OrderPlatformValidator.GetOrdersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] - Lane refers to a section where orders are
     *   assigned, indicating its grouping
     * @param {string} [arg.searchType] - Search_type refers to the field that
     *   will be used as the target for the search operation
     * @param {string} [arg.bagStatus] - Bag_status refers to status of the
     *   entity. Filters orders based on the status.
     * @param {number} [arg.timeToDispatch] - Time_to_dispatch refers to
     *   estimated SLA time.
     * @param {string} [arg.paymentMethods] -
     * @param {string} [arg.tags] - Tags refers to additional descriptive labels
     *   associated with the order
     * @param {string} [arg.searchValue] - Search_value is matched against the
     *   field specified by the search_type
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.startDate] -
     * @param {string} [arg.endDate] -
     * @param {string} [arg.dpIds] - Delivery Partner IDs to which shipments are assigned.
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannels] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isPrioritySort] -
     * @param {string} [arg.customMeta] -
     * @param {boolean} [arg.myOrders] -
     * @param {boolean} [arg.showCrossCompanyData] - Flag to view cross &
     *   non-cross company order
     * @param {string} [arg.customerId] -
     * @param {string} [arg.orderType] -
     * @returns {Paginator<OrderPlatformModel.OrderListingResponse>}
     * @summary: Get orders.
     * @description: Retrieve a list of available orders.
     */
    getOrdersPaginator({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageSize, isPrioritySort, customMeta, myOrders, showCrossCompanyData, customerId, orderType, }?: {
        lane?: string;
        searchType?: string;
        bagStatus?: string;
        timeToDispatch?: number;
        paymentMethods?: string;
        tags?: string;
        searchValue?: string;
        fromDate?: string;
        toDate?: string;
        startDate?: string;
        endDate?: string;
        dpIds?: string;
        stores?: string;
        salesChannels?: string;
        pageSize?: number;
        isPrioritySort?: boolean;
        customMeta?: string;
        myOrders?: boolean;
        showCrossCompanyData?: boolean;
        customerId?: string;
        orderType?: string;
    }): Paginator<OrderPlatformModel.OrderListingResponse>;
    /**
     * @param {OrderPlatformValidator.GetRefundConfigurationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponse>}
     *   - Success response
     *
     * @name getRefundConfiguration
     * @summary:
     * @description: refund configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundConfiguration/).
     */
    getRefundConfiguration({ appId, requestHeaders }?: OrderPlatformValidator.GetRefundConfigurationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponse>;
    /**
     * @param {OrderPlatformValidator.GetRefundEnableStateListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetRefundStates>} - Success response
     * @name getRefundEnableStateList
     * @summary:
     * @description: Refund State Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundEnableStateList/).
     */
    getRefundEnableStateList({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.GetRefundStates>;
    /**
     * @param {OrderPlatformValidator.GetRefundStateConfigurationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetRefundStateConfigurationResponse>}
     *   - Success response
     *
     * @name getRefundStateConfiguration
     * @summary:
     * @description: Refund State Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundStateConfiguration/).
     */
    getRefundStateConfiguration({ appId, requestHeaders }?: OrderPlatformValidator.GetRefundStateConfigurationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GetRefundStateConfigurationResponse>;
    /**
     * @param {OrderPlatformValidator.GetRoleBasedActionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetActionsResponse>} - Success response
     * @name getRoleBasedActions
     * @summary: Get role-based actions.
     * @description: Retrieve role based actions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRoleBasedActions/).
     */
    getRoleBasedActions({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.GetActionsResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentInfoResponse>} - Success response
     * @name getShipmentById
     * @summary: Get shipment by ID.
     * @description: Retrieve detailed information about a specific shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentById/).
     */
    getShipmentById({ channelShipmentId, shipmentId, fetchActiveShipment, requestHeaders }?: OrderPlatformValidator.GetShipmentByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInfoResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name getShipmentHistory
     * @summary: Get shipment history.
     * @description: Retrieve the shipment history. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentHistory/).
     */
    getShipmentHistory({ shipmentId, bagId, requestHeaders }?: OrderPlatformValidator.GetShipmentHistoryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentReasonsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>} -
     *   Success response
     * @name getShipmentReasons
     * @summary: Get shipment reasons.
     * @description: Retrieve the issues that led to the cancellation of bags within a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentReasons/).
     */
    getShipmentReasons({ shipmentId, bagId, state, requestHeaders }?: OrderPlatformValidator.GetShipmentReasonsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
     *   - Success response
     *
     * @name getShipments
     * @summary: Get shipments.
     * @description: Retrieve a list of available shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipments/).
     */
    getShipments({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageNo, pageSize, fetchActiveShipment, allowInactive, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, sortType, showCrossCompanyData, tags, customerId, orderType, requestHeaders, }?: OrderPlatformValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] - Name of lane for which data is to be fetched
     * @param {string} [arg.bagStatus] - Comma separated values of bag statuses
     * @param {boolean} [arg.statusOverrideLane] - Use this flag to fetch by
     *   bag_status and override lane
     * @param {number} [arg.timeToDispatch] -
     * @param {string} [arg.searchType] - Search type key
     * @param {string} [arg.searchValue] - Search type value
     * @param {string} [arg.fromDate] - Start Date in DD-MM-YYYY format
     * @param {string} [arg.toDate] - End Date in DD-MM-YYYY format
     * @param {string} [arg.startDate] - UTC Start Date in ISO format
     * @param {string} [arg.endDate] - UTC End Date in ISO format
     * @param {string} [arg.dpIds] - Comma separated values of delivery partner ids
     * @param {string} [arg.stores] - Comma separated values of store ids
     * @param {string} [arg.salesChannels] - Comma separated values of sales channel ids
     * @param {number} [arg.pageSize] - Page size of data received per page
     * @param {boolean} [arg.fetchActiveShipment] - Flag to fetch active shipments
     * @param {boolean} [arg.allowInactive] - Flag to allow inactive shipments
     * @param {boolean} [arg.excludeLockedShipments] - Flag to fetch locked shipments
     * @param {string} [arg.paymentMethods] - Comma separated values of payment methods
     * @param {string} [arg.channelShipmentId] - App Shipment Id
     * @param {string} [arg.channelOrderId] - App Order Id
     * @param {string} [arg.customMeta] -
     * @param {string} [arg.orderingChannel] -
     * @param {string} [arg.companyAffiliateTag] -
     * @param {boolean} [arg.myOrders] -
     * @param {string} [arg.platformUserId] -
     * @param {string} [arg.sortType] - Sort the result data on basis of input
     * @param {boolean} [arg.showCrossCompanyData] - Flag to view cross &
     *   non-cross company order
     * @param {string} [arg.tags] - Comma separated values of tags
     * @param {string} [arg.customerId] -
     * @param {string} [arg.orderType] -
     * @returns {Paginator<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
     * @summary: Get shipments.
     * @description: Retrieve a list of available shipments.
     */
    getShipmentsPaginator({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageSize, fetchActiveShipment, allowInactive, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, sortType, showCrossCompanyData, tags, customerId, orderType, }?: {
        lane?: string;
        bagStatus?: string;
        statusOverrideLane?: boolean;
        timeToDispatch?: number;
        searchType?: string;
        searchValue?: string;
        fromDate?: string;
        toDate?: string;
        startDate?: string;
        endDate?: string;
        dpIds?: string;
        stores?: string;
        salesChannels?: string;
        pageSize?: number;
        fetchActiveShipment?: boolean;
        allowInactive?: boolean;
        excludeLockedShipments?: boolean;
        paymentMethods?: string;
        channelShipmentId?: string;
        channelOrderId?: string;
        customMeta?: string;
        orderingChannel?: string;
        companyAffiliateTag?: string;
        myOrders?: boolean;
        platformUserId?: string;
        sortType?: string;
        showCrossCompanyData?: boolean;
        tags?: string;
        customerId?: string;
        orderType?: string;
    }): Paginator<OrderPlatformModel.ShipmentInternalPlatformViewResponse>;
    /**
     * @param {OrderPlatformValidator.GetStateTransitionMapParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BagStateTransitionMap>} - Success response
     * @name getStateTransitionMap
     * @summary: Get state transition map.
     * @description: Retrieve a map of state transitions for orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getStateTransitionMap/).
     */
    getStateTransitionMap({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.BagStateTransitionMap>;
    /**
     * @param {OrderPlatformValidator.GetTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.TemplateDownloadResponse>} - Success response
     * @name getTemplate
     * @summary:
     * @description: Get the Excel file URL for the Template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getTemplate/).
     */
    getTemplate({ templateName, requestHeaders }?: OrderPlatformValidator.GetTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.TemplateDownloadResponse>;
    /**
     * @param {OrderPlatformValidator.GetfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FiltersResponse>} - Success response
     * @name getfilters
     * @summary: Get filters.
     * @description: Retrieve listing filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getfilters/).
     */
    getfilters({ view, groupEntity, requestHeaders }?: OrderPlatformValidator.GetfiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FiltersResponse>;
    /**
     * @param {OrderPlatformValidator.GetuserviewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UserViewsResponse>} - Success response
     * @name getuserviews
     * @summary:
     * @description: Get User views(User cross company views) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getuserviews/).
     */
    getuserviews({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.UserViewsResponse>;
    /**
     * @param {OrderPlatformValidator.GlobalfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GlobalFiltersResponse>} - Success response
     * @name globalfilters
     * @summary:
     * @description: Get Global Filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/globalfilters/).
     */
    globalfilters({ showIn, requestSource, requestHeaders }?: OrderPlatformValidator.GlobalfiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GlobalFiltersResponse>;
    /**
     * @param {OrderPlatformValidator.InvalidateShipmentCacheParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>} -
     *   Success response
     * @name invalidateShipmentCache
     * @summary: Invalidate shipment cache.
     * @description: Invalidate shipment Cache. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/invalidateShipmentCache/).
     */
    invalidateShipmentCache({ body, requestHeaders }?: OrderPlatformValidator.InvalidateShipmentCacheParam, { responseHeaders }?: object): Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>;
    /**
     * @param {OrderPlatformValidator.JobDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.JobDetailsResponse>} - Success response
     * @name jobDetails
     * @summary:
     * @description: Fetches details for the job of the provided batch_id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/jobDetails/).
     */
    jobDetails({ batchId, requestHeaders }?: OrderPlatformValidator.JobDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.JobDetailsResponse>;
    /**
     * @param {OrderPlatformValidator.OrderUpdateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ResponseDetail>} - Success response
     * @name orderUpdate
     * @summary: Order update.
     * @description: Modify the details and status of an order.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/orderUpdate/).
     */
    orderUpdate({ body, requestHeaders }?: OrderPlatformValidator.OrderUpdateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ResponseDetail>;
    /**
     * @param {OrderPlatformValidator.PostRefundConfigurationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponse>}
     *   - Success response
     *
     * @name postRefundConfiguration
     * @summary:
     * @description: refund configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postRefundConfiguration/).
     */
    postRefundConfiguration({ appId, body, requestHeaders }?: OrderPlatformValidator.PostRefundConfigurationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponse>;
    /**
     * @param {OrderPlatformValidator.PostRefundStateConfigurationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.PostRefundStateConfigurationResponse>}
     *   - Success response
     *
     * @name postRefundStateConfiguration
     * @summary:
     * @description: Refund State Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postRefundStateConfiguration/).
     */
    postRefundStateConfiguration({ appId, body, requestHeaders }?: OrderPlatformValidator.PostRefundStateConfigurationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.PostRefundStateConfigurationResponse>;
    /**
     * @param {OrderPlatformValidator.PostShipmentHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name postShipmentHistory
     * @summary: Post shipment history.
     * @description: Add history records for a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postShipmentHistory/).
     */
    postShipmentHistory({ body, requestHeaders }?: OrderPlatformValidator.PostShipmentHistoryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.PostuserviewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
     *   Success response
     * @name postuserviews
     * @summary:
     * @description: Add User views(User cross company views) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postuserviews/).
     */
    postuserviews({ body, requestHeaders }?: OrderPlatformValidator.PostuserviewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponse>;
    /**
     * @param {OrderPlatformValidator.ProcessManifestsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ProcessManifestItemResponse>} -
     *   Success response
     * @name processManifests
     * @summary:
     * @description: Process Manifest. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/processManifests/).
     */
    processManifests({ body, requestHeaders }?: OrderPlatformValidator.ProcessManifestsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ProcessManifestItemResponse>;
    /**
     * @param {OrderPlatformValidator.ReassignLocationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.StoreReassignResponse>} - Success response
     * @name reassignLocation
     * @summary: Reassign location.
     * @description: Change the assigned location for an order or shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/reassignLocation/).
     */
    reassignLocation({ body, requestHeaders }?: OrderPlatformValidator.ReassignLocationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.StoreReassignResponse>;
    /**
     * @param {OrderPlatformValidator.SendSmsNinjaParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name sendSmsNinja
     * @summary: Send SMS via Ninja.
     * @description: Send SMS Ninja Panel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendSmsNinja/).
     */
    sendSmsNinja({ body, requestHeaders }?: OrderPlatformValidator.SendSmsNinjaParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.SendUserMobileOTPParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponse>} - Success response
     * @name sendUserMobileOTP
     * @summary: Send user mobile OTP.
     * @description: Send a one-time OTP to a users mobile device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendUserMobileOTP/).
     */
    sendUserMobileOTP({ body, requestHeaders }?: OrderPlatformValidator.SendUserMobileOTPParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SendUserMobileOtpResponse>;
    /**
     * @param {OrderPlatformValidator.TrackShipmentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CourierPartnerTrackingResponse>} -
     *   Success response
     * @name trackShipment
     * @summary: Track shipment.
     * @description: Retrieve courier partner tracking details for a given shipment id or awb no. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/trackShipment/).
     */
    trackShipment({ shipmentId, awb, pageNo, pageSize, requestHeaders }?: OrderPlatformValidator.TrackShipmentParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CourierPartnerTrackingResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BaseResponse>} - Success response
     * @name updateAddress
     * @summary: Update address.
     * @description: Modify the shipping address for an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateAddress/).
     */
    updateAddress({ shipmentId, addressCategory, name, address, addressType, pincode, phone, email, landmark, city, state, country, requestHeaders, }?: OrderPlatformValidator.UpdateAddressParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BaseResponse>;
    /**
     * @param {OrderPlatformValidator.UpdatePackagingDimensionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>}
     *   - Success response
     *
     * @name updatePackagingDimensions
     * @summary: Update packaging dimensions.
     * @description: Modify the dimensions of packaging. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updatePackagingDimensions/).
     */
    updatePackagingDimensions({ body, requestHeaders }?: OrderPlatformValidator.UpdatePackagingDimensionsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentLockParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponse>} -
     *   Success response
     * @name updateShipmentLock
     * @summary: Update shipment lock.
     * @description: Modify shipment/bag lock and check status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentLock/).
     */
    updateShipmentLock({ body, requestHeaders }?: OrderPlatformValidator.UpdateShipmentLockParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UpdateShipmentLockResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>}
     *   - Success response
     *
     * @name updateShipmentStatus
     * @summary: Update shipment status.
     * @description: Shipment state transition or Shipment data update or both. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentStatus/).
     */
    updateShipmentStatus({ body, requestHeaders }?: OrderPlatformValidator.UpdateShipmentStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentTrackingParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CourierPartnerTrackingDetails>} -
     *   Success response
     * @name updateShipmentTracking
     * @summary: Update shipment tracking.
     * @description: Modify courier partner tracking details for a given shipment id or awb no. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentTracking/).
     */
    updateShipmentTracking({ body, requestHeaders }?: OrderPlatformValidator.UpdateShipmentTrackingParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CourierPartnerTrackingDetails>;
    /**
     * @param {OrderPlatformValidator.UpdateuserviewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
     *   Success response
     * @name updateuserviews
     * @summary:
     * @description: Update User views(User cross company views) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateuserviews/).
     */
    updateuserviews({ body, requestHeaders }?: OrderPlatformValidator.UpdateuserviewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponse>;
    /**
     * @param {OrderPlatformValidator.UploadConsentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name uploadConsents
     * @summary:
     * @description: Upload Consent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/uploadConsents/).
     */
    uploadConsents({ manifestId, body, requestHeaders }?: OrderPlatformValidator.UploadConsentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.VerifyMobileOTPParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.VerifyOtpResponse>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify mobile OTP.
     * @description: Verify Mobile OTP - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, requestHeaders }?: OrderPlatformValidator.VerifyMobileOTPParam, { responseHeaders }?: object): Promise<OrderPlatformModel.VerifyOtpResponse>;
}
import OrderPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Order/OrderPlatformValidator");
import OrderPlatformModel = require("sdk/output/javascript/code/sdk/platform/Order/OrderPlatformModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
