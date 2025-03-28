export = Serviceability;
declare class Serviceability {
    constructor(config: any);
    config: any;
    /**
     * @param {ServiceabilityPlatformValidator.CreateCourierPartnerAccountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierAccount>} - Success response
     * @name createCourierPartnerAccount
     * @summary: Create courier account
     * @description: Retrieves a list of courier partner accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerAccount/).
     */
    createCourierPartnerAccount({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccount>;
    /**
     * @param {ServiceabilityPlatformValidator.CreatePackageMaterialParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResponseSchema>}
     *   - Success response
     *
     * @name createPackageMaterial
     * @summary: Create packaging material
     * @description: Creates a packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createPackageMaterial/).
     */
    createPackageMaterial({ body, pageNo, requestHeaders }?: ServiceabilityPlatformValidator.CreatePackageMaterialParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResponseSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.CreatePackageMaterialRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResult>} -
     *   Success response
     * @name createPackageMaterialRule
     * @summary: Create packaging rule
     * @description: Creates a packaging rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createPackageMaterialRule/).
     */
    createPackageMaterialRule({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreatePackageMaterialRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageRuleResult>;
    /**
     * @param {ServiceabilityPlatformValidator.DeletePackageMaterialRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialDeleteResponseSchema>}
     *   - Success response
     *
     * @name deletePackageMaterialRule
     * @summary: Delete packaging material rule
     * @description: Delete a single packaging material rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/deletePackageMaterialRule/).
     */
    deletePackageMaterialRule({ ruleId, requestHeaders }?: ServiceabilityPlatformValidator.DeletePackageMaterialRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialDeleteResponseSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.DeletePackageMaterialsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialDeleteResponseSchema>}
     *   - Success response
     *
     * @name deletePackageMaterials
     * @summary: Delete packaging material
     * @description: Delete a single packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/deletePackageMaterials/).
     */
    deletePackageMaterials({ packageMaterialId, requestHeaders }?: ServiceabilityPlatformValidator.DeletePackageMaterialsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialDeleteResponseSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCompanyConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyConfig>} - Success response
     * @name getCompanyConfiguration
     * @summary: Get delivery configuration
     * @description: Retrieves information about the delivery setup for a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCompanyConfiguration/).
     */
    getCompanyConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanyConfig>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCompanySelfShipParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanySelfShip>} - Success response
     * @name getCompanySelfShip
     * @summary: Update Company Self Ship
     * @description: Updates Self Ship at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCompanySelfShip/).
     */
    getCompanySelfShip({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanySelfShip>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCountriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetCountries>} - Success response
     * @name getCountries
     * @summary: Get all countries and associated data.
     * @description: Retrieve a list of countries for logistical purposes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCountries/).
     */
    getCountries({ onboard, pageNo, pageSize, q, hierarchy, requestHeaders }?: ServiceabilityPlatformValidator.GetCountriesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetCountries>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCountryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetCountry>} - Success response
     * @name getCountry
     * @summary: Get single country and associated data.
     * @description: Retrieve data for a single country and address format. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCountry/).
     */
    getCountry({ countryIsoCode, requestHeaders }?: ServiceabilityPlatformValidator.GetCountryParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetCountry>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCourierPartnerAccountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierAccountResponseSchema>}
     *   - Success response
     *
     * @name getCourierPartnerAccount
     * @summary: Get courier account
     * @description: Retrieves a single courier partner account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccount/).
     */
    getCourierPartnerAccount({ accountId, requestHeaders }?: ServiceabilityPlatformValidator.GetCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccountResponseSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCourierPartnerAccountsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyCourierPartnerAccountListResponseSchema>}
     *   - Success response
     *
     * @name getCourierPartnerAccounts
     * @summary: List courier accounts
     * @description: Retrieves a list of courier partner accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccounts/).
     */
    getCourierPartnerAccounts({ pageNo, pageSize, stage, paymentMode, transportType, accountIds, selfShip, ownAccount, q, requestHeaders, }?: ServiceabilityPlatformValidator.GetCourierPartnerAccountsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanyCourierPartnerAccountListResponseSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.GetInstalledCourierPartnerExtensionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.InstallCourierPartnerResponseSchema>}
     *   - Success response
     *
     * @name getInstalledCourierPartnerExtensions
     * @summary: Fetching of Package Material Rules from database.
     * @description: This API returns response of Package Materials Rules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getInstalledCourierPartnerExtensions/).
     */
    getInstalledCourierPartnerExtensions({ pageNo, pageSize, isInstalled, requestHeaders }?: ServiceabilityPlatformValidator.GetInstalledCourierPartnerExtensionsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.InstallCourierPartnerResponseSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.GetListPackageMaterialRuleDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialRuleList>}
     *   - Success response
     *
     * @name getListPackageMaterialRuleDetails
     * @summary: Fetching of Package Material Rules from database.
     * @description: This API returns response of Package Materials Rules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getListPackageMaterialRuleDetails/).
     */
    getListPackageMaterialRuleDetails({ pageNo, pageSize, isActive, requestHeaders }?: ServiceabilityPlatformValidator.GetListPackageMaterialRuleDetailsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialRuleList>;
    /**
     * @param {ServiceabilityPlatformValidator.GetLocalitiesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetLocalities>} - Success response
     * @name getLocalities
     * @summary: Get Localities.
     * @description: Get Localities data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getLocalities/).
     */
    getLocalities({ localityType, country, state, city, pageNo, pageSize, q, name, requestHeaders, }?: ServiceabilityPlatformValidator.GetLocalitiesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetLocalities>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.localityType - A `locality_type` contains unique
     *   geographical division.
     * @param {string} [arg.country] - A `country` contains a specific value of
     *   the country iso2 code.
     * @param {string} [arg.state] - A `state` contains a specific value of the
     *   state, province.
     * @param {string} [arg.city] - A `city` contains a specific value of the city.
     * @param {number} [arg.pageSize] - Page size.
     * @param {string} [arg.q] - Search.
     * @param {string} [arg.name] - Search for localities. Either provide a full
     *   name or a search term.
     * @returns {Paginator<ServiceabilityPlatformModel.GetLocalities>}
     * @summary: Get Localities.
     * @description: Get Localities data.
     */
    getLocalitiesPaginator({ localityType, country, state, city, pageSize, q, name, }?: {
        localityType: string;
        country?: string;
        state?: string;
        city?: string;
        pageSize?: number;
        q?: string;
        name?: string;
    }): Paginator<ServiceabilityPlatformModel.GetLocalities>;
    /**
     * @param {ServiceabilityPlatformValidator.GetLocalitiesByPrefixParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetLocalities>} - Success response
     * @name getLocalitiesByPrefix
     * @summary: Get Localities by Name Prefix
     * @description: Get localities that start with a specified prefix. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getLocalitiesByPrefix/).
     */
    getLocalitiesByPrefix({ pageNo, pageSize, q, requestHeaders }?: ServiceabilityPlatformValidator.GetLocalitiesByPrefixParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetLocalities>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of items per page.
     * @param {string} [arg.q] - Localities starting with the specified prefix.
     * @returns {Paginator<ServiceabilityPlatformModel.GetLocalities>}
     * @summary: Get Localities by Name Prefix
     * @description: Get localities that start with a specified prefix.
     */
    getLocalitiesByPrefixPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator<ServiceabilityPlatformModel.GetLocalities>;
    /**
     * @param {ServiceabilityPlatformValidator.GetLocalityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetLocality>} - Success response
     * @name getLocality
     * @summary: Get Locality API
     * @description: Get Locality data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getLocality/).
     */
    getLocality({ localityType, localityValue, country, state, city, requestHeaders }?: ServiceabilityPlatformValidator.GetLocalityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetLocality>;
    /**
     * @param {ServiceabilityPlatformValidator.GetOptimalLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.OptimalLocationsResponseSchema>}
     *   - Success response
     *
     * @name getOptimalLocations
     * @summary: Get selling locations
     * @description: Retrieves a list selling locations which are best suited to fullfil an order for a customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getOptimalLocations/).
     */
    getOptimalLocations({ body, requestHeaders }?: ServiceabilityPlatformValidator.GetOptimalLocationsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.OptimalLocationsResponseSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialListParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialList>} -
     *   Success response
     * @name getPackageMaterialList
     * @summary: Get packaging materials
     * @description: Retrieves a list of packaging materials - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialList/).
     */
    getPackageMaterialList({ pageNo, pageSize, q, size, packageType, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialListParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialList>;
    /**
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResult>} -
     *   Success response
     * @name getPackageMaterialRule
     * @summary: Get packaging material rule
     * @description: Retrieve packaging rule details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRule/).
     */
    getPackageMaterialRule({ ruleId, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageRuleResult>;
    /**
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialRuleDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResult>} -
     *   Success response
     * @name getPackageMaterialRuleDetails
     * @summary: Fetching of Package Material Rule from database.
     * @description: This API returns details of package materials rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRuleDetails/).
     */
    getPackageMaterialRuleDetails({ ruleId, pageNo, pageSize, isActive, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialRuleDetailsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageRuleResult>;
    /**
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResponseSchema>}
     *   - Success response
     *
     * @name getPackageMaterials
     * @summary: Get packaging material
     * @description: Retrieve a single packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterials/).
     */
    getPackageMaterials({ packageMaterialId, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResponseSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateCompanyConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyConfig>} - Success response
     * @name updateCompanyConfiguration
     * @summary: Update delivery configuration
     * @description: Updates an existing delivery setup for a company, including the ability to adjust self-shipping preferences. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCompanyConfiguration/).
     */
    updateCompanyConfiguration({ body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateCompanyConfigurationParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanyConfig>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateCompanySelfShipParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanySelfShip>} - Success response
     * @name updateCompanySelfShip
     * @summary: Update Company Self Ship
     * @description: Updates Self Ship at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCompanySelfShip/).
     */
    updateCompanySelfShip({ body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateCompanySelfShipParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanySelfShip>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateCourierPartnerAccountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierAccount>} - Success response
     * @name updateCourierPartnerAccount
     * @summary: Update courier account
     * @description: Updates an existing courier partner account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerAccount/).
     */
    updateCourierPartnerAccount({ accountId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccount>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdatePackageMaterialRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResult>} -
     *   Success response
     * @name updatePackageMaterialRule
     * @summary: Update packaging rule
     * @description: Update an existing packaging rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePackageMaterialRule/).
     */
    updatePackageMaterialRule({ ruleId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdatePackageMaterialRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageRuleResult>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdatePackageMaterialsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResponseSchema>}
     *   - Success response
     *
     * @name updatePackageMaterials
     * @summary: Update packaging material
     * @description: Update an existing packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePackageMaterials/).
     */
    updatePackageMaterials({ packageMaterialId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdatePackageMaterialsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResponseSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.ValidateAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ValidateAddressRequestSchema>}
     *   - Success response
     *
     * @name validateAddress
     * @summary: Validate given address wrt template
     * @description: Validate given address wrt template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/validateAddress/).
     */
    validateAddress({ countryIsoCode, templateName, body, requestHeaders }?: ServiceabilityPlatformValidator.ValidateAddressParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ValidateAddressRequestSchema>;
}
import ServiceabilityPlatformValidator = require("./ServiceabilityPlatformValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
import Paginator = require("../../common/Paginator");
