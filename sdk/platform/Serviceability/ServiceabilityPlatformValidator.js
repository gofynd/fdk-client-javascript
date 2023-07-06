const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

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
 * @typedef GetDpAccountParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 */

/** @typedef GetDpCompanyRulesParam */

/**
 * @typedef GetDpRuleInsertParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */

/**
 * @typedef GetDpRulesParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
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
 * @typedef UpsertDpCompanyRulesParam
 * @property {ServiceabilityPlatformModel.DPCompanyRuleRequest} body
 */

/**
 * @typedef UpsertDpRulesParam
 * @property {ServiceabilityPlatformModel.DpRuleRequest} body
 */

class ServiceabilityPlatformValidator {
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

  /** @returns {getDpAccount} */
  static getDpAccount() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
      stage: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      transportType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getDpCompanyRules} */
  static getDpCompanyRules() {
    return Joi.object({}).required();
  }

  /** @returns {getDpRuleInsert} */
  static getDpRuleInsert() {
    return Joi.object({
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getDpRules} */
  static getDpRules() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
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

  /** @returns {upsertDpCompanyRules} */
  static upsertDpCompanyRules() {
    return Joi.object({
      body: ServiceabilityPlatformModel.DPCompanyRuleRequest().required(),
    }).required();
  }

  /** @returns {upsertDpRules} */
  static upsertDpRules() {
    return Joi.object({
      body: ServiceabilityPlatformModel.DpRuleRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformValidator;
