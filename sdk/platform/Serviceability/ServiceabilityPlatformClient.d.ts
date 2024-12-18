export = Serviceability;
declare class Serviceability {
    constructor(config: any);
    config: any;
    /**
     * @param {ServiceabilityPlatformValidator.BulkServiceabilityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResultItemData>}
     *   - Success response
     *
     * @name bulkServiceability
     * @summary: Bulk update serviceability of localities
     * @description: Bulk operations involve either new serviceability settings or updating existing ones in large quantities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/bulkServiceability/).
     */
    bulkServiceability({ extensionId, schemeId, body, requestHeaders }?: ServiceabilityPlatformValidator.BulkServiceabilityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionResultItemData>;
    /**
     * @param {ServiceabilityPlatformValidator.BulkTatParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResultItemData>}
     *   - Success response
     *
     * @name bulkTat
     * @summary: Locality TAT import or export
     * @description: Updates locality wise TAT(Turn Around Time) for particular courier scheme using CSV file.
     * Export locality wise CSV files. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/bulkTat/).
     */
    bulkTat({ extensionId, schemeId, body, requestHeaders }?: ServiceabilityPlatformValidator.BulkTatParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionResultItemData>;
    /**
     * @param {ServiceabilityPlatformValidator.CreateCourierPartnerAccountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierAccount>} - Success response
     * @name createCourierPartnerAccount
     * @summary: Create courier account
     * @description: Creates a courier partner account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerAccount/).
     */
    createCourierPartnerAccount({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccount>;
    /**
     * @param {ServiceabilityPlatformValidator.CreateCourierPartnerSchemeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerV2SchemeModel>}
     *   - Success response
     *
     * @name createCourierPartnerScheme
     * @summary: Create Scheme for courier partner extension
     * @description: Create Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerScheme/).
     */
    createCourierPartnerScheme({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreateCourierPartnerSchemeParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerV2SchemeModel>;
    /**
     * @param {ServiceabilityPlatformValidator.CreatePackageMaterialParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResult>} -
     *   Success response
     * @name createPackageMaterial
     * @summary: Create packaging material
     * @description: Creates a packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createPackageMaterial/).
     */
    createPackageMaterial({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreatePackageMaterialParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResult>;
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
     * @param {ServiceabilityPlatformValidator.CreateZoneParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneResult>} - Success response
     * @name createZone
     * @summary: Create zone
     * @description: Creates a delivery zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createZone/).
     */
    createZone({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreateZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneResult>;
    /**
     * @param {ServiceabilityPlatformValidator.GetAllStoresParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResult>} -
     *   Success response
     * @name getAllStores
     * @summary: Get all stores
     * @description: Retrieves a list of locations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getAllStores/).
     */
    getAllStores({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetStoresViewResult>;
    /**
     * @param {ServiceabilityPlatformValidator.GetBulkServiceabilityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResult>} - Success response
     * @name getBulkServiceability
     * @summary: Bulk update history
     * @description: Retrieves the history of changes made to serviceability settings for a scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkServiceability/).
     */
    getBulkServiceability({ extensionId, schemeId, pageNo, pageSize, batchId, action, status, country, region, startDate, endDate, requestHeaders, }?: ServiceabilityPlatformValidator.GetBulkServiceabilityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionResult>;
    /**
     * @param {ServiceabilityPlatformValidator.GetBulkTatParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResult>} - Success response
     * @name getBulkTat
     * @summary: Locality TAT change history
     * @description: Retrieves the history of changes made to TAT(Turn Around Time) for scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkTat/).
     */
    getBulkTat({ extensionId, schemeId, pageNo, pageSize, batchId, action, status, country, region, startDate, endDate, requestHeaders, }?: ServiceabilityPlatformValidator.GetBulkTatParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionResult>;
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
     * @param {ServiceabilityPlatformValidator.GetCountriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetCountries>} - Success response
     * @name getCountries
     * @summary: Get countries
     * @description: Retrieve a list of countries for logistical purposes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCountries/).
     */
    getCountries({ onboarding, pageNo, pageSize, q, hierarchy, requestHeaders }?: ServiceabilityPlatformValidator.GetCountriesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetCountries>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCourierPartnerAccountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierAccountResult>} -
     *   Success response
     * @name getCourierPartnerAccount
     * @summary: Get courier account
     * @description: Retrieves a single courier partner account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccount/).
     */
    getCourierPartnerAccount({ accountId, requestHeaders }?: ServiceabilityPlatformValidator.GetCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccountResult>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCourierPartnerAccountsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyCourierPartnerAccountListResult>}
     *   - Success response
     *
     * @name getCourierPartnerAccounts
     * @summary: List courier accounts
     * @description: Retrieves a list of courier partner accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccounts/).
     */
    getCourierPartnerAccounts({ pageNo, pageSize, stage, paymentMode, transportType, requestHeaders }?: ServiceabilityPlatformValidator.GetCourierPartnerAccountsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanyCourierPartnerAccountListResult>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCourierPartnerSchemeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerV2SchemeModel>}
     *   - Success response
     *
     * @name getCourierPartnerScheme
     * @summary: Get Scheme for courier partner extension by Id
     * @description: Update Scheme for courier partner extension by Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerScheme/).
     */
    getCourierPartnerScheme({ schemeId, requestHeaders }?: ServiceabilityPlatformValidator.GetCourierPartnerSchemeParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerV2SchemeModel>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCourierPartnerSchemesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.courierPartnerSchemeV2List>}
     *   - Success response
     *
     * @name getCourierPartnerSchemes
     * @summary: Get created Schemes for courier partner
     * @description: Get created Schemes for courier partner - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerSchemes/).
     */
    getCourierPartnerSchemes({ schemeType, paymentMode, capabilities, schemeIds, requestHeaders }?: ServiceabilityPlatformValidator.GetCourierPartnerSchemesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.courierPartnerSchemeV2List>;
    /**
     * @param {ServiceabilityPlatformValidator.GetOptimalLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.OptimalLocationsResult>} -
     *   Success response
     * @name getOptimalLocations
     * @summary: Get selling locations
     * @description: Retrieves a list selling locations which are best suited to fullfil an order for a customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getOptimalLocations/).
     */
    getOptimalLocations({ body, requestHeaders }?: ServiceabilityPlatformValidator.GetOptimalLocationsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.OptimalLocationsResult>;
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
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialRuleList>}
     *   - Success response
     *
     * @name getPackageMaterialRules
     * @summary: Get packaging rules
     * @description: Retrieve packaging rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRules/).
     */
    getPackageMaterialRules({ pageNo, pageSize, isActive, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialRuleList>;
    /**
     * @param {ServiceabilityPlatformValidator.GetPackageMaterialsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResult>} -
     *   Success response
     * @name getPackageMaterials
     * @summary: Get packaging material
     * @description: Retrieve a single packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterials/).
     */
    getPackageMaterials({ packageMaterialId, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResult>;
    /**
     * @param {ServiceabilityPlatformValidator.GetSampleFileServiceabilityStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionServiceabilityTatResult>}
     *   - Success response
     *
     * @name getSampleFileServiceabilityStatus
     * @summary: Get Serviceability TAT sample files generator status
     * @description: Get Serviceability TAT sample file generator status - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getSampleFileServiceabilityStatus/).
     */
    getSampleFileServiceabilityStatus({ pageNo, pageSize, batchId, requestHeaders }?: ServiceabilityPlatformValidator.GetSampleFileServiceabilityStatusParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionServiceabilityTatResult>;
    /**
     * @param {ServiceabilityPlatformValidator.GetServiceabilityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ServiceabilityModel>} -
     *   Success response
     * @name getServiceability
     * @summary: Get serviceability of a locality
     * @description: Rerieves serviceability settings of a single courier scheme for a given locality - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getServiceability/).
     */
    getServiceability({ extensionId, schemeId, regionId, requestHeaders }?: ServiceabilityPlatformValidator.GetServiceabilityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ServiceabilityModel>;
    /**
     * @param {ServiceabilityPlatformValidator.GetZoneByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>} -
     *   Success response
     * @name getZoneById
     * @summary: Get zone details
     * @description: Retrieves a single delivery zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneById/).
     */
    getZoneById({ zoneId, requestHeaders }?: ServiceabilityPlatformValidator.GetZoneByIdParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.GetZonesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResult>} - Success response
     * @name getZones
     * @summary: Get zones
     * @description: Retrieves a list of delivery zones. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZones/).
     */
    getZones({ pageNo, pageSize, isActive, channelId, q, countryIsoCode, state, city, pincode, sector, requestHeaders, }?: ServiceabilityPlatformValidator.GetZonesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ListViewResult>;
    /**
     * @param {ServiceabilityPlatformValidator.SampleFileServiceabilityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionServiceabilityTatResultItemData>}
     *   - Success response
     *
     * @name sampleFileServiceability
     * @summary: Sample File Download
     * @description: Sample File Download - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/sampleFileServiceability/).
     */
    sampleFileServiceability({ body, requestHeaders }?: ServiceabilityPlatformValidator.SampleFileServiceabilityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionServiceabilityTatResultItemData>;
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
     * @param {ServiceabilityPlatformValidator.UpdateCourierPartnerAccountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierAccountResult>} -
     *   Success response
     * @name updateCourierPartnerAccount
     * @summary: Update courier account
     * @description: Updates an existing courier partner account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerAccount/).
     */
    updateCourierPartnerAccount({ accountId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccountResult>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateCourierPartnerSchemeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerV2SchemeModel>}
     *   - Success response
     *
     * @name updateCourierPartnerScheme
     * @summary: Update Scheme for courier partner extension
     * @description: Update Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerScheme/).
     */
    updateCourierPartnerScheme({ schemeId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateCourierPartnerSchemeParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerV2SchemeModel>;
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
     * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResult>} -
     *   Success response
     * @name updatePackageMaterials
     * @summary: Update packaging material
     * @description: Update an existing packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePackageMaterials/).
     */
    updatePackageMaterials({ packageMaterialId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdatePackageMaterialsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResult>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateServiceabilityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ServiceabilityModel>} -
     *   Success response
     * @name updateServiceability
     * @summary: Update Serviceability of a locality
     * @description: Updates serviceability settings of a single courier scheme for a given locality - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateServiceability/).
     */
    updateServiceability({ extensionId, schemeId, regionId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateServiceabilityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ServiceabilityModel>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateZoneByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneSuccessResult>} -
     *   Success response
     * @name updateZoneById
     * @summary: Update a zone
     * @description: Update an existing delivery zone . - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateZoneById/).
     */
    updateZoneById({ zoneId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateZoneByIdParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneSuccessResult>;
}
import ServiceabilityPlatformValidator = require("./ServiceabilityPlatformValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
