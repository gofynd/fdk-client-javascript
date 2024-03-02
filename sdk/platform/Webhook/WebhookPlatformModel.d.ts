export = WebhookPlatformModel;
/**
 * @typedef Error
 * @property {string} [error] - Error message describing the reason for the failure.
 */
/**
 * @typedef Event
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */
/**
 * @typedef RetryEventRequest
 * @property {string} [search_text]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {number[]} [subscriber_ids]
 * @property {Event[]} [event]
 * @property {string} [status]
 */
/**
 * @typedef Item
 * @property {string} [status]
 * @property {number} [count]
 */
/**
 * @typedef RetryCountResponse
 * @property {Item[]} [items]
 */
/**
 * @typedef RetrySuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef Err
 * @property {string} [msg]
 * @property {string} [param]
 * @property {string} [location]
 */
/**
 * @typedef RetryFailureResponse
 * @property {Err[]} [err]
 */
/**
 * @typedef RetryStatusResponse
 * @property {number} [total_event] - The total number of events that require retry.
 * @property {number} [success_count] - The count of successfully retried events.
 * @property {number} [failure_count] - The count of failed retry attempts.
 * @property {string} [status] - The overall status of the retry process (e.g.,
 *   "completed").
 */
/**
 * @typedef EventProcessRequest
 * @property {string} [search_text]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {number[]} [subscriber_ids]
 * @property {string} [status]
 * @property {Event[]} [event]
 */
/**
 * @typedef DownloadReportResponse
 * @property {string} [file_name]
 */
/**
 * @typedef EventProcessReports
 * @property {EventProcessReportObject[]} [rows]
 * @property {Page} [page]
 */
/**
 * @typedef EventProcessReportObject
 * @property {string} [event_name] - The name of the processed event.
 * @property {number} [response_code] - The response code of the event.
 * @property {string} [response_message] - The response message of the event.
 * @property {string} [data] - The data associated with the event.
 * @property {number} [attempt] - The attempt number of the event.
 * @property {number} [last_attempted_on] - The timestamp of the last attempted event.
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 * @property {string} [name] - The name of the event.
 * @property {string} [webhook_url] - The webhook URL associated with the event.
 * @property {number} [response_time] - The response time of the event.
 * @property {string} [message_id]
 * @property {string} [event_trace_id]
 */
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
 * @typedef PingWebhook
 * @property {string} [webhook_url] - The URL of the subscriber's webhook to ping.
 * @property {Object} [auth_meta] - Authentication metadata (if required by the
 *   subscriber).
 * @property {Object} [custom_headers] - Custom headers to include in the ping request.
 */
/**
 * @typedef PingWebhookResponse
 * @property {string} [status] - The status of the ping (e.g., "SUCCESS").
 * @property {string} [message] - An optional message related to the ping.
 * @property {number} [code] - The HTTP status code of the ping response (e.g., 200).
 */
/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 * @property {Object} [event_schema]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 */
/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef ReportFiltersPayload
 * @property {number[]} [subscriber_ids] - An array of subscriber IDs for
 *   filtering filters (optional).
 */
/**
 * @typedef ReportFilterResponse
 * @property {string} [filter_name] - The name of the filter.
 * @property {Object[]} [values]
 */
/**
 * @typedef HistoryPayload
 * @property {string} [type] - The type of history report (e.g., "platform").
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 */
/**
 * @typedef HistoryFilters
 * @property {string[]} [events]
 * @property {string} [search_text]
 * @property {string} [status] - The status of the history report (e.g., "FAILED").
 * @property {string} [end_date] - The end date and time of the history report.
 * @property {string} [start_date] - The start date and time of the history report.
 * @property {number[]} [subscribers] - An array of subscriber IDs associated
 *   with the history report.
 */
/**
 * @typedef Url
 * @property {string} [url] - The URL of the uploaded report file.
 * @property {string} [name] - The name of the uploaded report file.
 */
/**
 * @typedef CdnObject
 * @property {Url[]} [urls]
 */
/**
 * @typedef UploadServiceObject
 * @property {CdnObject} [cdn]
 */
/**
 * @typedef HistoryAssociation
 * @property {number} [company_id]
 * @property {number[]} [subscriber_ids]
 */
/**
 * @typedef HistoryItems
 * @property {number} [id] - The ID of the history report.
 * @property {HistoryAssociation} [association]
 * @property {HistoryFilters} [filters]
 * @property {string} [filename] - The filename of the history report.
 * @property {string} [status] - The status of the history report (e.g., "COMPLETED").
 * @property {UploadServiceObject} [upload_service_response]
 * @property {string} [created_on] - The date and time when the history report
 *   was created.
 * @property {string} [updated_on] - The date and time when the history report
 *   was last updated.
 * @property {string} [message] - A message related to the history report.
 */
/**
 * @typedef HistoryResponse
 * @property {HistoryItems[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CancelResponse
 * @property {string} [message] - The HTTP status code of the response (e.g., 200).
 */
