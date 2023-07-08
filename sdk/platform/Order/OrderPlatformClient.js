const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const PlatformAPIClient = require("../PlatformAPIClient");
const OrderValidator = require("./OrderPlatformValidator");
const OrderModel = require("./OrderPlatformModel");
const { Logger } = require("./../../common/Logger");

class Order {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.bagId - Bag Id
   * @returns {Promise<GetActivityStatus>} - Success response
   * @summary: Get Activity Status
   * @description: Get Activity Status
   */
  async activityStatus({ bagId } = {}) {
    const { error } = OrderValidator.activityStatus().validate(
      {
        bagId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.activityStatus().validate(
      {
        bagId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for activityStatus",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["bag_id"] = bagId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/activity/status`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.GetActivityStatus().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for activityStatus",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @returns {Promise<Object>} - Success response
   * @summary: Check Refund is available or not
   * @description: Check Refund is available or not
   */
  async checkRefund({ shipmentId } = {}) {
    const { error } = OrderValidator.checkRefund().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.checkRefund().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for checkRefund",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/check-refund/${shipmentId}`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = Joi.any().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for checkRefund",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.orderId] - Order Id
   * @param {string} [arg.next] - Next
   * @param {string} [arg.previous] - Previous
   * @returns {Promise<OrderDetails>} - Success response
   * @summary: Get Order Details for company based on Company Id and Order Id
   * @description: Get Orders
   */
  async getOrderDetails({ orderId, next, previous } = {}) {
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

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getOrderDetails().validate(
      {
        orderId,
        next,
        previous,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOrderDetails",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["order_id"] = orderId;
    query_params["next"] = next;
    query_params["previous"] = previous;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/details`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = OrderModel.OrderDetails().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOrderDetails",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
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
   * @returns {Promise<OrderLanesCount>} - Success response
   * @summary: Get Order Lanes Count for company based on Company Id
   * @description: Get Orders Seperate Lane Count
   */
  async getOrderLanesCountByCompanyId({
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

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.getOrderLanesCountByCompanyId().validate(
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
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getOrderLanesCountByCompanyId",
      });
      Logger({ level: "WARN", message: warrning });
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/lane-count`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = OrderModel.OrderLanesCount().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getOrderLanesCountByCompanyId",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
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
   * @returns {Promise<OrderListing>} - Success response
   * @summary: Get Orders for company based on Company Id
   * @description: Get Orders
   */
  async getOrdersByCompanyId({
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

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getOrdersByCompanyId().validate(
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
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOrdersByCompanyId",
      });
      Logger({ level: "WARN", message: warrning });
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = OrderModel.OrderListing().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOrdersByCompanyId",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
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
   * @returns {Promise<OrderPicklistListing>} - Success response
   * @summary: Get Orders for company based on Company Id
   * @description: Get Orders
   */
  async getPicklistOrdersByCompanyId({
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

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.getPicklistOrdersByCompanyId().validate(
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
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getPicklistOrdersByCompanyId",
      });
      Logger({ level: "WARN", message: warrning });
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/picklist`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.OrderPicklistListing().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getPicklistOrdersByCompanyId",
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
   * @param {string} arg.addressCategory - Category of the address it falls
   *   into(billing or delivery).
   * @returns {Promise<GetShipmentAddressResponse>} - Success response
   * @summary: Use this API to get address of a shipment using its shipment ID and Address Category.
   * @description: Get Shipment Address
   */
  async getShipmentAddress({ shipmentId, addressCategory } = {}) {
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

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getShipmentAddress().validate(
      {
        shipmentId,
        addressCategory,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getShipmentAddress",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/shipments/${shipmentId}/address/${addressCategory}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.GetShipmentAddressResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getShipmentAddress",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CanBreakRequestBody} arg.body
   * @returns {Promise<CanBreakResponse>} - Success response
   * @summary: Decides if Shipment bags can break
   * @description: Decides if Shipment bags can break
   */
  async shipmentBagsCanBreak({ body } = {}) {
    const { error } = OrderValidator.shipmentBagsCanBreak().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.shipmentBagsCanBreak().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for shipmentBagsCanBreak",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/can-break`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.CanBreakResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for shipmentBagsCanBreak",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateShipmentStatusBody} arg.body
   * @returns {Promise<UpdateShipmentStatusResponse>} - Success response
   * @summary: Update status of Shipment
   * @description: Update Shipment Status
   */
  async shipmentStatusUpdate({ body } = {}) {
    const { error } = OrderValidator.shipmentStatusUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.shipmentStatusUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for shipmentStatusUpdate",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/status`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.UpdateShipmentStatusResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for shipmentStatusUpdate",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateProcessShipmenstRequestBody} arg.body
   * @returns {Promise<UpdateProcessShipmenstRequestResponse>} - Success response
   * @summary: Update Store Process-Shipment
   * @description: Update Store Process-Shipment
   */
  async storeProcessShipmentUpdate({ body } = {}) {
    const { error } = OrderValidator.storeProcessShipmentUpdate().validate(
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
    } = OrderValidator.storeProcessShipmentUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for storeProcessShipmentUpdate",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/actions/store/process-shipments`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.UpdateProcessShipmenstRequestResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for storeProcessShipmentUpdate",
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
   * @param {string} arg.addressCategory - Category of the address it falls
   *   into(billing or delivery).
   * @param {UpdateShipmentAddressRequest} arg.body
   * @returns {Promise<UpdateShipmentAddressResponse>} - Success response
   * @summary: Use this API to update address of a shipment using its shipment ID and Address Category.
   * @description: Update Shipment Address
   */
  async updateShipmentAddress({ shipmentId, addressCategory, body } = {}) {
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

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.updateShipmentAddress().validate(
      {
        shipmentId,
        addressCategory,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateShipmentAddress",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/shipments/${shipmentId}/address/${addressCategory}`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.UpdateShipmentAddressResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateShipmentAddress",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Order;
