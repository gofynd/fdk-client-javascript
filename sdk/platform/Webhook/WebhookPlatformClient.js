const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const WebhookPlatformValidator = require("./WebhookPlatformValidator");
const WebhookPlatformModel = require("./WebhookPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Webhook {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {WebhookPlatformValidator.FetchAllEventConfigurationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.EventConfigResponse>} - Success response
   * @name fetchAllEventConfigurations
   * @summary:
   * @description: Get All Webhook Events - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/fetchAllEventConfigurations/).
   */
  async fetchAllEventConfigurations(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPlatformValidator.fetchAllEventConfigurations().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPlatformValidator.fetchAllEventConfigurations().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > fetchAllEventConfigurations \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/events`,
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
    } = WebhookPlatformModel.EventConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Webhook > fetchAllEventConfigurations \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetSubscriberByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
   * @name getSubscriberById
   * @summary: Get Subscriber By Subscriber ID
   * @description: Get Subscriber By Subscriber ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscriberById/).
   */
  async getSubscriberById(
    { subscriberId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.getSubscriberById().validate(
      {
        subscriberId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPlatformValidator.getSubscriberById().validate(
      {
        subscriberId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > getSubscriberById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber/${subscriberId}`,
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
    } = WebhookPlatformModel.SubscriberResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Webhook > getSubscriberById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetSubscribersByCompanyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
   * @name getSubscribersByCompany
   * @summary: Get Subscribers By Company ID
   * @description: Get Subscribers By CompanyId - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByCompany/).
   */
  async getSubscribersByCompany(
    { pageNo, pageSize, extensionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPlatformValidator.getSubscribersByCompany().validate(
      {
        pageNo,
        pageSize,
        extensionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPlatformValidator.getSubscribersByCompany().validate(
      {
        pageNo,
        pageSize,
        extensionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > getSubscribersByCompany \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["extension_id"] = extensionId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber`,
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
    } = WebhookPlatformModel.SubscriberResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Webhook > getSubscribersByCompany \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetSubscribersByExtensionIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
   * @name getSubscribersByExtensionId
   * @summary: Get Subscribers By Extension ID
   * @description: Get Subscribers By ExtensionID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByExtensionId/).
   */
  async getSubscribersByExtensionId(
    { extensionId, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPlatformValidator.getSubscribersByExtensionId().validate(
      {
        extensionId,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPlatformValidator.getSubscribersByExtensionId().validate(
      {
        extensionId,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > getSubscribersByExtensionId \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/extension/${extensionId}/subscriber`,
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
    } = WebhookPlatformModel.SubscriberConfigList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Webhook > getSubscribersByExtensionId \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.RegisterSubscriberToEventParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
   * @name registerSubscriberToEvent
   * @summary: Register Subscriber
   * @description: Register Subscriber - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/registerSubscriberToEvent/).
   */
  async registerSubscriberToEvent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPlatformValidator.registerSubscriberToEvent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPlatformValidator.registerSubscriberToEvent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > registerSubscriberToEvent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber`,
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
    } = WebhookPlatformModel.SubscriberConfig().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Webhook > registerSubscriberToEvent \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.UpdateSubscriberConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
   * @name updateSubscriberConfig
   * @summary: Update Subscriber
   * @description: Update Subscriber - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/updateSubscriberConfig/).
   */
  async updateSubscriberConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPlatformValidator.updateSubscriberConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPlatformValidator.updateSubscriberConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > updateSubscriberConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber`,
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
    } = WebhookPlatformModel.SubscriberConfig().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Webhook > updateSubscriberConfig \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Webhook;
