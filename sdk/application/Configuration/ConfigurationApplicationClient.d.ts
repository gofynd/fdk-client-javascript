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
     * @summary: Retrieves app-specific currencies
     * @description: Retrieve a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppCurrencies/).
     */
    getAppCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppCurrencyResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetAppStaffListParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppStaffListResponse>} -
     *   Success response
     * @name getAppStaffList
     * @summary: Lists app staff members
     * @description: Retrieve a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffList/).
     */
    getAppStaffList({ pageNo, pageSize, orderIncent, orderingStore, user, userName, requestHeaders, }?: ConfigurationApplicationValidator.GetAppStaffListParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppStaffListResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetAppStaffsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppStaffResponse>} -
     *   Success response
     * @name getAppStaffs
     * @summary: Fetches detailed staff info
     * @description: Retrieve a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffs/).
     */
    getAppStaffs({ orderIncent, orderingStore, user, requestHeaders }?: ConfigurationApplicationValidator.GetAppStaffsParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppStaffResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetApplicationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.Application>} - Success response
     * @name getApplication
     * @summary: Fetches application details
     * @description: Retrieve the current sales channel details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getApplication/).
     */
    getApplication({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.Application>;
    /**
     * @param {ConfigurationApplicationValidator.GetBasicDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.ApplicationDetail>} -
     *   Success response
     * @name getBasicDetails
     * @summary: Retrieves basic app info
     * @description: Retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getBasicDetails/).
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
     * @summary: Retrieves contact details
     * @description: Retrieve information about the social links, address and contact information of the company/seller/brand operating the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getContactInfo/).
     */
    getContactInfo({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.ApplicationInformation>;
    /**
     * @param {ConfigurationApplicationValidator.GetCurrenciesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.CurrenciesResponse>} -
     *   Success response
     * @name getCurrencies
     * @summary: Lists supported currencies
     * @description: Retrieve a list of currencies available. Also get the name, code, symbol, and the decimal digits of the currencies.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencies/).
     */
    getCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.CurrenciesResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetCurrencyByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.Currency>} - Success response
     * @name getCurrencyById
     * @summary: Fetches currency by ID
     * @description: Retrieve details of a specific currency using its ID.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencyById/).
     */
    getCurrencyById({ id, requestHeaders }?: ConfigurationApplicationValidator.GetCurrencyByIdParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.Currency>;
    /**
     * @param {ConfigurationApplicationValidator.GetFeaturesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppFeatureResponse>} -
     *   Success response
     * @name getFeatures
     * @summary: Fetches app features
     * @description: Retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getFeatures/).
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
     * @summary: Fetches API tokens
     * @description: Retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getIntegrationTokens/).
     */
    getIntegrationTokens({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppTokenResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetLanguagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.LanguageResponse>} -
     *   Success response
     * @name getLanguages
     * @summary: Lists available languages
     * @description: Retrieves all languages supported by the app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getLanguages/).
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
     * @summary: Retrieves store selection cookie
     * @description: Retrieve an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStoreCookie/).
     */
    getOrderingStoreCookie({ body, requestHeaders }?: ConfigurationApplicationValidator.GetOrderingStoreCookieParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.SuccessMessageResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetOrderingStoresParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.OrderingStores>} - Success response
     * @name getOrderingStores
     * @summary: Lists order-enabled stores
     * @description: Retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStores/).
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
     * @summary: Retrieves application owner details
     * @description: Retrieve the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, etc. Also retrieves the seller and owner information such as address, email address, and phone number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOwnerInfo/).
     */
    getOwnerInfo({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.ApplicationAboutResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetStoreDetailByIdParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.OrderingStore>} - Success response
     * @name getStoreDetailById
     * @summary: Retrieves store details by ID
     * @description: Retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders).  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getStoreDetailById/).
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
     * @summary: Deletes store cookie
     * @description: Unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/removeOrderingStoreCookie/).
     */
    removeOrderingStoreCookie({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.SuccessMessageResponse>;
}
import ConfigurationApplicationModel = require("./ConfigurationApplicationModel");
import ConfigurationApplicationValidator = require("./ConfigurationApplicationValidator");
