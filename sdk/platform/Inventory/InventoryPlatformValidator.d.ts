export = InventoryPlatformValidator;
/**
 * @typedef createJob
 * @property {InventoryPlatformModel.JobConfigDTO} body
 */
/**
 * @typedef disable
 * @property {string} integrationId - IntegrationId
 */
/** @typedef getConfigByCompany */
/**
 * @typedef getJobByCode
 * @property {string} code - Job Code
 */
/**
 * @typedef getJobByCompanyAndIntegration
 * @property {string} integrationId - Integration Id
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */
/**
 * @typedef getJobCodeMetrics
 * @property {string} code - Code
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [status] - Status
 * @property {string} [date] - From Date
 */
/**
 * @typedef getJobCodesByCompanyAndIntegration
 * @property {string} integrationId - Integration Id
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */
/** @typedef getJobConfigDefaults */
/**
 * @typedef getJobSteps
 * @property {number} jobId - Job Id
 */
/**
 * @typedef getJobsByCompany
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */
/**
 * @typedef suppressStores
 * @property {InventoryPlatformModel.SuppressStorePayload} body
 */
/**
 * @typedef updateJob
 * @property {InventoryPlatformModel.JobConfigDTO} body
 */
declare class InventoryPlatformValidator {
}
declare namespace InventoryPlatformValidator {
    export { createJob, disable, getConfigByCompany, getJobByCode, getJobByCompanyAndIntegration, getJobCodeMetrics, getJobCodesByCompanyAndIntegration, getJobConfigDefaults, getJobSteps, getJobsByCompany, suppressStores, updateJob };
}
/** @returns {createJob} */
declare function createJob(): createJob;
type createJob = {
    body: InventoryPlatformModel.JobConfigDTO;
};
/** @returns {disable} */
declare function disable(): disable;
type disable = {
    /**
     * - IntegrationId
     */
    integrationId: string;
};
/** @returns {getConfigByCompany} */
declare function getConfigByCompany(): any;
type getConfigByCompany = any;
/** @returns {getJobByCode} */
declare function getJobByCode(): getJobByCode;
type getJobByCode = {
    /**
     * - Job Code
     */
    code: string;
};
/** @returns {getJobByCompanyAndIntegration} */
declare function getJobByCompanyAndIntegration(): getJobByCompanyAndIntegration;
type getJobByCompanyAndIntegration = {
    /**
     * - Integration Id
     */
    integrationId: string;
    /**
     * - Page Number
     */
    pageNo?: number;
    /**
     * - Page Size
     */
    pageSize?: number;
};
/** @returns {getJobCodeMetrics} */
declare function getJobCodeMetrics(): getJobCodeMetrics;
type getJobCodeMetrics = {
    /**
     * - Code
     */
    code: string;
    /**
     * - Page Number
     */
    pageNo?: number;
    /**
     * - Page Size
     */
    pageSize?: number;
    /**
     * - Status
     */
    status?: string;
    /**
     * - From Date
     */
    date?: string;
};
/** @returns {getJobCodesByCompanyAndIntegration} */
declare function getJobCodesByCompanyAndIntegration(): getJobCodesByCompanyAndIntegration;
type getJobCodesByCompanyAndIntegration = {
    /**
     * - Integration Id
     */
    integrationId: string;
    /**
     * - Page Number
     */
    pageNo?: number;
    /**
     * - Page Size
     */
    pageSize?: number;
};
/** @returns {getJobConfigDefaults} */
declare function getJobConfigDefaults(): any;
type getJobConfigDefaults = any;
/** @returns {getJobSteps} */
declare function getJobSteps(): getJobSteps;
type getJobSteps = {
    /**
     * - Job Id
     */
    jobId: number;
};
/** @returns {getJobsByCompany} */
declare function getJobsByCompany(): getJobsByCompany;
type getJobsByCompany = {
    /**
     * - Page Number
     */
    pageNo?: number;
    /**
     * - Page Size
     */
    pageSize?: number;
};
/** @returns {suppressStores} */
declare function suppressStores(): suppressStores;
type suppressStores = {
    body: InventoryPlatformModel.SuppressStorePayload;
};
/** @returns {updateJob} */
declare function updateJob(): updateJob;
type updateJob = {
    body: InventoryPlatformModel.JobConfigDTO;
};
import InventoryPlatformModel = require("./InventoryPlatformModel");
