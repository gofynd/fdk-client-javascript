const APIClient = require("../ApplicationAPIClient");
const Paginator = require("../../common/Paginator");
const constructUrl = require("../constructUrl");
const { FDKClientValidationError } = require("../../common/FDKError");
const PaymentValidator = require("../models/PaymentValidator");

class Payment {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAggregatorsConfig:
        "/service/application/payment/v1.0/config/aggregators/key",
      attachCardToCustomer: "/service/application/payment/v1.0/card/attach",
      getActiveCardAggregator:
        "/service/application/payment/v1.0/card/aggregator",
      getActiveUserCards: "/service/application/payment/v1.0/cards",
      deleteUserCard: "/service/application/payment/v1.0/card/remove",
      verifyCustomerForPayment:
        "/service/application/payment/v1.0/payment/customer/validation",
      verifyAndChargePayment:
        "/service/application/payment/v1.0/payment/confirm/charge",
      initialisePayment: "/service/application/payment/v1.0/payment/request",
      checkAndUpdatePaymentStatus:
        "/service/application/payment/v1.0/payment/confirm/polling",
      getPaymentModeRoutes: "/service/application/payment/v1.0/payment/options",
      getPosPaymentModeRoutes:
        "/service/application/payment/v1.0/payment/options/pos",
      getRupifiBannerDetails: "/service/application/payment/v1.0/rupifi/banner",
      getEpaylaterBannerDetails:
        "/service/application/payment/v1.0/epaylater/banner",
      resendOrCancelPayment:
        "/service/application/payment/v1.0/payment/resend_or_cancel",
      renderHTML: "/service/application/payment/v1.0/payment/html/render/",
      validateVPA: "/service/application/payment/v1.0/validate-vpa",
      getActiveRefundTransferModes:
        "/service/application/payment/v1.0/refund/transfer-mode",
      enableOrDisableRefundTransferMode:
        "/service/application/payment/v1.0/refund/transfer-mode",
      getUserBeneficiariesDetail:
        "/service/application/payment/v1.0/refund/user/beneficiary",
      verifyIfscCode: "/service/application/payment/v1.0/ifsc-code/verify",
      getOrderBeneficiariesDetail:
        "/service/application/payment/v1.0/refund/order/beneficiaries",
      verifyOtpAndAddBeneficiaryForBank:
        "/service/application/payment/v1.0/refund/verification/bank",
      addBeneficiaryDetails: "/service/application/payment/v1.0/refund/account",
      addRefundBankAccountUsingOTP:
        "/service/application/payment/v1.0/refund/account/otp",
      verifyOtpAndAddBeneficiaryForWallet:
        "/service/application/payment/v1.0/refund/verification/wallet",
      updateDefaultBeneficiary:
        "/service/application/payment/v1.0/refund/beneficiary/default",
      getPaymentLink: "/service/application/payment/v1.0/create-payment-link/",
      createPaymentLink:
        "/service/application/payment/v1.0/create-payment-link/",
      resendPaymentLink:
        "/service/application/payment/v1.0/resend-payment-link/",
      cancelPaymentLink:
        "/service/application/payment/v1.0/cancel-payment-link/",
      getPaymentModeRoutesPaymentLink:
        "/service/application/payment/v1.0/payment/options/link/",
      pollingPaymentLink:
        "/service/application/payment/v1.0/polling-payment-link/",
      createOrderHandlerPaymentLink:
        "/service/application/payment/v1.0/create-order/link/",
      initialisePaymentPaymentLink:
        "/service/application/payment/v1.0/payment/request/link/",
      checkAndUpdatePaymentStatusPaymentLink:
        "/service/application/payment/v1.0/payment/confirm/polling/link/",
      customerCreditSummary:
        "/service/application/payment/v1.0/payment/credit-summary/",
      redirectToAggregator:
        "/service/application/payment/v1.0/payment/redirect-to-aggregator/",
      checkCredit: "/service/application/payment/v1.0/check-credits/",
      customerOnboard: "/service/application/payment/v1.0/credit-onboard/",
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
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
   *   to remove temporary cache files on payment gateway and replace with the
   *   latest one.
   * @returns {Promise<AggregatorsConfigDetailResponse>} - Success response
   * @summary: Get payment gateway keys
   * @description: Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end.
   */
  getAggregatorsConfig({ refresh } = {}) {
    const { error } = PaymentValidator.getAggregatorsConfig().validate(
      { refresh },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["refresh"] = refresh;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAggregatorsConfig"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AttachCardRequest} arg.body
   * @returns {Promise<AttachCardsResponse>} - Success response
   * @summary: Attach a saved card to customer.
   * @description: Use this API to attach a customer's saved card at the payment gateway, such as Stripe, Juspay.
   */
  attachCardToCustomer({ body } = {}) {
    const { error } = PaymentValidator.attachCardToCustomer().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["attachCardToCustomer"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.refresh] -
   * @returns {Promise<ActiveCardPaymentGatewayResponse>} - Success response
   * @summary: Fetch active payment gateway for card payments
   * @description: Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only.
   */
  getActiveCardAggregator({ refresh } = {}) {
    const { error } = PaymentValidator.getActiveCardAggregator().validate(
      { refresh },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["refresh"] = refresh;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getActiveCardAggregator"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.forceRefresh] -
   * @returns {Promise<ListCardsResponse>} - Success response
   * @summary: Fetch the list of cards saved by the user
   * @description: Use this API to retrieve a list of cards stored by user from an active payment gateway.
   */
  getActiveUserCards({ forceRefresh } = {}) {
    const { error } = PaymentValidator.getActiveUserCards().validate(
      { forceRefresh },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["force_refresh"] = forceRefresh;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getActiveUserCards"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DeletehCardRequest} arg.body
   * @returns {Promise<DeleteCardsResponse>} - Success response
   * @summary: Delete a card
   * @description: Use this API to delete a card added by a user on the payment gateway and clear the cache.
   */
  deleteUserCard({ body } = {}) {
    const { error } = PaymentValidator.deleteUserCard().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["deleteUserCard"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ValidateCustomerRequest} arg.body
   * @returns {Promise<ValidateCustomerResponse>} - Success response
   * @summary: Validate customer for payment
   * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
   */
  verifyCustomerForPayment({ body } = {}) {
    const { error } = PaymentValidator.verifyCustomerForPayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyCustomerForPayment"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ChargeCustomerRequest} arg.body
   * @returns {Promise<ChargeCustomerResponse>} - Success response
   * @summary: Verify and charge payment
   * @description: Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe.
   */
  verifyAndChargePayment({ body } = {}) {
    const { error } = PaymentValidator.verifyAndChargePayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyAndChargePayment"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentInitializationRequest} arg.body
   * @returns {Promise<PaymentInitializationResponse>} - Success response
   * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
   * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
   */
  initialisePayment({ body } = {}) {
    const { error } = PaymentValidator.initialisePayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["initialisePayment"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentStatusUpdateRequest} arg.body
   * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
   * @summary: Performs continuous polling to check status of payment on the server
   * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
   */
  checkAndUpdatePaymentStatus({ body } = {}) {
    const { error } = PaymentValidator.checkAndUpdatePaymentStatus().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkAndUpdatePaymentStatus"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.amount - Payable amount.
   * @param {string} arg.cartId - Identifier of the cart.
   * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
   * @param {string} arg.checkoutMode - Option to checkout for self or for others.
   * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
   *   to remove temporary cache files on payment gateway and replace with the
   *   latest one.
   * @param {string} [arg.cardReference] - Card reference id of user's debit
   *   or credit card.
   * @param {string} [arg.userDetails] - URIencoded JSON containing details of
   *   an anonymous user.
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @summary: Get applicable payment options
   * @description: Use this API to get all valid payment options for doing a payment.
   */
  getPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    refresh,
    cardReference,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
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
    const query_params = {};
    query_params["amount"] = amount;
    query_params["cart_id"] = cartId;
    query_params["pincode"] = pincode;
    query_params["checkout_mode"] = checkoutMode;
    query_params["refresh"] = refresh;
    query_params["card_reference"] = cardReference;
    query_params["user_details"] = userDetails;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPaymentModeRoutes"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.amount - Payable amount.
   * @param {string} arg.cartId - Identifier of the cart.
   * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
   * @param {string} arg.checkoutMode - Option to checkout for self or for others.
   * @param {boolean} [arg.refresh] - This is a boolean value. Select `true`
   *   to remove temporary cache files on payment gateway and replace with the
   *   latest one.
   * @param {string} [arg.cardReference] - Card reference id of user's debit
   *   or credit card.
   * @param {string} arg.orderType - The order type of shipment * HomeDelivery
   *   - If the customer wants the order home-delivered * PickAtStore - If the
   *   customer wants the handover of an order at the store itself.
   * @param {string} [arg.userDetails] - URIencoded JSON containing details of
   *   an anonymous user.
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @summary: Get applicable payment options for Point-of-Sale (POS)
   * @description: Use this API to get all valid payment options for doing a payment in POS.
   */
  getPosPaymentModeRoutes({
    amount,
    cartId,
    pincode,
    checkoutMode,
    orderType,
    refresh,
    cardReference,
    userDetails,
  } = {}) {
    const { error } = PaymentValidator.getPosPaymentModeRoutes().validate(
      {
        amount,
        cartId,
        pincode,
        checkoutMode,
        orderType,
        refresh,
        cardReference,
        userDetails,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
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

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPosPaymentModeRoutes"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<RupifiBannerResponse>} - Success response
   * @summary: Get CreditLine Offer
   * @description: Get CreditLine Offer if user is tentatively approved by rupifi
   */
  getRupifiBannerDetails({} = {}) {
    const { error } = PaymentValidator.getRupifiBannerDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getRupifiBannerDetails"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<EpaylaterBannerResponse>} - Success response
   * @summary: Get Epaylater Enabled
   * @description: Get Epaylater Enabled if user is tentatively approved by epaylater
   */
  getEpaylaterBannerDetails({} = {}) {
    const { error } = PaymentValidator.getEpaylaterBannerDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getEpaylaterBannerDetails"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ResendOrCancelPaymentRequest} arg.body
   * @returns {Promise<ResendOrCancelPaymentResponse>} - Success response
   * @summary: API to resend and cancel a payment link which was already generated.
   * @description: Use this API to perform resend or cancel a payment link based on request payload.
   */
  resendOrCancelPayment({ body } = {}) {
    const { error } = PaymentValidator.resendOrCancelPayment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["resendOrCancelPayment"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {renderHTMLRequest} arg.body
   * @returns {Promise<renderHTMLResponse>} - Success response
   * @summary: Convert base64 string to HTML form
   * @description: Use this API to decode base64 html form to plain HTML string.
   */
  renderHTML({ body } = {}) {
    const { error } = PaymentValidator.renderHTML().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["renderHTML"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ValidateVPARequest} arg.body
   * @returns {Promise<ValidateVPAResponse>} - Success response
   * @summary: API to Validate UPI ID
   * @description: API to Validate UPI ID
   */
  validateVPA({ body } = {}) {
    const { error } = PaymentValidator.validateVPA().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["validateVPA"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<TransferModeResponse>} - Success response
   * @summary: Lists the mode of refund
   * @description: Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details.
   */
  getActiveRefundTransferModes({} = {}) {
    const { error } = PaymentValidator.getActiveRefundTransferModes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getActiveRefundTransferModes"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateRefundTransferModeRequest} arg.body
   * @returns {Promise<UpdateRefundTransferModeResponse>} - Success response
   * @summary: Enable/Disable a mode for transferring a refund
   * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund
   */
  enableOrDisableRefundTransferMode({ body } = {}) {
    const {
      error,
    } = PaymentValidator.enableOrDisableRefundTransferMode().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["enableOrDisableRefundTransferMode"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderBeneficiaryResponse>} - Success response
   * @summary: Lists the beneficiary of a refund
   * @description: Use this API to get the details of all active beneficiary added by a user for refund.
   */
  getUserBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getUserBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["order_id"] = orderId;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserBeneficiariesDetail"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.ifscCode] - A 11-digit alphanumeric code that
   *   uniquely identifies a bank branch.
   * @returns {Promise<IfscCodeResponse>} - Success response
   * @summary: Verify IFSC Code
   * @description: Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund.
   */
  verifyIfscCode({ ifscCode } = {}) {
    const { error } = PaymentValidator.verifyIfscCode().validate(
      { ifscCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["ifsc_code"] = ifscCode;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["verifyIfscCode"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId - A unique number used for identifying and
   *   tracking your orders.
   * @returns {Promise<OrderBeneficiaryResponse>} - Success response
   * @summary: Lists the beneficiary of a refund
   * @description: Use this API to get the details of all active beneficiary added by a user for refund.
   */
  getOrderBeneficiariesDetail({ orderId } = {}) {
    const { error } = PaymentValidator.getOrderBeneficiariesDetail().validate(
      { orderId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["order_id"] = orderId;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrderBeneficiariesDetail"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
   * @returns {Promise<AddBeneficiaryViaOtpVerificationResponse>} - Success response
   * @summary: Verify the beneficiary details using OTP
   * @description: Use this API to perform an OTP validation before saving the beneficiary details added for a refund.
   */
  verifyOtpAndAddBeneficiaryForBank({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForBank().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyOtpAndAddBeneficiaryForBank"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryDetailsRequest} arg.body
   * @returns {Promise<RefundAccountResponse>} - Success response
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save the bank details for a returned or cancelled order to refund the amount.
   */
  addBeneficiaryDetails({ body } = {}) {
    const { error } = PaymentValidator.addBeneficiaryDetails().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addBeneficiaryDetails"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryDetailsOTPRequest} arg.body
   * @returns {Promise<RefundAccountResponse>} - Success response
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
   */
  addRefundBankAccountUsingOTP({ body } = {}) {
    const { error } = PaymentValidator.addRefundBankAccountUsingOTP().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["addRefundBankAccountUsingOTP"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {WalletOtpRequest} arg.body
   * @returns {Promise<WalletOtpResponse>} - Success response
   * @summary: Send OTP on adding a wallet beneficiary
   * @description: Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification.
   */
  verifyOtpAndAddBeneficiaryForWallet({ body } = {}) {
    const {
      error,
    } = PaymentValidator.verifyOtpAndAddBeneficiaryForWallet().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["verifyOtpAndAddBeneficiaryForWallet"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SetDefaultBeneficiaryRequest} arg.body
   * @returns {Promise<SetDefaultBeneficiaryResponse>} - Success response
   * @summary: Set a default beneficiary for a refund
   * @description: Use this API to set a default beneficiary for getting a refund.
   */
  updateDefaultBeneficiary({ body } = {}) {
    const { error } = PaymentValidator.updateDefaultBeneficiary().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["updateDefaultBeneficiary"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.paymentLinkId] -
   * @returns {Promise<GetPaymentLinkResponse>} - Success response
   * @summary: Get payment link
   * @description: Use this API to get a payment link
   */
  getPaymentLink({ paymentLinkId } = {}) {
    const { error } = PaymentValidator.getPaymentLink().validate(
      { paymentLinkId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPaymentLink"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreatePaymentLinkRequest} arg.body
   * @returns {Promise<CreatePaymentLinkResponse>} - Success response
   * @summary: Create payment link
   * @description: Use this API to create a payment link for the customer
   */
  createPaymentLink({ body } = {}) {
    const { error } = PaymentValidator.createPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createPaymentLink"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CancelOrResendPaymentLinkRequest} arg.body
   * @returns {Promise<ResendPaymentLinkResponse>} - Success response
   * @summary: Resend payment link
   * @description: Use this API to resend a payment link for the customer
   */
  resendPaymentLink({ body } = {}) {
    const { error } = PaymentValidator.resendPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["resendPaymentLink"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CancelOrResendPaymentLinkRequest} arg.body
   * @returns {Promise<CancelPaymentLinkResponse>} - Success response
   * @summary: Cancel payment link
   * @description: Use this API to cancel a payment link for the customer
   */
  cancelPaymentLink({ body } = {}) {
    const { error } = PaymentValidator.cancelPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["cancelPaymentLink"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.paymentLinkId - Payment link id
   * @returns {Promise<PaymentModeRouteResponse>} - Success response
   * @summary: Get applicable payment options for payment link
   * @description: Use this API to get all valid payment options for doing a payment through payment link
   */
  getPaymentModeRoutesPaymentLink({ paymentLinkId } = {}) {
    const {
      error,
    } = PaymentValidator.getPaymentModeRoutesPaymentLink().validate(
      { paymentLinkId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPaymentModeRoutesPaymentLink"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.paymentLinkId] -
   * @returns {Promise<PollingPaymentLinkResponse>} - Success response
   * @summary: Used for polling if payment successful or not
   * @description: Use this API to poll if payment through payment was successful or not
   */
  pollingPaymentLink({ paymentLinkId } = {}) {
    const { error } = PaymentValidator.pollingPaymentLink().validate(
      { paymentLinkId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["payment_link_id"] = paymentLinkId;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["pollingPaymentLink"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateOrderUserRequest} arg.body
   * @returns {Promise<CreateOrderUserResponse>} - Success response
   * @summary: Create Order user
   * @description: Use this API to create a order and payment on aggregator side
   */
  createOrderHandlerPaymentLink({ body } = {}) {
    const { error } = PaymentValidator.createOrderHandlerPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createOrderHandlerPaymentLink"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentInitializationRequest} arg.body
   * @returns {Promise<PaymentInitializationResponse>} - Success response
   * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
   * @description: Use this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
   */
  initialisePaymentPaymentLink({ body } = {}) {
    const { error } = PaymentValidator.initialisePaymentPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["initialisePaymentPaymentLink"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentStatusUpdateRequest} arg.body
   * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
   * @summary: Performs continuous polling to check status of payment on the server
   * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
   */
  checkAndUpdatePaymentStatusPaymentLink({ body } = {}) {
    const {
      error,
    } = PaymentValidator.checkAndUpdatePaymentStatusPaymentLink().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkAndUpdatePaymentStatusPaymentLink"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.aggregator] -
   * @returns {Promise<CustomerCreditSummaryResponse>} - Success response
   * @summary: API to fetch the customer credit summary
   * @description: Use this API to fetch the customer credit summary.
   */
  customerCreditSummary({ aggregator } = {}) {
    const { error } = PaymentValidator.customerCreditSummary().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["aggregator"] = aggregator;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["customerCreditSummary"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.source] - This is a String value that contains
   *   callback URL as value.
   * @param {string} [arg.aggregator] - This is a String value that contains
   *   aggregator name as value.
   * @returns {Promise<RedirectToAggregatorResponse>} - Success response
   * @summary: API to get the redirect url to redirect the user to aggregator's page
   * @description: Use this API to get the redirect url to redirect the user to aggregator's page
   */
  redirectToAggregator({ source, aggregator } = {}) {
    const { error } = PaymentValidator.redirectToAggregator().validate(
      { source, aggregator },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["source"] = source;
    query_params["aggregator"] = aggregator;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["redirectToAggregator"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.aggregator] -
   * @returns {Promise<CheckCreditResponse>} - Success response
   * @summary: API to fetch the customer credit summary
   * @description: Use this API to fetch the customer credit summary.
   */
  checkCredit({ aggregator } = {}) {
    const { error } = PaymentValidator.checkCredit().validate(
      { aggregator },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["aggregator"] = aggregator;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["checkCredit"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CustomerOnboardingRequest} arg.body
   * @returns {Promise<CustomerOnboardingResponse>} - Success response
   * @summary: API to fetch the customer credit summary
   * @description: Use this API to fetch the customer credit summary.
   */
  customerOnboard({ body } = {}) {
    const { error } = PaymentValidator.customerOnboard().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["customerOnboard"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }
}

module.exports = Payment;
