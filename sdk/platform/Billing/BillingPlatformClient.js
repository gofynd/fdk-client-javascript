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
      allowUnknown: true,
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
      allowUnknown: true,
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
      allowUnknown: true,
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
      { abortEarly: false, allowUnknown: true }
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
      allowUnknown: true,
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
      .validate(responseData, { abortEarly: false, allowUnknown: true });

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
    { productSuite, type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getFeatureLimitConfig().validate(
      {
        productSuite,
        type,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getFeatureLimitConfig().validate(
      {
        productSuite,
        type,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getFeatureLimitConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["product_suite"] = productSuite;
    query_params["type"] = type;

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
      allowUnknown: true,
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
      allowUnknown: true,
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
      allowUnknown: true,
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
   * @param {BillingPlatformValidator.GetPaymentOptionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.GetPaymentOptions>} - Success response
   * @name getPaymentOptions
   * @summary: API to get payment options
   * @description: API to get payment options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getPaymentOptions/).
   */
  async getPaymentOptions(
    { transactionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getPaymentOptions().validate(
      {
        transactionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getPaymentOptions().validate(
      {
        transactionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getPaymentOptions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["transaction_id"] = transactionId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/payment/options`,
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
    } = BillingPlatformModel.GetPaymentOptions().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getPaymentOptions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetPaymentTransactionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.PaymentTransactionDetails>} -
   *   Success response
   * @name getPaymentTransaction
   * @summary: API to get payment transaction details
   * @description: API to get payment transaction details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getPaymentTransaction/).
   */
  async getPaymentTransaction(
    { transactionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getPaymentTransaction().validate(
      {
        transactionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getPaymentTransaction().validate(
      {
        transactionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getPaymentTransaction \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/payment/transaction/${transactionId}`,
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
    } = BillingPlatformModel.PaymentTransactionDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getPaymentTransaction \n ${res_error}`,
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
      allowUnknown: true,
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

  /**
   * @param {BillingPlatformValidator.GetentityDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.EntityResponse>} - Success response
   * @name getentityDetail
   * @summary: Generic api to get the entity detail
   * @description: Generic api to get the entity detail - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getentityDetail/).
   */
  async getentityDetail(
    {
      entityName,
      channel,
      entityId,
      component,
      componentName,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getentityDetail().validate(
      {
        entityName,
        channel,
        entityId,
        component,
        componentName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.getentityDetail().validate(
      {
        entityName,
        channel,
        entityId,
        component,
        componentName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getentityDetail \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["entity_name"] = entityName;
    query_params["entity_id"] = entityId;
    query_params["channel"] = channel;
    query_params["component"] = component;
    query_params["component_name"] = componentName;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/entity/detail`,
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
    } = BillingPlatformModel.EntityResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getentityDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GlobalSettingsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.GlobalSettings>} - Success response
   * @name globalSettings
   * @summary: API to get global settings details
   * @description: API to get global settings details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/globalSettings/).
   */
  async globalSettings(
    { pageNo, pageSize, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.globalSettings().validate(
      {
        pageNo,
        pageSize,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.globalSettings().validate(
      {
        pageNo,
        pageSize,
        query,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > globalSettings \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["query"] = query;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/global-settings`,
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
    } = BillingPlatformModel.GlobalSettings().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > globalSettings \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.PaymentOptionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.PaymentOptions>} - Success response
   * @name paymentOptions
   * @summary: API to get payment details of requested payment options
   * @description: API to get payment details of requested payment options. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/paymentOptions/).
   */
  async paymentOptions(
    { code, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.paymentOptions().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.paymentOptions().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > paymentOptions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["code"] = code;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/payment-options`,
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
    } = BillingPlatformModel.PaymentOptions().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > paymentOptions \n ${res_error}`,
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
      allowUnknown: true,
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
      allowUnknown: true,
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
   * @param {BillingPlatformValidator.SubscriptionConfigsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.ConfigRes>} - Success response
   * @name subscriptionConfigs
   * @summary: API to get subscription config details
   * @description: API to get subscription config details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionConfigs/).
   */
  async subscriptionConfigs(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.subscriptionConfigs().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.subscriptionConfigs().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > subscriptionConfigs \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/configs`,
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
    } = BillingPlatformModel.ConfigRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > subscriptionConfigs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.SubscriptionMethodsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionMethods>} - Success response
   * @name subscriptionMethods
   * @summary: API to get subscription methods
   * @description: API to get subscription methods. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionMethods/).
   */
  async subscriptionMethods(
    { uniqueExternalId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.subscriptionMethods().validate(
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
    } = BillingPlatformValidator.subscriptionMethods().validate(
      {
        uniqueExternalId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > subscriptionMethods \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["unique_external_id"] = uniqueExternalId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/methods`,
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
    } = BillingPlatformModel.SubscriptionMethods().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > subscriptionMethods \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.SubscriptionPlanChangeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.PlanChangeDetails>} - Success response
   * @name subscriptionPlanChange
   * @summary: API to get plan change details of subscription
   * @description: API to get plan change details of subscription. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionPlanChange/).
   */
  async subscriptionPlanChange(
    { productSuite, uniqueId, platform, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = BillingPlatformValidator.subscriptionPlanChange().validate(
      {
        productSuite,
        uniqueId,
        platform,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.subscriptionPlanChange().validate(
      {
        productSuite,
        uniqueId,
        platform,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > subscriptionPlanChange \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["product_suite"] = productSuite;
    query_params["unique_id"] = uniqueId;
    query_params["platform"] = platform;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/plan-change`,
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
    } = BillingPlatformModel.PlanChangeDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > subscriptionPlanChange \n ${res_error}`,
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
      allowUnknown: true,
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

  /**
   * @param {BillingPlatformValidator.VerifyPaymentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.VerifyPaymentRes>} - Success response
   * @name verifyPayment
   * @summary: API to verify subscription payment
   * @description: API to verify subscription payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/verifyPayment/).
   */
  async verifyPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.verifyPayment().validate(
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
    } = BillingPlatformValidator.verifyPayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > verifyPayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/verify-payment`,
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
    } = BillingPlatformModel.VerifyPaymentRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > verifyPayment \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Billing;
