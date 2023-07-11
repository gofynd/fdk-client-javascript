export = ServiceabilityPlatformValidator;
/**
 * @typedef CreateDpRuleParam
 * @property {ServiceabilityPlatformModel.DpRuleRequest} body
 */
/**
 * @typedef CreateZoneParam
 * @property {ServiceabilityPlatformModel.ZoneRequest} body
 */
/** @typedef GetAllStoresParam */
/**
 * @typedef GetCompanyStoreViewParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */
/**
 * @typedef GetDpAccountListParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 */
/** @typedef GetDpCompanyRulePriorityParam */
/**
 * @typedef GetDpRuleParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
 */
/**
 * @typedef GetDpRuleListParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */
/**
 * @typedef GetEntityRegionViewParam
 * @property {ServiceabilityPlatformModel.EntityRegionView_Request} body
 */
/**
 * @typedef GetListViewParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [name] - Name of particular zone in the seller account
 * @property {boolean} [isActive] - Status of zone whether active or inactive
 * @property {string} [channelIds] - Zones associated with the given channel ids'
 * @property {string} [q] - Search with name as a free text
 */
/**
 * @typedef GetOptimalLocationsParam
 * @property {ServiceabilityPlatformModel.ReAssignStoreRequest} body
 */
/**
 * @typedef GetRegionJobBulkParam
 * @property {number} [currentPageNumber] - The current page number
 * @property {number} [pageSize] - The page size
 */
/**
 * @typedef GetRegionJobBulkBatchIdParam
 * @property {string} batchId - The batch ID
 */
/**
 * @typedef GetStoreParam
 * @property {number} storeUid - A `store_uid` contains a specific ID of a store.
 */
/**
 * @typedef GetZoneDataViewParam
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 */
/**
 * @typedef GetZoneListViewParam
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
 * @typedef PostRegionJobBulkParam
 * @property {ServiceabilityPlatformModel.BulkRegionJobSerializer} body
 */
/**
 * @typedef UpdateDpRuleParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
 * @property {ServiceabilityPlatformModel.DpRulesUpdateRequest} body
 */
/**
 * @typedef UpdateZoneControllerViewParam
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {ServiceabilityPlatformModel.ZoneUpdateRequest} body
 */
/**
 * @typedef UpsertDpAccountParam
 * @property {ServiceabilityPlatformModel.CompanyDpAccountRequest} body
 */
/**
 * @typedef UpsertDpCompanyRulePriorityParam
 * @property {ServiceabilityPlatformModel.DPCompanyRuleRequest} body
 */
