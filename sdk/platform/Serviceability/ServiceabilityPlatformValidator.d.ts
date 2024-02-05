export = ServiceabilityPlatformValidator;
/**
 * @typedef BulkServiceabilityParam
 * @property {string} extensionId - Unique Identifier of CP Extension
 * @property {string} schemeId - Unique identifier of a scheme
 * @property {ServiceabilityPlatformModel.BulkRegionJobSerializer} body
 */
/**
 * @typedef BulkTatParam
 * @property {string} extensionId - Unique Identifier of CP Extension
 * @property {string} schemeId - Unique identifier of a scheme
 * @property {ServiceabilityPlatformModel.BulkRegionJobSerializer} body
 */
/**
 * @typedef CreateCourierPartnerAccountParam
 * @property {ServiceabilityPlatformModel.CourierAccount} body
 */
/**
 * @typedef CreatePackageMaterialParam
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */
/**
 * @typedef CreatePackageMaterialRuleParam
 * @property {ServiceabilityPlatformModel.PackageRule} body
 */
/**
 * @typedef CreateZoneParam
 * @property {ServiceabilityPlatformModel.CreateZoneData} body
 */
/** @typedef GetAllStoresParam */
/**
 * @typedef GetBulkServiceabilityParam
 * @property {string} extensionId - Unique Identifier of CP Extension
 * @property {string} schemeId - Unique identifier of a scheme
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [batchId] - Unique identifier of bulk job
 * @property {string} [action] - Import or export bulk type
 * @property {string} [status] - Status of the bulk actions
 * @property {string} [country] - Country for which bulk job is initiated
 * @property {string} [region] - Region for which bulk job is initiated
 * @property {string} [startDate] - Fetch job history after a particule date
 * @property {string} [endDate] - Fetch job history before a particule date
 */
/**
 * @typedef GetBulkTatParam
 * @property {string} extensionId - Unique Identifier of CP Extension
 * @property {string} schemeId - Unique identifier of a scheme
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [batchId] - Unique identifier of bulk job
 * @property {string} [action] - Import or export bulk type
 * @property {string} [status] - Status of the bulk actions
 * @property {string} [country] - Country for which bulk job is initiated
 * @property {string} [region] - Region for which bulk job is initiated
 * @property {string} [startDate] - Fetch job history after a particule date
 * @property {string} [endDate] - Fetch job history before a particule date
 */
/** @typedef GetCompanyConfigurationParam */
/**
 * @typedef GetCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier account
 */
/**
 * @typedef GetCourierPartnerAccountsParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 * @property {string[]} [accountIds] - Filters dp accounts based on their ids
 */
/**
 * @typedef GetOptimalLocationsParam
 * @property {ServiceabilityPlatformModel.ReAssignStoreRequest} body
 */
/**
 * @typedef GetPackageMaterialListParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [q] - Perform regex search on items matching name for given value
 * @property {string} [size] - Filters items based on given size
 * @property {string} [packageType] - Filters items based on given package_type
 */
/**
 * @typedef GetPackageMaterialRuleParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 */
/**
 * @typedef GetPackageMaterialRulesParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [isActive] - Filters items based on given is_active
 */
/**
 * @typedef GetPackageMaterialsParam
 * @property {string} packageMaterialId - A `package_material_id` is a unique
 *   identifier for a Package Material
 */
/**
 * @typedef GetServiceabilityParam
 * @property {string} extensionId - Unique Identifier of CP Extension
 * @property {string} schemeId - Unique identifier of a scheme
 * @property {string} regionId - Unique identifier of a region
 */
/**
 * @typedef GetZoneByIdParam
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 */
/**
 * @typedef GetZonesParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {boolean} [isActive] - Status of Zone (either active or inactive)
 * @property {string} [channelId] - Zones filtered by an application
 * @property {string} [q] - Search with name as a free text
 * @property {string} [country] - ISO2 code of the country
 * @property {string} [state] - State name
 * @property {string} [city] - City name
 * @property {string} [pincode] - Pincode value to search zones
 * @property {string} [sector] - Sector value to search zones
 */
/**
 * @typedef UpdateCompanyConfigurationParam
 * @property {ServiceabilityPlatformModel.CompanyConfig} body
 */
/**
 * @typedef UpdateCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier account
 * @property {ServiceabilityPlatformModel.CourierAccount} body
 */
/**
 * @typedef UpdatePackageMaterialRuleParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 * @property {ServiceabilityPlatformModel.PackageRule} body
 */
/**
 * @typedef UpdatePackageMaterialsParam
 * @property {string} packageMaterialId - A `package_material_id` is a unique
 *   identifier for a Package Material
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */
/**
 * @typedef UpdateServiceabilityParam
 * @property {string} extensionId - Unique Identifier of CP Extension
 * @property {string} schemeId - Unique identifier of a scheme
 * @property {string} regionId - Unique identifier of a region
 * @property {ServiceabilityPlatformModel.ServiceabilityModel} body
 */
/**
 * @typedef UpdateZoneByIdParam
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {ServiceabilityPlatformModel.UpdateZoneData} body
 */
