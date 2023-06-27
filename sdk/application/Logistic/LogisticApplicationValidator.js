const Joi = require("joi");

const LogisticApplicationModel = require("./LogisticApplicationModel");

/** @typedef getAllCountries */

/**
 * @typedef getOptimalLocations
 * @property {LogisticApplicationModel.ReAssignStoreRequest} body
 */

/**
 * @typedef getPincodeCity
 * @property {string} pincode - A `pincode` contains a specific address of a location.
 */

/**
 * @typedef getPincodeZones
 * @property {LogisticApplicationModel.GetZoneFromPincodeViewRequest} body
 */

/**
 * @typedef getTatProduct
 * @property {LogisticApplicationModel.TATViewRequest} body
 */

class LogisticApplicationValidator {
  /** @returns {getAllCountries} */
  static getAllCountries() {
    return Joi.object({});
  }

  /** @returns {getOptimalLocations} */
  static getOptimalLocations() {
    return Joi.object({
      body: LogisticApplicationModel.ReAssignStoreRequest().required(),
    }).required();
  }

  /** @returns {getPincodeCity} */
  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getPincodeZones} */
  static getPincodeZones() {
    return Joi.object({
      body: LogisticApplicationModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }

  /** @returns {getTatProduct} */
  static getTatProduct() {
    return Joi.object({
      body: LogisticApplicationModel.TATViewRequest().required(),
    }).required();
  }
}

module.exports = LogisticApplicationValidator;
