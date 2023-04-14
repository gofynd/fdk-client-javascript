const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      created: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.any()),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),
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
      merchant_salt: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      secret: Joi.string().allow("").required(),
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
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      display_priority: Joi.number().allow(null),

      card_isin: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      cod_limit_per_order: Joi.number().allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      exp_month: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_number: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      expired: Joi.boolean().allow(null),

      cod_limit: Joi.number().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_reference: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      is_pay_by_card_pl: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      display_priority: Joi.number().required(),

      add_card_enabled: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

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
      success: Joi.boolean().required(),

      payment_options: PaymentModel.PaymentOptions().required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      is_active: Joi.boolean().required(),

      more_attributes: Joi.any().required(),

      customers: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      unique_transfer_no: Joi.any().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      city: Joi.string().allow(""),

      bank_name: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      branch_name: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      ifsc_code: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      users: Joi.any().required(),

      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      users: Joi.any().required(),

      is_active: Joi.boolean().required(),

      bank_details: Joi.any().required(),

      success: Joi.boolean().required(),

      payouts: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      created: Joi.boolean().required(),

      payment_status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),
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

      data: Joi.any(),

      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

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
      success: Joi.boolean(),

      bank_name: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      ifsc_code: Joi.string().allow("").required(),

      id: Joi.number().required(),

      subtitle: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      transfer_mode: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      account_holder: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
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
      payment_id: Joi.string().allow(""),

      payment_gateway: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      meta: PaymentModel.MultiTenderPaymentMeta(),

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
      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static CODdata() {
    return Joi.object({
      remaining_limit: Joi.number().required(),

      is_active: Joi.boolean().required(),

      user_id: Joi.string().allow("").required(),

      usages: Joi.number().required(),

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
      mobileno: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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
      models: Joi.array().items(Joi.string().allow("")).required(),

      aggregator_id: Joi.number().required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static EdcAggregatorAndModelListResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(PaymentModel.EdcModelData()).required(),
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
      success: Joi.boolean().required(),

      statistics: PaymentModel.StatisticsData().required(),
    });
  }

  static EdcAddRequest() {
    return Joi.object({
      edc_device_serial_no: Joi.string().allow("").required(),

      edc_model: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").allow(null),

      aggregator_id: Joi.number().required(),

      store_id: Joi.number().required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      terminal_unique_identifier: Joi.string().allow("").required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      edc_model: Joi.string().allow(""),

      terminal_serial_no: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      aggregator_id: Joi.number().required(),

      store_id: Joi.number().required(),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static EdcDeviceAddResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.EdcDevice().required(),
    });
  }

  static EdcDeviceDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.EdcDevice().required(),
    });
  }

  static EdcUpdateRequest() {
    return Joi.object({
      edc_device_serial_no: Joi.string().allow(""),

      edc_model: Joi.string().allow(""),

      device_tag: Joi.string().allow("").allow(null),

      merchant_store_pos_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      aggregator_id: Joi.number(),

      store_id: Joi.number(),
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
      success: Joi.boolean().required(),

      items: Joi.array().items(PaymentModel.EdcDevice()).required(),

      page: PaymentModel.Page().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      vpa: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      bqr_image: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      success: Joi.boolean().required(),

      amount: Joi.number().allow(null),

      vpa: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      currency: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      virtual_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      vpa: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      redirect_url: Joi.string().allow("").allow(null),

      retry: Joi.boolean().required(),

      success: Joi.boolean().allow(null),

      status: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").required(),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),

      request_type: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      data: PaymentModel.LinkStatus().required(),
    });
  }
}
module.exports = PaymentModel;
