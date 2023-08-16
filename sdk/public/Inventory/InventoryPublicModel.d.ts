export = InventoryPublicModel;
/**
 * @typedef ApikeyModel
 * @property {string} [error_message]
 * @property {string} [session_id]
 */
/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 * @property {number} [safe_stock]
 */
/**
 * @typedef EmailJobMetrics
 * @property {boolean} [daily_job]
 * @property {boolean} [executed]
 * @property {string} [id]
 * @property {string} [job_code]
 * @property {string} [last_executed_on]
 */
/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {string} [name]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {GStore[]} [stores]
 * @property {string} [token]
 * @property {number} [uid]
 */
/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */
/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [code]
 * @property {StoreData} [data]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {string} [name]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {number} [uid]
 */
/**
 * @typedef JobConfigDTO
 * @property {string} [alias]
 * @property {number} company_id
 * @property {string} [company_name]
 * @property {string} integration
 * @property {Object} [integration_data]
 * @property {string} [job_code]
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 */
/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef ResponseEnvelopeApikeyModel
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {ApikeyModel} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {ApikeyModel} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */
/**
 * @typedef ResponseEnvelopeEmailJobMetrics
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {EmailJobMetrics} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {EmailJobMetrics} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */
/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {JobConfigDTO} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {JobConfigDTO[]} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */
/**
 * @typedef ResponseEnvelopeObject
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {Object} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {Object} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */
/**
 * @typedef ResponseEnvelopeSlingshotConfigurationDetail
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail} [items]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {SlingshotConfigurationDetail} [payload]
 * @property {number} [status]
 * @property {string} [timestamp]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [trace_id]
 */
/**
 * @typedef SlingshotConfigurationDetail
 * @property {GCompany[]} [companies]
 * @property {SlingshotIntegration} [integration]
 */
/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {Metum[]} [meta]
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef StoreData
 * @property {string} [location_id]
 */
/**
 * @typedef TaskDTO
 * @property {GenericDTO[]} [group_list]
 * @property {number} [type]
 */
declare class InventoryPublicModel {
}
declare namespace InventoryPublicModel {
    export { ApikeyModel, DataTresholdDTO, EmailJobMetrics, GCompany, GenericDTO, GStore, JobConfigDTO, Metum, Page, ResponseEnvelopeApikeyModel, ResponseEnvelopeEmailJobMetrics, ResponseEnvelopeJobConfigDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeObject, ResponseEnvelopeSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, TaskDTO };
}
/** @returns {ApikeyModel} */
declare function ApikeyModel(): ApikeyModel;
type ApikeyModel = {
    error_message?: string;
    session_id?: string;
};
/** @returns {DataTresholdDTO} */
declare function DataTresholdDTO(): DataTresholdDTO;
type DataTresholdDTO = {
    min_price?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
    safe_stock?: number;
};
/** @returns {EmailJobMetrics} */
declare function EmailJobMetrics(): EmailJobMetrics;
type EmailJobMetrics = {
    daily_job?: boolean;
    executed?: boolean;
    id?: string;
    job_code?: string;
    last_executed_on?: string;
};
/** @returns {GCompany} */
declare function GCompany(): GCompany;
type GCompany = {
    _id?: string;
    integration?: string;
    level?: string;
    name?: string;
    opted?: boolean;
    permissions?: string[];
    stores?: GStore[];
    token?: string;
    uid?: number;
};
/** @returns {GenericDTO} */
declare function GenericDTO(): GenericDTO;
type GenericDTO = {
    text?: string;
    value?: any;
};
/** @returns {GStore} */
declare function GStore(): GStore;
type GStore = {
    _id?: string;
    code?: string;
    data?: StoreData;
    integration?: string;
    level?: string;
    name?: string;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    uid?: number;
};
/** @returns {JobConfigDTO} */
declare function JobConfigDTO(): JobConfigDTO;
type JobConfigDTO = {
    alias?: string;
    company_id: number;
    company_name?: string;
    integration: string;
    integration_data?: any;
    job_code?: string;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
};
/** @returns {Metum} */
declare function Metum(): Metum;
type Metum = {
    _id?: string;
    name?: string;
    value?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {ResponseEnvelopeApikeyModel} */
declare function ResponseEnvelopeApikeyModel(): ResponseEnvelopeApikeyModel;
type ResponseEnvelopeApikeyModel = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: ApikeyModel;
    message?: string;
    page?: Page;
    payload?: ApikeyModel;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeEmailJobMetrics} */
declare function ResponseEnvelopeEmailJobMetrics(): ResponseEnvelopeEmailJobMetrics;
type ResponseEnvelopeEmailJobMetrics = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: EmailJobMetrics;
    message?: string;
    page?: Page;
    payload?: EmailJobMetrics;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeJobConfigDTO} */
declare function ResponseEnvelopeJobConfigDTO(): ResponseEnvelopeJobConfigDTO;
type ResponseEnvelopeJobConfigDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigDTO;
    message?: string;
    page?: Page;
    payload?: JobConfigDTO;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeListJobConfigDTO} */
declare function ResponseEnvelopeListJobConfigDTO(): ResponseEnvelopeListJobConfigDTO;
type ResponseEnvelopeListJobConfigDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeObject} */
declare function ResponseEnvelopeObject(): ResponseEnvelopeObject;
type ResponseEnvelopeObject = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: any;
    message?: string;
    page?: Page;
    payload?: any;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {ResponseEnvelopeSlingshotConfigurationDetail} */
declare function ResponseEnvelopeSlingshotConfigurationDetail(): ResponseEnvelopeSlingshotConfigurationDetail;
type ResponseEnvelopeSlingshotConfigurationDetail = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: SlingshotConfigurationDetail;
    message?: string;
    page?: Page;
    payload?: SlingshotConfigurationDetail;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
/** @returns {SlingshotConfigurationDetail} */
declare function SlingshotConfigurationDetail(): SlingshotConfigurationDetail;
type SlingshotConfigurationDetail = {
    companies?: GCompany[];
    integration?: SlingshotIntegration;
};
/** @returns {SlingshotIntegration} */
declare function SlingshotIntegration(): SlingshotIntegration;
type SlingshotIntegration = {
    _id?: string;
    description?: string;
    meta?: Metum[];
    name?: string;
    slug?: string;
};
/** @returns {StoreData} */
declare function StoreData(): StoreData;
type StoreData = {
    location_id?: string;
};
/** @returns {TaskDTO} */
declare function TaskDTO(): TaskDTO;
type TaskDTO = {
    group_list?: GenericDTO[];
    type?: number;
};
