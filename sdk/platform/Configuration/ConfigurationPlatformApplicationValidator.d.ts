export = ConfigurationPlatformApplicationValidator;
/**
 * @typedef AddDomainParam
 * @property {ConfigurationPlatformModel.DomainAddRequestSchema} body
 */
/**
 * @typedef ChangeDomainTypeParam
 * @property {ConfigurationPlatformModel.UpdateDomainTypeRequestSchema} body
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
 * @property {ConfigurationPlatformModel.DomainStatusRequestSchema} body
 */
/** @typedef GetDomainsParam */
/** @typedef GetInventoryConfigParam */
/** @typedef GetOrderingStoreConfigParam */
/**
 * @typedef GetOrderingStoreCookieParam
 * @property {ConfigurationPlatformModel.OrderingStoreSelectRequestSchema} body
 */
/**
 * @typedef GetOrderingStoresByFilterParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {ConfigurationPlatformModel.FilterOrderingStoreRequestSchema} body
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
 * @property {ConfigurationPlatformModel.AppFeatureRequestSchema} body
 */
/**
 * @typedef PartiallyUpdateInventoryConfigParam
 * @property {ConfigurationPlatformModel.AppInventoryPartialUpdate} body
 */
/**
 * @typedef RemoveDomainByIdParam
 * @property {string} id - The unique identifier (24-digit Mongo Object ID) of the domain
 */
/** @typedef RemoveOrderingStoreCookieParam */
/**
 * @typedef UpdateAppApiTokensParam
 * @property {ConfigurationPlatformModel.TokenResponseSchema} body
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
 * @property {ConfigurationPlatformModel.AppFeatureRequestSchema} body
 */
