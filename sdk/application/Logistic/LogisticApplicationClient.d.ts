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
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CountryListResponse>} - Success response
     * @summary: Get Country List
     * @description: Get all countries
     */
    getAllCountries({ headers }?: import("../ApplicationAPIClient").Options): Promise<CountryListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ReAssignStoreRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ReAssignStoreResponse>} - Success response
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getOptimalLocations({ body }?: {
        body: ReAssignStoreRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<ReAssignStoreResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pincode - A `pincode` contains a specific address of
     *   a location.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PincodeApiResponse>} - Success response
     * @summary: Get Pincode API
     * @description: Get pincode data
     */
    getPincodeCity({ pincode }?: {
        pincode: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<PincodeApiResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetZoneFromPincodeViewRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<GetZoneFromPincodeViewResponse>} - Success response
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getPincodeZones({ body }?: {
        body: GetZoneFromPincodeViewRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<GetZoneFromPincodeViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TATViewRequest} arg.body
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<TATViewResponse>} - Success response
     * @summary: Get TAT API
     * @description: Get TAT data
     */
    getTatProduct({ body }?: {
        body: TATViewRequest;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<TATViewResponse>;
}