declare class ServiceabilityPlatformValidator {
    /** @returns {CreateDpRuleParam} */
    static createDpRule(): CreateDpRuleParam;
    /** @returns {CreateZoneParam} */
    static createZone(): CreateZoneParam;
    /** @returns {GetAllStoresParam} */
    static getAllStores(): any;
    /** @returns {GetCompanyStoreViewParam} */
    static getCompanyStoreView(): GetCompanyStoreViewParam;
    /** @returns {GetDpAccountListParam} */
    static getDpAccountList(): GetDpAccountListParam;
    /** @returns {GetDpCompanyRulePriorityParam} */
    static getDpCompanyRulePriority(): any;
    /** @returns {GetDpRuleParam} */
    static getDpRule(): GetDpRuleParam;
    /** @returns {GetDpRuleListParam} */
    static getDpRuleList(): GetDpRuleListParam;
    /** @returns {GetEntityRegionViewParam} */
    static getEntityRegionView(): GetEntityRegionViewParam;
    /** @returns {GetListViewParam} */
    static getListView(): GetListViewParam;
    /** @returns {GetOptimalLocationsParam} */
    static getOptimalLocations(): GetOptimalLocationsParam;
    /** @returns {GetRegionJobBulkParam} */
    static getRegionJobBulk(): GetRegionJobBulkParam;
    /** @returns {GetRegionJobBulkBatchIdParam} */
    static getRegionJobBulkBatchId(): GetRegionJobBulkBatchIdParam;
    /** @returns {GetStoreParam} */
    static getStore(): GetStoreParam;
    /** @returns {GetZoneDataViewParam} */
    static getZoneDataView(): GetZoneDataViewParam;
    /** @returns {GetZoneListViewParam} */
    static getZoneListView(): GetZoneListViewParam;
    /** @returns {PostRegionJobBulkParam} */
    static postRegionJobBulk(): PostRegionJobBulkParam;
    /** @returns {UpdateDpRuleParam} */
    static updateDpRule(): UpdateDpRuleParam;
    /** @returns {UpdateZoneControllerViewParam} */
    static updateZoneControllerView(): UpdateZoneControllerViewParam;
    /** @returns {UpsertDpAccountParam} */
    static upsertDpAccount(): UpsertDpAccountParam;
    /** @returns {UpsertDpCompanyRulePriorityParam} */
    static upsertDpCompanyRulePriority(): UpsertDpCompanyRulePriorityParam;
}
declare namespace ServiceabilityPlatformValidator {
    export { CreateDpRuleParam, CreateZoneParam, GetAllStoresParam, GetCompanyStoreViewParam, GetDpAccountListParam, GetDpCompanyRulePriorityParam, GetDpRuleParam, GetDpRuleListParam, GetEntityRegionViewParam, GetListViewParam, GetOptimalLocationsParam, GetRegionJobBulkParam, GetRegionJobBulkBatchIdParam, GetStoreParam, GetZoneDataViewParam, GetZoneListViewParam, PostRegionJobBulkParam, UpdateDpRuleParam, UpdateZoneControllerViewParam, UpsertDpAccountParam, UpsertDpCompanyRulePriorityParam };
}
type CreateDpRuleParam = {
    body: ServiceabilityPlatformModel.DpRuleRequest;
};
type CreateZoneParam = {
    body: ServiceabilityPlatformModel.ZoneRequest;
};
type GetCompanyStoreViewParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNumber?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
};
type GetDpAccountListParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNumber?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - Stage of the account. enabled/disabled
     */
    stage?: string;
    /**
     * - Filters dp accounts based on payment mode
     */
    paymentMode?: string;
    /**
     * - Filters dp accounts based on transport_type
     */
    transportType?: string;
};
type GetDpRuleParam = {
    /**
     * - A `rule_uid` is a unique identifier for a particular Dp.
     */
    ruleUid: string;
};
type GetDpRuleListParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNumber?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
};
type GetEntityRegionViewParam = {
    body: ServiceabilityPlatformModel.EntityRegionView_Request;
};
type GetListViewParam = {
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
type GetOptimalLocationsParam = {
    body: ServiceabilityPlatformModel.ReAssignStoreRequest;
};
type GetRegionJobBulkParam = {
    /**
     * - The current page number
     */
    currentPageNumber?: number;
    /**
     * - The page size
     */
    pageSize?: number;
};
type GetRegionJobBulkBatchIdParam = {
    /**
     * - The batch ID
     */
    batchId: string;
};
type GetStoreParam = {
    /**
     * - A `store_uid` contains a specific ID of a store.
     */
    storeUid: number;
};
type GetZoneDataViewParam = {
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
};
type GetZoneListViewParam = {
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
type PostRegionJobBulkParam = {
    body: ServiceabilityPlatformModel.BulkRegionJobSerializer;
};
type UpdateDpRuleParam = {
    /**
     * - A `rule_uid` is a unique identifier for a particular Dp.
     */
    ruleUid: string;
    body: ServiceabilityPlatformModel.DpRulesUpdateRequest;
};
type UpdateZoneControllerViewParam = {
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
    body: ServiceabilityPlatformModel.ZoneUpdateRequest;
};
type UpsertDpAccountParam = {
    body: ServiceabilityPlatformModel.CompanyDpAccountRequest;
};
type UpsertDpCompanyRulePriorityParam = {
    body: ServiceabilityPlatformModel.DPCompanyRuleRequest;
};
type GetAllStoresParam = any;
type GetDpCompanyRulePriorityParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
