export = Common;
declare class Common {
    constructor(config: any);
    config: any;
    /**
     * @param {CommonPlatformValidator.GetLocationsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommonPlatformModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description: Retrieve a list of countries, states, or cities based on the provided location_type and id parameters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/common/getLocations/).
     */
    getLocations({ locationType, id }?: CommonPlatformValidator.GetLocationsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommonPlatformModel.Locations>;
    /**
     * @param {CommonPlatformValidator.SearchApplicationParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommonPlatformModel.ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Search Application
     * @description: Provide application name or domain url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/common/searchApplication/).
     */
    searchApplication({ authorization, query }?: CommonPlatformValidator.SearchApplicationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CommonPlatformModel.ApplicationResponse>;
}
import CommonPlatformValidator = require("./CommonPlatformValidator");
import CommonPlatformModel = require("./CommonPlatformModel");
