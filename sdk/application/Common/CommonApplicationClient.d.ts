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
     * @param {CommonApplicationValidator.GetLocationsParam} arg - Arg object.
     * @returns {Promise<CommonApplicationModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description:
     */
    getLocations({ locationType, id }?: CommonApplicationValidator.GetLocationsParam): Promise<CommonApplicationModel.Locations>;
    /**
     * @param {CommonApplicationValidator.SearchApplicationParam} arg - Arg object.
     * @returns {Promise<CommonApplicationModel.ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Search Application
     * @description: Provide application name or domain url
     */
    searchApplication({ authorization, query }?: CommonApplicationValidator.SearchApplicationParam): Promise<CommonApplicationModel.ApplicationResponse>;
}
import CommonApplicationValidator = require("./CommonApplicationValidator");
import CommonApplicationModel = require("./CommonApplicationModel");
