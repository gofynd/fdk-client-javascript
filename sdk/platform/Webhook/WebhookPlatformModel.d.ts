export = WebhookPlatformModel;
/**
 * @typedef Association
 * @property {string[]} [application_id]
 * @property {number} [company_id]
 * @property {string} [criteria]
 * @property {string} [extension_id]
 */
/**
 * @typedef AuthMeta
 * @property {string} [secret]
 * @property {string} [type]
 */
/**
 * @typedef CancelResponse
 * @property {string} [message] - The HTTP status code of the response (e.g., 200).
 */
/**
 * @typedef CdnObject
 * @property {Url[]} [urls]
 */
/**
 * @typedef DownloadReportResponse
 * @property {string} [file_name]
 */
/**
 * @typedef Err
 * @property {string} [location]
 * @property {string} [msg]
 * @property {string} [param]
 */
/**
 * @typedef Error
 * @property {string} [error] - Error message describing the reason for the failure.
 */
/**
 * @typedef Event
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */
/**
 * @typedef EventConfig
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [version]
 */
/**
 * @typedef EventConfigResponse
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {Object} [event_schema]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [updated_on]
 * @property {string} [version]
 */
/**
 * @typedef EventConfigs
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {Object} [event_schema]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 * @property {string} [updated_on]
 * @property {string} [version]
 */
/**
 * @typedef EventProcessReportObject
 * @property {number} [attempt] - The attempt number of the event.
 * @property {Object} [data] - The data associated with the event.
 * @property {string} [event_name] - The name of the processed event.
 * @property {string} [event_trace_id]
 * @property {number} [last_attempted_on] - The timestamp of the last attempted event.
 * @property {string} [message_id]
 * @property {string} [name] - The name of the event.
 * @property {number} [response_code] - The response code of the event.
 * @property {string} [response_message] - The response message of the event.
 * @property {number} [response_time] - The response time of the event.
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 * @property {string} [webhook_url] - The webhook URL associated with the event.
 */
/**
 * @typedef EventProcessReports
 * @property {Page} [page]
 * @property {EventProcessReportObject[]} [rows]
 */
/**
 * @typedef EventProcessRequest
 * @property {string} [end_date]
 * @property {Event[]} [event]
 * @property {string} [search_text]
 * @property {string} [start_date]
 * @property {string} [status]
 * @property {number[]} [subscriber_ids]
 */
/**
 * @typedef HistoryAssociation
 * @property {number} [company_id]
 * @property {number[]} [subscriber_ids]
 */
/**
 * @typedef HistoryFilters
 * @property {string} [end_date] - The end date and time of the history report.
 * @property {string[]} [events]
 * @property {string} [search_text]
 * @property {string} [start_date] - The start date and time of the history report.
 * @property {string} [status] - The status of the history report (e.g., "FAILED").
 * @property {number[]} [subscribers] - An array of subscriber IDs associated
 *   with the history report.
 */
/**
 * @typedef HistoryItems
 * @property {HistoryAssociation} [association]
 * @property {string} [created_on] - The date and time when the history report
 *   was created.
 * @property {string} [filename] - The filename of the history report.
 * @property {HistoryFilters} [filters]
 * @property {number} [id] - The ID of the history report.
 * @property {string} [message] - A message related to the history report.
 * @property {string} [status] - The status of the history report (e.g., "COMPLETED").
 * @property {string} [updated_on] - The date and time when the history report
 *   was last updated.
 * @property {UploadServiceObject} [upload_service_response]
 */
/**
 * @typedef HistoryPayload
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 * @property {string} [type] - The type of history report (e.g., "platform").
 */
/**
 * @typedef HistoryResponse
 * @property {HistoryItems[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Item
 * @property {number} [count]
 * @property {string} [status]
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
 * @typedef PingWebhook
 * @property {Object} [auth_meta] - Authentication metadata (if required by the
 *   subscriber).
 * @property {Object} [custom_headers] - Custom headers to include in the ping request.
 * @property {string} [webhook_url] - The URL of the subscriber's webhook to ping.
 */
/**
 * @typedef PingWebhookResponse
 * @property {number} [code] - The HTTP status code of the ping response (e.g., 200).
 * @property {string} [message] - An optional message related to the ping.
 * @property {string} [status] - The status of the ping (e.g., "SUCCESS").
 */
