export = Order;
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {OrderPlatformValidator.AddStateManagerConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ConfigUpdatedResponse>} - Success response
     * @name addStateManagerConfig
     * @summary: Allows esm config updation
     * @description: Update ESM config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/addStateManagerConfig/).
     */
    addStateManagerConfig({ body, requestHeaders }?: OrderPlatformValidator.AddStateManagerConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ConfigUpdatedResponse>;
    /**
     * @param {OrderPlatformValidator.AttachOrderUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AttachOrderUserResponse>} - Success response
     * @name attachOrderUser
     * @summary: Attach order to a user
     * @description: Attach an anonymous order to a customer based on OTP verification - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/attachOrderUser/).
     */
    attachOrderUser({ body, requestHeaders }?: OrderPlatformValidator.AttachOrderUserParam, { responseHeaders }?: object): Promise<OrderPlatformModel.AttachOrderUserResponse>;
    /**
     * @param {OrderPlatformValidator.BulkListingParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkListingResponse>} - Success response
     * @name bulkListing
     * @summary: Lists bulk operations
     * @description: Get list of bulk operation that is initiated and completed as per the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkListing/).
     */
    bulkListing({ pageSize, pageNo, startDate, endDate, status, bulkActionType, searchKey, requestHeaders, }?: OrderPlatformValidator.BulkListingParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkListingResponse>;
    /**
     * @param {OrderPlatformValidator.BulkStateTransistionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkStateTransistionResponse>} -
     *   Success response
     * @name bulkStateTransistion
     * @summary: Upload bulk state transitions file
     * @description: Performs state transisiton in bulk using the CSV or excel file for the given shipments. The bulk transition CSV or excel template can be downloaded using the seller template download method. Current supported format is excel and CSV. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkStateTransistion/).
     */
    bulkStateTransistion({ body, requestHeaders }?: OrderPlatformValidator.BulkStateTransistionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkStateTransistionResponse>;
    /**
     * @param {OrderPlatformValidator.CheckOrderStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name checkOrderStatus
     * @summary: Debug order
     * @description: Used to verify the status of order. It queries error logs, resyncs the shipments if there was an issue with sync etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/checkOrderStatus/).
     */
    checkOrderStatus({ body, requestHeaders }?: OrderPlatformValidator.CheckOrderStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.CreateOrderParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateOrderResponse>} - Success response
     * @name createOrder
     * @summary: Create order
     * @description: Creates an order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createOrder/).
     */
    createOrder({ body, requestHeaders }?: OrderPlatformValidator.CreateOrderParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CreateOrderResponse>;
    /**
     * @param {OrderPlatformValidator.DispatchManifestsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name dispatchManifests
     * @summary: Dispatch manifest
     * @description: Updates the status of the manifest to processed and change the status of the shipments in the manifest to dispatch status - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/dispatchManifests/).
     */
    dispatchManifests({ body, requestHeaders }?: OrderPlatformValidator.DispatchManifestsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.DownloadBulkActionTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name downloadBulkActionTemplate
     * @summary: Download bulk template
     * @description: Download bulk seller templates which can be used to perform operations in bulk - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadBulkActionTemplate/).
     */
    downloadBulkActionTemplate({ templateSlug, requestHeaders }?: OrderPlatformValidator.DownloadBulkActionTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.DownloadLanesReportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkReportsDownloadResponse>} -
     *   Success response
     * @name downloadLanesReport
     * @summary: Download Lane report
     * @description: Downloads shipments/orders present in the provided lane - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadLanesReport/).
     */
    downloadLanesReport({ body, requestHeaders }?: OrderPlatformValidator.DownloadLanesReportParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkReportsDownloadResponse>;
    /**
     * @param {OrderPlatformValidator.EInvoiceRetryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.EInvoiceRetryResponse>} - Success response
     * @name eInvoiceRetry
     * @summary: Retry E-invoice
     * @description: Reattempt the generation of an E-invoice - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/eInvoiceRetry/).
     */
    eInvoiceRetry({ body, requestHeaders }?: OrderPlatformValidator.EInvoiceRetryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.EInvoiceRetryResponse>;
    /**
     * @param {OrderPlatformValidator.FailedOrderLogDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FailedOrderLogDetails>} - Success response
     * @name failedOrderLogDetails
     * @summary: Get failed order log
     * @description: Get the exact error trace from the log Id provided in the failed order list API response  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/failedOrderLogDetails/).
     */
    failedOrderLogDetails({ logId, requestHeaders }?: OrderPlatformValidator.FailedOrderLogDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FailedOrderLogDetails>;
    /**
     * @param {OrderPlatformValidator.FailedOrderLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FailedOrderLogs>} - Success response
     * @name failedOrderLogs
     * @summary: List failed order logs
     * @description: Get failed order logs listing for filters based on order Id, user contact number, user email Id and sales channel Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/failedOrderLogs/).
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
     * @description: Get list of refund modes to trigger refunds - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchRefundModeConfig/).
     */
    fetchRefundModeConfig({ body, requestHeaders }?: OrderPlatformValidator.FetchRefundModeConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RefundModeConfigResponsePayload>;
    /**
     * @param {OrderPlatformValidator.GenerateInvoiceIDParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GenerateInvoiceIDResponse>} - Success response
     * @name generateInvoiceID
     * @summary: Generate and attach invoice Id
     * @description: Generate and attach Invoice Ids against shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generateInvoiceID/).
     */
    generateInvoiceID({ invoiceType, body, requestHeaders }?: OrderPlatformValidator.GenerateInvoiceIDParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GenerateInvoiceIDResponse>;
    /**
     * @param {OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>} -
     *   Success response
     * @name generatePOSReceiptByOrderId
     * @summary: Generate POS receipt by order Id
     * @description: Create a point-of-sale (POS) receipt for a specific order by order Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generatePOSReceiptByOrderId/).
     */
    generatePOSReceiptByOrderId({ orderId, shipmentId, documentType, requestHeaders }?: OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>;
    /**
     * @param {OrderPlatformValidator.GenerateProcessManifestParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestResponse>} - Success response
     * @name generateProcessManifest
     * @summary: Process Order Manifest
     * @description: Endpoint to save and process order manifests. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generateProcessManifest/).
     */
    generateProcessManifest({ body, requestHeaders }?: OrderPlatformValidator.GenerateProcessManifestParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestResponse>;
    /**
     * @param {OrderPlatformValidator.GetAllowedStateTransitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RoleBaseStateTransitionMapping>} -
     *   Success response
     * @name getAllowedStateTransition
     * @summary: Get allowed state transition
     * @description: Retrieve next possible states based on logged in user's role - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedStateTransition/).
     */
    getAllowedStateTransition({ orderingChannel, status, requestHeaders }?: OrderPlatformValidator.GetAllowedStateTransitionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RoleBaseStateTransitionMapping>;
    /**
     * @param {OrderPlatformValidator.GetAllowedTemplatesForBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AllowedTemplatesResponse>} - Success response
     * @name getAllowedTemplatesForBulk
     * @summary: List bulk operation templates
     * @description: Gets all the allowed templates to perform bulk operations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedTemplatesForBulk/).
     */
    getAllowedTemplatesForBulk({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.AllowedTemplatesResponse>;
    /**
     * @param {OrderPlatformValidator.GetAnnouncementsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AnnouncementsResponse>} - Success response
     * @name getAnnouncements
     * @summary: List announcements
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
     * @summary: Get bag
     * @description: Retrieve detailed information about a specific bag - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBagById/).
     */
    getBagById({ bagId, channelBagId, channelId, requestHeaders }?: OrderPlatformValidator.GetBagByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BagDetailsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.GetBagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponse>} - Success response
     * @name getBags
     * @summary: List bags
     * @description: Get paginated list of bags based on provided filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBags/).
     */
    getBags({ bagIds, shipmentIds, orderIds, channelBagIds, channelShipmentIds, channelOrderIds, channelId, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetBagsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.GetBagsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.GetBulkActionTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkActionTemplateResponse>} -
     *   Success response
     * @name getBulkActionTemplate
     * @summary: List supported templates
     * @description: Get list of templates so that users can download the required template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkActionTemplate/).
     */
    getBulkActionTemplate({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.BulkActionTemplateResponse>;
    /**
     * @param {OrderPlatformValidator.GetBulkShipmentExcelFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name getBulkShipmentExcelFile
     * @summary: Generate the report
     * @description: Generates the report which can be filled and uploaded to perform the bulk operation based on the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkShipmentExcelFile/).
     */
    getBulkShipmentExcelFile({ salesChannels, dpIds, startDate, endDate, stores, tags, bagStatus, paymentMethods, fileType, timeToDispatch, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetBulkShipmentExcelFileParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.GetFileByStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.JobFailedResponse>} - Success response
     * @name getFileByStatus
     * @summary: Download file used for Bulk operation
     * @description: Get the file download URL used for performing bulk operation - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getFileByStatus/).
     */
    getFileByStatus({ batchId, status, fileType, reportType, requestHeaders }?: OrderPlatformValidator.GetFileByStatusParam, { responseHeaders }?: object): Promise<OrderPlatformModel.JobFailedResponse>;
    /**
     * @param {OrderPlatformValidator.GetLaneConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.LaneConfigResponse>} - Success response
     * @name getLaneConfig
     * @summary: Get lane configuration
     * @description: Get configuration settings for lanes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getLaneConfig/).
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, paymentMode, bagStatus, searchType, searchValue, tags, timeToDispatch, paymentMethods, myOrders, showCrossCompanyData, orderType, requestHeaders, }?: OrderPlatformValidator.GetLaneConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.LaneConfigResponse>;
    /**
     * @param {OrderPlatformValidator.GetManifestDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestDetails>} - Success response
     * @name getManifestDetails
     * @summary: Get a manifest
     * @description: Get details regarding a manifest which can be used to perform further actions on it - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestDetails/).
     */
    getManifestDetails({ manifestId, dpIds, endDate, startDate, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetManifestDetailsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestDetails>;
    /**
     * @param {OrderPlatformValidator.GetManifestShipmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestShipmentListing>} - Success response
     * @name getManifestShipments
     * @summary: List manifest shipments
     * @description: Get list of shipments tagged to that manifest, the user can also search the shipments on the basis of shipment Id, order Id and AWB number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestShipments/).
     */
    getManifestShipments({ dpIds, stores, toDate, fromDate, dpName, salesChannels, searchType, searchValue, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetManifestShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestShipmentListing>;
    /**
     * @param {OrderPlatformValidator.GetManifestfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestFiltersResponse>} - Success response
     * @name getManifestfilters
     * @summary: List filters
     * @description: Get supported filter for listing manifests - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestfilters/).
     */
    getManifestfilters({ view, requestHeaders }?: OrderPlatformValidator.GetManifestfiltersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestFiltersResponse>;
    /**
     * @param {OrderPlatformValidator.GetManifestsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ManifestList>} - Success response
     * @name getManifests
     * @summary: List manifests
     * @description: Get a list of manifest as per the filter provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifests/).
     */
    getManifests({ status, startDate, endDate, searchType, storeId, searchValue, dpIds, pageNo, pageSize, requestHeaders, }?: OrderPlatformValidator.GetManifestsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ManifestList>;
    /**
     * @param {OrderPlatformValidator.GetOrderByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderDetailsResponse>} - Success response
     * @name getOrderById
     * @summary: Get order
     * @description: Get detailed information about a specific order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrderById/).
     */
    getOrderById({ orderId, myOrders, allowInactive, requestHeaders }?: OrderPlatformValidator.GetOrderByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderDetailsResponse>;
    /**
     * @param {OrderPlatformValidator.GetOrdersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderListingResponse>} - Success response
     * @name getOrders
     * @summary: List orders
     * @description: Get a list of orders based on the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrders/).
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, myOrders, showCrossCompanyData, customerId, orderType, allowInactive, enforceDateFilter, requestHeaders, }?: OrderPlatformValidator.GetOrdersParam, { responseHeaders }?: object): Promise<OrderPlatformModel.OrderListingResponse>;
    /**
     * @param {OrderPlatformValidator.GetRoleBasedActionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetActionsResponse>} - Success response
     * @name getRoleBasedActions
     * @summary: Get role-based actions
     * @description: Retrieve permissible actions based on user roles such as company_admin,  company_operation, customer_care, and read_only. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRoleBasedActions/).
     */
    getRoleBasedActions({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.GetActionsResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentInfoResponse>} - Success response
     * @name getShipmentById
     * @summary: Get shipment
     * @description: Get detailed information about a specific shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentById/).
     */
    getShipmentById({ channelShipmentId, shipmentId, fetchActiveShipment, allowInactive, requestHeaders, }?: OrderPlatformValidator.GetShipmentByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInfoResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name getShipmentHistory
     * @summary: Get a shipment's history
     * @description: Get the history of the shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentHistory/).
     */
    getShipmentHistory({ shipmentId, bagId, requestHeaders }?: OrderPlatformValidator.GetShipmentHistoryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentReasonsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>} -
     *   Success response
     * @name getShipmentReasons
     * @summary: List bag cancellation reasons
     * @description: Get reasons to perform full or partial cancellation of a bag - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentReasons/).
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
     * @summary: List shipments
     * @description: Get a list of shipments based on the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipments/).
     */
    getShipments({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, startDate, endDate, dpIds, stores, salesChannels, pageNo, pageSize, fetchActiveShipment, allowInactive, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, sortType, showCrossCompanyData, tags, customerId, orderType, enforceDateFilter, requestHeaders, }?: OrderPlatformValidator.GetShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>;
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
     * @summary: Get state transition map
     * @description: Retrieve a map of state transitions for orders - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getStateTransitionMap/).
     */
    getStateTransitionMap({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.BagStateTransitionMap>;
    /**
     * @param {OrderPlatformValidator.GetTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.TemplateDownloadResponse>} - Success response
     * @name getTemplate
     * @summary: Download bulk operation templates
     * @description: Get the excel or CSV file URL for the template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getTemplate/).
     */
    getTemplate({ templateName, requestHeaders }?: OrderPlatformValidator.GetTemplateParam, { responseHeaders }?: object): Promise<OrderPlatformModel.TemplateDownloadResponse>;
    /**
     * @param {OrderPlatformValidator.GetfiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FiltersResponse>} - Success response
     * @name getfilters
     * @summary: List filters
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
     * @summary: Get bulk operation details
     * @description: Fetches details of the job for the provided batch Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/jobDetails/).
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
     * @param {OrderPlatformValidator.PostShipmentHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name postShipmentHistory
     * @summary: Create shipment history
     * @description: Used to add logs in history for a bag for the provided Shipment ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postShipmentHistory/).
     */
    postShipmentHistory({ body, requestHeaders }?: OrderPlatformValidator.PostShipmentHistoryParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.ReassignLocationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.StoreReassignResponse>} - Success response
     * @name reassignLocation
     * @summary: Reassign location
     * @description: Reassign the shipment to a another location and update its status to 'Store Reassigned.' - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/reassignLocation/).
     */
    reassignLocation({ body, requestHeaders }?: OrderPlatformValidator.ReassignLocationParam, { responseHeaders }?: object): Promise<OrderPlatformModel.StoreReassignResponse>;
    /**
     * @param {OrderPlatformValidator.SendSmsNinjaParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BaseResponse>} - Success response
     * @name sendSmsNinja
     * @summary: Send SMS
     * @description: Send SMS to customer based on the template that is selected - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendSmsNinja/).
     */
    sendSmsNinja({ body, requestHeaders }?: OrderPlatformValidator.SendSmsNinjaParam, { responseHeaders }?: object): Promise<OrderPlatformModel.BaseResponse>;
    /**
     * @param {OrderPlatformValidator.SendUserMobileOTPParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponse>} - Success response
     * @name sendUserMobileOTP
     * @summary: Send user mobile OTP
     * @description: Send a one-time OTP to a customer mobile number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendUserMobileOTP/).
     */
    sendUserMobileOTP({ body, requestHeaders }?: OrderPlatformValidator.SendUserMobileOTPParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SendUserMobileOtpResponse>;
    /**
     * @param {OrderPlatformValidator.TrackShipmentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CourierPartnerTrackingResponse>} -
     *   Success response
     * @name trackShipment
     * @summary: Track shipment
     * @description: Retrieve courier partner tracking details for a given shipment Id or AWB number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/trackShipment/).
     */
    trackShipment({ shipmentId, awb, pageNo, pageSize, requestHeaders }?: OrderPlatformValidator.TrackShipmentParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CourierPartnerTrackingResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BaseResponse>} - Success response
     * @name updateAddress
     * @summary: Update shipment address
     * @description: Modify the address details of an existing shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateAddress/).
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
     * @summary: Update packaging dimensions
     * @description: Used to modify the packaging dimension of a shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updatePackagingDimensions/).
     */
    updatePackagingDimensions({ body, requestHeaders }?: OrderPlatformValidator.UpdatePackagingDimensionsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentLockParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponse>} -
     *   Success response
     * @name updateShipmentLock
     * @summary: Update a shipment lock
     * @description: Modify shipment/bag lock status and update lock/unlock messages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentLock/).
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
     * @summary: Update a shipment's status
     * @description: Used for updating a shipment and its status. Can also be used for updating bags present in that shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentStatus/).
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
     * @description: Modify courier partner tracking details for a given shipment Id or AWB number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentTracking/).
     */
    updateShipmentTracking({ body, requestHeaders }?: OrderPlatformValidator.UpdateShipmentTrackingParam, { responseHeaders }?: object): Promise<OrderPlatformModel.CourierPartnerTrackingDetails>;
    /**
     * @param {OrderPlatformValidator.UploadConsentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name uploadConsents
     * @summary: Upload consent
     * @description: Uploads the consent signed by courier partner and seller to keep records - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/uploadConsents/).
     */
    uploadConsents({ body, requestHeaders }?: OrderPlatformValidator.UploadConsentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.VerifyMobileOTPParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.VerifyOtpResponse>} - Success response
     * @name verifyMobileOTP
     * @summary: Verify mobile OTP
     * @description: Perform OTP verification to link a user to an anonymous order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/verifyMobileOTP/).
     */
    verifyMobileOTP({ body, requestHeaders }?: OrderPlatformValidator.VerifyMobileOTPParam, { responseHeaders }?: object): Promise<OrderPlatformModel.VerifyOtpResponse>;
}
import OrderPlatformValidator = require("./OrderPlatformValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
