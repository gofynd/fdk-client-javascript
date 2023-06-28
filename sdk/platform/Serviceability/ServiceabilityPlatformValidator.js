const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

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
 * @typedef updateZoneControllerView
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {ServiceabilityPlatformModel.ZoneUpdateRequest} body
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

  /** @returns {updateZoneControllerView} */
  static updateZoneControllerView() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.ZoneUpdateRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformValidator;
