const Joi = require("joi");

class WebhookModel {
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
  static EventConfigResponse() {
    return Joi.object({
      event_configs: Joi.array().items(WebhookModel.EventConfig()),
    });
  }
}
module.exports = WebhookModel;
