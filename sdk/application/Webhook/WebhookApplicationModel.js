const Joi = require("joi");

/**
 * @typedef ClickEventBatch
 * @property {string} [event_name]
 */

/**
 * @typedef ClickEventRequest
 * @property {ClickEventBatch[]} [batch]
 */

/**
 * @typedef ClickEventResponse
 * @property {number} [success_count]
 * @property {number} [failed_count]
 * @property {ClickEventBatch[]} [failed_events]
 */

class WebhookApplicationModel {
  /** @returns {ClickEventBatch} */
  static ClickEventBatch() {
    return Joi.object({
      event_name: Joi.string().allow(""),
    });
  }

  /** @returns {ClickEventRequest} */
  static ClickEventRequest() {
    return Joi.object({
      batch: Joi.array().items(WebhookApplicationModel.ClickEventBatch()),
    });
  }

  /** @returns {ClickEventResponse} */
  static ClickEventResponse() {
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
