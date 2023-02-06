const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const OrderValidator = require("./OrderPlatformApplicationValidator");

class Order {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.orderId] - Order Id
   * @param {string} [arg.next] - Next
   * @param {string} [arg.previous] - Previous
   * @summary: Get Order Details for company based on Company Id and Order Id
   * @description: Get Orders
   */
  getApplicationOrderDetails({ orderId, next, previous } = {}) {
    const { error } = OrderValidator.getApplicationOrderDetails().validate(
      {
        orderId,
        next,
        previous,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["order_id"] = orderId;
    query_params["next"] = next;
    query_params["previous"] = previous;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/details`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @summary: Track Shipment by shipment id, for application based on application Id
   * @description: Shipment Track
   */
  trackShipmentPlatform({ shipmentId } = {}) {
    const { error } = OrderValidator.trackShipmentPlatform().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/track`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - Order Id
   * @summary: Track Order by order id, for application based on application Id
   * @description: Order Track
   */
  trackOrder({ orderId } = {}) {
    const { error } = OrderValidator.trackOrder().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/${orderId}/track`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get all failed orders application wise
   * @description: Failed Orders
   */
  failedOrders({} = {}) {
    const { error } = OrderValidator.failedOrders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/failed`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - Order Id
   * @summary: Reprocess order by order id
   * @description: Order Reprocess
   */
  reprocessOrder({ orderId } = {}) {
    const { error } = OrderValidator.reprocessOrder().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/${orderId}/reprocess`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @param {ShipmentUpdateRequest} arg.body
   * @summary: Use this API to update the shipment using its shipment ID.
   * @description: Update the shipment
   */
  updateShipment({ shipmentId, body } = {}) {
    const { error } = OrderValidator.updateShipment().validate(
      {
        shipmentId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/update`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.action - Action
   * @summary: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
   * @description: Get reasons behind full or partial cancellation of a shipment
   */
  getPlatformShipmentReasons({ action } = {}) {
    const { error } = OrderValidator.getPlatformShipmentReasons().validate(
      {
        action,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/reasons/${action}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - ID of the order.
   * @param {string} arg.shipmentId - ID of the shipment. An order may contain
   *   multiple items and may get divided into one or more shipment, each
   *   having its own ID.
   * @summary: Use this API to track a shipment using its shipment ID.
   * @description: Track shipment
   */
  getShipmentTrackDetails({ orderId, shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentTrackDetails().validate(
      {
        orderId,
        shipmentId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/${orderId}/shipments/${shipmentId}/track`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageNo] - Current page number
   * @param {string} [arg.pageSize] - Page limit
   * @param {string} [arg.fromDate] - From Date
   * @param {string} [arg.toDate] - To Date
   * @param {string} [arg.q] - Keyword for Search
   * @param {string} [arg.stage] - Specefic Order Stage
   * @param {string} [arg.salesChannels] - Selected Sales Channel
   * @param {string} [arg.orderId] - Order Id
   * @param {string} [arg.stores] - Selected Stores
   * @param {string} [arg.status] - Status of order
   * @param {string} [arg.dp] - Delivery Partners
   * @param {string} [arg.userId] - User Id
   * @param {string} [arg.filterType] - Filters
   * @summary: Get Orders for company based on Company Id
   * @description: Get Orders at Application Level
   */
  getOrdersByApplicationId({
    pageNo,
    pageSize,
    fromDate,
    toDate,
    q,
    stage,
    salesChannels,
    orderId,
    stores,
    status,
    dp,
    userId,
    filterType,
  } = {}) {
    const { error } = OrderValidator.getOrdersByApplicationId().validate(
      {
        pageNo,
        pageSize,
        fromDate,
        toDate,
        q,
        stage,
        salesChannels,
        orderId,
        stores,
        status,
        dp,
        userId,
        filterType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["q"] = q;
    query_params["stage"] = stage;
    query_params["sales_channels"] = salesChannels;
    query_params["order_id"] = orderId;
    query_params["stores"] = stores;
    query_params["status"] = status;
    query_params["dp"] = dp;
    query_params["user_id"] = userId;
    query_params["filter_type"] = filterType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders`,
      query_params,
      undefined
    );
  }
}
module.exports = Order;
