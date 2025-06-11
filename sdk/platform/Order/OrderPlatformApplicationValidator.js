const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

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

class OrderPlatformApplicationValidator {
  /** @returns {CreateRuleParam} */
  static createRule() {
    return Joi.object({
      body: OrderPlatformModel.RuleRequest().required(),
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
      body: OrderPlatformModel.RuleListRequest().required(),
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
      body: OrderPlatformModel.RuleUpdateRequest().required(),
    }).required();
  }

  /** @returns {UpdateRulePositionParam} */
  static updateRulePosition() {
    return Joi.object({
      body: OrderPlatformModel.UpdateRulePositionRequest().required(),
    }).required();
  }
}

module.exports = OrderPlatformApplicationValidator;
