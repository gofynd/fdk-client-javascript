const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const PublicAPIClient = require("../PublicAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");

const WebhookPublicValidator = require("./WebhookPublicValidator");
const WebhookPublicModel = require("./WebhookPublicModel");
const Joi = require("joi");
const { Logger } = require("./../../common/Logger");

class Webhook {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      fetchAllWebhookEvents: "/service/common/webhook/v1.0/events",
      notifyDepricatedEvent:
        "/service/common/webhook/v1.0/events/depricated-event-notifier",
      queryWebhookEventDetails:
        "/service/common/webhook/v1.0/events/query-event-details",
      testHandlerTransformation:
        "/service/common/webhook/v1.0/events/transform-event",
      validateSchema:
        "/service/common/webhook/v1.0/events/validate-event-schema",
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<WebhookPublicModel.EventConfigResponse>} - Success response
   * @name fetchAllWebhookEvents
   * @summary: Fetch all webhook events.
   * @description: Retrieve a list of all webhook events in the public server setup. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/fetchAllWebhookEvents/).
   */
  async fetchAllWebhookEvents(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPublicModel.EventConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Webhook > fetchAllWebhookEvents \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPublicValidator.NotifyDepricatedEventParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<WebhookPublicModel.EventNotifier>} - Success response
   * @name notifyDepricatedEvent
   * @summary: Notifies all the events that are going to depricate
   * @description: Notifies all the events that are subscribed and are going to deprecate or new version is available for those events - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/notifyDepricatedEvent/).
   */
  async notifyDepricatedEvent(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPublicValidator.notifyDepricatedEvent().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPublicValidator.notifyDepricatedEvent().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Webhook > notifyDepricatedEvent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["notifyDepricatedEvent"],
        params: {},
      }),
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPublicModel.EventNotifier().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Webhook > notifyDepricatedEvent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPublicValidator.QueryWebhookEventDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<WebhookPublicModel.EventConfigResponse>} - Success response
   * @name queryWebhookEventDetails
   * @summary: Query webhook event details.
   * @description: Query and obtain detailed information about webhook events in the public server configurations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/queryWebhookEventDetails/).
   */
  async queryWebhookEventDetails(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPublicModel.EventConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Webhook > queryWebhookEventDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPublicValidator.TestHandlerTransformationParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<WebhookPublicModel.TransformEventResponse>} - Success response
   * @name testHandlerTransformation
   * @summary: Test transformation of handler
   * @description: Test transformation of handler - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/testHandlerTransformation/).
   */
  async testHandlerTransformation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPublicValidator.testHandlerTransformation().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPublicValidator.testHandlerTransformation().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Webhook > testHandlerTransformation \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["testHandlerTransformation"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPublicModel.TransformEventResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Webhook > testHandlerTransformation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPublicValidator.ValidateSchemaParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<WebhookPublicModel.ValidateSchemaResponse>} - Success response
   * @name validateSchema
   * @summary: Validate Schema for an event
   * @description: Validate Schema for an event - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/webhook/validateSchema/).
   */
  async validateSchema(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPublicValidator.validateSchema().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPublicValidator.validateSchema().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Webhook > validateSchema \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["validateSchema"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPublicModel.ValidateSchemaResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Webhook > validateSchema \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Webhook;
