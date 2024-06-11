export = AnalyticsPlatformModel;
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
/**
 * @typedef FileDownloadRequestBody
 * @property {string} query - Base64 encoded query to execute on clickhouse.
 * @property {boolean} [split_files] - Flag to indicate whether to split files
 *   for larger data.
 */
/**
 * @typedef JobExecute
 * @property {string} query - Base64 encoded query to execute on clickhouse.
 * @property {Page} [page]
 */
declare class AnalyticsPlatformModel {
}
declare namespace AnalyticsPlatformModel {
    export { Page, FileDownloadRequestBody, JobExecute };
}
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
/** @returns {FileDownloadRequestBody} */
declare function FileDownloadRequestBody(): FileDownloadRequestBody;
type FileDownloadRequestBody = {
    /**
     * - Base64 encoded query to execute on clickhouse.
     */
    query: string;
    /**
     * - Flag to indicate whether to split files
     * for larger data.
     */
    split_files?: boolean;
};
/** @returns {JobExecute} */
declare function JobExecute(): JobExecute;
type JobExecute = {
    /**
     * - Base64 encoded query to execute on clickhouse.
     */
    query: string;
    page?: Page;
};
