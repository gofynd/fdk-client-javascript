export = AuditTrail;
declare class AuditTrail {
    constructor(config: any);
    config: any;
    /**
     * @param {AuditTrailPlatformValidator.CreateAuditLogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AuditTrailPlatformModel.CreateLogResponse>} - Success response
     * @name createAuditLog
     * @summary: Create an audit log
     * @description: Generate and record an audit log entry for a specific event or action. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/createAuditLog/).
     */
    createAuditLog({ body, requestHeaders }?: AuditTrailPlatformValidator.CreateAuditLogParam, { responseHeaders }?: object): Promise<AuditTrailPlatformModel.CreateLogResponse>;
    /**
     * @param {AuditTrailPlatformValidator.GetAuditLogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AuditTrailPlatformModel.LogSchemaResponse>} - Success response
     * @name getAuditLog
     * @summary: Get an audit log
     * @description: Retrieve a specific audit log entry. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/getAuditLog/).
     */
    getAuditLog({ id, requestHeaders }?: AuditTrailPlatformValidator.GetAuditLogParam, { responseHeaders }?: object): Promise<AuditTrailPlatformModel.LogSchemaResponse>;
    /**
     * @param {AuditTrailPlatformValidator.GetAuditLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AuditTrailPlatformModel.LogSchemaResponse>} - Success response
     * @name getAuditLogs
     * @summary: Get audit logs
     * @description: Retrieve audit logs for system events and actions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/getAuditLogs/).
     */
    getAuditLogs({ qs, limit, sort, requestHeaders }?: AuditTrailPlatformValidator.GetAuditLogsParam, { responseHeaders }?: object): Promise<AuditTrailPlatformModel.LogSchemaResponse>;
    /**
     * @param {AuditTrailPlatformValidator.GetEntityTypesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AuditTrailPlatformModel.EntityTypesResponse>} - Success response
     * @name getEntityTypes
     * @summary: List entity types
     * @description: List of entity types that can be audited within the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/getEntityTypes/).
     */
    getEntityTypes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<AuditTrailPlatformModel.EntityTypesResponse>;
}
import AuditTrailPlatformValidator = require("./AuditTrailPlatformValidator");
import AuditTrailPlatformModel = require("./AuditTrailPlatformModel");
