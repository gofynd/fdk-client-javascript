const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      merchant_key: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      api: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      pin: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      verify_api: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      simpl: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),
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

      name_on_card: Joi.string().allow(""),

      refresh: Joi.boolean().allow(null),

      card_id: Joi.string().allow("").allow(null).required(),
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
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      cards: PaymentModel.CardPaymentGateway().required(),
    });
  }

  static Card() {
    return Joi.object({
      exp_year: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      card_name: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_type: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_number: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),
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
      order_items: Joi.array().items(Joi.any()),

      aggregator: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),

      merchant_params: Joi.any(),

      payload: Joi.string().allow("").allow(null),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      error: Joi.any().allow(null),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      data: Joi.any().allow(null),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow("").allow(null),

      verified: Joi.boolean().allow(null),

      amount: Joi.number().allow(null).required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      cart_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      method: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      virtual_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      vpa: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      upi_poll_url: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      polling_url: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      device_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),
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
      simpl: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),
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
      logos: PaymentModel.PaymentModeLogo(),

      display_name: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),

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
      card_name: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      retry_count: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_number: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      display_priority: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_type: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      exp_month: Joi.number().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      nickname: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_priority: Joi.number().required(),

      add_card_enabled: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      anonymous_enable: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

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
      status: Joi.string().allow(""),

      message: Joi.string().allow(""),

      display: Joi.boolean().required(),
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

      device_id: Joi.string().allow("").allow(null),
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
      status: Joi.string().allow("").required(),

      is_valid: Joi.boolean().required(),

      upi_vpa: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),
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

      logo_small: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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

      address: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      beneficiary_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      id: Joi.number().required(),

      mobile: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),
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
      wallet: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      vpa: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      details: PaymentModel.BeneficiaryModeDetails().required(),

      delights: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),
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
      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

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
      is_verified_flag: Joi.string().allow("").required(),

      success: Joi.boolean(),

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
      is_beneficiary_set: Joi.boolean().required(),

      success: Joi.boolean(),
    });
  }

  static GetPaymentLinkResponse() {
    return Joi.object({
      payment_link_current_status: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      external_order_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      polling_timeout: Joi.number().allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      merchant_name: Joi.string().allow("").allow(null),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      invalid_id: Joi.boolean().allow(null),

      msg: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      cancelled: Joi.boolean().allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: PaymentModel.ErrorDescription(),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      checkout_mode: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      amount: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      external_order_id: Joi.string().allow("").required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      mobile_number: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      email: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      polling_timeout: Joi.number().allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

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
      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      polling_timeout: Joi.number().allow(null),
    });
  }

  static CancelPaymentLinkResponse() {
    return Joi.object({
      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PollingPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      success: Joi.boolean().allow(null),

      status_code: Joi.number().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),
    });
  }

  static PaymentMethodsMeta() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").required(),

      payment_gateway: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),
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
      currency: Joi.string().allow("").required(),

      success_callback_url: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      payment_link_id: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      method: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      email: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      data: PaymentModel.CreateOrderUserData(),

      order_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      callback_url: Joi.string().allow("").allow(null),
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
      status: Joi.string().allow("").required(),

      status_message: Joi.string().allow("").required(),

      balance: PaymentModel.BalanceDetails(),

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
      status: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),

      is_registered: Joi.boolean().required(),
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

      land_mark: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      vintage: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      business_type: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      fssai: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),
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
      identification_number: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      fathers_name: Joi.string().allow("").allow(null),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      middle_name: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      passport: Joi.string().allow("").allow(null),

      email_verified: Joi.boolean().required(),

      pan: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      driving_license: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      mcc: Joi.string().allow("").allow(null),

      business_info: PaymentModel.BusinessDetails(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      device: PaymentModel.DeviceDetails(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

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
