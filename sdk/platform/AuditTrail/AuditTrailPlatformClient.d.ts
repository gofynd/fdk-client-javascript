export = AuditTrail;
declare class AuditTrail {
    constructor(config: any);
    config: any;
    /**
     * @param {AuditTrailPlatformValidator.createAuditLog} arg - Arg object
     * @returns {Promise<AuditTrailPlatformModel.CreateLogResponse>} - Success response
     * @name createAuditLog
     * @summary: Create logs for auditing later on
     * @description: Create a log instance that stores all the relevant info to be logged
     */
    createAuditLog({ body }?: AuditTrailPlatformValidator.createAuditLog): Promise<AuditTrailPlatformModel.CreateLogResponse>;
    /**
     * @param {AuditTrailPlatformValidator.getAuditLog} arg - Arg object
     * @returns {Promise<AuditTrailPlatformModel.LogSchemaResponse>} - Success response
     * @name getAuditLog
     * @summary: Get audit log
     * @description: Get detailed log information by their id
     */
    getAuditLog({ id }?: AuditTrailPlatformValidator.getAuditLog): Promise<AuditTrailPlatformModel.LogSchemaResponse>;
    /**
     * @param {AuditTrailPlatformValidator.getAuditLogs} arg - Arg object
     * @returns {Promise<AuditTrailPlatformModel.LogSchemaResponse>} - Success response
     * @name getAuditLogs
     * @summary: Get paginated audit logs
     * @description: Get a paginated set of logs that can be filtered using the available set of parameters and get the relevant group of logs
     */
    getAuditLogs({ qs }?: AuditTrailPlatformValidator.getAuditLogs): Promise<AuditTrailPlatformModel.LogSchemaResponse>;
    /**
     * @param {AuditTrailPlatformValidator.getEntityTypes} arg - Arg object
     * @returns {Promise<AuditTrailPlatformModel.EntityTypesResponse>} - Success response
     * @name getEntityTypes
     * @summary: Get entity types
     * @description: Get a consolidated list of entity types from all the logs stored on the db, which further helps to filter the logs better
     */
    getEntityTypes({}?: any): Promise<AuditTrailPlatformModel.EntityTypesResponse>;
}
import AuditTrailPlatformValidator = require("./AuditTrailPlatformValidator");
import AuditTrailPlatformModel = require("./AuditTrailPlatformModel");
