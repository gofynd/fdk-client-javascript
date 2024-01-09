export = WebhookPlatformModel;
/**
 * @typedef Association
 * @property {string[]} [application_id]
 * @property {number} [company_id]
 * @property {string} [criteria]
 * @property {string} [extension_id]
 */
/**
 * @typedef AssociationDetails
 * @property {number} [company_id]
 */
/**
 * @typedef AuthMeta
 * @property {string} [secret]
 * @property {string} [type]
 */
/**
 * @typedef CancelResponse
 * @property {number} [code] - The HTTP status code of the response (e.g., 200).
 */
/**
 * @typedef CdnObject
 * @property {Url[]} [urls]
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
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef EventCountItem
 * @property {number} [count] - The count of events with the specified status
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 */
/**
 * @typedef EventProcessedSuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef EventProcessReportObject
 * @property {number} [attempt] - The attempt number of the event.
 * @property {string} [data] - The data associated with the event.
 * @property {string} [event_name] - The name of the processed event.
 * @property {number} [last_attempted_on] - The timestamp of the last attempted event.
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
 * @property {number[]} [subscriber_ids]
 */
/**
 * @typedef EventSuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef FailedEventsCountSuccessResponse
 * @property {EventCountItem[]} [items]
 */
/**
 * @typedef FilterResponseObject
 * @property {string} [filter_name] - The name of the filter.
 * @property {FilterValues[]} [values]
 */
/**
 * @typedef FilterValues
 * @property {string} [text] - The display text for the filter value.
 * @property {Object} [value] - The value associated with the filter value.
 */
/**
 * @typedef HistoryFilters
 * @property {string} [end_date] - The end date and time of the history report.
 * @property {string} [start_date] - The start date and time of the history report.
 * @property {string} [status] - The status of the history report (e.g., "FAILED").
 * @property {number[]} [subscribers] - An array of subscriber IDs associated
 *   with the history report.
 */
/**
 * @typedef HistoryPayload
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 * @property {string} [type] - The type of history report (e.g., "platform").
 */
/**
 * @typedef HistoryResponse
 * @property {HistoryResponseObject[]} [items]
 */
/**
 * @typedef HistoryResponseObject
 * @property {AssociationDetails} [association]
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
 * @typedef ManualRetryFailedResponse
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {boolean} [success]
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
 * @property {FilterResponseObject[]} [items]
 */
/**
 * @typedef ReportFiltersPayload
 * @property {number[]} [subscriber_ids] - An array of subscriber IDs for
 *   filtering filters (optional).
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
 * @typedef SubscriberConfig
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [webhook_url]
 */
/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SubscriberResponse
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {EventConfig[]} [event_configs]
 * @property {number} [id]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
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
/** @typedef {"active" | "inactive" | "blocked"} SubscriberStatus */
declare class WebhookPlatformModel {
}
declare namespace WebhookPlatformModel {
    export { Association, AssociationDetails, AuthMeta, CancelResponse, CdnObject, Error, Event, EventConfig, EventConfigResponse, EventCountItem, EventProcessedSuccessResponse, EventProcessReportObject, EventProcessReports, EventProcessRequest, EventSuccessResponse, FailedEventsCountSuccessResponse, FilterResponseObject, FilterValues, HistoryFilters, HistoryPayload, HistoryResponse, HistoryResponseObject, ManualRetryFailedResponse, Page, PingWebhook, PingWebhookResponse, ReportFilterResponse, ReportFiltersPayload, RetryStatusResponse, SubscriberConfig, SubscriberConfigList, SubscriberResponse, UploadServiceObject, Url, SubscriberStatus };
}
/** @returns {Association} */
declare function Association(): Association;
type Association = {
    application_id?: string[];
    company_id?: number;
    criteria?: string;
    extension_id?: string;
};
/** @returns {AssociationDetails} */
declare function AssociationDetails(): AssociationDetails;
type AssociationDetails = {
    company_id?: number;
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
    code?: number;
};
/** @returns {CdnObject} */
declare function CdnObject(): CdnObject;
type CdnObject = {
    urls?: Url[];
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
    event_configs?: EventConfig[];
};
/** @returns {EventCountItem} */
declare function EventCountItem(): EventCountItem;
type EventCountItem = {
    /**
     * - The count of events with the specified status
     */
    count?: number;
    /**
     * - The status of the event (e.g., "FAILED").
     */
    status?: string;
};
/** @returns {EventProcessedSuccessResponse} */
declare function EventProcessedSuccessResponse(): EventProcessedSuccessResponse;
type EventProcessedSuccessResponse = {
    message?: string;
    success?: boolean;
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
    data?: string;
    /**
     * - The name of the processed event.
     */
    event_name?: string;
    /**
     * - The timestamp of the last attempted event.
     */
    last_attempted_on?: number;
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
    subscriber_ids?: number[];
};
/** @returns {EventSuccessResponse} */
declare function EventSuccessResponse(): EventSuccessResponse;
type EventSuccessResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {FailedEventsCountSuccessResponse} */
declare function FailedEventsCountSuccessResponse(): FailedEventsCountSuccessResponse;
type FailedEventsCountSuccessResponse = {
    items?: EventCountItem[];
};
/** @returns {FilterResponseObject} */
declare function FilterResponseObject(): FilterResponseObject;
type FilterResponseObject = {
    /**
     * - The name of the filter.
     */
    filter_name?: string;
    values?: FilterValues[];
};
/** @returns {FilterValues} */
declare function FilterValues(): FilterValues;
type FilterValues = {
    /**
     * - The display text for the filter value.
     */
    text?: string;
    /**
     * - The value associated with the filter value.
     */
    value?: any;
};
/** @returns {HistoryFilters} */
declare function HistoryFilters(): HistoryFilters;
type HistoryFilters = {
    /**
     * - The end date and time of the history report.
     */
    end_date?: string;
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
    items?: HistoryResponseObject[];
};
/** @returns {HistoryResponseObject} */
declare function HistoryResponseObject(): HistoryResponseObject;
type HistoryResponseObject = {
    association?: AssociationDetails;
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
/** @returns {ManualRetryFailedResponse} */
declare function ManualRetryFailedResponse(): ManualRetryFailedResponse;
type ManualRetryFailedResponse = {
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    success?: boolean;
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
    items?: FilterResponseObject[];
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
    status?: SubscriberStatus;
    webhook_url?: string;
};
/** @returns {SubscriberConfigList} */
declare function SubscriberConfigList(): SubscriberConfigList;
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
};
/** @returns {SubscriberResponse} */
declare function SubscriberResponse(): SubscriberResponse;
type SubscriberResponse = {
    association?: Association;
    auth_meta?: AuthMeta;
    created_on?: string;
    custom_headers?: any;
    email_id?: string;
    event_configs?: EventConfig[];
    id?: number;
    name?: string;
    status?: SubscriberStatus;
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
/**
 * Enum: SubscriberStatus Used By: Webhook
 *
 * @returns {SubscriberStatus}
 */
declare function SubscriberStatus(): SubscriberStatus;
type SubscriberStatus = "active" | "inactive" | "blocked";
