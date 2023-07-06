export = ConfigurationPlatformApplicationValidator;
/**
 * @typedef AddDomainParam
 * @property {ConfigurationPlatformModel.DomainAddRequest} body
 */
/**
 * @typedef ChangeDomainTypeParam
 * @property {ConfigurationPlatformModel.UpdateDomainTypeRequest} body
 */
/** @typedef GetAppApiTokensParam */
/** @typedef GetAppBasicDetailsParam */
/**
 * @typedef GetAppCompaniesParam
 * @property {number} [uid] - UID of companies to be fetched
 * @property {number} [pageNo] - The current page number to navigate through the
 *   given set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef GetAppContactInfoParam */
/** @typedef GetAppCurrencyConfigParam */
/** @typedef GetAppFeaturesParam */
/**
 * @typedef GetAppStoresParam
 * @property {number} [pageNo] - The current page number to navigate through the
 *   given set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/** @typedef GetAppSupportedCurrencyParam */
/** @typedef GetApplicationByIdParam */
/**
 * @typedef GetBuildConfigParam
 * @property {string} platformType - The device platform for which the mobile
 *   app is built, e.g. android, ios.
 */
/**
 * @typedef GetDomainStatusParam
 * @property {ConfigurationPlatformModel.DomainStatusRequest} body
 */
/** @typedef GetDomainsParam */
/** @typedef GetInventoryConfigParam */
/**
 * @typedef GetOrderingStoresByFilterParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {ConfigurationPlatformModel.FilterOrderingStoreRequest} body
 */
/**
 * @typedef GetPreviousVersionsParam
 * @property {string} platformType - The device platform for which the mobile
 *   app is built, e.g. android, ios.
 */
/**
 * @typedef GetStaffOrderingStoresParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [q] - Store code or name of the ordering store.
 */
/**
 * @typedef ModifyAppFeaturesParam
 * @property {ConfigurationPlatformModel.AppFeatureRequest} body
 */
/**
 * @typedef PartiallyUpdateInventoryConfigParam
 * @property {ConfigurationPlatformModel.AppInventoryPartialUpdate} body
 */
/**
 * @typedef RemoveDomainByIdParam
 * @property {string} id - The unique identifier (24-digit Mongo Object ID) of the domain
 */
/**
 * @typedef UpdateAppApiTokensParam
 * @property {ConfigurationPlatformModel.TokenResponse} body
 */
/**
 * @typedef UpdateAppBasicDetailsParam
 * @property {ConfigurationPlatformModel.ApplicationDetail} body
 */
/**
 * @typedef UpdateAppContactInfoParam
 * @property {ConfigurationPlatformModel.ApplicationInformation} body
 */
/**
 * @typedef UpdateAppCurrencyConfigParam
 * @property {ConfigurationPlatformModel.AppSupportedCurrency} body
 */
/**
 * @typedef UpdateAppFeaturesParam
 * @property {ConfigurationPlatformModel.AppFeatureRequest} body
 */
/**
 * @typedef UpdateBuildConfigParam
 * @property {string} platformType - The device platform for which the mobile
 *   app is built, e.g. android, ios.
 * @property {ConfigurationPlatformModel.MobileAppConfigRequest} body
 */
/**
 * @typedef UpdateInventoryConfigParam
 * @property {ConfigurationPlatformModel.ApplicationInventory} body
 */
/**
 * @typedef UpdateOrderingStoreConfigParam
 * @property {ConfigurationPlatformModel.OrderingStoreConfig} body
 */
