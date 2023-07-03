const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
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
   * @param {PaymentPlatformApplicationValidator.addEdcDevice} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.EdcDeviceUpdateResponse>} - Success response
   * @name addEdcDevice
   * @summary: Update store id and device tag of edc device
   * @description: Use this API to Update store id and device tag of edc device
   */
  async addEdcDevice({ terminalUniqueIdentifier, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceUpdateResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > addEdcDevice \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.addRefundBankAccountUsingOTP} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
   * @name addRefundBankAccountUsingOTP
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
   */
  async addRefundBankAccountUsingOTP({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.RefundAccountResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > addRefundBankAccountUsingOTP \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.cancelPaymentLink} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.CancelPaymentLinkResponse>} -
   *   Success response
   * @name cancelPaymentLink
   * @summary: Cancel payment link
   * @description: Use this API to cancel a payment link for the customer
   */
  async cancelPaymentLink({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.CancelPaymentLinkResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > cancelPaymentLink \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.checkAndUpdatePaymentStatus} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.PaymentStatusUpdateResponse>} -
   *   Success response
   * @name checkAndUpdatePaymentStatus
   * @summary: Performs continuous polling to check status of payment on the server
   * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
   */
  async checkAndUpdatePaymentStatus({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentStatusUpdateResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > checkAndUpdatePaymentStatus \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.confirmPayment} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.PaymentConfirmationResponse>} -
   *   Success response
   * @name confirmPayment
   * @summary: Confirm payment after successful payment from payment gateway
   * @description: Use this API to confirm payment after payment gateway accepted payment.
   */
  async confirmPayment({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentConfirmationResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > confirmPayment \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.createPaymentLink} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.CreatePaymentLinkResponse>} -
   *   Success response
   * @name createPaymentLink
   * @summary: Create payment link
   * @description: Use this API to create a payment link for the customer
   */
  async createPaymentLink({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.CreatePaymentLinkResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > createPaymentLink \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.edcAggregatorsAndModelList} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.EdcAggregatorAndModelListResponse>}
   *   - Success response
   *
   * @name edcAggregatorsAndModelList
   * @summary: get some information about the store and edc device
   * @description: Use this API to get info of devices linked to a particular app.
   */
  async edcAggregatorsAndModelList({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcAggregatorAndModelListResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > edcAggregatorsAndModelList \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.edcDeviceList} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.EdcDeviceListResponse>} - Success response
   * @name edcDeviceList
   * @summary: get all the device list of an app
   * @description: Use this API to get all devices linked to a particular app.
   */
  async edcDeviceList({ pageNo, pageSize, isActive, storeId, deviceTag } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceListResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > edcDeviceList \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.edcDeviceStats} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.EdcDeviceStatsResponse>} - Success response
   * @name edcDeviceStats
   * @summary: get some information about the store and edc device
   * @description: Use this API to get info of devices linked to a particular app.
   */
  async edcDeviceStats({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceStatsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > edcDeviceStats \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.extensionPaymentUpdate} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.ExtensionPaymentUpdateResponseSerializer>}
   *   - Success response
   *
   * @name extensionPaymentUpdate
   * @summary: Extension will call this api to set the payment status of an order
   * @description: Use this API to Extension will call this api to set the payment status of an order
   */
  async extensionPaymentUpdate({ body } = {}) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.extensionPaymentUpdate().validate(
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
    } = PaymentPlatformApplicationValidator.extensionPaymentUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > extensionPaymentUpdate \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/update/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.ExtensionPaymentUpdateResponseSerializer().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > extensionPaymentUpdate \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getBankAccountDetailsOpenAPI} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.RefundAccountResponse>} - Success response
   * @name getBankAccountDetailsOpenAPI
   * @summary: Get bank details
   * @description: Use this API to get saved bank details for returned/cancelled order using order id.
   */
  async getBankAccountDetailsOpenAPI({
    orderId,

    requestHash,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.RefundAccountResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getBankAccountDetailsOpenAPI \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getBrandPaymentGatewayConfig} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.PaymentGatewayConfigResponse>} -
   *   Success response
   * @name getBrandPaymentGatewayConfig
   * @summary: Get All Brand Payment Gateway Config Secret
   * @description: Get All Brand Payment Gateway Config Secret
   */
  async getBrandPaymentGatewayConfig({} = {}) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getBrandPaymentGatewayConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformApplicationValidator.getBrandPaymentGatewayConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getBrandPaymentGatewayConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentGatewayConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getBrandPaymentGatewayConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getEdcDevice} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.EdcDeviceDetailsResponse>} -
   *   Success response
   * @name getEdcDevice
   * @summary: get details of a single edc device
   * @description: Use this API to get details of a single edc device
   */
  async getEdcDevice({ terminalUniqueIdentifier } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getEdcDevice \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getPaymentCodeOption} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.GetPaymentCodeResponse>} - Success response
   * @name getPaymentCodeOption
   * @summary: List Payment Options Method Codes
   * @description: Get all active List Payment Options Method Codes
   */
  async getPaymentCodeOption({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.GetPaymentCodeResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getPaymentCodeOption \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getPaymentLink} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.GetPaymentLinkResponse>} - Success response
   * @name getPaymentLink
   * @summary: Get payment link
   * @description: Use this API to get a payment link
   */
  async getPaymentLink({ paymentLinkId } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.GetPaymentLinkResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getPaymentLink \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getPaymentModeRoutes} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.PaymentOptionsResponse>} - Success response
   * @name getPaymentModeRoutes
   * @summary: Get All Valid Payment Options
   * @description: Use this API to get Get All Valid Payment Options for making payment
   */
  async getPaymentModeRoutes({ refresh, requestType } = {}) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        requestType,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentOptionsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getPaymentModeRoutes \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getPosPaymentModeRoutes} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.PaymentOptionsResponse>} - Success response
   * @name getPosPaymentModeRoutes
   * @summary: Get All Valid Payment Options
   * @description: Use this API to get Get All Valid Payment Options for making payment
   */
  async getPosPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    orderType,
    refresh,
    cardReference,
    userDetails,
  } = {}) {
    const {
      error,
    } = PaymentPlatformApplicationValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        orderType,
        refresh,
        cardReference,
        userDetails,
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
        cartId,
        pincode,
        checkoutMode,
        orderType,
        refresh,
        cardReference,
        userDetails,
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
    query_params["card_reference"] = cardReference;
    query_params["order_type"] = orderType;
    query_params["user_details"] = userDetails;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options/pos`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentOptionsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getPosPaymentModeRoutes \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getUserBeneficiaries} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
   *   Success response
   * @name getUserBeneficiaries
   * @summary: List User Beneficiary
   * @description: Get all active  beneficiary details added by the user for refund
   */
  async getUserBeneficiaries({ orderId } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.OrderBeneficiaryResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getUserBeneficiaries \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getUserCODlimitRoutes} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.GetUserCODLimitResponse>} - Success response
   * @name getUserCODlimitRoutes
   * @summary: Get COD limit for user
   * @description: Use this API to get user cod limit and reamining limit for the payment
   */
  async getUserCODlimitRoutes({ merchantUserId, mobileNo } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.GetUserCODLimitResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getUserCODlimitRoutes \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.getUserOrderBeneficiaries} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.OrderBeneficiaryResponse>} -
   *   Success response
   * @name getUserOrderBeneficiaries
   * @summary: List Order Beneficiary
   * @description: Get all active  beneficiary details added by the user for refund
   */
  async getUserOrderBeneficiaries({ orderId } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.OrderBeneficiaryResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getUserOrderBeneficiaries \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.initialisePayment} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.PaymentInitializationResponse>} -
   *   Success response
   * @name initialisePayment
   * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
   * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
   */
  async initialisePayment({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentInitializationResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > initialisePayment \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.merchantOnBoarding} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.MerchantOnBoardingResponse>} -
   *   Success response
   * @name merchantOnBoarding
   * @summary: API to push Ajiodhan merchant data to Gringotts system
   * @description: Use this API to push Ajiodhan merchant data to Gringotts system
   */
  async merchantOnBoarding({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.MerchantOnBoardingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > merchantOnBoarding \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.oauthGetUrl} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.GetOauthUrlResponse>} - Success response
   * @name oauthGetUrl
   * @summary: API to Get the url to call for oauth
   * @description: Use this API to Get the url to call for oauth.
   */
  async oauthGetUrl({
    aggregator,
    successRedirectUrl,
    failureRedirectUrl,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.GetOauthUrlResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > oauthGetUrl \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.paymentStatusBulk} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.PaymentStatusBulkHandlerResponse>}
   *   - Success response
   *
   * @name paymentStatusBulk
   * @summary: Get Payment status and information for a list of order_ids
   * @description: Use this API to get Payment status and information for a list of order_ids
   */
  async paymentStatusBulk({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentStatusBulkHandlerResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > paymentStatusBulk \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.pollingPaymentLink} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.PollingPaymentLinkResponse>} -
   *   Success response
   * @name pollingPaymentLink
   * @summary: Used for polling if payment successful or not
   * @description: Use this API to poll if payment through payment was successful or not
   */
  async pollingPaymentLink({ paymentLinkId } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PollingPaymentLinkResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > pollingPaymentLink \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.repaymentDetails} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.RepaymentResponse>} - Success response
   * @name repaymentDetails
   * @summary: API to register repayment details
   * @description: Use this API to register any repayment record in the db and notify the aggrgator
   */
  async repaymentDetails({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.RepaymentResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > repaymentDetails \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.resendOrCancelPayment} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.ResendOrCancelPaymentResponse>} -
   *   Success response
   * @name resendOrCancelPayment
   * @summary: API to resend and cancel a payment link which was already generated.
   * @description: Use this API to perform resend or cancel a payment link based on request payload.
   */
  async resendOrCancelPayment({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.ResendOrCancelPaymentResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > resendOrCancelPayment \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.resendPaymentLink} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.ResendPaymentLinkResponse>} -
   *   Success response
   * @name resendPaymentLink
   * @summary: Resend payment link
   * @description: Use this API to resend a payment link for the customer
   */
  async resendPaymentLink({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.ResendPaymentLinkResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > resendPaymentLink \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.revokeOauthToken} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.RevokeOAuthToken>} - Success response
   * @name revokeOauthToken
   * @summary: API to Revoke oauth for razorpay partnership
   * @description: Use this API to Revoke oauth for razorpay partnership
   */
  async revokeOauthToken({ aggregator } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.RevokeOAuthToken().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > revokeOauthToken \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.saveBrandPaymentGatewayConfig} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.PaymentGatewayToBeReviewed>} -
   *   Success response
   * @name saveBrandPaymentGatewayConfig
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   */
  async saveBrandPaymentGatewayConfig({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PaymentGatewayToBeReviewed().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > saveBrandPaymentGatewayConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.setUserCODlimitRoutes} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.SetCODOptionResponse>} - Success response
   * @name setUserCODlimitRoutes
   * @summary: Set COD option for user for payment
   * @description: Use this API to set cod option as true or false for the payment
   */
  async setUserCODlimitRoutes({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.SetCODOptionResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > setUserCODlimitRoutes \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.updateEdcDevice} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.EdcDeviceAddResponse>} - Success response
   * @name updateEdcDevice
   * @summary: map new edc device to the terminal
   * @description: Use this API to map new edc device to the terminal
   */
  async updateEdcDevice({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.EdcDeviceAddResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > updateEdcDevice \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformApplicationValidator.verifyCustomerForPayment} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.ValidateCustomerResponse>} -
   *   Success response
   * @name verifyCustomerForPayment
   * @summary: Validate customer for payment
   * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
   */
  async verifyCustomerForPayment({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.ValidateCustomerResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > verifyCustomerForPayment \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Payment;
