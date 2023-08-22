const Joi = require("joi");

/**
 * @typedef Association
 * @property {string[]} [application_id]
 * @property {number} [company_id]
 * @property {string} [criteria]
 * @property {string} [extension_id]
 */

/**
 * @typedef AuthMeta
 * @property {string} [secret]
 * @property {string} [type]
 */

/**
 * @typedef EventConfig
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [version]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef SubscriberConfig
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [webhook_url]
 */

/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SubscriberResponse
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {EventConfig[]} [event_configs]
 * @property {number} [id]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [updated_on]
 * @property {string} [webhook_url]
 */

/** @typedef {"active" | "inactive" | "blocked"} SubscriberStatus */

class WebhookPlatformModel {
  /** @returns {Association} */
  static Association() {
    return Joi.object({
      application_id: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      criteria: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
    });
  }

  /** @returns {AuthMeta} */
  static AuthMeta() {
    return Joi.object({
      secret: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfig} */
  static EventConfig() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      id: Joi.number(),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {SubscriberConfig} */
  static SubscriberConfig() {
    return Joi.object({
      association: WebhookPlatformModel.Association(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_id: Joi.array().items(Joi.number()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: WebhookPlatformModel.SubscriberStatus(),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberConfigList} */
  static SubscriberConfigList() {
    return Joi.object({
      items: Joi.array().items(WebhookPlatformModel.SubscriberResponse()),
      page: WebhookPlatformModel.Page(),
    });
  }

  /** @returns {SubscriberResponse} */
  static SubscriberResponse() {
    return Joi.object({
      association: WebhookPlatformModel.Association(),
      auth_meta: WebhookPlatformModel.AuthMeta(),
      created_on: Joi.string().allow(""),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_configs: Joi.array().items(WebhookPlatformModel.EventConfig()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: WebhookPlatformModel.SubscriberStatus(),
      updated_on: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }

  /**
   * Enum: SubscriberStatus Used By: Webhook
   *
   * @returns {SubscriberStatus}
   */
  static SubscriberStatus() {
    return Joi.string().valid(
      "active",

      "inactive",

      "blocked"
    );
  }
}
module.exports = WebhookPlatformModel;
