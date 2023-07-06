export = AuditTrailPlatformValidator;
/**
 * @typedef CreateAuditLogParam
 * @property {AuditTrailPlatformModel.RequestBodyAuditLog} body
 */
/**
 * @typedef GetAuditLogParam
 * @property {string} id - Log uuid
 */
/**
 * @typedef GetAuditLogsParam
 * @property {string} qs - Logs Query
 */
/** @typedef GetEntityTypesParam */
declare class AuditTrailPlatformValidator {
    /** @returns {createAuditLog} */
    static createAuditLog(): createAuditLog;
    /** @returns {getAuditLog} */
    static getAuditLog(): getAuditLog;
    /** @returns {getAuditLogs} */
    static getAuditLogs(): getAuditLogs;
    /** @returns {getEntityTypes} */
    static getEntityTypes(): getEntityTypes;
}
declare namespace AuditTrailPlatformValidator {
    export { CreateAuditLogParam, GetAuditLogParam, GetAuditLogsParam, GetEntityTypesParam };
}
type CreateAuditLogParam = {
    body: AuditTrailPlatformModel.RequestBodyAuditLog;
};
type GetAuditLogParam = {
    /**
     * - Log uuid
     */
    id: string;
};
type GetAuditLogsParam = {
    /**
     * - Logs Query
     */
    qs: string;
};
type GetEntityTypesParam = any;
import AuditTrailPlatformModel = require("./AuditTrailPlatformModel");
