const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      verify_api: Joi.string().allow("").allow(null),

      pin: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      merchant_id: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      api: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      env: Joi.string().allow("").required(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      simpl: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

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
      card_id: Joi.string().allow("").allow(null).required(),

      nickname: Joi.string().allow(""),

      name_on_card: Joi.string().allow(""),

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
      customer_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      api: Joi.string().allow("").allow(null),
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
      card_reference: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      exp_year: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_issuer: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      exp_month: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

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
      merchant_params: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),

      phone_number: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      payload: Joi.string().allow("").allow(null),

      order_items: Joi.array().items(Joi.any()),

      delivery_address: Joi.any(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      transaction_token: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      verified: Joi.boolean().allow(null),

      amount: Joi.number().allow(null).required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),

      delivery_address_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      status: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      customer_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      vpa: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null),

      aggregator_order_id: Joi.string().allow(""),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      bqr_image: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      customer_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      status: Joi.string().allow("").required(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      payment_flow: Joi.string().allow("").allow(null),

      data: Joi.any().allow(null),

      api_link: Joi.string().allow("").allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      fynd: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),
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

      display_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),
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
      card_issuer: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_name: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      name: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      retry_count: Joi.number().allow(null),

      exp_year: Joi.number().allow(null),

      display_priority: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      cod_limit: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      nickname: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      save_card: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      name: Joi.string().allow("").required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),
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
      order_id: Joi.string().allow("").required(),

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

      customer_name: Joi.string().allow("").required(),

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

  static TransferItemsDetails() {
    return Joi.object({
      id: Joi.number().required(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo_small: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),
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
      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      beneficiary_id: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

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
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      branch_name: Joi.string().allow("").required(),
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

      hash_key: Joi.string().allow("").required(),

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
      description: Joi.string().allow("").required(),

      success: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean().required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      vpa: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      delights: Joi.boolean().required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

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
      is_beneficiary_set: Joi.boolean().required(),

      success: Joi.boolean(),
    });
  }

  static GetPaymentLinkResponse() {
    return Joi.object({
      payment_link_url: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      external_order_id: Joi.string().allow("").allow(null),

      payment_link_current_status: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      amount: Joi.number().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      msg: Joi.string().allow("").allow(null),

      cancelled: Joi.boolean().allow(null),

      invalid_id: Joi.boolean().allow(null),
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
      checkout_mode: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      amount: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      external_order_id: Joi.string().allow("").required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      description: Joi.string().allow("").allow(null),

      amount: Joi.number().required(),

      mobile_number: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      payment_link_url: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      status_code: Joi.number().required(),

      payment_link_id: Joi.string().allow("").allow(null),

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

      polling_timeout: Joi.number().allow(null),

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
      order_id: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      status_code: Joi.number().allow(null),

      amount: Joi.number().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      payment_link_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").allow(null),
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
      meta: PaymentModel.PaymentMethodsMeta().required(),

      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      success_callback_url: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      currency: Joi.string().allow("").required(),

      payment_link_id: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      email: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      customer_id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      data: PaymentModel.CreateOrderUserData(),

      success: Joi.boolean().required(),

      callback_url: Joi.string().allow("").allow(null),
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
      balance: PaymentModel.BalanceDetails(),

      status_message: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

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
      signup_url: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
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

      is_registered: Joi.boolean().required(),

      status: Joi.boolean().required(),
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
      city: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      addressline2: Joi.string().allow("").allow(null),

      addressline1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      email: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      middle_name: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),

      passport: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      voter_id: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      gender: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      email_verified: Joi.boolean().required(),

      mobile_verified: Joi.boolean().required(),

      address_as_per_id: PaymentModel.KYCAddress().required(),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      device_make: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      fssai: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      shop_and_establishment: Joi.any(),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),

      membership_id: Joi.string().allow("").required(),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      mcc: Joi.string().allow("").allow(null),

      device: PaymentModel.DeviceDetails(),

      business_info: PaymentModel.BusinessDetails(),

      source: Joi.string().allow("").required(),

      marketplace_info: PaymentModel.MarketplaceInfo(),
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
