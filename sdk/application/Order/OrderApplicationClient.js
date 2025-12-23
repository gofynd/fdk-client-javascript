const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

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
      getRefundModes:
        "/service/application/order-manage/v1.0/shipment/{shipment_id}/refund/modes",
      getShipmentBagReasons:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/bags/{bag_id}/reasons",
      getShipmentById:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}",
      getShipmentReasons:
        "/service/application/order/v1.0/orders/shipments/{shipment_id}/reasons",
      sendOtpToShipmentCustomer:
        "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/send/",
      submitDeliveryReattemptRequest:
        "/service/application/order/v1.0/shipments/{shipment_id}/delivery-reattempt",
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CustomerDetailsResponseSchema>} - Success response
   * @name getCustomerDetailsByShipmentId
   * @summary: Get shipment's customer
   * @description: Get customer details such as mobile number using Shipment ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getCustomerDetailsByShipmentId/).
   */
  async getCustomerDetailsByShipmentId(
    { orderId, shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], [
      "orderId",
      "shipmentId",
    ]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
   * @name getInvoiceByShipmentId
   * @summary: Retrieves invoice for shipment
   * @description: Get invoice corresponding to a specific shipment ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getInvoiceByShipmentId/).
   */
  async getInvoiceByShipmentId(
    { shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["shipmentId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderById>} - Success response
   * @name getOrderById
   * @summary: Get an order
   * @description: Get order details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getOrderById/).
   */
  async getOrderById(
    { orderId, allowInactive, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["orderId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["allow_inactive"] = allowInactive;

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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderList>} - Success response
   * @name getOrders
   * @summary: List customer orders
   * @description: Get all orders associated with a customer account. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getOrders/).
   */
  async getOrders(
    {
      status,
      pageNo,
      pageSize,
      fromDate,
      toDate,
      startDate,
      endDate,
      customMeta,
      allowInactive,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["status"] = status;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["custom_meta"] = customMeta;
    query_params["allow_inactive"] = allowInactive;

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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderById>} - Success response
   * @name getPosOrderById
   * @summary: Retrieves POS order details
   * @description: Retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getPosOrderById/).
   */
  async getPosOrderById(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["orderId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RefundOptions>} - Success response
   * @name getRefundModes
   * @summary: Get refund modes for a shipment
   * @description: Returns a list of available refund options for the given company and shipment.
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getRefundModes/).
   */
  async getRefundModes(
    { shipmentId, lineNumbers, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["shipmentId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["line_numbers"] = lineNumbers;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getRefundModes"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShipmentBagReasons>} - Success response
   * @name getShipmentBagReasons
   * @summary: Retrieve Reasons for Cancellation and Return journey
   * @description: Allows users to retrieve a comprehensive list of reasons for cancellation  or returning a shipment. It provides both cancellation and return reasons, with an emphasis  on Quality Control (QC) evaluations. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getShipmentBagReasons/).
   */
  async getShipmentBagReasons(
    { shipmentId, bagId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], [
      "shipmentId",
      "bagId",
    ]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShipmentById>} - Success response
   * @name getShipmentById
   * @summary: Get a Shipment
   * @description: Get shipment details such as price breakup, tracking details, store information, etc. using Shipment ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getShipmentById/).
   */
  async getShipmentById(
    { shipmentId, allowInactive, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["shipmentId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["allow_inactive"] = allowInactive;

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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShipmentReasons>} - Success response
   * @name getShipmentReasons
   * @summary: List shipment cancellation reasons
   * @description: Get reasons to perform full or partial cancellation of a shipment. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/getShipmentReasons/).
   */
  async getShipmentReasons(
    { shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["shipmentId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<SendOtpToCustomerResponseSchema>} - Success response
   * @name sendOtpToShipmentCustomer
   * @summary: Send OTP to customer
   * @description: Send OTP to the customer for shipment verification. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/sendOtpToShipmentCustomer/).
   */
  async sendOtpToShipmentCustomer(
    { orderId, shipmentId, eventType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], [
      "orderId",
      "shipmentId",
    ]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["event_type"] = eventType;

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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<DeliveryReattemptSuccessResponseSchema>} - Success response
   * @name submitDeliveryReattemptRequest
   * @summary: Initiates a delivery reattempt request for a given shipment
   * @description: This operation allows customers to submit a request for reattempting the delivery of a specific shipment  with optional address updates and a new delivery date. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/submitDeliveryReattemptRequest/).
   */
  async submitDeliveryReattemptRequest(
    { shipmentId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["shipmentId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["submitDeliveryReattemptRequest"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShipmentTrack>} - Success response
   * @name trackShipment
   * @summary: Track shipment status
   * @description: Track Shipment by shipment id, for application based on application Id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/trackShipment/).
   */
  async trackShipment(
    { shipmentId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["shipmentId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShipmentApplicationStatusResponseSchema>} - Success response
   * @name updateShipmentStatus
   * @summary: Updates shipment status
   * @description: This operation allows for updating the status and properties of a shipment.  For example, it allows users to initiate a return by providing reasons and  uploading quality check images. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/updateShipmentStatus/).
   */
  async updateShipmentStatus(
    { shipmentId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["shipmentId"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<VerifyOtpResponseSchema>} - Success response
   * @name verifyOtpShipmentCustomer
   * @summary: Verifies OTP
   * @description: Verify OTP for getting shipment details - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/order/verifyOtpShipmentCustomer/).
   */
  async verifyOtpShipmentCustomer(
    { orderId, shipmentId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], [
      "orderId",
      "shipmentId",
    ]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }
}

module.exports = Order;
