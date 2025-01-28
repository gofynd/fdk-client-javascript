const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef CreateBulkExportParam
 * @property {ServiceabilityPlatformModel.BulkCreateZoneExport} body
 */

/**
 * @typedef CreateBulkGeoAreaParam
 * @property {ServiceabilityPlatformModel.BulkGeoAreaDetails} body
 */

/**
 * @typedef CreateBulkZoneParam
 * @property {ServiceabilityPlatformModel.CreateBulkZoneData} body
 */

/**
 * @typedef CreateCourierPartnerRuleParam
 * @property {ServiceabilityPlatformModel.CourierPartnerRule} body
 */

/**
 * @typedef CreateGeoAreaParam
 * @property {ServiceabilityPlatformModel.GeoAreaRequestBody} body
 */

/**
 * @typedef CreateGeoAreaExportJobParam
 * @property {string} geoareaId - The unique identifier of the Geoarea.
 */

/**
 * @typedef CreateStoreRulesParam
 * @property {ServiceabilityPlatformModel.CreateStoreRuleRequestSchema} body
 */

/**
 * @typedef CreateZoneParam
 * @property {ServiceabilityPlatformModel.CreateZoneV2Data} body
 */

/**
 * @typedef DeleteZoneParam
 * @property {string} zoneId - Unique identifier for a particular zone
 */

/** @typedef DownloadGeoareaSampleFileParam */

/**
 * @typedef DownloadZoneSampleFileParam
 * @property {string} productType - It denotes the attribute of the product
 */

/** @typedef GetApplicationConfigParam */

/** @typedef GetApplicationConfigurationParam */

/**
 * @typedef GetBulkExportParam
 * @property {string} batchId - A `batch_id` is a unique identifier for a particular zone.
 */

/**
 * @typedef GetBulkGeoAreaParam
 * @property {string} geoareaId - A unique identifier for the GeoArea.
 */

/** @typedef GetBulkZoneParam */

/**
 * @typedef GetCourierPartnerRuleParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
 */

/**
 * @typedef GetCourierPartnerRuleDetailsParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a
 *   courier partner rule.
 */

/**
 * @typedef GetCourierPartnerRulesParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [status] - Filter rules based on rule status
 */

/**
 * @typedef GetGeoAreaParam
 * @property {string} geoareaId - A unique identifier for the GeoArea.
 */

/**
 * @typedef GetGeoAreaExportJobStatusParam
 * @property {string} geoareaId - The unique identifier of the Geoarea.
 */

/**
 * @typedef GetGeoAreasParam
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {boolean} [isActive] - Status of GeoAreas (either active or inactive)
 * @property {number} [pageNo] - Current page number
 * @property {string} [type] - To fetch the type of a specific geoarea.
 * @property {string} [q] - Search with name as a free text
 * @property {string} [countryIsoCode] - ISO2 code of the country
 * @property {string} [state] - State name
 * @property {string} [city] - City name
 * @property {string} [pincode] - Pincode value to search geoareas
 * @property {string} [sector] - Sector value to search geoareas
 */

/**
 * @typedef GetStoreRuleParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a
 *   particular rule object.
 */

/**
 * @typedef GetStoreRuleDetailsParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a order
 *   routing rule.
 */

/**
 * @typedef GetStoreRulesParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [status]
 */

/**
 * @typedef GetZoneParam
 * @property {string} zoneId - Unique identifier for a particular zone
 */

/**
 * @typedef GetZoneDetailsParam
 * @property {string} zoneId - Unique identifier of a particular zone
 */

/**
 * @typedef GetZonesParam
 * @property {string} [stage] - Identifies the specific stage of zone bing requested.
 * @property {string} [type] - Using type, you can filter custom or default zones
 * @property {number} [pageSize] - Defines the number of items displayed per page.
 * @property {number} [pageNo] - Current page number.
 * @property {boolean} [isActive] - Status of Zone (either active or inactive)
 * @property {string} [q] - Search with name as a free text.
 * @property {string} [countryIsoCode] - ISO2 code of the country.
 * @property {string} [pincode] - PIN Code of the country.
 * @property {string} [state] - State of the country.
 * @property {string} [city] - City of the country.
 * @property {string} [sector] - Sector name of mentioned address.
 */

/**
 * @typedef InsertApplicationConfigParam
 * @property {ServiceabilityPlatformModel.StoreRuleConfigData} body
 */

