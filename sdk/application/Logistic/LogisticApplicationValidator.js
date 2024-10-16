const Joi = require("joi");

const LogisticApplicationModel = require("./LogisticApplicationModel");

/** @typedef GetAllCountriesParam */

/**
 * @typedef GetCountriesParam
 * @property {boolean} [onboarding] - List countries which allowed for onboard
 *   on Platform.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 12.
 * @property {string} [q] - The number of items to retrieve in each page.
 *   Default value is 12.
 * @property {string} [hierarchy] - Fetch countries that has certain heirarchy present.
 */

/**
 * @typedef GetCountryParam
 * @property {string} countryIsoCode - The ISO 3166-1 alpha-2 code representing
 *   the country (e.g., "IN" for India, "US" for the United States).
 */

/**
 * @typedef GetCourierPartnersParam
 * @property {number} companyId - Unique identifier of the company.
 * @property {string} applicationId - Unique identifier of the sales channel.
 * @property {LogisticApplicationModel.ShipmentCourierPartnerDetails} body
 */

/**
 * @typedef GetDeliveryPromiseParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 12.
 */

/**
 * @typedef GetLocalitiesParam
 * @property {string} localityType - Unique geographical division.
 * @property {string} [country] - Country name.
 * @property {string} [state] - State or the province.
 * @property {string} [city] - City.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 12.
 * @property {string} [q] - This parameter is used to filter or search the records.
 */

/**
 * @typedef GetLocalityParam
 * @property {string} localityType - Geographical division.
 * @property {string} localityValue - Name of the locality.
 * @property {string} [country] - Country name.
 * @property {string} [state] - State or the province.
 * @property {string} [city] - City.
 */

/**
 * @typedef GetLocationsParam
 * @property {string} xApplicationId - Unique identifier for a particular sales channel.
 * @property {string} xApplicationData - Sales channel details.
 * @property {string} [country] - The country `iso2` code.
 * @property {string} [state] - State or the province.
 * @property {string} [city] - City.
 * @property {number} [pincode] - Pincode of the area.
 * @property {string} [sector] - Specific sector of the city.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 12.
 */

/**
 * @typedef GetOptimalLocationsParam
 * @property {LogisticApplicationModel.ReAssignStoreDetails} body
 */

/**
 * @typedef GetPincodeCityParam
 * @property {string} pincode - Postal code or PIN code of the address area.
 */

/**
 * @typedef GetPincodeZonesParam
 * @property {LogisticApplicationModel.GetZoneFromPincodeViewDetails} body
 */

/**
 * @typedef GetTatProductParam
 * @property {LogisticApplicationModel.TATViewDetails} body
 */

/**
 * @typedef ValidateAddressParam
 * @property {string} countryIsoCode - The ISO 3166-1 alpha-2 code representing
 *   the country (e.g., "IN" for India, "US" for the United States).
 * @property {string} templateName - The type of address form.
 * @property {LogisticApplicationModel.ValidateAddressDetails} body
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

  /** @returns {GetCourierPartnersParam} */
  static getCourierPartners() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      body: LogisticApplicationModel.ShipmentCourierPartnerDetails().required(),
    }).required();
  }

  /** @returns {GetDeliveryPromiseParam} */
  static getDeliveryPromise() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
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
      body: LogisticApplicationModel.ReAssignStoreDetails().required(),
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
      body: LogisticApplicationModel.GetZoneFromPincodeViewDetails().required(),
    }).required();
  }

  /** @returns {GetTatProductParam} */
  static getTatProduct() {
    return Joi.object({
      body: LogisticApplicationModel.TATViewDetails().required(),
    }).required();
  }

  /** @returns {ValidateAddressParam} */
  static validateAddress() {
    return Joi.object({
      countryIsoCode: Joi.string().allow("").required(),
      templateName: Joi.string().allow("").required(),
      body: LogisticApplicationModel.ValidateAddressDetails().required(),
    }).required();
  }
}

module.exports = LogisticApplicationValidator;
