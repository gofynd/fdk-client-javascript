export = AuditTrailPlatformModel;
/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message.
 */
/**
 * @typedef CreateLogResponse
 * @property {string} [internal_message]
 * @property {string} [message]
 */
/**
 * @typedef DeviceInfo
 * @property {Object} [extra_meta]
 * @property {string} [user_agent]
 */
/**
 * @typedef EntityObj
 * @property {string} [action]
 * @property {Object} [entity_details]
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef EntityObject
 * @property {string} [action]
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef EntityTypeObj
 * @property {string} [display_name]
 * @property {string} [entity_value]
 */
/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */
/**
 * @typedef InternalServerError
 * @property {string} [code] - Error code
 * @property {string} [message] - Internal server Server error
 */
/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */
/**
 * @typedef LogDocs
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [date]
 * @property {DeviceInfo} [device_info]
 * @property {EntityObj} [entity]
 * @property {Location} [location]
 * @property {Object} [logs]
 * @property {Modifier} [modifier]
 * @property {string} [sessions]
 */
/**
 * @typedef LogMetaObj
 * @property {string} [application]
 * @property {Object} [device_info]
 * @property {EntityObject} [entity]
 * @property {Object} [location]
 * @property {Object} [modifier]
 */
/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */
/**
 * @typedef Modifier
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 * @property {string} [user_id]
 */
/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */
declare class AuditTrailPlatformModel {
}
declare namespace AuditTrailPlatformModel {
    export { BadRequest, CreateLogResponse, DeviceInfo, EntityObj, EntityObject, EntityTypeObj, EntityTypesResponse, InternalServerError, Location, LogDocs, LogMetaObj, LogSchemaResponse, Modifier, RequestBodyAuditLog };
}
/** @returns {BadRequest} */
declare function BadRequest(): BadRequest;
type BadRequest = {
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {CreateLogResponse} */
declare function CreateLogResponse(): CreateLogResponse;
type CreateLogResponse = {
    internal_message?: string;
    message?: string;
};
/** @returns {DeviceInfo} */
declare function DeviceInfo(): DeviceInfo;
type DeviceInfo = {
    extra_meta?: any;
    user_agent?: string;
};
/** @returns {EntityObj} */
declare function EntityObj(): EntityObj;
type EntityObj = {
    action?: string;
    entity_details?: any;
    id?: string;
    type?: string;
};
/** @returns {EntityObject} */
declare function EntityObject(): EntityObject;
type EntityObject = {
    action?: string;
    id?: string;
    type?: string;
};
/** @returns {EntityTypeObj} */
declare function EntityTypeObj(): EntityTypeObj;
type EntityTypeObj = {
    display_name?: string;
    entity_value?: string;
};
/** @returns {EntityTypesResponse} */
declare function EntityTypesResponse(): EntityTypesResponse;
type EntityTypesResponse = {
    items?: EntityTypeObj[];
};
/** @returns {InternalServerError} */
declare function InternalServerError(): InternalServerError;
type InternalServerError = {
    /**
     * - Error code
     */
    code?: string;
    /**
     * - Internal server Server error
     */
    message?: string;
};
/** @returns {Location} */
declare function Location(): Location;
type Location = {
    extra_meta?: any;
};
/** @returns {LogDocs} */
declare function LogDocs(): LogDocs;
type LogDocs = {
    _id?: string;
    application?: string;
    company?: string;
    date?: string;
    device_info?: DeviceInfo;
    entity?: EntityObj;
    location?: Location;
    logs?: any;
    modifier?: Modifier;
    sessions?: string;
};
/** @returns {LogMetaObj} */
declare function LogMetaObj(): LogMetaObj;
type LogMetaObj = {
    application?: string;
    device_info?: any;
    entity?: EntityObject;
    location?: any;
    modifier?: any;
};
/** @returns {LogSchemaResponse} */
declare function LogSchemaResponse(): LogSchemaResponse;
type LogSchemaResponse = {
    docs?: LogDocs[];
};
/** @returns {Modifier} */
declare function Modifier(): Modifier;
type Modifier = {
    as_administrator?: boolean;
    user_details?: any;
    user_id?: string;
};
/** @returns {RequestBodyAuditLog} */
declare function RequestBodyAuditLog(): RequestBodyAuditLog;
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    log_payload: any;
};
