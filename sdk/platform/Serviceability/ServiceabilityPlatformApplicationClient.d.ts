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
     * @returns {Promise<ServiceabilityPlatformModel.BulkGeoAreaResult>} -
     *   Success response
     * @name createBulkGeoArea
     * @summary: Bulk Creation of GeoArea Regions
     * @description: Allows to create and manage GeoAreas, representing groups of geographic regions in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createBulkGeoArea/).
     */
    createBulkGeoArea({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateBulkGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkGeoAreaResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateBulkGeoAreaExportParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PriceGeoAreaExportResult>}
     *   - Success response
     *
     * @name createBulkGeoAreaExport
     * @summary: Create Bulk Export of Price GeoAreas
     * @description: Allows to create and manage GeoAreas, representing groups of geographic regions in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createBulkGeoAreaExport/).
     */
    createBulkGeoAreaExport({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateBulkGeoAreaExportParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PriceGeoAreaExportResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateBulkGeoAreasParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkGeoAreaResult>} -
     *   Success response
     * @name createBulkGeoAreas
     * @summary: Bulk Creation of GeoAreas
     * @description: Allows to create and manage GeoAreas, representing groups of geographic regions in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createBulkGeoAreas/).
     */
    createBulkGeoAreas({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateBulkGeoAreasParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkGeoAreaResult>;
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
     * @summary: Create courier rule
     * @description: Creates a rule within the delivery configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerRule/).
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
     * @param {ServiceabilityPlatformApplicationValidator.CreateGeoAreaExportJobParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GeoAreaBulkCreationResult>}
     *   - Success response
     *
     * @name createGeoAreaExportJob
     * @summary: Create job for exporting Geoarea regions
     * @description: Create the job for exporting the regions in Geoarea in CSV format. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createGeoAreaExportJob/).
     */
    createGeoAreaExportJob({ geoareaId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateGeoAreaExportJobParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaBulkCreationResult>;
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
     * @summary: Create store rule
     * @description: Create a rule within the order routing rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createStoreRules/).
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
     * @summary: Create zone
     * @description: Creates a delivery zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createZone/).
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
     * @summary: Delete a Specific Zone
     * @description: Delete a Zone under that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/deleteZone/).
     */
    deleteZone({ zoneId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.DeleteZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneDeleteSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.DownloadGeoareaSampleFileParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name downloadGeoareaSampleFile
     * @summary: Download geoarea sample file.
     * @description: Download a sample file for geoarea data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/downloadGeoareaSampleFile/).
     */
    downloadGeoareaSampleFile({ requestHeaders }?: any, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.DownloadZoneSampleFileParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name downloadZoneSampleFile
     * @summary: Download Sample Delivery Zone Product Type file.
     * @description: Download a sample file for Delivery Zone with specified product type column (i.e. category, department, Item IDs or tags). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/downloadZoneSampleFile/).
     */
    downloadZoneSampleFile({ productType, requestHeaders }?: ServiceabilityPlatformApplicationValidator.DownloadZoneSampleFileParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetApplicationConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
     *   Success response
     * @name getApplicationConfig
     * @summary: Get store rule configuration
     * @description: Retrieves information about the order routing setup for a single application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationConfig/).
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
     * @summary: Get delivery configuration
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
     * @summary: Get status of GeoAreas created in bulk
     * @description: Allows to Get GeoArea status which is created, representing groups of geographic regions in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkGeoArea/).
     */
    getBulkGeoArea({ geoareaId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetBulkGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkGeoAreaGetResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetBulkGeoAreasHistoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetBulkPriceZoneHistory>}
     *   - Success response
     *
     * @name getBulkGeoAreasHistory
     * @summary: Get history of the geoarea in bulk job processed
     * @description: Allows to get the history of geoareas that are uploaded in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkGeoAreasHistory/).
     */
    getBulkGeoAreasHistory({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetBulkPriceZoneHistory>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetBulkGeoAreasSampleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name getBulkGeoAreasSample
     * @summary: Get sample file of a Price Zone
     * @description: Generates a sample XLSX file containing template data for Price GeoAreas. This sample file provides the required columns and example values needed for bulk uploading Price GeoArea data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkGeoAreasSample/).
     */
    getBulkGeoAreasSample({ requestHeaders }?: any, { responseHeaders }?: object): Promise<string>;
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
     * @param {ServiceabilityPlatformApplicationValidator.GetBulkZoneOverrideStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkZoneOverrideStatusSchema>}
     *   - Success response
     *
     * @name getBulkZoneOverrideStatus
     * @summary: Bulk Zone Override Status.
     * @description: Get status multiple zone conflicts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkZoneOverrideStatus/).
     */
    getBulkZoneOverrideStatus({ batchId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetBulkZoneOverrideStatusParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkZoneOverrideStatusSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetBulkZoneValidationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneBulkValidationStatusResponse>}
     *   - Success response
     *
     * @name getBulkZoneValidation
     * @summary: Get bulk zone validation status.
     * @description: Fetch the validation status and results for a specific bulk zone validation batch. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkZoneValidation/).
     */
    getBulkZoneValidation({ batchId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetBulkZoneValidationParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneBulkValidationStatusResponse>;
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
     * @summary: Get courier rule
     * @description: Retrieves a single rule within the delivery configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRule/).
     */
    getCourierPartnerRule({ ruleUid, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRuleResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRuleResponseDetailSchema>}
     *   - Success response
     *
     * @name getCourierPartnerRuleDetails
     * @summary: Get courier rule
     * @description: Retrieves details for a courier partner rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRuleDetails/).
     */
    getCourierPartnerRuleDetails({ ruleUid, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleDetailsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRuleResponseDetailSchema>;
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
     * @summary: Get courier rules
     * @description: Retrieve a list of rules within the delivery configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRules/).
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
     * @param {ServiceabilityPlatformApplicationValidator.GetGeoAreaExportJobStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GeoAreaBulkExportResult>}
     *   - Success response
     *
     * @name getGeoAreaExportJobStatus
     * @summary: Get status of Geoarea export job
     * @description: Get the status and details of the Geoarea bulk export process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getGeoAreaExportJobStatus/).
     */
    getGeoAreaExportJobStatus({ geoareaId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetGeoAreaExportJobStatusParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaBulkExportResult>;
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
    getGeoAreas({ pageSize, isActive, pageNo, type, q, countryIsoCode, state, city, pincode, sector, requestHeaders, }?: ServiceabilityPlatformApplicationValidator.GetGeoAreasParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaGetResponseBody>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetGeoAreasExportStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetExportPriceZoneHistory>}
     *   - Success response
     *
     * @name getGeoAreasExportStatus
     * @summary: Get history of the geoarea in bulk job processed
     * @description: Allows to get the history of geoareas that are uploaded in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getGeoAreasExportStatus/).
     */
    getGeoAreasExportStatus({ batchId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetGeoAreasExportStatusParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetExportPriceZoneHistory>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetStoreRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleDataSchema>} -
     *   Success response
     * @name getStoreRule
     * @summary: Get store rule
     * @description: Retrieves a single rule within the order routing rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRule/).
     */
    getStoreRule({ ruleUid, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetStoreRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleDataSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetStoreRuleDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleDataDetailsSchema>}
     *   - Success response
     *
     * @name getStoreRuleDetails
     * @summary: Get store rule Details
     * @description: Retrieves details of a order routing rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRuleDetails/).
     */
    getStoreRuleDetails({ ruleUid, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetStoreRuleDetailsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleDataDetailsSchema>;
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
     * @summary: Get store rules
     * @description: Retrieves an existing order routing setup for a single application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRules/).
     */
    getStoreRules({ pageNo, pageSize, status, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetStoreRulesApiResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZoneParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>} -
     *   Success response
     * @name getZone
     * @summary: Get zone details
     * @description: Retrieves a single delivery zone - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZone/).
     */
    getZone({ zoneId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZoneDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneByIdDetailsSchema>}
     *   - Success response
     *
     * @name getZoneDetails
     * @summary: Get details of a delivery zone
     * @description: Get details of a single delivery zone along with product, store and region details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneDetails/).
     */
    getZoneDetails({ zoneId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetZoneDetailsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetZoneByIdDetailsSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZoneOverrideStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneOverrideStatusResponseSchema>}
     *   - Success response
     *
     * @name getZoneOverrideStatus
     * @summary: Zone conflict override status.
     * @description: Get current status of zone conflict override process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneOverrideStatus/).
     */
    getZoneOverrideStatus({ zoneId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetZoneOverrideStatusParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneOverrideStatusResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZonesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResponseV2>} -
     *   Success response
     * @name getZones
     * @summary: Get zones
     * @description: Retrieves a list of delivery zones. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZones/).
     */
    getZones({ stage, type, accessLevel, status, pageSize, pageNo, isActive, q, countryIsoCode, pincode, state, city, sector, requestHeaders, }?: ServiceabilityPlatformApplicationValidator.GetZonesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ListViewResponseV2>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.ImportBulkZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneBulkImportResponse>} -
     *   Success response
     * @name importBulkZone
     * @summary: Import validated bulk zones.
     * @description: Imports previously validated bulk zones into the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/importBulkZone/).
     */
    importBulkZone({ batchId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.ImportBulkZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneBulkImportResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.InsertApplicationConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
     *   Success response
     * @name insertApplicationConfig
     * @summary: Create store rule configuration
     * @description: Creates a order routing setup for an application, which involves updating sorting settings or rule priorities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/insertApplicationConfig/).
     */
    insertApplicationConfig({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.InsertApplicationConfigParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.OverrideBulkZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkZoneOverrideResponseSchema>}
     *   - Success response
     *
     * @name overrideBulkZone
     * @summary: Bulk Zone Override.
     * @description: Resolve multiple zone conflicts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/overrideBulkZone/).
     */
    overrideBulkZone({ batchId, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.OverrideBulkZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkZoneOverrideResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.OverrideZoneByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneOverrideResponseSchema>}
     *   - Success response
     *
     * @name overrideZoneById
     * @summary: Resolves Given Zone Conflicts.
     * @description: Resolves the conflicts in the current zone with or without existing zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/overrideZoneById/).
     */
    overrideZoneById({ zoneId, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.OverrideZoneByIdParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneOverrideResponseSchema>;
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
     * @param {ServiceabilityPlatformApplicationValidator.UpdateBulkGeoAreaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkGeoAreaResult>} -
     *   Success response
     * @name updateBulkGeoArea
     * @summary: Update geoareas and their associated regions in bulk.
     * @description: Update geoarea details and their associated regions through a CSV file in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateBulkGeoArea/).
     */
    updateBulkGeoArea({ geoareaId, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateBulkGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkGeoAreaResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateCourierPartnerRulePriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.RulePriorityResponse>} -
     *   Success response
     * @name updateCourierPartnerRulePriority
     * @summary: Update courier partner rule priority
     * @description: Updates a courier partner rule priority for a single application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerRulePriority/).
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
     * @summary: Update courier rule
     * @description: Updates an existing rule within the delivery configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierRule/).
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
     * @summary: Get audit trail
     * @description: Retrieves the history of changes made to cash on delivery settings for pincodes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeAuditHistory/).
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
     * @summary: Bulk update pincode COD support
     * @description: Updates the cash on delivery settings for multiple specified pin codes simultaneously. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeBulkView/).
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
     * @summary: Get COD enabled pincodes
     * @description: Retrieves a list of pincodes along with the count based on whether cash on delivery settings. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeCoDListing/).
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
     * @summary: Update pincode COD support
     * @description: Modify and update views related to pincode MOP (Mode of Payment). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeMopView/).
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
     * @summary: Update store rule
     * @description: Updates an existing rule within the order routing rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRules/).
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
     * @summary: Update store rules configuration
     * @description: Updates an existing order routing setup for a single application, which involves updating sorting settings or rule priorities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRulesConfig/).
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
    /**
     * @param {ServiceabilityPlatformApplicationValidator.ValidateBulkZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneBulkValidationResponse>}
     *   - Success response
     *
     * @name validateBulkZone
     * @summary: Validate bulk zones.
     * @description: Validates the bulk zones data before import. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/validateBulkZone/).
     */
    validateBulkZone({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.ValidateBulkZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneBulkValidationResponse>;
}
import ServiceabilityPlatformApplicationValidator = require("./ServiceabilityPlatformApplicationValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
