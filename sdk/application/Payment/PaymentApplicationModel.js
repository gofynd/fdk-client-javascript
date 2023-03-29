const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      pin: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      api: Joi.string().allow("").allow(null),

      sdk: Joi.boolean().allow(null),

      merchant_id: Joi.string().allow("").allow(null),

      verify_api: Joi.string().allow("").allow(null),

      config_type: Joi.string().allow("").required(),

      merchant_key: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      ccavenue: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      simpl: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),
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
      customer_id: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ActiveCardPaymentGatewayResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      cards: PaymentModel.CardPaymentGateway().required(),

      success: Joi.boolean().required(),
    });
  }

  static Card() {
    return Joi.object({
      card_issuer: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_number: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_isin: Joi.string().allow("").allow(null),
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
      payload: Joi.string().allow("").allow(null).required(),

      transaction_amount_in_paise: Joi.number().required(),

      phone_number: Joi.string().allow("").required(),

      merchant_params: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.any().required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static ChargeCustomerRequest() {
    return Joi.object({
      verified: Joi.boolean().allow(null),

      transaction_token: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      cart_id: Joi.string().allow("").allow(null),

      delivery_address_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      vpa: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      aggregator_order_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      polling_url: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),
    });
  }

  static AggregatorRoute() {
    return Joi.object({
      data: Joi.any().allow(null),

      payment_flow: Joi.string().allow("").allow(null),

      api_link: Joi.string().allow("").allow(null),

      payment_flow_data: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      ccavenue: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      ajiodhan: PaymentModel.AggregatorRoute(),
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

      code: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),
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
      card_brand: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      exp_month: Joi.number().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      nickname: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_number: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      display_priority: Joi.number().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_priority: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),

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
      data: PaymentModel.LinkStatus().required(),

      success: Joi.boolean().required(),
    });
  }

  static TransferItemsDetails() {
    return Joi.object({
      logo_small: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo_large: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      id: Joi.number().required(),
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
      address: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      id: Joi.number().required(),

      delights_user_name: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      account_no: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      subtitle: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
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

      bank_name: Joi.string().allow("").required(),

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
      hash_key: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").required(),

      otp: Joi.string().allow("").required(),
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

      success: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      wallet: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      delights: Joi.boolean().required(),

      otp: Joi.string().allow(""),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),

      message: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean(),

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
      request_id: Joi.string().allow("").required(),

      is_verified_flag: Joi.string().allow("").required(),

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

  static BalanceDetails() {
    return Joi.object({
      formatted_value: Joi.string().allow("").allow(null),

      value: Joi.number().allow(null),

      currency: Joi.string().allow("").allow(null),
    });
  }

  static CreditSummary() {
    return Joi.object({
      status_message: Joi.string().allow("").allow(null),

      buyer_status: Joi.string().allow("").allow(null),

      balance: PaymentModel.BalanceDetails(),

      merchant_customer_ref_id: Joi.string().allow("").allow(null),

      amount_available: PaymentModel.BalanceDetails(),

      credit_line_id: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").allow(null),
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
      status: Joi.boolean().required(),

      signup_url: Joi.string().allow("").required(),

      is_registered: Joi.boolean().required(),
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

      addressline1: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      address_as_per_id: PaymentModel.KYCAddress().required(),

      last_name: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      first_name: Joi.string().allow("").required(),

      email_verified: Joi.boolean().required(),

      dob: Joi.string().allow("").allow(null).required(),

      gender: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      fathers_name: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      passport: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      device_type: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      device_model: Joi.string().allow("").allow(null),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      name: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      business_ownership_type: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      business_type: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),
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
      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      device: PaymentModel.DeviceDetails(),

      business_info: PaymentModel.BusinessDetails(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      source: Joi.string().allow("").required(),

      mcc: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
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

  static OutstandingOrderDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      message: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),
    });
  }

  static PaidOrderDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      message: Joi.string().allow("").allow(null),

      status_code: Joi.number().required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
