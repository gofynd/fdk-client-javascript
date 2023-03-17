const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      aggregators: Joi.array().items(Joi.any()),

      created: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      is_active: Joi.boolean().allow(null),

      app_id: Joi.string().allow("").required(),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),
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
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static IntentApp() {
    return Joi.object({
      display_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_brand: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      exp_year: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      display_priority: Joi.number().allow(null),

      cod_limit: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      display_name: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_reference: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      remaining_limit: Joi.number().allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      anonymous_enable: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),
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
      unique_transfer_no: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      more_attributes: Joi.any().required(),

      customers: Joi.any().required(),

      is_active: Joi.boolean().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      account_holder: Joi.string().allow(""),

      country: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      city: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      state: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      unique_external_id: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      unique_transfer_no: Joi.string().allow("").required(),

      transfer_type: Joi.string().allow("").required(),

      payouts: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),

      payment_status: Joi.string().allow("").required(),

      users: Joi.any().required(),

      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),

      created: Joi.boolean().required(),
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
      success: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

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
      account_holder: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      wallet: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      transfer_mode: Joi.string().allow("").required(),

      delights: Joi.boolean().required(),

      otp: Joi.string().allow(""),

      request_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),

      data: Joi.any(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      success: Joi.boolean(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      delights_user_name: Joi.string().allow("").allow(null),

      id: Joi.number().required(),

      branch_name: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
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
      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      meta: Joi.any(),
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
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static CODdata() {
    return Joi.object({
      usages: Joi.number().required(),

      limit: Joi.number().required(),

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

  static RepaymentRequestDetails() {
    return Joi.object({
      outstanding_details_id: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      aggregator_transaction_id: Joi.string().allow("").required(),

      fwd_shipment_id: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      current_status: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow("").required(),

      payment_mode_identifier: Joi.string().allow("").required(),
    });
  }

  static RepaymentDetailsSerialiserPayAll() {
    return Joi.object({
      aggregator_order_id: Joi.string().allow("").required(),

      total_amount: Joi.number().required(),

      shipment_details: Joi.array().items(
        PaymentModel.RepaymentRequestDetails()
      ),

      aggregator_transaction_id: Joi.string().allow("").required(),

      extension_order_id: Joi.string().allow("").allow(null).required(),
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
      status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

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
