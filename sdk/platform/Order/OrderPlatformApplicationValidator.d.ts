export = OrderPlatformApplicationValidator;
/**
 * @typedef CreateRuleParam
 * @property {OrderPlatformModel.RuleRequestSchema} body
 */
/**
 * @typedef DeleteRuleParam
 * @property {string} ruleId
 */
/**
 * @typedef GetApplicationShipmentsParam
 * @property {string} [lane] - Optional parameter to specify the lane for
 *   filtering results.
 * @property {string} [searchType] - Search_type refers to the field that will
 *   be used as the target for the search operation
 * @property {string} [searchId] - Identifier used for the search operation
 *   based on the selected search type.
 * @property {string} [searchValue]
 * @property {string} [fromDate] - Date time in UTC timezone as per ISO format.
 * @property {string} [toDate] - Date time in UTC timezone as per ISO format.
 * @property {string} [dpIds] - Comma-separated list of delivery partner IDs to
 *   filter results.
 * @property {string} [orderingCompanyId] - ID of the company placing the order,
 *   used for filtering results.
 * @property {string} [stores] - Comma-separated list of store IDs to filter results.
 * @property {string} [salesChannel] - The sales channel to filter results.
 * @property {string} [requestByExt] - Identifier for external requests.
 * @property {number} [pageNo] - The page number for pagination of results.
 * @property {number} [pageSize] - The number of results to return per page for
 *   pagination.
 * @property {string} [customerId] - ID of the customer to filter results
 *   related to specific customer.
 * @property {boolean} [isPrioritySort] - Flag to determine if results should be
 *   sorted by priority. Defaults to true.
 * @property {boolean} [excludeLockedShipments] - Flag to exclude shipments that
 *   are currently locked from the results.
 */
/**
 * @typedef GetPlatformShipmentReasonsParam
 * @property {string} action
 */
/**
 * @typedef GetQuestionsParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [q] - To search questions using query
 * @property {boolean} [isActive] - To get active questions
 */
/**
 * @typedef GetRuleByIdParam
 * @property {string} ruleId
 */
/**
 * @typedef GetRuleLaneConfigParam
 * @property {string} [searchValue]
 */
/**
 * @typedef GetRuleListParam
 * @property {OrderPlatformModel.RuleListRequestSchema} body
 */
/** @typedef GetRuleParametersParam */
/**
 * @typedef GetShipmentBagReasonsParam
 * @property {string} shipmentId - The unique identifier for the shipment
 * @property {number} lineNumber - A unique identifier of the bag's line number.
 * @property {string} bagId - The ID of the bag.
 */
/**
 * @typedef TrackShipmentPlatformParam
 * @property {string} shipmentId - The unique identifier for the shipment
 */
/**
 * @typedef UpdateRuleParam
 * @property {string} ruleId
 * @property {OrderPlatformModel.RuleUpdateRequestSchema} body
 */
/**
 * @typedef UpdateRulePositionParam
 * @property {OrderPlatformModel.UpdateRulePositionRequestSchema} body
 */
