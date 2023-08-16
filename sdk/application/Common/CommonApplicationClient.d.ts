export = Common;
declare class Common {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getLocations: string;
        searchApplication: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.locationType] - Provide location type to query on.
     *   Possible values : country, state, city
     * @param {string} [arg.id] - Field is optional when location_type is
     *   country. If querying for state, provide id of country. If querying for
     *   city, provide id of state.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Locations>} - Success response
     * @summary: Get countries, states, cities
     * @description: Get countries, states, cities
     */
    getLocations({ locationType, id }?: {
        locationType?: string;
        id?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<Locations>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.authorization] -
     * @param {string} [arg.query] - Provide application name
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ApplicationResponse>} - Success response
     * @summary: Search Application
     * @description: Provide application name or domain url
     */
    searchApplication({ authorization, query }?: {
        authorization?: string;
        query?: string;
    }, { headers }?: import("../ApplicationAPIClient").Options): Promise<ApplicationResponse>;
}
