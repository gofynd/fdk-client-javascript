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
   * @summary: Activate a subscription plan.
   * @description: Activate a specific subscription plan for a customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/activateSubscriptionPlan/).
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
   * @returns {Promise<BillingPlatformModel.SubscriptionChargeRes>} - Success response
   * @name cancelSubscriptionCharge
   * @summary: Cancel a subscription charge.
   * @description: Cancel an ongoing subscription charge for a customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionCharge/).
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
   * @param {BillingPlatformValidator.CancelSubscriptionPlanParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.CancelSubscriptionRes>} - Success response
   * @name cancelSubscriptionPlan
   * @summary: Cancel a subscription plan.
   * @description: Cancel an active subscription plan for a customer - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/cancelSubscriptionPlan/).
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
   * @param {BillingPlatformValidator.ChangePlanParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionActivateRes>} - Success response
   * @name changePlan
   * @summary: Upgrade plan.
   * @description: Admin user can modify the subscription plan for an seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/changePlan/).
   */
  async changePlan(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.changePlan().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = BillingPlatformValidator.changePlan().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > changePlan \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/plan-change`,
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
          message: `Response Validation Warnings for platform > Billing > changePlan \n ${res_error}`,
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
   * @summary: Verify coupon validity.
   * @description: Checks whether a coupon code is valid for discounts while billing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/checkCouponValidity/).
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
   * @summary: Generate a one-time charge.
   * @description: Generate a one-time charge for specific services or products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/createOneTimeCharge/).
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
   * @param {BillingPlatformValidator.CreditTransactionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.CreditTransactionResponse>} -
   *   Success response
   * @name creditTransaction
   * @summary: Credit Transaction
   * @description: Credit Transaction - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/creditTransaction/).
   */
  async creditTransaction(
    {
      uniqueId,
      productSuite,
      type,
      pageSize,
      pageNo,
      startDate,
      endDate,
      searchType,
      searchValue,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.creditTransaction().validate(
      {
        uniqueId,
        productSuite,
        type,
        pageSize,
        pageNo,
        startDate,
        endDate,
        searchType,
        searchValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.creditTransaction().validate(
      {
        uniqueId,
        productSuite,
        type,
        pageSize,
        pageNo,
        startDate,
        endDate,
        searchType,
        searchValue,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > creditTransaction \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["unique_id"] = uniqueId;
    query_params["product_suite"] = productSuite;
    query_params["type"] = type;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["search_type"] = searchType;
    query_params["search_value"] = searchValue;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/credit-transaction`,
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
    } = BillingPlatformModel.CreditTransactionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > creditTransaction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.CurrentAppLimitParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionLimit>} - Success response
   * @name currentAppLimit
   * @summary: Obtain feature limit configurations.
   * @description: Retrieve configuration settings for feature limits in subscription plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/currentAppLimit/).
   */
  async currentAppLimit(
    { productSuite, type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.currentAppLimit().validate(
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
    } = BillingPlatformValidator.currentAppLimit().validate(
      {
        productSuite,
        type,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > currentAppLimit \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["product_suite"] = productSuite;
    query_params["type"] = type;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/current-app-limit`,
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
          message: `Response Validation Warnings for platform > Billing > currentAppLimit \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.GetBankListParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @name getBankList
   * @summary: Get Bank List
   * @description: Get Bank List - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getBankList/).
   */
  async getBankList(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.getBankList().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = BillingPlatformValidator.getBankList().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > getBankList \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/payment/bank/list`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > getBankList \n ${res_error}`,
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
   * @summary: Obtain charge details.
   * @description: Retrieve comprehensive details about a specific billing charge. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getChargeDetails/).
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
   * @param {BillingPlatformValidator.GetCustomerDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
   * @name getCustomerDetail
   * @summary: Fetch customer details.
   * @description: Obtain customer-related billing information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getCustomerDetail/).
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
   * @summary: Retrieve enterprise-level plans.
   * @description: Retrieve available enterprise-level subscription plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getEnterprisePlans/).
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
   * @summary: Obtain feature limit configurations.
   * @description: Retrieve configuration settings for feature limits in subscription plans. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getFeatureLimitConfig/).
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
   * @returns {Promise<BillingPlatformModel.InvoiceData>} - Success response
   * @name getInvoiceById
   * @summary: Get a specific invoice.
   * @description: Retrieve a particular invoice's details by providing its unique ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoiceById/).
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
    } = BillingPlatformModel.InvoiceData().validate(responseData, {
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
   * @summary: Retrieve invoices.
   * @description: Retrieve invoices for billing and payment tracking. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getInvoices/).
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
   * @summary: Retrieve subscription details.
   * @description: Retrieve details of a customer's subscription information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscription/).
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
   * @returns {Promise<BillingPlatformModel.SubscriptionChargeRes>} - Success response
   * @name getSubscriptionCharge
   * @summary: Retrieve subscription charge details.
   * @description: Retrieve detailed information about subscription charges using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/getSubscriptionCharge/).
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

  /**
   * @param {BillingPlatformValidator.GetentityDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.EntityDetail[]>} - Success response
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

    const { error: res_error } = Joi.array()
      .items(BillingPlatformModel.EntityDetail())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

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
   * @param {BillingPlatformValidator.MethodDefaultParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.Message>} - Success response
   * @name methodDefault
   * @summary: Method Default
   * @description: Method Default - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/methodDefault/).
   */
  async methodDefault(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.methodDefault().validate(
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
    } = BillingPlatformValidator.methodDefault().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > methodDefault \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/method/default`,
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
    } = BillingPlatformModel.Message().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > methodDefault \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.PaymentCollectParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.PaymentCollectRes>} - Success response
   * @name paymentCollect
   * @summary: Payment Collect
   * @description: Payment Collect - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/paymentCollect/).
   */
  async paymentCollect(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.paymentCollect().validate(
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
    } = BillingPlatformValidator.paymentCollect().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > paymentCollect \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/payment/collect`,
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
    } = BillingPlatformModel.PaymentCollectRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > paymentCollect \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.PaymentInitiateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscribePlanRes>} - Success response
   * @name paymentInitiate
   * @summary: Initiate Payment
   * @description: Initiate Payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/paymentInitiate/).
   */
  async paymentInitiate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.paymentInitiate().validate(
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
    } = BillingPlatformValidator.paymentInitiate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > paymentInitiate \n ${warrning}`,
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
          message: `Response Validation Warnings for platform > Billing > paymentInitiate \n ${res_error}`,
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
   * @param {BillingPlatformValidator.PaymentStatusParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.PaymentStatusResponse>} - Success response
   * @name paymentStatus
   * @summary: Credit Transaction
   * @description: Credit Transaction - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/paymentStatus/).
   */
  async paymentStatus(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.paymentStatus().validate(
      {
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
    } = BillingPlatformValidator.paymentStatus().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > paymentStatus \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/payment-status`,
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
    } = BillingPlatformModel.PaymentStatusResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > paymentStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.PlanDowngradeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.PostDowngradeRes>} - Success response
   * @name planDowngrade
   * @summary: Plan change downgrade
   * @description: Plan change downgrade - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/planDowngrade/).
   */
  async planDowngrade(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.planDowngrade().validate(
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
    } = BillingPlatformValidator.planDowngrade().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > planDowngrade \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/plan-change/downgrade`,
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
    } = BillingPlatformModel.PostDowngradeRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > planDowngrade \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.PlanDowngradeGetParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.DowngradeRes>} - Success response
   * @name planDowngradeGet
   * @summary: Get plan change downgrade
   * @description: Get plan change downgrade - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/planDowngradeGet/).
   */
  async planDowngradeGet(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.planDowngradeGet().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.planDowngradeGet().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > planDowngradeGet \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/plan-change/downgrade`,
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
    } = BillingPlatformModel.DowngradeRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > planDowngradeGet \n ${res_error}`,
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
   * @summary: Update subscription plan status.
   * @description: Modify the status of a subscription plan. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/planStatusUpdate/).
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
   * @param {BillingPlatformValidator.SetupIntentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SetupIntentRes>} - Success response
   * @name setupIntent
   * @summary: Setup Intent
   * @description: Setup Intent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/setupIntent/).
   */
  async setupIntent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.setupIntent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = BillingPlatformValidator.setupIntent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > setupIntent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/setup/intent`,
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
    } = BillingPlatformModel.SetupIntentRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > setupIntent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.SetupMandateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.Message>} - Success response
   * @name setupMandate
   * @summary: Setup Mandate
   * @description: Setup Mandate - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/setupMandate/).
   */
  async setupMandate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.setupMandate().validate(
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
    } = BillingPlatformValidator.setupMandate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > setupMandate \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/setup/mandate`,
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
    } = BillingPlatformModel.Message().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > setupMandate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.SetupPaymentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SetupPayment>} - Success response
   * @name setupPayment
   * @summary: Setup Payment
   * @description: Setup Payment - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/setupPayment/).
   */
  async setupPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.setupPayment().validate(
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
    } = BillingPlatformValidator.setupPayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > setupPayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/setup/payment`,
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
    } = BillingPlatformModel.SetupPayment().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > setupPayment \n ${res_error}`,
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
   * @param {BillingPlatformValidator.SubscriptionMethodsDeleteParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.ResourceNotFound>} - Success response
   * @name subscriptionMethodsDelete
   * @summary: API to get subscription methods
   * @description: API to get subscription methods. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionMethodsDelete/).
   */
  async subscriptionMethodsDelete(
    { uniqueExternalId, paymentMethodId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = BillingPlatformValidator.subscriptionMethodsDelete().validate(
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
    } = BillingPlatformValidator.subscriptionMethodsDelete().validate(
      {
        uniqueExternalId,
        paymentMethodId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > subscriptionMethodsDelete \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["unique_external_id"] = uniqueExternalId;
    query_params["payment_method_id"] = paymentMethodId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
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
    } = BillingPlatformModel.ResourceNotFound().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > subscriptionMethodsDelete \n ${res_error}`,
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
    { productSuite, coupon, uniqueId, platform, planId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = BillingPlatformValidator.subscriptionPlanChange().validate(
      {
        productSuite,
        coupon,
        uniqueId,
        platform,
        planId,
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
        coupon,
        uniqueId,
        platform,
        planId,
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
    query_params["coupon"] = coupon;
    query_params["unique_id"] = uniqueId;
    query_params["platform"] = platform;
    query_params["plan_id"] = planId;

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
   * @param {BillingPlatformValidator.SubscriptionRenewParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.SubscriptionRenewRes>} - Success response
   * @name subscriptionRenew
   * @summary: Subscription Renew
   * @description: Subscription Renew - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/subscriptionRenew/).
   */
  async subscriptionRenew(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.subscriptionRenew().validate(
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
    } = BillingPlatformValidator.subscriptionRenew().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > subscriptionRenew \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/renew`,
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
    } = BillingPlatformModel.SubscriptionRenewRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > subscriptionRenew \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.TopupCancelCreditParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.CancelTopupRes>} - Success response
   * @name topupCancelCredit
   * @summary: Cancel Topup
   * @description: Cancel Topup - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/topupCancelCredit/).
   */
  async topupCancelCredit(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.topupCancelCredit().validate(
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
    } = BillingPlatformValidator.topupCancelCredit().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > topupCancelCredit \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/topup/cancel`,
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
    } = BillingPlatformModel.CancelTopupRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > topupCancelCredit \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.TopupCreditParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.TopupRes>} - Success response
   * @name topupCredit
   * @summary: Topup
   * @description: Topup - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/topupCredit/).
   */
  async topupCredit(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.topupCredit().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = BillingPlatformValidator.topupCredit().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > topupCredit \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/topup`,
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
    } = BillingPlatformModel.TopupRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > topupCredit \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.UpdateConsentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.StatusMessage>} - Success response
   * @name updateConsent
   * @summary: Update Consent
   * @description: Update Consent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/updateConsent/).
   */
  async updateConsent(
    { subscriberId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.updateConsent().validate(
      {
        subscriberId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = BillingPlatformValidator.updateConsent().validate(
      {
        subscriberId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > updateConsent \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["subscriber_id"] = subscriberId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/consent`,
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
    } = BillingPlatformModel.StatusMessage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > updateConsent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.UpdateSetupIntentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.StatusMessage>} - Success response
   * @name updateSetupIntent
   * @summary: Setup Intent
   * @description: Setup Intent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/updateSetupIntent/).
   */
  async updateSetupIntent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.updateSetupIntent().validate(
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
    } = BillingPlatformValidator.updateSetupIntent().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > updateSetupIntent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/setup/intent`,
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
    } = BillingPlatformModel.StatusMessage().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > updateSetupIntent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.UpgradePlanParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BillingPlatformModel.ResourceNotFound>} - Success response
   * @name upgradePlan
   * @summary: Post Methods
   * @description: Admin user can modify the subscription plan for an seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/upgradePlan/).
   */
  async upgradePlan(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = BillingPlatformValidator.upgradePlan().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = BillingPlatformValidator.upgradePlan().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Billing > upgradePlan \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/methods`,
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
    } = BillingPlatformModel.ResourceNotFound().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Billing > upgradePlan \n ${res_error}`,
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
   * @summary: Update or insert customer details.
   * @description: Allows you to modify or insert customer information in the billing system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/billing/upsertCustomerDetail/).
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
