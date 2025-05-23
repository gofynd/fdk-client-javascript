const Joi = require("joi");

const ConfigurationPlatformModel = require("./ConfigurationPlatformModel");

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
 * @property {string} id - The unique identifier of the domain
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

class ConfigurationPlatformApplicationValidator {
  /** @returns {AddDomainParam} */
  static addDomain() {
    return Joi.object({
      body: ConfigurationPlatformModel.DomainAddRequestSchema().required(),
    }).required();
  }

  /** @returns {ChangeDomainTypeParam} */
  static changeDomainType() {
    return Joi.object({
      body: ConfigurationPlatformModel.UpdateDomainTypeRequestSchema().required(),
    }).required();
  }

  /** @returns {GetAppApiTokensParam} */
  static getAppApiTokens() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppBasicDetailsParam} */
  static getAppBasicDetails() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppCompaniesParam} */
  static getAppCompanies() {
    return Joi.object({
      uid: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetAppContactInfoParam} */
  static getAppContactInfo() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppCurrencyConfigParam} */
  static getAppCurrencyConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppFeaturesParam} */
  static getAppFeatures() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppStoresParam} */
  static getAppStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetAppSupportedCurrencyParam} */
  static getAppSupportedCurrency() {
    return Joi.object({}).required();
  }

  /** @returns {GetApplicationByIdParam} */
  static getApplicationById() {
    return Joi.object({}).required();
  }

  /** @returns {GetBuildConfigParam} */
  static getBuildConfig() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetDomainStatusParam} */
  static getDomainStatus() {
    return Joi.object({
      body: ConfigurationPlatformModel.DomainStatusRequestSchema().required(),
    }).required();
  }

  /** @returns {GetDomainsParam} */
  static getDomains() {
    return Joi.object({}).required();
  }

  /** @returns {GetInventoryConfigParam} */
  static getInventoryConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetOrderingStoreConfigParam} */
  static getOrderingStoreConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetOrderingStoreCookieParam} */
  static getOrderingStoreCookie() {
    return Joi.object({
      body: ConfigurationPlatformModel.OrderingStoreSelectRequestSchema().required(),
    }).required();
  }

  /** @returns {GetOrderingStoresByFilterParam} */
  static getOrderingStoresByFilter() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: ConfigurationPlatformModel.FilterOrderingStoreRequestSchema().required(),
    }).required();
  }

  /** @returns {GetPreviousVersionsParam} */
  static getPreviousVersions() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetStaffOrderingStoresParam} */
  static getStaffOrderingStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {ModifyAppFeaturesParam} */
  static modifyAppFeatures() {
    return Joi.object({
      body: ConfigurationPlatformModel.AppFeatureRequestSchema().required(),
    }).required();
  }

  /** @returns {PartiallyUpdateInventoryConfigParam} */
  static partiallyUpdateInventoryConfig() {
    return Joi.object({
      body: ConfigurationPlatformModel.AppInventoryPartialUpdate().required(),
    }).required();
  }

  /** @returns {RemoveDomainByIdParam} */
  static removeDomainById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {RemoveOrderingStoreCookieParam} */
  static removeOrderingStoreCookie() {
    return Joi.object({}).required();
  }

  /** @returns {UpdateAppApiTokensParam} */
  static updateAppApiTokens() {
    return Joi.object({
      body: ConfigurationPlatformModel.TokenResponseSchema().required(),
    }).required();
  }

  /** @returns {UpdateAppBasicDetailsParam} */
  static updateAppBasicDetails() {
    return Joi.object({
      body: ConfigurationPlatformModel.ApplicationDetail().required(),
    }).required();
  }

  /** @returns {UpdateAppContactInfoParam} */
  static updateAppContactInfo() {
    return Joi.object({
      body: ConfigurationPlatformModel.ApplicationInformation().required(),
    }).required();
  }

  /** @returns {UpdateAppCurrencyConfigParam} */
  static updateAppCurrencyConfig() {
    return Joi.object({
      body: ConfigurationPlatformModel.AppSupportedCurrency().required(),
    }).required();
  }

  /** @returns {UpdateAppFeaturesParam} */
  static updateAppFeatures() {
    return Joi.object({
      body: ConfigurationPlatformModel.AppFeatureRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateBuildConfigParam} */
  static updateBuildConfig() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
      body: ConfigurationPlatformModel.MobileAppConfigRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateInventoryConfigParam} */
  static updateInventoryConfig() {
    return Joi.object({
      body: ConfigurationPlatformModel.ApplicationInventory().required(),
    }).required();
  }

  /** @returns {UpdateOrderingStoreConfigParam} */
  static updateOrderingStoreConfig() {
    return Joi.object({
      body: ConfigurationPlatformModel.OrderingStoreConfig().required(),
    }).required();
  }
}

module.exports = ConfigurationPlatformApplicationValidator;
