export = Serviceability;
declare class Serviceability {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {EntityRegionView_Request} arg.body
     * @summary: Get country and state list
     * @description: This API returns response for Entity Region View.
     */
    getEntityRegionView({ body }?: {
        body: EntityRegionView_Request;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNumber] - Index of the item to start returning with
     * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
     * @param {string} [arg.name] - Name of particular zone in the seller account
     * @param {boolean} [arg.isActive] - Status of zone whether active or inactive
     * @param {string} [arg.channelIds] - Zones associated with the given channel ids'
     * @param {string} [arg.q] - Search with name as a free text
     * @summary: Zone List of application.
     * @description: This API returns Zone List View of the application.
     */
    getListView({ pageNumber, pageSize, name, isActive, channelIds, q }?: {
        pageNumber?: number;
        pageSize?: number;
        name?: string;
        isActive?: boolean;
        channelIds?: string;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Company Store View of application.
     * @description: This API returns Company Store View of the application.
     */
    getCompanyStoreView({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
     *   particular zone.
     * @summary: Zone Data View of application.
     * @description: This API returns Zone Data View of the application.
     */
    getZoneDataView({ zoneId }?: {
        zoneId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
     *   particular zone.
     * @param {ZoneUpdateRequest} arg.body
     * @summary: Updation of zone collections in database.
     * @description: This API returns response of updation of zone in mongo database.
     */
    updateZoneControllerView({ zoneId, body }?: {
        zoneId: string;
        body: ZoneUpdateRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ZoneRequest} arg.body
     * @summary: Insertion of zone in database.
     * @description: This API returns response of insertion of zone in mongo database.<br>Correction- `zone_id` in the path must be removed.<br> path is `/service/platform/logistics-internal/v1.0/company/{}/zone/`
     */
    createZone({ body }?: {
        body: ZoneRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.storeUid - A `store_uid` contains a specific ID of a store.
     * @summary: GET stores data
     * @description: This API returns stores data.
     */
    getStore({ storeUid }?: {
        storeUid: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: GET stores data
     * @description: This API returns stores data.
     */
    getAllStores({}?: any): Promise<any>;
}
