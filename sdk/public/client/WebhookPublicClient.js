const PublicAPIClient = require("../PublicAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const WebhookValidator = require("../models/WebhookValidator");
class Webhook {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      fetchAllWebhookEvents: "/service/common/webhook/v1.0/events",
      queryWebhookEventDetails:
        "/service/common/webhook/v1.0/events/query-event-details",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<EventConfigResponse>} - Success response
   * @summary: Get All Webhook Events
   * @description: Get All Webhook Events
   */
  fetchAllWebhookEvents({} = {}) {
    const { error } = WebhookValidator.fetchAllWebhookEvents().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["fetchAllWebhookEvents"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EventConfigBase[]} arg.body
   * @returns {Promise<EventConfigResponse>} - Success response
   * @summary: Send webhook event name, type, version, category in request body to get complete details of event from server
   * @description: Get Webhook Event Details for provided events
   */
  queryWebhookEventDetails({ body } = {}) {
    const { error } = WebhookValidator.queryWebhookEventDetails().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return PublicAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["queryWebhookEventDetails"],
        params: {},
      }),
      query_params,
      body
    );
  }
}
module.exports = Webhook;