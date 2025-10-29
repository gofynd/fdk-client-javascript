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
 * @typedef UpdateApplicationConfigurationParam
 * @property {ServiceabilityPlatformModel.ApplicationConfigPutDetail} body
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
declare class ServiceabilityPlatformApplicationValidator {
    /** @returns {CreateBulkExportParam} */
    static createBulkExport(): CreateBulkExportParam;
    /** @returns {CreateBulkGeoAreaParam} */
    static createBulkGeoArea(): CreateBulkGeoAreaParam;
    /** @returns {CreateCourierPartnerRuleParam} */
    static createCourierPartnerRule(): CreateCourierPartnerRuleParam;
    /** @returns {CreateFulfillmentOptionParam} */
    static createFulfillmentOption(): CreateFulfillmentOptionParam;
    /** @returns {CreateGeoAreaParam} */
    static createGeoArea(): CreateGeoAreaParam;
    /** @returns {CreateGeoAreaExportJobParam} */
    static createGeoAreaExportJob(): CreateGeoAreaExportJobParam;
    /** @returns {CreateShipmentsParam} */
    static createShipments(): CreateShipmentsParam;
    /** @returns {CreateStoreRulesParam} */
    static createStoreRules(): CreateStoreRulesParam;
    /** @returns {CreateZoneParam} */
    static createZone(): CreateZoneParam;
    /** @returns {DeleteFulfillmentOptionsParam} */
    static deleteFulfillmentOptions(): DeleteFulfillmentOptionsParam;
    /** @returns {DeleteZoneParam} */
    static deleteZone(): DeleteZoneParam;
    /** @returns {DownloadGeoareaSampleFileParam} */
    static downloadGeoareaSampleFile(): any;
    /** @returns {GetApplicationConfigParam} */
    static getApplicationConfig(): any;
    /** @returns {GetApplicationConfigurationParam} */
    static getApplicationConfiguration(): any;
    /** @returns {GetBulkExportParam} */
    static getBulkExport(): GetBulkExportParam;
    /** @returns {GetBulkFulfillmentValidationStatusParam} */
    static getBulkFulfillmentValidationStatus(): GetBulkFulfillmentValidationStatusParam;
    /** @returns {GetBulkGeoAreaParam} */
    static getBulkGeoArea(): GetBulkGeoAreaParam;
    /** @returns {GetCourierPartnerRuleParam} */
    static getCourierPartnerRule(): GetCourierPartnerRuleParam;
    /** @returns {GetCourierPartnerRulesParam} */
    static getCourierPartnerRules(): GetCourierPartnerRulesParam;
    /** @returns {GetCourierPartnersParam} */
    static getCourierPartners(): GetCourierPartnersParam;
    /** @returns {GetFulfillmentOptionProductsParam} */
    static getFulfillmentOptionProducts(): GetFulfillmentOptionProductsParam;
    /** @returns {GetFulfillmentOptionStoresParam} */
    static getFulfillmentOptionStores(): GetFulfillmentOptionStoresParam;
    /** @returns {GetFulfillmentOptionsParam} */
    static getFulfillmentOptions(): GetFulfillmentOptionsParam;
    /** @returns {GetFulfillmentOptionsListParam} */
    static getFulfillmentOptionsList(): GetFulfillmentOptionsListParam;
    /** @returns {GetGeoAreaParam} */
    static getGeoArea(): GetGeoAreaParam;
    /** @returns {GetGeoAreaExportJobStatusParam} */
    static getGeoAreaExportJobStatus(): GetGeoAreaExportJobStatusParam;
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
    /** @returns {PutFulfillmentOptionParam} */
    static putFulfillmentOption(): PutFulfillmentOptionParam;
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
    /** @returns {UploadBulkFulfillmentOptionsParam} */
    static uploadBulkFulfillmentOptions(): UploadBulkFulfillmentOptionsParam;
    /** @returns {ValidateBulkFulfillmentOptionsParam} */
    static validateBulkFulfillmentOptions(): ValidateBulkFulfillmentOptionsParam;
}
declare namespace ServiceabilityPlatformApplicationValidator {
    export { CreateBulkExportParam, CreateBulkGeoAreaParam, CreateCourierPartnerRuleParam, CreateFulfillmentOptionParam, CreateGeoAreaParam, CreateGeoAreaExportJobParam, CreateShipmentsParam, CreateStoreRulesParam, CreateZoneParam, DeleteFulfillmentOptionsParam, DeleteZoneParam, DownloadGeoareaSampleFileParam, GetApplicationConfigParam, GetApplicationConfigurationParam, GetBulkExportParam, GetBulkFulfillmentValidationStatusParam, GetBulkGeoAreaParam, GetCourierPartnerRuleParam, GetCourierPartnerRulesParam, GetCourierPartnersParam, GetFulfillmentOptionProductsParam, GetFulfillmentOptionStoresParam, GetFulfillmentOptionsParam, GetFulfillmentOptionsListParam, GetGeoAreaParam, GetGeoAreaExportJobStatusParam, GetGeoAreasParam, GetStoreRuleParam, GetStoreRulesParam, GetZoneParam, GetZonesParam, InsertApplicationConfigParam, PatchApplicationConfigurationParam, PutFulfillmentOptionParam, UpdateApplicationConfigurationParam, UpdateBulkGeoAreaParam, UpdateCourierPartnerRulePriorityParam, UpdateCourierRuleParam, UpdateGeoAreaParam, UpdatePincodeAuditHistoryParam, UpdatePincodeBulkViewParam, UpdatePincodeCoDListingParam, UpdatePincodeMopViewParam, UpdateStoreRulePriorityParam, UpdateStoreRulesParam, UpdateStoreRulesConfigParam, UpdateZoneParam, UploadBulkFulfillmentOptionsParam, ValidateBulkFulfillmentOptionsParam };
}
type CreateBulkExportParam = {
    body: ServiceabilityPlatformModel.BulkCreateZoneExport;
};
type CreateBulkGeoAreaParam = {
    body: ServiceabilityPlatformModel.BulkGeoAreaDetails;
};
type CreateCourierPartnerRuleParam = {
    body: ServiceabilityPlatformModel.CourierPartnerRule;
};
type CreateFulfillmentOptionParam = {
    body: ServiceabilityPlatformModel.FulfillmentOption;
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
type CreateShipmentsParam = {
    /**
     * - Ordering source header, to be used to
     * identify source of order creation.
     */
    xOrderingSource?: string;
    body: ServiceabilityPlatformModel.PlatformShipmentsRequestSchema;
};
type CreateStoreRulesParam = {
    body: ServiceabilityPlatformModel.CreateStoreRuleDetailsSchema;
};
type CreateZoneParam = {
    body: ServiceabilityPlatformModel.CreateZoneDataSchema;
};
type DeleteFulfillmentOptionsParam = {
    /**
     * - Slug of the fulfillment option for retrieving details.
     */
    slug: string;
};
type DeleteZoneParam = {
    /**
     * - Unique identifier for a particular zone
     */
    zoneId: string;
};
type GetBulkExportParam = {
    /**
     * - A `batch_id` is a unique identifier for a particular zone.
     */
    batchId: string;
};
type GetBulkFulfillmentValidationStatusParam = {
    /**
     * - Unique id created by validate api.
     */
    bulkId: string;
};
type GetBulkGeoAreaParam = {
    /**
     * - A unique identifier for the GeoArea.
     */
    geoareaId: string;
};
type GetCourierPartnerRuleParam = {
    /**
     * - Unique identifier of the courier partner rule
     */
    ruleUid: string;
};
type GetCourierPartnerRulesParam = {
    /**
     * - The current page number for paginated results.
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
type GetFulfillmentOptionProductsParam = {
    /**
     * - Slug of the fulfillment option for retrieving details.
     */
    slug: string;
    /**
     * - Query to search product by name.
     */
    q?: string;
    /**
     * - The unique identifier of the store.
     */
    storeId: number;
};
type GetFulfillmentOptionStoresParam = {
    /**
     * - Slug of the fulfillment option for retrieving details.
     */
    slug: string;
    /**
     * - Query to search product by name.
     */
    q?: string;
};
type GetFulfillmentOptionsParam = {
    /**
     * - Slug of the fulfillment option for retrieving details.
     */
    slug: string;
    /**
     * - The unique identifier of the product.
     */
    productId?: number;
    /**
     * - The unique identifier of the store.
     */
    storeId?: number;
};
type GetFulfillmentOptionsListParam = {
    /**
     * - The unique identifier (slug) of the product.
     */
    productSlug?: string;
    /**
     * - The unique identifier of the store.
     */
    storeId?: number;
    /**
     * - Status of the fulfillment option. Must be
     * either `ACTIVE` or `INACTIVE`.
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
     * - Used to search for matching results based on the
     * provided input.
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
    /**
     * - The current page number for paginated results.
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
type GetZoneParam = {
    /**
     * - Unique identifier for a particular zone
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
     * - Current page number.
     */
    pageNo?: number;
    /**
     * - Slug identifier for filtering by
     * fulfillment option.
     */
    fulfillmentOptionSlug?: string;
    /**
     * - Status of Zone (either active or inactive)
     */
    isActive?: boolean;
    /**
     * - Used to search for matching results based on the
     * provided input.
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
    body: ServiceabilityPlatformModel.ApplicationConfigPatch;
};
type PutFulfillmentOptionParam = {
    /**
     * - Slug of the fulfillment option for retrieving details.
     */
    slug: string;
    body: ServiceabilityPlatformModel.FulfillmentOption;
};
type UpdateApplicationConfigurationParam = {
    body: ServiceabilityPlatformModel.ApplicationConfigPutDetail;
};
type UpdateBulkGeoAreaParam = {
    /**
     * - A unique identifier for the GeoArea.
     */
    geoareaId: string;
    body: ServiceabilityPlatformModel.BulkGeoAreaDetails;
};
type UpdateCourierPartnerRulePriorityParam = {
    body: ServiceabilityPlatformModel.RulePriorityDetails;
};
type UpdateCourierRuleParam = {
    /**
     * - Unique identifier of the courier partner rule.
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
    /**
     * - Page number to be fetched.
     */
    pageNumber?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    body: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryDetails;
};
type UpdatePincodeBulkViewParam = {
    body: ServiceabilityPlatformModel.PincodeMopBulkData;
};
type UpdatePincodeCoDListingParam = {
    /**
     * - Page number to be fetched.
     */
    pageNumber?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    body: ServiceabilityPlatformModel.PincodeCodStatusListingDetails;
};
type UpdatePincodeMopViewParam = {
    body: ServiceabilityPlatformModel.PincodeMopData;
};
type UpdateStoreRulePriorityParam = {
    body: ServiceabilityPlatformModel.RulePriorityDetails;
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
type UpdateZoneParam = {
    /**
     * - Unique identifier for a particular zone
     */
    zoneId: string;
    body: ServiceabilityPlatformModel.UpdateZoneData;
};
type UploadBulkFulfillmentOptionsParam = {
    body: ServiceabilityPlatformModel.FulfillmentOptionBulk;
};
type ValidateBulkFulfillmentOptionsParam = {
    /**
     * - Type of entity being validated (stores or products).
     */
    type: string;
    body: ServiceabilityPlatformModel.FulfillmentOptionBulkValidate;
};
type DownloadGeoareaSampleFileParam = any;
type GetApplicationConfigParam = any;
type GetApplicationConfigurationParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
