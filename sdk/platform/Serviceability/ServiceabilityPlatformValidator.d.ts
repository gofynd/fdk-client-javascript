export = ServiceabilityPlatformValidator;
/**
 * @typedef BulkServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {ServiceabilityPlatformModel.BulkRegionJobDetails} body
 */
/**
 * @typedef BulkTatParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {ServiceabilityPlatformModel.BulkRegionJobDetails} body
 */
/**
 * @typedef CreateCourierPartnerAccountParam
 * @property {ServiceabilityPlatformModel.CourierAccountDetailsBody} body
 */
/**
 * @typedef CreateCourierPartnerSchemeParam
 * @property {ServiceabilityPlatformModel.CourierPartnerSchemeDetailsModel} body
 */
/**
 * @typedef CreatePackageMaterialParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */
/**
 * @typedef CreatePackageMaterialRuleParam
 * @property {ServiceabilityPlatformModel.PackageRule} body
 */
/**
 * @typedef GetBulkServiceabilityParam
 * @property {string} extensionId - Unique Identifier of courier partner extension.
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {number} [pageNo] - The current page number for paginated results.
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
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {number} [pageNo] - The current page number for paginated results.
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
 * @property {boolean} [onboard] - Only fetch countries which allowed for
 *   onboard on Platform.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 12
 * @property {string} [q] - The search string to search in the list of countries by name.
 * @property {string} [hierarchy] - The search filter to filter countries based
 *   on their available hierarchy.
 */
/**
 * @typedef GetCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier account
 */
/**
 * @typedef GetCourierPartnerAccountsParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account.
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 * @property {string[]} [accountIds] - Filters dp accounts based on their ids
 * @property {boolean} [selfShip] - To filter self ship/non self ship dp accounts
 * @property {boolean} [ownAccount] - Filters seller owned or Fynd Managed dp accounts
 * @property {string} [q] - Filters dp accounts based on case sensitive partial
 *   account name
 */
/**
 * @typedef GetCourierPartnerSchemeParam
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
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
 * @property {string} [q] - The search string to search in the list of courier
 *   partners schemes by name.
 */
/**
 * @typedef GetInstalledCourierPartnerExtensionsParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [isInstalled] - Filter to get installed extensions only
 */
/**
 * @typedef GetOptimalLocationsParam
 * @property {ServiceabilityPlatformModel.OptimlLocationsRequestSchema} body
 */
/**
 * @typedef GetPackageMaterialListParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [q] - Used to search for matching results based on the
 *   provided input.
 * @property {string} [size] - Filters items based on given size
 * @property {string} [packageType] - Filters items based on given package_type
 */
/**
 * @typedef GetPackageMaterialRuleParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
 */
/**
 * @typedef GetPackageMaterialsParam
 * @property {string} packageMaterialId - A `package_material_id` is a unique
 *   identifier for a Package Material
 */
/**
 * @typedef GetSampleFileServiceabilityStatusParam
 * @property {number} [pageNo] - The current page number for paginated results.
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [batchId] - Batch id of the execution
 */
/** @typedef GetSelfShipDetailsParam */
/**
 * @typedef SampleFileServiceabilityParam
 * @property {ServiceabilityPlatformModel.BulkRegionServiceabilityTatDetails} body
 */
/**
 * @typedef UpdateCompanyConfigurationParam
 * @property {string} fulfillmentOptionSlug - Slug representing the fulfillment option.
 * @property {ServiceabilityPlatformModel.CompanyConfigurationSchema} body
 */
/**
 * @typedef UpdateCourierPartnerAccountParam
 * @property {string} accountId - Unique ID of courier account
 * @property {ServiceabilityPlatformModel.CourierAccountDetailsBody} body
 */
