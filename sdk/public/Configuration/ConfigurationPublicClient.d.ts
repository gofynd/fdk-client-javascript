export = Configuration;
declare class Configuration {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getLocations: string;
        searchApplication: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {ConfigurationPublicValidator.GetLocationsParam} arg - Arg object.
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPublicModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/getLocations/).
     */
    getLocations({ locationType, id }?: ConfigurationPublicValidator.GetLocationsParam, { headers }?: any): Promise<ConfigurationPublicModel.Locations>;
    /**
     * @param {ConfigurationPublicValidator.SearchApplicationParam} arg - Arg object.
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPublicModel.ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Search Application
     * @description: Provide application name or domain url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/searchApplication/).
     */
    searchApplication({ authorization, query }?: ConfigurationPublicValidator.SearchApplicationParam, { headers }?: any): Promise<ConfigurationPublicModel.ApplicationResponse>;
}
import ConfigurationPublicValidator = require("./ConfigurationPublicValidator");
import ConfigurationPublicModel = require("./ConfigurationPublicModel");
