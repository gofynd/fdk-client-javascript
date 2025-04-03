export = AnalyticsPlatformModel;
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
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
    /**
     * - The total number of items on the page.
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
