const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      created: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.any()),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      key: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      aggregator_name: PaymentModel.PaymentGatewayConfig(),

      is_active: Joi.boolean().allow(null),

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
      error: PaymentModel.ErrorCodeAndDescription().required(),

      success: Joi.boolean().required(),
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

      package_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

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
      card_brand_image: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      remaining_limit: Joi.number().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      retry_count: Joi.number().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      name: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_name: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_isin: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      anonymous_enable: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      display_priority: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),
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

      unique_transfer_no: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      more_attributes: Joi.any().required(),

      customers: Joi.any().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      state: Joi.string().allow(""),

      pincode: Joi.number(),

      branch_name: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      city: Joi.string().allow(""),

      bank_name: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      bank_details: PaymentModel.PayoutBankDetails().required(),

      unique_external_id: Joi.string().allow("").required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      bank_details: Joi.any().required(),

      payouts: Joi.any().required(),

      created: Joi.boolean().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      transfer_type: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      users: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      payment_status: Joi.string().allow("").required(),
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
      config: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
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

  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),

      data: Joi.any(),

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

  static BankDetailsForOTP() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
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
      success: Joi.boolean(),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      transfer_mode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      account_no: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      ifsc_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
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
      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      meta: PaymentModel.MultiTenderPaymentMeta(),
    });
  }

  static PaymentConfirmationRequest() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(PaymentModel.MultiTenderPaymentMethod())
        .required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentConfirmationResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static CODdata() {
    return Joi.object({
      remaining_limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

      usages: Joi.number().required(),

      is_active: Joi.boolean().required(),

      limit: Joi.number().required(),
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
      merchant_user_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      mobileno: Joi.string().allow("").required(),
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
