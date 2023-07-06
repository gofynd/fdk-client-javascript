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
   * @returns {Promise<WebhookPlatformModel.EventConfigResponse>} - Success response
   * @name fetchAllEventConfigurations
   * @summary:
   * @description: Get All Webhook Events
   */
  async fetchAllEventConfigurations({} = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = WebhookPlatformModel.EventConfigResponse().validate(response, {
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
   * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
   * @name getSubscriberById
   * @summary: Get Subscriber By Subscriber ID
   * @description: Get Subscriber By Subscriber ID
   */
  async getSubscriberById({ subscriberId } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = WebhookPlatformModel.SubscriberResponse().validate(response, {
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
   * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
   * @name getSubscribersByCompany
   * @summary: Get Subscribers By Company ID
   * @description: Get Subscribers By CompanyId
   */
  async getSubscribersByCompany({ pageNo, pageSize, extensionId } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = WebhookPlatformModel.SubscriberResponse().validate(response, {
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
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigList>} - Success response
   * @name getSubscribersByExtensionId
   * @summary: Get Subscribers By Extension ID
   * @description: Get Subscribers By ExtensionID
   */
  async getSubscribersByExtensionId({ extensionId, pageNo, pageSize } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = WebhookPlatformModel.SubscriberConfigList().validate(response, {
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
   * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
   * @name registerSubscriberToEvent
   * @summary: Register Subscriber
   * @description: Register Subscriber
   */
  async registerSubscriberToEvent({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = WebhookPlatformModel.SubscriberConfig().validate(response, {
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
   * @returns {Promise<WebhookPlatformModel.SubscriberConfig>} - Success response
   * @name updateSubscriberConfig
   * @summary: Update Subscriber
   * @description: Update Subscriber
   */
  async updateSubscriberConfig({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = WebhookPlatformModel.SubscriberConfig().validate(response, {
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
