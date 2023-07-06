const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef AddAppDpParam
 * @property {ServiceabilityPlatformModel.ApplicationCompanyDpViewRequest} body
 */

/**
 * @typedef DeleteAppDpParam
 * @property {number} courierPartnerId - A `courier_partner_id` is a unique
 *   identifier of a particular delivery partner.
 */

/** @typedef GetApplicationServiceabilityParam */

/** @typedef GetApplicationServiceabilitySelfShipmentParam */

/** @typedef GetDpApplicationRulesParam */

/**
 * @typedef GetZoneFromPincodeViewParam
 * @property {ServiceabilityPlatformModel.GetZoneFromPincodeViewRequest} body
 */

/**
 * @typedef GetZonesFromApplicationIdViewParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string[]} [zoneId] - List of zones to query for
 * @property {string} [q] - Search with name as a free text
 */

/**
 * @typedef PatchApplicationServiceabilitySelfShipmentParam
 * @property {ServiceabilityPlatformModel.SelfShipResponse} body
 */

/**
 * @typedef UpdatePincodeAuditHistoryParam
 * @property {ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest} body
 */

/**
 * @typedef UpdatePincodeBulkViewParam
 * @property {ServiceabilityPlatformModel.PincodeMopBulkData} body
 */

/**
 * @typedef UpdatePincodeCoDListingParam
 * @property {ServiceabilityPlatformModel.PincodeCodStatusListingRequest} body
 */

/**
 * @typedef UpdatePincodeMopViewParam
 * @property {ServiceabilityPlatformModel.PincodeMopData} body
 */

/**
 * @typedef UpsertDpApplicationRulesParam
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
