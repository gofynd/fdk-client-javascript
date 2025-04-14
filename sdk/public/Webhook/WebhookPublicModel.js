const Joi = require("joi");

/**
 * @typedef EventConfig
 * @property {number} [id] - The unique identifier for the event configuration.
 * @property {string} [event_name] - The name of the event.
 * @property {string} [event_type] - The type of the event.
 * @property {string} [event_category] - The category of the event.
 * @property {Object} [event_schema] - The schema defining the event data structure.
 * @property {string} [version] - The version of the event configuration.
 * @property {string} [display_name] - A user-friendly name for the event.
 * @property {string} [description] - A detailed description of the event.
 * @property {string} [created_on] - The timestamp when the event configuration
 *   was created.
 * @property {string} [updated_on] - The timestamp when the event configuration
 *   was last updated.
 * @property {string} [group] - The group to which the event belongs.
 */

/**
 * @typedef EventDetails
 * @property {EventConfig[]} [event_configs] - A list of event configuration details.
 */

/**
 * @typedef EventConfigBase
 * @property {string} [event_name] - The name of the event.
 * @property {string} [event_type] - The type of the event.
 * @property {string} [event_category] - The category of the event.
 * @property {string} [version] - The version of the event configuration.
 */

/**
 * @typedef EventNotifier
 * @property {string} [message] - The message to be sent in the notification.
 * @property {string[]} [emails] - List of email addresses to notify.
 */

/**
 * @typedef EventSchema
 * @property {Object} [payload] - The event data payload.
 * @property {Object} [meta] - Metadata related to the event.
 */

/**
 * @typedef InternalTransformEvent
 * @property {string[]} [trace_id] - List of trace IDs related to the event.
 * @property {string} [name] - The name of the transformation event.
 * @property {string} [type] - The type of the transformation event.
 * @property {string} [version] - The version of the transformation event.
 * @property {number} [created_timestamp] - The timestamp when the event was created.
 */

/**
 * @typedef TransformEventData
 * @property {InternalTransformEvent} [event]
 * @property {number} [company_id] - The company ID associated with the event.
 * @property {string[]} [contains] - List of strings related to the event.
 * @property {Object} [payload] - Event data payload.
 */

/**
 * @typedef TransformEventServiceMeta
 * @property {string} [name] - The name of the transformation service.
 */

/**
 * @typedef TransformEventAssociation
 * @property {number} [company_id] - The company ID associated with the event.
 */

/**
 * @typedef TransformEventPayload
 * @property {string} event_name - The name of the event.
 * @property {string} event_type - The type of the event.
 * @property {string} event_category - The category of the event.
 * @property {string} event_version - The version of the event.
 * @property {EventSchema} event
 */

/**
 * @typedef ValidateSchemaPayload
 * @property {string} event_name - The name of the event to validate.
 * @property {string} event_type - The type of the event.
 * @property {string} event_category - The category of the event.
 * @property {string} event_version - The version of the event to validate.
 * @property {EventSchema} event
 * @property {Object} event_schema - The schema defining the structure of the event.
 */

/**
 * @typedef ValidateSchemaResult
 * @property {boolean} [status] - Indicates whether the schema is valid (true)
 *   or invalid (false).
 * @property {string} [message] - A message providing additional details about
 *   the validation result.
 */

/**
 * @typedef TransformEventResult
 * @property {string[]} [event_trace_id] - List of trace IDs related to the
 *   transformation event.
 * @property {TransformEventData} [data]
 * @property {string} [event_name] - The name of the transformation event.
 * @property {string} [version] - The version of the transformation event.
 * @property {boolean} [status] - The status of the event processing.
 * @property {string} [event_type] - The type of the transformation event.
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
      group: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EventDetails} */
  static EventDetails() {
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

  /** @returns {TransformEventPayload} */
  static TransformEventPayload() {
    return Joi.object({
      event_name: Joi.string().allow("").required(),
      event_type: Joi.string().allow("").required(),
      event_category: Joi.string().allow("").required(),
      event_version: Joi.string().allow("").required(),
      event: WebhookPublicModel.EventSchema().required(),
    });
  }

  /** @returns {ValidateSchemaPayload} */
  static ValidateSchemaPayload() {
    return Joi.object({
      event_name: Joi.string().allow("").required(),
      event_type: Joi.string().allow("").required(),
      event_category: Joi.string().allow("").required(),
      event_version: Joi.string().allow("").required(),
      event: WebhookPublicModel.EventSchema().required(),
      event_schema: Joi.object().pattern(/\S/, Joi.any()).required(),
    });
  }

  /** @returns {ValidateSchemaResult} */
  static ValidateSchemaResult() {
    return Joi.object({
      status: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {TransformEventResult} */
  static TransformEventResult() {
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
