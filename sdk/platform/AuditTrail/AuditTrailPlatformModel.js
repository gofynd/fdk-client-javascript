const Joi = require("joi");

/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload - Detailed information about payload.
 */

/**
 * @typedef CreateLogResp
 * @property {string} [message] - Acknowledgement about success or failure of audit log.
 * @property {string} [internal_message] - Status of audit log in internal system.
 */

/**
 * @typedef LogMetaObj
 * @property {Object} [modifier] - Details about user responsible for modifying events.
 * @property {string} [application] - The application id generating the log event.
 * @property {EntityObject} [entity]
 * @property {Object} [device_info] - Contains device-specific information for
 *   the log event.
 * @property {Object} [location] - Holds location-related data for the event context.
 * @property {string} [sessions] - Identifies the session associated with the log event.
 */

/**
 * @typedef EntityObject
 * @property {string} [id] - Unique identifier for the entity.
 * @property {string} [type] - The type/category of the entity.
 * @property {string} [action] - The action performed on or by the entity.
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
}
module.exports = AuditTrailPlatformModel;
