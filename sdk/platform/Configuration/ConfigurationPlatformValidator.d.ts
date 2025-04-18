export = ConfigurationPlatformValidator;
/**
 * @typedef CreateApplicationParam
 * @property {ConfigurationPlatformModel.CreateApplicationRequest} body
 */
/**
 * @typedef CreateCurrencyParam
 * @property {ConfigurationPlatformModel.Currency} body
 */
/**
 * @typedef GetApplicationsParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [q] - Search param by name or domain
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
 * @typedef GetCurrencyParam
 * @property {string} id - Unique object Id of the curreny
 */
/**
 * @typedef GetDomainAvailibilityParam
 * @property {ConfigurationPlatformModel.DomainSuggestionsRequest} body
 */
/** @typedef GetDomainOptionsParam */
/**
 * @typedef GetLocationsParam
 * @property {string} [locationType] - Provide location type to query on.
 *   Possible values : country, state, city
 * @property {string} [id] - Field is optional when location_type is country. If
 *   querying for state, provide id of country. If querying for city, provide id
 *   of state.
 */
/**
 * @typedef GetOtherSellerApplicationByIdParam
 * @property {string} appId - Application Id
 */
/**
 * @typedef GetOtherSellerApplicationsParam
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
 * @typedef GetStoresForACompanyParam
 * @property {number} company - Numeric ID allotted to a business account on Fynd Platform
 */
/**
 * @typedef OptOutFromApplicationParam
 * @property {string} appId - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account.
 * @property {ConfigurationPlatformModel.OptOutInventory} body
 */
/**
 * @typedef UpdateCurrencyParam
 * @property {string} id - Unique object Id of the curreny
 * @property {ConfigurationPlatformModel.Currency} body
 */
declare class ConfigurationPlatformValidator {
    /** @returns {CreateApplicationParam} */
    static createApplication(): CreateApplicationParam;
    /** @returns {CreateCurrencyParam} */
    static createCurrency(): CreateCurrencyParam;
    /** @returns {GetApplicationsParam} */
    static getApplications(): GetApplicationsParam;
    /** @returns {GetBrandsByCompanyParam} */
    static getBrandsByCompany(): GetBrandsByCompanyParam;
    /** @returns {GetCompanyByBrandsParam} */
    static getCompanyByBrands(): GetCompanyByBrandsParam;
    /** @returns {GetCurrenciesParam} */
    static getCurrencies(): any;
    /** @returns {GetCurrencyParam} */
    static getCurrency(): GetCurrencyParam;
    /** @returns {GetDomainAvailibilityParam} */
    static getDomainAvailibility(): GetDomainAvailibilityParam;
    /** @returns {GetDomainOptionsParam} */
    static getDomainOptions(): any;
    /** @returns {GetLocationsParam} */
    static getLocations(): GetLocationsParam;
    /** @returns {GetOtherSellerApplicationByIdParam} */
    static getOtherSellerApplicationById(): GetOtherSellerApplicationByIdParam;
    /** @returns {GetOtherSellerApplicationsParam} */
    static getOtherSellerApplications(): GetOtherSellerApplicationsParam;
    /** @returns {GetStoreByBrandsParam} */
    static getStoreByBrands(): GetStoreByBrandsParam;
    /** @returns {GetStoresForACompanyParam} */
    static getStoresForACompany(): GetStoresForACompanyParam;
    /** @returns {OptOutFromApplicationParam} */
    static optOutFromApplication(): OptOutFromApplicationParam;
    /** @returns {UpdateCurrencyParam} */
    static updateCurrency(): UpdateCurrencyParam;
}
declare namespace ConfigurationPlatformValidator {
    export { CreateApplicationParam, CreateCurrencyParam, GetApplicationsParam, GetBrandsByCompanyParam, GetCompanyByBrandsParam, GetCurrenciesParam, GetCurrencyParam, GetDomainAvailibilityParam, GetDomainOptionsParam, GetLocationsParam, GetOtherSellerApplicationByIdParam, GetOtherSellerApplicationsParam, GetStoreByBrandsParam, GetStoresForACompanyParam, OptOutFromApplicationParam, UpdateCurrencyParam };
}
type CreateApplicationParam = {
    body: ConfigurationPlatformModel.CreateApplicationRequest;
};
type CreateCurrencyParam = {
    body: ConfigurationPlatformModel.Currency;
};
type GetApplicationsParam = {
    pageNo?: number;
    pageSize?: number;
    /**
     * - Search param by name or domain
     */
    q?: string;
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
type GetCurrencyParam = {
    /**
     * - Unique object Id of the curreny
     */
    id: string;
};
type GetDomainAvailibilityParam = {
    body: ConfigurationPlatformModel.DomainSuggestionsRequest;
};
type GetLocationsParam = {
    /**
     * - Provide location type to query on.
     * Possible values : country, state, city
     */
    locationType?: string;
    /**
     * - Field is optional when location_type is country. If
     * querying for state, provide id of country. If querying for city, provide id
     * of state.
     */
    id?: string;
};
type GetOtherSellerApplicationByIdParam = {
    /**
     * - Application Id
     */
    appId: string;
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
type GetStoresForACompanyParam = {
    /**
     * - Numeric ID allotted to a business account on Fynd Platform
     */
    company: number;
};
type OptOutFromApplicationParam = {
    /**
     * - Alphanumeric ID allotted to an application (sales
     * channel website) created within a business account.
     */
    appId: string;
    body: ConfigurationPlatformModel.OptOutInventory;
};
type UpdateCurrencyParam = {
    /**
     * - Unique object Id of the curreny
     */
    id: string;
    body: ConfigurationPlatformModel.Currency;
};
type GetCurrenciesParam = any;
type GetDomainOptionsParam = any;
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
