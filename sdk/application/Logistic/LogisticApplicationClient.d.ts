export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllCountries: string;
        getOptimalLocations: string;
        getPincodeCity: string;
        getPincodeZones: string;
        getTatProduct: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<CountryListResponse>} - Success response
     * @summary: Get Country List
     * @description: Get all countries
     */
    getAllCountries({}?: any): Promise<CountryListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ReAssignStoreRequest} arg.body
     * @returns {Promise<ReAssignStoreResponse>} - Success response
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getOptimalLocations({ body }?: {
        body: ReAssignStoreRequest;
    }): Promise<ReAssignStoreResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pincode - A `pincode` contains a specific address of
     *   a location.
     * @returns {Promise<PincodeApiResponse>} - Success response
     * @summary: Get Pincode API
     * @description: Get pincode data
     */
    getPincodeCity({ pincode }?: {
        pincode: string;
    }): Promise<PincodeApiResponse>;
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
}
