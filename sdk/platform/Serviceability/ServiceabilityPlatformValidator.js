const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef BulkServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {ServiceabilityPlatformModel.BulkRegionJobDetails} body
 */

/**
 * @typedef BulkTatParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {ServiceabilityPlatformModel.BulkRegionJobDetails} body
 */

/**
 * @typedef CreateCourierPartnerAccountParam
 * @property {ServiceabilityPlatformModel.CourierAccountDetailsBody} body
 */

/**
 * @typedef CreateCourierPartnerSchemeParam
 * @property {ServiceabilityPlatformModel.CourierPartnerSchemeDetailsModel} body
 */

/**
 * @typedef CreatePackageMaterialParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */

/**
 * @typedef CreatePackageMaterialRuleParam
 * @property {ServiceabilityPlatformModel.PackageRule} body
 */

/**
 * @typedef GetBulkServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [batchId] - Unique identifier of bulk job
 * @property {string} [action] - Import or export bulk type
 * @property {string} [status] - Status of the bulk actions
 * @property {string} [country] - Country for which bulk job is initiated
 * @property {string} [region] - Region for which bulk job is initiated
 * @property {string} [startDate] - Fetch job history after a particule date
 * @property {string} [endDate] - Fetch job history before a particule date
 */

/**
 * @typedef GetBulkTatParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [batchId] - Unique identifier of bulk job
 * @property {string} [action] - Import or export bulk type
 * @property {string} [status] - Status of the bulk actions
 * @property {string} [country] - Country for which bulk job is initiated
 * @property {string} [region] - Region for which bulk job is initiated
 * @property {string} [startDate] - Fetch job history after a particule date
 * @property {string} [endDate] - Fetch job history before a particule date
 */

/** @typedef GetCompanyConfigurationParam */

/**
 * @typedef GetCountriesParam
 * @property {boolean} [onboard] - Only fetch countries which allowed for
 *   onboard on Platform.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 12
 * @property {string} [q] - The search string to search in the list of countries by name.
 * @property {string} [hierarchy] - The search filter to filter countries based
 *   on their available hierarchy.
 */

/**
 * @typedef GetCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier account
 */

/**
 * @typedef GetCourierPartnerAccountsParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account.
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 * @property {string[]} [accountIds] - Filters dp accounts based on their ids
 * @property {boolean} [selfShip] - To filter self ship/non self ship dp accounts
 * @property {boolean} [ownAccount] - Filters seller owned or Fynd Managed dp accounts
 * @property {string} [q] - Filters dp accounts based on case sensitive partial
 *   account name
 */

/**
 * @typedef GetCourierPartnerSchemeParam
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 */

/**
 * @typedef GetCourierPartnerSchemesParam
 * @property {string} [schemeType] - Indicates whether a scheme is created by an
 *   admin for global purposes or customized for a specific company.
 * @property {string} [paymentMode] - Indicates payment mode for a scheme.
 * @property {string[]} [capabilities] - Indicates whether the scheme possesses
 *   certain capabilities.
 * @property {string[]} [schemeIds] - List of scheme ids which need to be
 *   returned in the response.
 * @property {string} [q] - The search string to search in the list of courier
 *   partners schemes by name.
 */

/**
 * @typedef GetInstalledCourierPartnerExtensionsParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [isInstalled] - Filter to get installed extensions only
 */

/**
 * @typedef GetOptimalLocationsParam
 * @property {ServiceabilityPlatformModel.OptimlLocationsRequestSchema} body
 */

/**
 * @typedef GetPackageMaterialListParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [q] - Used to search for matching results based on the
 *   provided input.
 * @property {string} [size] - Filters items based on given size
 * @property {string} [packageType] - Filters items based on given package_type
 */

/**
 * @typedef GetPackageMaterialRuleParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 */

/**
 * @typedef GetPackageMaterialsParam
 * @property {string} packageMaterialId - A `package_material_id` is a unique
 *   identifier for a Package Material
 */

/**
 * @typedef GetSampleFileServiceabilityStatusParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [batchId] - Batch id of the execution
 */

/** @typedef GetSelfShipDetailsParam */

/**
 * @typedef SampleFileServiceabilityParam
 * @property {ServiceabilityPlatformModel.BulkRegionServiceabilityTatDetails} body
 */

/**
 * @typedef UpdateCompanyConfigurationParam
 * @property {string} fulfillmentOptionSlug - Slug representing the fulfillment option.
 * @property {ServiceabilityPlatformModel.CompanyConfigurationSchema} body
 */

/**
 * @typedef UpdateCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier account
 * @property {ServiceabilityPlatformModel.CourierAccountDetailsBody} body
 */

