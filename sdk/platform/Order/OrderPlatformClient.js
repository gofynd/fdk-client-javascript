const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const PlatformAPIClient = require("../PlatformAPIClient");
const OrderValidator = require("./OrderPlatformValidator");
class Order {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] -
   * @param {string} [arg.searchType] -
   * @param {string} [arg.searchValue] -
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
   * @param {boolean} [arg.isPrioritySort] -
   * @param {boolean} [arg.excludeLockedShipments] -
   * @param {string} [arg.paymentMethods] -
   * @param {string} [arg.channelShipmentId] -
   * @param {string} [arg.channelOrderId] -
   * @param {string} [arg.customMeta] -
   * @summary:
   * @description:
   */
  getShipments({
    lane,
    searchType,
    searchValue,
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
    isPrioritySort,
    excludeLockedShipments,
    paymentMethods,
    channelShipmentId,
    channelOrderId,
    customMeta,
  } = {}) {
    const { error } = OrderValidator.getShipments().validate(
      {
        lane,
        searchType,
        searchValue,
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
        isPrioritySort,
        excludeLockedShipments,
        paymentMethods,
        channelShipmentId,
        channelOrderId,
        customMeta,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getShipments().validate(
      {
        lane,
        searchType,
        searchValue,
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
        isPrioritySort,
        excludeLockedShipments,
        paymentMethods,
        channelShipmentId,
        channelOrderId,
        customMeta,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getShipments");
      console.log(warrning);
    }

    const query_params = {};
    query_params["lane"] = lane;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;
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
    query_params["is_priority_sort"] = isPrioritySort;
    query_params["exclude_locked_shipments"] = excludeLockedShipments;
    query_params["payment_methods"] = paymentMethods;
    query_params["channel_shipment_id"] = channelShipmentId;
    query_params["channel_order_id"] = channelOrderId;
    query_params["custom_meta"] = customMeta;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipments-listing`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.channelShipmentId] -
   * @param {string} [arg.shipmentId] -
   * @param {string} [arg.orderingCompanyId] -
   * @param {string} [arg.requestByExt] -
   * @summary:
   * @description:
   */
  getShipmentById({
    channelShipmentId,
    shipmentId,
    orderingCompanyId,
    requestByExt,
  } = {}) {
    const { error } = OrderValidator.getShipmentById().validate(
      {
        channelShipmentId,
        shipmentId,
        orderingCompanyId,
        requestByExt,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getShipmentById().validate(
      {
        channelShipmentId,
        shipmentId,
        orderingCompanyId,
        requestByExt,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getShipmentById");
      console.log(warrning);
    }

    const query_params = {};
    query_params["channel_shipment_id"] = channelShipmentId;
    query_params["shipment_id"] = shipmentId;
    query_params["ordering_company_id"] = orderingCompanyId;
    query_params["request_by_ext"] = requestByExt;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipment-details`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @summary:
   * @description:
   */
  getOrderById({ orderId } = {}) {
    const { error } = OrderValidator.getOrderById().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getOrderById().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getOrderById");
      console.log(warrning);
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/order-details`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.superLane] -
   * @param {string} [arg.groupEntity] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {string} [arg.dpIds] -
   * @param {string} [arg.stores] -
   * @param {string} [arg.salesChannel] -
   * @param {string} [arg.paymentMode] -
   * @param {string} [arg.bagStatus] -
   * @summary:
   * @description:
   */
  getLaneConfig({
    superLane,
    groupEntity,
    fromDate,
    toDate,
    dpIds,
    stores,
    salesChannel,
    paymentMode,
    bagStatus,
  } = {}) {
    const { error } = OrderValidator.getLaneConfig().validate(
      {
        superLane,
        groupEntity,
        fromDate,
        toDate,
        dpIds,
        stores,
        salesChannel,
        paymentMode,
        bagStatus,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getLaneConfig().validate(
      {
        superLane,
        groupEntity,
        fromDate,
        toDate,
        dpIds,
        stores,
        salesChannel,
        paymentMode,
        bagStatus,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getLaneConfig");
      console.log(warrning);
    }

    const query_params = {};
    query_params["super_lane"] = superLane;
    query_params["group_entity"] = groupEntity;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["sales_channel"] = salesChannel;
    query_params["payment_mode"] = paymentMode;
    query_params["bag_status"] = bagStatus;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/lane-config/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] -
   * @param {string} [arg.searchType] -
   * @param {string} [arg.bagStatus] -
   * @param {string} [arg.timeToDispatch] -
   * @param {string} [arg.paymentMethods] -
   * @param {string} [arg.tags] -
   * @param {string} [arg.searchValue] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {string} [arg.dpIds] -
   * @param {string} [arg.stores] -
   * @param {string} [arg.salesChannel] -
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isPrioritySort] -
   * @param {string} [arg.customMeta] -
   * @summary:
   * @description:
   */
  getOrders({
    lane,
    searchType,
    bagStatus,
    timeToDispatch,
    paymentMethods,
    tags,
    searchValue,
    fromDate,
    toDate,
    dpIds,
    stores,
    salesChannel,
    pageNo,
    pageSize,
    isPrioritySort,
    customMeta,
  } = {}) {
    const { error } = OrderValidator.getOrders().validate(
      {
        lane,
        searchType,
        bagStatus,
        timeToDispatch,
        paymentMethods,
        tags,
        searchValue,
        fromDate,
        toDate,
        dpIds,
        stores,
        salesChannel,
        pageNo,
        pageSize,
        isPrioritySort,
        customMeta,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getOrders().validate(
      {
        lane,
        searchType,
        bagStatus,
        timeToDispatch,
        paymentMethods,
        tags,
        searchValue,
        fromDate,
        toDate,
        dpIds,
        stores,
        salesChannel,
        pageNo,
        pageSize,
        isPrioritySort,
        customMeta,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getOrders");
      console.log(warrning);
    }

    const query_params = {};
    query_params["lane"] = lane;
    query_params["search_type"] = searchType;
    query_params["bag_status"] = bagStatus;
    query_params["time_to_dispatch"] = timeToDispatch;
    query_params["payment_methods"] = paymentMethods;
    query_params["tags"] = tags;
    query_params["search_value"] = searchValue;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["sales_channel"] = salesChannel;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_priority_sort"] = isPrioritySort;
    query_params["custom_meta"] = customMeta;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/orders-listing`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @summary:
   * @description:
   */
  getMetricCount({ fromDate, toDate } = {}) {
    const { error } = OrderValidator.getMetricCount().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getMetricCount().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getMetricCount");
      console.log(warrning);
    }

    const query_params = {};
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipment/metrics-count/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.view -
   * @param {string} [arg.groupEntity] -
   * @summary:
   * @description:
   */
  getfilters({ view, groupEntity } = {}) {
    const { error } = OrderValidator.getfilters().validate(
      {
        view,
        groupEntity,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getfilters().validate(
      {
        view,
        groupEntity,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getfilters");
      console.log(warrning);
    }

    const query_params = {};
    query_params["view"] = view;
    query_params["group_entity"] = groupEntity;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/filter-listing`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @summary:
   * @description:
   */
  createShipmentReport({ fromDate, toDate } = {}) {
    const { error } = OrderValidator.createShipmentReport().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.createShipmentReport().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createShipmentReport");
      console.log(warrning);
    }

    const query_params = {};
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/reports/shipment`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @summary:
   * @description:
   */
  getReportsShipmentListing({ pageNo, pageSize } = {}) {
    const { error } = OrderValidator.getReportsShipmentListing().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.getReportsShipmentListing().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getReportsShipmentListing"
      );
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/reports/shipment-listing`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {JioCodeUpsertPayload} arg.body
   * @summary:
   * @description:
   */
  upsertJioCode({ body } = {}) {
    const { error } = OrderValidator.upsertJioCode().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.upsertJioCode().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for upsertJioCode");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/upsert/jiocode/article`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.batchId -
   * @param {string} arg.docType -
   * @summary:
   * @description:
   */
  getBulkInvoice({ batchId, docType } = {}) {
    const { error } = OrderValidator.getBulkInvoice().validate(
      {
        batchId,
        docType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getBulkInvoice().validate(
      {
        batchId,
        docType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getBulkInvoice");
      console.log(warrning);
    }

    const query_params = {};
    query_params["batch_id"] = batchId;
    query_params["doc_type"] = docType;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bulk-action/invoice`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.batchId -
   * @summary:
   * @description:
   */
  getBulkInvoiceLabel({ batchId } = {}) {
    const { error } = OrderValidator.getBulkInvoiceLabel().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getBulkInvoiceLabel().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getBulkInvoiceLabel");
      console.log(warrning);
    }

    const query_params = {};
    query_params["batch_id"] = batchId;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/invoice-label-external`,
      query_params,
      undefined,
      xHeaders
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
  getBulkShipmentExcelFile({
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
    const { error } = OrderValidator.getBulkShipmentExcelFile().validate(
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

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.getBulkShipmentExcelFile().validate(
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
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getBulkShipmentExcelFile"
      );
      console.log(warrning);
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

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/generate/file`,
      query_params,
      undefined,
      xHeaders
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
  getBulkList({
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
    const { error } = OrderValidator.getBulkList().validate(
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

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getBulkList().validate(
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
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getBulkList");
      console.log(warrning);
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

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bulk-action/listing`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.batchId -
   * @param {string} [arg.reportType] -
   * @summary:
   * @description:
   */
  getBulkActionFailedReport({ batchId, reportType } = {}) {
    const { error } = OrderValidator.getBulkActionFailedReport().validate(
      {
        batchId,
        reportType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.getBulkActionFailedReport().validate(
      {
        batchId,
        reportType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for getBulkActionFailedReport"
      );
      console.log(warrning);
    }

    const query_params = {};
    query_params["batch_id"] = batchId;
    query_params["report_type"] = reportType;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bulk-action-failed-report/`,
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
   * @param {string} arg.bagId - ID of the bag. An order may contain multiple
   *   items and may get divided into one or more shipment, each having its own ID.
   * @param {string} arg.state - State for which reasons are required.
   * @summary: Get reasons behind full or partial cancellation of a shipment
   * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
   */
  getShipmentReasons({ shipmentId, bagId, state } = {}) {
    const { error } = OrderValidator.getShipmentReasons().validate(
      {
        shipmentId,
        bagId,
        state,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getShipmentReasons().validate(
      {
        shipmentId,
        bagId,
        state,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getShipmentReasons");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipments/${shipmentId}/bags/${bagId}/state/${state}/reasons`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {BulkActionPayload} arg.body
   * @summary: emits uuid to kafka topic.
   * @description: Use this API to start processing Xlsx file.
   */
  bulkActionProcessXlsxFile({ body } = {}) {
    const { error } = OrderValidator.bulkActionProcessXlsxFile().validate(
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
    } = OrderValidator.bulkActionProcessXlsxFile().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for bulkActionProcessXlsxFile"
      );
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/orders/v2.0/company/${this.config.companyId}/bulk-action/`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.batchId -
   * @summary: Returns failed, processing and successfully processed shipments.
   * @description: Returns failed, processing and successfully processed shipments along with their counts and failed reasons.
   */
  bulkActionDetails({ batchId } = {}) {
    const { error } = OrderValidator.bulkActionDetails().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.bulkActionDetails().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for bulkActionDetails");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v2.0/company/${this.config.companyId}/bulk-action/${batchId}`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.bagId] -
   * @param {string} [arg.channelBagId] -
   * @param {string} [arg.channelId] -
   * @summary:
   * @description:
   */
  getBagById({ bagId, channelBagId, channelId } = {}) {
    const { error } = OrderValidator.getBagById().validate(
      {
        bagId,
        channelBagId,
        channelId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getBagById().validate(
      {
        bagId,
        channelBagId,
        channelId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getBagById");
      console.log(warrning);
    }

    const query_params = {};
    query_params["bag_id"] = bagId;
    query_params["channel_bag_id"] = channelBagId;
    query_params["channel_id"] = channelId;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bag-details/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.bagIds] -
   * @param {string} [arg.shipmentIds] -
   * @param {string} [arg.orderIds] -
   * @param {string} [arg.channelBagIds] -
   * @param {string} [arg.channelShipmentIds] -
   * @param {string} [arg.channelOrderIds] -
   * @param {string} [arg.channelId] -
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @summary:
   * @description:
   */
  getBags({
    bagIds,
    shipmentIds,
    orderIds,
    channelBagIds,
    channelShipmentIds,
    channelOrderIds,
    channelId,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = OrderValidator.getBags().validate(
      {
        bagIds,
        shipmentIds,
        orderIds,
        channelBagIds,
        channelShipmentIds,
        channelOrderIds,
        channelId,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getBags().validate(
      {
        bagIds,
        shipmentIds,
        orderIds,
        channelBagIds,
        channelShipmentIds,
        channelOrderIds,
        channelId,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getBags");
      console.log(warrning);
    }

    const query_params = {};
    query_params["bag_ids"] = bagIds;
    query_params["shipment_ids"] = shipmentIds;
    query_params["order_ids"] = orderIds;
    query_params["channel_bag_ids"] = channelBagIds;
    query_params["channel_shipment_ids"] = channelShipmentIds;
    query_params["channel_order_ids"] = channelOrderIds;
    query_params["channel_id"] = channelId;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bags`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InvalidateShipmentCachePayload} arg.body
   * @summary:
   * @description: Invalidate shipment Cache
   */
  invalidateShipmentCache({ body } = {}) {
    const { error } = OrderValidator.invalidateShipmentCache().validate(
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
    } = OrderValidator.invalidateShipmentCache().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for invalidateShipmentCache");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/update-cache`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {StoreReassign} arg.body
   * @summary:
   * @description: Reassign Location
   */
  reassignLocation({ body } = {}) {
    const { error } = OrderValidator.reassignLocation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.reassignLocation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for reassignLocation");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/store/reassign-internal`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateShipmentLockPayload} arg.body
   * @summary:
   * @description: update shipment lock
   */
  updateShipmentLock({ body } = {}) {
    const { error } = OrderValidator.updateShipmentLock().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.updateShipmentLock().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateShipmentLock");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/entity/lock-manager`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.date] -
   * @summary:
   * @description:
   */
  getAnnouncements({ date } = {}) {
    const { error } = OrderValidator.getAnnouncements().validate(
      {
        date,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getAnnouncements().validate(
      {
        date,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getAnnouncements");
      console.log(warrning);
    }

    const query_params = {};
    query_params["date"] = date;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/announcements`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId -
   * @param {string} [arg.name] -
   * @param {string} [arg.address] -
   * @param {string} [arg.addressType] -
   * @param {string} [arg.pincode] -
   * @param {string} [arg.phone] -
   * @param {string} [arg.email] -
   * @param {string} [arg.landmark] -
   * @param {string} arg.addressCategory -
   * @param {string} [arg.city] -
   * @param {string} [arg.state] -
   * @param {string} [arg.country] -
   * @summary:
   * @description:
   */
  updateAddress({
    shipmentId,
    addressCategory,
    name,
    address,
    addressType,
    pincode,
    phone,
    email,
    landmark,
    city,
    state,
    country,
  } = {}) {
    const { error } = OrderValidator.updateAddress().validate(
      {
        shipmentId,
        addressCategory,
        name,
        address,
        addressType,
        pincode,
        phone,
        email,
        landmark,
        city,
        state,
        country,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.updateAddress().validate(
      {
        shipmentId,
        addressCategory,
        name,
        address,
        addressType,
        pincode,
        phone,
        email,
        landmark,
        city,
        state,
        country,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateAddress");
      console.log(warrning);
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["name"] = name;
    query_params["address"] = address;
    query_params["address_type"] = addressType;
    query_params["pincode"] = pincode;
    query_params["phone"] = phone;
    query_params["email"] = email;
    query_params["landmark"] = landmark;
    query_params["address_category"] = addressCategory;
    query_params["city"] = city;
    query_params["state"] = state;
    query_params["country"] = country;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/delight/update-address`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.caller -
   * @param {string} arg.receiver -
   * @param {string} arg.bagId -
   * @param {string} [arg.callingTo] -
   * @param {string} [arg.callerId] -
   * @summary:
   * @description:
   */
  click2Call({ caller, receiver, bagId, callingTo, callerId } = {}) {
    const { error } = OrderValidator.click2Call().validate(
      {
        caller,
        receiver,
        bagId,
        callingTo,
        callerId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.click2Call().validate(
      {
        caller,
        receiver,
        bagId,
        callingTo,
        callerId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for click2Call");
      console.log(warrning);
    }

    const query_params = {};
    query_params["caller"] = caller;
    query_params["receiver"] = receiver;
    query_params["bag_id"] = bagId;
    query_params["calling_to"] = callingTo;
    query_params["caller_id"] = callerId;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/ninja/click2call`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateShipmentStatusRequest} arg.body
   * @summary:
   * @description: Update shipment status
   */
  updateShipmentStatus({ body } = {}) {
    const { error } = OrderValidator.updateShipmentStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.updateShipmentStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for updateShipmentStatus");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/status-internal`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateOrderPayload} arg.body
   * @summary:
   * @description:
   */
  processManifest({ body } = {}) {
    const { error } = OrderValidator.processManifest().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.processManifest().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for processManifest");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/process-manifest`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DispatchManifest} arg.body
   * @summary:
   * @description:
   */
  dispatchManifest({ body } = {}) {
    const { error } = OrderValidator.dispatchManifest().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.dispatchManifest().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for dispatchManifest");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/dispatch`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary:
   * @description:
   */
  getRoleBasedActions({} = {}) {
    const { error } = OrderValidator.getRoleBasedActions().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getRoleBasedActions().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getRoleBasedActions");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/roles`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.shipmentId] -
   * @param {number} [arg.bagId] -
   * @summary:
   * @description:
   */
  getShipmentHistory({ shipmentId, bagId } = {}) {
    const { error } = OrderValidator.getShipmentHistory().validate(
      {
        shipmentId,
        bagId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getShipmentHistory().validate(
      {
        shipmentId,
        bagId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getShipmentHistory");
      console.log(warrning);
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["bag_id"] = bagId;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/history`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PostShipmentHistory} arg.body
   * @summary:
   * @description:
   */
  postShipmentHistory({ body } = {}) {
    const { error } = OrderValidator.postShipmentHistory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.postShipmentHistory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for postShipmentHistory");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/history`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SendSmsPayload} arg.body
   * @summary:
   * @description:
   */
  sendSmsNinja({ body } = {}) {
    const { error } = OrderValidator.sendSmsNinja().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.sendSmsNinja().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for sendSmsNinja");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/ninja/send-sms`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ManualAssignDPToShipment} arg.body
   * @summary:
   * @description:
   */
  platformManualAssignDPToShipment({ body } = {}) {
    const {
      error,
    } = OrderValidator.platformManualAssignDPToShipment().validate(
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
    } = OrderValidator.platformManualAssignDPToShipment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for platformManualAssignDPToShipment"
      );
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/oms/manual-place-shipment`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateOrderPayload} arg.body
   * @summary:
   * @description:
   */
  updatePackagingDimensions({ body } = {}) {
    const { error } = OrderValidator.updatePackagingDimensions().validate(
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
    } = OrderValidator.updatePackagingDimensions().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log(
        "Parameter Validation warrnings for updatePackagingDimensions"
      );
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/update-packaging-dimension`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateOrderAPI} arg.body
   * @summary:
   * @description:
   */
  createOrder({ body } = {}) {
    const { error } = OrderValidator.createOrder().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.createOrder().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createOrder");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/create-order`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary:
   * @description: getChannelConfig
   */
  getChannelConfig({} = {}) {
    const { error } = OrderValidator.getChannelConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getChannelConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getChannelConfig");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/order-config`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateChannelConfigData} arg.body
   * @summary:
   * @description: createChannelConfig
   */
  createChannelConfig({ body } = {}) {
    const { error } = OrderValidator.createChannelConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.createChannelConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for createChannelConfig");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/order-config`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UploadConsent} arg.body
   * @summary:
   * @description:
   */
  uploadConsent({ body } = {}) {
    const { error } = OrderValidator.uploadConsent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.uploadConsent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for uploadConsent");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/uploadConsent`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PlatformOrderUpdate} arg.body
   * @summary:
   * @description:
   */
  orderUpdate({ body } = {}) {
    const { error } = OrderValidator.orderUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.orderUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for orderUpdate");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/order/validation`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderStatus} arg.body
   * @summary:
   * @description:
   */
  checkOrderStatus({ body } = {}) {
    const { error } = OrderValidator.checkOrderStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.checkOrderStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for checkOrderStatus");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/debug/order_status`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary:
   * @description:
   */
  sendSmsNinjaPlatform({} = {}) {
    const { error } = OrderValidator.sendSmsNinjaPlatform().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.sendSmsNinjaPlatform().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for sendSmsNinjaPlatform");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/bag/state/transition`,
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = Order;
