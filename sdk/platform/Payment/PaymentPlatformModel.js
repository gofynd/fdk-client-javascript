const Joi = require("joi");

class PaymentModel {
  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: PaymentModel.BankDetailsForOTP().required(),
      order_id: Joi.string().allow("").required(),
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
  static CODdata() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      limit: Joi.number().required(),
      remaining_limit: Joi.number().required(),
      usages: Joi.number().required(),
      user_id: Joi.string().allow("").required(),
    });
  }
  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }
  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
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
  static GetOauthUrlResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      url: Joi.string().allow("").required(),
    });
  }
  static GetUserCODLimitResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      user_cod_data: PaymentModel.CODdata().required(),
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
  static IntentApp() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      logos: PaymentModel.PaymentModeLogo(),
      package_name: Joi.string().allow("").allow(null),
    });
  }
  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      package_name: Joi.string().allow("").allow(null),
    });
  }
  static MultiTenderPaymentMeta() {
    return Joi.object({
      current_status: Joi.string().allow(""),
      extra_meta: Joi.any().allow(null),
      order_id: Joi.string().allow(""),
      payment_gateway: Joi.string().allow(""),
      payment_id: Joi.string().allow(""),
    });
  }
  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),
      meta: PaymentModel.MultiTenderPaymentMeta(),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
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
      branch_name: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      created_on: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      id: Joi.number().required(),
      ifsc_code: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      mobile: Joi.string().allow(""),
      modified_on: Joi.string().allow("").required(),
      subtitle: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
    });
  }
  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),
      show_beneficiary_details: Joi.boolean(),
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
  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
      key: Joi.string().allow("").required(),
      merchant_salt: Joi.string().allow("").required(),
      secret: Joi.string().allow("").required(),
    });
  }
  static PaymentGatewayConfigRequest() {
    return Joi.object({
      aggregator_name: PaymentModel.PaymentGatewayConfig(),
      app_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
    });
  }
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.any()),
      app_id: Joi.string().allow("").required(),
      created: Joi.boolean().required(),
      display_fields: Joi.array().items(Joi.string().allow("")).required(),
      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
    });
  }
  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
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
      cod_limit: Joi.number().allow(null),
      cod_limit_per_order: Joi.number().allow(null),
      code: Joi.string().allow("").allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").allow(null),
      display_priority: Joi.number().allow(null),
      exp_month: Joi.number().allow(null),
      exp_year: Joi.number().allow(null),
      expired: Joi.boolean().allow(null),
      fynd_vpa: Joi.string().allow("").allow(null),
      intent_app: Joi.array().items(PaymentModel.IntentApp()),
      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),
      intent_app_error_list: Joi.array().items(Joi.string().allow("")),
      intent_flow: Joi.boolean().allow(null),
      logo_url: PaymentModel.PaymentModeLogo(),
      merchant_code: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      nickname: Joi.string().allow("").allow(null),
      remaining_limit: Joi.number().allow(null),
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
  static PayoutBankDetails() {
    return Joi.object({
      account_holder: Joi.string().allow(""),
      account_no: Joi.string().allow(""),
      account_type: Joi.string().allow("").required(),
      bank_name: Joi.string().allow(""),
      branch_name: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      ifsc_code: Joi.string().allow("").required(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }
  static PayoutRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      bank_details: PaymentModel.PayoutBankDetails().required(),
      is_active: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
      unique_external_id: Joi.string().allow("").required(),
      users: Joi.any().required(),
    });
  }
  static PayoutResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      bank_details: Joi.any().required(),
      created: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      payment_status: Joi.string().allow("").required(),
      payouts: Joi.any().required(),
      success: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
      unique_transfer_no: Joi.string().allow("").required(),
      users: Joi.any().required(),
    });
  }
  static PayoutsResponse() {
    return Joi.object({
      customers: Joi.any().required(),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      more_attributes: Joi.any().required(),
      payouts_aggregators: Joi.array().items(Joi.any()).required(),
      transfer_type: Joi.string().allow("").required(),
      unique_transfer_no: Joi.any().required(),
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
  static RevokeOAuthToken() {
    return Joi.object({
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
      is_pay_by_card_pl: Joi.boolean().allow(null),
      list: Joi.array().items(PaymentModel.PaymentModeList()),
      name: Joi.string().allow("").required(),
      save_card: Joi.boolean().allow(null),
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
  static SetCODForUserRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      merchant_user_id: Joi.string().allow("").required(),
      mobileno: Joi.string().allow("").required(),
    });
  }
  static SetCODOptionResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
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
  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }
  static UpdatePayoutRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      unique_external_id: Joi.string().allow("").required(),
    });
  }
  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
