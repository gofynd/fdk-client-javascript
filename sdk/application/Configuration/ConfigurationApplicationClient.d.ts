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
     * @param {ConfigurationApplicationValidator.getAppCurrencies} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.AppCurrencyResponse>} -
     *   Success response
     * @name getAppCurrencies
     * @summary: Get currencies enabled in the application
     * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getAppCurrencies({}?: any): Promise<ConfigurationApplicationModel.AppCurrencyResponse>;
    /**
     * @param {ConfigurationApplicationValidator.getAppStaffList} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.AppStaffListResponse>} -
     *   Success response
     * @name getAppStaffList
     * @summary: Get a list of staff.
     * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
     */
    getAppStaffList({ pageNo, pageSize, orderIncent, orderingStore, user, userName, }?: ConfigurationApplicationValidator.getAppStaffList): Promise<ConfigurationApplicationModel.AppStaffListResponse>;
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
     * @param {ConfigurationApplicationValidator.getAppStaffs} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.AppStaffResponse>} -
     *   Success response
     * @name getAppStaffs
     * @summary: Get a list of staff.
     * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
     */
    getAppStaffs({ orderIncent, orderingStore, user }?: ConfigurationApplicationValidator.getAppStaffs): Promise<ConfigurationApplicationModel.AppStaffResponse>;
    /**
     * @param {ConfigurationApplicationValidator.getApplication} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.Application>} - Success response
     * @name getApplication
     * @summary: Get current sales channel details
     * @description: Use this API to get the current sales channel details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.
     */
    getApplication({}?: any): Promise<ConfigurationApplicationModel.Application>;
    /**
     * @param {ConfigurationApplicationValidator.getBasicDetails} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.ApplicationDetail>} -
     *   Success response
     * @name getBasicDetails
     * @summary: Get basic details of the application
     * @description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.
     */
    getBasicDetails({}?: any): Promise<ConfigurationApplicationModel.ApplicationDetail>;
    /**
     * @param {ConfigurationApplicationValidator.getContactInfo} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.ApplicationInformation>}
     *   - Success response
     *
     * @name getContactInfo
     * @summary: Get application information
     * @description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.
     */
    getContactInfo({}?: any): Promise<ConfigurationApplicationModel.ApplicationInformation>;
    /**
     * @param {ConfigurationApplicationValidator.getCurrencies} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.CurrenciesResponse>} -
     *   Success response
     * @name getCurrencies
     * @summary: Get all currencies list
     * @description: Use this API to get a list of currencies available. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getCurrencies({}?: any): Promise<ConfigurationApplicationModel.CurrenciesResponse>;
    /**
     * @param {ConfigurationApplicationValidator.getCurrencyById} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.Currency>} - Success response
     * @name getCurrencyById
     * @summary: Get currency by its ID
     * @description: Use this API to retrieve a currency using its ID.
     */
    getCurrencyById({ id }?: ConfigurationApplicationValidator.getCurrencyById): Promise<ConfigurationApplicationModel.Currency>;
    /**
     * @param {ConfigurationApplicationValidator.getFeatures} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.AppFeatureResponse>} -
     *   Success response
     * @name getFeatures
     * @summary: Get features of application
     * @description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.
     */
    getFeatures({}?: any): Promise<ConfigurationApplicationModel.AppFeatureResponse>;
    /**
     * @param {ConfigurationApplicationValidator.getIntegrationTokens} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.AppTokenResponse>} -
     *   Success response
     * @name getIntegrationTokens
     * @summary: Get integration tokens
     * @description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.
     */
    getIntegrationTokens({}?: any): Promise<ConfigurationApplicationModel.AppTokenResponse>;
    /**
     * @param {ConfigurationApplicationValidator.getLanguages} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.LanguageResponse>} -
     *   Success response
     * @name getLanguages
     * @summary: Get list of languages
     * @description: Use this API to get a list of languages supported in the application
     */
    getLanguages({}?: any): Promise<ConfigurationApplicationModel.LanguageResponse>;
    /**
     * @param {ConfigurationApplicationValidator.getOrderingStoreCookie} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.SuccessMessageResponse>}
     *   - Success response
     *
     * @name getOrderingStoreCookie
     * @summary: Get an Ordering Store signed cookie on selection of ordering store.
     * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.
     */
    getOrderingStoreCookie({ body }?: ConfigurationApplicationValidator.getOrderingStoreCookie): Promise<ConfigurationApplicationModel.SuccessMessageResponse>;
    /**
     * @param {ConfigurationApplicationValidator.getOrderingStores} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.OrderingStores>} - Success response
     * @name getOrderingStores
     * @summary: Get all deployment stores
     * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
     */
    getOrderingStores({ pageNo, pageSize, q }?: ConfigurationApplicationValidator.getOrderingStores): Promise<ConfigurationApplicationModel.OrderingStores>;
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
     * @param {ConfigurationApplicationValidator.getOwnerInfo} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.ApplicationAboutResponse>}
     *   - Success response
     *
     * @name getOwnerInfo
     * @summary: Get sales channel, owner and seller information
     * @description: Use this API to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.
     */
    getOwnerInfo({}?: any): Promise<ConfigurationApplicationModel.ApplicationAboutResponse>;
    /**
     * @param {ConfigurationApplicationValidator.getStoreDetailById} arg - Arg object.
     * @returns {Promise<ConfigurationApplicationModel.OrderingStore>} - Success response
     * @name getStoreDetailById
     * @summary: Get ordering store details
     * @description: Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders).
     */
    getStoreDetailById({ storeId }?: ConfigurationApplicationValidator.getStoreDetailById): Promise<ConfigurationApplicationModel.OrderingStore>;
    /**
     * @param {ConfigurationApplicationValidator.removeOrderingStoreCookie} arg
     *   - Arg object.
     *
     * @returns {Promise<ConfigurationApplicationModel.SuccessMessageResponse>}
     *   - Success response
     *
     * @name removeOrderingStoreCookie
     * @summary: Unset the Ordering Store signed cookie.
     * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.
     */
    removeOrderingStoreCookie({}?: any): Promise<ConfigurationApplicationModel.SuccessMessageResponse>;
}
import ConfigurationApplicationModel = require("./ConfigurationApplicationModel");
import ConfigurationApplicationValidator = require("./ConfigurationApplicationValidator");
import Paginator = require("../../common/Paginator");
