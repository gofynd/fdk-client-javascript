export = ServiceabilityPlatformValidator;
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
 * @typedef GetDpAccountParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 */
/** @typedef GetDpCompanyRulesParam */
/**
 * @typedef GetDpRuleInsertParam
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */
/**
 * @typedef GetDpRulesParam
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
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
 * @typedef UpsertDpCompanyRulesParam
 * @property {ServiceabilityPlatformModel.DPCompanyRuleRequest} body
 */
/**
 * @typedef UpsertDpRulesParam
 * @property {ServiceabilityPlatformModel.DpRuleRequest} body
 */
declare class ServiceabilityPlatformValidator {
    /** @returns {CreateZoneParam} */
    static createZone(): CreateZoneParam;
    /** @returns {GetAllStoresParam} */
    static getAllStores(): any;
    /** @returns {GetCompanyStoreViewParam} */
    static getCompanyStoreView(): GetCompanyStoreViewParam;
    /** @returns {GetDpAccountParam} */
    static getDpAccount(): GetDpAccountParam;
    /** @returns {GetDpCompanyRulesParam} */
    static getDpCompanyRules(): any;
    /** @returns {GetDpRuleInsertParam} */
    static getDpRuleInsert(): GetDpRuleInsertParam;
    /** @returns {GetDpRulesParam} */
    static getDpRules(): GetDpRulesParam;
    /** @returns {GetEntityRegionViewParam} */
    static getEntityRegionView(): GetEntityRegionViewParam;
    /** @returns {GetListViewParam} */
    static getListView(): GetListViewParam;
    /** @returns {GetOptimalLocationsParam} */
    static getOptimalLocations(): GetOptimalLocationsParam;
    /** @returns {GetStoreParam} */
    static getStore(): GetStoreParam;
    /** @returns {GetZoneDataViewParam} */
    static getZoneDataView(): GetZoneDataViewParam;
    /** @returns {GetZoneListViewParam} */
    static getZoneListView(): GetZoneListViewParam;
    /** @returns {UpdateDpRuleParam} */
    static updateDpRule(): UpdateDpRuleParam;
    /** @returns {UpdateZoneControllerViewParam} */
    static updateZoneControllerView(): UpdateZoneControllerViewParam;
    /** @returns {UpsertDpAccountParam} */
    static upsertDpAccount(): UpsertDpAccountParam;
    /** @returns {UpsertDpCompanyRulesParam} */
    static upsertDpCompanyRules(): UpsertDpCompanyRulesParam;
    /** @returns {UpsertDpRulesParam} */
    static upsertDpRules(): UpsertDpRulesParam;
}
declare namespace ServiceabilityPlatformValidator {
    export { CreateZoneParam, GetAllStoresParam, GetCompanyStoreViewParam, GetDpAccountParam, GetDpCompanyRulesParam, GetDpRuleInsertParam, GetDpRulesParam, GetEntityRegionViewParam, GetListViewParam, GetOptimalLocationsParam, GetStoreParam, GetZoneDataViewParam, GetZoneListViewParam, UpdateDpRuleParam, UpdateZoneControllerViewParam, UpsertDpAccountParam, UpsertDpCompanyRulesParam, UpsertDpRulesParam };
}
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
type GetDpAccountParam = {
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
type GetDpRuleInsertParam = {
    /**
     * - Index of the item to start returning with
     */
    pageNumber?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
};
type GetDpRulesParam = {
    /**
     * - A `rule_uid` is a unique identifier for a particular Dp.
     */
    ruleUid: string;
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
type UpsertDpCompanyRulesParam = {
    body: ServiceabilityPlatformModel.DPCompanyRuleRequest;
};
type UpsertDpRulesParam = {
    body: ServiceabilityPlatformModel.DpRuleRequest;
};
type GetAllStoresParam = any;
type GetDpCompanyRulesParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
