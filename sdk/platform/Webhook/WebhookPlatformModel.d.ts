export = WebhookPlatformModel;
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */
/**
 * @typedef BroadcasterConfig
 * @property {string} [topic] - The name of the topic for the broadcaster configuration.
 * @property {string} [queue] - The name of the queue for the broadcaster configuration.
 * @property {string} [event_bridge_name] - The name of the event bridge
 *   associated with the broadcaster.
 * @property {string} [workflow_name] - The name of the workflow related to the
 *   broadcaster.
 * @property {string} [account_id] - The account ID associated with the broadcaster.
 * @property {string} [detail_type] - The type of detail for the broadcaster
 *   configuration.
 */
/**
 * @typedef SubscriberEventMapping
 * @property {number} [id] - The unique identifier for the subscriber event mapping.
 * @property {number} [event_id] - The ID of the event associated with the subscriber.
 * @property {number} [subscriber_id] - The ID of the subscriber.
 * @property {FilterSchema} [filters]
 * @property {Object} [reducer] - The reducer property allows users to customize
 *   the JSON structure of the webhook payload using JSONPath queries. They can
 *   also create new properties by mapping existing ones. Note that it overrides
 *   the entire JSON structure of the webhook payload sent via the webhook. See
 *   the partner documentation's filter and reducer section for details.
 * @property {BroadcasterConfig} [broadcaster_config]
 * @property {string} [created_on] - The date and time when the subscriber event
 *   mapping was created.
 */
/**
 * @typedef FilterSchema
 * @property {string} [query] - JSONPath expression that specifies the property
 *   in the webhook payload to filter on. This enables targeting specific data
 *   within the payload.
 * @property {string} [condition] - JavaScript function used to evaluate the
 *   specified property in the webhook payload against a condition. This
 *   function determines whether the filter passes based on its return value.
 * @property {string} [logic] - Logical operator used to combine multiple
 *   conditions in the `conditions` array. Supported values are `AND` and `OR`.
 * @property {Object[]} [conditions] - An array of filter objects to be
 *   evaluated using the specified logical operator. This array will contain
 *   more filters including a combination of single condition mode and logical
 *   group mode filters.
 */
/**
 * @typedef EventConfig
 * @property {number} [id] - The unique identifier for the event configuration.
 * @property {string} [type] - The type of event configuration, which may be null.
 * @property {string} [event_name] - The name of the event.
 * @property {string} [event_type] - The type of the event.
 * @property {string} [event_category] - The category of the event.
 * @property {string} [modified_by] - The identifier of the user who last
 *   modified the event configuration.
 * @property {SubscriberEventMapping} [subscriber_event_mapping]
 * @property {Object} [event_schema] - The schema for the event, allowing for
 *   additional properties and may be null.
 * @property {string} [group] - The group associated with the event
 *   configuration, which may be null.
 * @property {string} [version] - The version of the event configuration.
 * @property {string} [display_name] - The display name of the event configuration.
 * @property {string} [description] - A description of the event configuration,
 *   which may be null.
 * @property {string} [created_on] - The date and time when the event
 *   configuration was created.
 * @property {string} [updated_on] - The date and time when the event
 *   configuration was last updated.
 */
/**
 * @typedef EventConfigResult
 * @property {EventConfig[]} [event_configs] - List of event configurations.
 */
/**
 * @typedef Association
 * @property {string[]} [application_id] - A list of application IDs associated
 *   with the association.
 * @property {string} [extension_id] - The extension ID associated with the association.
 * @property {string} [criteria] - The criteria for the association, such as
 *   "ALL", "EMPTY", or "SPECIFIC-EVENTS".
 */
/**
 * @typedef AssociationResp
 * @property {number} [company_id] - The ID of the company associated with the response.
 * @property {string[]} [application_id] - A list of application IDs associated
 *   with the response.
 * @property {string} [extension_id] - The extension ID associated with the response.
 * @property {string} [criteria] - The criteria for the response, such as "ALL",
 *   "EMPTY", or "SPECIFIC-EVENTS".
 */
/**
 * @typedef AuthMeta
 * @property {string} [type] - The type of authentication method used.
 * @property {string} [secret] - The secret key or token used for authentication.
 */
