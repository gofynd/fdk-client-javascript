export = ServiceabilityPlatformApplicationValidator;
/**
 * @typedef CreateCourierPartnerRuleParam
 * @property {ServiceabilityPlatformModel.CourierPartnerRule} body
 */
/**
 * @typedef CreateGeoAreaParam
 * @property {ServiceabilityPlatformModel.GeoAreaRequestBody} body
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
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
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
 * @typedef GetGeoAreaParam
 * @property {string} geoareaId - A unique identifier for the GeoArea.
 */
/**
 * @typedef GetGeoAreasParam
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {boolean} [isActive] - Status of GeoAreas (either active or inactive)
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
 * @typedef GetStoreRulesParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 * @property {string} [status]
 */
/**
 * @typedef GetZoneParam
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 */
/**
 * @typedef GetZonesParam
 * @property {string} [stage] - Identifies the specific stage of zone bing requested.
 * @property {number} [pageSize] - Defines the number of items displayed per page.
 * @property {string} [zoneIds] - Defines the specific zones with the given ids
 *   to be displayed.
 * @property {boolean} [isActive] - Status of Zone (either active or inactive)
 * @property {string} [q] - Search with name as a free text.
 * @property {string} [country] - Name of the country.
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
 * @typedef PatchApplicationServiceabilitySelfShipmentParam
 * @property {ServiceabilityPlatformModel.SelfShipResponse} body
 */
/**
 * @typedef UpdateApplicationConfigurationParam
 * @property {ServiceabilityPlatformModel.ApplicationConfig} body
 */
/**
 * @typedef UpdateCourierPartnerRulePriorityParam
 * @property {ServiceabilityPlatformModel.RulePriorityRequest} body
 */
/**
 * @typedef UpdateCourierRuleParam
 * @property {string} ruleId - A `rule_id` is a unique identifier for a particular Dp.
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
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {ServiceabilityPlatformModel.UpdateZoneDataV2} body
 */
