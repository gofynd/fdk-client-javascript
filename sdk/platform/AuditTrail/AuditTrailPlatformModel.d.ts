export = AuditTrailPlatformModel;
/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */
/**
 * @typedef CreateLogResp
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
 * @property {string} [sessions]
 */
/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
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
    log_payload: any;
};
/** @returns {CreateLogResp} */
declare function CreateLogResp(): CreateLogResp;
type CreateLogResp = {
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
    sessions?: string;
};
/** @returns {EntityObject} */
declare function EntityObject(): EntityObject;
type EntityObject = {
    id?: string;
    type?: string;
    action?: string;
};
