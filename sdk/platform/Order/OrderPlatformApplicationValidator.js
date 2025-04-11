const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

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

class OrderPlatformApplicationValidator {
  /** @returns {CreateRuleParam} */
  static createRule() {
    return Joi.object({
      body: OrderPlatformModel.RuleRequestSchema().required(),
    }).required();
  }

  /** @returns {DeleteRuleParam} */
  static deleteRule() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetApplicationShipmentsParam} */
  static getApplicationShipments() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchId: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      orderingCompanyId: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      customerId: Joi.string().allow(""),
      isPrioritySort: Joi.boolean(),
      excludeLockedShipments: Joi.boolean(),
    }).required();
  }

  /** @returns {GetPlatformShipmentReasonsParam} */
  static getPlatformShipmentReasons() {
    return Joi.object({
      action: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetQuestionsParam} */
  static getQuestions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      isActive: Joi.boolean(),
    }).required();
  }

  /** @returns {GetRuleByIdParam} */
  static getRuleById() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetRuleLaneConfigParam} */
  static getRuleLaneConfig() {
    return Joi.object({
      searchValue: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetRuleListParam} */
  static getRuleList() {
    return Joi.object({
      body: OrderPlatformModel.RuleListRequestSchema().required(),
    }).required();
  }

  /** @returns {GetRuleParametersParam} */
  static getRuleParameters() {
    return Joi.object({}).required();
  }

  /** @returns {GetShipmentBagReasonsParam} */
  static getShipmentBagReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      lineNumber: Joi.number().required(),
      bagId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {TrackShipmentPlatformParam} */
  static trackShipmentPlatform() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateRuleParam} */
  static updateRule() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
      body: OrderPlatformModel.RuleUpdateRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateRulePositionParam} */
  static updateRulePosition() {
    return Joi.object({
      body: OrderPlatformModel.UpdateRulePositionRequestSchema().required(),
    }).required();
  }
}

module.exports = OrderPlatformApplicationValidator;
