export = CommonApplicationValidator;
/**
 * @typedef GetLocationsParam
 * @property {string} [locationType] - Provide location type to query on.
 *   Possible values : country, state, city.
 * @property {string} [id] - Field is optional when location_type is country. If
 *   querying for state, provide id of country. If querying for city, provide id
 *   of state.
 */
/**
 * @typedef SearchApplicationParam
 * @property {string} [authorization] - Basic auth string to access the api endpoint.
 * @property {string} [query] - Provide application name.
 */
declare class CommonApplicationValidator {
    /** @returns {GetLocationsParam} */
    static getLocations(): GetLocationsParam;
    /** @returns {SearchApplicationParam} */
    static searchApplication(): SearchApplicationParam;
}
declare namespace CommonApplicationValidator {
    export { GetLocationsParam, SearchApplicationParam };
}
type GetLocationsParam = {
    /**
     * - Provide location type to query on.
     * Possible values : country, state, city.
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
    /**
     * - Basic auth string to access the api endpoint.
     */
    authorization?: string;
    /**
     * - Provide application name.
     */
    query?: string;
};
