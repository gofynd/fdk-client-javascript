export = Configuration;
declare class Configuration {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        checkVersionIsUpToDate: string;
        getLocations: string;
        searchApplication: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {ConfigurationPublicValidator.CheckVersionIsUpToDateParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPublicModel.VersionResponse>} - Success response
     * @name checkVersionIsUpToDate
     * @summary: Check application version
     * @description: Check if the application version is up to date. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/checkVersionIsUpToDate/).
     */
    checkVersionIsUpToDate({ body, requestHeaders }?: ConfigurationPublicValidator.CheckVersionIsUpToDateParam, { responseHeaders }?: object): Promise<ConfigurationPublicModel.VersionResponse>;
    /**
     * @param {ConfigurationPublicValidator.GetLocationsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPublicModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description: Get Location configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/getLocations/).
     */
    getLocations({ locationType, id, requestHeaders }?: ConfigurationPublicValidator.GetLocationsParam, { responseHeaders }?: object): Promise<ConfigurationPublicModel.Locations>;
    /**
     * @param {ConfigurationPublicValidator.SearchApplicationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPublicModel.ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Search application.
     * @description: Provide application name or domain url. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/searchApplication/).
     */
    searchApplication({ authorization, query, requestHeaders }?: ConfigurationPublicValidator.SearchApplicationParam, { responseHeaders }?: object): Promise<ConfigurationPublicModel.ApplicationResponse>;
}
import ConfigurationPublicValidator = require("./ConfigurationPublicValidator");
import ConfigurationPublicModel = require("./ConfigurationPublicModel");
