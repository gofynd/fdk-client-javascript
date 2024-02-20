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
     * @summary: Create logs for auditing later on
     * @description: Create a log instance that stores all the relevant info to be logged - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/createAuditLog/).
     */
    createAuditLog({ body, requestHeaders }?: AuditTrailPlatformValidator.CreateAuditLogParam, { responseHeaders }?: object): Promise<AuditTrailPlatformModel.CreateLogResponse>;
    /**
     * @param {AuditTrailPlatformValidator.GetAuditLogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AuditTrailPlatformModel.LogSchemaResponse>} - Success response
     * @name getAuditLog
     * @summary: Get audit log
     * @description: Get detailed log information by their id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/getAuditLog/).
     */
    getAuditLog({ id, requestHeaders }?: AuditTrailPlatformValidator.GetAuditLogParam, { responseHeaders }?: object): Promise<AuditTrailPlatformModel.LogSchemaResponse>;
    /**
     * @param {AuditTrailPlatformValidator.GetAuditLogsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AuditTrailPlatformModel.LogSchemaResponse>} - Success response
     * @name getAuditLogs
     * @summary: Get paginated audit logs
     * @description: Get a paginated set of logs that can be filtered using the available set of parameters and get the relevant group of logs - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/getAuditLogs/).
     */
    getAuditLogs({ qs, limit, sort, requestHeaders }?: AuditTrailPlatformValidator.GetAuditLogsParam, { responseHeaders }?: object): Promise<AuditTrailPlatformModel.LogSchemaResponse>;
    /**
     * @param {AuditTrailPlatformValidator.GetEntityTypesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AuditTrailPlatformModel.EntityTypesResponse>} - Success response
     * @name getEntityTypes
     * @summary: Get entity types
     * @description: Get a consolidated list of entity types from all the logs stored on the db, which further helps to filter the logs better - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/getEntityTypes/).
     */
    getEntityTypes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<AuditTrailPlatformModel.EntityTypesResponse>;
}
import AuditTrailPlatformValidator = require("sdk/output/javascript/code/sdk/platform/AuditTrail/AuditTrailPlatformValidator");
import AuditTrailPlatformModel = require("sdk/output/javascript/code/sdk/platform/AuditTrail/AuditTrailPlatformModel");
