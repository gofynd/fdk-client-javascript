export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        createShipments: string;
        getAllCountries: string;
        getCountries: string;
        getCountry: string;
        getDeliveryPromise: string;
        getGeoAreas: string;
        getLocalities: string;
        getLocalitiesByPrefix: string;
        getLocality: string;
        getPincodeCity: string;
        getQCPromise: string;
        getZones: string;
        validateAddress: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GenerateShipmentsAndCourierPartnerResponseSchema>} -
     *   Success response
     * @name createShipments
     * @summary: Create and return shipments.
     * @description: Create and return shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/createShipments/).
     */
    createShipments({ companyId, applicationId, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GenerateShipmentsAndCourierPartnerResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CountryListResponseSchema>} - Success response
     * @name getAllCountries
     * @summary: Get deliverable countries
     * @description: Get a list of countries within the specified delivery zones for that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getAllCountries/).
     */
    getAllCountries({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CountryListResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCountries>} - Success response
     * @name getCountries
     * @summary: Get all countries and associated data.
     * @description: Retrieve a list of countries for logistical purposes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountries/).
     */
    getCountries({ onboard, pageNo, pageSize, q, hierarchy, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetCountries>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.onboard] - Only fetch countries which allowed for
     *   onboard on Platform.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 12
     * @param {string} [arg.q] - The search string to search in the list of
     *   countries by name.
     * @param {string} [arg.hierarchy] - The search filter to filter countries
     *   based on their available hierarchy.
     * @returns {Paginator<GetCountries>}
     * @summary: Get all countries and associated data.
     * @description: Retrieve a list of countries for logistical purposes.
     */
    getCountriesPaginator({ onboard, pageSize, q, hierarchy }?: {
        onboard?: boolean;
        pageSize?: number;
        q?: string;
        hierarchy?: string;
    }): Paginator<GetCountries>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCountry>} - Success response
     * @name getCountry
     * @summary: Get country details
     * @description: Get details about a particular country and its address format customized for different business scenarios. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountry/).
     */
    getCountry({ countryIsoCode, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetCountry>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetPromiseDetails>} - Success response
     * @name getDeliveryPromise
     * @summary: Get delivery promise
     * @description: Get delivery promises for both global and store levels based on a specific locality type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getDeliveryPromise/).
     */
    getDeliveryPromise({ pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetPromiseDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GeoAreaGetResponseBody>} - Success response
     * @name getGeoAreas
     * @summary: Get all geoareas in the current application.
     * @description: Retrieves a listing view of created GeoAreas. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getGeoAreas/).
     */
    getGeoAreas({ applicationId, companyId, pageSize, pageNo, type, isActive, q, countryIsoCode, state, city, pincode, sector, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GeoAreaGetResponseBody>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetLocalities>} - Success response
     * @name getLocalities
     * @summary: Get Localities
     * @description: Get geographical data for a specific type of locality based on the provided filters. For instance, obtain a list of cities for a given country and state. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocalities/).
     */
    getLocalities({ localityType, country, state, city, pageNo, pageSize, q, name, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetLocalities>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.localityType - Unique geographical division.
     * @param {string} [arg.country] - Country name.
     * @param {string} [arg.state] - State or the province.
     * @param {string} [arg.city] - City.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 12.
     * @param {string} [arg.q] - This parameter is used to filter or search the records.
     * @param {string} [arg.name] - Search for localities. Either provide a full
     *   name or a search term.
     * @returns {Paginator<GetLocalities>}
     * @summary: Get Localities
     * @description: Get geographical data for a specific type of locality based on the provided filters. For instance, obtain a list of cities for a given country and state.
     */
    getLocalitiesPaginator({ localityType, country, state, city, pageSize, q, name, }?: {
        localityType: string;
        country?: string;
        state?: string;
        city?: string;
        pageSize?: number;
        q?: string;
        name?: string;
    }): Paginator<GetLocalities>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetLocalities>} - Success response
     * @name getLocalitiesByPrefix
     * @summary: Get Localities by Name Prefix
     * @description: Get localities that start with a specified prefix. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocalitiesByPrefix/).
     */
    getLocalitiesByPrefix({ pageNo, pageSize, q, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetLocalities>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of items per page.
     * @param {string} [arg.q] - Localities starting with the specified prefix.
     * @returns {Paginator<GetLocalities>}
     * @summary: Get Localities by Name Prefix
     * @description: Get localities that start with a specified prefix.
     */
    getLocalitiesByPrefixPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator<GetLocalities>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetLocality>} - Success response
     * @name getLocality
     * @summary: Get locality detail
     * @description: Get detailed geographical data for a specific locality, such as a pincode. For example, for a pincode value of 400603, the service returns its parent locations, including city, state, and country details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocality/).
     */
    getLocality({ localityType, localityValue, country, state, city, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetLocality>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PincodeApiResponseSchema>} - Success response
     * @name getPincodeCity
     * @summary: Get Pincode API
     * @description: Get details of a specific pincode, such as obtaining its city and state information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeCity/).
     */
    getPincodeCity({ pincode, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<PincodeApiResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetQCPromiseDetails>} - Success response
     * @name getQCPromise
     * @summary: Get QC promise
     * @description: Get QC promises for the pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getQCPromise/).
     */
    getQCPromise({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetQCPromiseDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ListViewResponseSchemaV2>} - Success response
     * @name getZones
     * @summary: Shows zones defined at the application level
     * @description: Displays the list of zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getZones/).
     */
    getZones({ companyId, applicationId, stage, type, pageSize, pageNo, isActive, q, countryIsoCode, pincode, state, city, sector, storeUid, regionUid, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ListViewResponseSchemaV2>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ValidateAddressRequestSchema>} - Success response
     * @name validateAddress
     * @summary: Validate address
     * @description: Validate addresses using specific templates customized for each country and tailored to various business scenarios. This validation ensures that the data conforms to the information currently stored in the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/validateAddress/).
     */
    validateAddress({ countryIsoCode, templateName, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ValidateAddressRequestSchema>;
}
import Paginator = require("../../common/Paginator");
