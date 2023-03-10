const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      created: Joi.boolean().required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      merchant_salt: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      key: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),
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
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      logos: PaymentModel.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

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
      display_priority: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      timeout: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_brand: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_token: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      code: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_isin: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      merchant_code: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_number: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_priority: Joi.number().required(),

      aggregator_name: Joi.string().allow("").allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),
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

      customers: Joi.any().required(),

      is_active: Joi.boolean().required(),

      more_attributes: Joi.any().required(),

      is_default: Joi.boolean().required(),

      unique_transfer_no: Joi.any().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      state: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      city: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      bank_name: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      users: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created: Joi.boolean().required(),

      payouts: Joi.any().required(),

      users: Joi.any().required(),

      success: Joi.boolean().required(),

      payment_status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),
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

  static BeneficiaryModeDetails() {
    return Joi.object({
      address: Joi.string().allow(""),

      account_no: Joi.string().allow("").required(),

      mobile: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      wallet: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      delights: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      otp: Joi.string().allow(""),

      transfer_mode: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),

      data: Joi.any(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

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
      address: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      account_holder: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      delights_user_name: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      id: Joi.number().required(),
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
      meta: Joi.any(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

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
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static CODdata() {
    return Joi.object({
      limit: Joi.number().required(),

      usages: Joi.number().required(),

      is_active: Joi.boolean().required(),

      user_id: Joi.string().allow("").required(),

      remaining_limit: Joi.number().required(),
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

      merchant_user_id: Joi.string().allow("").required(),

      mobileno: Joi.string().allow("").required(),
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

      aggregator_order_id: Joi.string().allow("").required(),

      fwd_shipment_id: Joi.string().allow("").required(),

      current_status: Joi.string().allow("").required(),

      payment_mode_identifier: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      merchant_order_id: Joi.string().allow("").required(),

      aggregator_transaction_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static RepaymentDetailsSerialiserPayAll() {
    return Joi.object({
      extension_order_id: Joi.string().allow("").allow(null).required(),

      aggregator_order_id: Joi.string().allow("").required(),

      total_amount: Joi.number().required(),

      aggregator_transaction_id: Joi.string().allow("").required(),

      shipment_details: Joi.array().items(
        PaymentModel.RepaymentRequestDetails()
      ),
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
      credit_line_id: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
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
