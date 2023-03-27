const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.any()),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      created: Joi.boolean().required(),

      success: Joi.boolean().required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      merchant_salt: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      config_type: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),

      is_active: Joi.boolean().allow(null),
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
      logos: PaymentModel.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),

      outage: Joi.any().allow(null),

      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
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
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      logo_url: PaymentModel.PaymentModeLogo(),

      timeout: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      outage: Joi.any().allow(null),

      card_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_type: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      retry_count: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_brand_image: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      anonymous_enable: Joi.boolean().allow(null),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      save_card: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),
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
      unique_transfer_no: Joi.any().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      customers: Joi.any().required(),

      is_default: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      more_attributes: Joi.any().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      branch_name: Joi.string().allow(""),

      bank_name: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      transfer_type: Joi.string().allow("").required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      unique_transfer_no: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),

      payouts: Joi.any().required(),

      created: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

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
      unique_external_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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
      is_verified_flag: Joi.boolean(),

      data: Joi.any(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

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
      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      beneficiary_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      mobile: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      id: Joi.number().required(),

      transfer_mode: Joi.string().allow("").required(),
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

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: PaymentModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),
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
      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Code() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),
    });
  }

  static PaymentCode() {
    return Joi.object({
      codes: PaymentModel.Code().required(),

      networks: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      types: Joi.string().allow("").required(),
    });
  }

  static GetPaymentCode() {
    return Joi.object({
      method_code: PaymentModel.PaymentCode().required(),
    });
  }

  static GetPaymentCodeResponse() {
    return Joi.object({
      data: PaymentModel.GetPaymentCode().required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
