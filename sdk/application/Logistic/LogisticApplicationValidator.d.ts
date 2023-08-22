export = LogisticApplicationValidator;
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
declare class LogisticApplicationValidator {
    /** @returns {GetAllCountriesParam} */
    static getAllCountries(): any;
    /** @returns {GetCountriesParam} */
    static getCountries(): GetCountriesParam;
    /** @returns {GetCountryParam} */
    static getCountry(): GetCountryParam;
    /** @returns {GetLocalitiesParam} */
    static getLocalities(): GetLocalitiesParam;
    /** @returns {GetLocalityParam} */
    static getLocality(): GetLocalityParam;
    /** @returns {GetOptimalLocationsParam} */
    static getOptimalLocations(): GetOptimalLocationsParam;
    /** @returns {GetPincodeCityParam} */
    static getPincodeCity(): GetPincodeCityParam;
    /** @returns {GetPincodeZonesParam} */
    static getPincodeZones(): GetPincodeZonesParam;
    /** @returns {GetTatProductParam} */
    static getTatProduct(): GetTatProductParam;
}
declare namespace LogisticApplicationValidator {
    export { GetAllCountriesParam, GetCountriesParam, GetCountryParam, GetLocalitiesParam, GetLocalityParam, GetOptimalLocationsParam, GetPincodeCityParam, GetPincodeZonesParam, GetTatProductParam };
}
type GetCountriesParam = {
    /**
     * - Only fetch countries which allowed for
     * onboard on Platform.
     */
    onboarding?: boolean;
    /**
     * - Page number.
     */
    pageNo?: number;
    /**
     * - Page size.
     */
    pageSize?: number;
    /**
     * - Search.
     */
    q?: string;
};
type GetCountryParam = {
    /**
     * - The `country_iso_code` is ISO-2 (alpha-2)
     * code for the country.
     */
    countryIsoCode: string;
};
type GetLocalitiesParam = {
    /**
     * - A `locality_type` contains unique
     * geographical division.
     */
    localityType: string;
    /**
     * - A `country` contains a specific value of the
     * country iso2 code.
     */
    country?: string;
    /**
     * - A `state` contains a specific value of the
     * state, province.
     */
    state?: string;
    /**
     * - A `city` contains a specific value of the city.
     */
    city?: string;
    /**
     * - Page number.
     */
    pageNo?: number;
    /**
     * - Page size.
     */
    pageSize?: number;
    /**
     * - Search.
     */
    q?: string;
};
type GetLocalityParam = {
    /**
     * - A `locality_type` contains value
     * geographical division.
     */
    localityType: string;
    /**
     * - A `locality_value` contains a specific
     * name of the locality.
     */
    localityValue: string;
    /**
     * - A `country` contains a specific value of the
     * country iso2 code.
     */
    country?: string;
    /**
     * - A `state` contains a specific value of the
     * state, province.
     */
    state?: string;
    /**
     * - A `city` contains a specific value of the city.
     */
    city?: string;
};
type GetOptimalLocationsParam = {
    body: LogisticApplicationModel.ReAssignStoreRequest;
};
type GetPincodeCityParam = {
    /**
     * - A `pincode` contains a specific address of a location.
     */
    pincode: string;
};
type GetPincodeZonesParam = {
    body: LogisticApplicationModel.GetZoneFromPincodeViewRequest;
};
type GetTatProductParam = {
    body: LogisticApplicationModel.TATViewRequest;
};
type GetAllCountriesParam = any;
import LogisticApplicationModel = require("./LogisticApplicationModel");
