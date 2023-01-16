const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const OrderValidator = require("../models/OrderValidator");
class Order {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateShipmentStatusBody} arg.body
   * @summary: Update status of Shipment
   * @description: Update Shipment Status
   */
  shipmentStatusUpdate({ body } = {}) {
    const { error } = OrderValidator.shipmentStatusUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/status`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.bagId - Bag Id
   * @summary: Get Activity Status
   * @description: Get Activity Status
   */
  activityStatus({ bagId } = {}) {
    const { error } = OrderValidator.activityStatus().validate(
      {
        bagId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["bag_id"] = bagId;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/activity/status`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateProcessShipmenstRequestBody} arg.body
   * @summary: Update Store Process-Shipment
   * @description: Update Store Process-Shipment
   */
  storeProcessShipmentUpdate({ body } = {}) {
    const { error } = OrderValidator.storeProcessShipmentUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/store/process-shipments`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @summary: Check Refund is available or not
   * @description: Check Refund is available or not
   */
  checkRefund({ shipmentId } = {}) {
    const { error } = OrderValidator.checkRefund().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/check-refund/${shipmentId}`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CanBreakRequestBody} arg.body
   * @summary: Decides if Shipment bags can break
   * @description: Decides if Shipment bags can break
   */
  shipmentBagsCanBreak({ body } = {}) {
    const { error } = OrderValidator.shipmentBagsCanBreak().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/can-break`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageNo] - Current page number
   * @param {string} [arg.pageSize] - Page limit
   * @param {string} [arg.fromDate] - From Date
   * @param {string} [arg.toDate] - To Date
   * @param {boolean} [arg.isPrioritySort] - Sorting Order
   * @param {boolean} [arg.lockStatus] - Hide Lock Status
   * @param {string} [arg.q] - Keyword for Search
   * @param {string} [arg.stage] - Specefic Order Stage
   * @param {string} [arg.salesChannels] - Selected Sales Channel
   * @param {string} [arg.orderId] - Order Id
   * @param {string} [arg.stores] - Selected Stores
   * @param {string} [arg.deploymentStores] - Selected Deployment Stores
   * @param {string} [arg.status] - Status of order
   * @param {string} [arg.dp] - Delivery Partners
   * @param {boolean} [arg.shortenUrls] - Shorten URL option
   * @param {string} [arg.filterType] - Filters
   * @summary: Get Orders for company based on Company Id
   * @description: Get Orders
   */
  getOrdersByCompanyId({
    pageNo,
    pageSize,
    fromDate,
    toDate,
    isPrioritySort,
    lockStatus,
    q,
    stage,
    salesChannels,
    orderId,
    stores,
    deploymentStores,
    status,
    dp,
    shortenUrls,
    filterType,
  } = {}) {
    const { error } = OrderValidator.getOrdersByCompanyId().validate(
      {
        pageNo,
        pageSize,
        fromDate,
        toDate,
        isPrioritySort,
        lockStatus,
        q,
        stage,
        salesChannels,
        orderId,
        stores,
        deploymentStores,
        status,
        dp,
        shortenUrls,
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
    query_params["is_priority_sort"] = isPrioritySort;
    query_params["lock_status"] = lockStatus;
    query_params["q"] = q;
    query_params["stage"] = stage;
    query_params["sales_channels"] = salesChannels;
    query_params["order_id"] = orderId;
    query_params["stores"] = stores;
    query_params["deployment_stores"] = deploymentStores;
    query_params["status"] = status;
    query_params["dp"] = dp;
    query_params["shorten_urls"] = shortenUrls;
    query_params["filter_type"] = filterType;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders`,
      query_params,
      undefined,
      xHeaders
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
   * @param {boolean} [arg.shortenUrls] - Shorten URL option
   * @param {string} [arg.filterType] - Filters
   * @summary: Get Order Lanes Count for company based on Company Id
   * @description: Get Orders Seperate Lane Count
   */
  getOrderLanesCountByCompanyId({
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
    shortenUrls,
    filterType,
  } = {}) {
    const { error } = OrderValidator.getOrderLanesCountByCompanyId().validate(
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
        shortenUrls,
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
    query_params["shorten_urls"] = shortenUrls;
    query_params["filter_type"] = filterType;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/lane-count`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.orderId] - Order Id
   * @param {string} [arg.next] - Next
   * @param {string} [arg.previous] - Previous
   * @summary: Get Order Details for company based on Company Id and Order Id
   * @description: Get Orders
   */
  getOrderDetails({ orderId, next, previous } = {}) {
    const { error } = OrderValidator.getOrderDetails().validate(
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

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/details`,
      query_params,
      undefined,
      xHeaders
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
   * @param {boolean} [arg.shortenUrls] - Shorten URL option
   * @param {string} [arg.filterType] - Filters
   * @summary: Get Orders for company based on Company Id
   * @description: Get Orders
   */
  getPicklistOrdersByCompanyId({
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
    shortenUrls,
    filterType,
  } = {}) {
    const { error } = OrderValidator.getPicklistOrdersByCompanyId().validate(
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
        shortenUrls,
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
    query_params["shorten_urls"] = shortenUrls;
    query_params["filter_type"] = filterType;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/picklist`,
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
   * @param {string} arg.addressCategory - Category of the address it falls
   *   into(billing or delivery).
   * @summary: Use this API to get address of a shipment using its shipment ID and Address Category.
   * @description: Get Shipment Address
   */
  getShipmentAddress({ shipmentId, addressCategory } = {}) {
    const { error } = OrderValidator.getShipmentAddress().validate(
      {
        shipmentId,
        addressCategory,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/shipments/${shipmentId}/address/${addressCategory}`,
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
   * @param {string} arg.addressCategory - Category of the address it falls
   *   into(billing or delivery).
   * @param {UpdateShipmentAddressRequest} arg.body
   * @summary: Use this API to update address of a shipment using its shipment ID and Address Category.
   * @description: Update Shipment Address
   */
  updateShipmentAddress({ shipmentId, addressCategory, body } = {}) {
    const { error } = OrderValidator.updateShipmentAddress().validate(
      {
        shipmentId,
        addressCategory,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/shipments/${shipmentId}/address/${addressCategory}`,
      query_params,
      body,
      xHeaders
    );
  }
}

module.exports = Order;
