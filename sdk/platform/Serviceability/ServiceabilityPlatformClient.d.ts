export = Serviceability;
declare class Serviceability {
    constructor(config: any);
    config: any;
    /**
     * @param {ServiceabilityPlatformValidator.CreateZoneParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneResponse>} - Success response
     * @name createZone
     * @summary: Creation of a new zone
     * @description: This API allows you to create a new zone with the specified information. A zone enables serviceability based on given pincodes or regions. By creating a zone and including specific pincodes or regions, you can ensure that the stores associated with the zone are serviceable for those added pincodes or regions. This functionality is particularly useful when you need to ensure serviceability for multiple pincodes or regions by grouping them into a single zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createZone/).
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
     * @param {ServiceabilityPlatformValidator.GetCompanyStoreViewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyStoreView_Response>}
     *   - Success response
     *
     * @name getCompanyStoreView
     * @summary: Company Store View of application.
     * @description: This API returns Company Store View of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCompanyStoreView/).
     */
    getCompanyStoreView({ pageNumber, pageSize, requestHeaders }?: ServiceabilityPlatformValidator.GetCompanyStoreViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanyStoreView_Response>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpAccountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyDpAccountListResponse>}
     *   - Success response
     *
     * @name getDpAccount
     * @summary: Getting DpAccount of a company from database.
     * @description: This API returns response DpAccount of a company from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getDpAccount/).
     */
    getDpAccount({ pageNumber, pageSize, stage, paymentMode, transportType, requestHeaders, }?: ServiceabilityPlatformValidator.GetDpAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanyDpAccountListResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpCompanyRulesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
     *   Success response
     * @name getDpCompanyRules
     * @summary: Get All DpCompanyRules applied to company from database.
     * @description: This API returns response of all DpCompanyRules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getDpCompanyRules/).
     */
    getDpCompanyRules({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpRuleInsertParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse>}
     *   - Success response
     *
     * @name getDpRuleInsert
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getDpRuleInsert/).
     */
    getDpRuleInsert({ pageNumber, pageSize, requestHeaders }?: ServiceabilityPlatformValidator.GetDpRuleInsertParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpRulesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
     *   Success response
     * @name getDpRules
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getDpRules/).
     */
    getDpRules({ ruleUid, requestHeaders }?: ServiceabilityPlatformValidator.GetDpRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetEntityRegionViewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.EntityRegionView_Response>}
     *   - Success response
     *
     * @name getEntityRegionView
     * @summary: Get country and state list
     * @description: This API returns response for Entity Region View. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getEntityRegionView/).
     */
    getEntityRegionView({ body, requestHeaders }?: ServiceabilityPlatformValidator.GetEntityRegionViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.EntityRegionView_Response>;
    /**
     * @param {ServiceabilityPlatformValidator.GetListViewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
     * @name getListView
     * @summary: Zone List of application.
     * @description: This API returns Zone List View of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getListView/).
     */
    getListView({ pageNumber, pageSize, name, isActive, channelIds, q, requestHeaders }?: ServiceabilityPlatformValidator.GetListViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ListViewResponse>;
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
     * @param {ServiceabilityPlatformValidator.GetStoreParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResponse>} -
     *   Success response
     * @name getStore
     * @summary: GET stores data
     * @description: This API returns stores data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStore/).
     */
    getStore({ storeUid, requestHeaders }?: ServiceabilityPlatformValidator.GetStoreParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetStoresViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetZoneDataViewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetSingleZoneDataViewResponse>}
     *   - Success response
     *
     * @name getZoneDataView
     * @summary: Zone Data View of application.
     * @description: This API returns Zone Data View of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneDataView/).
     */
    getZoneDataView({ zoneId, requestHeaders }?: ServiceabilityPlatformValidator.GetZoneDataViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetSingleZoneDataViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetZoneListViewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
     * @name getZoneListView
     * @summary: Zone List of application.
     * @description: This API returns Zone List View of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneListView/).
     */
    getZoneListView({ pageNumber, pageNo, pageSize, name, isActive, channelIds, q, zoneId, requestHeaders, }?: ServiceabilityPlatformValidator.GetZoneListViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ListViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateDpRuleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleUpdateSuccessResponse>}
     *   - Success response
     *
     * @name updateDpRule
     * @summary: Updating of DpRules from database.
     * @description: This API updates and returns response of DpRules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateDpRule/).
     */
    updateDpRule({ ruleUid, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateDpRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.DpRuleUpdateSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateZoneControllerViewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>} -
     *   Success response
     * @name updateZoneControllerView
     * @summary: Updation of zone collections in database.
     * @description: This API returns response of updation of zone in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateZoneControllerView/).
     */
    updateZoneControllerView({ zoneId, body, requestHeaders }?: ServiceabilityPlatformValidator.UpdateZoneControllerViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpsertDpAccountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CompanyDpAccountResponse>}
     *   - Success response
     *
     * @name upsertDpAccount
     * @summary: Upsertion of DpAccount in database.
     * @description: This API returns response of upsertion of DpAccount in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/upsertDpAccount/).
     */
    upsertDpAccount({ body, requestHeaders }?: ServiceabilityPlatformValidator.UpsertDpAccountParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CompanyDpAccountResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpsertDpCompanyRulesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
     *   Success response
     * @name upsertDpCompanyRules
     * @summary: Upsert of DpCompanyRules in database.
     * @description: This API returns response of upsert of DpCompanyRules in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/upsertDpCompanyRules/).
     */
    upsertDpCompanyRules({ body, requestHeaders }?: ServiceabilityPlatformValidator.UpsertDpCompanyRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpsertDpRulesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
     *   Success response
     * @name upsertDpRules
     * @summary: Upsert of DpRules in database.
     * @description: This API returns response of upsert of DpRules in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/upsertDpRules/).
     */
    upsertDpRules({ body, requestHeaders }?: ServiceabilityPlatformValidator.UpsertDpRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>;
}
import ServiceabilityPlatformValidator = require("./ServiceabilityPlatformValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
