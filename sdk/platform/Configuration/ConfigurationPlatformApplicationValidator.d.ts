export = ConfigurationPlatformApplicationValidator;
/**
 * @typedef addDomain
 * @property {ConfigurationPlatformModel.DomainAddRequest} body
 */
/**
 * @typedef changeDomainType
 * @property {ConfigurationPlatformModel.UpdateDomainTypeRequest} body
 */
/** @typedef getAppApiTokens */
/** @typedef getAppBasicDetails */
/**
 * @typedef getAppCompanies
 * @property {number} [uid] - UID of companies to be fetched
 * @property {number} [pageNo] - The current page number to navigate through the
 *   given set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef getAppContactInfo */
/** @typedef getAppCurrencyConfig */
/** @typedef getAppFeatures */
/**
 * @typedef getAppStores
 * @property {number} [pageNo] - The current page number to navigate through the
 *   given set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef getAppSupportedCurrency */
/** @typedef getApplicationById */
/**
 * @typedef getBuildConfig
 * @property {string} platformType - The device platform for which the mobile
 *   app is built, e.g. android, ios.
 */
/**
 * @typedef getDomainStatus
 * @property {ConfigurationPlatformModel.DomainStatusRequest} body
 */
/** @typedef getDomains */
/** @typedef getInventoryConfig */
/**
 * @typedef getOrderingStoresByFilter
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {ConfigurationPlatformModel.FilterOrderingStoreRequest} body
 */
/**
 * @typedef getPreviousVersions
 * @property {string} platformType - The device platform for which the mobile
 *   app is built, e.g. android, ios.
 */
/**
 * @typedef getStaffOrderingStores
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [q] - Store code or name of the ordering store.
 */
/**
 * @typedef modifyAppFeatures
 * @property {ConfigurationPlatformModel.AppFeatureRequest} body
 */
/**
 * @typedef partiallyUpdateInventoryConfig
 * @property {ConfigurationPlatformModel.AppInventoryPartialUpdate} body
 */
/**
 * @typedef removeDomainById
 * @property {string} id - The unique identifier (24-digit Mongo Object ID) of the domain
 */
/**
 * @typedef updateAppApiTokens
 * @property {ConfigurationPlatformModel.TokenResponse} body
 */
/**
 * @typedef updateAppBasicDetails
 * @property {ConfigurationPlatformModel.ApplicationDetail} body
 */
/**
 * @typedef updateAppContactInfo
 * @property {ConfigurationPlatformModel.ApplicationInformation} body
 */
/**
 * @typedef updateAppCurrencyConfig
 * @property {ConfigurationPlatformModel.AppSupportedCurrency} body
 */
/**
 * @typedef updateAppFeatures
 * @property {ConfigurationPlatformModel.AppFeatureRequest} body
 */
/**
 * @typedef updateBuildConfig
 * @property {string} platformType - The device platform for which the mobile
 *   app is built, e.g. android, ios.
 * @property {ConfigurationPlatformModel.MobileAppConfigRequest} body
 */
/**
 * @typedef updateInventoryConfig
 * @property {ConfigurationPlatformModel.ApplicationInventory} body
 */
/**
 * @typedef updateOrderingStoreConfig
 * @property {ConfigurationPlatformModel.OrderingStoreConfig} body
 */