/**
 * @typedef SubscriberDetails
 * @property {number} [id] - The unique identifier of the subscriber.
 * @property {string} [modified_by] - The identifier of the user who last
 *   modified the subscriber details.
 * @property {string} [name] - The name of the subscriber.
 * @property {string} [provider] - The provider of the subscriber.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {AssociationResp} [association]
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id] - The email ID associated with the subscriber.
 * @property {string} [updated_on] - The date and time when the subscriber
 *   details were last updated.
 * @property {string} [created_on] - The date and time when the subscriber was created.
 * @property {string} [type] - The type of subscriber, which can either be passed as null.
 * @property {AuthMeta} [auth_meta]
 * @property {EventConfig[]} [event_configs] - List of event configurations.
 */
/**
 * @typedef Events
 * @property {string} [slug] - The slug or identifier for the event.
 * @property {string} [topic] - The topic associated with the event.
 * @property {string} [queue] - The queue associated with the event in case of
 *   provider as Pub/Sub.
 * @property {string} [event_bridge_name] - The name of the event bridge
 *   associated with the event in case of provider as AWS event bridge.
 * @property {string} [workflow_name] - The name of the workflow related to the
 *   event in case of provider as temporal.
 * @property {string} [detail_type] - The type of detail for the event.
 */
/**
 * @typedef SubscriberConfigPostRequestV2
 * @property {string} name - The name of the subscriber.
 * @property {string} [type] - The type of the subscriber, which may be null.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {string} provider - The provider of the subscriber.
 * @property {Association} association
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} status
 * @property {string} email_id - The email ID associated with the subscriber.
 * @property {AuthMeta} [auth_meta]
 * @property {Events[]} events - The list of events associated with the subscriber.
 */
/**
 * @typedef SubscriberConfigUpdateRequestV2
 * @property {number} id - The unique identifier of the subscriber to be updated.
 * @property {string} [name] - The name of the subscriber.
 * @property {string} [type] - The type of the subscriber, which may be null.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {string} provider - The provider of the subscriber.
 * @property {Association} [association]
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} status
 * @property {string} [email_id] - The email ID associated with the subscriber.
 * @property {AuthMeta} [auth_meta]
 * @property {Events[]} [events] - The list of events associated with the subscriber.
 */
/**
 * @typedef SubscriberConfigPost
 * @property {string} name - The name of the subscriber.
 * @property {string} [type] - The type of the subscriber, which can be null.
 * @property {string} webhook_url - The URL for the subscriber's webhook.
 * @property {Association} association
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} status
 * @property {string} email_id - The email ID associated with the subscriber.
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} event_id - The list of event IDs associated with the subscriber.
 */
/**
 * @typedef SubscriberConfigUpdate
 * @property {number} id - The unique identifier of the subscriber to be updated.
 * @property {string} [name] - The name of the subscriber.
 * @property {string} [type] - The type of the subscriber, which can be null.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {Association} [association]
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id] - The email ID associated with the subscriber.
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} event_id - The list of event IDs associated with the subscriber.
 */
/**
 * @typedef SubscriberConfigResult
 * @property {number} [id] - The unique identifier of the subscriber configuration.
 * @property {string} [modified_by] - The identifier of the user who last
 *   modified the subscriber configuration.
 * @property {string} [name] - The name of the subscriber.
 * @property {string} [webhook_url] - The URL for the subscriber's webhook.
 * @property {string} [provider] - The provider of the subscriber.
 * @property {AssociationResp} [association]
 * @property {Object} [custom_headers] - Custom headers for the subscriber.
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id] - The email ID associated with the subscriber.
 * @property {string} [updated_on] - The date and time when the subscriber was
 *   last updated.
 * @property {string} [created_on] - The date and time when the subscriber was created.
 * @property {string} [type] - The type of the subscriber, which can be null.
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id] - The list of event IDs associated with the subscriber.
 */
/**
 * @typedef SubscriberConfigList
 * @property {SubscriberDetails[]} [items] - List of subscriber details.
 * @property {Page} [page]
 */
/**
 * @typedef RestEventData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 */
