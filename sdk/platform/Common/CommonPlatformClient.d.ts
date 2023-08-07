export = Common;
declare class Common {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.locationType] -
     * @param {string} [arg.id] - Field is optional when location_type is
     *   country. If querying for state, provide id of the country. If querying
     *   for city, provide id of the state.
     * @returns {Promise<Locations>} - Success response
     * @summary: Get countries, states, cities
     * @description: Retrieve a list of countries, states, or cities based on the provided location_type and id parameters.
     */
    getLocations({ locationType, id }?: {
        locationType?: string;
        id?: string;
    }): Promise<Locations>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.authorization] -
     * @param {string} [arg.query] - Provide application name
     * @returns {Promise<ApplicationResponse>} - Success response
     * @summary: Search Application
     * @description: Provide application name or domain url
     */
    searchApplication({ authorization, query }?: {
        authorization?: string;
        query?: string;
    }): Promise<ApplicationResponse>;
}
