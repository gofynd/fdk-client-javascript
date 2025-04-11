export = WebhookPartnerModel;
/**
 * @typedef SubscriberUpdate
 * @property {string} [status] - Represents the status of the subscriber update operation.
 */
/**
 * @typedef SubscriberUpdateResult
 * @property {string} [message] - Provides a message describing the result of
 *   the subscriber update operation.
 */
/**
 * @typedef Association
 * @property {number} [company_id] - The identifier for the company associated
 *   with the configuration.
 * @property {string[]} [application_id] - A list of application identifiers
 *   associated with the configuration.
 * @property {string} [extension_id] - The identifier for the extension related
 *   to the configuration.
 * @property {string} [criteria] - Defines the criteria for the association,
 *   including options for all events, empty criteria, or specific events.
 */
/**
 * @typedef AuthMeta
 * @property {string} [type] - Specifies the type of authentication used.
 * @property {string} [secret] - Contains the secret key or token used for authentication.
 */
/**
 * @typedef BroadcasterConfig
 * @property {string} [topic] - The topic associated with the broadcaster configuration.
 * @property {string} [queue] - The queue name used by the broadcaster.
 * @property {string} [event_bridge_name] - The name of the event bridge used in
 *   the broadcaster configuration.
 * @property {string} [workflow_name] - The name of the workflow related to the
 *   broadcaster.
 * @property {string} [account_id] - The account ID associated with the
 *   broadcaster configuration.
 * @property {string} [detail_type] - Specifies the type of detail for the
 *   broadcaster, allowing for custom or non-enumerated values.
 */
/**
 * @typedef SubscriberEventMapping
 * @property {number} [id] - The unique identifier for the subscriber event mapping.
 * @property {number} [event_id] - The identifier for the event associated with
 *   the subscriber.
 * @property {number} [subscriber_id] - The identifier for the subscriber
 *   involved in the mapping.
 * @property {BroadcasterConfig} [broadcaster_config]
 * @property {string} [created_on] - The timestamp indicating when the
 *   subscriber event mapping was created.
 */
/**
 * @typedef EventConfigDetails
 * @property {number} [id] - The unique identifier for the event configuration.
 * @property {string} [event_name] - The name assigned to the event configuration.
 * @property {string} [event_type] - Specifies the type of event, allowing for
 *   custom or non-enumerated values.
 * @property {string} [event_category] - Defines the category of the event,
 *   allowing for custom or non-enumerated values.
 * @property {Object} [event_schema] - Contains the schema details for the
 *   event, allowing for flexible or dynamic schemas.
 * @property {string} [version] - The version number of the event configuration.
 * @property {string} [display_name] - The display name for the event configuration.
 * @property {string} [description] - A description of the event configuration,
 *   if provided.
 * @property {string} [created_on] - The timestamp indicating when the event
 *   configuration was created.
 * @property {string} [updated_on] - The timestamp indicating when the event
 *   configuration was last updated.
 * @property {string} [group] - The group to which the event configuration
 *   belongs, if applicable.
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 */
/**
 * @typedef SubscriberConfigDetails
 * @property {ItemSchema[]} [items] - A list of items representing subscriber
 *   configurations.
 * @property {Page} [page]
 */
/**
 * @typedef InvalidEventsPayload
 * @property {string} [event_name] - The name of the event that is considered invalid.
 * @property {string} [version] - The version of the event that is considered invalid.
 * @property {string} [category] - The category of the event that is considered invalid.
 * @property {string} [start_date] - The start date and time for the period
 *   during which events were considered invalid.
 * @property {string} [end_date] - The end date and time for the period during
 *   which events were considered invalid.
 */
/**
 * @typedef InvalidEventsResult
 * @property {string} [event_name] - The name of the event that was found to be invalid.
 * @property {string} [event_type] - The type of the invalid event, allowing for
 *   custom or non-enumerated values.
 * @property {string} [version] - The version of the invalid event.
 * @property {string} [category] - The category of the invalid event.
 * @property {number} [count] - The number of occurrences of the invalid event.
 */
