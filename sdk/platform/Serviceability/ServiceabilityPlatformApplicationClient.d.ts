export = Serviceability;
declare class Serviceability {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ApplicationServiceabilityConfigResponse>} - Success response
     * @summary: Zone configuration of application.
     * @description: This API returns serviceability config of the application.
     */
    getApplicationServiceability({}?: any): Promise<ApplicationServiceabilityConfigResponse>;
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
}