/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */
/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */
/**
 * @typedef SubscriberEventMapping
 * @property {number} [id]
 * @property {number} [event_id]
 * @property {number} [subscriber_id]
 * @property {string} [created_on]
 */
/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {string} [updated_on]
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {AuthMeta} [auth_meta]
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */
/**
 * @typedef SubscriberConfigResponse
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {string} [updated_on]
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */
/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */
/** @typedef {"" | "" | ""} SubscriberStatus */
declare class WebhookPlatformModel {
}
declare namespace WebhookPlatformModel {
    export { Error, Event, RetryEventRequest, Item, RetryCountResponse, RetrySuccessResponse, Err, RetryFailureResponse, RetryStatusResponse, EventProcessRequest, DownloadReportResponse, EventProcessReports, EventProcessReportObject, Page, PingWebhook, PingWebhookResponse, EventConfig, EventConfigResponse, ReportFiltersPayload, ReportFilterResponse, HistoryPayload, HistoryFilters, Url, CdnObject, UploadServiceObject, HistoryAssociation, HistoryItems, HistoryResponse, CancelResponse, Association, AuthMeta, SubscriberEventMapping, SubscriberResponse, SubscriberConfig, SubscriberConfigResponse, SubscriberConfigList, SubscriberStatus };
}
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
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
/** @returns {RetryEventRequest} */
declare function RetryEventRequest(): RetryEventRequest;
type RetryEventRequest = {
    search_text?: string;
    end_date?: string;
    start_date?: string;
    subscriber_ids?: number[];
    event?: Event[];
    status?: string;
};
/** @returns {Item} */
declare function Item(): Item;
type Item = {
    status?: string;
    count?: number;
};
/** @returns {RetryCountResponse} */
declare function RetryCountResponse(): RetryCountResponse;
type RetryCountResponse = {
    items?: Item[];
};
/** @returns {RetrySuccessResponse} */
declare function RetrySuccessResponse(): RetrySuccessResponse;
type RetrySuccessResponse = {
    success?: boolean;
    message?: string;
};
/** @returns {Err} */
declare function Err(): Err;
type Err = {
    msg?: string;
    param?: string;
    location?: string;
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
     * - The total number of events that require retry.
     */
    total_event?: number;
    /**
     * - The count of successfully retried events.
     */
    success_count?: number;
    /**
     * - The count of failed retry attempts.
     */
    failure_count?: number;
    /**
     * - The overall status of the retry process (e.g.,
     * "completed").
     */
    status?: string;
};
/** @returns {EventProcessRequest} */
declare function EventProcessRequest(): EventProcessRequest;
type EventProcessRequest = {
    search_text?: string;
    end_date?: string;
    start_date?: string;
    subscriber_ids?: number[];
    status?: string;
    event?: Event[];
};
/** @returns {DownloadReportResponse} */
declare function DownloadReportResponse(): DownloadReportResponse;
type DownloadReportResponse = {
    file_name?: string;
};
/** @returns {EventProcessReports} */
declare function EventProcessReports(): EventProcessReports;
type EventProcessReports = {
    rows?: EventProcessReportObject[];
    page?: Page;
};
/** @returns {EventProcessReportObject} */
declare function EventProcessReportObject(): EventProcessReportObject;
type EventProcessReportObject = {
    /**
     * - The name of the processed event.
     */
    event_name?: string;
    /**
     * - The response code of the event.
     */
    response_code?: number;
    /**
     * - The response message of the event.
     */
    response_message?: string;
    /**
     * - The data associated with the event.
     */
    data?: string;
    /**
     * - The attempt number of the event.
     */
    attempt?: number;
    /**
     * - The timestamp of the last attempted event.
     */
    last_attempted_on?: number;
    /**
     * - The status of the event (e.g., "FAILED").
     */
    status?: string;
    /**
     * - The name of the event.
     */
    name?: string;
    /**
     * - The webhook URL associated with the event.
     */
    webhook_url?: string;
    /**
     * - The response time of the event.
     */
    response_time?: number;
    message_id?: string;
    event_trace_id?: string;
};
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
/** @returns {PingWebhook} */
declare function PingWebhook(): PingWebhook;
type PingWebhook = {
    /**
     * - The URL of the subscriber's webhook to ping.
     */
    webhook_url?: string;
    /**
     * - Authentication metadata (if required by the
     * subscriber).
     */
    auth_meta?: any;
    /**
     * - Custom headers to include in the ping request.
     */
    custom_headers?: any;
};
/** @returns {PingWebhookResponse} */
declare function PingWebhookResponse(): PingWebhookResponse;
type PingWebhookResponse = {
    /**
     * - The status of the ping (e.g., "SUCCESS").
     */
    status?: string;
    /**
     * - An optional message related to the ping.
     */
    message?: string;
    /**
     * - The HTTP status code of the ping response (e.g., 200).
     */
    code?: number;
};
/** @returns {EventConfig} */
declare function EventConfig(): EventConfig;
type EventConfig = {
    id?: number;
    event_name?: string;
    event_type?: string;
    event_category?: string;
    subscriber_event_mapping?: SubscriberEventMapping;
    event_schema?: any;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
    updated_on?: string;
};
/** @returns {EventConfigResponse} */
declare function EventConfigResponse(): EventConfigResponse;
type EventConfigResponse = {
    event_configs?: EventConfig[];
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
/** @returns {ReportFilterResponse} */
declare function ReportFilterResponse(): ReportFilterResponse;
type ReportFilterResponse = {
    /**
     * - The name of the filter.
     */
    filter_name?: string;
    values?: any[];
};
/** @returns {HistoryPayload} */
declare function HistoryPayload(): HistoryPayload;
type HistoryPayload = {
    /**
     * - The type of history report (e.g., "platform").
     */
    type?: string;
    /**
     * - The page number of the history report.
     */
    page_no?: number;
    /**
     * - The number of records per page.
     */
    page_size?: number;
};
/** @returns {HistoryFilters} */
declare function HistoryFilters(): HistoryFilters;
type HistoryFilters = {
    events?: string[];
    search_text?: string;
    /**
     * - The status of the history report (e.g., "FAILED").
     */
    status?: string;
    /**
     * - The end date and time of the history report.
     */
    end_date?: string;
    /**
     * - The start date and time of the history report.
     */
    start_date?: string;
    /**
     * - An array of subscriber IDs associated
     * with the history report.
     */
    subscribers?: number[];
};
/** @returns {Url} */
declare function Url(): Url;
type Url = {
    /**
     * - The URL of the uploaded report file.
     */
    url?: string;
    /**
     * - The name of the uploaded report file.
     */
    name?: string;
};
/** @returns {CdnObject} */
declare function CdnObject(): CdnObject;
type CdnObject = {
    urls?: Url[];
};
/** @returns {UploadServiceObject} */
declare function UploadServiceObject(): UploadServiceObject;
type UploadServiceObject = {
    cdn?: CdnObject;
};
/** @returns {HistoryAssociation} */
declare function HistoryAssociation(): HistoryAssociation;
type HistoryAssociation = {
    company_id?: number;
    subscriber_ids?: number[];
};
/** @returns {HistoryItems} */
declare function HistoryItems(): HistoryItems;
type HistoryItems = {
    /**
     * - The ID of the history report.
     */
    id?: number;
    association?: HistoryAssociation;
    filters?: HistoryFilters;
    /**
     * - The filename of the history report.
     */
    filename?: string;
    /**
     * - The status of the history report (e.g., "COMPLETED").
     */
    status?: string;
    upload_service_response?: UploadServiceObject;
    /**
     * - The date and time when the history report
     * was created.
     */
    created_on?: string;
    /**
     * - The date and time when the history report
     * was last updated.
     */
    updated_on?: string;
    /**
     * - A message related to the history report.
     */
    message?: string;
};
/** @returns {HistoryResponse} */
declare function HistoryResponse(): HistoryResponse;
type HistoryResponse = {
    items?: HistoryItems[];
    page?: Page;
};
/** @returns {CancelResponse} */
declare function CancelResponse(): CancelResponse;
type CancelResponse = {
    /**
     * - The HTTP status code of the response (e.g., 200).
     */
    message?: string;
};
/** @returns {Association} */
declare function Association(): Association;
type Association = {
    company_id?: number;
    application_id?: string[];
    extension_id?: string;
    criteria?: string;
};
/** @returns {AuthMeta} */
declare function AuthMeta(): AuthMeta;
type AuthMeta = {
    type?: string;
    secret?: string;
};
/** @returns {SubscriberEventMapping} */
declare function SubscriberEventMapping(): SubscriberEventMapping;
type SubscriberEventMapping = {
    id?: number;
    event_id?: number;
    subscriber_id?: number;
    created_on?: string;
};
/** @returns {SubscriberResponse} */
declare function SubscriberResponse(): SubscriberResponse;
type SubscriberResponse = {
    id?: number;
    modified_by?: string;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: SubscriberStatus;
    email_id?: string;
    updated_on?: string;
    created_on?: string;
    type?: string;
    auth_meta?: AuthMeta;
    event_configs?: EventConfig[];
};
/** @returns {SubscriberConfig} */
declare function SubscriberConfig(): SubscriberConfig;
type SubscriberConfig = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: SubscriberStatus;
    email_id?: string;
    auth_meta?: AuthMeta;
    event_id?: number[];
};
/** @returns {SubscriberConfigResponse} */
declare function SubscriberConfigResponse(): SubscriberConfigResponse;
type SubscriberConfigResponse = {
    id?: number;
    modified_by?: string;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: SubscriberStatus;
    email_id?: string;
    updated_on?: string;
    created_on?: string;
    type?: string;
    auth_meta?: AuthMeta;
    event_id?: number[];
};
/** @returns {SubscriberConfigList} */
declare function SubscriberConfigList(): SubscriberConfigList;
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
};
/**
 * Enum: SubscriberStatus Used By: Webhook
 *
 * @returns {SubscriberStatus}
 */
declare function SubscriberStatus(): SubscriberStatus;
type SubscriberStatus = "" | "" | "";
