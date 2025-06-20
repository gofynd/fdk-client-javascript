export = AnalyticsPlatformModel;
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */
/**
 * @typedef FileDownloadRequestBody
 * @property {string} query - Base64 encoded SQL query to execute on ClickHouse.
 * @property {boolean} [split_files] - Flag indicating whether to split the
 *   files for larger datasets.
 */
/**
 * @typedef JobExecute
 * @property {string} query - Base64 encoded SQL query to execute on ClickHouse.
 * @property {Page} [page]
 */
/**
 * @typedef JobExecutionResult
 * @property {Object[]} [rows] - Array of rows resulting from the job execution.
 * @property {Page} [page]
 */
/**
 * @typedef JobStatus
 * @property {string} [start_date] - The start date and time of the job.
 * @property {string} [end_date] - The end date and time of the job.
 * @property {string} [status] - The current status of the job.
 * @property {string} [message] - Message providing additional details about the
 *   job status.
 * @property {Object[]} [file_metadata] - Metadata about files associated with
 *   the job, if any.
 */
declare class AnalyticsPlatformModel {
}
declare namespace AnalyticsPlatformModel {
    export { Page, FileDownloadRequestBody, JobExecute, JobExecutionResult, JobStatus };
}
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of all items across all pages.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {FileDownloadRequestBody} */
declare function FileDownloadRequestBody(): FileDownloadRequestBody;
type FileDownloadRequestBody = {
    /**
     * - Base64 encoded SQL query to execute on ClickHouse.
     */
    query: string;
    /**
     * - Flag indicating whether to split the
     * files for larger datasets.
     */
    split_files?: boolean;
};
/** @returns {JobExecute} */
declare function JobExecute(): JobExecute;
type JobExecute = {
    /**
     * - Base64 encoded SQL query to execute on ClickHouse.
     */
    query: string;
    page?: Page;
};
/** @returns {JobExecutionResult} */
declare function JobExecutionResult(): JobExecutionResult;
type JobExecutionResult = {
    /**
     * - Array of rows resulting from the job execution.
     */
    rows?: any[];
    page?: Page;
};
/** @returns {JobStatus} */
declare function JobStatus(): JobStatus;
type JobStatus = {
    /**
     * - The start date and time of the job.
     */
    start_date?: string;
    /**
     * - The end date and time of the job.
     */
    end_date?: string;
    /**
     * - The current status of the job.
     */
    status?: string;
    /**
     * - Message providing additional details about the
     * job status.
     */
    message?: string;
    /**
     * - Metadata about files associated with
     * the job, if any.
     */
    file_metadata?: any[];
};