/**
 * @typedef UpdateCourierPartnerSchemeParam
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {ServiceabilityPlatformModel.CourierPartnerSchemeUpdateDetailsSchema} body
 */

/**
 * @typedef UpdatePackageMaterialRuleParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 * @property {ServiceabilityPlatformModel.PackageRule} body
 */

/**
 * @typedef UpdatePackageMaterialsParam
 * @property {string} packageMaterialId - A `package_material_id` is a unique
 *   identifier for a Package Material
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */

/**
 * @typedef UpdateSelfShipDetailsParam
 * @property {ServiceabilityPlatformModel.SelfshipSchema} body
 */

class ServiceabilityPlatformValidator {
  /** @returns {BulkServiceabilityParam} */
  static bulkServiceability() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.BulkRegionJobDetails().required(),
    }).required();
  }

  /** @returns {BulkTatParam} */
  static bulkTat() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.BulkRegionJobDetails().required(),
    }).required();
  }

  /** @returns {CreateCourierPartnerAccountParam} */
  static createCourierPartnerAccount() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CourierAccountDetailsBody().required(),
    }).required();
  }

  /** @returns {CreateCourierPartnerSchemeParam} */
  static createCourierPartnerScheme() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CourierPartnerSchemeDetailsModel().required(),
    }).required();
  }

  /** @returns {CreatePackageMaterialParam} */
  static createPackageMaterial() {
    return Joi.object({
      pageNo: Joi.number(),
      body: ServiceabilityPlatformModel.PackageMaterial().required(),
    }).required();
  }

  /** @returns {CreatePackageMaterialRuleParam} */
  static createPackageMaterialRule() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PackageRule().required(),
    }).required();
  }

  /** @returns {GetBulkServiceabilityParam} */
  static getBulkServiceability() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      batchId: Joi.string().allow(""),
      action: Joi.string().allow(""),
      status: Joi.string().allow("").allow(null),
      country: Joi.string().allow(""),
      region: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetBulkTatParam} */
  static getBulkTat() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      batchId: Joi.string().allow(""),
      action: Joi.string().allow(""),
      status: Joi.string().allow("").allow(null),
      country: Joi.string().allow(""),
      region: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCompanyConfigurationParam} */
  static getCompanyConfiguration() {
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
      selfShip: Joi.boolean(),
      ownAccount: Joi.boolean(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCourierPartnerSchemeParam} */
  static getCourierPartnerScheme() {
    return Joi.object({
      schemeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCourierPartnerSchemesParam} */
  static getCourierPartnerSchemes() {
    return Joi.object({
      schemeType: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      capabilities: Joi.array().items(Joi.string().allow("")),
      schemeIds: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
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

  /** @returns {GetOptimalLocationsParam} */
  static getOptimalLocations() {
    return Joi.object({
      body: ServiceabilityPlatformModel.OptimlLocationsRequestSchema().required(),
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

  /** @returns {GetPackageMaterialsParam} */
  static getPackageMaterials() {
    return Joi.object({
      packageMaterialId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSampleFileServiceabilityStatusParam} */
  static getSampleFileServiceabilityStatus() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      batchId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetSelfShipDetailsParam} */
  static getSelfShipDetails() {
    return Joi.object({}).required();
  }

  /** @returns {SampleFileServiceabilityParam} */
  static sampleFileServiceability() {
    return Joi.object({
      body: ServiceabilityPlatformModel.BulkRegionServiceabilityTatDetails().required(),
    }).required();
  }

  /** @returns {UpdateCompanyConfigurationParam} */
  static updateCompanyConfiguration() {
    return Joi.object({
      fulfillmentOptionSlug: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CompanyConfigurationSchema().required(),
    }).required();
  }

  /** @returns {UpdateCourierPartnerAccountParam} */
  static updateCourierPartnerAccount() {
    return Joi.object({
      accountId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CourierAccountDetailsBody().required(),
    }).required();
  }

  /** @returns {UpdateCourierPartnerSchemeParam} */
  static updateCourierPartnerScheme() {
    return Joi.object({
      schemeId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CourierPartnerSchemeUpdateDetailsSchema().required(),
    }).required();
  }

  /** @returns {UpdatePackageMaterialRuleParam} */
  static updatePackageMaterialRule() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.PackageRule().required(),
    }).required();
  }

  /** @returns {UpdatePackageMaterialsParam} */
  static updatePackageMaterials() {
    return Joi.object({
      packageMaterialId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.PackageMaterial().required(),
    }).required();
  }

  /** @returns {UpdateSelfShipDetailsParam} */
  static updateSelfShipDetails() {
    return Joi.object({
      body: ServiceabilityPlatformModel.SelfshipSchema().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformValidator;
