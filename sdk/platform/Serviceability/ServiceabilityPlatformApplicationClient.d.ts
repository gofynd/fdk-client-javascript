export = Serviceability;
declare class Serviceability {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.AddAppDpParam} arg - Arg object
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>}
     *   - Success response
     *
     * @name addAppDp
     * @summary: Add application dp data
     * @description: This API add application dp data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/addAppDp/).
     */
    addAppDp({ body }?: ServiceabilityPlatformApplicationValidator.AddAppDpParam): Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.DeleteAppDpParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>}
     *   - Success response
     *
     * @name deleteAppDp
     * @summary: Delete application dp data
     * @description: This API remove application dp data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/deleteAppDp/).
     */
    deleteAppDp({ courierPartnerId }?: ServiceabilityPlatformApplicationValidator.DeleteAppDpParam): Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetApplicationServiceabilityParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>}
     *   - Success response
     *
     * @name getApplicationServiceability
     * @summary: Zone configuration of application.
     * @description: This API returns serviceability config of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationServiceability/).
     */
    getApplicationServiceability({}?: any): Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetDpApplicationRulesParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>}
     *   - Success response
     *
     * @name getDpApplicationRules
     * @summary: Get All DpApplicationRules rules added at application level from database.
     * @description: This API returns response of all rules of DpApplicationRules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getDpApplicationRules/).
     */
    getDpApplicationRules({}?: any): Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetSelfShipParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
     *   - Success response
     *
     * @name getSelfShip
     * @summary: Self-ship configuration of application.
     * @description: This API returns Self-ship configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getSelfShip/).
     */
    getSelfShip({}?: any): Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZoneFromPincodeViewParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneFromPincodeViewResponse>}
     *   - Success response
     *
     * @name getZoneFromPincodeView
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneFromPincodeView/).
     */
    getZoneFromPincodeView({ body }?: ServiceabilityPlatformApplicationValidator.GetZoneFromPincodeViewParam): Promise<ServiceabilityPlatformModel.GetZoneFromPincodeViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZonesFromApplicationIdViewParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneFromApplicationIdViewResponse>}
     *   - Success response
     *
     * @name getZonesFromApplicationIdView
     * @summary: GET zones from the application_id.
     * @description: This API returns zones from the application_id View. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZonesFromApplicationIdView/).
     */
    getZonesFromApplicationIdView({ pageNo, pageSize, zoneId, q }?: ServiceabilityPlatformApplicationValidator.GetZonesFromApplicationIdViewParam): Promise<ServiceabilityPlatformModel.GetZoneFromApplicationIdViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateApplicationServiceabilityParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>}
     *   - Success response
     *
     * @name updateApplicationServiceability
     * @summary: Zone configuration of application.
     * @description: This API updates serviceability config of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateApplicationServiceability/).
     */
    updateApplicationServiceability({ body }?: ServiceabilityPlatformApplicationValidator.UpdateApplicationServiceabilityParam): Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>}
     *   - Success response
     *
     * @name updatePincodeAuditHistory
     * @summary: Auditlog configuration of application.
     * @description: This API returns Audit logs of Pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeAuditHistory/).
     */
    updatePincodeAuditHistory({ body }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam): Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>}
     *   - Success response
     *
     * @name updatePincodeBulkView
     * @summary: Bulk Update of pincode in the application.
     * @description: This API constructs bulk write operations to update the MOP data for each pincode in the payload. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeBulkView/).
     */
    updatePincodeBulkView({ body }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam): Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>}
     *   - Success response
     *
     * @name updatePincodeCoDListing
     * @summary: Pincode count view of application.
     * @description: This API returns count of active pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeCoDListing/).
     */
    updatePincodeCoDListing({ body }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam): Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMOPresponse>} -
     *   Success response
     * @name updatePincodeMopView
     * @summary: PincodeView update of MOP.
     * @description: This API updates Pincode method of payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeMopView/).
     */
    updatePincodeMopView({ body }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam): Promise<ServiceabilityPlatformModel.PincodeMOPresponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateSelfShipParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
     *   - Success response
     *
     * @name updateSelfShip
     * @summary: Self-ship configuration of application.
     * @description: This API updates Self-ship configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateSelfShip/).
     */
    updateSelfShip({ body }?: ServiceabilityPlatformApplicationValidator.UpdateSelfShipParam): Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpsertDpApplicationRulesParam} arg
     *   - Arg object
     *
     * @returns {Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>}
     *   - Success response
     *
     * @name upsertDpApplicationRules
     * @summary: Upsert of DpApplicationRules in database.
     * @description: This API returns response of upsert of DpApplicationRules in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/upsertDpApplicationRules/).
     */
    upsertDpApplicationRules({ body }?: ServiceabilityPlatformApplicationValidator.UpsertDpApplicationRulesParam): Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>;
}
import ServiceabilityPlatformApplicationValidator = require("./ServiceabilityPlatformApplicationValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
