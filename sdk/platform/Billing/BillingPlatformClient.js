const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const BillingPlatformValidator = require("./BillingPlatformValidator");
const BillingPlatformModel = require("./BillingPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Billing {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {BillingPlatformValidator.CancelSubscriptionChargeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionChargeRes>} - Success response
   * @name cancelSubscriptionCharge
   * @summary: Cancel the extension subscription
   * @description: Cancel an ongoing extension subscription for the company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/cancelSubscriptionCharge/).
   */
  async cancelSubscriptionCharge(
    { extensionId, subscriptionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = BillingPlatformValidator.cancelSubscriptionCharge().validate(
      {
        extensionId,
        subscriptionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.cancelSubscriptionCharge().validate(
      {
        extensionId,
        subscriptionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > cancelSubscriptionCharge \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/extension/${extensionId}/subscription/${subscriptionId}/cancel`,
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
    } = BillingPlatformModel.SubscriptionChargeRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > cancelSubscriptionCharge \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.CreateOneTimeChargeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.CreateOneTimeChargeResponseSchemas>}
   *   - Success response
   *
   * @name createOneTimeCharge
   * @summary: Generate a one-time charge
   * @description: Generate a one-time charge for specific services or products. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/createOneTimeCharge/).
   */
  async createOneTimeCharge(
    { extensionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.createOneTimeCharge().validate(
      {
        extensionId,
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
    } = BillingPlatformValidator.createOneTimeCharge().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > createOneTimeCharge \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/extension/${extensionId}/one_time_charge`,
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
    } = BillingPlatformModel.CreateOneTimeChargeResponseSchemas().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > createOneTimeCharge \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.CreateSubscriptionChargeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.CreateSubscription>} - Success response
   * @name createSubscriptionCharge
   * @summary: Initiate subscription billing
   * @description: Initiates and registers a subscription charge for a specific extension for a given company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/createSubscriptionCharge/).
   */
  async createSubscriptionCharge(
    { extensionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = BillingPlatformValidator.createSubscriptionCharge().validate(
      {
        extensionId,
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
    } = BillingPlatformValidator.createSubscriptionCharge().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > createSubscriptionCharge \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/extension/${extensionId}/subscription`,
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
    } = BillingPlatformModel.CreateSubscription().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > createSubscriptionCharge \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetChargeDetailsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.ChargeDetails>} - Success response
   * @name getChargeDetails
   * @summary: Obtain charge details
   * @description: Retrieve comprehensive details about a specific billing charge. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/getChargeDetails/).
   */
  async getChargeDetails(
    { extensionId, chargeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getChargeDetails().validate(
      {
        extensionId,
        chargeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getChargeDetails().validate(
      {
        extensionId,
        chargeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getChargeDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/extension/${extensionId}/charge/${chargeId}`,
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
    } = BillingPlatformModel.ChargeDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getChargeDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetSubscriptionChargeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionChargeRes>} - Success response
   * @name getSubscriptionCharge
   * @summary: Retrieve subscription charge details
   * @description: Retrieve detailed information about subscription charges using this API. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/billing/getSubscriptionCharge/).
   */
  async getSubscriptionCharge(
    { extensionId, subscriptionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getSubscriptionCharge().validate(
      {
        extensionId,
        subscriptionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getSubscriptionCharge().validate(
      {
        extensionId,
        subscriptionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getSubscriptionCharge \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/extension/${extensionId}/subscription/${subscriptionId}`,
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
    } = BillingPlatformModel.SubscriptionChargeRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getSubscriptionCharge \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Billing;
