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
 * @typedef EventConfigBase
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */

/**
 * @typedef EventConfigDetails
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 */

/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef EventPayload
 * @property {string} [event_name]
 * @property {string} [event_trace_id]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [message_id]
 * @property {boolean} [status]
 * @property {string} [version]
 */

/**
 * @typedef EventProcessedStatus
 * @property {number} [attempt]
 * @property {string} [created_on]
 * @property {number} [id]
 * @property {string} [processed_on]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {boolean} [status]
 * @property {string} [subscriber_id]
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
 * @typedef SubscriberConfigDetails
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
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
 * @typedef SubscriberEvent
 * @property {string} [created_date]
 * @property {number} [event_id]
 * @property {number} [id]
 * @property {number} [subscriber_id]
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

class WebhookPublicModel {
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

  /** @returns {EventConfigBase} */
  static EventConfigBase() {
    return Joi.object({
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigDetails} */
  static EventConfigDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventConfigList} */
  static EventConfigList() {
    return Joi.object({
      items: Joi.array().items(WebhookPublicModel.EventConfig()),
      page: WebhookPublicModel.Page(),
    });
  }

  /** @returns {EventConfigResponse} */
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookPublicModel.EventConfig()),
    });
  }

  /** @returns {EventPayload} */
  static EventPayload() {
    return Joi.object({
      event_name: Joi.string().allow(""),
      event_trace_id: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      id: Joi.number(),
      message_id: Joi.string().allow(""),
      status: Joi.boolean(),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {EventProcessedStatus} */
  static EventProcessedStatus() {
    return Joi.object({
      attempt: Joi.number(),
      created_on: Joi.string().allow(""),
      id: Joi.number(),
      processed_on: Joi.string().allow(""),
      response_code: Joi.string().allow(""),
      response_message: Joi.string().allow(""),
      status: Joi.boolean(),
      subscriber_id: Joi.string().allow(""),
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
      association: WebhookPublicModel.Association(),
      auth_meta: WebhookPublicModel.AuthMeta(),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_id: Joi.array().items(Joi.number()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: WebhookPublicModel.SubscriberStatus(),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberConfigDetails} */
  static SubscriberConfigDetails() {
    return Joi.object({
      association: WebhookPublicModel.Association(),
      auth_meta: WebhookPublicModel.AuthMeta(),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_id: Joi.array().items(Joi.number()),
      name: Joi.string().allow(""),
      status: WebhookPublicModel.SubscriberStatus(),
      webhook_url: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriberConfigList} */
  static SubscriberConfigList() {
    return Joi.object({
      items: Joi.array().items(WebhookPublicModel.SubscriberResponse()),
      page: WebhookPublicModel.Page(),
    });
  }

  /** @returns {SubscriberEvent} */
  static SubscriberEvent() {
    return Joi.object({
      created_date: Joi.string().allow(""),
      event_id: Joi.number(),
      id: Joi.number(),
      subscriber_id: Joi.number(),
    });
  }

  /** @returns {SubscriberResponse} */
  static SubscriberResponse() {
    return Joi.object({
      association: WebhookPublicModel.Association(),
      auth_meta: WebhookPublicModel.AuthMeta(),
      created_on: Joi.string().allow(""),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_configs: Joi.array().items(WebhookPublicModel.EventConfig()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: WebhookPublicModel.SubscriberStatus(),
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
module.exports = WebhookPublicModel;
