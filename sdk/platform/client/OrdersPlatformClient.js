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
    const { error } = OrdersValidator.getShipments().validate(
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
   * @param {string} arg.channelShipmentId -
   * @param {string} [arg.orderingCompanyId] -
   * @param {string} [arg.requestByExt] -
   * @summary:
   * @description:
   */
  getShipmentById({ channelShipmentId, orderingCompanyId, requestByExt } = {}) {
    const { error } = OrdersValidator.getShipmentById().validate(
      {
        channelShipmentId,
        orderingCompanyId,
        requestByExt,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["ordering_company_id"] = orderingCompanyId;
    query_params["request_by_ext"] = requestByExt;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipment-details/${channelShipmentId}`,
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
    const { error } = OrdersValidator.getOrderById().validate(
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
    const { error } = OrdersValidator.getLaneConfig().validate(
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
        customMeta,
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
    const { error } = OrdersValidator.getMetricCount().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
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
    const { error } = OrdersValidator.getfilters().validate(
      {
        view,
        groupEntity,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
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
    const { error } = OrdersValidator.createShipmentReport().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
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
    const { error } = OrdersValidator.getReportsShipmentListing().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
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
    const { error } = OrdersValidator.upsertJioCode().validate(
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
    const { error } = OrdersValidator.getBulkInvoice().validate(
      {
        batchId,
        docType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
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
    const { error } = OrdersValidator.getBulkInvoiceLabel().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
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
    const { error } = OrdersValidator.getBulkShipmentExcelFile().validate(
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
    const { error } = OrdersValidator.getBulkList().validate(
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
   * @param {string} [arg.status] -
   * @param {number} [arg.storeId] -
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.searchValue] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @summary:
   * @description:
   */
  getManifestList({
    status,
    storeId,
    pageNo,
    pageSize,
    searchValue,
    fromDate,
    toDate,
  } = {}) {
    const { error } = OrdersValidator.getManifestList().validate(
      {
        status,
        storeId,
        pageNo,
        pageSize,
        searchValue,
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["status"] = status;
    query_params["store_id"] = storeId;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["search_value"] = searchValue;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/generated-manifests`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.manifestId -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {number} arg.storeId -
   * @param {number} [arg.page] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.lane] -
   * @param {number} [arg.dpIds] -
   * @param {string} [arg.searchType] -
   * @param {string} [arg.searchValue] -
   * @summary:
   * @description:
   */
  getManifestDetailsWithShipments({
    manifestId,
    storeId,
    fromDate,
    toDate,
    page,
    pageSize,
    lane,
    dpIds,
    searchType,
    searchValue,
  } = {}) {
    const {
      error,
    } = OrdersValidator.getManifestDetailsWithShipments().validate(
      {
        manifestId,
        storeId,
        fromDate,
        toDate,
        page,
        pageSize,
        lane,
        dpIds,
        searchType,
        searchValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["manifest_id"] = manifestId;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["store_id"] = storeId;
    query_params["page"] = page;
    query_params["page_size"] = pageSize;
    query_params["lane"] = lane;
    query_params["dp_ids"] = dpIds;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/manifest-details`,
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
    const { error } = OrdersValidator.getBulkActionFailedReport().validate(
      {
        batchId,
        reportType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
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
    const { error } = OrdersValidator.getShipmentReasons().validate(
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
    const { error } = OrdersValidator.bulkActionProcessXlsxFile().validate(
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
    const { error } = OrdersValidator.bulkActionDetails().validate(
      {
        batchId,
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
    const { error } = OrdersValidator.getBagById().validate(
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
    const { error } = OrdersValidator.getBags().validate(
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
}

module.exports = Orders;
