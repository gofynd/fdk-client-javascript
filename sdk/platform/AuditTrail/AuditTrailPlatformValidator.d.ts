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
 * @property {number} [limit] - Current request items count
 * @property {Object} [sort] - To sort based on _id
 */
/** @typedef GetEntityTypesParam */
declare class AuditTrailPlatformValidator {
    /** @returns {CreateAuditLogParam} */
    static createAuditLog(): CreateAuditLogParam;
    /** @returns {GetAuditLogParam} */
    static getAuditLog(): GetAuditLogParam;
    /** @returns {GetAuditLogsParam} */
    static getAuditLogs(): GetAuditLogsParam;
    /** @returns {GetEntityTypesParam} */
    static getEntityTypes(): any;
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
    /**
     * - Current request items count
     */
    limit?: number;
    /**
     * - To sort based on _id
     */
    sort?: any;
};
type GetEntityTypesParam = any;
import AuditTrailPlatformModel = require("sdk/output/javascript/code/sdk/platform/AuditTrail/AuditTrailPlatformModel");
