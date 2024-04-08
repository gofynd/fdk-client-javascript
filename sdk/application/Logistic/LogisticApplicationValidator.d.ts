export = LogisticApplicationValidator;
/**
 * @typedef CreateShipmentsParam
 * @property {number} companyId - The ID of the company.
 * @property {string} applicationId - The ID of the application.
 * @property {LogisticApplicationModel.GenerateShipmentsRequest} body
 */
/** @typedef GetAllCountriesParam */
/**
 * @typedef GetCountriesParam
 * @property {boolean} [onboard] - Only fetch countries which allowed for
 *   onboard on Platform.
 * @property {number} [pageNo] - Page number.
 * @property {number} [pageSize] - Page size.
 * @property {string} [q] - Search.
 * @property {string} [hierarchy] - Hierarchy.
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
 * @property {string} [name] - Search for localities. Either provide a full name
 *   or a search term.
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
 * @typedef GetZonesParam
 * @property {number} companyId - The unique identifier for the company.
 * @property {string} applicationId - A `application_id` is a unique identifier
 *   for a particular sale channel.
 * @property {string} [stage] - Identifies the specific stage of zone bing requested.
 * @property {number} [pageSize] - Defines the number of items displayed per page.
 * @property {boolean} [isActive] - Status of Zone (either active or inactive)
 * @property {string} [q] - Search with name as a free text.
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
declare class LogisticApplicationValidator {
    /** @returns {CreateShipmentsParam} */
    static createShipments(): CreateShipmentsParam;
    /** @returns {GetAllCountriesParam} */
    static getAllCountries(): any;
    /** @returns {GetCountriesParam} */
    static getCountries(): GetCountriesParam;
    /** @returns {GetCountryParam} */
    static getCountry(): GetCountryParam;
    /** @returns {GetGeoAreasParam} */
    static getGeoAreas(): GetGeoAreasParam;
    /** @returns {GetLocalitiesParam} */
    static getLocalities(): GetLocalitiesParam;
    /** @returns {GetLocalityParam} */
    static getLocality(): GetLocalityParam;
    /** @returns {GetZonesParam} */
    static getZones(): GetZonesParam;
    /** @returns {ValidateAddressParam} */
    static validateAddress(): ValidateAddressParam;
}
declare namespace LogisticApplicationValidator {
    export { CreateShipmentsParam, GetAllCountriesParam, GetCountriesParam, GetCountryParam, GetGeoAreasParam, GetLocalitiesParam, GetLocalityParam, GetZonesParam, ValidateAddressParam };
}
type CreateShipmentsParam = {
    /**
     * - The ID of the company.
     */
    companyId: number;
    /**
     * - The ID of the application.
     */
    applicationId: string;
    body: LogisticApplicationModel.GenerateShipmentsRequest;
};
type GetCountriesParam = {
    /**
     * - Only fetch countries which allowed for
     * onboard on Platform.
     */
    onboard?: boolean;
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
    /**
     * - Hierarchy.
     */
    hierarchy?: string;
};
type GetCountryParam = {
    /**
     * - The `country_iso_code` is ISO-2 (alpha-2)
     * code for the country.
     */
    countryIsoCode: string;
};
type GetGeoAreasParam = {
    /**
     * - A `application_id` is a unique identifier
     * for an application.
     */
    applicationId: string;
    /**
     * - A `company_id` is a unique identifier for a
     * particular sale channel.
     */
    companyId: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Status of GeoAreas (either active or inactive)
     */
    isActive?: boolean;
    /**
     * - Search with name as a free text
     */
    q?: string;
    /**
     * - ISO2 code of the country
     */
    countryIsoCode?: string;
    /**
     * - State name
     */
    state?: string;
    /**
     * - City name
     */
    city?: string;
    /**
     * - Pincode value to search geoareas
     */
    pincode?: string;
    /**
     * - Sector value to search geoareas
     */
    sector?: string;
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
    /**
     * - Search for localities. Either provide a full name
     * or a search term.
     */
    name?: string;
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
type GetZonesParam = {
    /**
     * - The unique identifier for the company.
     */
    companyId: number;
    /**
     * - A `application_id` is a unique identifier
     * for a particular sale channel.
     */
    applicationId: string;
    /**
     * - Identifies the specific stage of zone bing requested.
     */
    stage?: string;
    /**
     * - Defines the number of items displayed per page.
     */
    pageSize?: number;
    /**
     * - Status of Zone (either active or inactive)
     */
    isActive?: boolean;
    /**
     * - Search with name as a free text.
     */
    q?: string;
    /**
     * - ISO2 code of the country.
     */
    countryIsoCode?: string;
    /**
     * - PIN Code of the country.
     */
    pincode?: string;
    /**
     * - State of the country.
     */
    state?: string;
    /**
     * - City of the country.
     */
    city?: string;
    /**
     * - Sector name of mentioned address.
     */
    sector?: string;
};
type ValidateAddressParam = {
    /**
     * - The ISO code of the country.
     */
    countryIsoCode: string;
    /**
     * - The type of address form.
     */
    templateName: string;
    body: LogisticApplicationModel.ValidateAddressRequest;
};
type GetAllCountriesParam = any;
import LogisticApplicationModel = require("sdk/output/javascript/code/sdk/application/Logistic/LogisticApplicationModel");
