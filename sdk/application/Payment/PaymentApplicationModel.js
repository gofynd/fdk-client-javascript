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
  static ListCardsResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.Card()),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static OrderBeneficiaryDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      address: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").required(),
      branch_name: Joi.boolean(),
      comment: Joi.boolean(),
      created_on: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      id: Joi.number().required(),
      ifsc_code: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      mobile: Joi.boolean(),
      modified_on: Joi.string().allow("").required(),
      subtitle: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
    });
  }
  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array()
        .items(PaymentModel.OrderBeneficiaryDetails())
        .required(),
      show_beneficiary_details: Joi.boolean(),
    });
  }
  static PaymentFlow() {
    return Joi.object({
      bqr_razorpay: PaymentModel.AggregatorRoute(),
      ccavenue: PaymentModel.AggregatorRoute(),
      fynd: PaymentModel.AggregatorRoute(),
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
      aggregator_order_id: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      polling_url: Joi.string().allow("").required(),
      razorpay_payment_id: Joi.string().allow("").required(),
      timeout: Joi.number().allow(null).required(),
      virtual_id: Joi.string().allow("").allow(null),
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
      virtual_id: Joi.string().allow("").allow(null),
      vpa: Joi.string().allow("").allow(null),
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
      code: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      display_priority: Joi.number().allow(null),
      exp_month: Joi.number().allow(null),
      exp_year: Joi.number().allow(null),
      expired: Joi.boolean().allow(null),
      fynd_vpa: Joi.string().allow("").allow(null),
      intent_app_error_list: Joi.array().items(Joi.string().allow("")),
      intent_flow: Joi.boolean().allow(null),
      logo_url: PaymentModel.PaymentModeLogo(),
      merchant_code: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      nickname: Joi.string().allow("").allow(null),
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
      retry: Joi.boolean().required(),
      status: Joi.string().allow("").required(),
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
  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),
      aggregator_name: Joi.string().allow("").allow(null),
      anonymous_enable: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").required(),
      display_priority: Joi.number().required(),
      list: Joi.array().items(PaymentModel.PaymentModeList()),
      name: Joi.string().allow("").required(),
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
      display_name: Joi.boolean(),
      id: Joi.string().allow("").required(),
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
  static ValidateCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      merchant_params: Joi.any().required(),
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
