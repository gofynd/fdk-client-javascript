export = WebhookPartnerModel;
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
 * @typedef CancelDownloadResponse
 * @property {string} [message]
 * @property {string} [result]
 */
/**
 * @typedef CdnObject
 * @property {Url[]} [urls]
 */
/**
 * @typedef DeliveryDetailsRequest
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {EventDeliveryDetailSchema[]} [event]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {string} [start_date]
 * @property {string} [status]
 */
/**
 * @typedef DeliveryDetailsResponse
 * @property {Page} [page]
 * @property {EventProcessReportObject[]} [rows]
 */
/**
 * @typedef DeliveryEventLevelSchema
 * @property {string} [event]
 * @property {number} [failed]
 * @property {number} [failed_percentage]
 * @property {number} [removed_webhooks]
 * @property {number} [response_time]
 * @property {number} [success]
 * @property {number} [total]
 */
/**
 * @typedef DeliverySummaryResponse
 * @property {DeliveryEventLevelSchema[]} [delivery_event_level]
 * @property {DeliverySummarySchema} [delivery_summary]
 */
/**
 * @typedef DeliverySummarySchema
 * @property {number} [failed_percentage]
 * @property {number} [removed_webhooks]
 * @property {number} [response_time]
 * @property {number} [success]
 */
/**
 * @typedef DeliveryTsResponse
 * @property {DeliveryTsSchema[]} [delivery_ts]
 */
/**
 * @typedef DeliveryTsSchema
 * @property {number} [failed]
 * @property {number} [removed_webhooks]
 * @property {number} [success]
 * @property {string} [timestamp]
 */
/**
 * @typedef DownloadReponse
 * @property {string} [file_name]
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
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 * @property {string} [updated_on]
 * @property {string} [version]
 */
/**
 * @typedef EventDeliveryDetailSchema
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
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
 * @typedef FilterReportResponse
 * @property {string} [filter_name]
 * @property {Object[]} [values]
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
 * @property {number} [company_id]
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
 * @typedef InvalidEventsRequest
 * @property {string} [category]
 * @property {string} [end_date]
 * @property {string} [event_name]
 * @property {string} [start_date]
 * @property {string} [version]
 */
/**
 * @typedef InvalidEventsResponse
 * @property {string} [category]
 * @property {number} [count]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */
/**
 * @typedef ItemSchema
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {EventConfigResponse[]} [event_configs]
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
 * @typedef SubscriberConfigResponse
 * @property {ItemSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SubscriberEventMapping
 * @property {string} [created_on]
 * @property {number} [event_id]
 * @property {number} [id]
 * @property {number} [subscriber_id]
 */
/**
 * @typedef UpdateSubscriberRequest
 * @property {string} [status]
 */
