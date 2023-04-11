export = AuditTrail;
declare class AuditTrail {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {RequestBodyAuditLog} arg.body
     * @returns {Promise<CreateLogResponse>} - Success response
     * @summary: Create logs for auditing later on
     * @description: Create a log instance that stores all the relevant info to be logged
     */
    createAuditLog({ body }?: {
        body: RequestBodyAuditLog;
    }): Promise<CreateLogResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Log uuid
     * @returns {Promise<LogSchemaResponse>} - Success response
     * @summary: Get audit log
     * @description: Get detailed log information by their id
     */
    getAuditLog({ id }?: {
        id: string;
    }): Promise<LogSchemaResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.qs - Logs Query
     * @returns {Promise<LogSchemaResponse>} - Success response
     * @summary: Get paginated audit logs
     * @description: Get a paginated set of logs that can be filtered using the available set of parameters and get the relevant group of logs
     */
    getAuditLogs({ qs }?: {
        qs: string;
    }): Promise<LogSchemaResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<EntityTypesResponse>} - Success response
     * @summary: Get entity types
     * @description: Get a consolidated list of entity types from all the logs stored on the db, which further helps to filter the logs better
     */
    getEntityTypes({}?: any): Promise<EntityTypesResponse>;
}
