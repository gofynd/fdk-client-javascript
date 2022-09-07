const APIClient = require("../ApplicationAPIClient");
const Paginator = require("../../common/Paginator");
const constructUrl = require("../constructUrl");
const { FDKClientValidationError } = require("../../common/FDKError");
const OrderValidator = require("../models/OrderValidator");

class Order {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getShipmentById:
        "/service/application/orders/v1.0/orders/shipments/{shipment_id}",
      getCustomerDetailsByShipmentId:
        "/service/application/orders/v1.0/orders/{order_id}/shipments/{shipment_id}/customer-details",
      sendOtpToShipmentCustomer:
        "/service/application/orders/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/send",
      getReasons:
        "/service/application/orders/v1.0/orders/shipments/{shipment_id}/reasons",
      verifyOtp:
        "/service/application/orders/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/verify",
      getOrders: "/service/application/orders/v1.0/orders",
      getOrderById: "/service/application/orders/v1.0/orders/{order_id}",
      getPosOrderById: "/service/application/orders/v1.0/pos-order/{order_id}",
      trackShipment:
        "/service/application/orders/v1.0/orders/shipments/{shipment_id}/track",
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
   * @param {string} arg.shipmentId -
   * @returns {Promise<ShipmentById>} - Success response
   * @summary:
   * @description:
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

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getShipmentById"],
        params: { shipmentId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @param {string} arg.shipmentId -
   * @returns {Promise<CustomerDetailsResponse>} - Success response
   * @summary:
   * @description:
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

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomerDetailsByShipmentId"],
        params: { orderId, shipmentId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @param {string} arg.shipmentId -
   * @returns {Promise<SendOtpToCustomerResponse>} - Success response
   * @summary:
   * @description:
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

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["sendOtpToShipmentCustomer"],
        params: { orderId, shipmentId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.shipmentId -
   * @param {string} arg.bagId -
   * @returns {Promise<ShipmentReasonsResponse>} - Success response
   * @summary:
   * @description:
   */
  getReasons({ shipmentId, bagId } = {}) {
    const { error } = OrderValidator.getReasons().validate(
      { shipmentId, bagId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["bag_id"] = bagId;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getReasons"],
        params: { shipmentId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @param {number} arg.shipmentId -
   * @param {VerifyOtp} arg.body
   * @returns {Promise<VerifyOtpResponse>} - Success response
   * @summary:
   * @description:
   */
  verifyOtp({ orderId, shipmentId, body } = {}) {
    const { error } = OrderValidator.verifyOtp().validate(
      { orderId, shipmentId, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyOtp"],
        params: { orderId, shipmentId },
      }),
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.status] -
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @returns {Promise<OrderList>} - Success response
   * @summary:
   * @description:
   */
  getOrders({ status, pageNo, pageSize, fromDate, toDate } = {}) {
    const { error } = OrderValidator.getOrders().validate(
      { status, pageNo, pageSize, fromDate, toDate },
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

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrders"],
        params: {},
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderList>} - Success response
   * @summary:
   * @description:
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

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrderById"],
        params: { orderId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderList>} - Success response
   * @summary:
   * @description:
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

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPosOrderById"],
        params: { orderId },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId -
   * @returns {Promise<TrackShipmentResponse>} - Success response
   * @summary:
   * @description:
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

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["trackShipment"],
        params: { shipmentId },
      }),
      query_params,
      undefined
    );
  }
}

module.exports = Order;
