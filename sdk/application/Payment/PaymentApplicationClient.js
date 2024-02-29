const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const PaymentApplicationValidator = require("./PaymentApplicationValidator");
const PaymentApplicationModel = require("./PaymentApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Payment {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      addBeneficiaryDetails: "/service/application/payment/v1.0/refund/account",
      addRefundBankAccountUsingOTP:
        "/service/application/payment/v1.0/refund/account/otp",
      attachCardToCustomer: "/service/application/payment/v1.0/card/attach",
      cancelPaymentLink:
        "/service/application/payment/v1.0/cancel-payment-link/",
      cardDetails: "/service/application/payment/v1.0/cards/info/{card_info}",
      checkAndUpdatePaymentStatus:
        "/service/application/payment/v1.0/payment/confirm/polling",
      checkAndUpdatePaymentStatusPaymentLink:
        "/service/application/payment/v1.0/payment/confirm/polling/link/",
      checkCredit: "/service/application/payment/v1.0/check-credits/",
      createOrderHandlerPaymentLink:
        "/service/application/payment/v1.0/create-order/link/",
      createPaymentLink:
        "/service/application/payment/v1.0/create-payment-link/",
      createPaymentOrder: "/service/application/payment/v1.0/payment-orders/",
      customerCreditSummary:
        "/service/application/payment/v1.0/payment/credit-summary/",
      customerOnboard: "/service/application/payment/v1.0/credit-onboard/",
      deleteUserCard: "/service/application/payment/v1.0/card/remove",
      delinkWallet:
        "/service/application/payment/v1.0/payment/options/wallet/delink",
      enableOrDisableRefundTransferMode:
        "/service/application/payment/v1.0/refund/transfer-mode",
      getActiveCardAggregator:
        "/service/application/payment/v1.0/card/aggregator",
      getActiveRefundTransferModes:
        "/service/application/payment/v1.0/refund/transfer-mode",
      getActiveUserCards: "/service/application/payment/v1.0/cards",
      getAggregatorsConfig:
        "/service/application/payment/v1.0/config/aggregators/key",
      getEpaylaterBannerDetails:
        "/service/application/payment/v1.0/epaylater/banner",
      getOrderBeneficiariesDetail:
        "/service/application/payment/v1.0/refund/order/beneficiaries",
      getPaymentLink: "/service/application/payment/v1.0/create-payment-link/",
      getPaymentModeRoutes: "/service/application/payment/v1.0/payment/options",
      getPaymentModeRoutesPaymentLink:
        "/service/application/payment/v1.0/payment/options/link/",
      getPosPaymentModeRoutes:
        "/service/application/payment/v1.0/payment/options/pos",
      getRupifiBannerDetails: "/service/application/payment/v1.0/rupifi/banner",
      getUserBeneficiariesDetail:
        "/service/application/payment/v1.0/refund/user/beneficiary",
      initialisePayment: "/service/application/payment/v1.0/payment/request",
      initialisePaymentPaymentLink:
        "/service/application/payment/v1.0/payment/request/link/",
      linkWallet:
        "/service/application/payment/v1.0/payment/options/wallet/verify",
      outstandingOrderDetails:
        "/service/application/payment/v1.0/payment/outstanding-orders/",
      paidOrderDetails:
        "/service/application/payment/v1.0/payment/paid-orders/",
      pollingPaymentLink:
        "/service/application/payment/v1.0/polling-payment-link/",
      redirectToAggregator:
        "/service/application/payment/v1.0/payment/redirect-to-aggregator/",
      renderHTML: "/service/application/payment/v1.0/payment/html/render/",
      resendOrCancelPayment:
        "/service/application/payment/v1.0/payment/resend_or_cancel",
      resendPaymentLink:
        "/service/application/payment/v1.0/resend-payment-link/",
      updateDefaultBeneficiary:
        "/service/application/payment/v1.0/refund/beneficiary/default",
      validateVPA: "/service/application/payment/v1.0/validate-vpa",
      verifyAndChargePayment:
        "/service/application/payment/v1.0/payment/confirm/charge",
      verifyCustomerForPayment:
        "/service/application/payment/v1.0/payment/customer/validation",
      verifyIfscCode: "/service/application/payment/v1.0/ifsc-code/verify",
      verifyOtpAndAddBeneficiaryForBank:
        "/service/application/payment/v1.0/refund/verification/bank",
      verifyOtpAndAddBeneficiaryForWallet:
        "/service/application/payment/v1.0/refund/verification/wallet",
      walletLinkInitate:
        "/service/application/payment/v1.0/payment/options/wallet/link",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {PaymentApplicationValidator.AddBeneficiaryDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.RefundAccountResponse>} -
   *   Success response
   * @name addBeneficiaryDetails
   * @summary: Add beneficiary.
   * @description: Adds beneficiary details for future transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addBeneficiaryDetails/).
   */
  async addBeneficiaryDetails(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.addBeneficiaryDetails().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.addBeneficiaryDetails().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > addBeneficiaryDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addBeneficiaryDetails"],
        params: {},
      }),
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
    } = PaymentApplicationModel.RefundAccountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > addBeneficiaryDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.AddRefundBankAccountUsingOTPParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.RefundAccountResponse>} -
   *   Success response
   * @name addRefundBankAccountUsingOTP
   * @summary: Add refund account.
   * @description: Adds a bank account for refunds using OTP verification. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addRefundBankAccountUsingOTP/).
   */
  async addRefundBankAccountUsingOTP(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.addRefundBankAccountUsingOTP().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.addRefundBankAccountUsingOTP().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > addRefundBankAccountUsingOTP \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addRefundBankAccountUsingOTP"],
        params: {},
      }),
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
    } = PaymentApplicationModel.RefundAccountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > addRefundBankAccountUsingOTP \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.AttachCardToCustomerParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.AttachCardsResponse>} - Success response
   * @name attachCardToCustomer
   * @summary: Attach card to user.
   * @description: Links a payment card to a customer's account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/attachCardToCustomer/).
   */
  async attachCardToCustomer(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.attachCardToCustomer().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.attachCardToCustomer().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > attachCardToCustomer \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["attachCardToCustomer"],
        params: {},
      }),
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
    } = PaymentApplicationModel.AttachCardsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > attachCardToCustomer \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CancelPaymentLinkParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.CancelPaymentLinkResponse>} -
   *   Success response
   * @name cancelPaymentLink
   * @summary: Cancel link.
   * @description: Cancels a previously generated payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cancelPaymentLink/).
   */
  async cancelPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.cancelPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.cancelPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > cancelPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["cancelPaymentLink"],
        params: {},
      }),
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
    } = PaymentApplicationModel.CancelPaymentLinkResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > cancelPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CardDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.CardDetailsResponse>} - Success response
   * @name cardDetails
   * @summary: Fetch card details.
   * @description: Gets the details of a specified payment card. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cardDetails/).
   */
  async cardDetails(
    { cardInfo, aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.cardDetails().validate(
      { cardInfo, aggregator },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.cardDetails().validate(
      { cardInfo, aggregator },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > cardDetails \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["aggregator"] = aggregator;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["cardDetails"],
        params: { cardInfo },
      }),
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
    } = PaymentApplicationModel.CardDetailsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > cardDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CheckAndUpdatePaymentStatusParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>}
   *   - Success response
   *
   * @name checkAndUpdatePaymentStatus
   * @summary: Update payment status.
   * @description: Checks and updates the current status of a payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatus/).
   */
  async checkAndUpdatePaymentStatus(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.checkAndUpdatePaymentStatus().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.checkAndUpdatePaymentStatus().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > checkAndUpdatePaymentStatus \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkAndUpdatePaymentStatus"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PaymentStatusUpdateResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > checkAndUpdatePaymentStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CheckAndUpdatePaymentStatusPaymentLinkParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PaymentStatusUpdateResponse>}
   *   - Success response
   *
   * @name checkAndUpdatePaymentStatusPaymentLink
   * @summary: Update link status.
   * @description: Checks and updates the status of payment via a link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatusPaymentLink/).
   */
  async checkAndUpdatePaymentStatusPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.checkAndUpdatePaymentStatusPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.checkAndUpdatePaymentStatusPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > checkAndUpdatePaymentStatusPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkAndUpdatePaymentStatusPaymentLink"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PaymentStatusUpdateResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > checkAndUpdatePaymentStatusPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CheckCreditParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.CheckCreditResponse>} - Success response
   * @name checkCredit
   * @summary: Verify credit.
   * @description: Checks the availability and status of customer credit. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkCredit/).
   */
  async checkCredit(
    { aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.checkCredit().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.checkCredit().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > checkCredit \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["aggregator"] = aggregator;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["checkCredit"],
        params: {},
      }),
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
    } = PaymentApplicationModel.CheckCreditResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > checkCredit \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CreateOrderHandlerPaymentLinkParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.CreateOrderUserResponse>} -
   *   Success response
   * @name createOrderHandlerPaymentLink
   * @summary: Order via link.
   * @description: Creates an order handler for payment through a link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createOrderHandlerPaymentLink/).
   */
  async createOrderHandlerPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.createOrderHandlerPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.createOrderHandlerPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > createOrderHandlerPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createOrderHandlerPaymentLink"],
        params: {},
      }),
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
    } = PaymentApplicationModel.CreateOrderUserResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > createOrderHandlerPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CreatePaymentLinkParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.CreatePaymentLinkResponse>} -
   *   Success response
   * @name createPaymentLink
   * @summary: Create payment link.
   * @description: Generates a new payment link for transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createPaymentLink/).
   */
  async createPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.createPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.createPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > createPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createPaymentLink"],
        params: {},
      }),
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
    } = PaymentApplicationModel.CreatePaymentLinkResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > createPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CreatePaymentOrderParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PaymentOrderResponse>} - Success response
   * @name createPaymentOrder
   * @summary: Create Order
   * @description: Use this API to create a order and payment on aggregator side - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createPaymentOrder/).
   */
  async createPaymentOrder(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.createPaymentOrder().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.createPaymentOrder().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > createPaymentOrder \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createPaymentOrder"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PaymentOrderResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > createPaymentOrder \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CustomerCreditSummaryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.CustomerCreditSummaryResponse>}
   *   - Success response
   *
   * @name customerCreditSummary
   * @summary: Credit summary.
   * @description: Retrieves a summary of the customer's credit details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerCreditSummary/).
   */
  async customerCreditSummary(
    { aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.customerCreditSummary().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.customerCreditSummary().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > customerCreditSummary \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["aggregator"] = aggregator;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["customerCreditSummary"],
        params: {},
      }),
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
    } = PaymentApplicationModel.CustomerCreditSummaryResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > customerCreditSummary \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.CustomerOnboardParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.CustomerOnboardingResponse>} -
   *   Success response
   * @name customerOnboard
   * @summary: Onboard customer.
   * @description: Initiates the onboarding process for payment services. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerOnboard/).
   */
  async customerOnboard(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.customerOnboard().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.customerOnboard().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > customerOnboard \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["customerOnboard"],
        params: {},
      }),
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
    } = PaymentApplicationModel.CustomerOnboardingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > customerOnboard \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.DeleteUserCardParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.DeleteCardsResponse>} - Success response
   * @name deleteUserCard
   * @summary: Remove user's card.
   * @description: Deletes a payment card from the user's account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/deleteUserCard/).
   */
  async deleteUserCard(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.deleteUserCard().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.deleteUserCard().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > deleteUserCard \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["deleteUserCard"],
        params: {},
      }),
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
    } = PaymentApplicationModel.DeleteCardsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > deleteUserCard \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.DelinkWalletParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.WalletResponseSchema>} - Success response
   * @name delinkWallet
   * @summary: Delink the wallet
   * @description: It Removes already linked wallet - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/delinkWallet/).
   */
  async delinkWallet(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.delinkWallet().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.delinkWallet().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > delinkWallet \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["delinkWallet"],
        params: {},
      }),
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
    } = PaymentApplicationModel.WalletResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > delinkWallet \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.EnableOrDisableRefundTransferModeParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.UpdateRefundTransferModeResponse>}
   *   - Success response
   *
   * @name enableOrDisableRefundTransferMode
   * @summary: Toggle refund mode.
   * @description: Enables or disables a particular refund transfer mode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/enableOrDisableRefundTransferMode/).
   */
  async enableOrDisableRefundTransferMode(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.enableOrDisableRefundTransferMode().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.enableOrDisableRefundTransferMode().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > enableOrDisableRefundTransferMode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["enableOrDisableRefundTransferMode"],
        params: {},
      }),
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
    } = PaymentApplicationModel.UpdateRefundTransferModeResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > enableOrDisableRefundTransferMode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetActiveCardAggregatorParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.ActiveCardPaymentGatewayResponse>}
   *   - Success response
   *
   * @name getActiveCardAggregator
   * @summary: Active card info.
   * @description: Gets the active card aggregator for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveCardAggregator/).
   */
  async getActiveCardAggregator(
    { refresh, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getActiveCardAggregator().validate(
      { refresh },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getActiveCardAggregator().validate(
      { refresh },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getActiveCardAggregator \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["refresh"] = refresh;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getActiveCardAggregator"],
        params: {},
      }),
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
    } = PaymentApplicationModel.ActiveCardPaymentGatewayResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getActiveCardAggregator \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetActiveRefundTransferModesParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.TransferModeResponse>} - Success response
   * @name getActiveRefundTransferModes
   * @summary: Refund modes.
   * @description: Lists the active transfer modes for refunds. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveRefundTransferModes/).
   */
  async getActiveRefundTransferModes(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getActiveRefundTransferModes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getActiveRefundTransferModes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getActiveRefundTransferModes \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getActiveRefundTransferModes"],
        params: {},
      }),
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
    } = PaymentApplicationModel.TransferModeResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getActiveRefundTransferModes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetActiveUserCardsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.ListCardsResponse>} - Success response
   * @name getActiveUserCards
   * @summary: List user's cards.
   * @description: Retrieves all active cards linked to a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveUserCards/).
   */
  async getActiveUserCards(
    { forceRefresh, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.getActiveUserCards().validate(
      { forceRefresh },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getActiveUserCards().validate(
      { forceRefresh },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getActiveUserCards \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["force_refresh"] = forceRefresh;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getActiveUserCards"],
        params: {},
      }),
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
    } = PaymentApplicationModel.ListCardsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getActiveUserCards \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetAggregatorsConfigParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.AggregatorsConfigDetailResponse>}
   *   - Success response
   *
   * @name getAggregatorsConfig
   * @summary: Fetch payment aggregators.
   * @description: Retrieves configuration details for available payment aggregators. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getAggregatorsConfig/).
   */
  async getAggregatorsConfig(
    { xApiToken, refresh, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getAggregatorsConfig().validate(
      { xApiToken, refresh },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getAggregatorsConfig().validate(
      { xApiToken, refresh },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getAggregatorsConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["refresh"] = refresh;

    const xHeaders = {};
    xHeaders["x-api-token"] = xApiToken;

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAggregatorsConfig"],
        params: {},
      }),
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
    } = PaymentApplicationModel.AggregatorsConfigDetailResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getAggregatorsConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetEpaylaterBannerDetailsParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.EpaylaterBannerResponse>} -
   *   Success response
   * @name getEpaylaterBannerDetails
   * @summary: Epay banner info.
   * @description: Gets details for displaying the Epaylater payment banner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getEpaylaterBannerDetails/).
   */
  async getEpaylaterBannerDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getEpaylaterBannerDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getEpaylaterBannerDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getEpaylaterBannerDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getEpaylaterBannerDetails"],
        params: {},
      }),
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
    } = PaymentApplicationModel.EpaylaterBannerResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getEpaylaterBannerDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetOrderBeneficiariesDetailParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryResponse>} -
   *   Success response
   * @name getOrderBeneficiariesDetail
   * @summary: Order beneficiaries.
   * @description: Retrieve the beneficiary details related to an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getOrderBeneficiariesDetail/).
   */
  async getOrderBeneficiariesDetail(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getOrderBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getOrderBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getOrderBeneficiariesDetail \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrderBeneficiariesDetail"],
        params: {},
      }),
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
    } = PaymentApplicationModel.OrderBeneficiaryResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getOrderBeneficiariesDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetPaymentLinkParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.GetPaymentLinkResponse>} -
   *   Success response
   * @name getPaymentLink
   * @summary: Fetch payment link.
   * @description: Retrieves a generated payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentLink/).
   */
  async getPaymentLink(
    { paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.getPaymentLink().validate(
      { paymentLinkId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getPaymentLink().validate(
      { paymentLinkId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPaymentLink"],
        params: {},
      }),
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
    } = PaymentApplicationModel.GetPaymentLinkResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetPaymentModeRoutesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
   *   Success response
   * @name getPaymentModeRoutes
   * @summary: Get payment modes.
   * @description: Lists the payment mode options and their routing details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutes/).
   */
  async getPaymentModeRoutes(
    {
      amount,
      cartId,
      checkoutMode,
      refresh,
      orderId,
      cardReference,
      userDetails,
      displaySplit,
      advancePayment,
      shipmentId,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        checkoutMode,
        refresh,
        orderId,
        cardReference,
        userDetails,
        displaySplit,
        advancePayment,
        shipmentId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        checkoutMode,
        refresh,
        orderId,
        cardReference,
        userDetails,
        displaySplit,
        advancePayment,
        shipmentId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getPaymentModeRoutes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["amount"] = amount;
    query_params["cart_id"] = cartId;
    query_params["checkout_mode"] = checkoutMode;
    query_params["refresh"] = refresh;
    query_params["order_id"] = orderId;
    query_params["card_reference"] = cardReference;
    query_params["user_details"] = userDetails;
    query_params["display_split"] = displaySplit;
    query_params["advance_payment"] = advancePayment;
    query_params["shipment_id"] = shipmentId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPaymentModeRoutes"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PaymentModeRouteResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getPaymentModeRoutes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetPaymentModeRoutesPaymentLinkParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
   *   Success response
   * @name getPaymentModeRoutesPaymentLink
   * @summary: Payment link modes.
   * @description: Lists payment modes available for a given payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutesPaymentLink/).
   */
  async getPaymentModeRoutesPaymentLink(
    { paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getPaymentModeRoutesPaymentLink().validate(
      { paymentLinkId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getPaymentModeRoutesPaymentLink().validate(
      { paymentLinkId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getPaymentModeRoutesPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPaymentModeRoutesPaymentLink"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PaymentModeRouteResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getPaymentModeRoutesPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetPosPaymentModeRoutesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PaymentModeRouteResponse>} -
   *   Success response
   * @name getPosPaymentModeRoutes
   * @summary: POS payment modes.
   * @description: Lists payment modes available for Point-of-Sale (POS). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPosPaymentModeRoutes/).
   */
  async getPosPaymentModeRoutes(
    {
      amount,
      pincode,
      orderType,
      cartId,
      checkoutMode,
      refresh,
      cardReference,
      userDetails,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        pincode,
        orderType,
        cartId,
        checkoutMode,
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
    } = PaymentApplicationValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        pincode,
        orderType,
        cartId,
        checkoutMode,
        refresh,
        cardReference,
        userDetails,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getPosPaymentModeRoutes \n ${warrning}`,
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

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPosPaymentModeRoutes"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PaymentModeRouteResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getPosPaymentModeRoutes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetRupifiBannerDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.RupifiBannerResponse>} - Success response
   * @name getRupifiBannerDetails
   * @summary: Rupifi banner info.
   * @description: Retrieve details for displaying the Rupifi payment banner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getRupifiBannerDetails/).
   */
  async getRupifiBannerDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getRupifiBannerDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getRupifiBannerDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getRupifiBannerDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getRupifiBannerDetails"],
        params: {},
      }),
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
    } = PaymentApplicationModel.RupifiBannerResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getRupifiBannerDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.GetUserBeneficiariesDetailParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.OrderBeneficiaryResponse>} -
   *   Success response
   * @name getUserBeneficiariesDetail
   * @summary: Beneficiary info.
   * @description: Retrieves details of beneficiaries linked to the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getUserBeneficiariesDetail/).
   */
  async getUserBeneficiariesDetail(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.getUserBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.getUserBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > getUserBeneficiariesDetail \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserBeneficiariesDetail"],
        params: {},
      }),
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
    } = PaymentApplicationModel.OrderBeneficiaryResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > getUserBeneficiariesDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.InitialisePaymentParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PaymentInitializationResponse>}
   *   - Success response
   *
   * @name initialisePayment
   * @summary: Start payment process.
   * @description: Initializes the payment procedure for an order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePayment/).
   */
  async initialisePayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.initialisePayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.initialisePayment().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > initialisePayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["initialisePayment"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PaymentInitializationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > initialisePayment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.InitialisePaymentPaymentLinkParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PaymentInitializationResponse>}
   *   - Success response
   *
   * @name initialisePaymentPaymentLink
   * @summary: Initialise link payment.
   * @description: Initializes payment for an order via a payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePaymentPaymentLink/).
   */
  async initialisePaymentPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.initialisePaymentPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.initialisePaymentPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > initialisePaymentPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["initialisePaymentPaymentLink"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PaymentInitializationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > initialisePaymentPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.LinkWalletParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.WalletResponseSchema>} - Success response
   * @name linkWallet
   * @summary: OTP verification for linking of wallet
   * @description: It Verifies the linking of wallet using OTP - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/linkWallet/).
   */
  async linkWallet(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.linkWallet().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.linkWallet().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > linkWallet \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["linkWallet"],
        params: {},
      }),
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
    } = PaymentApplicationModel.WalletResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > linkWallet \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.OutstandingOrderDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.OutstandingOrderDetailsResponse>}
   *   - Success response
   *
   * @name outstandingOrderDetails
   * @summary: Outstanding orders.
   * @description: Lists details of orders with outstanding payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/outstandingOrderDetails/).
   */
  async outstandingOrderDetails(
    { aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.outstandingOrderDetails().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.outstandingOrderDetails().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > outstandingOrderDetails \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["aggregator"] = aggregator;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["outstandingOrderDetails"],
        params: {},
      }),
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
    } = PaymentApplicationModel.OutstandingOrderDetailsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > outstandingOrderDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.PaidOrderDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PaidOrderDetailsResponse>} -
   *   Success response
   * @name paidOrderDetails
   * @summary: Paid orders.
   * @description: Retrieves details of orders that have been paid for. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/paidOrderDetails/).
   */
  async paidOrderDetails(
    { aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.paidOrderDetails().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.paidOrderDetails().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > paidOrderDetails \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["aggregator"] = aggregator;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["paidOrderDetails"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PaidOrderDetailsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > paidOrderDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.PollingPaymentLinkParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.PollingPaymentLinkResponse>} -
   *   Success response
   * @name pollingPaymentLink
   * @summary: Poll payment link.
   * @description: Polls the status of a payment link for updates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/pollingPaymentLink/).
   */
  async pollingPaymentLink(
    { paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.pollingPaymentLink().validate(
      { paymentLinkId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.pollingPaymentLink().validate(
      { paymentLinkId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > pollingPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["pollingPaymentLink"],
        params: {},
      }),
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
    } = PaymentApplicationModel.PollingPaymentLinkResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > pollingPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.RedirectToAggregatorParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.RedirectToAggregatorResponse>}
   *   - Success response
   *
   * @name redirectToAggregator
   * @summary: Redirect for payment.
   * @description: Redirects the user to the payment aggregator's interface. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/redirectToAggregator/).
   */
  async redirectToAggregator(
    { source, aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.redirectToAggregator().validate(
      { source, aggregator },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.redirectToAggregator().validate(
      { source, aggregator },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > redirectToAggregator \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["source"] = source;
    query_params["aggregator"] = aggregator;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["redirectToAggregator"],
        params: {},
      }),
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
    } = PaymentApplicationModel.RedirectToAggregatorResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > redirectToAggregator \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.RenderHTMLParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.renderHTMLResponse>} - Success response
   * @name renderHTML
   * @summary: Render HTML.
   * @description: Generates HTML for payment-related interfaces. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/renderHTML/).
   */
  async renderHTML(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.renderHTML().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.renderHTML().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > renderHTML \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["renderHTML"],
        params: {},
      }),
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
    } = PaymentApplicationModel.renderHTMLResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > renderHTML \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.ResendOrCancelPaymentParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.ResendOrCancelPaymentResponse>}
   *   - Success response
   *
   * @name resendOrCancelPayment
   * @summary: Manage payment.
   * @description: Resends or cancels a pending payment transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendOrCancelPayment/).
   */
  async resendOrCancelPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.resendOrCancelPayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.resendOrCancelPayment().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > resendOrCancelPayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["resendOrCancelPayment"],
        params: {},
      }),
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
    } = PaymentApplicationModel.ResendOrCancelPaymentResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > resendOrCancelPayment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.ResendPaymentLinkParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.ResendPaymentLinkResponse>} -
   *   Success response
   * @name resendPaymentLink
   * @summary: Resend link.
   * @description: Resends an existing payment link to the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendPaymentLink/).
   */
  async resendPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.resendPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.resendPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > resendPaymentLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["resendPaymentLink"],
        params: {},
      }),
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
    } = PaymentApplicationModel.ResendPaymentLinkResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > resendPaymentLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.UpdateDefaultBeneficiaryParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.SetDefaultBeneficiaryResponse>}
   *   - Success response
   *
   * @name updateDefaultBeneficiary
   * @summary: Set default beneficiary.
   * @description: Updates the default beneficiary for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/updateDefaultBeneficiary/).
   */
  async updateDefaultBeneficiary(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.updateDefaultBeneficiary().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.updateDefaultBeneficiary().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > updateDefaultBeneficiary \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateDefaultBeneficiary"],
        params: {},
      }),
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
    } = PaymentApplicationModel.SetDefaultBeneficiaryResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > updateDefaultBeneficiary \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.ValidateVPAParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.ValidateVPAResponse>} - Success response
   * @name validateVPA
   * @summary: Validate VPA.
   * @description: Checks the validity of a Virtual Payment Address (VPA). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/validateVPA/).
   */
  async validateVPA(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.validateVPA().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.validateVPA().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > validateVPA \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["validateVPA"],
        params: {},
      }),
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
    } = PaymentApplicationModel.ValidateVPAResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > validateVPA \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.VerifyAndChargePaymentParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.ChargeCustomerResponse>} -
   *   Success response
   * @name verifyAndChargePayment
   * @summary: Verify and charge.
   * @description: Validates and processes a payment transaction. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyAndChargePayment/).
   */
  async verifyAndChargePayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.verifyAndChargePayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.verifyAndChargePayment().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > verifyAndChargePayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyAndChargePayment"],
        params: {},
      }),
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
    } = PaymentApplicationModel.ChargeCustomerResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > verifyAndChargePayment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.VerifyCustomerForPaymentParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.ValidateCustomerResponse>} -
   *   Success response
   * @name verifyCustomerForPayment
   * @summary: Verify payment customer.
   * @description: Checks the user's validity for proceeding with payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyCustomerForPayment/).
   */
  async verifyCustomerForPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.verifyCustomerForPayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.verifyCustomerForPayment().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > verifyCustomerForPayment \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyCustomerForPayment"],
        params: {},
      }),
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
    } = PaymentApplicationModel.ValidateCustomerResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > verifyCustomerForPayment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.VerifyIfscCodeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.IfscCodeResponse>} - Success response
   * @name verifyIfscCode
   * @summary: Verify IFSC.
   * @description: Checks the validity of an IFSC code for bank transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyIfscCode/).
   */
  async verifyIfscCode(
    { ifscCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.verifyIfscCode().validate(
      { ifscCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.verifyIfscCode().validate(
      { ifscCode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > verifyIfscCode \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["ifsc_code"] = ifscCode;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["verifyIfscCode"],
        params: {},
      }),
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
    } = PaymentApplicationModel.IfscCodeResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > verifyIfscCode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForBankParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.AddBeneficiaryViaOtpVerificationResponse>}
   *   - Success response
   *
   * @name verifyOtpAndAddBeneficiaryForBank
   * @summary: Verify OTP for bank.
   * @description: Confirms OTP and adds a bank beneficiary. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForBank/).
   */
  async verifyOtpAndAddBeneficiaryForBank(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.verifyOtpAndAddBeneficiaryForBank().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.verifyOtpAndAddBeneficiaryForBank().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > verifyOtpAndAddBeneficiaryForBank \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyOtpAndAddBeneficiaryForBank"],
        params: {},
      }),
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
    } = PaymentApplicationModel.AddBeneficiaryViaOtpVerificationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > verifyOtpAndAddBeneficiaryForBank \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.VerifyOtpAndAddBeneficiaryForWalletParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.WalletOtpResponse>} - Success response
   * @name verifyOtpAndAddBeneficiaryForWallet
   * @summary: Verify OTP for wallet.
   * @description: Confirms OTP and adds a wallet beneficiary. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForWallet/).
   */
  async verifyOtpAndAddBeneficiaryForWallet(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = PaymentApplicationValidator.verifyOtpAndAddBeneficiaryForWallet().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.verifyOtpAndAddBeneficiaryForWallet().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > verifyOtpAndAddBeneficiaryForWallet \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyOtpAndAddBeneficiaryForWallet"],
        params: {},
      }),
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
    } = PaymentApplicationModel.WalletOtpResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > verifyOtpAndAddBeneficiaryForWallet \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {PaymentApplicationValidator.WalletLinkInitateParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentApplicationModel.WalletResponseSchema>} - Success response
   * @name walletLinkInitate
   * @summary: Initiate linking of wallet
   * @description: It will initiate linking of wallet for the aggregator. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/walletLinkInitate/).
   */
  async walletLinkInitate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = PaymentApplicationValidator.walletLinkInitate().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = PaymentApplicationValidator.walletLinkInitate().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Payment > walletLinkInitate \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["walletLinkInitate"],
        params: {},
      }),
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
    } = PaymentApplicationModel.WalletResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Payment > walletLinkInitate \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Payment;
