export = ServiceabilityPlatformValidator;
/**
 * @typedef BulkServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
 * @property {ServiceabilityPlatformModel.BulkRegionJobDetails} body
 */
/**
 * @typedef BulkTatParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
 * @property {ServiceabilityPlatformModel.BulkRegionJobDetails} body
 */
/**
 * @typedef CreateCourierPartnerAccountParam
 * @property {ServiceabilityPlatformModel.CourierAccountDetailsBody} body
 */
/**
 * @typedef CreateCourierPartnerSchemeParam
 * @property {ServiceabilityPlatformModel.CourierPartnerSchemeV2DetailsModel} body
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
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
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
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
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
 * @typedef GetCountriesParam
 * @property {boolean} [onboarding] - Only fetch countries which allowed for
 *   onboard on Platform.
 * @property {number} [pageNo] - Page number.
 * @property {number} [pageSize] - Page size.
 * @property {string} [q] - Search.
 * @property {string} [hierarchy] - Fetch countries that has certain heirarchy present.
 */
/**
 * @typedef GetCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier partner account
 */
/**
 * @typedef GetCourierPartnerAccountsParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 */
/**
 * @typedef GetCourierPartnerSchemeParam
 * @property {string} schemeId - Unique Identifier of Scheme
 */
/**
 * @typedef GetCourierPartnerSchemesParam
 * @property {string} [schemeType] - Indicates whether a scheme is created by an
 *   admin for global purposes or customized for a specific company.
 * @property {string} [paymentMode] - Indicates payment mode for a scheme.
 * @property {string[]} [capabilities] - Indicates whether the scheme possesses
 *   certain capabilities.
 * @property {string[]} [schemeIds] - List of scheme ids which need to be
 *   returned in the response.
 */
/**
 * @typedef GetOptimalLocationsParam
 * @property {ServiceabilityPlatformModel.OptimlLocationsDetailsSchema} body
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
 * @property {string} packageMaterialId - Unique identifier for a Package. Material
 */
/**
 * @typedef GetSampleFileServiceabilityStatusParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [batchId] - Batch id of the execution
 */
/**
 * @typedef GetServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
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
 * @property {string} [countryIsoCode] - ISO2 code of the country
 * @property {string} [state] - State name
 * @property {string} [city] - City name
 * @property {string} [pincode] - Pincode value to search zones
 * @property {string} [sector] - Sector value to search zones
 */
/**
 * @typedef SampleFileServiceabilityParam
 * @property {ServiceabilityPlatformModel.BulkRegionServiceabilityTatDetails} body
 */
/**
 * @typedef UpdateCompanyConfigurationParam
 * @property {ServiceabilityPlatformModel.CompanyConfig} body
 */
/**
 * @typedef UpdateCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier partner account
 * @property {ServiceabilityPlatformModel.CourierAccountUpdateDetails} body
 */
/**
 * @typedef UpdateCourierPartnerSchemeParam
 * @property {string} schemeId - Unique Identifier of Scheme
 * @property {ServiceabilityPlatformModel.CourierPartnerSchemeV2UpdateDetails} body
 */
/**
 * @typedef UpdatePackageMaterialRuleParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 * @property {ServiceabilityPlatformModel.PackageRule} body
 */
