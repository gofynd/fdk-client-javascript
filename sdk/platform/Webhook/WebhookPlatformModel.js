const Joi = require("joi");

class WebhookModel {
  static Association() {
    return Joi.object({
      application_id: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      criteria: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
    });
  }
  static AuthMeta() {
    return Joi.object({
      secret: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
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
  static EventConfigBase() {
    return Joi.object({
      event_category: Joi.string().allow(""),
      event_name: Joi.string().allow(""),
      event_type: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static EventConfigList() {
    return Joi.object({
      items: Joi.array().items(WebhookModel.EventConfig()),
      page: WebhookModel.Page(),
    });
  }
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookModel.EventConfig()),
    });
  }
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
  static SubscriberConfig() {
    return Joi.object({
      association: WebhookModel.Association(),
      auth_meta: WebhookModel.AuthMeta(),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_id: Joi.array().items(Joi.number()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: WebhookModel.SubscriberStatus(),
      webhook_url: Joi.string().allow(""),
    });
  }
  static SubscriberConfigList() {
    return Joi.object({
      items: Joi.array().items(WebhookModel.SubscriberResponse()),
      page: WebhookModel.Page(),
    });
  }
  static SubscriberEvent() {
    return Joi.object({
      created_date: Joi.string().allow(""),
      event_id: Joi.number(),
      id: Joi.number(),
      subscriber_id: Joi.number(),
    });
  }
  static SubscriberResponse() {
    return Joi.object({
      association: WebhookModel.Association(),
      auth_meta: WebhookModel.AuthMeta(),
      created_on: Joi.string().allow(""),
      custom_headers: Joi.any(),
      email_id: Joi.string().allow(""),
      event_configs: Joi.array().items(WebhookModel.EventConfig()),
      id: Joi.number(),
      name: Joi.string().allow(""),
      status: WebhookModel.SubscriberStatus(),
      updated_on: Joi.string().allow(""),
      webhook_url: Joi.string().allow(""),
    });
  }

  /*
        Enum: SubscriberStatus
        Used By: Webhook
    */
  static SubscriberStatus() {
    return Joi.string().valid(
      "active",

      "inactive",

      "blocked"
    );
  }
}
module.exports = WebhookModel;
