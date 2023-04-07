const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      merchant_key: Joi.string().allow("").allow(null),

      pin: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      api: Joi.string().allow("").allow(null),

      verify_api: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      simpl: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentModel.ErrorCodeAndDescription().required(),

      success: Joi.boolean().required(),
    });
  }

  static AttachCardRequest() {
    return Joi.object({
      nickname: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),

      name_on_card: Joi.string().allow(""),

      refresh: Joi.boolean().allow(null),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      api: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      cards: PaymentModel.CardPaymentGateway().required(),

      success: Joi.boolean().required(),
    });
  }

  static Card() {
    return Joi.object({
      card_name: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_isin: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      data: Joi.array().items(PaymentModel.Card()),

      success: Joi.boolean().required(),
    });
  }

  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").allow(null).required(),
    });
  }

  static DeleteCardsResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),
    });
  }

  static ValidateCustomerRequest() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),

      merchant_params: Joi.any(),

      payload: Joi.string().allow("").allow(null),

      order_items: Joi.array().items(Joi.any()),

      aggregator: Joi.string().allow("").required(),

      delivery_address: Joi.any(),

      billing_address: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      verified: Joi.boolean().allow(null),

      aggregator: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow("").allow(null),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),

      delivery_address_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      method: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      amount: Joi.number().allow(null),

      polling_url: Joi.string().allow("").required(),

      currency: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      vpa: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      status: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      redirect_url: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),

      success: Joi.boolean().allow(null),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static IntentApp() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      logo_url: PaymentModel.PaymentModeLogo(),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      exp_month: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_number: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_id: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      exp_year: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_brand: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      nickname: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      anonymous_enable: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_priority: Joi.number().required(),

      add_card_enabled: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

      save_card: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      payment_flow: Joi.string().allow("").allow(null),

      data: Joi.any().allow(null),

      api_link: Joi.string().allow("").allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      simpl: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),
    });
  }

  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentModel.RootPaymentMode())
        .required(),

      payment_flows: PaymentModel.PaymentFlow().required(),
    });
  }

  static PaymentModeRouteResponse() {
    return Joi.object({
      payment_options: PaymentModel.PaymentOptionAndFlow().required(),

      success: Joi.boolean().required(),
    });
  }

  static RupifiBannerData() {
    return Joi.object({
      status: Joi.string().allow(""),

      kyc_url: Joi.string().allow(""),
    });
  }

  static RupifiBannerResponse() {
    return Joi.object({
      data: PaymentModel.RupifiBannerData().required(),

      success: Joi.boolean().required(),
    });
  }

  static EpaylaterBannerData() {
    return Joi.object({
      display: Joi.boolean().required(),

      status: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static EpaylaterBannerResponse() {
    return Joi.object({
      data: PaymentModel.EpaylaterBannerData().required(),

      success: Joi.boolean().required(),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      request_type: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static LinkStatus() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      data: PaymentModel.LinkStatus().required(),

      success: Joi.boolean().required(),
    });
  }

  static TransferItemsDetails() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo_small: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static TransferModeDetails() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      items: Joi.array().items(PaymentModel.TransferItemsDetails()),
    });
  }

  static TransferModeResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.TransferModeDetails()).required(),
    });
  }

  static UpdateRefundTransferModeRequest() {
    return Joi.object({
      transfer_mode: Joi.string().allow("").required(),

      enable: Joi.boolean().required(),
    });
  }

  static UpdateRefundTransferModeResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      beneficiary_id: Joi.string().allow("").required(),

      branch_name: Joi.boolean(),

      comment: Joi.boolean(),

      account_no: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      delights_user_name: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      mobile: Joi.boolean(),

      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),

      show_beneficiary_details: Joi.boolean(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      otp: Joi.string().allow("").required(),

      hash_key: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static WrongOtpError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean().required(),

      success: Joi.string().allow("").required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      wallet: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      otp: Joi.string().allow(""),

      delights: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      request_id: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),

      data: Joi.any(),

      success: Joi.boolean().required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      details: PaymentModel.BankDetailsForOTP().required(),
    });
  }

  static WalletOtpRequest() {
    return Joi.object({
      mobile: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static WalletOtpResponse() {
    return Joi.object({
      is_verified_flag: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      beneficiary_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static SetDefaultBeneficiaryResponse() {
    return Joi.object({
      is_beneficiary_set: Joi.boolean().required(),

      success: Joi.boolean(),
    });
  }

  static GetPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      merchant_name: Joi.string().allow("").allow(null),

      payment_link_current_status: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      external_order_id: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").allow(null),

      cancelled: Joi.boolean().allow(null),

      invalid_id: Joi.boolean().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      msg: Joi.string().allow("").allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      error: PaymentModel.ErrorDescription(),

      success: Joi.boolean().required(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),

      amount: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      description: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      external_order_id: Joi.string().allow("").required(),

      mobile_number: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      payment_link_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      polling_timeout: Joi.number().allow(null),

      payment_link_id: Joi.string().allow("").allow(null),
    });
  }

  static CancelOrResendPaymentLinkRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }

  static ResendPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),
    });
  }

  static CancelPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),
    });
  }

  static PollingPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),

      http_status: Joi.number().allow(null),

      status: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),
    });
  }

  static PaymentMethodsMeta() {
    return Joi.object({
      merchant_code: Joi.string().allow("").required(),

      payment_gateway: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserPaymentMethods() {
    return Joi.object({
      meta: PaymentModel.PaymentMethodsMeta().required(),

      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      meta: Joi.any().allow(null),

      failure_callback_url: Joi.string().allow("").required(),

      success_callback_url: Joi.string().allow("").required(),

      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      currency: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      order_id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      payment_confirm_url: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      data: PaymentModel.CreateOrderUserData(),

      callback_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),
    });
  }

  static BalanceDetails() {
    return Joi.object({
      value: Joi.number().required(),

      formatted_value: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static CreditSummary() {
    return Joi.object({
      merchant_customer_ref_id: Joi.string().allow("").required(),

      balance: PaymentModel.BalanceDetails(),

      status_message: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static CustomerCreditSummaryResponse() {
    return Joi.object({
      data: PaymentModel.CreditSummary(),

      success: Joi.boolean().required(),
    });
  }

  static RedirectURL() {
    return Joi.object({
      status: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),
    });
  }

  static RedirectToAggregatorResponse() {
    return Joi.object({
      data: PaymentModel.RedirectURL().required(),

      success: Joi.boolean().required(),
    });
  }

  static CreditDetail() {
    return Joi.object({
      status: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),

      is_registered: Joi.boolean().required(),
    });
  }

  static CheckCreditResponse() {
    return Joi.object({
      data: PaymentModel.CreditDetail().required(),

      success: Joi.boolean().required(),
    });
  }

  static KYCAddress() {
    return Joi.object({
      land_mark: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      addressline1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),

      addressline2: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      email_verified: Joi.boolean().required(),

      dob: Joi.string().allow("").allow(null).required(),

      last_name: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      passport: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      fathers_name: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      middle_name: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      device_type: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      business_ownership_type: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      address: PaymentModel.KYCAddress(),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      membership_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      device: PaymentModel.DeviceDetails(),

      business_info: PaymentModel.BusinessDetails(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      aggregator: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),
    });
  }

  static OnboardSummary() {
    return Joi.object({
      session: Joi.any().required(),

      redirect_url: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static CustomerOnboardingResponse() {
    return Joi.object({
      data: PaymentModel.OnboardSummary().required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
