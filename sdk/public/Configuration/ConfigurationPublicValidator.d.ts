export = ConfigurationPublicValidator;
/**
 * @typedef getLocations
 * @property {string} [locationType] - Provide location type to query on.
 *   Possible values : country, state, city
 * @property {string} [id] - Field is optional when location_type is country. If
 *   querying for state, provide id of country. If querying for city, provide id
 *   of state.
 */
/**
 * @typedef searchApplication
 * @property {string} [authorization]
 * @property {string} [query] - Provide application name
 */
declare class ConfigurationPublicValidator {
}
declare namespace ConfigurationPublicValidator {
    export { getLocations, searchApplication };
}
/** @returns {getLocations} */
declare function getLocations(): getLocations;
type getLocations = {
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
/** @returns {searchApplication} */
declare function searchApplication(): searchApplication;
type searchApplication = {
    authorization?: string;
    /**
     * - Provide application name
     */
    query?: string;
};
