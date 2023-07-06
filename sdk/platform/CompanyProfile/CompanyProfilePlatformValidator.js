const Joi = require("joi");

const CompanyProfilePlatformModel = require("./CompanyProfilePlatformModel");

/** @typedef CbsOnboardGetParam */

/**
 * @typedef CreateBrandParam
 * @property {CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer} body
 */

/**
 * @typedef CreateCompanyBrandMappingParam
 * @property {CompanyProfilePlatformModel.CompanyBrandPostRequestSerializer} body
 */

/**
 * @typedef CreateLocationParam
 * @property {CompanyProfilePlatformModel.LocationSerializer} body
 */

/**
 * @typedef CreateLocationBulkParam
 * @property {CompanyProfilePlatformModel.BulkLocationSerializer} body
 */

/**
 * @typedef EditBrandParam
 * @property {string} brandId - Id of the brand to be viewed.
 * @property {CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer} body
 */

/**
 * @typedef GetBrandParam
 * @property {string} brandId - Id of the brand to be viewed.
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
 * @property {string} locationId - Id of the location which you want to view.
 */

/** @typedef GetLocationTagsParam */

/**
 * @typedef GetLocationsParam
 * @property {string} [storeType] - Helps to sort the location list on the basis
 *   of location type.
 * @property {string} [q] - Query that is to be searched.
 * @property {string} [stage] - To filter companies on basis of verified or
 *   unverified companies.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {number[]} [locationIds] - Helps to filter stores on the basis of uids.
 */

/**
 * @typedef UpdateCompanyParam
 * @property {CompanyProfilePlatformModel.UpdateCompany} body
 */

/**
 * @typedef UpdateLocationParam
 * @property {string} locationId - Id of the location which you want to edit.
 * @property {CompanyProfilePlatformModel.LocationSerializer} body
 */

class CompanyProfilePlatformValidator {
  /** @returns {cbsOnboardGet} */
  static cbsOnboardGet() {
    return Joi.object({}).required();
  }

  /** @returns {createBrand} */
  static createBrand() {
    return Joi.object({
      body: CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  /** @returns {createCompanyBrandMapping} */
  static createCompanyBrandMapping() {
    return Joi.object({
      body: CompanyProfilePlatformModel.CompanyBrandPostRequestSerializer().required(),
    }).required();
  }

  /** @returns {createLocation} */
  static createLocation() {
    return Joi.object({
      body: CompanyProfilePlatformModel.LocationSerializer().required(),
    }).required();
  }

  /** @returns {createLocationBulk} */
  static createLocationBulk() {
    return Joi.object({
      body: CompanyProfilePlatformModel.BulkLocationSerializer().required(),
    }).required();
  }

  /** @returns {editBrand} */
  static editBrand() {
    return Joi.object({
      brandId: Joi.string().allow("").required(),
      body: CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  /** @returns {getBrand} */
  static getBrand() {
    return Joi.object({
      brandId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getBrands} */
  static getBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getCompanyMetrics} */
  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  /** @returns {getLocationDetail} */
  static getLocationDetail() {
    return Joi.object({
      locationId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getLocationTags} */
  static getLocationTags() {
    return Joi.object({}).required();
  }

  /** @returns {getLocations} */
  static getLocations() {
    return Joi.object({
      storeType: Joi.string().allow(""),
      q: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      locationIds: Joi.array().items(Joi.number()),
    }).required();
  }

  /** @returns {updateCompany} */
  static updateCompany() {
    return Joi.object({
      body: CompanyProfilePlatformModel.UpdateCompany().required(),
    }).required();
  }

  /** @returns {updateLocation} */
  static updateLocation() {
    return Joi.object({
      locationId: Joi.string().allow("").required(),
      body: CompanyProfilePlatformModel.LocationSerializer().required(),
    }).required();
  }
}

module.exports = CompanyProfilePlatformValidator;
