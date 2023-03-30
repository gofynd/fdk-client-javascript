const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      pin: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      verify_api: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      key: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      api: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      payumoney: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      simpl: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

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
      nickname: Joi.string().allow(""),

      refresh: Joi.boolean().allow(null),

      card_id: Joi.string().allow("").allow(null).required(),

      name_on_card: Joi.string().allow(""),
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
      aggregator_name: Joi.string().allow("").required(),

      card_brand_image: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),
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
      merchant_params: Joi.any().required(),

      transaction_amount_in_paise: Joi.number().required(),

      payload: Joi.string().allow("").allow(null).required(),

      phone_number: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),
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
      order_id: Joi.string().allow("").required(),

      transaction_token: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      verified: Joi.boolean().allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      delivery_address_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      customer_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      virtual_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      vpa: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      upi_poll_url: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      customer_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      currency: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      customer_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      data: Joi.any().allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),

      api_link: Joi.string().allow("").allow(null),

      payment_flow: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      payubiz: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      ajiodhan: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),
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

      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),
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
      remaining_limit: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      cod_limit: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      exp_year: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      logo_url: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      add_card_enabled: Joi.boolean().allow(null),

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

      display: Joi.boolean().required(),

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
      beneficiary_id: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      subtitle: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow(""),

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
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

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
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static AddBeneficiaryViaOtpVerificationRequest() {
    return Joi.object({
      hash_key: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),

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
      description: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean().required(),

      success: Joi.string().allow("").required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      wallet: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      branch_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      request_id: Joi.string().allow(""),

      otp: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      delights: Joi.boolean().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),

      is_verified_flag: Joi.boolean(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

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

  static BalanceDetails() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),

      formatted_value: Joi.string().allow("").allow(null),

      value: Joi.number().allow(null),
    });
  }

  static CreditSummary() {
    return Joi.object({
      status: Joi.string().allow("").allow(null),

      buyer_status: Joi.string().allow("").allow(null),

      status_message: Joi.string().allow("").allow(null),

      merchant_customer_ref_id: Joi.string().allow("").allow(null),

      credit_line_id: Joi.string().allow("").allow(null),

      balance: PaymentModel.BalanceDetails(),

      amount_available: PaymentModel.BalanceDetails(),
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

  static KYCAddress() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      addressline1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      ownership_type: Joi.string().allow("").allow(null),

      addressline2: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      address: PaymentModel.KYCAddress(),

      entity_type: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      identification_number: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      voter_id: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      dob: Joi.string().allow("").allow(null).required(),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      pan: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      first_name: Joi.string().allow("").required(),

      email_verified: Joi.boolean().required(),

      gender: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      passport: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      membership_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      business_info: PaymentModel.BusinessDetails(),

      device: PaymentModel.DeviceDetails(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      aggregator: Joi.string().allow("").required(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      mcc: Joi.string().allow("").allow(null),
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

  static OutstandingOrderDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").allow(null),
    });
  }

  static PaidOrderDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = PaymentModel;