/**
 * @typedef PatchApplicationConfigurationParam
 * @property {ServiceabilityPlatformModel.ApplicationConfigPatchRequest} body
 */

/**
 * @typedef UpdateApplicationConfigurationParam
 * @property {ServiceabilityPlatformModel.ApplicationConfigPutRequest} body
 */

/**
 * @typedef UpdateBulkGeoAreaParam
 * @property {string} geoareaId - A unique identifier for the GeoArea.
 * @property {ServiceabilityPlatformModel.BulkGeoAreaDetails} body
 */

/**
 * @typedef UpdateCourierPartnerRulePriorityParam
 * @property {ServiceabilityPlatformModel.RulePriorityRequest} body
 */

/**
 * @typedef UpdateCourierRuleParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
 * @property {ServiceabilityPlatformModel.CourierPartnerRule} body
 */

/**
 * @typedef UpdateGeoAreaParam
 * @property {string} geoareaId - A unique identifier for the GeoArea.
 * @property {ServiceabilityPlatformModel.GeoAreaRequestBody} body
 */

/**
 * @typedef UpdatePincodeAuditHistoryParam
 * @property {ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest} body
 */

/**
 * @typedef UpdatePincodeBulkViewParam
 * @property {ServiceabilityPlatformModel.PincodeMopBulkData} body
 */

/**
 * @typedef UpdatePincodeCoDListingParam
 * @property {ServiceabilityPlatformModel.PincodeCodStatusListingRequest} body
 */

/**
 * @typedef UpdatePincodeMopViewParam
 * @property {ServiceabilityPlatformModel.PincodeMopData} body
 */

/**
 * @typedef UpdateStoreRulePriorityParam
 * @property {ServiceabilityPlatformModel.RulePriorityRequest} body
 */

/**
 * @typedef UpdateStoreRulesParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a
 *   particular rule object.
 * @property {ServiceabilityPlatformModel.CreateStoreRuleRequestSchema} body
 */

/**
 * @typedef UpdateStoreRulesConfigParam
 * @property {ServiceabilityPlatformModel.StoreRuleConfigData} body
 */

/**
 * @typedef UpdateZoneParam
 * @property {string} zoneId - Unique identifier for a particular zone
 * @property {ServiceabilityPlatformModel.UpdateZoneDataV2} body
 */

class ServiceabilityPlatformApplicationValidator {
  /** @returns {CreateBulkExportParam} */
  static createBulkExport() {
    return Joi.object({
      body: ServiceabilityPlatformModel.BulkCreateZoneExport().required(),
    }).required();
  }

  /** @returns {CreateBulkGeoAreaParam} */
  static createBulkGeoArea() {
    return Joi.object({
      body: ServiceabilityPlatformModel.BulkGeoAreaDetails().required(),
    }).required();
  }

