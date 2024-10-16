const Joi = require("joi");

const WebhookApplicationModel = require("./WebhookApplicationModel");

/**
 * @typedef SaveClickEventParam
 * @property {WebhookApplicationModel.ClickEventPayload} body
 */

class WebhookApplicationValidator {
  /** @returns {SaveClickEventParam} */
  static saveClickEvent() {
    return Joi.object({
      body: WebhookApplicationModel.ClickEventPayload().required(),
    }).required();
  }
}

module.exports = WebhookApplicationValidator;
