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
   * @param {WebhookPlatformValidator.CancelJobByNameParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.CancelResponse>} - Success response
   * @name cancelJobByName
   * @summary: Cancel job by name
   * @description: It will cancel export job triggerd by user in order to fetch
   * historical delivery summery - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/cancelJobByName/).
   */
  async cancelJobByName(
    { filename, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.cancelJobByName().validate(
      {
        filename,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPlatformValidator.cancelJobByName().validate(
      {
        filename,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > cancelJobByName \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/reports/cancel/file/${filename}`,
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
    } = WebhookPlatformModel.CancelResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > cancelJobByName \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.DownloadDeliveryReportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.DownloadReportResponse>} - Success response
   * @name downloadDeliveryReport
   * @summary: Download delivery report
   * @description: Download detailed delivery reports for events. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/downloadDeliveryReport/).
   */
  async downloadDeliveryReport(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPlatformValidator.downloadDeliveryReport().validate(
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
    } = WebhookPlatformValidator.downloadDeliveryReport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > downloadDeliveryReport \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/reports/download`,
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
    } = WebhookPlatformModel.DownloadReportResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > downloadDeliveryReport \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.FetchAllEventConfigurationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.EventConfigResponse>} - Success response
   * @name fetchAllEventConfigurations
   * @summary: List event configurations
   * @description: Retrieve all configurations for event handling. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/fetchAllEventConfigurations/).
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
   * @param {WebhookPlatformValidator.GetDeliveryReportsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.EventProcessReports>} - Success response
   * @name getDeliveryReports
   * @summary: Get delivery reports
   * @description: Retrieve reports on the delivery status of events. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getDeliveryReports/).
   */
  async getDeliveryReports(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.getDeliveryReports().validate(
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
    } = WebhookPlatformValidator.getDeliveryReports().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > getDeliveryReports \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/reports/event_processed`,
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
    } = WebhookPlatformModel.EventProcessReports().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > getDeliveryReports \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetHistoricalReportsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.HistoryResponse>} - Success response
   * @name getHistoricalReports
   * @summary: Get historical reports
   * @description: Retrieve historical reports of webhook events. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getHistoricalReports/).
   */
  async getHistoricalReports(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.getHistoricalReports().validate(
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
    } = WebhookPlatformValidator.getHistoricalReports().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > getHistoricalReports \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/reports/history`,
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
    } = WebhookPlatformModel.HistoryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > getHistoricalReports \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetReportFiltersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.ReportFilterResponse[]>} - Success response
   * @name getReportFilters
   * @summary: Get report filters
   * @description: Retrieve filters used for generating reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getReportFilters/).
   */
  async getReportFilters(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.getReportFilters().validate(
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
    } = WebhookPlatformValidator.getReportFilters().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > getReportFilters \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/filters`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(WebhookPlatformModel.ReportFilterResponse())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > getReportFilters \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetSubscriberByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberResponse>} - Success response
   * @name getSubscriberById
   * @summary: Get a subscriber
   * @description: Retrieve a subscriber's details by their unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscriberById/).
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
   * @description: Retrieve subscribers associated with a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByCompany/).
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
   * @description: Retrieve subscribers associated with a specific extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getSubscribersByExtensionId/).
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
   * @param {WebhookPlatformValidator.PingWebhookParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.PingWebhookResponse>} - Success response
   * @name pingWebhook
   * @summary: Ping webhook
   * @description: Send a test ping to a webhook for verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/pingWebhook/).
   */
  async pingWebhook(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.pingWebhook().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = WebhookPlatformValidator.pingWebhook().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > pingWebhook \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/subscriber/ping`,
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
    } = WebhookPlatformModel.PingWebhookResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > pingWebhook \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.RegisterSubscriberToEventParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigResponse>} -
   *   Success response
   * @name registerSubscriberToEvent
   * @summary: Register subscriber to event
   * @description: Add a subscriber to receive events of a specific type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/registerSubscriberToEvent/).
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
    } = WebhookPlatformModel.SubscriberConfigResponse().validate(responseData, {
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
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigResponse>} -
   *   Success response
   * @name registerSubscriberToEventV2
   * @summary: Register Subscriber.
   * @description: Register Subscriber.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/registerSubscriberToEventV2/).
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
    } = WebhookPlatformModel.SubscriberConfigResponse().validate(responseData, {
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
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigResponse>} -
   *   Success response
   * @name updateSubscriberConfig
   * @summary: Update a subscriber config
   * @description: Modify and update subscriber configuration settings. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/updateSubscriberConfig/).
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
    } = WebhookPlatformModel.SubscriberConfigResponse().validate(responseData, {
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
   * @returns {Promise<WebhookPlatformModel.SubscriberConfigResponse>} -
   *   Success response
   * @name updateSubscriberV2
   * @summary: Update Subscriber.
   * @description: Update Subscriber.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/updateSubscriberV2/).
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
    } = WebhookPlatformModel.SubscriberConfigResponse().validate(responseData, {
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
}

module.exports = Webhook;
