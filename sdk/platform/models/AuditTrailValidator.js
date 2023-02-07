const Joi = require("joi");
const Validator = require("../PlatformModels");
class AuditTrailValidator {
  static getAuditLogs() {
    return Joi.object({
      qs: Joi.string().allow("").required(),
    }).required();
  }

  static createAuditLog() {
    return Joi.object({
      body: Validator.RequestBodyAuditLog().required(),
    }).required();
  }

  static getAuditLog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getEntityTypes() {
    return Joi.object({}).required();
  }
}
module.exports = AuditTrailValidator;
