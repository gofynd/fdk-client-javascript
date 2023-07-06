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
     * @param {LogisticApplicationValidator.GetAllCountriesParam} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.CountryListResponse>} - Success response
     * @name getAllCountries
     * @summary: Get Country List
     * @description: Get all countries
     */
    getAllCountries({}?: any): Promise<LogisticApplicationModel.CountryListResponse>;
    /**
     * @param {LogisticApplicationValidator.GetOptimalLocationsParam} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.ReAssignStoreResponse>} -
     *   Success response
     * @name getOptimalLocations
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getOptimalLocations({ body }?: LogisticApplicationValidator.GetOptimalLocationsParam): Promise<LogisticApplicationModel.ReAssignStoreResponse>;
    /**
     * @param {LogisticApplicationValidator.GetPincodeCityParam} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.PincodeApiResponse>} - Success response
     * @name getPincodeCity
     * @summary: Get Pincode API
     * @description: Get pincode data
     */
    getPincodeCity({ pincode }?: LogisticApplicationValidator.GetPincodeCityParam): Promise<LogisticApplicationModel.PincodeApiResponse>;
    /**
     * @param {LogisticApplicationValidator.GetPincodeZonesParam} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>}
     *   - Success response
     *
     * @name getPincodeZones
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getPincodeZones({ body }?: LogisticApplicationValidator.GetPincodeZonesParam): Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>;
    /**
     * @param {LogisticApplicationValidator.GetTatProductParam} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.TATViewResponse>} - Success response
     * @name getTatProduct
     * @summary: Get TAT API
     * @description: Get TAT data
     */
    getTatProduct({ body }?: LogisticApplicationValidator.GetTatProductParam): Promise<LogisticApplicationModel.TATViewResponse>;
}
import LogisticApplicationModel = require("./LogisticApplicationModel");
import LogisticApplicationValidator = require("./LogisticApplicationValidator");
