const Joi = require("joi");

class AuditTrailModel {
  static BadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static CreateLogResponse() {
    return Joi.object({
      internal_message: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }
  static DeviceInfo() {
    return Joi.object({
      extra_meta: Joi.any(),
      user_agent: Joi.string().allow(""),
    });
  }
  static EntityObj() {
    return Joi.object({
      action: Joi.string().allow(""),
      entity_details: Joi.any(),
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static EntityObject() {
    return Joi.object({
      action: Joi.string().allow(""),
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static EntityTypeObj() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      entity_value: Joi.string().allow(""),
    });
  }
  static EntityTypesResponse() {
    return Joi.object({
      items: Joi.array().items(AuditTrailModel.EntityTypeObj()),
    });
  }
  static InternalServerError() {
    return Joi.object({
      code: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }
  static Location() {
    return Joi.object({
      extra_meta: Joi.any(),
    });
  }
  static LogDocs() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      company: Joi.string().allow(""),
      date: Joi.string().allow(""),
      device_info: AuditTrailModel.DeviceInfo(),
      entity: AuditTrailModel.EntityObj(),
      location: AuditTrailModel.Location(),
      logs: Joi.any(),
      modifier: AuditTrailModel.Modifier(),
      sessions: Joi.string().allow(""),
    });
  }
  static LogMetaObj() {
    return Joi.object({
      application: Joi.string().allow(""),
      device_info: Joi.any(),
      entity: AuditTrailModel.EntityObject(),
      location: Joi.any(),
      modifier: Joi.any(),
    });
  }
  static LogSchemaResponse() {
    return Joi.object({
      docs: Joi.array().items(AuditTrailModel.LogDocs()),
    });
  }
  static Modifier() {
    return Joi.object({
      as_administrator: Joi.boolean(),
      user_details: Joi.any(),
      user_id: Joi.string().allow(""),
    });
  }
  static RequestBodyAuditLog() {
    return Joi.object({
      log_meta: AuditTrailModel.LogMetaObj().required(),
      log_payload: Joi.any().required(),
    });
  }
  static ResourceNotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
}
module.exports = AuditTrailModel;
