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
   * @returns {Promise<PaymentPlatformModel.EdcDeviceUpdateResponse>} - Success response
   * @name addEdcDevice
   * @summary: Add EDC device.
   * @description: Register and add a new EDC device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addEdcDevice/).
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
    } = PaymentPlatformModel.EdcDeviceUpdateResponse().validate(responseData, {
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
   * @param {PaymentPlatformApplicationValidator.AddRefundBankAccountParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
   * @name addRefundBankAccount
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addRefundBankAccount/).
   */
  async addRefundBankAccount(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.addRefundBankAccount().validate(
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
    } = PaymentPlatformApplicationValidator.addRefundBankAccount().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > addRefundBankAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/account_create`,
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
    } = PaymentPlatformModel.RefundAccountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > addRefundBankAccount \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
   * @name addRefundBankAccountUsingOTP
   * @summary: Add refund bank account using OTP.
   * @description: Register a refund bank account with OTP verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/addRefundBankAccountUsingOTP/).
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
    } = PaymentPlatformModel.RefundAccountResponse().validate(responseData, {
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
   * @returns {Promise<PaymentPlatformModel.CancelPaymentLinkResponse>} -
   *   Success response
   * @name cancelPaymentLink
   * @summary: Cancel payment link.
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
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cancel-payment-link`,
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
    } = PaymentPlatformModel.CancelPaymentLinkResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<PaymentPlatformModel.PaymentStatusUpdateResponse>} -
   *   Success response
   * @name checkAndUpdatePaymentStatus
   * @summary: Check and update payment status.
   * @description: Verify and modify the status of a payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/checkAndUpdatePaymentStatus/).
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
    } = PaymentPlatformModel.PaymentStatusUpdateResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.PaymentConfirmationResponse>} -
   *   Success response
   * @name confirmPayment
   * @summary: Confirm payment.
   * @description: Authenticate and confirm a payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/confirmPayment/).
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
    } = PaymentPlatformModel.PaymentConfirmationResponse().validate(
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
   * @param {PaymentPlatformApplicationValidator.CopyConfigAggPaymentModesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
   *   Success response
   * @name copyConfigAggPaymentModes
   * @summary: Copy aggregator config of onc device to another.
   * @description: Copy aggregator config like Wallet, NB, paylater from one device of an aggregator like razorpay to another device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/copyConfigAggPaymentModes/).
   */
  async copyConfigAggPaymentModes(
    { aggregatorId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.copyConfigAggPaymentModes().validate(
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
    } = PaymentPlatformApplicationValidator.copyConfigAggPaymentModes().validate(
      {
        aggregatorId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > copyConfigAggPaymentModes \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/aggregators/${aggregatorId}/copy-config`,
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
    } = PaymentPlatformModel.AggregatorConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > copyConfigAggPaymentModes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.CopyConfigPaymentModesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
   *   Success response
   * @name copyConfigPaymentModes
   * @summary: Copy payment mode config of onc device to another.
   * @description: Copy aggregator config like Wallet, NB, paylater from one device of an aggregator like razorpay to another device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/copyConfigPaymentModes/).
   */
  async copyConfigPaymentModes(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.copyConfigPaymentModes().validate(
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
    } = PaymentPlatformApplicationValidator.copyConfigPaymentModes().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > copyConfigPaymentModes \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment_modes/sequencing/copy-config`,
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
    } = PaymentPlatformModel.AggregatorConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > copyConfigPaymentModes \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.RefundPriorityResponseSerializer>}
   *   - Success response
   *
   * @name createMerchantRefundPriority
   * @summary: API to create merchant refund priority
   * @description: API to update merchant refund priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createMerchantRefundPriority/).
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
    } = PaymentPlatformModel.RefundPriorityResponseSerializer().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<PaymentPlatformModel.CreatePaymentLinkResponse>} -
   *   Success response
   * @name createPaymentLink
   * @summary: Create payment link.
   * @description: Generate a new link for accepting payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createPaymentLink/).
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
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/create-payment-link`,
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
    } = PaymentPlatformModel.CreatePaymentLinkResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<PaymentPlatformModel.PaymentOrderResponse>} - Success response
   * @name createPaymentOrder
   * @summary: Create Order
   * @description: Use this API to create a order and payment on aggregator side - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/createPaymentOrder/).
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
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment-orders`,
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
    } = PaymentPlatformModel.PaymentOrderResponse().validate(responseData, {
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
   * @param {PaymentPlatformApplicationValidator.DeleteBeneficiaryDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.DeleteRefundAccountResponse>} -
   *   Success response
   * @name deleteBeneficiaryDetails
   * @summary: Delete saved beneficiary details of customers
   * @description: Use this API to delete the saved beneficiary details provided beneficiary Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deleteBeneficiaryDetails/).
   */
  async deleteBeneficiaryDetails(
    { beneficiaryId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.deleteBeneficiaryDetails().validate(
      {
        beneficiaryId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.deleteBeneficiaryDetails().validate(
      {
        beneficiaryId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > deleteBeneficiaryDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/account/${beneficiaryId}`,
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
    } = PaymentPlatformModel.DeleteRefundAccountResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > deleteBeneficiaryDetails \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.EdcAggregatorAndModelListResponse>}
   *   - Success response
   *
   * @name edcAggregatorsAndModelList
   * @summary: EDC aggregators and model list.
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
    } = PaymentPlatformModel.EdcAggregatorAndModelListResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.EdcDeviceListResponse>} - Success response
   * @name edcDeviceList
   * @summary: EDC device list.
   * @description: Retrieve a list of available EDC devices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcDeviceList/).
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
    } = PaymentPlatformModel.EdcDeviceListResponse().validate(responseData, {
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
   * @returns {Promise<PaymentPlatformModel.EdcDeviceStatsResponse>} - Success response
   * @name edcDeviceStats
   * @summary: EDC device stats.
   * @description: Get statistics and data related to EDC devices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/edcDeviceStats/).
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
    } = PaymentPlatformModel.EdcDeviceStatsResponse().validate(responseData, {
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
   * @param {PaymentPlatformApplicationValidator.GetAggregatorCredentialParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.AggregatorCredentialResponse>} -
   *   Success response
   * @name getAggregatorCredential
   * @summary: API to get merchant refund priority
   * @description: API to get merchant refund priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAggregatorCredential/).
   */
  async getAggregatorCredential(
    { aggregator, configType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getAggregatorCredential().validate(
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
    } = PaymentPlatformApplicationValidator.getAggregatorCredential().validate(
      {
        aggregator,
        configType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getAggregatorCredential \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["aggregator"] = aggregator;
    query_params["config_type"] = configType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/configuration/aggregator/credential`,
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
    } = PaymentPlatformModel.AggregatorCredentialResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getAggregatorCredential \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetAggregatorCredentialHistoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.AggregatorHistoryResponse>} -
   *   Success response
   * @name getAggregatorCredentialHistory
   * @summary: Get merchant refund priority
   * @description: Get merchant refund priority. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAggregatorCredentialHistory/).
   */
  async getAggregatorCredentialHistory(
    { aggregator, configType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getAggregatorCredentialHistory().validate(
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
    } = PaymentPlatformApplicationValidator.getAggregatorCredentialHistory().validate(
      {
        aggregator,
        configType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getAggregatorCredentialHistory \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["aggregator"] = aggregator;
    query_params["config_type"] = configType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/configuration/aggregator/credential/history`,
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
    } = PaymentPlatformModel.AggregatorHistoryResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getAggregatorCredentialHistory \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.GetRefundAccountResponse>} -
   *   Success response
   * @name getBankAccountDetailsOpenAPI
   * @summary: Get bank account details.
   * @description: Retrieve bank account information using an open API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getBankAccountDetailsOpenAPI/).
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
    } = PaymentPlatformModel.GetRefundAccountResponse().validate(responseData, {
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
   * @returns {Promise<PaymentPlatformModel.PaymentGatewayConfigResponse>} -
   *   Success response
   * @name getBrandPaymentGatewayConfig
   * @summary: Get brand payment gateway config
   * @description: Retrieve configuration settings for brand payment gateways. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getBrandPaymentGatewayConfig/).
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
    } = PaymentPlatformModel.PaymentGatewayConfigResponse().validate(
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
   * @param {PaymentPlatformApplicationValidator.GetDevicesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.GetDeviceResponse>} - Success response
   * @name getDevices
   * @summary: Get all business units and it's devices.
   * @description: This method returns an object containing the details of a single aggregator as per the id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getDevices/).
   */
  async getDevices(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentPlatformApplicationValidator.getDevices().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getDevices().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getDevices \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/aggregators/all-devices`,
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
    } = PaymentPlatformModel.GetDeviceResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getDevices \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetEdcDeviceParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.EdcDeviceDetailsResponse>} -
   *   Success response
   * @name getEdcDevice
   * @summary: Get EDC device.
   * @description: Retrieve detailed information about an EDC device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getEdcDevice/).
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
    } = PaymentPlatformModel.EdcDeviceDetailsResponse().validate(responseData, {
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
   * @returns {Promise<PaymentPlatformModel.AggregatorVersionResponse>} -
   *   Success response
   * @name getMerchantAggregatorAppVersion
   * @summary: Get app version required for Payment Mode.
   * @description: This api provide read operations on the app version required for Payment Mode or sub payment mode for an Aggregator. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantAggregatorAppVersion/).
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
    } = PaymentPlatformModel.AggregatorVersionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<PaymentPlatformModel.AggregatorPlatformPaymentModeResponse>}
   *   - Success response
   *
   * @name getMerchantAggregatorPaymentModeDetails
   * @summary: Get merchant aggregator payment mode details.
   * @description: swagger not found. so operationId not found - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantAggregatorPaymentModeDetails/).
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
    } = PaymentPlatformModel.AggregatorPlatformPaymentModeResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.PlatformOnlineOfflinePaymentResponse>}
   *   - Success response
   *
   * @name getMerchantPaymentOption
   * @summary: Get merchant payment option
   * @description: Retrieve all the available Paymet Gateways for merchant and its offline payment mode details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantPaymentOption/).
   */
  async getMerchantPaymentOption(
    { paymentOptionType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getMerchantPaymentOption().validate(
      {
        paymentOptionType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getMerchantPaymentOption().validate(
      {
        paymentOptionType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getMerchantPaymentOption \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["payment_option_type"] = paymentOptionType;

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
    } = PaymentPlatformModel.PlatformOnlineOfflinePaymentResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.RefundPriorityResponseSerializer>}
   *   - Success response
   *
   * @name getMerchantRefundPriority
   * @summary: API to get merchant refund priority
   * @description: API to get merchant refund priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getMerchantRefundPriority/).
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
    } = PaymentPlatformModel.RefundPriorityResponseSerializer().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
   *   Success response
   * @name getPGConfigAggregators
   * @summary: Get PG (Payment Gateway) config aggregators.
   * @description: swagger not found. so operationId not found - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPGConfigAggregators/).
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
    } = PaymentPlatformModel.AggregatorConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

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
   * @returns {Promise<PaymentPlatformModel.GetPaymentCodeResponse>} - Success response
   * @name getPaymentCodeOption
   * @summary: List Payment Options Method Codes
   * @description: Get all active List Payment Options Method Codes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentCodeOption/).
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
    } = PaymentPlatformModel.GetPaymentCodeResponse().validate(responseData, {
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
   * @returns {Promise<PaymentPlatformModel.GetPaymentLinkResponse>} - Success response
   * @name getPaymentLink
   * @summary: Get payment link.
   * @description: Retrieve a link for making payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentLink/).
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
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/create-payment-link`,
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
    } = PaymentPlatformModel.GetPaymentLinkResponse().validate(responseData, {
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
   * @param {PaymentPlatformApplicationValidator.GetPaymentLinkIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.GetPaymentLinkResponse>} - Success response
   * @name getPaymentLinkId
   * @summary: Get payment link
   * @description: Use this API to get a payment link - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentLinkId/).
   */
  async getPaymentLinkId(
    { id, paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentLinkId().validate(
      {
        id,
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
    } = PaymentPlatformApplicationValidator.getPaymentLinkId().validate(
      {
        id,
        paymentLinkId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPaymentLinkId \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/create-payment-link/${id}`,
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
    } = PaymentPlatformModel.GetPaymentLinkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPaymentLinkId \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.PlatformOfflineAdvanceResponse>}
   *   - Success response
   *
   * @name getPaymentModeControlRoutes
   * @summary: Get details for the given offline / advance payment mode for merchant
   * @description: Use this API to get details for the given offline / advance payment mode for merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeControlRoutes/).
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
    } = PaymentPlatformModel.PlatformOfflineAdvanceResponse().validate(
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
   * @summary: Get details of advance payment custom configurations of merchant
   * @description: Use this API to Get details of advance payment custom configurations of merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeCustomConfig/).
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
   * @returns {Promise<PaymentPlatformModel.PaymentOptionsResponse>} - Success response
   * @name getPaymentModeRoutes
   * @summary: Get payment mode routes.
   * @description: Retrieve routes and options for payment modes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeRoutes/).
   */
  async getPaymentModeRoutes(
    { refresh, amount, requestType, orderId, shipmentId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        amount,
        requestType,
        orderId,
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
    } = PaymentPlatformApplicationValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        amount,
        requestType,
        orderId,
        shipmentId,
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
    query_params["amount"] = amount;
    query_params["request_type"] = requestType;
    query_params["order_id"] = orderId;
    query_params["shipment_id"] = shipmentId;

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
    } = PaymentPlatformModel.PaymentOptionsResponse().validate(responseData, {
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
   * @param {PaymentPlatformApplicationValidator.GetPaymentModeSequencingParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PaymentModeResponse>} - Success response
   * @name getPaymentModeSequencing
   * @summary: Get details for the given  payment mode for merchant
   * @description: Use this API to get details for the given payment mode for merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentModeSequencing/).
   */
  async getPaymentModeSequencing(
    { businessUnit, device, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentModeSequencing().validate(
      {
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
    } = PaymentPlatformApplicationValidator.getPaymentModeSequencing().validate(
      {
        businessUnit,
        device,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPaymentModeSequencing \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["business_unit"] = businessUnit;
    query_params["device"] = device;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment_modes/sequencing`,
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
    } = PaymentPlatformModel.PaymentModeResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPaymentModeSequencing \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.GetPaymentSessionResponse>} -
   *   Success response
   * @name getPaymentSession
   * @summary: Get payment session data
   * @description: Get payment session data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPaymentSession/).
   */
  async getPaymentSession(
    { gid, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentSession().validate(
      {
        gid,
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
    } = PaymentPlatformModel.GetPaymentSessionResponse().validate(
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
   * @param {PaymentPlatformApplicationValidator.GetPennyDropValidationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PennyDropValidationResponse>} -
   *   Success response
   * @name getPennyDropValidation
   * @summary: API to get pennydrop validation flag
   * @description: API to get pennydrop validation flag - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPennyDropValidation/).
   */
  async getPennyDropValidation(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPennyDropValidation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getPennyDropValidation().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getPennyDropValidation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pennydrop/validation`,
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
    } = PaymentPlatformModel.PennyDropValidationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getPennyDropValidation \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.PaymentModeRouteResponse>} -
   *   Success response
   * @name getPosPaymentModeRoutes
   * @summary: Get POS payment mode routes.
   * @description: Retrieve payment options and aggregator for point-of-sale (POS). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getPosPaymentModeRoutes/).
   */
  async getPosPaymentModeRoutes(
    {
      amount,
      pincode,
      orderType,
      cartId,
      checkoutMode,
      refresh,
      orderId,
      cardReference,
      userDetails,
      displaySplit,
      advancePayment,
      shipmentId,
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
        cartId,
        checkoutMode,
        refresh,
        orderId,
        cardReference,
        userDetails,
        displaySplit,
        advancePayment,
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
    } = PaymentPlatformApplicationValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        pincode,
        orderType,
        cartId,
        checkoutMode,
        refresh,
        orderId,
        cardReference,
        userDetails,
        displaySplit,
        advancePayment,
        shipmentId,
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
    } = PaymentPlatformModel.PaymentModeRouteResponse().validate(responseData, {
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
   * @param {PaymentPlatformApplicationValidator.GetRefundOptionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.ShipmentRefundResponse>} - Success response
   * @name getRefundOptions
   * @summary: Refund Options Handler to fetch available refund options.
   * @description: Refund Options Handler to fetch available refund options - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getRefundOptions/).
   */
  async getRefundOptions(
    {
      configuration,
      productType,
      amount,
      optinAppId,
      optinCompanyId,
      orderType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getRefundOptions().validate(
      {
        configuration,
        productType,
        amount,
        optinAppId,
        optinCompanyId,
        orderType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getRefundOptions().validate(
      {
        configuration,
        productType,
        amount,
        optinAppId,
        optinCompanyId,
        orderType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getRefundOptions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["configuration"] = configuration;
    query_params["product_type"] = productType;
    query_params["amount"] = amount;
    query_params["optin_app_id"] = optinAppId;
    query_params["optin_company_id"] = optinCompanyId;
    query_params["order_type"] = orderType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/refundoptions`,
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
    } = PaymentPlatformModel.ShipmentRefundResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getRefundOptions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.GetSelectedRefundOptionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.SelectedRefundOptionResponse>} -
   *   Success response
   * @name getSelectedRefundOption
   * @summary: API to get the selected refund options for shipment id
   * @description: API to get the selected refund options for shipment id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSelectedRefundOption/).
   */
  async getSelectedRefundOption(
    { shipmentId, orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getSelectedRefundOption().validate(
      {
        shipmentId,
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getSelectedRefundOption().validate(
      {
        shipmentId,
        orderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getSelectedRefundOption \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["order_id"] = orderId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/selected_refund_options`,
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
    } = PaymentPlatformModel.SelectedRefundOptionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getSelectedRefundOption \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
   *   Success response
   * @name getUserBeneficiaries
   * @summary: Get user beneficiaries.
   * @description: Retrieve beneficiaries associated with a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserBeneficiaries/).
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
    } = PaymentPlatformModel.OrderBeneficiaryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

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
   * @param {PaymentPlatformApplicationValidator.GetUserBeneficiariesDetailV2Param} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponseSchemaV2>}
   *   - Success response
   *
   * @name getUserBeneficiariesDetailV2
   * @summary: Lists the beneficiary of a refund
   * @description: Use this API to get the details of all active beneficiary added by a user for refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserBeneficiariesDetailV2/).
   */
  async getUserBeneficiariesDetailV2(
    { orderId, shipmentId, mop, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getUserBeneficiariesDetailV2().validate(
      {
        orderId,
        shipmentId,
        mop,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getUserBeneficiariesDetailV2().validate(
      {
        orderId,
        shipmentId,
        mop,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getUserBeneficiariesDetailV2 \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["order_id"] = orderId;
    query_params["shipment_id"] = shipmentId;
    query_params["mop"] = mop;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v2.0/company/${this.config.companyId}/application/${this.applicationId}/refund/user/beneficiary`,
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
    } = PaymentPlatformModel.OrderBeneficiaryResponseSchemaV2().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getUserBeneficiariesDetailV2 \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.GetUserCODLimitResponse>} - Success response
   * @name getUserCODlimitRoutes
   * @summary: Get user COD limit routes.
   * @description: Retrieve routes and limits for user cash-on-delivery (COD) transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserCODlimitRoutes/).
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
    } = PaymentPlatformModel.GetUserCODLimitResponse().validate(responseData, {
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
   * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
   *   Success response
   * @name getUserOrderBeneficiaries
   * @summary: Get user order beneficiaries.
   * @description: Retrieve beneficiaries associated with a user orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getUserOrderBeneficiaries/).
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
    } = PaymentPlatformModel.OrderBeneficiaryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

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
   * @returns {Promise<PaymentPlatformModel.PaymentInitializationResponse>} -
   *   Success response
   * @name initialisePayment
   * @summary: Initialize payment.
   * @description: Start the payment initiation process for UPI and QR code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/initialisePayment/).
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
    } = PaymentPlatformModel.PaymentInitializationResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.MerchantOnBoardingResponse>} -
   *   Success response
   * @name merchantOnBoarding
   * @summary: Merchant onboarding for BNPL.
   * @description: Initiate the onboarding process for a merchant. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/merchantOnBoarding/).
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
    } = PaymentPlatformModel.MerchantOnBoardingResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.GetOauthUrlResponse>} - Success response
   * @name oauthGetUrl
   * @summary: Get OAuth URL.
   * @description: Retrieve an OAuth URL for PG API authentication. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/oauthGetUrl/).
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
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/onboard/${aggregator}`,
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
    } = PaymentPlatformModel.GetOauthUrlResponse().validate(responseData, {
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
   * @returns {Promise<PaymentPlatformModel.PlatformPaymentModeResponse>} -
   *   Success response
   * @name patchMerchantAggregatorPaymentModeDetails
   * @summary: Patch merchant aggregator payment mode details.
   * @description: swagger not found. so operationId not found - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantAggregatorPaymentModeDetails/).
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
    } = PaymentPlatformModel.PlatformPaymentModeResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.PatchPlatformOnlineOfflinePaymentResponse>}
   *   - Success response
   *
   * @name patchMerchantPaymentOption
   * @summary: Patch merchant payment option
   * @description: To updated online payment as active/inactive or offline payment configuration like cod charges, anonymous cod allowed flags. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantPaymentOption/).
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
    } = PaymentPlatformModel.PatchPlatformOnlineOfflinePaymentResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
   *   Success response
   * @name patchMerchantPaymentOptionVersion
   * @summary: Update app version required for Payment Mode.
   * @description: This api provide wrote operations on the app version required for Payment Mode or sub payment mode for an Aggregator. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchMerchantPaymentOptionVersion/).
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
    } = PaymentPlatformModel.AggregatorConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

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
   * @param {PaymentPlatformApplicationValidator.PatchPaymentModeSequencingParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.AggregatorConfigResponse>} -
   *   Success response
   * @name patchPaymentModeSequencing
   * @summary: Update offline payment mode details for the merchant
   * @description: Use this API to update  payment mode sequence details for the merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/patchPaymentModeSequencing/).
   */
  async patchPaymentModeSequencing(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.patchPaymentModeSequencing().validate(
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
    } = PaymentPlatformApplicationValidator.patchPaymentModeSequencing().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > patchPaymentModeSequencing \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment_modes/sequencing`,
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
    } = PaymentPlatformModel.AggregatorConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > patchPaymentModeSequencing \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.PaymentStatusBulkHandlerResponse>}
   *   - Success response
   *
   * @name paymentStatusBulk
   * @summary: Payment status bulk.
   * @description: Retrieve the status of multiple payments in bulk. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/paymentStatusBulk/).
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
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/payment-status-bulk`,
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
    } = PaymentPlatformModel.PaymentStatusBulkHandlerResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.PollingPaymentLinkResponse>} -
   *   Success response
   * @name pollingPaymentLink
   * @summary: Used for polling if payment successful or not
   * @description: Use this API to poll if payment through payment was successful or not - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/pollingPaymentLink/).
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
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/polling-payment-link`,
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
    } = PaymentPlatformModel.PollingPaymentLinkResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.RepaymentResponse>} - Success response
   * @name repaymentDetails
   * @summary: Repayment details for BNPL.
   * @description: Retrieve information about repayment transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/repaymentDetails/).
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
    } = PaymentPlatformModel.RepaymentResponse().validate(responseData, {
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
   * @returns {Promise<PaymentPlatformModel.ResendOrCancelPaymentResponse>} -
   *   Success response
   * @name resendOrCancelPayment
   * @summary: Resend or cancel payment.
   * @description: Resend or cancel a payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/resendOrCancelPayment/).
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
    } = PaymentPlatformModel.ResendOrCancelPaymentResponse().validate(
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
   * @returns {Promise<PaymentPlatformModel.ResendPaymentLinkResponse>} -
   *   Success response
   * @name resendPaymentLink
   * @summary: Resend payment link
   * @description: Use this API to resend a payment link for the customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/resendPaymentLink/).
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
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/resend-payment-link`,
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
    } = PaymentPlatformModel.ResendPaymentLinkResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: Revoke OAuth token.
   * @description: Invalidate an OAuth token. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/revokeOauthToken/).
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
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/revoke/${aggregator}`,
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
   * @summary: Save brand payment gateway config.
   * @description: Store and update configuration settings for brand payment gateways. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/saveBrandPaymentGatewayConfig/).
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
   * @returns {Promise<PaymentPlatformModel.PlatformOfflineAdvanceResponse>}
   *   - Success response
   *
   * @name setMerchantModeControlRoutes
   * @summary: Update offline payment mode details for the merchant
   * @description: Use this API to update given offline / advance payment mode details for the merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setMerchantModeControlRoutes/).
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
    } = PaymentPlatformModel.PlatformOfflineAdvanceResponse().validate(
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
   * @summary: Update details of advance payment custom configurations of merchant
   * @description: Use this API to update given details of advance payment custom configurations of merchant - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setPaymentModeCustomConfig/).
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
   * @param {PaymentPlatformApplicationValidator.SetRefundOptionforShipmentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.ShipmentRefundResponse>} - Success response
   * @name setRefundOptionforShipment
   * @summary: Save refund source against shipment and order
   * @description: Save refund source against shipment and order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setRefundOptionforShipment/).
   */
  async setRefundOptionforShipment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.setRefundOptionforShipment().validate(
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
    } = PaymentPlatformApplicationValidator.setRefundOptionforShipment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > setRefundOptionforShipment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/refundoptions`,
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
    } = PaymentPlatformModel.ShipmentRefundResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > setRefundOptionforShipment \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.GetUserCODLimitResponse>} - Success response
   * @name setUserCODlimitRoutes
   * @summary: Set user COD limit routes.
   * @description: Configure routes and limits for user COD transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/setUserCODlimitRoutes/).
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
    } = PaymentPlatformModel.GetUserCODLimitResponse().validate(responseData, {
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
   * @param {PaymentPlatformApplicationValidator.UpdateAggregatorCredentialParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PatchAggregatorCredentialResponse>}
   *   - Success response
   *
   * @name updateAggregatorCredential
   * @summary: Update Aggregator Credentials
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateAggregatorCredential/).
   */
  async updateAggregatorCredential(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.updateAggregatorCredential().validate(
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
    } = PaymentPlatformApplicationValidator.updateAggregatorCredential().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > updateAggregatorCredential \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/configuration/aggregator/credential`,
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
    } = PaymentPlatformModel.PatchAggregatorCredentialResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > updateAggregatorCredential \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.UpdateDefaultBeneficiaryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.SetDefaultBeneficiaryResponse>} -
   *   Success response
   * @name updateDefaultBeneficiary
   * @summary: Set a default beneficiary for a refund
   * @description: Use this API to set a default beneficiary for getting a refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateDefaultBeneficiary/).
   */
  async updateDefaultBeneficiary(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.updateDefaultBeneficiary().validate(
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
    } = PaymentPlatformApplicationValidator.updateDefaultBeneficiary().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > updateDefaultBeneficiary \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/beneficiary/default`,
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
    } = PaymentPlatformModel.SetDefaultBeneficiaryResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > updateDefaultBeneficiary \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.UpdateEdcDeviceParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.EdcDeviceAddResponse>} - Success response
   * @name updateEdcDevice
   * @summary: Update EDC device.
   * @description: Modify the settings and details of an EDC device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateEdcDevice/).
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
    } = PaymentPlatformModel.EdcDeviceAddResponse().validate(responseData, {
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
   * @returns {Promise<PaymentPlatformModel.RefundPriorityResponseSerializer>}
   *   - Success response
   *
   * @name updateMerchantRefundPriority
   * @summary: API to update merchant refund priority
   * @description: API to update merchant refund priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateMerchantRefundPriority/).
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
    } = PaymentPlatformModel.RefundPriorityResponseSerializer().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<PaymentPlatformModel.PaymentSessionResponseSerializer>}
   *   - Success response
   *
   * @name updatePaymentSession
   * @summary: Update payment session.
   * @description: Modify the details of a payment session. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePaymentSession/).
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
    } = PaymentPlatformModel.PaymentSessionResponseSerializer().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {PaymentPlatformApplicationValidator.UpdatePennyDropValidationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PennyDropValidationResponse>} -
   *   Success response
   * @name updatePennyDropValidation
   * @summary: API to update penny drop validation for application ID
   * @description: API to update penny drop validation for application ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePennyDropValidation/).
   */
  async updatePennyDropValidation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.updatePennyDropValidation().validate(
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
    } = PaymentPlatformApplicationValidator.updatePennyDropValidation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > updatePennyDropValidation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pennydrop/validation`,
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
    } = PaymentPlatformModel.PennyDropValidationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > updatePennyDropValidation \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.RefundSessionResponseSerializer>}
   *   - Success response
   *
   * @name updateRefundSession
   * @summary: Update refund session.
   * @description: Modify the details of a refund session. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updateRefundSession/).
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
    } = PaymentPlatformModel.RefundSessionResponseSerializer().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {PaymentPlatformApplicationValidator.ValidateBeneficiaryAddressParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.ValidateValidateAddressResponse>}
   *   - Success response
   *
   * @name validateBeneficiaryAddress
   * @summary: API to Validate UPI ID and IFSC code
   * @description: API to Validate UPI ID and IFSC code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/validateBeneficiaryAddress/).
   */
  async validateBeneficiaryAddress(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.validateBeneficiaryAddress().validate(
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
    } = PaymentPlatformApplicationValidator.validateBeneficiaryAddress().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > validateBeneficiaryAddress \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/validate/beneficiary-address`,
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
    } = PaymentPlatformModel.ValidateValidateAddressResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > validateBeneficiaryAddress \n ${res_error}`,
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
   * @returns {Promise<PaymentPlatformModel.ValidateCustomerResponse>} -
   *   Success response
   * @name verifyCustomerForPayment
   * @summary: Verify customer for payment.
   * @description: Retrieve a link for making payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyCustomerForPayment/).
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
    } = PaymentPlatformModel.ValidateCustomerResponse().validate(responseData, {
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
