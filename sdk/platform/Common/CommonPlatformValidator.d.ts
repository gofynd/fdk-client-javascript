export = CommonPlatformValidator;
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
declare class CommonPlatformValidator {
    /** @returns {getLocations} */
    static getLocations(): getLocations;
    /** @returns {searchApplication} */
    static searchApplication(): searchApplication;
}
declare namespace CommonPlatformValidator {
    export { GetLocationsParam, SearchApplicationParam };
}
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
