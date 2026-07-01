export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllCountries: string;
        getCountries: string;
        getCountry: string;
        getDeliveryPromise: string;
        getFulfillmentOptionStores: string;
        getFulfillmentOptions: string;
        getLocalities: string;
        getLocality: string;
        validateAddress: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CountryResult>} - Success response
     * @name getAllCountries
     * @summary: Get deliverable countries
     * @description: Get a list of countries within the specified delivery zones for that application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getAllCountries/).
     */
    getAllCountries({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CountryResult>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCountries>} - Success response
     * @name getCountries
     * @summary: Get countries
     * @description: List of supported countries. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getCountries/).
     */
    getCountries({ onboarding, pageNo, pageSize, q, hierarchy, phoneCode, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetCountries>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetCountry>} - Success response
     * @name getCountry
     * @summary: Get country details
     * @description: Get details about a particular country and its address format customized for different business scenarios. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getCountry/).
     */
    getCountry({ countryIsoCode, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetCountry>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetPromiseDetails>} - Success response
     * @name getDeliveryPromise
     * @summary: Get delivery promise
     * @description: Delivery Promise Configurations involve estimating and communicating the anticipated delivery date or time to customers, taking into account parameters like store processing time, delivery partner time to delivery, and buffer time. This helps establish precise delivery expectations based on both the delivery partner's capabilities and the store's operations. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getDeliveryPromise/).
     */
    getDeliveryPromise({ xLocationDetail, pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<GetPromiseDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FulfillmentOptionStores>} - Success response
     * @name getFulfillmentOptionStores
     * @summary: Get Fulfillment Option Stores
     * @description: Fetches a paginated list of stores associated with a given fulfillment option slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getFulfillmentOptionStores/).
     */
    getFulfillmentOptionStores({ slug, pageNo, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<FulfillmentOptionStores>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FulfillmentOptionsList>} - Success response
     * @name getFulfillmentOptions
     * @summary: Get fulfillment options
     * @description: Fetches available fulfillment options. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getFulfillmentOptions/).
     */
    getFulfillmentOptions({ xApplicationData, productSlug, storeId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<FulfillmentOptionsList>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetLocalitiesApp>} - Success response
     * @name getLocalities
     * @summary: Get Localities
     * @description: Get Localities data. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getLocalities/).
     */
    getLocalities({ localityType, country, state, city, pageNo, pageSize, q, sector, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetLocalitiesApp>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetLocalityApp>} - Success response
     * @name getLocality
     * @summary: Get Locality API
     * @description: Get detailed geographical data for a specific locality, such as a pincode. For example, for a pincode value of 400603, the service returns its parent locations, including city, state, and country details. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/getLocality/).
     */
    getLocality({ localityType, localityValue, country, state, city, sector, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<GetLocalityApp>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ValidateAddressDetails>} - Success response
     * @name validateAddress
     * @summary: Validate address
     * @description: Validate addresses using specific templates customized for each country and tailored to various business scenarios. This validation ensures that the data conforms to the information currently stored in the system. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/logistic/validateAddress/).
     */
    validateAddress({ countryIsoCode, templateName, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<ValidateAddressDetails>;
}
