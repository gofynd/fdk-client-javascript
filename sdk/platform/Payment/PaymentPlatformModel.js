const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.any()),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      created: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      is_active: Joi.boolean().allow(null),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),
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

  static PaymentModeLogo() {
    return Joi.object({
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
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
      logos: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_token: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      cod_limit: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      timeout: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      display_priority: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_brand: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      exp_month: Joi.number().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_fingerprint: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      list: Joi.array().items(PaymentModel.PaymentModeList()),

      aggregator_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),
    });
  }

  static PaymentOptions() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentModel.RootPaymentMode())
        .required(),
    });
  }

  static PaymentOptionsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      payment_options: PaymentModel.PaymentOptions().required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      more_attributes: Joi.any().required(),

      unique_transfer_no: Joi.any().required(),

      customers: Joi.any().required(),

      is_active: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      account_holder: Joi.string().allow(""),

      city: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      pincode: Joi.number(),

      bank_name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      users: Joi.any().required(),

      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      transfer_type: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      unique_transfer_no: Joi.string().allow("").required(),

      payouts: Joi.any().required(),

      users: Joi.any().required(),

      payment_status: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      created: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      success: Joi.boolean().required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      config: Joi.any().required(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      mobile: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      delights: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      otp: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),

      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),
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

  static OrderBeneficiaryDetails() {
    return Joi.object({
      comment: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      id: Joi.number().required(),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),

      show_beneficiary_details: Joi.boolean(),
    });
  }

  static PaymentConfirmationMode() {
    return Joi.object({
      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static PaymentConfirmationRequest() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(PaymentModel.PaymentConfirmationMode())
        .required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentConfirmationResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static CODdata() {
    return Joi.object({
      limit: Joi.number().required(),

      usages: Joi.number().required(),

      remaining_limit: Joi.number().required(),

      is_active: Joi.boolean().required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static GetUserCODLimitResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      user_cod_data: PaymentModel.CODdata().required(),
    });
  }

  static SetCODForUserRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      mobileno: Joi.string().allow("").required(),

      merchant_user_id: Joi.string().allow("").required(),
    });
  }

  static SetCODOptionResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static RepaymentRequestDetails() {
    return Joi.object({
      payment_mode_identifier: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow("").required(),

      outstanding_details_id: Joi.number().required(),

      amount: Joi.number().required(),

      aggregator_transaction_id: Joi.string().allow("").required(),

      fwd_shipment_id: Joi.string().allow("").required(),

      current_status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static RepaymentDetailsSerialiserPayAll() {
    return Joi.object({
      extension_order_id: Joi.string().allow("").allow(null).required(),

      aggregator_order_id: Joi.string().allow("").required(),

      aggregator_transaction_id: Joi.string().allow("").required(),

      shipment_details: Joi.array().items(
        PaymentModel.RepaymentRequestDetails()
      ),

      total_amount: Joi.number().required(),
    });
  }

  static RepaymentResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static MerchantOnBoardingRequest() {
    return Joi.object({
      credit_line_id: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static MerchantOnBoardingResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
