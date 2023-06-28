const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/** @typedef getApplicationServiceability */

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

class ServiceabilityPlatformApplicationValidator {
  /** @returns {getApplicationServiceability} */
  static getApplicationServiceability() {
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
}

module.exports = ServiceabilityPlatformApplicationValidator;
