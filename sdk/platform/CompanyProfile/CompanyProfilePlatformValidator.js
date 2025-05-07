const Joi = require("joi");

const CompanyProfilePlatformModel = require("./CompanyProfilePlatformModel");

/** @typedef CbsOnboardGetParam */

/**
 * @typedef CreateBrandParam
 * @property {CompanyProfilePlatformModel.CreateUpdateBrandRequestSchema} body
 */

/**
 * @typedef CreateCompanyBrandMappingParam
 * @property {CompanyProfilePlatformModel.CompanyBrandPostRequestSchema} body
 */

/**
 * @typedef CreateLocationParam
 * @property {CompanyProfilePlatformModel.LocationSchema} body
 */

/**
 * @typedef CreateLocationBulkParam
 * @property {CompanyProfilePlatformModel.BulkLocationSchema} body
 */

/**
 * @typedef EditBrandParam
 * @property {number} brandId - Id of the brand to be viewed.
 * @property {CompanyProfilePlatformModel.CreateUpdateBrandRequestSchema} body
 */

/**
 * @typedef GetBrandParam
 * @property {number} brandId - Id of the brand to be viewed.
 */

/**
 * @typedef GetBrandsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {string} [q] - Search term for name.
 */

/** @typedef GetCompanyMetricsParam */

/**
 * @typedef GetLocationDetailParam
 * @property {number} locationId - Id of the location which you want to view.
 */

/** @typedef GetLocationTagsParam */

/**
 * @typedef GetLocationsParam
 * @property {string} [storeType] - Helps to sort the location list on the basis
 *   of location type.
 * @property {string[]} [storeCodes] - List of up to 50 store codes to fetch.
 *   Specify multiple values by repeating the query parameter (e.g.,
 *   `?store_codes=high_street&store_codes=main_avenue`). Comma-separated values
 *   are not supported.
 * @property {string} [q] - Query that is to be searched.
 * @property {string} [stage] - To filter companies on basis of verified or
 *   unverified companies.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {number[]} [locationIds] - Helps to filter stores on the basis of uids.
 * @property {string[]} [types] - Helps to get the location list on the basis of
 *   multiple location type.
 * @property {string[]} [tags] - Helps to get the location list on the basis of
 *   multiple location tag.
 */

/**
 * @typedef UpdateCompanyParam
 * @property {CompanyProfilePlatformModel.UpdateCompany} body
 */

/**
 * @typedef UpdateLocationParam
 * @property {number} locationId - Id of the location which you want to edit.
 * @property {CompanyProfilePlatformModel.LocationSchema} body
 */

class CompanyProfilePlatformValidator {
  /** @returns {CbsOnboardGetParam} */
  static cbsOnboardGet() {
    return Joi.object({}).required();
  }

  /** @returns {CreateBrandParam} */
  static createBrand() {
    return Joi.object({
      body: CompanyProfilePlatformModel.CreateUpdateBrandRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateCompanyBrandMappingParam} */
  static createCompanyBrandMapping() {
    return Joi.object({
      body: CompanyProfilePlatformModel.CompanyBrandPostRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateLocationParam} */
  static createLocation() {
    return Joi.object({
      body: CompanyProfilePlatformModel.LocationSchema().required(),
    }).required();
  }

  /** @returns {CreateLocationBulkParam} */
  static createLocationBulk() {
    return Joi.object({
      body: CompanyProfilePlatformModel.BulkLocationSchema().required(),
    }).required();
  }

  /** @returns {EditBrandParam} */
  static editBrand() {
    return Joi.object({
      brandId: Joi.number().required(),
      body: CompanyProfilePlatformModel.CreateUpdateBrandRequestSchema().required(),
    }).required();
  }

  /** @returns {GetBrandParam} */
  static getBrand() {
    return Joi.object({
      brandId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetBrandsParam} */
  static getBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCompanyMetricsParam} */
  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  /** @returns {GetLocationDetailParam} */
  static getLocationDetail() {
    return Joi.object({
      locationId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetLocationTagsParam} */
  static getLocationTags() {
    return Joi.object({}).required();
  }

  /** @returns {GetLocationsParam} */
  static getLocations() {
    return Joi.object({
      storeType: Joi.string().allow(""),
      storeCodes: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      locationIds: Joi.array().items(Joi.number()),
      types: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  /** @returns {UpdateCompanyParam} */
  static updateCompany() {
    return Joi.object({
      body: CompanyProfilePlatformModel.UpdateCompany().required(),
    }).required();
  }

  /** @returns {UpdateLocationParam} */
  static updateLocation() {
    return Joi.object({
      locationId: Joi.number().required(),
      body: CompanyProfilePlatformModel.LocationSchema().required(),
    }).required();
  }
}

module.exports = CompanyProfilePlatformValidator;
