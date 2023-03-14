const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      secret: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      verify_api: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      config_type: Joi.string().allow("").required(),

      pin: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      rupifi: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      simpl: PaymentModel.AggregatorConfigDetail(),

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
      name_on_card: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),

      refresh: Joi.boolean().allow(null),

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
      card_issuer: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_type: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),
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
      phone_number: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      merchant_params: Joi.any(),

      delivery_address: Joi.any(),

      order_items: Joi.array().items(Joi.any()),

      billing_address: Joi.any(),

      transaction_amount_in_paise: Joi.number().required(),

      payload: Joi.string().allow("").allow(null),
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
      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      transaction_token: Joi.string().allow("").allow(null),

      verified: Joi.boolean().allow(null),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow("").allow(null),

      cart_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      contact: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      amount: Joi.number().allow(null),

      status: Joi.string().allow(""),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      polling_url: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      status: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().allow(null),

      status: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),

      redirect_url: Joi.string().allow("").allow(null),
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

      package_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_issuer: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      intent_flow: Joi.boolean().allow(null),

      retry_count: Joi.number().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      display_priority: Joi.number().allow(null),

      remaining_limit: Joi.number().allow(null),

      cod_limit: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_token: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      name: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      display_priority: Joi.number().required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      anonymous_enable: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      save_card: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      api_link: Joi.string().allow("").allow(null),

      payment_flow: Joi.string().allow("").allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),

      data: Joi.any().allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      rupifi: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),
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

  static TransferItemsDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo_small: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

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
      ifsc_code: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").required(),

      id: Joi.number().required(),

      beneficiary_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
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

      success: Joi.boolean().required(),

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
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

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

      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      delights: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),
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

      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
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
      request_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

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
      payment_link_current_status: Joi.string().allow("").allow(null),

      payment_link_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      amount: Joi.number().allow(null),

      external_order_id: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      polling_timeout: Joi.number().allow(null),

      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),
    });
  }

  static ErrorDescription() {
    return Joi.object({
      expired: Joi.boolean().allow(null),

      amount: Joi.number().allow(null),

      payment_transaction_id: Joi.string().allow("").allow(null),

      msg: Joi.string().allow("").allow(null),

      merchant_name: Joi.string().allow("").allow(null),

      invalid_id: Joi.boolean().allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),

      cancelled: Joi.boolean().allow(null),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),

      error: PaymentModel.ErrorDescription(),
    });
  }

  static CreatePaymentLinkMeta() {
    return Joi.object({
      amount: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow("").required(),

      assign_card_id: Joi.string().allow("").allow(null),

      cart_id: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkRequest() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      amount: Joi.number().required(),

      external_order_id: Joi.string().allow("").required(),

      meta: PaymentModel.CreatePaymentLinkMeta().required(),

      email: Joi.string().allow("").required(),

      mobile_number: Joi.string().allow("").required(),
    });
  }

  static CreatePaymentLinkResponse() {
    return Joi.object({
      payment_link_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

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

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),
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
      payment_link_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      amount: Joi.number().allow(null),

      status: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      http_status: Joi.number().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

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

      meta: PaymentModel.PaymentMethodsMeta().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserRequest() {
    return Joi.object({
      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),

      currency: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      payment_link_id: Joi.string().allow("").required(),

      success_callback_url: Joi.string().allow("").required(),

      failure_callback_url: Joi.string().allow("").required(),
    });
  }

  static CreateOrderUserData() {
    return Joi.object({
      method: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      contact: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").allow(null),
    });
  }

  static CreateOrderUserResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      callback_url: Joi.string().allow("").allow(null),

      data: PaymentModel.CreateOrderUserData(),

      message: Joi.string().allow("").required(),

      status_code: Joi.number().required(),
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
      merchant_customer_ref_id: Joi.string().allow("").required(),

      status_message: Joi.string().allow("").required(),

      balance: PaymentModel.BalanceDetails(),

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
      is_registered: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
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
      addressline2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      addressline1: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      shop_and_establishment: Joi.any(),

      entity_type: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      business_type: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      identification_number: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      date_of_joining: Joi.string().allow("").allow(null),

      membership_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      mobile_verified: Joi.boolean().required(),

      first_name: Joi.string().allow("").required(),

      voter_id: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      email_verified: Joi.boolean().required(),

      passport: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      email: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      business_info: PaymentModel.BusinessDetails(),

      source: Joi.string().allow("").required(),

      device: PaymentModel.DeviceDetails(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      mcc: Joi.string().allow("").allow(null),

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
      success: Joi.boolean().required(),

      data: PaymentModel.OnboardSummary().required(),
    });
  }
}
module.exports = PaymentModel;
