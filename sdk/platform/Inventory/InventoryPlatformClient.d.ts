export = Inventory;
declare class Inventory {
    constructor(config: any);
    config: any;
    /**
     * @param {InventoryPlatformValidator.CreateJobParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
     *   Success response
     * @name createJob
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/createJob/).
     */
    createJob({ body }?: InventoryPlatformValidator.CreateJobParam): Promise<InventoryPlatformModel.ResponseEnvelopeString>;
    /**
     * @param {InventoryPlatformValidator.DisableParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
     *   Success response
     * @name disable
     * @summary: Disable Job Config
     * @description: REST Endpoint that disables Inventory Job Config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/disable/).
     */
    disable({ integrationId }?: InventoryPlatformValidator.DisableParam): Promise<InventoryPlatformModel.ResponseEnvelopeString>;
    /**
     * @param {InventoryPlatformValidator.GetConfigByCompanyParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListSlingshotConfigurationDetail>}
     *   - Success response
     *
     * @name getConfigByCompany
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getConfigByCompany/).
     */
    getConfigByCompany({}?: any): Promise<InventoryPlatformModel.ResponseEnvelopeListSlingshotConfigurationDetail>;
    /**
     * @param {InventoryPlatformValidator.GetJobByCodeParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>}
     *   - Success response
     *
     * @name getJobByCode
     * @summary: Get Job Config By Code
     * @description: REST Endpoint that returns job config by code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobByCode/).
     */
    getJobByCode({ code }?: InventoryPlatformValidator.GetJobByCodeParam): Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobByCompanyAndIntegrationParam} arg
     *   - Arg object
     *
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigDTO>}
     *   - Success response
     *
     * @name getJobByCompanyAndIntegration
     * @summary: Get Job Configs By Company And Integration
     * @description: REST Endpoint that returns all job configs by company And integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobByCompanyAndIntegration/).
     */
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize, }?: InventoryPlatformValidator.GetJobByCompanyAndIntegrationParam): Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobCodeMetricsParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobMetricsDto>}
     *   - Success response
     *
     * @name getJobCodeMetrics
     * @summary: Get Job Metrics
     * @description: REST Endpoint that returns Inventory Run History For A Job Code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobCodeMetrics/).
     */
    getJobCodeMetrics({ code, pageNo, pageSize, status, date }?: InventoryPlatformValidator.GetJobCodeMetricsParam): Promise<InventoryPlatformModel.ResponseEnvelopeJobMetricsDto>;
    /**
     * @param {InventoryPlatformValidator.GetJobCodesByCompanyAndIntegrationParam} arg
     *   - Arg object
     *
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigListDTO>}
     *   - Success response
     *
     * @name getJobCodesByCompanyAndIntegration
     * @summary: Get Job Codes By Company And Integration
     * @description: REST Endpoint that returns all job codes by company And integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobCodesByCompanyAndIntegration/).
     */
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize, }?: InventoryPlatformValidator.GetJobCodesByCompanyAndIntegrationParam): Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigListDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobConfigDefaultsParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>}
     *   - Success response
     *
     * @name getJobConfigDefaults
     * @summary: Get Job Configs Defaults
     * @description: REST Endpoint that returns default fields job configs by company And integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobConfigDefaults/).
     */
    getJobConfigDefaults({}?: any): Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobStepsParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobStepsDTO>}
     *   - Success response
     *
     * @name getJobSteps
     * @summary: Get Job Code Steps
     * @description: REST Endpoint that returns Inventory Job Steps - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobSteps/).
     */
    getJobSteps({ jobId }?: InventoryPlatformValidator.GetJobStepsParam): Promise<InventoryPlatformModel.ResponseEnvelopeListJobStepsDTO>;
    /**
     * @param {InventoryPlatformValidator.GetJobsByCompanyParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigRawDTO>}
     *   - Success response
     *
     * @name getJobsByCompany
     * @summary: Get Job Configs For A Company
     * @description: REST Endpoint that returns all job configs for a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobsByCompany/).
     */
    getJobsByCompany({ pageNo, pageSize }?: InventoryPlatformValidator.GetJobsByCompanyParam): Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigRawDTO>;
    /**
     * @param {InventoryPlatformValidator.SuppressStoresParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeKafkaResponse>}
     *   - Success response
     *
     * @name suppressStores
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/suppressStores/).
     */
    suppressStores({ body }?: InventoryPlatformValidator.SuppressStoresParam): Promise<InventoryPlatformModel.ResponseEnvelopeKafkaResponse>;
    /**
     * @param {InventoryPlatformValidator.UpdateJobParam} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
     *   Success response
     * @name updateJob
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/updateJob/).
     */
    updateJob({ body }?: InventoryPlatformValidator.UpdateJobParam): Promise<InventoryPlatformModel.ResponseEnvelopeString>;
}
import InventoryPlatformValidator = require("./InventoryPlatformValidator");
import InventoryPlatformModel = require("./InventoryPlatformModel");
