const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef CreateCourierPartnerAccountParam
 * @property {ServiceabilityPlatformModel.CourierAccount} body
 */

/**
 * @typedef CreatePackageMaterialParam
 * @property {number} pageNo - Index of the item to start returning with
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */

/**
 * @typedef CreatePackageMaterialRuleParam
 * @property {ServiceabilityPlatformModel.PackageRuleRequest} body
 */

/** @typedef GetCompanyConfigurationParam */

/** @typedef GetCompanySelfShipParam */

/**
 * @typedef GetCountriesParam
 * @property {boolean} [onboard] - Only fetch countries which allowed for
 *   onboard on Platform.
 * @property {number} [pageNo] - Page number.
 * @property {number} [pageSize] - Page size.
 * @property {string} [q] - Search.
 * @property {string} [hierarchy] - Hierarchy.
 */

/**
 * @typedef GetCountryParam
 * @property {string} countryIsoCode - The `country_iso_code` is ISO-2 (alpha-2)
 *   code for the country.
 */

/**
 * @typedef GetCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier account
 */

/**
 * @typedef GetCourierPartnerAccountsParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 * @property {string[]} [accountIds] - Filters dp accounts based on their ids
 */

/**
 * @typedef GetInstalledCourierPartnerExtensionsParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [isInstalled] - Filter to get installed extensions only
 */

/**
 * @typedef GetListPackageMaterialRuleDetailsParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [isActive] - Filters items based on given is_active
 */

/**
 * @typedef GetLocalitiesParam
 * @property {string} localityType - A `locality_type` contains unique
 *   geographical division.
 * @property {string} [country] - A `country` contains a specific value of the
 *   country iso2 code.
 * @property {string} [state] - A `state` contains a specific value of the
 *   state, province.
 * @property {string} [city] - A `city` contains a specific value of the city.
 * @property {number} [pageNo] - Page number.
 * @property {number} [pageSize] - Page size.
 * @property {string} [q] - Search.
 * @property {string} [name] - Search for localities. Either provide a full name
 *   or a search term.
 */

/**
 * @typedef GetLocalityParam
 * @property {string} localityType - A `locality_type` contains value
 *   geographical division.
 * @property {string} localityValue - A `locality_value` contains a specific
 *   name of the locality.
 * @property {string} [country] - A `country` contains a specific value of the
 *   country iso2 code.
 * @property {string} [state] - A `state` contains a specific value of the
 *   state, province.
 * @property {string} [city] - A `city` contains a specific value of the city.
 */

/**
 * @typedef GetPackageMaterialListParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [q] - Perform regex search on items matching name for given value
 * @property {string} [size] - Filters items based on given size
 * @property {string} [packageType] - Filters items based on given package_type
 */

/**
 * @typedef GetPackageMaterialRuleParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 */

/**
 * @typedef GetPackageMaterialRuleDetailsParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [isActive] - Filters items based on given is_active
 */

/**
 * @typedef GetPackageMaterialsParam
 * @property {string} packageMaterialId - A `package_material_id` is a unique
 *   identifier for a Package Material
 */

/**
 * @typedef UpdateCompanyConfigurationParam
 * @property {ServiceabilityPlatformModel.CompanyConfigurationShema} body
 */

/**
 * @typedef UpdateCompanySelfShipParam
 * @property {ServiceabilityPlatformModel.CompanySelfShip} body
 */

/**
 * @typedef UpdateCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier account
 * @property {ServiceabilityPlatformModel.CourierAccount} body
 */

/**
 * @typedef UpdatePackageMaterialRuleParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 * @property {ServiceabilityPlatformModel.PackageRuleRequest} body
 */

/**
 * @typedef UpdatePackageMaterialsParam
 * @property {string} packageMaterialId - A `package_material_id` is a unique
 *   identifier for a Package Material
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */

/**
 * @typedef ValidateAddressParam
 * @property {string} countryIsoCode - The ISO code of the country.
 * @property {string} templateName - The type of address form.
 * @property {ServiceabilityPlatformModel.ValidateAddressRequest} body
 */

class ServiceabilityPlatformValidator {
  /** @returns {CreateCourierPartnerAccountParam} */
  static createCourierPartnerAccount() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CourierAccount().required(),
    }).required();
  }

  /** @returns {CreatePackageMaterialParam} */
  static createPackageMaterial() {
    return Joi.object({
      pageNo: Joi.number().required(),
      body: ServiceabilityPlatformModel.PackageMaterial().required(),
    }).required();
  }

  /** @returns {CreatePackageMaterialRuleParam} */
  static createPackageMaterialRule() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PackageRuleRequest().required(),
    }).required();
  }

  /** @returns {GetCompanyConfigurationParam} */
  static getCompanyConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {GetCompanySelfShipParam} */
  static getCompanySelfShip() {
    return Joi.object({}).required();
  }

  /** @returns {GetCountriesParam} */
  static getCountries() {
    return Joi.object({
      onboard: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      hierarchy: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCountryParam} */
  static getCountry() {
    return Joi.object({
      countryIsoCode: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCourierPartnerAccountParam} */
  static getCourierPartnerAccount() {
    return Joi.object({
      accountId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCourierPartnerAccountsParam} */
  static getCourierPartnerAccounts() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      stage: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      transportType: Joi.string().allow(""),
      accountIds: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  /** @returns {GetInstalledCourierPartnerExtensionsParam} */
  static getInstalledCourierPartnerExtensions() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isInstalled: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetListPackageMaterialRuleDetailsParam} */
  static getListPackageMaterialRuleDetails() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isActive: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetLocalitiesParam} */
  static getLocalities() {
    return Joi.object({
      localityType: Joi.string().allow("").required(),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      name: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetLocalityParam} */
  static getLocality() {
    return Joi.object({
      localityType: Joi.string().allow("").required(),
      localityValue: Joi.string().allow("").required(),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPackageMaterialListParam} */
  static getPackageMaterialList() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      size: Joi.string().allow(""),
      packageType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPackageMaterialRuleParam} */
  static getPackageMaterialRule() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPackageMaterialRuleDetailsParam} */
  static getPackageMaterialRuleDetails() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isActive: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPackageMaterialsParam} */
  static getPackageMaterials() {
    return Joi.object({
      packageMaterialId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {UpdateCompanyConfigurationParam} */
  static updateCompanyConfiguration() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CompanyConfigurationShema().required(),
    }).required();
  }

  /** @returns {UpdateCompanySelfShipParam} */
  static updateCompanySelfShip() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CompanySelfShip().required(),
    }).required();
  }

  /** @returns {UpdateCourierPartnerAccountParam} */
  static updateCourierPartnerAccount() {
    return Joi.object({
      accountId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CourierAccount().required(),
    }).required();
  }

  /** @returns {UpdatePackageMaterialRuleParam} */
  static updatePackageMaterialRule() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.PackageRuleRequest().required(),
    }).required();
  }

  /** @returns {UpdatePackageMaterialsParam} */
  static updatePackageMaterials() {
    return Joi.object({
      packageMaterialId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.PackageMaterial().required(),
    }).required();
  }

  /** @returns {ValidateAddressParam} */
  static validateAddress() {
    return Joi.object({
      countryIsoCode: Joi.string().allow("").required(),
      templateName: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.ValidateAddressRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformValidator;
