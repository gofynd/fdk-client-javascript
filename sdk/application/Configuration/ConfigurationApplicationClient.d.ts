export = Configuration;
declare class Configuration {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAppCurrencies: string;
        getAppStaffList: string;
        getAppStaffs: string;
        getApplication: string;
        getBasicDetails: string;
        getContactInfo: string;
        getCurrencies: string;
        getCurrencyById: string;
        getFeatures: string;
        getIntegrationTokens: string;
        getLanguages: string;
        getOrderingStoreCookie: string;
        getOrderingStores: string;
        getOwnerInfo: string;
        getStoreDetailById: string;
        removeOrderingStoreCookie: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppCurrencyResponseSchema>} - Success response
     * @name getAppCurrencies
     * @summary: Get currency configuration
     * @description: Get currency configuration of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppCurrencies/).
     */
    getAppCurrencies({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppCurrencyResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppStaffListResponseSchema>} - Success response
     * @name getAppStaffList
     * @summary: List staff members
     * @description: List all staff members of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffList/).
     */
    getAppStaffList({ pageNo, pageSize, orderIncent, orderingStore, user, userName, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppStaffListResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppStaffResponseSchema>} - Success response
     * @name getAppStaffs
     * @summary: Get staff member
     * @description: Get a staff user including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffs/).
     */
    getAppStaffs({ orderIncent, orderingStore, user, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppStaffResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Application>} - Success response
     * @name getApplication
     * @summary: Get sales channel
     * @description: Get details of the current sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getApplication/).
     */
    getApplication({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<Application>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationDetail>} - Success response
     * @name getBasicDetails
     * @summary: Get Sales channel
     * @description: Get basic details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getBasicDetails/).
     */
    getBasicDetails({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationDetail>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationInformation>} - Success response
     * @name getContactInfo
     * @summary: Get sales channel contact
     * @description: Get contact details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getContactInfo/).
     */
    getContactInfo({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationInformation>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CurrenciesResponseSchema>} - Success response
     * @name getCurrencies
     * @summary: List currencies
     * @description: List available currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencies/).
     */
    getCurrencies({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CurrenciesResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Currency>} - Success response
     * @name getCurrencyById
     * @summary: Get a currency
     * @description: Get details of the currency. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencyById/).
     */
    getCurrencyById({ id, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<Currency>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppFeatureResponseSchema>} - Success response
     * @name getFeatures
     * @summary: Get sales channel features
     * @description: Get configuration of the features of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getFeatures/).
     */
    getFeatures({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppFeatureResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppTokenResponseSchema>} - Success response
     * @name getIntegrationTokens
     * @summary: Get API tokens
     * @description: Get tools integration token of the sales channel. For example, Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, and Facebook. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getIntegrationTokens/).
     */
    getIntegrationTokens({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppTokenResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LanguageResponseSchema>} - Success response
     * @name getLanguages
     * @summary: List languages
     * @description: List available languages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getLanguages/).
     */
    getLanguages({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LanguageResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SuccessMessageResponseSchema>} - Success response
     * @name getOrderingStoreCookie
     * @summary: Create cookies
     * @description: Reset cookie of ordering store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStoreCookie/).
     */
    getOrderingStoreCookie({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SuccessMessageResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderingStores>} - Success response
     * @name getOrderingStores
     * @summary: List order-enabled selling locations
     * @description: Get details of all the deployment store locations where the sales channel will be used for order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStores/).
     */
    getOrderingStores({ pageNo, pageSize, q, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<OrderingStores>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationAboutResponseSchema>} - Success response
     * @name getOwnerInfo
     * @summary: Get sales channel owner
     * @description: Get details of the sales channel owner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOwnerInfo/).
     */
    getOwnerInfo({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationAboutResponseSchema>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderingStore>} - Success response
     * @name getStoreDetailById
     * @summary: Get a selling location
     * @description: Get details of a selling location (store) by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getStoreDetailById/).
     */
    getStoreDetailById({ storeId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<OrderingStore>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SuccessMessageResponseSchema>} - Success response
     * @name removeOrderingStoreCookie
     * @summary: Delete store cookie
     * @description: Delete store cookie. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/removeOrderingStoreCookie/).
     */
    removeOrderingStoreCookie({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SuccessMessageResponseSchema>;
}
