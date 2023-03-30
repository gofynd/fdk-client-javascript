const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      aggregators: Joi.array().items(Joi.any()),

      created: Joi.boolean().required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      secret: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

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
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      display_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
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
      exp_month: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      exp_year: Joi.number().allow(null),

      intent_flow: Joi.boolean().allow(null),

      name: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      cod_limit: Joi.number().allow(null),

      card_name: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      cod_limit_per_order: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      code: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_priority: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),
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

      is_active: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      customers: Joi.any().required(),

      unique_transfer_no: Joi.any().required(),

      more_attributes: Joi.any().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      account_no: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      bank_name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      users: Joi.any().required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      bank_details: Joi.any().required(),

      users: Joi.any().required(),

      payouts: Joi.any().required(),

      is_active: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      success: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      success: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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

  static BeneficiaryModeDetails() {
    return Joi.object({
      vpa: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      wallet: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      transfer_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      delights: Joi.boolean().required(),

      otp: Joi.string().allow(""),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      data: Joi.any(),

      is_verified_flag: Joi.boolean(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
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
      comment: Joi.string().allow(""),

      id: Joi.number().required(),

      mobile: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      beneficiary_id: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean(),

      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),
    });
  }

  static PaymentConfirmationMode() {
    return Joi.object({
      meta: Joi.any(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),
    });
  }

  static PaymentConfirmationRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(PaymentModel.PaymentConfirmationMode())
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

  static CODdata() {
    return Joi.object({
      usages: Joi.number().required(),

      limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      remaining_limit: Joi.number().required(),
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

      mobileno: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
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
      outstanding_details_id: Joi.number().required(),

      amount: Joi.number().required(),

      aggregator_order_id: Joi.string().allow("").required(),

      fwd_shipment_id: Joi.string().allow("").required(),

      current_status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      payment_mode_identifier: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      aggregator_transaction_id: Joi.string().allow("").required(),
    });
  }

  static RepaymentDetailsSerialiserPayAll() {
    return Joi.object({
      aggregator_order_id: Joi.string().allow("").required(),

      extension_order_id: Joi.string().allow("").allow(null).required(),

      shipment_details: Joi.array().items(
        PaymentModel.RepaymentRequestDetails()
      ),

      aggregator_transaction_id: Joi.string().allow("").required(),

      total_amount: Joi.number().required(),
    });
  }

  static RepaymentResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }

  static MerchantOnBoardingRequest() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      credit_line_id: Joi.string().allow("").required(),
    });
  }

  static MerchantOnBoardingResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }
}
module.exports = PaymentModel;