declare class ServiceabilityPlatformValidator {
    /** @returns {BulkServiceabilityParam} */
    static bulkServiceability(): BulkServiceabilityParam;
    /** @returns {BulkTatParam} */
    static bulkTat(): BulkTatParam;
    /** @returns {CreateCourierPartnerAccountParam} */
    static createCourierPartnerAccount(): CreateCourierPartnerAccountParam;
    /** @returns {CreatePackageMaterialParam} */
    static createPackageMaterial(): CreatePackageMaterialParam;
    /** @returns {CreatePackageMaterialRuleParam} */
    static createPackageMaterialRule(): CreatePackageMaterialRuleParam;
    /** @returns {CreateZoneParam} */
    static createZone(): CreateZoneParam;
    /** @returns {GetAllStoresParam} */
    static getAllStores(): any;
    /** @returns {GetBulkServiceabilityParam} */
    static getBulkServiceability(): GetBulkServiceabilityParam;
    /** @returns {GetBulkTatParam} */
    static getBulkTat(): GetBulkTatParam;
    /** @returns {GetCompanyConfigurationParam} */
    static getCompanyConfiguration(): any;
    /** @returns {GetCourierPartnerAccountParam} */
    static getCourierPartnerAccount(): GetCourierPartnerAccountParam;
    /** @returns {GetCourierPartnerAccountsParam} */
    static getCourierPartnerAccounts(): GetCourierPartnerAccountsParam;
    /** @returns {GetOptimalLocationsParam} */
    static getOptimalLocations(): GetOptimalLocationsParam;
    /** @returns {GetPackageMaterialListParam} */
    static getPackageMaterialList(): GetPackageMaterialListParam;
    /** @returns {GetPackageMaterialRuleParam} */
    static getPackageMaterialRule(): GetPackageMaterialRuleParam;
    /** @returns {GetPackageMaterialRulesParam} */
    static getPackageMaterialRules(): GetPackageMaterialRulesParam;
    /** @returns {GetPackageMaterialsParam} */
    static getPackageMaterials(): GetPackageMaterialsParam;
    /** @returns {GetServiceabilityParam} */
    static getServiceability(): GetServiceabilityParam;
    /** @returns {GetZoneByIdParam} */
    static getZoneById(): GetZoneByIdParam;
    /** @returns {GetZonesParam} */
    static getZones(): GetZonesParam;
    /** @returns {UpdateCompanyConfigurationParam} */
    static updateCompanyConfiguration(): UpdateCompanyConfigurationParam;
    /** @returns {UpdateCourierPartnerAccountParam} */
    static updateCourierPartnerAccount(): UpdateCourierPartnerAccountParam;
    /** @returns {UpdatePackageMaterialRuleParam} */
    static updatePackageMaterialRule(): UpdatePackageMaterialRuleParam;
    /** @returns {UpdatePackageMaterialsParam} */
    static updatePackageMaterials(): UpdatePackageMaterialsParam;
    /** @returns {UpdateServiceabilityParam} */
    static updateServiceability(): UpdateServiceabilityParam;
    /** @returns {UpdateZoneByIdParam} */
    static updateZoneById(): UpdateZoneByIdParam;
}
declare namespace ServiceabilityPlatformValidator {
    export { BulkServiceabilityParam, BulkTatParam, CreateCourierPartnerAccountParam, CreatePackageMaterialParam, CreatePackageMaterialRuleParam, CreateZoneParam, GetAllStoresParam, GetBulkServiceabilityParam, GetBulkTatParam, GetCompanyConfigurationParam, GetCourierPartnerAccountParam, GetCourierPartnerAccountsParam, GetOptimalLocationsParam, GetPackageMaterialListParam, GetPackageMaterialRuleParam, GetPackageMaterialRulesParam, GetPackageMaterialsParam, GetServiceabilityParam, GetZoneByIdParam, GetZonesParam, UpdateCompanyConfigurationParam, UpdateCourierPartnerAccountParam, UpdatePackageMaterialRuleParam, UpdatePackageMaterialsParam, UpdateServiceabilityParam, UpdateZoneByIdParam };
}
type BulkServiceabilityParam = {
    /**
     * - Unique Identifier of CP Extension
     */
    extensionId: string;
    /**
     * - Unique identifier of a scheme
     */
    schemeId: string;
    body: ServiceabilityPlatformModel.BulkRegionJobSerializer;
};
type BulkTatParam = {
    /**
     * - Unique Identifier of CP Extension
     */
    extensionId: string;
    /**
     * - Unique identifier of a scheme
     */
    schemeId: string;
    body: ServiceabilityPlatformModel.BulkRegionJobSerializer;
};
type CreateCourierPartnerAccountParam = {
    body: ServiceabilityPlatformModel.CourierAccount;
};
type CreatePackageMaterialParam = {
    body: ServiceabilityPlatformModel.PackageMaterial;
};
type CreatePackageMaterialRuleParam = {
    body: ServiceabilityPlatformModel.PackageRule;
};
type CreateZoneParam = {
    body: ServiceabilityPlatformModel.CreateZoneData;
};
type GetBulkServiceabilityParam = {
    /**
     * - Unique Identifier of CP Extension
     */
    extensionId: string;
    /**
     * - Unique identifier of a scheme
     */
    schemeId: string;
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Unique identifier of bulk job
     */
    batchId?: string;
    /**
     * - Import or export bulk type
     */
    action?: string;
    /**
     * - Status of the bulk actions
     */
    status?: string;
    /**
     * - Country for which bulk job is initiated
     */
    country?: string;
    /**
     * - Region for which bulk job is initiated
     */
    region?: string;
    /**
     * - Fetch job history after a particule date
     */
    startDate?: string;
    /**
     * - Fetch job history before a particule date
     */
    endDate?: string;
};
type GetBulkTatParam = {
    /**
     * - Unique Identifier of CP Extension
     */
    extensionId: string;
    /**
     * - Unique identifier of a scheme
     */
    schemeId: string;
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Unique identifier of bulk job
     */
    batchId?: string;
    /**
     * - Import or export bulk type
     */
    action?: string;
    /**
     * - Status of the bulk actions
     */
    status?: string;
    /**
     * - Country for which bulk job is initiated
     */
    country?: string;
    /**
     * - Region for which bulk job is initiated
     */
    region?: string;
    /**
     * - Fetch job history after a particule date
     */
    startDate?: string;
    /**
     * - Fetch job history before a particule date
     */
    endDate?: string;
};
type GetCourierPartnerAccountParam = {
    /**
     * - Unique ID of courier account
     */
    accountId: string;
};
type GetCourierPartnerAccountsParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Stage of the account. enabled/disabled
     */
    stage?: string;
    /**
     * - Filters dp accounts based on payment mode
     */
    paymentMode?: string;
    /**
     * - Filters dp accounts based on transport_type
     */
    transportType?: string;
    /**
     * - Filters dp accounts based on their ids
     */
    accountIds?: string[];
};
type GetOptimalLocationsParam = {
    body: ServiceabilityPlatformModel.ReAssignStoreRequest;
};
type GetPackageMaterialListParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Perform regex search on items matching name for given value
     */
    q?: string;
    /**
     * - Filters items based on given size
     */
    size?: string;
    /**
     * - Filters items based on given package_type
     */
    packageType?: string;
};
type GetPackageMaterialRuleParam = {
    /**
     * - A `package_material_rule_id` is a unique
     * identifier for a Package Material Rule
     */
    ruleId: string;
};
type GetPackageMaterialRulesParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Filters items based on given is_active
     */
    isActive?: string;
};
type GetPackageMaterialsParam = {
    /**
     * - A `package_material_id` is a unique
     * identifier for a Package Material
     */
    packageMaterialId: string;
};
type GetServiceabilityParam = {
    /**
     * - Unique Identifier of CP Extension
     */
    extensionId: string;
    /**
     * - Unique identifier of a scheme
     */
    schemeId: string;
    /**
     * - Unique identifier of a region
     */
    regionId: string;
};
type GetZoneByIdParam = {
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
};
type GetZonesParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Status of Zone (either active or inactive)
     */
    isActive?: boolean;
    /**
     * - Zones filtered by an application
     */
    channelId?: string;
    /**
     * - Search with name as a free text
     */
    q?: string;
    /**
     * - ISO2 code of the country
     */
    country?: string;
    /**
     * - State name
     */
    state?: string;
    /**
     * - City name
     */
    city?: string;
    /**
     * - Pincode value to search zones
     */
    pincode?: string;
    /**
     * - Sector value to search zones
     */
    sector?: string;
};
type UpdateCompanyConfigurationParam = {
    body: ServiceabilityPlatformModel.CompanyConfig;
};
type UpdateCourierPartnerAccountParam = {
    /**
     * - Unique ID of courier account
     */
    accountId: string;
    body: ServiceabilityPlatformModel.CourierAccount;
};
type UpdatePackageMaterialRuleParam = {
    /**
     * - A `package_material_rule_id` is a unique
     * identifier for a Package Material Rule
     */
    ruleId: string;
    body: ServiceabilityPlatformModel.PackageRule;
};
type UpdatePackageMaterialsParam = {
    /**
     * - A `package_material_id` is a unique
     * identifier for a Package Material
     */
    packageMaterialId: string;
    body: ServiceabilityPlatformModel.PackageMaterial;
};
type UpdateServiceabilityParam = {
    /**
     * - Unique Identifier of CP Extension
     */
    extensionId: string;
    /**
     * - Unique identifier of a scheme
     */
    schemeId: string;
    /**
     * - Unique identifier of a region
     */
    regionId: string;
    body: ServiceabilityPlatformModel.ServiceabilityModel;
};
type UpdateZoneByIdParam = {
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
    body: ServiceabilityPlatformModel.UpdateZoneData;
};
type GetAllStoresParam = any;
type GetCompanyConfigurationParam = any;
import ServiceabilityPlatformModel = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformModel");
