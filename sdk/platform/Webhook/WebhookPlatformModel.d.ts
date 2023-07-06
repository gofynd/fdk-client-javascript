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
 * @typedef EventConfigBase
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */
/**
 * @typedef EventConfigDetails
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */
/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef EventPayload
 * @property {string} [event_name]
 * @property {string} [event_trace_id]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [message_id]
 * @property {boolean} [status]
 * @property {string} [version]
 */
/**
 * @typedef EventProcessedStatus
 * @property {number} [attempt]
 * @property {string} [created_on]
 * @property {number} [id]
 * @property {string} [processed_on]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {boolean} [status]
 * @property {string} [subscriber_id]
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
 * @typedef SubscriberConfigDetails
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
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
 * @typedef SubscriberEvent
 * @property {string} [created_date]
 * @property {number} [event_id]
 * @property {number} [id]
 * @property {number} [subscriber_id]
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
/** @typedef {"active" | "inactive" | "blocked"} SubscriberStatus */
declare class WebhookPlatformModel {
}
declare namespace WebhookPlatformModel {
    export { Association, AuthMeta, EventConfig, EventConfigBase, EventConfigDetails, EventConfigList, EventConfigResponse, EventPayload, EventProcessedStatus, Page, SubscriberConfig, SubscriberConfigDetails, SubscriberConfigList, SubscriberEvent, SubscriberResponse, SubscriberStatus };
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
/** @returns {EventConfigBase} */
declare function EventConfigBase(): EventConfigBase;
type EventConfigBase = {
    event_category?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
};
/** @returns {EventConfigDetails} */
declare function EventConfigDetails(): EventConfigDetails;
type EventConfigDetails = {
    created_on?: string;
    description?: string;
    display_name?: string;
    event_category?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
};
/** @returns {EventConfigList} */
declare function EventConfigList(): EventConfigList;
type EventConfigList = {
    items?: EventConfig[];
    page?: Page;
};
/** @returns {EventConfigResponse} */
declare function EventConfigResponse(): EventConfigResponse;
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
/** @returns {EventPayload} */
declare function EventPayload(): EventPayload;
type EventPayload = {
    event_name?: string;
    event_trace_id?: string;
    event_type?: string;
    id?: number;
    message_id?: string;
    status?: boolean;
    version?: string;
};
/** @returns {EventProcessedStatus} */
declare function EventProcessedStatus(): EventProcessedStatus;
type EventProcessedStatus = {
    attempt?: number;
    created_on?: string;
    id?: number;
    processed_on?: string;
    response_code?: string;
    response_message?: string;
    status?: boolean;
    subscriber_id?: string;
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
/** @returns {SubscriberConfigDetails} */
declare function SubscriberConfigDetails(): SubscriberConfigDetails;
type SubscriberConfigDetails = {
    association?: Association;
    auth_meta?: AuthMeta;
    custom_headers?: any;
    email_id?: string;
    event_id?: number[];
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
/** @returns {SubscriberEvent} */
declare function SubscriberEvent(): SubscriberEvent;
type SubscriberEvent = {
    created_date?: string;
    event_id?: number;
    id?: number;
    subscriber_id?: number;
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
/**
 * Enum: SubscriberStatus Used By: Webhook
 *
 * @returns {SubscriberStatus}
 */
declare function SubscriberStatus(): SubscriberStatus;
type SubscriberStatus = "active" | "inactive" | "blocked";