/**
 * @typedef UpdateBuildConfigParam
 * @property {string} platformType - The device platform for which the mobile
 *   app is built, e.g. android, ios.
 * @property {ConfigurationPlatformModel.MobileAppConfigRequestSchema} body
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
    /** @returns {AddDomainParam} */
    static addDomain(): AddDomainParam;
    /** @returns {ChangeDomainTypeParam} */
    static changeDomainType(): ChangeDomainTypeParam;
    /** @returns {GetAppApiTokensParam} */
    static getAppApiTokens(): any;
    /** @returns {GetAppBasicDetailsParam} */
    static getAppBasicDetails(): any;
    /** @returns {GetAppCompaniesParam} */
    static getAppCompanies(): GetAppCompaniesParam;
    /** @returns {GetAppContactInfoParam} */
    static getAppContactInfo(): any;
    /** @returns {GetAppCurrencyConfigParam} */
    static getAppCurrencyConfig(): any;
    /** @returns {GetAppFeaturesParam} */
    static getAppFeatures(): any;
    /** @returns {GetAppStoresParam} */
    static getAppStores(): GetAppStoresParam;
    /** @returns {GetAppSupportedCurrencyParam} */
    static getAppSupportedCurrency(): any;
    /** @returns {GetApplicationByIdParam} */
    static getApplicationById(): any;
    /** @returns {GetBuildConfigParam} */
    static getBuildConfig(): GetBuildConfigParam;
    /** @returns {GetDomainStatusParam} */
    static getDomainStatus(): GetDomainStatusParam;
    /** @returns {GetDomainsParam} */
    static getDomains(): any;
    /** @returns {GetInventoryConfigParam} */
    static getInventoryConfig(): any;
    /** @returns {GetOrderingStoreConfigParam} */
    static getOrderingStoreConfig(): any;
    /** @returns {GetOrderingStoreCookieParam} */
    static getOrderingStoreCookie(): GetOrderingStoreCookieParam;
    /** @returns {GetOrderingStoresByFilterParam} */
    static getOrderingStoresByFilter(): GetOrderingStoresByFilterParam;
    /** @returns {GetPreviousVersionsParam} */
    static getPreviousVersions(): GetPreviousVersionsParam;
    /** @returns {GetStaffOrderingStoresParam} */
    static getStaffOrderingStores(): GetStaffOrderingStoresParam;
    /** @returns {ModifyAppFeaturesParam} */
    static modifyAppFeatures(): ModifyAppFeaturesParam;
    /** @returns {PartiallyUpdateInventoryConfigParam} */
    static partiallyUpdateInventoryConfig(): PartiallyUpdateInventoryConfigParam;
    /** @returns {RemoveDomainByIdParam} */
    static removeDomainById(): RemoveDomainByIdParam;
    /** @returns {RemoveOrderingStoreCookieParam} */
    static removeOrderingStoreCookie(): any;
    /** @returns {UpdateAppApiTokensParam} */
    static updateAppApiTokens(): UpdateAppApiTokensParam;
    /** @returns {UpdateAppBasicDetailsParam} */
    static updateAppBasicDetails(): UpdateAppBasicDetailsParam;
    /** @returns {UpdateAppContactInfoParam} */
    static updateAppContactInfo(): UpdateAppContactInfoParam;
    /** @returns {UpdateAppCurrencyConfigParam} */
    static updateAppCurrencyConfig(): UpdateAppCurrencyConfigParam;
    /** @returns {UpdateAppFeaturesParam} */
    static updateAppFeatures(): UpdateAppFeaturesParam;
    /** @returns {UpdateBuildConfigParam} */
    static updateBuildConfig(): UpdateBuildConfigParam;
    /** @returns {UpdateInventoryConfigParam} */
    static updateInventoryConfig(): UpdateInventoryConfigParam;
    /** @returns {UpdateOrderingStoreConfigParam} */
    static updateOrderingStoreConfig(): UpdateOrderingStoreConfigParam;
}
declare namespace ConfigurationPlatformApplicationValidator {
    export { AddDomainParam, ChangeDomainTypeParam, GetAppApiTokensParam, GetAppBasicDetailsParam, GetAppCompaniesParam, GetAppContactInfoParam, GetAppCurrencyConfigParam, GetAppFeaturesParam, GetAppStoresParam, GetAppSupportedCurrencyParam, GetApplicationByIdParam, GetBuildConfigParam, GetDomainStatusParam, GetDomainsParam, GetInventoryConfigParam, GetOrderingStoreConfigParam, GetOrderingStoreCookieParam, GetOrderingStoresByFilterParam, GetPreviousVersionsParam, GetStaffOrderingStoresParam, ModifyAppFeaturesParam, PartiallyUpdateInventoryConfigParam, RemoveDomainByIdParam, RemoveOrderingStoreCookieParam, UpdateAppApiTokensParam, UpdateAppBasicDetailsParam, UpdateAppContactInfoParam, UpdateAppCurrencyConfigParam, UpdateAppFeaturesParam, UpdateBuildConfigParam, UpdateInventoryConfigParam, UpdateOrderingStoreConfigParam };
}
type AddDomainParam = {
    body: ConfigurationPlatformModel.DomainAddRequestSchema;
};
type ChangeDomainTypeParam = {
    body: ConfigurationPlatformModel.UpdateDomainTypeRequestSchema;
};
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
type GetBuildConfigParam = {
    /**
     * - The device platform for which the mobile
     * app is built, e.g. android, ios.
     */
    platformType: string;
};
type GetDomainStatusParam = {
    body: ConfigurationPlatformModel.DomainStatusRequestSchema;
};
type GetOrderingStoreCookieParam = {
    body: ConfigurationPlatformModel.OrderingStoreSelectRequestSchema;
};
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
    body: ConfigurationPlatformModel.FilterOrderingStoreRequestSchema;
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
    body: ConfigurationPlatformModel.AppFeatureRequestSchema;
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
    body: ConfigurationPlatformModel.TokenResponseSchema;
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
    body: ConfigurationPlatformModel.AppFeatureRequestSchema;
};
type UpdateBuildConfigParam = {
    /**
     * - The device platform for which the mobile
     * app is built, e.g. android, ios.
     */
    platformType: string;
    body: ConfigurationPlatformModel.MobileAppConfigRequestSchema;
};
type UpdateInventoryConfigParam = {
    body: ConfigurationPlatformModel.ApplicationInventory;
};
type UpdateOrderingStoreConfigParam = {
    body: ConfigurationPlatformModel.OrderingStoreConfig;
};
type GetAppApiTokensParam = any;
type GetAppBasicDetailsParam = any;
type GetAppContactInfoParam = any;
type GetAppCurrencyConfigParam = any;
type GetAppFeaturesParam = any;
type GetAppSupportedCurrencyParam = any;
type GetApplicationByIdParam = any;
type GetDomainsParam = any;
type GetInventoryConfigParam = any;
type GetOrderingStoreConfigParam = any;
type RemoveOrderingStoreCookieParam = any;
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
