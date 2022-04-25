export = PublicClient;
declare class PublicClient {
    constructor(config: any);
    config: any;
    configuration: Configuration;
    webhook: Webhook;
}
declare class Configuration {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        searchApplication: string;
        getLocations: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.authorization] -
     * @param {string} [arg.query] - Provide application name
     * @returns {Promise<ApplicationResponse>} - Success response
     * @summary: Search Application
     * @description: Provide application name or domain url
     */
    searchApplication({ authorization, query }?: {
        authorization?: string;
        query?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.locationType] - Provide location type to query on.
     *   Possible values : country, state, city
     * @param {string} [arg.id] - Field is optional when location_type is
     *   country. If querying for state, provide id of country. If querying for
     *   city, provide id of state.
     * @returns {Promise<Locations>} - Success response
     * @summary: Get countries, states, cities
     * @description:
     */
    getLocations({ locationType, id }?: {
        locationType?: string;
        id?: string;
    }): Promise<any>;
}
declare class Webhook {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        fetchAllWebhookEvents: string;
        queryWebhookEventDetails: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<EventConfigResponse>} - Success response
     * @summary: Get All Webhook Events
     * @description: Get All Webhook Events
     */
    fetchAllWebhookEvents({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EventConfigBase[]} arg.body
     * @returns {Promise<EventConfigResponse>} - Success response
     * @summary: Send webhook event name, type, version, category in request body to get complete details of event from server
     * @description: Get Webhook Event Details for provided events
     */
    queryWebhookEventDetails({ body }?: {
        body: any[];
    }): Promise<any>;
}
