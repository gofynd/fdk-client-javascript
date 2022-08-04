const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const OrdersValidator = require("../models/OrdersValidator");
class Orders {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId -
   * @summary:
   * @description:
   */
  getShipmentDetails({ shipmentId } = {}) {
    const { error } = OrdersValidator.getShipmentDetails().validate(
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
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipment-details/${shipmentId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.superLane] -
   * @param {string} [arg.groupEntity] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @summary:
   * @description:
   */
  getLaneConfig({ superLane, groupEntity, fromDate, toDate } = {}) {
    const { error } = OrdersValidator.getLaneConfig().validate(
      {
        superLane,
        groupEntity,
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["super_lane"] = superLane;
    query_params["group_entity"] = groupEntity;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/lane-config/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @summary:
   * @description:
   */
  getOrderShipmentDetails({ orderId } = {}) {
    const { error } = OrdersValidator.getOrderShipmentDetails().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/order-details`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] -
   * @param {string} [arg.searchType] -
   * @param {string} [arg.searchId] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {string} [arg.dpIds] -
   * @param {string} [arg.orderingCompanyId] -
   * @param {string} [arg.stores] -
   * @param {string} [arg.salesChannel] -
   * @param {string} [arg.requestByExt] -
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.customerId] -
   * @param {boolean} [arg.isPrioritySort] -
   * @summary:
   * @description:
   */
  getShipmentList({
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
  } = {}) {
    const { error } = OrdersValidator.getShipmentList().validate(
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
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
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

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipments-listing`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.groupEntity -
   * @param {string} [arg.salesChannel] -
   * @param {string} [arg.dpIds] -
   * @summary:
   * @description:
   */
  getShipmentToManifest({ groupEntity, salesChannel, dpIds } = {}) {
    const { error } = OrdersValidator.getShipmentToManifest().validate(
      {
        groupEntity,
        salesChannel,
        dpIds,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["group_entity"] = groupEntity;
    query_params["sales_channel"] = salesChannel;
    query_params["dp_ids"] = dpIds;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/manifest-listing`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] -
   * @param {string} [arg.searchType] -
   * @param {string} [arg.searchValue] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {string} [arg.dpIds] -
   * @param {string} [arg.stores] -
   * @param {string} [arg.salesChannel] -
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isPrioritySort] -
   * @summary:
   * @description:
   */
  getOrders({
    lane,
    searchType,
    searchValue,
    fromDate,
    toDate,
    dpIds,
    stores,
    salesChannel,
    pageNo,
    pageSize,
    isPrioritySort,
  } = {}) {
    const { error } = OrdersValidator.getOrders().validate(
      {
        lane,
        searchType,
        searchValue,
        fromDate,
        toDate,
        dpIds,
        stores,
        salesChannel,
        pageNo,
        pageSize,
        isPrioritySort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["lane"] = lane;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["sales_channel"] = salesChannel;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_priority_sort"] = isPrioritySort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/orders-listing`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.view -
   * @summary:
   * @description:
   */
  getfilters({ view } = {}) {
    const { error } = OrdersValidator.getfilters().validate(
      {
        view,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["view"] = view;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/filter-listing`,
      query_params,
      undefined
    );
  }
}

module.exports = Orders;
