export = LogisticApplicationValidator;
/** @typedef GetAllCountriesParam */
/**
 * @typedef GetOptimalLocationsParam
 * @property {LogisticApplicationModel.ReAssignStoreRequest} body
 */
/**
 * @typedef GetPincodeCityParam
 * @property {string} pincode - A `pincode` contains a specific address of a location.
 */
/**
 * @typedef GetPincodeZonesParam
 * @property {LogisticApplicationModel.GetZoneFromPincodeViewRequest} body
 */
/**
 * @typedef GetTatProductParam
 * @property {LogisticApplicationModel.TATViewRequest} body
 */
declare class LogisticApplicationValidator {
    /** @returns {getAllCountries} */
    static getAllCountries(): getAllCountries;
    /** @returns {getOptimalLocations} */
    static getOptimalLocations(): getOptimalLocations;
    /** @returns {getPincodeCity} */
    static getPincodeCity(): getPincodeCity;
    /** @returns {getPincodeZones} */
    static getPincodeZones(): getPincodeZones;
    /** @returns {getTatProduct} */
    static getTatProduct(): getTatProduct;
}
declare namespace LogisticApplicationValidator {
    export { GetAllCountriesParam, GetOptimalLocationsParam, GetPincodeCityParam, GetPincodeZonesParam, GetTatProductParam };
}
type GetAllCountriesParam = any;
type GetOptimalLocationsParam = {
    body: LogisticApplicationModel.ReAssignStoreRequest;
};
type GetPincodeCityParam = {
    /**
     * - A `pincode` contains a specific address of a location.
     */
    pincode: string;
};
type GetPincodeZonesParam = {
    body: LogisticApplicationModel.GetZoneFromPincodeViewRequest;
};
type GetTatProductParam = {
    body: LogisticApplicationModel.TATViewRequest;
};
import LogisticApplicationModel = require("./LogisticApplicationModel");
