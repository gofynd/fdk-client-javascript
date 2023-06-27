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
     * @param {ConfigurationPublicValidator.getLocations} arg - Arg object.
     * @returns {Promise<ConfigurationPublicModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description:
     */
    getLocations({ locationType, id }?: ConfigurationPublicValidator.getLocations): Promise<ConfigurationPublicModel.Locations>;
    /**
     * @param {ConfigurationPublicValidator.searchApplication} arg - Arg object.
     * @returns {Promise<ConfigurationPublicModel.ApplicationResponse>} - Success response
     * @name searchApplication
     * @summary: Search Application
     * @description: Provide application name or domain url
     */
    searchApplication({ authorization, query }?: ConfigurationPublicValidator.searchApplication): Promise<ConfigurationPublicModel.ApplicationResponse>;
}
import ConfigurationPublicValidator = require("./ConfigurationPublicValidator");
import ConfigurationPublicModel = require("./ConfigurationPublicModel");
