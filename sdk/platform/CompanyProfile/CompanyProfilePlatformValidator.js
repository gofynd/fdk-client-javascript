const Joi = require("joi");

const CompanyProfileModel = require("./CompanyProfilePlatformModel");
class CompanyProfileValidator {
  static cbsOnboardGet() {
    return Joi.object({}).required();
  }

  static createBrand() {
    return Joi.object({
      body: CompanyProfileModel.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static createCompanyBrandMapping() {
    return Joi.object({
      body: CompanyProfileModel.CompanyBrandPostRequestSerializer().required(),
    }).required();
  }

  static createLocation() {
    return Joi.object({
      body: CompanyProfileModel.LocationSerializer().required(),
    }).required();
  }

  static createLocationBulk() {
    return Joi.object({
      body: CompanyProfileModel.BulkLocationSerializer().required(),
    }).required();
  }

  static editBrand() {
    return Joi.object({
      brandId: Joi.string().allow("").required(),
      body: CompanyProfileModel.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static getBrand() {
    return Joi.object({
      brandId: Joi.string().allow("").required(),
    }).required();
  }

  static getBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  static getLocationDetail() {
    return Joi.object({
      locationId: Joi.string().allow("").required(),
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

  static updateCompany() {
    return Joi.object({
      body: CompanyProfileModel.UpdateCompany().required(),
    }).required();
  }

  static updateLocation() {
    return Joi.object({
      locationId: Joi.string().allow("").required(),
      body: CompanyProfileModel.LocationSerializer().required(),
    }).required();
  }
}

module.exports = CompanyProfileValidator;
