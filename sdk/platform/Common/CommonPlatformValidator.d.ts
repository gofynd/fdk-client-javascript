export = CommonPlatformValidator;
/**
 * @typedef GetLocationsParam
 * @property {string} [locationType]
 * @property {string} [id] - Field is optional when location_type is country. If
 *   querying for state, provide id of the country. If querying for city,
 *   provide id of the state.
 */
/**
 * @typedef SearchApplicationParam
 * @property {string} [authorization]
 * @property {string} [query] - Provide application name
 */
declare class CommonPlatformValidator {
    /** @returns {GetLocationsParam} */
    static getLocations(): GetLocationsParam;
    /** @returns {SearchApplicationParam} */
    static searchApplication(): SearchApplicationParam;
}
declare namespace CommonPlatformValidator {
    export { GetLocationsParam, SearchApplicationParam };
}
type GetLocationsParam = {
    locationType?: string;
    /**
     * - Field is optional when location_type is country. If
     * querying for state, provide id of the country. If querying for city,
     * provide id of the state.
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
