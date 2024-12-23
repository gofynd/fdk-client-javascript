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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CountryListResult>} - Success response
     * @name getAllCountries
     * @summary: Get deliverable countries
     * @description: Get a list of countries within the specified delivery zones for that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getAllCountries/).
     */
    getAllCountries({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CountryListResult>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCountries>} - Success response
     * @name getCountries
     * @summary: Get countries
     * @description: List of supported countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountries/).
     */
    getCountries({ onboarding, pageNo, pageSize, q, hierarchy, phoneCode, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetCountries>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCountry>} - Success response
     * @name getCountry
     * @summary: Get country details
     * @description: Get details about a particular country and its address format customized for different business scenarios. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCountry/).
     */
    getCountry({ countryIsoCode, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetCountry>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ShipmentCourierPartnerResult>} - Success response
     * @name getCourierPartners
     * @summary: Serviceable Courier Partners.
     * @description: Get all the serviceable courier partners of a destination and the shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getCourierPartners/).
     */
    getCourierPartners({ companyId, applicationId, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ShipmentCourierPartnerResult>;
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
     * @returns {Promise<GetLocalities>} - Success response
     * @name getLocalities
     * @summary: Get localities
     * @description: Get geographical data for a specific type of locality based on the provided filters. For instance, obtain a list of cities for a given country and state. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocalities/).
     */
    getLocalities({ localityType, country, state, city, pageNo, pageSize, q, sector, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetLocalities>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetLocality>} - Success response
     * @name getLocality
     * @summary: Get locality detail
     * @description: Get detailed geographical data for a specific locality, such as a pincode. For example, for a pincode value of 400603, the service returns its parent locations, including city, state, and country details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocality/).
     */
    getLocality({ localityType, localityValue, country, state, city, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetLocality>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetStoreResult>} - Success response
     * @name getLocations
     * @summary: Get available selling locations
     * @description: Get stores available for the application based on Delivery Zones and Order Orchestration rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getLocations/).
     */
    getLocations({ xApplicationId, xApplicationData, country, state, city, pincode, sector, pageNo, pageSize, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetStoreResult>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ReAssignStoreResult>} - Success response
     * @name getOptimalLocations
     * @summary: Get selling locations
     * @description: Get optimal fulfillment centre for customers by analyzing their location, product availability, and inventory levels. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getOptimalLocations/).
     */
    getOptimalLocations({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ReAssignStoreResult>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PincodeDetails>} - Success response
     * @name getPincodeCity
     * @summary: Get pincode details
     * @description: Get details of a specific pincode, such as obtaining its city and state information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeCity/).
     */
    getPincodeCity({ pincode, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PincodeDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetZoneFromPincodeViewResult>} - Success response
     * @name getPincodeZones
     * @summary: Get zones
     * @description: Get the delivery zone associated with a given pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeZones/).
     */
    getPincodeZones({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetZoneFromPincodeViewResult>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<TATViewResult>} - Success response
     * @name getTatProduct
     * @summary: Get product's turnaround time
     * @description: Get the estimated delivery time frame for a specific product from a designated store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getTatProduct/).
     */
    getTatProduct({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<TATViewResult>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ValidateAddressDetails>} - Success response
     * @name validateAddress
     * @summary: Validate address
     * @description: Validate addresses using specific templates customized for each country and tailored to various business scenarios. This validation ensures that the data conforms to the information currently stored in the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/validateAddress/).
     */
    validateAddress({ countryIsoCode, templateName, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ValidateAddressDetails>;
}
