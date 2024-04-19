export = ConfigurationPlatformValidator;
/**
 * @typedef CreateApplicationParam
 * @property {ConfigurationPlatformModel.CreateApplicationRequest} body
 */
/**
 * @typedef GetApplicationsParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [q] - Search param by name or domain
 */
/**
 * @typedef GetAvailableOptInsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetBrandsByCompanyParam
 * @property {string} [q] - Search text for brand name
 */
/**
 * @typedef GetCompanyByBrandsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {ConfigurationPlatformModel.CompanyByBrandsRequest} body
 */
/** @typedef GetCurrenciesParam */
/**
 * @typedef GetDomainAvailibilityParam
 * @property {ConfigurationPlatformModel.DomainSuggestionsRequest} body
 */
/**
 * @typedef GetIntegrationByIdParam
 * @property {number} id - Integration id
 */
/**
 * @typedef GetIntegrationByLevelIdParam
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Integration level, `store` or `company`
 * @property {number} uid - Unique identifier of integration level (store/company)
 */
/**
 * @typedef GetIntegrationLevelConfigParam
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Store or company
 * @property {boolean} [opted] - True means get the opted stores. False means
 *   get the stores that aren't opted.
 * @property {boolean} [checkPermission] - Filter on if permissions (for
 *   inventory/order) are present
 */
/**
 * @typedef GetLevelActiveIntegrationsParam
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Integration level, `store` or `company`
 * @property {number} uid - Unique identifier of integration level (store/company)
 */
/**
 * @typedef GetOtherSellerApplicationByIdParam
 * @property {string} id - Application Id
 */
/**
 * @typedef GetOtherSellerApplicationsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetSelectedOptInsParam
 * @property {string} level - Store or company
 * @property {number} uid - Unique identifier of the selected integration level.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef GetStoreByBrandsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {ConfigurationPlatformModel.StoreByBrandsRequest} body
 */
/**
 * @typedef OptOutFromApplicationParam
 * @property {string} id - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account.
 * @property {ConfigurationPlatformModel.OptOutInventory} body
 */
/**
 * @typedef UpdateLevelIntegrationParam
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Integration level, `store` or `company`
 * @property {ConfigurationPlatformModel.UpdateIntegrationLevelRequest} body
 */
/**
 * @typedef UpdateLevelUidIntegrationParam
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Integration level, `store` or `company`
 * @property {number} uid - Unique identifier of integration level (store/company)
 * @property {ConfigurationPlatformModel.IntegrationLevel} body
 */
