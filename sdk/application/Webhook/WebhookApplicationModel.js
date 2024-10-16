const Joi = require("joi");

/**
 * @typedef ClickEventBatch
 * @property {string} [event_name] - Name of click event.
 */

/**
 * @typedef ClickEventPayload
 * @property {ClickEventBatch[]} [batch] - List of click events captured.
 * @property {string} [sent_at]
 */

/**
 * @typedef ClickEventDetails
 * @property {number} [success_count] - Count of valid events.
 * @property {number} [failed_count] - Count of events failed in schema validation.
 * @property {ClickEventBatch[]} [failed_events] - List of failed events with error.
 */

class WebhookApplicationModel {
  /** @returns {ClickEventBatch} */
  static ClickEventBatch() {
    return Joi.object({
      event_name: Joi.string().allow(""),
    });
  }

  /** @returns {ClickEventPayload} */
  static ClickEventPayload() {
    return Joi.object({
      batch: Joi.array().items(WebhookApplicationModel.ClickEventBatch()),
      sent_at: Joi.string().allow(""),
    });
  }

  /** @returns {ClickEventDetails} */
  static ClickEventDetails() {
    return Joi.object({
      success_count: Joi.number(),
      failed_count: Joi.number(),
      failed_events: Joi.array().items(
        WebhookApplicationModel.ClickEventBatch()
      ),
    });
  }
}
module.exports = WebhookApplicationModel;
