const PartnerAPIClient = require("../PartnerAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const WebhookPartnerValidator = require("./WebhookPartnerValidator");
const WebhookPartnerModel = require("./WebhookPartnerModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Webhook {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {WebhookPartnerValidator.FetchDeliverySummaryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<WebhookPartnerModel.DeliverySummaryResponse>} - Success response
   * @name fetchDeliverySummary
   * @summary: Webhook delivery summary
   * @description: Webhook delivery summary - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchDeliverySummary/).
   */
  async fetchDeliverySummary(
    { extensionId, startDate, endDate, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPartnerValidator.fetchDeliverySummary().validate(
      {
        extensionId,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPartnerValidator.fetchDeliverySummary().validate(
      {
        extensionId,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Webhook > fetchDeliverySummary \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/webhook/v1.0/organization/${this.config.organizationId}/extension/${extensionId}/report/delivery_summary`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPartnerModel.DeliverySummaryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Webhook > fetchDeliverySummary \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPartnerValidator.GetDeliveryDetailInsightsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<WebhookPartnerModel.DeliveryDetailsResponse>} - Success response
   * @name getDeliveryDetailInsights
   * @summary: Get the insights of delivery details of the events that was pushed to subscribers
   * @description: Get the delivery details insights - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/getDeliveryDetailInsights/).
   */
  async getDeliveryDetailInsights(
    { extensionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = WebhookPartnerValidator.getDeliveryDetailInsights().validate(
      {
        extensionId,
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
    } = WebhookPartnerValidator.getDeliveryDetailInsights().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Webhook > getDeliveryDetailInsights \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/webhook/v1.0/organization/${this.config.organizationId}/extension/${extensionId}/report/delivery_details`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPartnerModel.DeliveryDetailsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Webhook > getDeliveryDetailInsights \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPartnerValidator.FetchDeliveryTsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<WebhookPartnerModel.DeliveryTsResponse>} - Success response
   * @name fetchDeliveryTs
   * @summary: Webhook delivery ts
   * @description: Webhook delivery ts - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchDeliveryTs/).
   */
  async fetchDeliveryTs(
    { extensionId, startDate, endDate, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPartnerValidator.fetchDeliveryTs().validate(
      {
        extensionId,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = WebhookPartnerValidator.fetchDeliveryTs().validate(
      {
        extensionId,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Webhook > fetchDeliveryTs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/webhook/v1.0/organization/${this.config.organizationId}/extension/${extensionId}/report/delivery_ts`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPartnerModel.DeliveryTsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Webhook > fetchDeliveryTs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPartnerValidator.FetchReportFiltersParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<WebhookPartnerModel.FilterReportResponse[]>} - Success response
   * @name fetchReportFilters
   * @summary: Fetch webhook report filters
   * @description: Fetch webhook report filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchReportFilters/).
   */
  async fetchReportFilters(
    { extensionId, startDate, endDate, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPartnerValidator.fetchReportFilters().validate(
      {
        extensionId,
        startDate,
        endDate,
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
    } = WebhookPartnerValidator.fetchReportFilters().validate(
      {
        extensionId,
        startDate,
        endDate,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Webhook > fetchReportFilters \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/webhook/v1.0/organization/${this.config.organizationId}/extension/${extensionId}/report/filters`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(WebhookPartnerModel.FilterReportResponse())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Webhook > fetchReportFilters \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPartnerValidator.CancelReportDownloadParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<WebhookPartnerModel.CancelDownloadResponse>} - Success response
   * @name cancelReportDownload
   * @summary: Cancel report download job
   * @description: Cancel report download job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/cancelReportDownload/).
   */
  async cancelReportDownload(
    { extensionId, filename, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPartnerValidator.cancelReportDownload().validate(
      {
        extensionId,
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
    } = WebhookPartnerValidator.cancelReportDownload().validate(
      {
        extensionId,
        filename,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Webhook > cancelReportDownload \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/webhook/v1.0/organization/${this.config.organizationId}/extension/${extensionId}/reports/cancel/file/${filename}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPartnerModel.CancelDownloadResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Webhook > cancelReportDownload \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPartnerValidator.GetHistoricalReportsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<WebhookPartnerModel.HistoryResponse>} - Success response
   * @name getHistoricalReports
   * @summary: Get report download history.
   * @description: Retrieve history reports for a specific company based on the provided filters.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/getHistoricalReports/).
   */
  async getHistoricalReports(
    { extensionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPartnerValidator.getHistoricalReports().validate(
      {
        extensionId,
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
    } = WebhookPartnerValidator.getHistoricalReports().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Webhook > getHistoricalReports \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/webhook/v1.0/organization/${this.config.organizationId}/extension/${extensionId}/report/history`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPartnerModel.HistoryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Webhook > getHistoricalReports \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPartnerValidator.GetInvalidEventListParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<WebhookPartnerModel.InvalidEventsResponse[]>} - Success response
   * @name getInvalidEventList
   * @summary: Get invalid event list
   * @description: Get invalid event list.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/getInvalidEventList/).
   */
  async getInvalidEventList(
    { extensionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPartnerValidator.getInvalidEventList().validate(
      {
        extensionId,
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
    } = WebhookPartnerValidator.getInvalidEventList().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Webhook > getInvalidEventList \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/webhook/v1.0/organization/${this.config.organizationId}/extension/${extensionId}/report/invalid_events`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(WebhookPartnerModel.InvalidEventsResponse())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Webhook > getInvalidEventList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPartnerValidator.FetchSubscribersParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<WebhookPartnerModel.SubscriberConfigResponse>} - Success response
   * @name fetchSubscribers
   * @summary: Fetch subscriber by filters
   * @description: Fetch subscriber by filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/fetchSubscribers/).
   */
  async fetchSubscribers(
    { extensionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPartnerValidator.fetchSubscribers().validate(
      {
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
    } = WebhookPartnerValidator.fetchSubscribers().validate(
      {
        extensionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Webhook > fetchSubscribers \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/webhook/v1.0/organization/${this.config.organizationId}/extension/${extensionId}/subscriber/`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPartnerModel.SubscriberConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Webhook > fetchSubscribers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {WebhookPartnerValidator.UpdateSubscriberParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<WebhookPartnerModel.UpdateSubscriberResponse>} - Success response
   * @name updateSubscriber
   * @summary: Update subscriber status by id.
   * @description: Update subscriber status by id.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/webhook/updateSubscriber/).
   */
  async updateSubscriber(
    { extensionId, subscriberId, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = WebhookPartnerValidator.updateSubscriber().validate(
      {
        extensionId,
        subscriberId,
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
    } = WebhookPartnerValidator.updateSubscriber().validate(
      {
        extensionId,
        subscriberId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Webhook > updateSubscriber \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "patch",
      `/service/partner/webhook/v1.0/organization/${this.config.organizationId}/extension/${extensionId}/subscriber/${subscriberId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = WebhookPartnerModel.UpdateSubscriberResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Webhook > updateSubscriber \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = Webhook;
