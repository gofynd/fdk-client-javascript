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
     * @description: Get all countries - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getAllCountries/).
     */
    getAllCountries({}?: any): Promise<LogisticApplicationModel.CountryListResponse>;
    /**
     * @param {LogisticApplicationValidator.GetOptimalLocationsParam} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.ReAssignStoreResponse>} -
     *   Success response
     * @name getOptimalLocations
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getOptimalLocations/).
     */
    getOptimalLocations({ body }?: LogisticApplicationValidator.GetOptimalLocationsParam): Promise<LogisticApplicationModel.ReAssignStoreResponse>;
    /**
     * @param {LogisticApplicationValidator.GetPincodeCityParam} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.PincodeApiResponse>} - Success response
     * @name getPincodeCity
     * @summary: Get Pincode API
     * @description: Get pincode data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeCity/).
     */
    getPincodeCity({ pincode }?: LogisticApplicationValidator.GetPincodeCityParam): Promise<LogisticApplicationModel.PincodeApiResponse>;
    /**
     * @param {LogisticApplicationValidator.GetPincodeZonesParam} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>}
     *   - Success response
     *
     * @name getPincodeZones
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeZones/).
     */
    getPincodeZones({ body }?: LogisticApplicationValidator.GetPincodeZonesParam): Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>;
    /**
     * @param {LogisticApplicationValidator.GetTatProductParam} arg - Arg object.
     * @returns {Promise<LogisticApplicationModel.TATViewResponse>} - Success response
     * @name getTatProduct
     * @summary: Get TAT API
     * @description: Get TAT data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getTatProduct/).
     */
    getTatProduct({ body }?: LogisticApplicationValidator.GetTatProductParam): Promise<LogisticApplicationModel.TATViewResponse>;
}
import LogisticApplicationModel = require("./LogisticApplicationModel");
import LogisticApplicationValidator = require("./LogisticApplicationValidator");
