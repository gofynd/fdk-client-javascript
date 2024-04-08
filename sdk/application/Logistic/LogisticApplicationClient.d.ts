export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        createShipments: string;
        getAllCountries: string;
        getCountries: string;
        getCountry: string;
        getGeoAreas: string;
        getLocalities: string;
        getLocality: string;
        getZones: string;
        validateAddress: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {LogisticApplicationValidator.CreateShipmentsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GenerateShipmentsAndCourierPartnerResponse>}
     *   - Success response
     *
     * @name createShipments
     * @summary: Create and return shipments.
     * @description: Create and return shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/createShipments/).
     */
    createShipments({ companyId, applicationId, body, requestHeaders }?: LogisticApplicationValidator.CreateShipmentsParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GenerateShipmentsAndCourierPartnerResponse>;
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
    getCountries({ onboard, pageNo, pageSize, q, hierarchy, requestHeaders }?: LogisticApplicationValidator.GetCountriesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetCountries>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.onboard] - Only fetch countries which allowed for
     *   onboard on Platform.
     * @param {number} [arg.pageSize] - Page size.
     * @param {string} [arg.q] - Search.
     * @param {string} [arg.hierarchy] - Hierarchy.
     * @returns {Paginator<LogisticApplicationModel.GetCountries>}
     * @summary: Get all countries and associated data.
     * @description: Retrieve of all countries.
     */
    getCountriesPaginator({ onboard, pageSize, q, hierarchy }?: {
        onboard?: boolean;
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
    getLocalities({ localityType, country, state, city, pageNo, pageSize, q, name, requestHeaders, }?: LogisticApplicationValidator.GetLocalitiesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetLocalities>;
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
     * @param {string} [arg.name] - Search for localities. Either provide a full
     *   name or a search term.
     * @returns {Paginator<LogisticApplicationModel.GetLocalities>}
     * @summary: Get Localities.
     * @description: Get Localities data.
     */
    getLocalitiesPaginator({ localityType, country, state, city, pageSize, q, name, }?: {
        localityType: string;
        country?: string;
        state?: string;
        city?: string;
        pageSize?: number;
        q?: string;
        name?: string;
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
     * @param {LogisticApplicationValidator.GetZonesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.ListViewResponseV2>} - Success response
     * @name getZones
     * @summary: Shows zones defined at the application level
     * @description: Displays the list of zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getZones/).
     */
    getZones({ companyId, applicationId, stage, pageSize, isActive, q, countryIsoCode, pincode, state, city, sector, requestHeaders, }?: LogisticApplicationValidator.GetZonesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.ListViewResponseV2>;
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
import LogisticApplicationValidator = require("sdk/output/javascript/code/sdk/application/Logistic/LogisticApplicationValidator");
import LogisticApplicationModel = require("sdk/output/javascript/code/sdk/application/Logistic/LogisticApplicationModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
