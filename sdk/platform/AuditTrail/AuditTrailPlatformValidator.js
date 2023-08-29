const Joi = require("joi");

const AuditTrailPlatformModel = require("./AuditTrailPlatformModel");

/**
 * @typedef CreateAuditLogParam
 * @property {AuditTrailPlatformModel.RequestBodyAuditLog} body
 */

/**
 * @typedef GetAuditLogParam
 * @property {string} id - Log uuid
 */

/**
 * @typedef GetAuditLogsParam
 * @property {string} qs - Logs Query
 * @property {number} [limit] - Current request items count
 * @property {Object} [sort] - To sort based on _id
 */

/** @typedef GetEntityTypesParam */

class AuditTrailPlatformValidator {
  /** @returns {CreateAuditLogParam} */
  static createAuditLog() {
    return Joi.object({
      body: AuditTrailPlatformModel.RequestBodyAuditLog().required(),
    }).required();
  }

  /** @returns {GetAuditLogParam} */
  static getAuditLog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAuditLogsParam} */
  static getAuditLogs() {
    return Joi.object({
      qs: Joi.string().allow("").required(),
      limit: Joi.number(),
      sort: Joi.any(),
    }).required();
  }

  /** @returns {GetEntityTypesParam} */
  static getEntityTypes() {
    return Joi.object({}).required();
  }
}

module.exports = AuditTrailPlatformValidator;
