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
     * @returns {Promise<Object>} - Success response
     * @name checkJobStatusByNameV2
     * @summary: check export status
     * @description: Takes job id in path param to check the status of job Returns file URL if downloading is done else returns status of job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/analytics/checkJobStatusByNameV2/).
     */
    checkJobStatusByNameV2({ provider, exportType, fileName, requestHeaders }?: AnalyticsPlatformApplicationValidator.CheckJobStatusByNameV2Param, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {AnalyticsPlatformApplicationValidator.ExecuteJobForProvidedParametersV2Param} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name executeJobForProvidedParametersV2
     * @summary: Execute given query and returns paginated data
     * @description: accepts QueryModel and page object as an request body and returns paginated JSON response alog with page object - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/analytics/executeJobForProvidedParametersV2/).
     */
    executeJobForProvidedParametersV2({ provider, datasource, exportType, body, requestHeaders }?: AnalyticsPlatformApplicationValidator.ExecuteJobForProvidedParametersV2Param, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {AnalyticsPlatformApplicationValidator.StartDownloadForQueryV2Param} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name startDownloadForQueryV2
     * @summary: start_download
     * @description: accepts query model as an argument and create job for exporting result to csv file and returns job id as a response - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/analytics/startDownloadForQueryV2/).
     */
    startDownloadForQueryV2({ provider, datasource, exportType, body, requestHeaders }?: AnalyticsPlatformApplicationValidator.StartDownloadForQueryV2Param, { responseHeaders }?: object): Promise<string>;
}
import AnalyticsPlatformApplicationValidator = require("sdk/output/javascript/code/sdk/platform/Analytics/AnalyticsPlatformApplicationValidator");
