const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      merchant_key: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      merchant_id: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      sdk: Joi.boolean().allow(null),

      api: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),

      pin: Joi.string().allow("").allow(null),

      verify_api: Joi.string().allow("").allow(null),

      config_type: Joi.string().allow("").required(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      simpl: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),
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
      refresh: Joi.boolean().allow(null),

      name_on_card: Joi.string().allow(""),

      nickname: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.any().required(),

      message: Joi.string().allow(""),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      cards: PaymentModel.CardPaymentGateway().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Card() {
    return Joi.object({
      card_token: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_id: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_type: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(PaymentModel.Card()),

      message: Joi.string().allow("").required(),
    });
  }

  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").allow(null).required(),
    });
  }

  static DeleteCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").allow(null),
    });
  }

  static ValidateCustomerRequest() {
    return Joi.object({
      order_items: Joi.array().items(Joi.any()),

      phone_number: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      payload: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      merchant_params: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.any().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      amount: Joi.number().allow(null).required(),

      transaction_token: Joi.string().allow("").allow(null),

      verified: Joi.boolean().allow(null),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      customer_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      contact: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      amount: Joi.number().allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      customer_id: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      status: Joi.string().allow(""),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      currency: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      amount: Joi.number().allow(null).required(),

      customer_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      status: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      payment_flow: Joi.string().allow("").allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),

      data: Joi.any().allow(null),

      api_link: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      simpl: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      logos: PaymentModel.PaymentModeLogo(),

      display_name: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      exp_month: Joi.number().allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_id: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      retry_count: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      intent_flow: Joi.boolean().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      expired: Joi.boolean().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_brand: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      name: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_type: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      aggregator_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),
    });
  }

  static PaymentOptionAndFlow() {
    return Joi.object({
      payment_flows: PaymentModel.PaymentFlow().required(),

      payment_option: Joi.array()
        .items(PaymentModel.RootPaymentMode())
        .required(),
    });
  }

  static PaymentModeRouteResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      payment_options: PaymentModel.PaymentOptionAndFlow().required(),
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
      success: Joi.boolean().required(),

      data: PaymentModel.RupifiBannerData().required(),
    });
  }

  static EpaylaterBannerData() {
    return Joi.object({
      display: Joi.boolean().required(),

      message: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static EpaylaterBannerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.EpaylaterBannerData().required(),
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
      success: Joi.boolean().required(),

      data: PaymentModel.LinkStatus().required(),
    });
  }

  static renderHTMLRequest() {
    return Joi.object({
      base64_html: Joi.string().allow("").required(),

      returntype: Joi.string().allow("").allow(null),
    });
  }

  static renderHTMLResponse() {
    return Joi.object({
      html: Joi.string().allow("").required(),
    });
  }

  static ValidateVPARequest() {
    return Joi.object({
      upi_vpa: Joi.string().allow("").required(),
    });
  }

  static ValidateUPI() {
    return Joi.object({
      customer_name: Joi.string().allow("").required(),

      upi_vpa: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      is_valid: Joi.boolean().required(),
    });
  }

  static ValidateVPAResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.ValidateUPI().required(),
    });
  }

  static TransferItemsDetails() {
    return Joi.object({
      id: Joi.number().required(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),

      logo_small: Joi.string().allow("").required(),
    });
  }

  static TransferModeDetails() {
    return Joi.object({
      items: Joi.array().items(PaymentModel.TransferItemsDetails()),

      display_name: Joi.string().allow("").required(),
    });
  }

  static TransferModeResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.TransferModeDetails()).required(),
    });
  }

  static UpdateRefundTransferModeRequest() {
    return Joi.object({
      enable: Joi.boolean().required(),

      transfer_mode: Joi.string().allow("").required(),
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

      subtitle: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      mobile: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean(),

      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      request_id: Joi.string().allow("").required(),

      hash_key: Joi.string().allow("").required(),

      otp: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow("").required(),
    });
  }

  static WrongOtpError() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      wallet: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      delights: Joi.boolean().required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      order_id: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),

      data: Joi.any(),

      message: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: PaymentModel.BankDetailsForOTP().required(),

      order_id: Joi.string().allow("").required(),
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
      request_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

      is_verified_flag: Joi.string().allow("").required(),
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
      success: Joi.boolean(),

      is_beneficiary_set: Joi.boolean().required(),
    });
  }

  static GetPaymentLinkResponse() {
    return Joi.object({
      payment_link_current_status: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      merchant_name: Joi.string().allow("").allow(null),

      external_order_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      payment_link_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      cancelled: Joi.boolean().allow(null),

      expired: Joi.boolean().allow(null),

      amount: Joi.number().allow(null),

      invalid_id: Joi.boolean().allow(null),

      msg: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: PaymentModel.ErrorDescription(),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      assign_card_id: Joi.string().allow("").allow(null),

      amount: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      amount: Joi.number().required(),

      description: Joi.string().allow("").allow(null),

      mobile_number: Joi.string().allow("").required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      external_order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      payment_link_url: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),
    });
  }

  static CancelOrResendPaymentLinkRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }

  static ResendPaymentLinkResponse() {
    return Joi.object({
      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static CancelPaymentLinkResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PollingPaymentLinkResponse() {
    return Joi.object({
      amount: Joi.number().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      status: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),

      http_status: Joi.number().allow(null),
    });
  }

  static PaymentMethodsMeta() {
    return Joi.object({
      payment_gateway: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserPaymentMethods() {
    return Joi.object({
      meta: PaymentModel.PaymentMethodsMeta().required(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      success_callback_url: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),

      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      meta: Joi.any().allow(null),

      payment_link_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      amount: Joi.number().allow(null),

      customer_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      data: PaymentModel.CreateOrderUserData(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      callback_url: Joi.string().allow("").allow(null),
    });
  }

  static BalanceDetails() {
    return Joi.object({
      formatted_value: Joi.string().allow("").required(),

      value: Joi.number().required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static CreditSummary() {
    return Joi.object({
      status_message: Joi.string().allow("").required(),

      merchant_customer_ref_id: Joi.string().allow("").required(),

      balance: PaymentModel.BalanceDetails(),

      status: Joi.string().allow("").required(),
    });
  }

  static CustomerCreditSummaryResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.CreditSummary(),
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
      success: Joi.boolean().required(),

      data: PaymentModel.RedirectURL().required(),
    });
  }

  static CreditDetail() {
    return Joi.object({
      is_registered: Joi.boolean().required(),

      status: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),
    });
  }

  static CheckCreditResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.CreditDetail().required(),
    });
  }

  static KYCAddress() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),

      addressline1: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      vintage: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      date_of_joining: Joi.string().allow("").allow(null),

      membership_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      address_as_per_id: PaymentModel.KYCAddress().required(),

      mobile_verified: Joi.boolean().required(),

      mothers_name: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      voter_id: Joi.string().allow("").allow(null),

      passport: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      email_verified: Joi.boolean().required(),

      phone: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      identifier_type: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      business_info: PaymentModel.BusinessDetails(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      aggregator: Joi.string().allow("").required(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      mcc: Joi.string().allow("").allow(null),

      device: PaymentModel.DeviceDetails(),
    });
  }

  static OnboardSummary() {
    return Joi.object({
      status: Joi.boolean().required(),

      redirect_url: Joi.string().allow("").required(),

      session: Joi.any().required(),
    });
  }

  static CustomerOnboardingResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.OnboardSummary().required(),
    });
  }
}
module.exports = PaymentModel;
