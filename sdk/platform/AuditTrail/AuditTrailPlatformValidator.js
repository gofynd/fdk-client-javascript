const Joi = require("joi");

const AuditTrailModel = require("./AuditTrailPlatformModel");
class AuditTrailValidator {
  static createAuditLog() {
    return Joi.object({
      body: AuditTrailModel.RequestBodyAuditLog().required(),
    }).required();
  }

  static getAuditLog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getAuditLogs() {
    return Joi.object({
      qs: Joi.string().allow("").required(),
    }).required();
  }

  static getEntityTypes() {
    return Joi.object({}).required();
  }
}

module.exports = AuditTrailValidator;
