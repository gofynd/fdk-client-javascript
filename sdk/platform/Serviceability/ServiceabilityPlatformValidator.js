const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef createDpRule
 * @property {ServiceabilityPlatformModel.DpRuleRequest} body
 */

/**
 * @typedef createZone
 * @property {ServiceabilityPlatformModel.ZoneRequest} body
 */

/** @typedef getAllStores */

/**
 * @typedef getCompanyStoreView
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */

/**
 * @typedef getDpAccountList
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 */

/** @typedef getDpCompanyRulePriority */

/**
 * @typedef getDpRule
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
 */

/**
 * @typedef getDpRuleList
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */

/**
 * @typedef getEntityRegionView
 * @property {ServiceabilityPlatformModel.EntityRegionView_Request} body
 */

/**
 * @typedef getListView
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [name] - Name of particular zone in the seller account
 * @property {boolean} [isActive] - Status of zone whether active or inactive
 * @property {string} [channelIds] - Zones associated with the given channel ids'
 * @property {string} [q] - Search with name as a free text
 */

/**
 * @typedef getOptimalLocations
 * @property {ServiceabilityPlatformModel.ReAssignStoreRequest} body
 */

/**
 * @typedef getRegionJobBulk
 * @property {number} [currentPageNumber] - The current page number
 * @property {number} [pageSize] - The page size
 */

/**
 * @typedef getRegionJobBulkBatchId
 * @property {string} batchId - The batch ID
 */

/**
 * @typedef getStore
 * @property {number} storeUid - A `store_uid` contains a specific ID of a store.
 */

/**
 * @typedef getZoneDataView
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 */

/**
 * @typedef getZoneListView
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [name] - Name of particular zone in the seller account
 * @property {boolean} [isActive] - Status of zone whether active or inactive
 * @property {string} [channelIds] - Zones associated with the given channel ids'
 * @property {string} [q] - Search with name as a free text
 * @property {string[]} [zoneId] - List of zones to query for
 */

/**
 * @typedef postRegionJobBulk
 * @property {ServiceabilityPlatformModel.BulkRegionJobSerializer} body
 */

/**
 * @typedef updateDpRule
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
 * @property {ServiceabilityPlatformModel.DpRulesUpdateRequest} body
 */

/**
 * @typedef updateZoneControllerView
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {ServiceabilityPlatformModel.ZoneUpdateRequest} body
 */

/**
 * @typedef upsertDpAccount
 * @property {ServiceabilityPlatformModel.CompanyDpAccountRequest} body
 */

/**
 * @typedef upsertDpCompanyRulePriority
 * @property {ServiceabilityPlatformModel.DPCompanyRuleRequest} body
 */

class ServiceabilityPlatformValidator {
  /** @returns {createDpRule} */
  static createDpRule() {
    return Joi.object({
      body: ServiceabilityPlatformModel.DpRuleRequest().required(),
    }).required();
  }

  /** @returns {createZone} */
  static createZone() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ZoneRequest().required(),
    }).required();
  }

  /** @returns {getAllStores} */
  static getAllStores() {
    return Joi.object({}).required();
  }

  /** @returns {getCompanyStoreView} */
  static getCompanyStoreView() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getDpAccountList} */
  static getDpAccountList() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
      stage: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      transportType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getDpCompanyRulePriority} */
  static getDpCompanyRulePriority() {
    return Joi.object({}).required();
  }

  /** @returns {getDpRule} */
  static getDpRule() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getDpRuleList} */
  static getDpRuleList() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getEntityRegionView} */
  static getEntityRegionView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.EntityRegionView_Request().required(),
    }).required();
  }

  /** @returns {getListView} */
  static getListView() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
      name: Joi.string().allow(""),
      isActive: Joi.boolean(),
      channelIds: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getOptimalLocations} */
  static getOptimalLocations() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ReAssignStoreRequest().required(),
    }).required();
  }

  /** @returns {getRegionJobBulk} */
  static getRegionJobBulk() {
    return Joi.object({
      currentPageNumber: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getRegionJobBulkBatchId} */
  static getRegionJobBulkBatchId() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getStore} */
  static getStore() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  /** @returns {getZoneDataView} */
  static getZoneDataView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getZoneListView} */
  static getZoneListView() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      name: Joi.string().allow(""),
      isActive: Joi.boolean(),
      channelIds: Joi.string().allow(""),
      q: Joi.string().allow(""),
      zoneId: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  /** @returns {postRegionJobBulk} */
  static postRegionJobBulk() {
    return Joi.object({
      body: ServiceabilityPlatformModel.BulkRegionJobSerializer().required(),
    }).required();
  }

  /** @returns {updateDpRule} */
  static updateDpRule() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.DpRulesUpdateRequest().required(),
    }).required();
  }

  /** @returns {updateZoneControllerView} */
  static updateZoneControllerView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.ZoneUpdateRequest().required(),
    }).required();
  }

  /** @returns {upsertDpAccount} */
  static upsertDpAccount() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CompanyDpAccountRequest().required(),
    }).required();
  }

  /** @returns {upsertDpCompanyRulePriority} */
  static upsertDpCompanyRulePriority() {
    return Joi.object({
      body: ServiceabilityPlatformModel.DPCompanyRuleRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformValidator;
