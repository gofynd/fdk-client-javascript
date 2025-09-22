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
     * @description: Update ESM config - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/addStateManagerConfig/).
     */
    addStateManagerConfig({ body, requestHeaders }?: OrderPlatformValidator.AddStateManagerConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ConfigUpdatedResponseSchema>;
    /**
     * @param {OrderPlatformValidator.AttachOrderUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AttachOrderUserResponseSchema>} -
     *   Success response
     * @name attachOrderUser
     * @summary: Attach order to a user
     * @description: Attach an anonymous order to a customer based on OTP verification - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/attachOrderUser/).
     */
    attachOrderUser({ body, requestHeaders }?: OrderPlatformValidator.AttachOrderUserParam, { responseHeaders }?: object): Promise<OrderPlatformModel.AttachOrderUserResponseSchema>;
    /**
     * @param {OrderPlatformValidator.BulkListingParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkListingResponseSchema>} - Success response
     * @name bulkListing
     * @summary: Lists bulk operations
     * @description: Get list of bulk operation that is initiated and completed as per the filters provided - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/bulkListing/).
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
     * @summary: Upload bulk state transitions file
     * @description: Performs state transisiton in bulk using the CSV or excel file for the given shipments. The bulk transition CSV or excel template can be downloaded using the seller template download method. Current supported format is excel and CSV. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/bulkStateTransistion/).
     */
    bulkStateTransistion({ body, requestHeaders }?: OrderPlatformValidator.BulkStateTransistionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkStateTransistionResponseSchema>;
    /**
     * @param {OrderPlatformValidator.CheckOrderStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name checkOrderStatus
     * @summary: Debug order
     * @description: Used to verify the status of order. It queries error logs, resyncs the shipments if there was an issue with sync etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/checkOrderStatus/).
     */
    checkOrderStatus({ body, requestHeaders }?: OrderPlatformValidator.CheckOrderStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.CreateChannelConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateChannelConfigResponseSchema>}
     *   - Success response
     *
     * @name createChannelConfig
     * @summary: Create channel configuration
     * @description: Set up configuration for a channel specific to orders which has implications over how the order fulfilment happens in a channel - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/createChannelConfig/).
     */
    createChannelConfig({ body, requestHeaders }?: OrderPlatformValidator.CreateChannelConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateChannelConfigResponseSchema>;
    /**
     * @param {OrderPlatformValidator.CreateOrderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateOrderResponseSchema>} - Success response
     * @name createOrder
     * @summary: Create order
     * @description: Creates an order - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/createOrder/).
     */
    createOrder({ body, xOrderingSource, requestHeaders }?: OrderPlatformValidator.CreateOrderParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateOrderResponseSchema>;
    /**
     * @param {OrderPlatformValidator.DispatchManifestsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SuccessResponseSchema>} - Success response
     * @name dispatchManifests
     * @summary: Dispatch manifest
     * @description: Updates the status of the manifest to processed and change the status of the shipments in the manifest to dispatch status - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/dispatchManifests/).
     */
    dispatchManifests({ body, requestHeaders }?: OrderPlatformValidator.DispatchManifestsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SuccessResponseSchema>;
    /**
     * @param {OrderPlatformValidator.DownloadBulkActionTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FileResponseSchema>} - Success response
     * @name downloadBulkActionTemplate
     * @summary: Download bulk template
     * @description: Download bulk seller templates which can be used to perform operations in bulk - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/downloadBulkActionTemplate/).
     */
    downloadBulkActionTemplate({ templateSlug, requestHeaders }?: OrderPlatformValidator.DownloadBulkActionTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FileResponseSchema>;
    /**
     * @param {OrderPlatformValidator.DownloadLanesReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkReportsDownloadResponseSchema>}
     *   - Success response
     *
     * @name downloadLanesReport
     * @summary: Download Lane report
     * @description: Downloads shipments/orders present in the provided lane - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/downloadLanesReport/).
     */
    downloadLanesReport({ body, requestHeaders }?: OrderPlatformValidator.DownloadLanesReportParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkReportsDownloadResponseSchema>;
    /**
     * @param {OrderPlatformValidator.EInvoiceRetryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.EInvoiceRetryResponseSchema>} -
     *   Success response
     * @name eInvoiceRetry
     * @summary: Retry E-invoice
     * @description: Reattempt the generation of an E-invoice - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/eInvoiceRetry/).
     */
    eInvoiceRetry({ body, requestHeaders }?: OrderPlatformValidator.EInvoiceRetryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.EInvoiceRetryResponseSchema>;
    /**
     * @param {OrderPlatformValidator.FailedOrderLogDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FailedOrderLogDetails>} - Success response
     * @name failedOrderLogDetails
     * @summary: Get failed order log
     * @description: Get the exact error trace from the log Id provided in the failed order list API response  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/failedOrderLogDetails/).
     */
    failedOrderLogDetails({ logId, requestHeaders }?: OrderPlatformValidator.FailedOrderLogDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FailedOrderLogDetails>;
    /**
     * @param {OrderPlatformValidator.FailedOrderLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FailedOrderLogs>} - Success response
     * @name failedOrderLogs
     * @summary: List failed order logs
     * @description: Get failed order logs listing for filters based on order Id, user contact number, user email Id and sales channel Id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/failedOrderLogs/).
     */
    failedOrderLogs({ applicationId, pageNo, pageSize, searchType, searchValue, requestHeaders, }?: OrderPlatformValidator.FailedOrderLogsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FailedOrderLogs>;
    /**
     * @param {OrderPlatformValidator.FetchRefundModeConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RefundModeConfigResponsePayload>} -
     *   Success response
     * @name fetchRefundModeConfig
     * @summary: List refund modes
     * @description: Get list of refund modes to trigger refunds - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/fetchRefundModeConfig/).
     */
    fetchRefundModeConfig({ body, requestHeaders }?: OrderPlatformValidator.FetchRefundModeConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundModeConfigResponsePayload>;
    /**
     * @param {OrderPlatformValidator.GenerateInvoiceIDParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GenerateInvoiceIDResponseSchema>} -
     *   Success response
     * @name generateInvoiceID
     * @summary: Generate and attach invoice Id
     * @description: Generate and attach Invoice Ids against shipments. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/generateInvoiceID/).
     */
    generateInvoiceID({ invoiceType, body, requestHeaders }?: OrderPlatformValidator.GenerateInvoiceIDParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GenerateInvoiceIDResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponseSchema>}
     *   - Success response
     *
     * @name generatePOSReceiptByOrderId
     * @summary: Generate POS receipt by order Id
     * @description: Create a point-of-sale (POS) receipt for a specific order by order Id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/generatePOSReceiptByOrderId/).
     */
    generatePOSReceiptByOrderId({ orderId, shipmentId, documentType, requestHeaders }?: OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GeneratePosOrderReceiptResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GenerateProcessManifestParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestResponseSchema>} - Success response
     * @name generateProcessManifest
     * @summary: Process Order Manifest
     * @description: Endpoint to save and process order manifests. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/generateProcessManifest/).
     */
    generateProcessManifest({ body, requestHeaders }?: OrderPlatformValidator.GenerateProcessManifestParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetAllowedStateTransitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RoleBaseStateTransitionMapping>} -
     *   Success response
     * @name getAllowedStateTransition
     * @summary: Get allowed state transition
     * @description: Retrieve next possible states based on logged in user's role - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getAllowedStateTransition/).
     */
    getAllowedStateTransition({ status, orderingChannel, orderingSource, requestHeaders }?: OrderPlatformValidator.GetAllowedStateTransitionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RoleBaseStateTransitionMapping>;
    /**
     * @param {OrderPlatformValidator.GetAllowedTemplatesForBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AllowedTemplatesResponseSchema>} -
     *   Success response
     * @name getAllowedTemplatesForBulk
     * @summary: List bulk operation templates
     * @description: Gets all the allowed templates to perform bulk operations. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getAllowedTemplatesForBulk/).
     */
    getAllowedTemplatesForBulk({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.AllowedTemplatesResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetAnnouncementsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AnnouncementsResponseSchema>} -
     *   Success response
     * @name getAnnouncements
     * @summary: List announcements
     * @description: Retrieve announcements related to orders fulfilment configured by platform or company admin - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getAnnouncements/).
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
     * @summary: Get bag
     * @description: Retrieve detailed information about a specific bag - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getBagById/).
     */
    getBagById({ bagId, channelBagId, channelId, requestHeaders }?: OrderPlatformValidator.GetBagByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BagDetailsPlatformResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetBagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponseSchema>} -
     *   Success response
     * @name getBags
     * @summary: List bags
     * @description: Get paginated list of bags based on provided filters - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getBags/).
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
     * @summary: List supported templates
     * @description: Get list of templates so that users can download the required template - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getBulkActionTemplate/).
     */
    getBulkActionTemplate({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkActionTemplateResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetBulkShipmentExcelFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FileResponseSchema>} - Success response
     * @name getBulkShipmentExcelFile
     * @summary: Generate the report
     * @description: Generates the report which can be filled and uploaded to perform the bulk operation based on the filters provided - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getBulkShipmentExcelFile/).
     */
    getBulkShipmentExcelFile({ salesChannels, dpIds, startDate, endDate, stores, tags, bagStatus, paymentMethods, fileType, timeToDispatch, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetBulkShipmentExcelFileParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FileResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetChannelConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateChannelConfigData>} - Success response
     * @name getChannelConfig
     * @summary: Get channel configuration
     * @description: Retrieve configuration settings specific to orders for a channel - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getChannelConfig/).
     */
    getChannelConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateChannelConfigData>;
    /**
     * @param {OrderPlatformValidator.GetFileByStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.JobFailedResponseSchema>} - Success response
     * @name getFileByStatus
     * @summary: Download file used for Bulk operation
     * @description: Get the file download URL used for performing bulk operation - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getFileByStatus/).
     */
    getFileByStatus({ batchId, status, fileType, reportType, requestHeaders }?: OrderPlatformValidator.GetFileByStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.JobFailedResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetLaneConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.LaneConfigResponseSchema>} - Success response
     * @name getLaneConfig
     * @summary: Get lane configuration
     * @description: Get configuration settings for lanes - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getLaneConfig/).
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, paymentMode, bagStatus, searchType, searchValue, tags, timeToDispatch, paymentMethods, myOrders, showCrossCompanyData, orderType, requestHeaders, }?: OrderPlatformValidator.GetLaneConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.LaneConfigResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetManifestDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestDetails>} - Success response
     * @name getManifestDetails
     * @summary: Get a manifest
     * @description: Get details regarding a manifest which can be used to perform further actions on it - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getManifestDetails/).
     */
    getManifestDetails({ manifestId, dpIds, endDate, startDate, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetManifestDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestDetails>;
    /**
     * @param {OrderPlatformValidator.GetManifestShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestShipmentListing>} - Success response
     * @name getManifestShipments
     * @summary: List manifest shipments
     * @description: Get list of shipments tagged to that manifest, the user can also search the shipments on the basis of shipment Id, order Id and AWB number - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getManifestShipments/).
     */
    getManifestShipments({ dpIds, stores, toDate, fromDate, dpName, salesChannels, searchType, searchValue, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetManifestShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestShipmentListing>;
    /**
     * @param {OrderPlatformValidator.GetManifestfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestFiltersResponseSchema>} -
     *   Success response
     * @name getManifestfilters
     * @summary: List filters
     * @description: Get supported filter for listing manifests - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getManifestfilters/).
     */
    getManifestfilters({ view, requestHeaders }?: OrderPlatformValidator.GetManifestfiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestFiltersResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetManifestsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestList>} - Success response
     * @name getManifests
     * @summary: List manifests
     * @description: Get a list of manifest as per the filter provided - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getManifests/).
     */
    getManifests({ status, startDate, endDate, searchType, storeId, searchValue, dpIds, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetManifestsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestList>;
    /**
     * @param {OrderPlatformValidator.GetOrderByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderDetailsResponseSchema>} -
     *   Success response
     * @name getOrderById
     * @summary: Get order
     * @description: Get detailed information about a specific order - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getOrderById/).
     */
    getOrderById({ orderId, myOrders, allowInactive, requestHeaders }?: OrderPlatformValidator.GetOrderByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderDetailsResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetOrdersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderListingResponseSchema>} -
     *   Success response
     * @name getOrders
     * @summary: List orders
     * @description: Get a list of orders based on the filters provided. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getOrders/).
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, myOrders, showCrossCompanyData, customerId, orderType, allowInactive, groupEntity, enforceDateFilter, fulfillmentType, requestHeaders, }?: OrderPlatformValidator.GetOrdersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderListingResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] - Lane refers to a section where orders are
     *   assigned, indicating its grouping.
     * @param {string} [arg.searchType] - Search_type refers to the field that
     *   will be used as the target for the search operation.
     * @param {string} [arg.bagStatus] - Bag_status refers to status of the
     *   entity. Filters orders based on the status.
     * @param {number} [arg.timeToDispatch] - Time_to_dispatch refers to
     *   estimated SLA time.
     * @param {string} [arg.paymentMethods] - Comma separated values of payment
     *   methods that were used to place order.
     * @param {string} [arg.tags] - Tags refers to additional descriptive labels
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
     * @param {string} [arg.customMeta] -
     * @param {boolean} [arg.myOrders] -
     * @param {boolean} [arg.showCrossCompanyData] - Flag to view cross &
     *   non-cross company order
     * @param {string} [arg.customerId] - The unique identifier for the customer
     *   associated with the query, useful for filtering results to a specific customer.
     * @param {string} [arg.orderType] -
     * @param {boolean} [arg.allowInactive] - Flag indicating whether inactive
     *   shipments are allowed
     * @param {string} [arg.groupEntity] - Defines the grouping criterion for
     *   retrieving shipments or orders. It specifies whether the results should
     *   be organized based on shipment groups or order groups. For example,
     *   using 'shipments' groups results by shipment, while an invalid value
     *   like 'abcd' may not be recognized, leading to errors or default behavior.
     * @param {boolean} [arg.enforceDateFilter] - Applies a date filter for
     *   listing orders. This is useful when fetching data for a specific date
     *   range while performing searches.
     * @param {string} [arg.fulfillmentType] - Define the Fulfillment Type for
     *   Listing Orders, This is use when we want to get list of shipments or
     *   orders by cross store or cross company or fulfilling Store (by
     *   default), this is also depends on the login user accessType and store access
     * @returns {Paginator<OrderPlatformModel.OrderListingResponseSchema>}
     * @summary: List orders
     * @description: Get a list of orders based on the filters provided.
     */
    getOrdersPaginator({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageSize, isPrioritySort, customMeta, myOrders, showCrossCompanyData, customerId, orderType, allowInactive, groupEntity, enforceDateFilter, fulfillmentType, }?: {
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
        allowInactive?: boolean;
        groupEntity?: string;
        enforceDateFilter?: boolean;
        fulfillmentType?: string;
    }): Paginator<OrderPlatformModel.OrderListingResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetRoleBasedActionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetActionsResponseSchema>} - Success response
     * @name getRoleBasedActions
     * @summary: Get role-based actions
     * @description: Retrieve permissible actions based on user roles such as company_admin,  company_operation, customer_care, and read_only. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getRoleBasedActions/).
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
     * @description: Get detailed information about a specific shipment - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getShipmentById/).
     */
    getShipmentById({ channelShipmentId, shipmentId, fetchActiveShipment, allowInactive, requestHeaders, }?: OrderPlatformValidator.GetShipmentByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInfoResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetShipmentHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponseSchema>} -
     *   Success response
     * @name getShipmentHistory
     * @summary: Get a shipment's history
     * @description: Get the history of the shipment - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getShipmentHistory/).
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
     * @summary: List bag cancellation reasons
     * @description: Get reasons to perform full or partial cancellation of a bag - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getShipmentReasons/).
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
     * @description: Get a list of shipments based on the filters provided - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getShipments/).
     */
    getShipments({ lane, bagStatus, statusAssigned, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, startDate, endDate, statusAssignedStartDate, statusAssignedEndDate, dpIds, stores, salesChannels, pageNo, pageSize, fetchActiveShipment, allowInactive, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, sortType, showCrossCompanyData, tags, customerId, orderType, groupEntity, enforceDateFilter, fulfillmentType, requestHeaders, }?: OrderPlatformValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] - Name of lane for which data is to be fetched
     * @param {string} [arg.bagStatus] - Comma separated values of bag statuses.
     * @param {string} [arg.statusAssigned] - Used to filter shipments based on
     *   status present in shipment_status_history. For more information on
     *   these statuses, refer to the Fynd Partners documentation.
     * @param {boolean} [arg.statusOverrideLane] - Use this flag to fetch by
     *   bag_status and override lane.
     * @param {number} [arg.timeToDispatch] - Indicates the time to dispatch.
     * @param {string} [arg.searchType] - Specifies the key used to determine
     *   the type of search being performed.
     * @param {string} [arg.searchValue] - The value corresponding to the search
     *   type, such as a specific shipment ID or order ID.
     * @param {string} [arg.fromDate] - Start Date in DD-MM-YYYY format
     * @param {string} [arg.toDate] - End Date in DD-MM-YYYY format
     * @param {string} [arg.startDate] - The UTC start date in ISO format
     *   (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
     * @param {string} [arg.endDate] - The UTC end date in ISO format
     *   (YYYY-MM-DDTHH:MM:SSZ) for filtering results.
     * @param {string} [arg.statusAssignedStartDate] - Specifies the starting
     *   UTC date and time (in ISO format, YYYY-MM-DDTHH:MM:SSZ) to define the
     *   lower boundary for filtering shipments based on the `created_at`
     *   timestamp of statuses in the shipment's status history. It allows
     *   filtering statuses that were created within a specific time range.
     * @param {string} [arg.statusAssignedEndDate] - Specifies the ending UTC
     *   date and time (in ISO format, YYYY-MM-DDTHH:MM:SSZ) to define the upper
     *   boundary for filtering shipments based on the `created_at` timestamp of
     *   statuses in the shipment's status history.
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
     * @param {string} [arg.groupEntity] - Defines the grouping criterion for
     *   retrieving shipments or orders. It specifies whether the results should
     *   be organized based on shipment groups or order groups. For example,
     *   using 'shipments' groups results by shipment, while an invalid value
     *   like 'abcd' may not be recognized, leading to errors or default behavior.
     * @param {boolean} [arg.enforceDateFilter] - Applies a date filter for
     *   listing shipments. This is useful when fetching data for a specific
     *   date range while performing searches.
     * @param {string} [arg.fulfillmentType] - Define the Fulfillment Type for
     *   Listing Orders, This is use when we want to get list of shipments or
     *   orders by cross store or cross company or fulfilling Store (by
     *   default), this is also depends on the login user accessType and store access
     * @returns {Paginator<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>}
     * @summary: List shipments
     * @description: Get a list of shipments based on the filters provided
     */
    getShipmentsPaginator({ lane, bagStatus, statusAssigned, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, startDate, endDate, statusAssignedStartDate, statusAssignedEndDate, dpIds, stores, salesChannels, pageSize, fetchActiveShipment, allowInactive, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, sortType, showCrossCompanyData, tags, customerId, orderType, groupEntity, enforceDateFilter, fulfillmentType, }?: {
        lane?: string;
        bagStatus?: string;
        statusAssigned?: string;
        statusOverrideLane?: boolean;
        timeToDispatch?: number;
        searchType?: string;
        searchValue?: string;
        fromDate?: string;
        toDate?: string;
        startDate?: string;
        endDate?: string;
        statusAssignedStartDate?: string;
        statusAssignedEndDate?: string;
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
        groupEntity?: string;
        enforceDateFilter?: boolean;
        fulfillmentType?: string;
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
     *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getStateManagerConfig/).
     */
    getStateManagerConfig({ appId, orderingChannel, orderingSource, entity, requestHeaders }?: OrderPlatformValidator.GetStateManagerConfigParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {OrderPlatformValidator.GetStateTransitionMapParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BagStateTransitionMap>} - Success response
     * @name getStateTransitionMap
     * @summary: Get state transition map
     * @description: Retrieve a map of state transitions for orders - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getStateTransitionMap/).
     */
    getStateTransitionMap({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.BagStateTransitionMap>;
    /**
     * @param {OrderPlatformValidator.GetTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.TemplateDownloadResponseSchema>} -
     *   Success response
     * @name getTemplate
     * @summary: Download bulk operation templates
     * @description: Get the excel or CSV file URL for the template. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getTemplate/).
     */
    getTemplate({ templateName, requestHeaders }?: OrderPlatformValidator.GetTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.TemplateDownloadResponseSchema>;
    /**
     * @param {OrderPlatformValidator.GetfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FiltersResponseSchema>} - Success response
     * @name getfilters
     * @summary: List filters
     * @description: Get supported filters for various listing operations - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getfilters/).
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
     * @description: Clear the existing shipment cache data stored in Redis  and serialize the updated data for subsequent use. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/invalidateShipmentCache/).
     */
    invalidateShipmentCache({ body, requestHeaders }?: OrderPlatformValidator.InvalidateShipmentCacheParam, { responseHeaders }?: object): Promise<OrderPlatformModel.InvalidateShipmentCacheResponseSchema>;
    /**
     * @param {OrderPlatformValidator.JobDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.JobDetailsResponseSchema>} - Success response
     * @name jobDetails
     * @summary: Get bulk operation details
     * @description: Fetches details of the job for the provided batch Id - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/jobDetails/).
     */
    jobDetails({ batchId, requestHeaders }?: OrderPlatformValidator.JobDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.JobDetailsResponseSchema>;
    /**
     * @param {OrderPlatformValidator.OrderUpdateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ResponseDetail>} - Success response
     * @name orderUpdate
     * @summary: Update an order
     * @description: Used to update an order's meta information. These meta information can be accessed via order or shipment details API. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/orderUpdate/).
     */
    orderUpdate({ body, requestHeaders }?: OrderPlatformValidator.OrderUpdateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ResponseDetail>;
    /**
     * @param {OrderPlatformValidator.PostShipmentHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponseSchema>} -
     *   Success response
     * @name postShipmentHistory
     * @summary: Create shipment history
     * @description: Used to add logs in history for a bag for the provided Shipment ID - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/postShipmentHistory/).
     */
    postShipmentHistory({ body, requestHeaders }?: OrderPlatformValidator.PostShipmentHistoryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentHistoryResponseSchema>;
    /**
     * @param {OrderPlatformValidator.ReassignLocationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.StoreReassignResponseSchema>} -
     *   Success response
     * @name reassignLocation
     * @summary: Reassign location
     * @description: Reassign the shipment to a another location and update its status to 'Store Reassigned.' - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/reassignLocation/).
     */
    reassignLocation({ body, requestHeaders }?: OrderPlatformValidator.ReassignLocationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.StoreReassignResponseSchema>;
    /**
     * @param {OrderPlatformValidator.SendSmsNinjaParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BaseResponseSchema>} - Success response
     * @name sendSmsNinja
     * @summary: Send SMS
     * @description: Send SMS to customer based on the template that is selected - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/sendSmsNinja/).
     */
    sendSmsNinja({ body, requestHeaders }?: OrderPlatformValidator.SendSmsNinjaParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BaseResponseSchema>;
    /**
     * @param {OrderPlatformValidator.SendUserMobileOTPParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponseSchema>} -
     *   Success response
     * @name sendUserMobileOTP
     * @summary: Send user mobile OTP
     * @description: Send a one-time OTP to a customer mobile number - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/sendUserMobileOTP/).
     */
    sendUserMobileOTP({ body, requestHeaders }?: OrderPlatformValidator.SendUserMobileOTPParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SendUserMobileOtpResponseSchema>;
    /**
     * @param {OrderPlatformValidator.TrackShipmentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CourierPartnerTrackingResponseSchema>}
     *   - Success response
     *
     * @name trackShipment
     * @summary: Track shipment
     * @description: Retrieve courier partner tracking details for a given shipment Id or AWB number - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/trackShipment/).
     */
    trackShipment({ shipmentId, awb, pageNo, pageSize, requestHeaders }?: OrderPlatformValidator.TrackShipmentParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CourierPartnerTrackingResponseSchema>;
    /**
     * @param {OrderPlatformValidator.UpdateAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BaseResponseSchema>} - Success response
     * @name updateAddress
     * @summary: Update shipment address
     * @description: Update the address details of an existing shipment based on the provided address_category. This operation allows the modification of critical shipment details, potentially affecting delivery/billing accuracy and customer communication. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/updateAddress/).
     */
    updateAddress({ shipmentId, body, requestHeaders }?: OrderPlatformValidator.UpdateAddressParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BaseResponseSchema>;
    /**
     * @param {OrderPlatformValidator.UpdatePackagingDimensionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdatePackagingDimensionsResponseSchema>}
     *   - Success response
     *
     * @name updatePackagingDimensions
     * @summary: Update packaging dimensions
     * @description: Used to modify the packaging dimension of a shipment - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/updatePackagingDimensions/).
     */
    updatePackagingDimensions({ body, requestHeaders }?: OrderPlatformValidator.UpdatePackagingDimensionsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UpdatePackagingDimensionsResponseSchema>;
    /**
     * @param {OrderPlatformValidator.UpdatePaymentInfoParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name updatePaymentInfo
     * @summary: Update payment details for an order, its shipments and its bags.
     * @description: Updates the payment mode for an order, its shipments and its bags. This endpoint allows for modifying payment methods, and associated details but not amount. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/updatePaymentInfo/).
     */
    updatePaymentInfo({ body, requestHeaders }?: OrderPlatformValidator.UpdatePaymentInfoParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentLockParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponseSchema>}
     *   - Success response
     *
     * @name updateShipmentLock
     * @summary: Update a shipment lock
     * @description: Modify shipment/bag lock status and update lock/unlock messages. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/updateShipmentLock/).
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
     * @summary: Update a shipment's status
     * @description: It is used for updating the shipment in the following scenarios:\n• Full Confirmation\n• Partial Confirmation\n• Change the status of a shipment\n• Full Cancellation\n• Partial Cancellation\n• Assign the shipment to DP. Click <a href=\"https://docs.fynd.com/partners/commerce/miscellaneous/updateShipmentStatus\">here</a> to get the example payload. Also, refer to the <a href=\"https://docs.fynd.com/partners/commerce/getting-started/oms-states/\">OMS Sates</a> for the complete status list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/updateShipmentStatus/).
     */
    updateShipmentStatus({ body, requestHeaders }?: OrderPlatformValidator.UpdateShipmentStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentTrackingParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CourierPartnerTrackingDetails>} -
     *   Success response
     * @name updateShipmentTracking
     * @summary: Update shipment tracking
     * @description: Modify courier partner tracking details for a given shipment Id or AWB number - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/updateShipmentTracking/).
     */
    updateShipmentTracking({ body, requestHeaders }?: OrderPlatformValidator.UpdateShipmentTrackingParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CourierPartnerTrackingDetails>;
    /**
     * @param {OrderPlatformValidator.UploadConsentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SuccessResponseSchema>} - Success response
     * @name uploadConsents
     * @summary: Upload consent
     * @description: Uploads the consent signed by courier partner and seller to keep records - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/uploadConsents/).
     */
    uploadConsents({ body, requestHeaders }?: OrderPlatformValidator.UploadConsentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SuccessResponseSchema>;
    /**
     * @param {OrderPlatformValidator.VerifyMobileOTPParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.VerifyOtpResponseSchema>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify mobile OTP
     * @description: Perform OTP verification to link a user to an anonymous order - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, requestHeaders }?: OrderPlatformValidator.VerifyMobileOTPParam, { responseHeaders }?: object): Promise<OrderPlatformModel.VerifyOtpResponseSchema>;
}
import OrderPlatformValidator = require("./OrderPlatformValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
import Paginator = require("../../common/Paginator");
