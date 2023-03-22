const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.any()),
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
      key: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),
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

  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
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
      logos: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_token: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      card_id: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_reference: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      intent_flow: Joi.boolean().allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      code: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      name: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      fynd_vpa: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      cod_limit: Joi.number().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),
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

      anonymous_enable: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),
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
      payment_options: PaymentModel.PaymentOptions().required(),

      success: Joi.boolean().required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      transfer_type: Joi.string().allow("").required(),

      more_attributes: Joi.any().required(),

      customers: Joi.any().required(),

      unique_transfer_no: Joi.any().required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      city: Joi.string().allow(""),

      pincode: Joi.number(),

      bank_name: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      country: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      account_type: Joi.string().allow("").required(),

      state: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      unique_external_id: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      aggregator: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      users: Joi.any().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),

      payouts: Joi.any().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      payment_status: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),

      users: Joi.any().required(),
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
      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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

      config: Joi.any().required(),

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
      data: Joi.any(),

      is_verified_flag: Joi.boolean(),

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

  static BankDetailsForOTP() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      details: PaymentModel.BankDetailsForOTP().required(),
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
      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      transfer_mode: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),
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
      current_status: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: PaymentModel.MultiTenderPaymentMeta(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),
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
      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

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
