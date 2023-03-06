const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      secret: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      api: Joi.string().allow("").allow(null),

      pin: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      verify_api: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      config_type: Joi.string().allow("").required(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      simpl: PaymentModel.AggregatorConfigDetail(),
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

      name_on_card: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),

      nickname: Joi.string().allow(""),
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

      api: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      cards: PaymentModel.CardPaymentGateway().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Card() {
    return Joi.object({
      card_fingerprint: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

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
      transaction_amount_in_paise: Joi.number().required(),

      billing_address: Joi.any(),

      payload: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),

      merchant_params: Joi.any(),

      delivery_address: Joi.any(),

      order_items: Joi.array().items(Joi.any()),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      error: Joi.any().allow(null),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.any().allow(null),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      amount: Joi.number().allow(null).required(),

      verified: Joi.boolean().allow(null),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow("").allow(null),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),

      delivery_address_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      amount: Joi.number().allow(null).required(),

      contact: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      amount: Joi.number().allow(null),

      success: Joi.boolean().required(),

      merchant_order_id: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      currency: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      customer_id: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      amount: Joi.number().allow(null).required(),

      contact: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").required(),
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
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      fynd_vpa: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_token: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      retry_count: Joi.number().allow(null),

      display_priority: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      name: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      cod_limit: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      remaining_limit: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_brand_image: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_priority: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      save_card: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      payment_flow_data: Joi.string().allow("").allow(null),

      payment_flow: Joi.string().allow("").allow(null),

      api_link: Joi.string().allow("").allow(null),

      data: Joi.any().allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      upi_razorpay: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),
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
      success: Joi.boolean().required(),

      data: PaymentModel.RupifiBannerData().required(),
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
      success: Joi.boolean().required(),

      data: PaymentModel.EpaylaterBannerData().required(),
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

      status: Joi.string().allow("").required(),

      upi_vpa: Joi.string().allow("").required(),

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

      logo_large: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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

      account_holder: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      subtitle: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      id: Joi.number().required(),

      email: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
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
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
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
      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      wallet: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      delights: Joi.boolean().required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      shipment_id: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: Joi.any(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),
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
      is_beneficiary_set: Joi.boolean().required(),

      success: Joi.boolean(),
    });
  }

  static GetPaymentLinkResponse() {
    return Joi.object({
      payment_link_current_status: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      polling_timeout: Joi.number().allow(null),

      external_order_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      payment_link_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      merchant_name: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      cancelled: Joi.boolean().allow(null),

      amount: Joi.number().allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      msg: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      invalid_id: Joi.boolean().allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      error: PaymentModel.ErrorDescription(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      amount: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      amount: Joi.number().required(),

      mobile_number: Joi.string().allow("").required(),

      external_order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      polling_timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      payment_link_url: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

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
      polling_timeout: Joi.number().allow(null),

      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static CancelPaymentLinkResponse() {
    return Joi.object({
      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PollingPaymentLinkResponse() {
    return Joi.object({
      amount: Joi.number().allow(null),

      success: Joi.boolean().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),

      order_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

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

      meta: PaymentModel.PaymentMethodsMeta().required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      failure_callback_url: Joi.string().allow("").required(),

      success_callback_url: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      amount: Joi.number().allow(null),

      contact: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      callback_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      data: PaymentModel.CreateOrderUserData(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").allow(null),

      payment_confirm_url: Joi.string().allow("").allow(null),
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
      balance: PaymentModel.BalanceDetails(),

      status: Joi.string().allow("").required(),

      status_message: Joi.string().allow("").required(),

      merchant_customer_ref_id: Joi.string().allow("").required(),
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
      addressline1: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      addressline2: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      address: PaymentModel.KYCAddress(),

      entity_type: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      pan: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      mobile_verified: Joi.boolean().required(),

      driving_license: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      middle_name: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      email_verified: Joi.boolean().required(),

      email: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      passport: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      membership_id: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      identifier_type: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      mcc: Joi.string().allow("").allow(null),

      business_info: PaymentModel.BusinessDetails(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      device: PaymentModel.DeviceDetails(),

      source: Joi.string().allow("").required(),
    });
  }

  static OnboardSummary() {
    return Joi.object({
      status: Joi.boolean().required(),

      session: Joi.any().required(),

      redirect_url: Joi.string().allow("").required(),
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
