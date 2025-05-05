export = AuditTrail;
declare class AuditTrail {
    constructor(config: any);
    config: any;
    /**
     * @param {AuditTrailPlatformValidator.CreateAuditLogParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AuditTrailPlatformModel.CreateLogResp>} - Success response
     * @name createAuditLog
     * @summary: Create an audit log
     * @description: Generate and record an audit log entry for a specific event or action. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/createAuditLog/).
     */
    createAuditLog({ body, requestHeaders }?: AuditTrailPlatformValidator.CreateAuditLogParam, { responseHeaders }?: object): Promise<AuditTrailPlatformModel.CreateLogResp>;
}
import AuditTrailPlatformValidator = require("./AuditTrailPlatformValidator");
import AuditTrailPlatformModel = require("./AuditTrailPlatformModel");
