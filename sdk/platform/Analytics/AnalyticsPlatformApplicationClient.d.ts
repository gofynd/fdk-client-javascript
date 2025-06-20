export = Analytics;
declare class Analytics {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {AnalyticsPlatformApplicationValidator.CheckJobStatusByNameV2Param} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AnalyticsPlatformModel.JobStatus>} - Success response
     * @name checkJobStatusByNameV2
     * @summary: Checks download job status
     * @description: Takes job name in path param to check the status of job Returns file URL if downloading is done else returns status of job - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/analytics/checkJobStatusByNameV2/).
     */
    checkJobStatusByNameV2({ fileName, requestHeaders }?: AnalyticsPlatformApplicationValidator.CheckJobStatusByNameV2Param, { responseHeaders }?: object): Promise<AnalyticsPlatformModel.JobStatus>;
    /**
     * @param {AnalyticsPlatformApplicationValidator.ExecuteJobForProvidedParametersV2Param} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AnalyticsPlatformModel.JobExecutionResult>} - Success response
     * @name executeJobForProvidedParametersV2
     * @summary: Executes given sql(Base64 Encoded) query
     * @description: Query click events data - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/analytics/executeJobForProvidedParametersV2/).
     */
    executeJobForProvidedParametersV2({ body, requestHeaders }?: AnalyticsPlatformApplicationValidator.ExecuteJobForProvidedParametersV2Param, { responseHeaders }?: object): Promise<AnalyticsPlatformModel.JobExecutionResult>;
    /**
     * @param {AnalyticsPlatformApplicationValidator.StartDownloadForQueryV2Param} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name startDownloadForQueryV2
     * @summary: Initiates download job
     * @description: Initiates download job and returns job name - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/analytics/startDownloadForQueryV2/).
     */
    startDownloadForQueryV2({ exportType, body, requestHeaders }?: AnalyticsPlatformApplicationValidator.StartDownloadForQueryV2Param, { responseHeaders }?: object): Promise<any>;
}
import AnalyticsPlatformApplicationValidator = require("./AnalyticsPlatformApplicationValidator");
import AnalyticsPlatformModel = require("./AnalyticsPlatformModel");
