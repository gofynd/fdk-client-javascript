export = Inventory;
declare class Inventory {
    constructor(config: any);
    config: any;
    /**
     * @param {InventoryPlatformValidator.createJob} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
     *   Success response
     * @name createJob
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config
     */
    createJob({ body }?: InventoryPlatformValidator.createJob): Promise<InventoryPlatformModel.ResponseEnvelopeString>;
    /**
     * @param {InventoryPlatformValidator.disable} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
     *   Success response
     * @name disable
     * @summary: Disable Job Config
     * @description: REST Endpoint that disables Inventory Job Config
     */
    disable({ integrationId }?: InventoryPlatformValidator.disable): Promise<InventoryPlatformModel.ResponseEnvelopeString>;
    /**
     * @param {InventoryPlatformValidator.getConfigByCompany} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListSlingshotConfigurationDetail>}
     *   - Success response
     *
     * @name getConfigByCompany
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company
     */
    getConfigByCompany({}?: any): Promise<InventoryPlatformModel.ResponseEnvelopeListSlingshotConfigurationDetail>;
    /**
     * @param {InventoryPlatformValidator.getJobByCode} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>}
     *   - Success response
     *
     * @name getJobByCode
     * @summary: Get Job Config By Code
     * @description: REST Endpoint that returns job config by code
     */
    getJobByCode({ code }?: InventoryPlatformValidator.getJobByCode): Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {InventoryPlatformValidator.getJobByCompanyAndIntegration} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigDTO>}
     *   - Success response
     *
     * @name getJobByCompanyAndIntegration
     * @summary: Get Job Configs By Company And Integration
     * @description: REST Endpoint that returns all job configs by company And integration
     */
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize, }?: InventoryPlatformValidator.getJobByCompanyAndIntegration): Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigDTO>;
    /**
     * @param {InventoryPlatformValidator.getJobCodeMetrics} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobMetricsDto>}
     *   - Success response
     *
     * @name getJobCodeMetrics
     * @summary: Get Job Metrics
     * @description: REST Endpoint that returns Inventory Run History For A Job Code
     */
    getJobCodeMetrics({ code, pageNo, pageSize, status, date }?: InventoryPlatformValidator.getJobCodeMetrics): Promise<InventoryPlatformModel.ResponseEnvelopeJobMetricsDto>;
    /**
     * @param {InventoryPlatformValidator.getJobCodesByCompanyAndIntegration} arg
     *   - Arg object
     *
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigListDTO>}
     *   - Success response
     *
     * @name getJobCodesByCompanyAndIntegration
     * @summary: Get Job Codes By Company And Integration
     * @description: REST Endpoint that returns all job codes by company And integration
     */
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize, }?: InventoryPlatformValidator.getJobCodesByCompanyAndIntegration): Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigListDTO>;
    /**
     * @param {InventoryPlatformValidator.getJobConfigDefaults} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>}
     *   - Success response
     *
     * @name getJobConfigDefaults
     * @summary: Get Job Configs Defaults
     * @description: REST Endpoint that returns default fields job configs by company And integration
     */
    getJobConfigDefaults({}?: any): Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {InventoryPlatformValidator.getJobSteps} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobStepsDTO>}
     *   - Success response
     *
     * @name getJobSteps
     * @summary: Get Job Code Steps
     * @description: REST Endpoint that returns Inventory Job Steps
     */
    getJobSteps({ jobId }?: InventoryPlatformValidator.getJobSteps): Promise<InventoryPlatformModel.ResponseEnvelopeListJobStepsDTO>;
    /**
     * @param {InventoryPlatformValidator.getJobsByCompany} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigRawDTO>}
     *   - Success response
     *
     * @name getJobsByCompany
     * @summary: Get Job Configs For A Company
     * @description: REST Endpoint that returns all job configs for a company
     */
    getJobsByCompany({ pageNo, pageSize }?: InventoryPlatformValidator.getJobsByCompany): Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigRawDTO>;
    /**
     * @param {InventoryPlatformValidator.suppressStores} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeKafkaResponse>}
     *   - Success response
     *
     * @name suppressStores
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company
     */
    suppressStores({ body }?: InventoryPlatformValidator.suppressStores): Promise<InventoryPlatformModel.ResponseEnvelopeKafkaResponse>;
    /**
     * @param {InventoryPlatformValidator.updateJob} arg - Arg object
     * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
     *   Success response
     * @name updateJob
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config
     */
    updateJob({ body }?: InventoryPlatformValidator.updateJob): Promise<InventoryPlatformModel.ResponseEnvelopeString>;
}
import InventoryPlatformValidator = require("./InventoryPlatformValidator");
import InventoryPlatformModel = require("./InventoryPlatformModel");
