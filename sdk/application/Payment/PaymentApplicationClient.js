const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

class Payment {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      addBeneficiaryDetails: "/service/application/payment/v1.0/refund/account",
      addRefundBankAccountUsingOTP:
        "/service/application/payment/v1.0/refund/account/otp",
      attachCardToCustomer: "/service/application/payment/v1.0/card/attach",
      cancelPaymentLink:
        "/service/application/payment/v1.0/cancel-payment-link",
      cardDetails: "/service/application/payment/v1.0/cards/info/{card_info}",
      checkAndUpdatePaymentStatus:
        "/service/application/payment/v1.0/payment/confirm/polling",
      checkAndUpdatePaymentStatusPaymentLink:
        "/service/application/payment/v1.0/payment/confirm/polling/link",
      checkCredit: "/service/application/payment/v1.0/check-credits",
      confirmPayment: "/service/application/payment/v1.0/payment/confirm",
      createOrderHandlerPaymentLink:
        "/service/application/payment/v1.0/create-order/link",
      createPaymentLink:
        "/service/application/payment/v1.0/create-payment-link",
      createPaymentOrder: "/service/application/payment/v1.0/payment-orders",
      customerCreditSummary:
        "/service/application/payment/v1.0/payment/credit-summary",
      customerOnboard: "/service/application/payment/v1.0/credit-onboard",
      deleteBeneficiaryDetails:
        "/service/application/payment/v1.0/refund/account",
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
      getBenficiaryOrder:
        "/service/application/payment/v1.0/refund/beneficiaries/orders",
      getEpaylaterBannerDetails:
        "/service/application/payment/v1.0/epaylater/banner",
      getOrderBeneficiariesDetail:
        "/service/application/payment/v1.0/refund/order/beneficiaries",
      getPaymentLink: "/service/application/payment/v1.0/create-payment-link",
      getPaymentLinkId:
        "/service/application/payment/v1.0/create-payment-link/{id}",
      getPaymentModeRoutes: "/service/application/payment/v1.0/payment/options",
      getPaymentModeRoutesPaymentLink:
        "/service/application/payment/v1.0/payment/options/link",
      getPosPaymentModeRoutes:
        "/service/application/payment/v1.0/payment/options/pos",
      getRupifiBannerDetails: "/service/application/payment/v1.0/rupifi/banner",
      getSelectedRefundOption:
        "/service/application/payment/v1.0/payment/selected_refund_options",
      getUserBeneficiariesDetail:
        "/service/application/payment/v1.0/refund/user/beneficiary",
      getUserBeneficiariesDetailV2:
        "/service/application/payment/v2.0/refund/user/beneficiary",
      getotpOrderBeneficiariesDetail:
        "/service/application/payment/v1.0/refund/account/otp",
      initialisePayment: "/service/application/payment/v1.0/payment/request",
      initialisePaymentPaymentLink:
        "/service/application/payment/v1.0/payment/request/link",
      linkWallet:
        "/service/application/payment/v1.0/payment/options/wallet/verify",
      outstandingOrderDetails:
        "/service/application/payment/v1.0/payment/outstanding-orders",
      paidOrderDetails: "/service/application/payment/v1.0/payment/paid-orders",
      pollingPaymentLink:
        "/service/application/payment/v1.0/polling-payment-link",
      redirectToAggregator:
        "/service/application/payment/v1.0/payment/redirect-to-aggregator",
      renderHTML: "/service/application/payment/v1.0/payment/html/render",
      resendOrCancelPayment:
        "/service/application/payment/v1.0/payment/resend_or_cancel",
      resendPaymentLink:
        "/service/application/payment/v1.0/resend-payment-link",
      setRefundOptionforShipment:
        "/service/application/payment/v1.0/payment/refundoptions",
      updateActiveCards: "/service/application/payment/v1.0/cards",
      updateDefaultBeneficiary:
        "/service/application/payment/v1.0/refund/beneficiary/default",
      updateUserCard: "/service/application/payment/v1.0/card/aggregator",
      validateBeneficiaryAddress:
        "/service/application/payment/v1.0/validate/beneficiary-address",
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
      walletLinkInitiate:
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RefundAccountResponse>} - Success response
   * @name addBeneficiaryDetails
   * @summary: Add beneficiary for refund
   * @description: Add beneficiary details specifically for refund transactions, including account holder name, account number and bank details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addBeneficiaryDetails/).
   */
  async addBeneficiaryDetails(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PostAddBeneficiaryDetailsOTPResponse>} - Success response
   * @name addRefundBankAccountUsingOTP
   * @summary: Save bank details for cancelled/returned order
   * @description: Add bank account specifically for refunds, employing OTP verification for security. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/addRefundBankAccountUsingOTP/).
   */
  async addRefundBankAccountUsingOTP(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AttachCardsResponse>} - Success response
   * @name attachCardToCustomer
   * @summary: Link payment card to customer
   * @description: Link payment card to a user account for seamless transactions. Upon successful linking, the card becomes associated with the user's profile, enabling secure and convenient payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/attachCardToCustomer/).
   */
  async attachCardToCustomer(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CancelPaymentLinkResponse>} - Success response
   * @name cancelPaymentLink
   * @summary: Cancel payment link
   * @description: Cancel previously generated payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cancelPaymentLink/).
   */
  async cancelPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CardDetailsResponse>} - Success response
   * @name cardDetails
   * @summary: Get card details
   * @description: Get details of a specified payment card, including information such as the card type, brand, country, and expiration date. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/cardDetails/).
   */
  async cardDetails(
    { cardInfo, aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["cardInfo"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
   * @name checkAndUpdatePaymentStatus
   * @summary: Update payment status
   * @description: Polling process to confirm the payment status. It periodically checks and updates the current status of a payment, ensuring timely and accurate confirmation of payment transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatus/).
   */
  async checkAndUpdatePaymentStatus(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
   * @name checkAndUpdatePaymentStatusPaymentLink
   * @summary: Performs continuous polling to check status of payment on the server
   * @description: Verify and update status of a payment made through a link.Upon successful verification and update, the response includes details about the aggregator name, payment status, and whether retrying the process is required. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkAndUpdatePaymentStatusPaymentLink/).
   */
  async checkAndUpdatePaymentStatusPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CheckCreditResponse>} - Success response
   * @name checkCredit
   * @summary: Verify credit availability and status
   * @description: Check the availability and status of customer credit, providing the status of payment along with registration information and signup URL if the customer is not registered. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/checkCredit/).
   */
  async checkCredit(
    { aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentConfirmationResponse>} - Success response
   * @name confirmPayment
   * @summary: Confirm payment after successful payment from payment gateway
   * @description: confirm payment after payment gateway accepted payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/confirmPayment/).
   */
  async confirmPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["confirmPayment"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CreateOrderUserResponse>} - Success response
   * @name createOrderHandlerPaymentLink
   * @summary: Order via link.
   * @description: Initiate the creation of an order handler for processing payments through a link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createOrderHandlerPaymentLink/).
   */
  async createOrderHandlerPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CreatePaymentLinkResponse>} - Success response
   * @name createPaymentLink
   * @summary: Create payment link.
   * @description: Create new payment link for transactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createPaymentLink/).
   */
  async createPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentOrderResponse>} - Success response
   * @name createPaymentOrder
   * @summary: Create Order
   * @description: Create an order and payment on the aggregator side. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/createPaymentOrder/).
   */
  async createPaymentOrder(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CustomerCreditSummaryResponse>} - Success response
   * @name customerCreditSummary
   * @summary: Credit summary.
   * @description: Get summary of the customer's credit information, including details such as merchant customer reference ID, status, balance, limit, due amount, used amount, due date, days overdue, total due amount, and a repayment URL. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerCreditSummary/).
   */
  async customerCreditSummary(
    { aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CustomerOnboardingResponse>} - Success response
   * @name customerOnboard
   * @summary: Onboard customer for payment
   * @description: Initiate the onboarding process for payment services, providing personal, business, and device information, along with marketplace details, to enable customer registration and credit availability. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/customerOnboard/).
   */
  async customerOnboard(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<DeleteRefundAccountResponse>} - Success response
   * @name deleteBeneficiaryDetails
   * @summary: Delete saved beneficiary details of customers
   * @description: Use this API to delete the saved beneficiary details provided beneficiary Id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/deleteBeneficiaryDetails/).
   */
  async deleteBeneficiaryDetails(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "patch",
      constructUrl({
        url: this._urls["deleteBeneficiaryDetails"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<DeleteCardsResponse>} - Success response
   * @name deleteUserCard
   * @summary: Delete customer card
   * @description: Delete payment card from the user's account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/deleteUserCard/).
   */
  async deleteUserCard(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<WalletResponseSchema>} - Success response
   * @name delinkWallet
   * @summary: Delink the wallet
   * @description: Delink the wallet. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/delinkWallet/).
   */
  async delinkWallet(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UpdateRefundTransferModeResponse>} - Success response
   * @name enableOrDisableRefundTransferMode
   * @summary: Toggle refund mode
   * @description: Enable/Disable a particular refund transfer mode based on the request body parameters, indicating whether the mode should be enabled or disabled. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/enableOrDisableRefundTransferMode/).
   */
  async enableOrDisableRefundTransferMode(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ActiveCardPaymentGatewayResponse>} - Success response
   * @name getActiveCardAggregator
   * @summary: Retrieve active card aggregator
   * @description: Get details about the active card aggregator used by the user, including the aggregator name.You can refresh the data by setting the 'refresh' parameter to true if needed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveCardAggregator/).
   */
  async getActiveCardAggregator(
    { refresh, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<TransferModeResponse>} - Success response
   * @name getActiveRefundTransferModes
   * @summary: Get refund transfer modes
   * @description: Lists available refund modes, such as UPI, providing details like display name, logo, and ID for each mode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveRefundTransferModes/).
   */
  async getActiveRefundTransferModes(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ListCardsResponse>} - Success response
   * @name getActiveUserCards
   * @summary: List user's cards.
   * @description: List all active cards saved by the user.Includes details such as the card's aggregator name, card ID, token, reference, number, expiration date, type, issuer, brand, nickname, and whether it has expired. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getActiveUserCards/).
   */
  async getActiveUserCards(
    { forceRefresh, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AggregatorsConfigDetailResponse>} - Success response
   * @name getAggregatorsConfig
   * @summary: Get payment aggregators
   * @description: Get aggregator secret key of all payment gateways utilized for payments when using the SDK for the payment gateway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getAggregatorsConfig/).
   */
  async getAggregatorsConfig(
    { xApiToken, refresh, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RefundOrderBenResponse>} - Success response
   * @name getBenficiaryOrder
   * @summary: Get Payment status and information for a list of order_ids
   * @description: Use this API to get Payment status and information for a list of order_ids. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getBenficiaryOrder/).
   */
  async getBenficiaryOrder(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getBenficiaryOrder"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<EpaylaterBannerResponse>} - Success response
   * @name getEpaylaterBannerDetails
   * @summary: Epaylater banner info
   * @description: Get Epaylater payment banner details. It provides information about the banner's display status, along with relevant messages and the user's registration status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getEpaylaterBannerDetails/).
   */
  async getEpaylaterBannerDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderBeneficiaryResponse>} - Success response
   * @name getOrderBeneficiariesDetail
   * @summary: Retrieve beneficiary details
   * @description: Get beneficiary details like bank name , ifsc code , branch name associated with a specific order for refund processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getOrderBeneficiariesDetail/).
   */
  async getOrderBeneficiariesDetail(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetPaymentLinkResponse>} - Success response
   * @name getPaymentLink
   * @summary: Fetch payment link.
   * @description: Get a generated payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentLink/).
   */
  async getPaymentLink(
    { paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetPaymentLinkResponse>} - Success response
   * @name getPaymentLinkId
   * @summary: Get payment link
   * @description: get a payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentLinkId/).
   */
  async getPaymentLinkId(
    { id, paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["id"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPaymentLinkId"],
        params: { id },
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @name getPaymentModeRoutes
   * @summary: Get payment modes
   * @description: Get available payment methods on the payment page, specifying the aggregator for each option, such as 'Netbanking powered by Juspay' and 'Card powered by Razorpay'. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutes/).
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @name getPaymentModeRoutesPaymentLink
   * @summary: Payment link modes.
   * @description: List payment modes available for a given payment link. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPaymentModeRoutesPaymentLink/).
   */
  async getPaymentModeRoutesPaymentLink(
    { paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @name getPosPaymentModeRoutes
   * @summary: POS payment modes
   * @description: Get available payment methods on the payment page for POS, specifying the aggregator for each option, such as 'CARD powered by Juspay' and 'QR powered by Razorpay'. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getPosPaymentModeRoutes/).
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RupifiBannerResponse>} - Success response
   * @name getRupifiBannerDetails
   * @summary: Rupifi banner info.
   * @description: Get Rupifi payment banner details. It provides information such as the KYC URL and the current status of the Rupifi payment banner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getRupifiBannerDetails/).
   */
  async getRupifiBannerDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<SelectedRefundOptionResponse>} - Success response
   * @name getSelectedRefundOption
   * @summary: get the selected refund options for shipment id
   * @description: get the selected refund options for shipment id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getSelectedRefundOption/).
   */
  async getSelectedRefundOption(
    { shipmentId, orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["order_id"] = orderId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSelectedRefundOption"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderBeneficiaryResponse>} - Success response
   * @name getUserBeneficiariesDetail
   * @summary: Retrieve beneficiary details
   * @description: Get beneficiaries associated with the user for processing refunds, based on the provided order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getUserBeneficiariesDetail/).
   */
  async getUserBeneficiariesDetail(
    { orderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderBeneficiaryResponseSchemaV2>} - Success response
   * @name getUserBeneficiariesDetailV2
   * @summary: Retrieve beneficiary details
   * @description: Get beneficiaries associated with the user for processing refunds, based on the provided order ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getUserBeneficiariesDetailV2/).
   */
  async getUserBeneficiariesDetailV2(
    { orderId, shipmentId, mop, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["order_id"] = orderId;
    query_params["shipment_id"] = shipmentId;
    query_params["mop"] = mop;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserBeneficiariesDetailV2"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AddBeneficiaryDetailsOTPResponse>} - Success response
   * @name getotpOrderBeneficiariesDetail
   * @summary: Lists the beneficiary of a refund
   * @description: Get the details of all active beneficiary added by a user for refund. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/getotpOrderBeneficiariesDetail/).
   */
  async getotpOrderBeneficiariesDetail(
    { orderId, requestHash, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["order_id"] = orderId;
    query_params["request_hash"] = requestHash;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getotpOrderBeneficiariesDetail"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentInitializationResponse>} - Success response
   * @name initialisePayment
   * @summary: Start payment process.
   * @description: Initiate the payment procedure for an order. Upon successful initiation, it returns a  details including the success status, aggregator information, payment method, status, merchant order ID aggregator order , polling URL, timeout, virtual ID, Razorpay payment ID, customer ID, and device ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePayment/).
   */
  async initialisePayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaymentInitializationResponse>} - Success response
   * @name initialisePaymentPaymentLink
   * @summary: Initialise link payment.
   * @description: Begin payment process for an order by initializing it through a payment link.Upon successful initialization, the response includes details about the payment status, aggregator details, order IDs, polling URL for status updates, and other relevant information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/initialisePaymentPaymentLink/).
   */
  async initialisePaymentPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<WalletResponseSchema>} - Success response
   * @name linkWallet
   * @summary: OTP verification
   * @description: Verify the linking of wallet using OTP for further processing of payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/linkWallet/).
   */
  async linkWallet(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OutstandingOrderDetailsResponse>} - Success response
   * @name outstandingOrderDetails
   * @summary: Outstanding orders.
   * @description: Get details of orders with outstanding payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/outstandingOrderDetails/).
   */
  async outstandingOrderDetails(
    { aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PaidOrderDetailsResponse>} - Success response
   * @name paidOrderDetails
   * @summary: Retrieve details of paid orders
   * @description: Get details of orders that have been paid for, including shipment ID, order ID, due date, payment date, amount, and transaction ID, based on the aggregator merchant user ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/paidOrderDetails/).
   */
  async paidOrderDetails(
    { aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PollingPaymentLinkResponse>} - Success response
   * @name pollingPaymentLink
   * @summary: Poll payment link.
   * @description: Get real-time information about the payment link's current status, such as whether it has been processed, cancelled, or expired. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/pollingPaymentLink/).
   */
  async pollingPaymentLink(
    { paymentLinkId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RedirectToAggregatorResponse>} - Success response
   * @name redirectToAggregator
   * @summary: Redirects users to the payment aggregator's interface
   * @description: Get details about the active card aggregator used by the user, including the aggregator's name. You can refresh the data by setting the 'refresh' parameter to true if needed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/redirectToAggregator/).
   */
  async redirectToAggregator(
    { source, aggregator, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<renderHTMLResponse>} - Success response
   * @name renderHTML
   * @summary: Render HTML.
   * @description: Render HTML for a payment aggregator page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/renderHTML/).
   */
  async renderHTML(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ResendOrCancelPaymentResponse>} - Success response
   * @name resendOrCancelPayment
   * @summary: Resend or cancel a pending payment transaction
   * @description: Resend or cancel payment link that have been initiated but may require modification or cancellation for various reasons, ensuring flexibility and control in payment processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendOrCancelPayment/).
   */
  async resendOrCancelPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ResendPaymentLinkResponse>} - Success response
   * @name resendPaymentLink
   * @summary: Resend payment link
   * @description: Resend an existing payment link to the user to complete the payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/resendPaymentLink/).
   */
  async resendPaymentLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ShipmentRefundResponse>} - Success response
   * @name setRefundOptionforShipment
   * @summary: Save refund source against shipment and order
   * @description: Save refund source against shipment and order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/setRefundOptionforShipment/).
   */
  async setRefundOptionforShipment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["setRefundOptionforShipment"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UpdateCardResponse>} - Success response
   * @name updateActiveCards
   * @summary: update a card
   * @description: Use this API to update a card list added by a user on the payment gateway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/updateActiveCards/).
   */
  async updateActiveCards(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateActiveCards"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<SetDefaultBeneficiaryResponse>} - Success response
   * @name updateDefaultBeneficiary
   * @summary: Set default beneficiary for refund
   * @description: Update default beneficiary for the order refund of the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/updateDefaultBeneficiary/).
   */
  async updateDefaultBeneficiary(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<UpdateAggregatorCardResponse>} - Success response
   * @name updateUserCard
   * @summary: card aggregator
   * @description: Use this API to get card of user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/updateUserCard/).
   */
  async updateUserCard(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateUserCard"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ValidateValidateAddressResponse>} - Success response
   * @name validateBeneficiaryAddress
   * @summary: Validate UPI ID and IFSC code
   * @description: Validate UPI ID and IFSC code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/validateBeneficiaryAddress/).
   */
  async validateBeneficiaryAddress(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["validateBeneficiaryAddress"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ValidateVPAResponse>} - Success response
   * @name validateVPA
   * @summary: Validate VPA.
   * @description: Validate if a Virtual Payment Address (VPA) is valid for processing payments and returns the validation result.is_valid boolean value indicating whether the VPA is valid for payments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/validateVPA/).
   */
  async validateVPA(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ChargeCustomerResponse>} - Success response
   * @name verifyAndChargePayment
   * @summary: Verify order confirmation and charge
   * @description: Verify the payment status and charge from the customer's BNPL (Buy Now, Pay Later) account after order confirmation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyAndChargePayment/).
   */
  async verifyAndChargePayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ValidateCustomerResponse>} - Success response
   * @name verifyCustomerForPayment
   * @summary: Verify payment customer.
   * @description: Verify if the user is eligible for pay-later payment from the payment aggregator side using the customer's phone number. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyCustomerForPayment/).
   */
  async verifyCustomerForPayment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<IfscCodeResponse>} - Success response
   * @name verifyIfscCode
   * @summary: Verify IFSC
   * @description: Validate IFSC code and returns bank details if valid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyIfscCode/).
   */
  async verifyIfscCode(
    { ifscCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AddBeneficiaryViaOtpVerificationResponse>} - Success response
   * @name verifyOtpAndAddBeneficiaryForBank
   * @summary: Verify OTP for bank.
   * @description: Verify the OTP provided by the user and adds a bank beneficiary for refund processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForBank/).
   */
  async verifyOtpAndAddBeneficiaryForBank(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<WalletOtpResponse>} - Success response
   * @name verifyOtpAndAddBeneficiaryForWallet
   * @summary: Verify OTP for wallet.
   * @description: Verify OTP provided by the user and adds a wallet beneficiary. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/verifyOtpAndAddBeneficiaryForWallet/).
   */
  async verifyOtpAndAddBeneficiaryForWallet(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<WalletResponseSchema>} - Success response
   * @name walletLinkInitiate
   * @summary: Initiate linking of wallet
   * @description: Link wallet for the aggregator for processing of payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/payment/walletLinkInitiate/).
   */
  async walletLinkInitiate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["walletLinkInitiate"],
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

    return response;
  }
}

module.exports = Payment;
