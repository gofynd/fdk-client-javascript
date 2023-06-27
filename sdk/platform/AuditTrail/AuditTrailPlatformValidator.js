const Joi = require("joi");

const AuditTrailPlatformModel = require("./AuditTrailPlatformModel");

/**
 * @typedef createAuditLog
 * @property {AuditTrailPlatformModel.RequestBodyAuditLog} body
 */

/**
 * @typedef getAuditLog
 * @property {string} id - Log uuid
 */

/**
 * @typedef getAuditLogs
 * @property {string} qs - Logs Query
 */

/** @typedef getEntityTypes */

class AuditTrailPlatformValidator {
  /** @returns {createAuditLog} */
  static createAuditLog() {
    return Joi.object({
      body: AuditTrailPlatformModel.RequestBodyAuditLog().required(),
    }).required();
  }

  /** @returns {getAuditLog} */
  static getAuditLog() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getAuditLogs} */
  static getAuditLogs() {
    return Joi.object({
      qs: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getEntityTypes} */
  static getEntityTypes() {
    return Joi.object({}).required();
  }
}

module.exports = AuditTrailPlatformValidator;
