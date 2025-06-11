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
 * @typedef CreateBulkGeoAreaExportParam
 * @property {ServiceabilityPlatformModel.PriceBulkGeoAreaExportRequestPayload} body
 */
/**
 * @typedef CreateBulkGeoAreasParam
 * @property {ServiceabilityPlatformModel.PriceBulkGeoAreaPayload} body
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
/** @typedef GetBulkGeoAreasHistoryParam */
/** @typedef GetBulkGeoAreasSampleParam */
/**
 * @typedef GetBulkGeoareaValidationParam
 * @property {string} batchId - The batch identifier returned from validation request.
 */
/** @typedef GetBulkZoneParam */
/**
 * @typedef GetBulkZoneOverrideStatusParam
 * @property {string} batchId - The unique identifier for current batch of zones
 *   to be updated.
 */
/**
 * @typedef GetBulkZoneValidationParam
 * @property {string} batchId - The batch identifier returned from validation request.
 */
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
 * @typedef GetGeoAreasExportStatusParam
 * @property {string} batchId - The unique identifier for the sales channel.
 */
/**
 * @typedef GetGeoareaOverrideStatusParam
 * @property {string} batchId - The unique identifier of the bulk job.
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
 * @typedef GetZoneOverrideStatusParam
 * @property {string} zoneId - The unique identifier of the delivery zone.
 */
/**
 * @typedef GetZonesParam
 * @property {string} [stage] - Identifies the specific stage of zone bing requested.
 * @property {string} [type] - Using type, you can filter custom or default zones
 * @property {string} [accessLevel] - Using access level, you can filter public
 *   and private zones as marketplace owner
 * @property {string} [status] - Using status zones listing can be filttered for
 *   marketplace owner and 3p sellers
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
 * @typedef ImportBulkGeoareaParam
 * @property {string} batchId - The batch identifier returned from validation request.
 */
/**
 * @typedef ImportBulkGeoareaStatusParam
 * @property {string} batchId - The batch identifier returned from validation request.
 */
/**
 * @typedef ImportBulkZoneParam
 * @property {string} batchId - The batch identifier returned from validation request.
 */
/**
 * @typedef InsertApplicationConfigParam
 * @property {ServiceabilityPlatformModel.StoreRuleConfigData} body
 */
/**
 * @typedef OverrideBulkGeoareaParam
 * @property {string} batchId - The unique identifier for current batch of
 *   geoareas to be updated.
 * @property {ServiceabilityPlatformModel.BulkZoneOverrideSchema} body
 */
/**
 * @typedef OverrideBulkZoneParam
 * @property {string} batchId - The unique identifier for current batch of zones
 *   to be updated.
 * @property {ServiceabilityPlatformModel.BulkZoneOverrideSchema} body
 */
/**
 * @typedef OverrideZoneByIdParam
 * @property {string} zoneId - The unique identifier of the delivery zone.
 * @property {ServiceabilityPlatformModel.ZoneOverrideSchema} body
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
/**
 * @typedef ValidateBulkGeoareaParam
 * @property {ServiceabilityPlatformModel.ZoneBulkValidationRequestSchema} body
 */
/**
 * @typedef ValidateBulkZoneParam
 * @property {ServiceabilityPlatformModel.ZoneBulkValidationRequestSchema} body
 */
