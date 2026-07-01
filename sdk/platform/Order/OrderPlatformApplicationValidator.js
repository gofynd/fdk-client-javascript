const Joi = require("joi");

const OrderPlatformModel = require("./OrderPlatformModel");

/**
 * @typedef GetApplicationShipmentsParam
 * @property {string} [lane] - Optional parameter to specify the lane for
 *   filtering results.
 * @property {string} [searchType] - Search_type refers to the field that will
 *   be used as the target for the search operation
 * @property {string} [searchId] - Identifier used for the search operation
 *   based on the selected search type.
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
 * @typedef GetOrderingSourceConfigBySlugParam
 * @property {string} slug
 */

/**
 * @typedef GetPlatformShipmentReasonsParam
 * @property {string} action
 */

/**
 * @typedef GetRulesParam
 * @property {OrderPlatformModel.RuleListRequestSchema} body
 */

/**
 * @typedef GetShipmentBagReasonsParam
 * @property {string} shipmentId - The unique identifier for the shipment
 * @property {number} lineNumber - A unique identifier of the bag's line number.
 */

/**
 * @typedef ListOrderingSourcesParam
 * @property {string} [type]
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 */

/**
 * @typedef TrackShipmentPlatformParam
 * @property {string} shipmentId - The unique identifier for the shipment
 */

/**
 * @typedef UpdateOrderingSourceConfigBySlugParam
 * @property {string} slug
 * @property {OrderPlatformModel.OrderingSourceConfig} body
 */

class OrderPlatformApplicationValidator {
  /** @returns {GetApplicationShipmentsParam} */
  static getApplicationShipments() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchId: Joi.string().allow(""),
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

  /** @returns {GetOrderingSourceConfigBySlugParam} */
  static getOrderingSourceConfigBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPlatformShipmentReasonsParam} */
  static getPlatformShipmentReasons() {
    return Joi.object({
      action: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetRulesParam} */
  static getRules() {
    return Joi.object({
      body: OrderPlatformModel.RuleListRequestSchema().required(),
    }).required();
  }

  /** @returns {GetShipmentBagReasonsParam} */
  static getShipmentBagReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      lineNumber: Joi.number().required(),
    }).required();
  }

  /** @returns {ListOrderingSourcesParam} */
  static listOrderingSources() {
    return Joi.object({
      type: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {TrackShipmentPlatformParam} */
  static trackShipmentPlatform() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateOrderingSourceConfigBySlugParam} */
  static updateOrderingSourceConfigBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: OrderPlatformModel.OrderingSourceConfig().required(),
    }).required();
  }
}

module.exports = OrderPlatformApplicationValidator;
