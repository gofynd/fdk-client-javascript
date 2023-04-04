const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      pin: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      secret: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      verify_api: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      payumoney: PaymentModel.AggregatorConfigDetail(),

      simpl: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),
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
      error: PaymentModel.ErrorCodeAndDescription().required(),

      success: Joi.boolean().required(),
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
      data: Joi.any().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static CardPaymentGateway() {
    return Joi.object({
      customer_id: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
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
      card_issuer: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_number: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),
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
      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      merchant_params: Joi.any(),

      payload: Joi.string().allow("").allow(null),

      transaction_amount_in_paise: Joi.number().required(),

      order_items: Joi.array().items(Joi.any()),

      phone_number: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.any().allow(null),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      error: Joi.any().allow(null),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow("").allow(null),

      verified: Joi.boolean().allow(null),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      cart_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      polling_url: Joi.string().allow("").required(),

      bqr_image: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      aggregator_order_id: Joi.string().allow(""),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      amount: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
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
      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      cod_limit_per_order: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_issuer: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      exp_year: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      remaining_limit: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_name: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      name: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      retry_count: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_priority: Joi.number().required(),

      anonymous_enable: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      aggregator_name: Joi.string().allow("").allow(null),

      save_card: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      data: Joi.any().allow(null),

      api_link: Joi.string().allow("").allow(null),

      payment_flow: Joi.string().allow("").allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      payubiz: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),
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
      device_id: Joi.string().allow("").allow(null),

      request_type: Joi.string().allow("").required(),

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

      is_valid: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

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
      logo_small: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      logo_large: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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
      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      id: Joi.number().required(),

      beneficiary_id: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow(""),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
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

      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
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
      is_verified_flag: Joi.boolean().required(),

      success: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      vpa: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      order_id: Joi.string().allow("").required(),

      delights: Joi.boolean().required(),

      otp: Joi.string().allow(""),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),

      data: Joi.any(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

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
      payment_link_current_status: Joi.string().allow("").allow(null),

      external_order_id: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      polling_timeout: Joi.number().allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      amount: Joi.number().allow(null),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      expired: Joi.boolean().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      msg: Joi.string().allow("").allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      invalid_id: Joi.boolean().allow(null),

      cancelled: Joi.boolean().allow(null),

      amount: Joi.number().allow(null),
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
      cart_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      amount: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      external_order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile_number: Joi.string().allow("").required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      description: Joi.string().allow("").allow(null),

      amount: Joi.number().required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      polling_timeout: Joi.number().allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

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
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      polling_timeout: Joi.number().allow(null),

      status_code: Joi.number().required(),
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

      aggregator_name: Joi.string().allow("").allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      success: Joi.boolean().allow(null),

      status_code: Joi.number().allow(null),

      amount: Joi.number().allow(null),
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
      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      meta: PaymentModel.PaymentMethodsMeta().required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      success_callback_url: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),

      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      meta: Joi.any().allow(null),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      aggregator: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").allow(null),

      payment_confirm_url: Joi.string().allow("").allow(null),

      data: PaymentModel.CreateOrderUserData(),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),
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
      balance: PaymentModel.BalanceDetails(),

      status: Joi.string().allow("").required(),

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

  static DeviceDetails() {
    return Joi.object({
      device_type: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      membership_id: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),
    });
  }

  static KYCAddress() {
    return Joi.object({
      ownership_type: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      addressline2: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      addressline1: Joi.string().allow("").required(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      business_ownership_type: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      address: PaymentModel.KYCAddress(),

      name: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      email: Joi.string().allow("").allow(null),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      driving_license: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      mothers_name: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      passport: Joi.string().allow("").allow(null),

      email_verified: Joi.boolean().required(),

      fathers_name: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      dob: Joi.string().allow("").allow(null).required(),

      gender: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      mcc: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      device: PaymentModel.DeviceDetails(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      business_info: PaymentModel.BusinessDetails(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),
    });
  }

  static OnboardSummary() {
    return Joi.object({
      session: Joi.any().required(),

      status: Joi.boolean().required(),

      redirect_url: Joi.string().allow("").required(),
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
