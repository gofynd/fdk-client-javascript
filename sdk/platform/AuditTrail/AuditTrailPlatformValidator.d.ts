export = AuditTrailPlatformValidator;
/**
 * @typedef CreateAuditLogParam
 * @property {AuditTrailPlatformModel.RequestBodyAuditLog} body
 */
declare class AuditTrailPlatformValidator {
    /** @returns {CreateAuditLogParam} */
    static createAuditLog(): CreateAuditLogParam;
}
declare namespace AuditTrailPlatformValidator {
    export { CreateAuditLogParam };
}
type CreateAuditLogParam = {
    body: AuditTrailPlatformModel.RequestBodyAuditLog;
};
import AuditTrailPlatformModel = require("./AuditTrailPlatformModel");
