const Joi = require("joi");

const CompanyProfileModel = require("./CompanyProfilePlatformModel");
class CompanyProfileValidator {
  static cbsOnboardGet() {
    return Joi.object({}).required();
  }

  static updateCompany() {
    return Joi.object({
      body: CompanyProfileModel.UpdateCompany().required(),
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
      body: CompanyProfileModel.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static createBrand() {
    return Joi.object({
      body: CompanyProfileModel.CreateUpdateBrandRequestSerializer().required(),
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
      body: CompanyProfileModel.CompanyBrandPostRequestSerializer().required(),
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
      body: CompanyProfileModel.LocationSerializer().required(),
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
      body: CompanyProfileModel.LocationSerializer().required(),
    }).required();
  }

  static createLocationBulk() {
    return Joi.object({
      body: CompanyProfileModel.BulkLocationSerializer().required(),
    }).required();
  }

  static getOptimalLocations() {
    return Joi.object({
      body: CompanyProfileModel.AssignStoreRequestValidator().required(),
    }).required();
  }
}
module.exports = CompanyProfileValidator;
