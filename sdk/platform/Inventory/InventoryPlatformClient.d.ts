export = Inventory;
declare class Inventory {
    constructor(config: any);
    config: any;
    /**
     * @param {InventoryPlatformValidator.CreateJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
     *   Success response
     * @name createJob
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/createJob/).
     */
    createJob({ body, requestHeaders }?: InventoryPlatformValidator.CreateJobParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeString>;
    /**
     * @param {InventoryPlatformValidator.DisableParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
     *   Success response
     * @name disable
     * @summary: Disable Job Config
     * @description: REST Endpoint that disables Inventory Job Config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/disable/).
     */
    disable({ integrationId, requestHeaders }?: InventoryPlatformValidator.DisableParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeString>;
    /**
     * @param {InventoryPlatformValidator.GetConfigByCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListSlingshotConfigurationDetail>}
     *   - Success response
     *
     * @name getConfigByCompany
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getConfigByCompany/).
     */
    getConfigByCompany({ requestHeaders }?: any, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeListSlingshotConfigurationDetail>;
    /**
     * @param {InventoryPlatformValidator.GetJobByCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>}
     *   - Success response
     *
     * @name getJobByCode
     * @summary: Get Job Config By Code
     * @description: REST Endpoint that returns job config by code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobByCode/).
     */
    getJobByCode({ code, requestHeaders }?: InventoryPlatformValidator.GetJobByCodeParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobByCompanyAndIntegrationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigDTO>}
     *   - Success response
     *
     * @name getJobByCompanyAndIntegration
     * @summary: Get Job Configs By Company And Integration
     * @description: REST Endpoint that returns all job configs by company And integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobByCompanyAndIntegration/).
     */
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize, requestHeaders }?: InventoryPlatformValidator.GetJobByCompanyAndIntegrationParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobCodeMetricsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobMetricsDto>}
     *   - Success response
     *
     * @name getJobCodeMetrics
     * @summary: Get Job Metrics
     * @description: REST Endpoint that returns Inventory Run History For A Job Code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobCodeMetrics/).
     */
    getJobCodeMetrics({ code, pageNo, pageSize, status, date, requestHeaders }?: InventoryPlatformValidator.GetJobCodeMetricsParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeJobMetricsDto>;
    /**
     * @param {InventoryPlatformValidator.GetJobCodesByCompanyAndIntegrationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigListDTO>}
     *   - Success response
     *
     * @name getJobCodesByCompanyAndIntegration
     * @summary: Get Job Codes By Company And Integration
     * @description: REST Endpoint that returns all job codes by company And integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobCodesByCompanyAndIntegration/).
     */
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize, requestHeaders }?: InventoryPlatformValidator.GetJobCodesByCompanyAndIntegrationParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigListDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobConfigDefaultsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>}
     *   - Success response
     *
     * @name getJobConfigDefaults
     * @summary: Get Job Configs Defaults
     * @description: REST Endpoint that returns default fields job configs by company And integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobConfigDefaults/).
     */
    getJobConfigDefaults({ requestHeaders }?: any, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobStepsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobStepsDTO>}
     *   - Success response
     *
     * @name getJobSteps
     * @summary: Get Job Code Steps
     * @description: REST Endpoint that returns Inventory Job Steps - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobSteps/).
     */
    getJobSteps({ jobId, requestHeaders }?: InventoryPlatformValidator.GetJobStepsParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeListJobStepsDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobsByCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigRawDTO>}
     *   - Success response
     *
     * @name getJobsByCompany
     * @summary: Get Job Configs For A Company
     * @description: REST Endpoint that returns all job configs for a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobsByCompany/).
     */
    getJobsByCompany({ pageNo, pageSize, requestHeaders }?: InventoryPlatformValidator.GetJobsByCompanyParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigRawDTO>;
    /**
     * @param {InventoryPlatformValidator.SuppressStoresParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeKafkaResponse>}
     *   - Success response
     *
     * @name suppressStores
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/suppressStores/).
     */
    suppressStores({ body, requestHeaders }?: InventoryPlatformValidator.SuppressStoresParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeKafkaResponse>;
    /**
     * @param {InventoryPlatformValidator.UpdateJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
     *   Success response
     * @name updateJob
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/updateJob/).
     */
    updateJob({ body, requestHeaders }?: InventoryPlatformValidator.UpdateJobParam, { responseHeaders }?: object): Promise<InventoryPlatformModel.ResponseEnvelopeString>;
}
import InventoryPlatformValidator = require("./InventoryPlatformValidator");
import InventoryPlatformModel = require("./InventoryPlatformModel");
