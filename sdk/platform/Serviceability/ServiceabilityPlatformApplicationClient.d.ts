export = Serviceability;
declare class Serviceability {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationCompanyDpViewRequest} arg.body
     * @returns {Promise<ApplicationCompanyDpViewResponse>} - Success response
     * @summary: Add application dp data
     * @description: This API add application dp data.
     */
    addAppDp({ body }?: {
        body: ApplicationCompanyDpViewRequest;
    }): Promise<ApplicationCompanyDpViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.courierPartnerId - A `courier_partner_id` is a unique
     *   identifier of a particular delivery partner.
     * @returns {Promise<ApplicationCompanyDpViewResponse>} - Success response
     * @summary: Delete application dp data
     * @description: This API remove application dp data.
     */
    deleteAppDp({ courierPartnerId }?: {
        courierPartnerId: number;
    }): Promise<ApplicationCompanyDpViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ApplicationServiceabilityConfigResponse>} - Success response
     * @summary: Zone configuration of application.
     * @description: This API returns serviceability config of the application.
     */
    getApplicationServiceability({}?: any): Promise<ApplicationServiceabilityConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<DPApplicationRuleResponse>} - Success response
     * @summary: Get All DpApplicationRules rules added at application level from database.
     * @description: This API returns response of all rules of DpApplicationRules from mongo database.
     */
    getDpApplicationRules({}?: any): Promise<DPApplicationRuleResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetZoneFromPincodeViewRequest} arg.body
     * @returns {Promise<GetZoneFromPincodeViewResponse>} - Success response
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getZoneFromPincodeView({ body }?: {
        body: GetZoneFromPincodeViewRequest;
    }): Promise<GetZoneFromPincodeViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Index of the item to start returning with
     * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
     * @param {string[]} [arg.zoneId] - List of zones to query for
     * @param {string} [arg.q] - Search with name as a free text
     * @returns {Promise<GetZoneFromApplicationIdViewResponse>} - Success response
     * @summary: GET zones from the application_id.
     * @description: This API returns zones from the application_id View.
     */
    getZonesFromApplicationIdView({ pageNo, pageSize, zoneId, q }?: {
        pageNo?: number;
        pageSize?: number;
        zoneId?: string[];
        q?: string;
    }): Promise<GetZoneFromApplicationIdViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PincodeMopUpdateAuditHistoryRequest} arg.body
     * @returns {Promise<PincodeMopUpdateAuditHistoryResponseData>} - Success response
     * @summary: Auditlog configuration of application.
     * @description: This API returns Audit logs of Pincode.
     */
    updatePincodeAuditHistory({ body }?: {
        body: PincodeMopUpdateAuditHistoryRequest;
    }): Promise<PincodeMopUpdateAuditHistoryResponseData>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PincodeMopBulkData} arg.body
     * @returns {Promise<PincodeBulkViewResponse>} - Success response
     * @summary: Bulk Update of pincode in the application.
     * @description: This API constructs bulk write operations to update the MOP data for each pincode in the payload.
     */
    updatePincodeBulkView({ body }?: {
        body: PincodeMopBulkData;
    }): Promise<PincodeBulkViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PincodeCodStatusListingRequest} arg.body
     * @returns {Promise<PincodeCodStatusListingResponse>} - Success response
     * @summary: Pincode count view of application.
     * @description: This API returns count of active pincode.
     */
    updatePincodeCoDListing({ body }?: {
        body: PincodeCodStatusListingRequest;
    }): Promise<PincodeCodStatusListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PincodeMopData} arg.body
     * @returns {Promise<PincodeMOPresponse>} - Success response
     * @summary: PincodeView update of MOP.
     * @description: This API updates Pincode method of payment.
     */
    updatePincodeMopView({ body }?: {
        body: PincodeMopData;
    }): Promise<PincodeMOPresponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DPApplicationRuleRequest} arg.body
     * @returns {Promise<DPApplicationRuleResponse>} - Success response
     * @summary: Upsert of DpApplicationRules in database.
     * @description: This API returns response of upsert of DpApplicationRules in mongo database.
     */
    upsertDpApplicationRules({ body }?: {
        body: DPApplicationRuleRequest;
    }): Promise<DPApplicationRuleResponse>;
}
