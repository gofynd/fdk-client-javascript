export = Order;
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {OrderPlatformApplicationValidator.FailedOrderLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FailedOrderLogs>} - Success response
     * @name failedOrderLogs
     * @summary: List failed order logs
     * @description: Get failed order logs listing for filters based on order Id, user contact number, user email Id and sales channel Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/failedOrderLogs/).
     */
    failedOrderLogs({ pageNo, pageSize, searchType, searchValue, requestHeaders }?: OrderPlatformApplicationValidator.FailedOrderLogsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.FailedOrderLogs>;
    /**
     * @param {OrderPlatformApplicationValidator.GetApplicationShipmentsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>}
     *   - Success response
     *
     * @name getApplicationShipments
     * @summary: List sales channel shipments
     * @description: Get shipments of a particular sales channel based on the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getApplicationShipments/).
     */
    getApplicationShipments({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, excludeLockedShipments, requestHeaders, }?: OrderPlatformApplicationValidator.GetApplicationShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.GetPlatformShipmentReasonsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentReasonsResponseSchema>} -
     *   Success response
     * @name getPlatformShipmentReasons
     * @summary: List shipment cancellation reasons
     * @description: Get reasons to perform full or partial cancellation of a shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getPlatformShipmentReasons/).
     */
    getPlatformShipmentReasons({ action, requestHeaders }?: OrderPlatformApplicationValidator.GetPlatformShipmentReasonsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentReasonsResponseSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.GetRulesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RuleListResponseSchema>} - Success response
     * @name getRules
     * @summary: List of RMA rules based on the given input conditions.
     * @description: Retrieves a comprehensive list of RMA (Return Merchandise Authorization) rules associated with  a specific company and application. These rules dictate the processes for handling returns,  including actions, reasons, quality control (QC) types, and associated questions.  The endpoint allows for filtering and pagination based on input conditions, providing a tailored set of rules that match the criteria specified. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRules/).
     */
    getRules({ body, requestHeaders }?: OrderPlatformApplicationValidator.GetRulesParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RuleListResponseSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.GetShipmentBagReasonsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentBagReasons>} - Success response
     * @name getShipmentBagReasons
     * @summary: Retrieve Reasons for Cancellation and Return journey
     * @description: Allows users to retrieve a comprehensive list of reasons for cancellation  or returning a shipment. It provides both cancellation and return reasons, with an emphasis  on Quality Control (QC) evaluations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentBagReasons/).
     */
    getShipmentBagReasons({ shipmentId, lineNumber, requestHeaders }?: OrderPlatformApplicationValidator.GetShipmentBagReasonsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentBagReasons>;
    /**
     * @param {OrderPlatformApplicationValidator.TrackShipmentPlatformParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.PlatformShipmentTrack>} - Success response
     * @name trackShipmentPlatform
     * @summary: Track shipment
     * @description: Track shipment by shipment Id for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/trackShipmentPlatform/).
     */
    trackShipmentPlatform({ shipmentId, requestHeaders }?: OrderPlatformApplicationValidator.TrackShipmentPlatformParam, { responseHeaders }?: object): Promise<OrderPlatformModel.PlatformShipmentTrack>;
}
import OrderPlatformApplicationValidator = require("./OrderPlatformApplicationValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
