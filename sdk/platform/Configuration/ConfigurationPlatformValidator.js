const Joi = require("joi");

const ConfigurationPlatformModel = require("./ConfigurationPlatformModel");

/**
 * @typedef CreateApplicationParam
 * @property {ConfigurationPlatformModel.CreateApplicationRequestSchema} body
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
 * @property {ConfigurationPlatformModel.CompanyByBrandsRequestSchema} body
 */

/** @typedef GetCurrenciesParam */

/**
 * @typedef GetCurrencyParam
 * @property {string} id - Unique object Id of the curreny
 */

/**
 * @typedef GetCurrencyExchangeRatesParam
 * @property {string} [currencyCode] - The 3-letter ISO 4217 code representing
 *   the base currency for the exchange rates. Defaults to "INR" if not specified.
 * @property {string} [exchangeCurrencyCode] - A 3-letter ISO 4217 currency code
 *   for which exchange rates against the base currency are requested.
 * @property {string} [exchangeCountryCode] - The country code for which
 *   exchange rates against the base currency are requested.
 */

/**
 * @typedef GetDomainAvailibilityParam
 * @property {ConfigurationPlatformModel.DomainSuggestionsRequestSchema} body
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
 * @property {ConfigurationPlatformModel.StoreByBrandsRequestSchema} body
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

class ConfigurationPlatformValidator {
  /** @returns {CreateApplicationParam} */
  static createApplication() {
    return Joi.object({
      body: ConfigurationPlatformModel.CreateApplicationRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateCurrencyParam} */
  static createCurrency() {
    return Joi.object({
      body: ConfigurationPlatformModel.Currency().required(),
    }).required();
  }

  /** @returns {GetApplicationsParam} */
  static getApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetBrandsByCompanyParam} */
  static getBrandsByCompany() {
    return Joi.object({
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCompanyByBrandsParam} */
  static getCompanyByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: ConfigurationPlatformModel.CompanyByBrandsRequestSchema().required(),
    }).required();
  }

  /** @returns {GetCurrenciesParam} */
  static getCurrencies() {
    return Joi.object({}).required();
  }

  /** @returns {GetCurrencyParam} */
  static getCurrency() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCurrencyExchangeRatesParam} */
  static getCurrencyExchangeRates() {
    return Joi.object({
      currencyCode: Joi.string().allow(""),
      exchangeCurrencyCode: Joi.string().allow(""),
      exchangeCountryCode: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetDomainAvailibilityParam} */
  static getDomainAvailibility() {
    return Joi.object({
      body: ConfigurationPlatformModel.DomainSuggestionsRequestSchema().required(),
    }).required();
  }

  /** @returns {GetDomainOptionsParam} */
  static getDomainOptions() {
    return Joi.object({}).required();
  }

  /** @returns {GetLocationsParam} */
  static getLocations() {
    return Joi.object({
      locationType: Joi.string().allow(""),
      id: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetOtherSellerApplicationByIdParam} */
  static getOtherSellerApplicationById() {
    return Joi.object({
      appId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetOtherSellerApplicationsParam} */
  static getOtherSellerApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetStoreByBrandsParam} */
  static getStoreByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: ConfigurationPlatformModel.StoreByBrandsRequestSchema().required(),
    }).required();
  }

  /** @returns {GetStoresForACompanyParam} */
  static getStoresForACompany() {
    return Joi.object({
      company: Joi.number().required(),
    }).required();
  }

  /** @returns {OptOutFromApplicationParam} */
  static optOutFromApplication() {
    return Joi.object({
      appId: Joi.string().allow("").required(),
      body: ConfigurationPlatformModel.OptOutInventory().required(),
    }).required();
  }

  /** @returns {UpdateCurrencyParam} */
  static updateCurrency() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ConfigurationPlatformModel.Currency().required(),
    }).required();
  }
}

module.exports = ConfigurationPlatformValidator;
