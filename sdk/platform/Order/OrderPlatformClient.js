const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const OrderPlatformValidator = require("./OrderPlatformValidator");
const OrderPlatformModel = require("./OrderPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Order {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {OrderPlatformValidator.AttachOrderUserParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.AttachOrderUserResponse>} - Success response
   * @name attachOrderUser
   * @summary: Attach order user.
   * @description: Attach order User - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/attachOrderUser/).
   */
  async attachOrderUser(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.attachOrderUser().validate(
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
    } = OrderPlatformValidator.attachOrderUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > attachOrderUser \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/user/attach`,
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
    } = OrderPlatformModel.AttachOrderUserResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > attachOrderUser \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.BulkListingParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.BulkListingResponse>} - Success response
   * @name bulkListing
   * @summary:
   * @description: Fetches of previous or running  bulk jobs.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkListing/).
   */
  async bulkListing(
    {
      pageSize,
      pageNo,
      startDate,
      endDate,
      status,
      bulkActionType,
      searchKey,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.bulkListing().validate(
      {
        pageSize,
        pageNo,
        startDate,
        endDate,
        status,
        bulkActionType,
        searchKey,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.bulkListing().validate(
      {
        pageSize,
        pageNo,
        startDate,
        endDate,
        status,
        bulkActionType,
        searchKey,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > bulkListing \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["status"] = status;
    query_params["bulk_action_type"] = bulkActionType;
    query_params["search_key"] = searchKey;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/jobs`,
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
    } = OrderPlatformModel.BulkListingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > bulkListing \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.BulkStateTransistionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.BulkStateTransistionResponse>} -
   *   Success response
   * @name bulkStateTransistion
   * @summary:
   * @description: Performs State Transisiton in Bulk for the given shipments in the excel/csv file url. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkStateTransistion/).
   */
  async bulkStateTransistion(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.bulkStateTransistion().validate(
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
    } = OrderPlatformValidator.bulkStateTransistion().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > bulkStateTransistion \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/jobs/state-transition`,
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
    } = OrderPlatformModel.BulkStateTransistionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > bulkStateTransistion \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.CheckOrderStatusParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
   * @name checkOrderStatus
   * @summary: Check order status.
   * @description: Verify the current status of an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/checkOrderStatus/).
   */
  async checkOrderStatus(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.checkOrderStatus().validate(
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
    } = OrderPlatformValidator.checkOrderStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > checkOrderStatus \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/debug/order_status/`,
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
    } = OrderPlatformModel.OrderStatusResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > checkOrderStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.Click2CallParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.Click2CallResponse>} - Success response
   * @name click2Call
   * @summary: Click to call.
   * @description: Click to call.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/click2Call/).
   */
  async click2Call(
    { caller, receiver, bagId, callerId, method, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.click2Call().validate(
      {
        caller,
        receiver,
        bagId,

        callerId,
        method,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.click2Call().validate(
      {
        caller,
        receiver,
        bagId,

        callerId,
        method,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > click2Call \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["caller"] = caller;
    query_params["receiver"] = receiver;
    query_params["bag_id"] = bagId;
    query_params["caller_id"] = callerId;
    query_params["method"] = method;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/ninja/click2call/`,
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
    } = OrderPlatformModel.Click2CallResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > click2Call \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.CreateChannelConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.CreateChannelConfigResponse>} -
   *   Success response
   * @name createChannelConfig
   * @summary: Create channel configuration.
   * @description: Set up configuration for a channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createChannelConfig/).
   */
  async createChannelConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.createChannelConfig().validate(
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
    } = OrderPlatformValidator.createChannelConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > createChannelConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/order-config`,
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
    } = OrderPlatformModel.CreateChannelConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > createChannelConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.CreateOrderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.CreateOrderResponse>} - Success response
   * @name createOrder
   * @summary: Create order.
   * @description: Create order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createOrder/).
   */
  async createOrder(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.createOrder().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.createOrder().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > createOrder \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/create-order`,
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
    } = OrderPlatformModel.CreateOrderResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > createOrder \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.DeleteuserviewsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
   *   Success response
   * @name deleteuserviews
   * @summary:
   * @description: Delete User views(User cross company views) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/deleteuserviews/).
   */
  async deleteuserviews(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.deleteuserviews().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.deleteuserviews().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > deleteuserviews \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/order/v1.0/company/${this.config.companyId}/views/${id}`,
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
    } = OrderPlatformModel.CreateUpdateDeleteResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > deleteuserviews \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.DispatchManifestsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
   * @name dispatchManifests
   * @summary:
   * @description: Dispatch Manifest - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/dispatchManifests/).
   */
  async dispatchManifests(
    { manifestId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.dispatchManifests().validate(
      {
        manifestId,
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
    } = OrderPlatformValidator.dispatchManifests().validate(
      {
        manifestId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > dispatchManifests \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/${manifestId}/dispatch`,
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
    } = OrderPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > dispatchManifests \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.DownloadBulkActionTemplateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
   * @name downloadBulkActionTemplate
   * @summary: Download bulk action template.
   * @description: Download bulk actions seller templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadBulkActionTemplate/).
   */
  async downloadBulkActionTemplate(
    { templateSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.downloadBulkActionTemplate().validate(
      {
        templateSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.downloadBulkActionTemplate().validate(
      {
        templateSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > downloadBulkActionTemplate \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["template_slug"] = templateSlug;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/bulk-action/download-seller-templates`,
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
    } = OrderPlatformModel.FileResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > downloadBulkActionTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.DownloadLanesReportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.BulkReportsDownloadResponse>} -
   *   Success response
   * @name downloadLanesReport
   * @summary: Download lanes report.
   * @description: Downloads lanes shipment/orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadLanesReport/).
   */
  async downloadLanesReport(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.downloadLanesReport().validate(
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
    } = OrderPlatformValidator.downloadLanesReport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > downloadLanesReport \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/reports/lanes/download`,
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
    } = OrderPlatformModel.BulkReportsDownloadResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > downloadLanesReport \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.EInvoiceRetryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.EInvoiceRetryResponse>} - Success response
   * @name eInvoiceRetry
   * @summary: E-invoice retry.
   * @description: Retry e-invoice after failure - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/eInvoiceRetry/).
   */
  async eInvoiceRetry(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.eInvoiceRetry().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.eInvoiceRetry().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > eInvoiceRetry \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/einvoice/retry/irn`,
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
    } = OrderPlatformModel.EInvoiceRetryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > eInvoiceRetry \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.FailedOrderLogDetailsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.FailedOrderLogDetails>} - Success response
   * @name failedOrderLogDetails
   * @summary: Get failed order logs according to the filter provided
   * @description: This endpoint allows users to get the exact error trace from the log id provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/failedOrderLogDetails/).
   */
  async failedOrderLogDetails(
    { logId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.failedOrderLogDetails().validate(
      {
        logId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.failedOrderLogDetails().validate(
      {
        logId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > failedOrderLogDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/orders/failed/logs/${logId}`,
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
    } = OrderPlatformModel.FailedOrderLogDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > failedOrderLogDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.FetchCreditBalanceDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>}
   *   - Success response
   *
   * @name fetchCreditBalanceDetail
   * @summary: Fetch credit balance detail.
   * @description: Retrieve details about credit balance. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchCreditBalanceDetail/).
   */
  async fetchCreditBalanceDetail(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.fetchCreditBalanceDetail().validate(
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
    } = OrderPlatformValidator.fetchCreditBalanceDetail().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > fetchCreditBalanceDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/customer-credit-balance`,
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
    } = OrderPlatformModel.FetchCreditBalanceResponsePayload().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > fetchCreditBalanceDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.FetchRefundModeConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.RefundModeConfigResponsePayload>} -
   *   Success response
   * @name fetchRefundModeConfig
   * @summary: Fetch refund mode config.
   * @description: Retrieve configuration for refund modes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchRefundModeConfig/).
   */
  async fetchRefundModeConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.fetchRefundModeConfig().validate(
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
    } = OrderPlatformValidator.fetchRefundModeConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > fetchRefundModeConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/refund-mode-config`,
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
    } = OrderPlatformModel.RefundModeConfigResponsePayload().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > fetchRefundModeConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>} -
   *   Success response
   * @name generatePOSReceiptByOrderId
   * @summary: Generate POS receipt by order ID.
   * @description: Create a point-of-sale (POS) receipt for a specific order by order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generatePOSReceiptByOrderId/).
   */
  async generatePOSReceiptByOrderId(
    { orderId, shipmentId, documentType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.generatePOSReceiptByOrderId().validate(
      {
        orderId,
        shipmentId,
        documentType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.generatePOSReceiptByOrderId().validate(
      {
        orderId,
        shipmentId,
        documentType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > generatePOSReceiptByOrderId \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["document_type"] = documentType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/${orderId}/generate/pos-receipt`,
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
    } = OrderPlatformModel.GeneratePosOrderReceiptResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > generatePOSReceiptByOrderId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetAllowedStateTransitionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.RoleBaseStateTransitionMapping>} -
   *   Success response
   * @name getAllowedStateTransition
   * @summary: Get allowed state transition.
   * @description: Retrieve next possible states based on logged in user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedStateTransition/).
   */
  async getAllowedStateTransition(
    { orderingChannel, status, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.getAllowedStateTransition().validate(
      {
        orderingChannel,
        status,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getAllowedStateTransition().validate(
      {
        orderingChannel,
        status,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getAllowedStateTransition \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["ordering_channel"] = orderingChannel;
    query_params["status"] = status;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/allowed/state/transition`,
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
    } = OrderPlatformModel.RoleBaseStateTransitionMapping().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getAllowedStateTransition \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetAllowedTemplatesForBulkParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.AllowedTemplatesResponse>} - Success response
   * @name getAllowedTemplatesForBulk
   * @summary:
   * @description: Gets All the allowed Templates to perform Bulk Operations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedTemplatesForBulk/).
   */
  async getAllowedTemplatesForBulk(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.getAllowedTemplatesForBulk().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getAllowedTemplatesForBulk().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getAllowedTemplatesForBulk \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/jobs/templates`,
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
    } = OrderPlatformModel.AllowedTemplatesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getAllowedTemplatesForBulk \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetAnnouncementsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.AnnouncementsResponse>} - Success response
   * @name getAnnouncements
   * @summary: Get announcements.
   * @description: Retrieve announcements related to orders or shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAnnouncements/).
   */
  async getAnnouncements(
    { date, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getAnnouncements().validate(
      {
        date,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getAnnouncements().validate(
      {
        date,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getAnnouncements \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["date"] = date;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/announcements/`,
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
    } = OrderPlatformModel.AnnouncementsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getAnnouncements \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetBagByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.BagDetailsPlatformResponse>} -
   *   Success response
   * @name getBagById
   * @summary: Get bag by ID.
   * @description: Retrieve detailed information about a specific bag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBagById/).
   */
  async getBagById(
    { bagId, channelBagId, channelId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getBagById().validate(
      {
        bagId,
        channelBagId,
        channelId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getBagById().validate(
      {
        bagId,
        channelBagId,
        channelId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getBagById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["bag_id"] = bagId;
    query_params["channel_bag_id"] = channelBagId;
    query_params["channel_id"] = channelId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/bag-details`,
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
    } = OrderPlatformModel.BagDetailsPlatformResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getBagById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetBagsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponse>} - Success response
   * @name getBags
   * @summary: Get bags.
   * @description: Retrieve Bags for the order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBags/).
   */
  async getBags(
    {
      bagIds,
      shipmentIds,
      orderIds,
      channelBagIds,
      channelShipmentIds,
      channelOrderIds,
      channelId,
      pageNo,
      pageSize,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getBags().validate(
      {
        bagIds,
        shipmentIds,
        orderIds,
        channelBagIds,
        channelShipmentIds,
        channelOrderIds,
        channelId,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getBags().validate(
      {
        bagIds,
        shipmentIds,
        orderIds,
        channelBagIds,
        channelShipmentIds,
        channelOrderIds,
        channelId,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getBags \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["bag_ids"] = bagIds;
    query_params["shipment_ids"] = shipmentIds;
    query_params["order_ids"] = orderIds;
    query_params["channel_bag_ids"] = channelBagIds;
    query_params["channel_shipment_ids"] = channelShipmentIds;
    query_params["channel_order_ids"] = channelOrderIds;
    query_params["channel_id"] = channelId;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/bags`,
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
    } = OrderPlatformModel.GetBagsPlatformResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getBags \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetBulkActionTemplateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.BulkActionTemplateResponse>} -
   *   Success response
   * @name getBulkActionTemplate
   * @summary: Get bulk action template.
   * @description: Retrieve bulk action seller templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkActionTemplate/).
   */
  async getBulkActionTemplate(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getBulkActionTemplate().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getBulkActionTemplate().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getBulkActionTemplate \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/bulk-action/get-seller-templates`,
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
    } = OrderPlatformModel.BulkActionTemplateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getBulkActionTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetBulkShipmentExcelFileParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
   * @name getBulkShipmentExcelFile
   * @summary: Get bulk shipment Excel file.
   * @description: Retrieve a bulk shipment Excel report. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkShipmentExcelFile/).
   */
  async getBulkShipmentExcelFile(
    {
      salesChannels,
      dpIds,
      startDate,
      endDate,
      stores,
      tags,
      bagStatus,
      paymentMethods,
      fileType,
      timeToDispatch,
      pageNo,
      pageSize,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.getBulkShipmentExcelFile().validate(
      {
        salesChannels,
        dpIds,
        startDate,
        endDate,
        stores,
        tags,
        bagStatus,
        paymentMethods,
        fileType,
        timeToDispatch,
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
    } = OrderPlatformValidator.getBulkShipmentExcelFile().validate(
      {
        salesChannels,
        dpIds,
        startDate,
        endDate,
        stores,
        tags,
        bagStatus,
        paymentMethods,
        fileType,
        timeToDispatch,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getBulkShipmentExcelFile \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["sales_channels"] = salesChannels;
    query_params["dp_ids"] = dpIds;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["stores"] = stores;
    query_params["tags"] = tags;
    query_params["bag_status"] = bagStatus;
    query_params["payment_methods"] = paymentMethods;
    query_params["file_type"] = fileType;
    query_params["time_to_dispatch"] = timeToDispatch;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/generate/file`,
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
    } = OrderPlatformModel.FileResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getBulkShipmentExcelFile \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetChannelConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.CreateChannelConfigData>} - Success response
   * @name getChannelConfig
   * @summary: Get channel configuration.
   * @description: Retrieve configuration settings for a channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getChannelConfig/).
   */
  async getChannelConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getChannelConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getChannelConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getChannelConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/order-config`,
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
    } = OrderPlatformModel.CreateChannelConfigData().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getChannelConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetFileByStatusParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.JobFailedResponse>} - Success response
   * @name getFileByStatus
   * @summary:
   * @description: Get the file URL consisting Records of the provided status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getFileByStatus/).
   */
  async getFileByStatus(
    { batchId, status, fileType, reportType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getFileByStatus().validate(
      {
        batchId,
        status,
        fileType,
        reportType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getFileByStatus().validate(
      {
        batchId,
        status,
        fileType,
        reportType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getFileByStatus \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["status"] = status;
    query_params["file_type"] = fileType;
    query_params["report_type"] = reportType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/jobs/${batchId}/file`,
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
    } = OrderPlatformModel.JobFailedResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getFileByStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetLaneConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.LaneConfigResponse>} - Success response
   * @name getLaneConfig
   * @summary: Get lane configuration.
   * @description: Retrieve configuration settings for lanes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getLaneConfig/).
   */
  async getLaneConfig(
    {
      superLane,
      groupEntity,
      fromDate,
      toDate,
      startDate,
      endDate,
      dpIds,
      stores,
      salesChannels,
      paymentMode,
      bagStatus,
      searchType,
      searchValue,
      tags,
      timeToDispatch,
      paymentMethods,
      myOrders,
      showCrossCompanyData,
      orderType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getLaneConfig().validate(
      {
        superLane,
        groupEntity,
        fromDate,
        toDate,
        startDate,
        endDate,
        dpIds,
        stores,
        salesChannels,
        paymentMode,
        bagStatus,
        searchType,
        searchValue,
        tags,
        timeToDispatch,
        paymentMethods,
        myOrders,
        showCrossCompanyData,
        orderType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getLaneConfig().validate(
      {
        superLane,
        groupEntity,
        fromDate,
        toDate,
        startDate,
        endDate,
        dpIds,
        stores,
        salesChannels,
        paymentMode,
        bagStatus,
        searchType,
        searchValue,
        tags,
        timeToDispatch,
        paymentMethods,
        myOrders,
        showCrossCompanyData,
        orderType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getLaneConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["super_lane"] = superLane;
    query_params["group_entity"] = groupEntity;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["sales_channels"] = salesChannels;
    query_params["payment_mode"] = paymentMode;
    query_params["bag_status"] = bagStatus;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;
    query_params["tags"] = tags;
    query_params["time_to_dispatch"] = timeToDispatch;
    query_params["payment_methods"] = paymentMethods;
    query_params["my_orders"] = myOrders;
    query_params["show_cross_company_data"] = showCrossCompanyData;
    query_params["order_type"] = orderType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/lane-config`,
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
    } = OrderPlatformModel.LaneConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getLaneConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetManifestDetailsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ManifestDetails>} - Success response
   * @name getManifestDetails
   * @summary:
   * @description: get Manifest Details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestDetails/).
   */
  async getManifestDetails(
    { manifestId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getManifestDetails().validate(
      {
        manifestId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getManifestDetails().validate(
      {
        manifestId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getManifestDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifests/${manifestId}`,
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
    } = OrderPlatformModel.ManifestDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getManifestDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetManifestShipmentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ManifestShipmentListing>} - Success response
   * @name getManifestShipments
   * @summary:
   * @description: get Manifest Shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestShipments/).
   */
  async getManifestShipments(
    {
      dpIds,
      stores,
      toDate,
      fromDate,
      dpName,
      salesChannels,
      searchType,
      searchValue,
      pageNo,
      pageSize,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getManifestShipments().validate(
      {
        dpIds,
        stores,
        toDate,
        fromDate,
        dpName,
        salesChannels,
        searchType,
        searchValue,
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
    } = OrderPlatformValidator.getManifestShipments().validate(
      {
        dpIds,
        stores,
        toDate,
        fromDate,
        dpName,
        salesChannels,
        searchType,
        searchValue,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getManifestShipments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["to_date"] = toDate;
    query_params["from_date"] = fromDate;
    query_params["dp_name"] = dpName;
    query_params["sales_channels"] = salesChannels;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifests/shipments`,
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
    } = OrderPlatformModel.ManifestShipmentListing().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getManifestShipments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetManifestfiltersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ManifestFiltersResponse>} - Success response
   * @name getManifestfilters
   * @summary:
   * @description: get Manifest Filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestfilters/).
   */
  async getManifestfilters(
    { view, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getManifestfilters().validate(
      {
        view,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getManifestfilters().validate(
      {
        view,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getManifestfilters \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["view"] = view;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/filter/listing`,
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
    } = OrderPlatformModel.ManifestFiltersResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getManifestfilters \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetManifestsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ManifestList>} - Success response
   * @name getManifests
   * @summary:
   * @description: Fetch Manifests - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifests/).
   */
  async getManifests(
    {
      status,
      startDate,
      endDate,
      searchType,
      storeId,
      searchValue,
      dpIds,
      pageNo,
      pageSize,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getManifests().validate(
      {
        status,
        startDate,
        endDate,
        searchType,
        storeId,
        searchValue,
        dpIds,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getManifests().validate(
      {
        status,
        startDate,
        endDate,
        searchType,
        storeId,
        searchValue,
        dpIds,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getManifests \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["status"] = status;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["search_type"] = searchType;
    query_params["store_id"] = storeId;
    query_params["search_value"] = searchValue;
    query_params["dp_ids"] = dpIds;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifests`,
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
    } = OrderPlatformModel.ManifestList().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getManifests \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetOrderByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.OrderDetailsResponse>} - Success response
   * @name getOrderById
   * @summary: Get order by ID.
   * @description: Retrieve detailed information about a specific order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrderById/).
   */
  async getOrderById(
    { orderId, myOrders, allowInactive, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getOrderById().validate(
      {
        orderId,
        myOrders,
        allowInactive,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getOrderById().validate(
      {
        orderId,
        myOrders,
        allowInactive,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getOrderById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["order_id"] = orderId;
    query_params["my_orders"] = myOrders;
    query_params["allow_inactive"] = allowInactive;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/order-details`,
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
    } = OrderPlatformModel.OrderDetailsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getOrderById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetOrdersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.OrderListingResponse>} - Success response
   * @name getOrders
   * @summary: Get orders.
   * @description: Retrieve a list of available orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrders/).
   */
  async getOrders(
    {
      lane,
      searchType,
      bagStatus,
      timeToDispatch,
      paymentMethods,
      tags,
      searchValue,
      fromDate,
      toDate,
      startDate,
      endDate,
      dpIds,
      stores,
      salesChannels,
      pageNo,
      pageSize,
      isPrioritySort,
      customMeta,
      myOrders,
      showCrossCompanyData,
      customerId,
      orderType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getOrders().validate(
      {
        lane,
        searchType,
        bagStatus,
        timeToDispatch,
        paymentMethods,
        tags,
        searchValue,
        fromDate,
        toDate,
        startDate,
        endDate,
        dpIds,
        stores,
        salesChannels,
        pageNo,
        pageSize,
        isPrioritySort,
        customMeta,
        myOrders,
        showCrossCompanyData,
        customerId,
        orderType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getOrders().validate(
      {
        lane,
        searchType,
        bagStatus,
        timeToDispatch,
        paymentMethods,
        tags,
        searchValue,
        fromDate,
        toDate,
        startDate,
        endDate,
        dpIds,
        stores,
        salesChannels,
        pageNo,
        pageSize,
        isPrioritySort,
        customMeta,
        myOrders,
        showCrossCompanyData,
        customerId,
        orderType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getOrders \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["lane"] = lane;
    query_params["search_type"] = searchType;
    query_params["bag_status"] = bagStatus;
    query_params["time_to_dispatch"] = timeToDispatch;
    query_params["payment_methods"] = paymentMethods;
    query_params["tags"] = tags;
    query_params["search_value"] = searchValue;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["sales_channels"] = salesChannels;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_priority_sort"] = isPrioritySort;
    query_params["custom_meta"] = customMeta;
    query_params["my_orders"] = myOrders;
    query_params["show_cross_company_data"] = showCrossCompanyData;
    query_params["customer_id"] = customerId;
    query_params["order_type"] = orderType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders-listing`,
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
    } = OrderPlatformModel.OrderListingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getOrders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] - Lane refers to a section where orders are
   *   assigned, indicating its grouping
   * @param {string} [arg.searchType] - Search_type refers to the field that
   *   will be used as the target for the search operation
   * @param {string} [arg.bagStatus] - Bag_status refers to status of the
   *   entity. Filters orders based on the status.
   * @param {number} [arg.timeToDispatch] - Time_to_dispatch refers to
   *   estimated SLA time.
   * @param {string} [arg.paymentMethods] -
   * @param {string} [arg.tags] - Tags refers to additional descriptive labels
   *   associated with the order
   * @param {string} [arg.searchValue] - Search_value is matched against the
   *   field specified by the search_type
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {string} [arg.startDate] -
   * @param {string} [arg.endDate] -
   * @param {string} [arg.dpIds] - Delivery Partner IDs to which shipments are assigned.
   * @param {string} [arg.stores] -
   * @param {string} [arg.salesChannels] -
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isPrioritySort] -
   * @param {string} [arg.customMeta] -
   * @param {boolean} [arg.myOrders] -
   * @param {boolean} [arg.showCrossCompanyData] - Flag to view cross &
   *   non-cross company order
   * @param {string} [arg.customerId] -
   * @param {string} [arg.orderType] -
   * @returns {Paginator<OrderPlatformModel.OrderListingResponse>}
   * @summary: Get orders.
   * @description: Retrieve a list of available orders.
   */
  getOrdersPaginator({
    lane,
    searchType,
    bagStatus,
    timeToDispatch,
    paymentMethods,
    tags,
    searchValue,
    fromDate,
    toDate,
    startDate,
    endDate,
    dpIds,
    stores,
    salesChannels,
    pageSize,
    isPrioritySort,
    customMeta,
    myOrders,
    showCrossCompanyData,
    customerId,
    orderType,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOrders({
        lane: lane,
        searchType: searchType,
        bagStatus: bagStatus,
        timeToDispatch: timeToDispatch,
        paymentMethods: paymentMethods,
        tags: tags,
        searchValue: searchValue,
        fromDate: fromDate,
        toDate: toDate,
        startDate: startDate,
        endDate: endDate,
        dpIds: dpIds,
        stores: stores,
        salesChannels: salesChannels,
        pageNo: pageNo,
        pageSize: pageSize,
        isPrioritySort: isPrioritySort,
        customMeta: customMeta,
        myOrders: myOrders,
        showCrossCompanyData: showCrossCompanyData,
        customerId: customerId,
        orderType: orderType,
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
   * @param {OrderPlatformValidator.GetRefundConfigurationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponse>}
   *   - Success response
   *
   * @name getRefundConfiguration
   * @summary:
   * @description: refund configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundConfiguration/).
   */
  async getRefundConfiguration(
    { appId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getRefundConfiguration().validate(
      {
        appId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getRefundConfiguration().validate(
      {
        appId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getRefundConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["app_id"] = appId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/refund/config`,
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
    } = OrderPlatformModel.RefundStateConfigurationManualSchemaResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getRefundConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetRefundEnableStateListParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.GetRefundStates>} - Success response
   * @name getRefundEnableStateList
   * @summary:
   * @description: Refund State Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundEnableStateList/).
   */
  async getRefundEnableStateList(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.getRefundEnableStateList().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getRefundEnableStateList().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getRefundEnableStateList \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/refund/states`,
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
    } = OrderPlatformModel.GetRefundStates().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getRefundEnableStateList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetRefundStateConfigurationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.GetRefundStateConfigurationResponse>}
   *   - Success response
   *
   * @name getRefundStateConfiguration
   * @summary:
   * @description: Refund State Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRefundStateConfiguration/).
   */
  async getRefundStateConfiguration(
    { appId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.getRefundStateConfiguration().validate(
      {
        appId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getRefundStateConfiguration().validate(
      {
        appId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getRefundStateConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["app_id"] = appId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/refund/states/config`,
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
    } = OrderPlatformModel.GetRefundStateConfigurationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getRefundStateConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetRoleBasedActionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.GetActionsResponse>} - Success response
   * @name getRoleBasedActions
   * @summary: Get role-based actions.
   * @description: Retrieve role based actions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRoleBasedActions/).
   */
  async getRoleBasedActions(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getRoleBasedActions().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getRoleBasedActions().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getRoleBasedActions \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/roles`,
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
    } = OrderPlatformModel.GetActionsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getRoleBasedActions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetShipmentByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ShipmentInfoResponse>} - Success response
   * @name getShipmentById
   * @summary: Get shipment by ID.
   * @description: Retrieve detailed information about a specific shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentById/).
   */
  async getShipmentById(
    { channelShipmentId, shipmentId, fetchActiveShipment, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getShipmentById().validate(
      {
        channelShipmentId,
        shipmentId,
        fetchActiveShipment,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getShipmentById().validate(
      {
        channelShipmentId,
        shipmentId,
        fetchActiveShipment,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getShipmentById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["channel_shipment_id"] = channelShipmentId;
    query_params["shipment_id"] = shipmentId;
    query_params["fetch_active_shipment"] = fetchActiveShipment;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/shipment-details`,
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
    } = OrderPlatformModel.ShipmentInfoResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getShipmentById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetShipmentHistoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
   * @name getShipmentHistory
   * @summary: Get shipment history.
   * @description: Retrieve the shipment history. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentHistory/).
   */
  async getShipmentHistory(
    { shipmentId, bagId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getShipmentHistory().validate(
      {
        shipmentId,
        bagId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getShipmentHistory().validate(
      {
        shipmentId,
        bagId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getShipmentHistory \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["bag_id"] = bagId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/history`,
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
    } = OrderPlatformModel.ShipmentHistoryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getShipmentHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetShipmentReasonsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>} -
   *   Success response
   * @name getShipmentReasons
   * @summary: Get shipment reasons.
   * @description: Retrieve the issues that led to the cancellation of bags within a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentReasons/).
   */
  async getShipmentReasons(
    { shipmentId, bagId, state, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getShipmentReasons().validate(
      {
        shipmentId,
        bagId,
        state,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getShipmentReasons().validate(
      {
        shipmentId,
        bagId,
        state,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getShipmentReasons \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/shipments/${shipmentId}/bags/${bagId}/state/${state}/reasons`,
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
    } = OrderPlatformModel.PlatformShipmentReasonsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getShipmentReasons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetShipmentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
   *   - Success response
   *
   * @name getShipments
   * @summary: Get shipments.
   * @description: Retrieve a list of available shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipments/).
   */
  async getShipments(
    {
      lane,
      bagStatus,
      statusOverrideLane,
      timeToDispatch,
      searchType,
      searchValue,
      fromDate,
      toDate,
      startDate,
      endDate,
      dpIds,
      stores,
      salesChannels,
      pageNo,
      pageSize,
      fetchActiveShipment,
      allowInactive,
      excludeLockedShipments,
      paymentMethods,
      channelShipmentId,
      channelOrderId,
      customMeta,
      orderingChannel,
      companyAffiliateTag,
      myOrders,
      platformUserId,
      sortType,
      showCrossCompanyData,
      tags,
      customerId,
      orderType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getShipments().validate(
      {
        lane,
        bagStatus,
        statusOverrideLane,
        timeToDispatch,
        searchType,
        searchValue,
        fromDate,
        toDate,
        startDate,
        endDate,
        dpIds,
        stores,
        salesChannels,
        pageNo,
        pageSize,
        fetchActiveShipment,
        allowInactive,
        excludeLockedShipments,
        paymentMethods,
        channelShipmentId,
        channelOrderId,
        customMeta,
        orderingChannel,
        companyAffiliateTag,
        myOrders,
        platformUserId,
        sortType,
        showCrossCompanyData,
        tags,
        customerId,
        orderType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getShipments().validate(
      {
        lane,
        bagStatus,
        statusOverrideLane,
        timeToDispatch,
        searchType,
        searchValue,
        fromDate,
        toDate,
        startDate,
        endDate,
        dpIds,
        stores,
        salesChannels,
        pageNo,
        pageSize,
        fetchActiveShipment,
        allowInactive,
        excludeLockedShipments,
        paymentMethods,
        channelShipmentId,
        channelOrderId,
        customMeta,
        orderingChannel,
        companyAffiliateTag,
        myOrders,
        platformUserId,
        sortType,
        showCrossCompanyData,
        tags,
        customerId,
        orderType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getShipments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["lane"] = lane;
    query_params["bag_status"] = bagStatus;
    query_params["status_override_lane"] = statusOverrideLane;
    query_params["time_to_dispatch"] = timeToDispatch;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["sales_channels"] = salesChannels;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["fetch_active_shipment"] = fetchActiveShipment;
    query_params["allow_inactive"] = allowInactive;
    query_params["exclude_locked_shipments"] = excludeLockedShipments;
    query_params["payment_methods"] = paymentMethods;
    query_params["channel_shipment_id"] = channelShipmentId;
    query_params["channel_order_id"] = channelOrderId;
    query_params["custom_meta"] = customMeta;
    query_params["ordering_channel"] = orderingChannel;
    query_params["company_affiliate_tag"] = companyAffiliateTag;
    query_params["my_orders"] = myOrders;
    query_params["platform_user_id"] = platformUserId;
    query_params["sort_type"] = sortType;
    query_params["show_cross_company_data"] = showCrossCompanyData;
    query_params["tags"] = tags;
    query_params["customer_id"] = customerId;
    query_params["order_type"] = orderType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/shipments-listing`,
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
    } = OrderPlatformModel.ShipmentInternalPlatformViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getShipments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] - Name of lane for which data is to be fetched
   * @param {string} [arg.bagStatus] - Comma separated values of bag statuses
   * @param {boolean} [arg.statusOverrideLane] - Use this flag to fetch by
   *   bag_status and override lane
   * @param {number} [arg.timeToDispatch] -
   * @param {string} [arg.searchType] - Search type key
   * @param {string} [arg.searchValue] - Search type value
   * @param {string} [arg.fromDate] - Start Date in DD-MM-YYYY format
   * @param {string} [arg.toDate] - End Date in DD-MM-YYYY format
   * @param {string} [arg.startDate] - UTC Start Date in ISO format
   * @param {string} [arg.endDate] - UTC End Date in ISO format
   * @param {string} [arg.dpIds] - Comma separated values of delivery partner ids
   * @param {string} [arg.stores] - Comma separated values of store ids
   * @param {string} [arg.salesChannels] - Comma separated values of sales channel ids
   * @param {number} [arg.pageSize] - Page size of data received per page
   * @param {boolean} [arg.fetchActiveShipment] - Flag to fetch active shipments
   * @param {boolean} [arg.allowInactive] - Flag to allow inactive shipments
   * @param {boolean} [arg.excludeLockedShipments] - Flag to fetch locked shipments
   * @param {string} [arg.paymentMethods] - Comma separated values of payment methods
   * @param {string} [arg.channelShipmentId] - App Shipment Id
   * @param {string} [arg.channelOrderId] - App Order Id
   * @param {string} [arg.customMeta] -
   * @param {string} [arg.orderingChannel] -
   * @param {string} [arg.companyAffiliateTag] -
   * @param {boolean} [arg.myOrders] -
   * @param {string} [arg.platformUserId] -
   * @param {string} [arg.sortType] - Sort the result data on basis of input
   * @param {boolean} [arg.showCrossCompanyData] - Flag to view cross &
   *   non-cross company order
   * @param {string} [arg.tags] - Comma separated values of tags
   * @param {string} [arg.customerId] -
   * @param {string} [arg.orderType] -
   * @returns {Paginator<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
   * @summary: Get shipments.
   * @description: Retrieve a list of available shipments.
   */
  getShipmentsPaginator({
    lane,
    bagStatus,
    statusOverrideLane,
    timeToDispatch,
    searchType,
    searchValue,
    fromDate,
    toDate,
    startDate,
    endDate,
    dpIds,
    stores,
    salesChannels,
    pageSize,
    fetchActiveShipment,
    allowInactive,
    excludeLockedShipments,
    paymentMethods,
    channelShipmentId,
    channelOrderId,
    customMeta,
    orderingChannel,
    companyAffiliateTag,
    myOrders,
    platformUserId,
    sortType,
    showCrossCompanyData,
    tags,
    customerId,
    orderType,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getShipments({
        lane: lane,
        bagStatus: bagStatus,
        statusOverrideLane: statusOverrideLane,
        timeToDispatch: timeToDispatch,
        searchType: searchType,
        searchValue: searchValue,
        fromDate: fromDate,
        toDate: toDate,
        startDate: startDate,
        endDate: endDate,
        dpIds: dpIds,
        stores: stores,
        salesChannels: salesChannels,
        pageNo: pageNo,
        pageSize: pageSize,
        fetchActiveShipment: fetchActiveShipment,
        allowInactive: allowInactive,
        excludeLockedShipments: excludeLockedShipments,
        paymentMethods: paymentMethods,
        channelShipmentId: channelShipmentId,
        channelOrderId: channelOrderId,
        customMeta: customMeta,
        orderingChannel: orderingChannel,
        companyAffiliateTag: companyAffiliateTag,
        myOrders: myOrders,
        platformUserId: platformUserId,
        sortType: sortType,
        showCrossCompanyData: showCrossCompanyData,
        tags: tags,
        customerId: customerId,
        orderType: orderType,
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
   * @param {OrderPlatformValidator.GetStateTransitionMapParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.BagStateTransitionMap>} - Success response
   * @name getStateTransitionMap
   * @summary: Get state transition map.
   * @description: Retrieve a map of state transitions for orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getStateTransitionMap/).
   */
  async getStateTransitionMap(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getStateTransitionMap().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getStateTransitionMap().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getStateTransitionMap \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/bag/state/transition`,
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
    } = OrderPlatformModel.BagStateTransitionMap().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getStateTransitionMap \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetTemplateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.TemplateDownloadResponse>} - Success response
   * @name getTemplate
   * @summary:
   * @description: Get the Excel file URL for the Template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getTemplate/).
   */
  async getTemplate(
    { templateName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getTemplate().validate(
      {
        templateName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getTemplate().validate(
      {
        templateName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getTemplate \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/jobs/templates/${templateName}`,
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
    } = OrderPlatformModel.TemplateDownloadResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetfiltersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.FiltersResponse>} - Success response
   * @name getfilters
   * @summary: Get filters.
   * @description: Retrieve listing filters. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getfilters/).
   */
  async getfilters(
    { view, groupEntity, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getfilters().validate(
      {
        view,
        groupEntity,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getfilters().validate(
      {
        view,
        groupEntity,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getfilters \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["view"] = view;
    query_params["group_entity"] = groupEntity;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/filter-listing`,
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
    } = OrderPlatformModel.FiltersResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getfilters \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetuserviewsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.UserViewsResponse>} - Success response
   * @name getuserviews
   * @summary:
   * @description: Get User views(User cross company views) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getuserviews/).
   */
  async getuserviews(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getuserviews().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getuserviews().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getuserviews \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/views`,
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
    } = OrderPlatformModel.UserViewsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getuserviews \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GlobalfiltersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.GlobalFiltersResponse>} - Success response
   * @name globalfilters
   * @summary:
   * @description: Get Global Filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/globalfilters/).
   */
  async globalfilters(
    { showIn, requestSource, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.globalfilters().validate(
      {
        showIn,
        requestSource,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.globalfilters().validate(
      {
        showIn,
        requestSource,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > globalfilters \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["show_in"] = showIn;
    query_params["request_source"] = requestSource;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/filters`,
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
    } = OrderPlatformModel.GlobalFiltersResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > globalfilters \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.InvalidateShipmentCacheParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>} -
   *   Success response
   * @name invalidateShipmentCache
   * @summary: Invalidate shipment cache.
   * @description: Invalidate shipment Cache. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/invalidateShipmentCache/).
   */
  async invalidateShipmentCache(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.invalidateShipmentCache().validate(
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
    } = OrderPlatformValidator.invalidateShipmentCache().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > invalidateShipmentCache \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/update-cache`,
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
    } = OrderPlatformModel.InvalidateShipmentCacheResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > invalidateShipmentCache \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.JobDetailsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.JobDetailsResponse>} - Success response
   * @name jobDetails
   * @summary:
   * @description: Fetches details for the job of the provided batch_id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/jobDetails/).
   */
  async jobDetails(
    { batchId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.jobDetails().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.jobDetails().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > jobDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/jobs/${batchId}`,
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
    } = OrderPlatformModel.JobDetailsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > jobDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.OrderUpdateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ResponseDetail>} - Success response
   * @name orderUpdate
   * @summary: Order update.
   * @description: Modify the details and status of an order.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/orderUpdate/).
   */
  async orderUpdate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.orderUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.orderUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > orderUpdate \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/order/validation`,
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
    } = OrderPlatformModel.ResponseDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > orderUpdate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.PostRefundConfigurationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.RefundStateConfigurationManualSchemaResponse>}
   *   - Success response
   *
   * @name postRefundConfiguration
   * @summary:
   * @description: refund configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postRefundConfiguration/).
   */
  async postRefundConfiguration(
    { appId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.postRefundConfiguration().validate(
      {
        appId,
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
    } = OrderPlatformValidator.postRefundConfiguration().validate(
      {
        appId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > postRefundConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["app_id"] = appId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/refund/config`,
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
    } = OrderPlatformModel.RefundStateConfigurationManualSchemaResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > postRefundConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.PostRefundStateConfigurationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.PostRefundStateConfigurationResponse>}
   *   - Success response
   *
   * @name postRefundStateConfiguration
   * @summary:
   * @description: Refund State Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postRefundStateConfiguration/).
   */
  async postRefundStateConfiguration(
    { appId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.postRefundStateConfiguration().validate(
      {
        appId,
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
    } = OrderPlatformValidator.postRefundStateConfiguration().validate(
      {
        appId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > postRefundStateConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["app_id"] = appId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/refund/states/config`,
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
    } = OrderPlatformModel.PostRefundStateConfigurationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > postRefundStateConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.PostShipmentHistoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
   * @name postShipmentHistory
   * @summary: Post shipment history.
   * @description: Add history records for a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postShipmentHistory/).
   */
  async postShipmentHistory(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.postShipmentHistory().validate(
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
    } = OrderPlatformValidator.postShipmentHistory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > postShipmentHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/history`,
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
    } = OrderPlatformModel.ShipmentHistoryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > postShipmentHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.PostuserviewsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
   *   Success response
   * @name postuserviews
   * @summary:
   * @description: Add User views(User cross company views) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postuserviews/).
   */
  async postuserviews(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.postuserviews().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.postuserviews().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > postuserviews \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/views`,
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
    } = OrderPlatformModel.CreateUpdateDeleteResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > postuserviews \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.ProcessManifestsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ProcessManifestItemResponse>} -
   *   Success response
   * @name processManifests
   * @summary:
   * @description: Process Manifest. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/processManifests/).
   */
  async processManifests(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.processManifests().validate(
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
    } = OrderPlatformValidator.processManifests().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > processManifests \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifests`,
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
    } = OrderPlatformModel.ProcessManifestItemResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > processManifests \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.ReassignLocationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.StoreReassignResponse>} - Success response
   * @name reassignLocation
   * @summary: Reassign location.
   * @description: Change the assigned location for an order or shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/reassignLocation/).
   */
  async reassignLocation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.reassignLocation().validate(
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
    } = OrderPlatformValidator.reassignLocation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > reassignLocation \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/store/reassign-internal`,
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
    } = OrderPlatformModel.StoreReassignResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > reassignLocation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.SendSmsNinjaParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
   * @name sendSmsNinja
   * @summary: Send SMS via Ninja.
   * @description: Send SMS Ninja Panel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendSmsNinja/).
   */
  async sendSmsNinja(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.sendSmsNinja().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.sendSmsNinja().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > sendSmsNinja \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/ninja/send-sms/`,
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
    } = OrderPlatformModel.OrderStatusResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > sendSmsNinja \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.SendUserMobileOTPParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponse>} - Success response
   * @name sendUserMobileOTP
   * @summary: Send user mobile OTP.
   * @description: Send a one-time OTP to a users mobile device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendUserMobileOTP/).
   */
  async sendUserMobileOTP(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.sendUserMobileOTP().validate(
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
    } = OrderPlatformValidator.sendUserMobileOTP().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > sendUserMobileOTP \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/user/send/otp/mobile`,
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
    } = OrderPlatformModel.SendUserMobileOtpResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > sendUserMobileOTP \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.TrackShipmentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.CourierPartnerTrackingResponse>} -
   *   Success response
   * @name trackShipment
   * @summary: Track shipment.
   * @description: Retrieve courier partner tracking details for a given shipment id or awb no. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/trackShipment/).
   */
  async trackShipment(
    { shipmentId, awb, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.trackShipment().validate(
      {
        shipmentId,
        awb,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.trackShipment().validate(
      {
        shipmentId,
        awb,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > trackShipment \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["awb"] = awb;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/tracking`,
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
    } = OrderPlatformModel.CourierPartnerTrackingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > trackShipment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdateAddressParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.BaseResponse>} - Success response
   * @name updateAddress
   * @summary: Update address.
   * @description: Modify the shipping address for an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateAddress/).
   */
  async updateAddress(
    {
      shipmentId,
      addressCategory,
      name,
      address,
      addressType,
      pincode,
      phone,
      email,
      landmark,
      city,
      state,
      country,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.updateAddress().validate(
      {
        shipmentId,
        addressCategory,

        name,
        address,
        addressType,
        pincode,
        phone,
        email,
        landmark,
        city,
        state,
        country,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.updateAddress().validate(
      {
        shipmentId,
        addressCategory,

        name,
        address,
        addressType,
        pincode,
        phone,
        email,
        landmark,
        city,
        state,
        country,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updateAddress \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["name"] = name;
    query_params["address"] = address;
    query_params["address_type"] = addressType;
    query_params["pincode"] = pincode;
    query_params["phone"] = phone;
    query_params["email"] = email;
    query_params["landmark"] = landmark;
    query_params["address_category"] = addressCategory;
    query_params["city"] = city;
    query_params["state"] = state;
    query_params["country"] = country;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/delight/update-address`,
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
    } = OrderPlatformModel.BaseResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > updateAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdatePackagingDimensionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>}
   *   - Success response
   *
   * @name updatePackagingDimensions
   * @summary: Update packaging dimensions.
   * @description: Modify the dimensions of packaging. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updatePackagingDimensions/).
   */
  async updatePackagingDimensions(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformValidator.updatePackagingDimensions().validate(
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
    } = OrderPlatformValidator.updatePackagingDimensions().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updatePackagingDimensions \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/update-packaging-dimension`,
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
    } = OrderPlatformModel.UpdatePackagingDimensionsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > updatePackagingDimensions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdateShipmentLockParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponse>} -
   *   Success response
   * @name updateShipmentLock
   * @summary: Update shipment lock.
   * @description: Modify shipment/bag lock and check status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentLock/).
   */
  async updateShipmentLock(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.updateShipmentLock().validate(
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
    } = OrderPlatformValidator.updateShipmentLock().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updateShipmentLock \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/entity/lock-manager`,
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
    } = OrderPlatformModel.UpdateShipmentLockResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > updateShipmentLock \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdateShipmentStatusParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>}
   *   - Success response
   *
   * @name updateShipmentStatus
   * @summary: Update shipment status.
   * @description: Shipment state transition or Shipment data update or both. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentStatus/).
   */
  async updateShipmentStatus(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.updateShipmentStatus().validate(
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
    } = OrderPlatformValidator.updateShipmentStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updateShipmentStatus \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/status-internal`,
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
    } = OrderPlatformModel.UpdateShipmentStatusResponseBody().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > updateShipmentStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdateShipmentTrackingParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.CourierPartnerTrackingDetails>} -
   *   Success response
   * @name updateShipmentTracking
   * @summary: Update shipment tracking.
   * @description: Modify courier partner tracking details for a given shipment id or awb no. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentTracking/).
   */
  async updateShipmentTracking(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.updateShipmentTracking().validate(
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
    } = OrderPlatformValidator.updateShipmentTracking().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updateShipmentTracking \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/tracking`,
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
    } = OrderPlatformModel.CourierPartnerTrackingDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > updateShipmentTracking \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdateuserviewsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.CreateUpdateDeleteResponse>} -
   *   Success response
   * @name updateuserviews
   * @summary:
   * @description: Update User views(User cross company views) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateuserviews/).
   */
  async updateuserviews(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.updateuserviews().validate(
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
    } = OrderPlatformValidator.updateuserviews().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updateuserviews \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order/v1.0/company/${this.config.companyId}/views`,
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
    } = OrderPlatformModel.CreateUpdateDeleteResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > updateuserviews \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UploadConsentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
   * @name uploadConsents
   * @summary:
   * @description: Upload Consent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/uploadConsents/).
   */
  async uploadConsents(
    { manifestId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.uploadConsents().validate(
      {
        manifestId,
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
    } = OrderPlatformValidator.uploadConsents().validate(
      {
        manifestId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > uploadConsents \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/${manifestId}/upload-consent`,
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
    } = OrderPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > uploadConsents \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.VerifyMobileOTPParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.VerifyOtpResponse>} - Success response
   * @name verifyMobileOTP
   * @summary: Verify mobile OTP.
   * @description: Verify Mobile OTP - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/verifyMobileOTP/).
   */
  async verifyMobileOTP(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.verifyMobileOTP().validate(
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
    } = OrderPlatformValidator.verifyMobileOTP().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > verifyMobileOTP \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/user/verify/otp`,
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
    } = OrderPlatformModel.VerifyOtpResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > verifyMobileOTP \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Order;
