export = Common;
declare class Common {
    constructor(config: any);
    config: any;
    /**
     * @param {CommonPlatformValidator.GetLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommonPlatformModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description: Retrieve a list of countries, states, or cities based on the provided location_type and id parameters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/common/getLocations/).
     */
    getLocations({ locationType, id, requestHeaders }?: CommonPlatformValidator.GetLocationsParam, { responseHeaders }?: object): Promise<CommonPlatformModel.Locations>;
    /**
     * @param {CommonPlatformValidator.SearchApplicationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CommonPlatformModel.ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Search Application
     * @description: Provide application name or domain url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/common/searchApplication/).
     */
    searchApplication({ authorization, query, requestHeaders }?: CommonPlatformValidator.SearchApplicationParam, { responseHeaders }?: object): Promise<CommonPlatformModel.ApplicationResponse>;
}
import CommonPlatformValidator = require("./CommonPlatformValidator");
import CommonPlatformModel = require("./CommonPlatformModel");
