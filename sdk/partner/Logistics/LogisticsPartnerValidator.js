const Joi = require("joi");

const LogisticsModel = require("./LogisticsPartnerModel");
class LogisticsValidator {
  static sampleFileServiceability() {
    return Joi.object({
      body: LogisticsModel.BulkRegionServiceabilityTatRequest().required(),
    }).required();
  }

  static getSampleFileServiceabilityStatus() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      batchId: Joi.string().allow(""),
    }).required();
  }

  static bulkTat() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      body: LogisticsModel.BulkRegionJobSerializer().required(),
    }).required();
  }

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

  static bulkServiceability() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      body: LogisticsModel.BulkRegionJobSerializer().required(),
    }).required();
  }

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

  static createCourierPartnerAccount() {
    return Joi.object({
      companyId: Joi.number().required(),
      body: LogisticsModel.CourierAccountRequestBody().required(),
    }).required();
  }

  static getCourierPartnerAccounts() {
    return Joi.object({
      companyId: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      stage: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      transportType: Joi.string().allow(""),
    }).required();
  }

  static updateCourierPartnerAccount() {
    return Joi.object({
      companyId: Joi.number().required(),
      accountId: Joi.string().allow("").required(),
      body: LogisticsModel.CourierAccount().required(),
    }).required();
  }

  static getCourierPartnerAccount() {
    return Joi.object({
      companyId: Joi.number().required(),
      accountId: Joi.string().allow("").required(),
    }).required();
  }

  static createCourierPartnerScheme() {
    return Joi.object({
      body: LogisticsModel.CourierPartnerSchemeRequestModel().required(),
    }).required();
  }

  static updateCourierPartnerScheme() {
    return Joi.object({
      schemeId: Joi.string().allow("").required(),
      body: LogisticsModel.CourierPartnerSchemeUpdateRequest().required(),
    }).required();
  }

  static getCountries() {
    return Joi.object({
      onboarding: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }
}

module.exports = LogisticsValidator;
