export = Serviceability;
declare class Serviceability {
    constructor(config: any);
    config: any;
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
     * @param {ServiceabilityPlatformValidator.GetDpAccountParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.CompanyDpAccountListResponse>}
     *   - Success response
     *
     * @name getDpAccount
     * @summary: Getting DpAccount of a company from database.
     * @description: This API returns response DpAccount of a company from mongo database.
     */
    getDpAccount({ pageNumber, pageSize, stage, paymentMode, transportType, }?: ServiceabilityPlatformValidator.GetDpAccountParam): Promise<ServiceabilityPlatformModel.CompanyDpAccountListResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpCompanyRulesParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
     *   Success response
     * @name getDpCompanyRules
     * @summary: Get All DpCompanyRules applied to company from database.
     * @description: This API returns response of all DpCompanyRules from mongo database.
     */
    getDpCompanyRules({}?: any): Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpRuleInsertParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse>}
     *   - Success response
     *
     * @name getDpRuleInsert
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database.
     */
    getDpRuleInsert({ pageNumber, pageSize }?: ServiceabilityPlatformValidator.GetDpRuleInsertParam): Promise<ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.GetDpRulesParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
     *   Success response
     * @name getDpRules
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database.
     */
    getDpRules({ ruleUid }?: ServiceabilityPlatformValidator.GetDpRulesParam): Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>;
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
     * @param {ServiceabilityPlatformValidator.UpsertDpCompanyRulesParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
     *   Success response
     * @name upsertDpCompanyRules
     * @summary: Upsert of DpCompanyRules in database.
     * @description: This API returns response of upsert of DpCompanyRules in mongo database.
     */
    upsertDpCompanyRules({ body }?: ServiceabilityPlatformValidator.UpsertDpCompanyRulesParam): Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.UpsertDpRulesParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
     *   Success response
     * @name upsertDpRules
     * @summary: Upsert of DpRules in database.
     * @description: This API returns response of upsert of DpRules in mongo database.
     */
    upsertDpRules({ body }?: ServiceabilityPlatformValidator.UpsertDpRulesParam): Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>;
}
import ServiceabilityPlatformValidator = require("./ServiceabilityPlatformValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
