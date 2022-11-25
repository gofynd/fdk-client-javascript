export = AuditTrail;
declare class AuditTrail {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.qs - Logs Query
     * @summary: Get paginated audit logs
     * @description: Get a paginated set of logs that can be filtered using the available set of parameters and get the relevant group of logs
     */
    getAuditLogs({ qs }?: {
        qs: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RequestBodyAuditLog} arg.body
     * @summary: Create logs for auditing later on
     * @description: Create a log instance that stores all the relevant info to be logged
     */
    createAuditLog({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Log uuid
     * @summary: Get audit log
     * @description: Get detailed log information by their id
     */
    getAuditLog({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get entity types
     * @description: Get a consolidated list of entity types from all the logs stored on the db, which further helps to filter the logs better
     */
    getEntityTypes({}?: any): Promise<any>;
}
