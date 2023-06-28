export = Serviceability;
declare class Serviceability {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.addAppDp} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>}
     *   - Success response
     *
     * @name addAppDp
     * @summary: Add application dp data
     * @description: This API add application dp data.
     */
    addAppDp({ body }?: ServiceabilityPlatformApplicationValidator.addAppDp): Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.getApplicationServiceability} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>}
     *   - Success response
     *
     * @name getApplicationServiceability
     * @summary: Zone configuration of application.
     * @description: This API returns serviceability config of the application.
     */
    getApplicationServiceability({}?: any): Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.getApplicationServiceabilitySelfShipment} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
     *   - Success response
     *
     * @name getApplicationServiceabilitySelfShipment
     * @summary: Self-ship configuration of application.
     * @description: This API returns Self-ship configuration of the application.
     */
    getApplicationServiceabilitySelfShipment({}?: any): Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.getDpApplicationRulePriority} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>}
     *   - Success response
     *
     * @name getDpApplicationRulePriority
     * @summary: Get All DpApplicationRules rules added at application level from database.
     * @description: This API returns response of all rules of DpApplicationRules from mongo database.
     */
    getDpApplicationRulePriority({}?: any): Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.getZoneFromPincodeView} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneFromPincodeViewResponse>}
     *   - Success response
     *
     * @name getZoneFromPincodeView
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getZoneFromPincodeView({ body }?: ServiceabilityPlatformApplicationValidator.getZoneFromPincodeView): Promise<ServiceabilityPlatformModel.GetZoneFromPincodeViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.getZonesFromApplicationIdView} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneFromApplicationIdViewResponse>}
     *   - Success response
     *
     * @name getZonesFromApplicationIdView
     * @summary: GET zones from the application_id.
     * @description: This API returns zones from the application_id View.
     */
    getZonesFromApplicationIdView({ pageNo, pageSize, zoneId, q }?: ServiceabilityPlatformApplicationValidator.getZonesFromApplicationIdView): Promise<ServiceabilityPlatformModel.GetZoneFromApplicationIdViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.patchApplicationServiceabilitySelfShipment} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
     *   - Success response
     *
     * @name patchApplicationServiceabilitySelfShipment
     * @summary: Self-ship configuration of application.
     * @description: This API updates Self-ship configuration of the application.
     */
    patchApplicationServiceabilitySelfShipment({ body }?: ServiceabilityPlatformApplicationValidator.patchApplicationServiceabilitySelfShipment): Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.updatePincodeAuditHistory} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>}
     *   - Success response
     *
     * @name updatePincodeAuditHistory
     * @summary: Auditlog configuration of application.
     * @description: This API returns Audit logs of Pincode.
     */
    updatePincodeAuditHistory({ body }?: ServiceabilityPlatformApplicationValidator.updatePincodeAuditHistory): Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.updatePincodeBulkView} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>}
     *   - Success response
     *
     * @name updatePincodeBulkView
     * @summary: Bulk Update of pincode in the application.
     * @description: This API constructs bulk write operations to update the MOP data for each pincode in the payload.
     */
    updatePincodeBulkView({ body }?: ServiceabilityPlatformApplicationValidator.updatePincodeBulkView): Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.updatePincodeCoDListing} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>}
     *   - Success response
     *
     * @name updatePincodeCoDListing
     * @summary: Pincode count view of application.
     * @description: This API returns count of active pincode.
     */
    updatePincodeCoDListing({ body }?: ServiceabilityPlatformApplicationValidator.updatePincodeCoDListing): Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.updatePincodeMopView} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMOPresponse>} -
     *   Success response
     * @name updatePincodeMopView
     * @summary: PincodeView update of MOP.
     * @description: This API updates Pincode method of payment.
     */
    updatePincodeMopView({ body }?: ServiceabilityPlatformApplicationValidator.updatePincodeMopView): Promise<ServiceabilityPlatformModel.PincodeMOPresponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.upsertDpApplicationRulePriority} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>}
     *   - Success response
     *
     * @name upsertDpApplicationRulePriority
     * @summary: Upsert of DpApplicationRules in database.
     * @description: This API returns response of upsert of DpApplicationRules in mongo database.
     */
    upsertDpApplicationRulePriority({ body }?: ServiceabilityPlatformApplicationValidator.upsertDpApplicationRulePriority): Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>;
}
import ServiceabilityPlatformApplicationValidator = require("./ServiceabilityPlatformApplicationValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
