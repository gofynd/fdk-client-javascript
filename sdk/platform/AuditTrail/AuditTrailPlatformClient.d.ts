export = AuditTrail;
declare class AuditTrail {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {RequestBodyAuditLog} arg.body
     * @returns {Promise<CreateLogResponse>} - Success response
     * @summary: Create logs for auditing later on
     * @description: Create a Audit log
     */
    createAuditLog({ body }?: {
        body: RequestBodyAuditLog;
    }): Promise<CreateLogResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Log uuid
     * @returns {Promise<LogSchemaResponse>} - Success response
     * @summary: Get audit log
     * @description: Get audit logs by logs uuid
     */
    getAuditLog({ id }?: {
        id: string;
    }): Promise<LogSchemaResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.qs - Logs Query
     * @returns {Promise<LogSchemaResponse>} - Success response
     * @summary: Get paginated audit logs
     * @description: Get audit logs
     */
    getAuditLogs({ qs }?: {
        qs: string;
    }): Promise<LogSchemaResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<EntityTypesResponse>} - Success response
     * @summary: Get entity types
     * @description: Get entity types
     */
    getEntityTypes({}?: any): Promise<EntityTypesResponse>;
}
