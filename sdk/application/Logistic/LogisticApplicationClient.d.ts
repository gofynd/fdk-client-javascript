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
     * @param {LogisticApplicationValidator.getAllCountries} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.CountryListResponse>} - Success response
     * @name getAllCountries
     * @summary: Get Country List
     * @description: Get all countries
     */
    getAllCountries({}?: any): Promise<LogisticApplicationModel.CountryListResponse>;
    /**
     * @param {LogisticApplicationValidator.getOptimalLocations} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.ReAssignStoreResponse>} -
     *   Success response
     * @name getOptimalLocations
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getOptimalLocations({ body }?: LogisticApplicationValidator.getOptimalLocations): Promise<LogisticApplicationModel.ReAssignStoreResponse>;
    /**
     * @param {LogisticApplicationValidator.getPincodeCity} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.PincodeApiResponse>} - Success response
     * @name getPincodeCity
     * @summary: Get Pincode API
     * @description: Get pincode data
     */
    getPincodeCity({ pincode }?: LogisticApplicationValidator.getPincodeCity): Promise<LogisticApplicationModel.PincodeApiResponse>;
    /**
     * @param {LogisticApplicationValidator.getPincodeZones} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>}
     *   - Success response
     *
     * @name getPincodeZones
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getPincodeZones({ body }?: LogisticApplicationValidator.getPincodeZones): Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>;
    /**
     * @param {LogisticApplicationValidator.getTatProduct} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.TATViewResponse>} - Success response
     * @name getTatProduct
     * @summary: Get TAT API
     * @description: Get TAT data
     */
    getTatProduct({ body }?: LogisticApplicationValidator.getTatProduct): Promise<LogisticApplicationModel.TATViewResponse>;
}
import LogisticApplicationModel = require("./LogisticApplicationModel");
import LogisticApplicationValidator = require("./LogisticApplicationValidator");
