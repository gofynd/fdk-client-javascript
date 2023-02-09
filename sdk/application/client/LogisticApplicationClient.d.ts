export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getPincodeCity: string;
        getTatProduct: string;
        getEntityList: string;
        getPincodeZones: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pincode - A `pincode` contains a specific address of
     *   a location.
     * @param {string} [arg.countryCode] - A 3 alphabetic country code
     * @returns {Promise<PincodeApiResponse>} - Success response
     * @summary: Get Pincode API
     * @description: Get pincode data
     */
    getPincodeCity({ pincode, countryCode }?: {
        pincode: string;
        countryCode?: string;
    }): Promise<PincodeApiResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TATViewRequest} arg.body
     * @returns {Promise<TATViewResponse>} - Success response
     * @summary: Get TAT API
     * @description: Get TAT data
     */
    getTatProduct({ body }?: {
        body: TATViewRequest;
    }): Promise<TATViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.page] - Page Number.
     * @param {string} [arg.limit] - Limit of entity in page
     * @param {EntityListRequest} arg.body
     * @returns {Promise<EntityListResponse>} - Success response
     * @summary: Get Entity List
     * @description: Get Entity List
     */
    getEntityList({ body, page, limit }?: {
        page?: string;
        limit?: string;
        body: EntityListRequest;
    }): Promise<EntityListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetZoneFromPincodeViewRequest} arg.body
     * @returns {Promise<GetZoneFromPincodeViewResponse>} - Success response
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getPincodeZones({ body }?: {
        body: GetZoneFromPincodeViewRequest;
    }): Promise<GetZoneFromPincodeViewResponse>;
}