/**
 * @typedef HistoryFilters
 * @property {string[]} [events] - A list of event types to filter the history report.
 * @property {string} [search_text] - Text used for searching within the history report.
 * @property {string} [status] - The status of the history report (e.g., "FAILED").
 * @property {string} [end_date] - The end date and time of the history report.
 * @property {string} [start_date] - The start date and time of the history report.
 * @property {number[]} [subscribers] - An array of subscriber IDs associated
 *   with the history report.
 * @property {string[]} [webhook_type] - An array of webhook types to identify
 *   the type of subscriber.
 */
/**
 * @typedef Url
 * @property {string} [url] - The URL of the uploaded report file.
 * @property {string} [name] - The name of the uploaded report file.
 */
/**
 * @typedef CdnObject
 * @property {Url[]} [urls] - A list of URLs for CDN objects, including the
 *   location of the uploaded report files.
 */
/**
 * @typedef UploadServiceObject
 * @property {CdnObject} [cdn]
 */
/**
 * @typedef HistoryAssociation
 * @property {number} [company_id] - The identifier for the company associated
 *   with the history report.
 * @property {number[]} [subscriber_ids] - A list of subscriber IDs related to
 *   the history report.
 */
/**
 * @typedef HistoryItems
 * @property {number} [id] - The unique identifier for the history report.
 * @property {HistoryAssociation} [association]
 * @property {HistoryFilters} [filters]
 * @property {string} [filename] - The name of the file containing the history report.
 * @property {string} [status] - The current status of the history report (e.g.,
 *   "COMPLETED").
 * @property {UploadServiceObject} [upload_service_response]
 * @property {string} [created_on] - The date and time when the history report
 *   was generated.
 * @property {string} [updated_on] - The date and time when the history report
 *   was last updated.
 * @property {string} [message] - A message related to the history report.
 */
/**
 * @typedef HistoryResult
 * @property {HistoryItems[]} [items] - A list of history report items.
 * @property {Page} [page]
 */
/**
 * @typedef HistoryPayload
 * @property {number} [company_id] - The identifier for the company requesting
 *   the history report.
 * @property {string} [type] - Specifies the type of history report requested
 *   (e.g., "platform").
 * @property {number} [page_no] - The page number of the history report results.
 * @property {number} [page_size] - The number of records to display per page in
 *   the history report.
 */
/**
 * @typedef CancelDownloadResult
 * @property {string} [message] - A message indicating the result of the cancel
 *   download request.
 * @property {string} [result] - The outcome of the cancel download operation.
 */
/**
 * @typedef FilterReportResult
 * @property {string} [filter_name] - The name of the filter applied in the report.
 * @property {Object[]} [values] - A list of values resulting from the applied filter.
 */
/**
 * @typedef DeliveryTsResult
 * @property {DeliveryTsSchema[]} [delivery_ts]
 */
/**
 * @typedef DeliveryTsSchema
 * @property {string} [timestamp] - The timestamp of the delivery event.
 * @property {number} [failed] - The count of failed delivery attempts.
 * @property {number} [removed_webhooks] - The count of removed webhooks during delivery.
 * @property {number} [success] - The count of successful delivery attempts.
 */
/**
 * @typedef DeliveryDetailsPayload
 * @property {string} [company_id] - The identifier for the company requesting
 *   delivery details.
 * @property {number} [page_no] - The page number for the delivery details results.
 * @property {number} [page_size] - The number of records per page for delivery details.
 * @property {string} [start_date] - The start date and time for filtering
 *   delivery details.
 * @property {string} [end_date] - The end date and time for filtering delivery details.
 * @property {EventDeliveryDetailSchema[]} [event] - A list of event delivery details.
 * @property {string} [status] - The status of the delivery details request.
 */