/**
 * @typedef UpdatePackageMaterialsParam
 * @property {string} packageMaterialId - Unique identifier for a Package. Material
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */
/**
 * @typedef UpdateServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier of courier partner scheme.
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
    /** @returns {CreateCourierPartnerSchemeParam} */
    static createCourierPartnerScheme(): CreateCourierPartnerSchemeParam;
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
    /** @returns {GetCountriesParam} */
    static getCountries(): GetCountriesParam;
    /** @returns {GetCourierPartnerAccountParam} */
    static getCourierPartnerAccount(): GetCourierPartnerAccountParam;
    /** @returns {GetCourierPartnerAccountsParam} */
    static getCourierPartnerAccounts(): GetCourierPartnerAccountsParam;
    /** @returns {GetCourierPartnerSchemeParam} */
    static getCourierPartnerScheme(): GetCourierPartnerSchemeParam;
    /** @returns {GetCourierPartnerSchemesParam} */
    static getCourierPartnerSchemes(): GetCourierPartnerSchemesParam;
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
    /** @returns {GetSampleFileServiceabilityStatusParam} */
    static getSampleFileServiceabilityStatus(): GetSampleFileServiceabilityStatusParam;
    /** @returns {GetServiceabilityParam} */
    static getServiceability(): GetServiceabilityParam;
    /** @returns {GetZoneByIdParam} */
    static getZoneById(): GetZoneByIdParam;
    /** @returns {GetZonesParam} */
    static getZones(): GetZonesParam;
    /** @returns {SampleFileServiceabilityParam} */
    static sampleFileServiceability(): SampleFileServiceabilityParam;
    /** @returns {UpdateCompanyConfigurationParam} */
    static updateCompanyConfiguration(): UpdateCompanyConfigurationParam;
    /** @returns {UpdateCourierPartnerAccountParam} */
    static updateCourierPartnerAccount(): UpdateCourierPartnerAccountParam;
    /** @returns {UpdateCourierPartnerSchemeParam} */
    static updateCourierPartnerScheme(): UpdateCourierPartnerSchemeParam;
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
    export { BulkServiceabilityParam, BulkTatParam, CreateCourierPartnerAccountParam, CreateCourierPartnerSchemeParam, CreatePackageMaterialParam, CreatePackageMaterialRuleParam, CreateZoneParam, GetAllStoresParam, GetBulkServiceabilityParam, GetBulkTatParam, GetCompanyConfigurationParam, GetCountriesParam, GetCourierPartnerAccountParam, GetCourierPartnerAccountsParam, GetCourierPartnerSchemeParam, GetCourierPartnerSchemesParam, GetOptimalLocationsParam, GetPackageMaterialListParam, GetPackageMaterialRuleParam, GetPackageMaterialRulesParam, GetPackageMaterialsParam, GetSampleFileServiceabilityStatusParam, GetServiceabilityParam, GetZoneByIdParam, GetZonesParam, SampleFileServiceabilityParam, UpdateCompanyConfigurationParam, UpdateCourierPartnerAccountParam, UpdateCourierPartnerSchemeParam, UpdatePackageMaterialRuleParam, UpdatePackageMaterialsParam, UpdateServiceabilityParam, UpdateZoneByIdParam };
}
type BulkServiceabilityParam = {
    /**
     * - Unique Identifier of courier partner extension.
     */
    extensionId: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    schemeId: string;
    body: ServiceabilityPlatformModel.BulkRegionJobDetails;
};
type BulkTatParam = {
    /**
     * - Unique Identifier of courier partner extension.
     */
    extensionId: string;
    /**
     * - Unique identifier of courier partner scheme.
     */
    schemeId: string;
    body: ServiceabilityPlatformModel.BulkRegionJobDetails;
};
type CreateCourierPartnerAccountParam = {
    body: ServiceabilityPlatformModel.CourierAccountDetailsBody;
};
type CreateCourierPartnerSchemeParam = {
    body: ServiceabilityPlatformModel.CourierPartnerSchemeV2DetailsModel;
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
     * - Unique Identifier of courier partner extension.
     */
    extensionId: string;
    /**
     * - Unique identifier of courier partner scheme.
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
     * - Unique Identifier of courier partner extension.
     */
    extensionId: string;
    /**
     * - Unique identifier of courier partner scheme.
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
type GetCountriesParam = {
    /**
     * - Only fetch countries which allowed for
     * onboard on Platform.
     */
    onboarding?: boolean;
    /**
     * - Page number.
     */
    pageNo?: number;
    /**
     * - Page size.
     */
    pageSize?: number;
    /**
     * - Search.
     */
    q?: string;
    /**
     * - Fetch countries that has certain heirarchy present.
     */
    hierarchy?: string;
};
type GetCourierPartnerAccountParam = {
    /**
     * - Unique ID of courier partner account
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
};
type GetCourierPartnerSchemeParam = {
    /**
     * - Unique Identifier of Scheme
     */
    schemeId: string;
};
type GetCourierPartnerSchemesParam = {
    /**
     * - Indicates whether a scheme is created by an
     * admin for global purposes or customized for a specific company.
     */
    schemeType?: string;
    /**
     * - Indicates payment mode for a scheme.
     */
    paymentMode?: string;
    /**
     * - Indicates whether the scheme possesses
     * certain capabilities.
     */
    capabilities?: string[];
    /**
     * - List of scheme ids which need to be
     * returned in the response.
     */
    schemeIds?: string[];
};
type GetOptimalLocationsParam = {
    body: ServiceabilityPlatformModel.OptimlLocationsDetailsSchema;
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
     * - Unique identifier for a Package. Material
     */
    packageMaterialId: string;
};
type GetSampleFileServiceabilityStatusParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Batch id of the execution
     */
    batchId?: string;
};
type GetServiceabilityParam = {
    /**
     * - Unique Identifier of courier partner extension.
     */
    extensionId: string;
    /**
     * - Unique identifier of courier partner scheme.
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
     * - Pincode value to search zones
     */
    pincode?: string;
    /**
     * - Sector value to search zones
     */
    sector?: string;
};
type SampleFileServiceabilityParam = {
    body: ServiceabilityPlatformModel.BulkRegionServiceabilityTatDetails;
};
type UpdateCompanyConfigurationParam = {
    body: ServiceabilityPlatformModel.CompanyConfig;
};
type UpdateCourierPartnerAccountParam = {
    /**
     * - Unique ID of courier partner account
     */
    accountId: string;
    body: ServiceabilityPlatformModel.CourierAccountUpdateDetails;
};
type UpdateCourierPartnerSchemeParam = {
    /**
     * - Unique Identifier of Scheme
     */
    schemeId: string;
    body: ServiceabilityPlatformModel.CourierPartnerSchemeV2UpdateDetails;
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
     * - Unique identifier for a Package. Material
     */
    packageMaterialId: string;
    body: ServiceabilityPlatformModel.PackageMaterial;
};
type UpdateServiceabilityParam = {
    /**
     * - Unique Identifier of courier partner extension.
     */
    extensionId: string;
    /**
     * - Unique identifier of courier partner scheme.
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
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
