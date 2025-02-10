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
     * @returns {Promise<AppCurrencyResponse>} - Success response
     * @name getAppCurrencies
     * @summary: Retrieves app-specific currencies.
     * @description: Get currency configuration of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppCurrencies/).
     */
    getAppCurrencies({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppCurrencyResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppStaffListResponse>} - Success response
     * @name getAppStaffList
     * @summary: Lists app staff members.
     * @description: List all staff members of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffList/).
     */
    getAppStaffList({ pageNo, pageSize, orderIncent, orderingStore, user, userName, requestHeaders, }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppStaffListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {boolean} [arg.orderIncent] - Select `true` to retrieve the staff
     *   members eligible for getting incentives on orders.
     * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
     *   retrieving staff members working at a particular ordering store.
     * @param {string} [arg.user] - ID of the staff. Helps in retrieving the
     *   details of a particular staff member.
     * @param {string} [arg.userName] - Username of the member.
     * @returns {Paginator<AppStaffListResponse>}
     * @summary: Lists app staff members.
     * @description: List all staff members of the sales channel.
     */
    getAppStaffListPaginator({ pageSize, orderIncent, orderingStore, user, userName, }?: {
        pageSize?: number;
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
        userName?: string;
    }): Paginator<AppStaffListResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppStaffResponse>} - Success response
     * @name getAppStaffs
     * @summary: Fetches detailed staff info.
     * @description: Get a staff user including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffs/).
     */
    getAppStaffs({ orderIncent, orderingStore, user, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppStaffResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Application>} - Success response
     * @name getApplication
     * @summary: Fetches application details.
     * @description: Get details of the current sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getApplication/).
     */
    getApplication({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<Application>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationDetail>} - Success response
     * @name getBasicDetails
     * @summary: Retrieves basic app info.
     * @description: Get basic details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getBasicDetails/).
     */
    getBasicDetails({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationDetail>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationInformation>} - Success response
     * @name getContactInfo
     * @summary: Retrieves contact details.
     * @description: Get contact details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getContactInfo/).
     */
    getContactInfo({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationInformation>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CurrenciesResponse>} - Success response
     * @name getCurrencies
     * @summary: Lists supported currencies.
     * @description: List available currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencies/).
     */
    getCurrencies({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CurrenciesResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Currency>} - Success response
     * @name getCurrencyById
     * @summary: Fetches currency by ID.
     * @description: Get details of the currency. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencyById/).
     */
    getCurrencyById({ id, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<Currency>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppFeatureResponse>} - Success response
     * @name getFeatures
     * @summary: Fetches app features.
     * @description: Get configuration of the features of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getFeatures/).
     */
    getFeatures({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppFeatureResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppTokenResponse>} - Success response
     * @name getIntegrationTokens
     * @summary: Fetches API tokens.
     * @description: Get tools integration token of the sales channel. For example, Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, and Facebook. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getIntegrationTokens/).
     */
    getIntegrationTokens({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<AppTokenResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LanguageResponse>} - Success response
     * @name getLanguages
     * @summary: Lists available languages.
     * @description: List available languages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getLanguages/).
     */
    getLanguages({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<LanguageResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SuccessMessageResponse>} - Success response
     * @name getOrderingStoreCookie
     * @summary: Retrieves store selection cookie.
     * @description: Reset cookie of ordering store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStoreCookie/).
     */
    getOrderingStoreCookie({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SuccessMessageResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderingStores>} - Success response
     * @name getOrderingStores
     * @summary: Get all deployment stores
     * @description: Get details of all the deployment store locations where the sales channel will be used for order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStores/).
     */
    getOrderingStores({ pageNo, pageSize, q, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<OrderingStores>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @returns {Paginator<OrderingStores>}
     * @summary: Get all deployment stores
     * @description: Get details of all the deployment store locations where the sales channel will be used for order placement.
     */
    getOrderingStoresPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator<OrderingStores>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationAboutResponse>} - Success response
     * @name getOwnerInfo
     * @summary: Get sales channel, owner and seller information
     * @description: Get details of the sales channel owner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOwnerInfo/).
     */
    getOwnerInfo({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ApplicationAboutResponse>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderingStore>} - Success response
     * @name getStoreDetailById
     * @summary: Get ordering store details
     * @description: Get details of a selling location (store) by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getStoreDetailById/).
     */
    getStoreDetailById({ storeId, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<OrderingStore>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SuccessMessageResponse>} - Success response
     * @name removeOrderingStoreCookie
     * @summary: Deletes store cookie.
     * @description: Delete store cookie. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/removeOrderingStoreCookie/).
     */
    removeOrderingStoreCookie({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SuccessMessageResponse>;
}
import Paginator = require("../../common/Paginator");