/**
 * @typedef EventDeliveryDetailSchema
 * @property {string} [event_name] - The name of the event related to the
 *   delivery details.
 * @property {string} [event_type] - The type of the event, allowing for custom
 *   or non-enumerated values.
 * @property {string} [event_category] - The category of the event, allowing for
 *   custom or non-enumerated values.
 * @property {string} [version] - The version of the event related to the
 *   delivery details.
 */
/**
 * @typedef DeliveryDetailsResult
 * @property {EventProcessReportObject[]} [rows] - A list of processed event
 *   reports with delivery details.
 * @property {Page} [page]
 */
/**
 * @typedef EventProcessReportObject
 * @property {string} [event_name] - The name of the processed event.
 * @property {number} [response_code] - The response code returned for the
 *   event, allowing for custom or non-enumerated values.
 * @property {string} [response_message] - The response message associated with the event.
 * @property {string} [data] - The data payload associated with the event.
 * @property {number} [attempt] - The attempt number for processing the event.
 * @property {number} [last_attempted_on] - The timestamp of the last attempt to
 *   process the event.
 * @property {string} [status] - The status of the event processing (e.g., "FAILED").
 * @property {string} [name] - The name of the event.
 * @property {string} [webhook_url] - The URL of the webhook associated with the event.
 * @property {number} [response_time] - The time taken to respond to the event.
 * @property {string} [message_id] - The identifier for the event message.
 * @property {string} [event_trace_id] - The trace ID associated with the event.
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
 * @property {number} [total] - Total number of items.
 */
/**
 * @typedef DeliveryEventLevelSchema
 * @property {string} [event] - The name or identifier of the event.
 * @property {number} [success] - The count of successful deliveries for the event.
 * @property {number} [failed] - The count of failed deliveries for the event.
 * @property {number} [failed_percentage] - The percentage of failed deliveries
 *   relative to the total.
 * @property {number} [removed_webhooks] - The count of webhooks that were
 *   removed during the delivery.
 * @property {number} [total] - The total number of delivery attempts for the event.
 * @property {number} [response_time] - The average response time for the event
 *   deliveries.
 */
/**
 * @typedef ResponseTimeTs
 * @property {AvgResponseTime[]} [avg_response_time_ts]
 */
/**
 * @typedef AvgResponseTime
 * @property {string} [last_attempted_on] - The timestamp of the last attempt,
 *   formatted as a string.
 * @property {number} [response_code] - The response code returned for the
 *   delivery attempt, allowing for custom or non-enumerated values.
 * @property {string} [response_time] - The response time for the delivery
 *   attempt, formatted as a string.
 * @property {number} [attempt] - The attempt number for the delivery.
 * @property {number} [total] - The total count of deliveries attempted.
 */
/**
 * @typedef DeliverySummaryResult
 * @property {DeliveryEventLevelSchema[]} [delivery_event_level]
 * @property {DeliverySummarySchema} [delivery_summary]
 */
/**
 * @typedef DeliverySummarySchema
 * @property {number} [success] - The total count of successful deliveries.
 * @property {number} [response_time] - The average response time for deliveries.
 * @property {number} [failed_percentage] - The percentage of failed deliveries.
 * @property {number} [removed_webhooks] - The count of webhooks removed during delivery.
 */
/**
 * @typedef ItemSchema
 * @property {number} [id] - The unique identifier for the item.
 * @property {string} [modified_by] - The user or system that last modified the item.
 * @property {string} [name] - The name of the item.
 * @property {string} [webhook_url] - The URL of the webhook associated with the item.
 * @property {string} [provider] - The provider of the item.
 * @property {Association} [association]
 * @property {Object} [custom_headers] - Custom headers associated with the item, if any.
 * @property {string} [status] - The current status of the item.
 * @property {string} [email_id] - The email ID associated with the item, if applicable.
 * @property {string} [updated_on] - The date and time when the item was last updated.
 * @property {string} [created_on] - The date and time when the item was created.
 * @property {string} [type] - The type of the item, if applicable.
 * @property {AuthMeta} [auth_meta]
 * @property {EventConfigDetails[]} [event_configs] - A list of event
 *   configurations associated with the item.
 * @property {number[]} [event_id] - A list of event IDs associated with the item.
 */
