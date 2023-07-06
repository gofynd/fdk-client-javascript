export = Common;
declare class Common {
    constructor(config: any);
    config: any;
    /**
     * @param {CommonPlatformValidator.GetLocationsParam} arg - Arg object
     * @returns {Promise<CommonPlatformModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description:
     */
    getLocations({ locationType, id }?: CommonPlatformValidator.GetLocationsParam): Promise<CommonPlatformModel.Locations>;
    /**
     * @param {CommonPlatformValidator.SearchApplicationParam} arg - Arg object
     * @returns {Promise<CommonPlatformModel.ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Search Application
     * @description: Provide application name or domain url
     */
    searchApplication({ authorization, query }?: CommonPlatformValidator.SearchApplicationParam): Promise<CommonPlatformModel.ApplicationResponse>;
}
import CommonPlatformValidator = require("./CommonPlatformValidator");
import CommonPlatformModel = require("./CommonPlatformModel");
