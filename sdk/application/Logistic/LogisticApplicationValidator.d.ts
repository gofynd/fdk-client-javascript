export = LogisticApplicationValidator;
/** @typedef GetAllCountriesParam */
/** @typedef GetCountriesParam */
/**
 * @typedef GetCountryParam
 * @property {string} uid - A `uid` contains a specific unique name of a region.
 */
/**
 * @typedef GetLocalitiesParam
 * @property {string} region - A `region` contains a specific unique name.
 */
/**
 * @typedef GetLocalityParam
 * @property {string} region - A `region` contains a specific unique name.
 * @property {string} value - A `value` contains a specific value of the region.
 */
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
    /** @returns {GetAllCountriesParam} */
    static getAllCountries(): any;
    /** @returns {GetCountriesParam} */
    static getCountries(): any;
    /** @returns {GetCountryParam} */
    static getCountry(): GetCountryParam;
    /** @returns {GetLocalitiesParam} */
    static getLocalities(): GetLocalitiesParam;
    /** @returns {GetLocalityParam} */
    static getLocality(): GetLocalityParam;
    /** @returns {GetOptimalLocationsParam} */
    static getOptimalLocations(): GetOptimalLocationsParam;
    /** @returns {GetPincodeCityParam} */
    static getPincodeCity(): GetPincodeCityParam;
    /** @returns {GetPincodeZonesParam} */
    static getPincodeZones(): GetPincodeZonesParam;
    /** @returns {GetTatProductParam} */
    static getTatProduct(): GetTatProductParam;
}
declare namespace LogisticApplicationValidator {
    export { GetAllCountriesParam, GetCountriesParam, GetCountryParam, GetLocalitiesParam, GetLocalityParam, GetOptimalLocationsParam, GetPincodeCityParam, GetPincodeZonesParam, GetTatProductParam };
}
type GetCountryParam = {
    /**
     * - A `uid` contains a specific unique name of a region.
     */
    uid: string;
};
type GetLocalitiesParam = {
    /**
     * - A `region` contains a specific unique name.
     */
    region: string;
};
type GetLocalityParam = {
    /**
     * - A `region` contains a specific unique name.
     */
    region: string;
    /**
     * - A `value` contains a specific value of the region.
     */
    value: string;
};
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
type GetAllCountriesParam = any;
type GetCountriesParam = any;
import LogisticApplicationModel = require("./LogisticApplicationModel");
