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
 * @property {string} [hierarchy] - Get countries with only certain hierarchy present..
 */

/**
 * @typedef GetCountryParam
 * @property {string} countryIsoCode - The `country_iso_code` is ISO-2 (alpha-2)
 *   code for the country.
 */

/**
 * @typedef GetGeoAreasParam
 * @property {string} applicationId - A `application_id` is a unique identifier
 *   for an application.
 * @property {number} companyId - A `company_id` is a unique identifier for a
 *   particular sale channel.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {boolean} [isActive] - Status of GeoAreas (either active or inactive)
 * @property {string} [q] - Search with name as a free text
 * @property {string} [countryIsoCode] - ISO2 code of the country
 * @property {string} [state] - State name
 * @property {string} [city] - City name
 * @property {string} [pincode] - Pincode value to search geoareas
 * @property {string} [sector] - Sector value to search geoareas
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
 * @property {string} [name] - Search with full name.
 * @property {string} [namesList] - Search with multiple full names
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
 * @typedef GetZonesParam
 * @property {number} companyId - The unique identifier for the company.
 * @property {string} applicationId - A `application_id` is a unique identifier
 *   for a particular sale channel.
 * @property {string} [stage] - Identifies the specific stage of zone bing requested.
 * @property {number} [pageSize] - Defines the number of items displayed per page.
 * @property {string} [zoneIds] - Defines the specific zones with the given ids
 *   to be displayed.
 * @property {boolean} [isActive] - Status of Zone (either active or inactive)
 * @property {string} [q] - Search with name as a free text.
 * @property {string} [country] - Name of the country.
 * @property {string} [countryIsoCode] - ISO2 code of the country.
 * @property {string} [pincode] - PIN Code of the country.
 * @property {string} [state] - State of the country.
 * @property {string} [city] - City of the country.
 * @property {string} [sector] - Sector name of mentioned address.
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
      hierarchy: Joi.string().allow(""),
    });
  }

  /** @returns {GetCountryParam} */
  static getCountry() {
    return Joi.object({
      countryIsoCode: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetGeoAreasParam} */
  static getGeoAreas() {
    return Joi.object({
      applicationId: Joi.string().allow("").required(),
      companyId: Joi.number().required(),
      pageSize: Joi.number(),
      isActive: Joi.boolean(),
      q: Joi.string().allow(""),
      countryIsoCode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      sector: Joi.string().allow(""),
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
      name: Joi.string().allow(""),
      namesList: Joi.string().allow(""),
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

  /** @returns {GetZonesParam} */
  static getZones() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      stage: Joi.string().allow(""),
      pageSize: Joi.number(),
      zoneIds: Joi.string().allow(""),
      isActive: Joi.boolean(),
      q: Joi.string().allow(""),
      country: Joi.string().allow(""),
      countryIsoCode: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      sector: Joi.string().allow(""),
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
