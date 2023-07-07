const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const OrderPlatformValidator = require("./OrderPlatformValidator");
const OrderPlatformModel = require("./OrderPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Order {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {OrderPlatformValidator.AttachOrderUserParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.AttachOrderUserResponse>} - Success response
   * @name attachOrderUser
   * @summary:
   * @description:
   */
  async attachOrderUser({ body } = {}) {
    const { error } = OrderPlatformValidator.attachOrderUser().validate(
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
    } = OrderPlatformValidator.attachOrderUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > attachOrderUser \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/user/attach`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.AttachOrderUserResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > attachOrderUser \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.CheckOrderStatusParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
   * @name checkOrderStatus
   * @summary:
   * @description:
   */
  async checkOrderStatus({ body } = {}) {
    const { error } = OrderPlatformValidator.checkOrderStatus().validate(
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
    } = OrderPlatformValidator.checkOrderStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > checkOrderStatus \n ${warrning}`,
      });
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
    } = OrderPlatformModel.OrderStatusResult().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > checkOrderStatus \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.Click2CallParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.Click2CallResponse>} - Success response
   * @name click2Call
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
    const { error } = OrderPlatformValidator.click2Call().validate(
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
    const { error: warrning } = OrderPlatformValidator.click2Call().validate(
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
        message: `Parameter Validation warrnings for platform > Order > click2Call \n ${warrning}`,
      });
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
    } = OrderPlatformModel.Click2CallResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > click2Call \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.CreateOrderParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.CreateOrderResponse>} - Success response
   * @name createOrder
   * @summary:
   * @description:
   */
  async createOrder({ body } = {}) {
    const { error } = OrderPlatformValidator.createOrder().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.createOrder().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > createOrder \n ${warrning}`,
      });
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
    } = OrderPlatformModel.CreateOrderResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > createOrder \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.CreateShipmentReportParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.Success>} - Success response
   * @name createShipmentReport
   * @summary:
   * @description:
   */
  async createShipmentReport({ fromDate, toDate } = {}) {
    const { error } = OrderPlatformValidator.createShipmentReport().validate(
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
    const {
      error: warrning,
    } = OrderPlatformValidator.createShipmentReport().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > createShipmentReport \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/reports/shipment`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = OrderPlatformModel.Success().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > createShipmentReport \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.DispatchManifestParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
   * @name dispatchManifest
   * @summary:
   * @description:
   */
  async dispatchManifest({ body } = {}) {
    const { error } = OrderPlatformValidator.dispatchManifest().validate(
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
    } = OrderPlatformValidator.dispatchManifest().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > dispatchManifest \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = OrderPlatformModel.SuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > dispatchManifest \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.DownloadBulkActionTemplateParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
   * @name downloadBulkActionTemplate
   * @summary:
   * @description:
   */
  async downloadBulkActionTemplate({ templateSlug } = {}) {
    const {
      error,
    } = OrderPlatformValidator.downloadBulkActionTemplate().validate(
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
    } = OrderPlatformValidator.downloadBulkActionTemplate().validate(
      {
        templateSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > downloadBulkActionTemplate \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["template_slug"] = templateSlug;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/bulk-action/download-seller-templates`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.FileResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > downloadBulkActionTemplate \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.FetchCreditBalanceDetailParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>}
   *   - Success response
   *
   * @name fetchCreditBalanceDetail
   * @summary:
   * @description:
   */
  async fetchCreditBalanceDetail({ body } = {}) {
    const {
      error,
    } = OrderPlatformValidator.fetchCreditBalanceDetail().validate(
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
    } = OrderPlatformValidator.fetchCreditBalanceDetail().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > fetchCreditBalanceDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/customer-credit-balance`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.FetchCreditBalanceResponsePayload().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > fetchCreditBalanceDetail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.FetchRefundModeConfigParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.RefundModeConfigResponsePayload>} -
   *   Success response
   * @name fetchRefundModeConfig
   * @summary:
   * @description:
   */
  async fetchRefundModeConfig({ body } = {}) {
    const { error } = OrderPlatformValidator.fetchRefundModeConfig().validate(
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
    } = OrderPlatformValidator.fetchRefundModeConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > fetchRefundModeConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/refund-mode-config`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.RefundModeConfigResponsePayload().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > fetchRefundModeConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>} -
   *   Success response
   * @name generatePOSReceiptByOrderId
   * @summary:
   * @description:
   */
  async generatePOSReceiptByOrderId({
    orderId,
    shipmentId,
    documentType,
  } = {}) {
    const {
      error,
    } = OrderPlatformValidator.generatePOSReceiptByOrderId().validate(
      {
        orderId,
        shipmentId,
        documentType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.generatePOSReceiptByOrderId().validate(
      {
        orderId,
        shipmentId,
        documentType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > generatePOSReceiptByOrderId \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["document_type"] = documentType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders/${orderId}/generate/pos-receipt`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.GeneratePosOrderReceiptResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > generatePOSReceiptByOrderId \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetAnnouncementsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.AnnouncementsResponse>} - Success response
   * @name getAnnouncements
   * @summary:
   * @description:
   */
  async getAnnouncements({ date } = {}) {
    const { error } = OrderPlatformValidator.getAnnouncements().validate(
      {
        date,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getAnnouncements().validate(
      {
        date,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getAnnouncements \n ${warrning}`,
      });
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
    } = OrderPlatformModel.AnnouncementsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getAnnouncements \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetAssetByShipmentIdsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ResponseGetAssetShipment>} - Success response
   * @name getAssetByShipmentIds
   * @summary: Get Invoice or Label or Pos of a shipment
   * @description: Use this API to retrieve shipments invoice, label and pos.
   */
  async getAssetByShipmentIds({ shipmentIds, invoice, expiresIn } = {}) {
    const { error } = OrderPlatformValidator.getAssetByShipmentIds().validate(
      {
        shipmentIds,
        invoice,
        expiresIn,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getAssetByShipmentIds().validate(
      {
        shipmentIds,
        invoice,
        expiresIn,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getAssetByShipmentIds \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["shipment_ids"] = shipmentIds;
    query_params["invoice"] = invoice;
    query_params["expires_in"] = expiresIn;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/shipments-invoice`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.ResponseGetAssetShipment().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getAssetByShipmentIds \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetBagByIdParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.BagDetailsPlatformResponse>} -
   *   Success response
   * @name getBagById
   * @summary:
   * @description:
   */
  async getBagById({ bagId, channelBagId, channelId } = {}) {
    const { error } = OrderPlatformValidator.getBagById().validate(
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
    const { error: warrning } = OrderPlatformValidator.getBagById().validate(
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
        message: `Parameter Validation warrnings for platform > Order > getBagById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["bag_id"] = bagId;
    query_params["channel_bag_id"] = channelBagId;
    query_params["channel_id"] = channelId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/bag-details/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.BagDetailsPlatformResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getBagById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetBagsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponse>} - Success response
   * @name getBags
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
    const { error } = OrderPlatformValidator.getBags().validate(
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
    const { error: warrning } = OrderPlatformValidator.getBags().validate(
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
        message: `Parameter Validation warrnings for platform > Order > getBags \n ${warrning}`,
      });
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
      `/service/platform/order/v1.0/company/${this.config.companyId}/bags`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.GetBagsPlatformResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getBags \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetBulkActionTemplateParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.BulkActionTemplateResponse>} -
   *   Success response
   * @name getBulkActionTemplate
   * @summary:
   * @description:
   */
  async getBulkActionTemplate({} = {}) {
    const { error } = OrderPlatformValidator.getBulkActionTemplate().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getBulkActionTemplate().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getBulkActionTemplate \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/bulk-action/get-seller-templates`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.BulkActionTemplateResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getBulkActionTemplate \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetBulkShipmentExcelFileParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
   * @name getBulkShipmentExcelFile
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
    const {
      error,
    } = OrderPlatformValidator.getBulkShipmentExcelFile().validate(
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
    } = OrderPlatformValidator.getBulkShipmentExcelFile().validate(
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
        message: `Parameter Validation warrnings for platform > Order > getBulkShipmentExcelFile \n ${warrning}`,
      });
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
      `/service/platform/order/v1.0/company/${this.config.companyId}/generate/file`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.FileResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getBulkShipmentExcelFile \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetLaneConfigParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.LaneConfigResponse>} - Success response
   * @name getLaneConfig
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
    myOrders,
  } = {}) {
    const { error } = OrderPlatformValidator.getLaneConfig().validate(
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
        myOrders,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getLaneConfig().validate(
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
        myOrders,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getLaneConfig \n ${warrning}`,
      });
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
    query_params["my_orders"] = myOrders;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/lane-config/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.LaneConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getLaneConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetManifestDetailsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ManifestDetails>} - Success response
   * @name getManifestDetails
   * @summary:
   * @description:
   */
  async getManifestDetails({
    manifestId,
    status,
    toDate,
    fromDate,
    searchType,
    searchValue,
    dpIds,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = OrderPlatformValidator.getManifestDetails().validate(
      {
        manifestId,
        status,
        toDate,
        fromDate,
        searchType,
        searchValue,
        dpIds,
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
    } = OrderPlatformValidator.getManifestDetails().validate(
      {
        manifestId,
        status,
        toDate,
        fromDate,
        searchType,
        searchValue,
        dpIds,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getManifestDetails \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["manifest_id"] = manifestId;
    query_params["status"] = status;
    query_params["to_date"] = toDate;
    query_params["from_date"] = fromDate;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;
    query_params["dp_ids"] = dpIds;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/details`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.ManifestDetails().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getManifestDetails \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetManifestShipmentsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ManifestShipmentListing>} - Success response
   * @name getManifestShipments
   * @summary:
   * @description:
   */
  async getManifestShipments({
    dpIds,
    stores,
    toDate,
    fromDate,
    dpName,
    salesChannels,
    searchType,
    searchValue,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = OrderPlatformValidator.getManifestShipments().validate(
      {
        dpIds,
        stores,
        toDate,
        fromDate,
        dpName,
        salesChannels,
        searchType,
        searchValue,
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
    } = OrderPlatformValidator.getManifestShipments().validate(
      {
        dpIds,
        stores,
        toDate,
        fromDate,
        dpName,
        salesChannels,
        searchType,
        searchValue,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getManifestShipments \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["dp_ids"] = dpIds;
    query_params["stores"] = stores;
    query_params["to_date"] = toDate;
    query_params["from_date"] = fromDate;
    query_params["dp_name"] = dpName;
    query_params["sales_channels"] = salesChannels;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/shipments-listing`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.ManifestShipmentListing().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getManifestShipments \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetManifestfiltersParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ManifestFiltersResponse>} - Success response
   * @name getManifestfilters
   * @summary:
   * @description:
   */
  async getManifestfilters({ view } = {}) {
    const { error } = OrderPlatformValidator.getManifestfilters().validate(
      {
        view,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getManifestfilters().validate(
      {
        view,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getManifestfilters \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["view"] = view;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/filter/listing`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.ManifestFiltersResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getManifestfilters \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetManifestsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ManifestList>} - Success response
   * @name getManifests
   * @summary:
   * @description:
   */
  async getManifests({
    status,
    toDate,
    fromDate,
    searchValue,
    dpIds,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = OrderPlatformValidator.getManifests().validate(
      {
        status,
        toDate,
        fromDate,
        searchValue,
        dpIds,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getManifests().validate(
      {
        status,
        toDate,
        fromDate,
        searchValue,
        dpIds,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getManifests \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["status"] = status;
    query_params["to_date"] = toDate;
    query_params["from_date"] = fromDate;
    query_params["search_value"] = searchValue;
    query_params["dp_ids"] = dpIds;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/manifest/listing`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.ManifestList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getManifests \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetMetricCountParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.MetricCountResponse>} - Success response
   * @name getMetricCount
   * @summary:
   * @description:
   */
  async getMetricCount({ fromDate, toDate } = {}) {
    const { error } = OrderPlatformValidator.getMetricCount().validate(
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
    const {
      error: warrning,
    } = OrderPlatformValidator.getMetricCount().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getMetricCount \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/shipment/metrics-count/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.MetricCountResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getMetricCount \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetOrderByIdParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.OrderDetailsResponse>} - Success response
   * @name getOrderById
   * @summary:
   * @description:
   */
  async getOrderById({ orderId } = {}) {
    const { error } = OrderPlatformValidator.getOrderById().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getOrderById().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getOrderById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/order-details`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.OrderDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getOrderById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetOrdersParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.OrderListingResponse>} - Success response
   * @name getOrders
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
    myOrders,
  } = {}) {
    const { error } = OrderPlatformValidator.getOrders().validate(
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
        myOrders,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getOrders().validate(
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
        myOrders,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getOrders \n ${warrning}`,
      });
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
    query_params["my_orders"] = myOrders;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/orders-listing`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.OrderListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getOrders \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetReportsShipmentListingParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.OmsReports>} - Success response
   * @name getReportsShipmentListing
   * @summary:
   * @description:
   */
  async getReportsShipmentListing({ pageNo, pageSize } = {}) {
    const {
      error,
    } = OrderPlatformValidator.getReportsShipmentListing().validate(
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
    } = OrderPlatformValidator.getReportsShipmentListing().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getReportsShipmentListing \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/reports/shipment-listing`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.OmsReports().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getReportsShipmentListing \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetRoleBasedActionsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.GetActionsResponse>} - Success response
   * @name getRoleBasedActions
   * @summary:
   * @description:
   */
  async getRoleBasedActions({} = {}) {
    const { error } = OrderPlatformValidator.getRoleBasedActions().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getRoleBasedActions().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getRoleBasedActions \n ${warrning}`,
      });
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
    } = OrderPlatformModel.GetActionsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getRoleBasedActions \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetShipmentByIdParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ShipmentInfoResponse>} - Success response
   * @name getShipmentById
   * @summary:
   * @description:
   */
  async getShipmentById({ channelShipmentId, shipmentId } = {}) {
    const { error } = OrderPlatformValidator.getShipmentById().validate(
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
    const {
      error: warrning,
    } = OrderPlatformValidator.getShipmentById().validate(
      {
        channelShipmentId,
        shipmentId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getShipmentById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["channel_shipment_id"] = channelShipmentId;
    query_params["shipment_id"] = shipmentId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/shipment-details`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.ShipmentInfoResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getShipmentById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetShipmentHistoryParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
   * @name getShipmentHistory
   * @summary:
   * @description:
   */
  async getShipmentHistory({ shipmentId, bagId } = {}) {
    const { error } = OrderPlatformValidator.getShipmentHistory().validate(
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
    const {
      error: warrning,
    } = OrderPlatformValidator.getShipmentHistory().validate(
      {
        shipmentId,
        bagId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getShipmentHistory \n ${warrning}`,
      });
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
    } = OrderPlatformModel.ShipmentHistoryResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getShipmentHistory \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetShipmentReasonsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>} -
   *   Success response
   * @name getShipmentReasons
   * @summary: Get reasons behind full or partial cancellation of a shipment
   * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
   */
  async getShipmentReasons({ shipmentId, bagId, state } = {}) {
    const { error } = OrderPlatformValidator.getShipmentReasons().validate(
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
    const {
      error: warrning,
    } = OrderPlatformValidator.getShipmentReasons().validate(
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
        message: `Parameter Validation warrnings for platform > Order > getShipmentReasons \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/shipments/${shipmentId}/bags/${bagId}/state/${state}/reasons`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.PlatformShipmentReasonsResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getShipmentReasons \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetShipmentsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
   *   - Success response
   *
   * @name getShipments
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
    myOrders,
  } = {}) {
    const { error } = OrderPlatformValidator.getShipments().validate(
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
        myOrders,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.getShipments().validate(
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
        myOrders,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getShipments \n ${warrning}`,
      });
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
    query_params["my_orders"] = myOrders;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/shipments-listing`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.ShipmentInternalPlatformViewResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getShipments \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetStateTransitionMapParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.BagStateTransitionMap>} - Success response
   * @name getStateTransitionMap
   * @summary:
   * @description:
   */
  async getStateTransitionMap({} = {}) {
    const { error } = OrderPlatformValidator.getStateTransitionMap().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderPlatformValidator.getStateTransitionMap().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getStateTransitionMap \n ${warrning}`,
      });
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
    } = OrderPlatformModel.BagStateTransitionMap().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getStateTransitionMap \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.GetfiltersParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.FiltersResponse>} - Success response
   * @name getfilters
   * @summary:
   * @description:
   */
  async getfilters({ view, groupEntity } = {}) {
    const { error } = OrderPlatformValidator.getfilters().validate(
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
    const { error: warrning } = OrderPlatformValidator.getfilters().validate(
      {
        view,
        groupEntity,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > getfilters \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["view"] = view;
    query_params["group_entity"] = groupEntity;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/filter-listing`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.FiltersResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > getfilters \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.InvalidateShipmentCacheParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>} -
   *   Success response
   * @name invalidateShipmentCache
   * @summary:
   * @description: Invalidate shipment Cache
   */
  async invalidateShipmentCache({ body } = {}) {
    const { error } = OrderPlatformValidator.invalidateShipmentCache().validate(
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
    } = OrderPlatformValidator.invalidateShipmentCache().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > invalidateShipmentCache \n ${warrning}`,
      });
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
    } = OrderPlatformModel.InvalidateShipmentCacheResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > invalidateShipmentCache \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.OrderUpdateParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ResponseDetail>} - Success response
   * @name orderUpdate
   * @summary:
   * @description:
   */
  async orderUpdate({ body } = {}) {
    const { error } = OrderPlatformValidator.orderUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.orderUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > orderUpdate \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = OrderPlatformModel.ResponseDetail().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > orderUpdate \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.PostShipmentHistoryParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
   * @name postShipmentHistory
   * @summary:
   * @description:
   */
  async postShipmentHistory({ body } = {}) {
    const { error } = OrderPlatformValidator.postShipmentHistory().validate(
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
    } = OrderPlatformValidator.postShipmentHistory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > postShipmentHistory \n ${warrning}`,
      });
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
    } = OrderPlatformModel.ShipmentHistoryResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > postShipmentHistory \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.ProcessManifestParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.ProcessManifestItemResponse>} -
   *   Success response
   * @name processManifest
   * @summary:
   * @description:
   */
  async processManifest({ body } = {}) {
    const { error } = OrderPlatformValidator.processManifest().validate(
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
    } = OrderPlatformValidator.processManifest().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > processManifest \n ${warrning}`,
      });
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
    } = OrderPlatformModel.ProcessManifestItemResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > processManifest \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.ReassignLocationParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.StoreReassignResponse>} - Success response
   * @name reassignLocation
   * @summary:
   * @description: Reassign Location
   */
  async reassignLocation({ body } = {}) {
    const { error } = OrderPlatformValidator.reassignLocation().validate(
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
    } = OrderPlatformValidator.reassignLocation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > reassignLocation \n ${warrning}`,
      });
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
    } = OrderPlatformModel.StoreReassignResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > reassignLocation \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.SendSmsNinjaParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
   * @name sendSmsNinja
   * @summary:
   * @description:
   */
  async sendSmsNinja({ body } = {}) {
    const { error } = OrderPlatformValidator.sendSmsNinja().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.sendSmsNinja().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > sendSmsNinja \n ${warrning}`,
      });
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
    } = OrderPlatformModel.OrderStatusResult().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > sendSmsNinja \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.SendUserMobileOTPParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponse>} - Success response
   * @name sendUserMobileOTP
   * @summary:
   * @description:
   */
  async sendUserMobileOTP({ body } = {}) {
    const { error } = OrderPlatformValidator.sendUserMobileOTP().validate(
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
    } = OrderPlatformValidator.sendUserMobileOTP().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > sendUserMobileOTP \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/user/send/otp/mobile`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.SendUserMobileOtpResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > sendUserMobileOTP \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdateAddressParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.BaseResponse>} - Success response
   * @name updateAddress
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
    const { error } = OrderPlatformValidator.updateAddress().validate(
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
    const { error: warrning } = OrderPlatformValidator.updateAddress().validate(
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
        message: `Parameter Validation warrnings for platform > Order > updateAddress \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = OrderPlatformModel.BaseResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > updateAddress \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdatePackagingDimensionsParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>}
   *   - Success response
   *
   * @name updatePackagingDimensions
   * @summary:
   * @description:
   */
  async updatePackagingDimensions({ body } = {}) {
    const {
      error,
    } = OrderPlatformValidator.updatePackagingDimensions().validate(
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
    } = OrderPlatformValidator.updatePackagingDimensions().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updatePackagingDimensions \n ${warrning}`,
      });
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
    } = OrderPlatformModel.UpdatePackagingDimensionsResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > updatePackagingDimensions \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdateShipmentLockParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponse>} -
   *   Success response
   * @name updateShipmentLock
   * @summary:
   * @description: update shipment/bag lock and check status
   */
  async updateShipmentLock({ body } = {}) {
    const { error } = OrderPlatformValidator.updateShipmentLock().validate(
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
    } = OrderPlatformValidator.updateShipmentLock().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updateShipmentLock \n ${warrning}`,
      });
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
    } = OrderPlatformModel.UpdateShipmentLockResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > updateShipmentLock \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpdateShipmentStatusParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>}
   *   - Success response
   *
   * @name updateShipmentStatus
   * @summary:
   * @description: This API is for Shipment State transition or Shipment data update or both below example is for partial state transition with data update
   */
  async updateShipmentStatus({ body } = {}) {
    const { error } = OrderPlatformValidator.updateShipmentStatus().validate(
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
    } = OrderPlatformValidator.updateShipmentStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > updateShipmentStatus \n ${warrning}`,
      });
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
    } = OrderPlatformModel.UpdateShipmentStatusResponseBody().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > updateShipmentStatus \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UploadConsentParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
   * @name uploadConsent
   * @summary:
   * @description:
   */
  async uploadConsent({ body } = {}) {
    const { error } = OrderPlatformValidator.uploadConsent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.uploadConsent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > uploadConsent \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = OrderPlatformModel.SuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > uploadConsent \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.UpsertJioCodeParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.JioCodeUpsertResponse>} - Success response
   * @name upsertJioCode
   * @summary:
   * @description:
   */
  async upsertJioCode({ body } = {}) {
    const { error } = OrderPlatformValidator.upsertJioCode().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = OrderPlatformValidator.upsertJioCode().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > upsertJioCode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/upsert/jiocode/article`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.JioCodeUpsertResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > upsertJioCode \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {OrderPlatformValidator.VerifyMobileOTPParam} arg - Arg object
   * @returns {Promise<OrderPlatformModel.VerifyOtpResponse>} - Success response
   * @name verifyMobileOTP
   * @summary:
   * @description:
   */
  async verifyMobileOTP({ body } = {}) {
    const { error } = OrderPlatformValidator.verifyMobileOTP().validate(
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
    } = OrderPlatformValidator.verifyMobileOTP().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Order > verifyMobileOTP \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/user/verify/otp`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = OrderPlatformModel.VerifyOtpResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Order > verifyMobileOTP \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Order;
