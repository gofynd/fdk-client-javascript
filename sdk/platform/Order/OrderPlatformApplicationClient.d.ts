export = Order;
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {OrderPlatformApplicationValidator.CreateRuleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RuleSuccessResponseSchema>} - Success response
     * @name createRule
     * @summary: Create a new rule
     * @description: Create a new rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createRule/).
     */
    createRule({ body, requestHeaders }?: OrderPlatformApplicationValidator.CreateRuleParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RuleSuccessResponseSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.DeleteRuleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RuleSuccessResponseSchema>} - Success response
     * @name deleteRule
     * @summary: Delete a specific rule by ID
     * @description: Delete a specific rule by ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/deleteRule/).
     */
    deleteRule({ ruleId, requestHeaders }?: OrderPlatformApplicationValidator.DeleteRuleParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RuleSuccessResponseSchema>;
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
     * @summary: Get cross selling platform shipments
     * @description: Get cross selling platform shipments - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getApplicationShipments/).
     */
    getApplicationShipments({ lane, searchType, searchId, searchValue, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, excludeLockedShipments, requestHeaders, }?: OrderPlatformApplicationValidator.GetApplicationShipmentsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.GetPlatformShipmentReasonsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentReasonsResponseSchema>} -
     *   Success response
     * @name getPlatformShipmentReasons
     * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
     * @description: Using action, get reasons behind full or partial cancellation of a shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getPlatformShipmentReasons/).
     */
    getPlatformShipmentReasons({ action, requestHeaders }?: OrderPlatformApplicationValidator.GetPlatformShipmentReasonsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentReasonsResponseSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.GetQuestionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getQuestions
     * @summary: Get all questions of that cluster
     * @description: Get all questions of that cluster - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getQuestions/).
     */
    getQuestions({ pageNo, pageSize, q, isActive, requestHeaders }?: OrderPlatformApplicationValidator.GetQuestionsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {OrderPlatformApplicationValidator.GetRuleByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RuleResponseSchema>} - Success response
     * @name getRuleById
     * @summary: Get a specific rule by ID
     * @description: Get a specific rule by ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRuleById/).
     */
    getRuleById({ ruleId, requestHeaders }?: OrderPlatformApplicationValidator.GetRuleByIdParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RuleResponseSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.GetRuleLaneConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.LaneRuleConfigSchema>} - Success response
     * @name getRuleLaneConfig
     * @summary: Retrieve rule lane configurations
     * @description: Retrieve rule lane configurations - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRuleLaneConfig/).
     */
    getRuleLaneConfig({ searchValue, requestHeaders }?: OrderPlatformApplicationValidator.GetRuleLaneConfigParam, { responseHeaders }?: object): Promise<OrderPlatformModel.LaneRuleConfigSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.GetRuleListParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RuleListResponseSchema>} - Success response
     * @name getRuleList
     * @summary: Get a list of rules
     * @description: Get a list of rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRuleList/).
     */
    getRuleList({ body, requestHeaders }?: OrderPlatformApplicationValidator.GetRuleListParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RuleListResponseSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.GetRuleParametersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RuleParametersResponseSchema>} -
     *   Success response
     * @name getRuleParameters
     * @summary: Get available rule parameters
     * @description: Get available rule parameters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRuleParameters/).
     */
    getRuleParameters({ requestHeaders }?: any, { responseHeaders }?: object): Promise<OrderPlatformModel.RuleParametersResponseSchema>;
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
    getShipmentBagReasons({ shipmentId, lineNumber, bagId, requestHeaders }?: OrderPlatformApplicationValidator.GetShipmentBagReasonsParam, { responseHeaders }?: object): Promise<OrderPlatformModel.ShipmentBagReasons>;
    /**
     * @param {OrderPlatformApplicationValidator.TrackShipmentPlatformParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.PlatformShipmentTrack>} - Success response
     * @name trackShipmentPlatform
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/trackShipmentPlatform/).
     */
    trackShipmentPlatform({ shipmentId, requestHeaders }?: OrderPlatformApplicationValidator.TrackShipmentPlatformParam, { responseHeaders }?: object): Promise<OrderPlatformModel.PlatformShipmentTrack>;
    /**
     * @param {OrderPlatformApplicationValidator.UpdateRuleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RuleSuccessResponseSchema>} - Success response
     * @name updateRule
     * @summary: Update a specific rule by ID
     * @description: Update a specific rule by ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateRule/).
     */
    updateRule({ ruleId, body, requestHeaders }?: OrderPlatformApplicationValidator.UpdateRuleParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RuleSuccessResponseSchema>;
    /**
     * @param {OrderPlatformApplicationValidator.UpdateRulePositionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RuleListResponseSchema>} - Success response
     * @name updateRulePosition
     * @summary: Update the position of a rule
     * @description: Update the position of a rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateRulePosition/).
     */
    updateRulePosition({ body, requestHeaders }?: OrderPlatformApplicationValidator.UpdateRulePositionParam, { responseHeaders }?: object): Promise<OrderPlatformModel.RuleListResponseSchema>;
}
import OrderPlatformApplicationValidator = require("./OrderPlatformApplicationValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
