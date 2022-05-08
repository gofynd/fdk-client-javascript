export = PublicClient;
declare class PublicClient {
    constructor(config: any);
    config: any;
    configuration: Configuration;
    webhook: Webhook;
    inventory: Inventory;
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
declare class Inventory {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getConfigByApiKey: string;
        getApiKey: string;
        getJobByCode: string;
        getJobConfigByIntegrationType: string;
        getJobCodesMetrics: string;
        saveJobCodesMetrics: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.apikey - Api key
     * @returns {Promise<ResponseEnvelopeSlingshotConfigurationDetail>} - Success response
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company
     */
    getConfigByApiKey({ apikey }?: {
        apikey: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userName - Integration id
     * @param {string} arg.password - Company/store token
     * @returns {Promise<ResponseEnvelopeApikeyModel>} - Success response
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns apikey by username by password
     */
    getApiKey({ userName, password }?: {
        userName: string;
        password: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.code - Job Code
     * @returns {Promise<ResponseEnvelopeJobConfigDTO>} - Success response
     * @summary: Get Job Config By Code
     * @description: REST Endpoint that returns job config by code
     */
    getJobByCode({ code }?: {
        code: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationType - Integration Type
     * @param {boolean} [arg.disable] - JobConfig current state
     * @returns {Promise<ResponseEnvelopeListJobConfigDTO>} - Success response
     * @summary: Get Job Configs By Integration Type
     * @description: REST Endpoint that returns all job Configs by Integration Type
     */
    getJobConfigByIntegrationType({ integrationType, disable }?: {
        integrationType: string;
        disable?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.dailyJob] - Daily Job Flag
     * @param {string} [arg.jobCode] - Email Job Code
     * @returns {Promise<ResponseEnvelopeObject>} - Success response
     * @summary: Find all the JobCodes from Metrics Collection based on the field Values
     * @description: Endpoint to return all JobCodes present in Metrics Collection
     */
    getJobCodesMetrics({ dailyJob, jobCode }?: {
        dailyJob?: boolean;
        jobCode?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailJobMetrics} arg.body
     * @returns {Promise<ResponseEnvelopeEmailJobMetrics>} - Success response
     * @summary: Save JobCode Metrics
     * @description: Endpoint to save JobCode Metrics
     */
    saveJobCodesMetrics({ body }?: {
        body: any;
    }): Promise<any>;
}
