const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @returns {Promise<WebhookPlatformModel.EventConfigResult>} - Success response
   * @name fetchAllEventConfigurations
   * @summary: List event configurations
   * @description: Retrieve all configurations for event handling. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/fetchAllEventConfigurations/).
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
    } = WebhookPlatformModel.EventConfigResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > fetchAllEventConfigurations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetSubscriberByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberDetails>} - Success response
   * @name getSubscriberById
   * @summary: Get a subscriber
   * @description: Retrieve a subscriber's details by their unique identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/getSubscriberById/).
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
    } = WebhookPlatformModel.SubscriberDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > getSubscriberById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetSubscribersByCompanyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
   * @name getSubscribersByCompany
   * @summary: List subscribers by company
   * @description: Retrieve subscribers associated with a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/getSubscribersByCompany/).
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
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber/`,
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
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > getSubscribersByCompany \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetSubscribersByExtensionIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
   * @name getSubscribersByExtensionId
   * @summary: List subscribers by extension ID
   * @description: Retrieve subscribers associated with a specific extension. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/getSubscribersByExtensionId/).
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
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/extension/${extensionId}/subscriber/`,
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
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > getSubscribersByExtensionId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.RegisterSubscriberToEventParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigResult>} - Success response
   * @name registerSubscriberToEvent
   * @summary: Register subscriber to event
   * @description: Add a subscriber to receive events of a specific type. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/registerSubscriberToEvent/).
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
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber/`,
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
    } = WebhookPlatformModel.SubscriberConfigResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > registerSubscriberToEvent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.RegisterSubscriberToEventV2Param} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigResult>} - Success response
   * @name registerSubscriberToEventV2
   * @summary: Register Subscriber.
   * @description: Register Subscriber.
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/registerSubscriberToEventV2/).
   */
  async registerSubscriberToEventV2(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPlatformValidator.registerSubscriberToEventV2().validate(
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
    } = WebhookPlatformValidator.registerSubscriberToEventV2().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > registerSubscriberToEventV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v2.0/company/${this.config.companyId}/subscriber/`,
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
    } = WebhookPlatformModel.SubscriberConfigResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > registerSubscriberToEventV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.UpdateSubscriberConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigResult>} - Success response
   * @name updateSubscriberConfig
   * @summary: Update a subscriber config
   * @description: Modify and update subscriber configuration settings. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/updateSubscriberConfig/).
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
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber/`,
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
    } = WebhookPlatformModel.SubscriberConfigResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > updateSubscriberConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.UpdateSubscriberV2Param} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigResult>} - Success response
   * @name updateSubscriberV2
   * @summary: Update Subscriber.
   * @description: Update Subscriber.
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/updateSubscriberV2/).
   */
  async updateSubscriberV2(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.updateSubscriberV2().validate(
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
    } = WebhookPlatformValidator.updateSubscriberV2().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > updateSubscriberV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/webhook/v2.0/company/${this.config.companyId}/subscriber/`,
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
    } = WebhookPlatformModel.SubscriberConfigResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > updateSubscriberV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.UpsertSubscriberEventParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.UpsertSubscriberConfigResult>} -
   *   Success response
   * @name upsertSubscriberEvent
   * @summary: Register Subscriber.
   * @description: Register Subscriber.
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/webhook/upsertSubscriberEvent/).
   */
  async upsertSubscriberEvent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.upsertSubscriberEvent().validate(
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
    } = WebhookPlatformValidator.upsertSubscriberEvent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > upsertSubscriberEvent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/webhook/v3.0/company/${this.config.companyId}/subscriber/`,
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
    } = WebhookPlatformModel.UpsertSubscriberConfigResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > upsertSubscriberEvent \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Webhook;
