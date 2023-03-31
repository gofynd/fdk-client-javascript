const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      sdk: Joi.boolean().allow(null),

      pin: Joi.string().allow("").allow(null),

      config_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      verify_api: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),

      api: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      ccavenue: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      simpl: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),
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
      refresh: Joi.boolean().allow(null),

      nickname: Joi.string().allow(""),

      card_id: Joi.string().allow("").allow(null).required(),

      name_on_card: Joi.string().allow(""),
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
      card_brand: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_type: Joi.string().allow("").allow(null),

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
      merchant_params: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      payload: Joi.string().allow("").allow(null).required(),

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
      status: Joi.string().allow("").required(),

      cart_id: Joi.string().allow("").allow(null),

      delivery_address_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      timeout: Joi.number().allow(null),

      status: Joi.string().allow(""),

      aggregator_order_id: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      currency: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),
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
      payment_flow_data: Joi.string().allow("").allow(null),

      payment_flow: Joi.string().allow("").allow(null),

      data: Joi.any().allow(null),

      api_link: Joi.string().allow("").allow(null),
    });
  }

  static PaymentFlow() {
    return Joi.object({
      upi_razorpay: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),

      simpl: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      ajiodhan: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      payubiz: PaymentModel.AggregatorRoute(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static IntentApp() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      display_name: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_reference: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      display_priority: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      retry_count: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      exp_year: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      name: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_name: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      aggregator_name: Joi.string().allow("").required(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),
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
      logo_small: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      id: Joi.number().required(),

      logo_large: Joi.string().allow("").required(),
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
      mobile: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      id: Joi.number().required(),

      branch_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      transfer_mode: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),
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
      mobile: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      comment: Joi.string().allow(""),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      wallet: Joi.string().allow("").allow(null),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      delights: Joi.boolean().required(),

      otp: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

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
      formatted_value: Joi.string().allow("").allow(null),

      value: Joi.number().allow(null),

      currency: Joi.string().allow("").allow(null),
    });
  }

  static CreditSummary() {
    return Joi.object({
      balance: PaymentModel.BalanceDetails(),

      status: Joi.string().allow("").allow(null),

      credit_line_id: Joi.string().allow("").allow(null),

      status_message: Joi.string().allow("").allow(null),

      amount_available: PaymentModel.BalanceDetails(),

      buyer_status: Joi.string().allow("").allow(null),

      merchant_customer_ref_id: Joi.string().allow("").allow(null),
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
      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ownership_type: Joi.string().allow("").allow(null),

      land_mark: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),

      addressline1: Joi.string().allow("").required(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      vintage: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      business_type: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),

      address: PaymentModel.KYCAddress(),

      business_ownership_type: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      mobile_verified: Joi.boolean().required(),

      passport: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").allow(null),

      driving_license: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      email_verified: Joi.boolean().required(),

      pan: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      address_as_per_id: PaymentModel.KYCAddress().required(),

      fathers_name: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      gender: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      device_model: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      membership_id: Joi.string().allow("").required(),

      date_of_joining: Joi.string().allow("").allow(null),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      business_info: PaymentModel.BusinessDetails(),

      source: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      mcc: Joi.string().allow("").allow(null),

      device: PaymentModel.DeviceDetails(),

      marketplace_info: PaymentModel.MarketplaceInfo(),
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
