const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      merchant_id: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      api: Joi.string().allow("").allow(null),

      config_type: Joi.string().allow("").required(),

      verify_api: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),

      pin: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      simpl: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      razorpay: PaymentModel.AggregatorConfigDetail(),
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

      card_id: Joi.string().allow("").allow(null).required(),

      name_on_card: Joi.string().allow(""),

      nickname: Joi.string().allow(""),
    });
  }

  static AttachCardsResponse() {
    return Joi.object({
      data: Joi.any().required(),

      message: Joi.string().allow(""),

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
      cards: PaymentModel.CardPaymentGateway().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Card() {
    return Joi.object({
      card_id: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_isin: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),
    });
  }

  static ListCardsResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.Card()),

      message: Joi.string().allow("").required(),

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

      transaction_amount_in_paise: Joi.number().required(),

      order_items: Joi.array().items(Joi.any()),

      delivery_address: Joi.any(),

      billing_address: Joi.any(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.any().allow(null),

      error: Joi.any().allow(null),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      verified: Joi.boolean().allow(null),

      transaction_token: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      delivery_address_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      merchant_order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      method: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      amount: Joi.number().allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      bqr_image: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      device_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      status: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),
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
      simpl: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),
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

      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),
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
      intent_flow: Joi.boolean().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      exp_year: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      retry_count: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      logo_url: PaymentModel.PaymentModeLogo(),

      remaining_limit: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_id: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      exp_month: Joi.number().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      display_priority: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      save_card: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      add_card_enabled: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),

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
      message: Joi.string().allow(""),

      status: Joi.string().allow(""),

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
      data: PaymentModel.ValidateUPI().required(),

      success: Joi.boolean().required(),
    });
  }

  static TransferItemsDetails() {
    return Joi.object({
      id: Joi.number().required(),

      display_name: Joi.string().allow(""),

      logo_small: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),

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
      is_active: Joi.boolean().required(),

      ifsc_code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      account_no: Joi.string().allow("").required(),

      id: Joi.number().required(),

      transfer_mode: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      beneficiary_id: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
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
      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
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
      is_verified_flag: Joi.boolean().required(),

      description: Joi.string().allow("").required(),

      success: Joi.string().allow("").required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      wallet: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      otp: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      delights: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),

      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

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
      order_id: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),
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

      polling_timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      external_order_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      payment_link_current_status: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      expired: Joi.boolean().allow(null),

      cancelled: Joi.boolean().allow(null),

      invalid_id: Joi.boolean().allow(null),

      msg: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: PaymentModel.ErrorDescription(),

      status_code: Joi.number().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      checkout_mode: Joi.string().allow("").required(),

      amount: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      external_order_id: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mobile_number: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      polling_timeout: Joi.number().allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),
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

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      polling_timeout: Joi.number().allow(null),
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
      message: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().allow(null),

      success: Joi.boolean().allow(null),

      amount: Joi.number().allow(null),

      status: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
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
      currency: Joi.string().allow("").required(),

      success_callback_url: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      failure_callback_url: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      contact: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      payment_confirm_url: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      data: PaymentModel.CreateOrderUserData(),

      callback_url: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
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
      signup_url: Joi.string().allow("").required(),

      status: Joi.boolean().required(),

      is_registered: Joi.boolean().required(),
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

  static KYCAddress() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),

      addressline2: Joi.string().allow("").allow(null),

      addressline1: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      passport: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      voter_id: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      dob: Joi.string().allow("").allow(null).required(),

      phone: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      email_verified: Joi.boolean().required(),

      driving_license: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      fssai: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      shop_and_establishment: Joi.any(),

      business_ownership_type: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      identification_number: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      mcc: Joi.string().allow("").allow(null),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      source: Joi.string().allow("").required(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      business_info: PaymentModel.BusinessDetails(),

      aggregator: Joi.string().allow("").required(),

      device: PaymentModel.DeviceDetails(),
    });
  }

  static OnboardSummary() {
    return Joi.object({
      redirect_url: Joi.string().allow("").required(),

      session: Joi.any().required(),

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
