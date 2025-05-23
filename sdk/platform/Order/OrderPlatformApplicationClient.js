const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const OrderPlatformApplicationValidator = require("./OrderPlatformApplicationValidator");
const OrderPlatformModel = require("./OrderPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Order {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {OrderPlatformApplicationValidator.GetApplicationShipmentsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponseSchema>}
   *   - Success response
   *
   * @name getApplicationShipments
   * @summary: List sales channel shipments
   * @description: Get shipments of a particular sales channel based on the filters provided - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getApplicationShipments/).
   */
  async getApplicationShipments(
    {
      lane,
      searchType,
      searchId,
      fromDate,
      toDate,
      dpIds,
      orderingCompanyId,
      stores,
      salesChannel,
      requestByExt,
      pageNo,
      pageSize,
      customerId,
      isPrioritySort,
      excludeLockedShipments,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformApplicationValidator.getApplicationShipments().validate(
      {
        lane,
        searchType,
        searchId,
        fromDate,
        toDate,
        dpIds,
        orderingCompanyId,
        stores,
        salesChannel,
        requestByExt,
        pageNo,
        pageSize,
        customerId,
        isPrioritySort,
        excludeLockedShipments,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformApplicationValidator.getApplicationShipments().validate(
      {
        lane,
        searchType,
        searchId,
        fromDate,
        toDate,
        dpIds,
        orderingCompanyId,
        stores,
        salesChannel,
        requestByExt,
        pageNo,
        pageSize,
        customerId,
        isPrioritySort,
        excludeLockedShipments,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getApplicationShipments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["lane"] = lane;
    query_params["search_type"] = searchType;
    query_params["search_id"] = searchId;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["dp_ids"] = dpIds;
    query_params["ordering_company_id"] = orderingCompanyId;
    query_params["stores"] = stores;
    query_params["sales_channel"] = salesChannel;
    query_params["request_by_ext"] = requestByExt;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["customer_id"] = customerId;
    query_params["is_priority_sort"] = isPrioritySort;
    query_params["exclude_locked_shipments"] = excludeLockedShipments;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/shipments/`,
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
          message: `Response Validation Warnings for platform > Order > getApplicationShipments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformApplicationValidator.GetPlatformShipmentReasonsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ShipmentReasonsResponseSchema>} -
   *   Success response
   * @name getPlatformShipmentReasons
   * @summary: List shipment cancellation reasons
   * @description: Get reasons to perform full or partial cancellation of a shipment - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getPlatformShipmentReasons/).
   */
  async getPlatformShipmentReasons(
    { action, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformApplicationValidator.getPlatformShipmentReasons().validate(
      {
        action,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformApplicationValidator.getPlatformShipmentReasons().validate(
      {
        action,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getPlatformShipmentReasons \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/reasons/${action}`,
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
    } = OrderPlatformModel.ShipmentReasonsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getPlatformShipmentReasons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformApplicationValidator.GetRulesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.RuleListResponseSchema>} - Success response
   * @name getRules
   * @summary: List of RMA rules based on the given input conditions.
   * @description: Retrieves a comprehensive list of RMA (Return Merchandise Authorization) rules associated with  a specific company and application. These rules dictate the processes for handling returns,  including actions, reasons, quality control (QC) types, and associated questions.  The endpoint allows for filtering and pagination based on input conditions, providing a tailored set of rules that match the criteria specified. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getRules/).
   */
  async getRules(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderPlatformApplicationValidator.getRules().validate(
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
    } = OrderPlatformApplicationValidator.getRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/application/${this.applicationId}/rule_list`,
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
    } = OrderPlatformModel.RuleListResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformApplicationValidator.GetShipmentBagReasonsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.ShipmentBagReasons>} - Success response
   * @name getShipmentBagReasons
   * @summary: Retrieve Reasons for Cancellation and Return journey
   * @description: Allows users to retrieve a comprehensive list of reasons for cancellation  or returning a shipment. It provides both cancellation and return reasons, with an emphasis  on Quality Control (QC) evaluations. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/getShipmentBagReasons/).
   */
  async getShipmentBagReasons(
    { shipmentId, lineNumber, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformApplicationValidator.getShipmentBagReasons().validate(
      {
        shipmentId,
        lineNumber,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformApplicationValidator.getShipmentBagReasons().validate(
      {
        shipmentId,
        lineNumber,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getShipmentBagReasons \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/line_number/${lineNumber}/reasons`,
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
    } = OrderPlatformModel.ShipmentBagReasons().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > getShipmentBagReasons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderPlatformApplicationValidator.TrackShipmentPlatformParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OrderPlatformModel.PlatformShipmentTrack>} - Success response
   * @name trackShipmentPlatform
   * @summary: Track shipment
   * @description: Track shipment by shipment Id for an application - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/order/trackShipmentPlatform/).
   */
  async trackShipmentPlatform(
    { shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderPlatformApplicationValidator.trackShipmentPlatform().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformApplicationValidator.trackShipmentPlatform().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > trackShipmentPlatform \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/track`,
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
    } = OrderPlatformModel.PlatformShipmentTrack().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Order > trackShipmentPlatform \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Order;
