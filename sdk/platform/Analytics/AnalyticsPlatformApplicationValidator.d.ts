export = AnalyticsPlatformApplicationValidator;
/**
 * @typedef CheckJobStatusByNameV2Param
 * @property {string} provider
 * @property {string} exportType
 * @property {string} fileName - Export job name
 */
/**
 * @typedef ExecuteJobForProvidedParametersV2Param
 * @property {string} provider
 * @property {string} datasource
 * @property {string} exportType
 * @property {AnalyticsPlatformModel.JobExecute} body
 */
/**
 * @typedef StartDownloadForQueryV2Param
 * @property {string} provider
 * @property {string} datasource
 * @property {string} exportType
 * @property {AnalyticsPlatformModel.JobExecute} body
 */
declare class AnalyticsPlatformApplicationValidator {
    /** @returns {CheckJobStatusByNameV2Param} */
    static checkJobStatusByNameV2(): CheckJobStatusByNameV2Param;
    /** @returns {ExecuteJobForProvidedParametersV2Param} */
    static executeJobForProvidedParametersV2(): ExecuteJobForProvidedParametersV2Param;
    /** @returns {StartDownloadForQueryV2Param} */
    static startDownloadForQueryV2(): StartDownloadForQueryV2Param;
}
declare namespace AnalyticsPlatformApplicationValidator {
    export { CheckJobStatusByNameV2Param, ExecuteJobForProvidedParametersV2Param, StartDownloadForQueryV2Param };
}
type CheckJobStatusByNameV2Param = {
    provider: string;
    exportType: string;
    /**
     * - Export job name
     */
    fileName: string;
};
type ExecuteJobForProvidedParametersV2Param = {
    provider: string;
    datasource: string;
    exportType: string;
    body: AnalyticsPlatformModel.JobExecute;
};
type StartDownloadForQueryV2Param = {
    provider: string;
    datasource: string;
    exportType: string;
    body: AnalyticsPlatformModel.JobExecute;
};
import AnalyticsPlatformModel = require("sdk/output/javascript/code/sdk/platform/Analytics/AnalyticsPlatformModel");
