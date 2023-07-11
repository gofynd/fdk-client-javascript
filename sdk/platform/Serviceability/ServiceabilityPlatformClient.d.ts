export = Serviceability;
declare class Serviceability {
    constructor(config: any);
    config: any;
    /**
     * @param {ServiceabilityPlatformValidator.CreateDpRuleParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
     *   Success response
     * @name createDpRule
     * @summary: Upsert of DpRules in database.
     * @description: This API returns response of upsert of DpRules in mongo database.
     */
    createDpRule({ body }?: ServiceabilityPlatformValidator.CreateDpRuleParam): Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.CreateZoneParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ZoneResponse>} - Success response
     * @name createZone
     * @summary: Creation of a new zone
     * @description: This API allows you to create a new zone with the specified information. A zone enables serviceability based on given pincodes or regions. By creating a zone and including specific pincodes or regions, you can ensure that the stores associated with the zone are serviceable for those added pincodes or regions. This functionality is particularly useful when you need to ensure serviceability for multiple pincodes or regions by grouping them into a single zone.
     */
    createZone({ body }?: ServiceabilityPlatformValidator.CreateZoneParam): Promise<ServiceabilityPlatformModel.ZoneResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetAllStoresParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResponse>} -
     *   Success response
     * @name getAllStores
     * @summary: GET stores data
     * @description: This API returns stores data.
     */
    getAllStores({}?: any): Promise<ServiceabilityPlatformModel.GetStoresViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetCompanyStoreViewParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.CompanyStoreView_Response>}
     *   - Success response
     *
     * @name getCompanyStoreView
     * @summary: Company Store View of application.
     * @description: This API returns Company Store View of the application.
     */
    getCompanyStoreView({ pageNumber, pageSize }?: ServiceabilityPlatformValidator.GetCompanyStoreViewParam): Promise<ServiceabilityPlatformModel.CompanyStoreView_Response>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpAccountListParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.CompanyDpAccountListResponse>}
     *   - Success response
     *
     * @name getDpAccountList
     * @summary: Getting DpAccount of a company from database.
     * @description: This API returns response DpAccount of a company from mongo database.
     */
    getDpAccountList({ pageNumber, pageSize, stage, paymentMode, transportType, }?: ServiceabilityPlatformValidator.GetDpAccountListParam): Promise<ServiceabilityPlatformModel.CompanyDpAccountListResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpCompanyRulePriorityParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
     *   Success response
     * @name getDpCompanyRulePriority
     * @summary: Get All DpCompanyRules applied to company from database.
     * @description: This API returns response of all DpCompanyRules from mongo database.
     */
    getDpCompanyRulePriority({}?: any): Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpRuleParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
     *   Success response
     * @name getDpRule
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database.
     */
    getDpRule({ ruleUid }?: ServiceabilityPlatformValidator.GetDpRuleParam): Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpRuleListParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse>}
     *   - Success response
     *
     * @name getDpRuleList
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database.
     */
    getDpRuleList({ pageNumber, pageSize }?: ServiceabilityPlatformValidator.GetDpRuleListParam): Promise<ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetEntityRegionViewParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.EntityRegionView_Response>}
     *   - Success response
     *
     * @name getEntityRegionView
     * @summary: Get country and state list
     * @description: This API returns response for Entity Region View.
     */
    getEntityRegionView({ body }?: ServiceabilityPlatformValidator.GetEntityRegionViewParam): Promise<ServiceabilityPlatformModel.EntityRegionView_Response>;
    /**
     * @param {ServiceabilityPlatformValidator.GetListViewParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
     * @name getListView
     * @summary: Zone List of application.
     * @description: This API returns Zone List View of the application.
     */
    getListView({ pageNumber, pageSize, name, isActive, channelIds, q, }?: ServiceabilityPlatformValidator.GetListViewParam): Promise<ServiceabilityPlatformModel.ListViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetOptimalLocationsParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ReAssignStoreResponse>} -
     *   Success response
     * @name getOptimalLocations
     * @summary: Get serviceable store of the item
     * @description: This API returns serviceable store of the item.
     */
    getOptimalLocations({ body }?: ServiceabilityPlatformValidator.GetOptimalLocationsParam): Promise<ServiceabilityPlatformModel.ReAssignStoreResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetRegionJobBulkParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.GetBulkRegionJobResponse>}
     *   - Success response
     *
     * @name getRegionJobBulk
     * @summary: Get bulk_export_job collection all records
     * @description: This API takes gives all the records of bulk_export_job collection
     */
    getRegionJobBulk({ currentPageNumber, pageSize }?: ServiceabilityPlatformValidator.GetRegionJobBulkParam): Promise<ServiceabilityPlatformModel.GetBulkRegionJobResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetRegionJobBulkBatchIdParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.GetBulkRegionJobResponse>}
     *   - Success response
     *
     * @name getRegionJobBulkBatchId
     * @summary: Get bulk_export_job data for a given batch_id
     * @description: This API takes batch_id and gives the detail of bulk_export_job collection for the batch_id
     */
    getRegionJobBulkBatchId({ batchId }?: ServiceabilityPlatformValidator.GetRegionJobBulkBatchIdParam): Promise<ServiceabilityPlatformModel.GetBulkRegionJobResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetStoreParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResponse>} -
     *   Success response
     * @name getStore
     * @summary: GET stores data
     * @description: This API returns stores data.
     */
    getStore({ storeUid }?: ServiceabilityPlatformValidator.GetStoreParam): Promise<ServiceabilityPlatformModel.GetStoresViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetZoneDataViewParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.GetSingleZoneDataViewResponse>}
     *   - Success response
     *
     * @name getZoneDataView
     * @summary: Zone Data View of application.
     * @description: This API returns Zone Data View of the application.
     */
    getZoneDataView({ zoneId }?: ServiceabilityPlatformValidator.GetZoneDataViewParam): Promise<ServiceabilityPlatformModel.GetSingleZoneDataViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetZoneListViewParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
     * @name getZoneListView
     * @summary: Zone List of application.
     * @description: This API returns Zone List View of the application.
     */
    getZoneListView({ pageNumber, pageNo, pageSize, name, isActive, channelIds, q, zoneId, }?: ServiceabilityPlatformValidator.GetZoneListViewParam): Promise<ServiceabilityPlatformModel.ListViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.PostRegionJobBulkParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.PostBulkRegionJobResponse>}
     *   - Success response
     *
     * @name postRegionJobBulk
     * @summary: This Api creates a Bulk Job for region tat data upsert
     * @description: This API takes request body, validates it and sends it to kafka topic
     */
    postRegionJobBulk({ body }?: ServiceabilityPlatformValidator.PostRegionJobBulkParam): Promise<ServiceabilityPlatformModel.PostBulkRegionJobResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateDpRuleParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleUpdateSuccessResponse>}
     *   - Success response
     *
     * @name updateDpRule
     * @summary: Updating of DpRules from database.
     * @description: This API updates and returns response of DpRules from mongo database.
     */
    updateDpRule({ ruleUid, body }?: ServiceabilityPlatformValidator.UpdateDpRuleParam): Promise<ServiceabilityPlatformModel.DpRuleUpdateSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpdateZoneControllerViewParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>} -
     *   Success response
     * @name updateZoneControllerView
     * @summary: Updation of zone collections in database.
     * @description: This API returns response of updation of zone in mongo database.
     */
    updateZoneControllerView({ zoneId, body, }?: ServiceabilityPlatformValidator.UpdateZoneControllerViewParam): Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpsertDpAccountParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.CompanyDpAccountResponse>}
     *   - Success response
     *
     * @name upsertDpAccount
     * @summary: Upsertion of DpAccount in database.
     * @description: This API returns response of upsertion of DpAccount in mongo database.
     */
    upsertDpAccount({ body }?: ServiceabilityPlatformValidator.UpsertDpAccountParam): Promise<ServiceabilityPlatformModel.CompanyDpAccountResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpsertDpCompanyRulePriorityParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
     *   Success response
     * @name upsertDpCompanyRulePriority
     * @summary: Upsert of DpCompanyRules in database.
     * @description: This API returns response of upsert of DpCompanyRules in mongo database.
     */
    upsertDpCompanyRulePriority({ body }?: ServiceabilityPlatformValidator.UpsertDpCompanyRulePriorityParam): Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>;
}
import ServiceabilityPlatformValidator = require("./ServiceabilityPlatformValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
