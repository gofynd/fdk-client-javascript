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
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppCurrencyResponse>} - Success response
     * @summary: Get currencies enabled in the application
     * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getAppCurrencies({ headers }?: import("../ApplicationAPIClient").Options): Promise<AppCurrencyResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.orderIncent] - This is a boolean value. Select
     *   `true` to retrieve the staff members eligible for getting incentives on orders.
     * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
     *   retrieving staff members working at a particular ordering store.
     * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving
     *   the details of a particular staff member.
     * @param {string} [arg.userName] - User name of the member
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppStaffListResponse>} - Success response
     * @summary: Get a list of staff.
     * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
     */
    getAppStaffList({ pageNo, pageSize, orderIncent, orderingStore, user, userName }?: {
        pageNo?: number;
        pageSize?: number;
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
        userName?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<AppStaffListResponse>;
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
     * @summary: Get a list of staff.
     * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
     */
    getAppStaffListPaginator({ pageSize, orderIncent, orderingStore, user, userName, }?: {
        pageSize?: number;
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
        userName?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.orderIncent] - This is a boolean value. Select
     *   `true` to retrieve the staff members eligible for getting incentives on orders.
     * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
     *   retrieving staff members working at a particular ordering store.
     * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving
     *   the details of a particular staff member.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppStaffResponse>} - Success response
     * @summary: Get a list of staff.
     * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
     */
    getAppStaffs({ orderIncent, orderingStore, user }?: {
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<AppStaffResponse>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Application>} - Success response
     * @summary: Get current sales channel details
     * @description: Use this API to get the current sales channel details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.
     */
    getApplication({ headers }?: import("../ApplicationAPIClient").Options): Promise<Application>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationDetail>} - Success response
     * @summary: Get basic details of the application
     * @description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.
     */
    getBasicDetails({ headers }?: import("../ApplicationAPIClient").Options): Promise<ApplicationDetail>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationInformation>} - Success response
     * @summary: Get application information
     * @description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.
     */
    getContactInfo({ headers }?: import("../ApplicationAPIClient").Options): Promise<ApplicationInformation>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CurrenciesResponse>} - Success response
     * @summary: Get all currencies list
     * @description: Use this API to get a list of currencies available. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getCurrencies({ headers }?: import("../ApplicationAPIClient").Options): Promise<CurrenciesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Object ID assigned to the currency
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Currency>} - Success response
     * @summary: Get currency by its ID
     * @description: Use this API to retrieve a currency using its ID.
     */
    getCurrencyById({ id }?: {
        id: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<Currency>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppFeatureResponse>} - Success response
     * @summary: Get features of application
     * @description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.
     */
    getFeatures({ headers }?: import("../ApplicationAPIClient").Options): Promise<AppFeatureResponse>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<AppTokenResponse>} - Success response
     * @summary: Get integration tokens
     * @description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.
     */
    getIntegrationTokens({ headers }?: import("../ApplicationAPIClient").Options): Promise<AppTokenResponse>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LanguageResponse>} - Success response
     * @summary: Get list of languages
     * @description: Use this API to get a list of languages supported in the application
     */
    getLanguages({ headers }?: import("../ApplicationAPIClient").Options): Promise<LanguageResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderingStoreSelectRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SuccessMessageResponse>} - Success response
     * @summary: Get an Ordering Store signed cookie on selection of ordering store.
     * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.
     */
    getOrderingStoreCookie({ body }?: {
        body: OrderingStoreSelectRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<SuccessMessageResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderingStores>} - Success response
     * @summary: Get all deployment stores
     * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
     */
    getOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<OrderingStores>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get all deployment stores
     * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
     */
    getOrderingStoresPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationAboutResponse>} - Success response
     * @summary: Get sales channel, owner and seller information
     * @description: Use this API to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.
     */
    getOwnerInfo({ headers }?: import("../ApplicationAPIClient").Options): Promise<ApplicationAboutResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.storeId - Store uid
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderingStore>} - Success response
     * @summary: Get ordering store details
     * @description: Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders).
     */
    getStoreDetailById({ storeId }?: {
        storeId: number;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<OrderingStore>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SuccessMessageResponse>} - Success response
     * @summary: Unset the Ordering Store signed cookie.
     * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.
     */
    removeOrderingStoreCookie({ headers }?: import("../ApplicationAPIClient").Options): Promise<SuccessMessageResponse>;
}
import Paginator = require("../../common/Paginator");
