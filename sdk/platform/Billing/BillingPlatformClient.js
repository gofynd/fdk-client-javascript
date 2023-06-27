const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
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
   * @param {BillingPlatformValidator.activateSubscriptionPlan} arg - Arg object
   * @returns {Promise<BillingPlatformModel.SubscriptionActivateRes>} - Success response
   * @name activateSubscriptionPlan
   * @summary: Activate subscription
   * @description: It will activate subscription plan for customer
   */
  async activateSubscriptionPlan({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.SubscriptionActivateRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > activateSubscriptionPlan \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.cancelSubscriptionCharge} arg - Arg object
   * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
   * @name cancelSubscriptionCharge
   * @summary: Cancel subscription charge
   * @description: Cancel subscription and attached charges.
   */
  async cancelSubscriptionCharge({ extensionId, subscriptionId } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.EntitySubscription().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > cancelSubscriptionCharge \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.cancelSubscriptionPlan} arg - Arg object
   * @returns {Promise<BillingPlatformModel.CancelSubscriptionRes>} - Success response
   * @name cancelSubscriptionPlan
   * @summary: Cancel subscription
   * @description: It will cancel current active subscription.
   */
  async cancelSubscriptionPlan({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.CancelSubscriptionRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > cancelSubscriptionPlan \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.checkCouponValidity} arg - Arg object
   * @returns {Promise<BillingPlatformModel.CheckValidityResponse>} - Success response
   * @name checkCouponValidity
   * @summary: Check coupon validity
   * @description: Check coupon validity.
   */
  async checkCouponValidity({ plan, couponCode } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.CheckValidityResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > checkCouponValidity \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.createOneTimeCharge} arg - Arg object
   * @returns {Promise<BillingPlatformModel.CreateOneTimeChargeResponse>} -
   *   Success response
   * @name createOneTimeCharge
   * @summary: Create one time subscription charge
   * @description: Register one time subscription charge for a seller of your extension.
   */
  async createOneTimeCharge({ extensionId, body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.CreateOneTimeChargeResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > createOneTimeCharge \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.createSubscriptionCharge} arg - Arg object
   * @returns {Promise<BillingPlatformModel.CreateSubscriptionResponse>} -
   *   Success response
   * @name createSubscriptionCharge
   * @summary: Create subscription charge
   * @description: Register subscription charge for a seller of your extension.
   */
  async createSubscriptionCharge({ extensionId, body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.CreateSubscriptionResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > createSubscriptionCharge \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.getChargeDetails} arg - Arg object
   * @returns {Promise<BillingPlatformModel.OneTimeChargeEntity>} - Success response
   * @name getChargeDetails
   * @summary: Get subscription charge details
   * @description: Get created subscription charge details
   */
  async getChargeDetails({ extensionId, chargeId } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.OneTimeChargeEntity().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > getChargeDetails \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.getCustomerDetail} arg - Arg object
   * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
   * @name getCustomerDetail
   * @summary: Get subscription customer detail
   * @description: Get subscription customer detail.
   */
  async getCustomerDetail({} = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.SubscriptionCustomer().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > getCustomerDetail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.getFeatureLimitConfig} arg - Arg object
   * @returns {Promise<BillingPlatformModel.SubscriptionLimit>} - Success response
   * @name getFeatureLimitConfig
   * @summary: Get subscription subscription limits
   * @description: Get subscription subscription limits.
   */
  async getFeatureLimitConfig({} = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.SubscriptionLimit().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > getFeatureLimitConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.getInvoiceById} arg - Arg object
   * @returns {Promise<BillingPlatformModel.Invoice>} - Success response
   * @name getInvoiceById
   * @summary: Get invoice by id
   * @description: Get invoice by id.
   */
  async getInvoiceById({ invoiceId } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.Invoice().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > getInvoiceById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.getInvoices} arg - Arg object
   * @returns {Promise<BillingPlatformModel.Invoices>} - Success response
   * @name getInvoices
   * @summary: Get invoices
   * @description: Get invoices.
   */
  async getInvoices({} = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.Invoices().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > getInvoices \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.getSubscription} arg - Arg object
   * @returns {Promise<BillingPlatformModel.SubscriptionStatus>} - Success response
   * @name getSubscription
   * @summary: Get current subscription detail
   * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
   */
  async getSubscription({} = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.SubscriptionStatus().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > getSubscription \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.getSubscriptionCharge} arg - Arg object
   * @returns {Promise<BillingPlatformModel.EntitySubscription>} - Success response
   * @name getSubscriptionCharge
   * @summary: Get subscription charge details
   * @description: Get created subscription charge details
   */
  async getSubscriptionCharge({ extensionId, subscriptionId } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.EntitySubscription().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > getSubscriptionCharge \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {BillingPlatformValidator.upsertCustomerDetail} arg - Arg object
   * @returns {Promise<BillingPlatformModel.SubscriptionCustomer>} - Success response
   * @name upsertCustomerDetail
   * @summary: Upsert subscription customer detail
   * @description: Upsert subscription customer detail.
   */
  async upsertCustomerDetail({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = BillingPlatformModel.SubscriptionCustomer().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Billing > upsertCustomerDetail \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Billing;
