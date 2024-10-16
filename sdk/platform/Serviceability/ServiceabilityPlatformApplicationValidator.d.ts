export = ServiceabilityPlatformApplicationValidator;
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
 * @property {string} ruleId - A `rule_id` is a unique identifier for a rule.
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
 * @property {string} ruleId - A `rule_id` is a unique identifier for a particular Dp.
 * @property {ServiceabilityPlatformModel.CourierPartnerRule} body
 */
/**
 * @typedef UpdatePincodeAuditHistoryParam
 * @property {ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryDetails} body
 */
/**
 * @typedef UpdatePincodeBulkViewParam
 * @property {ServiceabilityPlatformModel.PincodeMopBulkData} body
 */
/**
 * @typedef UpdatePincodeCoDListingParam
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
declare class ServiceabilityPlatformApplicationValidator {
    /** @returns {CreateCourierPartnerRuleParam} */
    static createCourierPartnerRule(): CreateCourierPartnerRuleParam;
    /** @returns {CreateStoreRulesParam} */
    static createStoreRules(): CreateStoreRulesParam;
    /** @returns {GetApplicationConfigParam} */
    static getApplicationConfig(): any;
    /** @returns {GetApplicationConfigurationParam} */
    static getApplicationConfiguration(): any;
    /** @returns {GetApplicationServiceabilitySelfShipmentParam} */
    static getApplicationServiceabilitySelfShipment(): any;
    /** @returns {GetCourierPartnerRuleParam} */
    static getCourierPartnerRule(): GetCourierPartnerRuleParam;
    /** @returns {GetCourierPartnerRulesParam} */
    static getCourierPartnerRules(): GetCourierPartnerRulesParam;
    /** @returns {GetCourierPartnersParam} */
    static getCourierPartners(): GetCourierPartnersParam;
    /** @returns {GetStoreRuleParam} */
    static getStoreRule(): GetStoreRuleParam;
    /** @returns {GetStoreRulesParam} */
    static getStoreRules(): GetStoreRulesParam;
    /** @returns {InsertApplicationConfigParam} */
    static insertApplicationConfig(): InsertApplicationConfigParam;
    /** @returns {PatchApplicationServiceabilitySelfShipmentParam} */
    static patchApplicationServiceabilitySelfShipment(): PatchApplicationServiceabilitySelfShipmentParam;
    /** @returns {UpdateApplicationConfigurationParam} */
    static updateApplicationConfiguration(): UpdateApplicationConfigurationParam;
    /** @returns {UpdateCourierPartnerRulePriorityParam} */
    static updateCourierPartnerRulePriority(): UpdateCourierPartnerRulePriorityParam;
    /** @returns {UpdateCourierRuleParam} */
    static updateCourierRule(): UpdateCourierRuleParam;
    /** @returns {UpdatePincodeAuditHistoryParam} */
    static updatePincodeAuditHistory(): UpdatePincodeAuditHistoryParam;
    /** @returns {UpdatePincodeBulkViewParam} */
    static updatePincodeBulkView(): UpdatePincodeBulkViewParam;
    /** @returns {UpdatePincodeCoDListingParam} */
    static updatePincodeCoDListing(): UpdatePincodeCoDListingParam;
    /** @returns {UpdatePincodeMopViewParam} */
    static updatePincodeMopView(): UpdatePincodeMopViewParam;
    /** @returns {UpdateStoreRulesParam} */
    static updateStoreRules(): UpdateStoreRulesParam;
    /** @returns {UpdateStoreRulesConfigParam} */
    static updateStoreRulesConfig(): UpdateStoreRulesConfigParam;
}
declare namespace ServiceabilityPlatformApplicationValidator {
    export { CreateCourierPartnerRuleParam, CreateStoreRulesParam, GetApplicationConfigParam, GetApplicationConfigurationParam, GetApplicationServiceabilitySelfShipmentParam, GetCourierPartnerRuleParam, GetCourierPartnerRulesParam, GetCourierPartnersParam, GetStoreRuleParam, GetStoreRulesParam, InsertApplicationConfigParam, PatchApplicationServiceabilitySelfShipmentParam, UpdateApplicationConfigurationParam, UpdateCourierPartnerRulePriorityParam, UpdateCourierRuleParam, UpdatePincodeAuditHistoryParam, UpdatePincodeBulkViewParam, UpdatePincodeCoDListingParam, UpdatePincodeMopViewParam, UpdateStoreRulesParam, UpdateStoreRulesConfigParam };
}
type CreateCourierPartnerRuleParam = {
    body: ServiceabilityPlatformModel.CourierPartnerRule;
};
type CreateStoreRulesParam = {
    body: ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema;
};
type GetCourierPartnerRuleParam = {
    /**
     * - A `rule_id` is a unique identifier for a rule.
     */
    ruleId: string;
};
type GetCourierPartnerRulesParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Filter rules based on rule status
     */
    status?: string;
};
type GetCourierPartnersParam = {
    body: ServiceabilityPlatformModel.ShipmentCourierPartnerDetails;
};
type GetStoreRuleParam = {
    /**
     * - A `rule_uid` is a unique identifier for a
     * particular rule object.
     */
    ruleUid: string;
};
type GetStoreRulesParam = {
    pageNo?: number;
    pageSize?: number;
    status?: string;
};
type InsertApplicationConfigParam = {
    body: ServiceabilityPlatformModel.StoreRuleConfigData;
};
type PatchApplicationServiceabilitySelfShipmentParam = {
    body: ServiceabilityPlatformModel.SelfShipResult;
};
type UpdateApplicationConfigurationParam = {
    body: ServiceabilityPlatformModel.ApplicationConfig;
};
type UpdateCourierPartnerRulePriorityParam = {
    body: ServiceabilityPlatformModel.RulePriorityDetails;
};
type UpdateCourierRuleParam = {
    /**
     * - A `rule_id` is a unique identifier for a particular Dp.
     */
    ruleId: string;
    body: ServiceabilityPlatformModel.CourierPartnerRule;
};
type UpdatePincodeAuditHistoryParam = {
    body: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryDetails;
};
type UpdatePincodeBulkViewParam = {
    body: ServiceabilityPlatformModel.PincodeMopBulkData;
};
type UpdatePincodeCoDListingParam = {
    body: ServiceabilityPlatformModel.PincodeCodStatusListingDetails;
};
type UpdatePincodeMopViewParam = {
    body: ServiceabilityPlatformModel.PincodeMopData;
};
type UpdateStoreRulesParam = {
    /**
     * - A `rule_uid` is a unique identifier for a
     * particular rule object.
     */
    ruleUid: string;
    body: ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema;
};
type UpdateStoreRulesConfigParam = {
    body: ServiceabilityPlatformModel.StoreRuleConfigData;
};
type GetApplicationConfigParam = any;
type GetApplicationConfigurationParam = any;
type GetApplicationServiceabilitySelfShipmentParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
