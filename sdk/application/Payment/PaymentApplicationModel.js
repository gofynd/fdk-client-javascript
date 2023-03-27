const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      secret: Joi.string().allow("").required(),

      sdk: Joi.boolean().allow(null),

      config_type: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").allow(null),

      verify_api: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      pin: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      stripe: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      env: Joi.string().allow("").required(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      simpl: PaymentModel.AggregatorConfigDetail(),
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
      success: Joi.boolean().required(),

      error: PaymentModel.ErrorCodeAndDescription().required(),
    });
  }

  static AttachCardRequest() {
    return Joi.object({
      nickname: Joi.string().allow(""),

      name_on_card: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),

      refresh: Joi.boolean().allow(null),
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
      api: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").allow(null),
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
      exp_month: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),
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
      payload: Joi.string().allow("").allow(null),

      phone_number: Joi.string().allow("").required(),

      delivery_address: Joi.any(),

      merchant_params: Joi.any(),

      aggregator: Joi.string().allow("").required(),

      transaction_amount_in_paise: Joi.number().required(),

      billing_address: Joi.any(),

      order_items: Joi.array().items(Joi.any()),
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
      amount: Joi.number().allow(null).required(),

      transaction_token: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      verified: Joi.boolean().allow(null),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      email: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      vpa: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      amount: Joi.number().allow(null),

      polling_url: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      aggregator_order_id: Joi.string().allow(""),

      currency: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      bqr_image: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      email: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      redirect_url: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),

      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),
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
      package_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      display_name: Joi.string().allow("").allow(null),

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
      code: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      logo_url: PaymentModel.PaymentModeLogo(),

      card_isin: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_name: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_fingerprint: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      retry_count: Joi.number().allow(null),

      intent_flow: Joi.boolean().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      display_priority: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      list: Joi.array().items(PaymentModel.PaymentModeList()),

      anonymous_enable: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      save_card: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      data: Joi.any().allow(null),

      payment_flow: Joi.string().allow("").allow(null),

      api_link: Joi.string().allow("").allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      stripe: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),
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
      status: Joi.string().allow("").required(),

      is_valid: Joi.boolean().required(),

      upi_vpa: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),
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
      card_sub_type: Joi.string().allow("").allow(null).required(),

      user: Joi.string().allow(""),

      card_exp_month: Joi.string().allow(""),

      bank_code: Joi.string().allow("").allow(null).required(),

      card_exp_year: Joi.string().allow(""),

      card_token: Joi.string().allow(""),

      card_object: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      status: Joi.boolean().required(),

      name_on_card: Joi.string().allow(""),

      card_brand: Joi.string().allow("").required(),

      extended_card_type: Joi.string().allow("").required(),

      is_domestic_card: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      bank: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
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

      id: Joi.number().required(),

      logo_large: Joi.string().allow("").required(),

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
      email: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      delights_user_name: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      account_no: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      beneficiary_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      id: Joi.number().required(),

      transfer_mode: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      subtitle: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
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

      success: Joi.boolean().required(),

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
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      otp: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),

      hash_key: Joi.string().allow("").required(),
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

      success: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean().required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      vpa: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      otp: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      delights: Joi.boolean().required(),

      transfer_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      details: PaymentModel.BeneficiaryModeDetails().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.any(),

      is_verified_flag: Joi.boolean(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
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
      country_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),
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
      is_beneficiary_set: Joi.boolean().required(),

      success: Joi.boolean(),
    });
  }

  static GetPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      payment_link_url: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      external_order_id: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      payment_link_current_status: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      invalid_id: Joi.boolean().allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      msg: Joi.string().allow("").allow(null),

      cancelled: Joi.boolean().allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      error: PaymentModel.ErrorDescription(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      checkout_mode: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      amount: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      mobile_number: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      external_order_id: Joi.string().allow("").required(),

      description: Joi.string().allow("").allow(null),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      payment_link_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

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

      amount: Joi.number().allow(null),

      status_code: Joi.number().allow(null),

      status: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),
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
      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      meta: PaymentModel.PaymentMethodsMeta().required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      failure_callback_url: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      currency: Joi.string().allow("").required(),

      success_callback_url: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      contact: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      email: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      data: PaymentModel.CreateOrderUserData(),

      status_code: Joi.number().required(),

      callback_url: Joi.string().allow("").allow(null),

      payment_confirm_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").allow(null),
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
      status: Joi.string().allow("").required(),

      balance: PaymentModel.BalanceDetails(),

      status_message: Joi.string().allow("").required(),

      merchant_customer_ref_id: Joi.string().allow("").required(),
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

  static MarketplaceInfo() {
    return Joi.object({
      date_of_joining: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      membership_id: Joi.string().allow("").required(),
    });
  }

  static KYCAddress() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      addressline1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      dob: Joi.string().allow("").allow(null).required(),

      pan: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      passport: Joi.string().allow("").allow(null),

      email_verified: Joi.boolean().required(),

      email: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      identification_number: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      pan: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      business_type: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      gstin: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      marketplace_info: PaymentModel.MarketplaceInfo(),

      mcc: Joi.string().allow("").allow(null),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      device: PaymentModel.DeviceDetails(),

      aggregator: Joi.string().allow("").required(),

      business_info: PaymentModel.BusinessDetails(),

      source: Joi.string().allow("").required(),
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
      data: PaymentModel.OnboardSummary().required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
