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
     * @description: Export zones defined at the application level. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/createBulkExport/).
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
     * @description: Allows to create and manage GeoAreas, representing groups of geographic regions in bulk. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/createBulkGeoArea/).
     */
    createBulkGeoArea({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateBulkGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkGeoAreaResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateCourierPartnerRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRuleResult>}
     *   - Success response
     *
     * @name createCourierPartnerRule
     * @summary: Create courier rule
     * @description: Creates a rule within the delivery configuration. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/createCourierPartnerRule/).
     */
    createCourierPartnerRule({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateCourierPartnerRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRuleResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateFulfillmentOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.FulfillmentOption>} -
     *   Success response
     * @name createFulfillmentOption
     * @summary: Create a new fulfillment option
     * @description: Creates a new fulfillment option for the specified company and application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/createFulfillmentOption/).
     */
    createFulfillmentOption({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateFulfillmentOptionParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.FulfillmentOption>;
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
     * @description: Allows to create and manage GeoAreas, representing groups of geographic regions. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/createGeoArea/).
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
     * @description: Create the job for exporting the regions in Geoarea in CSV format. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/createGeoAreaExportJob/).
     */
    createGeoAreaExportJob({ geoareaId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateGeoAreaExportJobParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaBulkCreationResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateStoreRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleResultSchema>} -
     *   Success response
     * @name createStoreRules
     * @summary: Create store rule
     * @description: Create a rule within the order routing rules - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/createStoreRules/).
     */
    createStoreRules({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleResultSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneSchema>} - Success response
     * @name createZone
     * @summary: Create zone
     * @description: Creates a delivery zone. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/createZone/).
     */
    createZone({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.DeleteFulfillmentOptionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.OperationResponseSchema>}
     *   - Success response
     *
     * @name deleteFulfillmentOptions
     * @summary: Delete fulfillment options
     * @description: Deletes fulfillment options for provided slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/deleteFulfillmentOptions/).
     */
    deleteFulfillmentOptions({ slug, requestHeaders }?: ServiceabilityPlatformApplicationValidator.DeleteFulfillmentOptionsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.OperationResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.DeleteZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneDeleteSuccessResult>}
     *   - Success response
     *
     * @name deleteZone
     * @summary: Delete a Specific Zone
     * @description: Delete a Zone under that application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/deleteZone/).
     */
    deleteZone({ zoneId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.DeleteZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneDeleteSuccessResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.DownloadGeoareaSampleFileParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name downloadGeoareaSampleFile
     * @summary: Download geoarea sample file
     * @description: Download a sample file for geoarea data. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/downloadGeoareaSampleFile/).
     */
    downloadGeoareaSampleFile({ requestHeaders }?: any, { responseHeaders }?: object): Promise<string>;
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
     * @description: Retrieves information about the order routing setup for a single application - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getApplicationConfig/).
     */
    getApplicationConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetApplicationConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfigGetResult>}
     *   - Success response
     *
     * @name getApplicationConfiguration
     * @summary: Get delivery configuration
     * @description: This API returns all the Application config that has been applied to the given company and application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getApplicationConfiguration/).
     */
    getApplicationConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationConfigGetResult>;
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
     * @description: Get specific zone which is exported at the application level. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getBulkExport/).
     */
    getBulkExport({ batchId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetBulkExportParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetZoneBulkExport>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetBulkFulfillmentValidationStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.FulfillmentOptionBulkValidate>}
     *   - Success response
     *
     * @name getBulkFulfillmentValidationStatus
     * @summary: Validate bulk fulfillment options.
     * @description: Validates a bulk list of fulfillment options for an application before processing, ensuring correctness for stores or products. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getBulkFulfillmentValidationStatus/).
     */
    getBulkFulfillmentValidationStatus({ bulkId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetBulkFulfillmentValidationStatusParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.FulfillmentOptionBulkValidate>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetBulkGeoAreaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkGeoAreaGetResult>} -
     *   Success response
     * @name getBulkGeoArea
     * @summary: Get status of GeoAreas created in bulk
     * @description: Allows to Get GeoArea status which is created, representing groups of geographic regions in bulk. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getBulkGeoArea/).
     */
    getBulkGeoArea({ geoareaId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetBulkGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkGeoAreaGetResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRuleResult>}
     *   - Success response
     *
     * @name getCourierPartnerRule
     * @summary: Get courier rule
     * @description: Retrieves a single rule within the delivery configuration. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getCourierPartnerRule/).
     */
    getCourierPartnerRule({ ruleUid, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRuleResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnerRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRulesListResult>}
     *   - Success response
     *
     * @name getCourierPartnerRules
     * @summary: Get courier rules
     * @description: Retrieve a list of rules within the delivery configuration. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getCourierPartnerRules/).
     */
    getCourierPartnerRules({ pageNo, pageSize, status, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetCourierPartnerRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRulesListResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ShipmentCourierPartnerResult>}
     *   - Success response
     *
     * @name getCourierPartners
     * @summary: Serviceable Courier Partners
     * @description: Get all the serviceable courier partners of a destination and the shipments. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getCourierPartners/).
     */
    getCourierPartners({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetCourierPartnersParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ShipmentCourierPartnerResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetFulfillmentOptionProductsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.FulfillmentOptionProducts>}
     *   - Success response
     *
     * @name getFulfillmentOptionProducts
     * @summary: Get products for a specific fulfillment option.
     * @description: Retrieves products available for a specific fulfillment option in an application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getFulfillmentOptionProducts/).
     */
    getFulfillmentOptionProducts({ slug, storeId, q, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetFulfillmentOptionProductsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.FulfillmentOptionProducts>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetFulfillmentOptionStoresParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.FulfillmentOptionStores>}
     *   - Success response
     *
     * @name getFulfillmentOptionStores
     * @summary: Get stores for a specific fulfillment option.
     * @description: Retrieves stores available for a specific fulfillment option in an application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getFulfillmentOptionStores/).
     */
    getFulfillmentOptionStores({ slug, q, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetFulfillmentOptionStoresParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.FulfillmentOptionStores>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetFulfillmentOptionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.FulfillmentOption>} -
     *   Success response
     * @name getFulfillmentOptions
     * @summary: Get fulfillment options
     * @description: Fetches available fulfillment options for a given product and store. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getFulfillmentOptions/).
     */
    getFulfillmentOptions({ slug, productId, storeId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetFulfillmentOptionsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.FulfillmentOption>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetGeoAreaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GeoAreaDetails>} - Success response
     * @name getGeoArea
     * @summary: Get details of the specific geoarea
     * @description: This API Returns the data of the specific GeoArea which exists on the platform. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getGeoArea/).
     */
    getGeoArea({ geoareaId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaDetails>;
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
     * @description: Get the status and details of the Geoarea bulk export process. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getGeoAreaExportJobStatus/).
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
     * @summary: Get all geoareas in the current application
     * @description: Retrieves a listing view of created GeoAreas. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getGeoAreas/).
     */
    getGeoAreas({ pageSize, isActive, pageNo, type, q, countryIsoCode, state, city, pincode, sector, requestHeaders, }?: ServiceabilityPlatformApplicationValidator.GetGeoAreasParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaGetResponseBody>;
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
     * @description: Retrieves a single rule within the order routing rules - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getStoreRule/).
     */
    getStoreRule({ ruleUid, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetStoreRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleDataSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetStoreRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetStoreRulesApiResult>} -
     *   Success response
     * @name getStoreRules
     * @summary: Get store rules
     * @description: Retrieves an existing order routing setup for a single application - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getStoreRules/).
     */
    getStoreRules({ pageNo, pageSize, status, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetStoreRulesApiResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZoneParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>} -
     *   Success response
     * @name getZone
     * @summary: Get zone details
     * @description: Retrieves a single delivery zone - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getZone/).
     */
    getZone({ zoneId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZonesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ListViewSchema>} - Success response
     * @name getZones
     * @summary: Get zones
     * @description: Retrieves a list of delivery zones. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/getZones/).
     */
    getZones({ stage, pageSize, pageNo, fulfillmentOptionSlug, isActive, q, countryIsoCode, pincode, state, city, sector, requestHeaders, }?: ServiceabilityPlatformApplicationValidator.GetZonesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ListViewSchema>;
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
     * @description: Creates a order routing setup for an application, which involves updating sorting settings or rule priorities. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/insertApplicationConfig/).
     */
    insertApplicationConfig({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.InsertApplicationConfigParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.PatchApplicationConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfigPatchResult>}
     *   - Success response
     *
     * @name patchApplicationConfiguration
     * @summary: To patch any config which can be applied to application
     * @description: Apply configs to application. Supports patching for buybox rule config and promise config. For reference, refer to examples - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/patchApplicationConfiguration/).
     */
    patchApplicationConfiguration({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.PatchApplicationConfigurationParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationConfigPatchResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.PutFulfillmentOptionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.FulfillmentOption>} -
     *   Success response
     * @name putFulfillmentOption
     * @summary: Update an existing fulfillment option
     * @description: Updates the details of an existing fulfillment option for the specified company and application - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/putFulfillmentOption/).
     */
    putFulfillmentOption({ slug, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.PutFulfillmentOptionParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.FulfillmentOption>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateApplicationConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfigPut>} -
     *   Success response
     * @name updateApplicationConfiguration
     * @summary: Apply configuration to an application
     * @description: Apply configuration to application to set DP rules and Zone configuration - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updateApplicationConfiguration/).
     */
    updateApplicationConfiguration({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateApplicationConfigurationParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationConfigPut>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateBulkGeoAreaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.BulkGeoAreaResult>} -
     *   Success response
     * @name updateBulkGeoArea
     * @summary: Update geoareas and their associated regions in bulk
     * @description: Update geoarea details and their associated regions through a CSV file in bulk. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updateBulkGeoArea/).
     */
    updateBulkGeoArea({ geoareaId, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateBulkGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.BulkGeoAreaResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateCourierPartnerRulePriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.RulePriorityResult>} -
     *   Success response
     * @name updateCourierPartnerRulePriority
     * @summary: Update courier partner rule priority
     * @description: Updates a courier partner rule priority for a single application - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updateCourierPartnerRulePriority/).
     */
    updateCourierPartnerRulePriority({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateCourierPartnerRulePriorityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.RulePriorityResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateCourierRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRuleResult>}
     *   - Success response
     *
     * @name updateCourierRule
     * @summary: Update courier rule
     * @description: Updates an existing rule within the delivery configuration. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updateCourierRule/).
     */
    updateCourierRule({ ruleUid, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateCourierRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRuleResult>;
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
     * @description: Updates the GeoArea with a new name, regions, etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updateGeoArea/).
     */
    updateGeoArea({ geoareaId, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateGeoAreaParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GeoAreaPutResponseBody>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResultData>}
     *   - Success response
     *
     * @name updatePincodeAuditHistory
     * @summary: Get audit trail
     * @description: Retrieves the history of changes made to cash on delivery settings for pincodes. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updatePincodeAuditHistory/).
     */
    updatePincodeAuditHistory({ body, pageNumber, pageSize, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResultData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeBulkViewResult>} -
     *   Success response
     * @name updatePincodeBulkView
     * @summary: Bulk update pincode COD support
     * @description: Updates the cash on delivery settings for multiple specified pin codes simultaneously. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updatePincodeBulkView/).
     */
    updatePincodeBulkView({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeBulkViewResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResult>}
     *   - Success response
     *
     * @name updatePincodeCoDListing
     * @summary: Get COD enabled pincodes
     * @description: Retrieves a list of pincodes along with the count based on whether cash on delivery settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updatePincodeCoDListing/).
     */
    updatePincodeCoDListing({ body, pageNumber, pageSize, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMOPResult>} - Success response
     * @name updatePincodeMopView
     * @summary: Update pincode COD support
     * @description: Modify and update views related to pincode MOP (Mode of Payment). - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updatePincodeMopView/).
     */
    updatePincodeMopView({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeMOPResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateStoreRulePriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.RulePriorityResult>} -
     *   Success response
     * @name updateStoreRulePriority
     * @summary: Update Store Rule priority
     * @description: Update Store Rule priority - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updateStoreRulePriority/).
     */
    updateStoreRulePriority({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateStoreRulePriorityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.RulePriorityResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateStoreRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleUpdateResultSchema>}
     *   - Success response
     *
     * @name updateStoreRules
     * @summary: Update store rule
     * @description: Updates an existing rule within the order routing rules. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updateStoreRules/).
     */
    updateStoreRules({ ruleUid, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleUpdateResultSchema>;
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
     * @description: Updates an existing order routing setup for a single application, which involves updating sorting settings or rule priorities. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updateStoreRulesConfig/).
     */
    updateStoreRulesConfig({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateStoreRulesConfigParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateZoneParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneUpdateSuccessResult>}
     *   - Success response
     *
     * @name updateZone
     * @summary: Update details of a Zone to enable or disable
     * @description: Enable or Disable a Zone under that application. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/updateZone/).
     */
    updateZone({ zoneId, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateZoneParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneUpdateSuccessResult>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UploadBulkFulfillmentOptionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.FulfillmentOptionBulkData>}
     *   - Success response
     *
     * @name uploadBulkFulfillmentOptions
     * @summary: Upload bulk fulfillment options.
     * @description: Uploads a bulk list of fulfillment options for an application, allowing multiple fulfillment configurations to be processed at once. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/uploadBulkFulfillmentOptions/).
     */
    uploadBulkFulfillmentOptions({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UploadBulkFulfillmentOptionsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.FulfillmentOptionBulkData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.ValidateBulkFulfillmentOptionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.FulfillmentOptionBulkValidateData>}
     *   - Success response
     *
     * @name validateBulkFulfillmentOptions
     * @summary: Validate bulk fulfillment options.
     * @description: Validates a bulk list of fulfillment options for an application before processing, ensuring correctness for stores or products. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/serviceability/validateBulkFulfillmentOptions/).
     */
    validateBulkFulfillmentOptions({ type, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.ValidateBulkFulfillmentOptionsParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.FulfillmentOptionBulkValidateData>;
}
import ServiceabilityPlatformApplicationValidator = require("./ServiceabilityPlatformApplicationValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
