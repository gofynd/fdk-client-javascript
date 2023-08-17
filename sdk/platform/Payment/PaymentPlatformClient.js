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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
   * @name activateAndDectivatePayout
   * @summary: Partial Update Payout
   * @description: Partial Update Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/activateAndDectivatePayout/).
   */
  async activateAndDectivatePayout(
    { uniqueTransferNo, body } = {},
    { headers } = { headers: false }
  ) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.UpdatePayoutResponse().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.DeletePayoutResponse>} - Success response
   * @name deletePayout
   * @summary: Delete Payout
   * @description: Delete Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deletePayout/).
   */
  async deletePayout(
    { uniqueTransferNo } = {},
    { headers } = { headers: false }
  ) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.DeletePayoutResponse().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse>}
   *   - Success response
   *
   * @name deleteSubscriptionPaymentMethod
   * @summary: Delete Subscription Payment Method
   * @description: Uses this api to Delete Subscription Payment Method - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deleteSubscriptionPaymentMethod/).
   */
  async deleteSubscriptionPaymentMethod(
    { uniqueExternalId, paymentMethodId } = {},
    { headers } = { headers: false }
  ) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.DeleteSubscriptionPaymentMethodResponse().validate(
      responseData,
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PayoutsResponse>} - Success response
   * @name getAllPayouts
   * @summary: Get All Payouts
   * @description: Get All Payouts - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAllPayouts/).
   */
  async getAllPayouts(
    { uniqueExternalId } = {},
    { headers } = { headers: false }
  ) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PayoutsResponse().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.SubscriptionConfigResponse>} -
   *   Success response
   * @name getSubscriptionConfig
   * @summary: List Subscription Config
   * @description: Get all  Subscription Config details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionConfig/).
   */
  async getSubscriptionConfig({ headers } = { headers: false }) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.SubscriptionConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.SubscriptionPaymentMethodResponse>}
   *   - Success response
   *
   * @name getSubscriptionPaymentMethod
   * @summary: List Subscription Payment Method
   * @description: Get all  Subscription  Payment Method - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionPaymentMethod/).
   */
  async getSubscriptionPaymentMethod(
    { uniqueExternalId } = {},
    { headers } = { headers: false }
  ) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.SubscriptionPaymentMethodResponse().validate(
      responseData,
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PayoutResponse>} - Success response
   * @name savePayout
   * @summary: Save Payout
   * @description: Save Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/savePayout/).
   */
  async savePayout({ body } = {}, { headers } = { headers: false }) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PayoutResponse().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentResponse>}
   *   - Success response
   *
   * @name saveSubscriptionSetupIntent
   * @summary: Save Subscription Setup Intent
   * @description: Uses this api to Save Subscription Setup Intent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/saveSubscriptionSetupIntent/).
   */
  async saveSubscriptionSetupIntent(
    { body } = {},
    { headers } = { headers: false }
  ) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.SaveSubscriptionSetupIntentResponse().validate(
      responseData,
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.UpdatePayoutResponse>} - Success response
   * @name updatePayout
   * @summary: Update Payout
   * @description: Update Payout - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePayout/).
   */
  async updatePayout(
    { uniqueTransferNo, body } = {},
    { headers } = { headers: false }
  ) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.UpdatePayoutResponse().validate(responseData, {
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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.IfscCodeResponse>} - Success response
   * @name verifyIfscCode
   * @summary: Ifsc Code Verification
   * @description: Get True/False for correct IFSC Code for adding bank details for refund - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyIfscCode/).
   */
  async verifyIfscCode({ ifscCode } = {}, { headers } = { headers: false }) {
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.IfscCodeResponse().validate(responseData, {
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
