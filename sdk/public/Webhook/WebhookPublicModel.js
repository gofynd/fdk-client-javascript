const Joi = require("joi");

/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
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

class WebhookPublicModel {
  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      id: Joi.number(),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      version: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
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
}
module.exports = WebhookPublicModel;
