const Joi = require("joi");

/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */

/**
 * @typedef CreateLogResp
 * @property {string} [message]
 * @property {string} [internal_message]
 */

/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 * @property {string} [sessions]
 */

/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */

/**
 * @typedef BadRequestSchema
 * @property {string} [message] - Failure message.
 */

class AuditTrailPlatformModel {
  /** @returns {RequestBodyAuditLog} */
  static RequestBodyAuditLog() {
    return Joi.object({
      log_meta: AuditTrailPlatformModel.LogMetaObj().required(),
      log_payload: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {CreateLogResp} */
  static CreateLogResp() {
    return Joi.object({
      message: Joi.string().allow(""),
      internal_message: Joi.string().allow(""),
    });
  }

  /** @returns {LogMetaObj} */
  static LogMetaObj() {
    return Joi.object({
      modifier: Joi.object().pattern(/\S/, Joi.any()),
      application: Joi.string().allow(""),
      entity: AuditTrailPlatformModel.EntityObject(),
      device_info: Joi.object().pattern(/\S/, Joi.any()),
      location: Joi.object().pattern(/\S/, Joi.any()),
      sessions: Joi.string().allow(""),
    });
  }

  /** @returns {EntityObject} */
  static EntityObject() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      action: Joi.string().allow(""),
    });
  }

  /** @returns {BadRequestSchema} */
  static BadRequestSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
}
module.exports = AuditTrailPlatformModel;
