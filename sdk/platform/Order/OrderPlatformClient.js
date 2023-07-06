const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const OrderValidator = require("./OrderPlatformValidator");
const OrderModel = require("./OrderPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Order {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderStatus} arg.body
   * @returns {Promise<OrderStatusResult>} - Success response
   * @summary:
   * @description:
   */
  async checkOrderStatus({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for checkOrderStatus",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/debug/order_status`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.OrderStatusResult().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for checkOrderStatus",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.caller - Call Number
   * @param {string} arg.receiver - Receiver Number
   * @param {string} arg.bagId - Bag Id for the query
   * @param {string} [arg.callerId] - Caller Id
   * @param {string} [arg.method] - Provider Method to Call
   * @returns {Promise<Click2CallResponse>} - Success response
   * @summary:
   * @description:
   */
  async click2Call({
    caller,
    receiver,
    bagId,

    callerId,
    method,
  } = {}) {
    const { error } = OrderValidator.click2Call().validate(
      {
        caller,
        receiver,
        bagId,

        callerId,
        method,
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

        callerId,
        method,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for click2Call",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["caller"] = caller;
    query_params["receiver"] = receiver;
    query_params["bag_id"] = bagId;
    query_params["caller_id"] = callerId;
    query_params["method"] = method;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/ninja/click2call`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.Click2CallResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for click2Call",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateChannelConfigData} arg.body
   * @returns {Promise<CreateChannelConfigResponse>} - Success response
   * @summary:
   * @description: createChannelConfig
   */
  async createChannelConfig({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createChannelConfig",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/order-config`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.CreateChannelConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createChannelConfig",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateOrderAPI} arg.body
   * @returns {Promise<CreateOrderResponse>} - Success response
   * @summary:
   * @description:
   */
  async createOrder({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createOrder",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/create-order`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.CreateOrderResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createOrder",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DispatchManifest} arg.body
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary:
   * @description:
   */
  async dispatchManifest({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for dispatchManifest",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/dispatch`,
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = OrderModel.SuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for dispatchManifest",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.templateSlug] - Slug name of template to be downloaded
   * @returns {Promise<FileResponse>} - Success response
   * @summary:
   * @description:
   */
  async downloadBulkActionTemplate({ templateSlug } = {}) {
    const { error } = OrderValidator.downloadBulkActionTemplate().validate(
      {
        templateSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.downloadBulkActionTemplate().validate(
      {
        templateSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for downloadBulkActionTemplate",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["template_slug"] = templateSlug;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bulk-action/download-seller-templates`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = OrderModel.FileResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for downloadBulkActionTemplate",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.date] - Date On which the announcement is Active
   *   (Date should in ISO Datetime format IST Time)
   * @returns {Promise<AnnouncementsResponse>} - Success response
   * @summary:
   * @description:
   */
  async getAnnouncements({ date } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAnnouncements",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["date"] = date;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/announcements`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.AnnouncementsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAnnouncements",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.bagId] - Id of bag
   * @param {string} [arg.channelBagId] - Id of application bag
   * @param {string} [arg.channelId] - Id of application
   * @returns {Promise<BagDetailsPlatformResponse>} - Success response
   * @summary:
   * @description:
   */
  async getBagById({ bagId, channelBagId, channelId } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getBagById",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["bag_id"] = bagId;
    query_params["channel_bag_id"] = channelBagId;
    query_params["channel_id"] = channelId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bag-details/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.BagDetailsPlatformResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getBagById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.bagIds] - Comma separated values of bag ids
   * @param {string} [arg.shipmentIds] - Comma separated values of shipment ids
   * @param {string} [arg.orderIds] - Comma separated values of order ids
   * @param {string} [arg.channelBagIds] - Comma separated values of app bag ids
   * @param {string} [arg.channelShipmentIds] - Comma separated values of app
   *   shipment ids
   * @param {string} [arg.channelOrderIds] - Comma separated values of app order ids
   * @param {string} [arg.channelId] - Comma separated values of app ids
   * @param {number} [arg.pageNo] - Page number for paginated data
   * @param {number} [arg.pageSize] - Page size of data received per page
   * @returns {Promise<GetBagsPlatformResponse>} - Success response
   * @summary:
   * @description:
   */
  async getBags({
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getBags",
      });
      Logger({ level: "WARN", message: warrning });
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bags`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.GetBagsPlatformResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getBags",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<BulkActionTemplateResponse>} - Success response
   * @summary:
   * @description:
   */
  async getBulkActionTemplate({} = {}) {
    const { error } = OrderValidator.getBulkActionTemplate().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getBulkActionTemplate().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getBulkActionTemplate",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/bulk-action/get-seller-templates`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.BulkActionTemplateResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getBulkActionTemplate",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.salesChannels] - Comma separated values of sales channel ids
   * @param {string} [arg.dpIds] - Comma separated values of delivery partner ids
   * @param {string} [arg.fromDate] - Start Date in DD-MM-YYYY format
   * @param {string} [arg.toDate] - End Date in DD-MM-YYYY format
   * @param {string} [arg.stores] - Comma separated values of store ids
   * @param {string} [arg.tags] - Comma separated values of tags
   * @param {string} [arg.bagStatus] - Comma separated values of bag statuses
   * @param {string} [arg.paymentMethods] - Comma separated values of payment methods
   * @param {string} [arg.fileType] - File type to be downloaded
   * @param {number} [arg.timeToDispatch] - Sla breached or not breached
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @returns {Promise<FileResponse>} - Success response
   * @summary:
   * @description:
   */
  async getBulkShipmentExcelFile({
    salesChannels,
    dpIds,
    fromDate,
    toDate,
    stores,
    tags,
    bagStatus,
    paymentMethods,
    fileType,
    timeToDispatch,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = OrderValidator.getBulkShipmentExcelFile().validate(
      {
        salesChannels,
        dpIds,
        fromDate,
        toDate,
        stores,
        tags,
        bagStatus,
        paymentMethods,
        fileType,
        timeToDispatch,
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
    } = OrderValidator.getBulkShipmentExcelFile().validate(
      {
        salesChannels,
        dpIds,
        fromDate,
        toDate,
        stores,
        tags,
        bagStatus,
        paymentMethods,
        fileType,
        timeToDispatch,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getBulkShipmentExcelFile",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["sales_channels"] = salesChannels;
    query_params["dp_ids"] = dpIds;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["stores"] = stores;
    query_params["tags"] = tags;
    query_params["bag_status"] = bagStatus;
    query_params["payment_methods"] = paymentMethods;
    query_params["file_type"] = fileType;
    query_params["time_to_dispatch"] = timeToDispatch;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/generate/file`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = OrderModel.FileResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getBulkShipmentExcelFile",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<CreateChannelConfigData>} - Success response
   * @summary:
   * @description: getChannelConfig
   */
  async getChannelConfig({} = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getChannelConfig",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/order-config`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.CreateChannelConfigData().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getChannelConfig",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.superLane] - Name of lane for which data is to be fetched
   * @param {string} [arg.groupEntity] - Name of group entity
   * @param {string} [arg.fromDate] - Start Date in DD-MM-YYYY format
   * @param {string} [arg.toDate] - End Date in DD-MM-YYYY format
   * @param {string} [arg.dpIds] - Comma separated values of delivery partner ids
   * @param {string} [arg.stores] - Comma separated values of store ids
   * @param {string} [arg.salesChannels] -
   * @param {string} [arg.paymentMode] - Comma separated values of payment modes
   * @param {string} [arg.bagStatus] - Comma separated values of bag statuses
   * @param {string} [arg.searchType] -
   * @param {string} [arg.searchValue] -
   * @param {string} [arg.tags] -
   * @param {string} [arg.timeToDispatch] -
   * @param {string} [arg.paymentMethods] -
   * @returns {Promise<LaneConfigResponse>} - Success response
   * @summary:
   * @description:
   */
  async getLaneConfig({
    superLane,
    groupEntity,
    fromDate,
    toDate,
    dpIds,
    stores,
    salesChannels,
    paymentMode,
    bagStatus,
    searchType,
    searchValue,
    tags,
    timeToDispatch,
    paymentMethods,
  } = {}) {
    const { error } = OrderValidator.getLaneConfig().validate(
      {
        superLane,
        groupEntity,
        fromDate,
        toDate,
        dpIds,
        stores,
        salesChannels,
        paymentMode,
        bagStatus,
        searchType,
        searchValue,
        tags,
        timeToDispatch,
        paymentMethods,
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
        salesChannels,
        paymentMode,
        bagStatus,
        searchType,
        searchValue,
        tags,
        timeToDispatch,
        paymentMethods,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLaneConfig",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["super_lane"] = superLane;
    query_params["group_entity"] = groupEntity;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["sales_channels"] = salesChannels;
    query_params["payment_mode"] = paymentMode;
    query_params["bag_status"] = bagStatus;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;
    query_params["tags"] = tags;
    query_params["time_to_dispatch"] = timeToDispatch;
    query_params["payment_methods"] = paymentMethods;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/lane-config/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.LaneConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLaneConfig",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @returns {Promise<OrderDetailsResponse>} - Success response
   * @summary:
   * @description:
   */
  async getOrderById({ orderId } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOrderById",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/order-details`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.OrderDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOrderById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] - Lane refers to a section where orders are
   *   assigned, indicating its grouping
   * @param {string} [arg.searchType] - Search_type refers to the field that
   *   will be used as the target for the search operation
   * @param {string} [arg.bagStatus] - Bag_status refers to status of the
   *   entity. Filters orders based on the status.
   * @param {string} [arg.timeToDispatch] - Time_to_dispatch refers to
   *   estimated SLA time.
   * @param {string} [arg.paymentMethods] -
   * @param {string} [arg.tags] - Tags refers to additional descriptive labels
   *   associated with the order
   * @param {string} [arg.searchValue] - Search_value is matched against the
   *   field specified by the search_type
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {string} [arg.dpIds] - Delivery Partner IDs to which shipments are assigned.
   * @param {string} [arg.stores] -
   * @param {string} [arg.salesChannels] -
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isPrioritySort] -
   * @param {string} [arg.customMeta] -
   * @returns {Promise<OrderListingResponse>} - Success response
   * @summary:
   * @description:
   */
  async getOrders({
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
    salesChannels,
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
        salesChannels,
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
        salesChannels,
        pageNo,
        pageSize,
        isPrioritySort,
        customMeta,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOrders",
      });
      Logger({ level: "WARN", message: warrning });
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
    query_params["sales_channels"] = salesChannels;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_priority_sort"] = isPrioritySort;
    query_params["custom_meta"] = customMeta;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/orders-listing`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.OrderListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOrders",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<GetActionsResponse>} - Success response
   * @summary:
   * @description:
   */
  async getRoleBasedActions({} = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getRoleBasedActions",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/roles`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.GetActionsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getRoleBasedActions",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.channelShipmentId] - App Shipment Id
   * @param {string} [arg.shipmentId] - Shipment Id
   * @returns {Promise<ShipmentInfoResponse>} - Success response
   * @summary:
   * @description:
   */
  async getShipmentById({ channelShipmentId, shipmentId } = {}) {
    const { error } = OrderValidator.getShipmentById().validate(
      {
        channelShipmentId,
        shipmentId,
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
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getShipmentById",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["channel_shipment_id"] = channelShipmentId;
    query_params["shipment_id"] = shipmentId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipment-details`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.ShipmentInfoResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getShipmentById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.shipmentId] - Shipment Id
   * @param {number} [arg.bagId] - Bag/Product Id
   * @returns {Promise<ShipmentHistoryResponse>} - Success response
   * @summary:
   * @description:
   */
  async getShipmentHistory({ shipmentId, bagId } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getShipmentHistory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["bag_id"] = bagId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/history`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.ShipmentHistoryResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getShipmentHistory",
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
   * @param {string} arg.bagId - ID of the bag. An order may contain multiple
   *   items and may get divided into one or more shipment, each having its own ID.
   * @param {string} arg.state - State for which reasons are required.
   * @returns {Promise<PlatformShipmentReasonsResponse>} - Success response
   * @summary: Get reasons behind full or partial cancellation of a shipment
   * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
   */
  async getShipmentReasons({ shipmentId, bagId, state } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getShipmentReasons",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipments/${shipmentId}/bags/${bagId}/state/${state}/reasons`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.PlatformShipmentReasonsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getShipmentReasons",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] - Name of lane for which data is to be fetched
   * @param {string} [arg.bagStatus] - Comma separated values of bag statuses
   * @param {boolean} [arg.statusOverrideLane] - Use this flag to fetch by
   *   bag_status and override lane
   * @param {string} [arg.timeToDispatch] -
   * @param {string} [arg.searchType] - Search type key
   * @param {string} [arg.searchValue] - Search type value
   * @param {string} [arg.fromDate] - Start Date in DD-MM-YYYY format
   * @param {string} [arg.toDate] - End Date in DD-MM-YYYY format
   * @param {string} [arg.dpIds] - Comma separated values of delivery partner ids
   * @param {string} [arg.stores] - Comma separated values of store ids
   * @param {string} [arg.salesChannels] - Comma separated values of sales channel ids
   * @param {number} [arg.pageNo] - Page number for paginated data
   * @param {number} [arg.pageSize] - Page size of data received per page
   * @param {boolean} [arg.fetchActiveShipment] - Flag to fetch active shipments
   * @param {boolean} [arg.excludeLockedShipments] - Flag to fetch locked shipments
   * @param {string} [arg.paymentMethods] - Comma separated values of payment methods
   * @param {string} [arg.channelShipmentId] - App Shipment Id
   * @param {string} [arg.channelOrderId] - App Order Id
   * @param {string} [arg.customMeta] -
   * @param {string} [arg.orderingChannel] -
   * @param {string} [arg.companyAffiliateTag] -
   * @param {string} [arg.platformUserId] -
   * @returns {Promise<ShipmentInternalPlatformViewResponse>} - Success response
   * @summary:
   * @description:
   */
  async getShipments({
    lane,
    bagStatus,
    statusOverrideLane,
    timeToDispatch,
    searchType,
    searchValue,
    fromDate,
    toDate,
    dpIds,
    stores,
    salesChannels,
    pageNo,
    pageSize,
    fetchActiveShipment,
    excludeLockedShipments,
    paymentMethods,
    channelShipmentId,
    channelOrderId,
    customMeta,
    orderingChannel,
    companyAffiliateTag,
    platformUserId,
  } = {}) {
    const { error } = OrderValidator.getShipments().validate(
      {
        lane,
        bagStatus,
        statusOverrideLane,
        timeToDispatch,
        searchType,
        searchValue,
        fromDate,
        toDate,
        dpIds,
        stores,
        salesChannels,
        pageNo,
        pageSize,
        fetchActiveShipment,
        excludeLockedShipments,
        paymentMethods,
        channelShipmentId,
        channelOrderId,
        customMeta,
        orderingChannel,
        companyAffiliateTag,
        platformUserId,
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
        bagStatus,
        statusOverrideLane,
        timeToDispatch,
        searchType,
        searchValue,
        fromDate,
        toDate,
        dpIds,
        stores,
        salesChannels,
        pageNo,
        pageSize,
        fetchActiveShipment,
        excludeLockedShipments,
        paymentMethods,
        channelShipmentId,
        channelOrderId,
        customMeta,
        orderingChannel,
        companyAffiliateTag,
        platformUserId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getShipments",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["lane"] = lane;
    query_params["bag_status"] = bagStatus;
    query_params["status_override_lane"] = statusOverrideLane;
    query_params["time_to_dispatch"] = timeToDispatch;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["sales_channels"] = salesChannels;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["fetch_active_shipment"] = fetchActiveShipment;
    query_params["exclude_locked_shipments"] = excludeLockedShipments;
    query_params["payment_methods"] = paymentMethods;
    query_params["channel_shipment_id"] = channelShipmentId;
    query_params["channel_order_id"] = channelOrderId;
    query_params["custom_meta"] = customMeta;
    query_params["ordering_channel"] = orderingChannel;
    query_params["company_affiliate_tag"] = companyAffiliateTag;
    query_params["platform_user_id"] = platformUserId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/shipments-listing`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.ShipmentInternalPlatformViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getShipments",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<BagStateTransitionMap>} - Success response
   * @summary:
   * @description:
   */
  async getStateTransitionMap({} = {}) {
    const { error } = OrderValidator.getStateTransitionMap().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderValidator.getStateTransitionMap().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getStateTransitionMap",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/bag/state/transition`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.BagStateTransitionMap().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getStateTransitionMap",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.view - Name of view
   * @param {string} [arg.groupEntity] - Name of group entity
   * @returns {Promise<FiltersResponse>} - Success response
   * @summary:
   * @description:
   */
  async getfilters({ view, groupEntity } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getfilters",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["view"] = view;
    query_params["group_entity"] = groupEntity;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/filter-listing`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = OrderModel.FiltersResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getfilters",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InvalidateShipmentCachePayload} arg.body
   * @returns {Promise<InvalidateShipmentCacheResponse>} - Success response
   * @summary:
   * @description: Invalidate shipment Cache
   */
  async invalidateShipmentCache({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for invalidateShipmentCache",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/update-cache`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.InvalidateShipmentCacheResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for invalidateShipmentCache",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PlatformOrderUpdate} arg.body
   * @returns {Promise<ResponseDetail>} - Success response
   * @summary:
   * @description:
   */
  async orderUpdate({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for orderUpdate",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/order/validation`,
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = OrderModel.ResponseDetail().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for orderUpdate",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PostShipmentHistory} arg.body
   * @returns {Promise<ShipmentHistoryResponse>} - Success response
   * @summary:
   * @description:
   */
  async postShipmentHistory({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for postShipmentHistory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/history`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.ShipmentHistoryResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for postShipmentHistory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateOrderPayload} arg.body
   * @returns {Promise<CreateOrderResponse>} - Success response
   * @summary:
   * @description:
   */
  async processManifest({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for processManifest",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/process-manifest`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.CreateOrderResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for processManifest",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {StoreReassign} arg.body
   * @returns {Promise<StoreReassignResponse>} - Success response
   * @summary:
   * @description: Reassign Location
   */
  async reassignLocation({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for reassignLocation",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/store/reassign-internal`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.StoreReassignResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for reassignLocation",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SendSmsPayload} arg.body
   * @returns {Promise<OrderStatusResult>} - Success response
   * @summary:
   * @description:
   */
  async sendSmsNinja({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for sendSmsNinja",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/ninja/send-sms`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.OrderStatusResult().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for sendSmsNinja",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
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
   * @returns {Promise<BaseResponse>} - Success response
   * @summary:
   * @description:
   */
  async updateAddress({
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateAddress",
      });
      Logger({ level: "WARN", message: warrning });
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/delight/update-address`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = OrderModel.BaseResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateAddress",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdatePackagingDimensionsPayload} arg.body
   * @returns {Promise<UpdatePackagingDimensionsResponse>} - Success response
   * @summary:
   * @description:
   */
  async updatePackagingDimensions({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updatePackagingDimensions",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/update-packaging-dimension`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.UpdatePackagingDimensionsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updatePackagingDimensions",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateShipmentLockPayload} arg.body
   * @returns {Promise<UpdateShipmentLockResponse>} - Success response
   * @summary:
   * @description: update shipment/bag lock and check status
   */
  async updateShipmentLock({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateShipmentLock",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/entity/lock-manager`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.UpdateShipmentLockResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateShipmentLock",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateShipmentStatusRequest} arg.body
   * @returns {Promise<UpdateShipmentStatusResponseBody>} - Success response
   * @summary:
   * @description: This API is for Shipment State transition or Shipment data update or both below example is for partial state transition with data update
   */
  async updateShipmentStatus({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateShipmentStatus",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/status-internal`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderModel.UpdateShipmentStatusResponseBody().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateShipmentStatus",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UploadConsent} arg.body
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary:
   * @description:
   */
  async uploadConsent({ body } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for uploadConsent",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/uploadConsent`,
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = OrderModel.SuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for uploadConsent",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Order;
