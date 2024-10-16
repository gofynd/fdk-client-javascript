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
   * @param {OrderPlatformValidator.AddStateManagerConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ConfigUpdatedResponseSchema>} -
   *   Success response
   * @name addStateManagerConfig
   * @summary: Allows esm config updation
   * @description: Update ESM config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/addStateManagerConfig/).
   */
  async addStateManagerConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.addStateManagerConfig().validate(
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
    } = OrderPlatformValidator.addStateManagerConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > addStateManagerConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/state/manager/config`,
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
    } = OrderPlatformModel.ConfigUpdatedResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > addStateManagerConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.AttachOrderUserParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.AttachOrderUserResponseSchema>} -
   *   Success response
   * @name attachOrderUser
   * @summary: Attach order to a user
   * @description: Attach an anonymous order to a customer based on OTP verification - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/attachOrderUser/).
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
    } = OrderPlatformModel.AttachOrderUserResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.BulkListingResponseSchema>} - Success response
   * @name bulkListing
   * @summary: Lists bulk operations
   * @description: Get list of bulk operation that is initiated and completed as per the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkListing/).
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
    } = OrderPlatformModel.BulkListingResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.BulkStateTransistionResponseSchema>}
   *   - Success response
   *
   * @name bulkStateTransistion
   * @summary: Upload bulk state transitions file
   * @description: Performs state transisiton in bulk using the CSV or excel file for the given shipments. The bulk transition CSV or excel template can be downloaded using the seller template download method. Current supported format is excel and CSV. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/bulkStateTransistion/).
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
    } = OrderPlatformModel.BulkStateTransistionResponseSchema().validate(
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
   * @summary: Debug order
   * @description: Used to verify the status of order. It queries error logs, resyncs the shipments if there was an issue with sync etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/checkOrderStatus/).
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
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/debug/order_status`,
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
   * @param {OrderPlatformValidator.CreateChannelConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.CreateChannelConfigResponseSchema>}
   *   - Success response
   *
   * @name createChannelConfig
   * @summary: Create channel configuration
   * @description: Set up configuration for a channel specific to orders which has implications over how the order fulfilment happens in a channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createChannelConfig/).
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
    } = OrderPlatformModel.CreateChannelConfigResponseSchema().validate(
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
   * @returns {Promise<OrderPlatformModel.CreateOrderResponseSchema>} - Success response
   * @name createOrder
   * @summary: Create order
   * @description: Creates an order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createOrder/).
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
    } = OrderPlatformModel.CreateOrderResponseSchema().validate(responseData, {
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
   * @param {OrderPlatformValidator.DispatchManifestsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.SuccessResponseSchema>} - Success response
   * @name dispatchManifests
   * @summary: Dispatch manifest
   * @description: Updates the status of the manifest to processed and change the status of the shipments in the manifest to dispatch status - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/dispatchManifests/).
   */
  async dispatchManifests(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.dispatchManifests().validate(
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
    } = OrderPlatformValidator.dispatchManifests().validate(
      {
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
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/dispatch`,
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
    } = OrderPlatformModel.SuccessResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.FileResponseSchema>} - Success response
   * @name downloadBulkActionTemplate
   * @summary: Download bulk template
   * @description: Download bulk seller templates which can be used to perform operations in bulk - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadBulkActionTemplate/).
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
    } = OrderPlatformModel.FileResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.BulkReportsDownloadResponseSchema>}
   *   - Success response
   *
   * @name downloadLanesReport
   * @summary: Download Lane report
   * @description: Downloads shipments/orders present in the provided lane - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadLanesReport/).
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
    } = OrderPlatformModel.BulkReportsDownloadResponseSchema().validate(
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
   * @returns {Promise<OrderPlatformModel.EInvoiceRetryResponseSchema>} -
   *   Success response
   * @name eInvoiceRetry
   * @summary: Retry E-invoice
   * @description: Reattempt the generation of an E-invoice - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/eInvoiceRetry/).
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
    } = OrderPlatformModel.EInvoiceRetryResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: Get failed order log
   * @description: Get the exact error trace from the log Id provided in the failed order list API response  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/failedOrderLogDetails/).
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
   * @summary: Get credit balance detail
   * @description: Retrieve details about credit balance on the basis of customer mobile number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchCreditBalanceDetail/).
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
   * @summary: List refund modes
   * @description: Get list of refund modes to trigger refunds - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchRefundModeConfig/).
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
   * @param {OrderPlatformValidator.GenerateInvoiceIDParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.GenerateInvoiceIDResponseSchema>} -
   *   Success response
   * @name generateInvoiceID
   * @summary: Generate and attach invoice Id
   * @description: Generate and attach Invoice Ids against shipments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generateInvoiceID/).
   */
  async generateInvoiceID(
    { invoiceType, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.generateInvoiceID().validate(
      {
        invoiceType,
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
    } = OrderPlatformValidator.generateInvoiceID().validate(
      {
        invoiceType,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > generateInvoiceID \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/${invoiceType}/id/generate`,
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
    } = OrderPlatformModel.GenerateInvoiceIDResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > generateInvoiceID \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponseSchema>}
   *   - Success response
   *
   * @name generatePOSReceiptByOrderId
   * @summary: Generate POS receipt by order Id
   * @description: Create a point-of-sale (POS) receipt for a specific order by order Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generatePOSReceiptByOrderId/).
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
    } = OrderPlatformModel.GeneratePosOrderReceiptResponseSchema().validate(
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
   * @param {OrderPlatformValidator.GenerateProcessManifestParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ManifestResponseSchema>} - Success response
   * @name generateProcessManifest
   * @summary: Process Order Manifest
   * @description: Endpoint to save and process order manifests. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generateProcessManifest/).
   */
  async generateProcessManifest(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.generateProcessManifest().validate(
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
    } = OrderPlatformValidator.generateProcessManifest().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > generateProcessManifest \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/process-manifest`,
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
    } = OrderPlatformModel.ManifestResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > generateProcessManifest \n ${res_error}`,
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
   * @summary: Get allowed state transition
   * @description: Retrieve next possible states based on logged in user's role - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedStateTransition/).
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
   * @returns {Promise<OrderPlatformModel.AllowedTemplatesResponseSchema>} -
   *   Success response
   * @name getAllowedTemplatesForBulk
   * @summary: List bulk operation templates
   * @description: Gets all the allowed templates to perform bulk operations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedTemplatesForBulk/).
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
    } = OrderPlatformModel.AllowedTemplatesResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.AnnouncementsResponseSchema>} -
   *   Success response
   * @name getAnnouncements
   * @summary: List announcements
   * @description: Retrieve announcements related to orders fulfilment configured by platform or company admin - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAnnouncements/).
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
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/announcements`,
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
    } = OrderPlatformModel.AnnouncementsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.BagDetailsPlatformResponseSchema>}
   *   - Success response
   *
   * @name getBagById
   * @summary: Get bag
   * @description: Retrieve detailed information about a specific bag - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBagById/).
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
      `/service/platform/order/v1.0/company/${this.config.companyId}/bag-details/`,
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
    } = OrderPlatformModel.BagDetailsPlatformResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponseSchema>} -
   *   Success response
   * @name getBags
   * @summary: List bags
   * @description: Get paginated list of bags based on provided filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBags/).
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
    } = OrderPlatformModel.GetBagsPlatformResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.BulkActionTemplateResponseSchema>}
   *   - Success response
   *
   * @name getBulkActionTemplate
   * @summary: List supported templates
   * @description: Get list of templates so that users can download the required template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkActionTemplate/).
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
    } = OrderPlatformModel.BulkActionTemplateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.FileResponseSchema>} - Success response
   * @name getBulkShipmentExcelFile
   * @summary: Generate the report
   * @description: Generates the report which can be filled and uploaded to perform the bulk operation based on the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkShipmentExcelFile/).
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
    } = OrderPlatformModel.FileResponseSchema().validate(responseData, {
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
   * @summary: Get channel configuration
   * @description: Retrieve configuration settings specific to orders for a channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getChannelConfig/).
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
   * @returns {Promise<OrderPlatformModel.JobFailedResponseSchema>} - Success response
   * @name getFileByStatus
   * @summary: Download file used for Bulk operation
   * @description: Get the file download URL used for performing bulk operation - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getFileByStatus/).
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
    } = OrderPlatformModel.JobFailedResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.LaneConfigResponseSchema>} - Success response
   * @name getLaneConfig
   * @summary: Get lane configuration
   * @description: Get configuration settings for lanes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getLaneConfig/).
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
      `/service/platform/order/v1.0/company/${this.config.companyId}/lane-config/`,
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
    } = OrderPlatformModel.LaneConfigResponseSchema().validate(responseData, {
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
   * @summary: Get a manifest
   * @description: Get details regarding a manifest which can be used to perform further actions on it - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestDetails/).
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
   * @summary: List manifest shipments
   * @description: Get list of shipments tagged to that manifest, the user can also search the shipments on the basis of shipment Id, order Id and AWB number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestShipments/).
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
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/shipments-listing`,
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
   * @returns {Promise<OrderPlatformModel.ManifestFiltersResponseSchema>} -
   *   Success response
   * @name getManifestfilters
   * @summary: List filters
   * @description: Get supported filter for listing manifests - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifestfilters/).
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
    } = OrderPlatformModel.ManifestFiltersResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: List manifests
   * @description: Get a list of manifest as per the filter provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getManifests/).
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
   * @returns {Promise<OrderPlatformModel.OrderDetailsResponseSchema>} -
   *   Success response
   * @name getOrderById
   * @summary: Get order
   * @description: Get detailed information about a specific order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrderById/).
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
    } = OrderPlatformModel.OrderDetailsResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.OrderListingResponseSchema>} -
   *   Success response
   * @name getOrders
   * @summary: List orders
   * @description: Get a list of orders based on the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrders/).
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
      allowInactive,
      groupEntity,
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
        allowInactive,
        groupEntity,
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
        allowInactive,
        groupEntity,
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
    query_params["allow_inactive"] = allowInactive;
    query_params["group_entity"] = groupEntity;

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
    } = OrderPlatformModel.OrderListingResponseSchema().validate(responseData, {
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
   * @param {OrderPlatformValidator.GetRoleBasedActionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.GetActionsResponseSchema>} - Success response
   * @name getRoleBasedActions
   * @summary: Get role-based actions
   * @description: Retrieve permissible actions based on user roles such as company_admin,  company_operation, customer_care, and read_only. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRoleBasedActions/).
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
    } = OrderPlatformModel.GetActionsResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.ShipmentInfoResponseSchema>} -
   *   Success response
   * @name getShipmentById
   * @summary: Get shipment
   * @description: Get detailed information about a specific shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentById/).
   */
  async getShipmentById(
    {
      channelShipmentId,
      shipmentId,
      fetchActiveShipment,
      allowInactive,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getShipmentById().validate(
      {
        channelShipmentId,
        shipmentId,
        fetchActiveShipment,
        allowInactive,
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
        allowInactive,
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
    query_params["allow_inactive"] = allowInactive;

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
    } = OrderPlatformModel.ShipmentInfoResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponseSchema>} -
   *   Success response
   * @name getShipmentHistory
   * @summary: Get a shipment's history
   * @description: Get the history of the shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentHistory/).
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
    } = OrderPlatformModel.ShipmentHistoryResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.PlatformShipmentReasonsResponseSchema>}
   *   - Success response
   *
   * @name getShipmentReasons
   * @summary: List bag cancellation reasons
   * @description: Get reasons to perform full or partial cancellation of a bag - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentReasons/).
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
    } = OrderPlatformModel.PlatformShipmentReasonsResponseSchema().validate(
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
   * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>}
   *   - Success response
   *
   * @name getShipments
   * @summary: List shipments
   * @description: Get a list of shipments based on the filters provided - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipments/).
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
      groupEntity,
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
        groupEntity,
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
        groupEntity,
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
    query_params["group_entity"] = groupEntity;

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
    } = OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema().validate(
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
   * @param {OrderPlatformValidator.GetStateManagerConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getStateManagerConfig
   * @summary: Retrieves Entity State Manager configuration which includes flags, hooks, and filters, for a specific application within a company's setup.
   * @description: This endpoint retrieves the ESM (Entity State Manager) configuration for a specific application within a company. The retrieval is based on parameters such as application ID, ordering channel, and entity type.
   * The ESM config stores order processing configuration. Each document in the ESM config collection of  Order Management System - OMS's database is a JSON object representing the configuration of a specific application ID. This includes filters, hooks, flags set on different state-transitions.  This configuration is picked and accordingly features are enabled.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getStateManagerConfig/).
   */
  async getStateManagerConfig(
    { appId, orderingChannel, entity, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.getStateManagerConfig().validate(
      {
        appId,
        orderingChannel,
        entity,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getStateManagerConfig().validate(
      {
        appId,
        orderingChannel,
        entity,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getStateManagerConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["app_id"] = appId;
    query_params["ordering_channel"] = orderingChannel;
    query_params["entity"] = entity;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/state/manager/config`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getStateManagerConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetStateTransitionMapParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.BagStateTransitionMap>} - Success response
   * @name getStateTransitionMap
   * @summary: Get state transition map
   * @description: Retrieve a map of state transitions for orders - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getStateTransitionMap/).
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
   * @returns {Promise<OrderPlatformModel.TemplateDownloadResponseSchema>} -
   *   Success response
   * @name getTemplate
   * @summary: Download bulk operation templates
   * @description: Get the excel or CSV file URL for the template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getTemplate/).
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
    } = OrderPlatformModel.TemplateDownloadResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.FiltersResponseSchema>} - Success response
   * @name getfilters
   * @summary: List filters
   * @description: Get supported filters for various listing operations - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getfilters/).
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
    } = OrderPlatformModel.FiltersResponseSchema().validate(responseData, {
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
   * @param {OrderPlatformValidator.InvalidateShipmentCacheParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.InvalidateShipmentCacheResponseSchema>}
   *   - Success response
   *
   * @name invalidateShipmentCache
   * @summary: Invalidate shipment cache
   * @description: Clear the existing shipment cache data stored in Redis  and serialize the updated data for subsequent use. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/invalidateShipmentCache/).
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
    } = OrderPlatformModel.InvalidateShipmentCacheResponseSchema().validate(
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
   * @returns {Promise<OrderPlatformModel.JobDetailsResponseSchema>} - Success response
   * @name jobDetails
   * @summary: Get bulk operation details
   * @description: Fetches details of the job for the provided batch Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/jobDetails/).
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
    } = OrderPlatformModel.JobDetailsResponseSchema().validate(responseData, {
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
   * @summary: Update an order
   * @description: Used to update an order's meta information. These meta information can be accessed via order or shipment details API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/orderUpdate/).
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
   * @param {OrderPlatformValidator.PostShipmentHistoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponseSchema>} -
   *   Success response
   * @name postShipmentHistory
   * @summary: Create shipment history
   * @description: Used to add logs in history for a bag for the provided Shipment ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postShipmentHistory/).
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
    } = OrderPlatformModel.ShipmentHistoryResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {OrderPlatformValidator.ProcessManifestsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ProcessManifestItemResponseSchema>}
   *   - Success response
   *
   * @name processManifests
   * @summary: Generate manifest
   * @description: Generate manifest Id and PDF and tags the shipments with that manifest Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/processManifests/).
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
    } = OrderPlatformModel.ProcessManifestItemResponseSchema().validate(
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
   * @returns {Promise<OrderPlatformModel.StoreReassignResponseSchema>} -
   *   Success response
   * @name reassignLocation
   * @summary: Reassign location
   * @description: Reassign the shipment to a another location and update its status to 'Store Reassigned.' - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/reassignLocation/).
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
    } = OrderPlatformModel.StoreReassignResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.SendSmsResponseSchema>} - Success response
   * @name sendSmsNinja
   * @summary: Send SMS
   * @description: Send SMS to customer based on the template that is selected - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendSmsNinja/).
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
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/ninja/send-sms`,
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
    } = OrderPlatformModel.SendSmsResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponseSchema>} -
   *   Success response
   * @name sendUserMobileOTP
   * @summary: Send user mobile OTP
   * @description: Send a one-time OTP to a customer mobile number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendUserMobileOTP/).
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
    } = OrderPlatformModel.SendUserMobileOtpResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<OrderPlatformModel.CourierPartnerTrackingResponseSchema>}
   *   - Success response
   *
   * @name trackShipment
   * @summary: Track shipment
   * @description: Retrieve courier partner tracking details for a given shipment Id or AWB number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/trackShipment/).
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
    } = OrderPlatformModel.CourierPartnerTrackingResponseSchema().validate(
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
   * @returns {Promise<OrderPlatformModel.BaseResponseSchema>} - Success response
   * @name updateAddress
   * @summary: Update the address details of an existing shipment based on the provided address_category.  This operation allows the modification of critical shipment details, potentially affecting delivery/billing accuracy and customer communication.
   * @description: Update the address details of an existing shipment on basis of address_category - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateAddress/).
   */
  async updateAddress(
    { shipmentId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.updateAddress().validate(
      {
        shipmentId,
        body,
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
        body,
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

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/${shipmentId}/address`,
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
    } = OrderPlatformModel.BaseResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.UpdatePackagingDimensionsResponseSchema>}
   *   - Success response
   *
   * @name updatePackagingDimensions
   * @summary: Update packaging dimensions
   * @description: Used to modify the packaging dimension of a shipment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updatePackagingDimensions/).
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
    } = OrderPlatformModel.UpdatePackagingDimensionsResponseSchema().validate(
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
   * @param {OrderPlatformValidator.UpdatePaymentInfoParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name updatePaymentInfo
   * @summary: Update payment details for an order, its shipments and its bags.
   * @description: Updates the payment mode for an order, its shipments and its bags. This endpoint allows for modifying payment methods, and associated details but not amount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updatePaymentInfo/).
   */
  async updatePaymentInfo(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformValidator.updatePaymentInfo().validate(
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
    } = OrderPlatformValidator.updatePaymentInfo().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updatePaymentInfo \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/payment/update`,
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
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > updatePaymentInfo \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdateShipmentLockParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponseSchema>}
   *   - Success response
   *
   * @name updateShipmentLock
   * @summary: Update a shipment lock
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
    } = OrderPlatformModel.UpdateShipmentLockResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: Update a shipment's status
   * @description: Used for updating a shipment and its status. Can also be used for updating bags present in that shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentStatus/).
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
   * @summary: Update shipment tracking
   * @description: Modify courier partner tracking details for a given shipment Id or AWB number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentTracking/).
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
   * @param {OrderPlatformValidator.UploadConsentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.SuccessResponseSchema>} - Success response
   * @name uploadConsents
   * @summary: Upload consent
   * @description: Uploads the consent signed by courier partner and seller to keep records - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/uploadConsents/).
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
    } = OrderPlatformModel.SuccessResponseSchema().validate(responseData, {
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
   * @returns {Promise<OrderPlatformModel.VerifyOtpResponseSchema>} - Success response
   * @name verifyMobileOTP
   * @summary: Verify mobile OTP
   * @description: Perform OTP verification to link a user to an anonymous order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/verifyMobileOTP/).
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
    } = OrderPlatformModel.VerifyOtpResponseSchema().validate(responseData, {
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
