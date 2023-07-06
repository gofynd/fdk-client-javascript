const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const PaymentPlatformValidator = require("./PaymentPlatformValidator");
const PaymentPlatformModel = require("./PaymentPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Payment {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {PaymentPlatformValidator.ActivateAndDectivatePayoutParam} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
   * @name activateAndDectivatePayout
   * @summary: Partial Update Payout
   * @description: Partial Update Payout
   */
  async activateAndDectivatePayout({ uniqueTransferNo, body } = {}) {
    const {
      error,
    } = PaymentPlatformValidator.activateAndDectivatePayout().validate(
      {
        uniqueTransferNo,
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
    } = PaymentPlatformValidator.activateAndDectivatePayout().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > activateAndDectivatePayout \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.UpdatePayoutResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > activateAndDectivatePayout \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.DeletePayoutParam} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.DeletePayoutResponse>} - Success response
   * @name deletePayout
   * @summary: Delete Payout
   * @description: Delete Payout
   */
  async deletePayout({ uniqueTransferNo } = {}) {
    const { error } = PaymentPlatformValidator.deletePayout().validate(
      {
        uniqueTransferNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformValidator.deletePayout().validate(
      {
        uniqueTransferNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > deletePayout \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.DeletePayoutResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > deletePayout \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>}
   *   - Success response
   *
   * @name deleteSubscriptionPaymentMethod
   * @summary: Delete Subscription Payment Method
   * @description: Uses this api to Delete Subscription Payment Method
   */
  async deleteSubscriptionPaymentMethod({
    uniqueExternalId,
    paymentMethodId,
  } = {}) {
    const {
      error,
    } = PaymentPlatformValidator.deleteSubscriptionPaymentMethod().validate(
      {
        uniqueExternalId,
        paymentMethodId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformValidator.deleteSubscriptionPaymentMethod().validate(
      {
        uniqueExternalId,
        paymentMethodId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > deleteSubscriptionPaymentMethod \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["unique_external_id"] = uniqueExternalId;
    query_params["payment_method_id"] = paymentMethodId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > deleteSubscriptionPaymentMethod \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.GetAllPayoutsParam} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.PayoutsResponse>} - Success response
   * @name getAllPayouts
   * @summary: Get All Payouts
   * @description: Get All Payouts
   */
  async getAllPayouts({ uniqueExternalId } = {}) {
    const { error } = PaymentPlatformValidator.getAllPayouts().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformValidator.getAllPayouts().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getAllPayouts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["unique_external_id"] = uniqueExternalId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PayoutsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getAllPayouts \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.GetSubscriptionConfigParam} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.SubscriptionConfigResponse>} -
   *   Success response
   * @name getSubscriptionConfig
   * @summary: List Subscription Config
   * @description: Get all  Subscription Config details
   */
  async getSubscriptionConfig({} = {}) {
    const { error } = PaymentPlatformValidator.getSubscriptionConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformValidator.getSubscriptionConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getSubscriptionConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/configs`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.SubscriptionConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getSubscriptionConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.GetSubscriptionPaymentMethodParam} arg
   *   - Arg object
   *
   * @returns {Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>}
   *   - Success response
   *
   * @name getSubscriptionPaymentMethod
   * @summary: List Subscription Payment Method
   * @description: Get all  Subscription  Payment Method
   */
  async getSubscriptionPaymentMethod({ uniqueExternalId } = {}) {
    const {
      error,
    } = PaymentPlatformValidator.getSubscriptionPaymentMethod().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformValidator.getSubscriptionPaymentMethod().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > getSubscriptionPaymentMethod \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["unique_external_id"] = uniqueExternalId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.SubscriptionPaymentMethodResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > getSubscriptionPaymentMethod \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.SavePayoutParam} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.PayoutResponse>} - Success response
   * @name savePayout
   * @summary: Save Payout
   * @description: Save Payout
   */
  async savePayout({ body } = {}) {
    const { error } = PaymentPlatformValidator.savePayout().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = PaymentPlatformValidator.savePayout().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > savePayout \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.PayoutResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > savePayout \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.SaveSubscriptionSetupIntentParam} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>}
   *   - Success response
   *
   * @name saveSubscriptionSetupIntent
   * @summary: Save Subscription Setup Intent
   * @description: Uses this api to Save Subscription Setup Intent
   */
  async saveSubscriptionSetupIntent({ body } = {}) {
    const {
      error,
    } = PaymentPlatformValidator.saveSubscriptionSetupIntent().validate(
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
    } = PaymentPlatformValidator.saveSubscriptionSetupIntent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > saveSubscriptionSetupIntent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/setup/intent`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.SaveSubscriptionSetupIntentResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > saveSubscriptionSetupIntent \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.UpdatePayoutParam} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
   * @name updatePayout
   * @summary: Update Payout
   * @description: Update Payout
   */
  async updatePayout({ uniqueTransferNo, body } = {}) {
    const { error } = PaymentPlatformValidator.updatePayout().validate(
      {
        uniqueTransferNo,
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
    } = PaymentPlatformValidator.updatePayout().validate(
      {
        uniqueTransferNo,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > updatePayout \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.UpdatePayoutResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > updatePayout \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.VerifyIfscCodeParam} arg - Arg object
   * @returns {Promise<PaymentPlatformModel.IfscCodeResponse>} - Success response
   * @name verifyIfscCode
   * @summary: Ifsc Code Verification
   * @description: Get True/False for correct IFSC Code for adding bank details for refund
   */
  async verifyIfscCode({ ifscCode } = {}) {
    const { error } = PaymentPlatformValidator.verifyIfscCode().validate(
      {
        ifscCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentPlatformValidator.verifyIfscCode().validate(
      {
        ifscCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Payment > verifyIfscCode \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["ifsc_code"] = ifscCode;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/ifsc-code/verify`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = PaymentPlatformModel.IfscCodeResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Payment > verifyIfscCode \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Payment;
