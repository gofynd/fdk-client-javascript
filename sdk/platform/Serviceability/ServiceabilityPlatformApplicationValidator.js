const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef addAppDp
 * @property {ServiceabilityPlatformModel.ApplicationCompanyDpViewRequest} body
 */

/**
 * @typedef deleteAppDp
 * @property {number} courierPartnerId - A `courier_partner_id` is a unique
 *   identifier of a particular delivery partner.
 */

/** @typedef getApplicationServiceability */

/** @typedef getApplicationServiceabilitySelfShipment */

/** @typedef getDpApplicationRules */

/**
 * @typedef getZoneFromPincodeView
 * @property {ServiceabilityPlatformModel.GetZoneFromPincodeViewRequest} body
 */

/**
 * @typedef getZonesFromApplicationIdView
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string[]} [zoneId] - List of zones to query for
 * @property {string} [q] - Search with name as a free text
 */

/**
 * @typedef patchApplicationServiceabilitySelfShipment
 * @property {ServiceabilityPlatformModel.SelfShipResponse} body
 */

/**
 * @typedef updatePincodeAuditHistory
 * @property {ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest} body
 */

/**
 * @typedef updatePincodeBulkView
 * @property {ServiceabilityPlatformModel.PincodeMopBulkData} body
 */

/**
 * @typedef updatePincodeCoDListing
 * @property {ServiceabilityPlatformModel.PincodeCodStatusListingRequest} body
 */

/**
 * @typedef updatePincodeMopView
 * @property {ServiceabilityPlatformModel.PincodeMopData} body
 */

/**
 * @typedef upsertDpApplicationRules
 * @property {ServiceabilityPlatformModel.DPApplicationRuleRequest} body
 */

class ServiceabilityPlatformApplicationValidator {
  /** @returns {addAppDp} */
  static addAppDp() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ApplicationCompanyDpViewRequest().required(),
    }).required();
  }

  /** @returns {deleteAppDp} */
  static deleteAppDp() {
    return Joi.object({
      courierPartnerId: Joi.number().required(),
    }).required();
  }

  /** @returns {getApplicationServiceability} */
  static getApplicationServiceability() {
    return Joi.object({}).required();
  }

  /** @returns {getApplicationServiceabilitySelfShipment} */
  static getApplicationServiceabilitySelfShipment() {
    return Joi.object({}).required();
  }

  /** @returns {getDpApplicationRules} */
  static getDpApplicationRules() {
    return Joi.object({}).required();
  }

  /** @returns {getZoneFromPincodeView} */
  static getZoneFromPincodeView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }

  /** @returns {getZonesFromApplicationIdView} */
  static getZonesFromApplicationIdView() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      zoneId: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {patchApplicationServiceabilitySelfShipment} */
  static patchApplicationServiceabilitySelfShipment() {
    return Joi.object({
      body: ServiceabilityPlatformModel.SelfShipResponse().required(),
    }).required();
  }

  /** @returns {updatePincodeAuditHistory} */
  static updatePincodeAuditHistory() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest().required(),
    }).required();
  }

  /** @returns {updatePincodeBulkView} */
  static updatePincodeBulkView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeMopBulkData().required(),
    }).required();
  }

  /** @returns {updatePincodeCoDListing} */
  static updatePincodeCoDListing() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeCodStatusListingRequest().required(),
    }).required();
  }

  /** @returns {updatePincodeMopView} */
  static updatePincodeMopView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeMopData().required(),
    }).required();
  }

  /** @returns {upsertDpApplicationRules} */
  static upsertDpApplicationRules() {
    return Joi.object({
      body: ServiceabilityPlatformModel.DPApplicationRuleRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformApplicationValidator;
