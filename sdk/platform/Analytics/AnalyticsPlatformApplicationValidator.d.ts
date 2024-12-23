export = AnalyticsPlatformApplicationValidator;
/**
 * @typedef CheckJobStatusByNameV2Param
 * @property {string} fileName - Download job name
 */
/**
 * @typedef ExecuteJobForProvidedParametersV2Param
 * @property {AnalyticsPlatformModel.JobExecute} body
 */
/**
 * @typedef StartDownloadForQueryV2Param
 * @property {string} exportType - Format in which to be exported(eg. CSV or excel).
 * @property {AnalyticsPlatformModel.FileDownloadRequestBody} body
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
    /**
     * - Download job name
     */
    fileName: string;
};
type ExecuteJobForProvidedParametersV2Param = {
    body: AnalyticsPlatformModel.JobExecute;
};
type StartDownloadForQueryV2Param = {
    /**
     * - Format in which to be exported(eg. CSV or excel).
     */
    exportType: string;
    body: AnalyticsPlatformModel.FileDownloadRequestBody;
};
import AnalyticsPlatformModel = require("./AnalyticsPlatformModel");
