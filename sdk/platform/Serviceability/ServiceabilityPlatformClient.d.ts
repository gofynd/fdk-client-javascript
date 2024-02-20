export = Serviceability;
declare class Serviceability {
    constructor(config: any);
    config: any;
    /**
     * @param {ServiceabilityPlatformValidator.BulkServiceabilityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResponseItemData>}
     *   - Success response
     *
     * @name bulkServiceability
     * @summary: Serviceability Import or Export
     * @description: Serviceability Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/bulkServiceability/).
     */
    bulkServiceability({ extensionId, schemeId, body, requestHeaders }?: ServiceabilityPlatformValidator.BulkServiceabilityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionResponseItemData>;
    /**
     * @param {ServiceabilityPlatformValidator.BulkTatParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResponseItemData>}
     *   - Success response
     *
     * @name bulkTat
     * @summary: Region TAT Import or Export
     * @description: Region TAT Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/bulkTat/).
     */
    bulkTat({ extensionId, schemeId, body, requestHeaders }?: ServiceabilityPlatformValidator.BulkTatParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionResponseItemData>;
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
    createPackageMaterial({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreatePackageMaterialParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialResponse>;
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
     * @param {ServiceabilityPlatformValidator.CreateZoneParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneResponse>} - Success response
     * @name createZone
     * @summary: Creates a new Zone
     * @description: Creates a new zone with the specified mapping. A zone enables serviceability based on given regions. By creating a zone and including specific regions, you can ensure that the stores associated with the zone are serviceable for those added regions. This functionality is particularly useful when you need to ensure serviceability for multiple regions by grouping them into a single zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createZone/).
     */
    createZone({ body, requestHeaders }?: ServiceabilityPlatformValidator.CreateZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetAllStoresParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResponse>} -
     *   Success response
     * @name getAllStores
     * @summary: GET stores data
     * @description: This API returns stores data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getAllStores/).
     */
    getAllStores({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetStoresViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetBulkServiceabilityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResponse>} -
     *   Success response
     * @name getBulkServiceability
     * @summary: Get Region Serviceability Bulk History
     * @description: Get Region Serviceability Bulk History - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkServiceability/).
     */
    getBulkServiceability({ extensionId, schemeId, pageNo, pageSize, batchId, action, status, country, region, startDate, endDate, requestHeaders, }?: ServiceabilityPlatformValidator.GetBulkServiceabilityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetBulkTatParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResponse>} -
     *   Success response
     * @name getBulkTat
     * @summary: Get region tat bulk history
     * @description: Get region tat bulk history - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkTat/).
     */
    getBulkTat({ extensionId, schemeId, pageNo, pageSize, batchId, action, status, country, region, startDate, endDate, requestHeaders, }?: ServiceabilityPlatformValidator.GetBulkTatParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkRegionResponse>;
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
     * @param {ServiceabilityPlatformValidator.GetOptimalLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ReAssignStoreResponse>} -
     *   Success response
     * @name getOptimalLocations
     * @summary: Get serviceable store of the item
     * @description: This API returns serviceable store of the item. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getOptimalLocations/).
     */
    getOptimalLocations({ body, requestHeaders }?: ServiceabilityPlatformValidator.GetOptimalLocationsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ReAssignStoreResponse>;
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
     * @summary: Fetching of Package Material from database.
     * @description: This API returns response of Package Material from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRule/).
     */
    getPackageMaterialRule({ ruleId, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageRuleResponse>;
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
     * @summary: Fetching of Package Material Rules from database.
     * @description: This API returns response of Package Materials Rules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRules/).
     */
    getPackageMaterialRules({ pageNo, pageSize, isActive, requestHeaders }?: ServiceabilityPlatformValidator.GetPackageMaterialRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PackageMaterialRuleList>;
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
     * @param {ServiceabilityPlatformValidator.GetServiceabilityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ServiceabilityModel>} -
     *   Success response
     * @name getServiceability
     * @summary: Get Serviceability of a region
     * @description: Get Serviceability of a region - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getServiceability/).
     */
    getServiceability({ extensionId, schemeId, regionId, requestHeaders }?: ServiceabilityPlatformValidator.GetServiceabilityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ServiceabilityModel>;
    /**
     * @param {ServiceabilityPlatformValidator.GetZoneByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>} -
     *   Success response
     * @name getZoneById
     * @summary: Get details of the Zone
     * @description: Returns the region, application, store mapping and other details in the Zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneById/).
     */
    getZoneById({ zoneId, requestHeaders }?: ServiceabilityPlatformValidator.GetZoneByIdParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>;
    /**
     * @param {ServiceabilityPlatformValidator.GetZonesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
     * @name getZones
     * @summary: Shows zones defined at the company level
     * @description: Return the list of zones that are defined at the company level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZones/).
     */
    getZones({ pageNo, pageSize, isActive, channelId, q, country, state, city, pincode, sector, requestHeaders, }?: ServiceabilityPlatformValidator.GetZonesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ListViewResponse>;
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
     * @param {ServiceabilityPlatformValidator.UpdateCourierPartnerAccountParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierAccountResponse>} -
     *   Success response
     * @name updateCourierPartnerAccount
     * @summary: Update Courier Account in database.
     * @description: Updates Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerAccount/).
     */
    updateCourierPartnerAccount({ accountId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierAccountResponse>;
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
     * @param {ServiceabilityPlatformValidator.UpdateServiceabilityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ServiceabilityModel>} -
     *   Success response
     * @name updateServiceability
     * @summary: Serviceability Update for a region
     * @description: Serviceability Update for a region - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateServiceability/).
     */
    updateServiceability({ extensionId, schemeId, regionId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateServiceabilityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ServiceabilityModel>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateZoneByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>} -
     *   Success response
     * @name updateZoneById
     * @summary: Update details of a Zone
     * @description: Updates the region, application, store mapping and other details in the Zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateZoneById/).
     */
    updateZoneById({ zoneId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateZoneByIdParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>;
}
import ServiceabilityPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformValidator");
import ServiceabilityPlatformModel = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformModel");
