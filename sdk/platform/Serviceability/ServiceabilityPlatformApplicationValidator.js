const Joi = require("joi");

const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");

/**
 * @typedef CreateCourierPartnerRuleParam
 * @property {ServiceabilityPlatformModel.CourierPartnerRule} body
 */

/**
 * @typedef CreateStoreRulesParam
 * @property {ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema} body
 */

/** @typedef GetApplicationConfigParam */

/** @typedef GetApplicationConfigurationParam */

/** @typedef GetApplicationServiceabilitySelfShipmentParam */

/**
 * @typedef GetCourierPartnerRuleParam
 * @property {string} ruleId - Unique identifier of the courier partner rule
 */

/**
 * @typedef GetCourierPartnerRulesParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [status] - Filter rules based on rule status
 */

/**
 * @typedef GetCourierPartnersParam
 * @property {ServiceabilityPlatformModel.ShipmentCourierPartnerDetails} body
 */

/**
 * @typedef GetStoreRuleParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a
 *   particular rule object.
 */

/**
 * @typedef GetStoreRulesParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [status]
 */

/**
 * @typedef InsertApplicationConfigParam
 * @property {ServiceabilityPlatformModel.StoreRuleConfigData} body
 */

/**
 * @typedef PatchApplicationServiceabilitySelfShipmentParam
 * @property {ServiceabilityPlatformModel.SelfShipResult} body
 */

/**
 * @typedef UpdateApplicationConfigurationParam
 * @property {ServiceabilityPlatformModel.ApplicationConfig} body
 */

/**
 * @typedef UpdateCourierPartnerRulePriorityParam
 * @property {ServiceabilityPlatformModel.RulePriorityDetails} body
 */

/**
 * @typedef UpdateCourierRuleParam
 * @property {string} ruleId - Unique identifier of the courier partner rule.
 * @property {ServiceabilityPlatformModel.CourierPartnerRule} body
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
 * @typedef UpdateStoreRulesParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a
 *   particular rule object.
 * @property {ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema} body
 */

/**
 * @typedef UpdateStoreRulesConfigParam
 * @property {ServiceabilityPlatformModel.StoreRuleConfigData} body
 */

class ServiceabilityPlatformApplicationValidator {
  /** @returns {CreateCourierPartnerRuleParam} */
  static createCourierPartnerRule() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CourierPartnerRule().required(),
    }).required();
  }

  /** @returns {CreateStoreRulesParam} */
  static createStoreRules() {
    return Joi.object({
      body: ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema().required(),
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

  /** @returns {GetApplicationServiceabilitySelfShipmentParam} */
  static getApplicationServiceabilitySelfShipment() {
    return Joi.object({}).required();
  }

  /** @returns {GetCourierPartnerRuleParam} */
  static getCourierPartnerRule() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
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

  /** @returns {InsertApplicationConfigParam} */
  static insertApplicationConfig() {
    return Joi.object({
      body: ServiceabilityPlatformModel.StoreRuleConfigData().required(),
    }).required();
  }

  /** @returns {PatchApplicationServiceabilitySelfShipmentParam} */
  static patchApplicationServiceabilitySelfShipment() {
    return Joi.object({
      body: ServiceabilityPlatformModel.SelfShipResult().required(),
    }).required();
  }

  /** @returns {UpdateApplicationConfigurationParam} */
  static updateApplicationConfiguration() {
    return Joi.object({
      body: ServiceabilityPlatformModel.ApplicationConfig().required(),
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
      ruleId: Joi.string().allow("").required(),
      body: ServiceabilityPlatformModel.CourierPartnerRule().required(),
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
}

module.exports = ServiceabilityPlatformApplicationValidator;