declare class ServiceabilityPlatformApplicationValidator {
    /** @returns {CreateBulkExportParam} */
    static createBulkExport(): CreateBulkExportParam;
    /** @returns {CreateBulkGeoAreaParam} */
    static createBulkGeoArea(): CreateBulkGeoAreaParam;
    /** @returns {CreateBulkGeoAreaExportParam} */
    static createBulkGeoAreaExport(): CreateBulkGeoAreaExportParam;
    /** @returns {CreateBulkGeoAreasParam} */
    static createBulkGeoAreas(): CreateBulkGeoAreasParam;
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
    /** @returns {GetBulkGeoAreasHistoryParam} */
    static getBulkGeoAreasHistory(): any;
    /** @returns {GetBulkGeoAreasSampleParam} */
    static getBulkGeoAreasSample(): any;
    /** @returns {GetBulkGeoareaValidationParam} */
    static getBulkGeoareaValidation(): GetBulkGeoareaValidationParam;
    /** @returns {GetBulkZoneParam} */
    static getBulkZone(): any;
    /** @returns {GetBulkZoneOverrideStatusParam} */
    static getBulkZoneOverrideStatus(): GetBulkZoneOverrideStatusParam;
    /** @returns {GetBulkZoneValidationParam} */
    static getBulkZoneValidation(): GetBulkZoneValidationParam;
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
    /** @returns {GetGeoAreasExportStatusParam} */
    static getGeoAreasExportStatus(): GetGeoAreasExportStatusParam;
    /** @returns {GetGeoareaOverrideStatusParam} */
    static getGeoareaOverrideStatus(): GetGeoareaOverrideStatusParam;
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
    /** @returns {GetZoneOverrideStatusParam} */
    static getZoneOverrideStatus(): GetZoneOverrideStatusParam;
    /** @returns {GetZonesParam} */
    static getZones(): GetZonesParam;
    /** @returns {ImportBulkGeoareaParam} */
    static importBulkGeoarea(): ImportBulkGeoareaParam;
    /** @returns {ImportBulkGeoareaStatusParam} */
    static importBulkGeoareaStatus(): ImportBulkGeoareaStatusParam;
    /** @returns {ImportBulkZoneParam} */
    static importBulkZone(): ImportBulkZoneParam;
    /** @returns {InsertApplicationConfigParam} */
    static insertApplicationConfig(): InsertApplicationConfigParam;
    /** @returns {OverrideBulkGeoareaParam} */
    static overrideBulkGeoarea(): OverrideBulkGeoareaParam;
    /** @returns {OverrideBulkZoneParam} */
    static overrideBulkZone(): OverrideBulkZoneParam;
    /** @returns {OverrideZoneByIdParam} */
    static overrideZoneById(): OverrideZoneByIdParam;
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
    /** @returns {ValidateBulkGeoareaParam} */
    static validateBulkGeoarea(): ValidateBulkGeoareaParam;
    /** @returns {ValidateBulkZoneParam} */
    static validateBulkZone(): ValidateBulkZoneParam;
}
declare namespace ServiceabilityPlatformApplicationValidator {
    export { CreateBulkExportParam, CreateBulkGeoAreaParam, CreateBulkGeoAreaExportParam, CreateBulkGeoAreasParam, CreateBulkZoneParam, CreateCourierPartnerRuleParam, CreateGeoAreaParam, CreateGeoAreaExportJobParam, CreateStoreRulesParam, CreateZoneParam, DeleteZoneParam, DownloadGeoareaSampleFileParam, DownloadZoneSampleFileParam, GetApplicationConfigParam, GetApplicationConfigurationParam, GetBulkExportParam, GetBulkGeoAreaParam, GetBulkGeoAreasHistoryParam, GetBulkGeoAreasSampleParam, GetBulkGeoareaValidationParam, GetBulkZoneParam, GetBulkZoneOverrideStatusParam, GetBulkZoneValidationParam, GetCourierPartnerRuleParam, GetCourierPartnerRuleDetailsParam, GetCourierPartnerRulesParam, GetGeoAreaParam, GetGeoAreaExportJobStatusParam, GetGeoAreasParam, GetGeoAreasExportStatusParam, GetGeoareaOverrideStatusParam, GetStoreRuleParam, GetStoreRuleDetailsParam, GetStoreRulesParam, GetZoneParam, GetZoneDetailsParam, GetZoneOverrideStatusParam, GetZonesParam, ImportBulkGeoareaParam, ImportBulkGeoareaStatusParam, ImportBulkZoneParam, InsertApplicationConfigParam, OverrideBulkGeoareaParam, OverrideBulkZoneParam, OverrideZoneByIdParam, PatchApplicationConfigurationParam, UpdateApplicationConfigurationParam, UpdateBulkGeoAreaParam, UpdateCourierPartnerRulePriorityParam, UpdateCourierRuleParam, UpdateGeoAreaParam, UpdatePincodeAuditHistoryParam, UpdatePincodeBulkViewParam, UpdatePincodeCoDListingParam, UpdatePincodeMopViewParam, UpdateStoreRulePriorityParam, UpdateStoreRulesParam, UpdateStoreRulesConfigParam, UpdateZoneParam, ValidateBulkGeoareaParam, ValidateBulkZoneParam };
}
type CreateBulkExportParam = {
    body: ServiceabilityPlatformModel.BulkCreateZoneExport;
};
type CreateBulkGeoAreaParam = {
    body: ServiceabilityPlatformModel.BulkGeoAreaDetails;
};
type CreateBulkGeoAreaExportParam = {
    body: ServiceabilityPlatformModel.PriceBulkGeoAreaExportRequestPayload;
};
type CreateBulkGeoAreasParam = {
    body: ServiceabilityPlatformModel.PriceBulkGeoAreaPayload;
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
type GetBulkGeoareaValidationParam = {
    /**
     * - The batch identifier returned from validation request.
     */
    batchId: string;
};
type GetBulkZoneOverrideStatusParam = {
    /**
     * - The unique identifier for current batch of zones
     * to be updated.
     */
    batchId: string;
};
type GetBulkZoneValidationParam = {
    /**
     * - The batch identifier returned from validation request.
     */
    batchId: string;
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
type GetGeoAreasExportStatusParam = {
    /**
     * - The unique identifier for the sales channel.
     */
    batchId: string;
};
type GetGeoareaOverrideStatusParam = {
    /**
     * - The unique identifier of the bulk job.
     */
    batchId: string;
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
type GetZoneOverrideStatusParam = {
    /**
     * - The unique identifier of the delivery zone.
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
     * - Using access level, you can filter public
     * and private zones as marketplace owner
     */
    accessLevel?: string;
    /**
     * - Using status zones listing can be filttered for
     * marketplace owner and 3p sellers
     */
    status?: string;
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
type ImportBulkGeoareaParam = {
    /**
     * - The batch identifier returned from validation request.
     */
    batchId: string;
};
type ImportBulkGeoareaStatusParam = {
    /**
     * - The batch identifier returned from validation request.
     */
    batchId: string;
};
type ImportBulkZoneParam = {
    /**
     * - The batch identifier returned from validation request.
     */
    batchId: string;
};
type InsertApplicationConfigParam = {
    body: ServiceabilityPlatformModel.StoreRuleConfigData;
};
type OverrideBulkGeoareaParam = {
    /**
     * - The unique identifier for current batch of
     * geoareas to be updated.
     */
    batchId: string;
    body: ServiceabilityPlatformModel.BulkZoneOverrideSchema;
};
type OverrideBulkZoneParam = {
    /**
     * - The unique identifier for current batch of zones
     * to be updated.
     */
    batchId: string;
    body: ServiceabilityPlatformModel.BulkZoneOverrideSchema;
};
type OverrideZoneByIdParam = {
    /**
     * - The unique identifier of the delivery zone.
     */
    zoneId: string;
    body: ServiceabilityPlatformModel.ZoneOverrideSchema;
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
type ValidateBulkGeoareaParam = {
    body: ServiceabilityPlatformModel.ZoneBulkValidationRequestSchema;
};
type ValidateBulkZoneParam = {
    body: ServiceabilityPlatformModel.ZoneBulkValidationRequestSchema;
};
type DownloadGeoareaSampleFileParam = any;
type GetApplicationConfigParam = any;
type GetApplicationConfigurationParam = any;
type GetBulkGeoAreasHistoryParam = any;
type GetBulkGeoAreasSampleParam = any;
type GetBulkZoneParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
