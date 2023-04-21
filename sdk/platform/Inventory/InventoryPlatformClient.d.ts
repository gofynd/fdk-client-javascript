export = Inventory;
declare class Inventory {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {JobConfigDTO} arg.body
     * @returns {Promise<ResponseEnvelopeString>} - Success response
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config
     */
    createJob({ body }?: {
        body: JobConfigDTO;
    }): Promise<ResponseEnvelopeString>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationId - IntegrationId
     * @returns {Promise<ResponseEnvelopeString>} - Success response
     * @summary: Disable Job Config
     * @description: REST Endpoint that disables Inventory Job Config
     */
    disable({ integrationId }?: {
        integrationId: string;
    }): Promise<ResponseEnvelopeString>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ResponseEnvelopeListSlingshotConfigurationDetail>} -
     *   Success response
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company
     */
    getConfigByCompany({}?: any): Promise<ResponseEnvelopeListSlingshotConfigurationDetail>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.code - Job Code
     * @returns {Promise<ResponseEnvelopeJobConfigDTO>} - Success response
     * @summary: Get Job Config By Code
     * @description: REST Endpoint that returns job config by code
     */
    getJobByCode({ code }?: {
        code: string;
    }): Promise<ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationId - Integration Id
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @returns {Promise<ResponseEnvelopeListJobConfigDTO>} - Success response
     * @summary: Get Job Configs By Company And Integration
     * @description: REST Endpoint that returns all job configs by company And integration
     */
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize, }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<ResponseEnvelopeListJobConfigDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.code - Code
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {string} [arg.status] - Status
     * @param {string} [arg.date] - From Date
     * @returns {Promise<ResponseEnvelopeJobMetricsDto>} - Success response
     * @summary: Get Job Metrics
     * @description: REST Endpoint that returns Inventory Run History For A Job Code
     */
    getJobCodeMetrics({ code, pageNo, pageSize, status, date }?: {
        code: string;
        pageNo?: number;
        pageSize?: number;
        status?: string;
        date?: string;
    }): Promise<ResponseEnvelopeJobMetricsDto>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationId - Integration Id
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @returns {Promise<ResponseEnvelopeListJobConfigListDTO>} - Success response
     * @summary: Get Job Codes By Company And Integration
     * @description: REST Endpoint that returns all job codes by company And integration
     */
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize, }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<ResponseEnvelopeListJobConfigListDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ResponseEnvelopeJobConfigDTO>} - Success response
     * @summary: Get Job Configs Defaults
     * @description: REST Endpoint that returns default fields job configs by company And integration
     */
    getJobConfigDefaults({}?: any): Promise<ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.jobId - Job Id
     * @returns {Promise<ResponseEnvelopeListJobStepsDTO>} - Success response
     * @summary: Get Job Code Steps
     * @description: REST Endpoint that returns Inventory Job Steps
     */
    getJobSteps({ jobId }?: {
        jobId: number;
    }): Promise<ResponseEnvelopeListJobStepsDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @returns {Promise<ResponseEnvelopeListJobConfigRawDTO>} - Success response
     * @summary: Get Job Configs For A Company
     * @description: REST Endpoint that returns all job configs for a company
     */
    getJobsByCompany({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<ResponseEnvelopeListJobConfigRawDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SuppressStorePayload} arg.body
     * @returns {Promise<ResponseEnvelopeKafkaResponse>} - Success response
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company
     */
    suppressStores({ body }?: {
        body: SuppressStorePayload;
    }): Promise<ResponseEnvelopeKafkaResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {JobConfigDTO} arg.body
     * @returns {Promise<ResponseEnvelopeString>} - Success response
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config
     */
    updateJob({ body }?: {
        body: JobConfigDTO;
    }): Promise<ResponseEnvelopeString>;
}
