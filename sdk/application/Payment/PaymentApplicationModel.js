const Joi = require("joi");

class PaymentModel {
  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      cards: PaymentModel.CardPaymentGateway().required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: PaymentModel.BankDetailsForOTP().required(),
      order_id: Joi.string().allow("").required(),
    });
  }
  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      delights: Joi.boolean().required(),
      details: PaymentModel.BeneficiaryModeDetails().required(),
      order_id: Joi.string().allow("").required(),
      otp: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      shipment_id: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
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
      message: Joi.string().allow("").required(),
      success: Joi.boolean(),
    });
  }
  static AggregatorConfigDetail() {
    return Joi.object({
      api: Joi.string().allow("").allow(null),
      config_type: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
      merchant_id: Joi.string().allow("").allow(null),
      merchant_key: Joi.string().allow("").allow(null),
      pin: Joi.string().allow("").allow(null),
      sdk: Joi.boolean().allow(null),
      secret: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").allow(null),
      verify_api: Joi.string().allow("").allow(null),
    });
  }
  static AggregatorRoute() {
    return Joi.object({
      api_link: Joi.string().allow("").allow(null),
      data: Joi.any().allow(null),
      payment_flow: Joi.string().allow("").allow(null),
      payment_flow_data: Joi.string().allow("").allow(null),
    });
  }
  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      ccavenue: PaymentModel.AggregatorConfigDetail(),
      env: Joi.string().allow("").required(),
      juspay: PaymentModel.AggregatorConfigDetail(),
      mswipe: PaymentModel.AggregatorConfigDetail(),
      payumoney: PaymentModel.AggregatorConfigDetail(),
      razorpay: PaymentModel.AggregatorConfigDetail(),
      rupifi: PaymentModel.AggregatorConfigDetail(),
      simpl: PaymentModel.AggregatorConfigDetail(),
      stripe: PaymentModel.AggregatorConfigDetail(),
      success: Joi.boolean().required(),
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
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static BalanceDetails() {
    return Joi.object({
      currency: Joi.string().allow("").required(),
      formatted_value: Joi.string().allow("").required(),
      value: Joi.number().required(),
    });
  }
  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      ifsc_code: Joi.string().allow("").required(),
    });
  }
  static BeneficiaryModeDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      address: Joi.string().allow(""),
      bank_name: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      comment: Joi.string().allow(""),
      email: Joi.string().allow("").required(),
      ifsc_code: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
      vpa: Joi.string().allow("").allow(null),
      wallet: Joi.string().allow("").allow(null),
    });
  }
  static BusinessDetails() {
    return Joi.object({
      address: PaymentModel.KYCAddress(),
      business_ownership_type: Joi.string().allow("").allow(null),
      business_type: Joi.string().allow("").allow(null),
      entity_type: Joi.string().allow("").allow(null),
      fda: Joi.string().allow("").allow(null),
      fssai: Joi.string().allow("").allow(null),
      gstin: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      pan: Joi.string().allow("").allow(null),
      shop_and_establishment: Joi.any(),
      vintage: Joi.string().allow("").allow(null),
    });
  }
  static CancelOrResendPaymentLinkRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }
  static CancelPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static Card() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),
      card_brand: Joi.string().allow("").allow(null),
      card_brand_image: Joi.string().allow("").allow(null),
      card_fingerprint: Joi.string().allow("").allow(null),
      card_id: Joi.string().allow("").allow(null),
      card_isin: Joi.string().allow("").allow(null),
      card_issuer: Joi.string().allow("").allow(null),
      card_name: Joi.string().allow("").allow(null),
      card_number: Joi.string().allow("").allow(null),
      card_reference: Joi.string().allow("").allow(null),
      card_token: Joi.string().allow("").allow(null),
      card_type: Joi.string().allow("").allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      exp_month: Joi.number().allow(null),
      exp_year: Joi.number().allow(null),
      expired: Joi.boolean().allow(null),
      nickname: Joi.string().allow("").allow(null),
    });
  }
  static CardPaymentGateway() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      api: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
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
      aggregator: Joi.string().allow("").required(),
      cart_id: Joi.string().allow("").allow(null),
      delivery_address_id: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static CheckCreditResponse() {
    return Joi.object({
      data: PaymentModel.CreditDetail().required(),
      success: Joi.boolean().required(),
    });
  }
  static CreateOrderUserData() {
    return Joi.object({
      aggregator: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      callback_url: Joi.string().allow("").allow(null),
      contact: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
      method: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
    });
  }
  static CreateOrderUserPaymentMethods() {
    return Joi.object({
      meta: PaymentModel.PaymentMethodsMeta().required(),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }
  static CreateOrderUserRequest() {
    return Joi.object({
      currency: Joi.string().allow("").required(),
      failure_callback_url: Joi.string().allow("").required(),
      meta: Joi.any().allow(null),
      payment_link_id: Joi.string().allow("").required(),
      payment_methods: PaymentModel.CreateOrderUserPaymentMethods().required(),
      success_callback_url: Joi.string().allow("").required(),
    });
  }
  static CreateOrderUserResponse() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),
      data: PaymentModel.CreateOrderUserData(),
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").allow(null),
      payment_confirm_url: Joi.string().allow("").allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static CreatePaymentLinkMeta() {
    return Joi.object({
      amount: Joi.string().allow("").required(),
      assign_card_id: Joi.string().allow("").allow(null),
      cart_id: Joi.string().allow("").required(),
      checkout_mode: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
    });
  }
  static CreatePaymentLinkRequest() {
    return Joi.object({
      amount: Joi.number().required(),
      description: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
      external_order_id: Joi.string().allow("").required(),
      meta: PaymentModel.CreatePaymentLinkMeta().required(),
      mobile_number: Joi.string().allow("").required(),
    });
  }
  static CreatePaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      payment_link_id: Joi.string().allow("").allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static CreditDetail() {
    return Joi.object({
      is_registered: Joi.boolean().required(),
      signup_url: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
    });
  }
  static CreditSummary() {
    return Joi.object({
      balance: PaymentModel.BalanceDetails(),
      merchant_customer_ref_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      status_message: Joi.string().allow("").required(),
    });
  }
  static CustomerCreditSummaryResponse() {
    return Joi.object({
      data: PaymentModel.CreditSummary(),
      success: Joi.boolean().required(),
    });
  }
  static CustomerOnboardingRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      business_info: PaymentModel.BusinessDetails(),
      device: PaymentModel.DeviceDetails(),
      marketplace_info: PaymentModel.MarketplaceInfo(),
      mcc: Joi.string().allow("").allow(null),
      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),
      source: Joi.string().allow("").required(),
    });
  }
  static CustomerOnboardingResponse() {
    return Joi.object({
      data: PaymentModel.OnboardSummary().required(),
      success: Joi.boolean().required(),
    });
  }
  static DeleteCardsResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      success: Joi.boolean().required(),
    });
  }
  static DeletehCardRequest() {
    return Joi.object({
      card_id: Joi.string().allow("").allow(null).required(),
    });
  }
  static DeviceDetails() {
    return Joi.object({
      device_make: Joi.string().allow("").allow(null),
      device_model: Joi.string().allow("").allow(null),
      device_type: Joi.string().allow("").allow(null),
      identification_number: Joi.string().allow("").allow(null),
      identifier_type: Joi.string().allow("").allow(null),
      os: Joi.string().allow("").allow(null),
      os_version: Joi.string().allow("").allow(null),
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
      data: PaymentModel.EpaylaterBannerData().required(),
      success: Joi.boolean().required(),
    });
  }
  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
    });
  }
  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static ErrorDescription() {
    return Joi.object({
      amount: Joi.number().allow(null),
      cancelled: Joi.boolean().allow(null),
      expired: Joi.boolean().allow(null),
      invalid_id: Joi.boolean().allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
      msg: Joi.string().allow("").allow(null),
      payment_transaction_id: Joi.string().allow("").allow(null),
    });
  }
  static ErrorResponse() {
    return Joi.object({
      error: PaymentModel.ErrorDescription(),
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static GetPaymentLinkResponse() {
    return Joi.object({
      amount: Joi.number().allow(null),
      external_order_id: Joi.string().allow("").allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").required(),
      payment_link_current_status: Joi.string().allow("").allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentModel.ErrorCodeAndDescription().required(),
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
  static KYCAddress() {
    return Joi.object({
      addressline1: Joi.string().allow("").required(),
      addressline2: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").required(),
      land_mark: Joi.string().allow("").allow(null),
      ownership_type: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }
  static LinkStatus() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
    });
  }
  static ListCardsResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.Card()),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static MarketplaceInfo() {
    return Joi.object({
      date_of_joining: Joi.string().allow("").allow(null),
      membership_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }
  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static OnboardSummary() {
    return Joi.object({
      redirect_url: Joi.string().allow("").required(),
      session: Joi.any().required(),
      status: Joi.boolean().required(),
    });
  }
  static OrderBeneficiaryDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      address: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").required(),
      branch_name: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      created_on: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      id: Joi.number().required(),
      ifsc_code: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      mobile: Joi.string().allow(""),
      modified_on: Joi.string().allow("").required(),
      subtitle: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
    });
  }
  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),
      show_beneficiary_details: Joi.boolean(),
    });
  }
  static PaymentFlow() {
    return Joi.object({
      bqr_razorpay: PaymentModel.AggregatorRoute(),
      ccavenue: PaymentModel.AggregatorRoute(),
      epaylater: PaymentModel.AggregatorRoute(),
      fynd: PaymentModel.AggregatorRoute(),
      jiopay: PaymentModel.AggregatorRoute(),
      juspay: PaymentModel.AggregatorRoute(),
      mswipe: PaymentModel.AggregatorRoute(),
      payubiz: PaymentModel.AggregatorRoute(),
      razorpay: PaymentModel.AggregatorRoute(),
      rupifi: PaymentModel.AggregatorRoute(),
      simpl: PaymentModel.AggregatorRoute(),
      stripe: PaymentModel.AggregatorRoute(),
      upi_razorpay: PaymentModel.AggregatorRoute(),
    });
  }
  static PaymentInitializationRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      amount: Joi.number().allow(null).required(),
      contact: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      razorpay_payment_id: Joi.string().allow("").allow(null),
      timeout: Joi.number().allow(null),
      vpa: Joi.string().allow("").allow(null),
    });
  }
  static PaymentInitializationResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      aggregator_order_id: Joi.string().allow(""),
      amount: Joi.number().allow(null),
      bqr_image: Joi.string().allow("").allow(null),
      currency: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      polling_url: Joi.string().allow("").required(),
      razorpay_payment_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow(""),
      success: Joi.boolean().required(),
      timeout: Joi.number().allow(null),
      upi_poll_url: Joi.string().allow("").allow(null),
      virtual_id: Joi.string().allow("").allow(null),
      vpa: Joi.string().allow("").allow(null),
    });
  }
  static PaymentMethodsMeta() {
    return Joi.object({
      merchant_code: Joi.string().allow("").required(),
      payment_gateway: Joi.string().allow("").required(),
      payment_identifier: Joi.string().allow("").required(),
    });
  }
  static PaymentModeList() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),
      card_brand: Joi.string().allow("").allow(null),
      card_brand_image: Joi.string().allow("").allow(null),
      card_fingerprint: Joi.string().allow("").allow(null),
      card_id: Joi.string().allow("").allow(null),
      card_isin: Joi.string().allow("").allow(null),
      card_issuer: Joi.string().allow("").allow(null),
      card_name: Joi.string().allow("").allow(null),
      card_number: Joi.string().allow("").allow(null),
      card_reference: Joi.string().allow("").allow(null),
      card_token: Joi.string().allow("").allow(null),
      card_type: Joi.string().allow("").allow(null),
      cod_limit: Joi.number().allow(null),
      cod_limit_per_order: Joi.number().allow(null),
      code: Joi.string().allow("").allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").allow(null),
      display_priority: Joi.number().allow(null),
      exp_month: Joi.number().allow(null),
      exp_year: Joi.number().allow(null),
      expired: Joi.boolean().allow(null),
      fynd_vpa: Joi.string().allow("").allow(null),
      intent_app: Joi.array().items(PaymentModel.IntentApp()),
      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),
      intent_app_error_list: Joi.array().items(Joi.string().allow("")),
      intent_flow: Joi.boolean().allow(null),
      logo_url: PaymentModel.PaymentModeLogo(),
      merchant_code: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      nickname: Joi.string().allow("").allow(null),
      remaining_limit: Joi.number().allow(null),
      retry_count: Joi.number().allow(null),
      timeout: Joi.number().allow(null),
    });
  }
  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),
      small: Joi.string().allow("").required(),
    });
  }
  static PaymentModeRouteResponse() {
    return Joi.object({
      payment_options: PaymentModel.PaymentOptionAndFlow().required(),
      success: Joi.boolean().required(),
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
  static PaymentStatusUpdateRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      amount: Joi.number().allow(null).required(),
      contact: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      vpa: Joi.string().allow("").required(),
    });
  }
  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),
      redirect_url: Joi.string().allow("").allow(null),
      retry: Joi.boolean().required(),
      status: Joi.string().allow("").required(),
      success: Joi.boolean().allow(null),
    });
  }
  static PollingPaymentLinkResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      http_status: Joi.number().allow(null),
      message: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
      payment_link_id: Joi.string().allow("").allow(null),
      redirect_url: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      status_code: Joi.number().allow(null),
      success: Joi.boolean().allow(null),
    });
  }
  static RedirectToAggregatorResponse() {
    return Joi.object({
      data: PaymentModel.RedirectURL().required(),
      success: Joi.boolean().required(),
    });
  }
  static RedirectURL() {
    return Joi.object({
      signup_url: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
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
  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      request_type: Joi.string().allow("").required(),
    });
  }
  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      data: PaymentModel.LinkStatus().required(),
      success: Joi.boolean().required(),
    });
  }
  static ResendPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      polling_timeout: Joi.number().allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),
      aggregator_name: Joi.string().allow("").allow(null),
      anonymous_enable: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").required(),
      display_priority: Joi.number().required(),
      is_pay_by_card_pl: Joi.boolean().allow(null),
      list: Joi.array().items(PaymentModel.PaymentModeList()),
      name: Joi.string().allow("").required(),
      save_card: Joi.boolean().allow(null),
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
  static TransferItemsDetails() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.number().required(),
      logo_large: Joi.string().allow("").required(),
      logo_small: Joi.string().allow("").required(),
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
      enable: Joi.boolean().required(),
      transfer_mode: Joi.string().allow("").required(),
    });
  }
  static UpdateRefundTransferModeResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static UserPersonalInfoInDetails() {
    return Joi.object({
      address_as_per_id: PaymentModel.KYCAddress().required(),
      dob: Joi.string().allow("").allow(null).required(),
      driving_license: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      email_verified: Joi.boolean().required(),
      fathers_name: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow("").required(),
      gender: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      middle_name: Joi.string().allow("").allow(null),
      mobile_verified: Joi.boolean().required(),
      mothers_name: Joi.string().allow("").allow(null),
      pan: Joi.string().allow("").allow(null),
      passport: Joi.string().allow("").allow(null),
      phone: Joi.string().allow("").required(),
      voter_id: Joi.string().allow("").allow(null),
    });
  }
  static ValidateCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      billing_address: Joi.any(),
      delivery_address: Joi.any(),
      merchant_params: Joi.any(),
      order_items: Joi.array().items(Joi.any()),
      payload: Joi.string().allow("").allow(null),
      phone_number: Joi.string().allow("").required(),
      transaction_amount_in_paise: Joi.number().required(),
    });
  }
  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.any().required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static ValidateUPI() {
    return Joi.object({
      customer_name: Joi.string().allow("").required(),
      is_valid: Joi.boolean().required(),
      status: Joi.string().allow("").required(),
      upi_vpa: Joi.string().allow("").required(),
    });
  }
  static ValidateVPARequest() {
    return Joi.object({
      upi_vpa: Joi.string().allow("").required(),
    });
  }
  static ValidateVPAResponse() {
    return Joi.object({
      data: PaymentModel.ValidateUPI().required(),
      success: Joi.boolean().required(),
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
      is_verified_flag: Joi.string().allow("").required(),
      request_id: Joi.string().allow("").required(),
      success: Joi.boolean(),
    });
  }
  static WrongOtpError() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      is_verified_flag: Joi.boolean().required(),
      success: Joi.string().allow("").required(),
    });
  }
}
module.exports = PaymentModel;
