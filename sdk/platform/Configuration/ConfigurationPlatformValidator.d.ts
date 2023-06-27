export = ConfigurationPlatformValidator;
/**
 * @typedef createApplication
 * @property {ConfigurationPlatformModel.CreateApplicationRequest} body
 */
/**
 * @typedef getApplications
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [q] - Search param by name or domain
 */
/**
 * @typedef getAvailableOptIns
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef getBrandsByCompany
 * @property {string} [q] - Search text for brand name
 */
/**
 * @typedef getCompanyByBrands
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {ConfigurationPlatformModel.CompanyByBrandsRequest} body
 */
/** @typedef getCurrencies */
/**
 * @typedef getDomainAvailibility
 * @property {ConfigurationPlatformModel.DomainSuggestionsRequest} body
 */
/**
 * @typedef getIntegrationById
 * @property {number} id - Integration id
 */
/**
 * @typedef getIntegrationByLevelId
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Integration level, `store` or `company`
 * @property {number} uid - Unique identifier of integration level (store/company)
 */
/**
 * @typedef getIntegrationLevelConfig
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Store or company
 * @property {boolean} [opted] - True means get the opted stores. False means
 *   get the stores that aren't opted.
 * @property {boolean} [checkPermission] - Filter on if permissions (for
 *   inventory/order) are present
 */
/**
 * @typedef getLevelActiveIntegrations
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Integration level, `store` or `company`
 * @property {number} uid - Unique identifier of integration level (store/company)
 * @property {string} [permission] - Check opt-in for specific integration permissions
 */
/**
 * @typedef getOtherSellerApplicationById
 * @property {string} id - Application Id
 */
/**
 * @typedef getOtherSellerApplications
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef getSelectedOptIns
 * @property {string} level - Store or company
 * @property {number} uid - Unique identifier of the selected integration level.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 */
/**
 * @typedef getStoreByBrands
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {ConfigurationPlatformModel.StoreByBrandsRequest} body
 */
/**
 * @typedef optOutFromApplication
 * @property {string} id - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account.
 * @property {ConfigurationPlatformModel.OptOutInventory} body
 */
/**
 * @typedef updateLevelIntegration
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Integration level, `store` or `company`
 * @property {ConfigurationPlatformModel.UpdateIntegrationLevelRequest} body
 */
/**
 * @typedef updateLevelUidIntegration
 * @property {string} id - Integration ID (24-digit Mongo Object ID)
 * @property {string} level - Integration level, `store` or `company`
 * @property {number} uid - Unique identifier of integration level (store/company)
 * @property {ConfigurationPlatformModel.IntegrationLevel} body
 */
declare class ConfigurationPlatformValidator {
}
declare namespace ConfigurationPlatformValidator {
    export { createApplication, getApplications, getAvailableOptIns, getBrandsByCompany, getCompanyByBrands, getCurrencies, getDomainAvailibility, getIntegrationById, getIntegrationByLevelId, getIntegrationLevelConfig, getLevelActiveIntegrations, getOtherSellerApplicationById, getOtherSellerApplications, getSelectedOptIns, getStoreByBrands, optOutFromApplication, updateLevelIntegration, updateLevelUidIntegration };
}
/** @returns {createApplication} */
declare function createApplication(): createApplication;
type createApplication = {
    body: ConfigurationPlatformModel.CreateApplicationRequest;
};
/** @returns {getApplications} */
declare function getApplications(): getApplications;
type getApplications = {
    pageNo?: number;
    pageSize?: number;
    /**
     * - Search param by name or domain
     */
    q?: string;
};
/** @returns {getAvailableOptIns} */
declare function getAvailableOptIns(): getAvailableOptIns;
type getAvailableOptIns = {
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
/** @returns {getBrandsByCompany} */
declare function getBrandsByCompany(): getBrandsByCompany;
type getBrandsByCompany = {
    /**
     * - Search text for brand name
     */
    q?: string;
};
/** @returns {getCompanyByBrands} */
declare function getCompanyByBrands(): getCompanyByBrands;
type getCompanyByBrands = {
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
/** @returns {getCurrencies} */
declare function getCurrencies(): any;
type getCurrencies = any;
/** @returns {getDomainAvailibility} */
declare function getDomainAvailibility(): getDomainAvailibility;
type getDomainAvailibility = {
    body: ConfigurationPlatformModel.DomainSuggestionsRequest;
};
/** @returns {getIntegrationById} */
declare function getIntegrationById(): getIntegrationById;
type getIntegrationById = {
    /**
     * - Integration id
     */
    id: number;
};
/** @returns {getIntegrationByLevelId} */
declare function getIntegrationByLevelId(): getIntegrationByLevelId;
type getIntegrationByLevelId = {
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
/** @returns {getIntegrationLevelConfig} */
declare function getIntegrationLevelConfig(): getIntegrationLevelConfig;
type getIntegrationLevelConfig = {
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
/** @returns {getLevelActiveIntegrations} */
declare function getLevelActiveIntegrations(): getLevelActiveIntegrations;
type getLevelActiveIntegrations = {
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
    /**
     * - Check opt-in for specific integration permissions
     */
    permission?: string;
};
/** @returns {getOtherSellerApplicationById} */
declare function getOtherSellerApplicationById(): getOtherSellerApplicationById;
type getOtherSellerApplicationById = {
    /**
     * - Application Id
     */
    id: string;
};
/** @returns {getOtherSellerApplications} */
declare function getOtherSellerApplications(): getOtherSellerApplications;
type getOtherSellerApplications = {
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
/** @returns {getSelectedOptIns} */
declare function getSelectedOptIns(): getSelectedOptIns;
type getSelectedOptIns = {
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
/** @returns {getStoreByBrands} */
declare function getStoreByBrands(): getStoreByBrands;
type getStoreByBrands = {
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
/** @returns {optOutFromApplication} */
declare function optOutFromApplication(): optOutFromApplication;
type optOutFromApplication = {
    /**
     * - Alphanumeric ID allotted to an application (sales
     * channel website) created within a business account.
     */
    id: string;
    body: ConfigurationPlatformModel.OptOutInventory;
};
/** @returns {updateLevelIntegration} */
declare function updateLevelIntegration(): updateLevelIntegration;
type updateLevelIntegration = {
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
/** @returns {updateLevelUidIntegration} */
declare function updateLevelUidIntegration(): updateLevelUidIntegration;
type updateLevelUidIntegration = {
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
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
