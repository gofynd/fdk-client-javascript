const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const PlatformAPIClient = require("../PlatformAPIClient");
const BillingValidator = require("./BillingPlatformValidator");
class Billing {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.plan - ID of the plan.
   * @param {string} arg.couponCode - Coupon code.
   * @summary: Check coupon validity
   * @description: Check coupon validity.
   */
  checkCouponValidity({ plan, couponCode } = {}) {
    const { error } = BillingValidator.checkCouponValidity().validate(
      {
        plan,
        couponCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["plan"] = plan;
    query_params["coupon_code"] = couponCode;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/coupon/check-validity`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension _id
   * @param {CreateSubscriptionCharge} arg.body
   * @summary: Create subscription charge
   * @description: Register subscription charge for a seller of your extension.
   */
  createSubscriptionCharge({ extensionId, body } = {}) {
    const { error } = BillingValidator.createSubscriptionCharge().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/extension/${extensionId}/subscription`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension _id
   * @param {string} arg.subscriptionId - Subscription charge _id
   * @summary: Get subscription charge details
   * @description: Get created subscription charge details
   */
  getSubscriptionCharge({ extensionId, subscriptionId } = {}) {
    const { error } = BillingValidator.getSubscriptionCharge().validate(
      {
        extensionId,
        subscriptionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/extension/${extensionId}/subscription/${subscriptionId}`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension _id
   * @param {string} arg.subscriptionId - Subscription charge _id
   * @summary: Cancel subscription charge
   * @description: Cancel subscription and attached charges.
   */
  cancelSubscriptionCharge({ extensionId, subscriptionId } = {}) {
    const { error } = BillingValidator.cancelSubscriptionCharge().validate(
      {
        extensionId,
        subscriptionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/extension/${extensionId}/subscription/${subscriptionId}/cancel`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get invoices
   * @description: Get invoices.
   */
  getInvoices({} = {}) {
    const { error } = BillingValidator.getInvoices().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/invoice/list`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.invoiceId - Invoice id
   * @summary: Get invoice by id
   * @description: Get invoice by id.
   */
  getInvoiceById({ invoiceId } = {}) {
    const { error } = BillingValidator.getInvoiceById().validate(
      {
        invoiceId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/invoice/${invoiceId}`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get subscription customer detail
   * @description: Get subscription customer detail.
   */
  getCustomerDetail({} = {}) {
    const { error } = BillingValidator.getCustomerDetail().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/customer-detail`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SubscriptionCustomerCreate} arg.body
   * @summary: Upsert subscription customer detail
   * @description: Upsert subscription customer detail.
   */
  upsertCustomerDetail({ body } = {}) {
    const { error } = BillingValidator.upsertCustomerDetail().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/customer-detail`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get current subscription detail
   * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
   */
  getSubscription({} = {}) {
    const { error } = BillingValidator.getSubscription().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/current`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get subscription subscription limits
   * @description: Get subscription subscription limits.
   */
  getFeatureLimitConfig({} = {}) {
    const { error } = BillingValidator.getFeatureLimitConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/current-limit`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SubscriptionActivateReq} arg.body
   * @summary: Activate subscription
   * @description: It will activate subscription plan for customer
   */
  activateSubscriptionPlan({ body } = {}) {
    const { error } = BillingValidator.activateSubscriptionPlan().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/activate`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CancelSubscriptionReq} arg.body
   * @summary: Cancel subscription
   * @description: It will cancel current active subscription.
   */
  cancelSubscriptionPlan({ body } = {}) {
    const { error } = BillingValidator.cancelSubscriptionPlan().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/billing/v1.0/company/${this.config.companyId}/subscription/cancel`,
      query_params,
      body,
      xHeaders
    );
  }
}
module.exports = Billing;
