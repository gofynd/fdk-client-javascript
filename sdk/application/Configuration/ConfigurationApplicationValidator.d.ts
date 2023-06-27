export = ConfigurationApplicationValidator;
/** @typedef getAppCurrencies */
/**
 * @typedef getAppStaffList
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
 * @typedef getAppStaffs
 * @property {boolean} [orderIncent] - This is a boolean value. Select `true` to
 *   retrieve the staff members eligible for getting incentives on orders.
 * @property {number} [orderingStore] - ID of the ordering store. Helps in
 *   retrieving staff members working at a particular ordering store.
 * @property {string} [user] - Mongo ID of the staff. Helps in retrieving the
 *   details of a particular staff member.
 */
/** @typedef getApplication */
/** @typedef getBasicDetails */
/** @typedef getContactInfo */
/** @typedef getCurrencies */
/**
 * @typedef getCurrencyById
 * @property {string} id - Object ID assigned to the currency
 */
/** @typedef getFeatures */
/** @typedef getIntegrationTokens */
/** @typedef getLanguages */
/**
 * @typedef getOrderingStoreCookie
 * @property {ConfigurationApplicationModel.OrderingStoreSelectRequest} body
 */
/**
 * @typedef getOrderingStores
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [q] - Store code or name of the ordering store.
 */
/** @typedef getOwnerInfo */
/**
 * @typedef getStoreDetailById
 * @property {number} storeId - Store uid
 */
/** @typedef removeOrderingStoreCookie */
declare class ConfigurationApplicationValidator {
}
declare namespace ConfigurationApplicationValidator {
    export { getAppCurrencies, getAppStaffList, getAppStaffs, getApplication, getBasicDetails, getContactInfo, getCurrencies, getCurrencyById, getFeatures, getIntegrationTokens, getLanguages, getOrderingStoreCookie, getOrderingStores, getOwnerInfo, getStoreDetailById, removeOrderingStoreCookie };
}
/** @returns {getAppCurrencies} */
declare function getAppCurrencies(): any;
type getAppCurrencies = any;
/** @returns {getAppStaffList} */
declare function getAppStaffList(): getAppStaffList;
type getAppStaffList = {
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
/** @returns {getAppStaffs} */
declare function getAppStaffs(): getAppStaffs;
type getAppStaffs = {
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
/** @returns {getApplication} */
declare function getApplication(): any;
type getApplication = any;
/** @returns {getBasicDetails} */
declare function getBasicDetails(): any;
type getBasicDetails = any;
/** @returns {getContactInfo} */
declare function getContactInfo(): any;
type getContactInfo = any;
/** @returns {getCurrencies} */
declare function getCurrencies(): any;
type getCurrencies = any;
/** @returns {getCurrencyById} */
declare function getCurrencyById(): getCurrencyById;
type getCurrencyById = {
    /**
     * - Object ID assigned to the currency
     */
    id: string;
};
/** @returns {getFeatures} */
declare function getFeatures(): any;
type getFeatures = any;
/** @returns {getIntegrationTokens} */
declare function getIntegrationTokens(): any;
type getIntegrationTokens = any;
/** @returns {getLanguages} */
declare function getLanguages(): any;
type getLanguages = any;
/** @returns {getOrderingStoreCookie} */
declare function getOrderingStoreCookie(): getOrderingStoreCookie;
type getOrderingStoreCookie = {
    body: ConfigurationApplicationModel.OrderingStoreSelectRequest;
};
/** @returns {getOrderingStores} */
declare function getOrderingStores(): getOrderingStores;
type getOrderingStores = {
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
/** @returns {getOwnerInfo} */
declare function getOwnerInfo(): any;
type getOwnerInfo = any;
/** @returns {getStoreDetailById} */
declare function getStoreDetailById(): getStoreDetailById;
type getStoreDetailById = {
    /**
     * - Store uid
     */
    storeId: number;
};
/** @returns {removeOrderingStoreCookie} */
declare function removeOrderingStoreCookie(): any;
type removeOrderingStoreCookie = any;
import ConfigurationApplicationModel = require("./ConfigurationApplicationModel");
