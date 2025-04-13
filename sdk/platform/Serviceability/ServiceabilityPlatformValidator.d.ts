export = ServiceabilityPlatformValidator;
/**
 * @typedef CreateCourierPartnerAccountParam
 * @property {ServiceabilityPlatformModel.CourierAccount} body
 */
/**
 * @typedef CreatePackageMaterialParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */
/**
 * @typedef CreatePackageMaterialRuleParam
 * @property {ServiceabilityPlatformModel.PackageRuleRequest} body
 */
/** @typedef GetCompanyConfigurationParam */
/** @typedef GetCompanySelfShipParam */
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
 * @typedef GetCountryParam
 * @property {string} countryIsoCode - The `country_iso_code` is ISO-2 (alpha-2)
 *   code for the country.
 */
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
 * @property {boolean} [selfShip] - To filter self ship/non self ship dp accounts
 * @property {boolean} [ownAccount] - Filters seller owned or admin owned dp accounts
 * @property {string} [q] - Filters dp accounts based on case sensitive partial
 *   account name
 */
/**
 * @typedef GetInstalledCourierPartnerExtensionsParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [isInstalled] - Filter to get installed extensions only
 */
/**
 * @typedef GetListPackageMaterialRuleDetailsParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [isActive] - Filters items based on given is_active
 */
/**
 * @typedef GetLocalitiesParam
 * @property {string} localityType - A `locality_type` contains unique
 *   geographical division.
 * @property {string} [country] - A `country` contains a specific value of the
 *   country iso2 code.
 * @property {string} [state] - A `state` contains a specific value of the
 *   state, province.
 * @property {string} [city] - A `city` contains a specific value of the city.
 * @property {number} [pageNo] - Page number.
 * @property {number} [pageSize] - Page size.
 * @property {string} [q] - Search.
 * @property {string} [name] - Search for localities. Either provide a full name
 *   or a search term.
 */
/**
 * @typedef GetLocalitiesByPrefixParam
 * @property {number} [pageNo] - Starting index of the items.
 * @property {number} [pageSize] - Number of items per page.
 * @property {string} [q] - Localities starting with the specified prefix.
 */
/**
 * @typedef GetLocalityParam
 * @property {string} localityType - A `locality_type` contains value
 *   geographical division.
 * @property {string} localityValue - A `locality_value` contains a specific
 *   name of the locality.
 * @property {string} [country] - A `country` contains a specific value of the
 *   country iso2 code.
 * @property {string} [state] - A `state` contains a specific value of the
 *   state, province.
 * @property {string} [city] - A `city` contains a specific value of the city.
 */
/**
 * @typedef GetOptimalLocationsParam
 * @property {ServiceabilityPlatformModel.OptimlLocationsRequestSchema} body
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
 * @typedef GetPackageMaterialRuleDetailsParam
 * @property {string} ruleId - A `package_material_rule_id` is a unique
 *   identifier for a Package Material Rule
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
 * @typedef UpdateCompanyConfigurationParam
 * @property {ServiceabilityPlatformModel.CompanyConfigurationShema} body
 */
/**
 * @typedef UpdateCompanySelfShipParam
 * @property {ServiceabilityPlatformModel.CompanySelfShip} body
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
 * @property {ServiceabilityPlatformModel.PackageRuleRequest} body
 */
/**
 * @typedef UpdatePackageMaterialsParam
 * @property {string} packageMaterialId - A `package_material_id` is a unique
 *   identifier for a Package Material
 * @property {ServiceabilityPlatformModel.PackageMaterial} body
 */
/**
 * @typedef ValidateAddressParam
 * @property {string} countryIsoCode - The ISO code of the country.
 * @property {string} templateName - The type of address form.
 * @property {ServiceabilityPlatformModel.ValidateAddressRequest} body
 */
