const Joi = require("joi");

/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message.
 */

/**
 * @typedef CreateLogResponse
 * @property {string} [internal_message]
 * @property {string} [message]
 */

/**
 * @typedef DeviceInfo
 * @property {Object} [extra_meta]
 * @property {string} [user_agent]
 */

/**
 * @typedef EntityObj
 * @property {string} [action]
 * @property {Object} [entity_details]
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef EntityObject
 * @property {string} [action]
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef EntityTypeObj
 * @property {string} [display_name]
 * @property {string} [entity_value]
 */

/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */

/**
 * @typedef InternalServerError
 * @property {string} [code] - Error code
 * @property {string} [message] - Internal server Server error
 */

/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */

/**
 * @typedef LogDocs
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [date]
 * @property {DeviceInfo} [device_info]
 * @property {EntityObj} [entity]
 * @property {Location} [location]
 * @property {Object} [logs]
 * @property {Modifier} [modifier]
 * @property {string} [sessions]
 */

/**
 * @typedef LogMetaObj
 * @property {string} [application]
 * @property {Object} [device_info]
 * @property {EntityObject} [entity]
 * @property {Object} [location]
 * @property {Object} [modifier]
 */

/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */

/**
 * @typedef Modifier
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 * @property {string} [user_id]
 */

/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */

class AuditTrailPlatformModel {
  /** @returns {BadRequest} */
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CreateLogResponse} */
  static CreateLogResponse() {
    return Joi.object({
      internal_message: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {DeviceInfo} */
  static DeviceInfo() {
    return Joi.object({
      extra_meta: Joi.any(),
      user_agent: Joi.string().allow(""),
    });
  }

  /** @returns {EntityObj} */
  static EntityObj() {
    return Joi.object({
      action: Joi.string().allow(""),
      entity_details: Joi.any(),
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {EntityObject} */
  static EntityObject() {
    return Joi.object({
      action: Joi.string().allow(""),
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {EntityTypeObj} */
  static EntityTypeObj() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      entity_value: Joi.string().allow(""),
    });
  }

  /** @returns {EntityTypesResponse} */
  static EntityTypesResponse() {
    return Joi.object({
      items: Joi.array().items(AuditTrailPlatformModel.EntityTypeObj()),
    });
  }

  /** @returns {InternalServerError} */
  static InternalServerError() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Location} */
  static Location() {
    return Joi.object({
      extra_meta: Joi.any(),
    });
  }

  /** @returns {LogDocs} */
  static LogDocs() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      company: Joi.string().allow(""),
      date: Joi.string().allow(""),
      device_info: AuditTrailPlatformModel.DeviceInfo(),
      entity: AuditTrailPlatformModel.EntityObj(),
      location: AuditTrailPlatformModel.Location(),
      logs: Joi.any(),
      modifier: AuditTrailPlatformModel.Modifier(),
      sessions: Joi.string().allow(""),
    });
  }

  /** @returns {LogMetaObj} */
  static LogMetaObj() {
    return Joi.object({
      application: Joi.string().allow(""),
      device_info: Joi.any(),
      entity: AuditTrailPlatformModel.EntityObject(),
      location: Joi.any(),
      modifier: Joi.any(),
    });
  }

  /** @returns {LogSchemaResponse} */
  static LogSchemaResponse() {
    return Joi.object({
      docs: Joi.array().items(AuditTrailPlatformModel.LogDocs()),
    });
  }

  /** @returns {Modifier} */
  static Modifier() {
    return Joi.object({
      as_administrator: Joi.boolean(),
      user_details: Joi.any(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {RequestBodyAuditLog} */
  static RequestBodyAuditLog() {
    return Joi.object({
      log_meta: AuditTrailPlatformModel.LogMetaObj().required(),
      log_payload: Joi.any().required(),
    });
  }
}
module.exports = AuditTrailPlatformModel;
