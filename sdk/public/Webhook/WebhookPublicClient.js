const PublicAPIClient = require("../PublicAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const WebhookPublicValidator = require("./WebhookPublicValidator");
const WebhookPublicModel = require("./WebhookPublicModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

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
   * @param {WebhookPublicValidator.FetchAllWebhookEventsParam} arg - Arg object.
   * @returns {Promise<WebhookPublicModel.EventConfigResponse>} - Success response
   * @name fetchAllWebhookEvents
   * @summary: Get All Webhook Events
   * @description: Get All Webhook Events
   */
  async fetchAllWebhookEvents({} = {}) {
    const { error } = WebhookPublicValidator.fetchAllWebhookEvents().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPublicValidator.fetchAllWebhookEvents().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Webhook > fetchAllWebhookEvents \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["fetchAllWebhookEvents"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = WebhookPublicModel.EventConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for public > Webhook > fetchAllWebhookEvents \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {WebhookPublicValidator.QueryWebhookEventDetailsParam} arg - Arg object.
   * @returns {Promise<WebhookPublicModel.EventConfigResponse>} - Success response
   * @name queryWebhookEventDetails
   * @summary: Send webhook event name, type, version, category in request body to get complete details of event from server
   * @description: Get Webhook Event Details for provided events
   */
  async queryWebhookEventDetails({ body } = {}) {
    const {
      error,
    } = WebhookPublicValidator.queryWebhookEventDetails().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPublicValidator.queryWebhookEventDetails().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Webhook > queryWebhookEventDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["queryWebhookEventDetails"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = WebhookPublicModel.EventConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for public > Webhook > queryWebhookEventDetails \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Webhook;
