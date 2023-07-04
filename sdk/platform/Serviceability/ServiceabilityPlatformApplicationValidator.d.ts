export = ServiceabilityPlatformApplicationValidator;
/**
 * @typedef addAppDp
 * @property {ServiceabilityPlatformModel.ApplicationCompanyDpViewRequest} body
 */
/**
 * @typedef deleteAppDp
 * @property {number} courierPartnerId - A `courier_partner_id` is a unique
 *   identifier of a particular delivery partner.
 */
/** @typedef getApplicationServiceability */
/** @typedef getApplicationServiceabilitySelfShipment */
/** @typedef getDpApplicationRules */
/**
 * @typedef getZoneFromPincodeView
 * @property {ServiceabilityPlatformModel.GetZoneFromPincodeViewRequest} body
 */
/**
 * @typedef getZonesFromApplicationIdView
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string[]} [zoneId] - List of zones to query for
 * @property {string} [q] - Search with name as a free text
 */
/**
 * @typedef patchApplicationServiceabilitySelfShipment
 * @property {ServiceabilityPlatformModel.SelfShipResponse} body
 */
/**
 * @typedef updatePincodeAuditHistory
 * @property {ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest} body
 */
/**
 * @typedef updatePincodeBulkView
 * @property {ServiceabilityPlatformModel.PincodeMopBulkData} body
 */
/**
 * @typedef updatePincodeCoDListing
 * @property {ServiceabilityPlatformModel.PincodeCodStatusListingRequest} body
 */
/**
 * @typedef updatePincodeMopView
 * @property {ServiceabilityPlatformModel.PincodeMopData} body
 */
/**
 * @typedef upsertDpApplicationRules
 * @property {ServiceabilityPlatformModel.DPApplicationRuleRequest} body
 */
declare class ServiceabilityPlatformApplicationValidator {
}
declare namespace ServiceabilityPlatformApplicationValidator {
    export { addAppDp, deleteAppDp, getApplicationServiceability, getApplicationServiceabilitySelfShipment, getDpApplicationRules, getZoneFromPincodeView, getZonesFromApplicationIdView, patchApplicationServiceabilitySelfShipment, updatePincodeAuditHistory, updatePincodeBulkView, updatePincodeCoDListing, updatePincodeMopView, upsertDpApplicationRules };
}
/** @returns {addAppDp} */
declare function addAppDp(): addAppDp;
type addAppDp = {
    body: ServiceabilityPlatformModel.ApplicationCompanyDpViewRequest;
};
/** @returns {deleteAppDp} */
declare function deleteAppDp(): deleteAppDp;
type deleteAppDp = {
    /**
     * - A `courier_partner_id` is a unique
     * identifier of a particular delivery partner.
     */
    courierPartnerId: number;
};
/** @returns {getApplicationServiceability} */
declare function getApplicationServiceability(): any;
type getApplicationServiceability = any;
/** @returns {getApplicationServiceabilitySelfShipment} */
declare function getApplicationServiceabilitySelfShipment(): any;
type getApplicationServiceabilitySelfShipment = any;
/** @returns {getDpApplicationRules} */
declare function getDpApplicationRules(): any;
type getDpApplicationRules = any;
/** @returns {getZoneFromPincodeView} */
declare function getZoneFromPincodeView(): getZoneFromPincodeView;
type getZoneFromPincodeView = {
    body: ServiceabilityPlatformModel.GetZoneFromPincodeViewRequest;
};
/** @returns {getZonesFromApplicationIdView} */
declare function getZonesFromApplicationIdView(): getZonesFromApplicationIdView;
type getZonesFromApplicationIdView = {
    /**
     * - Index of the item to start returning with
     */
    pageNo?: number;
    /**
     * - Determines the items to be displayed in a page
     */
    pageSize?: number;
    /**
     * - List of zones to query for
     */
    zoneId?: string[];
    /**
     * - Search with name as a free text
     */
    q?: string;
};
/** @returns {patchApplicationServiceabilitySelfShipment} */
declare function patchApplicationServiceabilitySelfShipment(): patchApplicationServiceabilitySelfShipment;
type patchApplicationServiceabilitySelfShipment = {
    body: ServiceabilityPlatformModel.SelfShipResponse;
};
/** @returns {updatePincodeAuditHistory} */
declare function updatePincodeAuditHistory(): updatePincodeAuditHistory;
type updatePincodeAuditHistory = {
    body: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest;
};
/** @returns {updatePincodeBulkView} */
declare function updatePincodeBulkView(): updatePincodeBulkView;
type updatePincodeBulkView = {
    body: ServiceabilityPlatformModel.PincodeMopBulkData;
};
/** @returns {updatePincodeCoDListing} */
declare function updatePincodeCoDListing(): updatePincodeCoDListing;
type updatePincodeCoDListing = {
    body: ServiceabilityPlatformModel.PincodeCodStatusListingRequest;
};
/** @returns {updatePincodeMopView} */
declare function updatePincodeMopView(): updatePincodeMopView;
type updatePincodeMopView = {
    body: ServiceabilityPlatformModel.PincodeMopData;
};
/** @returns {upsertDpApplicationRules} */
declare function upsertDpApplicationRules(): upsertDpApplicationRules;
type upsertDpApplicationRules = {
    body: ServiceabilityPlatformModel.DPApplicationRuleRequest;
};
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
