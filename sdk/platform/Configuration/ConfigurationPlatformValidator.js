const Joi = require("joi");

const ConfigurationPlatformModel = require("./ConfigurationPlatformModel");

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

class ConfigurationPlatformValidator {
  /** @returns {createApplication} */
  static createApplication() {
    return Joi.object({
      body: ConfigurationPlatformModel.CreateApplicationRequest().required(),
    }).required();
  }

  /** @returns {getApplications} */
  static getApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getAvailableOptIns} */
  static getAvailableOptIns() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getBrandsByCompany} */
  static getBrandsByCompany() {
    return Joi.object({
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getCompanyByBrands} */
  static getCompanyByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: ConfigurationPlatformModel.CompanyByBrandsRequest().required(),
    }).required();
  }

  /** @returns {getCurrencies} */
  static getCurrencies() {
    return Joi.object({}).required();
  }

  /** @returns {getDomainAvailibility} */
  static getDomainAvailibility() {
    return Joi.object({
      body: ConfigurationPlatformModel.DomainSuggestionsRequest().required(),
    }).required();
  }

  /** @returns {getIntegrationById} */
  static getIntegrationById() {
    return Joi.object({
      id: Joi.number().required(),
    }).required();
  }

  /** @returns {getIntegrationByLevelId} */
  static getIntegrationByLevelId() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
    }).required();
  }

  /** @returns {getIntegrationLevelConfig} */
  static getIntegrationLevelConfig() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      opted: Joi.boolean(),
      checkPermission: Joi.boolean(),
    }).required();
  }

  /** @returns {getLevelActiveIntegrations} */
  static getLevelActiveIntegrations() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
      permission: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getOtherSellerApplicationById} */
  static getOtherSellerApplicationById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getOtherSellerApplications} */
  static getOtherSellerApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getSelectedOptIns} */
  static getSelectedOptIns() {
    return Joi.object({
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getStoreByBrands} */
  static getStoreByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: ConfigurationPlatformModel.StoreByBrandsRequest().required(),
    }).required();
  }

  /** @returns {optOutFromApplication} */
  static optOutFromApplication() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ConfigurationPlatformModel.OptOutInventory().required(),
    }).required();
  }

  /** @returns {updateLevelIntegration} */
  static updateLevelIntegration() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      body: ConfigurationPlatformModel.UpdateIntegrationLevelRequest().required(),
    }).required();
  }

  /** @returns {updateLevelUidIntegration} */
  static updateLevelUidIntegration() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      level: Joi.string().allow("").required(),
      uid: Joi.number().required(),
      body: ConfigurationPlatformModel.IntegrationLevel().required(),
    }).required();
  }
}

module.exports = ConfigurationPlatformValidator;
