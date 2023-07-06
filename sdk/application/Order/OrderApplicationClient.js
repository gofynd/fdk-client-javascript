const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const OrderValidator = require("./OrderApplicationValidator");
const OrderModel = require("./OrderApplicationModel");
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @param {string} arg.shipmentId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<CustomerDetailsResponse>} - Success response
   * @summary: Get Customer Details by Shipment Id
   * @description: Use this API to retrieve customer details such as mobileno using Shipment ID.
   */
  async getCustomerDetailsByShipmentId({ orderId, shipmentId } = {}) {
    const { error } = OrderValidator.getCustomerDetailsByShipmentId().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.getCustomerDetailsByShipmentId().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getCustomerDetailsByShipmentId",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.CustomerDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getCustomerDetailsByShipmentId",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment.
   * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
   * @summary: Get Invoice of a shipment
   * @description: Use this API to retrieve shipment invoice.
   */
  async getInvoiceByShipmentId({ shipmentId } = {}) {
    const { error } = OrderValidator.getInvoiceByShipmentId().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.getInvoiceByShipmentId().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getInvoiceByShipmentId",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.ResponseGetInvoiceShipment().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getInvoiceByShipmentId",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderById>} - Success response
   * @summary: Get details of an order
   * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
   */
  async getOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOrderById",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = OrderModel.OrderById().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOrderById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.status] - A filter to retrieve orders by their
   *   current status such as _placed_, _delivered_, etc.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.fromDate] - The date from which the orders should be
   *   retrieved.
   * @param {string} [arg.toDate] - The date till which the orders should be retrieved.
   * @param {string} [arg.customMeta] - A filter and retrieve data using
   *   special fields included for special use-cases
   * @returns {Promise<OrderList>} - Success response
   * @summary: Get all orders
   * @description: Use this API to retrieve all the orders.
   */
  async getOrders({
    status,
    pageNo,
    pageSize,
    fromDate,
    toDate,
    customMeta,
  } = {}) {
    const { error } = OrderValidator.getOrders().validate(
      { status, pageNo, pageSize, fromDate, toDate, customMeta },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getOrders().validate(
      { status, pageNo, pageSize, fromDate, toDate, customMeta },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOrders",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = OrderModel.OrderList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOrders",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderById>} - Success response
   * @summary: Get POS Order
   * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
   */
  async getPosOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getPosOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getPosOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPosOrderById",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = OrderModel.OrderById().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPosOrderById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the bag. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @param {string} arg.bagId - ID of the bag. An order may contain multiple
   *   items and may get divided into one or more shipment, each having its own ID.
   * @returns {Promise<ShipmentBagReasons>} - Success response
   * @summary: Get reasons behind full or partial cancellation of a shipment
   * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
   */
  async getShipmentBagReasons({ shipmentId, bagId } = {}) {
    const { error } = OrderValidator.getShipmentBagReasons().validate(
      { shipmentId, bagId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getShipmentBagReasons().validate(
      { shipmentId, bagId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getShipmentBagReasons",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.ShipmentBagReasons().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getShipmentBagReasons",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<ShipmentById>} - Success response
   * @summary: Get details of a shipment
   * @description: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.
   */
  async getShipmentById({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentById().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getShipmentById().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getShipmentById",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = OrderModel.ShipmentById().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getShipmentById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<ShipmentReasons>} - Success response
   * @summary: Get reasons behind full or partial cancellation of a shipment
   * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
   */
  async getShipmentReasons({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentReasons().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getShipmentReasons().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getShipmentReasons",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = OrderModel.ShipmentReasons().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getShipmentReasons",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<SendOtpToCustomerResponse>} - Success response
   * @summary: Send and Resend Otp code to Order-Shipment customer
   * @description: Use this API to send OTP to the customer of the mapped Shipment.
   */
  async sendOtpToShipmentCustomer({ orderId, shipmentId } = {}) {
    const { error } = OrderValidator.sendOtpToShipmentCustomer().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.sendOtpToShipmentCustomer().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for sendOtpToShipmentCustomer",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.SendOtpToCustomerResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for sendOtpToShipmentCustomer",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @returns {Promise<ShipmentTrack>} - Success response
   * @summary: Track shipment
   * @description: Track Shipment by shipment id, for application based on application Id
   */
  async trackShipment({ shipmentId } = {}) {
    const { error } = OrderValidator.trackShipment().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.trackShipment().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for trackShipment",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = OrderModel.ShipmentTrack().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for trackShipment",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @param {UpdateShipmentStatusRequest} arg.body
   * @returns {Promise<ShipmentApplicationStatusResponse>} - Success response
   * @summary: Update the shipment status
   * @description: Use this API to update the status of a shipment using its shipment ID.
   */
  async updateShipmentStatus({ shipmentId, body } = {}) {
    const { error } = OrderValidator.updateShipmentStatus().validate(
      { shipmentId, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.updateShipmentStatus().validate(
      { shipmentId, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateShipmentStatus",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.ShipmentApplicationStatusResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateShipmentStatus",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @param {VerifyOtp} arg.body
   * @returns {Promise<VerifyOtpResponse>} - Success response
   * @summary: Verify Otp code
   * @description: Use this API to verify OTP and create a session token with custom payload.
   */
  async verifyOtpShipmentCustomer({ orderId, shipmentId, body } = {}) {
    const { error } = OrderValidator.verifyOtpShipmentCustomer().validate(
      { orderId, shipmentId, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.verifyOtpShipmentCustomer().validate(
      { orderId, shipmentId, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for verifyOtpShipmentCustomer",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.VerifyOtpResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for verifyOtpShipmentCustomer",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Order;
