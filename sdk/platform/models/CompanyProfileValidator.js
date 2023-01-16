const Joi = require("joi");
const Validator = require("../PlatformModels");
class CompanyProfileValidator {
  static cbsOnboardGet() {
    return Joi.object({}).required();
  }

  static updateCompany() {
    return Joi.object({
      body: Validator.UpdateCompany().required(),
    }).required();
  }

  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  static getBrand() {
    return Joi.object({
      brandId: Joi.string().allow("").required(),
    }).required();
  }

  static editBrand() {
    return Joi.object({
      brandId: Joi.string().allow("").required(),
      body: Validator.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static createBrand() {
    return Joi.object({
      body: Validator.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static getBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static createCompanyBrandMapping() {
    return Joi.object({
      body: Validator.CompanyBrandPostRequestSerializer().required(),
    }).required();
  }

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

  static createLocation() {
    return Joi.object({
      body: Validator.LocationSerializer().required(),
    }).required();
  }

  static getLocationDetail() {
    return Joi.object({
      locationId: Joi.string().allow("").required(),
    }).required();
  }

  static updateLocation() {
    return Joi.object({
      locationId: Joi.string().allow("").required(),
      body: Validator.LocationSerializer().required(),
    }).required();
  }

  static createLocationBulk() {
    return Joi.object({
      body: Validator.BulkLocationSerializer().required(),
    }).required();
  }

  static getOptimalLocations() {
    return Joi.object({
      body: Validator.AssignStoreRequestValidator().required(),
    }).required();
  }
}
module.exports = CompanyProfileValidator;
