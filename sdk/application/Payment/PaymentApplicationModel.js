const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      verify_api: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      config_type: Joi.string().allow("").required(),

      merchant_id: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      sdk: Joi.boolean().allow(null),

      pin: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      ccavenue: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      simpl: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

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
      card_id: Joi.string().allow("").allow(null).required(),

      name_on_card: Joi.string().allow(""),

      nickname: Joi.string().allow(""),

      refresh: Joi.boolean().allow(null),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
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
      success: Joi.boolean().required(),

      cards: PaymentModel.CardPaymentGateway().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Card() {
    return Joi.object({
      exp_year: Joi.number().allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      expired: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_issuer: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.Card()),

      success: Joi.boolean().required(),

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
      aggregator: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),

      order_items: Joi.array().items(Joi.any()),

      delivery_address: Joi.any(),

      payload: Joi.string().allow("").allow(null),

      merchant_params: Joi.any(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.any().allow(null),

      success: Joi.boolean().required(),

      error: Joi.any().allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow("").allow(null),

      verified: Joi.boolean().allow(null),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      vpa: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      aggregator_order_id: Joi.string().allow(""),

      currency: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null),

      device_id: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      bqr_image: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      vpa: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().allow(null),

      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      data: Joi.any().allow(null),

      api_link: Joi.string().allow("").allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),

      payment_flow: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      upi_razorpay: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),
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

      logos: PaymentModel.PaymentModeLogo(),

      display_name: Joi.string().allow("").allow(null),

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
      expired: Joi.boolean().allow(null),

      nickname: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_brand_image: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_issuer: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      retry_count: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      card_name: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_number: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().required(),

      anonymous_enable: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      save_card: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),
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
      data: PaymentModel.RupifiBannerData().required(),

      success: Joi.boolean().required(),
    });
  }

  static EpaylaterBannerData() {
    return Joi.object({
      status: Joi.string().allow(""),

      message: Joi.string().allow(""),

      display: Joi.boolean().required(),
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

      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),
    });
  }

  static LinkStatus() {
    return Joi.object({
      status: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
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
      upi_vpa: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      is_valid: Joi.boolean().required(),

      customer_name: Joi.string().allow("").required(),
    });
  }

  static ValidateVPAResponse() {
    return Joi.object({
      data: PaymentModel.ValidateUPI().required(),

      success: Joi.boolean().required(),
    });
  }

  static TransferItemsDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      logo_small: Joi.string().allow("").required(),

      id: Joi.number().required(),

      logo_large: Joi.string().allow("").required(),
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
      email: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      delights_user_name: Joi.string().allow("").allow(null),

      transfer_mode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      subtitle: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),
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
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      success: Joi.boolean(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
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
      hash_key: Joi.string().allow("").required(),

      otp: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),
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
      email: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      wallet: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      delights: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      request_id: Joi.string().allow(""),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),

      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
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

      is_verified_flag: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      amount: Joi.number().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      payment_link_current_status: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),

      external_order_id: Joi.string().allow("").allow(null),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      payment_transaction_id: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      amount: Joi.number().allow(null),

      msg: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      cancelled: Joi.boolean().allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      invalid_id: Joi.boolean().allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: PaymentModel.ErrorDescription(),

      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      cart_id: Joi.string().allow("").required(),

      amount: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mobile_number: Joi.string().allow("").required(),

      description: Joi.string().allow("").allow(null),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      external_order_id: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      payment_link_url: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

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
      success: Joi.boolean().allow(null),

      status: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      order_id: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),
    });
  }

  static PaymentMethodsMeta() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),

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
      success_callback_url: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      payment_link_id: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      aggregator: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      order_id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      payment_confirm_url: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      data: PaymentModel.CreateOrderUserData(),

      status_code: Joi.number().required(),
    });
  }

  static BalanceDetails() {
    return Joi.object({
      formatted_value: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      value: Joi.number().required(),
    });
  }

  static CreditSummary() {
    return Joi.object({
      status_message: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      balance: PaymentModel.BalanceDetails(),

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
      is_registered: Joi.boolean().required(),

      status: Joi.boolean().required(),

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
      membership_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      device_type: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),
    });
  }

  static KYCAddress() {
    return Joi.object({
      addressline1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      ownership_type: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      vintage: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      fda: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      fssai: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      email: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      phone: Joi.string().allow("").required(),

      fathers_name: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      gender: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      passport: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      email_verified: Joi.boolean().required(),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      source: Joi.string().allow("").required(),

      device: PaymentModel.DeviceDetails(),

      business_info: PaymentModel.BusinessDetails(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      mcc: Joi.string().allow("").allow(null),
    });
  }

  static OnboardSummary() {
    return Joi.object({
      redirect_url: Joi.string().allow("").required(),

      status: Joi.boolean().required(),

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
