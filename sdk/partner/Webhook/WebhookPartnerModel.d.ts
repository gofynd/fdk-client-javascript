export = WebhookPartnerModel;
/**
 * @typedef UpdateSubscriberResponse
 * @property {string} [message]
 */
/**
 * @typedef UpdateSubscriberRequest
 * @property {string} [status]
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
 * @typedef EventConfigResponse
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {Object} [event_schema]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 */
/**
 * @typedef SubscriberConfigResponse
 * @property {ItemSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InvalidEventsRequest
 * @property {string} [event_name]
 * @property {string} [version]
 * @property {string} [category]
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef InvalidEventsResponse
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {string} [category]
 * @property {number} [count]
 */
/**
 * @typedef DownloadReponse
 * @property {string} [file_name]
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
 * @typedef HistoryPayload
 * @property {number} [company_id]
 * @property {string} [type] - The type of history report (e.g., "platform").
 * @property {number} [page_no] - The page number of the history report.
 * @property {number} [page_size] - The number of records per page.
 */
/**
 * @typedef CancelDownloadResponse
 * @property {string} [message]
 * @property {string} [result]
 */
/**
 * @typedef FilterReportResponse
 * @property {string} [filter_name]
 * @property {Object[]} [values]
 */
/**
 * @typedef DeliveryTsResponse
 * @property {DeliveryTsSchema[]} [delivery_ts]
 */
/**
 * @typedef DeliveryTsSchema
 * @property {string} [timestamp]
 * @property {number} [failed]
 * @property {number} [removed_webhooks]
 * @property {number} [success]
 */
/**
 * @typedef DeliveryDetailsRequest
 * @property {string} [company_id]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {EventDeliveryDetailSchema[]} [event]
 * @property {string} [status]
 */
/**
 * @typedef EventDeliveryDetailSchema
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */
/**
 * @typedef DeliveryDetailsResponse
 * @property {EventProcessReportObject[]} [rows]
 * @property {Page} [page]
 */
/**
 * @typedef EventProcessReportObject
 * @property {string} [event_name] - The name of the processed event.
 * @property {number} [response_code] - The response code of the event.
 * @property {string} [response_message] - The response message of the event.
 * @property {Object} [data] - The data associated with the event.
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
 * @typedef DeliveryEventLevelSchema
 * @property {string} [event]
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [failed_percentage]
 * @property {number} [removed_webhooks]
 * @property {number} [total]
 * @property {number} [response_time]
 */
/**
 * @typedef DeliverySummaryResponse
 * @property {DeliveryEventLevelSchema[]} [delivery_event_level]
 * @property {DeliverySummarySchema} [delivery_summary]
 */
/**
 * @typedef DeliverySummarySchema
 * @property {number} [success]
 * @property {number} [response_time]
 * @property {number} [failed_percentage]
 * @property {number} [removed_webhooks]
 */
/**
 * @typedef ItemSchema
 * @property {number} [id]
 * @property {string} [modified_by]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [status]
 * @property {string} [email_id]
 * @property {string} [updated_on]
 * @property {string} [created_on]
 * @property {string} [type]
 * @property {AuthMeta} [auth_meta]
 * @property {EventConfigResponse[]} [event_configs]
 * @property {number[]} [event_id]
 */
