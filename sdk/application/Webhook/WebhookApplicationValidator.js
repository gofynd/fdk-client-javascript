const Joi = require("joi");

const WebhookApplicationModel = require("./WebhookApplicationModel");

/**
 * @typedef SaveClickEventParam
 * @property {WebhookApplicationModel.ClickEventRequest} body
 */

class WebhookApplicationValidator {
  /** @returns {SaveClickEventParam} */
  static saveClickEvent() {
    return Joi.object({
      body: WebhookApplicationModel.ClickEventRequest().required(),
    }).required();
  }
}

module.exports = WebhookApplicationValidator;
