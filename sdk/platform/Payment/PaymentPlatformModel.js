const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.any()),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      created: Joi.boolean().required(),
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
      secret: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      config_type: Joi.string().allow("").required(),
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
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
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
      package_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      expired: Joi.boolean().allow(null),

      intent_flow: Joi.boolean().allow(null),

      exp_year: Joi.number().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_id: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      card_name: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      remaining_limit: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      timeout: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      name: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      code: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      anonymous_enable: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      display_priority: Joi.number().required(),

      aggregator_name: Joi.string().allow("").allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

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
      unique_transfer_no: Joi.any().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      transfer_type: Joi.string().allow("").required(),

      more_attributes: Joi.any().required(),

      customers: Joi.any().required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      branch_name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      bank_name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),

      users: Joi.any().required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      unique_transfer_no: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      users: Joi.any().required(),

      bank_details: Joi.any().required(),

      payouts: Joi.any().required(),

      success: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
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
      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),

      data: Joi.any(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
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

      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      comment: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      beneficiary_id: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      id: Joi.number().required(),

      subtitle: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),
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

      payment_gateway: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      payment_id: Joi.string().allow(""),
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
      payment_methods: Joi.array()
        .items(PaymentModel.MultiTenderPaymentMethod())
        .required(),

      order_id: Joi.string().allow("").required(),
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

      remaining_limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

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
      is_active: Joi.boolean().required(),

      mobileno: Joi.string().allow("").required(),

      merchant_user_id: Joi.string().allow("").required(),
    });
  }

  static SetCODOptionResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static EdcModelData() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      models: Joi.array().items(Joi.string().allow("")).required(),

      aggregator_id: Joi.number().required(),
    });
  }

  static EdcAggregatorAndModelListResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.EdcModelData()).required(),

      success: Joi.boolean().required(),
    });
  }

  static StatisticsData() {
    return Joi.object({
      active_device_count: Joi.number().required(),

      inactive_device_count: Joi.number().required(),
    });
  }

  static EdcDeviceStatsResponse() {
    return Joi.object({
      statistics: PaymentModel.StatisticsData().required(),

      success: Joi.boolean().required(),
    });
  }

  static EdcAddRequest() {
    return Joi.object({
      aggregator_id: Joi.number().required(),

      edc_model: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").allow(null),

      terminal_serial_no: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      edc_device_serial_no: Joi.string().allow("").required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      aggregator_id: Joi.number().required(),

      edc_model: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      terminal_unique_identifier: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),
    });
  }

  static EdcDeviceAddResponse() {
    return Joi.object({
      data: PaymentModel.EdcDevice().required(),

      success: Joi.boolean().required(),
    });
  }

  static EdcDeviceDetailsResponse() {
    return Joi.object({
      data: PaymentModel.EdcDevice().required(),

      success: Joi.boolean().required(),
    });
  }

  static EdcUpdateRequest() {
    return Joi.object({
      aggregator_id: Joi.number(),

      edc_model: Joi.string().allow(""),

      device_tag: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      edc_device_serial_no: Joi.string().allow(""),

      is_active: Joi.string().allow(""),

      merchant_store_pos_code: Joi.string().allow(""),
    });
  }

  static EdcDeviceUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow("").required(),

      size: Joi.number(),
    });
  }

  static EdcDeviceListResponse() {
    return Joi.object({
      items: Joi.array().items(PaymentModel.EdcDevice()).required(),

      page: PaymentModel.Page().required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null).required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      polling_url: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      customer_id: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      currency: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      contact: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      merchant_order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),

      retry: Joi.boolean().required(),

      redirect_url: Joi.string().allow("").allow(null),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      request_type: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),
    });
  }

  static LinkStatus() {
    return Joi.object({
      status: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      data: PaymentModel.LinkStatus().required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
