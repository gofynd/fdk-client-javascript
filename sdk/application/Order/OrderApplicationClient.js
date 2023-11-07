const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const OrderApplicationValidator = require("./OrderApplicationValidator");
const OrderApplicationModel = require("./OrderApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Order {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getCustomerDetailsByShipmentId:
        "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/customer-details",
      getInvoiceByShipmentId:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/invoice",
      getOrderById: "/service/application/order/v1.0/orders/{order_id}",
      getOrders: "/service/application/order/v1.0/orders",
      getPosOrderById:
        "/service/application/order/v1.0/orders/pos-order/{order_id}",
      getShipmentBagReasons:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/bags/{bag_id}/reasons",
      getShipmentById:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}",
      getShipmentReasons:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/reasons",
      sendOtpToShipmentCustomer:
        "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/send/",
      trackShipment:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/track",
      updateShipmentStatus:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/status",
      verifyOtpShipmentCustomer:
        "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/verify/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {OrderApplicationValidator.GetCustomerDetailsByShipmentIdParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.CustomerDetailsResponse>} -
   *   Success response
   * @name getCustomerDetailsByShipmentId
   * @summary: Get Customer Details by Shipment Id
   * @description: Use this API to retrieve customer details such as mobileno using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getCustomerDetailsByShipmentId/).
   */
  async getCustomerDetailsByShipmentId(
    { orderId, shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderApplicationValidator.getCustomerDetailsByShipmentId().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.getCustomerDetailsByShipmentId().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > getCustomerDetailsByShipmentId \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomerDetailsByShipmentId"],
        params: { orderId, shipmentId },
      }),
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
    } = OrderApplicationModel.CustomerDetailsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > getCustomerDetailsByShipmentId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.GetInvoiceByShipmentIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.ResponseGetInvoiceShipment>} -
   *   Success response
   * @name getInvoiceByShipmentId
   * @summary: Get Invoice of a shipment
   * @description: Use this API to retrieve shipment invoice. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getInvoiceByShipmentId/).
   */
  async getInvoiceByShipmentId(
    { shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderApplicationValidator.getInvoiceByShipmentId().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.getInvoiceByShipmentId().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > getInvoiceByShipmentId \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getInvoiceByShipmentId"],
        params: { shipmentId },
      }),
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
    } = OrderApplicationModel.ResponseGetInvoiceShipment().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > getInvoiceByShipmentId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.GetOrderByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.OrderById>} - Success response
   * @name getOrderById
   * @summary: Get details of an order
   * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrderById/).
   */
  async getOrderById(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderApplicationValidator.getOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.getOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > getOrderById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrderById"],
        params: { orderId },
      }),
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
    } = OrderApplicationModel.OrderById().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > getOrderById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.GetOrdersParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.OrderList>} - Success response
   * @name getOrders
   * @summary: Get all orders
   * @description: Use this API to retrieve all the orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getOrders/).
   */
  async getOrders(
    {
      status,
      pageNo,
      pageSize,
      fromDate,
      toDate,
      customMeta,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderApplicationValidator.getOrders().validate(
      { status, pageNo, pageSize, fromDate, toDate, customMeta },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderApplicationValidator.getOrders().validate(
      { status, pageNo, pageSize, fromDate, toDate, customMeta },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > getOrders \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["status"] = status;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["custom_meta"] = customMeta;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrders"],
        params: {},
      }),
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
    } = OrderApplicationModel.OrderList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > getOrders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.GetPosOrderByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.OrderById>} - Success response
   * @name getPosOrderById
   * @summary: Get POS Order
   * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getPosOrderById/).
   */
  async getPosOrderById(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderApplicationValidator.getPosOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.getPosOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > getPosOrderById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPosOrderById"],
        params: { orderId },
      }),
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
    } = OrderApplicationModel.OrderById().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > getPosOrderById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.GetShipmentBagReasonsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.ShipmentBagReasons>} - Success response
   * @name getShipmentBagReasons
   * @summary: Get reasons behind full or partial cancellation of a shipment
   * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentBagReasons/).
   */
  async getShipmentBagReasons(
    { shipmentId, bagId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderApplicationValidator.getShipmentBagReasons().validate(
      { shipmentId, bagId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.getShipmentBagReasons().validate(
      { shipmentId, bagId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > getShipmentBagReasons \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipmentBagReasons"],
        params: { shipmentId, bagId },
      }),
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
    } = OrderApplicationModel.ShipmentBagReasons().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > getShipmentBagReasons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.GetShipmentByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.ShipmentById>} - Success response
   * @name getShipmentById
   * @summary: Get details of a shipment
   * @description: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentById/).
   */
  async getShipmentById(
    { shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderApplicationValidator.getShipmentById().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.getShipmentById().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > getShipmentById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipmentById"],
        params: { shipmentId },
      }),
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
    } = OrderApplicationModel.ShipmentById().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > getShipmentById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.GetShipmentReasonsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.ShipmentReasons>} - Success response
   * @name getShipmentReasons
   * @summary: Get reasons behind full or partial cancellation of a shipment
   * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/getShipmentReasons/).
   */
  async getShipmentReasons(
    { shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderApplicationValidator.getShipmentReasons().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.getShipmentReasons().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > getShipmentReasons \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipmentReasons"],
        params: { shipmentId },
      }),
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
    } = OrderApplicationModel.ShipmentReasons().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > getShipmentReasons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.SendOtpToShipmentCustomerParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.SendOtpToCustomerResponse>} -
   *   Success response
   * @name sendOtpToShipmentCustomer
   * @summary: Send and Resend Otp code to Order-Shipment customer
   * @description: Use this API to send OTP to the customer of the mapped Shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/sendOtpToShipmentCustomer/).
   */
  async sendOtpToShipmentCustomer(
    { orderId, shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderApplicationValidator.sendOtpToShipmentCustomer().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.sendOtpToShipmentCustomer().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > sendOtpToShipmentCustomer \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendOtpToShipmentCustomer"],
        params: { orderId, shipmentId },
      }),
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
    } = OrderApplicationModel.SendOtpToCustomerResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > sendOtpToShipmentCustomer \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.TrackShipmentParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.ShipmentTrack>} - Success response
   * @name trackShipment
   * @summary: Track shipment
   * @description: Track Shipment by shipment id, for application based on application Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/trackShipment/).
   */
  async trackShipment(
    { shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderApplicationValidator.trackShipment().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.trackShipment().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > trackShipment \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["trackShipment"],
        params: { shipmentId },
      }),
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
    } = OrderApplicationModel.ShipmentTrack().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > trackShipment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.UpdateShipmentStatusParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.ShipmentApplicationStatusResponse>}
   *   - Success response
   *
   * @name updateShipmentStatus
   * @summary: Update the shipment status
   * @description: Use this API to update the status of a shipment using its shipment ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/updateShipmentStatus/).
   */
  async updateShipmentStatus(
    { shipmentId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = OrderApplicationValidator.updateShipmentStatus().validate(
      { shipmentId, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.updateShipmentStatus().validate(
      { shipmentId, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > updateShipmentStatus \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateShipmentStatus"],
        params: { shipmentId },
      }),
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
    } = OrderApplicationModel.ShipmentApplicationStatusResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > updateShipmentStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {OrderApplicationValidator.VerifyOtpShipmentCustomerParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderApplicationModel.VerifyOtpResponse>} - Success response
   * @name verifyOtpShipmentCustomer
   * @summary: Verify Otp code
   * @description: Use this API to verify OTP and create a session token with custom payload. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/order/verifyOtpShipmentCustomer/).
   */
  async verifyOtpShipmentCustomer(
    { orderId, shipmentId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = OrderApplicationValidator.verifyOtpShipmentCustomer().validate(
      { orderId, shipmentId, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderApplicationValidator.verifyOtpShipmentCustomer().validate(
      { orderId, shipmentId, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Order > verifyOtpShipmentCustomer \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyOtpShipmentCustomer"],
        params: { orderId, shipmentId },
      }),
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
    } = OrderApplicationModel.VerifyOtpResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Order > verifyOtpShipmentCustomer \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Order;