declare class ServiceabilityPlatformApplicationValidator {
    /** @returns {CreateCourierPartnerRuleParam} */
    static createCourierPartnerRule(): CreateCourierPartnerRuleParam;
    /** @returns {CreateGeoAreaParam} */
    static createGeoArea(): CreateGeoAreaParam;
    /** @returns {CreateStoreRulesParam} */
    static createStoreRules(): CreateStoreRulesParam;
    /** @returns {CreateZoneParam} */
    static createZone(): CreateZoneParam;
    /** @returns {DeleteZoneParam} */
    static deleteZone(): DeleteZoneParam;
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
    /** @returns {GetGeoAreaParam} */
    static getGeoArea(): GetGeoAreaParam;
    /** @returns {GetGeoAreasParam} */
    static getGeoAreas(): GetGeoAreasParam;
    /** @returns {GetStoreRuleParam} */
    static getStoreRule(): GetStoreRuleParam;
    /** @returns {GetStoreRulesParam} */
    static getStoreRules(): GetStoreRulesParam;
    /** @returns {GetZoneParam} */
    static getZone(): GetZoneParam;
    /** @returns {GetZonesParam} */
    static getZones(): GetZonesParam;
    /** @returns {InsertApplicationConfigParam} */
    static insertApplicationConfig(): InsertApplicationConfigParam;
    /** @returns {PatchApplicationConfigurationParam} */
    static patchApplicationConfiguration(): PatchApplicationConfigurationParam;
    /** @returns {PatchApplicationServiceabilitySelfShipmentParam} */
    static patchApplicationServiceabilitySelfShipment(): PatchApplicationServiceabilitySelfShipmentParam;
    /** @returns {UpdateApplicationConfigurationParam} */
    static updateApplicationConfiguration(): UpdateApplicationConfigurationParam;
    /** @returns {UpdateCourierPartnerRulePriorityParam} */
    static updateCourierPartnerRulePriority(): UpdateCourierPartnerRulePriorityParam;
    /** @returns {UpdateCourierRuleParam} */
    static updateCourierRule(): UpdateCourierRuleParam;
    /** @returns {UpdateGeoAreaParam} */
    static updateGeoArea(): UpdateGeoAreaParam;
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
    /** @returns {UpdateZoneParam} */
    static updateZone(): UpdateZoneParam;
}
declare namespace ServiceabilityPlatformApplicationValidator {
    export { CreateCourierPartnerRuleParam, CreateGeoAreaParam, CreateStoreRulesParam, CreateZoneParam, DeleteZoneParam, GetApplicationConfigParam, GetApplicationConfigurationParam, GetApplicationServiceabilitySelfShipmentParam, GetCourierPartnerRuleParam, GetCourierPartnerRulesParam, GetGeoAreaParam, GetGeoAreasParam, GetStoreRuleParam, GetStoreRulesParam, GetZoneParam, GetZonesParam, InsertApplicationConfigParam, PatchApplicationConfigurationParam, PatchApplicationServiceabilitySelfShipmentParam, UpdateApplicationConfigurationParam, UpdateCourierPartnerRulePriorityParam, UpdateCourierRuleParam, UpdateGeoAreaParam, UpdatePincodeAuditHistoryParam, UpdatePincodeBulkViewParam, UpdatePincodeCoDListingParam, UpdatePincodeMopViewParam, UpdateStoreRulesParam, UpdateStoreRulesConfigParam, UpdateZoneParam };
}
type CreateCourierPartnerRuleParam = {
    body: ServiceabilityPlatformModel.CourierPartnerRule;
};
type CreateGeoAreaParam = {
    body: ServiceabilityPlatformModel.GeoAreaRequestBody;
};
type CreateStoreRulesParam = {
    body: ServiceabilityPlatformModel.CreateStoreRuleRequestSchema;
};
type CreateZoneParam = {
    body: ServiceabilityPlatformModel.CreateZoneV2Data;
};
type DeleteZoneParam = {
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
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
type GetGeoAreaParam = {
    /**
     * - A unique identifier for the GeoArea.
     */
    geoareaId: string;
};
type GetGeoAreasParam = {
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Status of GeoAreas (either active or inactive)
     */
    isActive?: boolean;
    /**
     * - Search with name as a free text
     */
    q?: string;
    /**
     * - ISO2 code of the country
     */
    countryIsoCode?: string;
    /**
     * - State name
     */
    state?: string;
    /**
     * - City name
     */
    city?: string;
    /**
     * - Pincode value to search geoareas
     */
    pincode?: string;
    /**
     * - Sector value to search geoareas
     */
    sector?: string;
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
type GetZoneParam = {
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
};
type GetZonesParam = {
    /**
     * - Identifies the specific stage of zone bing requested.
     */
    stage?: string;
    /**
     * - Defines the number of items displayed per page.
     */
    pageSize?: number;
    /**
     * - Defines the specific zones with the given ids
     * to be displayed.
     */
    zoneIds?: string;
    /**
     * - Status of Zone (either active or inactive)
     */
    isActive?: boolean;
    /**
     * - Search with name as a free text.
     */
    q?: string;
    /**
     * - Name of the country.
     */
    country?: string;
    /**
     * - ISO2 code of the country.
     */
    countryIsoCode?: string;
    /**
     * - PIN Code of the country.
     */
    pincode?: string;
    /**
     * - State of the country.
     */
    state?: string;
    /**
     * - City of the country.
     */
    city?: string;
    /**
     * - Sector name of mentioned address.
     */
    sector?: string;
};
type InsertApplicationConfigParam = {
    body: ServiceabilityPlatformModel.StoreRuleConfigData;
};
type PatchApplicationConfigurationParam = {
    body: ServiceabilityPlatformModel.ApplicationConfigPatchRequest;
};
type PatchApplicationServiceabilitySelfShipmentParam = {
    body: ServiceabilityPlatformModel.SelfShipResponse;
};
type UpdateApplicationConfigurationParam = {
    body: ServiceabilityPlatformModel.ApplicationConfig;
};
type UpdateCourierPartnerRulePriorityParam = {
    body: ServiceabilityPlatformModel.RulePriorityRequest;
};
type UpdateCourierRuleParam = {
    /**
     * - A `rule_id` is a unique identifier for a particular Dp.
     */
    ruleId: string;
    body: ServiceabilityPlatformModel.CourierPartnerRule;
};
type UpdateGeoAreaParam = {
    /**
     * - A unique identifier for the GeoArea.
     */
    geoareaId: string;
    body: ServiceabilityPlatformModel.GeoAreaRequestBody;
};
type UpdatePincodeAuditHistoryParam = {
    body: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest;
};
type UpdatePincodeBulkViewParam = {
    body: ServiceabilityPlatformModel.PincodeMopBulkData;
};
type UpdatePincodeCoDListingParam = {
    body: ServiceabilityPlatformModel.PincodeCodStatusListingRequest;
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
    body: ServiceabilityPlatformModel.CreateStoreRuleRequestSchema;
};
type UpdateStoreRulesConfigParam = {
    body: ServiceabilityPlatformModel.StoreRuleConfigData;
};
type UpdateZoneParam = {
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
    body: ServiceabilityPlatformModel.UpdateZoneDataV2;
};
type GetApplicationConfigParam = any;
type GetApplicationConfigurationParam = any;
type GetApplicationServiceabilitySelfShipmentParam = any;
import ServiceabilityPlatformModel = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformModel");
