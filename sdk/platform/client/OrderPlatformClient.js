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
   * @param {boolean} [arg.excludeLockedShipments] -
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
    excludeLockedShipments,
  } = {}) {
    const { error } = OrderValidator.getShipmentList().validate(
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
        excludeLockedShipments,
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
    query_params["exclude_locked_shipments"] = excludeLockedShipments;

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
   * @param {string} arg.shipmentId -
   * @param {string} [arg.orderingCompanyId] -
   * @param {string} [arg.requestByExt] -
   * @summary:
   * @description:
   */
  getShipmentDetails({ shipmentId, orderingCompanyId, requestByExt } = {}) {
    const { error } = OrderValidator.getShipmentDetails().validate(
      {
        shipmentId,
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
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipment-details/${shipmentId}`,
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
  getOrderShipmentDetails({ orderId } = {}) {
    const { error } = OrderValidator.getOrderShipmentDetails().validate(
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
    const { error } = OrderValidator.getOrders().validate(
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
   * @summary:
   * @description:
   */
  getBulkInvoice({ batchId } = {}) {
    const { error } = OrderValidator.getBulkInvoice().validate(
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
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bulk-action/invoice`,
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
   * @param {CreateOrderPayload} arg.body
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
   * @param {StatusUpdateInternalRequest} arg.body
   * @summary:
   * @description: Reassign Location
   */
  statusUpdateInternalV4({ body } = {}) {
    const { error } = OrderValidator.statusUpdateInternalV4().validate(
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
}

module.exports = Order;
