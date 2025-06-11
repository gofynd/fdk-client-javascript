const Joi = require("joi");

/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */

/**
 * @typedef CreateLogResponse
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
 */

/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */

/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */

/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */

/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */

/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */

/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */

/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message.
 */

/**
 * @typedef InternalServerError
 * @property {string} [message] - Internal server Server error
 * @property {string} [code] - Error code
 */

/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */

/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */

class AuditTrailPlatformModel {
  /** @returns {RequestBodyAuditLog} */
  static RequestBodyAuditLog() {
    return Joi.object({
      log_meta: AuditTrailPlatformModel.LogMetaObj().required(),
      log_payload: Joi.any().required(),
    });
  }

  /** @returns {CreateLogResponse} */
  static CreateLogResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      internal_message: Joi.string().allow(""),
    });
  }

  /** @returns {LogMetaObj} */
  static LogMetaObj() {
    return Joi.object({
      modifier: Joi.any(),
      application: Joi.string().allow(""),
      entity: AuditTrailPlatformModel.EntityObject(),
      device_info: Joi.any(),
      location: Joi.any(),
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

  /** @returns {LogSchemaResponse} */
  static LogSchemaResponse() {
    return Joi.object({
      docs: Joi.array().items(AuditTrailPlatformModel.LogDocs()),
    });
  }

  /** @returns {LogDocs} */
  static LogDocs() {
    return Joi.object({
      entity: AuditTrailPlatformModel.EntityObj(),
      modifier: AuditTrailPlatformModel.Modifier(),
      device_info: AuditTrailPlatformModel.DeviceInfo(),
      location: AuditTrailPlatformModel.Location(),
      _id: Joi.string().allow(""),
      company: Joi.string().allow(""),
      application: Joi.string().allow(""),
      sessions: Joi.string().allow(""),
      date: Joi.string().allow(""),
      logs: Joi.any(),
    });
  }

  /** @returns {EntityObj} */
  static EntityObj() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      action: Joi.string().allow(""),
      entity_details: Joi.any(),
    });
  }

  /** @returns {Modifier} */
  static Modifier() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      as_administrator: Joi.boolean(),
      user_details: Joi.any(),
    });
  }

  /** @returns {DeviceInfo} */
  static DeviceInfo() {
    return Joi.object({
      user_agent: Joi.string().allow(""),
      extra_meta: Joi.any(),
    });
  }

  /** @returns {Location} */
  static Location() {
    return Joi.object({
      extra_meta: Joi.any(),
    });
  }

  /** @returns {BadRequest} */
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {InternalServerError} */
  static InternalServerError() {
    return Joi.object({
      message: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {EntityTypesResponse} */
  static EntityTypesResponse() {
    return Joi.object({
      items: Joi.array().items(AuditTrailPlatformModel.EntityTypeObj()),
    });
  }

  /** @returns {EntityTypeObj} */
  static EntityTypeObj() {
    return Joi.object({
      entity_value: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }
}
module.exports = AuditTrailPlatformModel;