declare class WebhookPartnerModel {
}
declare namespace WebhookPartnerModel {
    export { SubscriberUpdate, SubscriberUpdateResult, Association, AuthMeta, BroadcasterConfig, SubscriberEventMapping, EventConfigDetails, SubscriberConfigDetails, InvalidEventsPayload, InvalidEventsResult, HistoryFilters, Url, CdnObject, UploadServiceObject, HistoryAssociation, HistoryItems, HistoryResult, HistoryPayload, CancelDownloadResult, FilterReportResult, DeliveryTsResult, DeliveryTsSchema, DeliveryDetailsPayload, EventDeliveryDetailSchema, DeliveryDetailsResult, EventProcessReportObject, Page, DeliveryEventLevelSchema, ResponseTimeTs, AvgResponseTime, DeliverySummaryResult, DeliverySummarySchema, ItemSchema };
}
/** @returns {SubscriberUpdate} */
declare function SubscriberUpdate(): SubscriberUpdate;
type SubscriberUpdate = {
    /**
     * - Represents the status of the subscriber update operation.
     */
    status?: string;
};
/** @returns {SubscriberUpdateResult} */
declare function SubscriberUpdateResult(): SubscriberUpdateResult;
type SubscriberUpdateResult = {
    /**
     * - Provides a message describing the result of
     * the subscriber update operation.
     */
    message?: string;
};
/** @returns {Association} */
declare function Association(): Association;
type Association = {
    /**
     * - The identifier for the company associated
     * with the configuration.
     */
    company_id?: number;
    /**
     * - A list of application identifiers
     * associated with the configuration.
     */
    application_id?: string[];
    /**
     * - The identifier for the extension related
     * to the configuration.
     */
    extension_id?: string;
    /**
     * - Defines the criteria for the association,
     * including options for all events, empty criteria, or specific events.
     */
    criteria?: string;
};
/** @returns {AuthMeta} */
declare function AuthMeta(): AuthMeta;
type AuthMeta = {
    /**
     * - Specifies the type of authentication used.
     */
    type?: string;
    /**
     * - Contains the secret key or token used for authentication.
     */
    secret?: string;
};
/** @returns {BroadcasterConfig} */
declare function BroadcasterConfig(): BroadcasterConfig;
type BroadcasterConfig = {
    /**
     * - The topic associated with the broadcaster configuration.
     */
    topic?: string;
    /**
     * - The queue name used by the broadcaster.
     */
    queue?: string;
    /**
     * - The name of the event bridge used in
     * the broadcaster configuration.
     */
    event_bridge_name?: string;
    /**
     * - The name of the workflow related to the
     * broadcaster.
     */
    workflow_name?: string;
    /**
     * - The account ID associated with the
     * broadcaster configuration.
     */
    account_id?: string;
    /**
     * - Specifies the type of detail for the
     * broadcaster, allowing for custom or non-enumerated values.
     */
    detail_type?: string;
};
/** @returns {SubscriberEventMapping} */
declare function SubscriberEventMapping(): SubscriberEventMapping;
type SubscriberEventMapping = {
    /**
     * - The unique identifier for the subscriber event mapping.
     */
    id?: number;
    /**
     * - The identifier for the event associated with
     * the subscriber.
     */
    event_id?: number;
    /**
     * - The identifier for the subscriber
     * involved in the mapping.
     */
    subscriber_id?: number;
    broadcaster_config?: BroadcasterConfig;
    /**
     * - The timestamp indicating when the
     * subscriber event mapping was created.
     */
    created_on?: string;
};
/** @returns {EventConfigDetails} */
declare function EventConfigDetails(): EventConfigDetails;
type EventConfigDetails = {
    /**
     * - The unique identifier for the event configuration.
     */
    id?: number;
    /**
     * - The name assigned to the event configuration.
     */
    event_name?: string;
    /**
     * - Specifies the type of event, allowing for
     * custom or non-enumerated values.
     */
    event_type?: string;
    /**
     * - Defines the category of the event,
     * allowing for custom or non-enumerated values.
     */
    event_category?: string;
    /**
     * - Contains the schema details for the
     * event, allowing for flexible or dynamic schemas.
     */
    event_schema?: any;
    /**
     * - The version number of the event configuration.
     */
    version?: string;
    /**
     * - The display name for the event configuration.
     */
    display_name?: string;
    /**
     * - A description of the event configuration,
     * if provided.
     */
    description?: string;
    /**
     * - The timestamp indicating when the event
     * configuration was created.
     */
    created_on?: string;
    /**
     * - The timestamp indicating when the event
     * configuration was last updated.
     */
    updated_on?: string;
    /**
     * - The group to which the event configuration
     * belongs, if applicable.
     */
    group?: string;
    subscriber_event_mapping?: SubscriberEventMapping;
};
/** @returns {SubscriberConfigDetails} */
declare function SubscriberConfigDetails(): SubscriberConfigDetails;
type SubscriberConfigDetails = {
    /**
     * - A list of items representing subscriber
     * configurations.
     */
    items?: ItemSchema[];
    page?: Page;
};
/** @returns {InvalidEventsPayload} */
declare function InvalidEventsPayload(): InvalidEventsPayload;
type InvalidEventsPayload = {
    /**
     * - The name of the event that is considered invalid.
     */
    event_name?: string;
    /**
     * - The version of the event that is considered invalid.
     */
    version?: string;
    /**
     * - The category of the event that is considered invalid.
     */
    category?: string;
    /**
     * - The start date and time for the period
     * during which events were considered invalid.
     */
    start_date?: string;
    /**
     * - The end date and time for the period during
     * which events were considered invalid.
     */
    end_date?: string;
};
/** @returns {InvalidEventsResult} */
declare function InvalidEventsResult(): InvalidEventsResult;
type InvalidEventsResult = {
    /**
     * - The name of the event that was found to be invalid.
     */
    event_name?: string;
    /**
     * - The type of the invalid event, allowing for
     * custom or non-enumerated values.
     */
    event_type?: string;
    /**
     * - The version of the invalid event.
     */
    version?: string;
    /**
     * - The category of the invalid event.
     */
    category?: string;
    /**
     * - The number of occurrences of the invalid event.
     */
    count?: number;
};
/** @returns {HistoryFilters} */
declare function HistoryFilters(): HistoryFilters;
type HistoryFilters = {
    /**
     * - A list of event types to filter the history report.
     */
    events?: string[];
    /**
     * - Text used for searching within the history report.
     */
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
     * - An array of webhook types to identify
     * the type of subscriber.
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
    /**
     * - A list of URLs for CDN objects, including the
     * location of the uploaded report files.
     */
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
    /**
     * - The identifier for the company associated
     * with the history report.
     */
    company_id?: number;
    /**
     * - A list of subscriber IDs related to
     * the history report.
     */
    subscriber_ids?: number[];
};
/** @returns {HistoryItems} */
declare function HistoryItems(): HistoryItems;
type HistoryItems = {
    /**
     * - The unique identifier for the history report.
     */
    id?: number;
    association?: HistoryAssociation;
    filters?: HistoryFilters;
    /**
     * - The name of the file containing the history report.
     */
    filename?: string;
    /**
     * - The current status of the history report (e.g.,
     * "COMPLETED").
     */
    status?: string;
    upload_service_response?: UploadServiceObject;
    /**
     * - The date and time when the history report
     * was generated.
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
/** @returns {HistoryResult} */
declare function HistoryResult(): HistoryResult;
type HistoryResult = {
    /**
     * - A list of history report items.
     */
    items?: HistoryItems[];
    page?: Page;
};
/** @returns {HistoryPayload} */
declare function HistoryPayload(): HistoryPayload;
type HistoryPayload = {
    /**
     * - The identifier for the company requesting
     * the history report.
     */
    company_id?: number;
    /**
     * - Specifies the type of history report requested
     * (e.g., "platform").
     */
    type?: string;
    /**
     * - The page number of the history report results.
     */
    page_no?: number;
    /**
     * - The number of records to display per page in
     * the history report.
     */
    page_size?: number;
};
/** @returns {CancelDownloadResult} */
declare function CancelDownloadResult(): CancelDownloadResult;
type CancelDownloadResult = {
    /**
     * - A message indicating the result of the cancel
     * download request.
     */
    message?: string;
    /**
     * - The outcome of the cancel download operation.
     */
    result?: string;
};
/** @returns {FilterReportResult} */
declare function FilterReportResult(): FilterReportResult;
type FilterReportResult = {
    /**
     * - The name of the filter applied in the report.
     */
    filter_name?: string;
    /**
     * - A list of values resulting from the applied filter.
     */
    values?: any[];
};
/** @returns {DeliveryTsResult} */
declare function DeliveryTsResult(): DeliveryTsResult;
type DeliveryTsResult = {
    delivery_ts?: DeliveryTsSchema[];
};
/** @returns {DeliveryTsSchema} */
declare function DeliveryTsSchema(): DeliveryTsSchema;
type DeliveryTsSchema = {
    /**
     * - The timestamp of the delivery event.
     */
    timestamp?: string;
    /**
     * - The count of failed delivery attempts.
     */
    failed?: number;
    /**
     * - The count of removed webhooks during delivery.
     */
    removed_webhooks?: number;
    /**
     * - The count of successful delivery attempts.
     */
    success?: number;
};
/** @returns {DeliveryDetailsPayload} */
declare function DeliveryDetailsPayload(): DeliveryDetailsPayload;
type DeliveryDetailsPayload = {
    /**
     * - The identifier for the company requesting
     * delivery details.
     */
    company_id?: string;
    /**
     * - The page number for the delivery details results.
     */
    page_no?: number;
    /**
     * - The number of records per page for delivery details.
     */
    page_size?: number;
    /**
     * - The start date and time for filtering
     * delivery details.
     */
    start_date?: string;
    /**
     * - The end date and time for filtering delivery details.
     */
    end_date?: string;
    /**
     * - A list of event delivery details.
     */
    event?: EventDeliveryDetailSchema[];
    /**
     * - The status of the delivery details request.
     */
    status?: string;
};
/** @returns {EventDeliveryDetailSchema} */
declare function EventDeliveryDetailSchema(): EventDeliveryDetailSchema;
type EventDeliveryDetailSchema = {
    /**
     * - The name of the event related to the
     * delivery details.
     */
    event_name?: string;
    /**
     * - The type of the event, allowing for custom
     * or non-enumerated values.
     */
    event_type?: string;
    /**
     * - The category of the event, allowing for
     * custom or non-enumerated values.
     */
    event_category?: string;
    /**
     * - The version of the event related to the
     * delivery details.
     */
    version?: string;
};
/** @returns {DeliveryDetailsResult} */
declare function DeliveryDetailsResult(): DeliveryDetailsResult;
type DeliveryDetailsResult = {
    /**
     * - A list of processed event
     * reports with delivery details.
     */
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
     * - The response code returned for the
     * event, allowing for custom or non-enumerated values.
     */
    response_code?: number;
    /**
     * - The response message associated with the event.
     */
    response_message?: string;
    /**
     * - The data payload associated with the event.
     */
    data?: string;
    /**
     * - The attempt number for processing the event.
     */
    attempt?: number;
    /**
     * - The timestamp of the last attempt to
     * process the event.
     */
    last_attempted_on?: number;
    /**
     * - The status of the event processing (e.g., "FAILED").
     */
    status?: string;
    /**
     * - The name of the event.
     */
    name?: string;
    /**
     * - The URL of the webhook associated with the event.
     */
    webhook_url?: string;
    /**
     * - The time taken to respond to the event.
     */
    response_time?: number;
    /**
     * - The identifier for the event message.
     */
    message_id?: string;
    /**
     * - The trace ID associated with the event.
     */
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
    /**
     * - Total number of items.
     */
    total?: number;
};
/** @returns {DeliveryEventLevelSchema} */
declare function DeliveryEventLevelSchema(): DeliveryEventLevelSchema;
type DeliveryEventLevelSchema = {
    /**
     * - The name or identifier of the event.
     */
    event?: string;
    /**
     * - The count of successful deliveries for the event.
     */
    success?: number;
    /**
     * - The count of failed deliveries for the event.
     */
    failed?: number;
    /**
     * - The percentage of failed deliveries
     * relative to the total.
     */
    failed_percentage?: number;
    /**
     * - The count of webhooks that were
     * removed during the delivery.
     */
    removed_webhooks?: number;
    /**
     * - The total number of delivery attempts for the event.
     */
    total?: number;
    /**
     * - The average response time for the event
     * deliveries.
     */
    response_time?: number;
};
/** @returns {ResponseTimeTs} */
declare function ResponseTimeTs(): ResponseTimeTs;
type ResponseTimeTs = {
    avg_response_time_ts?: AvgResponseTime[];
};
/** @returns {AvgResponseTime} */
declare function AvgResponseTime(): AvgResponseTime;
type AvgResponseTime = {
    /**
     * - The timestamp of the last attempt,
     * formatted as a string.
     */
    last_attempted_on?: string;
    /**
     * - The response code returned for the
     * delivery attempt, allowing for custom or non-enumerated values.
     */
    response_code?: number;
    /**
     * - The response time for the delivery
     * attempt, formatted as a string.
     */
    response_time?: string;
    /**
     * - The attempt number for the delivery.
     */
    attempt?: number;
    /**
     * - The total count of deliveries attempted.
     */
    total?: number;
};
/** @returns {DeliverySummaryResult} */
declare function DeliverySummaryResult(): DeliverySummaryResult;
type DeliverySummaryResult = {
    delivery_event_level?: DeliveryEventLevelSchema[];
    delivery_summary?: DeliverySummarySchema;
};
/** @returns {DeliverySummarySchema} */
declare function DeliverySummarySchema(): DeliverySummarySchema;
type DeliverySummarySchema = {
    /**
     * - The total count of successful deliveries.
     */
    success?: number;
    /**
     * - The average response time for deliveries.
     */
    response_time?: number;
    /**
     * - The percentage of failed deliveries.
     */
    failed_percentage?: number;
    /**
     * - The count of webhooks removed during delivery.
     */
    removed_webhooks?: number;
};
/** @returns {ItemSchema} */
declare function ItemSchema(): ItemSchema;
type ItemSchema = {
    /**
     * - The unique identifier for the item.
     */
    id?: number;
    /**
     * - The user or system that last modified the item.
     */
    modified_by?: string;
    /**
     * - The name of the item.
     */
    name?: string;
    /**
     * - The URL of the webhook associated with the item.
     */
    webhook_url?: string;
    /**
     * - The provider of the item.
     */
    provider?: string;
    association?: Association;
    /**
     * - Custom headers associated with the item, if any.
     */
    custom_headers?: any;
    /**
     * - The current status of the item.
     */
    status?: string;
    /**
     * - The email ID associated with the item, if applicable.
     */
    email_id?: string;
    /**
     * - The date and time when the item was last updated.
     */
    updated_on?: string;
    /**
     * - The date and time when the item was created.
     */
    created_on?: string;
    /**
     * - The type of the item, if applicable.
     */
    type?: string;
    auth_meta?: AuthMeta;
    /**
     * - A list of event
     * configurations associated with the item.
     */
    event_configs?: EventConfigDetails[];
    /**
     * - A list of event IDs associated with the item.
     */
    event_id?: number[];
};