/**
 * @typedef RestConfig
 * @property {string} webhook_url - The URL for the webhook.
 * @property {string} type - The type of the configuration.
 * @property {Object} [custom_headers] - Custom headers for the configuration.
 * @property {AuthMeta} [auth_meta]
 * @property {RestEventData[]} events - List of event data for configuration.
 */
/**
 * @typedef QueueEventData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 * @property {string} topic - The topic associated with the event.
 */
/**
 * @typedef KafkaConfig
 * @property {string} [type] - Type of Kafka configuration (optional).
 * @property {QueueEventData[]} events - List of event data for configuration.
 */
/**
 * @typedef PubSubConfig
 * @property {string} [type] - Type of Pub/Sub configuration (optional).
 * @property {QueueEventData[]} events - List of event data for configuration.
 */
/**
 * @typedef TemporalEventData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 * @property {string} [queue] - The queue associated with the event.
 * @property {string} [workflow_name] - The workflow name related to the event.
 */
/**
 * @typedef TemporalConfig
 * @property {string} [type] - Type of Temporal configuration (optional).
 * @property {TemporalEventData[]} events - List of event data for configuration.
 */
/**
 * @typedef SqsEventData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 * @property {string} [queue] - The queue name associated with the event in SQS.
 */
/**
 * @typedef SqsConfig
 * @property {string} [type] - Type of SQS configuration (optional).
 * @property {SqsEventData[]} events - List of event data for configuration.
 */
/**
 * @typedef EventBridgeData
 * @property {string} event_category - The category of the event.
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {number} version - The version number of the event.
 * @property {string} [event_bridge_name] - The name of the event bridge related
 *   to the event.
 */
/**
 * @typedef EventBridgeConfig
 * @property {string} [type] - Type of event configuration (optional).
 * @property {EventBridgeData[]} events - List of event data for EventBridge
 *   configuration.
 */
/**
 * @typedef EventMapBody
 * @property {RestConfig} [rest]
 * @property {KafkaConfig} [kafka]
 * @property {PubSubConfig} [pub_sub]
 * @property {TemporalConfig} [temporal]
 * @property {SqsConfig} [sqs]
 * @property {EventBridgeConfig} [event_bridge]
 */
/**
 * @typedef WebhookConfig
 * @property {string} [notification_email] - The email address for notifications.
 * @property {string} [name] - The name of the webhook configuration.
 * @property {string} [status] - The status of the webhook (e.g., active or inactive).
 * @property {Association} [association]
 * @property {EventMapBody} [event_map]
 */
/**
 * @typedef UpsertSubscriberConfig
 * @property {WebhookConfig} webhook_config
 */
/**
 * @typedef UpsertSubscriberConfigResult
 * @property {boolean} [status] - The status of the upsert operation (e.g.,
 *   success or failure).
 * @property {string} [message] - A message providing details about the upsert
 *   operation result.
 */
