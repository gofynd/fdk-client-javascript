export = ConfigurationApplicationValidator;
/** @typedef GetAppCurrenciesParam */
/**
 * @typedef GetAppStaffListParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {boolean} [orderIncent] - This is a boolean value. Select `true` to
 *   retrieve the staff members eligible for getting incentives on orders.
 * @property {number} [orderingStore] - ID of the ordering store. Helps in
 *   retrieving staff members working at a particular ordering store.
 * @property {string} [user] - Mongo ID of the staff. Helps in retrieving the
 *   details of a particular staff member.
 * @property {string} [userName] - User name of the member
 */
/**
 * @typedef GetAppStaffsParam
 * @property {boolean} [orderIncent] - This is a boolean value. Select `true` to
 *   retrieve the staff members eligible for getting incentives on orders.
 * @property {number} [orderingStore] - ID of the ordering store. Helps in
 *   retrieving staff members working at a particular ordering store.
 * @property {string} [user] - Mongo ID of the staff. Helps in retrieving the
 *   details of a particular staff member.
 */
/** @typedef GetApplicationParam */
/** @typedef GetBasicDetailsParam */
/** @typedef GetContactInfoParam */
/** @typedef GetCurrenciesParam */
/**
 * @typedef GetCurrencyByIdParam
 * @property {string} id - Object ID assigned to the currency
 */
/** @typedef GetFeaturesParam */
/** @typedef GetIntegrationTokensParam */
/** @typedef GetLanguagesParam */
/**
 * @typedef GetOrderingStoreCookieParam
 * @property {ConfigurationApplicationModel.OrderingStoreSelectRequest} body
 */
/**
 * @typedef GetOrderingStoresParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [q] - Store code or name of the ordering store.
 */
/** @typedef GetOwnerInfoParam */
/**
 * @typedef GetStoreDetailByIdParam
 * @property {number} storeId - Store uid
 */
/** @typedef RemoveOrderingStoreCookieParam */
declare class ConfigurationApplicationValidator {
    /** @returns {GetAppCurrenciesParam} */
    static getAppCurrencies(): any;
    /** @returns {GetAppStaffListParam} */
    static getAppStaffList(): GetAppStaffListParam;
    /** @returns {GetAppStaffsParam} */
    static getAppStaffs(): GetAppStaffsParam;
    /** @returns {GetApplicationParam} */
    static getApplication(): any;
    /** @returns {GetBasicDetailsParam} */
    static getBasicDetails(): any;
    /** @returns {GetContactInfoParam} */
    static getContactInfo(): any;
    /** @returns {GetCurrenciesParam} */
    static getCurrencies(): any;
    /** @returns {GetCurrencyByIdParam} */
    static getCurrencyById(): GetCurrencyByIdParam;
    /** @returns {GetFeaturesParam} */
    static getFeatures(): any;
    /** @returns {GetIntegrationTokensParam} */
    static getIntegrationTokens(): any;
    /** @returns {GetLanguagesParam} */
    static getLanguages(): any;
    /** @returns {GetOrderingStoreCookieParam} */
    static getOrderingStoreCookie(): GetOrderingStoreCookieParam;
    /** @returns {GetOrderingStoresParam} */
    static getOrderingStores(): GetOrderingStoresParam;
    /** @returns {GetOwnerInfoParam} */
    static getOwnerInfo(): any;
    /** @returns {GetStoreDetailByIdParam} */
    static getStoreDetailById(): GetStoreDetailByIdParam;
    /** @returns {RemoveOrderingStoreCookieParam} */
    static removeOrderingStoreCookie(): any;
}
declare namespace ConfigurationApplicationValidator {
    export { GetAppCurrenciesParam, GetAppStaffListParam, GetAppStaffsParam, GetApplicationParam, GetBasicDetailsParam, GetContactInfoParam, GetCurrenciesParam, GetCurrencyByIdParam, GetFeaturesParam, GetIntegrationTokensParam, GetLanguagesParam, GetOrderingStoreCookieParam, GetOrderingStoresParam, GetOwnerInfoParam, GetStoreDetailByIdParam, RemoveOrderingStoreCookieParam };
}
type GetAppStaffListParam = {
    pageNo?: number;
    pageSize?: number;
    /**
     * - This is a boolean value. Select `true` to
     * retrieve the staff members eligible for getting incentives on orders.
     */
    orderIncent?: boolean;
    /**
     * - ID of the ordering store. Helps in
     * retrieving staff members working at a particular ordering store.
     */
    orderingStore?: number;
    /**
     * - Mongo ID of the staff. Helps in retrieving the
     * details of a particular staff member.
     */
    user?: string;
    /**
     * - User name of the member
     */
    userName?: string;
};
type GetAppStaffsParam = {
    /**
     * - This is a boolean value. Select `true` to
     * retrieve the staff members eligible for getting incentives on orders.
     */
    orderIncent?: boolean;
    /**
     * - ID of the ordering store. Helps in
     * retrieving staff members working at a particular ordering store.
     */
    orderingStore?: number;
    /**
     * - Mongo ID of the staff. Helps in retrieving the
     * details of a particular staff member.
     */
    user?: string;
};
type GetCurrencyByIdParam = {
    /**
     * - Object ID assigned to the currency
     */
    id: string;
};
type GetOrderingStoreCookieParam = {
    body: ConfigurationApplicationModel.OrderingStoreSelectRequest;
};
type GetOrderingStoresParam = {
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
    /**
     * - Store code or name of the ordering store.
     */
    q?: string;
};
type GetStoreDetailByIdParam = {
    /**
     * - Store uid
     */
    storeId: number;
};
type GetAppCurrenciesParam = any;
type GetApplicationParam = any;
type GetBasicDetailsParam = any;
type GetContactInfoParam = any;
type GetCurrenciesParam = any;
type GetFeaturesParam = any;
type GetIntegrationTokensParam = any;
type GetLanguagesParam = any;
type GetOwnerInfoParam = any;
type RemoveOrderingStoreCookieParam = any;
import ConfigurationApplicationModel = require("sdk/output/javascript/code/sdk/application/Configuration/ConfigurationApplicationModel");
