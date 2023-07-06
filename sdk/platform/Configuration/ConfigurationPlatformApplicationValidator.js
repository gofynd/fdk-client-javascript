const Joi = require("joi");

const ConfigurationPlatformModel = require("./ConfigurationPlatformModel");

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

class ConfigurationPlatformApplicationValidator {
  /** @returns {addDomain} */
  static addDomain() {
    return Joi.object({
      body: ConfigurationPlatformModel.DomainAddRequest().required(),
    }).required();
  }

  /** @returns {changeDomainType} */
  static changeDomainType() {
    return Joi.object({
      body: ConfigurationPlatformModel.UpdateDomainTypeRequest().required(),
    }).required();
  }

  /** @returns {getAppApiTokens} */
  static getAppApiTokens() {
    return Joi.object({}).required();
  }

  /** @returns {getAppBasicDetails} */
  static getAppBasicDetails() {
    return Joi.object({}).required();
  }

  /** @returns {getAppCompanies} */
  static getAppCompanies() {
    return Joi.object({
      uid: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getAppContactInfo} */
  static getAppContactInfo() {
    return Joi.object({}).required();
  }

  /** @returns {getAppCurrencyConfig} */
  static getAppCurrencyConfig() {
    return Joi.object({}).required();
  }

  /** @returns {getAppFeatures} */
  static getAppFeatures() {
    return Joi.object({}).required();
  }

  /** @returns {getAppStores} */
  static getAppStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getAppSupportedCurrency} */
  static getAppSupportedCurrency() {
    return Joi.object({}).required();
  }

  /** @returns {getApplicationById} */
  static getApplicationById() {
    return Joi.object({}).required();
  }

  /** @returns {getBuildConfig} */
  static getBuildConfig() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getDomainStatus} */
  static getDomainStatus() {
    return Joi.object({
      body: ConfigurationPlatformModel.DomainStatusRequest().required(),
    }).required();
  }

  /** @returns {getDomains} */
  static getDomains() {
    return Joi.object({}).required();
  }

  /** @returns {getInventoryConfig} */
  static getInventoryConfig() {
    return Joi.object({}).required();
  }

  /** @returns {getOrderingStoresByFilter} */
  static getOrderingStoresByFilter() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: ConfigurationPlatformModel.FilterOrderingStoreRequest().required(),
    }).required();
  }

  /** @returns {getPreviousVersions} */
  static getPreviousVersions() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getStaffOrderingStores} */
  static getStaffOrderingStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {modifyAppFeatures} */
  static modifyAppFeatures() {
    return Joi.object({
      body: ConfigurationPlatformModel.AppFeatureRequest().required(),
    }).required();
  }

  /** @returns {partiallyUpdateInventoryConfig} */
  static partiallyUpdateInventoryConfig() {
    return Joi.object({
      body: ConfigurationPlatformModel.AppInventoryPartialUpdate().required(),
    }).required();
  }

  /** @returns {removeDomainById} */
  static removeDomainById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {updateAppApiTokens} */
  static updateAppApiTokens() {
    return Joi.object({
      body: ConfigurationPlatformModel.TokenResponse().required(),
    }).required();
  }

  /** @returns {updateAppBasicDetails} */
  static updateAppBasicDetails() {
    return Joi.object({
      body: ConfigurationPlatformModel.ApplicationDetail().required(),
    }).required();
  }

  /** @returns {updateAppContactInfo} */
  static updateAppContactInfo() {
    return Joi.object({
      body: ConfigurationPlatformModel.ApplicationInformation().required(),
    }).required();
  }

  /** @returns {updateAppCurrencyConfig} */
  static updateAppCurrencyConfig() {
    return Joi.object({
      body: ConfigurationPlatformModel.AppSupportedCurrency().required(),
    }).required();
  }

  /** @returns {updateAppFeatures} */
  static updateAppFeatures() {
    return Joi.object({
      body: ConfigurationPlatformModel.AppFeatureRequest().required(),
    }).required();
  }

  /** @returns {updateBuildConfig} */
  static updateBuildConfig() {
    return Joi.object({
      platformType: Joi.string().allow("").required(),
      body: ConfigurationPlatformModel.MobileAppConfigRequest().required(),
    }).required();
  }

  /** @returns {updateInventoryConfig} */
  static updateInventoryConfig() {
    return Joi.object({
      body: ConfigurationPlatformModel.ApplicationInventory().required(),
    }).required();
  }

  /** @returns {updateOrderingStoreConfig} */
  static updateOrderingStoreConfig() {
    return Joi.object({
      body: ConfigurationPlatformModel.OrderingStoreConfig().required(),
    }).required();
  }
}

module.exports = ConfigurationPlatformApplicationValidator;
