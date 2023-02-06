export = Inventory;
declare class Inventory {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getJobCodesMetrics: string;
        saveJobCodesMetrics: string;
        getConfigByApiKey: string;
        getApiKey: string;
        getJobByCode: string;
        getJobConfigByIntegrationType: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
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
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.apikey - Api key
     * @returns {Promise<ResponseEnvelopeSlingshotConfigurationDetail>} - Success response
     * @summary: Get Slingshot Configuration Of  A Company using API key
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
     * @summary: Get apikey  for  Company  to call other Slingshot Configuration APIs
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
}
