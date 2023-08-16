export = Serviceability;
declare class Serviceability {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.AddAppDpParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>}
     *   - Success response
     *
     * @name addAppDp
     * @summary: Add application dp data
     * @description: This API add application dp data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/addAppDp/).
     */
    addAppDp({ body }?: ServiceabilityPlatformApplicationValidator.AddAppDpParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.DeleteAppDpParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>}
     *   - Success response
     *
     * @name deleteAppDp
     * @summary: Delete application dp data
     * @description: This API remove application dp data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/deleteAppDp/).
     */
    deleteAppDp({ courierPartnerId }?: ServiceabilityPlatformApplicationValidator.DeleteAppDpParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.ApplicationCompanyDpViewResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>}
     *   - Success response
     *
     * @name getApplicationServiceability
     * @summary: Zone configuration of application.
     * @description: This API returns serviceability config of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationServiceability/).
     */
    getApplicationServiceability({ headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>}
     *   - Success response
     *
     * @name getDpApplicationRules
     * @summary: Get All DpApplicationRules rules added at application level from database.
     * @description: This API returns response of all rules of DpApplicationRules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getDpApplicationRules/).
     */
    getDpApplicationRules({ headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
     *   - Success response
     *
     * @name getSelfShip
     * @summary: Self-ship configuration of application.
     * @description: This API returns Self-ship configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getSelfShip/).
     */
    getSelfShip({ headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZoneFromPincodeViewParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneFromPincodeViewResponse>}
     *   - Success response
     *
     * @name getZoneFromPincodeView
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneFromPincodeView/).
     */
    getZoneFromPincodeView({ body }?: ServiceabilityPlatformApplicationValidator.GetZoneFromPincodeViewParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.GetZoneFromPincodeViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetZonesFromApplicationIdViewParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetZoneFromApplicationIdViewResponse>}
     *   - Success response
     *
     * @name getZonesFromApplicationIdView
     * @summary: GET zones from the application_id.
     * @description: This API returns zones from the application_id View. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZonesFromApplicationIdView/).
     */
    getZonesFromApplicationIdView({ pageNo, pageSize, zoneId, q }?: ServiceabilityPlatformApplicationValidator.GetZonesFromApplicationIdViewParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.GetZoneFromApplicationIdViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateApplicationServiceabilityParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>}
     *   - Success response
     *
     * @name updateApplicationServiceability
     * @summary: Zone configuration of application.
     * @description: This API updates serviceability config of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateApplicationServiceability/).
     */
    updateApplicationServiceability({ body }?: ServiceabilityPlatformApplicationValidator.UpdateApplicationServiceabilityParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>}
     *   - Success response
     *
     * @name updatePincodeAuditHistory
     * @summary: Auditlog configuration of application.
     * @description: This API returns Audit logs of Pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeAuditHistory/).
     */
    updatePincodeAuditHistory({ body }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>}
     *   - Success response
     *
     * @name updatePincodeBulkView
     * @summary: Bulk Update of pincode in the application.
     * @description: This API constructs bulk write operations to update the MOP data for each pincode in the payload. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeBulkView/).
     */
    updatePincodeBulkView({ body }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>}
     *   - Success response
     *
     * @name updatePincodeCoDListing
     * @summary: Pincode count view of application.
     * @description: This API returns count of active pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeCoDListing/).
     */
    updatePincodeCoDListing({ body }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMOPresponse>} -
     *   Success response
     * @name updatePincodeMopView
     * @summary: PincodeView update of MOP.
     * @description: This API updates Pincode method of payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeMopView/).
     */
    updatePincodeMopView({ body }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.PincodeMOPresponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateSelfShipParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
     *   - Success response
     *
     * @name updateSelfShip
     * @summary: Self-ship configuration of application.
     * @description: This API updates Self-ship configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateSelfShip/).
     */
    updateSelfShip({ body }?: ServiceabilityPlatformApplicationValidator.UpdateSelfShipParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpsertDpApplicationRulesParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>}
     *   - Success response
     *
     * @name upsertDpApplicationRules
     * @summary: Upsert of DpApplicationRules in database.
     * @description: This API returns response of upsert of DpApplicationRules in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/upsertDpApplicationRules/).
     */
    upsertDpApplicationRules({ body }?: ServiceabilityPlatformApplicationValidator.UpsertDpApplicationRulesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ServiceabilityPlatformModel.DPApplicationRuleResponse>;
}
import ServiceabilityPlatformApplicationValidator = require("./ServiceabilityPlatformApplicationValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
