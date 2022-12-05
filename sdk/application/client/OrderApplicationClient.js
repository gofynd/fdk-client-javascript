const APIClient = require("../ApplicationAPIClient");
const Paginator = require("../../common/Paginator");
const constructUrl = require("../constructUrl");
const { FDKClientValidationError } = require("../../common/FDKError");
const OrderValidator = require("../models/OrderValidator");

class Order {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getOrders: "/service/application/orders/v1.0/orders",
      getOrderById: "/service/application/orders/v1.0/orders/{order_id}",
      getPosOrderById:
        "/service/application/orders/v1.0/orders/pos-order/{order_id}",
      getShipmentById:
        "/service/application/orders/v1.0/orders/shipments/{shipment_id}",
      getInvoiceByShipmentIds:
        "/service/application/orders/v1.0/orders/shipments/{shipment_id}/invoice",
      trackShipment:
        "/service/application/orders/v1.0/orders/shipments/{shipment_id}/track",
      getCustomerDetailsByShipmentId:
        "/service/application/orders/v1.0/orders/{order_id}/shipments/{shipment_id}/customer-details",
      sendOtpToShipmentCustomer:
        "/service/application/orders/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/send/",
      verifyOtpShipmentCustomer:
        "/service/application/orders/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/verify/",
      getShipmentBagReasons:
        "/service/application/orders/v1.0/orders/shipments/{shipment_id}/bags/{bag_id}/reasons",
      getShipmentReasons:
        "/service/application/orders/v1.0/orders/shipments/{shipment_id}/reasons",
      updateShipmentStatus:
        "/service/application/order-manage/v1.0/orders/shipments/{shipment_id}/status",
      getInvoiceByShipmentId:
        "/service/application/document/v1.0/orders/shipments/{shipment_id}/invoice",
      getCreditNoteByShipmentId:
        "/service/application/document/v1.0/orders/shipments/{shipment_id}/credit-note",
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
   * @param {number} [arg.status] - A filter to retrieve orders by their
   *   current status such as *placed*, *delivered*, etc.
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
  getOrders({ status, pageNo, pageSize, fromDate, toDate, customMeta } = {}) {
    const { error } = OrderValidator.getOrders().validate(
      { status, pageNo, pageSize, fromDate, toDate, customMeta },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["status"] = status;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["custom_meta"] = customMeta;

    const xHeaders = {};

    return APIClient.execute(
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
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderById>} - Success response
   * @summary: Get details of an order
   * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
   */
  getOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderList>} - Success response
   * @summary: Get POS Order
   * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
   */
  getPosOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getPosOrderById().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  getShipmentById({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentById().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment.
   * @returns {Promise<ResponseGetInvoiceShipment>} - Success response
   * @summary: Get Invoice of a shipment
   * @description: Use this API to retrieve shipment invoice.
   */
  getInvoiceByShipmentIds({ shipmentId } = {}) {
    const { error } = OrderValidator.getInvoiceByShipmentIds().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getInvoiceByShipmentIds"],
        params: { shipmentId },
      }),
      query_params,
      undefined,
      xHeaders
    );
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
  trackShipment({ shipmentId } = {}) {
    const { error } = OrderValidator.trackShipment().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  getCustomerDetailsByShipmentId({ orderId, shipmentId } = {}) {
    const { error } = OrderValidator.getCustomerDetailsByShipmentId().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  sendOtpToShipmentCustomer({ orderId, shipmentId } = {}) {
    const { error } = OrderValidator.sendOtpToShipmentCustomer().validate(
      { orderId, shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  verifyOtpShipmentCustomer({ orderId, shipmentId, body } = {}) {
    const { error } = OrderValidator.verifyOtpShipmentCustomer().validate(
      { orderId, shipmentId, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  getShipmentBagReasons({ shipmentId, bagId } = {}) {
    const { error } = OrderValidator.getShipmentBagReasons().validate(
      { shipmentId, bagId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  getShipmentReasons({ shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentReasons().validate(
      { shipmentId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId -
   * @param {ShipmentStatusUpdateBody} arg.body
   * @returns {Promise<ShipmentApplicationStatusResponse>} - Success response
   * @summary:
   * @description: updateShipmentStatus
   */
  updateShipmentStatus({ shipmentId, body } = {}) {
    const { error } = OrderValidator.updateShipmentStatus().validate(
      { shipmentId, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shiment ID
   * @param {invoiceParameter} [arg.parameters] -
   * @returns {Promise<ResponseGetInvoiceShipment1>} - Success response
   * @summary: Get Presigned URL to download Invoice
   * @description: Use this API to generate Presigned URLs for downloading Invoice
   */
  getInvoiceByShipmentId({ shipmentId, parameters } = {}) {
    const { error } = OrderValidator.getInvoiceByShipmentId().validate(
      { shipmentId, parameters },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["parameters"] = parameters;

    const xHeaders = {};

    return APIClient.execute(
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
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shiment ID
   * @param {creditNoteParameter} [arg.parameters] -
   * @returns {Promise<ResponseGetInvoiceShipment1>} - Success response
   * @summary: Get Presigned URL to download Invoice
   * @description: Use this API to generate Presigned URLs for downloading Invoice
   */
  getCreditNoteByShipmentId({ shipmentId, parameters } = {}) {
    const { error } = OrderValidator.getCreditNoteByShipmentId().validate(
      { shipmentId, parameters },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["parameters"] = parameters;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCreditNoteByShipmentId"],
        params: { shipmentId },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = Order;
