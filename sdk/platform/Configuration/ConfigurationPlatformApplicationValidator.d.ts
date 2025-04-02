export = ConfigurationPlatformApplicationValidator;
/**
 * @typedef AddDomainParam
 * @property {ConfigurationPlatformModel.DomainAddRequest} body
 */
/**
 * @typedef ChangeDomainTypeParam
 * @property {ConfigurationPlatformModel.UpdateDomainTypeRequest} body
 */
/**
 * @typedef CreateAppCurrencyConfigParam
 * @property {ConfigurationPlatformModel.AppSupportedCurrency} body
 */
/** @typedef CreateTokensParam */
/**
 * @typedef CreateUrlRedirectionParam
 * @property {ConfigurationPlatformModel.UrlRedirectionRequest} body
 */
/**
 * @typedef DeleteTokenParam
 * @property {string} token - Token
 */
/**
 * @typedef DeleteUrlRedirectionParam
 * @property {string} redirectionDomainId - Redirection domain id that needs to be fetched
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
/** @typedef GetApplicationConfigurationParam */
/**
 * @typedef GetApplicationDomainAvailibilityParam
 * @property {ConfigurationPlatformModel.DomainSuggestionsRequest} body
 */
/**
 * @typedef GetDomainStatusParam
 * @property {ConfigurationPlatformModel.DomainStatusRequest} body
 */
/** @typedef GetDomainsParam */
/** @typedef GetInventoryConfigParam */
/** @typedef GetOrderingStoreConfigParam */
/**
 * @typedef GetOrderingStoreCookieParam
 * @property {ConfigurationPlatformModel.OrderingStoreSelectRequest} body
 */
/**
 * @typedef GetOrderingStoresParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {string} [q] - Store code or name of the ordering store.
 */
/**
 * @typedef GetOrderingStoresByFilterParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {ConfigurationPlatformModel.FilterOrderingStoreRequest} body
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
 * @typedef GetStoreDetailByIdParam
 * @property {number} storeId - Store uid
 */
/**
 * @typedef GetUrlRedirectionParam
 * @property {string} redirectionDomainId - Redirection domain id that needs to be fetched
 */
/** @typedef GetUrlRedirectionsParam */
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
 * @property {string} domainId - The unique identifier (24-digit Mongo Object
 *   ID) of the domain
 */
/** @typedef RemoveOrderingStoreCookieParam */
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
 * @typedef UpdateApplicationParam
 * @property {ConfigurationPlatformModel.Application} body
 */
/**
 * @typedef UpdateApplicationVersionParam
 * @property {ConfigurationPlatformModel.PlatformVersionRequest} body
 */
/**
 * @typedef UpdateInventoryConfigParam
 * @property {ConfigurationPlatformModel.ApplicationInventory} body
 */
/**
 * @typedef UpdateOrderingStoreConfigParam
 * @property {ConfigurationPlatformModel.OrderingStoreConfig} body
 */
/**
 * @typedef UpdateUrlRedirectionParam
 * @property {string} redirectionDomainId - Redirection domain id that needs to be fetched
 * @property {ConfigurationPlatformModel.UrlRedirection} body
 */
