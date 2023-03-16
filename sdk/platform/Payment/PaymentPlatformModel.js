const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      aggregators: Joi.array().items(Joi.any()),

      created: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
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
      key: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      config_type: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),
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
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
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

  static IntentApp() {
    return Joi.object({
      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

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
      exp_year: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      cod_limit: Joi.number().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_issuer: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      display_priority: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      retry_count: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      logo_url: PaymentModel.PaymentModeLogo(),

      exp_month: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      is_pay_by_card_pl: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      save_card: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      aggregator_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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
      customers: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      unique_transfer_no: Joi.any().required(),

      more_attributes: Joi.any().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      account_no: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      bank_name: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      payouts: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      payment_status: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(Joi.any()).required(),
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
      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean(),

      success: Joi.boolean().required(),

      data: Joi.any(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: PaymentModel.BankDetailsForOTP().required(),

      order_id: Joi.string().allow("").required(),
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
      account_no: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      id: Joi.number().required(),

      delights_user_name: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      subtitle: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean(),

      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_id: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      current_status: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: PaymentModel.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),
    });
  }

  static PaymentConfirmationRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(PaymentModel.MultiTenderPaymentMethod())
        .required(),
    });
  }

  static PaymentConfirmationResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static CODdata() {
    return Joi.object({
      limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

      remaining_limit: Joi.number().required(),

      usages: Joi.number().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static GetUserCODLimitResponse() {
    return Joi.object({
      user_cod_data: PaymentModel.CODdata().required(),

      success: Joi.boolean().required(),
    });
  }

  static SetCODForUserRequest() {
    return Joi.object({
      mobileno: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      merchant_user_id: Joi.string().allow("").required(),
    });
  }

  static SetCODOptionResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
