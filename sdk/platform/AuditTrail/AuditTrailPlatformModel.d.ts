export = AuditTrailPlatformModel;
/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload - Detailed information about payload.
 */
/**
 * @typedef CreateLogResp
 * @property {string} [message] - Acknowledgement about success or failure of audit log.
 * @property {string} [internal_message] - Status of audit log in internal system.
 */
/**
 * @typedef LogMetaObj
 * @property {Object} [modifier] - Details about user responsible for modifying events.
 * @property {string} [application] - The application id generating the log event.
 * @property {EntityObject} [entity]
 * @property {Object} [device_info] - Contains device-specific information for
 *   the log event.
 * @property {Object} [location] - Holds location-related data for the event context.
 * @property {string} [sessions] - Identifies the session associated with the log event.
 */
/**
 * @typedef EntityObject
 * @property {string} [id] - Unique identifier for the entity.
 * @property {string} [type] - The type/category of the entity.
 * @property {string} [action] - The action performed on or by the entity.
 */
declare class AuditTrailPlatformModel {
}
declare namespace AuditTrailPlatformModel {
    export { RequestBodyAuditLog, CreateLogResp, LogMetaObj, EntityObject };
}
/** @returns {RequestBodyAuditLog} */
declare function RequestBodyAuditLog(): RequestBodyAuditLog;
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    /**
     * - Detailed information about payload.
     */
    log_payload: any;
};
/** @returns {CreateLogResp} */
declare function CreateLogResp(): CreateLogResp;
type CreateLogResp = {
    /**
     * - Acknowledgement about success or failure of audit log.
     */
    message?: string;
    /**
     * - Status of audit log in internal system.
     */
    internal_message?: string;
};
/** @returns {LogMetaObj} */
declare function LogMetaObj(): LogMetaObj;
type LogMetaObj = {
    /**
     * - Details about user responsible for modifying events.
     */
    modifier?: any;
    /**
     * - The application id generating the log event.
     */
    application?: string;
    entity?: EntityObject;
    /**
     * - Contains device-specific information for
     * the log event.
     */
    device_info?: any;
    /**
     * - Holds location-related data for the event context.
     */
    location?: any;
    /**
     * - Identifies the session associated with the log event.
     */
    sessions?: string;
};
/** @returns {EntityObject} */
declare function EntityObject(): EntityObject;
type EntityObject = {
    /**
     * - Unique identifier for the entity.
     */
    id?: string;
    /**
     * - The type/category of the entity.
     */
    type?: string;
    /**
     * - The action performed on or by the entity.
     */
    action?: string;
};
