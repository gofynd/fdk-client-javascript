export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllCountries: string;
        getCountries: string;
        getCountry: string;
        getGeoAreas: string;
        getLocalities: string;
        getLocality: string;
        getLocations: string;
        getOptimalLocations: string;
        getPincodeZones: string;
        getZones: string;
        validateAddress: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {LogisticApplicationValidator.GetAllCountriesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.CountryListResponse>} - Success response
     * @name getAllCountries
     * @summary: Lists all countries.
     * @description: Retrieve a list of all countries supported by the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getAllCountries/).
     */
    getAllCountries({ requestHeaders }?: any, { responseHeaders }?: object): Promise<LogisticApplicationModel.CountryListResponse>;
    /**
     * @param {LogisticApplicationValidator.GetCountriesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetCountries>} - Success response
     * @name getCountries
     * @summary: Get all countries and associated data.
     * @description: Retrieve of all countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountries/).
     */
    getCountries({ onboarding, pageNo, pageSize, q, hierarchy, requestHeaders }?: LogisticApplicationValidator.GetCountriesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetCountries>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.onboarding] - Only fetch countries which allowed
     *   for onboard on Platform.
     * @param {number} [arg.pageSize] - Page size.
     * @param {string} [arg.q] - Search.
     * @param {string} [arg.hierarchy] - Get countries with only certain
     *   hierarchy present..
     * @returns {Paginator<LogisticApplicationModel.GetCountries>}
     * @summary: Get all countries and associated data.
     * @description: Retrieve of all countries.
     */
    getCountriesPaginator({ onboarding, pageSize, q, hierarchy }?: {
        onboarding?: boolean;
        pageSize?: number;
        q?: string;
        hierarchy?: string;
    }): Paginator<LogisticApplicationModel.GetCountries>;
    /**
     * @param {LogisticApplicationValidator.GetCountryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetCountry>} - Success response
     * @name getCountry
     * @summary: Get single country and associated data.
     * @description: Retrieve data for a single country and address format. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountry/).
     */
    getCountry({ countryIsoCode, requestHeaders }?: LogisticApplicationValidator.GetCountryParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetCountry>;
    /**
     * @param {LogisticApplicationValidator.GetGeoAreasParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GeoAreaGetResponseBody>} -
     *   Success response
     * @name getGeoAreas
     * @summary: Get all geoareas in the current application.
     * @description: Retrieves a listing view of created GeoAreas. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getGeoAreas/).
     */
    getGeoAreas({ applicationId, companyId, pageSize, isActive, q, countryIsoCode, state, city, pincode, sector, requestHeaders, }?: LogisticApplicationValidator.GetGeoAreasParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GeoAreaGetResponseBody>;
    /**
     * @param {LogisticApplicationValidator.GetLocalitiesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetLocalities>} - Success response
     * @name getLocalities
     * @summary: Get Localities.
     * @description: Get Localities data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocalities/).
     */
    getLocalities({ localityType, country, state, city, pageNo, pageSize, q, name, namesList, requestHeaders, }?: LogisticApplicationValidator.GetLocalitiesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetLocalities>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.localityType - A `locality_type` contains unique
     *   geographical division.
     * @param {string} [arg.country] - A `country` contains a specific value of
     *   the country iso2 code.
     * @param {string} [arg.state] - A `state` contains a specific value of the
     *   state, province.
     * @param {string} [arg.city] - A `city` contains a specific value of the city.
     * @param {number} [arg.pageSize] - Page size.
     * @param {string} [arg.q] - Search.
     * @param {string} [arg.name] - Search with full name.
     * @param {string} [arg.namesList] - Search with multiple full names
     * @returns {Paginator<LogisticApplicationModel.GetLocalities>}
     * @summary: Get Localities.
     * @description: Get Localities data.
     */
    getLocalitiesPaginator({ localityType, country, state, city, pageSize, q, name, namesList, }?: {
        localityType: string;
        country?: string;
        state?: string;
        city?: string;
        pageSize?: number;
        q?: string;
        name?: string;
        namesList?: string;
    }): Paginator<LogisticApplicationModel.GetLocalities>;
    /**
     * @param {LogisticApplicationValidator.GetLocalityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetLocality>} - Success response
     * @name getLocality
     * @summary: Get Locality API
     * @description: Get Locality data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocality/).
     */
    getLocality({ localityType, localityValue, country, state, city, requestHeaders }?: LogisticApplicationValidator.GetLocalityParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetLocality>;
    /**
     * @param {LogisticApplicationValidator.GetLocationsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetStoreResponse>} - Success response
     * @name getLocations
     * @summary: Fetches available locations.
     * @description: Retrieves a list of all locations of countries, states, cities.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocations/).
     */
    getLocations({ xApplicationId, xApplicationData, country, state, city, pincode, sector, pageNo, pageSize, requestHeaders, }?: LogisticApplicationValidator.GetLocationsParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetStoreResponse>;
    /**
     * @param {LogisticApplicationValidator.GetOptimalLocationsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.ReAssignStoreResponse>} -
     *   Success response
     * @name getOptimalLocations
     * @summary: Finds optimal locations.
     * @description: Retrieve the most efficient locations for logistics purposes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getOptimalLocations/).
     */
    getOptimalLocations({ body, requestHeaders }?: LogisticApplicationValidator.GetOptimalLocationsParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.ReAssignStoreResponse>;
    /**
     * @param {LogisticApplicationValidator.GetPincodeZonesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>}
     *   - Success response
     *
     * @name getPincodeZones
     * @summary: Fetches zones by pincode.
     * @description: Retreive the logistical zones corresponding to a given pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeZones/).
     */
    getPincodeZones({ body, requestHeaders }?: LogisticApplicationValidator.GetPincodeZonesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>;
    /**
     * @param {LogisticApplicationValidator.GetZonesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.ListViewResponseV2>} - Success response
     * @name getZones
     * @summary: Shows zones defined at the application level
     * @description: Displays the list of zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getZones/).
     */
    getZones({ companyId, applicationId, stage, pageSize, zoneIds, isActive, q, country, countryIsoCode, pincode, state, city, sector, requestHeaders, }?: LogisticApplicationValidator.GetZonesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.ListViewResponseV2>;
    /**
     * @param {LogisticApplicationValidator.ValidateAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.ValidateAddressRequest>} -
     *   Success response
     * @name validateAddress
     * @summary: Validate given address wrt template
     * @description: Validate given address wrt template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/validateAddress/).
     */
    validateAddress({ countryIsoCode, templateName, body, requestHeaders }?: LogisticApplicationValidator.ValidateAddressParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.ValidateAddressRequest>;
}
import LogisticApplicationModel = require("sdk/output/javascript/code/sdk/application/Logistic/LogisticApplicationModel");
import LogisticApplicationValidator = require("sdk/output/javascript/code/sdk/application/Logistic/LogisticApplicationValidator");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
