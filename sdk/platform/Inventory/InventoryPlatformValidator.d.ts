export = InventoryPlatformValidator;
/**
 * @typedef CreateJobParam
 * @property {InventoryPlatformModel.JobConfigDTO} body
 */
/**
 * @typedef DisableParam
 * @property {string} integrationId - IntegrationId
 */
/** @typedef GetConfigByCompanyParam */
/**
 * @typedef GetJobByCodeParam
 * @property {string} code - Job Code
 */
/**
 * @typedef GetJobByCompanyAndIntegrationParam
 * @property {string} integrationId - Integration Id
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */
/**
 * @typedef GetJobCodeMetricsParam
 * @property {string} code - Code
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 * @property {string} [status] - Status
 * @property {string} [date] - From Date
 */
/**
 * @typedef GetJobCodesByCompanyAndIntegrationParam
 * @property {string} integrationId - Integration Id
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */
/** @typedef GetJobConfigDefaultsParam */
/**
 * @typedef GetJobStepsParam
 * @property {number} jobId - Job Id
 */
/**
 * @typedef GetJobsByCompanyParam
 * @property {number} [pageNo] - Page Number
 * @property {number} [pageSize] - Page Size
 */
/**
 * @typedef SuppressStoresParam
 * @property {InventoryPlatformModel.SuppressStorePayload} body
 */
/**
 * @typedef UpdateJobParam
 * @property {InventoryPlatformModel.JobConfigDTO} body
 */
declare class InventoryPlatformValidator {
    /** @returns {CreateJobParam} */
    static createJob(): CreateJobParam;
    /** @returns {DisableParam} */
    static disable(): DisableParam;
    /** @returns {GetConfigByCompanyParam} */
    static getConfigByCompany(): any;
    /** @returns {GetJobByCodeParam} */
    static getJobByCode(): GetJobByCodeParam;
    /** @returns {GetJobByCompanyAndIntegrationParam} */
    static getJobByCompanyAndIntegration(): GetJobByCompanyAndIntegrationParam;
    /** @returns {GetJobCodeMetricsParam} */
    static getJobCodeMetrics(): GetJobCodeMetricsParam;
    /** @returns {GetJobCodesByCompanyAndIntegrationParam} */
    static getJobCodesByCompanyAndIntegration(): GetJobCodesByCompanyAndIntegrationParam;
    /** @returns {GetJobConfigDefaultsParam} */
    static getJobConfigDefaults(): any;
    /** @returns {GetJobStepsParam} */
    static getJobSteps(): GetJobStepsParam;
    /** @returns {GetJobsByCompanyParam} */
    static getJobsByCompany(): GetJobsByCompanyParam;
    /** @returns {SuppressStoresParam} */
    static suppressStores(): SuppressStoresParam;
    /** @returns {UpdateJobParam} */
    static updateJob(): UpdateJobParam;
}
declare namespace InventoryPlatformValidator {
    export { CreateJobParam, DisableParam, GetConfigByCompanyParam, GetJobByCodeParam, GetJobByCompanyAndIntegrationParam, GetJobCodeMetricsParam, GetJobCodesByCompanyAndIntegrationParam, GetJobConfigDefaultsParam, GetJobStepsParam, GetJobsByCompanyParam, SuppressStoresParam, UpdateJobParam };
}
type CreateJobParam = {
    body: InventoryPlatformModel.JobConfigDTO;
};
type DisableParam = {
    /**
     * - IntegrationId
     */
    integrationId: string;
};
type GetJobByCodeParam = {
    /**
     * - Job Code
     */
    code: string;
};
type GetJobByCompanyAndIntegrationParam = {
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
type GetJobCodeMetricsParam = {
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
type GetJobCodesByCompanyAndIntegrationParam = {
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
type GetJobStepsParam = {
    /**
     * - Job Id
     */
    jobId: number;
};
type GetJobsByCompanyParam = {
    /**
     * - Page Number
     */
    pageNo?: number;
    /**
     * - Page Size
     */
    pageSize?: number;
};
type SuppressStoresParam = {
    body: InventoryPlatformModel.SuppressStorePayload;
};
type UpdateJobParam = {
    body: InventoryPlatformModel.JobConfigDTO;
};
type GetConfigByCompanyParam = any;
type GetJobConfigDefaultsParam = any;
import InventoryPlatformModel = require("./InventoryPlatformModel");
