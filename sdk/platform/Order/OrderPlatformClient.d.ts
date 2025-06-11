export = Order;
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {OrderPlatformValidator.AddUserViewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
     *   Success response
     * @name addUserViews
     * @summary: Add custom view for every unique user cross company pair.
     * @description: Add custom view for every unique user cross company pair. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/addUserViews/).
     */
    addUserViews({ body, requestHeaders }?: OrderPlatformValidator.AddUserViewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponse>;
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
     * @summary: Fetches of previous or running  bulk jobs.
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
     * @summary: Performs State Transisiton in Bulk for the given shipments in the excel/csv file url.
     * @description: Performs State Transisiton in Bulk for the given shipments in the excel/csv file url. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkStateTransistion/).
     */
    bulkStateTransistion({ body, requestHeaders }?: OrderPlatformValidator.BulkStateTransistionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkStateTransistionResponse>;
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
     * @param {OrderPlatformValidator.ConsolidateShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ConsolidateShipmentResponse>} -
     *   Success response
     * @name consolidateShipments
     * @summary: Consolidates multiple shipments into a single shipment, optimizing logistics and delivery handling.
     * @description: Consolidates multiple shipments into a single shipment, allowing for optimized logistics and delivery handling. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/consolidateShipments/).
     */
    consolidateShipments({ body, requestHeaders }?: OrderPlatformValidator.ConsolidateShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ConsolidateShipmentResponse>;
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
     * @param {OrderPlatformValidator.DeleteUserViewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
     *   Success response
     * @name deleteUserViews
     * @summary: Delete custom view for every unique user cross company pair.
     * @description: Delete custom view for every unique user cross company pair. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/deleteUserViews/).
     */
    deleteUserViews({ viewId, requestHeaders }?: OrderPlatformValidator.DeleteUserViewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponse>;
    /**
     * @param {OrderPlatformValidator.DownloadBulkActionTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.TemplateDownloadResponse>} - Success response
     * @name downloadBulkActionTemplate
     * @summary: Download bulk action template.
     * @description: Download bulk seller templates which can be used to perform operations in bulk - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadBulkActionTemplate/).
     */
    downloadBulkActionTemplate({ templateSlug, requestHeaders }?: OrderPlatformValidator.DownloadBulkActionTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.TemplateDownloadResponse>;
    /**
     * @param {OrderPlatformValidator.DownloadLanesReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkReportsDownloadResponse>} -
     *   Success response
     * @name downloadLanesReport
     * @summary: Downloads lanes shipment/orders.
     * @description: Downloads shipments/orders present in the provided lane - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadLanesReport/).
     */
    downloadLanesReport({ body, requestHeaders }?: OrderPlatformValidator.DownloadLanesReportParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkReportsDownloadResponse>;
    /**
     * @param {OrderPlatformValidator.EInvoiceRetryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.EInvoiceRetryResponse>} - Success response
     * @name eInvoiceRetry
     * @summary: Retry e-invoice after failure
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
     * @description: Retrieve details about credit balance on the basis of customer mobile number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchCreditBalanceDetail/).
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
     * @description: Get list of refund modes to trigger refunds - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchRefundModeConfig/).
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
     * @description: Create a point-of-sale (POS) receipt for a specific order by order Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generatePOSReceiptByOrderId/).
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
     * @summary: Gets All the allowed Templates to perform Bulk Operations.
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
     * @description: Retrieve announcements related to orders fulfilment configured by platform or company admin - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAnnouncements/).
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
     * @description: Get Order Bag Details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBagById/).
     */
    getBagById({ bagId, channelBagId, channelId, requestHeaders }?: OrderPlatformValidator.GetBagByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BagDetailsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.GetBagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponse>} - Success response
     * @name getBags
     * @summary: Get bags.
     * @description: Get Bags for the order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBags/).
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
     * @description: Get list of templates so that users can download the required template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkActionTemplate/).
     */
    getBulkActionTemplate({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkActionTemplateResponse>;
    /**
     * @param {OrderPlatformValidator.GetBulkShipmentExcelFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.TemplateDownloadResponse>} - Success response
     * @name getBulkShipmentExcelFile
     * @summary: Get bulk shipment Excel file.
     * @description: Generates the report which can be filled and uploaded to perform the bulk operation based on the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkShipmentExcelFile/).
     */
    getBulkShipmentExcelFile({ salesChannels, dpIds, startDate, endDate, stores, tags, bagStatus, paymentMethods, fileType, timeToDispatch, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetBulkShipmentExcelFileParam, { responseHeaders }?: object): Promise<OrderPlatformModel.TemplateDownloadResponse>;
    /**
     * @param {OrderPlatformValidator.GetFailedOrderLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FailedOrderLogs>} - Success response
     * @name getFailedOrderLogs
     * @summary: Get failed order logs according to the filter provided
     * @description: This endpoint allows users to get failed order logs listing for filters based on order id, user contact number, user email id and sales channel id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getFailedOrderLogs/).
     */
    getFailedOrderLogs({ pageNo, pageSize, searchType, searchValue, requestHeaders }?: OrderPlatformValidator.GetFailedOrderLogsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FailedOrderLogs>;
    /**
     * @param {OrderPlatformValidator.GetFileByStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.JobFailedResponse>} - Success response
     * @name getFileByStatus
     * @summary: Get the file download URL used for performing bulk operation
     * @description: Get the file download URL used for performing bulk operation - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getFileByStatus/).
     */
    getFileByStatus({ batchId, status, fileType, reportType, requestHeaders }?: OrderPlatformValidator.GetFileByStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.JobFailedResponse>;
    /**
     * @param {OrderPlatformValidator.GetGlobalFiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GlobalFiltersResponse>} - Success response
     * @name getGlobalFilters
     * @summary: Get global filters for populating filter listing and powering views api.
     * @description: Get global filters for populating filter listing and powering views api. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getGlobalFilters/).
     */
    getGlobalFilters({ showIn, requestHeaders }?: OrderPlatformValidator.GetGlobalFiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GlobalFiltersResponse>;
    /**
     * @param {OrderPlatformValidator.GetLaneConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.LaneConfigResponse>} - Success response
     * @name getLaneConfig
     * @summary: Get lane configuration.
     * @description: Get lane config for the order and shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getLaneConfig/).
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, paymentMode, bagStatus, searchType, searchValue, tags, timeToDispatch, paymentMethods, myOrders, showCrossCompanyData, orderType, requestHeaders, }?: OrderPlatformValidator.GetLaneConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.LaneConfigResponse>;
    /**
     * @param {OrderPlatformValidator.GetManifestfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestFiltersResponse>} - Success response
     * @name getManifestfilters
     * @summary: get Manifest Filters.
     * @description: get Manifest Filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestfilters/).
     */
    getManifestfilters({ view, requestHeaders }?: OrderPlatformValidator.GetManifestfiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestFiltersResponse>;
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
     * @description: Get Orders Listing - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrders/).
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, myOrders, showCrossCompanyData, customerId, orderType, operationalStatus, financialStatus, logisticsStatus, parentViewSlug, childViewSlug, groupEntity, enforceDateFilter, requestHeaders, }?: OrderPlatformValidator.GetOrdersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] - Lane refers to a section where orders are
     *   assigned, indicating its grouping
     * @param {string} [arg.searchType] - Search_type refers to the field that
     *   will be used as the target for the search operation
     * @param {string} [arg.bagStatus] - Bag_status refers to the status of the
     *   entity. Filters orders based on the status.
     * @param {number} [arg.timeToDispatch] - Time_to_dispatch refers to the
     *   estimated SLA time.
     * @param {string} [arg.paymentMethods] -
     * @param {string} [arg.tags] - Tags refer to additional descriptive labels
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
     * @param {Object[]} [arg.customMeta] -
     * @param {boolean} [arg.myOrders] -
     * @param {boolean} [arg.showCrossCompanyData] - Flag to view cross &
     *   non-cross company order
     * @param {string} [arg.customerId] -
     * @param {string} [arg.orderType] -
     * @param {string} [arg.operationalStatus] - Statuses relating to shipment
     *   transition in order processing journey. Comma separated values of
     *   operational statuses.
     * @param {string} [arg.financialStatus] - Statuses relating to finance
     *   related operations in the order processing journey. Comma separated
     *   values of financial statuses.
     * @param {string} [arg.logisticsStatus] - Statuses relating to delivery and
     *   pickup related operations in the order processing journey. Comma
     *   separated values of logistics statuses.
     * @param {string} [arg.parentViewSlug] - Parent view is used for grouping
     *   of child views. Slug of parent view.
     * @param {string} [arg.childViewSlug] - Child view is user configured view,
     *   which has filters added by the user on which shipments/orders are
     *   fetched. Slug of child view.
     * @param {string} [arg.groupEntity] - Defines the grouping criterion for
     *   retrieving shipments or orders. It specifies whether the results should
     *   be organized based on shipment groups or order groups. For example,
     *   using 'shipments' groups results by shipment, while an invalid value
     *   like 'abcd' may not be recognized, leading to errors or default behavior.
     * @param {boolean} [arg.enforceDateFilter] - Applies a date filter for
     *   listing orders. This is useful when fetching data for a specific date
     *   range while performing searches.
     * @returns {Paginator<OrderPlatformModel.OrderListingResponse>}
     * @summary: Get orders.
     * @description: Get Orders Listing
     */
    getOrdersPaginator({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageSize, isPrioritySort, customMeta, myOrders, showCrossCompanyData, customerId, orderType, operationalStatus, financialStatus, logisticsStatus, parentViewSlug, childViewSlug, groupEntity, enforceDateFilter, }?: {
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
        customMeta?: any[];
        myOrders?: boolean;
        showCrossCompanyData?: boolean;
        customerId?: string;
        orderType?: string;
        operationalStatus?: string;
        financialStatus?: string;
        logisticsStatus?: string;
        parentViewSlug?: string;
        childViewSlug?: string;
        groupEntity?: string;
        enforceDateFilter?: boolean;
    }): Paginator<OrderPlatformModel.OrderListingResponse>;
    /**
     * @param {OrderPlatformValidator.GetRefundConfigurationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponse>}
     *   - Success response
     *
     * @name getRefundConfiguration
     * @summary: refund configuration.
     * @description: refund configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundConfiguration/).
     */
    getRefundConfiguration({ appId, requestHeaders }?: OrderPlatformValidator.GetRefundConfigurationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponse>;
    /**
     * @param {OrderPlatformValidator.GetRefundEnableStateListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetRefundStates>} - Success response
     * @name getRefundEnableStateList
     * @summary: Refund State Configurationb
     * @description: refund configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundEnableStateList/).
     */
    getRefundEnableStateList({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.GetRefundStates>;
    /**
     * @param {OrderPlatformValidator.GetRefundOptionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RefundOptionsSchemaResponse>} -
     *   Success response
     * @name getRefundOptions
     * @summary: Retrieve refund options with amount breakup for  specific shipment and bags.
     * @description: This API can be used for giving the refund amount with available option of MOPs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundOptions/).
     */
    getRefundOptions({ shipmentId, bagIds, state, optinAppId, optinCompanyId, status, requestHeaders, }?: OrderPlatformValidator.GetRefundOptionsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundOptionsSchemaResponse>;
    /**
     * @param {OrderPlatformValidator.GetRefundStateConfigurationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetRefundStateConfigurationResponse>}
     *   - Success response
     *
     * @name getRefundStateConfiguration
     * @summary: Refund State Configuration
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
     * @description: Retrieve permissible actions based on user roles such as company_admin,  company_operation, customer_care, and read_only. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRoleBasedActions/).
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
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentReasons/).
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
     * @description: Get Shipments Listing for the company id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipments/).
     */
    getShipments({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageNo, pageSize, fetchActiveShipment, allowInactive, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, sortType, showCrossCompanyData, tags, customerId, orderType, operationalStatus, financialStatus, logisticsStatus, parentViewSlug, childViewSlug, lockStatus, groupEntity, enforceDateFilter, requestHeaders, }?: OrderPlatformValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>;
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
     * @param {string} [arg.operationalStatus] - Statuses relating to shipment
     *   transition in order processing journey. Comma separated values of
     *   operational statuses.
     * @param {string} [arg.financialStatus] - Statuses relating to finance
     *   related operations in the order processing journey. Comma separated
     *   values of financial statuses.
     * @param {string} [arg.logisticsStatus] - Statuses relating to delivery and
     *   pickup related operations in the order processing journey. Comma
     *   separated values of logistics statuses.
     * @param {string} [arg.parentViewSlug] - Parent view is used for grouping
     *   of child views. Slug of parent view.
     * @param {string} [arg.childViewSlug] - Child view is user configured view
     *   which has filters added by the user on which shipments/orders are
     *   fetched. Slug of child view.
     * @param {string} [arg.lockStatus] - Flag to identify if a shipment is locked or not.
     * @param {string} [arg.groupEntity] - Defines the grouping criterion for
     *   retrieving shipments or orders. It specifies whether the results should
     *   be organized based on shipment groups or order groups. For example,
     *   using 'shipments' groups results by shipment, while an invalid value
     *   like 'abcd' may not be recognized, leading to errors or default behavior.
     * @param {boolean} [arg.enforceDateFilter] - Applies a date filter for
     *   listing shipments. This is useful when fetching data for a specific
     *   date range while performing searches.
     * @returns {Paginator<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
     * @summary: Get shipments.
     * @description: Get Shipments Listing for the company id
     */
    getShipmentsPaginator({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageSize, fetchActiveShipment, allowInactive, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, sortType, showCrossCompanyData, tags, customerId, orderType, operationalStatus, financialStatus, logisticsStatus, parentViewSlug, childViewSlug, lockStatus, groupEntity, enforceDateFilter, }?: {
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
        operationalStatus?: string;
        financialStatus?: string;
        logisticsStatus?: string;
        parentViewSlug?: string;
        childViewSlug?: string;
        lockStatus?: string;
        groupEntity?: string;
        enforceDateFilter?: boolean;
    }): Paginator<OrderPlatformModel.ShipmentInternalPlatformViewResponse>;
    /**
     * @param {OrderPlatformValidator.GetStateTransitionMapParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BagStateTransitionMap>} - Success response
     * @name getStateTransitionMap
     * @summary: Get state transition map.
     * @description: Retrieve a map of state transitions for orders - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getStateTransitionMap/).
     */
    getStateTransitionMap({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.BagStateTransitionMap>;
    /**
     * @param {OrderPlatformValidator.GetTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.TemplateDownloadResponse>} - Success response
     * @name getTemplate
     * @summary: Get the Excel or CSV file URL for the Template.
     * @description: Get the Excel or CSV file URL for the Template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getTemplate/).
     */
    getTemplate({ templateName, requestHeaders }?: OrderPlatformValidator.GetTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.TemplateDownloadResponse>;
    /**
     * @param {OrderPlatformValidator.GetUserViewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UserViewsResponse>} - Success response
     * @name getUserViews
     * @summary: Get custom view for every unique user cross company pair.
     * @description: Get custom view for every unique user cross company pair. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getUserViews/).
     */
    getUserViews({ showIn, requestHeaders }?: OrderPlatformValidator.GetUserViewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UserViewsResponse>;
    /**
     * @param {OrderPlatformValidator.GetfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FiltersResponse>} - Success response
     * @name getfilters
     * @summary: Get filters.
     * @description: Get supported filters for various listing operations - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getfilters/).
     */
    getfilters({ view, groupEntity, requestHeaders }?: OrderPlatformValidator.GetfiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FiltersResponse>;
    /**
     * @param {OrderPlatformValidator.InvalidateShipmentCacheParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>} -
     *   Success response
     * @name invalidateShipmentCache
     * @summary: Invalidate shipment cache
     * @description: Clear the existing shipment cache data stored in Redis  and serialize the updated data for subsequent use. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/invalidateShipmentCache/).
     */
    invalidateShipmentCache({ body, requestHeaders }?: OrderPlatformValidator.InvalidateShipmentCacheParam, { responseHeaders }?: object): Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>;
    /**
     * @param {OrderPlatformValidator.JobDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.JobDetailsResponse>} - Success response
     * @name jobDetails
     * @summary: Fetches details for the job of the provided batch_id
     * @description: Fetches details for the job of the provided batch_id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/jobDetails/).
     */
    jobDetails({ batchId, requestHeaders }?: OrderPlatformValidator.JobDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.JobDetailsResponse>;
    /**
     * @param {OrderPlatformValidator.OrderUpdateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ResponseDetail>} - Success response
     * @name orderUpdate
     * @summary: Update an order
     * @description: Used to update an order's meta information. These meta information can be accessed via order or shipment details API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/orderUpdate/).
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
     * @summary: refund configuration.
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
     * @summary: Refund State Configuration
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
     * @returns {Promise<OrderPlatformModel.SendSmsResponse>} - Success response
     * @name sendSmsNinja
     * @summary: Send SMS via Ninja.
     * @description: Send SMS to customer based on the template that is selected - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendSmsNinja/).
     */
    sendSmsNinja({ body, requestHeaders }?: OrderPlatformValidator.SendSmsNinjaParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SendSmsResponse>;
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
     * @param {OrderPlatformValidator.UpdateOrderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderUpdateResponseDetail>} - Success response
     * @name updateOrder
     * @summary: Enables the updating of various order properties, including tax_details, meta, and more, providing flexibility and precision in order adjustments.
     * @description: Enables the updating of various order properties, including tax_details, meta, and more, providing flexibility and precision in order adjustments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateOrder/).
     */
    updateOrder({ orderId, body, requestHeaders }?: OrderPlatformValidator.UpdateOrderParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderUpdateResponseDetail>;
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
     * @param {OrderPlatformValidator.UpdateShipmentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>}
     *   - Success response
     *
     * @name updateShipment
     * @summary: Update shipment status.
     * @description: Shipment action transition or Shipment data update or both. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipment/).
     */
    updateShipment({ body, requestHeaders }?: OrderPlatformValidator.UpdateShipmentParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>;
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
     * @param {OrderPlatformValidator.UpdateUserViewPositionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
     *   Success response
     * @name updateUserViewPosition
     * @summary: Update User view(Parent view and child view) position
     * @description: Update User view(Parent view and child view) position - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateUserViewPosition/).
     */
    updateUserViewPosition({ body, requestHeaders }?: OrderPlatformValidator.UpdateUserViewPositionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateUserViewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
     *   Success response
     * @name updateUserViews
     * @summary: Update custom view for every unique user cross company pair.
     * @description: Update custom view for every unique user cross company pair. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateUserViews/).
     */
    updateUserViews({ body, requestHeaders }?: OrderPlatformValidator.UpdateUserViewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponse>;
    /**
     * @param {OrderPlatformValidator.VerifyMobileOTPParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.VerifyOtpResponse>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify Mobile OTP
     * @description: Verify Mobile OTP - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, requestHeaders }?: OrderPlatformValidator.VerifyMobileOTPParam, { responseHeaders }?: object): Promise<OrderPlatformModel.VerifyOtpResponse>;
}
import OrderPlatformValidator = require("./OrderPlatformValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
import Paginator = require("../../common/Paginator");
