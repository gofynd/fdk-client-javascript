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
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
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
/** @typedef {"active" | "inactive" | "blocked"} SubscriberStatus */
declare class WebhookPlatformModel {
}
declare namespace WebhookPlatformModel {
    export { Association, AuthMeta, EventConfig, EventConfigResponse, Page, SubscriberConfig, SubscriberConfigList, SubscriberResponse, SubscriberStatus };
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
/** @returns {EventConfigResponse} */
declare function EventConfigResponse(): EventConfigResponse;
type EventConfigResponse = {
    event_configs?: EventConfig[];
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
/**
 * Enum: SubscriberStatus Used By: Webhook
 *
 * @returns {SubscriberStatus}
 */
declare function SubscriberStatus(): SubscriberStatus;
type SubscriberStatus = "active" | "inactive" | "blocked";
