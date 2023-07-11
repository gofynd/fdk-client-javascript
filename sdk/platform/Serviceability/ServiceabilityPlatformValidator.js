const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef CreateDpRuleParam
 * @property {ServiceabilityPlatformModel.DpRuleRequest} body
 */

/**
 * @typedef CreateZoneParam
 * @property {ServiceabilityPlatformModel.ZoneRequest} body
 */

/** @typedef GetAllStoresParam */

/**
 * @typedef GetCompanyStoreViewParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */

/**
 * @typedef GetDpAccountListParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 */

/** @typedef GetDpCompanyRulePriorityParam */

/**
 * @typedef GetDpRuleParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
 */

/**
 * @typedef GetDpRuleListParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */

/**
 * @typedef GetEntityRegionViewParam
 * @property {ServiceabilityPlatformModel.EntityRegionView_Request} body
 */

/**
 * @typedef GetListViewParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [name] - Name of particular zone in the seller account
 * @property {boolean} [isActive] - Status of zone whether active or inactive
 * @property {string} [channelIds] - Zones associated with the given channel ids'
 * @property {string} [q] - Search with name as a free text
 */

/**
 * @typedef GetOptimalLocationsParam
 * @property {ServiceabilityPlatformModel.ReAssignStoreRequest} body
 */

/**
 * @typedef GetRegionJobBulkParam
 * @property {number} [currentPageNumber] - The current page number
 * @property {number} [pageSize] - The page size
 */

/**
 * @typedef GetRegionJobBulkBatchIdParam
 * @property {string} batchId - The batch ID
 */

/**
 * @typedef GetStoreParam
 * @property {number} storeUid - A `store_uid` contains a specific ID of a store.
 */

/**
 * @typedef GetZoneDataViewParam
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 */

/**
 * @typedef GetZoneListViewParam
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
 * @typedef PostRegionJobBulkParam
 * @property {ServiceabilityPlatformModel.BulkRegionJobSerializer} body
 */

/**
 * @typedef UpdateDpRuleParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
 * @property {ServiceabilityPlatformModel.DpRulesUpdateRequest} body
 */

/**
 * @typedef UpdateZoneControllerViewParam
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {ServiceabilityPlatformModel.ZoneUpdateRequest} body
 */

/**
 * @typedef UpsertDpAccountParam
 * @property {ServiceabilityPlatformModel.CompanyDpAccountRequest} body
 */

/**
 * @typedef UpsertDpCompanyRulePriorityParam
 * @property {ServiceabilityPlatformModel.DPCompanyRuleRequest} body
 */

class ServiceabilityPlatformValidator {
  /** @returns {CreateDpRuleParam} */
  static createDpRule() {
    return Joi.object({
      body: ServiceabilityPlatformModel.DpRuleRequest().required(),
    }).required();
  }

  /** @returns {CreateZoneParam} */
  static createZone() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ZoneRequest().required(),
    }).required();
  }

  /** @returns {GetAllStoresParam} */
  static getAllStores() {
    return Joi.object({}).required();
  }

  /** @returns {GetCompanyStoreViewParam} */
  static getCompanyStoreView() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetDpAccountListParam} */
  static getDpAccountList() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
      stage: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      transportType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetDpCompanyRulePriorityParam} */
  static getDpCompanyRulePriority() {
    return Joi.object({}).required();
  }

  /** @returns {GetDpRuleParam} */
  static getDpRule() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetDpRuleListParam} */
  static getDpRuleList() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetEntityRegionViewParam} */
  static getEntityRegionView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.EntityRegionView_Request().required(),
    }).required();
  }

  /** @returns {GetListViewParam} */
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

  /** @returns {GetOptimalLocationsParam} */
  static getOptimalLocations() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ReAssignStoreRequest().required(),
    }).required();
  }

  /** @returns {GetRegionJobBulkParam} */
  static getRegionJobBulk() {
    return Joi.object({
      currentPageNumber: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetRegionJobBulkBatchIdParam} */
  static getRegionJobBulkBatchId() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetStoreParam} */
  static getStore() {
    return Joi.object({
      storeUid: Joi.number().required(),
    }).required();
  }

  /** @returns {GetZoneDataViewParam} */
  static getZoneDataView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetZoneListViewParam} */
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

  /** @returns {PostRegionJobBulkParam} */
  static postRegionJobBulk() {
    return Joi.object({
      body: ServiceabilityPlatformModel.BulkRegionJobSerializer().required(),
    }).required();
  }

  /** @returns {UpdateDpRuleParam} */
  static updateDpRule() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.DpRulesUpdateRequest().required(),
    }).required();
  }

  /** @returns {UpdateZoneControllerViewParam} */
  static updateZoneControllerView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.ZoneUpdateRequest().required(),
    }).required();
  }

  /** @returns {UpsertDpAccountParam} */
  static upsertDpAccount() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CompanyDpAccountRequest().required(),
    }).required();
  }

  /** @returns {UpsertDpCompanyRulePriorityParam} */
  static upsertDpCompanyRulePriority() {
    return Joi.object({
      body: ServiceabilityPlatformModel.DPCompanyRuleRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformValidator;
