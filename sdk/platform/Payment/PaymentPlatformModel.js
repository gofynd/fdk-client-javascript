const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      aggregators: Joi.array().items(Joi.any()),

      created: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

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
      secret: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      key: Joi.string().allow("").required(),
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

  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
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

  static PaymentModeList() {
    return Joi.object({
      exp_month: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      intent_flow: Joi.boolean().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_issuer: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      display_priority: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      retry_count: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      aggregator_name: Joi.string().allow("").allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

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
      customers: Joi.any().required(),

      unique_transfer_no: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      more_attributes: Joi.any().required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      account_no: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      users: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      bank_details: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      users: Joi.any().required(),

      success: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      payouts: Joi.any().required(),

      payment_status: Joi.string().allow("").required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
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
      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),

      success: Joi.boolean().required(),

      data: Joi.any(),

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

  static BankDetailsForOTP() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
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
      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      transfer_mode: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      subtitle: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      email: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),
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
      amount: Joi.number().required(),

      meta: PaymentModel.MultiTenderPaymentMeta(),

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
      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Code() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PaymentCode() {
    return Joi.object({
      types: Joi.string().allow("").required(),

      networks: Joi.string().allow("").required(),

      codes: PaymentModel.Code().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static GetPaymentCode() {
    return Joi.object({
      method_code: PaymentModel.PaymentCode().required(),
    });
  }

  static GetPaymentCodeResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.GetPaymentCode().required(),
    });
  }
}
module.exports = PaymentModel;