declare class ConfigurationPlatformValidator {
    /** @returns {CreateApplicationParam} */
    static createApplication(): CreateApplicationParam;
    /** @returns {GetApplicationsParam} */
    static getApplications(): GetApplicationsParam;
    /** @returns {GetAvailableOptInsParam} */
    static getAvailableOptIns(): GetAvailableOptInsParam;
    /** @returns {GetBrandsByCompanyParam} */
    static getBrandsByCompany(): GetBrandsByCompanyParam;
    /** @returns {GetCompanyByBrandsParam} */
    static getCompanyByBrands(): GetCompanyByBrandsParam;
    /** @returns {GetCurrenciesParam} */
    static getCurrencies(): any;
    /** @returns {GetDomainAvailibilityParam} */
    static getDomainAvailibility(): GetDomainAvailibilityParam;
    /** @returns {GetIntegrationByIdParam} */
    static getIntegrationById(): GetIntegrationByIdParam;
    /** @returns {GetIntegrationByLevelIdParam} */
    static getIntegrationByLevelId(): GetIntegrationByLevelIdParam;
    /** @returns {GetIntegrationLevelConfigParam} */
    static getIntegrationLevelConfig(): GetIntegrationLevelConfigParam;
    /** @returns {GetLevelActiveIntegrationsParam} */
    static getLevelActiveIntegrations(): GetLevelActiveIntegrationsParam;
    /** @returns {GetOtherSellerApplicationByIdParam} */
    static getOtherSellerApplicationById(): GetOtherSellerApplicationByIdParam;
    /** @returns {GetOtherSellerApplicationsParam} */
    static getOtherSellerApplications(): GetOtherSellerApplicationsParam;
    /** @returns {GetSelectedOptInsParam} */
    static getSelectedOptIns(): GetSelectedOptInsParam;
    /** @returns {GetStoreByBrandsParam} */
    static getStoreByBrands(): GetStoreByBrandsParam;
    /** @returns {OptOutFromApplicationParam} */
    static optOutFromApplication(): OptOutFromApplicationParam;
    /** @returns {UpdateLevelIntegrationParam} */
    static updateLevelIntegration(): UpdateLevelIntegrationParam;
    /** @returns {UpdateLevelUidIntegrationParam} */
    static updateLevelUidIntegration(): UpdateLevelUidIntegrationParam;
}
declare namespace ConfigurationPlatformValidator {
    export { CreateApplicationParam, GetApplicationsParam, GetAvailableOptInsParam, GetBrandsByCompanyParam, GetCompanyByBrandsParam, GetCurrenciesParam, GetDomainAvailibilityParam, GetIntegrationByIdParam, GetIntegrationByLevelIdParam, GetIntegrationLevelConfigParam, GetLevelActiveIntegrationsParam, GetOtherSellerApplicationByIdParam, GetOtherSellerApplicationsParam, GetSelectedOptInsParam, GetStoreByBrandsParam, OptOutFromApplicationParam, UpdateLevelIntegrationParam, UpdateLevelUidIntegrationParam };
}
type CreateApplicationParam = {
    body: ConfigurationPlatformModel.CreateApplicationRequest;
};
type GetApplicationsParam = {
    pageNo?: number;
    pageSize?: number;
    /**
     * - Search param by name or domain
     */
    q?: string;
};
type GetAvailableOptInsParam = {
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
};
type GetBrandsByCompanyParam = {
    /**
     * - Search text for brand name
     */
    q?: string;
};
type GetCompanyByBrandsParam = {
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
    body: ConfigurationPlatformModel.CompanyByBrandsRequest;
};
type GetDomainAvailibilityParam = {
    body: ConfigurationPlatformModel.DomainSuggestionsRequest;
};
type GetIntegrationByIdParam = {
    /**
     * - Integration id
     */
    id: number;
};
type GetIntegrationByLevelIdParam = {
    /**
     * - Integration ID (24-digit Mongo Object ID)
     */
    id: string;
    /**
     * - Integration level, `store` or `company`
     */
    level: string;
    /**
     * - Unique identifier of integration level (store/company)
     */
    uid: number;
};
type GetIntegrationLevelConfigParam = {
    /**
     * - Integration ID (24-digit Mongo Object ID)
     */
    id: string;
    /**
     * - Store or company
     */
    level: string;
    /**
     * - True means get the opted stores. False means
     * get the stores that aren't opted.
     */
    opted?: boolean;
    /**
     * - Filter on if permissions (for
     * inventory/order) are present
     */
    checkPermission?: boolean;
};
type GetLevelActiveIntegrationsParam = {
    /**
     * - Integration ID (24-digit Mongo Object ID)
     */
    id: string;
    /**
     * - Integration level, `store` or `company`
     */
    level: string;
    /**
     * - Unique identifier of integration level (store/company)
     */
    uid: number;
};
type GetOtherSellerApplicationByIdParam = {
    /**
     * - Application Id
     */
    id: string;
};
type GetOtherSellerApplicationsParam = {
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
};
type GetSelectedOptInsParam = {
    /**
     * - Store or company
     */
    level: string;
    /**
     * - Unique identifier of the selected integration level.
     */
    uid: number;
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
};
type GetStoreByBrandsParam = {
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
    body: ConfigurationPlatformModel.StoreByBrandsRequest;
};
type OptOutFromApplicationParam = {
    /**
     * - Alphanumeric ID allotted to an application (sales
     * channel website) created within a business account.
     */
    id: string;
    body: ConfigurationPlatformModel.OptOutInventory;
};
type UpdateLevelIntegrationParam = {
    /**
     * - Integration ID (24-digit Mongo Object ID)
     */
    id: string;
    /**
     * - Integration level, `store` or `company`
     */
    level: string;
    body: ConfigurationPlatformModel.UpdateIntegrationLevelRequest;
};
type UpdateLevelUidIntegrationParam = {
    /**
     * - Integration ID (24-digit Mongo Object ID)
     */
    id: string;
    /**
     * - Integration level, `store` or `company`
     */
    level: string;
    /**
     * - Unique identifier of integration level (store/company)
     */
    uid: number;
    body: ConfigurationPlatformModel.IntegrationLevel;
};
type GetCurrenciesParam = any;
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
