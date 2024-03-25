export = AnalyticsPlatformModel;
/**
 * @typedef Page
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {number} [total_page]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {string} [type]
 */
/**
 * @typedef ConditionsSchema
 * @property {string} [column_name]
 * @property {string} [conditional_operator]
 * @property {string} [type]
 */
/**
 * @typedef WhereSchema
 * @property {ConditionsSchema[]} [conditions]
 */
/**
 * @typedef SortBySchema
 * @property {string} [column]
 * @property {string} [order]
 */
/**
 * @typedef JobExecute
 * @property {string} [query]
 * @property {string} [encoding]
 * @property {Page} [page]
 */
declare class AnalyticsPlatformModel {
}
declare namespace AnalyticsPlatformModel {
    export { Page, ConditionsSchema, WhereSchema, SortBySchema, JobExecute };
}
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    size?: number;
    item_total?: number;
    total_page?: number;
    has_next?: boolean;
    has_previous?: boolean;
    type?: string;
};
/** @returns {ConditionsSchema} */
declare function ConditionsSchema(): ConditionsSchema;
type ConditionsSchema = {
    column_name?: string;
    conditional_operator?: string;
    type?: string;
};
/** @returns {WhereSchema} */
declare function WhereSchema(): WhereSchema;
type WhereSchema = {
    conditions?: ConditionsSchema[];
};
/** @returns {SortBySchema} */
declare function SortBySchema(): SortBySchema;
type SortBySchema = {
    column?: string;
    order?: string;
};
/** @returns {JobExecute} */
declare function JobExecute(): JobExecute;
type JobExecute = {
    query?: string;
    encoding?: string;
    page?: Page;
};
