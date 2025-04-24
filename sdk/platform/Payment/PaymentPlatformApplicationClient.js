const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const PaymentPlatformApplicationValidator = require("./PaymentPlatformApplicationValidator");
const PaymentPlatformModel = require("./PaymentPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Payment {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.AddEdcDeviceParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.EdcDeviceUpdateDetails>} - Success response
   * @name addEdcDevice
   * @summary: Create an EDC device
   * @description: Registration and addition of a new EDC device to the system - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addEdcDevice/).
   */
  async addEdcDevice(
    { terminalUniqueIdentifier, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.addEdcDevice().validate(
      {
        terminalUniqueIdentifier,
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
    } = PaymentPlatformApplicationValidator.addEdcDevice().validate(
      {
        terminalUniqueIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > addEdcDevice \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device/${terminalUniqueIdentifier}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceUpdateDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > addEdcDevice \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.AddRefundBankAccountUsingOTPParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.RefundAccountDetails>} - Success response
   * @name addRefundBankAccountUsingOTP
   * @summary: Create refund account
   * @description: The addition of a bank account specifically for refunds, employing OTP verification for security - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addRefundBankAccountUsingOTP/).
   */
  async addRefundBankAccountUsingOTP(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.addRefundBankAccountUsingOTP().validate(
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
    } = PaymentPlatformApplicationValidator.addRefundBankAccountUsingOTP().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > addRefundBankAccountUsingOTP \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/account`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.RefundAccountDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > addRefundBankAccountUsingOTP \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.CancelPaymentLinkParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.CancelPaymentLinkDetails>} -
   *   Success response
   * @name cancelPaymentLink
   * @summary: Cancel payment link
   * @description: Deactivate and cancel a payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/cancelPaymentLink/).
   */
  async cancelPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.cancelPaymentLink().validate(
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
    } = PaymentPlatformApplicationValidator.cancelPaymentLink().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > cancelPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cancel-payment-link/`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.CancelPaymentLinkDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > cancelPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.CheckAndUpdatePaymentStatusParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentStatusUpdateDetails>} -
   *   Success response
   * @name checkAndUpdatePaymentStatus
   * @summary: Poll and update payment status
   * @description: Polling process to confirm the payment status. It periodically checks and updates the current status of a payment, ensuring timely and accurate confirmation of payment transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/checkAndUpdatePaymentStatus/).
   */
  async checkAndUpdatePaymentStatus(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.checkAndUpdatePaymentStatus().validate(
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
    } = PaymentPlatformApplicationValidator.checkAndUpdatePaymentStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > checkAndUpdatePaymentStatus \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/confirm/polling`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentStatusUpdateDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > checkAndUpdatePaymentStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.ConfirmPaymentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentConfirmationDetails>} -
   *   Success response
   * @name confirmPayment
   * @summary: Payment confirmation
   * @description: Authentication and confirmation of a payment.It requires details such as the order ID and payment methods in the request body to authenticate and confirm the payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/confirmPayment/).
   */
  async confirmPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.confirmPayment().validate(
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
    } = PaymentPlatformApplicationValidator.confirmPayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > confirmPayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/confirm`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentConfirmationDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > confirmPayment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.CreateMerchantRefundPriorityParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.RefundPriorityDetails>} - Success response
   * @name createMerchantRefundPriority
   * @summary: Create merchant refund priority
   * @description: Create merchant refund priority configurations, with the provided refund sources priority details, and return the status of the operation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createMerchantRefundPriority/).
   */
  async createMerchantRefundPriority(
    { configType, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.createMerchantRefundPriority().validate(
      {
        configType,
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
    } = PaymentPlatformApplicationValidator.createMerchantRefundPriority().validate(
      {
        configType,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > createMerchantRefundPriority \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund_priority/config/${configType}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.RefundPriorityDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > createMerchantRefundPriority \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.CreatePaymentLinkParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.CreatePaymentLinkDetails>} -
   *   Success response
   * @name createPaymentLink
   * @summary: Create payment link
   * @description: Generate a payment link for accepting payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createPaymentLink/).
   */
  async createPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.createPaymentLink().validate(
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
    } = PaymentPlatformApplicationValidator.createPaymentLink().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > createPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/create-payment-link/`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.CreatePaymentLinkDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > createPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.CreatePaymentOrderParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentOrderDetails>} - Success response
   * @name createPaymentOrder
   * @summary: Create Order
   * @description: Create an order and payment on the aggregator side - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createPaymentOrder/).
   */
  async createPaymentOrder(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.createPaymentOrder().validate(
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
    } = PaymentPlatformApplicationValidator.createPaymentOrder().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > createPaymentOrder \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment-orders/`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentOrderDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > createPaymentOrder \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.EdcAggregatorsAndModelListParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.EdcAggregatorAndModelListDetails>}
   *   - Success response
   *
   * @name edcAggregatorsAndModelList
   * @summary: EDC aggregators and model list
   * @description: Retrieve a list of EDC (Electronic Data Capture) aggregators and models. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcAggregatorsAndModelList/).
   */
  async edcAggregatorsAndModelList(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.edcAggregatorsAndModelList().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.edcAggregatorsAndModelList().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > edcAggregatorsAndModelList \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-aggregator-list`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcAggregatorAndModelListDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > edcAggregatorsAndModelList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.EdcDeviceListParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.EdcDeviceListDetails>} - Success response
   * @name edcDeviceList
   * @summary: List EDC devices
   * @description: Retrieves a list of available Electronic Data Capture (EDC) devices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcDeviceList/).
   */
  async edcDeviceList(
    { pageNo, pageSize, isActive, storeId, deviceTag, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.edcDeviceList().validate(
      {
        pageNo,
        pageSize,
        isActive,
        storeId,
        deviceTag,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.edcDeviceList().validate(
      {
        pageNo,
        pageSize,
        isActive,
        storeId,
        deviceTag,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > edcDeviceList \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_active"] = isActive;
    query_params["store_id"] = storeId;
    query_params["device_tag"] = deviceTag;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device-list`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceListDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > edcDeviceList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.EdcDeviceStatsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.EdcDeviceStatsDetails>} - Success response
   * @name edcDeviceStats
   * @summary: EDC device stats
   * @description: Information about EDC (Electronic Data Capture) devices linked to a specific application within a company. It provides statistics such as the count of active and inactive devices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcDeviceStats/).
   */
  async edcDeviceStats(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.edcDeviceStats().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.edcDeviceStats().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > edcDeviceStats \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device-stats`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceStatsDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > edcDeviceStats \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetBankAccountDetailsOpenAPIParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.RefundAccountDetails>} - Success response
   * @name getBankAccountDetailsOpenAPI
   * @summary: Get bank account details
   * @description: Retrieve bank account information  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getBankAccountDetailsOpenAPI/).
   */
  async getBankAccountDetailsOpenAPI(
    { orderId, requestHash, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getBankAccountDetailsOpenAPI().validate(
      {
        orderId,

        requestHash,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getBankAccountDetailsOpenAPI().validate(
      {
        orderId,

        requestHash,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getBankAccountDetailsOpenAPI \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["order_id"] = orderId;
    query_params["request_hash"] = requestHash;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/account`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.RefundAccountDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getBankAccountDetailsOpenAPI \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetBrandPaymentGatewayConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentGatewayConfigDetails>} -
   *   Success response
   * @name getBrandPaymentGatewayConfig
   * @summary: Get secrets for brand payment gateway
   * @description: Retrieve configuration settings like key, secret, webhook url, merchant salt for brand payment gateways. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getBrandPaymentGatewayConfig/).
   */
  async getBrandPaymentGatewayConfig(
    { aggregator, configType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getBrandPaymentGatewayConfig().validate(
      {
        aggregator,
        configType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getBrandPaymentGatewayConfig().validate(
      {
        aggregator,
        configType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getBrandPaymentGatewayConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["aggregator"] = aggregator;
    query_params["config_type"] = configType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentGatewayConfigDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getBrandPaymentGatewayConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetEdcDeviceParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.EdcDeviceDetails>} - Success response
   * @name getEdcDevice
   * @summary: Get an EDC device
   * @description: Retrieve comprehensive details regarding an Electronic Data Capture (EDC) device associated with a particular terminal unique identifier within a company's application.Upon success, it returns the detailed information of the EDC device, including terminal serial number, EDC device serial number, merchant store POS code, store ID, aggregator ID and name, device tag, activation status, and EDC model. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getEdcDevice/).
   */
  async getEdcDevice(
    { terminalUniqueIdentifier, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getEdcDevice().validate(
      {
        terminalUniqueIdentifier,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getEdcDevice().validate(
      {
        terminalUniqueIdentifier,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getEdcDevice \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device/${terminalUniqueIdentifier}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getEdcDevice \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetMerchantAggregatorAppVersionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.AggregatorVersionDetails>} -
   *   Success response
   * @name getMerchantAggregatorAppVersion
   * @summary: Get app version for  Aggregator
   * @description: Get app version required for Payment Mode or sub payment mode for an Aggregator.if merchant required any PG payment mode after certain version for mobile app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantAggregatorAppVersion/).
   */
  async getMerchantAggregatorAppVersion(
    {
      aggregatorId,
      businessUnit,
      device,
      paymentModeId,
      subPaymentMode,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getMerchantAggregatorAppVersion().validate(
      {
        aggregatorId,
        businessUnit,
        device,
        paymentModeId,
        subPaymentMode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getMerchantAggregatorAppVersion().validate(
      {
        aggregatorId,
        businessUnit,
        device,
        paymentModeId,
        subPaymentMode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getMerchantAggregatorAppVersion \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["business_unit"] = businessUnit;
    query_params["device"] = device;
    query_params["payment_mode_id"] = paymentModeId;
    query_params["sub_payment_mode"] = subPaymentMode;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/aggregators/${aggregatorId}/version`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.AggregatorVersionDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getMerchantAggregatorAppVersion \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetMerchantAggregatorPaymentModeDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeDetails>} -
   *   Success response
   * @name getMerchantAggregatorPaymentModeDetails
   * @summary: Get merchant aggregator and their payment mode
   * @description: Get available payment gateways and payment mode and it's sub payment mode details like for razorpay their active/inactive payment modes netbanking , wallet, upi are shown.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantAggregatorPaymentModeDetails/).
   */
  async getMerchantAggregatorPaymentModeDetails(
    { aggregatorId, businessUnit, device, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getMerchantAggregatorPaymentModeDetails().validate(
      {
        aggregatorId,
        businessUnit,
        device,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getMerchantAggregatorPaymentModeDetails().validate(
      {
        aggregatorId,
        businessUnit,
        device,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getMerchantAggregatorPaymentModeDetails \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["business_unit"] = businessUnit;
    query_params["device"] = device;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/aggregators/${aggregatorId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PlatformPaymentModeDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getMerchantAggregatorPaymentModeDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetMerchantPaymentOptionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeDetails>} -
   *   Success response
   * @name getMerchantPaymentOption
   * @summary: Get merchant payment option
   * @description: Retrieve available payment gateways and offline payment mode details for a merchant by providing company ID and application ID, returning a list of active payment gateways and their configurations, including online and offline options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantPaymentOption/).
   */
  async getMerchantPaymentOption(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getMerchantPaymentOption().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getMerchantPaymentOption().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getMerchantPaymentOption \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/configuration`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PlatformPaymentModeDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getMerchantPaymentOption \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetMerchantRefundPriorityParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.RefundPriorityDetails>} - Success response
   * @name getMerchantRefundPriority
   * @summary: Get merchant refund priority
   * @description: Retrieve merchant refund priority configurations, returning the status of the update and the refund sources priority with their descriptions and priorities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantRefundPriority/).
   */
  async getMerchantRefundPriority(
    { configType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getMerchantRefundPriority().validate(
      {
        configType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getMerchantRefundPriority().validate(
      {
        configType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getMerchantRefundPriority \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund_priority/config/${configType}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.RefundPriorityDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getMerchantRefundPriority \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetPGConfigAggregatorsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeDetails>} -
   *   Success response
   * @name getPGConfigAggregators
   * @summary: Get merchant aggregator payment mode
   * @description: Get payment gateway and it's payment mode and it's sub payment mode details like for razorpay update active/inactive payment modes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPGConfigAggregators/).
   */
  async getPGConfigAggregators(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPGConfigAggregators().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getPGConfigAggregators().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPGConfigAggregators \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/configuration/aggregator`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PlatformPaymentModeDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPGConfigAggregators \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetPaymentCodeOptionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.GetPaymentCodeDetails>} - Success response
   * @name getPaymentCodeOption
   * @summary: Get payment mode codes
   * @description: Enables users to retrieve options for payment codes.users can access information such as payment method names, networks, and associated codes, facilitating seamless integration and management of payment modes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentCodeOption/).
   */
  async getPaymentCodeOption(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentCodeOption().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getPaymentCodeOption().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPaymentCodeOption \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/codes`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.GetPaymentCodeDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPaymentCodeOption \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetPaymentLinkParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.GetPaymentLinkDetails>} - Success response
   * @name getPaymentLink
   * @summary: Get payment link
   * @description: Retrieve a payment link for making payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentLink/).
   */
  async getPaymentLink(
    { paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentLink().validate(
      {
        paymentLinkId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getPaymentLink().validate(
      {
        paymentLinkId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/create-payment-link/`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.GetPaymentLinkDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetPaymentModeControlRoutesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeDetails>} -
   *   Success response
   * @name getPaymentModeControlRoutes
   * @summary: Get offline/advance payment mode
   * @description: Get details of offline / advance payment mode like for cod  offline payment mode get user level cod limit, order level cod limit, cod charge. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeControlRoutes/).
   */
  async getPaymentModeControlRoutes(
    { mode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentModeControlRoutes().validate(
      {
        mode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getPaymentModeControlRoutes().validate(
      {
        mode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPaymentModeControlRoutes \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/modes/${mode}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PlatformPaymentModeDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPaymentModeControlRoutes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetPaymentModeCustomConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentCustomConfigResponseSchema>}
   *   - Success response
   *
   * @name getPaymentModeCustomConfig
   * @summary: Get advance payment custom configurations
   * @description: Merchants to fetch detailed information regarding advance payment custom configurations tailored to their specific business needs. merchants can access settings such as customer restrictions, available payment modes for both pre-order and post-order transactions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeCustomConfig/).
   */
  async getPaymentModeCustomConfig(
    { mode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentModeCustomConfig().validate(
      {
        mode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getPaymentModeCustomConfig().validate(
      {
        mode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPaymentModeCustomConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/modes/${mode}/custom-config`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentCustomConfigResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPaymentModeCustomConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetPaymentModeRoutesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentOptionsDetails>} - Success response
   * @name getPaymentModeRoutes
   * @summary: Get payment modes
   * @description: Get available payment methods on the payment page, specifying the aggregator for each option, such as 'Netbanking powered by Juspay' and 'Card powered by Razorpay'. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeRoutes/).
   */
  async getPaymentModeRoutes(
    { refresh, requestType, orderId, shipmentId, amount, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        requestType,
        orderId,
        shipmentId,
        amount,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        requestType,
        orderId,
        shipmentId,
        amount,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPaymentModeRoutes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["refresh"] = refresh;
    query_params["request_type"] = requestType;
    query_params["order_id"] = orderId;
    query_params["shipment_id"] = shipmentId;
    query_params["amount"] = amount;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentOptionsDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPaymentModeRoutes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetPaymentSessionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentSessionFetchDetails>} -
   *   Success response
   * @name getPaymentSession
   * @summary: Get payment session
   * @description: Allows users to fetch the payment session details associated with a given order ID or transaction ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentSession/).
   */
  async getPaymentSession(
    { gid, lineItem, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentSession().validate(
      {
        gid,
        lineItem,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getPaymentSession().validate(
      {
        gid,
        lineItem,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPaymentSession \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["line-item"] = lineItem;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/session/${gid}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentSessionFetchDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPaymentSession \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetPosPaymentModeRoutesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentModeRouteDetails>} - Success response
   * @name getPosPaymentModeRoutes
   * @summary: List POS payment modes
   * @description: Available payment methods on the payment page for POS, specifying the aggregator for each option, such as 'CARD powered by Juspay' and 'QR powered by Razorpay'. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPosPaymentModeRoutes/).
   */
  async getPosPaymentModeRoutes(
    {
      amount,
      pincode,
      orderType,
      xOrderingSource,
      cartId,
      checkoutMode,
      refresh,
      orderId,
      cardReference,
      userDetails,
      displaySplit,
      advancePayment,
      shipmentId,
      customerId,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        pincode,
        orderType,
        xOrderingSource,
        cartId,
        checkoutMode,
        refresh,
        orderId,
        cardReference,
        userDetails,
        displaySplit,
        advancePayment,
        shipmentId,
        customerId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        pincode,
        orderType,
        xOrderingSource,
        cartId,
        checkoutMode,
        refresh,
        orderId,
        cardReference,
        userDetails,
        displaySplit,
        advancePayment,
        shipmentId,
        customerId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPosPaymentModeRoutes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["amount"] = amount;
    query_params["cart_id"] = cartId;
    query_params["pincode"] = pincode;
    query_params["checkout_mode"] = checkoutMode;
    query_params["refresh"] = refresh;
    query_params["order_id"] = orderId;
    query_params["card_reference"] = cardReference;
    query_params["order_type"] = orderType;
    query_params["user_details"] = userDetails;
    query_params["display_split"] = displaySplit;
    query_params["advance_payment"] = advancePayment;
    query_params["shipment_id"] = shipmentId;
    query_params["customer_id"] = customerId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/pos`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentModeRouteDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPosPaymentModeRoutes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetUserBeneficiariesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryFetchResults>} -
   *   Success response
   * @name getUserBeneficiaries
   * @summary: Get user beneficiaries
   * @description: Retrieves information about beneficiaries associated with the user for processing refunds, based on the provided order ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserBeneficiaries/).
   */
  async getUserBeneficiaries(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getUserBeneficiaries().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getUserBeneficiaries().validate(
      { orderId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getUserBeneficiaries \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/accounts/user`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.OrderBeneficiaryFetchResults().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getUserBeneficiaries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetUserCODlimitRoutesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.GetUserCODLimitDetails>} - Success response
   * @name getUserCODlimitRoutes
   * @summary: Get user COD
   * @description: Retrieve user cod limt data of user i.e cod is active or not for user and remaining limit  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserCODlimitRoutes/).
   */
  async getUserCODlimitRoutes(
    { merchantUserId, mobileNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getUserCODlimitRoutes().validate(
      {
        merchantUserId,
        mobileNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getUserCODlimitRoutes().validate(
      {
        merchantUserId,
        mobileNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getUserCODlimitRoutes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["merchant_user_id"] = merchantUserId;
    query_params["mobile_no"] = mobileNo;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/user-cod`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.GetUserCODLimitDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getUserCODlimitRoutes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetUserOrderBeneficiariesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryFetchResults>} -
   *   Success response
   * @name getUserOrderBeneficiaries
   * @summary: Get user order beneficiaries
   * @description: Retrieve beneficiary details like bank name , ifsc code , branch name associated with a specific order for refund processing  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserOrderBeneficiaries/).
   */
  async getUserOrderBeneficiaries(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getUserOrderBeneficiaries().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getUserOrderBeneficiaries().validate(
      { orderId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getUserOrderBeneficiaries \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/accounts/order`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.OrderBeneficiaryFetchResults().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getUserOrderBeneficiaries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.InitialisePaymentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentInitializationDetails>} -
   *   Success response
   * @name initialisePayment
   * @summary: Start payment process
   * @description: Initiates the payment procedure for an order.Upon successful initiation, it returns a  details including the success status, aggregator information, payment method, status, merchant order ID aggregator order , polling URL, timeout, virtual ID, Razorpay payment ID, customer ID, and device ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/initialisePayment/).
   */
  async initialisePayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.initialisePayment().validate(
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
    } = PaymentPlatformApplicationValidator.initialisePayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > initialisePayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/request`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentInitializationDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > initialisePayment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.MerchantOnBoardingParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.MerchantOnBoardingDetails>} -
   *   Success response
   * @name merchantOnBoarding
   * @summary: Merchant onboarding for BNPL
   * @description: Initiate the merchant onboarding process for Buy Now Pay Later (BNPL). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/merchantOnBoarding/).
   */
  async merchantOnBoarding(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.merchantOnBoarding().validate(
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
    } = PaymentPlatformApplicationValidator.merchantOnBoarding().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > merchantOnBoarding \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchant-onboarding`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.MerchantOnBoardingDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > merchantOnBoarding \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.OauthGetUrlParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.GetOauthUrlDetails>} - Success response
   * @name oauthGetUrl
   * @summary: Get OAuth URL
   * @description: This has been used when merchant is setup their razorpay payment gateway, they will redirect to razorpay site after submitting all their secrets for authetication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/oauthGetUrl/).
   */
  async oauthGetUrl(
    { aggregator, successRedirectUrl, failureRedirectUrl, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.oauthGetUrl().validate(
      {
        aggregator,
        successRedirectUrl,
        failureRedirectUrl,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.oauthGetUrl().validate(
      {
        aggregator,
        successRedirectUrl,
        failureRedirectUrl,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > oauthGetUrl \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["success_redirect_url"] = successRedirectUrl;
    query_params["failure_redirect_url"] = failureRedirectUrl;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/onboard/${aggregator}/`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.GetOauthUrlDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > oauthGetUrl \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.PatchMerchantAggregatorPaymentModeDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeDetails>} -
   *   Success response
   * @name patchMerchantAggregatorPaymentModeDetails
   * @summary: Update merchant aggregator payment mode
   * @description: update payment gateway and it's payment mode and it's sub payment mode details like for razorpay update active/inactive payment modes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantAggregatorPaymentModeDetails/).
   */
  async patchMerchantAggregatorPaymentModeDetails(
    { aggregatorId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.patchMerchantAggregatorPaymentModeDetails().validate(
      {
        aggregatorId,
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
    } = PaymentPlatformApplicationValidator.patchMerchantAggregatorPaymentModeDetails().validate(
      {
        aggregatorId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > patchMerchantAggregatorPaymentModeDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/aggregators/${aggregatorId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PlatformPaymentModeDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > patchMerchantAggregatorPaymentModeDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeDetails>} -
   *   Success response
   * @name patchMerchantPaymentOption
   * @summary: Update payment gateways and payment mode
   * @description: Updated online/offline payment as active/inactive like disable offline payment mode will disable offline payment modes on checkout page on merchant's website - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantPaymentOption/).
   */
  async patchMerchantPaymentOption(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.patchMerchantPaymentOption().validate(
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
    } = PaymentPlatformApplicationValidator.patchMerchantPaymentOption().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > patchMerchantPaymentOption \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/configuration`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PlatformPaymentModeDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > patchMerchantPaymentOption \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.PatchMerchantPaymentOptionVersionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeDetails>} -
   *   Success response
   * @name patchMerchantPaymentOptionVersion
   * @summary: Update app version for Aggrgator
   * @description: Update app version required for Payment Mode or sub payment mode for an Aggregator.if merchant required any PG payment mode after certain version for mobile app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantPaymentOptionVersion/).
   */
  async patchMerchantPaymentOptionVersion(
    { aggregatorId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.patchMerchantPaymentOptionVersion().validate(
      {
        aggregatorId,
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
    } = PaymentPlatformApplicationValidator.patchMerchantPaymentOptionVersion().validate(
      {
        aggregatorId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > patchMerchantPaymentOptionVersion \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/aggregators/${aggregatorId}/version`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PlatformPaymentModeDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > patchMerchantPaymentOptionVersion \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.PaymentStatusBulkParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentStatusBulkHandlerDetails>}
   *   - Success response
   *
   * @name paymentStatusBulk
   * @summary: Retrieve status of multiple payments in bulk
   * @description: Retrieve status of multiple payments in bulk and returns the status of each payment along with associated details such as payment ID, amount, currency, status, payment mode, and payment gateway in the response - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/paymentStatusBulk/).
   */
  async paymentStatusBulk(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.paymentStatusBulk().validate(
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
    } = PaymentPlatformApplicationValidator.paymentStatusBulk().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > paymentStatusBulk \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/payment-status-bulk/`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentStatusBulkHandlerDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > paymentStatusBulk \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.PollingPaymentLinkParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PollingPaymentLinkDetails>} -
   *   Success response
   * @name pollingPaymentLink
   * @summary: Poll status of payment link
   * @description: Periodically checks the status of a payment link to monitor for any updates or changes.retrieve real-time information about the payment link's current status, such as whether it has been processed, cancelled, or expired.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/pollingPaymentLink/).
   */
  async pollingPaymentLink(
    { paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.pollingPaymentLink().validate(
      {
        paymentLinkId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.pollingPaymentLink().validate(
      {
        paymentLinkId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > pollingPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/polling-payment-link/`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PollingPaymentLinkDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > pollingPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.RepaymentDetailsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.RepaymentDetails>} - Success response
   * @name repaymentDetails
   * @summary: Repayment details for BNPL
   * @description: Retrieve repayment details for Buy Now Pay Later (BNPL) payment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/repaymentDetails/).
   */
  async repaymentDetails(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.repaymentDetails().validate(
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
    } = PaymentPlatformApplicationValidator.repaymentDetails().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > repaymentDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/repayment-details`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.RepaymentDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > repaymentDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.ResendOrCancelPaymentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.ResendOrCancelPaymentDetails>} -
   *   Success response
   * @name resendOrCancelPayment
   * @summary: Resend or cancel payment
   * @description: Enable you to perform actions related to the resending and cancellation of payment links through SMS or EMAIL. resend or cancel payment link that have been initiated but may require modification or cancellation for various reasons, ensuring flexibility and control in payment processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/resendOrCancelPayment/).
   */
  async resendOrCancelPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.resendOrCancelPayment().validate(
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
    } = PaymentPlatformApplicationValidator.resendOrCancelPayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > resendOrCancelPayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/cancel`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.ResendOrCancelPaymentDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > resendOrCancelPayment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.ResendPaymentLinkParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.ResendPaymentLinkDetails>} -
   *   Success response
   * @name resendPaymentLink
   * @summary: Resend payment link
   * @description: Resends an existing payment link to the user to complete the payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/resendPaymentLink/).
   */
  async resendPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.resendPaymentLink().validate(
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
    } = PaymentPlatformApplicationValidator.resendPaymentLink().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > resendPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/resend-payment-link/`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.ResendPaymentLinkDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > resendPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.RevokeOauthTokenParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.RevokeOAuthToken>} - Success response
   * @name revokeOauthToken
   * @summary: Revoke OAuth token
   * @description: Revoke the creds  for payment aggregator razropay. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/revokeOauthToken/).
   */
  async revokeOauthToken(
    { aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.revokeOauthToken().validate(
      {
        aggregator,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.revokeOauthToken().validate(
      {
        aggregator,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > revokeOauthToken \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/revoke/${aggregator}/`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.RevokeOAuthToken().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > revokeOauthToken \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.SaveBrandPaymentGatewayConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentGatewayToBeReviewed>} -
   *   Success response
   * @name saveBrandPaymentGatewayConfig
   * @summary: Save brand payment gateway config
   * @description: Store and update configuration settings for brand payment gateways i.e required for payment for a payment gateway like key, secret, merchant salt. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/saveBrandPaymentGatewayConfig/).
   */
  async saveBrandPaymentGatewayConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.saveBrandPaymentGatewayConfig().validate(
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
    } = PaymentPlatformApplicationValidator.saveBrandPaymentGatewayConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > saveBrandPaymentGatewayConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentGatewayToBeReviewed().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > saveBrandPaymentGatewayConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.SetMerchantModeControlRoutesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeDetails>} -
   *   Success response
   * @name setMerchantModeControlRoutes
   * @summary: Update offline payment mode
   * @description: Update offline payment mode details for the merchant like update for cod  offline payment mode get user level cod limit, order level cod limit, cod charge, enable/disable device for cod. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setMerchantModeControlRoutes/).
   */
  async setMerchantModeControlRoutes(
    { mode, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.setMerchantModeControlRoutes().validate(
      {
        mode,
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
    } = PaymentPlatformApplicationValidator.setMerchantModeControlRoutes().validate(
      {
        mode,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > setMerchantModeControlRoutes \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/modes/${mode}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PlatformPaymentModeDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > setMerchantModeControlRoutes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.SetPaymentModeCustomConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentCustomConfigResponseSchema>}
   *   - Success response
   *
   * @name setPaymentModeCustomConfig
   * @summary: Update advance payment custom configurations
   * @description: Allows merchants to modify specific details of advance payment custom configurations tailored to their business requirements. By providing the company ID, application ID, and payment mode, merchants can update settings such as minimum order value, customer restrictions, and available payment modes for both pre-order and post-order transactions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setPaymentModeCustomConfig/).
   */
  async setPaymentModeCustomConfig(
    { mode, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.setPaymentModeCustomConfig().validate(
      {
        mode,
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
    } = PaymentPlatformApplicationValidator.setPaymentModeCustomConfig().validate(
      {
        mode,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > setPaymentModeCustomConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/modes/${mode}/custom-config`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentCustomConfigResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > setPaymentModeCustomConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.SetUserCODlimitRoutesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.SetCODOptionDetails>} - Success response
   * @name setUserCODlimitRoutes
   * @summary: Set user COD
   * @description: This allows access to seller to enable disable cod of specific user - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setUserCODlimitRoutes/).
   */
  async setUserCODlimitRoutes(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.setUserCODlimitRoutes().validate(
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
    } = PaymentPlatformApplicationValidator.setUserCODlimitRoutes().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > setUserCODlimitRoutes \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/user-cod`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.SetCODOptionDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > setUserCODlimitRoutes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.UpdateEdcDeviceParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.EdcDeviceAddDetails>} - Success response
   * @name updateEdcDevice
   * @summary: Update EDC device
   * @description: Enables the modification of settings and details associated with an Electronic Data Capture (EDC) device linked to a specific application within a company. Upon success, it returns the updated information of the EDC device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateEdcDevice/).
   */
  async updateEdcDevice(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.updateEdcDevice().validate(
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
    } = PaymentPlatformApplicationValidator.updateEdcDevice().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > updateEdcDevice \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/edc-device`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceAddDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > updateEdcDevice \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.UpdateMerchantRefundPriorityParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.RefundPriorityDetails>} - Success response
   * @name updateMerchantRefundPriority
   * @summary: Update merchant refund priority
   * @description: Update merchant refund priority configurations, with the provided refund sources priority details, and return the status of the operation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateMerchantRefundPriority/).
   */
  async updateMerchantRefundPriority(
    { configType, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.updateMerchantRefundPriority().validate(
      {
        configType,
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
    } = PaymentPlatformApplicationValidator.updateMerchantRefundPriority().validate(
      {
        configType,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > updateMerchantRefundPriority \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund_priority/config/${configType}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.RefundPriorityDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > updateMerchantRefundPriority \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.UpdatePaymentSessionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentSessionPutDetails>} -
   *   Success response
   * @name updatePaymentSession
   * @summary: Update payment session
   * @description: Update the details of a payment session associated with a given order ID or transaction ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePaymentSession/).
   */
  async updatePaymentSession(
    { gid, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.updatePaymentSession().validate(
      {
        gid,
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
    } = PaymentPlatformApplicationValidator.updatePaymentSession().validate(
      {
        gid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > updatePaymentSession \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/session/${gid}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentSessionPutDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > updatePaymentSession \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.UpdateRefundSessionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.RefundSessionDetails>} - Success response
   * @name updateRefundSession
   * @summary: Update refund session
   * @description: Allows users to update the details of a refund session associated with a specific global identifier (GID) and request ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateRefundSession/).
   */
  async updateRefundSession(
    { gid, requestId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.updateRefundSession().validate(
      {
        gid,
        requestId,
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
    } = PaymentPlatformApplicationValidator.updateRefundSession().validate(
      {
        gid,
        requestId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > updateRefundSession \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/${gid}/refund/session/${requestId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.RefundSessionDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > updateRefundSession \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.ValidateCustomerAndCreditSummaryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.ValidateCustomerCreditSchema>} -
   *   Success response
   * @name validateCustomerAndCreditSummary
   * @summary: Verify payment customer and show credit summary
   * @description: Verify if the user is eligible for payment and also show credit summary if activated. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/validateCustomerAndCreditSummary/).
   */
  async validateCustomerAndCreditSummary(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.validateCustomerAndCreditSummary().validate(
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
    } = PaymentPlatformApplicationValidator.validateCustomerAndCreditSummary().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > validateCustomerAndCreditSummary \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/validate/customer-credits`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.ValidateCustomerCreditSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > validateCustomerAndCreditSummary \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.VerifyCustomerForPaymentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.ValidateCustomerDetails>} - Success response
   * @name verifyCustomerForPayment
   * @summary: Validate customer for paylater
   * @description: Verify whether the user is eligible for pay-later payment from the payment aggregator's side using the customer's phone number - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyCustomerForPayment/).
   */
  async verifyCustomerForPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.verifyCustomerForPayment().validate(
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
    } = PaymentPlatformApplicationValidator.verifyCustomerForPayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > verifyCustomerForPayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/customer/validation`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.ValidateCustomerDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > verifyCustomerForPayment \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Payment;
