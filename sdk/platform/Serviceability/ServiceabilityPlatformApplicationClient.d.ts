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
    upsertZoneControllerView({ body }?: {
        body: GetZoneFromPincodeViewRequest;
    }): Promise<GetZoneFromPincodeViewResponse>;
}
