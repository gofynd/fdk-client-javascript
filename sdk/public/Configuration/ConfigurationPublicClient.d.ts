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
     * @returns {Promise<ConfigurationPublicModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description: Get Location configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/getLocations/).
     */
    getLocations({ locationType, id }?: ConfigurationPublicValidator.GetLocationsParam): Promise<ConfigurationPublicModel.Locations>;
    /**
     * @param {ConfigurationPublicValidator.SearchApplicationParam} arg - Arg object.
     * @returns {Promise<ConfigurationPublicModel.ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Search Application
     * @description: Provide application name or domain url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/searchApplication/).
     */
    searchApplication({ authorization, query }?: ConfigurationPublicValidator.SearchApplicationParam): Promise<ConfigurationPublicModel.ApplicationResponse>;
}
import ConfigurationPublicValidator = require("./ConfigurationPublicValidator");
import ConfigurationPublicModel = require("./ConfigurationPublicModel");