declare class WebhookPartnerModel {
}
declare namespace WebhookPartnerModel {
    export { UpdateSubscriberResponse, UpdateSubscriberRequest, Association, AuthMeta, SubscriberEventMapping, EventConfigResponse, SubscriberConfigResponse, InvalidEventsRequest, InvalidEventsResponse, DownloadReponse, HistoryFilters, Url, CdnObject, UploadServiceObject, HistoryAssociation, HistoryItems, HistoryResponse, HistoryPayload, CancelDownloadResponse, FilterReportResponse, DeliveryTsResponse, DeliveryTsSchema, DeliveryDetailsRequest, EventDeliveryDetailSchema, DeliveryDetailsResponse, EventProcessReportObject, Page, DeliveryEventLevelSchema, DeliverySummaryResponse, DeliverySummarySchema, ItemSchema };
}
/** @returns {UpdateSubscriberResponse} */
declare function UpdateSubscriberResponse(): UpdateSubscriberResponse;
type UpdateSubscriberResponse = {
    message?: string;
};
/** @returns {UpdateSubscriberRequest} */
declare function UpdateSubscriberRequest(): UpdateSubscriberRequest;
type UpdateSubscriberRequest = {
    status?: string;
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
/** @returns {EventConfigResponse} */
declare function EventConfigResponse(): EventConfigResponse;
type EventConfigResponse = {
    id?: number;
    event_name?: string;
    event_type?: string;
    event_category?: string;
    event_schema?: any;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
    updated_on?: string;
    subscriber_event_mapping?: SubscriberEventMapping;
};
/** @returns {SubscriberConfigResponse} */
declare function SubscriberConfigResponse(): SubscriberConfigResponse;
type SubscriberConfigResponse = {
    items?: ItemSchema[];
    page?: Page;
};
/** @returns {InvalidEventsRequest} */
declare function InvalidEventsRequest(): InvalidEventsRequest;
type InvalidEventsRequest = {
    event_name?: string;
    version?: string;
    category?: string;
    start_date?: string;
    end_date?: string;
};
/** @returns {InvalidEventsResponse} */
declare function InvalidEventsResponse(): InvalidEventsResponse;
type InvalidEventsResponse = {
    event_name?: string;
    event_type?: string;
    version?: string;
    category?: string;
    count?: number;
};
/** @returns {DownloadReponse} */
declare function DownloadReponse(): DownloadReponse;
type DownloadReponse = {
    file_name?: string;
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
/** @returns {HistoryPayload} */
declare function HistoryPayload(): HistoryPayload;
type HistoryPayload = {
    company_id?: number;
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
/** @returns {CancelDownloadResponse} */
declare function CancelDownloadResponse(): CancelDownloadResponse;
type CancelDownloadResponse = {
    message?: string;
    result?: string;
};
/** @returns {FilterReportResponse} */
declare function FilterReportResponse(): FilterReportResponse;
type FilterReportResponse = {
    filter_name?: string;
    values?: any[];
};
/** @returns {DeliveryTsResponse} */
declare function DeliveryTsResponse(): DeliveryTsResponse;
type DeliveryTsResponse = {
    delivery_ts?: DeliveryTsSchema[];
};
/** @returns {DeliveryTsSchema} */
declare function DeliveryTsSchema(): DeliveryTsSchema;
type DeliveryTsSchema = {
    timestamp?: string;
    failed?: number;
    removed_webhooks?: number;
    success?: number;
};
/** @returns {DeliveryDetailsRequest} */
declare function DeliveryDetailsRequest(): DeliveryDetailsRequest;
type DeliveryDetailsRequest = {
    company_id?: string;
    page_no?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
    event?: EventDeliveryDetailSchema[];
    status?: string;
};
/** @returns {EventDeliveryDetailSchema} */
declare function EventDeliveryDetailSchema(): EventDeliveryDetailSchema;
type EventDeliveryDetailSchema = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
/** @returns {DeliveryDetailsResponse} */
declare function DeliveryDetailsResponse(): DeliveryDetailsResponse;
type DeliveryDetailsResponse = {
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
    data?: any;
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
/** @returns {DeliveryEventLevelSchema} */
declare function DeliveryEventLevelSchema(): DeliveryEventLevelSchema;
type DeliveryEventLevelSchema = {
    event?: string;
    success?: number;
    failed?: number;
    failed_percentage?: number;
    removed_webhooks?: number;
    total?: number;
    response_time?: number;
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
    success?: number;
    response_time?: number;
    failed_percentage?: number;
    removed_webhooks?: number;
};
/** @returns {ItemSchema} */
declare function ItemSchema(): ItemSchema;
type ItemSchema = {
    id?: number;
    modified_by?: string;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: string;
    email_id?: string;
    updated_on?: string;
    created_on?: string;
    type?: string;
    auth_meta?: AuthMeta;
    event_configs?: EventConfigResponse[];
    event_id?: number[];
};
