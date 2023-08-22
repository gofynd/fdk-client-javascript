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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommonApplicationModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description: Get countries, states, cities - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/common/getLocations/).
     */
    getLocations({ locationType, id, requestHeaders }?: CommonApplicationValidator.GetLocationsParam, { responseHeaders }?: object): Promise<CommonApplicationModel.Locations>;
    /**
     * @param {CommonApplicationValidator.SearchApplicationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CommonApplicationModel.ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Search Application
     * @description: Provide application name or domain url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/common/searchApplication/).
     */
    searchApplication({ authorization, query, requestHeaders }?: CommonApplicationValidator.SearchApplicationParam, { responseHeaders }?: object): Promise<CommonApplicationModel.ApplicationResponse>;
}
import CommonApplicationValidator = require("./CommonApplicationValidator");
import CommonApplicationModel = require("./CommonApplicationModel");
