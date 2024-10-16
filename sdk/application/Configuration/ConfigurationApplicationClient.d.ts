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
     * @param {ConfigurationApplicationValidator.GetAppCurrenciesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppCurrencyResponseSchema>}
     *   - Success response
     *
     * @name getAppCurrencies
     * @summary: Get currency configuration
     * @description: Get currency configuration of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppCurrencies/).
     */
    getAppCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppCurrencyResponseSchema>;
    /**
     * @param {ConfigurationApplicationValidator.GetAppStaffListParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppStaffListResponseSchema>}
     *   - Success response
     *
     * @name getAppStaffList
     * @summary: List staff members
     * @description: List all staff members of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffList/).
     */
    getAppStaffList({ pageNo, pageSize, orderIncent, orderingStore, user, userName, requestHeaders, }?: ConfigurationApplicationValidator.GetAppStaffListParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppStaffListResponseSchema>;
    /**
     * @param {ConfigurationApplicationValidator.GetAppStaffsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppStaffResponseSchema>}
     *   - Success response
     *
     * @name getAppStaffs
     * @summary: Get staff member
     * @description: Get a staff user including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffs/).
     */
    getAppStaffs({ orderIncent, orderingStore, user, requestHeaders }?: ConfigurationApplicationValidator.GetAppStaffsParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppStaffResponseSchema>;
    /**
     * @param {ConfigurationApplicationValidator.GetApplicationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.Application>} - Success response
     * @name getApplication
     * @summary: Get sales channel
     * @description: Get details of the current sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getApplication/).
     */
    getApplication({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.Application>;
    /**
     * @param {ConfigurationApplicationValidator.GetBasicDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.ApplicationDetail>} -
     *   Success response
     * @name getBasicDetails
     * @summary: Get Sales channel
     * @description: Get basic details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getBasicDetails/).
     */
    getBasicDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.ApplicationDetail>;
    /**
     * @param {ConfigurationApplicationValidator.GetContactInfoParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.ApplicationInformation>}
     *   - Success response
     *
     * @name getContactInfo
     * @summary: Get sales channel contact
     * @description: Get contact details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getContactInfo/).
     */
    getContactInfo({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.ApplicationInformation>;
    /**
     * @param {ConfigurationApplicationValidator.GetCurrenciesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.CurrenciesResponseSchema>}
     *   - Success response
     *
     * @name getCurrencies
     * @summary: List currencies
     * @description: List available currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencies/).
     */
    getCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.CurrenciesResponseSchema>;
    /**
     * @param {ConfigurationApplicationValidator.GetCurrencyByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.Currency>} - Success response
     * @name getCurrencyById
     * @summary: Get a currency
     * @description: Get details of the currency. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencyById/).
     */
    getCurrencyById({ id, requestHeaders }?: ConfigurationApplicationValidator.GetCurrencyByIdParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.Currency>;
    /**
     * @param {ConfigurationApplicationValidator.GetFeaturesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppFeatureResponseSchema>}
     *   - Success response
     *
     * @name getFeatures
     * @summary: Get sales channel features
     * @description: Get configuration of the features of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getFeatures/).
     */
    getFeatures({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppFeatureResponseSchema>;
    /**
     * @param {ConfigurationApplicationValidator.GetIntegrationTokensParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppTokenResponseSchema>}
     *   - Success response
     *
     * @name getIntegrationTokens
     * @summary: Get API tokens
     * @description: Get tools integration token of the sales channel. For example, Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, and Facebook. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getIntegrationTokens/).
     */
    getIntegrationTokens({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppTokenResponseSchema>;
    /**
     * @param {ConfigurationApplicationValidator.GetLanguagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.LanguageResponseSchema>}
     *   - Success response
     *
     * @name getLanguages
     * @summary: List languages
     * @description: List available languages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getLanguages/).
     */
    getLanguages({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.LanguageResponseSchema>;
    /**
     * @param {ConfigurationApplicationValidator.GetOrderingStoreCookieParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.SuccessMessageResponseSchema>}
     *   - Success response
     *
     * @name getOrderingStoreCookie
     * @summary: Create cookies
     * @description: Reset cookie of ordering store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStoreCookie/).
     */
    getOrderingStoreCookie({ body, requestHeaders }?: ConfigurationApplicationValidator.GetOrderingStoreCookieParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.SuccessMessageResponseSchema>;
    /**
     * @param {ConfigurationApplicationValidator.GetOrderingStoresParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.OrderingStores>} - Success response
     * @name getOrderingStores
     * @summary: List order-enabled selling locations
     * @description: Get details of all the deployment store locations where the sales channel will be used for order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStores/).
     */
    getOrderingStores({ pageNo, pageSize, q, requestHeaders }?: ConfigurationApplicationValidator.GetOrderingStoresParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.OrderingStores>;
    /**
     * @param {ConfigurationApplicationValidator.GetOwnerInfoParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.ApplicationAboutResponseSchema>}
     *   - Success response
     *
     * @name getOwnerInfo
     * @summary: Get sales channel owner
     * @description: Get details of the sales channel owner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOwnerInfo/).
     */
    getOwnerInfo({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.ApplicationAboutResponseSchema>;
    /**
     * @param {ConfigurationApplicationValidator.GetStoreDetailByIdParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.OrderingStore>} - Success response
     * @name getStoreDetailById
     * @summary: Get a selling location
     * @description: Get details of a selling location (store) by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getStoreDetailById/).
     */
    getStoreDetailById({ storeId, requestHeaders }?: ConfigurationApplicationValidator.GetStoreDetailByIdParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.OrderingStore>;
    /**
     * @param {ConfigurationApplicationValidator.RemoveOrderingStoreCookieParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.SuccessMessageResponseSchema>}
     *   - Success response
     *
     * @name removeOrderingStoreCookie
     * @summary: Delete store cookie
     * @description: Delete store cookie. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/removeOrderingStoreCookie/).
     */
    removeOrderingStoreCookie({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.SuccessMessageResponseSchema>;
}
import ConfigurationApplicationModel = require("./ConfigurationApplicationModel");
import ConfigurationApplicationValidator = require("./ConfigurationApplicationValidator");
