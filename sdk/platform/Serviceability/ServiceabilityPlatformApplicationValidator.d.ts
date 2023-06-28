export = ServiceabilityPlatformApplicationValidator;
/** @typedef getApplicationServiceability */
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
declare class ServiceabilityPlatformApplicationValidator {
}
declare namespace ServiceabilityPlatformApplicationValidator {
    export { getApplicationServiceability, getZoneFromPincodeView, getZonesFromApplicationIdView, updatePincodeAuditHistory, updatePincodeBulkView, updatePincodeCoDListing, updatePincodeMopView };
}
/** @returns {getApplicationServiceability} */
declare function getApplicationServiceability(): any;
type getApplicationServiceability = any;
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
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
