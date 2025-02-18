const Joi = require("joi");

const LogisticsModel = require("./LogisticsPartnerModel");
class LogisticsValidator {
  static sampleFileServiceability() {
    return Joi.object({
      body: LogisticsModel.BulkRegionServiceabilityTatDetails().required(),
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
      body: LogisticsModel.BulkRegionJobDetails().required(),
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

  static createDeliveryTime() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      body: LogisticsModel.RegionTatDetails().required(),
    }).required();
  }

  static getDeliveryTimes() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      fromCountryCode: Joi.string().allow(""),
      fromStateCode: Joi.string().allow(""),
      fromCityCode: Joi.string().allow(""),
      fromSectorCode: Joi.string().allow(""),
      fromPincode: Joi.string().allow(""),
      toCountryCode: Joi.string().allow(""),
      toStateCode: Joi.string().allow(""),
      toCityCode: Joi.string().allow(""),
      toSectorCode: Joi.string().allow(""),
      toPincode: Joi.string().allow(""),
    }).required();
  }

  static getDeliveryTime() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateDeliveryTime() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
      body: LogisticsModel.TATUpdateDetails().required(),
    }).required();
  }

  static deleteDeliveryTime() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
    }).required();
  }

  static createServiceability() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      body: LogisticsModel.RegionServiceabilityDetails().required(),
    }).required();
  }

  static getServiceabilities() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      countryCode: Joi.string().allow(""),
      stateCode: Joi.string().allow(""),
      cityCode: Joi.string().allow(""),
      sectorCode: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      firstMile: Joi.boolean(),
      lastMile: Joi.boolean(),
      doorstepReturn: Joi.boolean(),
      doorstepQc: Joi.boolean(),
      installation: Joi.boolean(),
    }).required();
  }

  static getServiceability() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateServiceability() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
      body: LogisticsModel.ServiceabilityDetails().required(),
    }).required();
  }

  static deleteServiceability() {
    return Joi.object({
      partnerOrgId: Joi.string().allow("").required(),
      courierPartnerExtensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
    }).required();
  }

  static bulkServiceability() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      schemeId: Joi.string().allow("").required(),
      body: LogisticsModel.BulkRegionJobDetails().required(),
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
      body: LogisticsModel.CourierAccountDetailsBody().required(),
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
      accountIds: Joi.array().items(Joi.string().allow("")),
      selfShip: Joi.boolean(),
      ownAccount: Joi.boolean(),
      q: Joi.string().allow(""),
    }).required();
  }

  static updateCourierPartnerAccount() {
    return Joi.object({
      companyId: Joi.number().required(),
      accountId: Joi.string().allow("").required(),
      body: LogisticsModel.CourierAccountDetailsBody().required(),
    }).required();
  }

  static getCourierPartnerAccount() {
    return Joi.object({
      companyId: Joi.number().required(),
      accountId: Joi.string().allow("").required(),
    }).required();
  }

  static getCountries() {
    return Joi.object({
      onboard: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      hierarchy: Joi.string().allow(""),
    }).required();
  }

  static createCourierPartnerScheme() {
    return Joi.object({
      body: LogisticsModel.CourierPartnerSchemeDetailsModel().required(),
    }).required();
  }

  static getCourierPartnerSchemes() {
    return Joi.object({
      schemeType: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      capabilities: Joi.array().items(Joi.string().allow("")),
      schemeIds: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  static updateCourierPartnerScheme() {
    return Joi.object({
      schemeId: Joi.string().allow("").required(),
      body: LogisticsModel.CourierPartnerSchemeUpdateDetails().required(),
    }).required();
  }

  static getCourierPartnerScheme() {
    return Joi.object({
      schemeId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = LogisticsValidator;
