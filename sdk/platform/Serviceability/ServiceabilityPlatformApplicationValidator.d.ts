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
/** @typedef GetDpApplicationRulesParam */
/** @typedef GetSelfShipParam */
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
 * @typedef UpdateApplicationServiceabilityParam
 * @property {ServiceabilityPlatformModel.ServiceabilityPayloadSchema} body
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
 * @typedef UpdateSelfShipParam
 * @property {ServiceabilityPlatformModel.SelfShipResponse} body
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
    /** @returns {GetDpApplicationRulesParam} */
    static getDpApplicationRules(): any;
    /** @returns {GetSelfShipParam} */
    static getSelfShip(): any;
    /** @returns {GetZoneFromPincodeViewParam} */
    static getZoneFromPincodeView(): GetZoneFromPincodeViewParam;
    /** @returns {GetZonesFromApplicationIdViewParam} */
    static getZonesFromApplicationIdView(): GetZonesFromApplicationIdViewParam;
    /** @returns {UpdateApplicationServiceabilityParam} */
    static updateApplicationServiceability(): UpdateApplicationServiceabilityParam;
    /** @returns {UpdatePincodeAuditHistoryParam} */
    static updatePincodeAuditHistory(): UpdatePincodeAuditHistoryParam;
    /** @returns {UpdatePincodeBulkViewParam} */
    static updatePincodeBulkView(): UpdatePincodeBulkViewParam;
    /** @returns {UpdatePincodeCoDListingParam} */
    static updatePincodeCoDListing(): UpdatePincodeCoDListingParam;
    /** @returns {UpdatePincodeMopViewParam} */
    static updatePincodeMopView(): UpdatePincodeMopViewParam;
    /** @returns {UpdateSelfShipParam} */
    static updateSelfShip(): UpdateSelfShipParam;
    /** @returns {UpsertDpApplicationRulesParam} */
    static upsertDpApplicationRules(): UpsertDpApplicationRulesParam;
}
declare namespace ServiceabilityPlatformApplicationValidator {
    export { AddAppDpParam, DeleteAppDpParam, GetApplicationServiceabilityParam, GetDpApplicationRulesParam, GetSelfShipParam, GetZoneFromPincodeViewParam, GetZonesFromApplicationIdViewParam, UpdateApplicationServiceabilityParam, UpdatePincodeAuditHistoryParam, UpdatePincodeBulkViewParam, UpdatePincodeCoDListingParam, UpdatePincodeMopViewParam, UpdateSelfShipParam, UpsertDpApplicationRulesParam };
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
type UpdateApplicationServiceabilityParam = {
    body: ServiceabilityPlatformModel.ServiceabilityPayloadSchema;
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
type UpdateSelfShipParam = {
    body: ServiceabilityPlatformModel.SelfShipResponse;
};
type UpsertDpApplicationRulesParam = {
    body: ServiceabilityPlatformModel.DPApplicationRuleRequest;
};
type GetApplicationServiceabilityParam = any;
type GetDpApplicationRulesParam = any;
type GetSelfShipParam = any;
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
