const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      merchant_key: Joi.string().allow("").allow(null),

      config_type: Joi.string().allow("").required(),

      api: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").allow(null),

      pin: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      verify_api: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      razorpay: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      simpl: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: PaymentModel.ErrorCodeAndDescription().required(),
    });
  }

  static AttachCardRequest() {
    return Joi.object({
      refresh: Joi.boolean().allow(null),

      nickname: Joi.string().allow(""),

      name_on_card: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      data: Joi.any().required(),
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
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      cards: PaymentModel.CardPaymentGateway().required(),
    });
  }

  static Card() {
    return Joi.object({
      card_token: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      exp_year: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_number: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.array().items(PaymentModel.Card()),
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
      merchant_params: Joi.any(),

      order_items: Joi.array().items(Joi.any()),

      billing_address: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),

      payload: Joi.string().allow("").allow(null),

      delivery_address: Joi.any(),

      aggregator: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      verified: Joi.boolean().allow(null),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      cart_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      aggregator_order_id: Joi.string().allow(""),

      method: Joi.string().allow("").required(),

      polling_url: Joi.string().allow("").required(),

      amount: Joi.number().allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      vpa: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),

      redirect_url: Joi.string().allow("").allow(null),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
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
      expired: Joi.boolean().allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      exp_month: Joi.number().allow(null),

      retry_count: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_token: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_reference: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      timeout: Joi.number().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      name: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_priority: Joi.number().required(),

      save_card: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      aggregator_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      api_link: Joi.string().allow("").allow(null),

      data: Joi.any().allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),

      payment_flow: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      razorpay: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),
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
      success: Joi.boolean().required(),

      payment_options: PaymentModel.PaymentOptionAndFlow().required(),
    });
  }

  static RupifiBannerData() {
    return Joi.object({
      kyc_url: Joi.string().allow(""),

      status: Joi.string().allow(""),
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

      message: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      request_type: Joi.string().allow("").required(),
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

  static renderHTMLRequest() {
    return Joi.object({
      returntype: Joi.string().allow("").allow(null),

      base64_html: Joi.string().allow("").required(),
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
      data: PaymentModel.ValidateUPI().required(),

      success: Joi.boolean().required(),
    });
  }

  static CardDetails() {
    return Joi.object({
      card_brand: Joi.string().allow("").required(),

      card_token: Joi.string().allow(""),

      bank_code: Joi.string().allow("").allow(null).required(),

      status: Joi.boolean().required(),

      card_exp_year: Joi.string().allow(""),

      bank: Joi.string().allow("").required(),

      is_domestic_card: Joi.boolean().required(),

      country: Joi.string().allow("").required(),

      card_exp_month: Joi.string().allow(""),

      extended_card_type: Joi.string().allow("").required(),

      user: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      card_sub_type: Joi.string().allow("").allow(null).required(),

      name_on_card: Joi.string().allow(""),

      card_object: Joi.string().allow("").required(),
    });
  }

  static CardDetailsResponse() {
    return Joi.object({
      data: PaymentModel.CardDetails().required(),

      success: Joi.boolean().required(),
    });
  }

  static TransferItemsDetails() {
    return Joi.object({
      logo_small: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_name: Joi.string().allow(""),
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
      modified_on: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      comment: Joi.string().allow(""),

      delights_user_name: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      id: Joi.number().required(),
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

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      bank_name: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
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
      success: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean().required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      address: Joi.string().allow(""),

      mobile: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      vpa: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      shipment_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      delights: Joi.boolean().required(),

      otp: Joi.string().allow(""),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),

      data: Joi.any(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
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
      country_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),
    });
  }

  static WalletOtpResponse() {
    return Joi.object({
      success: Joi.boolean(),

      request_id: Joi.string().allow("").required(),

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
      external_order_id: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      payment_link_current_status: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      payment_link_url: Joi.string().allow("").allow(null),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      msg: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      invalid_id: Joi.boolean().allow(null),

      amount: Joi.number().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      cancelled: Joi.boolean().allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      error: PaymentModel.ErrorDescription(),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      cart_id: Joi.string().allow("").required(),

      amount: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      checkout_mode: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      external_order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      amount: Joi.number().required(),

      description: Joi.string().allow("").allow(null),

      mobile_number: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      payment_link_url: Joi.string().allow("").allow(null),
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

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      polling_timeout: Joi.number().allow(null),
    });
  }

  static CancelPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),
    });
  }

  static PollingPaymentLinkResponse() {
    return Joi.object({
      status: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),

      amount: Joi.number().allow(null),

      order_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      message: Joi.string().allow("").allow(null),

      redirect_url: Joi.string().allow("").allow(null),
    });
  }

  static PaymentMethodsMeta() {
    return Joi.object({
      payment_gateway: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),
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
      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      currency: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      success_callback_url: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      order_id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      order_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      callback_url: Joi.string().allow("").allow(null),

      data: PaymentModel.CreateOrderUserData(),

      payment_confirm_url: Joi.string().allow("").allow(null),
    });
  }

  static BalanceDetails() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      formatted_value: Joi.string().allow("").required(),

      value: Joi.number().required(),
    });
  }

  static CreditSummary() {
    return Joi.object({
      merchant_customer_ref_id: Joi.string().allow("").required(),

      balance: PaymentModel.BalanceDetails(),

      status: Joi.string().allow("").required(),

      status_message: Joi.string().allow("").required(),
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

      is_registered: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),
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

      addressline1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),

      addressline2: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      shop_and_establishment: Joi.any(),

      business_ownership_type: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      gstin: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      membership_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      passport: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      gender: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      phone: Joi.string().allow("").required(),

      email_verified: Joi.boolean().required(),

      first_name: Joi.string().allow("").required(),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      fathers_name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      device_type: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      business_info: PaymentModel.BusinessDetails(),

      mcc: Joi.string().allow("").allow(null),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      device: PaymentModel.DeviceDetails(),

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
