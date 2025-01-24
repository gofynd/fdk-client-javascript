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
declare class ConfigurationPlatformValidator {
    /** @returns {CreateApplicationParam} */
    static createApplication(): CreateApplicationParam;
    /** @returns {GetApplicationsParam} */
    static getApplications(): GetApplicationsParam;
    /** @returns {GetBrandsByCompanyParam} */
    static getBrandsByCompany(): GetBrandsByCompanyParam;
    /** @returns {GetCompanyByBrandsParam} */
    static getCompanyByBrands(): GetCompanyByBrandsParam;
    /** @returns {GetCurrenciesParam} */
    static getCurrencies(): any;
    /** @returns {GetDomainAvailibilityParam} */
    static getDomainAvailibility(): GetDomainAvailibilityParam;
    /** @returns {GetOtherSellerApplicationByIdParam} */
    static getOtherSellerApplicationById(): GetOtherSellerApplicationByIdParam;
    /** @returns {GetOtherSellerApplicationsParam} */
    static getOtherSellerApplications(): GetOtherSellerApplicationsParam;
    /** @returns {GetStoreByBrandsParam} */
    static getStoreByBrands(): GetStoreByBrandsParam;
    /** @returns {OptOutFromApplicationParam} */
    static optOutFromApplication(): OptOutFromApplicationParam;
}
declare namespace ConfigurationPlatformValidator {
    export { CreateApplicationParam, GetApplicationsParam, GetBrandsByCompanyParam, GetCompanyByBrandsParam, GetCurrenciesParam, GetDomainAvailibilityParam, GetOtherSellerApplicationByIdParam, GetOtherSellerApplicationsParam, GetStoreByBrandsParam, OptOutFromApplicationParam };
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
type GetCurrenciesParam = any;
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
