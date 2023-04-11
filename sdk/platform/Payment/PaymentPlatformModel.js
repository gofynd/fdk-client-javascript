const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      created: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.any()),

      success: Joi.boolean().required(),
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
      config_type: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      aggregator_name: PaymentModel.PaymentGatewayConfig(),

      app_id: Joi.string().allow("").required(),

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
      display_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      cod_limit: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      code: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      merchant_code: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      exp_year: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_type: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      card_number: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_name: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      display_priority: Joi.number().required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      save_card: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

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
      payment_options: PaymentModel.PaymentOptions().required(),

      success: Joi.boolean().required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      unique_transfer_no: Joi.any().required(),

      more_attributes: Joi.any().required(),

      customers: Joi.any().required(),

      is_default: Joi.boolean().required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      account_type: Joi.string().allow("").required(),

      account_no: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      bank_name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      users: Joi.any().required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      unique_transfer_no: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      payment_status: Joi.string().allow("").required(),

      payouts: Joi.any().required(),

      users: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      bank_details: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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
      is_default: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),

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
      data: Joi.any(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

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

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
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
      created_on: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      subtitle: Joi.string().allow("").required(),

      id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      account_holder: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),

      show_beneficiary_details: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_id: Joi.string().allow(""),

      payment_gateway: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

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
      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static CODdata() {
    return Joi.object({
      limit: Joi.number().required(),

      remaining_limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

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
      store_id: Joi.number().required(),

      device_tag: Joi.string().allow("").allow(null),

      edc_device_serial_no: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),

      terminal_serial_no: Joi.string().allow("").required(),

      edc_model: Joi.string().allow("").required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      merchant_store_pos_code: Joi.string().allow("").allow(null),

      terminal_unique_identifier: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      device_tag: Joi.string().allow("").required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),

      aggregator_name: Joi.string().allow(""),

      terminal_serial_no: Joi.string().allow("").required(),

      edc_model: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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
      merchant_store_pos_code: Joi.string().allow(""),

      store_id: Joi.number(),

      device_tag: Joi.string().allow("").allow(null),

      edc_device_serial_no: Joi.string().allow(""),

      aggregator_id: Joi.number(),

      edc_model: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      bqr_image: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      method: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      currency: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      aggregator: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      retry: Joi.boolean().required(),

      redirect_url: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      request_type: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),
    });
  }

  static LinkStatus() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
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
