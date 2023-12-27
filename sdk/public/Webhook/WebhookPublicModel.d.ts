export = WebhookPublicModel;
/**
 * @typedef EventConfig
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {Object} [event_schema]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [updated_on]
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
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef EventNotifier
 * @property {string[]} [emails]
 * @property {string} [message]
 */
/**
 * @typedef EventSchema
 * @property {Object} [meta]
 * @property {Object} [payload]
 */
/**
 * @typedef InternalTransformEvent
 * @property {number} [created_timestamp]
 * @property {string} [name]
 * @property {string[]} [trace_id]
 * @property {string} [type]
 * @property {string} [version]
 */
/**
 * @typedef TransformEventAssociation
 * @property {number} [company_id]
 */
/**
 * @typedef TransformEventData
 * @property {number} [company_id]
 * @property {string[]} [contains]
 * @property {InternalTransformEvent} [event]
 * @property {Object} [payload]
 */
/**
 * @typedef TransformEventRequest
 * @property {EventSchema} [event]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_version]
 */
/**
 * @typedef TransformEventResponse
 * @property {TransformEventAssociation} [association]
 * @property {TransformEventData} [data]
 * @property {string} [event_name]
 * @property {string[]} [event_trace_id]
 * @property {string} [event_type]
 * @property {TransformEventServiceMeta} [service_meta]
 * @property {boolean} [status]
 * @property {string} [version]
 */
/**
 * @typedef TransformEventServiceMeta
 * @property {string} [name]
 */
/**
 * @typedef ValidateSchemaRequest
 * @property {EventSchema} [event]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {Object} [event_schema]
 * @property {string} [event_type]
 * @property {string} [event_version]
 */
/**
 * @typedef ValidateSchemaResponse
 * @property {string} [message]
 * @property {boolean} [status]
 */
declare class WebhookPublicModel {
}
declare namespace WebhookPublicModel {
    export { EventConfig, EventConfigBase, EventConfigResponse, EventNotifier, EventSchema, InternalTransformEvent, TransformEventAssociation, TransformEventData, TransformEventRequest, TransformEventResponse, TransformEventServiceMeta, ValidateSchemaRequest, ValidateSchemaResponse };
}
/** @returns {EventConfig} */
declare function EventConfig(): EventConfig;
type EventConfig = {
    created_on?: string;
    description?: string;
    display_name?: string;
    event_category?: string;
    event_name?: string;
    event_schema?: any;
    event_type?: string;
    id?: number;
    updated_on?: string;
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
/** @returns {EventConfigResponse} */
declare function EventConfigResponse(): EventConfigResponse;
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
/** @returns {EventNotifier} */
declare function EventNotifier(): EventNotifier;
type EventNotifier = {
    emails?: string[];
    message?: string;
};
/** @returns {EventSchema} */
declare function EventSchema(): EventSchema;
type EventSchema = {
    meta?: any;
    payload?: any;
};
/** @returns {InternalTransformEvent} */
declare function InternalTransformEvent(): InternalTransformEvent;
type InternalTransformEvent = {
    created_timestamp?: number;
    name?: string;
    trace_id?: string[];
    type?: string;
    version?: string;
};
/** @returns {TransformEventAssociation} */
declare function TransformEventAssociation(): TransformEventAssociation;
type TransformEventAssociation = {
    company_id?: number;
};
/** @returns {TransformEventData} */
declare function TransformEventData(): TransformEventData;
type TransformEventData = {
    company_id?: number;
    contains?: string[];
    event?: InternalTransformEvent;
    payload?: any;
};
/** @returns {TransformEventRequest} */
declare function TransformEventRequest(): TransformEventRequest;
type TransformEventRequest = {
    event?: EventSchema;
    event_category?: string;
    event_name?: string;
    event_type?: string;
    event_version?: string;
};
/** @returns {TransformEventResponse} */
declare function TransformEventResponse(): TransformEventResponse;
type TransformEventResponse = {
    association?: TransformEventAssociation;
    data?: TransformEventData;
    event_name?: string;
    event_trace_id?: string[];
    event_type?: string;
    service_meta?: TransformEventServiceMeta;
    status?: boolean;
    version?: string;
};
/** @returns {TransformEventServiceMeta} */
declare function TransformEventServiceMeta(): TransformEventServiceMeta;
type TransformEventServiceMeta = {
    name?: string;
};
/** @returns {ValidateSchemaRequest} */
declare function ValidateSchemaRequest(): ValidateSchemaRequest;
type ValidateSchemaRequest = {
    event?: EventSchema;
    event_category?: string;
    event_name?: string;
    event_schema?: any;
    event_type?: string;
    event_version?: string;
};
/** @returns {ValidateSchemaResponse} */
declare function ValidateSchemaResponse(): ValidateSchemaResponse;
type ValidateSchemaResponse = {
    message?: string;
    status?: boolean;
};
