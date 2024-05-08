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
     * @returns {Promise<ConfigurationApplicationModel.AppCurrencyResponse>} -
     *   Success response
     * @name getAppCurrencies
     * @summary: Get currency configuration
     * @description: Retrieve currency configuration of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppCurrencies/).
     */
    getAppCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppCurrencyResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetAppStaffListParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppStaffListResponse>} -
     *   Success response
     * @name getAppStaffList
     * @summary: List staff members
     * @description: Retrieve a list of all staff members of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffList/).
     */
    getAppStaffList({ pageNo, pageSize, orderIncent, orderingStore, user, userName, requestHeaders, }?: ConfigurationApplicationValidator.GetAppStaffListParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppStaffListResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetAppStaffsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppStaffResponse>} -
     *   Success response
     * @name getAppStaffs
     * @summary: Get staff member
     * @description: Retrieve a staff user including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffs/).
     */
    getAppStaffs({ orderIncent, orderingStore, user, requestHeaders }?: ConfigurationApplicationValidator.GetAppStaffsParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppStaffResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetApplicationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.Application>} - Success response
     * @name getApplication
     * @summary: Get sales channel
     * @description: Retrieve details of the current sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getApplication/).
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
     * @description: Retrieve basic details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getBasicDetails/).
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
     * @description: Retrieve contact details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getContactInfo/).
     */
    getContactInfo({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.ApplicationInformation>;
    /**
     * @param {ConfigurationApplicationValidator.GetCurrenciesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.CurrenciesResponse>} -
     *   Success response
     * @name getCurrencies
     * @summary: List currencies
     * @description: Retrieve a list of available currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencies/).
     */
    getCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.CurrenciesResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetCurrencyByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.Currency>} - Success response
     * @name getCurrencyById
     * @summary: Get a currency
     * @description: Retrieve details of the currency. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencyById/).
     */
    getCurrencyById({ id, requestHeaders }?: ConfigurationApplicationValidator.GetCurrencyByIdParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.Currency>;
    /**
     * @param {ConfigurationApplicationValidator.GetFeaturesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppFeatureResponse>} -
     *   Success response
     * @name getFeatures
     * @summary: Get sales channel features
     * @description: Retrieve configuration of the features of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getFeatures/).
     */
    getFeatures({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppFeatureResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetIntegrationTokensParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppTokenResponse>} -
     *   Success response
     * @name getIntegrationTokens
     * @summary: Get API tokens
     * @description: Retrieve tools integration token of the sales channel. For ex- Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getIntegrationTokens/).
     */
    getIntegrationTokens({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppTokenResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetLanguagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.LanguageResponse>} -
     *   Success response
     * @name getLanguages
     * @summary: List languages
     * @description: Retrieve a list of available languages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getLanguages/).
     */
    getLanguages({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.LanguageResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetOrderingStoreCookieParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.SuccessMessageResponse>}
     *   - Success response
     *
     * @name getOrderingStoreCookie
     * @summary: Create cookies
     * @description: Reset cookie of ordering store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStoreCookie/).
     */
    getOrderingStoreCookie({ body, requestHeaders }?: ConfigurationApplicationValidator.GetOrderingStoreCookieParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.SuccessMessageResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetOrderingStoresParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.OrderingStores>} - Success response
     * @name getOrderingStores
     * @summary: List order-enabled selling locations
     * @description: Retrieve details of all the deployment store locations where the sales channel will be used for order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStores/).
     */
    getOrderingStores({ pageNo, pageSize, q, requestHeaders }?: ConfigurationApplicationValidator.GetOrderingStoresParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.OrderingStores>;
    /**
     * @param {ConfigurationApplicationValidator.GetOwnerInfoParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.ApplicationAboutResponse>}
     *   - Success response
     *
     * @name getOwnerInfo
     * @summary: Get sales channel owner
     * @description: Retrieve details of the sales channel owner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOwnerInfo/).
     */
    getOwnerInfo({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.ApplicationAboutResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetStoreDetailByIdParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.OrderingStore>} - Success response
     * @name getStoreDetailById
     * @summary: Get a selling location
     * @description: Retrieve detail of a selling location (store) by it's Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getStoreDetailById/).
     */
    getStoreDetailById({ storeId, requestHeaders }?: ConfigurationApplicationValidator.GetStoreDetailByIdParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.OrderingStore>;
    /**
     * @param {ConfigurationApplicationValidator.RemoveOrderingStoreCookieParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.SuccessMessageResponse>}
     *   - Success response
     *
     * @name removeOrderingStoreCookie
     * @summary: Delete store cookie
     * @description: Remove store cookie - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/removeOrderingStoreCookie/).
     */
    removeOrderingStoreCookie({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.SuccessMessageResponse>;
}
import ConfigurationApplicationModel = require("./ConfigurationApplicationModel");
import ConfigurationApplicationValidator = require("./ConfigurationApplicationValidator");
