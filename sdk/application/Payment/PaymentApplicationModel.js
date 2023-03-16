const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      merchant_id: Joi.string().allow("").allow(null),

      pin: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      verify_api: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      sdk: Joi.boolean().allow(null),

      merchant_key: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      juspay: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      simpl: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      rupifi: PaymentModel.AggregatorConfigDetail(),
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
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      exp_month: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_isin: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

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
      merchant_params: Joi.any(),

      billing_address: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),

      order_items: Joi.array().items(Joi.any()),

      aggregator: Joi.string().allow("").required(),

      delivery_address: Joi.any(),

      payload: Joi.string().allow("").allow(null),

      phone_number: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: Joi.any().allow(null),

      data: Joi.any().allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      verified: Joi.boolean().allow(null),

      order_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      cart_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null).required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      bqr_image: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      customer_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      currency: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      method: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      customer_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),
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
      juspay: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
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
      logos: PaymentModel.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      retry_count: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      display_priority: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      intent_flow: Joi.boolean().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      expired: Joi.boolean().allow(null),

      card_number: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      save_card: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_priority: Joi.number().required(),
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
      status: Joi.string().allow(""),

      display: Joi.boolean().required(),

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
      order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      request_type: Joi.string().allow("").required(),
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

      customer_name: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
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

      logo_small: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      logo_large: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      is_active: Joi.boolean().required(),

      delights_user_name: Joi.string().allow("").allow(null),

      address: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      id: Joi.number().required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),
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
      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
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

      description: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean().required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      branch_name: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      details: PaymentModel.BeneficiaryModeDetails().required(),

      delights: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      otp: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.any(),

      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
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
      success: Joi.boolean(),

      request_id: Joi.string().allow("").required(),

      is_verified_flag: Joi.string().allow("").required(),
    });
  }

  static SetDefaultBeneficiaryRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),
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
      payment_link_url: Joi.string().allow("").allow(null),

      payment_link_current_status: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      status_code: Joi.number().required(),

      external_order_id: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      amount: Joi.number().allow(null),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      expired: Joi.boolean().allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      invalid_id: Joi.boolean().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      cancelled: Joi.boolean().allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      msg: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),
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
      checkout_mode: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      amount: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      mobile_number: Joi.string().allow("").required(),

      external_order_id: Joi.string().allow("").required(),

      description: Joi.string().allow("").allow(null),

      amount: Joi.number().required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      payment_link_url: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),

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
      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      polling_timeout: Joi.number().allow(null),

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
      http_status: Joi.number().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),
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
      name: Joi.string().allow("").required(),

      meta: PaymentModel.PaymentMethodsMeta().required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      meta: Joi.any().allow(null),

      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      currency: Joi.string().allow("").required(),

      success_callback_url: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      contact: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      data: PaymentModel.CreateOrderUserData(),

      status_code: Joi.number().required(),

      payment_confirm_url: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static BalanceDetails() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      value: Joi.number().required(),

      formatted_value: Joi.string().allow("").required(),
    });
  }

  static CreditSummary() {
    return Joi.object({
      status_message: Joi.string().allow("").required(),

      balance: PaymentModel.BalanceDetails(),

      status: Joi.string().allow("").required(),

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

  static MarketplaceInfo() {
    return Joi.object({
      membership_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),
    });
  }

  static KYCAddress() {
    return Joi.object({
      ownership_type: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),

      land_mark: Joi.string().allow("").allow(null),

      addressline1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      fda: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      name: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      entity_type: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      dob: Joi.string().allow("").allow(null).required(),

      phone: Joi.string().allow("").required(),

      email: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      passport: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      mothers_name: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      driving_license: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      email_verified: Joi.boolean().required(),

      last_name: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      identifier_type: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      marketplace_info: PaymentModel.MarketplaceInfo(),

      business_info: PaymentModel.BusinessDetails(),

      mcc: Joi.string().allow("").allow(null),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      aggregator: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      device: PaymentModel.DeviceDetails(),
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
      success: Joi.boolean().required(),

      data: PaymentModel.OnboardSummary().required(),
    });
  }
}
module.exports = PaymentModel;
