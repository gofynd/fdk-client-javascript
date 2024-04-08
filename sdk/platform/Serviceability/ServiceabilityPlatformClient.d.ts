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
     * @summary: Creation of Courier Account
     * @description: This API Creates a new Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerAccount/).
     */
    createCourierPartnerAccount({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccount>;
    /**
     * @param {ServiceabilityPlatformValidator.CreatePackageMaterialParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResponse>}
     *   - Success response
     *
     * @name createPackageMaterial
     * @summary: Upsert of PackageMaterial in database.
     * @description: This API returns response of upsert of PackageMaterial in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createPackageMaterial/).
     */
    createPackageMaterial({ pageNo, body, requestHeaders }?: ServiceabilityPlatformValidator.CreatePackageMaterialParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.CreatePackageMaterialRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResponse>} -
     *   Success response
     * @name createPackageMaterialRule
     * @summary: Upsert of Package Material Rule in database.
     * @description: This API returns response of upsert of Package Material Rule in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createPackageMaterialRule/).
     */
    createPackageMaterialRule({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreatePackageMaterialRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCompanyConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyConfig>} - Success response
     * @name getCompanyConfiguration
     * @summary: Get All Courier Rules applied to company.
     * @description: This API returns all Courier Rules applied for company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCompanyConfiguration/).
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
     * @description: Retrieve of all countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCountries/).
     */
    getCountries({ onboard, pageNo, pageSize, q, hierarchy, requestHeaders }?: ServiceabilityPlatformValidator.GetCountriesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetCountries>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.onboard] - Only fetch countries which allowed for
     *   onboard on Platform.
     * @param {number} [arg.pageSize] - Page size.
     * @param {string} [arg.q] - Search.
     * @param {string} [arg.hierarchy] - Hierarchy.
     * @returns {Paginator<ServiceabilityPlatformModel.GetCountries>}
     * @summary: Get all countries and associated data.
     * @description: Retrieve of all countries.
     */
    getCountriesPaginator({ onboard, pageSize, q, hierarchy }?: {
        onboard?: boolean;
        pageSize?: number;
        q?: string;
        hierarchy?: string;
    }): Paginator<ServiceabilityPlatformModel.GetCountries>;
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
     * @returns {Promise<ServiceabilityPlatformModel.CourierAccountResponse>} -
     *   Success response
     * @name getCourierPartnerAccount
     * @summary: Getting Courier Account of a company from database.
     * @description: This API returns response DpAccount of a company from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccount/).
     */
    getCourierPartnerAccount({ accountId, requestHeaders }?: ServiceabilityPlatformValidator.GetCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccountResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCourierPartnerAccountsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyCourierPartnerAccountListResponse>}
     *   - Success response
     *
     * @name getCourierPartnerAccounts
     * @summary: Getting Courier Account list of a company.
     * @description: This API returns Courier Account of a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccounts/).
     */
    getCourierPartnerAccounts({ pageNo, pageSize, stage, paymentMode, transportType, accountIds, requestHeaders, }?: ServiceabilityPlatformValidator.GetCourierPartnerAccountsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanyCourierPartnerAccountListResponse>;
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
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialListParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialList>} -
     *   Success response
     * @name getPackageMaterialList
     * @summary: Fetching of PackageMaterials from database.
     * @description: This API returns response of PackageMaterials from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialList/).
     */
    getPackageMaterialList({ pageNo, pageSize, q, size, packageType, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialListParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialList>;
    /**
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResponse>} -
     *   Success response
     * @name getPackageMaterialRule
     * @summary: Fetching of Package Material Rules into database.
     * @description: This API gets Package Material Rules into mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRule/).
     */
    getPackageMaterialRule({ ruleId, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialRuleDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialRule>} -
     *   Success response
     * @name getPackageMaterialRuleDetails
     * @summary: Fetching of Package Material Rule from database.
     * @description: This API returns response of Package Materials Rule from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRuleDetails/).
     */
    getPackageMaterialRuleDetails({ ruleId, pageNo, pageSize, isActive, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialRuleDetailsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialRule>;
    /**
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResponse>}
     *   - Success response
     *
     * @name getPackageMaterials
     * @summary: Fetching of Package Material from database.
     * @description: This API returns response of Package Material from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterials/).
     */
    getPackageMaterials({ packageMaterialId, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateCompanyConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyConfig>} - Success response
     * @name updateCompanyConfiguration
     * @summary: Apply Courier Rule to company.
     * @description: Apply Courier Rule to company with rules priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCompanyConfiguration/).
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
     * @summary: Update Courier Account in database.
     * @description: Updates Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerAccount/).
     */
    updateCourierPartnerAccount({ accountId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccount>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdatePackageMaterialRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResponse>} -
     *   Success response
     * @name updatePackageMaterialRule
     * @summary: Fetching of Package Material Rules into database.
     * @description: This API updates Package Material Rules into mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePackageMaterialRule/).
     */
    updatePackageMaterialRule({ ruleId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdatePackageMaterialRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdatePackageMaterialsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResponse>}
     *   - Success response
     *
     * @name updatePackageMaterials
     * @summary: Update Package Material to database.
     * @description: This API updates Package Materials from into mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePackageMaterials/).
     */
    updatePackageMaterials({ packageMaterialId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdatePackageMaterialsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.ValidateAddressParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ValidateAddressRequest>} -
     *   Success response
     * @name validateAddress
     * @summary: Validate given address wrt template
     * @description: Validate given address wrt template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/validateAddress/).
     */
    validateAddress({ countryIsoCode, templateName, body, requestHeaders }?: ServiceabilityPlatformValidator.ValidateAddressParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ValidateAddressRequest>;
}
import ServiceabilityPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformValidator");
import ServiceabilityPlatformModel = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