/**
 * @typedef ReportFilterResponse
 * @property {string} [filter_name] - The name of the filter.
 * @property {Object[]} [values]
 */
/**
 * @typedef ReportFiltersPayload
 * @property {number[]} [subscriber_ids] - An array of subscriber IDs for
 *   filtering filters (optional).
 */
/**
 * @typedef RetryCountResponse
 * @property {Item[]} [items]
 */
/**
 * @typedef RetryEventRequest
 * @property {string} [end_date]
 * @property {Event[]} [event]
 * @property {string} [search_text]
 * @property {string} [start_date]
 * @property {string} [status]
 * @property {number[]} [subscriber_ids]
 */
/**
 * @typedef RetryFailureResponse
 * @property {Err[]} [err]
 */
/**
 * @typedef RetryStatusResponse
 * @property {number} [failure_count] - The count of failed retry attempts.
 * @property {string} [status] - The overall status of the retry process (e.g.,
 *   "completed").
 * @property {number} [success_count] - The count of successfully retried events.
 * @property {number} [total_event] - The total number of events that require retry.
 */
/**
 * @typedef RetrySuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef SubscriberConfig
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [webhook_url]
 */
/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SubscriberConfigResponse
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [updated_on]
 * @property {string} [webhook_url]
 */
/**
 * @typedef SubscriberEventMapping
 * @property {string} [created_on]
 * @property {number} [event_id]
 * @property {number} [id]
 * @property {number} [subscriber_id]
 */
/**
 * @typedef SubscriberFailureResponse
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [stack]
 */
/**
 * @typedef SubscriberResponse
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {EventConfigs[]} [event_configs]
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [updated_on]
 * @property {string} [webhook_url]
 */
/**
 * @typedef UploadServiceObject
 * @property {CdnObject} [cdn]
 */
/**
 * @typedef Url
 * @property {string} [name] - The name of the uploaded report file.
 * @property {string} [url] - The URL of the uploaded report file.
 */
