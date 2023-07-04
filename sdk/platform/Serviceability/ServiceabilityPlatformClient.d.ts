export = Serviceability;
declare class Serviceability {
    constructor(config: any);
    config: any;
    /**
     * @param {ServiceabilityPlatformValidator.createZone} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ZoneResponse>} - Success response
     * @name createZone
     * @summary: Creation of a new zone
     * @description: This API allows you to create a new zone with the specified information. A zone enables serviceability based on given pincodes or regions. By creating a zone and including specific pincodes or regions, you can ensure that the stores associated with the zone are serviceable for those added pincodes or regions. This functionality is particularly useful when you need to ensure serviceability for multiple pincodes or regions by grouping them into a single zone.
     */
    createZone({ body }?: ServiceabilityPlatformValidator.createZone): Promise<ServiceabilityPlatformModel.ZoneResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getAllStores} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResponse>} -
     *   Success response
     * @name getAllStores
     * @summary: GET stores data
     * @description: This API returns stores data.
     */
    getAllStores({}?: any): Promise<ServiceabilityPlatformModel.GetStoresViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getCompanyStoreView} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.CompanyStoreView_Response>}
     *   - Success response
     *
     * @name getCompanyStoreView
     * @summary: Company Store View of application.
     * @description: This API returns Company Store View of the application.
     */
    getCompanyStoreView({ pageNumber, pageSize }?: ServiceabilityPlatformValidator.getCompanyStoreView): Promise<ServiceabilityPlatformModel.CompanyStoreView_Response>;
    /**
     * @param {ServiceabilityPlatformValidator.getDpAccount} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.CompanyDpAccountListResponse>}
     *   - Success response
     *
     * @name getDpAccount
     * @summary: Getting DpAccount of a company from database.
     * @description: This API returns response DpAccount of a company from mongo database.
     */
    getDpAccount({ pageNumber, pageSize, stage, paymentMode, transportType, }?: ServiceabilityPlatformValidator.getDpAccount): Promise<ServiceabilityPlatformModel.CompanyDpAccountListResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getDpCompanyRules} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
     *   Success response
     * @name getDpCompanyRules
     * @summary: Get All DpCompanyRules applied to company from database.
     * @description: This API returns response of all DpCompanyRules from mongo database.
     */
    getDpCompanyRules({}?: any): Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getDpRuleInsert} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse>}
     *   - Success response
     *
     * @name getDpRuleInsert
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database.
     */
    getDpRuleInsert({ pageNumber, pageSize }?: ServiceabilityPlatformValidator.getDpRuleInsert): Promise<ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getDpRules} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
     *   Success response
     * @name getDpRules
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database.
     */
    getDpRules({ ruleUid }?: ServiceabilityPlatformValidator.getDpRules): Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getEntityRegionView} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.EntityRegionView_Response>}
     *   - Success response
     *
     * @name getEntityRegionView
     * @summary: Get country and state list
     * @description: This API returns response for Entity Region View.
     */
    getEntityRegionView({ body }?: ServiceabilityPlatformValidator.getEntityRegionView): Promise<ServiceabilityPlatformModel.EntityRegionView_Response>;
    /**
     * @param {ServiceabilityPlatformValidator.getListView} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
     * @name getListView
     * @summary: Zone List of application.
     * @description: This API returns Zone List View of the application.
     */
    getListView({ pageNumber, pageSize, name, isActive, channelIds, q, }?: ServiceabilityPlatformValidator.getListView): Promise<ServiceabilityPlatformModel.ListViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getOptimalLocations} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ReAssignStoreResponse>} -
     *   Success response
     * @name getOptimalLocations
     * @summary: Get serviceable store of the item
     * @description: This API returns serviceable store of the item.
     */
    getOptimalLocations({ body }?: ServiceabilityPlatformValidator.getOptimalLocations): Promise<ServiceabilityPlatformModel.ReAssignStoreResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getStore} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResponse>} -
     *   Success response
     * @name getStore
     * @summary: GET stores data
     * @description: This API returns stores data.
     */
    getStore({ storeUid }?: ServiceabilityPlatformValidator.getStore): Promise<ServiceabilityPlatformModel.GetStoresViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getZoneDataView} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.GetSingleZoneDataViewResponse>}
     *   - Success response
     *
     * @name getZoneDataView
     * @summary: Zone Data View of application.
     * @description: This API returns Zone Data View of the application.
     */
    getZoneDataView({ zoneId }?: ServiceabilityPlatformValidator.getZoneDataView): Promise<ServiceabilityPlatformModel.GetSingleZoneDataViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.getZoneListView} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
     * @name getZoneListView
     * @summary: Zone List of application.
     * @description: This API returns Zone List View of the application.
     */
    getZoneListView({ pageNumber, pageNo, pageSize, name, isActive, channelIds, q, zoneId, }?: ServiceabilityPlatformValidator.getZoneListView): Promise<ServiceabilityPlatformModel.ListViewResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.updateDpRule} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleUpdateSuccessResponse>}
     *   - Success response
     *
     * @name updateDpRule
     * @summary: Updating of DpRules from database.
     * @description: This API updates and returns response of DpRules from mongo database.
     */
    updateDpRule({ ruleUid, body }?: ServiceabilityPlatformValidator.updateDpRule): Promise<ServiceabilityPlatformModel.DpRuleUpdateSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.updateZoneControllerView} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>} -
     *   Success response
     * @name updateZoneControllerView
     * @summary: Updation of zone collections in database.
     * @description: This API returns response of updation of zone in mongo database.
     */
    updateZoneControllerView({ zoneId, body, }?: ServiceabilityPlatformValidator.updateZoneControllerView): Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.upsertDpAccount} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.CompanyDpAccountResponse>}
     *   - Success response
     *
     * @name upsertDpAccount
     * @summary: Upsertion of DpAccount in database.
     * @description: This API returns response of upsertion of DpAccount in mongo database.
     */
    upsertDpAccount({ body }?: ServiceabilityPlatformValidator.upsertDpAccount): Promise<ServiceabilityPlatformModel.CompanyDpAccountResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.upsertDpCompanyRules} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
     *   Success response
     * @name upsertDpCompanyRules
     * @summary: Upsert of DpCompanyRules in database.
     * @description: This API returns response of upsert of DpCompanyRules in mongo database.
     */
    upsertDpCompanyRules({ body }?: ServiceabilityPlatformValidator.upsertDpCompanyRules): Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>;
    /**
     * @param {ServiceabilityPlatformValidator.upsertDpRules} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
     *   Success response
     * @name upsertDpRules
     * @summary: Upsert of DpRules in database.
     * @description: This API returns response of upsert of DpRules in mongo database.
     */
    upsertDpRules({ body }?: ServiceabilityPlatformValidator.upsertDpRules): Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>;
}
import ServiceabilityPlatformValidator = require("./ServiceabilityPlatformValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
