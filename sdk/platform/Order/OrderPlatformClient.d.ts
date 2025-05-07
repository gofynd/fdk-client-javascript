export = Order;
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {OrderPlatformValidator.AddStateManagerConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ConfigUpdatedResponseSchema>} -
     *   Success response
     * @name addStateManagerConfig
     * @summary: Allows esm config updation
     * @description: Update ESM config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/addStateManagerConfig/).
     */
    addStateManagerConfig({ body, requestHeaders }?: OrderPlatformValidator.AddStateManagerConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ConfigUpdatedResponseSchema>;
    /**
     * @param {OrderPlatformValidator.AddUserViewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>}
     *   - Success response
     *
     * @name addUserViews
     * @summary: Add custom view for every unique user cross company pair.
     * @description: Add custom view for every unique user cross company pair. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/addUserViews/).
     */
    addUserViews({ body, requestHeaders }?: OrderPlatformValidator.AddUserViewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>;
    /**
     * @param {OrderPlatformValidator.AttachOrderUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AttachOrderUserResponseSchema>} -
     *   Success response
     * @name attachOrderUser
     * @summary: Attach order user.
     * @description: Attach order User - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/attachOrderUser/).
     */
    attachOrderUser({ body, requestHeaders }?: OrderPlatformValidator.AttachOrderUserParam, { responseHeaders }?: object): Promise<OrderPlatformModel.AttachOrderUserResponseSchema>;
    /**
     * @param {OrderPlatformValidator.BulkListingParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkListingResponseSchema>} - Success response
     * @name bulkListing
     * @summary: Fetches of previous or running  bulk jobs.
     * @description: Fetches of previous or running  bulk jobs.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkListing/).
     */
    bulkListing({ pageSize, pageNo, startDate, endDate, status, bulkActionType, searchKey, requestHeaders, }?: OrderPlatformValidator.BulkListingParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkListingResponseSchema>;
    /**
     * @param {OrderPlatformValidator.BulkStateTransistionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkStateTransistionResponseSchema>}
     *   - Success response
     *
     * @name bulkStateTransistion
     * @summary: Performs State Transisiton in Bulk for the given shipments in the excel/csv file url.
     * @description: Performs State Transisiton in Bulk for the given shipments in the excel/csv file url. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkStateTransistion/).
     */
    bulkStateTransistion({ body, requestHeaders }?: OrderPlatformValidator.BulkStateTransistionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkStateTransistionResponseSchema>;
    /**
     * @param {OrderPlatformValidator.CheckOrderStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name checkOrderStatus
     * @summary: Verify the current status of an order.
     * @description: Verify the current status of an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/checkOrderStatus/).
     */
    checkOrderStatus({ body, requestHeaders }?: OrderPlatformValidator.CheckOrderStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.Click2CallParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.Click2CallResponseSchema>} - Success response
     * @name click2Call
     * @summary: Click to call.
     * @description: Click to call.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/click2Call/).
     */
    click2Call({ caller, receiver, bagId, callerId, method, requestHeaders }?: OrderPlatformValidator.Click2CallParam, { responseHeaders }?: object): Promise<OrderPlatformModel.Click2CallResponseSchema>;
    /**
     * @param {OrderPlatformValidator.CreateOrderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateOrderResponseSchema>} - Success response
     * @name createOrder
     * @summary: Create order.
     * @description: Create order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createOrder/).
     */
    createOrder({ body, requestHeaders }?: OrderPlatformValidator.CreateOrderParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateOrderResponseSchema>;
    /**
     * @param {OrderPlatformValidator.DeleteUserViewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>}
     *   - Success response
     *
     * @name deleteUserViews
     * @summary: Delete custom view for every unique user cross company pair.
     * @description: Delete custom view for every unique user cross company pair. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/deleteUserViews/).
     */
    deleteUserViews({ viewId, requestHeaders }?: OrderPlatformValidator.DeleteUserViewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>;
    /**
     * @param {OrderPlatformValidator.DownloadBulkActionTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.TemplateDownloadResponseSchema>} -
     *   Success response
     * @name downloadBulkActionTemplate
     * @summary: Download bulk action template.
     * @description: Download bulk seller templates which can be used to perform operations in bulk - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadBulkActionTemplate/).
     */
    downloadBulkActionTemplate({ templateSlug, requestHeaders }?: OrderPlatformValidator.DownloadBulkActionTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.TemplateDownloadResponseSchema>;
    /**
     * @param {OrderPlatformValidator.DownloadLanesReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkReportsDownloadResponseSchema>}
     *   - Success response
     *
     * @name downloadLanesReport
     * @summary: Downloads lanes shipment/orders.
     * @description: Downloads shipments/orders present in the provided lane - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadLanesReport/).
     */
    downloadLanesReport({ body, requestHeaders }?: OrderPlatformValidator.DownloadLanesReportParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkReportsDownloadResponseSchema>;
    /**
     * @param {OrderPlatformValidator.EInvoiceRetryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.EInvoiceRetryResponseSchema>} -
     *   Success response
     * @name eInvoiceRetry
     * @summary: Retry e-invoice after failure
     * @description: Retry e-invoice after failure - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/eInvoiceRetry/).
     */
    eInvoiceRetry({ body, requestHeaders }?: OrderPlatformValidator.EInvoiceRetryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.EInvoiceRetryResponseSchema>;
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
     * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponseSchema>}
     *   - Success response
     *
     * @name generatePOSReceiptByOrderId
     * @summary: Generate POS receipt by order ID.
     * @description: Create a point-of-sale (POS) receipt for a specific order by order Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generatePOSReceiptByOrderId/).
     */
    generatePOSReceiptByOrderId({ orderId, shipmentId, documentType, requestHeaders }?: OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GeneratePosOrderReceiptResponseSchema>;
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
     * @returns {Promise<OrderPlatformModel.AllowedTemplatesResponseSchema>} -
     *   Success response
     * @name getAllowedTemplatesForBulk
     * @summary: Gets All the allowed Templates to perform Bulk Operations.
     * @description: Gets All the allowed Templates to perform Bulk Operations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedTemplatesForBulk/).
     */
    getAllowedTemplatesForBulk({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.AllowedTemplatesResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetAnnouncementsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AnnouncementsResponseSchema>} -
     *   Success response
     * @name getAnnouncements
     * @summary: Get announcements.
     * @description: Retrieve announcements related to orders fulfilment configured by platform or company admin - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAnnouncements/).
     */
    getAnnouncements({ date, requestHeaders }?: OrderPlatformValidator.GetAnnouncementsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.AnnouncementsResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetBagByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BagDetailsPlatformResponseSchema>}
     *   - Success response
     *
     * @name getBagById
     * @summary: Get bag by ID.
     * @description: Get Order Bag Details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBagById/).
     */
    getBagById({ bagId, channelBagId, channelId, requestHeaders }?: OrderPlatformValidator.GetBagByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BagDetailsPlatformResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetBagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponseSchema>} -
     *   Success response
     * @name getBags
     * @summary: Get bags.
     * @description: Get Bags for the order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBags/).
     */
    getBags({ bagIds, shipmentIds, orderIds, channelBagIds, channelShipmentIds, channelOrderIds, channelId, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetBagsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GetBagsPlatformResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetBulkActionTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkActionTemplateResponseSchema>}
     *   - Success response
     *
     * @name getBulkActionTemplate
     * @summary: Get bulk action template.
     * @description: Get list of templates so that users can download the required template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkActionTemplate/).
     */
    getBulkActionTemplate({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkActionTemplateResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetBulkShipmentExcelFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.TemplateDownloadResponseSchema>} -
     *   Success response
     * @name getBulkShipmentExcelFile
     * @summary: Get bulk shipment Excel file.
     * @description: Generates the report which can be filled and uploaded to perform the bulk operation based on the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkShipmentExcelFile/).
     */
    getBulkShipmentExcelFile({ salesChannels, dpIds, startDate, endDate, stores, tags, bagStatus, paymentMethods, fileType, timeToDispatch, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetBulkShipmentExcelFileParam, { responseHeaders }?: object): Promise<OrderPlatformModel.TemplateDownloadResponseSchema>;
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
     * @returns {Promise<OrderPlatformModel.JobFailedResponseSchema>} - Success response
     * @name getFileByStatus
     * @summary: Get the file download URL used for performing bulk operation
     * @description: Get the file download URL used for performing bulk operation - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getFileByStatus/).
     */
    getFileByStatus({ batchId, status, fileType, reportType, requestHeaders }?: OrderPlatformValidator.GetFileByStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.JobFailedResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetGlobalFiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GlobalFiltersResponseSchema>} -
     *   Success response
     * @name getGlobalFilters
     * @summary: Get global filters for populating filter listing and powering views api.
     * @description: Get global filters for populating filter listing and powering views api. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getGlobalFilters/).
     */
    getGlobalFilters({ showIn, requestHeaders }?: OrderPlatformValidator.GetGlobalFiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GlobalFiltersResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetLaneConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.LaneConfigResponseSchema>} - Success response
     * @name getLaneConfig
     * @summary: Get lane configuration.
     * @description: Get lane config for the order and shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getLaneConfig/).
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, paymentMode, bagStatus, searchType, searchValue, tags, timeToDispatch, paymentMethods, myOrders, showCrossCompanyData, orderType, requestHeaders, }?: OrderPlatformValidator.GetLaneConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.LaneConfigResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetManifestfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestFiltersResponseSchema>} -
     *   Success response
     * @name getManifestfilters
     * @summary: get Manifest Filters.
     * @description: get Manifest Filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestfilters/).
     */
    getManifestfilters({ view, requestHeaders }?: OrderPlatformValidator.GetManifestfiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestFiltersResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetOrderByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderDetailsResponseSchema>} -
     *   Success response
     * @name getOrderById
     * @summary: Get order by ID.
     * @description: Retrieve detailed information about a specific order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrderById/).
     */
    getOrderById({ orderId, myOrders, allowInactive, requestHeaders }?: OrderPlatformValidator.GetOrderByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderDetailsResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetOrderConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderConfig>} - Success response
     * @name getOrderConfig
     * @summary: Get the Order Configuration for the application.
     * @description: Get the Order Configuration for the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrderConfig/).
     */
    getOrderConfig({ appId, requestHeaders }?: OrderPlatformValidator.GetOrderConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderConfig>;
    /**
     * @param {OrderPlatformValidator.GetOrdersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderListingResponseSchema>} -
     *   Success response
     * @name getOrders
     * @summary: Get orders.
     * @description: Get a list of orders based on the filters provided. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrders/).
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, myOrders, showCrossCompanyData, customerId, orderType, operationalStatus, financialStatus, logisticsStatus, parentViewSlug, childViewSlug, groupEntity, enforceDateFilter, requestHeaders, }?: OrderPlatformValidator.GetOrdersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderListingResponseSchema>;
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
     * @param {string} [arg.paymentMethods] - Comma separated values of payment
     *   methods that were used to place order.
     * @param {string} [arg.tags] - Tags refer to additional descriptive labels
     *   associated with the order
     * @param {string} [arg.searchValue] - Search_value is matched against the
     *   field specified by the search_type
     * @param {string} [arg.fromDate] - Date time in UTC timezone as per ISO format.
     * @param {string} [arg.toDate] - Date time in UTC timezone as per ISO format.
     * @param {string} [arg.startDate] - Date time in UTC timezone as per ISO format.
     * @param {string} [arg.endDate] - Date time in UTC timezone as per ISO format.
     * @param {string} [arg.dpIds] - Delivery Partner IDs to which shipments are assigned.
     * @param {string} [arg.stores] - A comma-separated list of store IDs used
     *   to filter results to only those related to specific stores.
     * @param {string} [arg.salesChannels] - A comma-separated list of sales
     *   channel IDs to filter results based on the sales channels involved.
     * @param {number} [arg.pageSize] - Determines the number of results
     *   returned per page.
     * @param {boolean} [arg.isPrioritySort] -
     * @param {Object[]} [arg.customMeta] -
     * @param {boolean} [arg.myOrders] -
     * @param {boolean} [arg.showCrossCompanyData] - Flag to view cross &
     *   non-cross company order
     * @param {string} [arg.customerId] - The unique identifier for the customer
     *   associated with the query, useful for filtering results to a specific customer.
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
     * @returns {Paginator<OrderPlatformModel.OrderListingResponseSchema>}
     * @summary: Get orders.
     * @description: Get a list of orders based on the filters provided.
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
    }): Paginator<OrderPlatformModel.OrderListingResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetRefundConfigurationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponseSchema>}
     *   - Success response
     *
     * @name getRefundConfiguration
     * @summary: refund configuration.
     * @description: refund configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundConfiguration/).
     */
    getRefundConfiguration({ appId, requestHeaders }?: OrderPlatformValidator.GetRefundConfigurationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponseSchema>;
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
     * @returns {Promise<OrderPlatformModel.RefundOptionsSchemaResponseSchema>}
     *   - Success response
     *
     * @name getRefundOptions
     * @summary: Retrieve refund options with amount breakup for  specific shipment and bags.
     * @description: This API can be used for giving the refund amount with available option of MOPs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundOptions/).
     */
    getRefundOptions({ shipmentId, bagIds, state, optinAppId, optinCompanyId, status, requestHeaders, }?: OrderPlatformValidator.GetRefundOptionsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundOptionsSchemaResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetRefundStateConfigurationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetRefundStateConfigurationResponseSchema>}
     *   - Success response
     *
     * @name getRefundStateConfiguration
     * @summary: Refund State Configuration
     * @description: Refund State Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundStateConfiguration/).
     */
    getRefundStateConfiguration({ appId, requestHeaders }?: OrderPlatformValidator.GetRefundStateConfigurationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GetRefundStateConfigurationResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetRoleBasedActionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetActionsResponseSchema>} - Success response
     * @name getRoleBasedActions
     * @summary: Get role-based actions.
     * @description: Retrieve permissible actions based on user roles such as company_admin,  company_operation, customer_care, and read_only. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRoleBasedActions/).
     */
    getRoleBasedActions({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.GetActionsResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetShipmentByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentInfoResponseSchema>} -
     *   Success response
     * @name getShipmentById
     * @summary: Get shipment details
     * @description: Get detailed information about a specific shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentById/).
     */
    getShipmentById({ channelShipmentId, shipmentId, fetchActiveShipment, requestHeaders }?: OrderPlatformValidator.GetShipmentByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInfoResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetShipmentHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponseSchema>} -
     *   Success response
     * @name getShipmentHistory
     * @summary: Get shipment history.
     * @description: Retrieve the shipment history. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentHistory/).
     */
    getShipmentHistory({ shipmentId, bagId, requestHeaders }?: OrderPlatformValidator.GetShipmentHistoryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentHistoryResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetShipmentReasonsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.PlatformShipmentReasonsResponseSchema>}
     *   - Success response
     *
     * @name getShipmentReasons
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentReasons/).
     */
    getShipmentReasons({ shipmentId, bagId, state, requestHeaders }?: OrderPlatformValidator.GetShipmentReasonsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.PlatformShipmentReasonsResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>}
     *   - Success response
     *
     * @name getShipments
     * @summary: List shipments
     * @description: Get Shipments Listing for the company id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipments/).
     */
    getShipments({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, startDate, endDate, dpIds, stores, salesChannels, pageNo, pageSize, fetchActiveShipment, allowInactive, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, sortType, showCrossCompanyData, tags, customerId, orderType, operationalStatus, financialStatus, logisticsStatus, parentViewSlug, childViewSlug, lockStatus, groupEntity, enforceDateFilter, requestHeaders, }?: OrderPlatformValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] - Name of lane for which data is to be fetched
     * @param {string} [arg.bagStatus] - Comma separated values of bag statuses.
     * @param {boolean} [arg.statusOverrideLane] - Use this flag to fetch by
     *   bag_status and override lane.
     * @param {number} [arg.timeToDispatch] - Indicates the time to dispatch.
     * @param {string} [arg.searchType] - Specifies the key used to determine
     *   the type of search being performed.
     * @param {string} [arg.searchValue] - The value corresponding to the search
     *   type, such as a specific shipment ID or order ID.
     * @param {string} [arg.startDate] - The UTC start date in ISO format
     *   (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
     * @param {string} [arg.endDate] - The UTC end date in ISO format
     *   (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
     * @param {string} [arg.dpIds] - A comma-separated list of delivery partner
     *   IDs to filter results by specific delivery partners.
     * @param {string} [arg.stores] - A comma-separated list of store IDs used
     *   to filter results to only those related to specific stores.
     * @param {string} [arg.salesChannels] - A comma-separated list of sales
     *   channel IDs to filter results based on the sales channels involved.
     * @param {number} [arg.pageSize] - Determines the number of results
     *   returned per page.
     * @param {boolean} [arg.fetchActiveShipment] - A boolean flag that
     *   indicates whether to include only active shipments in the results.
     * @param {boolean} [arg.allowInactive] - A flag indicating whether to allow
     *   the inclusion of inactive shipments in the results.
     * @param {boolean} [arg.excludeLockedShipments] - A flag to specify whether
     *   to exclude shipments that are locked from the results.
     * @param {string} [arg.paymentMethods] - A comma-separated list of payment methods.
     * @param {string} [arg.channelShipmentId] - The shipment ID used in the
     *   application, which can be used to reference specific shipments.
     * @param {string} [arg.channelOrderId] - The order ID used in the application.
     * @param {string} [arg.customMeta] - Custom metadata associated with the
     *   query, allowing for additional filtering or information to be passed.
     * @param {string} [arg.orderingChannel] - The channel through which the
     *   order was placed.
     * @param {string} [arg.companyAffiliateTag] - A tag used to identify the
     *   company's affiliation for filtering or reporting purposes.
     * @param {boolean} [arg.myOrders] - A boolean flag indicating whether the
     *   query should return only the user's orders.
     * @param {string} [arg.platformUserId] - The unique identifier of the user
     *   on the platform, useful for filtering orders related to a specific user.
     * @param {string} [arg.sortType] - Determines the sorting order of the
     *   results based on specific criteria.
     * @param {boolean} [arg.showCrossCompanyData] - A flag indicating whether
     *   to include data from both cross-company and non-cross-company orders in
     *   the results.
     * @param {string} [arg.tags] - A comma-separated list of tags associated
     *   with the orders to filter results based on specific characteristics.
     * @param {string} [arg.customerId] - The unique identifier for the customer
     *   associated with the query, useful for filtering results to a specific customer.
     * @param {string} [arg.orderType] - The type of order being queried.
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
     * @returns {Paginator<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>}
     * @summary: List shipments
     * @description: Get Shipments Listing for the company id
     */
    getShipmentsPaginator({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, startDate, endDate, dpIds, stores, salesChannels, pageSize, fetchActiveShipment, allowInactive, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, sortType, showCrossCompanyData, tags, customerId, orderType, operationalStatus, financialStatus, logisticsStatus, parentViewSlug, childViewSlug, lockStatus, groupEntity, enforceDateFilter, }?: {
        lane?: string;
        bagStatus?: string;
        statusOverrideLane?: boolean;
        timeToDispatch?: number;
        searchType?: string;
        searchValue?: string;
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
    }): Paginator<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetStateManagerConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getStateManagerConfig
     * @summary: Retrieves Entity State Manager configuration which includes flags, hooks, and filters, for a specific application within a company's setup.
     * @description: This endpoint retrieves the ESM (Entity State Manager) configuration for a specific application within a company. The retrieval is based on parameters such as application ID, ordering channel, and entity type.
     * The ESM config stores order processing configuration. Each document in the ESM config collection of  Order Management System - OMS's database is a JSON object representing the configuration of a specific application ID. This includes filters, hooks, flags set on different state-transitions.  This configuration is picked and accordingly features are enabled.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getStateManagerConfig/).
     */
    getStateManagerConfig({ appId, orderingChannel, entity, requestHeaders }?: OrderPlatformValidator.GetStateManagerConfigParam, { responseHeaders }?: object): Promise<any>;
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
     * @returns {Promise<OrderPlatformModel.TemplateDownloadResponseSchema>} -
     *   Success response
     * @name getTemplate
     * @summary: Get the Excel or CSV file URL for the Template.
     * @description: Get the Excel or CSV file URL for the Template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getTemplate/).
     */
    getTemplate({ templateName, requestHeaders }?: OrderPlatformValidator.GetTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.TemplateDownloadResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetUserViewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UserViewsResponseSchema>} - Success response
     * @name getUserViews
     * @summary: Get custom view for every unique user cross company pair.
     * @description: Get custom view for every unique user cross company pair. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getUserViews/).
     */
    getUserViews({ showIn, requestHeaders }?: OrderPlatformValidator.GetUserViewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UserViewsResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FiltersResponseSchema>} - Success response
     * @name getfilters
     * @summary: Get filters.
     * @description: Get supported filters for various listing operations - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getfilters/).
     */
    getfilters({ view, groupEntity, requestHeaders }?: OrderPlatformValidator.GetfiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FiltersResponseSchema>;
    /**
     * @param {OrderPlatformValidator.InvalidateShipmentCacheParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.InvalidateShipmentCacheResponseSchema>}
     *   - Success response
     *
     * @name invalidateShipmentCache
     * @summary: Invalidate shipment cache
     * @description: Clear the existing shipment cache data stored in Redis  and serialize the updated data for subsequent use. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/invalidateShipmentCache/).
     */
    invalidateShipmentCache({ body, requestHeaders }?: OrderPlatformValidator.InvalidateShipmentCacheParam, { responseHeaders }?: object): Promise<OrderPlatformModel.InvalidateShipmentCacheResponseSchema>;
    /**
     * @param {OrderPlatformValidator.JobDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.JobDetailsResponseSchema>} - Success response
     * @name jobDetails
     * @summary: Fetches details for the job of the provided batch_id
     * @description: Fetches details for the job of the provided batch_id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/jobDetails/).
     */
    jobDetails({ batchId, requestHeaders }?: OrderPlatformValidator.JobDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.JobDetailsResponseSchema>;
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
     * @returns {Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponseSchema>}
     *   - Success response
     *
     * @name postRefundConfiguration
     * @summary: refund configuration.
     * @description: refund configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postRefundConfiguration/).
     */
    postRefundConfiguration({ appId, body, requestHeaders }?: OrderPlatformValidator.PostRefundConfigurationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponseSchema>;
    /**
     * @param {OrderPlatformValidator.PostRefundStateConfigurationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.PostRefundStateConfigurationResponseSchema>}
     *   - Success response
     *
     * @name postRefundStateConfiguration
     * @summary: Refund State Configuration
     * @description: Refund State Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postRefundStateConfiguration/).
     */
    postRefundStateConfiguration({ appId, body, requestHeaders }?: OrderPlatformValidator.PostRefundStateConfigurationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.PostRefundStateConfigurationResponseSchema>;
    /**
     * @param {OrderPlatformValidator.PostShipmentHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponseSchema>} -
     *   Success response
     * @name postShipmentHistory
     * @summary: Post shipment history.
     * @description: Add history records for a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postShipmentHistory/).
     */
    postShipmentHistory({ body, requestHeaders }?: OrderPlatformValidator.PostShipmentHistoryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentHistoryResponseSchema>;
    /**
     * @param {OrderPlatformValidator.ReassignLocationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.StoreReassignResponseSchema>} -
     *   Success response
     * @name reassignLocation
     * @summary: Reassign location.
     * @description: Change the assigned location for an order or shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/reassignLocation/).
     */
    reassignLocation({ body, requestHeaders }?: OrderPlatformValidator.ReassignLocationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.StoreReassignResponseSchema>;
    /**
     * @param {OrderPlatformValidator.SendSmsNinjaParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SendSmsResponseSchema>} - Success response
     * @name sendSmsNinja
     * @summary: Send SMS via Ninja.
     * @description: Send SMS to customer based on the template that is selected - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendSmsNinja/).
     */
    sendSmsNinja({ body, requestHeaders }?: OrderPlatformValidator.SendSmsNinjaParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SendSmsResponseSchema>;
    /**
     * @param {OrderPlatformValidator.SendUserMobileOTPParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponseSchema>} -
     *   Success response
     * @name sendUserMobileOTP
     * @summary: Send user mobile OTP.
     * @description: Send a one-time OTP to a users mobile device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendUserMobileOTP/).
     */
    sendUserMobileOTP({ body, requestHeaders }?: OrderPlatformValidator.SendUserMobileOTPParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SendUserMobileOtpResponseSchema>;
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
     * @param {OrderPlatformValidator.UpdateOrderConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>}
     *   - Success response
     *
     * @name updateOrderConfig
     * @summary: Update/Insert the Order Configuration for the application.
     * @description: Update/Insert the Order Configuration for the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateOrderConfig/).
     */
    updateOrderConfig({ appId, body, requestHeaders }?: OrderPlatformValidator.UpdateOrderConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>;
    /**
     * @param {OrderPlatformValidator.UpdatePackagingDimensionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdatePackagingDimensionsResponseSchema>}
     *   - Success response
     *
     * @name updatePackagingDimensions
     * @summary: Update packaging dimensions.
     * @description: Modify the dimensions of packaging. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updatePackagingDimensions/).
     */
    updatePackagingDimensions({ body, requestHeaders }?: OrderPlatformValidator.UpdatePackagingDimensionsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UpdatePackagingDimensionsResponseSchema>;
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
     * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponseSchema>}
     *   - Success response
     *
     * @name updateShipmentLock
     * @summary: Update shipment lock.
     * @description: Modify shipment/bag lock and check status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentLock/).
     */
    updateShipmentLock({ body, requestHeaders }?: OrderPlatformValidator.UpdateShipmentLockParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UpdateShipmentLockResponseSchema>;
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
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>}
     *   - Success response
     *
     * @name updateUserViewPosition
     * @summary: Update User view(Parent view and child view) position
     * @description: Update User view(Parent view and child view) position - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateUserViewPosition/).
     */
    updateUserViewPosition({ body, requestHeaders }?: OrderPlatformValidator.UpdateUserViewPositionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>;
    /**
     * @param {OrderPlatformValidator.UpdateUserViewsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>}
     *   - Success response
     *
     * @name updateUserViews
     * @summary: Update custom view for every unique user cross company pair.
     * @description: Update custom view for every unique user cross company pair. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateUserViews/).
     */
    updateUserViews({ body, requestHeaders }?: OrderPlatformValidator.UpdateUserViewsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateUpdateDeleteResponseSchema>;
    /**
     * @param {OrderPlatformValidator.VerifyMobileOTPParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.VerifyOtpResponseSchema>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify Mobile OTP
     * @description: Verify Mobile OTP - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, requestHeaders }?: OrderPlatformValidator.VerifyMobileOTPParam, { responseHeaders }?: object): Promise<OrderPlatformModel.VerifyOtpResponseSchema>;
}
import OrderPlatformValidator = require("./OrderPlatformValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
import Paginator = require("../../common/Paginator");
