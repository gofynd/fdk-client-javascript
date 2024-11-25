const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef BulkServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
 * @property {ServiceabilityPlatformModel.BulkRegionJobDetails} body
 */

/**
 * @typedef BulkTatParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
 * @property {ServiceabilityPlatformModel.BulkRegionJobDetails} body
 */

/**
 * @typedef CreateCourierPartnerAccountParam
 * @property {ServiceabilityPlatformModel.CourierAccountDetailsBody} body
 */

/**
 * @typedef CreateCourierPartnerSchemeParam
 * @property {ServiceabilityPlatformModel.CourierPartnerSchemeV2DetailsModel} body
 */

/**
 * @typedef CreatePackageMaterialParam
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */

/**
 * @typedef CreatePackageMaterialRuleParam
 * @property {ServiceabilityPlatformModel.PackageRule} body
 */

/**
 * @typedef CreateZoneParam
 * @property {ServiceabilityPlatformModel.CreateZoneData} body
 */

/** @typedef GetAllStoresParam */

/**
 * @typedef GetBulkServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
 * @property {number} [pageNo] - Index of the item to start returning with
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
 * @property {string} schemeId - Unique identifier of courier partner scheme.
 * @property {number} [pageNo] - Index of the item to start returning with
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
 * @property {boolean} [onboarding] - Only fetch countries which allowed for
 *   onboard on Platform.
 * @property {number} [pageNo] - Page number.
 * @property {number} [pageSize] - Page size.
 * @property {string} [q] - Search.
 * @property {string} [hierarchy] - Fetch countries that has certain heirarchy present.
 */

/**
 * @typedef GetCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier partner account
 */

/**
 * @typedef GetCourierPartnerAccountsParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 */

/**
 * @typedef GetCourierPartnerSchemeParam
 * @property {string} schemeId - Unique Identifier of Scheme
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
 */

/**
 * @typedef GetOptimalLocationsParam
 * @property {ServiceabilityPlatformModel.OptimlLocationsDetailsSchema} body
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
 * @typedef GetPackageMaterialRulesParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [isActive] - Filters items based on given is_active
 */

/**
 * @typedef GetPackageMaterialsParam
 * @property {string} packageMaterialId - Unique identifier for a Package. Material
 */

/**
 * @typedef GetSampleFileServiceabilityStatusParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [batchId] - Batch id of the execution
 */

/**
 * @typedef GetServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
 * @property {string} regionId - Unique identifier of a region
 */

/**
 * @typedef GetZoneByIdParam
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 */

/**
 * @typedef GetZonesParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {boolean} [isActive] - Status of Zone (either active or inactive)
 * @property {string} [channelId] - Zones filtered by an application
 * @property {string} [q] - Search with name as a free text
 * @property {string} [countryIsoCode] - ISO2 code of the country
 * @property {string} [state] - State name
 * @property {string} [city] - City name
 * @property {string} [pincode] - Pincode value to search zones
 * @property {string} [sector] - Sector value to search zones
 */

/**
 * @typedef SampleFileServiceabilityParam
 * @property {ServiceabilityPlatformModel.BulkRegionServiceabilityTatDetails} body
 */

/**
 * @typedef UpdateCompanyConfigurationParam
 * @property {ServiceabilityPlatformModel.CompanyConfig} body
 */

/**
 * @typedef UpdateCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier partner account
 * @property {ServiceabilityPlatformModel.CourierAccountUpdateDetails} body
 */

/**
 * @typedef UpdateCourierPartnerSchemeParam
 * @property {string} schemeId - Unique Identifier of Scheme
 * @property {ServiceabilityPlatformModel.CourierPartnerSchemeV2UpdateDetails} body
 */

/**
 * @typedef UpdatePackageMaterialRuleParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 * @property {ServiceabilityPlatformModel.PackageRule} body
 */

/**
 * @typedef UpdatePackageMaterialsParam
 * @property {string} packageMaterialId - Unique identifier for a Package. Material
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */

/**
 * @typedef UpdateServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
 * @property {string} regionId - Unique identifier of a region
 * @property {ServiceabilityPlatformModel.ServiceabilityModel} body
 */

/**
 * @typedef UpdateZoneByIdParam
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {ServiceabilityPlatformModel.UpdateZoneData} body
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
      body: ServiceabilityPlatformModel.CourierPartnerSchemeV2DetailsModel().required(),
    }).required();
  }

  /** @returns {CreatePackageMaterialParam} */
  static createPackageMaterial() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PackageMaterial().required(),
    }).required();
  }

  /** @returns {CreatePackageMaterialRuleParam} */
  static createPackageMaterialRule() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PackageRule().required(),
    }).required();
  }

  /** @returns {CreateZoneParam} */
  static createZone() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CreateZoneData().required(),
    }).required();
  }

  /** @returns {GetAllStoresParam} */
  static getAllStores() {
    return Joi.object({}).required();
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
      status: Joi.string().allow(""),
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
      status: Joi.string().allow(""),
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
      onboarding: Joi.boolean(),
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
    }).required();
  }

  /** @returns {GetOptimalLocationsParam} */
  static getOptimalLocations() {
    return Joi.object({
      body: ServiceabilityPlatformModel.OptimlLocationsDetailsSchema().required(),
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

  /** @returns {GetPackageMaterialRulesParam} */
  static getPackageMaterialRules() {
    return Joi.object({
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

  /** @returns {GetSampleFileServiceabilityStatusParam} */
  static getSampleFileServiceabilityStatus() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      batchId: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetServiceabilityParam} */
  static getServiceability() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      regionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetZoneByIdParam} */
  static getZoneById() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetZonesParam} */
  static getZones() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isActive: Joi.boolean(),
      channelId: Joi.string().allow(""),
      q: Joi.string().allow(""),
      countryIsoCode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      sector: Joi.string().allow(""),
    }).required();
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
      body: ServiceabilityPlatformModel.CompanyConfig().required(),
    }).required();
  }

  /** @returns {UpdateCourierPartnerAccountParam} */
  static updateCourierPartnerAccount() {
    return Joi.object({
      accountId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CourierAccountUpdateDetails().required(),
    }).required();
  }

  /** @returns {UpdateCourierPartnerSchemeParam} */
  static updateCourierPartnerScheme() {
    return Joi.object({
      schemeId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CourierPartnerSchemeV2UpdateDetails().required(),
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

  /** @returns {UpdateServiceabilityParam} */
  static updateServiceability() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      regionId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.ServiceabilityModel().required(),
    }).required();
  }

  /** @returns {UpdateZoneByIdParam} */
  static updateZoneById() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.UpdateZoneData().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformValidator;
