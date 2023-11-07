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
   * @summary: Cancel a report export
   * @description: Cancel the export of a specific report for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/cancelJobByName/).
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
      allowUnknown: false,
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
   * @returns {Promise<Object>} - Success response
   * @name downloadDeliveryReport
   * @summary: Download processed events report for a company
   * @description: Download reports for a specific company based on the provided filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/downloadDeliveryReport/).
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

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
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
   * @summary: Get processed events report for a company
   * @description: Retrieve a list of processed events for a specific company based on the provided filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getDeliveryReports/).
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
      allowUnknown: false,
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
   * @param {WebhookPlatformValidator.GetEventCountsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.FailedEventsCountSuccessResponse>}
   *   - Success response
   *
   * @name getEventCounts
   * @summary: Get the count of failed events for a company within a specified date range.
   * @description: Retrieves the count of failed events for a specific company within the specified date range. The user can filter the count based on specific event types if provided.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getEventCounts/).
   */
  async getEventCounts(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.getEventCounts().validate(
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
    } = WebhookPlatformValidator.getEventCounts().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > getEventCounts \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/retry/events/counts`,
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
    } = WebhookPlatformModel.FailedEventsCountSuccessResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > getEventCounts \n ${res_error}`,
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
   * @summary: Get report download history
   * @description: Retrieve history reports for a specific company based on the provided filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getHistoricalReports/).
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
      allowUnknown: false,
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
   * @param {WebhookPlatformValidator.GetManualRetryStatusParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.RetryStatusResponse>} - Success response
   * @name getManualRetryStatus
   * @summary: Get the retry status for a company's failed events.
   * @description: Retrieves the status of retry for a specific company's failed events. This endpoint returns the total number of events, the count of successfully retried events, the count of failed retry attempts, and the overall status of the retry process.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getManualRetryStatus/).
   */
  async getManualRetryStatus(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.getManualRetryStatus().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPlatformValidator.getManualRetryStatus().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > getManualRetryStatus \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/retry/status`,
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
    } = WebhookPlatformModel.RetryStatusResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > getManualRetryStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.GetReportFiltersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.ReportFilterResponse>} - Success response
   * @name getReportFilters
   * @summary: Get filters for a company
   * @description: Retrieve filters for a specific company based on the provided subscriber IDs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/getReportFilters/).
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

    const {
      error: res_error,
    } = WebhookPlatformModel.ReportFilterResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @param {WebhookPlatformValidator.ManualRetryCancelParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.EventSuccessResponse>} - Success response
   * @name manualRetryCancel
   * @summary: Cancel the active manual retry for a company's failed events.
   * @description: Cancels the active manual retry for a specific company's failed events. If a manual retry is currently in progress, it will be cancelled.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/manualRetryCancel/).
   */
  async manualRetryCancel(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPlatformValidator.manualRetryCancel().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPlatformValidator.manualRetryCancel().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > manualRetryCancel \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/retry/cancel`,
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
    } = WebhookPlatformModel.EventSuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > manualRetryCancel \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPlatformValidator.ManualRetryOfFailedEventParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<WebhookPlatformModel.EventProcessedSuccessResponse>} -
   *   Success response
   * @name manualRetryOfFailedEvent
   * @summary: Initiate a manual retry for event processing.
   * @description: Initiates a manual retry for event processing for a specific company. This endpoint allows the user to specify the date range (start_date and end_date) within which the events should be retried.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/manualRetryOfFailedEvent/).
   */
  async manualRetryOfFailedEvent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPlatformValidator.manualRetryOfFailedEvent().validate(
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
    } = WebhookPlatformValidator.manualRetryOfFailedEvent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Webhook > manualRetryOfFailedEvent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/retry`,
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
    } = WebhookPlatformModel.EventProcessedSuccessResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Webhook > manualRetryOfFailedEvent \n ${res_error}`,
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
   * @summary: Ping and validate webhook url
   * @description: Ping and validate webhook url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/webhook/pingWebhook/).
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
      allowUnknown: false,
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
}

module.exports = Webhook;
