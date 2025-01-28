export = ServiceabilityPlatformApplicationValidator;
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
declare class ServiceabilityPlatformApplicationValidator {
    /** @returns {CreateBulkExportParam} */
    static createBulkExport(): CreateBulkExportParam;
    /** @returns {CreateBulkGeoAreaParam} */
    static createBulkGeoArea(): CreateBulkGeoAreaParam;
    /** @returns {CreateBulkZoneParam} */
    static createBulkZone(): CreateBulkZoneParam;
    /** @returns {CreateCourierPartnerRuleParam} */
    static createCourierPartnerRule(): CreateCourierPartnerRuleParam;
    /** @returns {CreateGeoAreaParam} */
    static createGeoArea(): CreateGeoAreaParam;
    /** @returns {CreateGeoAreaExportJobParam} */
    static createGeoAreaExportJob(): CreateGeoAreaExportJobParam;
    /** @returns {CreateStoreRulesParam} */
    static createStoreRules(): CreateStoreRulesParam;
    /** @returns {CreateZoneParam} */
    static createZone(): CreateZoneParam;
    /** @returns {DeleteZoneParam} */
    static deleteZone(): DeleteZoneParam;
    /** @returns {DownloadGeoareaSampleFileParam} */
    static downloadGeoareaSampleFile(): any;
    /** @returns {DownloadZoneSampleFileParam} */
    static downloadZoneSampleFile(): DownloadZoneSampleFileParam;
    /** @returns {GetApplicationConfigParam} */
    static getApplicationConfig(): any;
    /** @returns {GetApplicationConfigurationParam} */
    static getApplicationConfiguration(): any;
    /** @returns {GetBulkExportParam} */
    static getBulkExport(): GetBulkExportParam;
    /** @returns {GetBulkGeoAreaParam} */
    static getBulkGeoArea(): GetBulkGeoAreaParam;
    /** @returns {GetBulkZoneParam} */
    static getBulkZone(): any;
    /** @returns {GetCourierPartnerRuleParam} */
    static getCourierPartnerRule(): GetCourierPartnerRuleParam;
    /** @returns {GetCourierPartnerRuleDetailsParam} */
    static getCourierPartnerRuleDetails(): GetCourierPartnerRuleDetailsParam;
    /** @returns {GetCourierPartnerRulesParam} */
    static getCourierPartnerRules(): GetCourierPartnerRulesParam;
    /** @returns {GetGeoAreaParam} */
    static getGeoArea(): GetGeoAreaParam;
    /** @returns {GetGeoAreaExportJobStatusParam} */
    static getGeoAreaExportJobStatus(): GetGeoAreaExportJobStatusParam;
    /** @returns {GetGeoAreasParam} */
    static getGeoAreas(): GetGeoAreasParam;
    /** @returns {GetStoreRuleParam} */
    static getStoreRule(): GetStoreRuleParam;
    /** @returns {GetStoreRuleDetailsParam} */
    static getStoreRuleDetails(): GetStoreRuleDetailsParam;
    /** @returns {GetStoreRulesParam} */
    static getStoreRules(): GetStoreRulesParam;
    /** @returns {GetZoneParam} */
    static getZone(): GetZoneParam;
    /** @returns {GetZoneDetailsParam} */
    static getZoneDetails(): GetZoneDetailsParam;
    /** @returns {GetZonesParam} */
    static getZones(): GetZonesParam;
    /** @returns {InsertApplicationConfigParam} */
    static insertApplicationConfig(): InsertApplicationConfigParam;
    /** @returns {PatchApplicationConfigurationParam} */
    static patchApplicationConfiguration(): PatchApplicationConfigurationParam;
    /** @returns {UpdateApplicationConfigurationParam} */
    static updateApplicationConfiguration(): UpdateApplicationConfigurationParam;
    /** @returns {UpdateBulkGeoAreaParam} */
    static updateBulkGeoArea(): UpdateBulkGeoAreaParam;
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
    /** @returns {UpdateStoreRulePriorityParam} */
    static updateStoreRulePriority(): UpdateStoreRulePriorityParam;
    /** @returns {UpdateStoreRulesParam} */
    static updateStoreRules(): UpdateStoreRulesParam;
    /** @returns {UpdateStoreRulesConfigParam} */
    static updateStoreRulesConfig(): UpdateStoreRulesConfigParam;
    /** @returns {UpdateZoneParam} */
    static updateZone(): UpdateZoneParam;
}
declare namespace ServiceabilityPlatformApplicationValidator {
    export { CreateBulkExportParam, CreateBulkGeoAreaParam, CreateBulkZoneParam, CreateCourierPartnerRuleParam, CreateGeoAreaParam, CreateGeoAreaExportJobParam, CreateStoreRulesParam, CreateZoneParam, DeleteZoneParam, DownloadGeoareaSampleFileParam, DownloadZoneSampleFileParam, GetApplicationConfigParam, GetApplicationConfigurationParam, GetBulkExportParam, GetBulkGeoAreaParam, GetBulkZoneParam, GetCourierPartnerRuleParam, GetCourierPartnerRuleDetailsParam, GetCourierPartnerRulesParam, GetGeoAreaParam, GetGeoAreaExportJobStatusParam, GetGeoAreasParam, GetStoreRuleParam, GetStoreRuleDetailsParam, GetStoreRulesParam, GetZoneParam, GetZoneDetailsParam, GetZonesParam, InsertApplicationConfigParam, PatchApplicationConfigurationParam, UpdateApplicationConfigurationParam, UpdateBulkGeoAreaParam, UpdateCourierPartnerRulePriorityParam, UpdateCourierRuleParam, UpdateGeoAreaParam, UpdatePincodeAuditHistoryParam, UpdatePincodeBulkViewParam, UpdatePincodeCoDListingParam, UpdatePincodeMopViewParam, UpdateStoreRulePriorityParam, UpdateStoreRulesParam, UpdateStoreRulesConfigParam, UpdateZoneParam };
}
type CreateBulkExportParam = {
    body: ServiceabilityPlatformModel.BulkCreateZoneExport;
};
type CreateBulkGeoAreaParam = {
    body: ServiceabilityPlatformModel.BulkGeoAreaDetails;
};
type CreateBulkZoneParam = {
    body: ServiceabilityPlatformModel.CreateBulkZoneData;
};
type CreateCourierPartnerRuleParam = {
    body: ServiceabilityPlatformModel.CourierPartnerRule;
};
type CreateGeoAreaParam = {
    body: ServiceabilityPlatformModel.GeoAreaRequestBody;
};
type CreateGeoAreaExportJobParam = {
    /**
     * - The unique identifier of the Geoarea.
     */
    geoareaId: string;
};
type CreateStoreRulesParam = {
    body: ServiceabilityPlatformModel.CreateStoreRuleRequestSchema;
};
type CreateZoneParam = {
    body: ServiceabilityPlatformModel.CreateZoneV2Data;
};
type DeleteZoneParam = {
    /**
     * - Unique identifier for a particular zone
     */
    zoneId: string;
};
type DownloadZoneSampleFileParam = {
    /**
     * - It denotes the attribute of the product
     */
    productType: string;
};
type GetBulkExportParam = {
    /**
     * - A `batch_id` is a unique identifier for a particular zone.
     */
    batchId: string;
};
type GetBulkGeoAreaParam = {
    /**
     * - A unique identifier for the GeoArea.
     */
    geoareaId: string;
};
type GetCourierPartnerRuleParam = {
    /**
     * - A `rule_uid` is a unique identifier for a particular Dp.
     */
    ruleUid: string;
};
type GetCourierPartnerRuleDetailsParam = {
    /**
     * - A `rule_uid` is a unique identifier for a
     * courier partner rule.
     */
    ruleUid: string;
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
type GetGeoAreaExportJobStatusParam = {
    /**
     * - The unique identifier of the Geoarea.
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
     * - Current page number
     */
    pageNo?: number;
    /**
     * - To fetch the type of a specific geoarea.
     */
    type?: string;
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
type GetStoreRuleDetailsParam = {
    /**
     * - A `rule_uid` is a unique identifier for a order
     * routing rule.
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
     * - Unique identifier for a particular zone
     */
    zoneId: string;
};
type GetZoneDetailsParam = {
    /**
     * - Unique identifier of a particular zone
     */
    zoneId: string;
};
type GetZonesParam = {
    /**
     * - Identifies the specific stage of zone bing requested.
     */
    stage?: string;
    /**
     * - Using type, you can filter custom or default zones
     */
    type?: string;
    /**
     * - Defines the number of items displayed per page.
     */
    pageSize?: number;
    /**
     * - Current page number.
     */
    pageNo?: number;
    /**
     * - Status of Zone (either active or inactive)
     */
    isActive?: boolean;
    /**
     * - Search with name as a free text.
     */
    q?: string;
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
type UpdateApplicationConfigurationParam = {
    body: ServiceabilityPlatformModel.ApplicationConfigPutRequest;
};
type UpdateBulkGeoAreaParam = {
    /**
     * - A unique identifier for the GeoArea.
     */
    geoareaId: string;
    body: ServiceabilityPlatformModel.BulkGeoAreaDetails;
};
type UpdateCourierPartnerRulePriorityParam = {
    body: ServiceabilityPlatformModel.RulePriorityRequest;
};
type UpdateCourierRuleParam = {
    /**
     * - A `rule_uid` is a unique identifier for a particular Dp.
     */
    ruleUid: string;
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
type UpdateStoreRulePriorityParam = {
    body: ServiceabilityPlatformModel.RulePriorityRequest;
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
     * - Unique identifier for a particular zone
     */
    zoneId: string;
    body: ServiceabilityPlatformModel.UpdateZoneDataV2;
};
type DownloadGeoareaSampleFileParam = any;
type GetApplicationConfigParam = any;
type GetApplicationConfigurationParam = any;
type GetBulkZoneParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
