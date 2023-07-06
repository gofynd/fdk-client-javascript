export = InventoryPublicValidator;
/**
 * @typedef GetApiKeyParam
 * @property {string} userName - Integration id
 * @property {string} password - Company/store token
 */
/**
 * @typedef GetConfigByApiKeyParam
 * @property {string} apikey - Api key
 */
/**
 * @typedef GetJobByCodeParam
 * @property {string} code - Job Code
 */
/**
 * @typedef GetJobCodesMetricsParam
 * @property {boolean} [dailyJob] - Daily Job Flag
 * @property {string} [jobCode] - Email Job Code
 */
/**
 * @typedef GetJobConfigByIntegrationTypeParam
 * @property {string} integrationType - Integration Type
 * @property {boolean} [disable] - JobConfig current state
 */
/**
 * @typedef SaveJobCodesMetricsParam
 * @property {InventoryPublicModel.EmailJobMetrics} body
 */
declare class InventoryPublicValidator {
    /** @returns {getApiKey} */
    static getApiKey(): getApiKey;
    /** @returns {getConfigByApiKey} */
    static getConfigByApiKey(): getConfigByApiKey;
    /** @returns {getJobByCode} */
    static getJobByCode(): getJobByCode;
    /** @returns {getJobCodesMetrics} */
    static getJobCodesMetrics(): getJobCodesMetrics;
    /** @returns {getJobConfigByIntegrationType} */
    static getJobConfigByIntegrationType(): getJobConfigByIntegrationType;
    /** @returns {saveJobCodesMetrics} */
    static saveJobCodesMetrics(): saveJobCodesMetrics;
}
declare namespace InventoryPublicValidator {
    export { GetApiKeyParam, GetConfigByApiKeyParam, GetJobByCodeParam, GetJobCodesMetricsParam, GetJobConfigByIntegrationTypeParam, SaveJobCodesMetricsParam };
}
type GetApiKeyParam = {
    /**
     * - Integration id
     */
    userName: string;
    /**
     * - Company/store token
     */
    password: string;
};
type GetConfigByApiKeyParam = {
    /**
     * - Api key
     */
    apikey: string;
};
type GetJobByCodeParam = {
    /**
     * - Job Code
     */
    code: string;
};
type GetJobCodesMetricsParam = {
    /**
     * - Daily Job Flag
     */
    dailyJob?: boolean;
    /**
     * - Email Job Code
     */
    jobCode?: string;
};
type GetJobConfigByIntegrationTypeParam = {
    /**
     * - Integration Type
     */
    integrationType: string;
    /**
     * - JobConfig current state
     */
    disable?: boolean;
};
type SaveJobCodesMetricsParam = {
    body: InventoryPublicModel.EmailJobMetrics;
};
import InventoryPublicModel = require("./InventoryPublicModel");
