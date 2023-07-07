const Joi = require("joi");

const LogisticApplicationModel = require("./LogisticApplicationModel");

/** @typedef GetAllCountriesParam */

/** @typedef GetCountriesParam */

/**
 * @typedef GetCountryParam
 * @property {string} uid - A `uid` contains a specific unique name of a region.
 */

/**
 * @typedef GetLocalitiesParam
 * @property {string} region - A `region` contains a specific unique name.
 */

/**
 * @typedef GetLocalityParam
 * @property {string} region - A `region` contains a specific unique name.
 * @property {string} value - A `value` contains a specific value of the region.
 */

/**
 * @typedef GetOptimalLocationsParam
 * @property {LogisticApplicationModel.ReAssignStoreRequest} body
 */

/**
 * @typedef GetPincodeCityParam
 * @property {string} pincode - A `pincode` contains a specific address of a location.
 */

/**
 * @typedef GetPincodeZonesParam
 * @property {LogisticApplicationModel.GetZoneFromPincodeViewRequest} body
 */

/**
 * @typedef GetTatProductParam
 * @property {LogisticApplicationModel.TATViewRequest} body
 */

class LogisticApplicationValidator {
  /** @returns {GetAllCountriesParam} */
  static getAllCountries() {
    return Joi.object({});
  }

  /** @returns {GetCountriesParam} */
  static getCountries() {
    return Joi.object({});
  }

  /** @returns {GetCountryParam} */
  static getCountry() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetLocalitiesParam} */
  static getLocalities() {
    return Joi.object({
      region: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetLocalityParam} */
  static getLocality() {
    return Joi.object({
      region: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetOptimalLocationsParam} */
  static getOptimalLocations() {
    return Joi.object({
      body: LogisticApplicationModel.ReAssignStoreRequest().required(),
    }).required();
  }

  /** @returns {GetPincodeCityParam} */
  static getPincodeCity() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPincodeZonesParam} */
  static getPincodeZones() {
    return Joi.object({
      body: LogisticApplicationModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }

  /** @returns {GetTatProductParam} */
  static getTatProduct() {
    return Joi.object({
      body: LogisticApplicationModel.TATViewRequest().required(),
    }).required();
  }
}

module.exports = LogisticApplicationValidator;
