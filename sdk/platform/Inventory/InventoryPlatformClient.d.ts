export = Inventory;
declare class Inventory {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {JobConfigDTO} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeString>} - Success response
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config
     */
    createJob({ body }?: {
        body: JobConfigDTO;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeString>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationId - IntegrationId
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeString>} - Success response
     * @summary: Disable Job Config
     * @description: REST Endpoint that disables Inventory Job Config
     */
    disable({ integrationId }?: {
        integrationId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeString>;
    /**
     * @param {Object} arg - Arg object.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeListSlingshotConfigurationDetail>} -
     *   Success response
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company
     */
    getConfigByCompany({ headers }?: any): Promise<ResponseEnvelopeListSlingshotConfigurationDetail>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.code - Job Code
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeJobConfigDTO>} - Success response
     * @summary: Get Job Config By Code
     * @description: REST Endpoint that returns job config by code
     */
    getJobByCode({ code }?: {
        code: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationId - Integration Id
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeListJobConfigDTO>} - Success response
     * @summary: Get Job Configs By Company And Integration
     * @description: REST Endpoint that returns all job configs by company And integration
     */
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeListJobConfigDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.code - Code
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {string} [arg.status] - Status
     * @param {string} [arg.date] - From Date
     * @param {import("../PlatformAPIClient").Options} - Options
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
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeJobMetricsDto>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationId - Integration Id
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeListJobConfigListDTO>} - Success response
     * @summary: Get Job Codes By Company And Integration
     * @description: REST Endpoint that returns all job codes by company And integration
     */
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeListJobConfigListDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeJobConfigDTO>} - Success response
     * @summary: Get Job Configs Defaults
     * @description: REST Endpoint that returns default fields job configs by company And integration
     */
    getJobConfigDefaults({ headers }?: any): Promise<ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.jobId - Job Id
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeListJobStepsDTO>} - Success response
     * @summary: Get Job Code Steps
     * @description: REST Endpoint that returns Inventory Job Steps
     */
    getJobSteps({ jobId }?: {
        jobId: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeListJobStepsDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeListJobConfigRawDTO>} - Success response
     * @summary: Get Job Configs For A Company
     * @description: REST Endpoint that returns all job configs for a company
     */
    getJobsByCompany({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeListJobConfigRawDTO>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SuppressStorePayload} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeKafkaResponse>} - Success response
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company
     */
    suppressStores({ body }?: {
        body: SuppressStorePayload;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeKafkaResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {JobConfigDTO} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ResponseEnvelopeString>} - Success response
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config
     */
    updateJob({ body }?: {
        body: JobConfigDTO;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ResponseEnvelopeString>;
}
