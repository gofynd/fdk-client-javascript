export = Serviceability;
declare class Serviceability {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateBulkExportParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneBulkExport>} - Success response
     * @name createBulkExport
     * @summary: Create Bulk Export of Zones
     * @description: Export zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createBulkExport/).
     */
    createBulkExport({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateBulkExportParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneBulkExport>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateBulkGeoAreaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkGeoAreaResponse>} -
     *   Success response
     * @name createBulkGeoArea
     * @summary: Bulk Creation of GeoArea Regions
     * @description: Allows to create and manage GeoAreas, representing groups of geographic regions in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createBulkGeoArea/).
     */
    createBulkGeoArea({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateBulkGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkGeoAreaResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateBulkZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CreateBulkZoneResponse>} -
     *   Success response
     * @name createBulkZone
     * @summary: Create bulk zones.
     * @description: Creates bulk zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createBulkZone/).
     */
    createBulkZone({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateBulkZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CreateBulkZoneResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateCourierPartnerRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRuleResponseSchema>}
     *   - Success response
     *
     * @name createCourierPartnerRule
     * @summary: Create Courier Rules.
     * @description: Creates Courier Rules with rule configuration and dp priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerRule/).
     */
    createCourierPartnerRule({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateCourierPartnerRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRuleResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateGeoAreaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GeoAreaResponseBody>} -
     *   Success response
     * @name createGeoArea
     * @summary: Creation of GeoArea
     * @description: Allows to create and manage GeoAreas, representing groups of geographic regions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createGeoArea/).
     */
    createGeoArea({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaResponseBody>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateStoreRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleResponseSchema>}
     *   - Success response
     *
     * @name createStoreRules
     * @summary: Create Store Rule
     * @description: Create Store Rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createStoreRules/).
     */
    createStoreRules({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneResponseV2>} - Success response
     * @name createZone
     * @summary: Create zones defined at the application level
     * @description: Creates a list of zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createZone/).
     */
    createZone({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneResponseV2>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.DeleteZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneDeleteSuccessResponse>}
     *   - Success response
     *
     * @name deleteZone
     * @summary: Delete a Specific Zone.
     * @description: Delete a Zone under that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/deleteZone/).
     */
    deleteZone({ zoneId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.DeleteZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneDeleteSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetApplicationConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
     *   Success response
     * @name getApplicationConfig
     * @summary: Get Application Configuration
     * @description: Get Application Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationConfig/).
     */
    getApplicationConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetApplicationConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfigGetResponse>}
     *   - Success response
     *
     * @name getApplicationConfiguration
     * @summary: Get Application Configuration for given company and application
     * @description: This API returns all the Application config that has been applied to the given company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationConfiguration/).
     */
    getApplicationConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationConfigGetResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetBulkExportParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneBulkExport>} -
     *   Success response
     * @name getBulkExport
     * @summary: Get Bulk Export of Zones
     * @description: Get specific zone which is exported at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkExport/).
     */
    getBulkExport({ batchId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetBulkExportParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetZoneBulkExport>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetBulkGeoAreaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkGeoAreaGetResponse>} -
     *   Success response
     * @name getBulkGeoArea
     * @summary: Get Bulk Creation of GeoArea Regions
     * @description: Allows to Get GeoArea status which is created, representing groups of geographic regions in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkGeoArea/).
     */
    getBulkGeoArea({ geoareaId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetBulkGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkGeoAreaGetResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetBulkZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetBulkZoneHistory>} -
     *   Success response
     * @name getBulkZone
     * @summary: Get bulk zones.
     * @description: Fetch bulk zones created at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkZone/).
     */
    getBulkZone({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetBulkZoneHistory>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRuleResponseSchema>}
     *   - Success response
     *
     * @name getCourierPartnerRule
     * @summary: Fetch of Courier Rule.
     * @description: This API returns Courier Rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRule/).
     */
    getCourierPartnerRule({ ruleUid, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRuleResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnerRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRulesListResponse>}
     *   - Success response
     *
     * @name getCourierPartnerRules
     * @summary: Fetch Courier Rules List
     * @description: This API returns Courier Rules List - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRules/).
     */
    getCourierPartnerRules({ pageNo, pageSize, status, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetCourierPartnerRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRulesListResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetGeoAreaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GeoAreaResponse>} - Success response
     * @name getGeoArea
     * @summary: Get details of the specific geoarea
     * @description: This API Returns the data of the specific GeoArea which exists on the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getGeoArea/).
     */
    getGeoArea({ geoareaId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetGeoAreasParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GeoAreaGetResponseBody>} -
     *   Success response
     * @name getGeoAreas
     * @summary: Get all geoareas in the current application.
     * @description: Retrieves a listing view of created GeoAreas. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getGeoAreas/).
     */
    getGeoAreas({ pageSize, isActive, q, countryIsoCode, state, city, pincode, sector, requestHeaders, }?: ServiceabilityPlatformApplicationValidator.GetGeoAreasParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaGetResponseBody>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetStoreRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleDataSchema>} -
     *   Success response
     * @name getStoreRule
     * @summary: Get Single Store Rule
     * @description: Get Single Store Rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRule/).
     */
    getStoreRule({ ruleUid, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetStoreRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleDataSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetStoreRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetStoreRulesApiResponse>}
     *   - Success response
     *
     * @name getStoreRules
     * @summary: Get Multiple Store Rules
     * @description: Get Multiple Store Rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRules/).
     */
    getStoreRules({ pageNo, pageSize, status, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetStoreRulesApiResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZoneParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>} -
     *   Success response
     * @name getZone
     * @summary: Get details of the Zone
     * @description: Retrieves the region, application, store mapping and other details in the Zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZone/).
     */
    getZone({ zoneId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZonesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResponseV2>} -
     *   Success response
     * @name getZones
     * @summary: Shows zones defined at the application level
     * @description: Displays the list of zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZones/).
     */
    getZones({ stage, pageSize, isActive, q, countryIsoCode, pincode, state, city, sector, requestHeaders, }?: ServiceabilityPlatformApplicationValidator.GetZonesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ListViewResponseV2>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.InsertApplicationConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
     *   Success response
     * @name insertApplicationConfig
     * @summary: Insert Application Configuration
     * @description: Insert Application Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/insertApplicationConfig/).
     */
    insertApplicationConfig({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.InsertApplicationConfigParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.PatchApplicationConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfigPatchResponse>}
     *   - Success response
     *
     * @name patchApplicationConfiguration
     * @summary: To patch any config which can be applied to application.
     * @description: Apply configs to application. Supports patching for buybox rule config and promise config. For reference, refer to examples - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/patchApplicationConfiguration/).
     */
    patchApplicationConfiguration({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.PatchApplicationConfigurationParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationConfigPatchResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateApplicationConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfigPutResponse>}
     *   - Success response
     *
     * @name updateApplicationConfiguration
     * @summary: Apply configuration to an application
     * @description: Apply configuration to application to set DP rules and Zone configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateApplicationConfiguration/).
     */
    updateApplicationConfiguration({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateApplicationConfigurationParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationConfigPutResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateCourierPartnerRulePriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.RulePriorityResponse>} -
     *   Success response
     * @name updateCourierPartnerRulePriority
     * @summary: Updates Courier Partner Rules Priority for a sales channel
     * @description: Updates Courier Partner Rules Priority for a sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerRulePriority/).
     */
    updateCourierPartnerRulePriority({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateCourierPartnerRulePriorityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.RulePriorityResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateCourierRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRuleResponseSchema>}
     *   - Success response
     *
     * @name updateCourierRule
     * @summary: Updating of Courier Rule.
     * @description: This API updates and returns Courier Rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierRule/).
     */
    updateCourierRule({ ruleUid, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateCourierRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRuleResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateGeoAreaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GeoAreaPutResponseBody>} -
     *   Success response
     * @name updateGeoArea
     * @summary: Update the details of existing GeoArea
     * @description: Updates the GeoArea with a new name, regions, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateGeoArea/).
     */
    updateGeoArea({ geoareaId, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaPutResponseBody>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>}
     *   - Success response
     *
     * @name updatePincodeAuditHistory
     * @summary: Update pincode audit history.
     * @description: Modify and update audit history records for pincode-related activities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeAuditHistory/).
     */
    updatePincodeAuditHistory({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>}
     *   - Success response
     *
     * @name updatePincodeBulkView
     * @summary: Update pincode bulk view.
     * @description: Modify and update views related to bulk operations on pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeBulkView/).
     */
    updatePincodeBulkView({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>}
     *   - Success response
     *
     * @name updatePincodeCoDListing
     * @summary: Update pincode CoD (Cash on Delivery) listing.
     * @description: Modify and update listings for CoD based on pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeCoDListing/).
     */
    updatePincodeCoDListing({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMOPresponse>} -
     *   Success response
     * @name updatePincodeMopView
     * @summary: Update pincode MOP (Mode of Payment) view.
     * @description: Modify and update views related to pincode MOP. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeMopView/).
     */
    updatePincodeMopView({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeMOPresponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateStoreRulePriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.RulePriorityResponse>} -
     *   Success response
     * @name updateStoreRulePriority
     * @summary: Update Store Rule priority
     * @description: Update Store Rule priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRulePriority/).
     */
    updateStoreRulePriority({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateStoreRulePriorityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.RulePriorityResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateStoreRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleUpdateResponseSchema>}
     *   - Success response
     *
     * @name updateStoreRules
     * @summary: Update Store Rule
     * @description: Update Store Rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRules/).
     */
    updateStoreRules({ ruleUid, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleUpdateResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateStoreRulesConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
     *   Success response
     * @name updateStoreRulesConfig
     * @summary: Update Store Rule Configuration
     * @description: Update Store Rule Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRulesConfig/).
     */
    updateStoreRulesConfig({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateStoreRulesConfigParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneUpdateSuccessResponse>}
     *   - Success response
     *
     * @name updateZone
     * @summary: Update details of a Zone to enable or disable.
     * @description: Enable or Disable a Zone under that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateZone/).
     */
    updateZone({ zoneId, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneUpdateSuccessResponse>;
}
import ServiceabilityPlatformApplicationValidator = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformApplicationValidator");
import ServiceabilityPlatformModel = require("sdk/output/javascript/code/sdk/platform/Serviceability/ServiceabilityPlatformModel");