/** @typedef {"active" | "inactive"} SubscriberStatus */
declare class WebhookPlatformModel {
}
declare namespace WebhookPlatformModel {
    export { Page, BroadcasterConfig, SubscriberEventMapping, FilterSchema, EventConfig, EventConfigResult, Association, AssociationResp, AuthMeta, SubscriberDetails, Events, SubscriberConfigPostRequestV2, SubscriberConfigUpdateRequestV2, SubscriberConfigPost, SubscriberConfigUpdate, SubscriberConfigResult, SubscriberConfigList, RestEventData, RestConfig, QueueEventData, KafkaConfig, PubSubConfig, TemporalEventData, TemporalConfig, SqsEventData, SqsConfig, EventBridgeData, EventBridgeConfig, EventMapBody, WebhookConfig, UpsertSubscriberConfig, UpsertSubscriberConfigResult, SubscriberStatus };
}
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of all items across all pages.
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
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {BroadcasterConfig} */
declare function BroadcasterConfig(): BroadcasterConfig;
type BroadcasterConfig = {
    /**
     * - The name of the topic for the broadcaster configuration.
     */
    topic?: string;
    /**
     * - The name of the queue for the broadcaster configuration.
     */
    queue?: string;
    /**
     * - The name of the event bridge
     * associated with the broadcaster.
     */
    event_bridge_name?: string;
    /**
     * - The name of the workflow related to the
     * broadcaster.
     */
    workflow_name?: string;
    /**
     * - The account ID associated with the broadcaster.
     */
    account_id?: string;
    /**
     * - The type of detail for the broadcaster
     * configuration.
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
     * - The ID of the event associated with the subscriber.
     */
    event_id?: number;
    /**
     * - The ID of the subscriber.
     */
    subscriber_id?: number;
    filters?: FilterSchema;
    /**
     * - The reducer property allows users to customize
     * the JSON structure of the webhook payload using JSONPath queries. They can
     * also create new properties by mapping existing ones. Note that it overrides
     * the entire JSON structure of the webhook payload sent via the webhook. See
     * the partner documentation's filter and reducer section for details.
     */
    reducer?: any;
    broadcaster_config?: BroadcasterConfig;
    /**
     * - The date and time when the subscriber event
     * mapping was created.
     */
    created_on?: string;
};
/** @returns {FilterSchema} */
declare function FilterSchema(): FilterSchema;
type FilterSchema = {
    /**
     * - JSONPath expression that specifies the property
     * in the webhook payload to filter on. This enables targeting specific data
     * within the payload.
     */
    query?: string;
    /**
     * - JavaScript function used to evaluate the
     * specified property in the webhook payload against a condition. This
     * function determines whether the filter passes based on its return value.
     */
    condition?: string;
    /**
     * - Logical operator used to combine multiple
     * conditions in the `conditions` array. Supported values are `AND` and `OR`.
     */
    logic?: string;
    /**
     * - An array of filter objects to be
     * evaluated using the specified logical operator. This array will contain
     * more filters including a combination of single condition mode and logical
     * group mode filters.
     */
    conditions?: any[];
};
/** @returns {EventConfig} */
declare function EventConfig(): EventConfig;
type EventConfig = {
    /**
     * - The unique identifier for the event configuration.
     */
    id?: number;
    /**
     * - The type of event configuration, which may be null.
     */
    type?: string;
    /**
     * - The name of the event.
     */
    event_name?: string;
    /**
     * - The type of the event.
     */
    event_type?: string;
    /**
     * - The category of the event.
     */
    event_category?: string;
    /**
     * - The identifier of the user who last
     * modified the event configuration.
     */
    modified_by?: string;
    subscriber_event_mapping?: SubscriberEventMapping;
    /**
     * - The schema for the event, allowing for
     * additional properties and may be null.
     */
    event_schema?: any;
    /**
     * - The group associated with the event
     * configuration, which may be null.
     */
    group?: string;
    /**
     * - The version of the event configuration.
     */
    version?: string;
    /**
     * - The display name of the event configuration.
     */
    display_name?: string;
    /**
     * - A description of the event configuration,
     * which may be null.
     */
    description?: string;
    /**
     * - The date and time when the event
     * configuration was created.
     */
    created_on?: string;
    /**
     * - The date and time when the event
     * configuration was last updated.
     */
    updated_on?: string;
};
/** @returns {EventConfigResult} */
declare function EventConfigResult(): EventConfigResult;
type EventConfigResult = {
    /**
     * - List of event configurations.
     */
    event_configs?: EventConfig[];
};
/** @returns {Association} */
declare function Association(): Association;
type Association = {
    /**
     * - A list of application IDs associated
     * with the association.
     */
    application_id?: string[];
    /**
     * - The extension ID associated with the association.
     */
    extension_id?: string;
    /**
     * - The criteria for the association, such as
     * "ALL", "EMPTY", or "SPECIFIC-EVENTS".
     */
    criteria?: string;
};
/** @returns {AssociationResp} */
declare function AssociationResp(): AssociationResp;
type AssociationResp = {
    /**
     * - The ID of the company associated with the response.
     */
    company_id?: number;
    /**
     * - A list of application IDs associated
     * with the response.
     */
    application_id?: string[];
    /**
     * - The extension ID associated with the response.
     */
    extension_id?: string;
    /**
     * - The criteria for the response, such as "ALL",
     * "EMPTY", or "SPECIFIC-EVENTS".
     */
    criteria?: string;
};
/** @returns {AuthMeta} */
declare function AuthMeta(): AuthMeta;
type AuthMeta = {
    /**
     * - The type of authentication method used.
     */
    type?: string;
    /**
     * - The secret key or token used for authentication.
     */
    secret?: string;
};
/** @returns {SubscriberDetails} */
declare function SubscriberDetails(): SubscriberDetails;
type SubscriberDetails = {
    /**
     * - The unique identifier of the subscriber.
     */
    id?: number;
    /**
     * - The identifier of the user who last
     * modified the subscriber details.
     */
    modified_by?: string;
    /**
     * - The name of the subscriber.
     */
    name?: string;
    /**
     * - The provider of the subscriber.
     */
    provider?: string;
    /**
     * - The URL for the subscriber's webhook.
     */
    webhook_url?: string;
    association?: AssociationResp;
    /**
     * - Custom headers for the subscriber.
     */
    custom_headers?: any;
    status?: SubscriberStatus;
    /**
     * - The email ID associated with the subscriber.
     */
    email_id?: string;
    /**
     * - The date and time when the subscriber
     * details were last updated.
     */
    updated_on?: string;
    /**
     * - The date and time when the subscriber was created.
     */
    created_on?: string;
    /**
     * - The type of subscriber, which can either be passed as null.
     */
    type?: string;
    auth_meta?: AuthMeta;
    /**
     * - List of event configurations.
     */
    event_configs?: EventConfig[];
};
/** @returns {Events} */
declare function Events(): Events;
type Events = {
    /**
     * - The slug or identifier for the event.
     */
    slug?: string;
    /**
     * - The topic associated with the event.
     */
    topic?: string;
    /**
     * - The queue associated with the event in case of
     * provider as Pub/Sub.
     */
    queue?: string;
    /**
     * - The name of the event bridge
     * associated with the event in case of provider as AWS event bridge.
     */
    event_bridge_name?: string;
    /**
     * - The name of the workflow related to the
     * event in case of provider as temporal.
     */
    workflow_name?: string;
    /**
     * - The type of detail for the event.
     */
    detail_type?: string;
};
/** @returns {SubscriberConfigPostRequestV2} */
declare function SubscriberConfigPostRequestV2(): SubscriberConfigPostRequestV2;
type SubscriberConfigPostRequestV2 = {
    /**
     * - The name of the subscriber.
     */
    name: string;
    /**
     * - The type of the subscriber, which may be null.
     */
    type?: string;
    /**
     * - The URL for the subscriber's webhook.
     */
    webhook_url?: string;
    /**
     * - The provider of the subscriber.
     */
    provider: string;
    association: Association;
    /**
     * - Custom headers for the subscriber.
     */
    custom_headers?: any;
    status: SubscriberStatus;
    /**
     * - The email ID associated with the subscriber.
     */
    email_id: string;
    auth_meta?: AuthMeta;
    /**
     * - The list of events associated with the subscriber.
     */
    events: Events[];
};
/** @returns {SubscriberConfigUpdateRequestV2} */
declare function SubscriberConfigUpdateRequestV2(): SubscriberConfigUpdateRequestV2;
type SubscriberConfigUpdateRequestV2 = {
    /**
     * - The unique identifier of the subscriber to be updated.
     */
    id: number;
    /**
     * - The name of the subscriber.
     */
    name?: string;
    /**
     * - The type of the subscriber, which may be null.
     */
    type?: string;
    /**
     * - The URL for the subscriber's webhook.
     */
    webhook_url?: string;
    /**
     * - The provider of the subscriber.
     */
    provider: string;
    association?: Association;
    /**
     * - Custom headers for the subscriber.
     */
    custom_headers?: any;
    status: SubscriberStatus;
    /**
     * - The email ID associated with the subscriber.
     */
    email_id?: string;
    auth_meta?: AuthMeta;
    /**
     * - The list of events associated with the subscriber.
     */
    events?: Events[];
};
/** @returns {SubscriberConfigPost} */
declare function SubscriberConfigPost(): SubscriberConfigPost;
type SubscriberConfigPost = {
    /**
     * - The name of the subscriber.
     */
    name: string;
    /**
     * - The type of the subscriber, which can be null.
     */
    type?: string;
    /**
     * - The URL for the subscriber's webhook.
     */
    webhook_url: string;
    association: Association;
    /**
     * - Custom headers for the subscriber.
     */
    custom_headers?: any;
    status: SubscriberStatus;
    /**
     * - The email ID associated with the subscriber.
     */
    email_id: string;
    auth_meta?: AuthMeta;
    /**
     * - The list of event IDs associated with the subscriber.
     */
    event_id: number[];
};
/** @returns {SubscriberConfigUpdate} */
declare function SubscriberConfigUpdate(): SubscriberConfigUpdate;
type SubscriberConfigUpdate = {
    /**
     * - The unique identifier of the subscriber to be updated.
     */
    id: number;
    /**
     * - The name of the subscriber.
     */
    name?: string;
    /**
     * - The type of the subscriber, which can be null.
     */
    type?: string;
    /**
     * - The URL for the subscriber's webhook.
     */
    webhook_url?: string;
    association?: Association;
    /**
     * - Custom headers for the subscriber.
     */
    custom_headers?: any;
    status?: SubscriberStatus;
    /**
     * - The email ID associated with the subscriber.
     */
    email_id?: string;
    auth_meta?: AuthMeta;
    /**
     * - The list of event IDs associated with the subscriber.
     */
    event_id: number[];
};
/** @returns {SubscriberConfigResult} */
declare function SubscriberConfigResult(): SubscriberConfigResult;
type SubscriberConfigResult = {
    /**
     * - The unique identifier of the subscriber configuration.
     */
    id?: number;
    /**
     * - The identifier of the user who last
     * modified the subscriber configuration.
     */
    modified_by?: string;
    /**
     * - The name of the subscriber.
     */
    name?: string;
    /**
     * - The URL for the subscriber's webhook.
     */
    webhook_url?: string;
    /**
     * - The provider of the subscriber.
     */
    provider?: string;
    association?: AssociationResp;
    /**
     * - Custom headers for the subscriber.
     */
    custom_headers?: any;
    status?: SubscriberStatus;
    /**
     * - The email ID associated with the subscriber.
     */
    email_id?: string;
    /**
     * - The date and time when the subscriber was
     * last updated.
     */
    updated_on?: string;
    /**
     * - The date and time when the subscriber was created.
     */
    created_on?: string;
    /**
     * - The type of the subscriber, which can be null.
     */
    type?: string;
    auth_meta?: AuthMeta;
    /**
     * - The list of event IDs associated with the subscriber.
     */
    event_id?: number[];
};
/** @returns {SubscriberConfigList} */
declare function SubscriberConfigList(): SubscriberConfigList;
type SubscriberConfigList = {
    /**
     * - List of subscriber details.
     */
    items?: SubscriberDetails[];
    page?: Page;
};
/** @returns {RestEventData} */
declare function RestEventData(): RestEventData;
type RestEventData = {
    /**
     * - The category of the event.
     */
    event_category: string;
    /**
     * - The name of the event.
     */
    event_name: string;
    /**
     * - The type of the event.
     */
    event_type: string;
    /**
     * - The version number of the event.
     */
    version: number;
};
/** @returns {RestConfig} */
declare function RestConfig(): RestConfig;
type RestConfig = {
    /**
     * - The URL for the webhook.
     */
    webhook_url: string;
    /**
     * - The type of the configuration.
     */
    type: string;
    /**
     * - Custom headers for the configuration.
     */
    custom_headers?: any;
    auth_meta?: AuthMeta;
    /**
     * - List of event data for configuration.
     */
    events: RestEventData[];
};
/** @returns {QueueEventData} */
declare function QueueEventData(): QueueEventData;
type QueueEventData = {
    /**
     * - The category of the event.
     */
    event_category: string;
    /**
     * - The name of the event.
     */
    event_name: string;
    /**
     * - The type of the event.
     */
    event_type: string;
    /**
     * - The version number of the event.
     */
    version: number;
    /**
     * - The topic associated with the event.
     */
    topic: string;
};
/** @returns {KafkaConfig} */
declare function KafkaConfig(): KafkaConfig;
type KafkaConfig = {
    /**
     * - Type of Kafka configuration (optional).
     */
    type?: string;
    /**
     * - List of event data for configuration.
     */
    events: QueueEventData[];
};
/** @returns {PubSubConfig} */
declare function PubSubConfig(): PubSubConfig;
type PubSubConfig = {
    /**
     * - Type of Pub/Sub configuration (optional).
     */
    type?: string;
    /**
     * - List of event data for configuration.
     */
    events: QueueEventData[];
};
/** @returns {TemporalEventData} */
declare function TemporalEventData(): TemporalEventData;
type TemporalEventData = {
    /**
     * - The category of the event.
     */
    event_category: string;
    /**
     * - The name of the event.
     */
    event_name: string;
    /**
     * - The type of the event.
     */
    event_type: string;
    /**
     * - The version number of the event.
     */
    version: number;
    /**
     * - The queue associated with the event.
     */
    queue?: string;
    /**
     * - The workflow name related to the event.
     */
    workflow_name?: string;
};
/** @returns {TemporalConfig} */
declare function TemporalConfig(): TemporalConfig;
type TemporalConfig = {
    /**
     * - Type of Temporal configuration (optional).
     */
    type?: string;
    /**
     * - List of event data for configuration.
     */
    events: TemporalEventData[];
};
/** @returns {SqsEventData} */
declare function SqsEventData(): SqsEventData;
type SqsEventData = {
    /**
     * - The category of the event.
     */
    event_category: string;
    /**
     * - The name of the event.
     */
    event_name: string;
    /**
     * - The type of the event.
     */
    event_type: string;
    /**
     * - The version number of the event.
     */
    version: number;
    /**
     * - The queue name associated with the event in SQS.
     */
    queue?: string;
};
/** @returns {SqsConfig} */
declare function SqsConfig(): SqsConfig;
type SqsConfig = {
    /**
     * - Type of SQS configuration (optional).
     */
    type?: string;
    /**
     * - List of event data for configuration.
     */
    events: SqsEventData[];
};
/** @returns {EventBridgeData} */
declare function EventBridgeData(): EventBridgeData;
type EventBridgeData = {
    /**
     * - The category of the event.
     */
    event_category: string;
    /**
     * - The name of the event.
     */
    event_name: string;
    /**
     * - The type of the event.
     */
    event_type: string;
    /**
     * - The version number of the event.
     */
    version: number;
    /**
     * - The name of the event bridge related
     * to the event.
     */
    event_bridge_name?: string;
};
/** @returns {EventBridgeConfig} */
declare function EventBridgeConfig(): EventBridgeConfig;
type EventBridgeConfig = {
    /**
     * - Type of event configuration (optional).
     */
    type?: string;
    /**
     * - List of event data for EventBridge
     * configuration.
     */
    events: EventBridgeData[];
};
/** @returns {EventMapBody} */
declare function EventMapBody(): EventMapBody;
type EventMapBody = {
    rest?: RestConfig;
    kafka?: KafkaConfig;
    pub_sub?: PubSubConfig;
    temporal?: TemporalConfig;
    sqs?: SqsConfig;
    event_bridge?: EventBridgeConfig;
};
/** @returns {WebhookConfig} */
declare function WebhookConfig(): WebhookConfig;
type WebhookConfig = {
    /**
     * - The email address for notifications.
     */
    notification_email?: string;
    /**
     * - The name of the webhook configuration.
     */
    name?: string;
    /**
     * - The status of the webhook (e.g., active or inactive).
     */
    status?: string;
    association?: Association;
    event_map?: EventMapBody;
};
/** @returns {UpsertSubscriberConfig} */
declare function UpsertSubscriberConfig(): UpsertSubscriberConfig;
type UpsertSubscriberConfig = {
    webhook_config: WebhookConfig;
};
/** @returns {UpsertSubscriberConfigResult} */
declare function UpsertSubscriberConfigResult(): UpsertSubscriberConfigResult;
type UpsertSubscriberConfigResult = {
    /**
     * - The status of the upsert operation (e.g.,
     * success or failure).
     */
    status?: boolean;
    /**
     * - A message providing details about the upsert
     * operation result.
     */
    message?: string;
};
/**
 * Enum: SubscriberStatus Used By: Webhook
 *
 * @returns {SubscriberStatus}
 */
declare function SubscriberStatus(): SubscriberStatus;
type SubscriberStatus = "active" | "inactive";
