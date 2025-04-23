export = WebhookPlatformModel;
/**
 * @typedef Event
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */
/**
 * @typedef EventProcessRequest
 * @property {string} [search_text]
 * @property {string} end_date
 * @property {string} start_date
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
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 */
/**
 * @typedef PingWebhook
 * @property {string} webhook_url - The URL of the subscriber's webhook to ping.
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
 * @typedef SubscriberEventMapping
 * @property {number} [id]
 * @property {number} [event_id]
 * @property {number} [subscriber_id]
 * @property {string} [topic]
 * @property {string} [created_on]
 */
/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 * @property {Object} [event_schema]
 * @property {string} [group]
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
 * @property {number[]} subscriber_ids - An array of subscriber IDs for
 *   filtering filters (optional).
 */
/**
 * @typedef ReportFilterResponse
 * @property {string} [filter_name] - The name of the filter.
 * @property {Object[]} [values]
 */
/**
 * @typedef HistoryPayload
 * @property {string} type - The type of history report (e.g., "platform").
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
 * @property {string[]} [webhook_type] - An array of webhook type to identify
 *   thetype of subscriber i.e (KAFKA or REST).
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
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */
/**
 * @typedef AssociationResp
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
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {string} [webhook_url]
 * @property {AssociationResp} [association]
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
 * @typedef Events
 * @property {string} [slug]
 * @property {string} [topic]
 */
/**
 * @typedef SubscriberConfigPostRequestV2
 * @property {string} name
 * @property {string} [webhook_url]
 * @property {string} provider
 * @property {Association} association
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} status
 * @property {string} email_id
 * @property {AuthMeta} [auth_meta]
 * @property {Events[]} events
 */
/**
 * @typedef SubscriberConfigUpdateRequestV2
 * @property {number} id
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {string} provider
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} status
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {Events[]} [events]
 */
/**
 * @typedef SubscriberConfigPost
 * @property {string} name
 * @property {string} webhook_url
 * @property {Association} association
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} status
 * @property {string} email_id
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} event_id
 */
/**
 * @typedef SubscriberConfigUpdate
 * @property {number} id
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} event_id
 */
/**
 * @typedef SubscriberConfigResponse
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {string} [provider]
 * @property {AssociationResp} [association]
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
/** @typedef {"active" | "inactive"} SubscriberStatus */
declare class WebhookPlatformModel {
}
declare namespace WebhookPlatformModel {
    export { Event, EventProcessRequest, DownloadReportResponse, EventProcessReports, EventProcessReportObject, Page, PingWebhook, PingWebhookResponse, SubscriberEventMapping, EventConfig, EventConfigResponse, ReportFiltersPayload, ReportFilterResponse, HistoryPayload, HistoryFilters, Url, CdnObject, UploadServiceObject, HistoryAssociation, HistoryItems, HistoryResponse, CancelResponse, Association, AssociationResp, AuthMeta, SubscriberResponse, Events, SubscriberConfigPostRequestV2, SubscriberConfigUpdateRequestV2, SubscriberConfigPost, SubscriberConfigUpdate, SubscriberConfigResponse, SubscriberConfigList, SubscriberStatus };
}
/** @returns {Event} */
declare function Event(): Event;
type Event = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
/** @returns {EventProcessRequest} */
declare function EventProcessRequest(): EventProcessRequest;
type EventProcessRequest = {
    search_text?: string;
    end_date: string;
    start_date: string;
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
/** @returns {PingWebhook} */
declare function PingWebhook(): PingWebhook;
type PingWebhook = {
    /**
     * - The URL of the subscriber's webhook to ping.
     */
    webhook_url: string;
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
/** @returns {SubscriberEventMapping} */
declare function SubscriberEventMapping(): SubscriberEventMapping;
type SubscriberEventMapping = {
    id?: number;
    event_id?: number;
    subscriber_id?: number;
    topic?: string;
    created_on?: string;
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
    group?: string;
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
    subscriber_ids: number[];
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
    type: string;
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
    /**
     * - An array of webhook type to identify
     * thetype of subscriber i.e (KAFKA or REST).
     */
    webhook_type?: string[];
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
    application_id?: string[];
    extension_id?: string;
    criteria?: string;
};
/** @returns {AssociationResp} */
declare function AssociationResp(): AssociationResp;
type AssociationResp = {
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
/** @returns {SubscriberResponse} */
declare function SubscriberResponse(): SubscriberResponse;
type SubscriberResponse = {
    id?: number;
    modified_by?: string;
    name?: string;
    provider?: string;
    webhook_url?: string;
    association?: AssociationResp;
    custom_headers?: any;
    status?: SubscriberStatus;
    email_id?: string;
    updated_on?: string;
    created_on?: string;
    type?: string;
    auth_meta?: AuthMeta;
    event_configs?: EventConfig[];
};
/** @returns {Events} */
declare function Events(): Events;
type Events = {
    slug?: string;
    topic?: string;
};
/** @returns {SubscriberConfigPostRequestV2} */
declare function SubscriberConfigPostRequestV2(): SubscriberConfigPostRequestV2;
type SubscriberConfigPostRequestV2 = {
    name: string;
    webhook_url?: string;
    provider: string;
    association: Association;
    custom_headers?: any;
    status: SubscriberStatus;
    email_id: string;
    auth_meta?: AuthMeta;
    events: Events[];
};
/** @returns {SubscriberConfigUpdateRequestV2} */
declare function SubscriberConfigUpdateRequestV2(): SubscriberConfigUpdateRequestV2;
type SubscriberConfigUpdateRequestV2 = {
    id: number;
    name?: string;
    webhook_url?: string;
    provider: string;
    association?: Association;
    custom_headers?: any;
    status: SubscriberStatus;
    email_id?: string;
    auth_meta?: AuthMeta;
    events?: Events[];
};
/** @returns {SubscriberConfigPost} */
declare function SubscriberConfigPost(): SubscriberConfigPost;
type SubscriberConfigPost = {
    name: string;
    webhook_url: string;
    association: Association;
    custom_headers?: any;
    status: SubscriberStatus;
    email_id: string;
    auth_meta?: AuthMeta;
    event_id: number[];
};
/** @returns {SubscriberConfigUpdate} */
declare function SubscriberConfigUpdate(): SubscriberConfigUpdate;
type SubscriberConfigUpdate = {
    id: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: SubscriberStatus;
    email_id?: string;
    auth_meta?: AuthMeta;
    event_id: number[];
};
/** @returns {SubscriberConfigResponse} */
declare function SubscriberConfigResponse(): SubscriberConfigResponse;
type SubscriberConfigResponse = {
    id?: number;
    modified_by?: string;
    name?: string;
    webhook_url?: string;
    provider?: string;
    association?: AssociationResp;
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
type SubscriberStatus = "active" | "inactive";
