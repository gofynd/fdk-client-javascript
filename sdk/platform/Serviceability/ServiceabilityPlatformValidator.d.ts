export = ServiceabilityPlatformValidator;
/**
 * @typedef createZone
 * @property {ServiceabilityPlatformModel.ZoneRequest} body
 */
/** @typedef getAllStores */
/**
 * @typedef getCompanyStoreView
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */
/**
 * @typedef getEntityRegionView
 * @property {ServiceabilityPlatformModel.EntityRegionView_Request} body
 */
/**
 * @typedef getListView
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [name] - Name of particular zone in the seller account
 * @property {boolean} [isActive] - Status of zone whether active or inactive
 * @property {string} [channelIds] - Zones associated with the given channel ids'
 * @property {string} [q] - Search with name as a free text
 */
/**
 * @typedef getStore
 * @property {number} storeUid - A `store_uid` contains a specific ID of a store.
 */
/**
 * @typedef getZoneDataView
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 */
/**
 * @typedef getZoneListView
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [name] - Name of particular zone in the seller account
 * @property {boolean} [isActive] - Status of zone whether active or inactive
 * @property {string} [channelIds] - Zones associated with the given channel ids'
 * @property {string} [q] - Search with name as a free text
 * @property {string[]} [zoneId] - List of zones to query for
 */
/**
 * @typedef updateZoneControllerView
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {ServiceabilityPlatformModel.ZoneUpdateRequest} body
 */
declare class ServiceabilityPlatformValidator {
}
declare namespace ServiceabilityPlatformValidator {
    export { createZone, getAllStores, getCompanyStoreView, getEntityRegionView, getListView, getStore, getZoneDataView, getZoneListView, updateZoneControllerView };
}
/** @returns {createZone} */
declare function createZone(): createZone;
type createZone = {
    body: ServiceabilityPlatformModel.ZoneRequest;
};
/** @returns {getAllStores} */
declare function getAllStores(): any;
type getAllStores = any;
/** @returns {getCompanyStoreView} */
declare function getCompanyStoreView(): getCompanyStoreView;
type getCompanyStoreView = {
    /**
     * - Index of the item to start returning with
     */
    pageNumber?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
};
/** @returns {getEntityRegionView} */
declare function getEntityRegionView(): getEntityRegionView;
type getEntityRegionView = {
    body: ServiceabilityPlatformModel.EntityRegionView_Request;
};
/** @returns {getListView} */
declare function getListView(): getListView;
type getListView = {
    /**
     * - Index of the item to start returning with
     */
    pageNumber?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Name of particular zone in the seller account
     */
    name?: string;
    /**
     * - Status of zone whether active or inactive
     */
    isActive?: boolean;
    /**
     * - Zones associated with the given channel ids'
     */
    channelIds?: string;
    /**
     * - Search with name as a free text
     */
    q?: string;
};
/** @returns {getStore} */
declare function getStore(): getStore;
type getStore = {
    /**
     * - A `store_uid` contains a specific ID of a store.
     */
    storeUid: number;
};
/** @returns {getZoneDataView} */
declare function getZoneDataView(): getZoneDataView;
type getZoneDataView = {
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
};
/** @returns {getZoneListView} */
declare function getZoneListView(): getZoneListView;
type getZoneListView = {
    /**
     * - Index of the item to start returning with
     */
    pageNumber?: number;
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Name of particular zone in the seller account
     */
    name?: string;
    /**
     * - Status of zone whether active or inactive
     */
    isActive?: boolean;
    /**
     * - Zones associated with the given channel ids'
     */
    channelIds?: string;
    /**
     * - Search with name as a free text
     */
    q?: string;
    /**
     * - List of zones to query for
     */
    zoneId?: string[];
};
/** @returns {updateZoneControllerView} */
declare function updateZoneControllerView(): updateZoneControllerView;
type updateZoneControllerView = {
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
    body: ServiceabilityPlatformModel.ZoneUpdateRequest;
};
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
