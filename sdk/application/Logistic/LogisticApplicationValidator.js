const Joi = require("joi");

const LogisticApplicationModel = require("./LogisticApplicationModel");

/** @typedef GetAllCountriesParam */

/**
 * @typedef GetCountriesParam
 * @property {boolean} [onboarding] - Only fetch countries which allowed for
 *   onboard on Platform.
 * @property {number} [pageNo] - Page number.
 * @property {number} [pageSize] - Page size.
 * @property {string} [q] - Search.
 */

/**
 * @typedef GetCountryParam
 * @property {string} countryIsoCode - The `country_iso_code` is ISO-2 (alpha-2)
 *   code for the country.
 */

/**
 * @typedef GetLocalitiesParam
 * @property {string} localityType - A `locality_type` contains unique
 *   geographical division.
 * @property {string} [country] - A `country` contains a specific value of the
 *   country iso2 code.
 * @property {string} [state] - A `state` contains a specific value of the
 *   state, province.
 * @property {string} [city] - A `city` contains a specific value of the city.
 * @property {number} [pageNo] - Page number.
 * @property {number} [pageSize] - Page size.
 * @property {string} [q] - Search.
 */

/**
 * @typedef GetLocalityParam
 * @property {string} localityType - A `locality_type` contains value
 *   geographical division.
 * @property {string} localityValue - A `locality_value` contains a specific
 *   name of the locality.
 * @property {string} [country] - A `country` contains a specific value of the
 *   country iso2 code.
 * @property {string} [state] - A `state` contains a specific value of the
 *   state, province.
 * @property {string} [city] - A `city` contains a specific value of the city.
 */

/**
 * @typedef GetLocationsParam
 * @property {string} xApplicationId - A `x-application-id` is a unique
 *   identifier for a particular sale channel.
 * @property {string} xApplicationData - A `x-application-data` is a unique
 *   identifier for a particular sale channel.
 * @property {string} [country] - A `country` contains a specific value of the
 *   country `iso2` code.
 * @property {string} [state] - A `state` contains a specific value of the
 *   state, province.
 * @property {string} [city] - A `city` contains a specific value of the city.
 * @property {number} [pincode] - A `pincode` contains a specific value of the city.
 * @property {string} [sector] - A `sector` contains a specific value of the city.
 * @property {number} [pageNo] - Page number.
 * @property {number} [pageSize] - Page size.
 */

/**
 * @typedef GetOptimalLocationsParam
 * @property {LogisticApplicationModel.ReAssignStoreRequest} body
 */

/**
 * @typedef GetPincodeZonesParam
 * @property {LogisticApplicationModel.GetZoneFromPincodeViewRequest} body
 */

/**
 * @typedef ValidateAddressParam
 * @property {string} countryIsoCode - The ISO code of the country.
 * @property {string} templateName - The type of address form.
 * @property {LogisticApplicationModel.ValidateAddressRequest} body
 */

class LogisticApplicationValidator {
  /** @returns {GetAllCountriesParam} */
  static getAllCountries() {
    return Joi.object({});
  }

  /** @returns {GetCountriesParam} */
  static getCountries() {
    return Joi.object({
      onboarding: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    });
  }

  /** @returns {GetCountryParam} */
  static getCountry() {
    return Joi.object({
      countryIsoCode: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetLocalitiesParam} */
  static getLocalities() {
    return Joi.object({
      localityType: Joi.string().allow("").required(),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetLocalityParam} */
  static getLocality() {
    return Joi.object({
      localityType: Joi.string().allow("").required(),
      localityValue: Joi.string().allow("").required(),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetLocationsParam} */
  static getLocations() {
    return Joi.object({
      xApplicationId: Joi.string().allow("").required(),
      xApplicationData: Joi.string().allow("").required(),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      pincode: Joi.number(),
      sector: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetOptimalLocationsParam} */
  static getOptimalLocations() {
    return Joi.object({
      body: LogisticApplicationModel.ReAssignStoreRequest().required(),
    }).required();
  }

  /** @returns {GetPincodeZonesParam} */
  static getPincodeZones() {
    return Joi.object({
      body: LogisticApplicationModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }

  /** @returns {ValidateAddressParam} */
  static validateAddress() {
    return Joi.object({
      countryIsoCode: Joi.string().allow("").required(),
      templateName: Joi.string().allow("").required(),
      body: LogisticApplicationModel.ValidateAddressRequest().required(),
    }).required();
  }
}

module.exports = LogisticApplicationValidator;
