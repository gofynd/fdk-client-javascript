const Joi = require("joi");

class PaymentModel {
  static AggregatorConfigDetail() {
    return Joi.object({
      verify_api: Joi.string().allow("").allow(null),

      config_type: Joi.string().allow("").required(),

      api: Joi.string().allow("").allow(null),

      key: Joi.string().allow("").required(),

      pin: Joi.string().allow("").allow(null),

      merchant_key: Joi.string().allow("").allow(null),

      secret: Joi.string().allow("").required(),

      sdk: Joi.boolean().allow(null),

      user_id: Joi.string().allow("").allow(null),

      merchant_id: Joi.string().allow("").allow(null),
    });
  }

  static AggregatorsConfigDetailResponse() {
    return Joi.object({
      simpl: PaymentModel.AggregatorConfigDetail(),

      env: Joi.string().allow("").required(),

      mswipe: PaymentModel.AggregatorConfigDetail(),

      success: Joi.boolean().required(),

      juspay: PaymentModel.AggregatorConfigDetail(),

      rupifi: PaymentModel.AggregatorConfigDetail(),

      razorpay: PaymentModel.AggregatorConfigDetail(),

      stripe: PaymentModel.AggregatorConfigDetail(),

      ccavenue: PaymentModel.AggregatorConfigDetail(),

      payumoney: PaymentModel.AggregatorConfigDetail(),
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

      success: Joi.boolean().required(),

      cards: PaymentModel.CardPaymentGateway().required(),
    });
  }

  static Card() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      exp_month: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),
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

      payload: Joi.string().allow("").allow(null).required(),

      merchant_params: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

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
      order_id: Joi.string().allow("").required(),

      verified: Joi.boolean().allow(null),

      amount: Joi.number().allow(null).required(),

      transaction_token: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static ChargeCustomerResponse() {
    return Joi.object({
      delivery_address_id: Joi.string().allow("").allow(null),

      cart_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      razorpay_payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      vpa: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      currency: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      vpa: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      method: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      customer_id: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      currency: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      bqr_image: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      currency: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),
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

      package_name: Joi.string().allow("").allow(null),

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
      fynd_vpa: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      code: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_reference: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_isin: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_id: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      cod_limit: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      timeout: Joi.number().allow(null),

      retry_count: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      anonymous_enable: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      display_priority: Joi.number().required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      add_card_enabled: Joi.boolean().allow(null),
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

      payubiz: PaymentModel.AggregatorRoute(),

      mswipe: PaymentModel.AggregatorRoute(),

      bqr_razorpay: PaymentModel.AggregatorRoute(),

      jiopay: PaymentModel.AggregatorRoute(),

      juspay: PaymentModel.AggregatorRoute(),

      epaylater: PaymentModel.AggregatorRoute(),

      rupifi: PaymentModel.AggregatorRoute(),

      upi_razorpay: PaymentModel.AggregatorRoute(),

      fynd: PaymentModel.AggregatorRoute(),

      ajiodhan: PaymentModel.AggregatorRoute(),

      razorpay: PaymentModel.AggregatorRoute(),

      stripe: PaymentModel.AggregatorRoute(),

      ccavenue: PaymentModel.AggregatorRoute(),
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
      id: Joi.number().required(),

      logo_small: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

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
      mobile: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      beneficiary_id: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

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
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

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
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

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
      mobile: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      vpa: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      otp: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      delights: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),
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

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),
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
      currency: Joi.string().allow("").allow(null),

      value: Joi.number().allow(null),

      formatted_value: Joi.string().allow("").allow(null),
    });
  }

  static CreditSummary() {
    return Joi.object({
      buyer_status: Joi.string().allow("").allow(null),

      status: Joi.string().allow("").allow(null),

      balance: PaymentModel.BalanceDetails(),

      credit_line_id: Joi.string().allow("").allow(null),

      amount_available: PaymentModel.BalanceDetails(),

      status_message: Joi.string().allow("").allow(null),

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
      is_registered: Joi.boolean().required(),

      status: Joi.boolean().required(),

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

      ownership_type: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      land_mark: Joi.string().allow("").allow(null),

      addressline1: Joi.string().allow("").required(),

      addressline2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      address: PaymentModel.KYCAddress(),

      business_type: Joi.string().allow("").allow(null),

      pan: Joi.string().allow("").allow(null),

      shop_and_establishment: Joi.any(),

      gstin: Joi.string().allow("").allow(null),

      business_ownership_type: Joi.string().allow("").allow(null),

      vintage: Joi.string().allow("").allow(null),

      fda: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      fssai: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow("").allow(null),
    });
  }

  static DeviceDetails() {
    return Joi.object({
      device_model: Joi.string().allow("").allow(null),

      os: Joi.string().allow("").allow(null),

      identifier_type: Joi.string().allow("").allow(null),

      device_type: Joi.string().allow("").allow(null),

      os_version: Joi.string().allow("").allow(null),

      device_make: Joi.string().allow("").allow(null),

      identification_number: Joi.string().allow("").allow(null),
    });
  }

  static UserPersonalInfoInDetails() {
    return Joi.object({
      last_name: Joi.string().allow("").allow(null),

      mobile_verified: Joi.boolean().required(),

      pan: Joi.string().allow("").allow(null),

      email_verified: Joi.boolean().required(),

      driving_license: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      mothers_name: Joi.string().allow("").allow(null),

      voter_id: Joi.string().allow("").allow(null),

      dob: Joi.string().allow("").allow(null).required(),

      fathers_name: Joi.string().allow("").allow(null),

      middle_name: Joi.string().allow("").allow(null),

      phone: Joi.string().allow("").required(),

      passport: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      address_as_per_id: PaymentModel.KYCAddress().required(),
    });
  }

  static MarketplaceInfo() {
    return Joi.object({
      date_of_joining: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      membership_id: Joi.string().allow("").required(),
    });
  }

  static CustomerOnboardingRequest() {
    return Joi.object({
      business_info: PaymentModel.BusinessDetails(),

      device: PaymentModel.DeviceDetails(),

      personal_info: PaymentModel.UserPersonalInfoInDetails().required(),

      source: Joi.string().allow("").required(),

      marketplace_info: PaymentModel.MarketplaceInfo(),

      mcc: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),
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

      message: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),
    });
  }

  static PaidOrderDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      message: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      status_code: Joi.number().required(),
    });
  }
}
module.exports = PaymentModel;
