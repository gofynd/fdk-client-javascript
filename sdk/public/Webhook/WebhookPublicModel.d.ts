export = WebhookPublicModel;
/**
 * @typedef EventConfig
 * @property {number} [id] - The unique identifier for the event configuration.
 * @property {string} [event_name] - The name of the event.
 * @property {string} [event_type] - The type of the event.
 * @property {string} [event_category] - The category of the event.
 * @property {Object} [event_schema] - The schema defining the event data structure.
 * @property {string} [version] - The version of the event configuration.
 * @property {string} [display_name] - A user-friendly name for the event.
 * @property {string} [description] - A detailed description of the event.
 * @property {string} [created_on] - The timestamp when the event configuration
 *   was created.
 * @property {string} [updated_on] - The timestamp when the event configuration
 *   was last updated.
 * @property {string} [group] - The group to which the event belongs.
 */
/**
 * @typedef EventDetails
 * @property {EventConfig[]} [event_configs] - A list of event configuration details.
 */
/**
 * @typedef EventConfigBase
 * @property {string} [event_name] - The name of the event.
 * @property {string} [event_type] - The type of the event.
 * @property {string} [event_category] - The category of the event.
 * @property {string} [version] - The version of the event configuration.
 */
/**
 * @typedef EventNotifier
 * @property {string} [message] - The message to be sent in the notification.
 * @property {string[]} [emails] - List of email addresses to notify.
 */
/**
 * @typedef EventSchema
 * @property {Object} [payload] - The event data payload.
 * @property {Object} [meta] - Metadata related to the event.
 */
/**
 * @typedef InternalTransformEvent
 * @property {string[]} [trace_id] - List of trace IDs related to the event.
 * @property {string} [name] - The name of the transformation event.
 * @property {string} [type] - The type of the transformation event.
 * @property {string} [version] - The version of the transformation event.
 * @property {number} [created_timestamp] - The timestamp when the event was created.
 */
/**
 * @typedef TransformEventData
 * @property {InternalTransformEvent} [event]
 * @property {number} [company_id] - The company ID associated with the event.
 * @property {string[]} [contains] - List of strings related to the event.
 * @property {Object} [payload] - Event data payload.
 */
/**
 * @typedef TransformEventServiceMeta
 * @property {string} [name] - The name of the transformation service.
 */
/**
 * @typedef TransformEventAssociation
 * @property {number} [company_id] - The company ID associated with the event.
 */
/**
 * @typedef TransformEventPayload
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {string} event_category - The category of the event.
 * @property {string} event_version - The version of the event.
 * @property {EventSchema} event
 */
/**
 * @typedef ValidateSchemaPayload
 * @property {string} event_name - The name of the event to validate.
 * @property {string} event_type - The type of the event.
 * @property {string} event_category - The category of the event.
 * @property {string} event_version - The version of the event to validate.
 * @property {EventSchema} event
 * @property {Object} event_schema - The schema defining the structure of the event.
 */
/**
 * @typedef ValidateSchemaResult
 * @property {boolean} [status] - Indicates whether the schema is valid (true)
 *   or invalid (false).
 * @property {string} [message] - A message providing additional details about
 *   the validation result.
 */
/**
 * @typedef TransformEventResult
 * @property {string[]} [event_trace_id] - List of trace IDs related to the
 *   transformation event.
 * @property {TransformEventData} [data]
 * @property {string} [event_name] - The name of the transformation event.
 * @property {string} [version] - The version of the transformation event.
 * @property {boolean} [status] - The status of the event processing.
 * @property {string} [event_type] - The type of the transformation event.
 * @property {TransformEventServiceMeta} [service_meta]
 * @property {TransformEventAssociation} [association]
 */