/**
 * @typedef UpdateCourierPartnerSchemeParam
 * @property {string} schemeId - Unique identifier for the scheme, used to fetch
 *   or modify scheme details.
 * @property {ServiceabilityPlatformModel.CourierPartnerSchemeUpdateDetailsSchema} body
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
 * @typedef UpdateSelfShipDetailsParam
 * @property {ServiceabilityPlatformModel.SelfshipSchema} body
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
    /** @returns {GetInstalledCourierPartnerExtensionsParam} */
    static getInstalledCourierPartnerExtensions(): GetInstalledCourierPartnerExtensionsParam;
    /** @returns {GetOptimalLocationsParam} */
    static getOptimalLocations(): GetOptimalLocationsParam;
    /** @returns {GetPackageMaterialListParam} */
    static getPackageMaterialList(): GetPackageMaterialListParam;
    /** @returns {GetPackageMaterialRuleParam} */
    static getPackageMaterialRule(): GetPackageMaterialRuleParam;
    /** @returns {GetPackageMaterialsParam} */
    static getPackageMaterials(): GetPackageMaterialsParam;
    /** @returns {GetSampleFileServiceabilityStatusParam} */
    static getSampleFileServiceabilityStatus(): GetSampleFileServiceabilityStatusParam;
    /** @returns {GetSelfShipDetailsParam} */
    static getSelfShipDetails(): any;
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
    /** @returns {UpdateSelfShipDetailsParam} */
    static updateSelfShipDetails(): UpdateSelfShipDetailsParam;
}
declare namespace ServiceabilityPlatformValidator {
    export { BulkServiceabilityParam, BulkTatParam, CreateCourierPartnerAccountParam, CreateCourierPartnerSchemeParam, CreatePackageMaterialParam, CreatePackageMaterialRuleParam, GetBulkServiceabilityParam, GetBulkTatParam, GetCompanyConfigurationParam, GetCountriesParam, GetCourierPartnerAccountParam, GetCourierPartnerAccountsParam, GetCourierPartnerSchemeParam, GetCourierPartnerSchemesParam, GetInstalledCourierPartnerExtensionsParam, GetOptimalLocationsParam, GetPackageMaterialListParam, GetPackageMaterialRuleParam, GetPackageMaterialsParam, GetSampleFileServiceabilityStatusParam, GetSelfShipDetailsParam, SampleFileServiceabilityParam, UpdateCompanyConfigurationParam, UpdateCourierPartnerAccountParam, UpdateCourierPartnerSchemeParam, UpdatePackageMaterialRuleParam, UpdatePackageMaterialsParam, UpdateSelfShipDetailsParam };
}
type BulkServiceabilityParam = {
    /**
     * - Unique Identifier of courier partner extension.
     */
    extensionId: string;
    /**
     * - Unique identifier for the scheme, used to fetch
     * or modify scheme details.
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
     * - Unique identifier for the scheme, used to fetch
     * or modify scheme details.
     */
    schemeId: string;
    body: ServiceabilityPlatformModel.BulkRegionJobDetails;
};
type CreateCourierPartnerAccountParam = {
    body: ServiceabilityPlatformModel.CourierAccountDetailsBody;
};
type CreateCourierPartnerSchemeParam = {
    body: ServiceabilityPlatformModel.CourierPartnerSchemeDetailsModel;
};
type CreatePackageMaterialParam = {
    /**
     * - The current page number for paginated results.
     */
    pageNo?: number;
    body: ServiceabilityPlatformModel.PackageMaterial;
};
type CreatePackageMaterialRuleParam = {
    body: ServiceabilityPlatformModel.PackageRule;
};
type GetBulkServiceabilityParam = {
    /**
     * - Unique Identifier of courier partner extension.
     */
    extensionId: string;
    /**
     * - Unique identifier for the scheme, used to fetch
     * or modify scheme details.
     */
    schemeId: string;
    /**
     * - The current page number for paginated results.
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
     * - Unique identifier for the scheme, used to fetch
     * or modify scheme details.
     */
    schemeId: string;
    /**
     * - The current page number for paginated results.
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
    onboard?: boolean;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 12
     */
    pageSize?: number;
    /**
     * - The search string to search in the list of countries by name.
     */
    q?: string;
    /**
     * - The search filter to filter countries based
     * on their available hierarchy.
     */
    hierarchy?: string;
};
type GetCourierPartnerAccountParam = {
    /**
     * - Unique ID of courier account
     */
    accountId: string;
};
type GetCourierPartnerAccountsParam = {
    /**
     * - The current page number for paginated results.
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Stage of the account.
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
    /**
     * - To filter self ship/non self ship dp accounts
     */
    selfShip?: boolean;
    /**
     * - Filters seller owned or Fynd Managed dp accounts
     */
    ownAccount?: boolean;
    /**
     * - Filters dp accounts based on case sensitive partial
     * account name
     */
    q?: string;
};
type GetCourierPartnerSchemeParam = {
    /**
     * - Unique identifier for the scheme, used to fetch
     * or modify scheme details.
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
    /**
     * - The search string to search in the list of courier
     * partners schemes by name.
     */
    q?: string;
};
type GetInstalledCourierPartnerExtensionsParam = {
    /**
     * - The current page number for paginated results.
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Filter to get installed extensions only
     */
    isInstalled?: string;
};
type GetOptimalLocationsParam = {
    body: ServiceabilityPlatformModel.OptimlLocationsRequestSchema;
};
type GetPackageMaterialListParam = {
    /**
     * - The current page number for paginated results.
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Used to search for matching results based on the
     * provided input.
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
type GetPackageMaterialsParam = {
    /**
     * - A `package_material_id` is a unique
     * identifier for a Package Material
     */
    packageMaterialId: string;
};
type GetSampleFileServiceabilityStatusParam = {
    /**
     * - The current page number for paginated results.
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
type SampleFileServiceabilityParam = {
    body: ServiceabilityPlatformModel.BulkRegionServiceabilityTatDetails;
};
type UpdateCompanyConfigurationParam = {
    /**
     * - Slug representing the fulfillment option.
     */
    fulfillmentOptionSlug: string;
    body: ServiceabilityPlatformModel.CompanyConfigurationSchema;
};
type UpdateCourierPartnerAccountParam = {
    /**
     * - Unique ID of courier account
     */
    accountId: string;
    body: ServiceabilityPlatformModel.CourierAccountDetailsBody;
};
type UpdateCourierPartnerSchemeParam = {
    /**
     * - Unique identifier for the scheme, used to fetch
     * or modify scheme details.
     */
    schemeId: string;
    body: ServiceabilityPlatformModel.CourierPartnerSchemeUpdateDetailsSchema;
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
type UpdateSelfShipDetailsParam = {
    body: ServiceabilityPlatformModel.SelfshipSchema;
};
type GetCompanyConfigurationParam = any;
type GetSelfShipDetailsParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