declare class ConfigurationPlatformApplicationValidator {
}
declare namespace ConfigurationPlatformApplicationValidator {
    export { addDomain, changeDomainType, getAppApiTokens, getAppBasicDetails, getAppCompanies, getAppContactInfo, getAppCurrencyConfig, getAppFeatures, getAppStores, getAppSupportedCurrency, getApplicationById, getBuildConfig, getDomainStatus, getDomains, getInventoryConfig, getOrderingStoresByFilter, getPreviousVersions, getStaffOrderingStores, modifyAppFeatures, partiallyUpdateInventoryConfig, removeDomainById, updateAppApiTokens, updateAppBasicDetails, updateAppContactInfo, updateAppCurrencyConfig, updateAppFeatures, updateBuildConfig, updateInventoryConfig, updateOrderingStoreConfig };
}
/** @returns {addDomain} */
declare function addDomain(): addDomain;
type addDomain = {
    body: ConfigurationPlatformModel.DomainAddRequest;
};
/** @returns {changeDomainType} */
declare function changeDomainType(): changeDomainType;
type changeDomainType = {
    body: ConfigurationPlatformModel.UpdateDomainTypeRequest;
};
/** @returns {getAppApiTokens} */
declare function getAppApiTokens(): any;
type getAppApiTokens = any;
/** @returns {getAppBasicDetails} */
declare function getAppBasicDetails(): any;
type getAppBasicDetails = any;
/** @returns {getAppCompanies} */
declare function getAppCompanies(): getAppCompanies;
type getAppCompanies = {
    /**
     * - UID of companies to be fetched
     */
    uid?: number;
    /**
     * - The current page number to navigate through the
     * given set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
/** @returns {getAppContactInfo} */
declare function getAppContactInfo(): any;
type getAppContactInfo = any;
/** @returns {getAppCurrencyConfig} */
declare function getAppCurrencyConfig(): any;
type getAppCurrencyConfig = any;
/** @returns {getAppFeatures} */
declare function getAppFeatures(): any;
type getAppFeatures = any;
/** @returns {getAppStores} */
declare function getAppStores(): getAppStores;
type getAppStores = {
    /**
     * - The current page number to navigate through the
     * given set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
};
/** @returns {getAppSupportedCurrency} */
declare function getAppSupportedCurrency(): any;
type getAppSupportedCurrency = any;
/** @returns {getApplicationById} */
declare function getApplicationById(): any;
type getApplicationById = any;
/** @returns {getBuildConfig} */
declare function getBuildConfig(): getBuildConfig;
type getBuildConfig = {
    /**
     * - The device platform for which the mobile
     * app is built, e.g. android, ios.
     */
    platformType: string;
};
/** @returns {getDomainStatus} */
declare function getDomainStatus(): getDomainStatus;
type getDomainStatus = {
    body: ConfigurationPlatformModel.DomainStatusRequest;
};
/** @returns {getDomains} */
declare function getDomains(): any;
type getDomains = any;
/** @returns {getInventoryConfig} */
declare function getInventoryConfig(): any;
type getInventoryConfig = any;
/** @returns {getOrderingStoresByFilter} */
declare function getOrderingStoresByFilter(): getOrderingStoresByFilter;
type getOrderingStoresByFilter = {
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
    body: ConfigurationPlatformModel.FilterOrderingStoreRequest;
};
/** @returns {getPreviousVersions} */
declare function getPreviousVersions(): getPreviousVersions;
type getPreviousVersions = {
    /**
     * - The device platform for which the mobile
     * app is built, e.g. android, ios.
     */
    platformType: string;
};
/** @returns {getStaffOrderingStores} */
declare function getStaffOrderingStores(): getStaffOrderingStores;
type getStaffOrderingStores = {
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
/** @returns {modifyAppFeatures} */
declare function modifyAppFeatures(): modifyAppFeatures;
type modifyAppFeatures = {
    body: ConfigurationPlatformModel.AppFeatureRequest;
};
/** @returns {partiallyUpdateInventoryConfig} */
declare function partiallyUpdateInventoryConfig(): partiallyUpdateInventoryConfig;
type partiallyUpdateInventoryConfig = {
    body: ConfigurationPlatformModel.AppInventoryPartialUpdate;
};
/** @returns {removeDomainById} */
declare function removeDomainById(): removeDomainById;
type removeDomainById = {
    /**
     * - The unique identifier (24-digit Mongo Object ID) of the domain
     */
    id: string;
};
/** @returns {updateAppApiTokens} */
declare function updateAppApiTokens(): updateAppApiTokens;
type updateAppApiTokens = {
    body: ConfigurationPlatformModel.TokenResponse;
};
/** @returns {updateAppBasicDetails} */
declare function updateAppBasicDetails(): updateAppBasicDetails;
type updateAppBasicDetails = {
    body: ConfigurationPlatformModel.ApplicationDetail;
};
/** @returns {updateAppContactInfo} */
declare function updateAppContactInfo(): updateAppContactInfo;
type updateAppContactInfo = {
    body: ConfigurationPlatformModel.ApplicationInformation;
};
/** @returns {updateAppCurrencyConfig} */
declare function updateAppCurrencyConfig(): updateAppCurrencyConfig;
type updateAppCurrencyConfig = {
    body: ConfigurationPlatformModel.AppSupportedCurrency;
};
/** @returns {updateAppFeatures} */
declare function updateAppFeatures(): updateAppFeatures;
type updateAppFeatures = {
    body: ConfigurationPlatformModel.AppFeatureRequest;
};
/** @returns {updateBuildConfig} */
declare function updateBuildConfig(): updateBuildConfig;
type updateBuildConfig = {
    /**
     * - The device platform for which the mobile
     * app is built, e.g. android, ios.
     */
    platformType: string;
    body: ConfigurationPlatformModel.MobileAppConfigRequest;
};
/** @returns {updateInventoryConfig} */
declare function updateInventoryConfig(): updateInventoryConfig;
type updateInventoryConfig = {
    body: ConfigurationPlatformModel.ApplicationInventory;
};
/** @returns {updateOrderingStoreConfig} */
declare function updateOrderingStoreConfig(): updateOrderingStoreConfig;
type updateOrderingStoreConfig = {
    body: ConfigurationPlatformModel.OrderingStoreConfig;
};
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
