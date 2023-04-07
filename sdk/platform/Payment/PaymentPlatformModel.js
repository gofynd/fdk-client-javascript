const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      aggregators: Joi.array().items(Joi.any()),

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

      secret: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      config_type: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      aggregator: Joi.array().items(Joi.string().allow("")).required(),
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
      code: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      expired: Joi.boolean().allow(null),

      retry_count: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      nickname: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      exp_year: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      fynd_vpa: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      exp_month: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      intent_flow: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      name: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      anonymous_enable: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      aggregator_name: Joi.string().allow("").allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),
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
      transfer_type: Joi.string().allow("").required(),

      unique_transfer_no: Joi.any().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      customers: Joi.any().required(),

      more_attributes: Joi.any().required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      country: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      bank_name: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      bank_details: PaymentModel.PayoutBankDetails().required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      users: Joi.any().required(),

      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      bank_details: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      users: Joi.any().required(),

      payouts: Joi.any().required(),

      success: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

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
      success: Joi.boolean().required(),

      config: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      is_verified_flag: Joi.boolean(),

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
      branch_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
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
      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.boolean(),

      beneficiary_id: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      comment: Joi.boolean(),

      id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      delights_user_name: Joi.string().allow("").allow(null),

      transfer_mode: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      branch_name: Joi.boolean(),

      email: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),
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
      order_id: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      payment_gateway: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: PaymentModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),
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

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }
}
module.exports = PaymentModel;
