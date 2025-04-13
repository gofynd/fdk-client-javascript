export = ConfigurationPublicValidator;
/**
 * @typedef CheckVersionIsUpToDateParam
 * @property {ConfigurationPublicModel.VersionRequest} body
 */
/**
 * @typedef GetLocationsParam
 * @property {string} [locationType] - Provide location type to query on.
 *   Possible values : country, state, city
 * @property {string} [id] - Field is optional when location_type is country. If
 *   querying for state, provide id of country. If querying for city, provide id
 *   of state.
 */
/**
 * @typedef SearchApplicationParam
 * @property {string} [authorization]
 * @property {string} [query] - Provide application name
 */
declare class ConfigurationPublicValidator {
    /** @returns {CheckVersionIsUpToDateParam} */
    static checkVersionIsUpToDate(): CheckVersionIsUpToDateParam;
    /** @returns {GetLocationsParam} */
    static getLocations(): GetLocationsParam;
    /** @returns {SearchApplicationParam} */
    static searchApplication(): SearchApplicationParam;
}
declare namespace ConfigurationPublicValidator {
    export { CheckVersionIsUpToDateParam, GetLocationsParam, SearchApplicationParam };
}
type CheckVersionIsUpToDateParam = {
    body: ConfigurationPublicModel.VersionRequest;
};
type GetLocationsParam = {
    /**
     * - Provide location type to query on.
     * Possible values : country, state, city
     */
    locationType?: string;
    /**
     * - Field is optional when location_type is country. If
     * querying for state, provide id of country. If querying for city, provide id
     * of state.
     */
    id?: string;
};
type SearchApplicationParam = {
    authorization?: string;
    /**
     * - Provide application name
     */
    query?: string;
};
import ConfigurationPublicModel = require("./ConfigurationPublicModel");
