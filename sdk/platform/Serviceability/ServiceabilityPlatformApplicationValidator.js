const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef AddAppDpParam
 * @property {ServiceabilityPlatformModel.ApplicationCompanyDpViewRequest} body
 */

/** @typedef GetApplicationServiceabilityParam */

/** @typedef GetApplicationServiceabilitySelfShipmentParam */

/** @typedef GetDpApplicationRulePriorityParam */

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
 * @typedef UpsertDpApplicationRulePriorityParam
 * @property {ServiceabilityPlatformModel.DPApplicationRuleRequest} body
 */

class ServiceabilityPlatformApplicationValidator {
  /** @returns {AddAppDpParam} */
  static addAppDp() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ApplicationCompanyDpViewRequest().required(),
    }).required();
  }

  /** @returns {GetApplicationServiceabilityParam} */
  static getApplicationServiceability() {
    return Joi.object({}).required();
  }

  /** @returns {GetApplicationServiceabilitySelfShipmentParam} */
  static getApplicationServiceabilitySelfShipment() {
    return Joi.object({}).required();
  }

  /** @returns {GetDpApplicationRulePriorityParam} */
  static getDpApplicationRulePriority() {
    return Joi.object({}).required();
  }

  /** @returns {GetZoneFromPincodeViewParam} */
  static getZoneFromPincodeView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }

  /** @returns {GetZonesFromApplicationIdViewParam} */
  static getZonesFromApplicationIdView() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      zoneId: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {PatchApplicationServiceabilitySelfShipmentParam} */
  static patchApplicationServiceabilitySelfShipment() {
    return Joi.object({
      body: ServiceabilityPlatformModel.SelfShipResponse().required(),
    }).required();
  }

  /** @returns {UpdatePincodeAuditHistoryParam} */
  static updatePincodeAuditHistory() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest().required(),
    }).required();
  }

  /** @returns {UpdatePincodeBulkViewParam} */
  static updatePincodeBulkView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeMopBulkData().required(),
    }).required();
  }

  /** @returns {UpdatePincodeCoDListingParam} */
  static updatePincodeCoDListing() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeCodStatusListingRequest().required(),
    }).required();
  }

  /** @returns {UpdatePincodeMopViewParam} */
  static updatePincodeMopView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeMopData().required(),
    }).required();
  }

  /** @returns {UpsertDpApplicationRulePriorityParam} */
  static upsertDpApplicationRulePriority() {
    return Joi.object({
      body: ServiceabilityPlatformModel.DPApplicationRuleRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformApplicationValidator;
