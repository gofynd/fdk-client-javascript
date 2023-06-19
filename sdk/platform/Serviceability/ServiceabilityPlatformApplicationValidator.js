const Joi = require("joi");

const ServiceabilityModel = require("./ServiceabilityPlatformModel");
class ServiceabilityValidator {
  static addAppDp() {
    return Joi.object({
      body: ServiceabilityModel.ApplicationCompanyDpViewRequest().required(),
    }).required();
  }

  static deleteAppDp() {
    return Joi.object({
      courierPartnerId: Joi.number().required(),
    }).required();
  }

  static getApplicationServiceability() {
    return Joi.object({}).required();
  }

  static getApplicationServiceabilitySelfShipment() {
    return Joi.object({}).required();
  }

  static getDpApplicationRules() {
    return Joi.object({}).required();
  }

  static getZoneFromPincodeView() {
    return Joi.object({
      body: ServiceabilityModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }

  static getZonesFromApplicationIdView() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      zoneId: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
    }).required();
  }

  static patchApplicationServiceabilitySelfShipment() {
    return Joi.object({
      body: ServiceabilityModel.SelfShipResponse().required(),
    }).required();
  }

  static updatePincodeAuditHistory() {
    return Joi.object({
      body: ServiceabilityModel.PincodeMopUpdateAuditHistoryRequest().required(),
    }).required();
  }

  static updatePincodeBulkView() {
    return Joi.object({
      body: ServiceabilityModel.PincodeMopBulkData().required(),
    }).required();
  }

  static updatePincodeCoDListing() {
    return Joi.object({
      body: ServiceabilityModel.PincodeCodStatusListingRequest().required(),
    }).required();
  }

  static updatePincodeMopView() {
    return Joi.object({
      body: ServiceabilityModel.PincodeMopData().required(),
    }).required();
  }

  static upsertDpApplicationRules() {
    return Joi.object({
      body: ServiceabilityModel.DPApplicationRuleRequest().required(),
    }).required();
  }
}

module.exports = ServiceabilityValidator;