declare class ConfigurationPlatformApplicationValidator {
    /** @returns {addDomain} */
    static addDomain(): addDomain;
    /** @returns {changeDomainType} */
    static changeDomainType(): changeDomainType;
    /** @returns {getAppApiTokens} */
    static getAppApiTokens(): getAppApiTokens;
    /** @returns {getAppBasicDetails} */
    static getAppBasicDetails(): getAppBasicDetails;
    /** @returns {getAppCompanies} */
    static getAppCompanies(): getAppCompanies;
    /** @returns {getAppContactInfo} */
    static getAppContactInfo(): getAppContactInfo;
    /** @returns {getAppCurrencyConfig} */
    static getAppCurrencyConfig(): getAppCurrencyConfig;
    /** @returns {getAppFeatures} */
    static getAppFeatures(): getAppFeatures;
    /** @returns {getAppStores} */
    static getAppStores(): getAppStores;
    /** @returns {getAppSupportedCurrency} */
    static getAppSupportedCurrency(): getAppSupportedCurrency;
    /** @returns {getApplicationById} */
    static getApplicationById(): getApplicationById;
    /** @returns {getBuildConfig} */
    static getBuildConfig(): getBuildConfig;
    /** @returns {getDomainStatus} */
    static getDomainStatus(): getDomainStatus;
    /** @returns {getDomains} */
    static getDomains(): getDomains;
    /** @returns {getInventoryConfig} */
    static getInventoryConfig(): getInventoryConfig;
    /** @returns {getOrderingStoresByFilter} */
    static getOrderingStoresByFilter(): getOrderingStoresByFilter;
    /** @returns {getPreviousVersions} */
    static getPreviousVersions(): getPreviousVersions;
    /** @returns {getStaffOrderingStores} */
    static getStaffOrderingStores(): getStaffOrderingStores;
    /** @returns {modifyAppFeatures} */
    static modifyAppFeatures(): modifyAppFeatures;
    /** @returns {partiallyUpdateInventoryConfig} */
    static partiallyUpdateInventoryConfig(): partiallyUpdateInventoryConfig;
    /** @returns {removeDomainById} */
    static removeDomainById(): removeDomainById;
    /** @returns {updateAppApiTokens} */
    static updateAppApiTokens(): updateAppApiTokens;
    /** @returns {updateAppBasicDetails} */
    static updateAppBasicDetails(): updateAppBasicDetails;
    /** @returns {updateAppContactInfo} */
    static updateAppContactInfo(): updateAppContactInfo;
    /** @returns {updateAppCurrencyConfig} */
    static updateAppCurrencyConfig(): updateAppCurrencyConfig;
    /** @returns {updateAppFeatures} */
    static updateAppFeatures(): updateAppFeatures;
    /** @returns {updateBuildConfig} */
    static updateBuildConfig(): updateBuildConfig;
    /** @returns {updateInventoryConfig} */
    static updateInventoryConfig(): updateInventoryConfig;
    /** @returns {updateOrderingStoreConfig} */
    static updateOrderingStoreConfig(): updateOrderingStoreConfig;
}
declare namespace ConfigurationPlatformApplicationValidator {
    export { AddDomainParam, ChangeDomainTypeParam, GetAppApiTokensParam, GetAppBasicDetailsParam, GetAppCompaniesParam, GetAppContactInfoParam, GetAppCurrencyConfigParam, GetAppFeaturesParam, GetAppStoresParam, GetAppSupportedCurrencyParam, GetApplicationByIdParam, GetBuildConfigParam, GetDomainStatusParam, GetDomainsParam, GetInventoryConfigParam, GetOrderingStoresByFilterParam, GetPreviousVersionsParam, GetStaffOrderingStoresParam, ModifyAppFeaturesParam, PartiallyUpdateInventoryConfigParam, RemoveDomainByIdParam, UpdateAppApiTokensParam, UpdateAppBasicDetailsParam, UpdateAppContactInfoParam, UpdateAppCurrencyConfigParam, UpdateAppFeaturesParam, UpdateBuildConfigParam, UpdateInventoryConfigParam, UpdateOrderingStoreConfigParam };
}
type AddDomainParam = {
    body: ConfigurationPlatformModel.DomainAddRequest;
};
type ChangeDomainTypeParam = {
    body: ConfigurationPlatformModel.UpdateDomainTypeRequest;
};
type GetAppApiTokensParam = any;
type GetAppBasicDetailsParam = any;
type GetAppCompaniesParam = {
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
type GetAppContactInfoParam = any;
type GetAppCurrencyConfigParam = any;
type GetAppFeaturesParam = any;
type GetAppStoresParam = {
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
type GetAppSupportedCurrencyParam = any;
type GetApplicationByIdParam = any;
type GetBuildConfigParam = {
    /**
     * - The device platform for which the mobile
     * app is built, e.g. android, ios.
     */
    platformType: string;
};
type GetDomainStatusParam = {
    body: ConfigurationPlatformModel.DomainStatusRequest;
};
type GetDomainsParam = any;
type GetInventoryConfigParam = any;
type GetOrderingStoresByFilterParam = {
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
type GetPreviousVersionsParam = {
    /**
     * - The device platform for which the mobile
     * app is built, e.g. android, ios.
     */
    platformType: string;
};
type GetStaffOrderingStoresParam = {
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
type ModifyAppFeaturesParam = {
    body: ConfigurationPlatformModel.AppFeatureRequest;
};
type PartiallyUpdateInventoryConfigParam = {
    body: ConfigurationPlatformModel.AppInventoryPartialUpdate;
};
type RemoveDomainByIdParam = {
    /**
     * - The unique identifier (24-digit Mongo Object ID) of the domain
     */
    id: string;
};
type UpdateAppApiTokensParam = {
    body: ConfigurationPlatformModel.TokenResponse;
};
type UpdateAppBasicDetailsParam = {
    body: ConfigurationPlatformModel.ApplicationDetail;
};
type UpdateAppContactInfoParam = {
    body: ConfigurationPlatformModel.ApplicationInformation;
};
type UpdateAppCurrencyConfigParam = {
    body: ConfigurationPlatformModel.AppSupportedCurrency;
};
type UpdateAppFeaturesParam = {
    body: ConfigurationPlatformModel.AppFeatureRequest;
};
type UpdateBuildConfigParam = {
    /**
     * - The device platform for which the mobile
     * app is built, e.g. android, ios.
     */
    platformType: string;
    body: ConfigurationPlatformModel.MobileAppConfigRequest;
};
type UpdateInventoryConfigParam = {
    body: ConfigurationPlatformModel.ApplicationInventory;
};
type UpdateOrderingStoreConfigParam = {
    body: ConfigurationPlatformModel.OrderingStoreConfig;
};
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
