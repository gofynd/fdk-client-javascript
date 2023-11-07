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
   * @param {BillingPlatformValidator.ActivateSubscriptionPlanParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionActivateRes>} - Success response
   * @name activateSubscriptionPlan
   * @summary: Activate subscription
   * @description: It will activate subscription plan for customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/activateSubscriptionPlan/).
   */
  async activateSubscriptionPlan(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = BillingPlatformValidator.activateSubscriptionPlan().validate(
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
    } = BillingPlatformValidator.activateSubscriptionPlan().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > activateSubscriptionPlan \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/activate`,
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
    } = BillingPlatformModel.SubscriptionActivateRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > activateSubscriptionPlan \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.CancelSubscriptionChargeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
   * @name cancelSubscriptionCharge
   * @summary: Cancel subscription charge
   * @description: Cancel subscription and attached charges. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionCharge/).
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
    } = BillingPlatformModel.EntitySubscription().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
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
   * @param {BillingPlatformValidator.CancelSubscriptionPlanParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.CancelSubscriptionRes>} - Success response
   * @name cancelSubscriptionPlan
   * @summary: Cancel subscription
   * @description: It will cancel current active subscription. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionPlan/).
   */
  async cancelSubscriptionPlan(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = BillingPlatformValidator.cancelSubscriptionPlan().validate(
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
    } = BillingPlatformValidator.cancelSubscriptionPlan().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > cancelSubscriptionPlan \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/cancel`,
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
    } = BillingPlatformModel.CancelSubscriptionRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > cancelSubscriptionPlan \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.CheckCouponValidityParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.CheckValidityResponse>} - Success response
   * @name checkCouponValidity
   * @summary: Check coupon validity
   * @description: Check coupon validity. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/checkCouponValidity/).
   */
  async checkCouponValidity(
    { plan, couponCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.checkCouponValidity().validate(
      {
        plan,
        couponCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.checkCouponValidity().validate(
      {
        plan,
        couponCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > checkCouponValidity \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["plan"] = plan;
    query_params["coupon_code"] = couponCode;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/coupon/check-validity`,
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
    } = BillingPlatformModel.CheckValidityResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > checkCouponValidity \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.CreateOneTimeChargeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.CreateOneTimeChargeResponse>} -
   *   Success response
   * @name createOneTimeCharge
   * @summary: Create one time subscription charge
   * @description: Register one time subscription charge for a seller of your extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/createOneTimeCharge/).
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
    } = BillingPlatformModel.CreateOneTimeChargeResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
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
   * @returns {Promise<BillingPlatformModel.CreateSubscriptionResponse>} -
   *   Success response
   * @name createSubscriptionCharge
   * @summary: Create subscription charge
   * @description: Register subscription charge for a seller of your extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/createSubscriptionCharge/).
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
    } = BillingPlatformModel.CreateSubscriptionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

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
   * @returns {Promise<BillingPlatformModel.OneTimeChargeEntity>} - Success response
   * @name getChargeDetails
   * @summary: Get subscription charge details
   * @description: Get created subscription charge details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getChargeDetails/).
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
    } = BillingPlatformModel.OneTimeChargeEntity().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
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
   * @param {BillingPlatformValidator.GetCustomerDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
   * @name getCustomerDetail
   * @summary: Get subscription customer detail
   * @description: Get subscription customer detail. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getCustomerDetail/).
   */
  async getCustomerDetail(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getCustomerDetail().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getCustomerDetail().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getCustomerDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/customer-detail`,
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
    } = BillingPlatformModel.SubscriptionCustomer().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getCustomerDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetEnterprisePlansParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.Plan[]>} - Success response
   * @name getEnterprisePlans
   * @summary: Get Enterprise Plans
   * @description: Get Enterprise Plans.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getEnterprisePlans/).
   */
  async getEnterprisePlans(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getEnterprisePlans().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getEnterprisePlans().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getEnterprisePlans \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/plans`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(BillingPlatformModel.Plan())
      .validate(responseData, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getEnterprisePlans \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetFeatureLimitConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionLimit>} - Success response
   * @name getFeatureLimitConfig
   * @summary: Get subscription subscription limits
   * @description: Get subscription subscription limits. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getFeatureLimitConfig/).
   */
  async getFeatureLimitConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getFeatureLimitConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getFeatureLimitConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getFeatureLimitConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/current-limit`,
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
    } = BillingPlatformModel.SubscriptionLimit().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getFeatureLimitConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetInvoiceByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.Invoice>} - Success response
   * @name getInvoiceById
   * @summary: Get invoice by id
   * @description: Get invoice by id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoiceById/).
   */
  async getInvoiceById(
    { invoiceId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getInvoiceById().validate(
      {
        invoiceId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getInvoiceById().validate(
      {
        invoiceId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getInvoiceById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/invoice/${invoiceId}`,
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
    } = BillingPlatformModel.Invoice().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getInvoiceById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetInvoicesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.Invoices>} - Success response
   * @name getInvoices
   * @summary: Get invoices
   * @description: Get invoices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoices/).
   */
  async getInvoices(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getInvoices().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = BillingPlatformValidator.getInvoices().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getInvoices \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/invoice/list`,
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
    } = BillingPlatformModel.Invoices().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getInvoices \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetSubscriptionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionStatus>} - Success response
   * @name getSubscription
   * @summary: Get current subscription detail
   * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscription/).
   */
  async getSubscription(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getSubscription().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getSubscription().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getSubscription \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/current`,
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
    } = BillingPlatformModel.SubscriptionStatus().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getSubscription \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetSubscriptionChargeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
   * @name getSubscriptionCharge
   * @summary: Get subscription charge details
   * @description: Get created subscription charge details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscriptionCharge/).
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
    } = BillingPlatformModel.EntitySubscription().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
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

  /**
   * @param {BillingPlatformValidator.PlanStatusUpdateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.Plan>} - Success response
   * @name planStatusUpdate
   * @summary: Update Status of The plan
   * @description: It will update the status of the plan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/planStatusUpdate/).
   */
  async planStatusUpdate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.planStatusUpdate().validate(
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
    } = BillingPlatformValidator.planStatusUpdate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > planStatusUpdate \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/plan/status`,
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
    } = BillingPlatformModel.Plan().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > planStatusUpdate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.SubscripePlanParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscribePlanRes>} - Success response
   * @name subscripePlan
   * @summary: Subscribe plan.
   * @description: It will subscribe a plan. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscripePlan/).
   */
  async subscripePlan(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.subscripePlan().validate(
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
    } = BillingPlatformValidator.subscripePlan().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > subscripePlan \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/payment/initiate`,
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
    } = BillingPlatformModel.SubscribePlanRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > subscripePlan \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.UpsertCustomerDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
   * @name upsertCustomerDetail
   * @summary: Upsert subscription customer detail
   * @description: Upsert subscription customer detail. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/upsertCustomerDetail/).
   */
  async upsertCustomerDetail(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.upsertCustomerDetail().validate(
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
    } = BillingPlatformValidator.upsertCustomerDetail().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > upsertCustomerDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/customer-detail`,
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
    } = BillingPlatformModel.SubscriptionCustomer().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > upsertCustomerDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Billing;
