const Joi = require("joi");

/**
 * @typedef EventConfig
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {Object} [event_schema]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [updated_on]
 * @property {string} [version]
 */

/**
 * @typedef EventConfigBase
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef EventNotifier
 * @property {string[]} [emails]
 * @property {string} [message]
 */

/**
 * @typedef EventSchema
 * @property {Object} [meta]
 * @property {Object} [payload]
 */

/**
 * @typedef InternalTransformEvent
 * @property {number} [created_timestamp]
 * @property {string} [name]
 * @property {string[]} [trace_id]
 * @property {string} [type]
 * @property {string} [version]
 */

/**
 * @typedef TransformEventAssociation
 * @property {number} [company_id]
 */

/**
 * @typedef TransformEventData
 * @property {number} [company_id]
 * @property {string[]} [contains]
 * @property {InternalTransformEvent} [event]
 * @property {Object} [payload]
 */

/**
 * @typedef TransformEventRequest
 * @property {EventSchema} [event]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_version]
 */

/**
 * @typedef TransformEventResponse
 * @property {TransformEventAssociation} [association]
 * @property {TransformEventData} [data]
 * @property {string} [event_name]
 * @property {string[]} [event_trace_id]
 * @property {string} [event_type]
 * @property {TransformEventServiceMeta} [service_meta]
 * @property {boolean} [status]
 * @property {string} [version]
 */

/**
 * @typedef TransformEventServiceMeta
 * @property {string} [name]
 */

/**
 * @typedef ValidateSchemaRequest
 * @property {EventSchema} [event]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {Object} [event_schema]
 * @property {string} [event_type]
 * @property {string} [event_version]
 */

/**
 * @typedef ValidateSchemaResponse
 * @property {string} [message]
 * @property {boolean} [status]
 */

class WebhookPublicModel {
  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_schema: Joi.object().pattern(/\S/, Joi.any()),
      event_type: Joi.string().allow(""),
      id: Joi.number(),
      updated_on: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigBase} */
  static EventConfigBase() {
    return Joi.object({
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookPublicModel.EventConfig()),
    });
  }

  /** @returns {EventNotifier} */
  static EventNotifier() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {EventSchema} */
  static EventSchema() {
    return Joi.object({
      meta: Joi.object().pattern(/\S/, Joi.any()),
      payload: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {InternalTransformEvent} */
  static InternalTransformEvent() {
    return Joi.object({
      created_timestamp: Joi.number(),
      name: Joi.string().allow(""),
      trace_id: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {TransformEventAssociation} */
  static TransformEventAssociation() {
    return Joi.object({
      company_id: Joi.number(),
    });
  }

  /** @returns {TransformEventData} */
  static TransformEventData() {
    return Joi.object({
      company_id: Joi.number(),
      contains: Joi.array().items(Joi.string().allow("")),
      event: WebhookPublicModel.InternalTransformEvent(),
      payload: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {TransformEventRequest} */
  static TransformEventRequest() {
    return Joi.object({
      event: WebhookPublicModel.EventSchema(),
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_version: Joi.string().allow(""),
    });
  }

  /** @returns {TransformEventResponse} */
  static TransformEventResponse() {
    return Joi.object({
      association: WebhookPublicModel.TransformEventAssociation(),
      data: WebhookPublicModel.TransformEventData(),
      event_name: Joi.string().allow(""),
      event_trace_id: Joi.array().items(Joi.string().allow("")),
      event_type: Joi.string().allow(""),
      service_meta: WebhookPublicModel.TransformEventServiceMeta(),
      status: Joi.boolean(),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {TransformEventServiceMeta} */
  static TransformEventServiceMeta() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ValidateSchemaRequest} */
  static ValidateSchemaRequest() {
    return Joi.object({
      event: WebhookPublicModel.EventSchema(),
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_schema: Joi.object().pattern(/\S/, Joi.any()),
      event_type: Joi.string().allow(""),
      event_version: Joi.string().allow(""),
    });
  }

  /** @returns {ValidateSchemaResponse} */
  static ValidateSchemaResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      status: Joi.boolean(),
    });
  }
}
module.exports = WebhookPublicModel;
