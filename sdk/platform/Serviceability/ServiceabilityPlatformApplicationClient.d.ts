export = Serviceability;
declare class Serviceability {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationServiceabilityConfig} arg.body
     * @summary: Zone configuration of application.
     * @description: This API returns serviceability config of the application.
     */
    postApplicationServiceability({ body }?: {
        body: ApplicationServiceabilityConfig;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Zone configuration of application.
     * @description: This API returns serviceability config of the application.
     */
    getApplicationServiceability({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetZoneFromPincodeViewRequest} arg.body
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getZoneFromPincodeView({ body }?: {
        body: GetZoneFromPincodeViewRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Index of the item to start returning with
     * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
     * @param {string[]} [arg.zoneId] - List of zones to query for
     * @param {string} [arg.q] - Search with name as a free text
     * @summary: GET zones from the application_id.
     * @description: This API returns zones from the application_id View.
     */
    getZonesFromApplicationIdView({ pageNo, pageSize, zoneId, q }?: {
        pageNo?: number;
        pageSize?: number;
        zoneId?: string[];
        q?: string;
    }): Promise<any>;
}
