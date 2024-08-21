export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllCountries: string;
        getCountries: string;
        getCountry: string;
        getLocalities: string;
        getLocality: string;
        getLocations: string;
        getOptimalLocations: string;
        getPincodeCity: string;
        getPincodeZones: string;
        getTatProduct: string;
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
     * @summary: Get deliverable countries
     * @description: Get a list of countries within the specified delivery zones for that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getAllCountries/).
     */
    getAllCountries({ requestHeaders }?: any, { responseHeaders }?: object): Promise<LogisticApplicationModel.CountryListResponse>;
    /**
     * @param {LogisticApplicationValidator.GetCountriesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetCountries>} - Success response
     * @name getCountries
     * @summary: Get countries
     * @description: List of supported countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountries/).
     */
    getCountries({ onboarding, pageNo, pageSize, q, requestHeaders }?: LogisticApplicationValidator.GetCountriesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetCountries>;
    /**
     * @param {LogisticApplicationValidator.GetCountryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetCountry>} - Success response
     * @name getCountry
     * @summary: Get country details
     * @description: Get details about a particular country and its address format customized for different business scenarios. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountry/).
     */
    getCountry({ countryIsoCode, requestHeaders }?: LogisticApplicationValidator.GetCountryParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetCountry>;
    /**
     * @param {LogisticApplicationValidator.GetLocalitiesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetLocalities>} - Success response
     * @name getLocalities
     * @summary: Get localities
     * @description: Get geographical data for a specific type of locality based on the provided filters. For instance, obtain a list of cities for a given country and state. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocalities/).
     */
    getLocalities({ localityType, country, state, city, pageNo, pageSize, q, requestHeaders, }?: LogisticApplicationValidator.GetLocalitiesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetLocalities>;
    /**
     * @param {LogisticApplicationValidator.GetLocalityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetLocality>} - Success response
     * @name getLocality
     * @summary: Get locality detail
     * @description: Get detailed geographical data for a specific locality, such as a pincode. For example, for a pincode value of 400603, the service returns its parent locations, including city, state, and country details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocality/).
     */
    getLocality({ localityType, localityValue, country, state, city, requestHeaders }?: LogisticApplicationValidator.GetLocalityParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetLocality>;
    /**
     * @param {LogisticApplicationValidator.GetLocationsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetStoreResponse>} - Success response
     * @name getLocations
     * @summary: Get available selling locations
     * @description: Get stores available for the application based on Delivery Zones and Order Orchestration rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocations/).
     */
    getLocations({ xApplicationId, xApplicationData, country, state, city, pincode, sector, pageNo, pageSize, requestHeaders, }?: LogisticApplicationValidator.GetLocationsParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetStoreResponse>;
    /**
     * @param {LogisticApplicationValidator.GetOptimalLocationsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.ReAssignStoreResponse>} -
     *   Success response
     * @name getOptimalLocations
     * @summary: Get selling locations
     * @description: Get optimal fulfillment centre for customers by analyzing their location, product availability, and inventory levels. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getOptimalLocations/).
     */
    getOptimalLocations({ body, requestHeaders }?: LogisticApplicationValidator.GetOptimalLocationsParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.ReAssignStoreResponse>;
    /**
     * @param {LogisticApplicationValidator.GetPincodeCityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.PincodeApiResponse>} - Success response
     * @name getPincodeCity
     * @summary: Get pincode details
     * @description: Get details of a specific pincode, such as obtaining its city and state information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeCity/).
     */
    getPincodeCity({ pincode, requestHeaders }?: LogisticApplicationValidator.GetPincodeCityParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.PincodeApiResponse>;
    /**
     * @param {LogisticApplicationValidator.GetPincodeZonesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>}
     *   - Success response
     *
     * @name getPincodeZones
     * @summary: Get zones
     * @description: Get the delivery zone associated with a given pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeZones/).
     */
    getPincodeZones({ body, requestHeaders }?: LogisticApplicationValidator.GetPincodeZonesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>;
    /**
     * @param {LogisticApplicationValidator.GetTatProductParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.TATViewResponse>} - Success response
     * @name getTatProduct
     * @summary: Get product's turnaround time
     * @description: Get the estimated delivery time frame for a specific product from a designated store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getTatProduct/).
     */
    getTatProduct({ body, requestHeaders }?: LogisticApplicationValidator.GetTatProductParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.TATViewResponse>;
    /**
     * @param {LogisticApplicationValidator.ValidateAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.ValidateAddressRequest>} -
     *   Success response
     * @name validateAddress
     * @summary: Validate address
     * @description: Validate addresses using specific templates customized for each country and tailored to various business scenarios. This validation ensures that the data conforms to the information currently stored in the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/validateAddress/).
     */
    validateAddress({ countryIsoCode, templateName, body, requestHeaders }?: LogisticApplicationValidator.ValidateAddressParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.ValidateAddressRequest>;
}
import LogisticApplicationModel = require("./LogisticApplicationModel");
import LogisticApplicationValidator = require("./LogisticApplicationValidator");