/**
 * @typedef UpdateSubscriberResponse
 * @property {string} [message]
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
declare class WebhookPartnerModel {
}
declare namespace WebhookPartnerModel {
    export { Association, AuthMeta, CancelDownloadResponse, CdnObject, DeliveryDetailsRequest, DeliveryDetailsResponse, DeliveryEventLevelSchema, DeliverySummaryResponse, DeliverySummarySchema, DeliveryTsResponse, DeliveryTsSchema, DownloadReponse, EventConfigResponse, EventDeliveryDetailSchema, EventProcessReportObject, FilterReportResponse, HistoryAssociation, HistoryFilters, HistoryItems, HistoryPayload, HistoryResponse, InvalidEventsRequest, InvalidEventsResponse, ItemSchema, Page, SubscriberConfigResponse, SubscriberEventMapping, UpdateSubscriberRequest, UpdateSubscriberResponse, UploadServiceObject, Url };
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
/** @returns {CancelDownloadResponse} */
declare function CancelDownloadResponse(): CancelDownloadResponse;
type CancelDownloadResponse = {
    message?: string;
    result?: string;
};
/** @returns {CdnObject} */
declare function CdnObject(): CdnObject;
type CdnObject = {
    urls?: Url[];
};
/** @returns {DeliveryDetailsRequest} */
declare function DeliveryDetailsRequest(): DeliveryDetailsRequest;
type DeliveryDetailsRequest = {
    company_id?: string;
    end_date?: string;
    event?: EventDeliveryDetailSchema[];
    page_no?: number;
    page_size?: number;
    start_date?: string;
    status?: string;
};
/** @returns {DeliveryDetailsResponse} */
declare function DeliveryDetailsResponse(): DeliveryDetailsResponse;
type DeliveryDetailsResponse = {
    page?: Page;
    rows?: EventProcessReportObject[];
};
/** @returns {DeliveryEventLevelSchema} */
declare function DeliveryEventLevelSchema(): DeliveryEventLevelSchema;
type DeliveryEventLevelSchema = {
    event?: string;
    failed?: number;
    failed_percentage?: number;
    removed_webhooks?: number;
    response_time?: number;
    success?: number;
    total?: number;
};
/** @returns {DeliverySummaryResponse} */
declare function DeliverySummaryResponse(): DeliverySummaryResponse;
type DeliverySummaryResponse = {
    delivery_event_level?: DeliveryEventLevelSchema[];
    delivery_summary?: DeliverySummarySchema;
};
/** @returns {DeliverySummarySchema} */
declare function DeliverySummarySchema(): DeliverySummarySchema;
type DeliverySummarySchema = {
    failed_percentage?: number;
    removed_webhooks?: number;
    response_time?: number;
    success?: number;
};
/** @returns {DeliveryTsResponse} */
declare function DeliveryTsResponse(): DeliveryTsResponse;
type DeliveryTsResponse = {
    delivery_ts?: DeliveryTsSchema[];
};
/** @returns {DeliveryTsSchema} */
declare function DeliveryTsSchema(): DeliveryTsSchema;
type DeliveryTsSchema = {
    failed?: number;
    removed_webhooks?: number;
    success?: number;
    timestamp?: string;
};
/** @returns {DownloadReponse} */
declare function DownloadReponse(): DownloadReponse;
type DownloadReponse = {
    file_name?: string;
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
    subscriber_event_mapping?: SubscriberEventMapping;
    updated_on?: string;
    version?: string;
};
/** @returns {EventDeliveryDetailSchema} */
declare function EventDeliveryDetailSchema(): EventDeliveryDetailSchema;
type EventDeliveryDetailSchema = {
    event_category?: string;
    event_name?: string;
    event_type?: string;
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
/** @returns {FilterReportResponse} */
declare function FilterReportResponse(): FilterReportResponse;
type FilterReportResponse = {
    filter_name?: string;
    values?: any[];
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
    company_id?: number;
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
/** @returns {InvalidEventsRequest} */
declare function InvalidEventsRequest(): InvalidEventsRequest;
type InvalidEventsRequest = {
    category?: string;
    end_date?: string;
    event_name?: string;
    start_date?: string;
    version?: string;
};
/** @returns {InvalidEventsResponse} */
declare function InvalidEventsResponse(): InvalidEventsResponse;
type InvalidEventsResponse = {
    category?: string;
    count?: number;
    event_name?: string;
    event_type?: string;
    version?: string;
};
/** @returns {ItemSchema} */
declare function ItemSchema(): ItemSchema;
type ItemSchema = {
    association?: Association;
    auth_meta?: AuthMeta;
    created_on?: string;
    custom_headers?: any;
    email_id?: string;
    event_configs?: EventConfigResponse[];
    event_id?: number[];
    id?: number;
    modified_by?: string;
    name?: string;
    status?: string;
    type?: string;
    updated_on?: string;
    webhook_url?: string;
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
/** @returns {SubscriberConfigResponse} */
declare function SubscriberConfigResponse(): SubscriberConfigResponse;
type SubscriberConfigResponse = {
    items?: ItemSchema[];
    page?: Page;
};
/** @returns {SubscriberEventMapping} */
declare function SubscriberEventMapping(): SubscriberEventMapping;
type SubscriberEventMapping = {
    created_on?: string;
    event_id?: number;
    id?: number;
    subscriber_id?: number;
};
/** @returns {UpdateSubscriberRequest} */
declare function UpdateSubscriberRequest(): UpdateSubscriberRequest;
type UpdateSubscriberRequest = {
    status?: string;
};
/** @returns {UpdateSubscriberResponse} */
declare function UpdateSubscriberResponse(): UpdateSubscriberResponse;
type UpdateSubscriberResponse = {
    message?: string;
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