declare class WebhookPlatformModel {
}
declare namespace WebhookPlatformModel {
    export { Association, AuthMeta, CancelResponse, CdnObject, DownloadReportResponse, Err, Error, Event, EventConfig, EventConfigResponse, EventConfigs, EventProcessReportObject, EventProcessReports, EventProcessRequest, HistoryAssociation, HistoryFilters, HistoryItems, HistoryPayload, HistoryResponse, Item, Page, PingWebhook, PingWebhookResponse, ReportFilterResponse, ReportFiltersPayload, RetryCountResponse, RetryEventRequest, RetryFailureResponse, RetryStatusResponse, RetrySuccessResponse, SubscriberConfig, SubscriberConfigList, SubscriberConfigResponse, SubscriberEventMapping, SubscriberFailureResponse, SubscriberResponse, UploadServiceObject, Url };
}
/** @returns {Association} */
declare function Association(): Association;
type Association = {
    application_id?: string[];
    company_id?: number;
    criteria?: string;
    extension_id?: string;
};
/** @returns {AuthMeta} */
declare function AuthMeta(): AuthMeta;
type AuthMeta = {
    secret?: string;
    type?: string;
};
/** @returns {CancelResponse} */
declare function CancelResponse(): CancelResponse;
type CancelResponse = {
    /**
     * - The HTTP status code of the response (e.g., 200).
     */
    message?: string;
};
/** @returns {CdnObject} */
declare function CdnObject(): CdnObject;
type CdnObject = {
    urls?: Url[];
};
/** @returns {DownloadReportResponse} */
declare function DownloadReportResponse(): DownloadReportResponse;
type DownloadReportResponse = {
    file_name?: string;
};
/** @returns {Err} */
declare function Err(): Err;
type Err = {
    location?: string;
    msg?: string;
    param?: string;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    /**
     * - Error message describing the reason for the failure.
     */
    error?: string;
};
/** @returns {Event} */
declare function Event(): Event;
type Event = {
    event_category?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
};
/** @returns {EventConfig} */
declare function EventConfig(): EventConfig;
type EventConfig = {
    created_on?: string;
    description?: string;
    display_name?: string;
    event_category?: string;
    event_name?: string;
    event_type?: string;
    id?: number;
    version?: string;
};
/** @returns {EventConfigResponse} */
declare function EventConfigResponse(): EventConfigResponse;
type EventConfigResponse = {
    created_on?: string;
    description?: string;
    display_name?: string;
    event_category?: string;
    event_name?: string;
    event_schema?: any;
    event_type?: string;
    id?: number;
    updated_on?: string;
    version?: string;
};
/** @returns {EventConfigs} */
declare function EventConfigs(): EventConfigs;
type EventConfigs = {
    created_on?: string;
    description?: string;
    display_name?: string;
    event_category?: string;
    event_name?: string;
    event_schema?: any;
    event_type?: string;
    id?: number;
    subscriber_event_mapping?: SubscriberEventMapping;
    updated_on?: string;
    version?: string;
};
/** @returns {EventProcessReportObject} */
declare function EventProcessReportObject(): EventProcessReportObject;
type EventProcessReportObject = {
    /**
     * - The attempt number of the event.
     */
    attempt?: number;
    /**
     * - The data associated with the event.
     */
    data?: any;
    /**
     * - The name of the processed event.
     */
    event_name?: string;
    event_trace_id?: string;
    /**
     * - The timestamp of the last attempted event.
     */
    last_attempted_on?: number;
    message_id?: string;
    /**
     * - The name of the event.
     */
    name?: string;
    /**
     * - The response code of the event.
     */
    response_code?: number;
    /**
     * - The response message of the event.
     */
    response_message?: string;
    /**
     * - The response time of the event.
     */
    response_time?: number;
    /**
     * - The status of the event (e.g., "FAILED").
     */
    status?: string;
    /**
     * - The webhook URL associated with the event.
     */
    webhook_url?: string;
};
/** @returns {EventProcessReports} */
declare function EventProcessReports(): EventProcessReports;
type EventProcessReports = {
    page?: Page;
    rows?: EventProcessReportObject[];
};
/** @returns {EventProcessRequest} */
declare function EventProcessRequest(): EventProcessRequest;
type EventProcessRequest = {
    end_date?: string;
    event?: Event[];
    search_text?: string;
    start_date?: string;
    status?: string;
    subscriber_ids?: number[];
};
/** @returns {HistoryAssociation} */
declare function HistoryAssociation(): HistoryAssociation;
type HistoryAssociation = {
    company_id?: number;
    subscriber_ids?: number[];
};
/** @returns {HistoryFilters} */
declare function HistoryFilters(): HistoryFilters;
type HistoryFilters = {
    /**
     * - The end date and time of the history report.
     */
    end_date?: string;
    events?: string[];
    search_text?: string;
    /**
     * - The start date and time of the history report.
     */
    start_date?: string;
    /**
     * - The status of the history report (e.g., "FAILED").
     */
    status?: string;
    /**
     * - An array of subscriber IDs associated
     * with the history report.
     */
    subscribers?: number[];
};
/** @returns {HistoryItems} */
declare function HistoryItems(): HistoryItems;
type HistoryItems = {
    association?: HistoryAssociation;
    /**
     * - The date and time when the history report
     * was created.
     */
    created_on?: string;
    /**
     * - The filename of the history report.
     */
    filename?: string;
    filters?: HistoryFilters;
    /**
     * - The ID of the history report.
     */
    id?: number;
    /**
     * - A message related to the history report.
     */
    message?: string;
    /**
     * - The status of the history report (e.g., "COMPLETED").
     */
    status?: string;
    /**
     * - The date and time when the history report
     * was last updated.
     */
    updated_on?: string;
    upload_service_response?: UploadServiceObject;
};
/** @returns {HistoryPayload} */
declare function HistoryPayload(): HistoryPayload;
type HistoryPayload = {
    /**
     * - The page number of the history report.
     */
    page_no?: number;
    /**
     * - The number of records per page.
     */
    page_size?: number;
    /**
     * - The type of history report (e.g., "platform").
     */
    type?: string;
};
/** @returns {HistoryResponse} */
declare function HistoryResponse(): HistoryResponse;
type HistoryResponse = {
    items?: HistoryItems[];
    page?: Page;
};
/** @returns {Item} */
declare function Item(): Item;
type Item = {
    count?: number;
    status?: string;
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
/** @returns {PingWebhook} */
declare function PingWebhook(): PingWebhook;
type PingWebhook = {
    /**
     * - Authentication metadata (if required by the
     * subscriber).
     */
    auth_meta?: any;
    /**
     * - Custom headers to include in the ping request.
     */
    custom_headers?: any;
    /**
     * - The URL of the subscriber's webhook to ping.
     */
    webhook_url?: string;
};
/** @returns {PingWebhookResponse} */
declare function PingWebhookResponse(): PingWebhookResponse;
type PingWebhookResponse = {
    /**
     * - The HTTP status code of the ping response (e.g., 200).
     */
    code?: number;
    /**
     * - An optional message related to the ping.
     */
    message?: string;
    /**
     * - The status of the ping (e.g., "SUCCESS").
     */
    status?: string;
};
/** @returns {ReportFilterResponse} */
declare function ReportFilterResponse(): ReportFilterResponse;
type ReportFilterResponse = {
    /**
     * - The name of the filter.
     */
    filter_name?: string;
    values?: any[];
};
/** @returns {ReportFiltersPayload} */
declare function ReportFiltersPayload(): ReportFiltersPayload;
type ReportFiltersPayload = {
    /**
     * - An array of subscriber IDs for
     * filtering filters (optional).
     */
    subscriber_ids?: number[];
};
/** @returns {RetryCountResponse} */
declare function RetryCountResponse(): RetryCountResponse;
type RetryCountResponse = {
    items?: Item[];
};
/** @returns {RetryEventRequest} */
declare function RetryEventRequest(): RetryEventRequest;
type RetryEventRequest = {
    end_date?: string;
    event?: Event[];
    search_text?: string;
    start_date?: string;
    status?: string;
    subscriber_ids?: number[];
};
/** @returns {RetryFailureResponse} */
declare function RetryFailureResponse(): RetryFailureResponse;
type RetryFailureResponse = {
    err?: Err[];
};
/** @returns {RetryStatusResponse} */
declare function RetryStatusResponse(): RetryStatusResponse;
type RetryStatusResponse = {
    /**
     * - The count of failed retry attempts.
     */
    failure_count?: number;
    /**
     * - The overall status of the retry process (e.g.,
     * "completed").
     */
    status?: string;
    /**
     * - The count of successfully retried events.
     */
    success_count?: number;
    /**
     * - The total number of events that require retry.
     */
    total_event?: number;
};
/** @returns {RetrySuccessResponse} */
declare function RetrySuccessResponse(): RetrySuccessResponse;
type RetrySuccessResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {SubscriberConfig} */
declare function SubscriberConfig(): SubscriberConfig;
type SubscriberConfig = {
    association?: Association;
    auth_meta?: AuthMeta;
    custom_headers?: any;
    email_id?: string;
    event_id?: number[];
    id?: number;
    name?: string;
    status?: string;
    webhook_url?: string;
};
/** @returns {SubscriberConfigList} */
declare function SubscriberConfigList(): SubscriberConfigList;
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
};
/** @returns {SubscriberConfigResponse} */
declare function SubscriberConfigResponse(): SubscriberConfigResponse;
type SubscriberConfigResponse = {
    association?: Association;
    auth_meta?: AuthMeta;
    created_on?: string;
    custom_headers?: any;
    email_id?: string;
    event_id?: number[];
    id?: number;
    modified_by?: string;
    name?: string;
    status?: string;
    type?: string;
    updated_on?: string;
    webhook_url?: string;
};
/** @returns {SubscriberEventMapping} */
declare function SubscriberEventMapping(): SubscriberEventMapping;
type SubscriberEventMapping = {
    created_on?: string;
    event_id?: number;
    id?: number;
    subscriber_id?: number;
};
/** @returns {SubscriberFailureResponse} */
declare function SubscriberFailureResponse(): SubscriberFailureResponse;
type SubscriberFailureResponse = {
    code?: string;
    message?: string;
    stack?: string;
};
/** @returns {SubscriberResponse} */
declare function SubscriberResponse(): SubscriberResponse;
type SubscriberResponse = {
    association?: Association;
    auth_meta?: AuthMeta;
    created_on?: string;
    custom_headers?: any;
    email_id?: string;
    event_configs?: EventConfigs[];
    id?: number;
    modified_by?: string;
    name?: string;
    status?: string;
    type?: string;
    updated_on?: string;
    webhook_url?: string;
};
/** @returns {UploadServiceObject} */
declare function UploadServiceObject(): UploadServiceObject;
type UploadServiceObject = {
    cdn?: CdnObject;
};
/** @returns {Url} */
declare function Url(): Url;
type Url = {
    /**
     * - The name of the uploaded report file.
     */
    name?: string;
    /**
     * - The URL of the uploaded report file.
     */
    url?: string;
};
