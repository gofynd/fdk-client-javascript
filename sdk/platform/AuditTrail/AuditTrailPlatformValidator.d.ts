export = AuditTrailPlatformValidator;
/**
 * @typedef createAuditLog
 * @property {AuditTrailPlatformModel.RequestBodyAuditLog} body
 */
/**
 * @typedef getAuditLog
 * @property {string} id - Log uuid
 */
/**
 * @typedef getAuditLogs
 * @property {string} qs - Logs Query
 */
/** @typedef getEntityTypes */
declare class AuditTrailPlatformValidator {
}
declare namespace AuditTrailPlatformValidator {
    export { createAuditLog, getAuditLog, getAuditLogs, getEntityTypes };
}
/** @returns {createAuditLog} */
declare function createAuditLog(): createAuditLog;
type createAuditLog = {
    body: AuditTrailPlatformModel.RequestBodyAuditLog;
};
/** @returns {getAuditLog} */
declare function getAuditLog(): getAuditLog;
type getAuditLog = {
    /**
     * - Log uuid
     */
    id: string;
};
/** @returns {getAuditLogs} */
declare function getAuditLogs(): getAuditLogs;
type getAuditLogs = {
    /**
     * - Logs Query
     */
    qs: string;
};
/** @returns {getEntityTypes} */
declare function getEntityTypes(): any;
type getEntityTypes = any;
import AuditTrailPlatformModel = require("./AuditTrailPlatformModel");
