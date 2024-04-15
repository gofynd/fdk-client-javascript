export = WebhookPublicModel;
/**
 * @typedef EventConfig
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
 */
/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */
/**
 * @typedef EventNotifier
 * @property {string} [message]
 * @property {string[]} [emails]
 */
/**
 * @typedef EventSchema
 * @property {Object} [payload]
 * @property {Object} [meta]
 */
/**
 * @typedef InternalTransformEvent
 * @property {string[]} [trace_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [version]
 * @property {number} [created_timestamp]
 */
/**
 * @typedef TransformEventData
 * @property {InternalTransformEvent} [event]
 * @property {number} [company_id]
 * @property {string[]} [contains]
 * @property {Object} [payload]
 */
/**
 * @typedef TransformEventServiceMeta
 * @property {string} [name]
 */
/**
 * @typedef TransformEventAssociation
 * @property {number} [company_id]
 */
/**
 * @typedef TransformEventRequest
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [event_version]
 * @property {EventSchema} [event]
 */
/**
 * @typedef ValidateSchemaRequest
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [event_version]
 * @property {EventSchema} [event]
 * @property {Object} [event_schema]
 */
/**
 * @typedef ValidateSchemaResponse
 * @property {boolean} [status]
 * @property {string} [message]
 */
/**
 * @typedef TransformEventResponse
 * @property {string[]} [event_trace_id]
 * @property {TransformEventData} [data]
 * @property {string} [event_name]
 * @property {string} [version]
 * @property {boolean} [status]
 * @property {string} [event_type]
 * @property {TransformEventServiceMeta} [service_meta]
 * @property {TransformEventAssociation} [association]
 */
declare class WebhookPublicModel {
}
declare namespace WebhookPublicModel {
    export { EventConfig, EventConfigResponse, EventConfigBase, EventNotifier, EventSchema, InternalTransformEvent, TransformEventData, TransformEventServiceMeta, TransformEventAssociation, TransformEventRequest, ValidateSchemaRequest, ValidateSchemaResponse, TransformEventResponse };
}
/** @returns {EventConfig} */
declare function EventConfig(): EventConfig;
type EventConfig = {
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
};
/** @returns {EventConfigResponse} */
declare function EventConfigResponse(): EventConfigResponse;
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
/** @returns {EventConfigBase} */
declare function EventConfigBase(): EventConfigBase;
type EventConfigBase = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
/** @returns {EventNotifier} */
declare function EventNotifier(): EventNotifier;
type EventNotifier = {
    message?: string;
    emails?: string[];
};
/** @returns {EventSchema} */
declare function EventSchema(): EventSchema;
type EventSchema = {
    payload?: any;
    meta?: any;
};
/** @returns {InternalTransformEvent} */
declare function InternalTransformEvent(): InternalTransformEvent;
type InternalTransformEvent = {
    trace_id?: string[];
    name?: string;
    type?: string;
    version?: string;
    created_timestamp?: number;
};
/** @returns {TransformEventData} */
declare function TransformEventData(): TransformEventData;
type TransformEventData = {
    event?: InternalTransformEvent;
    company_id?: number;
    contains?: string[];
    payload?: any;
};
/** @returns {TransformEventServiceMeta} */
declare function TransformEventServiceMeta(): TransformEventServiceMeta;
type TransformEventServiceMeta = {
    name?: string;
};
/** @returns {TransformEventAssociation} */
declare function TransformEventAssociation(): TransformEventAssociation;
type TransformEventAssociation = {
    company_id?: number;
};
/** @returns {TransformEventRequest} */
declare function TransformEventRequest(): TransformEventRequest;
type TransformEventRequest = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    event_version?: string;
    event?: EventSchema;
};
/** @returns {ValidateSchemaRequest} */
declare function ValidateSchemaRequest(): ValidateSchemaRequest;
type ValidateSchemaRequest = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    event_version?: string;
    event?: EventSchema;
    event_schema?: any;
};
/** @returns {ValidateSchemaResponse} */
declare function ValidateSchemaResponse(): ValidateSchemaResponse;
type ValidateSchemaResponse = {
    status?: boolean;
    message?: string;
};
/** @returns {TransformEventResponse} */
declare function TransformEventResponse(): TransformEventResponse;
type TransformEventResponse = {
    event_trace_id?: string[];
    data?: TransformEventData;
    event_name?: string;
    version?: string;
    status?: boolean;
    event_type?: string;
    service_meta?: TransformEventServiceMeta;
    association?: TransformEventAssociation;
};
