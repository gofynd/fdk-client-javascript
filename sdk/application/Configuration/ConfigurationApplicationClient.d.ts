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
     * @summary: Get currencies enabled in the application
     * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppCurrencies/).
     */
    getAppCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppCurrencyResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetAppStaffListParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppStaffListResponse>} -
     *   Success response
     * @name getAppStaffList
     * @summary: Get a list of staff.
     * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffList/).
     */
    getAppStaffList({ pageNo, pageSize, orderIncent, orderingStore, user, userName, requestHeaders, }?: ConfigurationApplicationValidator.GetAppStaffListParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppStaffListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.orderIncent] - This is a boolean value. Select
     *   `true` to retrieve the staff members eligible for getting incentives on orders.
     * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
     *   retrieving staff members working at a particular ordering store.
     * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving
     *   the details of a particular staff member.
     * @param {string} [arg.userName] - User name of the member
     * @returns {Paginator<ConfigurationApplicationModel.AppStaffListResponse>}
     * @summary: Get a list of staff.
     * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
     */
    getAppStaffListPaginator({ pageSize, orderIncent, orderingStore, user, userName, }?: {
        pageSize?: number;
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
        userName?: string;
    }): Paginator<ConfigurationApplicationModel.AppStaffListResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetAppStaffsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppStaffResponse>} -
     *   Success response
     * @name getAppStaffs
     * @summary: Get a list of staff.
     * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffs/).
     */
    getAppStaffs({ orderIncent, orderingStore, user, requestHeaders }?: ConfigurationApplicationValidator.GetAppStaffsParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppStaffResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetApplicationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.Application>} - Success response
     * @name getApplication
     * @summary: Get current sales channel details
     * @description: Use this API to get the current sales channel details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getApplication/).
     */
    getApplication({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.Application>;
    /**
     * @param {ConfigurationApplicationValidator.GetBasicDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.ApplicationDetail>} -
     *   Success response
     * @name getBasicDetails
     * @summary: Get basic details of the application
     * @description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getBasicDetails/).
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
     * @summary: Get application information
     * @description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getContactInfo/).
     */
    getContactInfo({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.ApplicationInformation>;
    /**
     * @param {ConfigurationApplicationValidator.GetCurrenciesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.CurrenciesResponse>} -
     *   Success response
     * @name getCurrencies
     * @summary: Get all currencies list
     * @description: Use this API to get a list of currencies available. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencies/).
     */
    getCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.CurrenciesResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetCurrencyByIdParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.Currency>} - Success response
     * @name getCurrencyById
     * @summary: Get currency by its ID
     * @description: Use this API to retrieve a currency using its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencyById/).
     */
    getCurrencyById({ id, requestHeaders }?: ConfigurationApplicationValidator.GetCurrencyByIdParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.Currency>;
    /**
     * @param {ConfigurationApplicationValidator.GetFeaturesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.AppFeatureResponse>} -
     *   Success response
     * @name getFeatures
     * @summary: Get features of application
     * @description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getFeatures/).
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
     * @summary: Get integration tokens
     * @description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getIntegrationTokens/).
     */
    getIntegrationTokens({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.AppTokenResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetLanguagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.LanguageResponse>} -
     *   Success response
     * @name getLanguages
     * @summary: Get list of languages
     * @description: Use this API to get a list of languages supported in the application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getLanguages/).
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
     * @summary: Get an Ordering Store signed cookie on selection of ordering store.
     * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStoreCookie/).
     */
    getOrderingStoreCookie({ body, requestHeaders }?: ConfigurationApplicationValidator.GetOrderingStoreCookieParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.SuccessMessageResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetOrderingStoresParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.OrderingStores>} - Success response
     * @name getOrderingStores
     * @summary: Get all deployment stores
     * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStores/).
     */
    getOrderingStores({ pageNo, pageSize, q, requestHeaders }?: ConfigurationApplicationValidator.GetOrderingStoresParam, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.OrderingStores>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @returns {Paginator<ConfigurationApplicationModel.OrderingStores>}
     * @summary: Get all deployment stores
     * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
     */
    getOrderingStoresPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator<ConfigurationApplicationModel.OrderingStores>;
    /**
     * @param {ConfigurationApplicationValidator.GetOwnerInfoParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.ApplicationAboutResponse>}
     *   - Success response
     *
     * @name getOwnerInfo
     * @summary: Get sales channel, owner and seller information
     * @description: Use this API to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOwnerInfo/).
     */
    getOwnerInfo({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.ApplicationAboutResponse>;
    /**
     * @param {ConfigurationApplicationValidator.GetStoreDetailByIdParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ConfigurationApplicationModel.OrderingStore>} - Success response
     * @name getStoreDetailById
     * @summary: Get ordering store details
     * @description: Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getStoreDetailById/).
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
     * @summary: Unset the Ordering Store signed cookie.
     * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/removeOrderingStoreCookie/).
     */
    removeOrderingStoreCookie({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationApplicationModel.SuccessMessageResponse>;
}
import ConfigurationApplicationModel = require("./ConfigurationApplicationModel");
import ConfigurationApplicationValidator = require("./ConfigurationApplicationValidator");
import Paginator = require("../../common/Paginator");
