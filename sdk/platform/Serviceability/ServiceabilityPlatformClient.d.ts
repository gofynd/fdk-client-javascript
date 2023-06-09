export = Serviceability;
declare class Serviceability {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ZoneRequest} arg.body
     * @returns {Promise<ZoneResponse>} - Success response
     * @summary: Creation of a new zone
     * @description: This API allows you to create a new zone with the specified information. A zone enables serviceability based on given pincodes or regions. By creating a zone and including specific pincodes or regions, you can ensure that the stores associated with the zone are serviceable for those added pincodes or regions. This functionality is particularly useful when you need to ensure serviceability for multiple pincodes or regions by grouping them into a single zone.
     */
    createZone({ body }?: {
        body: ZoneRequest;
    }): Promise<ZoneResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<GetStoresViewResponse>} - Success response
     * @summary: GET stores data
     * @description: This API returns stores data.
     */
    getAllStores({}?: any): Promise<GetStoresViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<CompanyStoreView_Response>} - Success response
     * @summary: Company Store View of application.
     * @description: This API returns Company Store View of the application.
     */
    getCompanyStoreView({}?: any): Promise<CompanyStoreView_Response>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<DPCompanyRuleResponse>} - Success response
     * @summary: Get All DpCompanyRules applied to company from database.
     * @description: This API returns response of all DpCompanyRules from mongo database.
     */
    getDpCompanyRules({}?: any): Promise<DPCompanyRuleResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<DpMultipleRuleSuccessResponse>} - Success response
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database.
     */
    getDpRuleInsert({}?: any): Promise<DpMultipleRuleSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.ruleUid - A `rule_uid` is a unique identifier for a
     *   particular Dp.
     * @returns {Promise<DpRuleSuccessResponse>} - Success response
     * @summary: Fetching of DpRules from database.
     * @description: This API returns response of DpRules from mongo database.
     */
    getDpRules({ ruleUid }?: {
        ruleUid: string;
    }): Promise<DpRuleSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EntityRegionView_Request} arg.body
     * @returns {Promise<EntityRegionView_Response>} - Success response
     * @summary: Get country and state list
     * @description: This API returns response for Entity Region View.
     */
    getEntityRegionView({ body }?: {
        body: EntityRegionView_Request;
    }): Promise<EntityRegionView_Response>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNumber] - Index of the item to start returning with
     * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
     * @param {string} [arg.name] - Name of particular zone in the seller account
     * @param {boolean} [arg.isActive] - Status of zone whether active or inactive
     * @param {string} [arg.channelIds] - Zones associated with the given channel ids'
     * @param {string} [arg.q] - Search with name as a free text
     * @returns {Promise<ListViewResponse>} - Success response
     * @summary: Zone List of application.
     * @description: This API returns Zone List View of the application.
     */
    getListView({ pageNumber, pageSize, name, isActive, channelIds, q, }?: {
        pageNumber?: number;
        pageSize?: number;
        name?: string;
        isActive?: boolean;
        channelIds?: string;
        q?: string;
    }): Promise<ListViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ReAssignStoreRequest} arg.body
     * @returns {Promise<ReAssignStoreResponse>} - Success response
     * @summary: Get serviceable store of the item
     * @description: This API returns serviceable store of the item.
     */
    getOptimalLocations({ body }?: {
        body: ReAssignStoreRequest;
    }): Promise<ReAssignStoreResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.storeUid - A `store_uid` contains a specific ID of a store.
     * @returns {Promise<GetStoresViewResponse>} - Success response
     * @summary: GET stores data
     * @description: This API returns stores data.
     */
    getStore({ storeUid }?: {
        storeUid: number;
    }): Promise<GetStoresViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
     *   particular zone.
     * @returns {Promise<GetSingleZoneDataViewResponse>} - Success response
     * @summary: Zone Data View of application.
     * @description: This API returns Zone Data View of the application.
     */
    getZoneDataView({ zoneId }?: {
        zoneId: string;
    }): Promise<GetSingleZoneDataViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.ruleUid - A `rule_uid` is a unique identifier for a
     *   particular Dp.
     * @param {DpRulesUpdateRequest} arg.body
     * @returns {Promise<DpRuleUpdateSuccessResponse>} - Success response
     * @summary: Updating of DpRules from database.
     * @description: This API updates and returns response of DpRules from mongo database.
     */
    updateDpRule({ ruleUid, body }?: {
        ruleUid: string;
        body: DpRulesUpdateRequest;
    }): Promise<DpRuleUpdateSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
     *   particular zone.
     * @param {ZoneUpdateRequest} arg.body
     * @returns {Promise<ZoneSuccessResponse>} - Success response
     * @summary: Updation of zone collections in database.
     * @description: This API returns response of updation of zone in mongo database.
     */
    updateZoneControllerView({ zoneId, body, }?: {
        zoneId: string;
        body: ZoneUpdateRequest;
    }): Promise<ZoneSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CompanyDpAccountRequest} arg.body
     * @returns {Promise<CompanyDpAccountResponse>} - Success response
     * @summary: Upsertion of DpAccount in database.
     * @description: This API returns response of upsertion of DpAccount in mongo database.
     */
    upsertDpAccount({ body }?: {
        body: CompanyDpAccountRequest;
    }): Promise<CompanyDpAccountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DPCompanyRuleRequest} arg.body
     * @returns {Promise<DPCompanyRuleResponse>} - Success response
     * @summary: Upsert of DpCompanyRules in database.
     * @description: This API returns response of upsert of DpCompanyRules in mongo database.
     */
    upsertDpCompanyRules({ body }?: {
        body: DPCompanyRuleRequest;
    }): Promise<DPCompanyRuleResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DpRuleRequest} arg.body
     * @returns {Promise<DpRuleSuccessResponse>} - Success response
     * @summary: Upsert of DpRules in database.
     * @description: This API returns response of upsert of DpRules in mongo database.
     */
    upsertDpRules({ body }?: {
        body: DpRuleRequest;
    }): Promise<DpRuleSuccessResponse>;
}