declare class ConfigurationPlatformApplicationValidator {
    /** @returns {AddDomainParam} */
    static addDomain(): AddDomainParam;
    /** @returns {ChangeDomainTypeParam} */
    static changeDomainType(): ChangeDomainTypeParam;
    /** @returns {CreateAppCurrencyConfigParam} */
    static createAppCurrencyConfig(): CreateAppCurrencyConfigParam;
    /** @returns {CreateTokensParam} */
    static createTokens(): any;
    /** @returns {CreateUrlRedirectionParam} */
    static createUrlRedirection(): CreateUrlRedirectionParam;
    /** @returns {DeleteTokenParam} */
    static deleteToken(): DeleteTokenParam;
    /** @returns {DeleteUrlRedirectionParam} */
    static deleteUrlRedirection(): DeleteUrlRedirectionParam;
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
    /** @returns {GetApplicationConfigurationParam} */
    static getApplicationConfiguration(): any;
    /** @returns {GetApplicationDomainAvailibilityParam} */
    static getApplicationDomainAvailibility(): GetApplicationDomainAvailibilityParam;
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
    /** @returns {GetOrderingStoresParam} */
    static getOrderingStores(): GetOrderingStoresParam;
    /** @returns {GetOrderingStoresByFilterParam} */
    static getOrderingStoresByFilter(): GetOrderingStoresByFilterParam;
    /** @returns {GetStaffOrderingStoresParam} */
    static getStaffOrderingStores(): GetStaffOrderingStoresParam;
    /** @returns {GetStoreDetailByIdParam} */
    static getStoreDetailById(): GetStoreDetailByIdParam;
    /** @returns {GetUrlRedirectionParam} */
    static getUrlRedirection(): GetUrlRedirectionParam;
    /** @returns {GetUrlRedirectionsParam} */
    static getUrlRedirections(): any;
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
    /** @returns {UpdateApplicationParam} */
    static updateApplication(): UpdateApplicationParam;
    /** @returns {UpdateApplicationVersionParam} */
    static updateApplicationVersion(): UpdateApplicationVersionParam;
    /** @returns {UpdateInventoryConfigParam} */
    static updateInventoryConfig(): UpdateInventoryConfigParam;
    /** @returns {UpdateOrderingStoreConfigParam} */
    static updateOrderingStoreConfig(): UpdateOrderingStoreConfigParam;
    /** @returns {UpdateUrlRedirectionParam} */
    static updateUrlRedirection(): UpdateUrlRedirectionParam;
}
declare namespace ConfigurationPlatformApplicationValidator {
    export { AddDomainParam, ChangeDomainTypeParam, CreateAppCurrencyConfigParam, CreateTokensParam, CreateUrlRedirectionParam, DeleteTokenParam, DeleteUrlRedirectionParam, GetAppApiTokensParam, GetAppBasicDetailsParam, GetAppCompaniesParam, GetAppContactInfoParam, GetAppCurrencyConfigParam, GetAppFeaturesParam, GetAppStoresParam, GetAppSupportedCurrencyParam, GetApplicationByIdParam, GetApplicationConfigurationParam, GetApplicationDomainAvailibilityParam, GetDomainStatusParam, GetDomainsParam, GetInventoryConfigParam, GetOrderingStoreConfigParam, GetOrderingStoreCookieParam, GetOrderingStoresParam, GetOrderingStoresByFilterParam, GetStaffOrderingStoresParam, GetStoreDetailByIdParam, GetUrlRedirectionParam, GetUrlRedirectionsParam, ModifyAppFeaturesParam, PartiallyUpdateInventoryConfigParam, RemoveDomainByIdParam, RemoveOrderingStoreCookieParam, UpdateAppApiTokensParam, UpdateAppBasicDetailsParam, UpdateAppContactInfoParam, UpdateAppCurrencyConfigParam, UpdateAppFeaturesParam, UpdateApplicationParam, UpdateApplicationVersionParam, UpdateInventoryConfigParam, UpdateOrderingStoreConfigParam, UpdateUrlRedirectionParam };
}
type AddDomainParam = {
    body: ConfigurationPlatformModel.DomainAddRequest;
};
type ChangeDomainTypeParam = {
    body: ConfigurationPlatformModel.UpdateDomainTypeRequest;
};
type CreateAppCurrencyConfigParam = {
    body: ConfigurationPlatformModel.AppSupportedCurrency;
};
type CreateUrlRedirectionParam = {
    body: ConfigurationPlatformModel.UrlRedirectionRequest;
};
type DeleteTokenParam = {
    /**
     * - Token
     */
    token: string;
};
type DeleteUrlRedirectionParam = {
    /**
     * - Redirection domain id that needs to be fetched
     */
    redirectionDomainId: string;
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
type GetApplicationDomainAvailibilityParam = {
    body: ConfigurationPlatformModel.DomainSuggestionsRequest;
};
type GetDomainStatusParam = {
    body: ConfigurationPlatformModel.DomainStatusRequest;
};
type GetOrderingStoreCookieParam = {
    body: ConfigurationPlatformModel.OrderingStoreSelectRequest;
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
type GetStoreDetailByIdParam = {
    /**
     * - Store uid
     */
    storeId: number;
};
type GetUrlRedirectionParam = {
    /**
     * - Redirection domain id that needs to be fetched
     */
    redirectionDomainId: string;
};
type ModifyAppFeaturesParam = {
    body: ConfigurationPlatformModel.AppFeatureRequest;
};
type PartiallyUpdateInventoryConfigParam = {
    body: ConfigurationPlatformModel.AppInventoryPartialUpdate;
};
type RemoveDomainByIdParam = {
    /**
     * - The unique identifier (24-digit Mongo Object
     * ID) of the domain
     */
    domainId: string;
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
type UpdateApplicationParam = {
    body: ConfigurationPlatformModel.Application;
};
type UpdateApplicationVersionParam = {
    body: ConfigurationPlatformModel.PlatformVersionRequest;
};
type UpdateInventoryConfigParam = {
    body: ConfigurationPlatformModel.ApplicationInventory;
};
type UpdateOrderingStoreConfigParam = {
    body: ConfigurationPlatformModel.OrderingStoreConfig;
};
type UpdateUrlRedirectionParam = {
    /**
     * - Redirection domain id that needs to be fetched
     */
    redirectionDomainId: string;
    body: ConfigurationPlatformModel.UrlRedirection;
};
type CreateTokensParam = any;
type GetAppApiTokensParam = any;
type GetAppBasicDetailsParam = any;
type GetAppContactInfoParam = any;
type GetAppCurrencyConfigParam = any;
type GetAppFeaturesParam = any;
type GetAppSupportedCurrencyParam = any;
type GetApplicationByIdParam = any;
type GetApplicationConfigurationParam = any;
type GetDomainsParam = any;
type GetInventoryConfigParam = any;
type GetOrderingStoreConfigParam = any;
type GetUrlRedirectionsParam = any;
type RemoveOrderingStoreCookieParam = any;
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
