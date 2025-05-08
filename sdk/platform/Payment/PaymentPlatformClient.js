const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.UpdatePayoutDetails>} - Success response
   * @name activateAndDectivatePayout
   * @summary: Activate/Deactivate payout
   * @description: Enable or disable payout functionality. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/activateAndDectivatePayout/).
   */
  async activateAndDectivatePayout(
    { uniqueTransferNo, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.UpdatePayoutDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > activateAndDectivatePayout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.DeletePayoutParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.DeletePayoutDetails>} - Success response
   * @name deletePayout
   * @summary: Delete payout
   * @description: Remove a payout transaction from the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deletePayout/).
   */
  async deletePayout(
    { uniqueTransferNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.DeletePayoutDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > deletePayout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.DeleteSubscriptionPaymentMethodParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.DeleteSubscriptionPaymentMethodDetails>}
   *   - Success response
   *
   * @name deleteSubscriptionPaymentMethod
   * @summary: Delete subscription payment method
   * @description: Remove a payment method from subscription options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/deleteSubscriptionPaymentMethod/).
   */
  async deleteSubscriptionPaymentMethod(
    { uniqueExternalId, paymentMethodId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.DeleteSubscriptionPaymentMethodDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > deleteSubscriptionPaymentMethod \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.GetAllPayoutsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PayoutsDetails>} - Success response
   * @name getAllPayouts
   * @summary: List payouts
   * @description: Retrieve a list of all payout transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getAllPayouts/).
   */
  async getAllPayouts(
    { uniqueExternalId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PayoutsDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getAllPayouts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.GetSubscriptionConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.SubscriptionConfigDetails>} -
   *   Success response
   * @name getSubscriptionConfig
   * @summary: Get subscription config
   * @description: Retrieve configuration settings for subscriptions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionConfig/).
   */
  async getSubscriptionConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.SubscriptionConfigDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getSubscriptionConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.GetSubscriptionPaymentMethodParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.SubscriptionPaymentMethodDetails>}
   *   - Success response
   *
   * @name getSubscriptionPaymentMethod
   * @summary: Get subscription payment method
   * @description: Retrieve payment methods for subscriptions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/getSubscriptionPaymentMethod/).
   */
  async getSubscriptionPaymentMethod(
    { uniqueExternalId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.SubscriptionPaymentMethodDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > getSubscriptionPaymentMethod \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.SavePayoutParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.PayoutDetails>} - Success response
   * @name savePayout
   * @summary: Save payout
   * @description: Store and process a payout transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/savePayout/).
   */
  async savePayout(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.PayoutDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > savePayout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.SaveSubscriptionSetupIntentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.SaveSubscriptionSetupIntentDetails>}
   *   - Success response
   *
   * @name saveSubscriptionSetupIntent
   * @summary: Save subscription setup intent
   * @description: Store and process setup intent for subscriptions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/saveSubscriptionSetupIntent/).
   */
  async saveSubscriptionSetupIntent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.SaveSubscriptionSetupIntentDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > saveSubscriptionSetupIntent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.UpdatePayoutParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.UpdatePayoutDetails>} - Success response
   * @name updatePayout
   * @summary: Update payout
   * @description: Modify the details of a payout transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/updatePayout/).
   */
  async updatePayout(
    { uniqueTransferNo, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.UpdatePayoutDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > updatePayout \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentPlatformValidator.VerifyIfscCodeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PaymentPlatformModel.IfscCodeDetails>} - Success response
   * @name verifyIfscCode
   * @summary: Verify IFSC code
   * @description: Checks the validity of the provided IFSC code and returns bank details if valid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/payment/verifyIfscCode/).
   */
  async verifyIfscCode(
    { ifscCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = PaymentPlatformModel.IfscCodeDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Payment > verifyIfscCode \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Payment;
