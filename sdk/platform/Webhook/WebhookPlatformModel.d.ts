export = WebhookPlatformModel;
/**
 * @typedef CancelResponse
 * @property {number} [code] - The HTTP status code of the response (e.g., 200).
 */
/**
 * @typedef EventProcessRequest
 * @property {string} [search_text]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {number[]} [subscriber_ids]
 * @property {Event[]} [event]
 */
/**
 * @typedef Event
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */
/**
 * @typedef ManualRetryFailedResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {Object} [meta]
 * @property {string} [stack_trace]
 */
/**
 * @typedef FailedEventsCountSuccessResponse
 * @property {EventCountItem[]} [items]
 */
/**
 * @typedef EventCountItem
 * @property {string} [status] - The status of the event (e.g., "FAILED").
 * @property {number} [count] - The count of events with the specified status
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
 * @typedef EventSuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef EventProcessedSuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef Error
 * @property {string} [error] - Error message describing the reason for the failure.
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
 */
/**
 * @typedef EventProcessReports
 * @property {EventProcessReportObject[]} [rows]
 * @property {Page} [page]
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
 * @typedef ReportFiltersPayload
 * @property {number[]} [subscriber_ids] - An array of subscriber IDs for
 *   filtering filters (optional).
 */
/**
 * @typedef FilterValues
 * @property {string} [text] - The display text for the filter value.
 * @property {Object} [value] - The value associated with the filter value.
 */
/**
 * @typedef FilterResponseObject
 * @property {string} [filter_name] - The name of the filter.
 * @property {FilterValues[]} [values]
 */
/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */
/**
 * @typedef ReportFilterResponse
 * @property {FilterResponseObject[]} [items]
 */
/**
 * @typedef HistoryPayload
 * @property {string} [type] - The type of history report (e.g., "platform").
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 */
/**
 * @typedef HistoryFilters
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
 * @typedef HistoryResponseObject
 * @property {number} [id] - The ID of the history report.
 * @property {AssociationDetails} [association]
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
 * @property {HistoryResponseObject[]} [items]
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
 * @typedef AssociationDetails
 * @property {number} [company_id]
 */
/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */
/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
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
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */
/** @typedef {"active" | "inactive" | "blocked"} SubscriberStatus */
declare class WebhookPlatformModel {
}
declare namespace WebhookPlatformModel {
    export { CancelResponse, EventProcessRequest, Event, ManualRetryFailedResponse, FailedEventsCountSuccessResponse, EventCountItem, RetryStatusResponse, EventSuccessResponse, EventProcessedSuccessResponse, Error, EventProcessReportObject, EventProcessReports, PingWebhook, PingWebhookResponse, ReportFiltersPayload, FilterValues, FilterResponseObject, EventConfigResponse, EventConfig, ReportFilterResponse, HistoryPayload, HistoryFilters, Url, CdnObject, UploadServiceObject, HistoryResponseObject, HistoryResponse, Page, AssociationDetails, SubscriberResponse, AuthMeta, Association, SubscriberConfig, SubscriberConfigList, SubscriberStatus };
}
/** @returns {CancelResponse} */
declare function CancelResponse(): CancelResponse;
type CancelResponse = {
    /**
     * - The HTTP status code of the response (e.g., 200).
     */
    code?: number;
};
/** @returns {EventProcessRequest} */
declare function EventProcessRequest(): EventProcessRequest;
type EventProcessRequest = {
    search_text?: string;
    end_date?: string;
    start_date?: string;
    subscriber_ids?: number[];
    event?: Event[];
};
/** @returns {Event} */
declare function Event(): Event;
type Event = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
/** @returns {ManualRetryFailedResponse} */
declare function ManualRetryFailedResponse(): ManualRetryFailedResponse;
type ManualRetryFailedResponse = {
    success?: boolean;
    message?: string;
    request_id?: string;
    meta?: any;
    stack_trace?: string;
};
/** @returns {FailedEventsCountSuccessResponse} */
declare function FailedEventsCountSuccessResponse(): FailedEventsCountSuccessResponse;
type FailedEventsCountSuccessResponse = {
    items?: EventCountItem[];
};
/** @returns {EventCountItem} */
declare function EventCountItem(): EventCountItem;
type EventCountItem = {
    /**
     * - The status of the event (e.g., "FAILED").
     */
    status?: string;
    /**
     * - The count of events with the specified status
     */
    count?: number;
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
/** @returns {EventSuccessResponse} */
declare function EventSuccessResponse(): EventSuccessResponse;
type EventSuccessResponse = {
    success?: boolean;
    message?: string;
};
/** @returns {EventProcessedSuccessResponse} */
declare function EventProcessedSuccessResponse(): EventProcessedSuccessResponse;
type EventProcessedSuccessResponse = {
    success?: boolean;
    message?: string;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    /**
     * - Error message describing the reason for the failure.
     */
    error?: string;
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
};
/** @returns {EventProcessReports} */
declare function EventProcessReports(): EventProcessReports;
type EventProcessReports = {
    rows?: EventProcessReportObject[];
    page?: Page;
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
/** @returns {ReportFiltersPayload} */
declare function ReportFiltersPayload(): ReportFiltersPayload;
type ReportFiltersPayload = {
    /**
     * - An array of subscriber IDs for
     * filtering filters (optional).
     */
    subscriber_ids?: number[];
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
/** @returns {FilterResponseObject} */
declare function FilterResponseObject(): FilterResponseObject;
type FilterResponseObject = {
    /**
     * - The name of the filter.
     */
    filter_name?: string;
    values?: FilterValues[];
};
/** @returns {EventConfigResponse} */
declare function EventConfigResponse(): EventConfigResponse;
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
/** @returns {EventConfig} */
declare function EventConfig(): EventConfig;
type EventConfig = {
    id?: number;
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
};
/** @returns {ReportFilterResponse} */
declare function ReportFilterResponse(): ReportFilterResponse;
type ReportFilterResponse = {
    items?: FilterResponseObject[];
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
/** @returns {HistoryResponseObject} */
declare function HistoryResponseObject(): HistoryResponseObject;
type HistoryResponseObject = {
    /**
     * - The ID of the history report.
     */
    id?: number;
    association?: AssociationDetails;
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
    items?: HistoryResponseObject[];
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
/** @returns {AssociationDetails} */
declare function AssociationDetails(): AssociationDetails;
type AssociationDetails = {
    company_id?: number;
};
/** @returns {SubscriberResponse} */
declare function SubscriberResponse(): SubscriberResponse;
type SubscriberResponse = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    email_id?: string;
    status?: SubscriberStatus;
    auth_meta?: AuthMeta;
    created_on?: string;
    updated_on?: string;
    event_configs?: EventConfig[];
};
/** @returns {AuthMeta} */
declare function AuthMeta(): AuthMeta;
type AuthMeta = {
    type?: string;
    secret?: string;
};
/** @returns {Association} */
declare function Association(): Association;
type Association = {
    company_id?: number;
    application_id?: string[];
    extension_id?: string;
    criteria?: string;
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
type SubscriberStatus = "active" | "inactive" | "blocked";
