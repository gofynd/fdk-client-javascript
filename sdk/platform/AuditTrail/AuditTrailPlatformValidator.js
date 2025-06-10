const Joi = require("joi");

const AuditTrailPlatformModel = require("./AuditTrailPlatformModel");

/**
 * @typedef CreateAuditLogParam
 * @property {AuditTrailPlatformModel.RequestBodyAuditLog} body
 */

class AuditTrailPlatformValidator {
  /** @returns {CreateAuditLogParam} */
  static createAuditLog() {
    return Joi.object({
      body: AuditTrailPlatformModel.RequestBodyAuditLog().required(),
    }).required();
  }
}

module.exports = AuditTrailPlatformValidator;
