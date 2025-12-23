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
 * @typedef CreateCourierPartnerRuleParam
 * @property {ServiceabilityPlatformModel.CourierPartnerRule} body
 */

/**
 * @typedef CreateFulfillmentOptionParam
 * @property {ServiceabilityPlatformModel.FulfillmentOption} body
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
 * @typedef CreateShipmentsParam
 * @property {string} [xOrderingSource] - Ordering source header, to be used to
 *   identify source of order creation.
 * @property {ServiceabilityPlatformModel.PlatformShipmentsRequestSchema} body
 */

/**
 * @typedef CreateStoreRulesParam
 * @property {ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema} body
 */

/**
 * @typedef CreateZoneParam
 * @property {ServiceabilityPlatformModel.CreateZoneDataSchema} body
 */

/**
 * @typedef DeleteFulfillmentOptionsParam
 * @property {string} slug - Slug of the fulfillment option for retrieving details.
 */

/**
 * @typedef DeleteZoneParam
 * @property {string} zoneId - Unique identifier for a particular zone
 */

/** @typedef DownloadGeoareaSampleFileParam */

/** @typedef GetApplicationConfigParam */

/** @typedef GetApplicationConfigurationParam */

/**
 * @typedef GetBulkExportParam
 * @property {string} batchId - A `batch_id` is a unique identifier for a particular zone.
 */

/**
 * @typedef GetBulkFulfillmentValidationStatusParam
 * @property {string} bulkId - Unique id created by validate api.
 */

/**
 * @typedef GetBulkGeoAreaParam
 * @property {string} geoareaId - A unique identifier for the GeoArea.
 */

/**
 * @typedef GetCourierPartnerRuleParam
 * @property {string} ruleUid - Unique identifier of the courier partner rule
 */

/**
 * @typedef GetCourierPartnerRulesParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [status] - Filter rules based on rule status
 */

/**
 * @typedef GetCourierPartnersParam
 * @property {ServiceabilityPlatformModel.ShipmentCourierPartnerDetails} body
 */

/**
 * @typedef GetFulfillmentOptionProductsParam
 * @property {string} slug - Slug of the fulfillment option for retrieving details.
 * @property {string} [q] - Query to search product by name.
 * @property {number} storeId - The unique identifier of the store.
 */

/**
 * @typedef GetFulfillmentOptionStoresParam
 * @property {string} slug - Slug of the fulfillment option for retrieving details.
 * @property {string} [q] - Query to search product by name.
 */

/**
 * @typedef GetFulfillmentOptionsParam
 * @property {string} slug - Slug of the fulfillment option for retrieving details.
 * @property {number} [productId] - The unique identifier of the product.
 * @property {number} [storeId] - The unique identifier of the store.
 */

/**
 * @typedef GetFulfillmentOptionsListParam
 * @property {string} [productSlug] - The unique identifier (slug) of the product.
 * @property {number} [storeId] - The unique identifier of the store.
 * @property {string} [status] - Status of the fulfillment option. Must be
 *   either `ACTIVE` or `INACTIVE`.
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
 * @property {string} [q] - Used to search for matching results based on the
 *   provided input.
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
 * @typedef GetStoreRulesParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [status] - Filter rules based on rule status
 */

/**
 * @typedef GetZoneParam
 * @property {string} zoneId - Unique identifier for a particular zone
 */

/**
 * @typedef GetZonesParam
 * @property {string} [stage] - Identifies the specific stage of zone bing requested.
 * @property {number} [pageSize] - Defines the number of items displayed per page.
 * @property {number} [pageNo] - Current page number.
 * @property {string} [fulfillmentOptionSlug] - Slug identifier for filtering by
 *   fulfillment option.
 * @property {boolean} [isActive] - Status of Zone (either active or inactive)
 * @property {string} [q] - Used to search for matching results based on the
 *   provided input.
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
 * @property {ServiceabilityPlatformModel.ApplicationConfigPatch} body
 */

/**
 * @typedef PutFulfillmentOptionParam
 * @property {string} slug - Slug of the fulfillment option for retrieving details.
 * @property {ServiceabilityPlatformModel.FulfillmentOption} body
 */

/**
 * @typedef UpdateBulkGeoAreaParam
 * @property {string} geoareaId - A unique identifier for the GeoArea.
 * @property {ServiceabilityPlatformModel.BulkGeoAreaDetails} body
 */

/**
 * @typedef UpdateCourierPartnerRulePriorityParam
 * @property {ServiceabilityPlatformModel.RulePriorityDetails} body
 */

/**
 * @typedef UpdateCourierRuleParam
 * @property {string} ruleUid - Unique identifier of the courier partner rule.
 * @property {ServiceabilityPlatformModel.CourierPartnerRule} body
 */

/**
 * @typedef UpdateGeoAreaParam
 * @property {string} geoareaId - A unique identifier for the GeoArea.
 * @property {ServiceabilityPlatformModel.GeoAreaRequestBody} body
 */

/**
 * @typedef UpdatePincodeAuditHistoryParam
 * @property {number} [pageNumber] - Page number to be fetched.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryDetails} body
 */

