export = LogisticApplicationValidator;
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
declare class LogisticApplicationValidator {
    /** @returns {GetAllCountriesParam} */
    static getAllCountries(): any;
    /** @returns {GetCountriesParam} */
    static getCountries(): GetCountriesParam;
    /** @returns {GetCountryParam} */
    static getCountry(): GetCountryParam;
    /** @returns {GetCourierPartnersParam} */
    static getCourierPartners(): GetCourierPartnersParam;
    /** @returns {GetDeliveryPromiseParam} */
    static getDeliveryPromise(): GetDeliveryPromiseParam;
    /** @returns {GetLocalitiesParam} */
    static getLocalities(): GetLocalitiesParam;
    /** @returns {GetLocalityParam} */
    static getLocality(): GetLocalityParam;
    /** @returns {GetLocationsParam} */
    static getLocations(): GetLocationsParam;
    /** @returns {GetOptimalLocationsParam} */
    static getOptimalLocations(): GetOptimalLocationsParam;
    /** @returns {GetPincodeCityParam} */
    static getPincodeCity(): GetPincodeCityParam;
    /** @returns {GetPincodeZonesParam} */
    static getPincodeZones(): GetPincodeZonesParam;
    /** @returns {GetTatProductParam} */
    static getTatProduct(): GetTatProductParam;
    /** @returns {ValidateAddressParam} */
    static validateAddress(): ValidateAddressParam;
}
declare namespace LogisticApplicationValidator {
    export { GetAllCountriesParam, GetCountriesParam, GetCountryParam, GetCourierPartnersParam, GetDeliveryPromiseParam, GetLocalitiesParam, GetLocalityParam, GetLocationsParam, GetOptimalLocationsParam, GetPincodeCityParam, GetPincodeZonesParam, GetTatProductParam, ValidateAddressParam };
}
type GetCountriesParam = {
    /**
     * - List countries which allowed for onboard
     * on Platform.
     */
    onboarding?: boolean;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 12.
     */
    pageSize?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 12.
     */
    q?: string;
    /**
     * - Fetch countries that has certain heirarchy present.
     */
    hierarchy?: string;
};
type GetCountryParam = {
    /**
     * - The ISO 3166-1 alpha-2 code representing
     * the country (e.g., "IN" for India, "US" for the United States).
     */
    countryIsoCode: string;
};
type GetCourierPartnersParam = {
    /**
     * - Unique identifier of the company.
     */
    companyId: number;
    /**
     * - Unique identifier of the sales channel.
     */
    applicationId: string;
    body: LogisticApplicationModel.ShipmentCourierPartnerDetails;
};
type GetDeliveryPromiseParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 12.
     */
    pageSize?: number;
};
type GetLocalitiesParam = {
    /**
     * - Unique geographical division.
     */
    localityType: string;
    /**
     * - Country name.
     */
    country?: string;
    /**
     * - State or the province.
     */
    state?: string;
    /**
     * - City.
     */
    city?: string;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 12.
     */
    pageSize?: number;
    /**
     * - This parameter is used to filter or search the records.
     */
    q?: string;
};
type GetLocalityParam = {
    /**
     * - Geographical division.
     */
    localityType: string;
    /**
     * - Name of the locality.
     */
    localityValue: string;
    /**
     * - Country name.
     */
    country?: string;
    /**
     * - State or the province.
     */
    state?: string;
    /**
     * - City.
     */
    city?: string;
};
type GetLocationsParam = {
    /**
     * - Unique identifier for a particular sales channel.
     */
    xApplicationId: string;
    /**
     * - Sales channel details.
     */
    xApplicationData: string;
    /**
     * - The country `iso2` code.
     */
    country?: string;
    /**
     * - State or the province.
     */
    state?: string;
    /**
     * - City.
     */
    city?: string;
    /**
     * - Pincode of the area.
     */
    pincode?: number;
    /**
     * - Specific sector of the city.
     */
    sector?: string;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 12.
     */
    pageSize?: number;
};
type GetOptimalLocationsParam = {
    body: LogisticApplicationModel.ReAssignStoreDetails;
};
type GetPincodeCityParam = {
    /**
     * - Postal code or PIN code of the address area.
     */
    pincode: string;
};
type GetPincodeZonesParam = {
    body: LogisticApplicationModel.GetZoneFromPincodeViewDetails;
};
type GetTatProductParam = {
    body: LogisticApplicationModel.TATViewDetails;
};
type ValidateAddressParam = {
    /**
     * - The ISO 3166-1 alpha-2 code representing
     * the country (e.g., "IN" for India, "US" for the United States).
     */
    countryIsoCode: string;
    /**
     * - The type of address form.
     */
    templateName: string;
    body: LogisticApplicationModel.ValidateAddressDetails;
};
type GetAllCountriesParam = any;
import LogisticApplicationModel = require("./LogisticApplicationModel");
