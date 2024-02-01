export = AuditTrailPlatformModel;
/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */
/**
 * @typedef CreateLogResponse
 * @property {string} [message]
 * @property {string} [internal_message]
 */
/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 */
/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */
/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */
/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */
/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */
/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */
/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */
/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */
/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message.
 */
/**
 * @typedef InternalServerError
 * @property {string} [message] - Internal server Server error
 * @property {string} [code] - Error code
 */
/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */
/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */
declare class AuditTrailPlatformModel {
}
declare namespace AuditTrailPlatformModel {
    export { RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, BadRequest, InternalServerError, EntityTypesResponse, EntityTypeObj };
}
/** @returns {RequestBodyAuditLog} */
declare function RequestBodyAuditLog(): RequestBodyAuditLog;
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    log_payload: any;
};
/** @returns {CreateLogResponse} */
declare function CreateLogResponse(): CreateLogResponse;
type CreateLogResponse = {
    message?: string;
    internal_message?: string;
};
/** @returns {LogMetaObj} */
declare function LogMetaObj(): LogMetaObj;
type LogMetaObj = {
    modifier?: any;
    application?: string;
    entity?: EntityObject;
    device_info?: any;
    location?: any;
};
/** @returns {EntityObject} */
declare function EntityObject(): EntityObject;
type EntityObject = {
    id?: string;
    type?: string;
    action?: string;
};
/** @returns {LogSchemaResponse} */
declare function LogSchemaResponse(): LogSchemaResponse;
type LogSchemaResponse = {
    docs?: LogDocs[];
};
/** @returns {LogDocs} */
declare function LogDocs(): LogDocs;
type LogDocs = {
    entity?: EntityObj;
    modifier?: Modifier;
    device_info?: DeviceInfo;
    location?: Location;
    _id?: string;
    company?: string;
    application?: string;
    sessions?: string;
    date?: string;
    logs?: any;
};
/** @returns {EntityObj} */
declare function EntityObj(): EntityObj;
type EntityObj = {
    id?: string;
    type?: string;
    action?: string;
    entity_details?: any;
};
/** @returns {Modifier} */
declare function Modifier(): Modifier;
type Modifier = {
    user_id?: string;
    as_administrator?: boolean;
    user_details?: any;
};
/** @returns {DeviceInfo} */
declare function DeviceInfo(): DeviceInfo;
type DeviceInfo = {
    user_agent?: string;
    extra_meta?: any;
};
/** @returns {Location} */
declare function Location(): Location;
type Location = {
    extra_meta?: any;
};
/** @returns {BadRequest} */
declare function BadRequest(): BadRequest;
type BadRequest = {
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {InternalServerError} */
declare function InternalServerError(): InternalServerError;
type InternalServerError = {
    /**
     * - Internal server Server error
     */
    message?: string;
    /**
     * - Error code
     */
    code?: string;
};
/** @returns {EntityTypesResponse} */
declare function EntityTypesResponse(): EntityTypesResponse;
type EntityTypesResponse = {
    items?: EntityTypeObj[];
};
/** @returns {EntityTypeObj} */
declare function EntityTypeObj(): EntityTypeObj;
type EntityTypeObj = {
    entity_value?: string;
    display_name?: string;
};
