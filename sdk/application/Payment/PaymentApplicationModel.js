const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      verify_api: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      merchant_key: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      pin: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      stripe: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      simpl: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),
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
      name_on_card: Joi.string().allow(""),

      nickname: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),

      refresh: Joi.boolean().allow(null),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      data: Joi.any().required(),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      api: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").allow(null),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      cards: PaymentModel.CardPaymentGateway().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Card() {
    return Joi.object({
      expired: Joi.boolean().allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_fingerprint: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

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
      success: Joi.boolean().required(),

      message: Joi.string().allow("").allow(null),
    });
  }

  static ValidateCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      order_items: Joi.array().items(Joi.any()),

      payload: Joi.string().allow("").allow(null),

      delivery_address: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),

      merchant_params: Joi.any(),

      phone_number: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      data: Joi.any().required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      verified: Joi.boolean().allow(null),

      transaction_token: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      timeout: Joi.number().allow(null),

      customer_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      upi_poll_url: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      amount: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      aggregator_order_id: Joi.string().allow(""),

      customer_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      polling_url: Joi.string().allow("").required(),

      bqr_image: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      customer_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      api_link: Joi.string().allow("").allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),

      payment_flow: Joi.string().allow("").allow(null),

      data: Joi.any().allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      stripe: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),
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
      outage: Joi.any().allow(null),

      display_name: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      nickname: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_brand_image: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_type: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_name: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_reference: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      retry_count: Joi.number().allow(null),

      outage: Joi.any().allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_id: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      exp_year: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      save_card: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      display_priority: Joi.number().required(),

      aggregator_name: Joi.string().allow("").allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),
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
      kyc_url: Joi.string().allow(""),

      status: Joi.string().allow(""),
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

      is_valid: Joi.boolean().required(),

      upi_vpa: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static ValidateVPAResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.ValidateUPI().required(),
    });
  }

  static CardDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      status: Joi.boolean().required(),

      card_brand: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      card_exp_year: Joi.string().allow(""),

      card_object: Joi.string().allow("").required(),

      bank: Joi.string().allow("").required(),

      user: Joi.string().allow(""),

      name_on_card: Joi.string().allow(""),

      bank_code: Joi.string().allow("").allow(null).required(),

      type: Joi.string().allow("").required(),

      is_domestic_card: Joi.boolean().required(),

      extended_card_type: Joi.string().allow("").required(),

      card_token: Joi.string().allow(""),

      card_exp_month: Joi.string().allow(""),

      card_sub_type: Joi.string().allow("").allow(null).required(),
    });
  }

  static CardDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.CardDetails().required(),
    });
  }

  static TransferItemsDetails() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      id: Joi.number().required(),

      logo_large: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo_small: Joi.string().allow("").required(),
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
      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      account_holder: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      transfer_mode: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      id: Joi.number().required(),

      subtitle: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

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
      branch_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      bank_name: Joi.string().allow("").required(),
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

      otp: Joi.string().allow("").required(),

      hash_key: Joi.string().allow("").required(),
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
      is_verified_flag: Joi.boolean().required(),

      success: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      vpa: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      transfer_mode: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      order_id: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      delights: Joi.boolean().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      data: Joi.any(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

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
      request_id: Joi.string().allow("").required(),

      is_verified_flag: Joi.string().allow("").required(),

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
      payment_link_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      merchant_name: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      amount: Joi.number().allow(null),

      message: Joi.string().allow("").required(),

      payment_link_current_status: Joi.string().allow("").allow(null),

      external_order_id: Joi.string().allow("").allow(null),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      expired: Joi.boolean().allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      invalid_id: Joi.boolean().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      msg: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      cancelled: Joi.boolean().allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: PaymentModel.ErrorDescription(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      amount: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      mobile_number: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      email: Joi.string().allow("").required(),

      external_order_id: Joi.string().allow("").required(),

      description: Joi.string().allow("").allow(null),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static CancelOrResendPaymentLinkRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }

  static ResendPaymentLinkResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      polling_timeout: Joi.number().allow(null),
    });
  }

  static CancelPaymentLinkResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),
    });
  }

  static PollingPaymentLinkResponse() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),

      success: Joi.boolean().allow(null),

      order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),
    });
  }

  static PaymentMethodsMeta() {
    return Joi.object({
      merchant_code: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").required(),

      payment_gateway: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserPaymentMethods() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: PaymentModel.PaymentMethodsMeta().required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      success_callback_url: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      aggregator: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      customer_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").allow(null),

      data: PaymentModel.CreateOrderUserData(),

      message: Joi.string().allow("").required(),

      payment_confirm_url: Joi.string().allow("").allow(null),
    });
  }

  static BalanceDetails() {
    return Joi.object({
      value: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      formatted_value: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      data: PaymentModel.CreditSummary(),
    });
  }

  static RedirectURL() {
    return Joi.object({
      signup_url: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
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
      signup_url: Joi.string().allow("").required(),

      is_registered: Joi.boolean().required(),

      status: Joi.boolean().required(),
    });
  }

  static CheckCreditResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.CreditDetail().required(),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      date_of_joining: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      membership_id: Joi.string().allow("").required(),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      device_make: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),
    });
  }

  static KYCAddress() {
    return Joi.object({
      land_mark: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),

      addressline1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      fda: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      business_type: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      business_ownership_type: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      middle_name: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      dob: Joi.string().allow("").allow(null).required(),

      gender: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      mothers_name: Joi.string().allow("").allow(null),

      passport: Joi.string().allow("").allow(null),

      email_verified: Joi.boolean().required(),

      first_name: Joi.string().allow("").required(),

      fathers_name: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      pan: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      mcc: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      device: PaymentModel.DeviceDetails(),

      business_info: PaymentModel.BusinessDetails(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),
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
      success: Joi.boolean().required(),

      data: PaymentModel.OnboardSummary().required(),
    });
  }
}
module.exports = PaymentModel;
