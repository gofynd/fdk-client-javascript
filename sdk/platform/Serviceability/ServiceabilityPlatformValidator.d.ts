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
 * @typedef getDpAccount
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string} [stage] - Stage of the account. enabled/disabled
 * @property {string} [paymentMode] - Filters dp accounts based on payment mode
 * @property {string} [transportType] - Filters dp accounts based on transport_type
 */
/** @typedef getDpCompanyRules */
/**
 * @typedef getDpRuleInsert
 * @property {number} [pageNumber] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 */
/**
 * @typedef getDpRules
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
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
 * @typedef getOptimalLocations
 * @property {ServiceabilityPlatformModel.ReAssignStoreRequest} body
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
 * @typedef updateDpRule
 * @property {string} ruleUid - A `rule_uid` is a unique identifier for a particular Dp.
 * @property {ServiceabilityPlatformModel.DpRulesUpdateRequest} body
 */
/**
 * @typedef updateZoneControllerView
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {ServiceabilityPlatformModel.ZoneUpdateRequest} body
 */
/**
 * @typedef upsertDpAccount
 * @property {ServiceabilityPlatformModel.CompanyDpAccountRequest} body
 */
/**
 * @typedef upsertDpCompanyRules
 * @property {ServiceabilityPlatformModel.DPCompanyRuleRequest} body
 */
/**
 * @typedef upsertDpRules
 * @property {ServiceabilityPlatformModel.DpRuleRequest} body
 */
declare class ServiceabilityPlatformValidator {
}
declare namespace ServiceabilityPlatformValidator {
    export { createZone, getAllStores, getCompanyStoreView, getDpAccount, getDpCompanyRules, getDpRuleInsert, getDpRules, getEntityRegionView, getListView, getOptimalLocations, getStore, getZoneDataView, getZoneListView, updateDpRule, updateZoneControllerView, upsertDpAccount, upsertDpCompanyRules, upsertDpRules };
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
/** @returns {getDpAccount} */
declare function getDpAccount(): getDpAccount;
type getDpAccount = {
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
/** @returns {getDpCompanyRules} */
declare function getDpCompanyRules(): any;
type getDpCompanyRules = any;
/** @returns {getDpRuleInsert} */
declare function getDpRuleInsert(): getDpRuleInsert;
type getDpRuleInsert = {
    /**
     * - Index of the item to start returning with
     */
    pageNumber?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
};
/** @returns {getDpRules} */
declare function getDpRules(): getDpRules;
type getDpRules = {
    /**
     * - A `rule_uid` is a unique identifier for a particular Dp.
     */
    ruleUid: string;
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
/** @returns {getOptimalLocations} */
declare function getOptimalLocations(): getOptimalLocations;
type getOptimalLocations = {
    body: ServiceabilityPlatformModel.ReAssignStoreRequest;
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
/** @returns {updateDpRule} */
declare function updateDpRule(): updateDpRule;
type updateDpRule = {
    /**
     * - A `rule_uid` is a unique identifier for a particular Dp.
     */
    ruleUid: string;
    body: ServiceabilityPlatformModel.DpRulesUpdateRequest;
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
/** @returns {upsertDpAccount} */
declare function upsertDpAccount(): upsertDpAccount;
type upsertDpAccount = {
    body: ServiceabilityPlatformModel.CompanyDpAccountRequest;
};
/** @returns {upsertDpCompanyRules} */
declare function upsertDpCompanyRules(): upsertDpCompanyRules;
type upsertDpCompanyRules = {
    body: ServiceabilityPlatformModel.DPCompanyRuleRequest;
};
/** @returns {upsertDpRules} */
declare function upsertDpRules(): upsertDpRules;
type upsertDpRules = {
    body: ServiceabilityPlatformModel.DpRuleRequest;
};
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
