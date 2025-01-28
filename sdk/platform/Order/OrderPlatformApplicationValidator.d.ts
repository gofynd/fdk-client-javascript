export = OrderPlatformApplicationValidator;
/**
 * @typedef CreateRuleParam
 * @property {OrderPlatformModel.RuleRequest} body
 */
/**
 * @typedef DeleteRuleParam
 * @property {string} ruleId
 */
/**
 * @typedef GetApplicationShipmentsParam
 * @property {string} [lane]
 * @property {string} [searchType]
 * @property {string} [searchId]
 * @property {string} [searchValue]
 * @property {string} [fromDate]
 * @property {string} [toDate]
 * @property {string} [dpIds]
 * @property {string} [orderingCompanyId]
 * @property {string} [stores]
 * @property {string} [salesChannel]
 * @property {string} [requestByExt]
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [customerId]
 * @property {boolean} [isPrioritySort]
 * @property {boolean} [excludeLockedShipments]
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
 * @property {OrderPlatformModel.RuleListRequest} body
 */
/** @typedef GetRuleParametersParam */
/**
 * @typedef GetShipmentBagReasonsParam
 * @property {string} shipmentId - ID of the bag. An order may contain multiple
 *   items and may get divided into one or more shipment, each having its own ID.
 * @property {number} lineNumber - Line number of bag.
 * @property {string} bagId - The ID of the bag.
 */
/**
 * @typedef TrackShipmentPlatformParam
 * @property {string} shipmentId - Shipment Id
 */
/**
 * @typedef UpdateRuleParam
 * @property {string} ruleId
 * @property {OrderPlatformModel.RuleUpdateRequest} body
 */
/**
 * @typedef UpdateRulePositionParam
 * @property {OrderPlatformModel.UpdateRulePositionRequest} body
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
    body: OrderPlatformModel.RuleRequest;
};
type DeleteRuleParam = {
    ruleId: string;
};
type GetApplicationShipmentsParam = {
    lane?: string;
    searchType?: string;
    searchId?: string;
    searchValue?: string;
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
    body: OrderPlatformModel.RuleListRequest;
};
type GetShipmentBagReasonsParam = {
    /**
     * - ID of the bag. An order may contain multiple
     * items and may get divided into one or more shipment, each having its own ID.
     */
    shipmentId: string;
    /**
     * - Line number of bag.
     */
    lineNumber: number;
    /**
     * - The ID of the bag.
     */
    bagId: string;
};
type TrackShipmentPlatformParam = {
    /**
     * - Shipment Id
     */
    shipmentId: string;
};
type UpdateRuleParam = {
    ruleId: string;
    body: OrderPlatformModel.RuleUpdateRequest;
};
type UpdateRulePositionParam = {
    body: OrderPlatformModel.UpdateRulePositionRequest;
};
type GetRuleParametersParam = any;
import OrderPlatformModel = require("./OrderPlatformModel");