declare class ServiceabilityPlatformValidator {
    /** @returns {CreateCourierPartnerAccountParam} */
    static createCourierPartnerAccount(): CreateCourierPartnerAccountParam;
    /** @returns {CreatePackageMaterialParam} */
    static createPackageMaterial(): CreatePackageMaterialParam;
    /** @returns {CreatePackageMaterialRuleParam} */
    static createPackageMaterialRule(): CreatePackageMaterialRuleParam;
    /** @returns {GetCompanyConfigurationParam} */
    static getCompanyConfiguration(): any;
    /** @returns {GetCompanySelfShipParam} */
    static getCompanySelfShip(): any;
    /** @returns {GetCountriesParam} */
    static getCountries(): GetCountriesParam;
    /** @returns {GetCountryParam} */
    static getCountry(): GetCountryParam;
    /** @returns {GetCourierPartnerAccountParam} */
    static getCourierPartnerAccount(): GetCourierPartnerAccountParam;
    /** @returns {GetCourierPartnerAccountsParam} */
    static getCourierPartnerAccounts(): GetCourierPartnerAccountsParam;
    /** @returns {GetInstalledCourierPartnerExtensionsParam} */
    static getInstalledCourierPartnerExtensions(): GetInstalledCourierPartnerExtensionsParam;
    /** @returns {GetListPackageMaterialRuleDetailsParam} */
    static getListPackageMaterialRuleDetails(): GetListPackageMaterialRuleDetailsParam;
    /** @returns {GetLocalitiesParam} */
    static getLocalities(): GetLocalitiesParam;
    /** @returns {GetLocalitiesByPrefixParam} */
    static getLocalitiesByPrefix(): GetLocalitiesByPrefixParam;
    /** @returns {GetLocalityParam} */
    static getLocality(): GetLocalityParam;
    /** @returns {GetOptimalLocationsParam} */
    static getOptimalLocations(): GetOptimalLocationsParam;
    /** @returns {GetPackageMaterialListParam} */
    static getPackageMaterialList(): GetPackageMaterialListParam;
    /** @returns {GetPackageMaterialRuleParam} */
    static getPackageMaterialRule(): GetPackageMaterialRuleParam;
    /** @returns {GetPackageMaterialRuleDetailsParam} */
    static getPackageMaterialRuleDetails(): GetPackageMaterialRuleDetailsParam;
    /** @returns {GetPackageMaterialsParam} */
    static getPackageMaterials(): GetPackageMaterialsParam;
    /** @returns {UpdateCompanyConfigurationParam} */
    static updateCompanyConfiguration(): UpdateCompanyConfigurationParam;
    /** @returns {UpdateCompanySelfShipParam} */
    static updateCompanySelfShip(): UpdateCompanySelfShipParam;
    /** @returns {UpdateCourierPartnerAccountParam} */
    static updateCourierPartnerAccount(): UpdateCourierPartnerAccountParam;
    /** @returns {UpdatePackageMaterialRuleParam} */
    static updatePackageMaterialRule(): UpdatePackageMaterialRuleParam;
    /** @returns {UpdatePackageMaterialsParam} */
    static updatePackageMaterials(): UpdatePackageMaterialsParam;
    /** @returns {ValidateAddressParam} */
    static validateAddress(): ValidateAddressParam;
}
declare namespace ServiceabilityPlatformValidator {
    export { CreateCourierPartnerAccountParam, CreatePackageMaterialParam, CreatePackageMaterialRuleParam, GetCompanyConfigurationParam, GetCompanySelfShipParam, GetCountriesParam, GetCountryParam, GetCourierPartnerAccountParam, GetCourierPartnerAccountsParam, GetInstalledCourierPartnerExtensionsParam, GetListPackageMaterialRuleDetailsParam, GetLocalitiesParam, GetLocalitiesByPrefixParam, GetLocalityParam, GetOptimalLocationsParam, GetPackageMaterialListParam, GetPackageMaterialRuleParam, GetPackageMaterialRuleDetailsParam, GetPackageMaterialsParam, UpdateCompanyConfigurationParam, UpdateCompanySelfShipParam, UpdateCourierPartnerAccountParam, UpdatePackageMaterialRuleParam, UpdatePackageMaterialsParam, ValidateAddressParam };
}
type CreateCourierPartnerAccountParam = {
    body: ServiceabilityPlatformModel.CourierAccount;
};
type CreatePackageMaterialParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    body: ServiceabilityPlatformModel.PackageMaterial;
};
type CreatePackageMaterialRuleParam = {
    body: ServiceabilityPlatformModel.PackageRuleRequest;
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
type GetCountryParam = {
    /**
     * - The `country_iso_code` is ISO-2 (alpha-2)
     * code for the country.
     */
    countryIsoCode: string;
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
    /**
     * - To filter self ship/non self ship dp accounts
     */
    selfShip?: boolean;
    /**
     * - Filters seller owned or admin owned dp accounts
     */
    ownAccount?: boolean;
    /**
     * - Filters dp accounts based on case sensitive partial
     * account name
     */
    q?: string;
};
type GetInstalledCourierPartnerExtensionsParam = {
    /**
     * - Index of the item to start returning with
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
type GetListPackageMaterialRuleDetailsParam = {
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
type GetLocalitiesParam = {
    /**
     * - A `locality_type` contains unique
     * geographical division.
     */
    localityType: string;
    /**
     * - A `country` contains a specific value of the
     * country iso2 code.
     */
    country?: string;
    /**
     * - A `state` contains a specific value of the
     * state, province.
     */
    state?: string;
    /**
     * - A `city` contains a specific value of the city.
     */
    city?: string;
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
     * - Search for localities. Either provide a full name
     * or a search term.
     */
    name?: string;
};
type GetLocalitiesByPrefixParam = {
    /**
     * - Starting index of the items.
     */
    pageNo?: number;
    /**
     * - Number of items per page.
     */
    pageSize?: number;
    /**
     * - Localities starting with the specified prefix.
     */
    q?: string;
};
type GetLocalityParam = {
    /**
     * - A `locality_type` contains value
     * geographical division.
     */
    localityType: string;
    /**
     * - A `locality_value` contains a specific
     * name of the locality.
     */
    localityValue: string;
    /**
     * - A `country` contains a specific value of the
     * country iso2 code.
     */
    country?: string;
    /**
     * - A `state` contains a specific value of the
     * state, province.
     */
    state?: string;
    /**
     * - A `city` contains a specific value of the city.
     */
    city?: string;
};
type GetOptimalLocationsParam = {
    body: ServiceabilityPlatformModel.OptimlLocationsRequestSchema;
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
type GetPackageMaterialRuleDetailsParam = {
    /**
     * - A `package_material_rule_id` is a unique
     * identifier for a Package Material Rule
     */
    ruleId: string;
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
type UpdateCompanyConfigurationParam = {
    body: ServiceabilityPlatformModel.CompanyConfigurationShema;
};
type UpdateCompanySelfShipParam = {
    body: ServiceabilityPlatformModel.CompanySelfShip;
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
    body: ServiceabilityPlatformModel.PackageRuleRequest;
};
type UpdatePackageMaterialsParam = {
    /**
     * - A `package_material_id` is a unique
     * identifier for a Package Material
     */
    packageMaterialId: string;
    body: ServiceabilityPlatformModel.PackageMaterial;
};
type ValidateAddressParam = {
    /**
     * - The ISO code of the country.
     */
    countryIsoCode: string;
    /**
     * - The type of address form.
     */
    templateName: string;
    body: ServiceabilityPlatformModel.ValidateAddressRequest;
};
type GetCompanyConfigurationParam = any;
type GetCompanySelfShipParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
