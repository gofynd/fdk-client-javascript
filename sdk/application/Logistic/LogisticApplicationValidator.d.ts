export = LogisticApplicationValidator;
/** @typedef getAllCountries */
/**
 * @typedef getOptimalLocations
 * @property {LogisticApplicationModel.ReAssignStoreRequest} body
 */
/**
 * @typedef getPincodeCity
 * @property {string} pincode - A `pincode` contains a specific address of a location.
 */
/**
 * @typedef getPincodeZones
 * @property {LogisticApplicationModel.GetZoneFromPincodeViewRequest} body
 */
/**
 * @typedef getTatProduct
 * @property {LogisticApplicationModel.TATViewRequest} body
 */
declare class LogisticApplicationValidator {
}
declare namespace LogisticApplicationValidator {
    export { getAllCountries, getOptimalLocations, getPincodeCity, getPincodeZones, getTatProduct };
}
/** @returns {getAllCountries} */
declare function getAllCountries(): any;
type getAllCountries = any;
/** @returns {getOptimalLocations} */
declare function getOptimalLocations(): getOptimalLocations;
type getOptimalLocations = {
    body: LogisticApplicationModel.ReAssignStoreRequest;
};
/** @returns {getPincodeCity} */
declare function getPincodeCity(): getPincodeCity;
type getPincodeCity = {
    /**
     * - A `pincode` contains a specific address of a location.
     */
    pincode: string;
};
/** @returns {getPincodeZones} */
declare function getPincodeZones(): getPincodeZones;
type getPincodeZones = {
    body: LogisticApplicationModel.GetZoneFromPincodeViewRequest;
};
/** @returns {getTatProduct} */
declare function getTatProduct(): getTatProduct;
type getTatProduct = {
    body: LogisticApplicationModel.TATViewRequest;
};
import LogisticApplicationModel = require("./LogisticApplicationModel");
