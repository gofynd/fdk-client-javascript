export = InventoryPublicModel;
/**
 * @typedef EmailJobMetrics
 * @property {boolean} [executed]
 * @property {string} [id]
 * @property {string} [job_code]
 * @property {boolean} [daily_job]
 * @property {string} [last_executed_on]
 */
/**
 * @typedef Page
 * @property {string} type
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 */
/**
 * @typedef ResponseEnvelopeEmailJobMetrics
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {EmailJobMetrics} [items]
 * @property {EmailJobMetrics} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [name]
 * @property {GStore[]} [stores]
 */
/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [code]
 * @property {string} [name]
 * @property {StoreData} [data]
 */
/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ResponseEnvelopeSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail} [items]
 * @property {SlingshotConfigurationDetail} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef SlingshotConfigurationDetail
 * @property {SlingshotIntegration} [integration]
 * @property {GCompany[]} [companies]
 */
/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Metum[]} [meta]
 */
/**
 * @typedef StoreData
 * @property {string} [location_id]
 */
/**
 * @typedef ApikeyModel
 * @property {string} [session_id]
 * @property {string} [error_message]
 */
/**
 * @typedef ResponseEnvelopeApikeyModel
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {ApikeyModel} [items]
 * @property {ApikeyModel} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */
/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */
/**
 * @typedef JobConfigDTO
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {string} integration
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */
/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ResponseEnvelopeObject
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {Object} [items]
 * @property {Object} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
declare class InventoryPublicModel {
}
declare namespace InventoryPublicModel {
    export { EmailJobMetrics, Page, ResponseEnvelopeEmailJobMetrics, GCompany, GStore, Metum, ResponseEnvelopeSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, ApikeyModel, ResponseEnvelopeApikeyModel, DataTresholdDTO, GenericDTO, JobConfigDTO, ResponseEnvelopeJobConfigDTO, TaskDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeObject };
}
/** @returns {EmailJobMetrics} */
declare function EmailJobMetrics(): EmailJobMetrics;
type EmailJobMetrics = {
    executed?: boolean;
    id?: string;
    job_code?: string;
    daily_job?: boolean;
    last_executed_on?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    type: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
};
/** @returns {ResponseEnvelopeEmailJobMetrics} */
declare function ResponseEnvelopeEmailJobMetrics(): ResponseEnvelopeEmailJobMetrics;
type ResponseEnvelopeEmailJobMetrics = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: EmailJobMetrics;
    payload?: EmailJobMetrics;
    trace_id?: string;
    page?: Page;
};
/** @returns {GCompany} */
declare function GCompany(): GCompany;
type GCompany = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    name?: string;
    stores?: GStore[];
};
/** @returns {GStore} */
declare function GStore(): GStore;
type GStore = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    code?: string;
    name?: string;
    data?: StoreData;
};
/** @returns {Metum} */
declare function Metum(): Metum;
type Metum = {
    _id?: string;
    name?: string;
    value?: string;
};
/** @returns {ResponseEnvelopeSlingshotConfigurationDetail} */
declare function ResponseEnvelopeSlingshotConfigurationDetail(): ResponseEnvelopeSlingshotConfigurationDetail;
type ResponseEnvelopeSlingshotConfigurationDetail = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: SlingshotConfigurationDetail;
    payload?: SlingshotConfigurationDetail;
    trace_id?: string;
    page?: Page;
};
/** @returns {SlingshotConfigurationDetail} */
declare function SlingshotConfigurationDetail(): SlingshotConfigurationDetail;
type SlingshotConfigurationDetail = {
    integration?: SlingshotIntegration;
    companies?: GCompany[];
};
/** @returns {SlingshotIntegration} */
declare function SlingshotIntegration(): SlingshotIntegration;
type SlingshotIntegration = {
    _id?: string;
    description?: string;
    name?: string;
    slug?: string;
    meta?: Metum[];
};
/** @returns {StoreData} */
declare function StoreData(): StoreData;
type StoreData = {
    location_id?: string;
};
/** @returns {ApikeyModel} */
declare function ApikeyModel(): ApikeyModel;
type ApikeyModel = {
    session_id?: string;
    error_message?: string;
};
/** @returns {ResponseEnvelopeApikeyModel} */
declare function ResponseEnvelopeApikeyModel(): ResponseEnvelopeApikeyModel;
type ResponseEnvelopeApikeyModel = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: ApikeyModel;
    payload?: ApikeyModel;
    trace_id?: string;
    page?: Page;
};
/** @returns {DataTresholdDTO} */
declare function DataTresholdDTO(): DataTresholdDTO;
type DataTresholdDTO = {
    min_price?: number;
    safe_stock?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
};
/** @returns {GenericDTO} */
declare function GenericDTO(): GenericDTO;
type GenericDTO = {
    text?: string;
    value?: any;
};
/** @returns {JobConfigDTO} */
declare function JobConfigDTO(): JobConfigDTO;
type JobConfigDTO = {
    integration_data?: any;
    company_name?: string;
    integration: string;
    company_id: number;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
    job_code?: string;
    alias?: string;
};
/** @returns {ResponseEnvelopeJobConfigDTO} */
declare function ResponseEnvelopeJobConfigDTO(): ResponseEnvelopeJobConfigDTO;
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    trace_id?: string;
    page?: Page;
};
/** @returns {TaskDTO} */
declare function TaskDTO(): TaskDTO;
type TaskDTO = {
    type?: number;
    group_list?: GenericDTO[];
};
/** @returns {ResponseEnvelopeListJobConfigDTO} */
declare function ResponseEnvelopeListJobConfigDTO(): ResponseEnvelopeListJobConfigDTO;
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO[];
    payload?: JobConfigDTO[];
    trace_id?: string;
    page?: Page;
};
/** @returns {ResponseEnvelopeObject} */
declare function ResponseEnvelopeObject(): ResponseEnvelopeObject;
type ResponseEnvelopeObject = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: any;
    payload?: any;
    trace_id?: string;
    page?: Page;
};