declare class OrderPlatformApplicationValidator {
    /** @returns {CreateRuleParam} */
    static createRule(): CreateRuleParam;
    /** @returns {DeleteRuleParam} */
    static deleteRule(): DeleteRuleParam;
    /** @returns {GetApplicationShipmentsParam} */
    static getApplicationShipments(): GetApplicationShipmentsParam;
    /** @returns {GetPlatformShipmentReasonsParam} */
    static getPlatformShipmentReasons(): GetPlatformShipmentReasonsParam;
    /** @returns {GetQuestionsParam} */
    static getQuestions(): GetQuestionsParam;
    /** @returns {GetRuleByIdParam} */
    static getRuleById(): GetRuleByIdParam;
    /** @returns {GetRuleLaneConfigParam} */
    static getRuleLaneConfig(): GetRuleLaneConfigParam;
    /** @returns {GetRuleListParam} */
    static getRuleList(): GetRuleListParam;
    /** @returns {GetRuleParametersParam} */
    static getRuleParameters(): any;
    /** @returns {GetShipmentBagReasonsParam} */
    static getShipmentBagReasons(): GetShipmentBagReasonsParam;
    /** @returns {TrackShipmentPlatformParam} */
    static trackShipmentPlatform(): TrackShipmentPlatformParam;
    /** @returns {UpdateRuleParam} */
    static updateRule(): UpdateRuleParam;
    /** @returns {UpdateRulePositionParam} */
    static updateRulePosition(): UpdateRulePositionParam;
}
declare namespace OrderPlatformApplicationValidator {
    export { CreateRuleParam, DeleteRuleParam, GetApplicationShipmentsParam, GetPlatformShipmentReasonsParam, GetQuestionsParam, GetRuleByIdParam, GetRuleLaneConfigParam, GetRuleListParam, GetRuleParametersParam, GetShipmentBagReasonsParam, TrackShipmentPlatformParam, UpdateRuleParam, UpdateRulePositionParam };
}
type CreateRuleParam = {
    body: OrderPlatformModel.RuleRequestSchema;
};
type DeleteRuleParam = {
    ruleId: string;
};
type GetApplicationShipmentsParam = {
    /**
     * - Optional parameter to specify the lane for
     * filtering results.
     */
    lane?: string;
    /**
     * - Search_type refers to the field that will
     * be used as the target for the search operation
     */
    searchType?: string;
    /**
     * - Identifier used for the search operation
     * based on the selected search type.
     */
    searchId?: string;
    searchValue?: string;
    /**
     * - Date time in UTC timezone as per ISO format.
     */
    fromDate?: string;
    /**
     * - Date time in UTC timezone as per ISO format.
     */
    toDate?: string;
    /**
     * - Comma-separated list of delivery partner IDs to
     * filter results.
     */
    dpIds?: string;
    /**
     * - ID of the company placing the order,
     * used for filtering results.
     */
    orderingCompanyId?: string;
    /**
     * - Comma-separated list of store IDs to filter results.
     */
    stores?: string;
    /**
     * - The sales channel to filter results.
     */
    salesChannel?: string;
    /**
     * - Identifier for external requests.
     */
    requestByExt?: string;
    /**
     * - The page number for pagination of results.
     */
    pageNo?: number;
    /**
     * - The number of results to return per page for
     * pagination.
     */
    pageSize?: number;
    /**
     * - ID of the customer to filter results
     * related to specific customer.
     */
    customerId?: string;
    /**
     * - Flag to determine if results should be
     * sorted by priority. Defaults to true.
     */
    isPrioritySort?: boolean;
    /**
     * - Flag to exclude shipments that
     * are currently locked from the results.
     */
    excludeLockedShipments?: boolean;
};
type GetPlatformShipmentReasonsParam = {
    action: string;
};
type GetQuestionsParam = {
    pageNo?: number;
    pageSize?: number;
    /**
     * - To search questions using query
     */
    q?: string;
    /**
     * - To get active questions
     */
    isActive?: boolean;
};
type GetRuleByIdParam = {
    ruleId: string;
};
type GetRuleLaneConfigParam = {
    searchValue?: string;
};
type GetRuleListParam = {
    body: OrderPlatformModel.RuleListRequestSchema;
};
type GetShipmentBagReasonsParam = {
    /**
     * - The unique identifier for the shipment
     */
    shipmentId: string;
    /**
     * - A unique identifier of the bag's line number.
     */
    lineNumber: number;
    /**
     * - The ID of the bag.
     */
    bagId: string;
};
type TrackShipmentPlatformParam = {
    /**
     * - The unique identifier for the shipment
     */
    shipmentId: string;
};
type UpdateRuleParam = {
    ruleId: string;
    body: OrderPlatformModel.RuleUpdateRequestSchema;
};
type UpdateRulePositionParam = {
    body: OrderPlatformModel.UpdateRulePositionRequestSchema;
};
type GetRuleParametersParam = any;
import OrderPlatformModel = require("./OrderPlatformModel");