/**
 * @typedef UpdatePincodeBulkViewParam
 * @property {ServiceabilityPlatformModel.PincodeMopBulkData} body
 */

/**
 * @typedef UpdatePincodeCoDListingParam
 * @property {number} [pageNumber] - Page number to be fetched.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {ServiceabilityPlatformModel.PincodeCodStatusListingDetails} body
 */

/**
 * @typedef UpdatePincodeMopViewParam
 * @property {ServiceabilityPlatformModel.PincodeMopData} body
 */

/**
 * @typedef UpdateStoreRulePriorityParam
 * @property {ServiceabilityPlatformModel.RulePriorityDetails} body
 */

/**
 * @typedef UpdateStoreRulesParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a
 *   particular rule object.
 * @property {ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema} body
 */

/**
 * @typedef UpdateStoreRulesConfigParam
 * @property {ServiceabilityPlatformModel.StoreRuleConfigData} body
 */

/**
 * @typedef UpdateZoneParam
 * @property {string} zoneId - Unique identifier for a particular zone
 * @property {ServiceabilityPlatformModel.UpdateZoneData} body
 */

/**
 * @typedef UploadBulkFulfillmentOptionsParam
 * @property {ServiceabilityPlatformModel.FulfillmentOptionBulk} body
 */

/**
 * @typedef ValidateBulkFulfillmentOptionsParam
 * @property {string} type - Type of entity being validated (stores or products).
 * @property {ServiceabilityPlatformModel.FulfillmentOptionBulkValidate} body
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

  /** @returns {CreateCourierPartnerRuleParam} */
  static createCourierPartnerRule() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CourierPartnerRule().required(),
    }).required();
  }

  /** @returns {CreateFulfillmentOptionParam} */
  static createFulfillmentOption() {
    return Joi.object({
      body: ServiceabilityPlatformModel.FulfillmentOption().required(),
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

  /** @returns {CreateShipmentsParam} */
  static createShipments() {
    return Joi.object({
      xOrderingSource: Joi.string().allow(""),

      body: ServiceabilityPlatformModel.PlatformShipmentsRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateStoreRulesParam} */
  static createStoreRules() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema().required(),
    }).required();
  }

  /** @returns {CreateZoneParam} */
  static createZone() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CreateZoneDataSchema().required(),
    }).required();
  }

  /** @returns {DeleteFulfillmentOptionsParam} */
  static deleteFulfillmentOptions() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
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

  /** @returns {GetBulkFulfillmentValidationStatusParam} */
  static getBulkFulfillmentValidationStatus() {
    return Joi.object({
      bulkId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetBulkGeoAreaParam} */
  static getBulkGeoArea() {
    return Joi.object({
      geoareaId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCourierPartnerRuleParam} */
  static getCourierPartnerRule() {
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

  /** @returns {GetCourierPartnersParam} */
  static getCourierPartners() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ShipmentCourierPartnerDetails().required(),
    }).required();
  }

  /** @returns {GetFulfillmentOptionProductsParam} */
  static getFulfillmentOptionProducts() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      q: Joi.string().allow(""),
      storeId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetFulfillmentOptionStoresParam} */
  static getFulfillmentOptionStores() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetFulfillmentOptionsParam} */
  static getFulfillmentOptions() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      productId: Joi.number(),
      storeId: Joi.number(),
    }).required();
  }

  /** @returns {GetFulfillmentOptionsListParam} */
  static getFulfillmentOptionsList() {
    return Joi.object({
      productSlug: Joi.string().allow(""),
      storeId: Joi.number(),
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

  /** @returns {GetZonesParam} */
  static getZones() {
    return Joi.object({
      stage: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      fulfillmentOptionSlug: Joi.string().allow(""),
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
      body: ServiceabilityPlatformModel.ApplicationConfigPatch().required(),
    }).required();
  }

  /** @returns {PutFulfillmentOptionParam} */
  static putFulfillmentOption() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.FulfillmentOption().required(),
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
      body: ServiceabilityPlatformModel.RulePriorityDetails().required(),
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
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
      body: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryDetails().required(),
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
      pageNumber: Joi.number(),
      pageSize: Joi.number(),
      body: ServiceabilityPlatformModel.PincodeCodStatusListingDetails().required(),
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
      body: ServiceabilityPlatformModel.RulePriorityDetails().required(),
    }).required();
  }

  /** @returns {UpdateStoreRulesParam} */
  static updateStoreRules() {
    return Joi.object({
      ruleUid: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema().required(),
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

      body: ServiceabilityPlatformModel.UpdateZoneData().required(),
    }).required();
  }

  /** @returns {UploadBulkFulfillmentOptionsParam} */
  static uploadBulkFulfillmentOptions() {
    return Joi.object({
      body: ServiceabilityPlatformModel.FulfillmentOptionBulk().required(),
    }).required();
  }

  /** @returns {ValidateBulkFulfillmentOptionsParam} */
  static validateBulkFulfillmentOptions() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.FulfillmentOptionBulkValidate().required(),
    }).required();
  }
}

module.exports = ServiceabilityPlatformApplicationValidator;