declare class WebhookPublicModel {
}
declare namespace WebhookPublicModel {
    export { EventConfig, EventDetails, EventConfigBase, EventNotifier, EventSchema, InternalTransformEvent, TransformEventData, TransformEventServiceMeta, TransformEventAssociation, TransformEventPayload, ValidateSchemaPayload, ValidateSchemaResult, TransformEventResult };
}
/** @returns {EventConfig} */
declare function EventConfig(): EventConfig;
type EventConfig = {
    /**
     * - The unique identifier for the event configuration.
     */
    id?: number;
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
     * - The schema defining the event data structure.
     */
    event_schema?: any;
    /**
     * - The version of the event configuration.
     */
    version?: string;
    /**
     * - A user-friendly name for the event.
     */
    display_name?: string;
    /**
     * - A detailed description of the event.
     */
    description?: string;
    /**
     * - The timestamp when the event configuration
     * was created.
     */
    created_on?: string;
    /**
     * - The timestamp when the event configuration
     * was last updated.
     */
    updated_on?: string;
    /**
     * - The group to which the event belongs.
     */
    group?: string;
};
/** @returns {EventDetails} */
declare function EventDetails(): EventDetails;
type EventDetails = {
    /**
     * - A list of event configuration details.
     */
    event_configs?: EventConfig[];
};
/** @returns {EventConfigBase} */
declare function EventConfigBase(): EventConfigBase;
type EventConfigBase = {
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
     * - The version of the event configuration.
     */
    version?: string;
};
/** @returns {EventNotifier} */
declare function EventNotifier(): EventNotifier;
type EventNotifier = {
    /**
     * - The message to be sent in the notification.
     */
    message?: string;
    /**
     * - List of email addresses to notify.
     */
    emails?: string[];
};
/** @returns {EventSchema} */
declare function EventSchema(): EventSchema;
type EventSchema = {
    /**
     * - The event data payload.
     */
    payload?: any;
    /**
     * - Metadata related to the event.
     */
    meta?: any;
};
/** @returns {InternalTransformEvent} */
declare function InternalTransformEvent(): InternalTransformEvent;
type InternalTransformEvent = {
    /**
     * - List of trace IDs related to the event.
     */
    trace_id?: string[];
    /**
     * - The name of the transformation event.
     */
    name?: string;
    /**
     * - The type of the transformation event.
     */
    type?: string;
    /**
     * - The version of the transformation event.
     */
    version?: string;
    /**
     * - The timestamp when the event was created.
     */
    created_timestamp?: number;
};
/** @returns {TransformEventData} */
declare function TransformEventData(): TransformEventData;
type TransformEventData = {
    event?: InternalTransformEvent;
    /**
     * - The company ID associated with the event.
     */
    company_id?: number;
    /**
     * - List of strings related to the event.
     */
    contains?: string[];
    /**
     * - Event data payload.
     */
    payload?: any;
};
/** @returns {TransformEventServiceMeta} */
declare function TransformEventServiceMeta(): TransformEventServiceMeta;
type TransformEventServiceMeta = {
    /**
     * - The name of the transformation service.
     */
    name?: string;
};
/** @returns {TransformEventAssociation} */
declare function TransformEventAssociation(): TransformEventAssociation;
type TransformEventAssociation = {
    /**
     * - The company ID associated with the event.
     */
    company_id?: number;
};
/** @returns {TransformEventPayload} */
declare function TransformEventPayload(): TransformEventPayload;
type TransformEventPayload = {
    /**
     * - The name of the event.
     */
    event_name: string;
    /**
     * - The type of the event.
     */
    event_type: string;
    /**
     * - The category of the event.
     */
    event_category: string;
    /**
     * - The version of the event.
     */
    event_version: string;
    event: EventSchema;
};
/** @returns {ValidateSchemaPayload} */
declare function ValidateSchemaPayload(): ValidateSchemaPayload;
type ValidateSchemaPayload = {
    /**
     * - The name of the event to validate.
     */
    event_name: string;
    /**
     * - The type of the event.
     */
    event_type: string;
    /**
     * - The category of the event.
     */
    event_category: string;
    /**
     * - The version of the event to validate.
     */
    event_version: string;
    event: EventSchema;
    /**
     * - The schema defining the structure of the event.
     */
    event_schema: any;
};
/** @returns {ValidateSchemaResult} */
declare function ValidateSchemaResult(): ValidateSchemaResult;
type ValidateSchemaResult = {
    /**
     * - Indicates whether the schema is valid (true)
     * or invalid (false).
     */
    status?: boolean;
    /**
     * - A message providing additional details about
     * the validation result.
     */
    message?: string;
};
/** @returns {TransformEventResult} */
declare function TransformEventResult(): TransformEventResult;
type TransformEventResult = {
    /**
     * - List of trace IDs related to the
     * transformation event.
     */
    event_trace_id?: string[];
    data?: TransformEventData;
    /**
     * - The name of the transformation event.
     */
    event_name?: string;
    /**
     * - The version of the transformation event.
     */
    version?: string;
    /**
     * - The status of the event processing.
     */
    status?: boolean;
    /**
     * - The type of the transformation event.
     */
    event_type?: string;
    service_meta?: TransformEventServiceMeta;
    association?: TransformEventAssociation;
};
