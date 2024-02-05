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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeApikeyModel>} -
     *   Success response
     * @name getApiKey
     * @summary: Get apikey  for  Company  to call other Slingshot Configuration APIs
     * @description: REST Endpoint that returns apikey by username by password - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getApiKey/).
     */
    getApiKey({ userName, password, requestHeaders }?: InventoryPublicValidator.GetApiKeyParam, { responseHeaders }?: object): Promise<InventoryPublicModel.ResponseEnvelopeApikeyModel>;
    /**
     * @param {InventoryPublicValidator.GetConfigByApiKeyParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeSlingshotConfigurationDetail>}
     *   - Success response
     *
     * @name getConfigByApiKey
     * @summary: Get Slingshot Configuration Of  A Company using API key
     * @description: REST Endpoint that returns all configuration detail of a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getConfigByApiKey/).
     */
    getConfigByApiKey({ apikey, requestHeaders }?: InventoryPublicValidator.GetConfigByApiKeyParam, { responseHeaders }?: object): Promise<InventoryPublicModel.ResponseEnvelopeSlingshotConfigurationDetail>;
    /**
     * @param {InventoryPublicValidator.GetJobByCodeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeJobConfigDTO>} -
     *   Success response
     * @name getJobByCode
     * @summary: Get Job Config By Code
     * @description: REST Endpoint that returns job config by code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getJobByCode/).
     */
    getJobByCode({ code, requestHeaders }?: InventoryPublicValidator.GetJobByCodeParam, { responseHeaders }?: object): Promise<InventoryPublicModel.ResponseEnvelopeJobConfigDTO>;
    /**
     * @param {InventoryPublicValidator.GetJobCodesMetricsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeObject>} - Success response
     * @name getJobCodesMetrics
     * @summary: Find all the JobCodes from Metrics Collection based on the field Values
     * @description: Endpoint to return all JobCodes present in Metrics Collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getJobCodesMetrics/).
     */
    getJobCodesMetrics({ dailyJob, jobCode, requestHeaders }?: InventoryPublicValidator.GetJobCodesMetricsParam, { responseHeaders }?: object): Promise<InventoryPublicModel.ResponseEnvelopeObject>;
    /**
     * @param {InventoryPublicValidator.GetJobConfigByIntegrationTypeParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeListJobConfigDTO>}
     *   - Success response
     *
     * @name getJobConfigByIntegrationType
     * @summary: Get Job Configs By Integration Type
     * @description: REST Endpoint that returns all job Configs by Integration Type - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getJobConfigByIntegrationType/).
     */
    getJobConfigByIntegrationType({ integrationType, disable, requestHeaders }?: InventoryPublicValidator.GetJobConfigByIntegrationTypeParam, { responseHeaders }?: object): Promise<InventoryPublicModel.ResponseEnvelopeListJobConfigDTO>;
    /**
     * @param {InventoryPublicValidator.SaveJobCodesMetricsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<InventoryPublicModel.ResponseEnvelopeEmailJobMetrics>}
     *   - Success response
     *
     * @name saveJobCodesMetrics
     * @summary: Save JobCode Metrics
     * @description: Endpoint to save JobCode Metrics - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/saveJobCodesMetrics/).
     */
    saveJobCodesMetrics({ body, requestHeaders }?: InventoryPublicValidator.SaveJobCodesMetricsParam, { responseHeaders }?: object): Promise<InventoryPublicModel.ResponseEnvelopeEmailJobMetrics>;
}
import InventoryPublicValidator = require("sdk/output/javascript/code/sdk/public/Inventory/InventoryPublicValidator");
import InventoryPublicModel = require("sdk/output/javascript/code/sdk/public/Inventory/InventoryPublicModel");
