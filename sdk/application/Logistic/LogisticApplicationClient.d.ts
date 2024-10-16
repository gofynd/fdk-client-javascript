export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllCountries: string;
        getCountries: string;
        getCountry: string;
        getCourierPartners: string;
        getDeliveryPromise: string;
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
     * @returns {Promise<LogisticApplicationModel.CountryListResult>} - Success response
     * @name getAllCountries
     * @summary: Get deliverable countries
     * @description: Get a list of countries within the specified delivery zones for that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getAllCountries/).
     */
    getAllCountries({ requestHeaders }?: any, { responseHeaders }?: object): Promise<LogisticApplicationModel.CountryListResult>;
    /**
     * @param {LogisticApplicationValidator.GetCountriesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetCountries>} - Success response
     * @name getCountries
     * @summary: Get countries
     * @description: List of supported countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountries/).
     */
    getCountries({ onboarding, pageNo, pageSize, q, hierarchy, requestHeaders }?: LogisticApplicationValidator.GetCountriesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetCountries>;
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
     * @param {LogisticApplicationValidator.GetCourierPartnersParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.ShipmentCourierPartnerResult>}
     *   - Success response
     *
     * @name getCourierPartners
     * @summary: Serviceable Courier Partners.
     * @description: Get all the serviceable courier partners of a destination and the shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCourierPartners/).
     */
    getCourierPartners({ companyId, applicationId, body, requestHeaders }?: LogisticApplicationValidator.GetCourierPartnersParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.ShipmentCourierPartnerResult>;
    /**
     * @param {LogisticApplicationValidator.GetDeliveryPromiseParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetPromiseDetails>} - Success response
     * @name getDeliveryPromise
     * @summary: Get delivery promise
     * @description: Get delivery promises for both global and store levels based on a specific locality type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getDeliveryPromise/).
     */
    getDeliveryPromise({ pageNo, pageSize, requestHeaders }?: LogisticApplicationValidator.GetDeliveryPromiseParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetPromiseDetails>;
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
     * @returns {Promise<LogisticApplicationModel.GetStoreResult>} - Success response
     * @name getLocations
     * @summary: Get available selling locations
     * @description: Get stores available for the application based on Delivery Zones and Order Orchestration rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocations/).
     */
    getLocations({ xApplicationId, xApplicationData, country, state, city, pincode, sector, pageNo, pageSize, requestHeaders, }?: LogisticApplicationValidator.GetLocationsParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetStoreResult>;
    /**
     * @param {LogisticApplicationValidator.GetOptimalLocationsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.ReAssignStoreResult>} - Success response
     * @name getOptimalLocations
     * @summary: Get selling locations
     * @description: Get optimal fulfillment centre for customers by analyzing their location, product availability, and inventory levels. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getOptimalLocations/).
     */
    getOptimalLocations({ body, requestHeaders }?: LogisticApplicationValidator.GetOptimalLocationsParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.ReAssignStoreResult>;
    /**
     * @param {LogisticApplicationValidator.GetPincodeCityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.PincodeDetails>} - Success response
     * @name getPincodeCity
     * @summary: Get pincode details
     * @description: Get details of a specific pincode, such as obtaining its city and state information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeCity/).
     */
    getPincodeCity({ pincode, requestHeaders }?: LogisticApplicationValidator.GetPincodeCityParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.PincodeDetails>;
    /**
     * @param {LogisticApplicationValidator.GetPincodeZonesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.GetZoneFromPincodeViewResult>}
     *   - Success response
     *
     * @name getPincodeZones
     * @summary: Get zones
     * @description: Get the delivery zone associated with a given pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeZones/).
     */
    getPincodeZones({ body, requestHeaders }?: LogisticApplicationValidator.GetPincodeZonesParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.GetZoneFromPincodeViewResult>;
    /**
     * @param {LogisticApplicationValidator.GetTatProductParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.TATViewResult>} - Success response
     * @name getTatProduct
     * @summary: Get product's turnaround time
     * @description: Get the estimated delivery time frame for a specific product from a designated store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getTatProduct/).
     */
    getTatProduct({ body, requestHeaders }?: LogisticApplicationValidator.GetTatProductParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.TATViewResult>;
    /**
     * @param {LogisticApplicationValidator.ValidateAddressParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LogisticApplicationModel.ValidateAddressDetails>} -
     *   Success response
     * @name validateAddress
     * @summary: Validate address
     * @description: Validate addresses using specific templates customized for each country and tailored to various business scenarios. This validation ensures that the data conforms to the information currently stored in the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/validateAddress/).
     */
    validateAddress({ countryIsoCode, templateName, body, requestHeaders }?: LogisticApplicationValidator.ValidateAddressParam, { responseHeaders }?: object): Promise<LogisticApplicationModel.ValidateAddressDetails>;
}
import LogisticApplicationModel = require("./LogisticApplicationModel");
import LogisticApplicationValidator = require("./LogisticApplicationValidator");
