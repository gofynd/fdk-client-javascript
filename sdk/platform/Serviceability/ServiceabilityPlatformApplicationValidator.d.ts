export = ServiceabilityPlatformApplicationValidator;
/**
 * @typedef AddAppDpParam
 * @property {ServiceabilityPlatformModel.ApplicationCompanyDpViewRequest} body
 */
/**
 * @typedef DeleteAppDpParam
 * @property {number} courierPartnerId - A `courier_partner_id` is a unique
 *   identifier of a particular delivery partner.
 */
/** @typedef GetApplicationServiceabilityParam */
/** @typedef GetApplicationServiceabilitySelfShipmentParam */
/** @typedef GetDpApplicationRulesParam */
/**
 * @typedef GetZoneFromPincodeViewParam
 * @property {ServiceabilityPlatformModel.GetZoneFromPincodeViewRequest} body
 */
/**
 * @typedef GetZonesFromApplicationIdViewParam
 * @property {number} [pageNo] - Index of the item to start returning with
 * @property {number} [pageSize] - Determines the items to be displayed in a page
 * @property {string[]} [zoneId] - List of zones to query for
 * @property {string} [q] - Search with name as a free text
 */
/**
 * @typedef PatchApplicationServiceabilitySelfShipmentParam
 * @property {ServiceabilityPlatformModel.SelfShipResponse} body
 */
/**
 * @typedef UpdatePincodeAuditHistoryParam
 * @property {ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest} body
 */
/**
 * @typedef UpdatePincodeBulkViewParam
 * @property {ServiceabilityPlatformModel.PincodeMopBulkData} body
 */
/**
 * @typedef UpdatePincodeCoDListingParam
 * @property {ServiceabilityPlatformModel.PincodeCodStatusListingRequest} body
 */
/**
 * @typedef UpdatePincodeMopViewParam
 * @property {ServiceabilityPlatformModel.PincodeMopData} body
 */
/**
 * @typedef UpsertDpApplicationRulesParam
 * @property {ServiceabilityPlatformModel.DPApplicationRuleRequest} body
 */
declare class ServiceabilityPlatformApplicationValidator {
    /** @returns {AddAppDpParam} */
    static addAppDp(): AddAppDpParam;
    /** @returns {DeleteAppDpParam} */
    static deleteAppDp(): DeleteAppDpParam;
    /** @returns {GetApplicationServiceabilityParam} */
    static getApplicationServiceability(): any;
    /** @returns {GetApplicationServiceabilitySelfShipmentParam} */
    static getApplicationServiceabilitySelfShipment(): any;
    /** @returns {GetDpApplicationRulesParam} */
    static getDpApplicationRules(): any;
    /** @returns {GetZoneFromPincodeViewParam} */
    static getZoneFromPincodeView(): GetZoneFromPincodeViewParam;
    /** @returns {GetZonesFromApplicationIdViewParam} */
    static getZonesFromApplicationIdView(): GetZonesFromApplicationIdViewParam;
    /** @returns {PatchApplicationServiceabilitySelfShipmentParam} */
    static patchApplicationServiceabilitySelfShipment(): PatchApplicationServiceabilitySelfShipmentParam;
    /** @returns {UpdatePincodeAuditHistoryParam} */
    static updatePincodeAuditHistory(): UpdatePincodeAuditHistoryParam;
    /** @returns {UpdatePincodeBulkViewParam} */
    static updatePincodeBulkView(): UpdatePincodeBulkViewParam;
    /** @returns {UpdatePincodeCoDListingParam} */
    static updatePincodeCoDListing(): UpdatePincodeCoDListingParam;
    /** @returns {UpdatePincodeMopViewParam} */
    static updatePincodeMopView(): UpdatePincodeMopViewParam;
    /** @returns {UpsertDpApplicationRulesParam} */
    static upsertDpApplicationRules(): UpsertDpApplicationRulesParam;
}
declare namespace ServiceabilityPlatformApplicationValidator {
    export { AddAppDpParam, DeleteAppDpParam, GetApplicationServiceabilityParam, GetApplicationServiceabilitySelfShipmentParam, GetDpApplicationRulesParam, GetZoneFromPincodeViewParam, GetZonesFromApplicationIdViewParam, PatchApplicationServiceabilitySelfShipmentParam, UpdatePincodeAuditHistoryParam, UpdatePincodeBulkViewParam, UpdatePincodeCoDListingParam, UpdatePincodeMopViewParam, UpsertDpApplicationRulesParam };
}
type AddAppDpParam = {
    body: ServiceabilityPlatformModel.ApplicationCompanyDpViewRequest;
};
type DeleteAppDpParam = {
    /**
     * - A `courier_partner_id` is a unique
     * identifier of a particular delivery partner.
     */
    courierPartnerId: number;
};
type GetZoneFromPincodeViewParam = {
    body: ServiceabilityPlatformModel.GetZoneFromPincodeViewRequest;
};
type GetZonesFromApplicationIdViewParam = {
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
type PatchApplicationServiceabilitySelfShipmentParam = {
    body: ServiceabilityPlatformModel.SelfShipResponse;
};
type UpdatePincodeAuditHistoryParam = {
    body: ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryRequest;
};
type UpdatePincodeBulkViewParam = {
    body: ServiceabilityPlatformModel.PincodeMopBulkData;
};
type UpdatePincodeCoDListingParam = {
    body: ServiceabilityPlatformModel.PincodeCodStatusListingRequest;
};
type UpdatePincodeMopViewParam = {
    body: ServiceabilityPlatformModel.PincodeMopData;
};
type UpsertDpApplicationRulesParam = {
    body: ServiceabilityPlatformModel.DPApplicationRuleRequest;
};
type GetApplicationServiceabilityParam = any;
type GetApplicationServiceabilitySelfShipmentParam = any;
type GetDpApplicationRulesParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
