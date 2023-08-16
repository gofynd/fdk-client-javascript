export = Serviceability;
declare class Serviceability {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationCompanyDpViewRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationCompanyDpViewResponse>} - Success response
     * @summary: Add application dp data
     * @description: This API add application dp data.
     */
    addAppDp({ body }?: {
        body: ApplicationCompanyDpViewRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationCompanyDpViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.courierPartnerId - A `courier_partner_id` is a unique
     *   identifier of a particular delivery partner.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationCompanyDpViewResponse>} - Success response
     * @summary: Delete application dp data
     * @description: This API remove application dp data.
     */
    deleteAppDp({ courierPartnerId }?: {
        courierPartnerId: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationCompanyDpViewResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationServiceabilityConfigResponse>} - Success response
     * @summary: Zone configuration of application.
     * @description: This API returns serviceability config of the application.
     */
    getApplicationServiceability({ headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationServiceabilityConfigResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DPApplicationRuleResponse>} - Success response
     * @summary: Get All DpApplicationRules rules added at application level from database.
     * @description: This API returns response of all rules of DpApplicationRules from mongo database.
     */
    getDpApplicationRules({ headers }?: import("../PlatformAPIClient").Options): Promise<DPApplicationRuleResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationSelfShipConfigResponse>} - Success response
     * @summary: Self-ship configuration of application.
     * @description: This API returns Self-ship configuration of the application.
     */
    getSelfShip({ headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationSelfShipConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetZoneFromPincodeViewRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetZoneFromPincodeViewResponse>} - Success response
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getZoneFromPincodeView({ body }?: {
        body: GetZoneFromPincodeViewRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetZoneFromPincodeViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Index of the item to start returning with
     * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
     * @param {string[]} [arg.zoneId] - List of zones to query for
     * @param {string} [arg.q] - Search with name as a free text
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetZoneFromApplicationIdViewResponse>} - Success response
     * @summary: GET zones from the application_id.
     * @description: This API returns zones from the application_id View.
     */
    getZonesFromApplicationIdView({ pageNo, pageSize, zoneId, q }?: {
        pageNo?: number;
        pageSize?: number;
        zoneId?: string[];
        q?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetZoneFromApplicationIdViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ServiceabilityPayloadSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationServiceabilityConfigResponse>} - Success response
     * @summary: Zone configuration of application.
     * @description: This API updates serviceability config of the application.
     */
    updateApplicationServiceability({ body }?: {
        body: ServiceabilityPayloadSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationServiceabilityConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PincodeMopUpdateAuditHistoryRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PincodeMopUpdateAuditHistoryResponseData>} - Success response
     * @summary: Auditlog configuration of application.
     * @description: This API returns Audit logs of Pincode.
     */
    updatePincodeAuditHistory({ body }?: {
        body: PincodeMopUpdateAuditHistoryRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PincodeMopUpdateAuditHistoryResponseData>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PincodeMopBulkData} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PincodeBulkViewResponse>} - Success response
     * @summary: Bulk Update of pincode in the application.
     * @description: This API constructs bulk write operations to update the MOP data for each pincode in the payload.
     */
    updatePincodeBulkView({ body }?: {
        body: PincodeMopBulkData;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PincodeBulkViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PincodeCodStatusListingRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PincodeCodStatusListingResponse>} - Success response
     * @summary: Pincode count view of application.
     * @description: This API returns count of active pincode.
     */
    updatePincodeCoDListing({ body }?: {
        body: PincodeCodStatusListingRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PincodeCodStatusListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PincodeMopData} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PincodeMOPresponse>} - Success response
     * @summary: PincodeView update of MOP.
     * @description: This API updates Pincode method of payment.
     */
    updatePincodeMopView({ body }?: {
        body: PincodeMopData;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PincodeMOPresponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SelfShipResponse} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationSelfShipConfigResponse>} - Success response
     * @summary: Self-ship configuration of application.
     * @description: This API updates Self-ship configuration of the application.
     */
    updateSelfShip({ body }?: {
        body: SelfShipResponse;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationSelfShipConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DPApplicationRuleRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DPApplicationRuleResponse>} - Success response
     * @summary: Upsert of DpApplicationRules in database.
     * @description: This API returns response of upsert of DpApplicationRules in mongo database.
     */
    upsertDpApplicationRules({ body }?: {
        body: DPApplicationRuleRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DPApplicationRuleResponse>;
}
