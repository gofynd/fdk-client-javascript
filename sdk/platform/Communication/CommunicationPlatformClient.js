const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CommunicationPlatformValidator = require("./CommunicationPlatformValidator");
const CommunicationPlatformModel = require("./CommunicationPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Communication {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {CommunicationPlatformValidator.GetSystemNotificationsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SystemNotifications>} -
   *   Success response
   * @name getSystemNotifications
   * @summary: Get system notifications.
   * @description: Retrieve system notifications related to communication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/getSystemNotifications/).
   */
  async getSystemNotifications(
    { pageNo, pageSize, sort, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformValidator.getSystemNotifications().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommunicationPlatformValidator.getSystemNotifications().validate(
      {
        pageNo,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > getSystemNotifications \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/notification/system-notifications`,
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
    } = CommunicationPlatformModel.SystemNotifications().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > getSystemNotifications \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Current request items count
   * @param {string} [arg.sort] - To sort based on created_at
   * @param {string} [arg.query] - To search based on plain text
   * @returns {Paginator<CommunicationPlatformModel.SystemNotifications>}
   * @summary: Get system notifications.
   * @description: Retrieve system notifications related to communication.
   */
  getSystemNotificationsPaginator({ pageSize, sort, query } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSystemNotifications({
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
        query: query,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CommunicationPlatformValidator.SenByCompanyCommunicationAsynchronouslyParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.EngineResponse>} - Success response
   * @name senByCompanyCommunicationAsynchronously
   * @summary: Send communication asynchronously.
   * @description: Initiate and send communication with the option for asynchronous processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/senByCompanyCommunicationAsynchronously/).
   */
  async senByCompanyCommunicationAsynchronously(
    { xApplicationId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformValidator.senByCompanyCommunicationAsynchronously().validate(
      {
        xApplicationId,

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
    } = CommunicationPlatformValidator.senByCompanyCommunicationAsynchronously().validate(
      {
        xApplicationId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > senByCompanyCommunicationAsynchronously \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};
    xHeaders["x-application-id"] = xApplicationId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/engine/send-async`,
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
    } = CommunicationPlatformModel.EngineResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > senByCompanyCommunicationAsynchronously \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformValidator.SendByCompanyCommunicationInstantlyParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SendInstantResponse>} -
   *   Success response
   * @name sendByCompanyCommunicationInstantly
   * @summary: Send communication synchronously.
   * @description: Initiate and send communication in real-time. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendByCompanyCommunicationInstantly/).
   */
  async sendByCompanyCommunicationInstantly(
    { xApplicationId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformValidator.sendByCompanyCommunicationInstantly().validate(
      {
        xApplicationId,

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
    } = CommunicationPlatformValidator.sendByCompanyCommunicationInstantly().validate(
      {
        xApplicationId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > sendByCompanyCommunicationInstantly \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};
    xHeaders["x-application-id"] = xApplicationId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/engine/send-instant`,
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
    } = CommunicationPlatformModel.SendInstantResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > sendByCompanyCommunicationInstantly \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CommunicationPlatformValidator.SendByCompanyCommunicationSynchronouslyParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommunicationPlatformModel.SendInstantResponse>} -
   *   Success response
   * @name sendByCompanyCommunicationSynchronously
   * @summary: Send communication asynchronously.
   * @description: Initiate and send communication with the option for asynchronous processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/communication/sendByCompanyCommunicationSynchronously/).
   */
  async sendByCompanyCommunicationSynchronously(
    { xApplicationId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CommunicationPlatformValidator.sendByCompanyCommunicationSynchronously().validate(
      {
        xApplicationId,

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
    } = CommunicationPlatformValidator.sendByCompanyCommunicationSynchronously().validate(
      {
        xApplicationId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Communication > sendByCompanyCommunicationSynchronously \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};
    xHeaders["x-application-id"] = xApplicationId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/engine/send-sync`,
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
    } = CommunicationPlatformModel.SendInstantResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Communication > sendByCompanyCommunicationSynchronously \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Communication;
