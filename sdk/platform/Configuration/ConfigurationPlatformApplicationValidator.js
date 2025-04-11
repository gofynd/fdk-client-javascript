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

/**
 * @typedef CreateAppCurrencyConfigParam
 * @property {ConfigurationPlatformModel.AppSupportedCurrency} body
 */

/** @typedef CreateTokensParam */

/**
 * @typedef CreateUrlRedirectionParam
 * @property {ConfigurationPlatformModel.UrlRedirectionRequestSchema} body
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
 * @property {ConfigurationPlatformModel.DomainSuggestionsRequestSchema} body
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
 * @property {ConfigurationPlatformModel.FilterOrderingStoreRequestSchemaSchema} body
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
 * @property {ConfigurationPlatformModel.AppFeatureRequestSchema} body
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
 * @typedef UpdateApplicationParam
 * @property {ConfigurationPlatformModel.Application} body
 */

/**
 * @typedef UpdateApplicationVersionParam
 * @property {ConfigurationPlatformModel.PlatformVersionRequestSchema} body
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

  /** @returns {CreateAppCurrencyConfigParam} */
  static createAppCurrencyConfig() {
    return Joi.object({
      body: ConfigurationPlatformModel.AppSupportedCurrency().required(),
    }).required();
  }

  /** @returns {CreateTokensParam} */
  static createTokens() {
    return Joi.object({}).required();
  }

  /** @returns {CreateUrlRedirectionParam} */
  static createUrlRedirection() {
    return Joi.object({
      body: ConfigurationPlatformModel.UrlRedirectionRequestSchema().required(),
    }).required();
  }

  /** @returns {DeleteTokenParam} */
  static deleteToken() {
    return Joi.object({
      token: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteUrlRedirectionParam} */
  static deleteUrlRedirection() {
    return Joi.object({
      redirectionDomainId: Joi.string().allow("").required(),
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

  /** @returns {GetApplicationConfigurationParam} */
  static getApplicationConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {GetApplicationDomainAvailibilityParam} */
  static getApplicationDomainAvailibility() {
    return Joi.object({
      body: ConfigurationPlatformModel.DomainSuggestionsRequestSchema().required(),
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

  /** @returns {GetOrderingStoresParam} */
  static getOrderingStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetOrderingStoresByFilterParam} */
  static getOrderingStoresByFilter() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: ConfigurationPlatformModel.FilterOrderingStoreRequestSchemaSchema().required(),
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

  /** @returns {GetStoreDetailByIdParam} */
  static getStoreDetailById() {
    return Joi.object({
      storeId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetUrlRedirectionParam} */
  static getUrlRedirection() {
    return Joi.object({
      redirectionDomainId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUrlRedirectionsParam} */
  static getUrlRedirections() {
    return Joi.object({}).required();
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
      domainId: Joi.string().allow("").required(),
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

  /** @returns {UpdateApplicationParam} */
  static updateApplication() {
    return Joi.object({
      body: ConfigurationPlatformModel.Application().required(),
    }).required();
  }

  /** @returns {UpdateApplicationVersionParam} */
  static updateApplicationVersion() {
    return Joi.object({
      body: ConfigurationPlatformModel.PlatformVersionRequestSchema().required(),
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

  /** @returns {UpdateUrlRedirectionParam} */
  static updateUrlRedirection() {
    return Joi.object({
      redirectionDomainId: Joi.string().allow("").required(),

      body: ConfigurationPlatformModel.UrlRedirection().required(),
    }).required();
  }
}

module.exports = ConfigurationPlatformApplicationValidator;
