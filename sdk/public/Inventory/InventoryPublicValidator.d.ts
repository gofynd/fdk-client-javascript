export = InventoryPublicValidator;
/**
 * @typedef getApiKey
 * @property {string} userName - Integration id
 * @property {string} password - Company/store token
 */
/**
 * @typedef getConfigByApiKey
 * @property {string} apikey - Api key
 */
/**
 * @typedef getJobByCode
 * @property {string} code - Job Code
 */
/**
 * @typedef getJobCodesMetrics
 * @property {boolean} [dailyJob] - Daily Job Flag
 * @property {string} [jobCode] - Email Job Code
 */
/**
 * @typedef getJobConfigByIntegrationType
 * @property {string} integrationType - Integration Type
 * @property {boolean} [disable] - JobConfig current state
 */
/**
 * @typedef saveJobCodesMetrics
 * @property {InventoryPublicModel.EmailJobMetrics} body
 */
declare class InventoryPublicValidator {
}
declare namespace InventoryPublicValidator {
    export { getApiKey, getConfigByApiKey, getJobByCode, getJobCodesMetrics, getJobConfigByIntegrationType, saveJobCodesMetrics };
}
/** @returns {getApiKey} */
declare function getApiKey(): getApiKey;
type getApiKey = {
    /**
     * - Integration id
     */
    userName: string;
    /**
     * - Company/store token
     */
    password: string;
};
/** @returns {getConfigByApiKey} */
declare function getConfigByApiKey(): getConfigByApiKey;
type getConfigByApiKey = {
    /**
     * - Api key
     */
    apikey: string;
};
/** @returns {getJobByCode} */
declare function getJobByCode(): getJobByCode;
type getJobByCode = {
    /**
     * - Job Code
     */
    code: string;
};
/** @returns {getJobCodesMetrics} */
declare function getJobCodesMetrics(): getJobCodesMetrics;
type getJobCodesMetrics = {
    /**
     * - Daily Job Flag
     */
    dailyJob?: boolean;
    /**
     * - Email Job Code
     */
    jobCode?: string;
};
/** @returns {getJobConfigByIntegrationType} */
declare function getJobConfigByIntegrationType(): getJobConfigByIntegrationType;
type getJobConfigByIntegrationType = {
    /**
     * - Integration Type
     */
    integrationType: string;
    /**
     * - JobConfig current state
     */
    disable?: boolean;
};
/** @returns {saveJobCodesMetrics} */
declare function saveJobCodesMetrics(): saveJobCodesMetrics;
type saveJobCodesMetrics = {
    body: InventoryPublicModel.EmailJobMetrics;
};
import InventoryPublicModel = require("./InventoryPublicModel");
