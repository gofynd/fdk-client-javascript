export = Inventory;
declare class Inventory {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getApiKey: string;
        getConfigByApiKey: string;
        getJobByCode: string;
        getJobCodesMetrics: string;
        getJobConfigByIntegrationType: string;
        saveJobCodesMetrics: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {InventoryPublicValidator.GetApiKeyParam} arg - Arg object.
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeApikeyModel>} -
     *   Success response
     * @name getApiKey
     * @summary: Get apikey  for  Company  to call other Slingshot Configuration APIs
     * @description: REST Endpoint that returns apikey by username by password - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getApiKey/).
     */
    getApiKey({ userName, password }?: InventoryPublicValidator.GetApiKeyParam): Promise<InventoryPublicModel.ResponseEnvelopeApikeyModel>;
    /**
     * @param {InventoryPublicValidator.GetConfigByApiKeyParam} arg - Arg object.
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeSlingshotConfigurationDetail>}
     *   - Success response
     *
     * @name getConfigByApiKey
     * @summary: Get Slingshot Configuration Of  A Company using API key
     * @description: REST Endpoint that returns all configuration detail of a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getConfigByApiKey/).
     */
    getConfigByApiKey({ apikey }?: InventoryPublicValidator.GetConfigByApiKeyParam): Promise<InventoryPublicModel.ResponseEnvelopeSlingshotConfigurationDetail>;
    /**
     * @param {InventoryPublicValidator.GetJobByCodeParam} arg - Arg object.
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeJobConfigDTO>} -
     *   Success response
     * @name getJobByCode
     * @summary: Get Job Config By Code
     * @description: REST Endpoint that returns job config by code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getJobByCode/).
     */
    getJobByCode({ code }?: InventoryPublicValidator.GetJobByCodeParam): Promise<InventoryPublicModel.ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {InventoryPublicValidator.GetJobCodesMetricsParam} arg - Arg object.
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeObject>} - Success response
     * @name getJobCodesMetrics
     * @summary: Find all the JobCodes from Metrics Collection based on the field Values
     * @description: Endpoint to return all JobCodes present in Metrics Collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getJobCodesMetrics/).
     */
    getJobCodesMetrics({ dailyJob, jobCode }?: InventoryPublicValidator.GetJobCodesMetricsParam): Promise<InventoryPublicModel.ResponseEnvelopeObject>;
    /**
     * @param {InventoryPublicValidator.GetJobConfigByIntegrationTypeParam} arg
     *   - Arg object.
     *
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeListJobConfigDTO>}
     *   - Success response
     *
     * @name getJobConfigByIntegrationType
     * @summary: Get Job Configs By Integration Type
     * @description: REST Endpoint that returns all job Configs by Integration Type - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getJobConfigByIntegrationType/).
     */
    getJobConfigByIntegrationType({ integrationType, disable }?: InventoryPublicValidator.GetJobConfigByIntegrationTypeParam): Promise<InventoryPublicModel.ResponseEnvelopeListJobConfigDTO>;
    /**
     * @param {InventoryPublicValidator.SaveJobCodesMetricsParam} arg - Arg object.
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeEmailJobMetrics>}
     *   - Success response
     *
     * @name saveJobCodesMetrics
     * @summary: Save JobCode Metrics
     * @description: Endpoint to save JobCode Metrics - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/saveJobCodesMetrics/).
     */
    saveJobCodesMetrics({ body }?: InventoryPublicValidator.SaveJobCodesMetricsParam): Promise<InventoryPublicModel.ResponseEnvelopeEmailJobMetrics>;
}
import InventoryPublicValidator = require("./InventoryPublicValidator");
import InventoryPublicModel = require("./InventoryPublicModel");
