const Joi = require("joi");

/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {Object} [event_schema]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */

/**
 * @typedef EventNotifier
 * @property {string} [message]
 * @property {string[]} [emails]
 */

/**
 * @typedef EventSchema
 * @property {Object} [payload]
 * @property {Object} [meta]
 */

/**
 * @typedef InternalTransformEvent
 * @property {string[]} [trace_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [version]
 * @property {number} [created_timestamp]
 */

/**
 * @typedef TransformEventData
 * @property {InternalTransformEvent} [event]
 * @property {number} [company_id]
 * @property {string[]} [contains]
 * @property {Object} [payload]
 */

/**
 * @typedef TransformEventServiceMeta
 * @property {string} [name]
 */

/**
 * @typedef TransformEventAssociation
 * @property {number} [company_id]
 */

/**
 * @typedef TransformEventRequest
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [event_version]
 * @property {EventSchema} [event]
 */

/**
 * @typedef ValidateSchemaRequest
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [event_version]
 * @property {EventSchema} [event]
 * @property {Object} [event_schema]
 */

/**
 * @typedef ValidateSchemaResponse
 * @property {boolean} [status]
 * @property {string} [message]
 */

/**
 * @typedef TransformEventResponse
 * @property {string[]} [event_trace_id]
 * @property {TransformEventData} [data]
 * @property {string} [event_name]
 * @property {string} [version]
 * @property {boolean} [status]
 * @property {string} [event_type]
 * @property {TransformEventServiceMeta} [service_meta]
 * @property {TransformEventAssociation} [association]
 */

class WebhookPublicModel {
  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      id: Joi.number(),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_schema: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      version: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookPublicModel.EventConfig()),
    });
  }

  /** @returns {EventConfigBase} */
  static EventConfigBase() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventNotifier} */
  static EventNotifier() {
    return Joi.object({
      message: Joi.string().allow(""),
      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {EventSchema} */
  static EventSchema() {
    return Joi.object({
      payload: Joi.object().pattern(/\S/, Joi.any()),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {InternalTransformEvent} */
  static InternalTransformEvent() {
    return Joi.object({
      trace_id: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      version: Joi.string().allow(""),
      created_timestamp: Joi.number(),
    });
  }

  /** @returns {TransformEventData} */
  static TransformEventData() {
    return Joi.object({
      event: WebhookPublicModel.InternalTransformEvent(),
      company_id: Joi.number(),
      contains: Joi.array().items(Joi.string().allow("")),
      payload: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {TransformEventServiceMeta} */
  static TransformEventServiceMeta() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {TransformEventAssociation} */
  static TransformEventAssociation() {
    return Joi.object({
      company_id: Joi.number(),
    });
  }

  /** @returns {TransformEventRequest} */
  static TransformEventRequest() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_version: Joi.string().allow(""),
      event: WebhookPublicModel.EventSchema(),
    });
  }

  /** @returns {ValidateSchemaRequest} */
  static ValidateSchemaRequest() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_version: Joi.string().allow(""),
      event: WebhookPublicModel.EventSchema(),
      event_schema: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ValidateSchemaResponse} */
  static ValidateSchemaResponse() {
    return Joi.object({
      status: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {TransformEventResponse} */
  static TransformEventResponse() {
    return Joi.object({
      event_trace_id: Joi.array().items(Joi.string().allow("")),
      data: WebhookPublicModel.TransformEventData(),
      event_name: Joi.string().allow(""),
      version: Joi.string().allow(""),
      status: Joi.boolean(),
      event_type: Joi.string().allow(""),
      service_meta: WebhookPublicModel.TransformEventServiceMeta(),
      association: WebhookPublicModel.TransformEventAssociation(),
    });
  }
}
module.exports = WebhookPublicModel;
