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
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
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