  /** @returns {CreateBulkZoneParam} */
  static createBulkZone() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CreateBulkZoneData().required(),
    }).required();
  }

  /** @returns {CreateCourierPartnerRuleParam} */
  static createCourierPartnerRule() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CourierPartnerRule().required(),
    }).required();
  }

  /** @returns {CreateGeoAreaParam} */
  static createGeoArea() {
    return Joi.object({
      body: ServiceabilityPlatformModel.GeoAreaRequestBody().required(),
    }).required();
  }

  /** @returns {CreateGeoAreaExportJobParam} */
  static createGeoAreaExportJob() {
    return Joi.object({
      geoareaId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {CreateStoreRulesParam} */
  static createStoreRules() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CreateStoreRuleRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateZoneParam} */
  static createZone() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CreateZoneV2Data().required(),
    }).required();
  }

  /** @returns {DeleteZoneParam} */
  static deleteZone() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DownloadGeoareaSampleFileParam} */
  static downloadGeoareaSampleFile() {
    return Joi.object({}).required();
  }

  /** @returns {DownloadZoneSampleFileParam} */
  static downloadZoneSampleFile() {
    return Joi.object({
      productType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetApplicationConfigParam} */
  static getApplicationConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetApplicationConfigurationParam} */
  static getApplicationConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {GetBulkExportParam} */
  static getBulkExport() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetBulkGeoAreaParam} */
  static getBulkGeoArea() {
    return Joi.object({
      geoareaId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetBulkZoneParam} */
  static getBulkZone() {
    return Joi.object({}).required();
  }

  /** @returns {GetCourierPartnerRuleParam} */
  static getCourierPartnerRule() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCourierPartnerRuleDetailsParam} */
  static getCourierPartnerRuleDetails() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCourierPartnerRulesParam} */
  static getCourierPartnerRules() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      status: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetGeoAreaParam} */
  static getGeoArea() {
    return Joi.object({
      geoareaId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetGeoAreaExportJobStatusParam} */
  static getGeoAreaExportJobStatus() {
    return Joi.object({
      geoareaId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetGeoAreasParam} */
  static getGeoAreas() {
    return Joi.object({
      pageSize: Joi.number(),
      isActive: Joi.boolean(),
      pageNo: Joi.number(),
      type: Joi.string().allow(""),
      q: Joi.string().allow(""),
      countryIsoCode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      sector: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetStoreRuleParam} */
  static getStoreRule() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetStoreRuleDetailsParam} */
  static getStoreRuleDetails() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetStoreRulesParam} */
  static getStoreRules() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      status: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetZoneParam} */
  static getZone() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetZoneDetailsParam} */
  static getZoneDetails() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetZonesParam} */
  static getZones() {
    return Joi.object({
      stage: Joi.string().allow(""),
      type: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      isActive: Joi.boolean(),
      q: Joi.string().allow(""),
      countryIsoCode: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      sector: Joi.string().allow(""),
    }).required();
  }

  /** @returns {InsertApplicationConfigParam} */
  static insertApplicationConfig() {
    return Joi.object({
      body: ServiceabilityPlatformModel.StoreRuleConfigData().required(),
    }).required();
  }

  /** @returns {PatchApplicationConfigurationParam} */
  static patchApplicationConfiguration() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ApplicationConfigPatchRequest().required(),
    }).required();
  }

  /** @returns {UpdateApplicationConfigurationParam} */
  static updateApplicationConfiguration() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ApplicationConfigPutRequest().required(),
    }).required();
  }

  /** @returns {UpdateBulkGeoAreaParam} */
  static updateBulkGeoArea() {
    return Joi.object({
      geoareaId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.BulkGeoAreaDetails().required(),
    }).required();
  }

  /** @returns {UpdateCourierPartnerRulePriorityParam} */
  static updateCourierPartnerRulePriority() {
    return Joi.object({
      body: ServiceabilityPlatformModel.RulePriorityRequest().required(),
    }).required();
  }

  /** @returns {UpdateCourierRuleParam} */
  static updateCourierRule() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CourierPartnerRule().required(),
    }).required();
  }

  /** @returns {UpdateGeoAreaParam} */
  static updateGeoArea() {
    return Joi.object({
      geoareaId: Joi.string().allow("").required(),

      body: ServiceabilityPlatformModel.GeoAreaRequestBody().required(),
    }).required();
  }

  /** @returns {UpdatePincodeAuditHistoryParam} */
  static updatePincodeAuditHistory() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest().required(),
    }).required();
  }

  /** @returns {UpdatePincodeBulkViewParam} */
  static updatePincodeBulkView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeMopBulkData().required(),
    }).required();
  }

  /** @returns {UpdatePincodeCoDListingParam} */
  static updatePincodeCoDListing() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeCodStatusListingRequest().required(),
    }).required();
  }

  /** @returns {UpdatePincodeMopViewParam} */
  static updatePincodeMopView() {
    return Joi.object({
      body: ServiceabilityPlatformModel.PincodeMopData().required(),
    }).required();
  }

  /** @returns {UpdateStoreRulePriorityParam} */
  static updateStoreRulePriority() {
    return Joi.object({
      body: ServiceabilityPlatformModel.RulePriorityRequest().required(),
    }).required();
  }

  /** @returns {UpdateStoreRulesParam} */
  static updateStoreRules() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CreateStoreRuleRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateStoreRulesConfigParam} */
  static updateStoreRulesConfig() {
    return Joi.object({
      body: ServiceabilityPlatformModel.StoreRuleConfigData().required(),
    }).required();
  }

  /** @returns {UpdateZoneParam} */
  static updateZone() {
    return Joi.object({
      zoneId: Joi.string().allow("").required(),

      body: ServiceabilityPlatformModel.UpdateZoneDataV2().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformApplicationValidator;
